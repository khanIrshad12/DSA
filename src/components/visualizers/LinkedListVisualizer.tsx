import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface LinkedListVisualizerProps {
  data: number[];
  step: Step;
}

export const LinkedListVisualizer: React.FC<LinkedListVisualizerProps> = ({ data, step }) => {
  const custom = step.customVisual;
  const multiLists = custom?.multiLists;
  const bypass = custom?.bypassArrow; // { from: number, to: number }
  const cycle = custom?.cycle; // { from: number, to: number }
  const isDoubly = custom?.doublyLinked;
  const resultList = custom?.resultList;
  const flipped = step.linkedList?.flippedArrows || custom?.flippedArrows || [];
  const activeNode = step.linkedList?.curr;
  const prevNode = step.linkedList?.prev;

  const nodeWidth = 60;
  const nodeHeight = 56;
  const nodeGap = 42;

  // Render an individual Linked List line with its nodes, top SVG arcs, and bottom cycle loop
  const renderSingleList = (
    nodes: number[],
    listLabel?: string,
    accentColor: string = 'var(--accent)',
    containerBorder?: string,
    pointersOverride?: { name: string; index: number; color?: string }[],
    hasCycle?: { from: number; to: number }
  ) => {
    const nodeCount = nodes.length;
    const showNull = !hasCycle; // don't show null if the list cycles back
    const totalSlots = showNull ? nodeCount + 1 : nodeCount;
    const listPixelWidth = totalSlots * nodeWidth + (totalSlots - 1) * nodeGap;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          padding: containerBorder ? '14px 22px 18px 22px' : '8px 12px 14px 12px',
          borderRadius: '16px',
          border: containerBorder ? `1.5px solid ${containerBorder}` : 'none',
          backgroundColor: containerBorder ? 'rgba(24, 20, 18, 0.45)' : 'transparent',
          backdropFilter: containerBorder ? 'blur(8px)' : 'none',
          boxShadow: containerBorder ? '0 8px 24px rgba(0,0,0,0.25)' : 'none'
        }}
      >
        {listLabel && (
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: containerBorder || 'var(--text-mute)',
              marginBottom: '10px',
              alignSelf: 'flex-start'
            }}
          >
            {listLabel}
          </div>
        )}

        {/* Master relative container wrapping both top SVG arcs, nodes row, and bottom cycle arc */}
        <div style={{ position: 'relative', width: `${listPixelWidth}px` }}>
          
          {/* TOP SVG ARCS LAYER */}
          <div style={{ position: 'relative', width: '100%', height: '52px' }}>
            <svg
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'visible'
              }}
            >
              <defs>
                <marker id={`arrow-fwd-${listLabel || 'main'}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--text-ink)" />
                </marker>
                <marker id={`arrow-acc-${listLabel || 'main'}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--accent)" />
                </marker>
                <marker id={`arrow-cyan-${listLabel || 'main'}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                  <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="#00d2ff" />
                </marker>
                <marker id={`arrow-flip-${listLabel || 'main'}`} markerWidth="7" markerHeight="7" refX="1" refY="3.5" orient="auto-start-reverse">
                  <path d="M6,0.5 L0,3.5 L6,6.5 Z" fill="var(--accent)" />
                </marker>
              </defs>

              {nodes.map((_, idx) => {
                const startX = idx * (nodeWidth + nodeGap) + nodeWidth / 2;
                const nextX = (idx + 1) * (nodeWidth + nodeGap) + nodeWidth / 2;

                // 1. Bypass surgery jump arc
                if (bypass && bypass.from === idx && bypass.to > idx + 1) {
                  const targetX = bypass.to * (nodeWidth + nodeGap) + nodeWidth / 2;
                  return (
                    <g key={`bypassed-${idx}`}>
                      {/* Faded obsolete link */}
                      <path
                        d={`M ${startX + 18} 44 C ${startX + 35} 20, ${nextX - 35} 20, ${nextX - 18} 44`}
                        fill="none"
                        stroke="rgba(255, 107, 0, 0.3)"
                        strokeWidth="2"
                        strokeDasharray="3 3"
                      />
                      {/* High-elevation bypass arc */}
                      <path
                        d={`M ${startX + 18} 40 C ${startX + 40} -14, ${targetX - 40} -14, ${targetX - 18} 40`}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.5"
                        strokeDasharray="5 3"
                        markerEnd={`url(#arrow-acc-${listLabel || 'main'})`}
                      />
                    </g>
                  );
                }

                // 2. Backward flipped arc (Reversal)
                const isFlipped = flipped.includes(idx);
                if (isFlipped) {
                  if (idx === 0) {
                    return (
                      <g key={idx}>
                        <path
                          d={`M ${startX - 18} 42 C ${startX - 30} 24, ${startX - 42} 20, ${startX - 50} 16`}
                          fill="none"
                          stroke="var(--accent)"
                          strokeWidth="2.5"
                          markerEnd={`url(#arrow-flip-${listLabel || 'main'})`}
                        />
                        <text x={startX - 64} y={16} fill="var(--accent)" fontSize="13" fontWeight="800">
                          Ø
                        </text>
                      </g>
                    );
                  }
                  const prevX = (idx - 1) * (nodeWidth + nodeGap) + nodeWidth / 2;
                  return (
                    <path
                      key={idx}
                      d={`M ${startX - 16} 42 C ${startX - 32} 10, ${prevX + 32} 10, ${prevX + 16} 42`}
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2.5"
                      markerEnd={`url(#arrow-flip-${listLabel || 'main'})`}
                    />
                  );
                }

                // 3. Normal forward arc
                // If it's the last node and list cycles, do NOT draw forward arrow to null
                if (idx === nodeCount - 1 && hasCycle) {
                  return null;
                }

                return (
                  <path
                    key={idx}
                    d={`M ${startX + 18} 42 C ${startX + 32} 10, ${nextX - 32} 10, ${nextX - 18} 42`}
                    fill="none"
                    stroke={isDoubly ? '#00d2ff' : 'var(--text-ink)'}
                    strokeWidth="2"
                    markerEnd={isDoubly ? `url(#arrow-cyan-${listLabel || 'main'})` : `url(#arrow-fwd-${listLabel || 'main'})`}
                  />
                );
              })}
            </svg>
          </div>

          {/* NODES ROW */}
          <div style={{ display: 'flex', gap: `${nodeGap}px`, alignItems: 'center', position: 'relative' }}>
            {(() => {
              const narrationLower = (step.narration || '').toLowerCase();
              const isSwapStep = narrationLower.includes('swap') || narrationLower.includes('trade') || narrationLower.includes('physically');
              const isPopStep = narrationLower.includes('remove') || narrationLower.includes('delete') || narrationLower.includes('bypass');
              const isPushStep = narrationLower.includes('insert') || narrationLower.includes('create') || narrationLower.includes('add') || narrationLower.includes('append');

              const swapPair = custom?.swap || (step.highlights && step.highlights.length === 2 && isSwapStep ? step.highlights : null);
              
              return nodes.map((val, idx) => {
                const isCurr = activeNode === idx;
                const isPrev = prevNode === idx;
                const isFlippedNode = flipped.includes(idx);
                const isBypassedNode = (bypass && bypass.from < idx && bypass.to > idx) || (isPopStep && (activeNode === idx || step.highlights?.includes(idx)));
                const isSwap1 = swapPair && swapPair[0] === idx;
                const isSwap2 = swapPair && swapPair[1] === idx;
                const isNewNode = isPushStep && (idx === nodes.length - 1 || activeNode === idx);

                // Check pointers matching this node
                const effectivePointers = pointersOverride || step.pointers || [];
                const matchedPointers = effectivePointers.filter(p => p.index === idx);

                let animClass = '';
                if (isSwap1) animClass = 'swap-box-animate-1';
                else if (isSwap2) animClass = 'swap-box-animate-2';
                else if (isBypassedNode) animClass = 'animate-item-remove';
                else if (isNewNode) animClass = 'animate-item-enter';
                else if (isCurr || matchedPointers.length > 0) animClass = 'animate-item-active';

                let borderColor = 'var(--border-ink)';
                let bgColor = 'var(--bg-surface)';
                let textColor = 'var(--text-ink)';

                if (isSwap1 || isSwap2) {
                  borderColor = 'var(--accent)';
                  bgColor = 'var(--accent-soft)';
                  textColor = 'var(--accent)';
                } else if (isBypassedNode) {
                  borderColor = 'var(--color-red)';
                  bgColor = 'rgba(248, 113, 113, 0.2)';
                  textColor = 'var(--color-red)';
                } else if (matchedPointers.length > 0) {
                  const pCol = matchedPointers[0].color;
                  if (pCol === 'green') {
                    borderColor = 'var(--color-green)';
                    bgColor = 'var(--color-green-soft)';
                    textColor = 'var(--color-green)';
                  } else if (pCol === 'purple' || pCol === 'cyan') {
                    borderColor = '#00d2ff';
                    bgColor = 'rgba(0, 210, 255, 0.12)';
                    textColor = '#00d2ff';
                  } else {
                    borderColor = 'var(--accent)';
                    bgColor = 'var(--accent-soft)';
                    textColor = 'var(--accent)';
                  }
                } else if (isCurr) {
                  borderColor = 'var(--accent)';
                  bgColor = 'var(--accent-soft)';
                  textColor = 'var(--accent)';
                } else if (isPrev) {
                  borderColor = '#00d2ff';
                  bgColor = 'rgba(0, 210, 255, 0.12)';
                  textColor = '#00d2ff';
                } else if (isFlippedNode) {
                  borderColor = 'var(--border-ink-soft)';
                }

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    {isSwap1 && (
                      <div
                        className="swap-badge-pop font-mono"
                        style={{
                          position: 'absolute',
                          top: '-24px',
                          left: `${nodeWidth + nodeGap / 2}px`,
                          transform: 'translateX(-50%)',
                          backgroundColor: 'var(--accent)',
                          color: '#ffffff',
                          fontSize: '10px',
                          fontWeight: 800,
                          padding: '2px 8px',
                          borderRadius: '999px',
                          boxShadow: '0 4px 14px var(--accent-glow)',
                          zIndex: 50,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          pointerEvents: 'none'
                        }}
                      >
                        <span>⇄</span>
                        <span>SWAP</span>
                      </div>
                    )}
                    {isBypassedNode && (
                      <div
                        className="swap-badge-pop font-mono"
                        style={{
                          position: 'absolute',
                          top: '-24px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'var(--color-red)',
                          color: '#ffffff',
                          fontSize: '9px',
                          fontWeight: 800,
                          padding: '2px 6px',
                          borderRadius: '6px',
                          boxShadow: '0 4px 14px rgba(248, 113, 113, 0.5)',
                          zIndex: 50,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          pointerEvents: 'none'
                        }}
                      >
                        <span>✕ REMOVE</span>
                      </div>
                    )}
                    {isNewNode && !isSwap1 && !isSwap2 && !isBypassedNode && (
                      <div
                        className="swap-badge-pop font-mono"
                        style={{
                          position: 'absolute',
                          top: '-24px',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'var(--color-green)',
                          color: '#000000',
                          fontSize: '9px',
                          fontWeight: 800,
                          padding: '2px 6px',
                          borderRadius: '6px',
                          boxShadow: '0 4px 14px rgba(52, 211, 153, 0.5)',
                          zIndex: 50,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '3px',
                          pointerEvents: 'none'
                        }}
                      >
                        <span>+ NODE</span>
                      </div>
                    )}
                    <div
                      className={`sketch-border visualizer-cell ${animClass}`}
                      style={{
                        width: `${nodeWidth}px`,
                        height: `${nodeHeight}px`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderColor: borderColor,
                        backgroundColor: bgColor,
                        color: textColor,
                        boxShadow: isSwap1 || isSwap2 ? '0 0 20px var(--accent-glow)' : matchedPointers.length > 0 || isCurr ? '0 0 16px var(--accent-glow)' : '0 2px 8px rgba(0,0,0,0.2)',
                        borderRadius: '10px'
                      }}
                    >
                      <span className="font-hand" style={{ fontSize: '26px', fontWeight: 800 }}>
                        <DialValue value={val} />
                      </span>
                    </div>

                  <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)', marginTop: '4px' }}>
                    [{idx}]
                  </span>

                  {/* Pointer indicators below node */}
                  <div style={{ minHeight: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2px' }}>
                    {matchedPointers.map((p, pIdx) => {
                      const colorHex = p.color === 'green' ? 'var(--color-green)' : p.color === 'purple' ? '#a855f7' : p.color === 'cyan' ? '#00d2ff' : 'var(--accent)';
                      return (
                        <div key={pIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: colorHex }}>
                          <span className="stack-arrow-bounce" style={{ fontSize: '10px', lineHeight: 1 }}>
                            ▲
                          </span>
                          <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                            {p.name}
                          </span>
                        </div>
                      );
                    })}
                    {matchedPointers.length === 0 && isPrev && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#00d2ff' }}>
                        <span className="stack-arrow-bounce" style={{ fontSize: '10px', lineHeight: 1 }}>
                          ▲
                        </span>
                        <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                          prev
                        </span>
                      </div>
                    )}
                    {matchedPointers.length === 0 && isCurr && (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                        <span className="stack-arrow-bounce" style={{ fontSize: '10px', lineHeight: 1 }}>
                          ▲
                        </span>
                        <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                          curr
                        </span>
                      </div>
                    )}
                    {isBypassedNode && (
                      <span className="font-mono" style={{ fontSize: '9px', color: 'var(--accent)', fontWeight: 700 }}>
                        (skipped)
                      </span>
                    )}
                  </div>
                </div>
              );
            });
          })()}

          {/* Terminal Null Sign Ø (if list does not cycle) */}
            {showNull && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100px' }}>
                <div
                  style={{
                    width: `${nodeWidth}px`,
                    height: `${nodeHeight}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-mute)',
                    fontSize: '22px',
                    fontWeight: 800
                  }}
                >
                  Ø
                </div>
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)', marginTop: '4px' }}>
                  null
                </span>
              </div>
            )}
          </div>

          {/* BOTTOM SVG CYCLE LAYER (Loop-back arc underneath nodes) */}
          {hasCycle && (
            <div style={{ position: 'relative', width: '100%', height: '56px', marginTop: '6px' }}>
              <svg
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  overflow: 'visible'
                }}
              >
                <defs>
                  <marker id={`arrow-cycle-${listLabel || 'main'}`} markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="M0,0.5 L6,3.5 L0,6.5 Z" fill="var(--accent)" />
                  </marker>
                </defs>
                {(() => {
                  const fromX = hasCycle.from * (nodeWidth + nodeGap) + nodeWidth / 2;
                  const toX = hasCycle.to * (nodeWidth + nodeGap) + nodeWidth / 2;
                  const midX = (fromX + toX) / 2;
                  return (
                    <g>
                      {/* Deep bottom loop curve from last node curving underneath to destination node */}
                      <path
                        d={`M ${fromX} 4 C ${fromX + 30} 55, ${toX - 30} 55, ${toX} 10`}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="2.5"
                        strokeDasharray="5 3"
                        markerEnd={`url(#arrow-cycle-${listLabel || 'main'})`}
                      />
                      <rect
                        x={midX - 52}
                        y={36}
                        width="104"
                        height="18"
                        rx="4"
                        fill="var(--bg-canvas)"
                        stroke="var(--accent)"
                        strokeWidth="1"
                      />
                      <text
                        x={midX}
                        y={49}
                        fill="var(--accent)"
                        fontSize="9"
                        fontWeight="800"
                        fontFamily="monospace"
                        textAnchor="middle"
                        letterSpacing="0.06em"
                      >
                        CYCLE → POS [{hasCycle.to}]
                      </text>
                    </g>
                  );
                })()}
              </svg>
            </div>
          )}

        </div>
      </div>
    );
  };

  // Render LRU Cache special visualization
  const renderLRUCache = (lru: any) => {
    const { capacity = 2, entries = [], opLabel, scanIndex, doublyList, hashMap } = lru;
    
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          width: '100%',
          maxWidth: '680px'
        }}
      >
        {/* LRU Top Status Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '10px 18px',
            borderRadius: '12px',
            backgroundColor: 'rgba(24, 20, 18, 0.6)',
            border: '1.5px solid var(--border-ink)',
            backdropFilter: 'blur(8px)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-mute)', letterSpacing: '0.08em' }}>
              CAPACITY:
            </span>
            <span
              className="font-mono"
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: entries.length >= capacity ? 'var(--accent)' : 'var(--color-green)',
                backgroundColor: 'rgba(255, 107, 0, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid var(--accent-border)'
              }}
            >
              {entries.length} / {capacity}
            </span>
          </div>

          {opLabel && (
            <div
              className="font-mono"
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: opLabel.includes('EVICT') ? 'var(--color-red)' : opLabel.includes('GET') ? '#00d2ff' : 'var(--accent)',
                backgroundColor: opLabel.includes('EVICT') ? 'rgba(248, 113, 113, 0.15)' : 'rgba(0, 210, 255, 0.12)',
                padding: '3px 12px',
                borderRadius: '6px',
                border: `1px solid ${opLabel.includes('EVICT') ? 'rgba(248, 113, 113, 0.4)' : 'rgba(0, 210, 255, 0.4)'}`
              }}
            >
              {opLabel}
            </div>
          )}
        </div>

        {/* BRUTE FORCE: Array with Timestamp entries & linear scanning */}
        {entries.length > 0 && !doublyList && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              padding: '16px 20px',
              borderRadius: '16px',
              backgroundColor: 'rgba(20, 18, 16, 0.45)',
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
                marginBottom: '16px',
                alignSelf: 'flex-start'
              }}
            >
              CACHE STORAGE ARRAY (LINEAR SCAN O(N))
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {entries.map((entry: any, idx: number) => {
                const isScanning = scanIndex === idx;
                const isEvicting = entry.status === 'evicting';
                const isHit = entry.status === 'hit';
                const isMRU = entry.status === 'mru';
                const isLRU = entry.status === 'lru';

                let borderColor = 'var(--border-ink)';
                let bgColor = 'var(--bg-surface)';
                let glow = 'none';

                if (isEvicting) {
                  borderColor = 'var(--color-red)';
                  bgColor = 'rgba(248, 113, 113, 0.12)';
                  glow = '0 0 16px rgba(248, 113, 113, 0.4)';
                } else if (isHit || isMRU) {
                  borderColor = 'var(--color-green)';
                  bgColor = 'rgba(34, 197, 94, 0.12)';
                  glow = '0 0 16px rgba(34, 197, 94, 0.35)';
                } else if (isScanning) {
                  borderColor = '#00d2ff';
                  bgColor = 'rgba(0, 210, 255, 0.12)';
                  glow = '0 0 16px rgba(0, 210, 255, 0.4)';
                } else if (isLRU) {
                  borderColor = 'var(--accent)';
                  bgColor = 'rgba(255, 107, 0, 0.1)';
                }

                return (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    {/* Top scanning pointer */}
                    <div style={{ height: '24px', display: 'flex', alignItems: 'center' }}>
                      {isScanning && (
                        <div className="font-mono stack-arrow-bounce" style={{ fontSize: '11px', fontWeight: 800, color: '#00d2ff', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span>▼</span>
                          <span>SCAN</span>
                        </div>
                      )}
                      {isEvicting && (
                        <div className="font-mono swap-badge-pop" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-red)' }}>
                          ✕ EVICTING
                        </div>
                      )}
                    </div>

                    {/* Entry Card */}
                    <div
                      className="sketch-border"
                      style={{
                        width: '120px',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        borderColor: borderColor,
                        backgroundColor: bgColor,
                        boxShadow: glow,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', fontWeight: 700 }}>
                          KEY: <strong style={{ color: 'var(--text-ink)', fontSize: '13px' }}>{entry.key}</strong>
                        </span>
                        <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)' }}>
                          [{idx}]
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
                        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)' }}>
                          VAL:
                        </span>
                        <span className="font-hand" style={{ fontSize: '24px', fontWeight: 800, color: 'var(--accent)' }}>
                          <DialValue value={entry.val} />
                        </span>
                      </div>

                      <div style={{ borderTop: '1px dashed var(--border-ink-soft)', paddingTop: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)' }}>
                          ⏱ t={entry.timestamp || 1}
                        </span>
                        {isMRU && (
                          <span className="font-mono" style={{ fontSize: '9px', fontWeight: 800, color: 'var(--color-green)' }}>
                            MRU
                          </span>
                        )}
                        {isLRU && (
                          <span className="font-mono" style={{ fontSize: '9px', fontWeight: 800, color: 'var(--accent)' }}>
                            LRU
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* OPTIMAL: HashMap + Doubly Linked List */}
        {doublyList && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', alignItems: 'center' }}>
            {/* Hash Map Box */}
            {hashMap && (
              <div
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(20, 18, 16, 0.45)',
                  border: '1.5px solid rgba(0, 210, 255, 0.4)'
                }}
              >
                <div className="font-mono" style={{ fontSize: '11px', fontWeight: 800, color: '#00d2ff', letterSpacing: '0.08em', marginBottom: '10px' }}>
                  HASH MAP (O(1) KEY → NODE ADDRESS)
                </div>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                  {Object.entries(hashMap).map(([k, addr]: [string, any], hIdx: number) => (
                    <div
                      key={hIdx}
                      className="sketch-border"
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(0, 210, 255, 0.08)',
                        borderColor: '#00d2ff',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontFamily: 'monospace'
                      }}
                    >
                      <span style={{ color: '#00d2ff', fontWeight: 800 }}>key {k}</span>
                      <span style={{ color: 'var(--text-mute)' }}>→</span>
                      <span style={{ color: 'var(--text-ink)', fontWeight: 700 }}>{addr}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Doubly Linked List Box */}
            <div
              style={{
                width: '100%',
                padding: '16px 20px',
                borderRadius: '16px',
                backgroundColor: 'rgba(20, 18, 16, 0.45)',
                border: '1.5px solid var(--accent-border)'
              }}
            >
              <div className="font-mono" style={{ fontSize: '11px', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: '16px' }}>
                DOUBLY LINKED LIST (O(1) INSERT AT HEAD / REMOVE FROM TAIL)
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Dummy Head */}
                <div
                  className="sketch-border"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'var(--border-ink)',
                    color: 'var(--text-mute)',
                    fontSize: '12px',
                    fontWeight: 800,
                    fontFamily: 'monospace'
                  }}
                >
                  HEAD
                </div>

                <span style={{ color: 'var(--accent)', fontSize: '18px', fontWeight: 800 }}>⇄</span>

                {doublyList.map((node: any, nIdx: number) => {
                  const isMRU = nIdx === 0;
                  const isLRU = nIdx === doublyList.length - 1;
                  return (
                    <React.Fragment key={nIdx}>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                        <div
                          className="sketch-border"
                          style={{
                            width: '80px',
                            height: '56px',
                            borderRadius: '10px',
                            borderColor: isMRU ? 'var(--color-green)' : isLRU ? 'var(--accent)' : 'var(--border-ink)',
                            backgroundColor: isMRU ? 'rgba(34, 197, 94, 0.12)' : 'var(--bg-surface)',
                            color: 'var(--text-ink)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: isMRU ? '0 0 16px rgba(34, 197, 94, 0.35)' : '0 2px 8px rgba(0,0,0,0.2)'
                          }}
                        >
                          <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)', fontWeight: 700 }}>
                            {node.key} : {node.val}
                          </span>
                        </div>

                        {/* MRU / LRU tag below */}
                        <div style={{ height: '20px', marginTop: '4px' }}>
                          {isMRU && (
                            <span className="font-mono" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--color-green)' }}>
                              ▲ MRU
                            </span>
                          )}
                          {isLRU && !isMRU && (
                            <span className="font-mono" style={{ fontSize: '10px', fontWeight: 800, color: 'var(--accent)' }}>
                              ▲ LRU
                            </span>
                          )}
                        </div>
                      </div>

                      <span style={{ color: 'var(--accent)', fontSize: '18px', fontWeight: 800 }}>⇄</span>
                    </React.Fragment>
                  );
                })}

                {/* Dummy Tail */}
                <div
                  className="sketch-border"
                  style={{
                    padding: '10px 14px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderColor: 'var(--border-ink)',
                    color: 'var(--text-mute)',
                    fontSize: '12px',
                    fontWeight: 800,
                    fontFamily: 'monospace'
                  }}
                >
                  TAIL
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        width: '100%',
        gap: '28px'
      }}
    >
      {/* If custom LRU Cache visualizer is active */}
      {custom?.lruCache ? (
        renderLRUCache(custom.lruCache)
      ) : multiLists ? (

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center', width: '100%' }}>
          {/* Side-by-side or stacked input lists */}
          <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {multiLists.map((l: any, lIdx: number) => {
              // Extract pointers specific to this list if any
              const listPointers = (step.pointers || []).filter(p => {
                if (lIdx === 0 && (p.name.includes('1') || p.name === 'l1' || p.name === 'p1')) return true;
                if (lIdx === 1 && (p.name.includes('2') || p.name === 'l2' || p.name === 'p2')) return true;
                return false;
              });

              return (
                <div key={lIdx}>
                  {renderSingleList(
                    l.nodes,
                    l.label,
                    l.color || 'var(--accent)',
                    l.color,
                    listPointers.length > 0 ? listPointers : undefined
                  )}
                </div>
              );
            })}
          </div>

          {/* Result List underneath */}
          {resultList && resultList.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '14px' }}>
              {renderSingleList(
                resultList,
                'RESULT LIST',
                'var(--color-green)',
                'rgba(34, 197, 94, 0.45)'
              )}
            </div>
          )}
        </div>
      ) : (
        /* Standard Single List */
        renderSingleList(data, undefined, 'var(--accent)', undefined, step.pointers, cycle)
      )}

      {/* Optional Result List beneath standard single list */}
      {!multiLists && resultList && resultList.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          {renderSingleList(
            resultList,
            'RESULT LIST',
            'var(--color-green)',
            'rgba(34, 197, 94, 0.45)'
          )}
        </div>
      )}

      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '8px',
            padding: '8px 20px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '13px',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            borderRadius: '8px'
          }}
        >
          <span>✓</span>
          <span>{step.best.label}</span>
        </div>
      )}
    </div>
  );
};
