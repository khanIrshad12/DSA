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
      <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-mute)', fontWeight: 800, marginBottom: '10px' }}>
        STATE
      </div>

      {vars.length === 0 ? (
        <div style={{ fontSize: '11.5px', color: 'var(--text-faint)', padding: '4px 0' }}>
          No local variables
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
                  fontSize: '12px',
                  padding: '3px 0'
                }}
              >
                <span style={{ color: 'var(--text-mute)', fontWeight: 500 }}>{key}</span>
                <span
                  style={{
                    fontWeight: 700,
                    color: 'var(--text-ink)'
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
