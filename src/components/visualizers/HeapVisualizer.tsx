import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface HeapVisualizerProps {
  data: number[];
  step: Step;
}

export const HeapVisualizer: React.FC<HeapVisualizerProps> = ({ data, step }) => {
  const custom = step.customVisual;
  const rawHeap = custom?.heap || step.heap || data;
  const heap: (number | string)[] = Array.isArray(rawHeap) ? rawHeap : [];
  const stream = custom?.stream || custom?.inputArray;
  const activeStreamIdx = custom?.streamIndex !== undefined ? custom.streamIndex : custom?.activeStreamIdx;
  const heapLabel = custom?.heapLabel || (step.narration?.toLowerCase().includes('min-heap') ? 'MIN-HEAP · ROOT IS MIN' : 'HEAP (COMPLETE BINARY TREE)');
  const twoHeaps = custom?.twoHeaps; // { maxHeap: number[], minHeap: number[], median: number }
  const mergedList = custom?.mergedList; // for Merge K Sorted Lists
  const verdict = custom?.verdict;

  const nodeSize = 52;

  // Step-level operation classifier with dedicated colors
  const getCurrentOp = () => {
    const narr = (step.narration || '').toLowerCase();
    const hasSwap = custom?.swap || (step.highlights && step.highlights.length === 2 && (narr.includes('swap') || narr.includes('sift')));
    
    if (hasSwap) {
      return {
        type: 'swap',
        label: 'SWAP / SIFT',
        icon: '⇄',
        color: '#f59e0b',
        border: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.24)',
        glow: '0 0 16px rgba(245, 158, 11, 0.5)'
      };
    }
    if (narr.includes('pop') || narr.includes('evict') || narr.includes('extract') || narr.includes('remove') || narr.includes('discard') || narr.includes('exhausted') || narr.includes('dequeue') || narr.includes('poll')) {
      return {
        type: 'pop',
        label: 'POP / EXTRACT',
        icon: '−',
        color: '#ef4444',
        border: '#ef4444',
        bg: 'rgba(239, 68, 68, 0.24)',
        glow: '0 0 16px rgba(239, 68, 68, 0.5)'
      };
    }
    if (narr.includes('push') || narr.includes('admit') || narr.includes('insert') || narr.includes('append') || narr.includes('add') || narr.includes('enqueue') || narr.includes('heapify up') || narr.includes('offer') || narr.includes('re-insert')) {
      return {
        type: 'push',
        label: 'PUSH / INSERT',
        icon: '+',
        color: '#10b981',
        border: '#10b981',
        bg: 'rgba(16, 185, 129, 0.24)',
        glow: '0 0 16px rgba(16, 185, 129, 0.5)'
      };
    }
    if (narr.includes('idle') || narr.includes('cooling') || narr.includes('cooldown')) {
      return {
        type: 'idle',
        label: 'COOLDOWN / IDLE',
        icon: '⏳',
        color: '#a855f7',
        border: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.24)',
        glow: '0 0 16px rgba(168, 85, 247, 0.5)'
      };
    }
    if (narr.includes('frame') || narr.includes('formula') || narr.includes('skeleton') || narr.includes('ties') || narr.includes('answer = max')) {
      return {
        type: 'formula',
        label: 'MATH FORMULA',
        icon: '∑',
        color: '#38bdf8',
        border: '#38bdf8',
        bg: 'rgba(56, 189, 248, 0.24)',
        glow: '0 0 16px rgba(56, 189, 248, 0.5)'
      };
    }
    if (narr.includes('gold') || narr.includes('silver') || narr.includes('bronze') || narr.includes('medal') || narr.includes('rank')) {
      return {
        type: 'rank',
        label: 'RANK / MEDAL',
        icon: '🥇',
        color: '#f59e0b',
        border: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.24)',
        glow: '0 0 16px rgba(245, 158, 11, 0.5)'
      };
    }
    if (narr.includes('peek') || narr.includes('median') || narr.includes('found') || narr.includes('kth') || narr.includes('result') || narr.includes('answer') || narr.includes('calculate')) {
      return {
        type: 'peek',
        label: 'PEEK / RESULT',
        icon: '★',
        color: '#38bdf8',
        border: '#38bdf8',
        bg: 'rgba(56, 189, 248, 0.24)',
        glow: '0 0 16px rgba(56, 189, 248, 0.5)'
      };
    }
    if (narr.includes('compare') || narr.includes('examining') || narr.includes('examine') || narr.includes('check') || narr.includes('stream') || narr.includes('pointer')) {
      return {
        type: 'compare',
        label: 'COMPARE',
        icon: '⌕',
        color: '#a855f7',
        border: '#a855f7',
        bg: 'rgba(168, 85, 247, 0.24)',
        glow: '0 0 16px rgba(168, 85, 247, 0.5)'
      };
    }
    return {
      type: 'default',
      label: 'HEAP STATE',
      icon: '◆',
      color: 'var(--accent)',
      border: 'var(--border-ink)',
      bg: 'rgba(255, 255, 255, 0.04)',
      glow: 'none'
    };
  };

  const currentOp = getCurrentOp();

  // Calculate layout positions for complete binary tree of N elements
  const calculateNodePositions = (elements: (number | string)[], rootX: number = 240, startY: number = 44) => {
    const positions: Array<{ x: number; y: number; level: number; parentIdx: number | null }> = [];
    const levelSpacing = 68;

    for (let i = 0; i < elements.length; i++) {
      if (i === 0) {
        positions.push({ x: rootX, y: startY, level: 0, parentIdx: null });
        continue;
      }

      const parentIdx = Math.floor((i - 1) / 2);
      const isLeft = i % 2 === 1;
      const level = Math.floor(Math.log2(i + 1));
      
      const baseOffset = level === 1 ? 92 : level === 2 ? 46 : 24;
      const parentPos = positions[parentIdx];
      const x = isLeft ? parentPos.x - baseOffset : parentPos.x + baseOffset;
      const y = startY + level * levelSpacing;

      positions.push({ x, y, level, parentIdx });
    }

    return positions;
  };

  // Helper to determine operation color scheme based on step context and narration
  const getOpTheme = (isHighlighted: boolean, isSwap: boolean, isRoot: boolean) => {
    if (isSwap) {
      return {
        type: 'swap',
        border: '#f59e0b',
        bg: 'rgba(245, 158, 11, 0.28)',
        text: '#ffffff',
        glow: '0 0 20px rgba(245, 158, 11, 0.55)',
        branchColor: '#f59e0b',
        badgeBg: '#f59e0b',
        badgeColor: '#000000',
        badgeLabel: 'SWAP'
      };
    }

    if (isHighlighted) {
      if (currentOp.type === 'pop') {
        return {
          type: 'pop',
          border: '#ef4444',
          bg: 'rgba(239, 68, 68, 0.28)',
          text: '#ffffff',
          glow: '0 0 22px rgba(239, 68, 68, 0.6)',
          branchColor: '#ef4444',
          badgeBg: '#ef4444',
          badgeColor: '#ffffff',
          badgeLabel: 'POP'
        };
      }
      if (currentOp.type === 'push') {
        return {
          type: 'push',
          border: '#10b981',
          bg: 'rgba(16, 185, 129, 0.28)',
          text: '#ffffff',
          glow: '0 0 22px rgba(16, 185, 129, 0.6)',
          branchColor: '#10b981',
          badgeBg: '#10b981',
          badgeColor: '#000000',
          badgeLabel: 'PUSH'
        };
      }
      if (currentOp.type === 'peek' || currentOp.type === 'formula') {
        return {
          type: 'peek',
          border: '#38bdf8',
          bg: 'rgba(56, 189, 248, 0.28)',
          text: '#ffffff',
          glow: '0 0 22px rgba(56, 189, 248, 0.6)',
          branchColor: '#38bdf8',
          badgeBg: '#38bdf8',
          badgeColor: '#000000',
          badgeLabel: 'PEEK'
        };
      }
      if (currentOp.type === 'rank') {
        return {
          type: 'rank',
          border: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.28)',
          text: '#ffffff',
          glow: '0 0 22px rgba(245, 158, 11, 0.6)',
          branchColor: '#f59e0b',
          badgeBg: '#f59e0b',
          badgeColor: '#000000',
          badgeLabel: 'MEDAL'
        };
      }
      if (currentOp.type === 'compare' || currentOp.type === 'idle') {
        return {
          type: 'compare',
          border: '#a855f7',
          bg: 'rgba(168, 85, 247, 0.28)',
          text: '#ffffff',
          glow: '0 0 22px rgba(168, 85, 247, 0.6)',
          branchColor: '#a855f7',
          badgeBg: '#a855f7',
          badgeColor: '#ffffff',
          badgeLabel: 'COMPARE'
        };
      }
      return {
        type: 'active',
        border: 'var(--accent)',
        bg: 'rgba(255, 120, 40, 0.28)',
        text: '#ffffff',
        glow: '0 0 20px var(--accent-glow)',
        branchColor: 'var(--accent)',
        badgeBg: 'var(--accent)',
        badgeColor: '#000000',
        badgeLabel: 'ACTIVE'
      };
    }

    if (isRoot) {
      return {
        type: 'root',
        border: 'var(--accent)',
        bg: 'rgba(255, 120, 40, 0.12)',
        text: 'var(--accent)',
        glow: '0 0 12px var(--accent-glow)',
        branchColor: 'var(--accent)',
        badgeBg: 'transparent',
        badgeColor: 'var(--accent)',
        badgeLabel: 'ROOT'
      };
    }

    return {
      type: 'default',
      border: 'var(--border-ink)',
      bg: 'rgba(30, 28, 26, 0.85)',
      text: 'var(--text-ink)',
      glow: '0 2px 8px rgba(0,0,0,0.25)',
      branchColor: 'rgba(255, 255, 255, 0.18)',
      badgeBg: 'transparent',
      badgeColor: 'transparent',
      badgeLabel: ''
    };
  };

  // Render a Single Binary Tree Heap with its SVG connector branches and synchronized node cards
  const renderHeapTree = (elements: (number | string)[], label?: string, highlightIndices?: number[], width: number = 440, height: number = 240) => {
    const nodePositions = calculateNodePositions(elements, width / 2, 44);
    const swapPair = custom?.swap || (step.highlights && step.highlights.length === 2 && (step.narration?.toLowerCase().includes('swap') || step.narration?.toLowerCase().includes('sift')) ? step.highlights : null);

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: '14px 18px',
          borderRadius: '16px',
          backgroundColor: 'rgba(20, 18, 16, 0.55)',
          border: '1.5px solid var(--border-ink)',
          backdropFilter: 'blur(10px)',
          minWidth: `${Math.min(width, 320)}px`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.35)'
        }}
      >
        {label && (
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '10px',
              alignSelf: 'center'
            }}
          >
            {label}
          </div>
        )}

        {/* Tree Canvas Area */}
        <div style={{ position: 'relative', width: `${width}px`, height: `${height}px`, overflow: 'visible' }}>
          
          {/* Root marker diamond pip */}
          {elements.length > 0 && nodePositions[0] && (
            <div
              style={{
                position: 'absolute',
                left: `${nodePositions[0].x}px`,
                top: `${nodePositions[0].y - nodeSize / 2 - 12}px`,
                transform: 'translateX(-50%)',
                color: 'var(--accent)',
                fontSize: '10px',
                fontWeight: 900,
                textShadow: '0 0 8px var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s infinite'
              }}
            >
              ◆
            </div>
          )}

          {/* SVG Branches Layer */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflow: 'visible',
              pointerEvents: 'none'
            }}
          >
            {nodePositions.map((pos, idx) => {
              if (pos.parentIdx === null) return null;
              const parentPos = nodePositions[pos.parentIdx];
              const isChildHighlighted = (highlightIndices || step.highlights || []).includes(idx);
              const isParentHighlighted = (highlightIndices || step.highlights || []).includes(pos.parentIdx);
              const isBranchActive = isChildHighlighted && isParentHighlighted;
              const isComparing = isChildHighlighted || isParentHighlighted;
              const branchTheme = getOpTheme(isChildHighlighted, !!swapPair, false);

              return (
                <line
                  key={`branch-${idx}`}
                  x1={parentPos.x}
                  y1={parentPos.y + nodeSize / 2 - 4}
                  x2={pos.x}
                  y2={pos.y - nodeSize / 2 + 4}
                  stroke={isBranchActive ? branchTheme.border : isComparing ? branchTheme.border : 'rgba(255, 255, 255, 0.18)'}
                  strokeWidth={isBranchActive ? '3.2' : isComparing ? '2.4' : '1.8'}
                  strokeDasharray={isBranchActive ? '5 3' : 'none'}
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    filter: isBranchActive ? `drop-shadow(${branchTheme.glow})` : isComparing ? `drop-shadow(0 0 4px ${branchTheme.border})` : 'none'
                  }}
                />
              );
            })}
          </svg>

          {/* Node Cards Layer */}
          {elements.map((val, idx) => {
            const pos = nodePositions[idx];
            if (!pos) return null;

            const isHighlighted = (highlightIndices || step.highlights || []).includes(idx);
            const isRoot = idx === 0;
            const isSwap1 = swapPair && swapPair[0] === idx;
            const isSwap2 = swapPair && swapPair[1] === idx;
            const isSwap = !!(isSwap1 || isSwap2);
            const swapClass = isSwap1 ? 'swap-box-animate-1' : isSwap2 ? 'swap-box-animate-2' : '';
            const theme = getOpTheme(isHighlighted, isSwap, isRoot);

            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: isSwap || isHighlighted ? 25 : 10
                }}
              >
                {/* Node Box */}
                <div
                  className={`sketch-border visualizer-cell ${swapClass}`}
                  style={{
                    width: `${nodeSize}px`,
                    height: `${nodeSize}px`,
                    borderRadius: '14px',
                    borderColor: theme.border,
                    backgroundColor: theme.bg,
                    color: theme.text,
                    boxShadow: theme.glow,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transform: isHighlighted && !swapClass ? 'scale(1.08)' : undefined,
                    transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <span className="font-hand" style={{ fontSize: '24px', fontWeight: 800 }}>
                    <DialValue value={val} />
                  </span>

                  {isSwap && (
                    <div
                      className="swap-badge-pop"
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-8px',
                        fontSize: '9px',
                        fontWeight: 900,
                        backgroundColor: '#f59e0b',
                        color: '#000',
                        padding: '1px 5px',
                        borderRadius: '6px',
                        boxShadow: '0 0 8px rgba(245, 158, 11, 0.5)'
                      }}
                    >
                      SWAP
                    </div>
                  )}
                </div>

                {/* Index & Root Tag underneath */}
                <span
                  className="font-mono"
                  style={{
                    fontSize: '9.5px',
                    color: isRoot ? 'var(--accent)' : isHighlighted ? theme.border : 'var(--text-mute)',
                    fontWeight: isRoot || isHighlighted ? 800 : 600,
                    marginTop: '3px'
                  }}
                >
                  {isRoot ? 'root [0]' : `[${idx}]`}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Render Merge K Sorted Lists Visualizer
  const renderMergeKLists = () => {
    const lists = custom?.lists || [
      { id: 0, name: 'LIST 0', color: '#3b82f6', items: [1, 4, 7], globalStartIdx: 0, headIdx: 0 },
      { id: 1, name: 'LIST 1', color: '#eab308', items: [2, 5], globalStartIdx: 3, headIdx: 0 },
      { id: 2, name: 'LIST 2', color: '#f87171', items: [3, 6, 8], globalStartIdx: 5, headIdx: 0 }
    ];
    const mergedOutput = custom?.mergedOutput || custom?.mergedList || [];
    const activeMergedIdx = custom?.activeMergedIdx !== undefined ? custom.activeMergedIdx : mergedOutput.length - 1;
    const activeListId = custom?.activeListIdx;
    const hasHeap = custom?.heap && custom.heap.length > 0;

    return (
      <div
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          maxWidth: '1000px'
        }}
      >
        {/* Left Column: Input Lists + Pointers + Merged Output */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            flex: '1 1 500px',
            minWidth: '320px'
          }}
        >
          {/* Grouped Input Lists Container */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            {lists.map((listGroup: any) => {
              const listColor = listGroup.color || '#3b82f6';
              const headIdx = listGroup.headIdx;
              const isListActive = activeListId === listGroup.id;

              return (
                <div
                  key={listGroup.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '8px 10px 12px 10px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(20, 18, 16, 0.55)',
                    border: `1.5px solid ${isListActive ? listColor : 'var(--border-ink)'}`,
                    borderTop: `3px solid ${listColor}`,
                    boxShadow: isListActive ? `0 0 16px ${listColor}33` : '0 4px 16px rgba(0,0,0,0.25)',
                    position: 'relative'
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      letterSpacing: '0.08em',
                      color: listColor,
                      marginBottom: '8px',
                      textTransform: 'uppercase'
                    }}
                  >
                    {listGroup.name || `LIST ${listGroup.id}`}
                  </span>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {listGroup.items.map((val: any, itemIdx: number) => {
                      const globalIdx = (listGroup.globalStartIdx || 0) + itemIdx;
                      const isHead = headIdx === itemIdx;
                      const isProcessed = headIdx !== undefined && headIdx > itemIdx;
                      const isSelected = isHead && isListActive;

                      return (
                        <div key={itemIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          <div
                            className={`sketch-border visualizer-cell ${isSelected ? 'animate-item-active' : ''}`}
                            style={{
                              width: '46px',
                              height: '46px',
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderColor: isSelected ? 'var(--accent)' : isHead ? listColor : isProcessed ? 'var(--border-ink-soft)' : 'var(--border-ink)',
                              backgroundColor: isSelected ? 'rgba(255, 120, 40, 0.28)' : isHead ? `${listColor}18` : isProcessed ? 'rgba(0,0,0,0.35)' : 'var(--bg-surface)',
                              color: isSelected ? '#ffffff' : isProcessed ? 'var(--text-mute)' : 'var(--text-ink)',
                              boxShadow: isSelected ? '0 0 16px var(--accent-glow)' : isHead ? `0 0 10px ${listColor}33` : 'none',
                              opacity: isProcessed ? 0.38 : 1,
                              transform: isSelected ? 'scale(1.08)' : 'none',
                              transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                          >
                            <span className="font-hand" style={{ fontSize: '20px', fontWeight: 800 }}>
                              <DialValue value={val} />
                            </span>
                          </div>

                          <span className="font-mono" style={{ fontSize: '9px', color: 'var(--text-mute)', marginTop: '3px' }}>
                            [{globalIdx}]
                          </span>

                          <div style={{ height: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2px' }}>
                            {isHead && (
                              <div
                                className="font-mono stack-arrow-bounce"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  color: isSelected ? 'var(--accent)' : listColor,
                                  fontWeight: 800,
                                  fontSize: '11px',
                                  lineHeight: 1
                                }}
                              >
                                <span>L{listGroup.id}</span>
                                <span style={{ fontSize: '9px', marginTop: '1px' }}>▲</span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Merged Output Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-mute)',
                marginBottom: '10px'
              }}
            >
              MERGED OUTPUT
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', minHeight: '52px' }}>
              {mergedOutput.length === 0 ? (
                <div
                  className="font-mono"
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-mute)',
                    fontStyle: 'italic',
                    padding: '12px 18px',
                    border: '1px dashed var(--border-ink)',
                    borderRadius: '10px'
                  }}
                >
                  Empty output list...
                </div>
              ) : (
                mergedOutput.map((outVal: any, oIdx: number) => {
                  const isNewest = oIdx === activeMergedIdx;
                  return (
                    <div key={oIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div
                        className={`sketch-border visualizer-cell ${isNewest ? 'animate-item-enter' : ''}`}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: isNewest ? '#10b981' : 'var(--border-ink)',
                          backgroundColor: isNewest ? 'rgba(16, 185, 129, 0.28)' : 'var(--bg-surface)',
                          color: isNewest ? '#ffffff' : 'var(--text-ink)',
                          boxShadow: isNewest ? '0 0 18px rgba(16, 185, 129, 0.5)' : '0 2px 8px rgba(0,0,0,0.2)',
                          transform: isNewest ? 'scale(1.08)' : 'none',
                          transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      >
                        <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                          <DialValue value={outVal} />
                        </span>
                      </div>
                      <span className="font-mono" style={{ fontSize: '9px', color: isNewest ? '#10b981' : 'var(--text-mute)', fontWeight: isNewest ? 800 : 500, marginTop: '3px' }}>
                        [{oIdx}]
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Min-Heap of Heads (Optimized Mode) */}
        {hasHeap && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 auto' }}>
            {renderHeapTree(custom.heap, custom.heapLabel || 'MIN-HEAP OF HEADS', undefined, 280, 200)}
          </div>
        )}
      </div>
    );
  };

  // Render Relative Ranks Visualizer (LeetCode #506)
  const renderRelativeRanks = () => {
    const scores = custom?.scores || [10, 3, 8, 9, 4];
    const activeScoreIdx = custom?.activeScoreIdx;
    const ranks = custom?.ranks || ['', '', '', '', ''];
    const heapPairs = custom?.heapPairs || [];

    const getMedalBadge = (rankVal: string) => {
      if (!rankVal) return null;
      if (rankVal === 'Gold Medal' || rankVal === '1') {
        return {
          icon: '🥇',
          label: 'Gold Medal',
          border: '#f59e0b',
          bg: 'rgba(245, 158, 11, 0.22)',
          text: '#fbbf24',
          glow: '0 0 16px rgba(245, 158, 11, 0.45)'
        };
      }
      if (rankVal === 'Silver Medal' || rankVal === '2') {
        return {
          icon: '🥈',
          label: 'Silver Medal',
          border: '#94a3b8',
          bg: 'rgba(203, 213, 225, 0.2)',
          text: '#f1f5f9',
          glow: '0 0 16px rgba(203, 213, 225, 0.4)'
        };
      }
      if (rankVal === 'Bronze Medal' || rankVal === '3') {
        return {
          icon: '🥉',
          label: 'Bronze Medal',
          border: '#d97706',
          bg: 'rgba(217, 119, 6, 0.22)',
          text: '#fdba74',
          glow: '0 0 16px rgba(217, 119, 6, 0.45)'
        };
      }
      return {
        icon: '#',
        label: `Rank ${rankVal}`,
        border: 'var(--border-ink)',
        bg: 'rgba(40, 36, 32, 0.7)',
        text: 'var(--text-ink)',
        glow: 'none'
      };
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', width: '100%', maxWidth: '900px' }}>
        {/* Top: Athlete Scores Array */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            ATHLETE SCORES (INPUT ARRAY)
          </div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {scores.map((sc: number, sIdx: number) => {
              const isActive = activeScoreIdx === sIdx;
              const hasRank = ranks[sIdx] && ranks[sIdx] !== '';
              const medal = getMedalBadge(ranks[sIdx]);

              return (
                <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className={`sketch-border visualizer-cell ${isActive ? 'animate-item-active' : ''}`}
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: isActive ? 'var(--accent)' : medal ? medal.border : 'var(--border-ink)',
                      backgroundColor: isActive ? 'rgba(255, 120, 40, 0.25)' : medal ? medal.bg : 'var(--bg-surface)',
                      color: isActive ? '#ffffff' : medal ? medal.text : 'var(--text-ink)',
                      boxShadow: isActive ? '0 0 16px var(--accent-glow)' : medal ? medal.glow : 'none',
                      transform: isActive ? 'scale(1.08)' : 'none',
                      transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    <span className="font-hand" style={{ fontSize: '24px', fontWeight: 800 }}>
                      <DialValue value={sc} />
                    </span>
                  </div>
                  <span className="font-mono" style={{ fontSize: '9.5px', color: isActive ? 'var(--accent)' : 'var(--text-mute)', fontWeight: isActive ? 800 : 500, marginTop: '4px' }}>
                    Athlete [{sIdx}]
                  </span>

                  {/* Active pointer underneath */}
                  <div style={{ height: '16px', display: 'flex', alignItems: 'center' }}>
                    {isActive && (
                      <span className="font-mono stack-arrow-bounce" style={{ color: 'var(--accent)', fontSize: '11px', fontWeight: 900 }}>
                        ▲
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle: Max-Heap of (Score, Athlete ID) Pairs if present */}
        {heapPairs && heapPairs.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(20, 18, 16, 0.65)',
              border: '1.5px solid var(--border-ink)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              width: '100%',
              maxWidth: '680px'
            }}
          >
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              MAX-HEAP · (SCORE, ATHLETE ID)
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {heapPairs.map((pair: any, pIdx: number) => {
                const isRoot = pIdx === 0;
                return (
                  <div
                    key={pIdx}
                    className="sketch-border"
                    style={{
                      padding: '8px 14px',
                      borderRadius: '10px',
                      borderColor: isRoot ? 'var(--accent)' : 'var(--border-ink)',
                      backgroundColor: isRoot ? 'rgba(255, 120, 40, 0.22)' : 'var(--bg-surface)',
                      color: isRoot ? '#ffffff' : 'var(--text-ink)',
                      boxShadow: isRoot ? '0 0 14px var(--accent-glow)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span className="font-hand" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent)' }}>
                      {pair.score}
                    </span>
                    <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-mute)', backgroundColor: 'rgba(0,0,0,0.35)', padding: '2px 6px', borderRadius: '6px' }}>
                      Athlete #{pair.athleteIdx}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom: Result Array with Clean Badges and Medals */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '16px 20px',
            borderRadius: '16px',
            backgroundColor: 'rgba(20, 18, 16, 0.65)',
            border: '1.5px solid var(--border-ink)',
            width: '100%',
            maxWidth: '750px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)'
          }}
        >
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
            ASSIGNED RANKS (OUTPUT ARRAY)
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {ranks.map((rankVal: string, rIdx: number) => {
              const medal = getMedalBadge(rankVal);
              const isFilled = rankVal !== '';

              return (
                <div key={rIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className={`sketch-border ${isFilled ? 'animate-item-enter' : ''}`}
                    style={{
                      minWidth: '108px',
                      height: '52px',
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px 10px',
                      borderColor: medal ? medal.border : 'var(--border-ink)',
                      backgroundColor: medal ? medal.bg : 'rgba(0,0,0,0.25)',
                      color: medal ? medal.text : 'var(--text-mute)',
                      boxShadow: medal ? medal.glow : 'none',
                      borderStyle: isFilled ? 'solid' : 'dashed',
                      transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    {isFilled ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '18px' }}>{medal?.icon}</span>
                        <span className="font-mono" style={{ fontSize: '12px', fontWeight: 800 }}>
                          {medal?.label}
                        </span>
                      </div>
                    ) : (
                      <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontStyle: 'italic' }}>
                        pending...
                      </span>
                    )}
                  </div>

                  <span className="font-mono" style={{ fontSize: '9.5px', color: isFilled ? (medal?.border || 'var(--accent)') : 'var(--text-mute)', fontWeight: isFilled ? 700 : 500, marginTop: '4px' }}>
                    res[{rIdx}] · Ath {rIdx}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // Render Task Scheduler Visualizer (Greedy & Formula Modes)
  const renderTaskScheduler = () => {
    const tasks = custom?.tasks || ['A', 'A', 'A', 'B', 'B', 'B'];
    const n = custom?.n !== undefined ? custom.n : 2;
    const isFormula = custom?.type === 'task-scheduler-formula';

    if (isFormula) {
      const frames = custom?.frames || [
        { label: 'FRAME 1 (GAP n+1 = 3)', slots: ['A', 'B', 'idle'] },
        { label: 'FRAME 2 (GAP n+1 = 3)', slots: ['A', 'B', 'idle'] },
        { label: 'FINAL ROW (+ 2 TIES)', slots: ['A', 'B'] }
      ];

      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', width: '100%', maxWidth: '900px' }}>
          {/* Top: Input Tasks Array */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              INPUT TASKS (COOLDOWN n = {n})
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {tasks.map((task: string, tIdx: number) => (
                <div key={tIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className="sketch-border"
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: 'var(--border-ink)',
                      backgroundColor: 'var(--bg-surface)',
                      color: 'var(--text-ink)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
                    }}
                  >
                    <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                      {task}
                    </span>
                  </div>
                  <span className="font-mono" style={{ fontSize: '9px', color: 'var(--text-mute)', marginTop: '2px' }}>
                    [{tIdx}]
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Frame Skeleton Matrix */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(20, 18, 16, 0.65)',
              border: '1.5px solid var(--border-ink)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.35)',
              width: '100%',
              maxWidth: '700px'
            }}
          >
            <div className="font-mono" style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              FRAME SKELETON · (maxFreq - 1) × (n + 1) + ties
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%', alignItems: 'center' }}>
              {frames.map((frame: any, fIdx: number) => {
                const isFinalRow = fIdx === frames.length - 1;
                return (
                  <div key={fIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    {/* Frame Bracket Header */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        color: isFinalRow ? '#38bdf8' : 'var(--accent)',
                        marginBottom: '6px'
                      }}
                    >
                      {frame.label}
                    </div>

                    {/* Frame Slots */}
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      {frame.slots.map((slot: string, sIdx: number) => {
                        const isIdle = slot === 'idle' || slot === '.';
                        return (
                          <div
                            key={sIdx}
                            className="sketch-border"
                            style={{
                              width: '48px',
                              height: '48px',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderColor: isIdle ? 'var(--border-ink)' : isFinalRow ? '#38bdf8' : 'var(--accent)',
                              backgroundColor: isIdle ? 'rgba(80, 80, 80, 0.15)' : isFinalRow ? 'rgba(56, 189, 248, 0.22)' : 'rgba(255, 120, 40, 0.22)',
                              color: isIdle ? 'var(--text-mute)' : '#ffffff',
                              boxShadow: isIdle ? 'none' : isFinalRow ? '0 0 14px rgba(56, 189, 248, 0.4)' : '0 0 14px var(--accent-glow)',
                              borderStyle: isIdle ? 'dashed' : 'solid'
                            }}
                          >
                            <span className="font-hand" style={{ fontSize: isIdle ? '14px' : '22px', fontWeight: 800 }}>
                              {isIdle ? 'idle' : slot}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    // Greedy Max-Heap + Cooldown Queue simulation
    const heapTasks = custom?.heapTasks || [];
    const cooldownQueue = custom?.cooldownQueue || [];
    const timeline = custom?.timeline || [];
    const activeSlot = custom?.activeSlot;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', width: '100%', maxWidth: '900px' }}>
        {/* Top: Input Tasks Array */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            INPUT TASKS (COOLDOWN n = {n})
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {tasks.map((task: string, tIdx: number) => (
              <div key={tIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  className="sketch-border"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: 'var(--border-ink)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-ink)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.25)'
                  }}
                >
                  <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                    {task}
                  </span>
                </div>
                <span className="font-mono" style={{ fontSize: '9px', color: 'var(--text-mute)', marginTop: '2px' }}>
                  [{tIdx}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Middle: Max-Heap and Cooldown Queue side-by-side */}
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', width: '100%' }}>
          {/* Max-Heap Container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 18px',
              borderRadius: '14px',
              backgroundColor: 'rgba(20, 18, 16, 0.6)',
              border: '1.5px solid var(--border-ink)',
              minWidth: '240px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
            }}
          >
            <div className="font-mono" style={{ fontSize: '10.5px', color: 'var(--accent)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              MAX-HEAP · REMAINING COUNTS
            </div>

            <div style={{ display: 'flex', gap: '10px', minHeight: '48px', alignItems: 'center' }}>
              {heapTasks.length === 0 ? (
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontStyle: 'italic' }}>
                  Heap is empty
                </span>
              ) : (
                heapTasks.map((item: any, hIdx: number) => {
                  const isTop = hIdx === 0;
                  return (
                    <div
                      key={hIdx}
                      className="sketch-border"
                      style={{
                        padding: '6px 12px',
                        borderRadius: '10px',
                        borderColor: isTop ? 'var(--accent)' : 'var(--border-ink)',
                        backgroundColor: isTop ? 'rgba(255, 120, 40, 0.22)' : 'var(--bg-surface)',
                        color: isTop ? '#ffffff' : 'var(--text-ink)',
                        boxShadow: isTop ? '0 0 14px var(--accent-glow)' : 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span className="font-hand" style={{ fontSize: '20px', fontWeight: 800, color: 'var(--accent)' }}>
                        {item.task}
                      </span>
                      <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700, backgroundColor: 'rgba(0,0,0,0.35)', padding: '2px 6px', borderRadius: '6px' }}>
                        ×{item.count}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Cooldown Wait Queue */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 18px',
              borderRadius: '14px',
              backgroundColor: 'rgba(20, 18, 16, 0.6)',
              border: '1.5px solid var(--border-ink)',
              minWidth: '240px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
            }}
          >
            <div className="font-mono" style={{ fontSize: '10.5px', color: '#38bdf8', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              COOLDOWN QUEUE · READY TIME
            </div>

            <div style={{ display: 'flex', gap: '8px', minHeight: '48px', alignItems: 'center' }}>
              {cooldownQueue.length === 0 ? (
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontStyle: 'italic' }}>
                  Queue is empty
                </span>
              ) : (
                cooldownQueue.map((item: any, qIdx: number) => (
                  <div
                    key={qIdx}
                    className="sketch-border"
                    style={{
                      padding: '6px 10px',
                      borderRadius: '10px',
                      borderColor: '#38bdf8',
                      backgroundColor: 'rgba(56, 189, 248, 0.18)',
                      color: '#ffffff',
                      boxShadow: '0 0 12px rgba(56, 189, 248, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '2px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <span className="font-hand" style={{ fontSize: '18px', fontWeight: 800, color: '#38bdf8' }}>
                        {item.task}
                      </span>
                      <span className="font-mono" style={{ fontSize: '10px', fontWeight: 700 }}>
                        ×{item.count}
                      </span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '9px', color: '#93c5fd' }}>
                      ready @ t={item.readyTime}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom: CPU Execution Schedule Timeline */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '14px 20px',
            borderRadius: '16px',
            backgroundColor: 'rgba(20, 18, 16, 0.65)',
            border: '1.5px solid var(--border-ink)',
            width: '100%',
            maxWidth: '750px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.35)'
          }}
        >
          <div className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
            CPU EXECUTION SCHEDULE
          </div>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', minHeight: '52px' }}>
            {timeline.length === 0 ? (
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontStyle: 'italic', padding: '10px' }}>
                Schedule is empty · beginning simulation...
              </span>
            ) : (
              timeline.map((slotTask: string, sIdx: number) => {
                const isActive = activeSlot === sIdx;
                const isIdle = slotTask === 'idle';

                return (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      className={`sketch-border visualizer-cell ${isActive ? 'animate-item-active' : ''}`}
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: isActive ? 'var(--accent)' : isIdle ? 'var(--border-ink)' : 'var(--border-ink)',
                        backgroundColor: isActive ? (isIdle ? 'rgba(168, 85, 247, 0.28)' : 'rgba(255, 120, 40, 0.28)') : isIdle ? 'rgba(80, 80, 80, 0.2)' : 'var(--bg-surface)',
                        color: isActive ? '#ffffff' : isIdle ? 'var(--text-mute)' : 'var(--text-ink)',
                        boxShadow: isActive ? (isIdle ? '0 0 16px rgba(168, 85, 247, 0.5)' : '0 0 16px var(--accent-glow)') : 'none',
                        borderStyle: isIdle ? 'dashed' : 'solid',
                        transform: isActive ? 'scale(1.08)' : 'none',
                        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <span className="font-hand" style={{ fontSize: isIdle ? '14px' : '22px', fontWeight: 800 }}>
                        {slotTask}
                      </span>
                    </div>

                    <span className="font-mono" style={{ fontSize: '9px', color: isActive ? 'var(--accent)' : 'var(--text-mute)', fontWeight: isActive ? 800 : 500, marginTop: '3px' }}>
                      [{sIdx}]
                    </span>

                    {/* Active slot pointer */}
                    <div style={{ height: '16px', display: 'flex', alignItems: 'center' }}>
                      {isActive && (
                        <span className="font-mono stack-arrow-bounce" style={{ color: 'var(--accent)', fontSize: '10px', fontWeight: 900 }}>
                          ▲
                        </span>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };

  const swapPair = custom?.swap || (step.highlights && step.highlights.length === 2 && (step.narration?.toLowerCase().includes('swap') || step.narration?.toLowerCase().includes('sift')) ? step.highlights : null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 10px',
        width: '100%',
        gap: '20px'
      }}
    >
      {/* OPERATION STATUS BAR & COLOR PALETTE LEGEND */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          width: '100%',
          maxWidth: '860px',
          padding: '8px 16px',
          borderRadius: '14px',
          backgroundColor: 'rgba(20, 18, 16, 0.65)',
          border: `1.5px solid ${currentOp.border}`,
          boxShadow: currentOp.glow !== 'none' ? currentOp.glow : '0 2px 10px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Left: Active Operation Pill */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: '160px' }}>
          <div
            className="font-mono"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '8px',
              backgroundColor: currentOp.bg,
              border: `1px solid ${currentOp.border}`,
              color: currentOp.color,
              fontWeight: 800,
              fontSize: '11px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase'
            }}
          >
            <span>{currentOp.icon}</span>
            <span>{currentOp.label}</span>
          </div>
        </div>

        {/* Right: Operation Color Legend */}
        <div
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '10px',
            color: 'var(--text-mute)',
            fontWeight: 600,
            flexWrap: 'wrap'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#10b981' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', boxShadow: '0 0 6px rgba(16, 185, 129, 0.6)' }}></span>
            Push / Insert
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ef4444' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block', boxShadow: '0 0 6px rgba(239, 68, 68, 0.6)' }}></span>
            Pop / Evict
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#f59e0b', display: 'inline-block', boxShadow: '0 0 6px rgba(245, 158, 11, 0.6)' }}></span>
            Swap / Sift
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#38bdf8' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#38bdf8', display: 'inline-block', boxShadow: '0 0 6px rgba(56, 189, 248, 0.6)' }}></span>
            Peek / Result
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#a855f7' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#a855f7', display: 'inline-block', boxShadow: '0 0 6px rgba(168, 85, 247, 0.6)' }}></span>
            Compare / Idle
          </span>
        </div>
      </div>

      {/* SPECIAL CASE 0: TASK SCHEDULER */}
      {custom?.type === 'task-scheduler' || custom?.type === 'task-scheduler-formula' ? (
        renderTaskScheduler()
      ) : custom?.type === 'relative-ranks' || custom?.ranks ? (
        /* SPECIAL CASE 0.2: RELATIVE RANKS */
        renderRelativeRanks()
      ) : custom?.lists ? (
        /* SPECIAL CASE 0.5: MERGE K SORTED LISTS */
        renderMergeKLists()
      ) : custom?.sortedSoFar ? (
        /* SPECIAL CASE 0.7: BRUTE FORCE MEDIAN (STREAM + SORTED SO FAR) */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
          {/* Input Stream Box */}
          {stream && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 18px',
                borderRadius: '16px',
                backgroundColor: 'rgba(20, 18, 16, 0.55)',
                border: '1.5px solid var(--border-ink)'
              }}
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                {stream.map((val: any, sIdx: number) => {
                  const isCurrent = activeStreamIdx === sIdx;
                  const theme = isCurrent ? getOpTheme(true, false, false) : getOpTheme(false, false, false);
                  return (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div
                        className="sketch-border visualizer-cell"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: theme.border,
                          backgroundColor: theme.bg,
                          color: theme.text,
                          boxShadow: isCurrent ? theme.glow : 'none',
                          transform: isCurrent ? 'scale(1.08)' : 'none',
                          transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      >
                        <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                          <DialValue value={val} />
                        </span>
                      </div>
                      <span className="font-mono" style={{ fontSize: '9px', color: isCurrent ? theme.border : 'var(--text-mute)', marginTop: '3px' }}>
                        [{sIdx}]
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Sorted So Far Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(20, 18, 16, 0.55)',
              border: '1.5px solid var(--border-ink)'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-mute)',
                marginBottom: '10px'
              }}
            >
              SORTED SO FAR
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              {custom.sortedSoFar.map((val: any, sIdx: number) => {
                const isMedian = (custom.medianIndices || step.highlights || []).includes(sIdx);
                const theme = isMedian ? getOpTheme(true, false, false) : getOpTheme(false, false, false);
                return (
                  <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      className={`sketch-border visualizer-cell ${isMedian ? 'animate-item-active' : ''}`}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: theme.border,
                        backgroundColor: theme.bg,
                        color: theme.text,
                        boxShadow: isMedian ? theme.glow : 'none',
                        transform: isMedian ? 'scale(1.08)' : 'none',
                        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                        <DialValue value={val} />
                      </span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '9px', color: isMedian ? theme.border : 'var(--text-mute)', fontWeight: isMedian ? 800 : 500, marginTop: '3px' }}>
                      [{sIdx}]
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : twoHeaps ? (
        /* CASE 1: TWIN HEAPS (Median from Data Stream) */
        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          {/* Left: Input Stream if present */}
          {stream && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '12px 16px',
                borderRadius: '16px',
                backgroundColor: 'rgba(20, 18, 16, 0.55)',
                border: '1.5px solid var(--border-ink)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.35)'
              }}
            >
              <div style={{ display: 'flex', gap: '8px' }}>
                {stream.map((val: any, sIdx: number) => {
                  const isCurrent = activeStreamIdx === sIdx;
                  const theme = isCurrent ? getOpTheme(true, false, false) : getOpTheme(false, false, false);
                  return (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div
                        className="sketch-border visualizer-cell"
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: theme.border,
                          backgroundColor: theme.bg,
                          color: theme.text,
                          boxShadow: isCurrent ? theme.glow : 'none',
                          transform: isCurrent ? 'scale(1.08)' : 'none',
                          transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      >
                        <span className="font-hand" style={{ fontSize: '20px', fontWeight: 800 }}>
                          <DialValue value={val} />
                        </span>
                      </div>
                      <span className="font-mono" style={{ fontSize: '9px', color: isCurrent ? theme.border : 'var(--text-mute)', marginTop: '3px' }}>
                        [{sIdx}]
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Right: Two Heaps */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {renderHeapTree(twoHeaps.maxHeap || [], 'LOWER HALF · MAX-HEAP', twoHeaps.highlightMax, 240, 190)}
            {renderHeapTree(twoHeaps.minHeap || [], 'UPPER HALF · MIN-HEAP', twoHeaps.highlightMin, 200, 190)}
          </div>
        </div>
      ) : stream ? (
        /* CASE 2: STREAM / TOP-K HEAP (Kth Largest Element, K Closest, etc.) */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center', width: '100%' }}>
          
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            {/* Stream / Input Array Box */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '14px 20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(20, 18, 16, 0.55)',
                border: '1.5px solid var(--border-ink)',
                boxShadow: '0 4px 18px rgba(0,0,0,0.35)'
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-mute)',
                  marginBottom: '10px'
                }}
              >
                INPUT STREAM
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                {stream.map((val: any, sIdx: number) => {
                  const isCurrentStream = activeStreamIdx === sIdx;
                  const theme = isCurrentStream ? getOpTheme(true, false, false) : getOpTheme(false, false, false);

                  return (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ height: '18px', display: 'flex', alignItems: 'center' }}>
                        {isCurrentStream && (
                          <span className="font-mono stack-arrow-bounce" style={{ color: theme.border, fontSize: '13px' }}>
                            ▼
                          </span>
                        )}
                      </div>

                      <div
                        className="sketch-border"
                        style={{
                          width: '48px',
                          height: '48px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '12px',
                          borderColor: theme.border,
                          backgroundColor: theme.bg,
                          color: theme.text,
                          boxShadow: isCurrentStream ? theme.glow : 'none',
                          transform: isCurrentStream ? 'scale(1.12)' : 'none',
                          transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      >
                        <span className="font-hand" style={{ fontSize: '22px', fontWeight: 800 }}>
                          <DialValue value={val} />
                        </span>
                      </div>
                      <span className="font-mono" style={{ fontSize: '9.5px', color: isCurrentStream ? theme.border : 'var(--text-mute)', fontWeight: isCurrentStream ? 800 : 500, marginTop: '4px' }}>
                        [{sIdx}]
                      </span>
                    </div>
                  );
                })}
              </div>

              {verdict && (
                <div
                  className="font-mono"
                  style={{
                    marginTop: '12px',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: verdict.toLowerCase().includes('admit') ? '#10b981' : verdict.toLowerCase().includes('skip') ? 'var(--text-mute)' : 'var(--accent)',
                    backgroundColor: 'rgba(0,0,0,0.35)',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-ink)'
                  }}
                >
                  {verdict}
                </div>
              )}
            </div>

            {/* Min-Heap Binary Tree Container */}
            {renderHeapTree(heap, heapLabel, undefined, 340, 210)}
          </div>

        </div>
      ) : (
        /* CASE 3: STANDARD BINARY HEAP TREE + SYNCHRONIZED ARRAY FORM */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', alignItems: 'center', width: '100%' }}>
          
          {/* Binary Tree Graph */}
          {renderHeapTree(heap, heapLabel, step.highlights, 460, 240)}

          {/* Synchronized Array Form */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '14px 22px',
              borderRadius: '16px',
              backgroundColor: 'rgba(20, 18, 16, 0.55)',
              border: '1.5px solid var(--border-ink)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 18px rgba(0,0,0,0.35)'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--text-mute)',
                marginBottom: '10px'
              }}
            >
              ARRAY FORM · CHILD(i) = 2i+1, 2i+2
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {heap.map((val, idx) => {
                const isHighlighted = (step.highlights || []).includes(idx);
                const isRoot = idx === 0;
                const isSwap = swapPair && (swapPair[0] === idx || swapPair[1] === idx);
                const theme = getOpTheme(isHighlighted, !!isSwap, isRoot);

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      className="sketch-border visualizer-cell"
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: theme.border,
                        backgroundColor: theme.bg,
                        color: theme.text,
                        boxShadow: theme.glow,
                        transform: isHighlighted || isSwap ? 'scale(1.08)' : 'none',
                        transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <span className="font-hand" style={{ fontSize: '24px', fontWeight: 800 }}>
                        <DialValue value={val} />
                      </span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '9.5px', color: isHighlighted || isRoot ? theme.border : 'var(--text-mute)', fontWeight: isHighlighted || isRoot ? 800 : 600, marginTop: '3px' }}>
                      {isRoot ? 'root [0]' : `[${idx}]`}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* MERGED LINKED LIST RESULT (for Merge K Sorted Lists) */}
      {mergedList && mergedList.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '12px 18px',
            borderRadius: '14px',
            backgroundColor: 'rgba(20, 18, 16, 0.55)',
            border: '1.5px solid var(--border-ink)'
          }}
        >
          <div className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)', textTransform: 'uppercase', marginBottom: '8px', fontWeight: 700 }}>
            MERGED OUTPUT CHAIN
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {mergedList.map((nodeVal: any, mIdx: number) => (
              <React.Fragment key={mIdx}>
                <div
                  className="sketch-border"
                  style={{
                    padding: '6px 14px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(16, 185, 129, 0.25)',
                    borderColor: '#10b981',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '14px',
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)'
                  }}
                >
                  {nodeVal}
                </div>
                {mIdx < mergedList.length - 1 && (
                  <span style={{ color: '#10b981', fontWeight: 800 }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}

      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '4px',
            padding: '8px 22px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '8px',
            boxShadow: '0 0 12px rgba(46, 213, 115, 0.25)'
          }}
        >
          <span>✓</span>
          <span>{step.best.label}</span>
        </div>
      )}
    </div>
  );
};
