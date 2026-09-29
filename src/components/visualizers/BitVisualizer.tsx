import React from 'react';
import { Step } from '../../types';

interface BitRegister {
  name?: string;
  value: number | string;
  bits?: (0 | 1 | string)[];
  label?: string;
  color?: string;
  highlightIndices?: number[];
  dimmedIndices?: number[];
  clearedIndices?: number[];
  badge?: string;
  operator?: string;
  [key: string]: any;
}

interface BitVisualizerProps {
  data?: any;
  step: Step;
}

// Convert decimal to binary array of length bitWidth
function toBinaryArray(val: number | string, bitWidth: number = 8): (0 | 1)[] {
  const num = typeof val === 'number' ? (val >>> 0) : parseInt(String(val), 10) >>> 0;
  const bits: (0 | 1)[] = [];
  for (let i = bitWidth - 1; i >= 0; i--) {
    bits.push(((num >> i) & 1) as (0 | 1));
  }
  return bits;
}

export const BitVisualizer: React.FC<BitVisualizerProps> = ({ data, step }) => {
  const bitConfig = step.bits || step.customVisual?.bits || {};
  const registers: BitRegister[] = bitConfig.registers || step.customVisual?.registers || [];
  const activeBit = bitConfig.activeBit ?? step.customVisual?.activeBit ?? null;
  const bitWidth = bitConfig.bitWidth ?? step.customVisual?.bitWidth ?? 8;
  const title = bitConfig.title || step.customVisual?.title || 'Binary Bit Register & Operations';
  const banner = bitConfig.banner || step.customVisual?.condition || step.customVisual?.banner || null;
  const arrayStrip = step.customVisual?.arrayStrip || null;
  const xorTree = step.customVisual?.xorTree || null;

  // If no explicit registers provided, try to extract from vars or initial data
  const displayRegisters: BitRegister[] = registers.length > 0 ? registers : [
    {
      name: 'n',
      value: typeof data === 'number' ? data : (typeof step.vars?.[0]?.[1] === 'number' ? step.vars[0][1] : 11),
      label: 'Value'
    }
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '24px 16px',
        width: '100%',
        maxWidth: '860px',
        margin: '0 auto',
        gap: '20px'
      }}
    >
      {/* Title & Status Header */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <div
          className="font-mono"
          style={{
            fontSize: '11px',
            fontWeight: 700,
            color: 'var(--text-mute)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span>{title}</span>
          {activeBit !== null && (
            <span
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid var(--accent-border)'
              }}
            >
              Bit #{activeBit} Active
            </span>
          )}
        </div>

        {banner && (
          <div
            className="sketch-border"
            style={{
              padding: '6px 16px',
              backgroundColor: banner.type === 'warning' || banner.type === 'conflict'
                ? 'var(--color-red-soft)'
                : banner.type === 'success' || banner.type === 'merge'
                ? 'var(--color-green-soft)'
                : 'var(--bg-surface)',
              borderColor: banner.type === 'warning' || banner.type === 'conflict'
                ? 'var(--color-red)'
                : banner.type === 'success' || banner.type === 'merge'
                ? 'var(--color-green)'
                : 'var(--accent)',
              color: banner.type === 'warning' || banner.type === 'conflict'
                ? 'var(--color-red)'
                : banner.type === 'success' || banner.type === 'merge'
                ? 'var(--color-green)'
                : 'var(--accent)',
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            <span>{banner.text || banner}</span>
          </div>
        )}
      </div>

      {/* Array Element Strip (If tracking array fold / Single Number / Missing Number) */}
      {arrayStrip && (
        <div
          className="sketch-border"
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-surface)',
            padding: '12px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: 'var(--text-mute)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            {arrayStrip.label || 'Input Array Traversal'}:
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            {arrayStrip.items?.map((item: any, idx: number) => {
              const isActive = idx === arrayStrip.currentIndex;
              const isProcessed = idx < arrayStrip.currentIndex;
              return (
                <div
                  key={idx}
                  className="sketch-border"
                  style={{
                    padding: '6px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '13px',
                    backgroundColor: isActive
                      ? 'var(--accent-soft)'
                      : isProcessed
                      ? 'var(--bg-surface-elevated)'
                      : 'var(--bg-surface)',
                    borderColor: isActive
                      ? 'var(--accent)'
                      : isProcessed
                      ? 'var(--border-ink)'
                      : 'var(--border-ink-soft)',
                    color: isActive
                      ? 'var(--accent)'
                      : isProcessed
                      ? 'var(--text-mute)'
                      : 'var(--text-ink)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2px',
                    boxShadow: isActive ? '0 0 10px var(--accent-glow)' : 'none',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>{item}</span>
                  <span style={{ fontSize: '9px', opacity: 0.6, fontWeight: 600 }}>i={idx}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Binary Registers Board */}
      <div
        className="sketch-border"
        style={{
          width: '100%',
          backgroundColor: 'var(--bg-surface)',
          padding: '22px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
        }}
      >
        {/* Bit Column Header Indices (7..0 or 31..0) */}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* Left Label Spacer */}
          <div style={{ width: '140px', flexShrink: 0 }} />

          {/* Bit Indices Grid */}
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', gap: '4px' }}>
            {Array.from({ length: bitWidth }).map((_, idx) => {
              const bitIdx = bitWidth - 1 - idx;
              const isHighlighted = activeBit === bitIdx;
              return (
                <div
                  key={idx}
                  className="font-mono"
                  style={{
                    flex: 1,
                    textAlign: 'center',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: isHighlighted ? 'var(--accent)' : 'var(--text-faint)',
                    borderBottom: isHighlighted ? '2px solid var(--accent)' : '1px solid transparent',
                    paddingBottom: '4px',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {bitIdx}
                </div>
              );
            })}
          </div>

          {/* Right Values Spacer */}
          <div style={{ width: '130px', flexShrink: 0, textAlign: 'right' }}>
            <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-faint)', fontWeight: 700 }}>
              DEC / HEX
            </span>
          </div>
        </div>

        {/* Registers Rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {displayRegisters.map((reg, regIdx) => {
            const numVal = typeof reg.value === 'number' ? reg.value : parseInt(String(reg.value), 10);
            const bitsArray = reg.bits || toBinaryArray(numVal, bitWidth);
            const isResult = reg.isResult || reg.name === 'ans' || reg.name === 'result' || reg.name === 'sum';
            const hasOperator = !!reg.operator;

            return (
              <React.Fragment key={regIdx}>
                {reg.separator && (
                  <div
                    style={{
                      width: '100%',
                      height: '1.5px',
                      backgroundColor: 'var(--border-ink)',
                      margin: '4px 0'
                    }}
                  />
                )}

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    gap: '8px'
                  }}
                >
                  {/* Left Register Name & Operator */}
                  <div
                    style={{
                      width: '132px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {hasOperator ? (
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '14px',
                          fontWeight: 900,
                          color: 'var(--accent)',
                          width: '18px'
                        }}
                      >
                        {reg.operator}
                      </span>
                    ) : (
                      <div style={{ width: '18px' }} />
                    )}

                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '12px',
                          fontWeight: 800,
                          color: isResult ? 'var(--color-green)' : reg.color || 'var(--text-ink)'
                        }}
                      >
                        {reg.name || `reg_${regIdx}`}
                      </span>
                      {reg.label && (
                        <span style={{ fontSize: '9px', color: 'var(--text-mute)', fontWeight: 600 }}>
                          {reg.label}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bits Row */}
                  <div style={{ display: 'flex', flex: 1, gap: '4px' }}>
                    {bitsArray.map((bitVal, bitPos) => {
                      const bitIdx = bitWidth - 1 - bitPos;
                      const isBit1 = Number(bitVal) === 1;
                      const isBitActive = activeBit === bitIdx;
                      const isHighlighted = reg.highlightIndices?.includes(bitIdx) || isBitActive;
                      const isCleared = reg.clearedIndices?.includes(bitIdx);
                      const isDimmed = reg.dimmedIndices?.includes(bitIdx);

                      let bgColor = isBit1 ? 'rgba(255, 139, 61, 0.18)' : 'var(--bg-surface-elevated)';
                      let borderColor = isBit1 ? 'var(--accent)' : 'var(--border-ink)';
                      let textColor = isBit1 ? 'var(--accent)' : 'var(--text-faint)';
                      let glow = isBit1 ? '0 0 8px rgba(255, 139, 61, 0.3)' : 'none';

                      if (isResult) {
                        bgColor = isBit1 ? 'rgba(52, 211, 153, 0.22)' : 'var(--bg-surface-elevated)';
                        borderColor = isBit1 ? 'var(--color-green)' : 'var(--border-ink)';
                        textColor = isBit1 ? 'var(--color-green)' : 'var(--text-faint)';
                        glow = isBit1 ? '0 0 10px rgba(52, 211, 153, 0.4)' : 'none';
                      }

                      if (isCleared) {
                        bgColor = 'rgba(248, 113, 113, 0.2)';
                        borderColor = 'var(--color-red)';
                        textColor = 'var(--color-red)';
                        glow = '0 0 10px rgba(248, 113, 113, 0.4)';
                      } else if (isHighlighted && !isBit1) {
                        borderColor = 'var(--accent2)';
                        glow = '0 0 8px rgba(96, 165, 250, 0.3)';
                      }

                      return (
                        <div
                          key={bitPos}
                          className="sketch-border"
                          style={{
                            flex: 1,
                            height: '36px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: bgColor,
                            borderColor: borderColor,
                            color: textColor,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                            fontWeight: 900,
                            boxShadow: glow,
                            opacity: isDimmed ? 0.35 : 1,
                            transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                            position: 'relative'
                          }}
                        >
                          <span>{bitVal}</span>
                          {isCleared && (
                            <span
                              style={{
                                position: 'absolute',
                                top: '-6px',
                                right: '-4px',
                                backgroundColor: 'var(--color-red)',
                                color: '#fff',
                                fontSize: '8px',
                                fontWeight: 800,
                                padding: '0 3px',
                                borderRadius: '2px'
                              }}
                            >
                              ✕
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Values: Dec & Hex */}
                  <div
                    style={{
                      width: '130px',
                      flexShrink: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-ink)' }}>
                      {numVal}
                    </span>
                    <span style={{ fontSize: '10px', color: 'var(--text-mute)', fontWeight: 600 }}>
                      0x{Number(numVal).toString(16).toUpperCase().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* XOR Associativity & Cancellation Map (For Single / Missing Number) */}
      {xorTree && (
        <div
          className="sketch-border"
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-surface)',
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: 'var(--color-green)',
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}
          >
            XOR Cancellation Law: x ⊕ x = 0 and x ⊕ 0 = x
          </div>
          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--text-ink)',
              padding: '6px 12px',
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '6px',
              border: '1px solid var(--border-ink-soft)'
            }}
          >
            {xorTree}
          </div>
        </div>
      )}

      {/* Bottom Best / Final Answer Callout */}
      {step.best && (
        <div
          className="sketch-border"
          style={{
            padding: '10px 22px',
            backgroundColor: 'var(--accent-soft)',
            borderColor: 'var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textAlign: 'center',
            boxShadow: '0 0 16px var(--accent-glow)'
          }}
        >
          {step.best.label || `Result: ${JSON.stringify(step.best.value)}`}
        </div>
      )}
    </div>
  );
};
