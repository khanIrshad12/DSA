import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface StackVisualizerProps {
  data?: any[];
  step: Step;
}

export const StackVisualizer: React.FC<StackVisualizerProps> = ({ data, step }) => {
  const twinStacks = step.customVisual?.twinStacks;
  const answerArray = step.customVisual?.answerArray || step.customVisual?.resultArray;
  const answerTitle = step.customVisual?.answerTitle || 'ANSWER (DAYS TO WAIT)';
  const stackLabel = step.customVisual?.stackLabel;

  const primaryStack = twinStacks ? twinStacks.mainStack || [] : step.stack || [];
  const secondaryStack = twinStacks ? twinStacks.secondaryStack || twinStacks.minStack || [] : [];
  const primaryLabel = twinStacks?.mainLabel || 'STACK';
  const secondaryLabel = twinStacks?.secondaryLabel || 'MIN STACK';

  const renderStackContainer = (
    items: any[],
    label: string,
    accentColor: string,
    glowColor: string,
    isSecondary: boolean = false
  ) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Animated TOP indicator */}
        <div
          className="font-mono"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: items.length > 0 ? accentColor : 'var(--text-mute)',
            marginBottom: '6px'
          }}
        >
          <span>{label} TOP</span>
          <span className="stack-arrow-bounce" style={{ fontSize: '13px' }}>
            ↓
          </span>
        </div>

        {/* Stack Physical Cylindrical Container */}
        <div
          style={{
            width: isSecondary ? '145px' : '155px',
            minHeight: '230px',
            borderLeft: `2.5px solid ${isSecondary ? 'rgba(0, 210, 255, 0.4)' : 'var(--border-ink)'}`,
            borderRight: `2.5px solid ${isSecondary ? 'rgba(0, 210, 255, 0.4)' : 'var(--border-ink)'}`,
            borderBottom: `3.5px solid ${isSecondary ? 'rgba(0, 210, 255, 0.7)' : 'var(--border-ink)'}`,
            borderRadius: '0 0 16px 16px',
            padding: '12px 10px',
            display: 'flex',
            flexDirection: 'column-reverse',
            gap: '10px',
            backgroundColor: isSecondary ? 'rgba(10, 22, 28, 0.7)' : 'rgba(20, 18, 16, 0.65)',
            backdropFilter: 'blur(8px)',
            boxShadow:
              items.length > 0
                ? `inset 0 -12px 24px rgba(0, 0, 0, 0.45), 0 0 18px ${glowColor}`
                : 'inset 0 -12px 24px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            transition: 'all 0.3s ease'
          }}
        >
          {items.length === 0 ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: '190px',
                color: 'var(--text-faint)',
                fontSize: '12px',
                fontStyle: 'italic',
                gap: '6px'
              }}
            >
              <span>(empty stack)</span>
              <span className="font-mono" style={{ fontSize: '10px', opacity: 0.6 }}>
                0 elements
              </span>
            </div>
          ) : (
            items.map((item, idx) => {
              const isTop = idx === items.length - 1;
              const narrationLower = (step.narration || '').toLowerCase();
              const isPopStep = narrationLower.includes('pop') || narrationLower.includes('remove') || narrationLower.includes('discard');
              const isPushStep = narrationLower.includes('push') || narrationLower.includes('insert') || narrationLower.includes('add');
              const isPopping = isTop && isPopStep;
              const isPushing = isTop && isPushStep;

              const itemStr = typeof item === 'object' ? JSON.stringify(item) : String(item);
              const isLong = itemStr.length > 6;

              let animClass = '';
              if (isPopping) animClass = 'animate-item-remove';
              else if (isPushing || isTop) animClass = 'stack-item-push';

              return (
                <div
                  key={`${idx}-${itemStr}`}
                  className={`sketch-border visualizer-cell ${animClass}`}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    backgroundColor: isPopping
                      ? 'rgba(248, 113, 113, 0.25)'
                      : isTop
                      ? isSecondary
                        ? 'rgba(0, 210, 255, 0.15)'
                        : 'var(--accent-soft)'
                      : 'var(--bg-surface-elevated)',
                    borderColor: isPopping
                      ? 'var(--color-red)'
                      : isTop
                      ? accentColor
                      : isSecondary
                      ? 'rgba(0, 210, 255, 0.3)'
                      : 'var(--border-ink)',
                    color: isPopping ? 'var(--color-red)' : isTop ? accentColor : 'var(--text-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontWeight: 700,
                    fontSize: isLong ? '12px' : '15px',
                    position: 'relative',
                    boxShadow: isPopping ? '0 0 16px rgba(248, 113, 113, 0.5)' : isTop ? `0 0 16px ${glowColor}` : '0 2px 6px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  {/* Left element index label */}
                  <span
                    className="font-mono"
                    style={{
                      fontSize: '10px',
                      color: isPopping ? 'var(--color-red)' : isTop ? accentColor : 'var(--text-mute)',
                      opacity: 0.8
                    }}
                  >
                    [{idx}]
                  </span>

                  {/* Main Value with Dial Transition */}
                  <span
                    style={{
                      flex: 1,
                      textAlign: 'center',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      padding: '0 4px'
                    }}
                  >
                    <DialValue value={item} />
                  </span>

                  {/* Top indicator tag */}
                  {isPopping ? (
                    <span
                      className="font-mono swap-badge-pop"
                      style={{
                        fontSize: '9px',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        backgroundColor: 'var(--color-red)',
                        color: '#fff',
                        fontWeight: 800,
                        letterSpacing: '0.04em'
                      }}
                    >
                      POP
                    </span>
                  ) : isTop ? (
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '9px',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        backgroundColor: accentColor,
                        color: '#000',
                        fontWeight: 800,
                        letterSpacing: '0.04em'
                      }}
                    >
                      TOP
                    </span>
                  ) : (
                    <span style={{ width: '22px' }} />
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Stack metadata info pill */}
        <div
          className="font-mono"
          style={{
            fontSize: '11px',
            color: 'var(--text-mute)',
            marginTop: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          {stackLabel ? (
            <span>{stackLabel}</span>
          ) : (
            <>
              <span>size: <strong style={{ color: items.length > 0 ? accentColor : 'var(--text-ink)' }}>{items.length}</strong></span>
              <span>•</span>
              <span>top: <strong style={{ color: items.length > 0 ? accentColor : 'var(--text-mute)' }}>{items.length > 0 ? String(items[items.length - 1]) : 'null'}</strong></span>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '40px',
        padding: '24px 16px',
        width: '100%',
        flexWrap: 'wrap'
      }}
    >
      {/* Primary Input Array & Optional Answer Array Column */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '28px', maxWidth: '580px' }}>
        {/* Input array / method tokens */}
        {data && data.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {data.map((item, idx) => {
                const isPointer = step.pointers?.some(p => p.index === idx);
                const isHighlight = step.highlights?.includes(idx);
                const itemStr = typeof item === 'object' ? JSON.stringify(item) : String(item);
                const isLong = itemStr.length > 4;

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      className="sketch-border"
                      style={{
                        minWidth: isLong ? '62px' : '48px',
                        height: '48px',
                        padding: isLong ? '0 12px' : '0 8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isHighlight
                          ? 'var(--accent-soft)'
                          : isPointer
                          ? 'rgba(255, 107, 0, 0.1)'
                          : 'var(--bg-surface)',
                        borderColor: isHighlight || isPointer ? 'var(--accent)' : 'var(--border-ink)',
                        color: isHighlight || isPointer ? 'var(--accent)' : 'var(--text-ink)',
                        boxShadow: isHighlight ? '0 0 14px var(--accent-glow)' : 'none',
                        fontWeight: 700,
                        fontSize: isLong ? '13px' : '18px',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      {itemStr}
                    </div>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '10px',
                        color: isHighlight || isPointer ? 'var(--accent)' : 'var(--text-mute)',
                        marginTop: '3px'
                      }}
                    >
                      [{idx}]
                    </span>
                    {isPointer && (
                      <div
                        style={{
                          color: 'var(--accent)',
                          marginTop: '2px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center'
                        }}
                      >
                        <span className="stack-arrow-bounce" style={{ fontSize: '11px', lineHeight: 1 }}>
                          ▲
                        </span>
                        <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                          {step.pointers?.find(p => p.index === idx)?.name || 'i'}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Answer Array (e.g. Daily Temperatures "ANSWER (DAYS TO WAIT)") */}
        {answerArray && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div
              className="font-mono"
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-mute)',
                marginBottom: '8px'
              }}
            >
              {answerTitle}
            </div>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              {answerArray.map((val: any, idx: number) => {
                const hasValue = val !== null && val !== undefined && val !== '·' && val !== '.';
                const isResolvedJustNow = step.secondaryHighlights?.includes(idx);

                return (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div
                      className="sketch-border"
                      style={{
                        width: '48px',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isResolvedJustNow
                          ? 'rgba(0, 210, 255, 0.18)'
                          : hasValue
                          ? 'var(--bg-surface-elevated)'
                          : 'rgba(20, 18, 16, 0.4)',
                        borderColor: isResolvedJustNow
                          ? '#00d2ff'
                          : hasValue
                          ? 'var(--border-ink)'
                          : 'var(--border-ink-soft)',
                        color: isResolvedJustNow
                          ? '#00d2ff'
                          : hasValue
                          ? 'var(--text-ink)'
                          : 'var(--text-faint)',
                        boxShadow: isResolvedJustNow ? '0 0 14px rgba(0, 210, 255, 0.35)' : 'none',
                        fontWeight: 700,
                        fontSize: '18px',
                        transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)'
                      }}
                    >
                      <DialValue value={val !== null && val !== undefined ? val : '·'} />
                    </div>
                    <span
                      className="font-mono"
                      style={{
                        fontSize: '10px',
                        color: isResolvedJustNow ? '#00d2ff' : 'var(--text-mute)',
                        marginTop: '3px'
                      }}
                    >
                      [{idx}]
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Primary Stack or Twin Stacks */}
      <div style={{ display: 'flex', gap: '28px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        {renderStackContainer(primaryStack, primaryLabel, 'var(--accent)', 'var(--accent-glow)', false)}

        {twinStacks && (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: 'var(--text-mute)' }}>
              <span className="font-mono" style={{ fontSize: '11px', letterSpacing: '0.04em' }}>TWIN</span>
              <span style={{ fontSize: '18px', color: '#00d2ff' }}>⟷</span>
              <span className="font-mono" style={{ fontSize: '10px', color: '#00d2ff', fontWeight: 700 }}>O(1) MIN</span>
            </div>
            {renderStackContainer(secondaryStack, secondaryLabel, '#00d2ff', 'rgba(0, 210, 255, 0.25)', true)}
          </>
        )}
      </div>
    </div>
  );
};
