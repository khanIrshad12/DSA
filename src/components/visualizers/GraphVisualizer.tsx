import React from 'react';
import { Step } from '../../types';

interface GraphVisualizerProps {
  data?: any;
  step: Step;
}

export const GraphVisualizer: React.FC<GraphVisualizerProps> = ({ data, step }) => {
  // Support data in either step.tree or step.graph or initialInput data
  const graphData = step.tree || step.graph;
  const activeNode = graphData?.activeNode;
  const visited = graphData?.visitedNodes || graphData?.visited || [];
  const returned = graphData?.returnedValues || {};
  const callStack = graphData?.callStack || [];
  const paramBadges = graphData?.paramBadges || {};
  const activeEdges = graphData?.activeEdges || [];
  const inDegree = step.graph?.inDegree;
  const distTable = step.graph?.distTable || graphData?.distTable;
  const distMatrix = step.graph?.distMatrix || graphData?.distMatrix;
  const parentArray = step.graph?.parentArray || graphData?.parentArray;
  const horizontalQueue = step.graph?.horizontalQueue || graphData?.horizontalQueue;
  const queue = step.queue || step.graph?.queue || (horizontalQueue ? horizontalQueue.items : null);
  const queueTitle = step.graph?.queueTitle || graphData?.queueTitle || (distTable ? 'PRIORITY QUEUE (MIN D)' : inDegree ? 'QUEUE IN-DEGREE 0' : 'QUEUE (FIFO)');
  const order = step.graph?.order || [];
  const graphTitle = graphData?.title || data?.title || (data?.nodes ? 'UNDIRECTED GRAPH' : 'GRAPH VISUALIZATION');
  const adjList = graphData?.adjList || data?.adjList;

  // Default graph topology
  const defaultNodes = [
    { id: 0, x: 60, y: 60 },
    { id: 1, x: 200, y: 60 },
    { id: 2, x: 60, y: 180 },
    { id: 3, x: 200, y: 180 }
  ];

  const defaultEdges = [
    { from: 0, to: 1, weight: 5 },
    { from: 0, to: 2, weight: 2 },
    { from: 2, to: 1, weight: 1 },
    { from: 2, to: 3, weight: 7 },
    { from: 1, to: 3, weight: 3 }
  ];

  const nodes = graphData?.nodes || data?.nodes || defaultNodes;
  const edges = graphData?.edges || data?.edges || defaultEdges;

  const candidateNodes = graphData?.candidateNodes || [];
  const relaxedEdges = graphData?.relaxedEdges || [];
  const skippedEdges = graphData?.skippedEdges || [];
  const targetNode = graphData?.targetNode ?? data?.targetNode;
  const sourceNode = graphData?.sourceNode ?? data?.sourceNode;
  const newlyDiscovered = graphData?.newlyDiscovered || [];
  const newlyDiscoveredList = Array.isArray(newlyDiscovered) ? newlyDiscovered : [newlyDiscovered];

  const isUndirected = graphData?.isUndirected ?? (graphTitle?.toLowerCase().includes('undirected') || (!edges.some((e: any) => e.isDirected) && !data?.isDirected));

  // Extract queued node IDs
  const queuedIds = new Set<string | number>();
  if (Array.isArray(queue)) {
    queue.forEach((item: any) => {
      if (typeof item === 'object' && item !== null) {
        if (item.id !== undefined) queuedIds.add(item.id);
        if (item.val !== undefined) {
          const clean = String(item.val).replace(/^Node\s+/i, '');
          queuedIds.add(clean);
          queuedIds.add(item.val);
        }
      } else {
        const clean = String(item).replace(/^Node\s+/i, '');
        queuedIds.add(clean);
        queuedIds.add(item);
      }
    });
  }

  // Calculate SVG bounds dynamically
  const maxX = Math.max(...nodes.map(n => n.x), 280) + 60;
  const maxY = Math.max(...nodes.map(n => n.y), 240) + 60;
  const svgWidth = Math.max(340, maxX);
  const svgHeight = Math.max(280, maxY);

  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const isEdgeInList = (list: any[], from: number | string, to: number | string) => {
    return list.some(([u, v]) => (u === from && v === to) || (u === to && v === from));
  };

  const getEdgeState = (from: number | string, to: number | string) => {
    if (isEdgeInList(skippedEdges, from, to)) return 'skipped';
    if (isEdgeInList(relaxedEdges, from, to)) return 'relaxed';
    if (isEdgeInList(activeEdges, from, to)) return 'active';
    return 'default';
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
          className="font-mono"
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-mute)',
            marginBottom: '10px',
            fontWeight: 700
          }}
        >
          {graphTitle}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', position: 'relative' }}>
          <svg width={svgWidth} height={svgHeight} style={{ overflow: 'visible' }}>
            <defs>
              <marker id="arrow-default" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="rgba(255, 255, 255, 0.35)" />
              </marker>
              <marker id="arrow-active" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--accent)" />
              </marker>
              <marker id="arrow-relaxed" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="var(--color-green)" />
              </marker>
              <marker id="arrow-skipped" viewBox="0 0 10 10" refX="22" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e" />
              </marker>
            </defs>

            {/* Edges with glowing animated transition and optional weight badges */}
            {edges.map((edge: any, idx) => {
              const u = nodeMap.get(edge.from);
              const v = nodeMap.get(edge.to);
              if (!u || !v) return null;
              const edgeState = getEdgeState(edge.from, edge.to);
              const midX = (u.x + v.x) / 2;
              const midY = (u.y + v.y) / 2;

              let strokeColor = 'rgba(255, 255, 255, 0.25)';
              let strokeWidth = 2;
              let strokeDasharray = 'none';
              let filterGlow = 'none';
              let markerEnd = isUndirected ? 'none' : 'url(#arrow-default)';
              let badgeBorder = 'rgba(255, 255, 255, 0.35)';
              let badgeText = 'var(--text-ink)';

              if (edgeState === 'relaxed') {
                strokeColor = 'var(--color-green)';
                strokeWidth = 3.5;
                filterGlow = 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))';
                markerEnd = isUndirected ? 'none' : 'url(#arrow-relaxed)';
                badgeBorder = 'var(--color-green)';
                badgeText = 'var(--color-green)';
              } else if (edgeState === 'skipped') {
                strokeColor = '#f43f5e';
                strokeWidth = 3;
                strokeDasharray = '4 4';
                filterGlow = 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.5))';
                markerEnd = isUndirected ? 'none' : 'url(#arrow-skipped)';
                badgeBorder = '#f43f5e';
                badgeText = '#f43f5e';
              } else if (edgeState === 'active') {
                strokeColor = '#f97316';
                strokeWidth = 3.5;
                filterGlow = 'drop-shadow(0 0 8px rgba(249, 115, 22, 0.6))';
                markerEnd = isUndirected ? 'none' : 'url(#arrow-active)';
                badgeBorder = '#f97316';
                badgeText = '#f97316';
              }

              return (
                <g key={idx}>
                  <line
                    x1={u.x}
                    y1={u.y}
                    x2={v.x}
                    y2={v.y}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    markerEnd={markerEnd}
                    style={{
                      transition: 'all 0.3s ease',
                      filter: filterGlow
                    }}
                  />
                  {edge.weight !== undefined && (
                    <g>
                      <circle
                        cx={midX}
                        cy={midY}
                        r="11"
                        fill="var(--bg-surface)"
                        stroke={badgeBorder}
                        strokeWidth="1.5"
                        style={{ transition: 'all 0.3s ease' }}
                      />
                      <text
                        x={midX}
                        y={midY + 3.5}
                        textAnchor="middle"
                        fill={badgeText}
                        fontSize="11"
                        fontWeight="700"
                        className="font-mono"
                        style={{ transition: 'fill 0.3s ease' }}
                      >
                        {edge.weight}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}

            {/* Vertices with smooth animated multi-color state transitions */}
            {nodes.map(n => {
              const isActive = activeNode === n.id;
              const isVisited = visited.includes(n.id);
              const isNewlyDiscovered = newlyDiscoveredList.includes(n.id);
              const isQueued = !isActive && !isVisited && (queuedIds.has(n.id) || (n.label && queuedIds.has(n.label)));
              const isCandidate = candidateNodes.includes(n.id);
              const isTarget = targetNode !== undefined && targetNode === n.id;
              const isSource = sourceNode !== undefined && sourceNode === n.id;
              const badge = paramBadges[n.id];
              const ret = returned[n.id];

              let strokeColor = 'rgba(255, 255, 255, 0.65)';
              let fillColor = 'var(--bg-surface)';
              let textColor = '#ffffff';
              let filterEffect = 'none';

              if (isActive) {
                strokeColor = '#f97316';
                fillColor = '#7c2d12';
                textColor = '#ffffff';
                filterEffect = 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.65))';
              } else if (isNewlyDiscovered) {
                strokeColor = '#eab308';
                fillColor = 'rgba(234, 179, 8, 0.18)';
                textColor = '#ffffff';
                filterEffect = 'drop-shadow(0 0 8px rgba(234, 179, 8, 0.55))';
              } else if (isVisited) {
                strokeColor = 'var(--color-green)';
                fillColor = 'rgba(16, 185, 129, 0.22)';
                textColor = '#ffffff';
                filterEffect = 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.25))';
              } else if (isQueued || isCandidate) {
                strokeColor = '#38bdf8';
                fillColor = 'rgba(56, 189, 248, 0.2)';
                textColor = '#ffffff';
                filterEffect = 'drop-shadow(0 0 8px rgba(56, 189, 248, 0.5))';
              } else if (isTarget) {
                strokeColor = '#a855f7';
                fillColor = 'rgba(168, 85, 247, 0.1)';
                textColor = '#c084fc';
              }

              return (
                <g key={n.id} style={{ transition: 'all 0.3s ease' }}>
                  {/* Subtle target / source ring */}
                  {isTarget && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="26"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="1.5"
                      strokeDasharray="3 3"
                    />
                  )}
                  {isSource && (
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r="25"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                  )}
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="20"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth="2.5"
                    style={{
                      filter: filterEffect,
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
                    {(n as any).label || n.id}
                  </text>

                  {/* Status / Distance / Parameter Badge */}
                  {(badge !== undefined || ret !== undefined) && (() => {
                    const bText = String(badge !== undefined ? badge : ret);
                    const isWarning = bText.toLowerCase().includes('✗') || bText.toLowerCase().includes('skip') || bText.toLowerCase().includes('cycle');
                    const pWidth = Math.max(26, bText.length * 7 + 8);
                    const badgeBorderColor = isWarning
                      ? '#f43f5e'
                      : isActive
                      ? '#f97316'
                      : isNewlyDiscovered
                      ? '#eab308'
                      : isVisited
                      ? 'var(--color-green)'
                      : isQueued
                      ? '#38bdf8'
                      : 'var(--color-green)';
                    const badgeTextColor = badgeBorderColor;

                    return (
                      <g style={{ transition: 'all 0.25s ease' }}>
                        <rect
                          x={n.x - pWidth / 2}
                          y={n.y - 34}
                          width={pWidth}
                          height="16"
                          rx="4"
                          fill="var(--bg-surface-elevated)"
                          stroke={badgeBorderColor}
                          strokeWidth="1.5"
                        />
                        <text
                          x={n.x}
                          y={n.y - 22}
                          textAnchor="middle"
                          fill={badgeTextColor}
                          fontSize="9"
                          fontWeight="700"
                          className="font-mono"
                        >
                          {bText.includes('✓') && !bText.startsWith('✓') ? `✓ ${bText.replace('✓', '').trim()}` : bText}
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

        {/* Horizontal BFS Queue directly below graph */}
        {queue !== null && queue !== undefined && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '12px' }}>
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
              {queueTitle}
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

      {/* In-Degree Table (for BFS / Topological sort / Kahn's algorithm) */}
      {inDegree && (
        <div
          className="sketch-border-soft"
          style={{
            padding: '10px 16px',
            backgroundColor: 'rgba(26, 23, 20, 0.9)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            minWidth: '150px',
            fontSize: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              fontSize: '9px',
              fontWeight: 700,
              marginBottom: '6px',
              letterSpacing: '0.06em'
            }}
          >
            IN-DEGREE (PREREQS LEFT)
          </div>
          <div
            className="font-mono"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '6px',
              textAlign: 'center',
              color: 'var(--text-mute)',
              fontSize: '10px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              paddingBottom: '4px'
            }}
          >
            <span style={{ textAlign: 'left' }}>course</span>
            <span>in-deg</span>
            <span style={{ textAlign: 'right' }}>done</span>
          </div>
          {Object.keys(inDegree).map(c => {
            const isDone = order.includes(Number(c)) || visited.includes(Number(c));
            const isCurrent = activeNode !== undefined && String(activeNode) === String(c);
            return (
              <div
                key={c}
                className="font-mono"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '6px',
                  alignItems: 'center',
                  padding: '2px 0',
                  fontSize: '11px',
                  color: isDone ? 'var(--color-green)' : isCurrent ? 'var(--accent)' : 'var(--text-ink)',
                  fontWeight: isCurrent ? 700 : 400,
                  transition: 'all 0.2s ease'
                }}
              >
                <strong style={{ textAlign: 'left', color: isDone ? 'var(--color-green)' : isCurrent ? 'var(--accent)' : 'var(--text-ink)' }}>
                  {c}
                </strong>
                <span style={{ textAlign: 'center', color: isDone ? 'var(--color-green)' : 'var(--text-ink)' }}>
                  {inDegree[c] !== undefined ? inDegree[c] : 0}
                </span>
                <span style={{ textAlign: 'right', color: 'var(--color-green)', fontWeight: 700 }}>
                  {isDone ? '✓' : ''}
                </span>
              </div>
            );
          })}
        </div>
      )}

      {/* Tentative Distance Table (for Dijkstra / Bellman-Ford) */}
      {distTable && (
        <div
          className="sketch-border-soft"
          style={{
            padding: '10px 16px',
            backgroundColor: 'rgba(26, 23, 20, 0.9)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            minWidth: '150px',
            fontSize: '12px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              fontSize: '9px',
              fontWeight: 700,
              marginBottom: '6px',
              letterSpacing: '0.06em'
            }}
          >
            {distTable.title || (distTable.source !== undefined ? `SHORTEST DIST FROM ${distTable.source}` : 'TENTATIVE DIST')}
          </div>
          {(() => {
            const entries = Object.entries(distTable.nodes || distTable).filter(([k]) => k !== 'source' && k !== 'nodes' && k !== 'title' && k !== 'columns');
            const hasPrev = entries.some(([_, info]) => typeof info === 'object' && info !== null && info.prev !== undefined);
            const col2 = hasPrev ? 'prev' : 'dist';
            const col3 = hasPrev ? 'curr' : 'final';
            return (
              <>
                <div
                  className="font-mono"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '6px',
                    textAlign: 'center',
                    color: 'var(--text-mute)',
                    fontSize: '10px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '4px'
                  }}
                >
                  <span style={{ textAlign: 'left' }}>node</span>
                  <span>{col2}</span>
                  <span style={{ textAlign: 'right' }}>{col3}</span>
                </div>
                {entries.map(([nodeId, info]: [string, any]) => {
                  const distVal = typeof info === 'object' && info !== null ? info.dist : info;
                  const prevVal = typeof info === 'object' && info !== null ? info.prev : undefined;
                  const isFinal = typeof info === 'object' && info !== null ? info.final : visited.includes(nodeId);
                  const isCurrent = activeNode !== undefined && String(activeNode) === String(nodeId);
                  return (
                    <div
                      key={nodeId}
                      className="font-mono"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '6px',
                        alignItems: 'center',
                        padding: '2px 0',
                        fontSize: '11px',
                        color: isFinal ? 'var(--color-green)' : isCurrent ? 'var(--accent)' : 'var(--text-ink)',
                        fontWeight: isCurrent ? 700 : 400,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <strong style={{ textAlign: 'left', color: isFinal ? 'var(--color-green)' : isCurrent ? 'var(--accent)' : 'var(--text-ink)' }}>
                        {nodeId}
                      </strong>
                      <span style={{ textAlign: 'center', color: isFinal ? 'var(--color-green)' : 'var(--text-ink)' }}>
                        {hasPrev ? (prevVal !== undefined ? prevVal : '∞') : (distVal !== undefined ? distVal : '∞')}
                      </span>
                      <span style={{ textAlign: 'right', color: isFinal ? 'var(--color-green)' : 'var(--text-ink)', fontWeight: isFinal ? 700 : 400 }}>
                        {hasPrev ? (distVal !== undefined ? distVal : '∞') : (isFinal ? '✓' : '')}
                      </span>
                    </div>
                  );
                })}
              </>
            );
          })()}
        </div>
      )}

      {/* All-Pairs Distance Matrix Panel (Floyd-Warshall) */}
      {distMatrix && (
        <div
          className="sketch-border-soft"
          style={{
            padding: '10px 14px',
            backgroundColor: 'rgba(26, 23, 20, 0.9)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            fontSize: '11px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}
        >
          <div style={{ textTransform: 'uppercase', color: 'var(--text-mute)', fontSize: '9px', fontWeight: 700, marginBottom: '6px', letterSpacing: '0.06em' }}>
            {distMatrix.title || 'ALL-PAIRS DISTANCE MATRIX'}
          </div>
          <table className="font-mono" style={{ borderCollapse: 'collapse', fontSize: '11px', textAlign: 'center' }}>
            <thead>
              <tr style={{ color: 'var(--text-mute)', fontSize: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <th style={{ padding: '3px 6px', textAlign: 'left', fontWeight: 400 }}>from \ to</th>
                {(distMatrix.headers || [0, 1, 2, 3]).map((h: any) => (
                  <th key={h} style={{ padding: '3px 6px', color: 'var(--text-mute)', fontWeight: 600 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {distMatrix.grid.map((row: any[], rIdx: number) => {
                const rowHeader = distMatrix.headers ? distMatrix.headers[rIdx] : rIdx;
                const isRowActive = activeNode !== undefined && String(activeNode) === String(rowHeader);
                return (
                  <tr key={rIdx} style={{ color: isRowActive ? 'var(--accent)' : 'var(--text-ink)' }}>
                    <td style={{ padding: '3px 6px', textAlign: 'left', color: isRowActive ? 'var(--accent)' : 'var(--text-mute)', fontWeight: 700 }}>
                      {rowHeader}
                    </td>
                    {row.map((val: any, cIdx: number) => {
                      const isCellActive = distMatrix.activeCell && distMatrix.activeCell[0] === rIdx && distMatrix.activeCell[1] === cIdx;
                      const numVal = typeof val === 'number' ? val : null;
                      const isWithinThreshold = numVal !== null && numVal > 0 && numVal <= (distMatrix.threshold || 4);
                      return (
                        <td
                          key={cIdx}
                          style={{
                            padding: '3px 6px',
                            color: isCellActive ? 'var(--accent)' : val === 0 ? 'var(--text-mute)' : isWithinThreshold ? 'var(--color-green)' : 'var(--text-ink)',
                            fontWeight: isCellActive || isWithinThreshold ? 700 : 400,
                            backgroundColor: isCellActive ? 'var(--accent-soft)' : 'transparent',
                            borderRadius: '4px'
                          }}
                        >
                          {val}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* PARENT[] Array Box for Union-Find (DSU) */}
      {parentArray && (
        <div
          className="sketch-border-soft"
          style={{
            padding: '10px 14px',
            backgroundColor: 'rgba(26, 23, 20, 0.9)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            fontSize: '11px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px'
          }}
        >
          <div
            style={{
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              fontSize: '9px',
              fontWeight: 700,
              letterSpacing: '0.06em'
            }}
          >
            {parentArray.title || 'PARENT[]'}
          </div>
          <table
            className="font-mono"
            style={{
              borderCollapse: 'collapse',
              fontSize: '11px',
              textAlign: 'center'
            }}
          >
            <thead>
              <tr style={{ color: 'var(--text-mute)', fontSize: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {(parentArray.indices || parentArray.values.map((_: any, i: number) => i)).map((idx: any) => (
                  <th key={idx} style={{ padding: '3px 8px', color: 'var(--text-mute)', fontWeight: 600 }}>
                    {idx}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {parentArray.values.map((val: any, i: number) => {
                  const isHighlighted = parentArray.highlighted && parentArray.highlighted.includes(i);
                  return (
                    <td
                      key={i}
                      style={{
                        padding: '4px 8px',
                        color: isHighlighted ? 'var(--accent)' : 'var(--text-ink)',
                        fontWeight: isHighlighted ? 700 : 500,
                        backgroundColor: isHighlighted ? 'var(--accent-soft)' : 'transparent',
                        borderRadius: '4px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {val}
                    </td>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
