import React from 'react';
import { Step } from '../../types';

interface GraphVisualizerProps {
  step: Step;
}

export const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ step }) => {
  // Support data in either step.tree or step.graph
  const graphData = step.tree || step.graph;
  const activeNode = graphData?.activeNode;
  const visited = graphData?.visitedNodes || graphData?.visited || [];
  const returned = graphData?.returnedValues || {};
  const callStack = graphData?.callStack || [];
  const paramBadges = graphData?.paramBadges || {};
  const activeEdges = graphData?.activeEdges || [];
  const inDegree = step.graph?.inDegree;
  const order = step.graph?.order || [];
  const queue = step.graph?.queue;
  const graphTitle = graphData?.title;
  const adjList = graphData?.adjList;

  // Default graph topology matching Graphs Overview exactly
  const defaultNodes = [
    { id: 0, x: 170, y: 45 },
    { id: 1, x: 95, y: 135 },
    { id: 2, x: 245, y: 135 },
    { id: 3, x: 245, y: 215 },
    { id: 4, x: 245, y: 295 }
  ];

  const defaultEdges = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 }
  ];

  const nodes = graphData?.nodes || defaultNodes;
  const edges = graphData?.edges || defaultEdges;

  // Calculate SVG bounds dynamically
  const maxX = Math.max(...nodes.map(n => n.x), 280) + 60;
  const maxY = Math.max(...nodes.map(n => n.y), 240) + 60;
  const svgWidth = Math.max(300, maxX);
  const svgHeight = Math.max(260, maxY);

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
        gap: '36px',
        padding: '20px 10px',
        width: '100%',
        flexWrap: 'wrap',
        position: 'relative'
      }}
    >
      {/* Optional Order Badge at Top Left */}
      {order.length > 0 && (
        <div style={{ position: 'absolute', top: '10px', left: '20px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-mute)', textTransform: 'uppercase' }}>ORDER: </span>
          <span className="font-mono" style={{ fontWeight: 700, color: 'var(--accent)' }}>
            [{order.join(', ')}]
          </span>
        </div>
      )}

      {/* Main Graph Canvas Area */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <div
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--text-mute)',
            marginBottom: '10px',
            fontWeight: 700
          }}
        >
          {graphTitle || 'UNDIRECTED GRAPH (HAS A CYCLE)'}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', position: 'relative' }}>
          <svg width={svgWidth} height={svgHeight} style={{ overflow: 'visible' }}>
            {/* Edges with glowing animated transition */}
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
                  style={{
                    transition: 'stroke 0.3s ease, stroke-width 0.3s ease',
                    filter: active ? 'drop-shadow(0 0 8px var(--accent-glow))' : 'none'
                  }}
                />
              );
            })}

            {/* Vertices with smooth animated state transitions */}
            {nodes.map(n => {
              const isActive = activeNode === n.id;
              const isVisited = visited.includes(n.id);
              const badge = paramBadges[n.id];
              const ret = returned[n.id];

              let strokeColor = 'rgba(255, 255, 255, 0.35)';
              let fillColor = 'var(--bg-surface)';
              let textColor = 'var(--text-ink)';

              if (isActive) {
                strokeColor = 'var(--accent)';
                fillColor = 'var(--accent-soft)';
                textColor = 'var(--accent)';
              } else if (isVisited) {
                strokeColor = 'var(--color-green)';
                fillColor = 'rgba(16, 185, 129, 0.12)';
                textColor = 'var(--color-green)';
              }

              return (
                <g key={n.id} style={{ transition: 'all 0.3s ease' }}>
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="20"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2.5"
                    style={{
                      filter: isActive ? 'drop-shadow(0 0 12px var(--accent-glow))' : 'none',
                      transition: 'fill 0.3s ease, stroke 0.3s ease, filter 0.3s ease'
                    }}
                  />
                  <text
                    x={n.x}
                    y={n.y + 5}
                    textAnchor="middle"
                    fill={textColor}
                    fontSize="15"
                    fontWeight="700"
                    className="font-mono"
                    style={{ transition: 'fill 0.3s ease' }}
                  >
                    {n.id}
                  </text>

                  {/* Status / Cloned / Parameter Badge */}
                  {(badge !== undefined || ret !== undefined) && (() => {
                    const bText = String(badge !== undefined ? badge : ret);
                    const isSuccess = bText.includes('✓') || bText.includes('cloned');
                    const pWidth = Math.max(36, bText.length * 7 + 12);
                    return (
                      <g style={{ transition: 'all 0.25s ease' }}>
                        <rect
                          x={n.x - pWidth / 2}
                          y={n.y - 34}
                          width={pWidth}
                          height="16"
                          rx="4"
                          fill="var(--bg-surface-elevated)"
                          stroke={isSuccess ? 'var(--color-green)' : 'var(--accent)'}
                          strokeWidth="1.5"
                        />
                        <text
                          x={n.x}
                          y={n.y - 22}
                          textAnchor="middle"
                          fill={isSuccess ? 'var(--color-green)' : 'var(--accent)'}
                          fontSize="9"
                          fontWeight="700"
                          className="font-mono"
                        >
                          {isSuccess ? `✓ ${bText.replace('✓', '').trim()}` : bText}
                        </text>
                      </g>
                    );
                  })()}
                </g>
              );
            })}
          </svg>

          {/* Live Adjacency List Panel (matching screenshot design) */}
          {adjList && (
            <div
              className="sketch-border-soft"
              style={{
                padding: '10px 16px',
                backgroundColor: 'rgba(26, 23, 20, 0.9)',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                minWidth: '120px',
                fontSize: '12px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px'
              }}
            >
              <div style={{ textTransform: 'uppercase', color: 'var(--text-mute)', fontSize: '9px', fontWeight: 700, marginBottom: '4px', letterSpacing: '0.06em' }}>
                ADJACENCY LIST
              </div>
              {Object.entries(adjList).map(([k, v]) => {
                const isRowActive = activeNode !== undefined && String(activeNode) === String(k);
                return (
                  <div
                    key={k}
                    className="font-mono"
                    style={{
                      fontSize: '12px',
                      color: isRowActive ? 'var(--accent)' : 'var(--text-ink)',
                      padding: '2px 0',
                      transition: 'all 0.2s ease',
                      fontWeight: isRowActive ? 700 : 400
                    }}
                  >
                    <span style={{ color: isRowActive ? 'var(--accent)' : 'var(--accent)', marginRight: '4px' }}>
                      {k}:
                    </span>
                    <span>[{Array.isArray(v) ? v.join(', ') : v}]</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Call Stack Box with smooth animations */}
      {graphData?.callStack !== undefined && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-mute)',
              marginBottom: '10px',
              fontWeight: 700
            }}
          >
            CALL STACK
          </div>

          <div
            style={{
              width: '140px',
              minHeight: '210px',
              borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
              borderRight: '2px solid rgba(255, 255, 255, 0.3)',
              borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0 0 10px 10px',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column-reverse',
              alignItems: 'center',
              justifyContent: callStack.length === 0 ? 'center' : 'flex-start',
              gap: '6px',
              backgroundColor: 'rgba(26, 23, 20, 0.4)'
            }}
          >
            {callStack.length === 0 ? (
              <div className="font-mono" style={{ color: 'var(--text-mute)', fontSize: '11px' }}>
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
                    fontWeight: 600,
                    transition: 'all 0.25s ease'
                  }}
                >
                  {frame}
                </div>
              );
            })
          )}
          </div>
        </div>
      )}

      {/* In-Degree Table (for BFS / Topological sort if present) */}
      {inDegree && (
        <div
          className="sketch-border-soft"
          style={{
            padding: '10px 14px',
            backgroundColor: 'var(--bg-surface)',
            fontSize: '11px',
            minWidth: '150px'
          }}
        >
          <div style={{ textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: '6px', fontWeight: 700 }}>
            In-Degree (Prereqs Left)
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4px', textAlign: 'center', color: 'var(--text-faint)' }}>
            <span>course</span>
            <span>in-deg</span>
            <span>done</span>
          </div>
          {Object.keys(inDegree).map(c => {
            const isDone = order.includes(Number(c));
            return (
              <div
                key={c}
                className="font-mono"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '4px',
                  textAlign: 'center',
                  padding: '2px 0',
                  color: isDone ? 'var(--color-green)' : 'var(--text-ink)'
                }}
              >
                <strong style={{ color: 'var(--accent)' }}>{c}</strong>
                <span>{inDegree[c] !== undefined ? inDegree[c] : 0}</span>
                <span>{isDone ? '✓' : ''}</span>
              </div>
            );
          })}
        </div>
      )}

      {/* Queue Container (for BFS / Topological sort if present) */}
      {queue && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-mute)', marginBottom: '4px' }}>
            Queue · In-Degree 0
          </div>
          <div
            style={{
              width: '80px',
              minHeight: '130px',
              borderLeft: '2px solid var(--text-ink)',
              borderRight: '2px solid var(--text-ink)',
              borderBottom: '2px solid var(--text-ink)',
              borderRadius: '0 0 8px 8px',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column-reverse',
              gap: '4px',
              backgroundColor: 'rgba(26, 23, 20, 0.3)'
            }}
          >
            {queue.length === 0 ? (
              <div style={{ textAlign: 'center', color: 'var(--text-faint)', fontSize: '10px', padding: '10px 0' }}>
                (empty)
              </div>
            ) : (
              queue.map((item, idx) => (
                <div
                  key={idx}
                  className="sketch-border-soft font-mono"
                  style={{
                    padding: '4px',
                    backgroundColor: 'var(--accent-soft)',
                    borderColor: 'var(--accent)',
                    color: 'var(--accent)',
                    textAlign: 'center',
                    fontWeight: 700,
                    fontSize: '12px'
                  }}
                >
                  {item}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};
