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
        {(step.matrix as any)?.title || step.customVisual?.label || `${matrix.length} × ${numCols} GRID · READ AS A FLAT SORTED ARRAY OF LENGTH ${matrix.length * numCols}`}
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
              const isPacific = gridH?.status === 'pacific';
              const isAtlantic = gridH?.status === 'atlantic';
              const isBoth = gridH?.status === 'both';
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

              const isSettled = gridH?.status === 'settled';
              const isPop = gridH?.status === 'pop' || (typeof val === 'string' && val === 'pop');
              const isNbr = gridH?.status === 'nbr' || (typeof val === 'string' && val === 'nbr');
              const isSrc = gridH?.status === 'src' || (typeof val === 'string' && val === 'src');
              const isDst = gridH?.status === 'dst' || (typeof val === 'string' && val === 'dst');

              const matrixTitle = String((step.matrix as any)?.title || step.customVisual?.label || '');
              const isOrangesProblem = matrixTitle.includes('ROTTEN') || matrixTitle.includes('FRESH');

              // Layer / Distance / Problem-specific color mapping
              const strVal = String(val);
              const isLayer0 = strVal === '0';
              const isLayer1 = strVal === '1';
              const isLayer2 = strVal === '2';
              const isLayer3 = strVal === '3';
              const isLayer4 = strVal === '4';
              const isDot = strVal === '·';

              if (isOrangesProblem) {
                if (strVal === '0') {
                  borderColor = 'rgba(255, 255, 255, 0.25)';
                  bgColor = 'rgba(255, 255, 255, 0.03)';
                  textColor = 'rgba(255, 255, 255, 0.45)';
                } else if (strVal === '1') {
                  borderColor = 'rgba(255, 255, 255, 0.55)';
                  bgColor = 'rgba(255, 255, 255, 0.05)';
                  textColor = '#ffffff';
                } else if (strVal === '2') {
                  // Default rotten is green
                  borderColor = 'rgba(16, 185, 129, 0.8)';
                  bgColor = 'rgba(16, 185, 129, 0.14)';
                  textColor = '#10b981';
                }
              } else {
                if (isLayer0) {
                  borderColor = 'rgba(16, 185, 129, 0.75)';
                  bgColor = 'rgba(16, 185, 129, 0.14)';
                  textColor = '#10b981';
                } else if (isLayer1) {
                  borderColor = 'rgba(56, 189, 248, 0.65)';
                  bgColor = 'rgba(14, 165, 233, 0.14)';
                  textColor = '#38bdf8';
                } else if (isLayer2) {
                  borderColor = 'rgba(96, 165, 250, 0.65)';
                  bgColor = 'rgba(59, 130, 246, 0.14)';
                  textColor = '#93c5fd';
                } else if (isLayer3) {
                  borderColor = 'rgba(234, 179, 8, 0.75)';
                  bgColor = 'rgba(234, 179, 8, 0.14)';
                  textColor = '#facc15';
                } else if (isLayer4) {
                  borderColor = 'rgba(168, 85, 247, 0.75)';
                  bgColor = 'rgba(168, 85, 247, 0.14)';
                  textColor = '#c084fc';
                } else if (isDot) {
                  borderColor = 'rgba(255, 255, 255, 0.22)';
                  bgColor = 'var(--bg-surface)';
                  textColor = 'rgba(255, 255, 255, 0.35)';
                }
              }

              const isGoldRing = gridH?.status === 'gold' || gridH?.status === 'new-rotted';
              if (isGoldRing) {
                borderColor = 'rgba(234, 179, 8, 0.85)';
                bgColor = 'rgba(234, 179, 8, 0.18)';
                textColor = '#facc15';
                isSpecialFocus = true;
                focusShadow = '0 0 14px rgba(234, 179, 8, 0.35)';
              }

              if (gridH?.status === 'visited-target' || isSettled) {
                borderColor = 'var(--color-green)';
                bgColor = 'rgba(16, 185, 129, 0.2)';
                textColor = 'var(--color-green)';
                isSpecialFocus = true;
                focusShadow = '0 0 14px rgba(46, 213, 115, 0.35)';
              } else if (isPop) {
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.22)';
                textColor = 'var(--accent)';
                isSpecialFocus = true;
                focusShadow = '0 0 16px var(--accent-glow)';
              } else if (isNbr) {
                borderColor = '#06b6d4';
                bgColor = 'rgba(6, 182, 212, 0.18)';
                textColor = '#06b6d4';
                isSpecialFocus = true;
                focusShadow = '0 0 14px rgba(6, 182, 212, 0.4)';
              } else if (isSrc || isDst) {
                borderColor = isSrc ? 'var(--accent)' : 'var(--color-green)';
                bgColor = isSrc ? 'rgba(255, 120, 40, 0.15)' : 'rgba(16, 185, 129, 0.15)';
                textColor = isSrc ? 'var(--accent)' : 'var(--color-green)';
                isSpecialFocus = true;
              } else if (isCaptured) {
                borderColor = '#ef4444';
                bgColor = 'rgba(239, 68, 68, 0.2)';
                textColor = '#ef4444';
                isSpecialFocus = true;
                focusShadow = '0 0 16px rgba(239, 68, 68, 0.45)';
              } else if (isBoth) {
                borderColor = 'var(--color-green)';
                bgColor = 'rgba(16, 185, 129, 0.24)';
                textColor = 'var(--color-green)';
                isSpecialFocus = true;
                focusShadow = '0 0 16px rgba(46, 213, 115, 0.5)';
              } else if (isActive) {
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.2)';
                textColor = 'var(--accent)';
                isSpecialFocus = true;
                focusShadow = '0 0 16px var(--accent-glow)';
              } else if (isTarget) {
                borderColor = 'rgba(239, 68, 68, 0.45)';
                bgColor = 'rgba(239, 68, 68, 0.08)';
                textColor = '#f87171';
                focusShadow = '0 0 10px rgba(239, 68, 68, 0.25)';
              } else if (isPacific) {
                borderColor = '#0284c7';
                bgColor = 'rgba(14, 165, 233, 0.16)';
                textColor = '#38bdf8';
              } else if (isAtlantic) {
                borderColor = '#a855f7';
                bgColor = 'rgba(168, 85, 247, 0.16)';
                textColor = '#c084fc';
              } else if (isVisited) {
                if (!isLayer0 && !isLayer1 && !isLayer2 && !isLayer3 && !isLayer4) {
                  borderColor = 'var(--color-green)';
                  bgColor = 'rgba(16, 185, 129, 0.14)';
                  textColor = 'var(--color-green)';
                }
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
              if (badgeText === 'safe' || badgeText === 'both' || isSettled) {
                badgeColor = 'var(--color-green)';
                badgeBg = 'rgba(16, 185, 129, 0.22)';
              } else if (badgeText === 'pac') {
                badgeColor = '#38bdf8';
                badgeBg = 'rgba(14, 165, 233, 0.2)';
              } else if (badgeText === 'atl') {
                badgeColor = '#c084fc';
                badgeBg = 'rgba(168, 85, 247, 0.2)';
              } else if (badgeText === 'flip' || badgeText === 'captured') {
                badgeColor = '#ef4444';
                badgeBg = 'rgba(239, 68, 68, 0.22)';
              } else if (badgeText === 'knight' || badgeText === 'target') {
                badgeColor = 'var(--accent)';
                badgeBg = 'rgba(255, 120, 40, 0.18)';
                borderColor = 'var(--accent)';
                bgColor = 'rgba(255, 120, 40, 0.18)';
                isSpecialFocus = true;
                focusShadow = '0 0 16px var(--accent-glow)';
              } else if (isNbr) {
                badgeColor = '#06b6d4';
                badgeBg = 'rgba(6, 182, 212, 0.2)';
              }

              const isArrowBadge = badgeText === '→' || badgeText === '↓' || badgeText === '←' || badgeText === '↑';
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
                  {isArrowBadge ? (
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: 'var(--accent)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '26px',
                        height: '26px',
                        borderRadius: '6px',
                        border: '1.5px solid var(--accent)',
                        backgroundColor: 'rgba(255, 120, 40, 0.15)',
                        lineHeight: 1
                      }}
                    >
                      {badgeText}
                    </div>
                  ) : hasBadge ? (
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
                      className="font-mono"
                      style={{
                        fontSize: val === '·' ? '22px' : '18px',
                        fontWeight: val === '·' ? 400 : 800,
                        color: textColor,
                        lineHeight: 1
                      }}
                    >
                      {typeof val === 'number' ? <DialValue value={val} /> : val}
                    </span>
                  )}
                  {showCoords && !hasBadge && (
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

      {/* Spiral Order / Secondary Array Collector Container */}
      {step.customVisual?.spiralOrder !== undefined && (
        <div style={{ marginTop: '22px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              letterSpacing: '0.08em',
              marginBottom: '8px'
            }}
          >
            {step.customVisual.spiralOrderLabel || 'SPIRAL ORDER'}
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              flexWrap: 'wrap',
              maxWidth: '520px'
            }}
          >
            {step.customVisual.spiralOrder.length === 0 ? (
              <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-faint)' }}>
                (empty)
              </span>
            ) : (
              step.customVisual.spiralOrder.map((v: any, i: number) => (
                <div
                  key={i}
                  className="sketch-border visualizer-cell"
                  style={{
                    width: '32px',
                    height: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: '1.5px solid rgba(255, 255, 255, 0.3)',
                    backgroundColor: 'var(--bg-surface)',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--text-ink)'
                  }}
                >
                  {v}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Horizontal FIFO Queue (for BFS over Matrix/Grids) */}
      {(step.queue !== undefined && step.queue !== null) && (
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            {step.customVisual?.queueTitle || 'QUEUE · CELLS TO EXPAND'}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              maxWidth: '90vw',
              overflowX: 'auto',
              padding: '2px 4px'
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
                gap: '4px',
                flexShrink: 0
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
                justifyContent: step.queue.length === 0 ? 'center' : 'flex-start',
                boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.4)',
                overflowX: 'auto'
              }}
            >
              {step.queue.length === 0 ? (
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
                step.queue.map((item: any, idx: number) => {
                  const itemVal = typeof item === 'object' ? (item.val ?? item.id ?? JSON.stringify(item)) : String(item);
                  const itemSub = typeof item === 'object' ? item.sub : null;
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
                        transition: 'all 0.15s ease',
                        flexShrink: 0
                      }}
                    >
                      <span style={{ fontSize: '11px', fontWeight: 700, lineHeight: 1.1 }}>{itemVal}</span>
                      {itemSub && (
                        <span style={{ fontSize: '8px', color: isFront ? 'var(--accent)' : 'var(--text-mute)', fontWeight: 600, marginTop: '1px' }}>
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
                gap: '4px',
                flexShrink: 0
              }}
            >
              <span>←</span>
              <span>back</span>
            </div>
          </div>
        </div>
      )}

      {/* Priority Queue Container (Horizontal) */}
      {(step as any).pq !== undefined && (
        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '9px',
              textTransform: 'uppercase',
              color: 'var(--text-mute)',
              letterSpacing: '0.06em',
              marginBottom: '6px',
              fontWeight: 700
            }}
          >
            {(step as any).pqTitle || 'MIN-EFFORT PRIORITY QUEUE'}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--accent)', fontWeight: 700 }}>
              front →
            </span>
            <div
              style={{
                minWidth: '120px',
                minHeight: '44px',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '8px',
                padding: '4px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: 'rgba(26, 23, 20, 0.6)'
              }}
            >
              {!(step as any).pq || (step as any).pq.length === 0 ? (
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)' }}>
                  (empty)
                </span>
              ) : (
                (step as any).pq.map((item: any, idx: number) => {
                  const cellText = typeof item === 'object' ? item.cell : item;
                  const effText = typeof item === 'object' && item.eff !== undefined ? `eff ${item.eff}` : null;
                  return (
                    <div
                      key={idx}
                      style={{
                        padding: '3px 8px',
                        borderRadius: '6px',
                        border: '1.5px solid var(--accent)',
                        backgroundColor: 'var(--bg-surface-elevated)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1px'
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-ink)' }}>
                        {cellText}
                      </span>
                      {effText && (
                        <span className="font-mono" style={{ fontSize: '8.5px', color: 'var(--text-mute)' }}>
                          {effText}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)' }}>
              ← back
            </span>
          </div>
        </div>
      )}

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
