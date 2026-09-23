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
  const orderBadges = step.tree?.orderBadges || {};
  const paramBadges = step.tree?.paramBadges || {};
  const activeEdges = step.tree?.activeEdges || [];

  // Default 6-node binary tree as featured in DFS Intro
  const defaultNodes = [
    { id: 1, x: 170, y: 45, left: 2, right: 3 },
    { id: 2, x: 95, y: 125, left: 4, right: 5 },
    { id: 3, x: 245, y: 125, left: null, right: 6 },
    { id: 4, x: 55, y: 205, left: null, right: null },
    { id: 5, x: 135, y: 205, left: null, right: null },
    { id: 6, x: 285, y: 205, left: null, right: null }
  ];

  const defaultEdges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 }
  ];

  const nodes = step.tree?.nodes || defaultNodes;
  const edges = step.tree?.edges || defaultEdges;

  // Helper map for node coords
  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const isEdgeActive = (from: number | string, to: number | string) => {
    return activeEdges.some(([u, v]) => (u === from && v === to) || (u === to && v === from));
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: '40px',
        padding: '20px 10px',
        width: '100%',
        flexWrap: 'wrap'
      }}
    >
      {/* Binary Tree Canvas */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-mute)', marginBottom: '8px' }}>
          Binary Tree
        </div>

        <svg width="340" height="260" style={{ overflow: 'visible' }}>
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
                stroke={active ? 'var(--accent)' : 'rgba(255, 255, 255, 0.2)'}
                strokeWidth={active ? 3.5 : 2}
                style={{ transition: 'all 0.25s ease' }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map(n => {
            const isActive = activeNode === n.id;
            const isVisited = visited.includes(n.id);
            const returnVal = returned[n.id];
            const badge = orderBadges[n.id];

            let strokeColor = 'rgba(255, 255, 255, 0.3)';
            let fillColor = 'var(--bg-surface)';
            let textColor = 'var(--text-ink)';

            if (isActive) {
              strokeColor = 'var(--accent)';
              fillColor = 'var(--accent-soft)';
              textColor = 'var(--accent)';
            } else if (isVisited) {
              strokeColor = 'var(--color-green)';
              fillColor = 'rgba(16, 185, 129, 0.08)';
              textColor = 'var(--color-green)';
            }

            return (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="20"
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth="2.5"
                  style={{
                    filter: isActive ? 'drop-shadow(0 0 10px var(--accent-glow))' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                />
                <text
                  x={n.x}
                  y={n.y + 5}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize="15"
                  fontWeight="700"
                  className="font-hand"
                >
                  {n.id}
                </text>

                {/* Parameter Badge (passing values down: e.g. rem=17, d=1, bounds) */}
                {paramBadges[n.id] !== undefined && (() => {
                  const pText = String(paramBadges[n.id]);
                  const isDepth = pText.startsWith('d=');
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
                        stroke={isDepth ? '#38bdf8' : 'var(--accent)'}
                        strokeWidth="1.5"
                      />
                      <text
                        x={n.x}
                        y={n.y - 22}
                        textAnchor="middle"
                        fill={isDepth ? '#38bdf8' : 'var(--accent)'}
                        fontSize="9"
                        fontWeight="700"
                        className="font-mono"
                      >
                        {pText}
                      </text>
                    </g>
                  );
                })()}

                {/* Visit Order Badge */}
                {badge !== undefined && (
                  <g>
                    <rect
                      x={n.x + 13}
                      y={n.y - 23}
                      width="16"
                      height="16"
                      rx="3"
                      fill="var(--bg-surface-elevated)"
                      stroke="var(--color-green)"
                      strokeWidth="1.5"
                    />
                    <text
                      x={n.x + 21}
                      y={n.y - 11}
                      textAnchor="middle"
                      fill="var(--color-green)"
                      fontSize="9"
                      fontWeight="800"
                      className="font-mono"
                    >
                      {badge}
                    </text>
                  </g>
                )}

                {/* Return value badge */}
                {returnVal !== undefined && (
                  <g>
                    <rect
                      x={n.x - 28}
                      y={n.y - 20}
                      width="20"
                      height="16"
                      rx="4"
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

      {/* Call Stack Box */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-mute)', marginBottom: '8px' }}>
          Call Stack ↓
        </div>

        <div
          style={{
            width: '140px',
            minHeight: '210px',
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
                      : 'var(--text-ink)',
                    fontSize: '11px',
                    textAlign: 'center',
                    fontWeight: 600
                  }}
                >
                  {frame}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

