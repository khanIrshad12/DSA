import React from 'react';
import { Step } from '../../types';

interface BarVisualizerProps {
  data: number[];
  step: Step;
}

export const BarVisualizer: React.FC<BarVisualizerProps> = ({ data, step }) => {
  const heights = (step.customVisual?.array || data || [1, 8, 6, 2, 5, 4, 8, 3, 7]) as number[];
  const maxHeight = Math.max(...heights, 8);

  const getPointerColor = (color?: string) => {
    if (color === 'accent') return 'var(--accent)';
    if (color === 'accent2') return 'var(--accent2)';
    if (color === 'green') return 'var(--color-green)';
    if (color === 'red') return 'var(--color-red)';
    if (color === 'purple') return 'var(--color-purple)';
    if (color === 'amber') return 'var(--color-amber)';
    return 'var(--accent)';
  };

  // Find active pointer pair if any (e.g. L and R or i and j)
  const activePointers = step.pointers || [];
  const p1 = activePointers[0];
  const p2 = activePointers[1];
  const hasTwoPointers = p1 && p2 && p1.index !== p2.index;
  const leftIdx = hasTwoPointers ? Math.min(p1.index, p2.index) : null;
  const rightIdx = hasTwoPointers ? Math.max(p1.index, p2.index) : null;

  const barWidth = 46;
  const barGap = 12;
  const chartHeight = 220;
  const stepHeight = chartHeight / maxHeight;

  // Calculate water box between leftIdx and rightIdx
  let waterLeft = 0;
  let waterWidth = 0;
  let waterHeight = 0;
  let currentArea = 0;

  if (leftIdx !== null && rightIdx !== null) {
    const h1 = heights[leftIdx] || 0;
    const h2 = heights[rightIdx] || 0;
    const minH = Math.min(h1, h2);
    waterLeft = leftIdx * (barWidth + barGap);
    waterWidth = (rightIdx - leftIdx) * (barWidth + barGap) + barWidth;
    waterHeight = Math.max(minH * stepHeight, 0);
    currentArea = (rightIdx - leftIdx) * minH;
  }

  // Trapped water levels per index (for Trapping Rain Water)
  const trappedWater = step.customVisual?.trappedWater as number[] | undefined;

  // Y-axis tick values (from maxHeight down to 1)
  const yTicks = Array.from({ length: maxHeight }, (_, i) => maxHeight - i);
  const totalChartWidth = heights.length * (barWidth + barGap) - barGap;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 16px',
        width: '100%',
        position: 'relative',
        userSelect: 'none'
      }}
    >
      {/* Visual Window label if present */}
      {step.window && (
        <div
          style={{
            marginBottom: '14px',
            fontSize: '11px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            color: 'var(--accent)',
            backgroundColor: 'var(--accent-soft)',
            padding: '2px 10px',
            borderRadius: '4px',
            border: '1px solid var(--accent-border)'
          }}
        >
          {step.window.label || `Window [${step.window.start} .. ${step.window.end}]`}
        </div>
      )}

      {/* Main Chart Section (Y-Axis + Bars Area) */}
      <div style={{ display: 'flex', alignItems: 'flex-end', position: 'relative' }}>
        {/* Left Y-Axis Scale Ticks */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: `${chartHeight}px`,
            width: '20px',
            marginRight: '8px',
            paddingBottom: '2px'
          }}
        >
          {yTicks.map(val => (
            <div
              key={val}
              className="font-mono"
              style={{
                fontSize: '11px',
                color: 'var(--text-faint)',
                textAlign: 'right',
                lineHeight: 1
              }}
            >
              {val}
            </div>
          ))}
        </div>

        {/* Vertical Axis Border Line */}
        <div
          style={{
            width: '1px',
            height: `${chartHeight}px`,
            backgroundColor: 'var(--border-ink-soft)',
            marginRight: '12px'
          }}
        />

        {/* Bars Container */}
        <div
          style={{
            display: 'flex',
            gap: `${barGap}px`,
            alignItems: 'flex-end',
            height: `${chartHeight}px`,
            width: `${totalChartWidth}px`,
            position: 'relative'
          }}
        >
          {/* Water fill overlay spanning from left wall to right wall */}
          {hasTwoPointers && waterHeight > 0 && (
            <>
              {/* Semi-transparent water volume */}
              <div
                style={{
                  position: 'absolute',
                  left: `${waterLeft}px`,
                  width: `${waterWidth}px`,
                  bottom: '0px',
                  height: `${waterHeight}px`,
                  backgroundColor: 'rgba(56, 189, 248, 0.22)',
                  borderTop: '2px dashed #38bdf8',
                  borderRadius: '4px 4px 0 0',
                  pointerEvents: 'none',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  zIndex: 0
                }}
              />

              {/* Floating Area Calculation Badge (rendered with high z-index above all bars) */}
              <div
                className="font-mono"
                style={{
                  position: 'absolute',
                  left: `${waterLeft + waterWidth / 2}px`,
                  transform: 'translateX(-50%)',
                  bottom: `${Math.min(waterHeight + 8, chartHeight - 20)}px`,
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#38bdf8',
                  backgroundColor: 'var(--bg-surface)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  border: '1.5px solid #38bdf8',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
                  whiteSpace: 'nowrap',
                  zIndex: 30,
                  pointerEvents: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>area =</span>
                <span style={{ color: '#ffffff', fontWeight: 800 }}>
                  ({rightIdx} - {leftIdx}) × min({heights[leftIdx || 0]}, {heights[rightIdx || 0]}) = {currentArea}
                </span>
              </div>
            </>
          )}

          {/* Render Guidelines if present (e.g. leftMax, rightMax in Trapping Rain Water) */}
          {step.customVisual?.guidelines && (step.customVisual.guidelines as any[]).map((g, gIdx) => {
            const lineY = g.value * stepHeight;
            const startX = (g.startIdx ?? 0) * (barWidth + barGap);
            const endX = (g.endIdx !== undefined ? g.endIdx : heights.length - 1) * (barWidth + barGap) + barWidth;
            const lineWidth = endX - startX;
            const lineColor = g.color || '#eab308';
            const isDashed = g.style === 'dashed';

            return (
              <div
                key={gIdx}
                style={{
                  position: 'absolute',
                  left: `${startX}px`,
                  width: `${lineWidth}px`,
                  bottom: `${lineY}px`,
                  borderTop: `${isDashed ? '2px dashed' : '2px solid'} ${lineColor}`,
                  zIndex: 20,
                  pointerEvents: 'none',
                  display: 'flex',
                  justifyContent: g.labelAlign === 'left' ? 'flex-start' : 'flex-end',
                  alignItems: 'flex-start'
                }}
              >
                {g.label && (
                  <span
                    className="font-mono"
                    style={{
                      position: 'absolute',
                      top: '-18px',
                      right: g.labelAlign === 'left' ? undefined : '0px',
                      left: g.labelAlign === 'left' ? '0px' : undefined,
                      fontSize: '11px',
                      fontWeight: 700,
                      color: lineColor,
                      backgroundColor: 'var(--bg-paper)',
                      padding: '0 4px',
                      borderRadius: '3px',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {g.label}
                  </span>
                )}
              </div>
            );
          })}

          {/* Render individual vertical bars */}
          {heights.map((h, idx) => {
            const isHighlighted = step.highlights?.includes(idx);
            const isDimmed = step.dimmed?.includes(idx);
            const isBest = step.best?.indices?.includes(idx);
            const pointersAtIndex = (step.pointers || []).filter(p => p.index === idx);
            const primaryPointer = pointersAtIndex[0];

            let borderColor = 'var(--border-ink)';
            let bgColor = 'var(--bg-surface)';
            let textColor = 'var(--text-ink)';

            if (isBest) {
              borderColor = 'var(--color-green)';
              bgColor = 'var(--color-green-soft)';
              textColor = 'var(--color-green)';
            } else if (isHighlighted) {
              borderColor = primaryPointer ? getPointerColor(primaryPointer.color) : 'var(--accent)';
              bgColor = primaryPointer ? `${getPointerColor(primaryPointer.color)}25` : 'var(--accent-soft)';
              textColor = '#ffffff';
            } else if (isDimmed) {
              textColor = 'var(--text-faint)';
              bgColor = 'var(--bg-paper)';
              borderColor = 'var(--border-ink-soft)';
            }

            const barPixelHeight = Math.max(h * stepHeight, 18);
            const trappedUnits = trappedWater ? trappedWater[idx] || 0 : 0;
            const trappedPixelHeight = trappedUnits * stepHeight;

            return (
              <div
                key={idx}
                style={{
                  width: `${barWidth}px`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* Trapped water block on top of bar (if Trapping Rain Water) */}
                {trappedUnits > 0 && (
                  <div
                    style={{
                      width: `${barWidth}px`,
                      height: `${trappedPixelHeight}px`,
                      background: 'repeating-linear-gradient(45deg, rgba(56, 189, 248, 0.22), rgba(56, 189, 248, 0.22) 6px, rgba(56, 189, 248, 0.42) 6px, rgba(56, 189, 248, 0.42) 12px)',
                      borderTop: '2px solid #38bdf8',
                      borderLeft: '1px solid rgba(56, 189, 248, 0.4)',
                      borderRight: '1px solid rgba(56, 189, 248, 0.4)',
                      marginBottom: '1px',
                      borderRadius: '4px 4px 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    +{trappedUnits}
                  </div>
                )}

                {/* The vertical solid wall bar */}
                <div
                  className="sketch-border"
                  style={{
                    width: `${barWidth}px`,
                    height: `${barPixelHeight}px`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingTop: '6px',
                    borderColor: borderColor,
                    backgroundColor: bgColor,
                    color: textColor,
                    opacity: isDimmed ? 0.35 : 1,
                    transform: isHighlighted ? 'scaleY(1.02)' : 'none',
                    boxShadow: isHighlighted ? `0 0 14px ${borderColor}60` : 'none',
                    transition: 'all 0.2s ease',
                    borderRadius: '6px 6px 0 0'
                  }}
                >
                  <span className="font-hand" style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1 }}>
                    {h}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Horizontal Baseline Axis */}
      <div
        style={{
          width: `${totalChartWidth + 30}px`,
          height: '1px',
          backgroundColor: 'var(--border-ink)',
          marginTop: '2px',
          marginLeft: '28px'
        }}
      />

      {/* Indices Row */}
      <div style={{ display: 'flex', gap: `${barGap}px`, marginTop: '6px', marginLeft: '41px' }}>
        {heights.map((_, idx) => (
          <div
            key={idx}
            className="font-mono"
            style={{
              width: `${barWidth}px`,
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
      <div style={{ display: 'flex', gap: `${barGap}px`, height: '40px', marginTop: '4px', marginLeft: '41px' }}>
        {heights.map((_, idx) => {
          const bottomPointers = (step.pointers || []).filter(p => p.index === idx && p.position !== 'top');
          return (
            <div
              key={idx}
              style={{
                width: `${barWidth}px`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              {bottomPointers.map((p, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: getPointerColor(p.color)
                  }}
                >
                  <span style={{ fontSize: '12px', lineHeight: 1 }}>▲</span>
                  <span className="font-mono" style={{ fontSize: '13px', fontWeight: 700 }}>
                    {p.name}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>

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
          <span>{step.best.label || 'Optimal Result Found'}</span>
        </div>
      )}
    </div>
  );
};
