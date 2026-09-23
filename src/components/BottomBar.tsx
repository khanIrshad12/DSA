import React from 'react';
import { Step } from '../types';
import { RotateCcw, SkipBack, Play, Pause, SkipForward, Edit3 } from 'lucide-react';

interface BottomBarProps {
  step: Step;
  stepIndex: number;
  totalSteps: number;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNextStep: () => void;
  onPrevStep: () => void;
  onRestart: () => void;
  onSeek: (index: number) => void;
  speed: number;
  onChangeSpeed: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({
  step,
  stepIndex,
  totalSteps,
  isPlaying,
  onTogglePlay,
  onNextStep,
  onPrevStep,
  onRestart,
  onSeek,
  speed,
  onChangeSpeed
}) => {
  return (
    <div
      style={{
        padding: '10px 24px 16px 24px',
        backgroundColor: 'var(--bg-paper)',
        borderTop: '1px solid var(--border-ink-soft)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}
    >
      {/* Step Narration Explanation Box */}
      <div
        className="sketch-border"
        style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '12px 16px',
          minHeight: '64px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}
      >
        <span style={{ color: 'var(--accent)', marginTop: '2px' }}>
          <Edit3 size={18} />
        </span>

        <div key={stepIndex} className="animate-text-reveal" style={{ flex: 1 }}>
          <span
            className="font-mono"
            style={{
              fontSize: '10px',
              padding: '2px 6px',
              borderRadius: '4px',
              backgroundColor: 'var(--accent-soft)',
              color: 'var(--accent)',
              border: '1px solid var(--accent-border)',
              marginRight: '8px',
              verticalAlign: 'middle',
              fontWeight: 700
            }}
          >
            line {step.codeLine}
          </span>
          <span style={{ fontSize: '13.5px', color: 'var(--text-ink)', lineHeight: 1.5 }}>
            {step.narration}
          </span>
        </div>
      </div>

      {/* Playback Controls Bar */}
      <div
        className="sketch-border"
        style={{
          backgroundColor: 'var(--bg-surface)',
          padding: '6px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {/* Restart */}
        <button
          type="button"
          onClick={onRestart}
          className="sketch-border-soft"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-paper)',
            color: 'var(--text-ink)',
            cursor: 'pointer'
          }}
          title="Restart (Home)"
        >
          <RotateCcw size={14} />
        </button>

        {/* Previous Step */}
        <button
          type="button"
          onClick={onPrevStep}
          disabled={stepIndex <= 0}
          className="sketch-border-soft"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-paper)',
            color: 'var(--text-ink)',
            cursor: stepIndex <= 0 ? 'not-allowed' : 'pointer',
            opacity: stepIndex <= 0 ? 0.35 : 1
          }}
          title="Previous Step (←)"
        >
          <SkipBack size={14} />
        </button>

        {/* Play / Pause */}
        <button
          type="button"
          onClick={onTogglePlay}
          className="ui-btn ui-btn-primary"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          title="Play / Pause (Space)"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: '2px' }} />}
        </button>

        {/* Next Step */}
        <button
          type="button"
          onClick={onNextStep}
          disabled={stepIndex >= totalSteps - 1}
          className="sketch-border-soft"
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--bg-paper)',
            color: 'var(--text-ink)',
            cursor: stepIndex >= totalSteps - 1 ? 'not-allowed' : 'pointer',
            opacity: stepIndex >= totalSteps - 1 ? 0.35 : 1
          }}
          title="Next Step (→)"
        >
          <SkipForward size={14} />
        </button>

        {/* Scrubber Range Slider */}
        <input
          type="range"
          min={0}
          max={totalSteps - 1}
          value={stepIndex}
          onChange={e => onSeek(Number(e.target.value))}
          className="scrubber"
          style={{ flex: 1 }}
        />

        {/* Step Indicator */}
        <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-mute)', minWidth: '65px', textAlign: 'right' }}>
          {stepIndex + 1} / {totalSteps}
        </span>

        {/* Speed Multiplier Button */}
        <button
          type="button"
          onClick={onChangeSpeed}
          className="sketch-border-soft font-mono"
          style={{
            padding: '4px 8px',
            backgroundColor: 'var(--bg-paper)',
            color: 'var(--text-ink)',
            fontSize: '11px',
            cursor: 'pointer',
            minWidth: '38px',
            textAlign: 'center'
          }}
          title="Playback speed"
        >
          {speed}×
        </button>
      </div>
    </div>
  );
};
