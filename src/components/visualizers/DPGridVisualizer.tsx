import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface DPGridVisualizerProps {
  data: number[];
  step: Step;
}

export const DPGridVisualizer: React.FC<DPGridVisualizerProps> = ({ data, step }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 10px',
        width: '100%'
      }}
    >
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-mute)', marginBottom: '8px' }}>
        DP Tabulation Array
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {data.map((val, idx) => {
          const isHighlighted = step.highlights?.includes(idx);
          const isLatest = step.highlights && step.highlights[step.highlights.length - 1] === idx;
          const animClass = isLatest ? 'animate-item-enter' : isHighlighted ? 'animate-item-active' : '';

          return (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div
                className={`sketch-border visualizer-cell ${animClass}`}
                style={{
                  width: '54px',
                  height: '54px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: isLatest ? 'var(--accent)' : isHighlighted ? 'var(--accent2)' : 'var(--border-ink)',
                  backgroundColor: isLatest ? 'var(--accent-soft)' : isHighlighted ? 'var(--accent2-soft)' : 'var(--bg-surface)',
                  color: isLatest ? 'var(--accent)' : isHighlighted ? 'var(--accent2)' : 'var(--text-ink)',
                  boxShadow: isLatest ? '0 0 16px var(--accent-glow)' : 'none',
                  overflow: 'hidden'
                }}
              >
                <DialValue
                  value={val}
                  className="font-hand"
                  style={{ fontSize: '26px', fontWeight: 700 }}
                />
              </div>
              <span className="font-mono" style={{ fontSize: '10.5px', color: isLatest ? 'var(--accent)' : 'var(--text-mute)', marginTop: '4px', fontWeight: isLatest ? 700 : 500 }}>
                dp[{idx}]
              </span>
            </div>
          );
        })}
      </div>

      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '16px',
            padding: '6px 14px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '12.5px',
            fontWeight: 700
          }}
        >
          ✓ {step.best.label}
        </div>
      )}
    </div>
  );
};
