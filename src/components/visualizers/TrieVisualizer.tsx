import React from 'react';
import { Step } from '../../types';

interface TrieVisualizerProps {
  step: Step;
}

export const TrieVisualizer: React.FC<TrieVisualizerProps> = ({ step }) => {
  const trie = step.trie;
  const nodes = trie?.nodes || [
    { id: 'root', char: '•', x: 200, y: 40, isWord: false }
  ];
  const edges = trie?.edges || [];
  const activeNode = trie?.activeNode;
  const activeEdges = trie?.activeEdges || [];
  const visitedNodes = trie?.visitedNodes || [];
  const words = trie?.words;
  const matchedWords = trie?.matchedWords;
  const suggestions = trie?.suggestions;
  const currentWord = trie?.currentWord;
  const charIndex = trie?.charIndex;

  const nodeMap = new Map(nodes.map(n => [n.id, n]));

  const isEdgeActive = (from: string | number, to: string | number) => {
    return (
      activeEdges.some(([u, v]) => (u === from && v === to) || (u === to && v === from)) ||
      edges.some(e => e.from === from && e.to === to && e.isActive)
    );
  };

  // Compute SVG viewBox bounds dynamically based on node coords
  const minX = Math.min(...nodes.map(n => n.x), 50) - 40;
  const maxX = Math.max(...nodes.map(n => n.x), 350) + 40;
  const minY = Math.min(...nodes.map(n => n.y), 30) - 25;
  const maxY = Math.max(...nodes.map(n => n.y), 220) + 45;
  const svgWidth = Math.max(380, maxX - minX);
  const svgHeight = Math.max(260, maxY - minY);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 12px',
        width: '100%'
      }}
    >
      {/* Title */}
      <div
        className="font-mono"
        style={{
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--text-mute)',
          marginBottom: '8px',
          fontWeight: 700
        }}
      >
        {trie?.title || 'TRIE'}
      </div>

      {/* SVG Canvas for Trie Structure */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '12px',
          borderRadius: '12px',
          background: 'rgba(24, 21, 18, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          minWidth: '360px',
          minHeight: '260px'
        }}
      >
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`${minX} ${minY} ${svgWidth} ${svgHeight}`}
          style={{ overflow: 'visible' }}
        >
          {/* Edges */}
          {edges.map((edge, idx) => {
            const u = nodeMap.get(edge.from);
            const v = nodeMap.get(edge.to);
            if (!u || !v) return null;
            const active = isEdgeActive(edge.from, edge.to);

            return (
              <g key={`edge-${edge.from}-${edge.to}-${idx}`}>
                <line
                  x1={u.x}
                  y1={u.y + 12}
                  x2={v.x}
                  y2={v.y - 14}
                  stroke={active ? '#f97316' : 'rgba(255, 255, 255, 0.22)'}
                  strokeWidth={active ? 3 : 1.8}
                  strokeLinecap="round"
                  style={{
                    transition: 'all 0.25s ease',
                    filter: active ? 'drop-shadow(0 0 6px rgba(249, 115, 22, 0.6))' : 'none'
                  }}
                />
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map(n => {
            const isActive = activeNode === n.id || n.isNew;
            const isWord = n.isWord;
            const isSearching = n.isSearching;
            const isMatched = n.isMatched;
            const isVisited = visitedNodes.includes(n.id);
            const isRoot = n.id === 'root' || n.char === '•';

            let bgColor = 'rgba(36, 32, 28, 0.95)';
            let borderColor = 'rgba(255, 255, 255, 0.25)';
            let textColor = 'var(--text-ink)';
            let ringColor = 'transparent';

            if (isActive) {
              bgColor = 'rgba(249, 115, 22, 0.22)';
              borderColor = '#f97316';
              textColor = '#fb923c';
            } else if (isSearching) {
              bgColor = 'rgba(56, 189, 248, 0.2)';
              borderColor = '#38bdf8';
              textColor = '#38bdf8';
            } else if (isWord) {
              bgColor = 'rgba(16, 185, 129, 0.16)';
              borderColor = '#10b981';
              textColor = '#34d399';
              ringColor = '#10b981';
            } else if (isMatched || isVisited) {
              bgColor = 'rgba(245, 158, 11, 0.12)';
              borderColor = '#f59e0b';
              textColor = '#fbbf24';
            }

            const width = isRoot ? 32 : 36;
            const height = isRoot ? 32 : 36;
            const rx = 8;

            return (
              <g
                key={`node-${n.id}`}
                style={{ transition: 'all 0.2s ease', cursor: 'default' }}
              >
                {/* Extra ring for end-of-word nodes (isWord) */}
                {isWord && (
                  <rect
                    x={n.x - width / 2 - 3.5}
                    y={n.y - height / 2 - 3.5}
                    width={width + 7}
                    height={height + 7}
                    rx={rx + 2.5}
                    fill="none"
                    stroke={ringColor}
                    strokeWidth="1.5"
                    strokeDasharray="none"
                    style={{
                      filter: 'drop-shadow(0 0 4px rgba(16, 185, 129, 0.5))',
                      transition: 'all 0.2s ease'
                    }}
                  />
                )}

                {/* Main Node Box */}
                <rect
                  x={n.x - width / 2}
                  y={n.y - height / 2}
                  width={width}
                  height={height}
                  rx={rx}
                  fill={bgColor}
                  stroke={borderColor}
                  strokeWidth={isActive ? 2.5 : 1.8}
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 0 12px rgba(249, 115, 22, 0.6))'
                      : isWord
                      ? 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))'
                      : 'none',
                    transition: 'all 0.2s ease'
                  }}
                />

                {/* Node Text / Character */}
                <text
                  x={n.x}
                  y={n.y + (isRoot ? 4 : 5)}
                  textAnchor="middle"
                  fill={textColor}
                  fontSize={isRoot ? 22 : 16}
                  fontWeight={isRoot ? '900' : '700'}
                  className="font-mono"
                  style={{
                    userSelect: 'none',
                    textShadow: isActive
                      ? '0 0 8px rgba(249, 115, 22, 0.6)'
                      : isWord
                      ? '0 0 6px rgba(16, 185, 129, 0.5)'
                      : 'none'
                  }}
                >
                  {n.char}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Legend below tree */}
      <div
        className="font-mono"
        style={{
          fontSize: '11px',
          color: 'var(--text-mute)',
          marginTop: '12px',
          letterSpacing: '0.04em',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        <span>○ = node</span>
        <span>·</span>
        <span style={{ color: '#34d399', fontWeight: 600 }}>◉ ringed = end of a word</span>
      </div>

      {/* Active Word / Operation Display */}
      {currentWord && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '12px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(249, 115, 22, 0.12)',
            border: '1px solid rgba(249, 115, 22, 0.35)'
          }}
        >
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', textTransform: 'uppercase' }}>
            Processing:
          </span>
          <div style={{ display: 'flex', gap: '3px' }}>
            {currentWord.split('').map((ch, idx) => {
              const isCurrent = charIndex === idx;
              const isPast = charIndex !== undefined && idx < charIndex;
              return (
                <span
                  key={idx}
                  className="font-mono"
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    padding: '1px 5px',
                    borderRadius: '4px',
                    backgroundColor: isCurrent ? '#f97316' : isPast ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                    color: isCurrent ? '#ffffff' : isPast ? '#34d399' : 'var(--text-ink)',
                    border: isCurrent ? '1px solid #f97316' : isPast ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid transparent'
                  }}
                >
                  {ch}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* Word list / Stored Words Pills */}
      {words && words.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)' }}>
            Stored Words:
          </span>
          {words.map((w, idx) => (
            <span
              key={idx}
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                color: '#34d399'
              }}
            >
              "{w}"
            </span>
          ))}
        </div>
      )}

      {/* Matched / Found Suggestions */}
      {suggestions && suggestions.length > 0 && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)' }}>
            Autocomplete:
          </span>
          {suggestions.map((s, idx) => (
            <span
              key={idx}
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                padding: '2px 8px',
                borderRadius: '6px',
                backgroundColor: 'rgba(56, 189, 248, 0.18)',
                border: '1px solid rgba(56, 189, 248, 0.5)',
                color: '#38bdf8'
              }}
            >
              "{s}"
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
