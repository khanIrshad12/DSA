import React from 'react';
import { Step } from '../../types';
import { DialValue } from '../DialValue';

interface DPGridVisualizerProps {
  data: number[];
  step: Step;
}

export const DPGridVisualizer: React.FC<DPGridVisualizerProps> = ({ data, step }) => {
  const currentData: any[] = (step.customVisual?.array || data || []);
  const title = step.customVisual?.title || 'DP Tabulation Array';
  const customLabels = step.customVisual?.labels;
  const secondaryArray = step.customVisual?.secondaryArray;
  const secondaryTitle = step.customVisual?.secondaryTitle || 'Input Array';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 10px',
        width: '100%',
        minWidth: 'max-content',
        margin: 'auto'
      }}
    >
      {/* Secondary / Input Array if present */}
      {secondaryArray && (
        <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-faint)',
              marginBottom: '8px'
            }}
          >
            {secondaryTitle}
          </div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {secondaryArray.map((val: any, idx: number) => {
              const isSecHighlighted = step.secondaryHighlights?.includes(idx);
              return (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div
                    className="sketch-border visualizer-cell"
                    style={{
                      width: '46px',
                      height: '46px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: isSecHighlighted ? 'var(--accent)' : 'var(--border-ink)',
                      backgroundColor: isSecHighlighted ? 'var(--accent-soft)' : 'var(--bg-surface)',
                      color: isSecHighlighted ? 'var(--accent)' : 'var(--text-ink)',
                      boxShadow: isSecHighlighted ? '0 0 12px var(--accent-glow)' : 'none',
                      overflow: 'hidden'
                    }}
                  >
                    <DialValue
                      value={val}
                      className="font-hand"
                      style={{ fontSize: '22px', fontWeight: 700 }}
                    />
                  </div>
                  <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-mute)', marginTop: '3px' }}>
                    [{idx}]
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* DP Table Header */}
      <div
        className="font-mono"
        style={{
          fontSize: '11px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-mute)',
          marginBottom: '10px'
        }}
      >
        {title}
      </div>

      {/* 1D DP Array */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px' }}>
        {currentData.map((val, idx) => {
          const isHighlighted = step.highlights?.includes(idx);
          const isLatest = step.highlights && step.highlights[step.highlights.length - 1] === idx;
          const animClass = isLatest ? 'animate-item-enter' : isHighlighted ? 'animate-item-active' : '';

          const cellLabel = customLabels && customLabels[idx] !== undefined
            ? customLabels[idx]
            : `dp[${idx}]`;

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
                  boxShadow: isLatest ? '0 0 16px var(--accent-glow)' : isHighlighted ? '0 0 10px var(--accent2-soft)' : 'none',
                  overflow: 'hidden'
                }}
              >
                <DialValue
                  value={val}
                  className="font-hand"
                  style={{ fontSize: '24px', fontWeight: 700 }}
                />
              </div>
              <span
                className="font-mono"
                style={{
                  fontSize: '10.5px',
                  color: isLatest ? 'var(--accent)' : isHighlighted ? 'var(--accent2)' : 'var(--text-mute)',
                  marginTop: '4px',
                  fontWeight: isLatest || isHighlighted ? 700 : 500
                }}
              >
                {cellLabel}
              </span>
            </div>
          );
        })}
      </div>

      {/* Target Result Badge */}
      {step.best && (
        <div
          className="sketch-border"
          style={{
            marginTop: '18px',
            padding: '6px 14px',
            backgroundColor: 'var(--color-green-soft)',
            borderColor: 'var(--color-green)',
            color: 'var(--color-green)',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          <span>✓</span>
          <span>{step.best.label}</span>
        </div>
      )}
    </div>
  );
};
