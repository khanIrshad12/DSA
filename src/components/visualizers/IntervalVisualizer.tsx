import React from 'react';
import { Step } from '../../types';

interface IntervalItem {
  start: number;
  end: number;
  status?: 'default' | 'active' | 'merged' | 'added' | 'removed' | 'conflict' | 'inserted' | 'comparing' | 'current' | 'reused' | 'safe' | string;
  label?: string;
  badge?: string;
  lane?: number;
  color?: string;
  [key: string]: any;
}

interface SweepEvent {
  time: number;
  type: 'start' | 'end' | '+1' | '-1' | string;
  label?: string;
  active?: boolean;
  done?: boolean;
}

interface IntervalVisualizerProps {
  data?: any;
  step: Step;
}

export const IntervalVisualizer: React.FC<IntervalVisualizerProps> = ({ data, step }) => {
  // Extract interval data from step, customVisual, or initial problem data
  const rawIntervals: IntervalItem[] = step.intervals || 
    (step.customVisual && Array.isArray(step.customVisual.intervals) ? step.customVisual.intervals : null) ||
    (Array.isArray(data) ? data : []);

  const intervals: IntervalItem[] = rawIntervals.map((iv: any) => {
    if (Array.isArray(iv) && iv.length >= 2) {
      return { start: Number(iv[0]), end: Number(iv[1]) };
    }
    return {
      start: Number(iv.start ?? 0),
      end: Number(iv.end ?? 0),
      status: iv.status,
      label: iv.label,
      badge: iv.badge,
      lane: iv.lane,
      color: iv.color
    };
  });

  const custom = step.customVisual || {};
  const sweepTime = custom.sweepTime ?? custom.sweepLine ?? null;
  const sweepEvents: SweepEvent[] = custom.sweepEvents || [];
  const outputIntervals: IntervalItem[] = (custom.output || custom.mergedList || []).map((iv: any) => {
    if (Array.isArray(iv) && iv.length >= 2) return { start: iv[0], end: iv[1] };
    return iv;
  });
  const conditionBanner = custom.condition || custom.formula || custom.banner;
  const laneLabels: Record<number, string> = custom.laneLabels || {};
  const heapRooms = step.heap || custom.heap || null;

  // Compute bounding range for timeline
  let allPoints: number[] = [0];
  intervals.forEach(iv => {
    if (!isNaN(iv.start)) allPoints.push(iv.start);
    if (!isNaN(iv.end)) allPoints.push(iv.end);
  });
  outputIntervals.forEach(iv => {
    if (!isNaN(iv.start)) allPoints.push(iv.start);
    if (!isNaN(iv.end)) allPoints.push(iv.end);
  });
  if (sweepTime !== null && !isNaN(sweepTime)) {
    allPoints.push(sweepTime);
  }
  sweepEvents.forEach(ev => {
    if (!isNaN(ev.time)) allPoints.push(ev.time);
  });

  const rawMin = Math.min(...allPoints);
  const rawMax = Math.max(...allPoints);
  const minTime = custom.minTime ?? Math.max(0, Math.floor(rawMin));
  const maxTime = custom.maxTime ?? Math.max(minTime + 5, Math.ceil(rawMax + (rawMax - minTime > 20 ? 2 : 1)));
  const timeSpan = Math.max(1, maxTime - minTime);

  // Group intervals by lanes if lane is specified, else render stacked tracks
  const hasLanes = intervals.some(iv => iv.lane !== undefined);
  const maxLane = hasLanes ? Math.max(...intervals.map(iv => iv.lane ?? 0), 0) : 0;
  const lanesCount = hasLanes ? maxLane + 1 : intervals.length;

  // Generate tick markers
  const tickCount = timeSpan <= 12 ? timeSpan : (timeSpan <= 30 ? Math.ceil(timeSpan / 2) : 10);
  const tickStep = Math.max(1, Math.round(timeSpan / (tickCount > 1 ? tickCount : 1)));
  const ticks: number[] = [];
  for (let t = minTime; t <= maxTime; t += tickStep) {
    ticks.push(t);
  }
  if (!ticks.includes(maxTime)) ticks.push(maxTime);

  // Get status color palette
  const getStatusStyles = (status?: string, customColor?: string) => {
    if (customColor) {
      return {
        bg: `${customColor}25`,
        border: customColor,
        text: customColor,
        glow: `0 0 12px ${customColor}40`
      };
    }
    switch (status) {
      case 'active':
      case 'comparing':
      case 'current':
        return {
          bg: 'rgba(255, 139, 61, 0.22)',
          border: 'var(--accent)',
          text: 'var(--accent)',
          glow: '0 0 14px rgba(255, 139, 61, 0.45)'
        };
      case 'merged':
        return {
          bg: 'rgba(52, 211, 153, 0.22)',
          border: 'var(--color-green)',
          text: 'var(--color-green)',
          glow: '0 0 14px rgba(52, 211, 153, 0.45)'
        };
      case 'added':
      case 'safe':
        return {
          bg: 'rgba(96, 165, 250, 0.22)',
          border: 'var(--accent2)',
          text: 'var(--accent2)',
          glow: '0 0 12px rgba(96, 165, 250, 0.35)'
        };
      case 'inserted':
        return {
          bg: 'rgba(192, 132, 252, 0.25)',
          border: 'var(--color-purple)',
          text: 'var(--color-purple)',
          glow: '0 0 14px rgba(192, 132, 252, 0.45)'
        };
      case 'conflict':
      case 'removed':
        return {
          bg: 'rgba(248, 113, 113, 0.2)',
          border: 'var(--color-red)',
          text: 'var(--color-red)',
          glow: '0 0 12px rgba(248, 113, 113, 0.4)'
        };
      case 'reused':
        return {
          bg: 'rgba(56, 189, 248, 0.22)',
          border: '#38bdf8',
          text: '#38bdf8',
          glow: '0 0 12px rgba(56, 189, 248, 0.4)'
        };
      case 'default':
      default:
        return {
          bg: 'var(--bg-surface-elevated)',
          border: 'var(--border-ink)',
          text: 'var(--text-ink)',
          glow: 'none'
        };
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '24px 16px',
        width: '100%',
        maxWidth: '880px',
        margin: '0 auto',
        gap: '18px'
      }}
    >
      {/* Top Header & Context Banner */}
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
          <span>{custom.title || 'Interval Timeline & Overlap Analysis'}</span>
          {sweepTime !== null && (
            <span
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid var(--accent-border)'
              }}
            >
              t = {sweepTime}
            </span>
          )}
        </div>

        {conditionBanner && (
          <div
            className="sketch-border"
            style={{
              padding: '6px 16px',
              backgroundColor: conditionBanner.type === 'overlap' || conditionBanner.type === 'conflict'
                ? 'var(--color-red-soft)'
                : conditionBanner.type === 'merge' || conditionBanner.type === 'success'
                ? 'var(--color-green-soft)'
                : 'var(--bg-surface)',
              borderColor: conditionBanner.type === 'overlap' || conditionBanner.type === 'conflict'
                ? 'var(--color-red)'
                : conditionBanner.type === 'merge' || conditionBanner.type === 'success'
                ? 'var(--color-green)'
                : 'var(--accent)',
              color: conditionBanner.type === 'overlap' || conditionBanner.type === 'conflict'
                ? 'var(--color-red)'
                : conditionBanner.type === 'merge' || conditionBanner.type === 'success'
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
            <span>{conditionBanner.text || conditionBanner}</span>
          </div>
        )}
      </div>

      {/* Main Timeline Card */}
      <div
        className="sketch-border"
        style={{
          width: '100%',
          backgroundColor: 'var(--bg-surface)',
          padding: '20px 24px 16px 24px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden'
        }}
      >
        {/* Timeline Axis Ruler (Top) */}
        <div style={{ position: 'relative', height: '26px', width: '100%', marginBottom: '4px' }}>
          {/* Base Axis Line */}
          <div
            style={{
              position: 'absolute',
              bottom: '4px',
              left: 0,
              right: 0,
              height: '1.5px',
              backgroundColor: 'var(--border-ink)'
            }}
          />

          {/* Ticks and Labels */}
          {ticks.map((t, idx) => {
            const leftPct = ((t - minTime) / timeSpan) * 100;
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  left: `${leftPct}%`,
                  bottom: '4px',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}
              >
                <div
                  className="font-mono"
                  style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'var(--text-mute)',
                    marginBottom: '2px'
                  }}
                >
                  {t}
                </div>
                <div
                  style={{
                    width: '1.5px',
                    height: '6px',
                    backgroundColor: 'var(--border-ink)'
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Tracks / Multi-lane container with vertical grid lines */}
        <div style={{ position: 'relative', width: '100%', minHeight: `${Math.max(lanesCount * 44, 100)}px` }}>
          {/* Background Vertical Grid Guidelines */}
          {ticks.map((t, idx) => {
            const leftPct = ((t - minTime) / timeSpan) * 100;
            return (
              <div
                key={`grid-${idx}`}
                style={{
                  position: 'absolute',
                  left: `${leftPct}%`,
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  borderLeft: '1px dashed var(--border-ink-soft)',
                  pointerEvents: 'none',
                  opacity: 0.7
                }}
              />
            );
          })}

          {/* Vertical Animated Sweep Line (if active) */}
          {sweepTime !== null && (
            <div
              style={{
                position: 'absolute',
                left: `${((sweepTime - minTime) / timeSpan) * 100}%`,
                top: -10,
                bottom: -10,
                width: '2.5px',
                backgroundColor: 'var(--accent)',
                boxShadow: '0 0 14px var(--accent)',
                zIndex: 20,
                transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div
                className="font-mono"
                style={{
                  position: 'absolute',
                  top: '-18px',
                  backgroundColor: 'var(--accent)',
                  color: '#fff',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '3px',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}
              >
                SWEEP @ {sweepTime}
              </div>
            </div>
          )}

          {/* Render Intervals inside Lanes or Stacked Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 10 }}>
            {hasLanes ? (
              // Multi-lane rendering (e.g. Meeting Rooms)
              Array.from({ length: lanesCount }).map((_, laneIdx) => {
                const laneIntervals = intervals.filter(iv => (iv.lane ?? 0) === laneIdx);
                const laneLabel = laneLabels[laneIdx] || `Room ${laneIdx + 1}`;

                return (
                  <div
                    key={`lane-${laneIdx}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '2px',
                      position: 'relative',
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      borderRadius: '6px',
                      border: '1px solid var(--border-ink-soft)',
                      padding: '4px 6px'
                    }}
                  >
                    {/* Lane Title Header */}
                    <div
                      className="font-mono"
                      style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        color: 'var(--text-faint)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '2px'
                      }}
                    >
                      {laneLabel}
                    </div>

                    {/* Bars in this lane */}
                    <div style={{ position: 'relative', width: '100%', height: '32px' }}>
                      {laneIntervals.map((iv, ivIdx) => {
                        const style = getStatusStyles(iv.status, iv.color);
                        const leftPct = Math.max(0, ((iv.start - minTime) / timeSpan) * 100);
                        const widthPct = Math.max(3, ((iv.end - iv.start) / timeSpan) * 100);

                        return (
                          <div
                            key={ivIdx}
                            style={{
                              position: 'absolute',
                              left: `${leftPct}%`,
                              width: `${widthPct}%`,
                              top: '1px',
                              bottom: '1px',
                              backgroundColor: style.bg,
                              border: `1.5px solid ${style.border}`,
                              borderRadius: '6px',
                              boxShadow: style.glow,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '0 8px',
                              color: style.text,
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              cursor: 'default',
                              overflow: 'hidden'
                            }}
                          >
                            <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                              {iv.start}
                            </span>
                            <span
                              className="font-mono"
                              style={{
                                fontSize: '10px',
                                fontWeight: 700,
                                opacity: 0.9,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'nowrap'
                              }}
                            >
                              {iv.label || iv.badge || `[${iv.start}, ${iv.end}]`}
                            </span>
                            <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                              {iv.end}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              // Stacked Individual Rows rendering
              intervals.map((iv, idx) => {
                const style = getStatusStyles(iv.status, iv.color);
                const leftPct = Math.max(0, ((iv.start - minTime) / timeSpan) * 100);
                const widthPct = Math.max(3, ((iv.end - iv.start) / timeSpan) * 100);
                const isConflict = iv.status === 'conflict' || iv.status === 'removed';

                return (
                  <div
                    key={idx}
                    style={{
                      position: 'relative',
                      height: '34px',
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    {/* Interval Bar Span */}
                    <div
                      style={{
                        position: 'absolute',
                        left: `${leftPct}%`,
                        width: `${widthPct}%`,
                        top: 0,
                        bottom: 0,
                        backgroundColor: style.bg,
                        border: `1.5px ${isConflict ? 'dashed' : 'solid'} ${style.border}`,
                        borderRadius: '6px',
                        boxShadow: style.glow,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0 8px',
                        color: style.text,
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        textDecoration: isConflict ? 'line-through' : 'none'
                      }}
                    >
                      <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                        {iv.start}
                      </span>
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '10px',
                          fontWeight: 700,
                          opacity: 0.95,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          margin: '0 4px'
                        }}
                      >
                        {iv.label || iv.badge || `[${iv.start}, ${iv.end}]`}
                      </span>
                      <span className="font-mono" style={{ fontSize: '11px', fontWeight: 800 }}>
                        {iv.end}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Min-Heap Rooms Tracker (For Priority Queue approach) */}
      {heapRooms && Array.isArray(heapRooms) && heapRooms.length > 0 && (
        <div
          className="sketch-border"
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-surface)',
            padding: '12px 16px',
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
              color: 'var(--accent)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>Min-Heap (Earliest End Times / Occupied Rooms):</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {heapRooms.map((endT, idx) => (
              <div
                key={idx}
                className="sketch-border"
                style={{
                  padding: '4px 12px',
                  backgroundColor: 'var(--accent-soft)',
                  borderColor: 'var(--accent)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>Room {idx + 1}: occupied until t = {endT}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chronological Sweep Events Strip (For Event Sweep Algorithms) */}
      {sweepEvents.length > 0 && (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            className="font-mono"
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: 'var(--text-mute)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            Chronological Events Timeline:
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px',
              width: '100%'
            }}
          >
            {sweepEvents.map((ev, idx) => {
              const isStart = ev.type === 'start' || ev.type === '+1';
              return (
                <div
                  key={idx}
                  className="sketch-border"
                  style={{
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    backgroundColor: ev.active
                      ? (isStart ? 'rgba(52, 211, 153, 0.2)' : 'rgba(248, 113, 113, 0.2)')
                      : ev.done
                      ? 'var(--bg-surface-elevated)'
                      : 'var(--bg-surface)',
                    borderColor: ev.active
                      ? (isStart ? 'var(--color-green)' : 'var(--color-red)')
                      : ev.done
                      ? 'var(--border-ink)'
                      : 'var(--border-ink-soft)',
                    color: ev.active
                      ? (isStart ? 'var(--color-green)' : 'var(--color-red)')
                      : ev.done
                      ? 'var(--text-faint)'
                      : 'var(--text-ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    whiteSpace: 'nowrap',
                    boxShadow: ev.active ? '0 0 8px rgba(255, 139, 61, 0.3)' : 'none'
                  }}
                >
                  <span style={{ opacity: 0.7 }}>t={ev.time}:</span>
                  <span>{ev.label || (isStart ? '+1 Start' : '-1 End')}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Output Intervals Accumulator Card */}
      {outputIntervals.length > 0 && (
        <div
          className="sketch-border"
          style={{
            width: '100%',
            backgroundColor: 'var(--bg-surface)',
            padding: '12px 16px',
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
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>✓ Output Non-overlapping Intervals ({outputIntervals.length}):</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {outputIntervals.map((outIv, idx) => (
              <div
                key={idx}
                className="sketch-border"
                style={{
                  padding: '4px 12px',
                  backgroundColor: 'rgba(52, 211, 153, 0.15)',
                  borderColor: 'var(--color-green)',
                  color: 'var(--color-green)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>[{outIv.start}, {outIv.end}]</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Best / Solution Summary Callout */}
      {step.best && (
        <div
          className="sketch-border"
          style={{
            padding: '8px 18px',
            backgroundColor: 'var(--accent-soft)',
            borderColor: 'var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '0.04em',
            textAlign: 'center',
            boxShadow: '0 0 14px var(--accent-glow)'
          }}
        >
          {step.best.label || `Result: ${JSON.stringify(step.best.value)}`}
        </div>
      )}
    </div>
  );
};
