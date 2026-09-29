import React from 'react';
import { Step } from '../../types';

interface BacktrackingVisualizerProps {
  data?: any;
  step: Step;
}

export const BacktrackingVisualizer: React.FC<BacktrackingVisualizerProps> = ({ data, step }) => {
  const bt = step.backtracking;
  const tree = bt?.tree || step.tree;
  const board = bt?.board;
  const wordGrid = bt?.wordGrid;
  const results = bt?.results;
  const resultsTitle = bt?.resultsTitle || 'SOLUTIONS FOUND';
  const horizontalStack = bt?.horizontalStack;
  const callStack = bt?.callStack || tree?.callStack || [];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        padding: '16px 20px',
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '32px',
          width: '100%',
          flexWrap: 'wrap'
        }}
      >
        {/* 1. Solution Space Tree Canvas */}
        {tree && tree.nodes && tree.nodes.length > 0 && (() => {
          const nodeMarginX = 30;
          const nodeMarginY = 22;
          const minX = Math.min(...tree.nodes.map(n => n.x - (n.width || 48) / 2), 20) - nodeMarginX;
          const maxX = Math.max(...tree.nodes.map(n => n.x + (n.width || 48) / 2), 460) + nodeMarginX;
          const minY = Math.min(...tree.nodes.map(n => n.y - (n.height || 26) / 2), 20) - nodeMarginY;
          const maxY = Math.max(...tree.nodes.map(n => n.y + (n.height || 26) / 2), 270) + nodeMarginY;
          const svgWidth = Math.max(480, maxX - minX);
          const svgHeight = Math.max(280, maxY - minY);

          return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }}>
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
                {tree.title || 'CHOOSE → EXPLORE → UN-CHOOSE'}
              </div>

              <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
                <svg
                  width={svgWidth}
                  height={svgHeight}
                  viewBox={`${minX} ${minY} ${svgWidth} ${svgHeight}`}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    overflow: 'visible',
                    backgroundColor: 'rgba(26, 23, 20, 0.4)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    padding: '10px'
                  }}
                >
              <defs>
                <filter id="bt-accent-glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Tree Edges */}
              {(tree.edges || []).map((edge, idx) => {
                const u = tree.nodes?.find(n => n.id === edge.from);
                const v = tree.nodes?.find(n => n.id === edge.to);
                if (!u || !v) return null;

                const isEdgeActive = tree.activeEdges?.some(
                  ([from, to]) => (from === edge.from && to === edge.to) || (from === edge.to && to === edge.from)
                );
                const isPruned = edge.isPruned || (tree.prunedNodes && tree.prunedNodes.includes(edge.to));
                const isVisited = tree.visitedNodes && tree.visitedNodes.includes(edge.to);

                let strokeColor = 'rgba(255, 255, 255, 0.22)';
                let strokeWidth = 2;
                let strokeDasharray = 'none';

                if (isEdgeActive) {
                  strokeColor = 'var(--accent)';
                  strokeWidth = 3;
                } else if (isPruned) {
                  strokeColor = '#f43f5e';
                  strokeDasharray = '4 3';
                } else if (isVisited) {
                  strokeColor = 'rgba(16, 185, 129, 0.6)';
                }

                const midX = (u.x + v.x) / 2;
                const midY = (u.y + v.y) / 2;

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
                      style={{ transition: 'all 0.25s ease' }}
                    />
                    {edge.label && (
                      <g>
                        <rect
                          x={midX - 10}
                          y={midY - 8}
                          width="20"
                          height="16"
                          rx="3"
                          fill="var(--bg-surface-elevated)"
                          stroke={isEdgeActive ? 'var(--accent)' : 'rgba(255,255,255,0.2)'}
                          strokeWidth="1"
                        />
                        <text
                          x={midX}
                          y={midY + 4}
                          textAnchor="middle"
                          fill={isEdgeActive ? 'var(--accent)' : 'var(--text-mute)'}
                          fontSize="9"
                          fontWeight="700"
                          className="font-mono"
                        >
                          {edge.label}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}

              {/* Tree Nodes */}
              {tree.nodes.map(n => {
                const isActive = tree.activeNode !== undefined && String(tree.activeNode) === String(n.id);
                const isPruned = n.isPruned || (tree.prunedNodes && tree.prunedNodes.includes(n.id));
                const isSuccess = n.isSuccess || (tree.successNodes && tree.successNodes.includes(n.id));
                const isVisited = tree.visitedNodes && tree.visitedNodes.includes(n.id);
                const badge = tree.paramBadges ? tree.paramBadges[n.id] : undefined;
                const nodeLabel = n.label || String(n.id);

                const nodeWidth = n.width || Math.max(34, nodeLabel.length * 8 + 14);
                const nodeHeight = n.height || 26;

                let strokeColor = 'rgba(255, 255, 255, 0.28)';
                let fillColor = 'var(--bg-surface)';
                let textColor = 'var(--text-ink)';
                let filterGlow = 'none';

                if (isActive) {
                  strokeColor = 'var(--accent)';
                  fillColor = 'var(--accent-soft)';
                  textColor = 'var(--accent)';
                  filterGlow = 'url(#bt-accent-glow)';
                } else if (isPruned) {
                  strokeColor = '#f43f5e';
                  fillColor = 'rgba(244, 63, 94, 0.12)';
                  textColor = '#f43f5e';
                } else if (isSuccess) {
                  strokeColor = 'var(--color-green)';
                  fillColor = 'rgba(16, 185, 129, 0.15)';
                  textColor = 'var(--color-green)';
                } else if (isVisited) {
                  strokeColor = 'rgba(16, 185, 129, 0.7)';
                  textColor = 'var(--text-ink)';
                }

                return (
                  <g key={n.id} style={{ transition: 'all 0.25s ease' }}>
                    <rect
                      x={n.x - nodeWidth / 2}
                      y={n.y - nodeHeight / 2}
                      width={nodeWidth}
                      height={nodeHeight}
                      rx="6"
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isActive ? 2.5 : 1.5}
                      style={{
                        filter: filterGlow,
                        transition: 'all 0.25s ease'
                      }}
                    />
                    <text
                      x={n.x}
                      y={n.y + 4.5}
                      textAnchor="middle"
                      fill={textColor}
                      fontSize="11"
                      fontWeight="700"
                      className="font-mono"
                    >
                      {nodeLabel}
                    </text>

                    {/* Parameter / Pruned / Success Badge */}
                    {badge !== undefined && (
                      <g>
                        <rect
                          x={n.x - Math.max(28, badge.length * 6 + 10) / 2}
                          y={n.y - nodeHeight / 2 - 14}
                          width={Math.max(28, badge.length * 6 + 10)}
                          height="14"
                          rx="3"
                          fill="var(--bg-surface-elevated)"
                          stroke={badge.includes('✗') || badge.toLowerCase().includes('prun') ? '#f43f5e' : badge.includes('✓') ? 'var(--color-green)' : 'var(--accent)'}
                          strokeWidth="1"
                        />
                        <text
                          x={n.x}
                          y={n.y - nodeHeight / 2 - 3.5}
                          textAnchor="middle"
                          fill={badge.includes('✗') || badge.toLowerCase().includes('prun') ? '#f43f5e' : badge.includes('✓') ? 'var(--color-green)' : 'var(--accent)'}
                          fontSize="8.5"
                          fontWeight="700"
                          className="font-mono"
                        >
                          {badge}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      );
    })()}

        {/* 2. N-Queens 4x4 Chessboard Visualizer */}
        {board && board.grid && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              {board.title || '4×4 CHESSBOARD (N-QUEENS)'}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${board.grid.length}, 56px)`,
                gap: '4px',
                padding: '10px',
                backgroundColor: 'rgba(26, 23, 20, 0.6)',
                borderRadius: '10px',
                border: '1.5px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)'
              }}
            >
              {board.grid.map((row, rIdx) =>
                row.map((cell, cIdx) => {
                  const isQueen = (board.queens || []).some(q => q.r === rIdx && q.c === cIdx) || cell === 'Q';
                  const isTrying = cell === 'try' || (board.tryCell && board.tryCell[0] === rIdx && board.tryCell[1] === cIdx);
                  const isAttacked = !isQueen && !isTrying && ((board.attackedCells || []).some(a => a.r === rIdx && a.c === cIdx) || cell === 'X' || cell === '✕');
                  const isActiveCell = board.activeCell && board.activeCell[0] === rIdx && board.activeCell[1] === cIdx;
                  const isDarkSquare = (rIdx + cIdx) % 2 === 1;

                  let cellBg = isDarkSquare ? 'rgba(32, 28, 24, 0.95)' : 'rgba(48, 42, 36, 0.95)';
                  let borderColor = 'rgba(255, 255, 255, 0.12)';

                  if (isQueen) {
                    cellBg = 'rgba(234, 179, 8, 0.16)';
                    borderColor = 'rgba(234, 179, 8, 0.85)';
                  } else if (isTrying) {
                    cellBg = 'rgba(249, 115, 22, 0.18)';
                    borderColor = 'rgba(249, 115, 22, 0.85)';
                  } else if (isActiveCell) {
                    cellBg = 'var(--accent-soft)';
                    borderColor = 'var(--accent)';
                  } else if (isAttacked) {
                    cellBg = 'rgba(244, 63, 94, 0.12)';
                    borderColor = 'rgba(244, 63, 94, 0.35)';
                  }

                  return (
                    <div
                      key={`${rIdx}-${cIdx}`}
                      className="font-mono"
                      style={{
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: cellBg,
                        border: `1.5px solid ${borderColor}`,
                        borderRadius: '8px',
                        position: 'relative',
                        transition: 'all 0.2s ease',
                        boxShadow: isQueen ? '0 0 12px rgba(234, 179, 8, 0.25)' : isTrying ? '0 0 12px rgba(249, 115, 22, 0.25)' : 'none'
                      }}
                    >
                      {isQueen ? (
                        <span
                          style={{
                            fontSize: '24px',
                            fontWeight: 800,
                            color: '#fbbf24',
                            textShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
                            lineHeight: 1
                          }}
                        >
                          Q
                        </span>
                      ) : isTrying ? (
                        <span
                          style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            color: '#fb923c',
                            letterSpacing: '0.04em'
                          }}
                        >
                          try
                        </span>
                      ) : isAttacked ? (
                        <span
                          style={{
                            fontSize: '14px',
                            color: '#f43f5e',
                            fontWeight: 700
                          }}
                        >
                          ✕
                        </span>
                      ) : (
                        <span
                          style={{
                            fontSize: '18px',
                            color: 'rgba(255, 255, 255, 0.35)',
                            fontWeight: 600,
                            lineHeight: 1
                          }}
                        >
                          .
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Set tracking pills */}
            {(board.colSet !== undefined || board.diagSet !== undefined || board.antiDiagSet !== undefined) && (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  marginTop: '10px',
                  fontSize: '10px',
                  fontFamily: 'monospace'
                }}
              >
                {board.colSet !== undefined && (
                  <span style={{ color: 'var(--text-mute)' }}>
                    cols: <span style={{ color: 'var(--accent)' }}>[{board.colSet.join(', ')}]</span>
                  </span>
                )}
                {board.diagSet !== undefined && (
                  <span style={{ color: 'var(--text-mute)' }}>
                    diag1 (r-c): <span style={{ color: '#38bdf8' }}>[{board.diagSet.join(', ')}]</span>
                  </span>
                )}
                {board.antiDiagSet !== undefined && (
                  <span style={{ color: 'var(--text-mute)' }}>
                    diag2 (r+c): <span style={{ color: '#c084fc' }}>[{board.antiDiagSet.join(', ')}]</span>
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {/* 3. Word Search 2D Grid Visualizer */}
        {wordGrid && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              {wordGrid.title || `${wordGrid.grid.length} × ${wordGrid.grid[0].length} BOARD · WORD = "${wordGrid.word}"`}
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${wordGrid.grid[0].length}, 56px)`,
                gap: '8px',
                padding: '12px',
                backgroundColor: 'rgba(26, 23, 20, 0.4)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {wordGrid.grid.map((row, r) =>
                row.map((ch, c) => {
                  const match = (wordGrid.matchedCells || []).find(m => m.r === r && m.c === c);
                  const isCurrent = wordGrid.activeCell && wordGrid.activeCell[0] === r && wordGrid.activeCell[1] === c;
                  const isRejected = wordGrid.rejectedCell && wordGrid.rejectedCell[0] === r && wordGrid.rejectedCell[1] === c;
                  const customBadge = wordGrid.cellBadges ? wordGrid.cellBadges[`${r},${c}`] : (isCurrent && wordGrid.activeBadge ? wordGrid.activeBadge : null);

                  let bg = 'var(--bg-surface)';
                  let border = '1.5px solid rgba(255, 255, 255, 0.3)';
                  let textCol = 'var(--text-ink)';
                  let filterGlow = 'none';

                  if (isCurrent) {
                    bg = 'rgba(249, 115, 22, 0.15)';
                    border = '2px solid var(--accent)';
                    textCol = 'var(--accent)';
                    filterGlow = 'drop-shadow(0 0 10px var(--accent-glow))';
                  } else if (isRejected) {
                    bg = 'rgba(244, 63, 94, 0.22)';
                    border = '2px solid #f43f5e';
                    textCol = '#f43f5e';
                  } else if (match) {
                    bg = 'rgba(16, 185, 129, 0.22)';
                    border = '2px solid var(--color-green)';
                    textCol = 'var(--color-green)';
                  }

                  return (
                    <div
                      key={`${r}-${c}`}
                      className="font-mono"
                      style={{
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: bg,
                        border: border,
                        borderRadius: '8px',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: textCol,
                        position: 'relative',
                        filter: filterGlow,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {customBadge ? (
                        <div
                          style={{
                            fontSize: '13px',
                            fontWeight: 700,
                            padding: '2px 6px',
                            borderRadius: '4px',
                            backgroundColor: isCurrent ? 'var(--accent-soft)' : 'rgba(16, 185, 129, 0.2)',
                            border: `1px solid ${isCurrent ? 'var(--accent)' : 'var(--color-green)'}`,
                            color: isCurrent ? 'var(--accent)' : 'var(--color-green)'
                          }}
                        >
                          {customBadge}
                        </div>
                      ) : (
                        <span>{ch}</span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* 4. Results Collector Side Panel (matching screenshot design) */}
        {results !== undefined && (
          <div
            className="sketch-border-soft"
            style={{
              padding: '12px 16px',
              backgroundColor: 'rgba(26, 23, 20, 0.9)',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(8px)',
              minWidth: '150px',
              maxWidth: '220px',
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
              {resultsTitle}
            </div>

            {results.length === 0 ? (
              <div
                className="font-mono"
                style={{
                  color: 'var(--text-faint)',
                  fontSize: '11px',
                  fontStyle: 'italic',
                  padding: '6px 0'
                }}
              >
                (none yet)
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxHeight: '200px', overflowY: 'auto' }}>
                {results.map((res, idx) => {
                  const resStr = Array.isArray(res) ? (typeof res[0] === 'string' && res[0].length > 1 ? `[${res.join(', ')}]` : JSON.stringify(res)) : String(res);
                  return (
                    <div
                      key={idx}
                      className="font-mono"
                      style={{
                        padding: '3px 8px',
                        backgroundColor: 'rgba(16, 185, 129, 0.12)',
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        borderRadius: '4px',
                        color: 'var(--color-green)',
                        fontSize: '11px',
                        fontWeight: 700
                      }}
                    >
                      {resStr}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* 5. Horizontal Call Stack (Depth) below tree (matching screenshots) */}
      {horizontalStack && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              marginBottom: '4px',
              fontWeight: 700,
              letterSpacing: '0.04em'
            }}
          >
            {horizontalStack.title || 'CALL STACK (DEPTH)'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent)' }}>front &rarr;</span>
            <div
              style={{
                minWidth: '70px',
                minHeight: '36px',
                borderLeft: '2px solid rgba(255, 255, 255, 0.35)',
                borderRight: '2px solid rgba(255, 255, 255, 0.35)',
                borderBottom: '2px solid rgba(255, 255, 255, 0.35)',
                borderRadius: '0 0 8px 8px',
                padding: '4px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: 'rgba(26, 23, 20, 0.4)'
              }}
            >
              {horizontalStack.items.length === 0 ? (
                <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-faint)' }}>(empty)</span>
              ) : (
                horizontalStack.items.map((item, idx) => {
                  const itemVal = typeof item === 'object' && item !== null ? item.val : item;
                  const itemSub = typeof item === 'object' && item !== null ? item.sub : null;
                  return (
                    <div
                      key={idx}
                      className="sketch-border-soft font-mono"
                      style={{
                        padding: '4px 8px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--accent-soft)',
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '11px'
                      }}
                    >
                      <span>{String(itemVal)}</span>
                      {itemSub && <span style={{ fontSize: '8px', color: 'var(--text-mute)', marginTop: '1px' }}>{itemSub}</span>}
                    </div>
                  );
                })
              )}
            </div>
            <span className="font-mono" style={{ fontSize: '10px', color: '#38bdf8' }}>&larr; back</span>
          </div>
        </div>
      )}

      {/* 6. Vertical Call Stack (if horizontalStack not provided) */}
      {!horizontalStack && callStack && callStack.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-mute)', marginBottom: '6px', fontWeight: 700 }}>
            Call Stack ↓
          </div>
          <div
            style={{
              width: '130px',
              minHeight: '120px',
              borderLeft: '2px solid rgba(255, 255, 255, 0.35)',
              borderRight: '2px solid rgba(255, 255, 255, 0.35)',
              borderBottom: '2px solid rgba(255, 255, 255, 0.35)',
              borderRadius: '0 0 8px 8px',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column-reverse',
              gap: '4px',
              backgroundColor: 'rgba(26, 23, 20, 0.4)'
            }}
          >
            {callStack.map((frame, idx) => {
              const isTop = idx === callStack.length - 1;
              return (
                <div
                  key={idx}
                  className="font-mono"
                  style={{
                    padding: '4px 6px',
                    backgroundColor: isTop ? 'var(--accent-soft)' : 'var(--bg-surface-elevated)',
                    border: `1px solid ${isTop ? 'var(--accent)' : 'var(--border-ink)'}`,
                    color: isTop ? 'var(--accent)' : 'var(--text-ink)',
                    fontSize: '10.5px',
                    textAlign: 'center',
                    fontWeight: 600,
                    borderRadius: '4px'
                  }}
                >
                  {frame}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
