import React, { useState } from 'react';
import { Problem, Approach } from '../types';
import { ExternalLink, ChevronDown, ChevronUp, Sun, Moon, Code2, Eye, EyeOff, Menu, Youtube } from 'lucide-react';

interface HeaderProps {
  problem: Problem;
  activeApproach: Approach;
  activeApproachIdx: number;
  stepIndex: number;
  onSelectApproach: (approach: Approach) => void;
  onSelectStep: (approachIdx: number, stepIdx: number) => void;
  isPracticeMode: boolean;
  onTogglePractice: () => void;
  hideSolutions: boolean;
  onToggleHideSolutions: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  problem,
  activeApproach,
  activeApproachIdx,
  stepIndex,
  onSelectApproach,
  onSelectStep,
  isPracticeMode,
  onTogglePractice,
  hideSolutions,
  onToggleHideSolutions,
  theme,
  onToggleTheme,
  isSidebarOpen,
  onToggleSidebar
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);

  // Priority Video Solutions (Code Story With MIK 1st priority for Hindi, NeetCode for English)
  const hindiChannel = problem.videoSolutions?.hindi?.channel || 'Code Story With MIK';
  const hindiVideoUrl = problem.videoSolutions?.hindi?.url ||
    `https://www.youtube.com/results?search_query=${encodeURIComponent(problem.title + ' code story with mik')}`;

  const englishChannel = problem.videoSolutions?.english?.channel || 'NeetCode';
  const englishVideoUrl = problem.videoSolutions?.english?.url ||
    `https://www.youtube.com/results?search_query=${encodeURIComponent(problem.title + ' leetcode neetcode')}`;

  const getDifficultyClass = (diff?: string) => {
    if (diff === 'Easy') return 'ui-chip-easy';
    if (diff === 'Medium') return 'ui-chip-medium';
    if (diff === 'Hard') return 'ui-chip-hard';
    return '';
  };

  return (
    <header style={{ padding: '16px 24px 8px 24px', borderBottom: '1px solid var(--border-ink-soft)', backgroundColor: 'var(--bg-paper)' }}>
      {/* Top utility row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            type="button"
            onClick={onToggleSidebar}
            className="sketch-border-soft"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 10px',
              backgroundColor: isSidebarOpen ? 'var(--accent-soft)' : 'var(--bg-surface)',
              color: isSidebarOpen ? 'var(--accent)' : 'var(--text-ink)',
              fontSize: '11px',
              fontWeight: 700,
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'all 0.15s ease'
            }}
            title={isSidebarOpen ? "Close Problems Sidebar" : "Open Problems Sidebar"}
          >
            <Menu size={14} />
            <span>Problem</span>
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Hide / Show Solution toggle (Only rendered in Visualizer mode to prevent conflict with Practice Editor) */}
          {!isPracticeMode && (
            <button
              type="button"
              onClick={onToggleHideSolutions}
              className="sketch-border-soft"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                backgroundColor: hideSolutions ? 'var(--accent-soft)' : 'var(--bg-surface)',
                color: hideSolutions ? 'var(--accent)' : 'var(--text-mute)',
                fontSize: '11.5px',
                cursor: 'pointer'
              }}
              title={hideSolutions ? "Show code solution" : "Hide code solution"}
            >
              {hideSolutions ? <EyeOff size={13} /> : <Eye size={13} />}
              <span>{hideSolutions ? 'Solution Hidden' : 'Hide Solution'}</span>
            </button>
          )}

          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="sketch-border-soft"
            style={{
              padding: '5px 8px',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-ink)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Practice mode toggle button */}
          <button
            type="button"
            onClick={onTogglePractice}
            className="ui-btn ui-btn-primary"
            style={{
              padding: '5px 12px',
              fontSize: '12px',
              gap: '6px'
            }}
          >
            <Code2 size={14} />
            <span>{isPracticeMode ? 'Visualizer' : 'Practice Code'}</span>
          </button>
        </div>
      </div>

      {/* Main title & Complexity Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <h1 className="font-hand" style={{ fontSize: '32px', lineHeight: 1.1, fontWeight: 700, color: 'var(--text-ink)' }}>
            {problem.title}
          </h1>

          {problem.leetcode && (
            <a
              href={`https://leetcode.com/problems/${problem.leetcode.slug}/`}
              target="_blank"
              rel="noreferrer"
              className="ui-chip font-mono"
            >
              <span>LeetCode #{problem.leetcode.id}</span>
              <ExternalLink size={10} />
            </a>
          )}

          {problem.leetcode?.difficulty && (
            <span className={`ui-chip ${getDifficultyClass(problem.leetcode.difficulty)}`}>
              {problem.leetcode.difficulty}
            </span>
          )}

          <button
            type="button"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="ui-chip"
            style={{
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: isDetailsOpen ? 'var(--accent-soft)' : 'var(--bg-surface)',
              color: isDetailsOpen ? 'var(--accent)' : 'var(--text-ink)',
              borderColor: isDetailsOpen ? 'var(--accent)' : 'var(--border-ink-soft)',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            title={isDetailsOpen ? "Collapse problem description" : "Expand problem description"}
          >
            <span>{isDetailsOpen ? 'Hide Description' : 'Problem Description'}</span>
            {isDetailsOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
        </div>

        {/* Complexity info */}
        <div
          className="sketch-border-soft"
          style={{
            padding: '6px 12px',
            backgroundColor: 'var(--bg-surface)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '12px',
            flexWrap: 'wrap'
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--accent)' }}>{activeApproach.label}</span>
          <span className="font-mono">
            <span style={{ color: 'var(--text-mute)' }}>time </span>
            <strong>{activeApproach.complexity.time}</strong>
          </span>
          <span className="font-mono">
            <span style={{ color: 'var(--text-mute)' }}>space </span>
            <strong>{activeApproach.complexity.space}</strong>
          </span>
          <span className="font-mono" style={{ color: 'var(--accent)', fontWeight: 600, borderLeft: '1px solid var(--border-ink-soft)', paddingLeft: '10px' }}>
            step {stepIndex + 1} / {activeApproach.steps.length}
          </span>
        </div>
      </div>

      {/* Expandable / Collapsible Problem Details Card (Full Width) */}
      {isDetailsOpen && (
        <div
          className="sketch-border-soft"
          style={{
            marginTop: '12px',
            padding: '14px 18px',
            backgroundColor: 'var(--bg-surface)',
            width: '100%',
            position: 'relative',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
            {problem.subtitle ? (
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-ink)' }}>
                {problem.subtitle}
              </div>
            ) : <div />}
            <button
              type="button"
              onClick={() => setIsDetailsOpen(false)}
              className="ui-chip font-mono"
              style={{
                cursor: 'pointer',
                fontSize: '11px',
                padding: '3px 8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                color: 'var(--text-mute)'
              }}
              title="Collapse description"
            >
              <span>Collapse</span>
              <ChevronUp size={11} />
            </button>
          </div>

          <div
            style={{
              fontSize: '13.5px',
              color: 'var(--text-mute)',
              lineHeight: 1.6,
              whiteSpace: 'pre-line'
            }}
          >
            {problem.statement}
          </div>

          {problem.companies && problem.companies.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-faint)' }}>
                Asked at:
              </span>
              {problem.companies.map(comp => (
                <span key={comp} className="ui-chip" style={{ fontSize: '10.5px', cursor: 'default' }}>
                  {comp}
                </span>
              ))}
            </div>
          )}

          {/* Video Solution Channels */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px', flexWrap: 'wrap', borderTop: '1px dashed var(--border-ink-soft)', paddingTop: '10px' }}>
            <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-faint)', fontWeight: 600 }}>
              Video Solutions:
            </span>
            <a
              href={hindiVideoUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-chip font-mono"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderColor: 'rgba(239, 68, 68, 0.4)',
                color: '#f87171',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '11px',
                padding: '3px 8px',
                textDecoration: 'none'
              }}
              title={`Watch Hindi video solution on ${hindiChannel}`}
            >
              <Youtube size={13} color="#ef4444" />
              <span>HI: {hindiChannel}</span>
              <ExternalLink size={10} />
            </a>
            <a
              href={englishVideoUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-chip font-mono"
              style={{
                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                borderColor: 'rgba(56, 189, 248, 0.4)',
                color: '#38bdf8',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontSize: '11px',
                padding: '3px 8px',
                textDecoration: 'none'
              }}
              title={`Watch English video solution on ${englishChannel}`}
            >
              <Youtube size={13} color="#38bdf8" />
              <span>EN: {englishChannel}</span>
              <ExternalLink size={10} />
            </a>
          </div>
        </div>
      )}

      {/* Approaches Bar with Interactive Step Dots */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginTop: '14px',
          overflowX: 'auto',
          paddingBottom: '4px',
          flexWrap: 'nowrap'
        }}
      >
        {problem.approaches.map((approach, appIdx) => {
          const isSelected = activeApproachIdx === appIdx;
          const totalSteps = approach.steps.length;

          // Adaptive dot size and gap based on total step count to prevent oversized header stretching
          const isUltraHigh = totalSteps > 45;
          const isHigh = totalSteps > 20;

          const dotWidth = isUltraHigh ? 3 : isHigh ? 4 : 6;
          const dotHeight = isUltraHigh ? 3 : isHigh ? 4 : 6;
          const activeDotWidth = isUltraHigh ? 5 : isHigh ? 6 : 8;
          const activeDotHeight = isUltraHigh ? 5 : isHigh ? 6 : 8;
          const dotGap = isUltraHigh ? '1.5px' : isHigh ? '2px' : '3px';
          const btnHitArea = isUltraHigh ? '6px' : isHigh ? '8px' : '12px';

          return (
            <div
              key={approach.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '4px 0',
                borderBottom: isSelected ? '2px solid var(--accent)' : '2px solid transparent',
                transition: 'all 0.15s ease',
                flexShrink: 0
              }}
            >
              {/* Approach Title Button */}
              <button
                type="button"
                onClick={() => onSelectApproach(approach)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  color: isSelected ? 'var(--text-ink)' : 'var(--text-mute)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '12.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  whiteSpace: 'nowrap'
                }}
                title={`Switch to ${approach.label}`}
              >
                <span>{approach.label}</span>
              </button>

              {/* Step Dots */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: dotGap,
                  backgroundColor: isSelected ? 'var(--bg-surface)' : 'transparent',
                  padding: '2px 6px',
                  borderRadius: '12px',
                  maxWidth: isUltraHigh ? '360px' : 'auto',
                  overflowX: 'auto'
                }}
              >
                {approach.steps.map((step, sIdx) => {
                  const isCurrentStep = isSelected && stepIndex === sIdx;
                  const isPassedStep = isSelected && sIdx < stepIndex;

                  return (
                    <button
                      key={sIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectStep(appIdx, sIdx);
                      }}
                      style={{
                        width: btnHitArea,
                        height: btnHitArea,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        borderRadius: '50%',
                        flexShrink: 0
                      }}
                      title={`Step ${sIdx + 1} of ${approach.steps.length} (Line ${step.codeLine}): ${step.narration}`}
                    >
                      <span
                        style={{
                          width: isCurrentStep ? `${activeDotWidth}px` : `${dotWidth}px`,
                          height: isCurrentStep ? `${activeDotHeight}px` : `${dotHeight}px`,
                          borderRadius: '50%',
                          backgroundColor: isCurrentStep
                            ? 'var(--accent)'
                            : isPassedStep
                            ? 'var(--accent)'
                            : isSelected
                            ? 'var(--border-ink)'
                            : 'var(--border-ink-soft)',
                          opacity: isCurrentStep ? 1 : isPassedStep ? 0.75 : isSelected ? 0.5 : 0.25,
                          transform: isCurrentStep ? 'scale(1.2)' : 'scale(1)',
                          boxShadow: isCurrentStep ? '0 0 6px var(--accent-glow)' : 'none',
                          transition: 'all 0.15s ease'
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};
