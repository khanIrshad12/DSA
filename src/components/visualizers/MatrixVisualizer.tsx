import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface MatrixVisualizerProps {
  data?: number[][];
  step: Step;
}

export const MatrixVisualizer: React.FC<MatrixVisualizerProps> = ({ data, step }) => {
  const matrix = (step.matrix || data || [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
  ]) as number[][];
  
  const gridHighlights = step.gridHighlights || [];
  const numCols = matrix[0]?.length || 1;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 10px',
        width: '100%'
      }}
    >
      {/* Matrix Header Label */}
      <div
        className="font-mono"
        style={{
          fontSize: '11px',
          fontWeight: 700,
          color: 'var(--text-faint)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '14px',
          textAlign: 'center'
        }}
      >
        {step.customVisual?.label || `${matrix.length} × ${numCols} GRID · READ AS A FLAT SORTED ARRAY OF LENGTH ${matrix.length * numCols}`}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {matrix.map((row, r) => (
          <div key={r} style={{ display: 'flex', gap: '8px' }}>
            {row.map((val, c) => {
              const flatIdx = r * numCols + c;
              const gridH = gridHighlights.find(h => h.r === r && h.c === c);
              const isFlatActive = step.highlights?.includes(flatIdx);
              const isFlatDimmed = step.dimmed?.includes(flatIdx);
              const isVisited = gridH?.status === 'visited';
              const isActive = gridH?.status === 'active' || isFlatActive;

              const isStringVal = typeof val === 'string';
              const showCoords = !step.customVisual?.hideCoords && !isStringVal;
              const isTarget = gridH?.status === 'target';
              const hasDfsBadge = gridH?.badge === 'dfs' || (isActive && isStringVal);

              if (isActive || isTarget) {
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.15)';
                textColor = 'var(--accent)';
              } else if (isVisited) {
                borderColor = 'var(--color-green)';
                bgColor = 'rgba(16, 185, 129, 0.12)';
                textColor = 'var(--color-green)';
              } else if (isFlatDimmed) {
                borderColor = 'var(--border-ink-soft)';
                bgColor = 'var(--bg-paper)';
                textColor = 'var(--text-faint)';
              } else {
                borderColor = 'rgba(255, 255, 255, 0.35)';
                bgColor = 'var(--bg-surface)';
                textColor = 'var(--text-ink)';
              }

              return (
                <div
                  key={c}
                  className={`sketch-border visualizer-cell ${isActive ? 'animate-item-active' : ''}`}
                  style={{
                    width: '54px',
                    height: '54px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    border: `2px solid ${borderColor}`,
                    backgroundColor: bgColor,
                    color: textColor,
                    opacity: isFlatDimmed ? 0.35 : 1,
                    boxShadow: isActive ? '0 0 16px var(--accent-glow)' : 'none',
                    transform: isActive || isTarget ? 'scale(1.05)' : 'none',
                    transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    position: 'relative'
                  }}
                >
                  {hasDfsBadge ? (
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '13px',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        letterSpacing: '0.02em',
                        border: '1.5px solid var(--accent)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 120, 40, 0.15)',
                        lineHeight: 1.2
                      }}
                    >
                      dfs
                    </div>
                  ) : (
                    <span
                      className={isStringVal ? "font-mono" : "font-hand"}
                      style={{
                        fontSize: isStringVal ? '19px' : '22px',
                        fontWeight: 700
                      }}
                    >
                      <DialValue value={val} />
                    </span>
                  )}
                  {showCoords && (
                    <span className="font-mono" style={{ fontSize: '8.5px', color: isActive ? 'var(--accent)' : 'var(--text-mute)', marginTop: '-2px' }}>
                      ({r},{c})
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '16px',
            padding: '8px 20px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '13px',
            fontWeight: 700,
            borderRadius: '8px',
            boxShadow: '0 0 12px rgba(46, 213, 115, 0.25)'
          }}
        >
          ✓ {step.best.label}
        </div>
      )}
    </div>
  );
};
