import React from 'react';
import { Step } from '../../types';

interface IntervalItem {
  start: number;
  end: number;
  status?: 'default' | 'active' | 'merged' | 'added';
}

interface IntervalVisualizerProps {
  data: IntervalItem[];
  step: Step;
}

export const IntervalVisualizer: React.FC<IntervalVisualizerProps> = ({ data, step }) => {
  const intervals: IntervalItem[] = step.intervals || data || [];

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
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-mute)', marginBottom: '14px' }}>
        Intervals Timeline
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', maxWidth: '500px' }}>
        {intervals.map((iv, idx) => {
          const isMerged = iv.status === 'merged';
          return (
            <div
              key={idx}
              className="sketch-border"
              style={{
                padding: '10px 16px',
                backgroundColor: isMerged ? 'var(--accent-soft)' : 'var(--bg-surface)',
                borderColor: isMerged ? 'var(--accent)' : 'var(--border-ink)',
                color: isMerged ? 'var(--accent)' : 'var(--text-ink)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontWeight: 700
              }}
            >
              <span>Interval #{idx + 1}</span>
              <span className="font-mono">[{iv.start}, {iv.end}]</span>
              {isMerged && (
                <span style={{ fontSize: '11px', backgroundColor: 'var(--accent)', color: '#fff', padding: '1px 6px', borderRadius: '4px' }}>
                  MERGED
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
