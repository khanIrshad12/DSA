import React from 'react';
import { Step } from '../../types';

interface TreeVisualizerProps {
  step: Step;
}

export const TreeVisualizer: React.FC<TreeVisualizerProps> = ({ step }) => {
  const activeNode = step.tree?.activeNode;
  const visited = step.tree?.visitedNodes || [];
  const returned = step.tree?.returnedValues || {};
  const callStack = step.tree?.callStack || [];
  const queue = step.queue || step.tree?.queue || null;
  const orderBadges = step.tree?.orderBadges || {};
  const paramBadges = step.tree?.paramBadges || {};
  const activeEdges = step.tree?.activeEdges || [];
  const custom = step.customVisual || {};
  const levelResults = custom.levelResults || custom.levelOutput || step.tree?.results || null;
  const title = step.tree?.title || custom.title || 'Binary Tree';

  // Default 7-node complete binary tree as featured in BFS Intro
  const defaultNodes = [
    { id: 1, x: 170, y: 38, left: 2, right: 3 },
    { id: 2, x: 95, y: 108, left: 4, right: 5 },
    { id: 3, x: 245, y: 108, left: 6, right: 7 },
    { id: 4, x: 60, y: 178, left: null, right: null },
    { id: 5, x: 130, y: 178, left: null, right: null },
    { id: 6, x: 210, y: 178, left: null, right: null },
    { id: 7, x: 280, y: 178, left: null, right: null }
  ];

  const defaultEdges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 }
  ];

  const nodes = step.tree?.nodes || defaultNodes;
  const edges = step.tree?.edges || defaultEdges;

  // Helper map for node coords
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const isEdgeActive = (from: number | string, to: number | string) => {
    return activeEdges.some(([u, v]) => (u === from && v === to) || (u === to && v === from));
  };

  // Identify queued node IDs for frontier glow highlights
  const queuedIds = new Set<number | string>();
  let hasIndexSub = false;
  if (Array.isArray(queue)) {
    queue.forEach((item: any) => {
      if (typeof item === 'object' && item !== null) {
        if (item.id !== undefined) queuedIds.add(item.id);
        if (item.val !== undefined) {
          const num = Number(item.val);
          if (!isNaN(num)) queuedIds.add(num);
          queuedIds.add(String(item.val));
        }
        if (item.sub && (String(item.sub).includes('i=') || String(item.sub).includes('idx') || String(item.sub).includes('index'))) {
          hasIndexSub = true;
        }
      } else {
        const num = Number(item);
        if (!isNaN(num)) queuedIds.add(num);
        queuedIds.add(String(item));
      }
    });
  }

  const queueHeader = (step.tree as any)?.queueTitle || custom.queueTitle || (hasIndexSub ? 'QUEUE (NODE, INDEX)' : 'QUEUE (FIFO)');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 10px',
        width: '100%',
        maxWidth: '850px',
        margin: '0 auto',
        gap: '16px'
      }}
    >
      {/* Visual Header / Banner if present */}
      {custom.banner && (
        <div
          className="sketch-border"
          style={{
            padding: '6px 16px',
            backgroundColor: 'var(--accent-soft)',
            borderColor: 'var(--accent)',
            color: 'var(--accent)',
            fontSize: '12px',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
          }}
        >
          {custom.banner}
        </div>
      )}

      {/* Main Visual Workspace */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          gap: '16px'
        }}
      >
        {/* Binary Tree Canvas */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--text-mute)',
              marginBottom: '4px'
            }}
          >
            {title}
          </div>

          <svg width="340" height="225" style={{ overflow: 'visible' }}>
            {/* Tree branch links */}
            {edges.map((edge, idx) => {
              const u = nodeMap.get(edge.from);
              const v = nodeMap.get(edge.to);
              if (!u || !v) return null;
              const active = isEdgeActive(edge.from, edge.to);

              return (
                <line
                  key={idx}
                  x1={u.x}
                  y1={u.y}
                  x2={v.x}
                  y2={v.y}
                  stroke={active ? 'var(--accent)' : 'rgba(255, 255, 255, 0.25)'}
                  strokeWidth={active ? 3.5 : 2}
                  style={{ transition: 'all 0.25s ease' }}
                />
              );
            })}

            {/* Nodes */}
            {nodes.map(n => {
              const isActive = activeNode === n.id;
              const isVisited = visited.includes(n.id);
              const isQueued = !isActive && !isVisited && (queuedIds.has(n.id) || (n.label && queuedIds.has(n.label)) || ((n as any).val && queuedIds.has((n as any).val)));
              const returnVal = returned[n.id];
              const badge = orderBadges[n.id];
              const isRightmost = (n as any).isRightmost;

              let strokeColor = 'rgba(255, 255, 255, 0.7)';
              let fillColor = 'var(--bg-surface)';
              let textColor = '#ffffff';

              if (isActive) {
                strokeColor = '#f97316';
                fillColor = '#7c2d12';
                textColor = '#ffffff';
              } else if (isVisited) {
                strokeColor = 'var(--color-green)';
                fillColor = 'rgba(16, 185, 129, 0.22)';
                textColor = '#ffffff';
              } else if (isQueued) {
                strokeColor = '#eab308';
                fillColor = 'rgba(234, 179, 8, 0.18)';
                textColor = '#ffffff';
              }

              if (isRightmost) {
                strokeColor = '#38bdf8';
                fillColor = 'rgba(56, 189, 248, 0.2)';
                textColor = '#38bdf8';
              }

              return (
                <g key={n.id}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="19"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2"
                    style={{
                      filter: isActive
                        ? 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.65))'
                        : isRightmost
                        ? 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))'
                        : isVisited
                        ? 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.25))'
                        : isQueued
                        ? 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.55))'
                        : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  />
                  <text
                    x={n.x}
                    y={n.y + 5}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="14"
                    fontWeight="700"
                    className="font-mono"
                  >
                    {(n as any).label || (n as any).val || n.id}
                  </text>

                  {/* Parameter / Index Badge (e.g. pos=1, d=0, col=2) */}
                  {paramBadges[n.id] !== undefined && (() => {
                    const pText = String(paramBadges[n.id]);
                    const isDepth = pText.startsWith('d=') || pText.startsWith('lvl=');
                    const isPos = pText.startsWith('pos=') || pText.startsWith('idx=');
                    const pWidth = Math.max(34, pText.length * 6.8 + 10);
                    return (
                      <g>
                        <rect
                          x={n.x - pWidth / 2}
                          y={n.y - 34}
                          width={pWidth}
                          height="16"
                          rx="4"
                          fill="var(--bg-surface-elevated)"
                          stroke={isDepth ? '#38bdf8' : isPos ? 'var(--color-purple)' : 'var(--accent)'}
                          strokeWidth="1.5"
                        />
                        <text
                          x={n.x}
                          y={n.y - 22}
                          textAnchor="middle"
                          fill={isDepth ? '#38bdf8' : isPos ? 'var(--color-purple)' : 'var(--accent)'}
                          fontSize="9"
                          fontWeight="700"
                          className="font-mono"
                        >
                          {pText}
                        </text>
                      </g>
                    );
                  })()}

                  {/* Visit Order / Level Badge (e.g. [1], [2] or L0, L1, L2, or i=0) */}
                  {badge !== undefined && (() => {
                    const bText = String(badge);
                    const isCentered = bText.startsWith('i=') || bText.includes('=');
                    const bWidth = Math.max(isCentered ? 28 : 16, bText.length * 6.8 + 6);
                    const badgeColor = isActive
                      ? '#f97316'
                      : isVisited
                      ? 'var(--color-green)'
                      : isQueued
                      ? '#eab308'
                      : 'var(--color-green)';

                    const bx = isCentered ? n.x - bWidth / 2 : n.x + 9;
                    const by = isCentered ? n.y - 34 : n.y - 21;

                    return (
                      <g>
                        <rect
                          x={bx}
                          y={by}
                          width={bWidth}
                          height="15"
                          rx="3"
                          fill="var(--bg-surface)"
                          stroke={badgeColor}
                          strokeWidth="1.5"
                        />
                        <text
                          x={bx + bWidth / 2}
                          y={by + 11}
                          textAnchor="middle"
                          fill={badgeColor}
                          fontSize="9"
                          fontWeight="800"
                          className="font-mono"
                        >
                          {bText}
                        </text>
                      </g>
                    );
                  })()}

                  {/* Return Value */}
                  {returnVal !== undefined && (
                    <g>
                      <circle
                        cx={n.x - 18}
                        cy={n.y - 12}
                        r="11"
                        fill="var(--bg-surface-elevated)"
                        stroke="var(--color-green)"
                        strokeWidth="1.5"
                      />
                      <text
                        x={n.x - 18}
                        y={n.y - 8}
                        textAnchor="middle"
                        fill="var(--color-green)"
                        fontSize="10"
                        fontWeight="800"
                        className="font-mono"
                      >
                        {returnVal}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Horizontal FIFO Queue (for BFS) located directly under the tree */}
        {queue !== null && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '6px' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-mute)',
                marginBottom: '6px',
                fontWeight: 600
              }}
            >
              {queueHeader}
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              {/* Front Indicator */}
              <div
                className="font-mono"
                style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>front</span>
                <span>→</span>
              </div>

              {/* Queue Track Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minWidth: '120px',
                  minHeight: '38px',
                  padding: '4px 10px',
                  backgroundColor: 'rgba(24, 24, 27, 0.7)',
                  border: '1.5px solid rgba(255, 255, 255, 0.6)',
                  borderRadius: '8px',
                  gap: '6px',
                  justifyContent: queue.length === 0 ? 'center' : 'flex-start',
                  boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.4)'
                }}
              >
                {queue.length === 0 ? (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-faint)',
                      fontStyle: 'italic',
                      padding: '0 8px'
                    }}
                  >
                    (empty)
                  </span>
                ) : (
                  queue.map((item: any, idx: number) => {
                    const itemVal = typeof item === 'object' ? (item.val ?? item.id ?? JSON.stringify(item)) : String(item);
                    const itemSub = typeof item === 'object' ? item.sub : null;
                    const cleanVal = itemVal.replace(/^Node\s+/i, '');
                    const isFront = idx === 0;

                    return (
                      <div
                        key={idx}
                        className="font-mono"
                        style={{
                          minWidth: itemSub ? '34px' : '28px',
                          minHeight: '28px',
                          padding: itemSub ? '2px 6px' : '0 6px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--bg-surface-elevated)',
                          border: isFront ? '1.5px solid var(--accent)' : '1.5px solid rgba(255, 255, 255, 0.7)',
                          color: isFront ? 'var(--accent)' : '#ffffff',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: isFront ? '0 0 6px var(--accent-glow)' : 'none',
                          transition: 'all 0.15s ease'
                        }}
                      >
                        <span style={{ fontSize: '13px', fontWeight: 700, lineHeight: 1.1 }}>{cleanVal}</span>
                        {itemSub && (
                          <span style={{ fontSize: '8.5px', color: isFront ? 'var(--accent)' : 'var(--text-mute)', fontWeight: 600, marginTop: '1px' }}>
                            {itemSub}
                          </span>
                        )}
                      </div>
                    );
                  })
                )}
              </div>

              {/* Back Indicator */}
              <div
                className="font-mono"
                style={{
                  fontSize: '11px',
                  color: '#38bdf8',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>←</span>
                <span>back</span>
              </div>
            </div>
          </div>
        )}

        {/* Call Stack Component for DFS (if stack is present and queue is not) */}
        {queue === null && callStack.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '140px' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-mute)',
                marginBottom: '8px'
              }}
            >
              Call Stack ↓
            </div>

            <div
              style={{
                width: '140px',
                minHeight: '180px',
                borderLeft: '2px solid rgba(255, 255, 255, 0.4)',
                borderRight: '2px solid rgba(255, 255, 255, 0.4)',
                borderBottom: '2px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '0 0 10px 10px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column-reverse',
                gap: '6px',
                backgroundColor: 'rgba(26, 23, 20, 0.4)'
              }}
            >
              {callStack.length === 0 ? (
                <div style={{ textAlign: 'center', color: 'var(--text-faint)', fontSize: '11px', padding: '30px 0' }}>
                  (empty)
                </div>
              ) : (
                callStack.map((frame, idx) => {
                  const isTop = idx === callStack.length - 1;
                  const isReturned = frame.includes('(returned)');
                  return (
                    <div
                      key={idx}
                      className="sketch-border-soft font-mono"
                      style={{
                        padding: '6px',
                        backgroundColor: isReturned
                          ? 'transparent'
                          : isTop
                          ? 'var(--accent-soft)'
                          : 'var(--bg-surface-elevated)',
                        borderColor: isReturned
                          ? 'var(--border-ink)'
                          : isTop
                          ? 'var(--accent)'
                          : 'var(--border-ink)',
                        color: isReturned
                          ? 'var(--text-mute)'
                          : isTop
                          ? 'var(--accent)'
                          : 'var(--text-base)',
                        fontSize: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        boxShadow: isTop ? '0 0 10px var(--accent-glow)' : 'none',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <span>{frame}</span>
                      {isTop && (
                        <span style={{ fontSize: '9px', color: 'var(--accent)', fontWeight: 'bold' }}>
                          ACTIVE
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Level Results / Batched Output Table if present */}
        {levelResults && Array.isArray(levelResults) && levelResults.length > 0 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '4px',
              width: '100%',
              maxWidth: '360px'
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-mute)',
                marginBottom: '4px',
                fontWeight: 600
              }}
            >
              LEVEL OUTPUT
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                justifyContent: 'center',
                padding: '6px 12px',
                backgroundColor: 'rgba(24, 24, 27, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px'
              }}
            >
              {levelResults.map((lvl: any, idx: number) => (
                <div
                  key={idx}
                  className="font-mono"
                  style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--accent-soft)',
                    color: 'var(--accent)',
                    fontWeight: 600
                  }}
                >
                  {typeof lvl === 'object' ? JSON.stringify(lvl) : String(lvl)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
