import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface MatrixVisualizerProps {
  data?: number[][];
  step: Step;
}

export const MatrixVisualizer: React.FC<MatrixVisualizerProps> = ({ data, step }) => {
  const rawMatrix = (step.matrix && Array.isArray((step.matrix as any).grid))
    ? (step.matrix as any).grid
    : (Array.isArray(step.matrix)
        ? step.matrix
        : (data && Array.isArray((data as any).grid)
            ? (data as any).grid
            : (Array.isArray(data) ? data : [
                [1, 3, 5, 7],
                [10, 11, 16, 20],
                [23, 30, 34, 60]
              ])));

  const matrix = (Array.isArray(rawMatrix) ? rawMatrix : []) as (number | string)[][];
  const gridHighlights = [...(step.gridHighlights || [])];

  const activeCell = (step.matrix as any)?.activeCell;
  if (Array.isArray(activeCell) && activeCell.length === 2) {
    const [ar, ac] = activeCell;
    if (!gridHighlights.some(h => h.r === ar && h.c === ac)) {
      gridHighlights.push({ r: ar, c: ac, status: 'active' });
    }
  }

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
              const isVisited = gridH?.status === 'visited' || gridH?.status === 'safe';
              const isCaptured = gridH?.status === 'captured';
              const isBorderHighlight = gridH?.status === 'border-highlight';
              const isActive = gridH?.status === 'active' || isFlatActive;

              const isStringVal = typeof val === 'string';
              const showCoords = !step.customVisual?.hideCoords && !isStringVal;
              const isTarget = gridH?.status === 'target';
              const hasBadge = !!gridH?.badge || (isActive && isStringVal);
              const badgeText = gridH?.badge || (isStringVal ? 'dfs' : '');

              let borderColor = 'rgba(255, 255, 255, 0.35)';
              let bgColor = 'var(--bg-surface)';
              let textColor = 'var(--text-ink)';
              let isSpecialFocus = false;
              let focusShadow = 'none';

              if (gridH?.status === 'visited-target') {
                borderColor = 'var(--color-green)';
                bgColor = 'rgba(16, 185, 129, 0.3)';
                textColor = '#ffffff';
                isSpecialFocus = true;
                focusShadow = '0 0 14px rgba(46, 213, 115, 0.45)';
              } else if (isCaptured) {
                borderColor = '#ef4444';
                bgColor = 'rgba(239, 68, 68, 0.2)';
                textColor = '#ef4444';
                isSpecialFocus = true;
                focusShadow = '0 0 16px rgba(239, 68, 68, 0.45)';
              } else if (isActive || isTarget) {
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.18)';
                textColor = 'var(--accent)';
                isSpecialFocus = true;
                focusShadow = '0 0 16px var(--accent-glow)';
              } else if (isVisited) {
                borderColor = 'var(--color-green)';
                bgColor = 'rgba(16, 185, 129, 0.14)';
                textColor = 'var(--color-green)';
              } else if (isBorderHighlight) {
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.08)';
                textColor = 'var(--accent)';
              } else if (isFlatDimmed) {
                borderColor = 'var(--border-ink-soft)';
                bgColor = 'var(--bg-paper)';
                textColor = 'var(--text-faint)';
              }

              // Distinct badge styles
              let badgeColor = 'var(--accent)';
              let badgeBg = 'rgba(255, 120, 40, 0.18)';
              if (badgeText === 'safe') {
                badgeColor = 'var(--color-green)';
                badgeBg = 'rgba(16, 185, 129, 0.22)';
              } else if (badgeText === 'flip' || badgeText === 'captured') {
                badgeColor = '#ef4444';
                badgeBg = 'rgba(239, 68, 68, 0.22)';
              }

              const isFlipAnimation = isCaptured || badgeText === 'flip';

              return (
                <div
                  key={c}
                  className={`sketch-border visualizer-cell ${isActive ? 'animate-item-active' : ''} ${isFlipAnimation ? 'animate-cell-flip' : ''}`}
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
                    boxShadow: isSpecialFocus ? focusShadow : 'none',
                    transform: isSpecialFocus ? 'scale(1.06)' : 'scale(1)',
                    transition: 'all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    position: 'relative',
                    perspective: '400px'
                  }}
                >
                  {hasBadge ? (
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '12px',
                        fontWeight: 800,
                        color: badgeColor,
                        letterSpacing: '0.02em',
                        border: `1.5px solid ${badgeColor}`,
                        padding: '2px 5px',
                        borderRadius: '4px',
                        backgroundColor: badgeBg,
                        lineHeight: 1.2
                      }}
                    >
                      {badgeText}
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
