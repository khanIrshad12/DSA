import React from 'react';
import { DialValue } from './DialValue';

interface StatePanelProps {
  vars: Array<[string, any]>;
}

export const StatePanel: React.FC<StatePanelProps> = ({ vars }) => {
  return (
    <div
      className="sketch-border"
      style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '14px',
        width: '100%'
      }}
    >
      <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-mute)', fontWeight: 700, marginBottom: '10px' }}>
        Live State & Variables
      </div>

      {vars.length === 0 ? (
        <div style={{ fontSize: '12px', color: 'var(--text-faint)', padding: '6px 0' }}>
          No local variables in current scope.
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {vars.map(([key, val], idx) => {
            const formattedVal = typeof val === 'object' ? JSON.stringify(val) : String(val);

            return (
              <div
                key={key || idx}
                className="font-mono"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '12.5px',
                  padding: '4px 6px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-paper)'
                }}
              >
                <span style={{ color: 'var(--text-mute)' }}>{key}</span>
                <span
                  style={{
                    fontWeight: 600,
                    color: 'var(--accent)',
                    backgroundColor: 'var(--accent-soft)',
                    padding: '1px 6px',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: '20px'
                  }}
                >
                  <DialValue value={formattedVal} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
