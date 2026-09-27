import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface ArrayVisualizerProps {
  data: (number | string)[];
  step: Step;
}

export const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ data, step }) => {
  const currentData: (number | string)[] = (step.customVisual?.array || (step.matrix && step.matrix[0]) || data);
  const isColorSort = step.customVisual?.isColorSort || false;

  const getPointerColor = (color?: string) => {
    if (color === 'accent') return 'var(--accent)';
    if (color === 'accent2' || color === 'blue' || color === 'cyan') return '#38bdf8';
    if (color === 'green') return 'var(--color-green)';
    if (color === 'red') return 'var(--color-red)';
    if (color === 'purple') return 'var(--color-purple)';
    if (color === 'amber') return 'var(--color-amber)';
    return 'var(--accent)';
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 10px',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Custom Banner if present (e.g. star result summary) */}
      {step.customVisual?.banner && (
        <div
          className="font-mono"
          style={{
            marginBottom: '16px',
            fontSize: '15px',
            fontWeight: 700,
            color: '#f59e0b',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '0.02em',
            textShadow: '0 0 12px rgba(245, 158, 11, 0.4)'
          }}
        >
          {step.customVisual.banner}
        </div>
      )}

      {/* Visual Window bounding box if present */}
      {step.window && (
        <div
          style={{
            marginBottom: '10px',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-soft)',
            padding: '2px 8px',
            borderRadius: '4px',
            border: '1px solid var(--accent-border)'
          }}
        >
          {step.window.label || `Window [${step.window.start} .. ${step.window.end}]`}
        </div>
      )}

      {/* Top Pointers or Brackets / Padding Bracket */}
      <div style={{ display: 'flex', gap: '12px', height: '36px', alignItems: 'flex-end', marginBottom: '6px', position: 'relative' }}>
        {/* Support multiple brackets (e.g. HIGH BLOCK, LOW BLOCK, SORTED HALF, ROW brackets, DAY brackets) */}
        {step.customVisual?.brackets?.map((b: any, bIdx: number) => {
          let bColor = 'var(--color-amber)';
          if (b.color === 'blue' || b.color === 'accent2') bColor = 'var(--accent2)';
          else if (b.color === 'green') bColor = 'var(--color-green)';
          else if (b.color === 'red') bColor = 'var(--color-red)';
          else if (b.color === 'purple') bColor = 'var(--color-purple)';
          else if (b.color === 'gray' || b.color === 'white' || b.color === 'faint') bColor = 'var(--text-mute)';
          else if (b.color === 'amber' || b.color === 'accent') bColor = 'var(--accent)';
          return (
            <div
              key={bIdx}
              style={{
                position: 'absolute',
                top: '2px',
                left: `${b.start * 76}px`,
                width: `${(b.end - b.start + 1) * 76 - 12}px`,
                borderTop: `2px solid ${bColor}`,
                borderLeft: `2px solid ${bColor}`,
                borderRight: `2px solid ${bColor}`,
                height: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5
              }}
            >
              <span
                className="font-mono"
                style={{
                  position: 'absolute',
                  top: '-16px',
                  fontSize: '9.5px',
                  fontWeight: 700,
                  color: bColor,
                  letterSpacing: '0.08em',
                  backgroundColor: 'var(--bg-paper)',
                  padding: '0 5px',
                  borderRadius: '2px',
                  border: `1px solid ${bColor}40`,
                  whiteSpace: 'nowrap'
                }}
              >
                {b.label}
              </span>
            </div>
          );
        })}

        {/* Padding bracket outline over range (e.g. Merge Sorted Array) */}
        {step.customVisual?.padding && (
          <div
            style={{
              position: 'absolute',
              top: '2px',
              left: `${step.customVisual.padding.start * 76}px`,
              width: `${(step.customVisual.padding.end - step.customVisual.padding.start + 1) * 76 - 12}px`,
              borderTop: '2px solid var(--text-faint)',
              borderLeft: '2px solid var(--text-faint)',
              borderRight: '2px solid var(--text-faint)',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <span
              className="font-mono"
              style={{
                position: 'absolute',
                top: '-16px',
                fontSize: '9.5px',
                fontWeight: 700,
                color: 'var(--text-faint)',
                letterSpacing: '0.08em',
                backgroundColor: 'var(--bg-paper)',
                padding: '0 4px'
              }}
            >
              {step.customVisual.padding.label || 'PADDING'}
            </span>
          </div>
        )}

        {currentData.map((_, idx) => {
          const topPointers = (step.pointers || []).filter(p => p.index === idx && p.position === 'top');
          return (
            <div
              key={idx}
              className="pointer-container"
              style={{
                width: '64px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              {topPointers.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className="animate-pointer-float-top"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: getPointerColor(p.color)
                  }}
                >
                  <span style={{ fontSize: '13px', lineHeight: 1 }}>▼</span>
                  <span className="font-mono" style={{ fontSize: '13px', fontWeight: 700 }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Array Element Boxes */}
      <div style={{ display: 'flex', gap: '12px', position: 'relative' }}>
        {/* Sliding window bounding box outline & top label */}
        {step.window && (() => {
          const isInvalid = (step.window.label?.includes('DUPLICATE') || step.window.label?.includes('✕') || step.window.label?.includes('INVALID') || step.window.label?.includes('DISQUALIFIED'));
          const isOptimal = (step.window.label?.includes('Optimal') || step.window.label?.includes('MATCH') || step.window.label?.includes('Max Window') || step.window.label?.includes('Result'));
          const winColor = isInvalid ? 'var(--color-red)' : isOptimal ? 'var(--color-green)' : 'var(--accent)';
          const winBg = isInvalid ? 'rgba(248, 113, 113, 0.12)' : isOptimal ? 'rgba(52, 211, 153, 0.12)' : 'var(--accent-soft)';
          const winBorder = isInvalid ? 'rgba(248, 113, 113, 0.45)' : isOptimal ? 'rgba(52, 211, 153, 0.45)' : 'var(--accent-border)';

          return (
            <>
              {/* Window Banner Tag centered over window */}
              <div
                style={{
                  position: 'absolute',
                  top: '-24px',
                  left: `${step.window.start * 76}px`,
                  width: `${(step.window.end - step.window.start + 1) * 76 - 12}px`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 2,
                  pointerEvents: 'none'
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '9.5px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: winColor,
                    backgroundColor: 'var(--bg-paper)',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    border: `1px solid ${winBorder}`,
                    whiteSpace: 'nowrap',
                    boxShadow: `0 0 8px ${winColor}30`
                  }}
                >
                  {step.window.label || `WINDOW K=${step.window.end - step.window.start + 1}`}
                </div>
              </div>

              {/* Window Box Outline */}
              <div
                style={{
                  position: 'absolute',
                  top: '-6px',
                  bottom: '-6px',
                  left: `${step.window.start * 76}px`,
                  width: `${(step.window.end - step.window.start + 1) * 76 - 12}px`,
                  border: `2px dashed ${winColor}`,
                  borderRadius: '10px',
                  backgroundColor: winBg,
                  pointerEvents: 'none',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 0
                }}
              />
            </>
          );
        })()}

        {(() => {
          const narrationLower = (step.narration || '').toLowerCase();
          const isSwapStep = narrationLower.includes('swap') || narrationLower.includes('trade') || narrationLower.includes('exchange') || narrationLower.includes('partition') || narrationLower.includes('reverse') || narrationLower.includes('invert');
          const isPopStep = narrationLower.includes('remove') || narrationLower.includes('delete') || narrationLower.includes('pop') || narrationLower.includes('discard') || narrationLower.includes('duplicate');
          const isPushStep = narrationLower.includes('insert') || narrationLower.includes('push') || narrationLower.includes('add') || narrationLower.includes('append');

          const swapPair = step.customVisual?.swap || (step.highlights && step.highlights.length === 2 && isSwapStep ? step.highlights : null);

          return currentData.map((val, idx) => {
            const isHighlighted = step.highlights?.includes(idx);
            const isDimmed = step.dimmed?.includes(idx);
            const isBest = step.best?.indices?.includes(idx);
            const pointersAtIndex = (step.pointers || []).filter(p => p.index === idx && p.position !== 'top');
            const primaryPointer = pointersAtIndex[0];
            const isSwap1 = swapPair && swapPair[0] === idx;
            const isSwap2 = swapPair && swapPair[1] === idx;
            const isPopTarget = isPopStep && isHighlighted;
            const isNewPushTarget = isPushStep && (idx === currentData.length - 1 || isHighlighted);

            let animClass = '';
            if (isSwap1) animClass = 'swap-box-animate-1';
            else if (isSwap2) animClass = 'swap-box-animate-2';
            else if (isPopTarget) animClass = 'animate-item-remove';
            else if (isNewPushTarget) animClass = 'animate-item-enter';
            else if (isHighlighted) animClass = 'animate-item-active';

            let borderColor = 'var(--border-ink)';
            let bgColor = 'var(--bg-surface)';
            let textColor = 'var(--text-ink)';

            // Dutch National Flag Color Coding (0=Red, 1=White, 2=Blue)
            if (isColorSort) {
              if (val === 0 || val === '0') {
                bgColor = '#fee2e2';
                borderColor = '#f87171';
                textColor = '#dc2626';
              } else if (val === 1 || val === '1') {
                bgColor = '#ffffff';
                borderColor = '#cbd5e1';
                textColor = '#0f172a';
              } else if (val === 2 || val === '2') {
                bgColor = '#dbeafe';
                borderColor = '#60a5fa';
                textColor = '#2563eb';
              }
            }

            const matchingBracket = step.customVisual?.brackets?.find((b: any) => idx >= b.start && idx <= b.end);
            let bracketColor: string | null = null;
            if (matchingBracket) {
              if (matchingBracket.color === 'blue' || matchingBracket.color === 'accent2') bracketColor = 'var(--accent2)';
              else if (matchingBracket.color === 'green') bracketColor = 'var(--color-green)';
              else if (matchingBracket.color === 'red') bracketColor = 'var(--color-red)';
              else if (matchingBracket.color === 'purple') bracketColor = 'var(--color-purple)';
              else if (matchingBracket.color === 'gray' || matchingBracket.color === 'white' || matchingBracket.color === 'faint') bracketColor = 'var(--text-mute)';
              else if (matchingBracket.color === 'amber' || matchingBracket.color === 'accent') bracketColor = 'var(--accent)';
              else bracketColor = 'var(--accent)';
            }

            if (matchingBracket && bracketColor) {
              borderColor = bracketColor;
              bgColor = isHighlighted ? `${bracketColor}25` : `${bracketColor}10`;
              textColor = '#ffffff';
            }

            if (isSwap1 || isSwap2) {
              borderColor = 'var(--accent)';
              bgColor = 'var(--accent-soft)';
              textColor = '#ffffff';
            } else if (isPopTarget) {
              borderColor = 'var(--color-red)';
              bgColor = 'rgba(248, 113, 113, 0.25)';
              textColor = '#ffffff';
            } else if (isBest && !matchingBracket) {
              borderColor = 'var(--color-green)';
              bgColor = 'var(--color-green-soft)';
              textColor = 'var(--color-green)';
            } else if (isHighlighted) {
              borderColor = bracketColor || (primaryPointer ? getPointerColor(primaryPointer.color) : 'var(--accent)');
              bgColor = isColorSort ? bgColor : (bracketColor ? `${bracketColor}30` : (primaryPointer ? `${getPointerColor(primaryPointer.color)}25` : 'var(--accent-soft)'));
              textColor = isColorSort ? textColor : '#ffffff';
            } else if (isDimmed) {
              textColor = 'var(--text-faint)';
              bgColor = 'var(--bg-paper)';
              borderColor = 'var(--border-ink-soft)';
            }

            return (
              <div key={idx} style={{ position: 'relative' }}>
                {isSwap1 && (
                  <div
                    className="swap-badge-pop font-mono"
                    style={{
                      position: 'absolute',
                      top: '-24px',
                      left: '70px',
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
                {isPopTarget && (
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
                {isNewPushTarget && !isSwap1 && !isSwap2 && (
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
                    <span>+ ADD</span>
                  </div>
                )}
                <div
                  className={`sketch-border visualizer-cell ${animClass}`}
                  style={{
                    width: '64px',
                    height: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderColor: borderColor,
                    backgroundColor: bgColor,
                    color: textColor,
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isHighlighted && !animClass.includes('animate-') && !animClass.includes('swap-') ? 'scale(1.06)' : undefined,
                    boxShadow: isSwap1 || isSwap2 ? '0 0 20px var(--accent-glow)' : isHighlighted ? `0 0 16px ${borderColor}70` : (matchingBracket && bracketColor ? `0 0 10px ${bracketColor}30` : 'none'),
                    overflow: 'hidden',
                    zIndex: isSwap1 || isSwap2 ? 15 : 1
                  }}
                >
                  <DialValue
                    value={val}
                    className="font-hand"
                    style={{ fontSize: '32px', fontWeight: 700 }}
                  />
                </div>
              </div>
            );
          });
        })()}
      </div>

      {/* Indices Row */}
      <div style={{ display: 'flex', gap: '12px', marginTop: '6px' }}>
        {currentData.map((_, idx) => (
          <div
            key={idx}
            className="font-mono"
            style={{
              width: '64px',
              textAlign: 'center',
              fontSize: '11px',
              color: 'var(--text-mute)'
            }}
          >
            [{idx}]
          </div>
        ))}
      </div>

      {/* Bottom Pointers */}
      <div style={{ display: 'flex', gap: '12px', height: '42px', marginTop: '4px' }}>
        {currentData.map((_, idx) => {
          const bottomPointers = (step.pointers || []).filter(p => p.index === idx && p.position !== 'top');
          return (
            <div
              key={idx}
              className="pointer-container"
              style={{
                width: '64px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              {bottomPointers.map((p, pIdx) => (
                <div
                  key={pIdx}
                  className="animate-pointer-float-bottom"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: getPointerColor(p.color)
                  }}
                >
                  <span style={{ fontSize: '13px', lineHeight: 1 }}>▲</span>
                  <span className="font-mono" style={{ fontSize: '13px', fontWeight: 700 }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Secondary Array Display (e.g. T = "NAGARAM", NUMS2, OUTPUT, AUX) */}
      {step.customVisual?.secondaryArray && (() => {
        const sec = step.customVisual.secondaryArray;
        const secArray = Array.isArray(sec) ? sec : (sec.array || []);
        const secLabel = Array.isArray(sec) ? (step.customVisual.secondaryLabel || 'AUX') : (sec.label || 'AUX');
        const secHighlights = Array.isArray(sec) ? (step.secondaryHighlights || []) : (sec.highlights || step.secondaryHighlights || []);
        const secPointers = Array.isArray(sec) ? [] : (sec.pointers || []);

        return (
          <div style={{ marginTop: '18px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--text-faint)',
                letterSpacing: '0.08em',
                marginBottom: '6px'
              }}
            >
              {secLabel}
            </div>
            <div style={{ display: 'flex', gap: '12px', minHeight: '64px', alignItems: 'center' }}>
              {secArray.length === 0 ? (
                <div
                  style={{
                    fontSize: '12px',
                    color: 'var(--text-faint)',
                    fontStyle: 'italic',
                    padding: '10px 16px',
                    border: '1px dashed var(--border-ink-soft)',
                    borderRadius: '6px'
                  }}
                >
                  [ empty ]
                </div>
              ) : (
                secArray.map((val: any, uIdx: number) => {
                  const isSecHighlighted = secHighlights.includes(uIdx);
                  const activePointers = secPointers.filter((p: any) => p.index === uIdx);

                  return (
                    <div key={uIdx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div
                        className="sketch-border visualizer-cell"
                        style={{
                          width: '64px',
                          height: '64px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderColor: isSecHighlighted ? 'var(--accent)' : 'var(--border-ink)',
                          backgroundColor: isSecHighlighted ? 'var(--accent-soft)' : 'var(--bg-surface)',
                          color: isSecHighlighted ? '#ffffff' : 'var(--text-ink)',
                          boxShadow: isSecHighlighted ? '0 0 12px var(--accent-glow)' : 'none',
                          transform: isSecHighlighted ? 'scale(1.05)' : 'none',
                          overflow: 'hidden'
                        }}
                      >
                        <DialValue
                          value={val}
                          className="font-hand"
                          style={{ fontSize: '30px', fontWeight: 700 }}
                        />
                      </div>

                      <div className="font-mono" style={{ fontSize: '10.5px', color: 'var(--text-mute)', marginTop: '4px' }}>
                        [{uIdx}]
                      </div>

                      {activePointers.length > 0 && (
                        <div style={{ marginTop: '2px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                          {activePointers.map((sp: any, spIdx: number) => (
                            <div
                              key={spIdx}
                              className="animate-pointer-float-bottom"
                              style={{ color: getPointerColor(sp.color), display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                              <span style={{ fontSize: '12px', lineHeight: 1 }}>▲</span>
                              <span className="font-mono" style={{ fontSize: '12px', fontWeight: 700 }}>
                                {sp.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        );
      })()}

      {/* Result Indicator Badge if marked as solved */}
      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '16px',
            padding: '6px 14px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>✓</span>
          <span>{step.best.label || 'Target Condition Satisfied'}</span>
        </div>
      )}
    </div>
  );
};
