import { useState, useEffect, useCallback, useMemo } from 'react';
import { allTopics, getProblemById } from './data/topics';
import { Approach, Step } from './types';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { CodePanel } from './components/CodePanel';
import { StatePanel } from './components/StatePanel';
import { BottomBar } from './components/BottomBar';
import { PracticeEditor } from './components/PracticeEditor';

// Visualizers
import { ArrayVisualizer } from './components/visualizers/ArrayVisualizer';
import { LinkedListVisualizer } from './components/visualizers/LinkedListVisualizer';
import { StackVisualizer } from './components/visualizers/StackVisualizer';
import { TreeVisualizer } from './components/visualizers/TreeVisualizer';
import { GraphVisualizer } from './components/visualizers/GraphVisualizer';
import { MatrixVisualizer } from './components/visualizers/MatrixVisualizer';
import { DPGridVisualizer } from './components/visualizers/DPGridVisualizer';
import { HeapVisualizer } from './components/visualizers/HeapVisualizer';
import { IntervalVisualizer } from './components/visualizers/IntervalVisualizer';
import { BarVisualizer } from './components/visualizers/BarVisualizer';

export function App() {
  const [activeTopicId, setActiveTopicId] = useState('two-pointers');
  const [activeProblemId, setActiveProblemId] = useState('two-sum-ii');
  const [activeApproachIdx, setActiveApproachIdx] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [hideSolutions, setHideSolutions] = useState(false);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Sync theme attribute on document root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Retrieve current active problem
  const problem = useMemo(() => {
    return getProblemById(activeTopicId, activeProblemId) || allTopics[0].problems[0];
  }, [activeTopicId, activeProblemId]);

  // Current active approach
  const activeApproach: Approach = useMemo(() => {
    return problem.approaches[activeApproachIdx] || problem.approaches[0];
  }, [problem, activeApproachIdx]);

  // Current active step
  const currentStep: Step = useMemo(() => {
    return activeApproach.steps[stepIndex] || activeApproach.steps[0];
  }, [activeApproach, stepIndex]);

  // Handle problem switch
  const handleSelectProblem = (topicId: string, problemId: string) => {
    setActiveTopicId(topicId);
    setActiveProblemId(problemId);
    setActiveApproachIdx(0);
    setStepIndex(0);
    setIsPlaying(false);
  };

  // Handle approach switch
  const handleSelectApproach = (approach: Approach, stepIdx = 0) => {
    const idx = problem.approaches.findIndex(a => a.label === approach.label);
    if (idx !== -1) {
      setActiveApproachIdx(idx);
      setStepIndex(stepIdx);
      setIsPlaying(false);
    }
  };

  // Handle direct step selection (e.g. from header dots)
  const handleSelectStep = (approachIdx: number, stepIdx: number) => {
    if (activeApproachIdx !== approachIdx) {
      setActiveApproachIdx(approachIdx);
    }
    setStepIndex(stepIdx);
    setIsPlaying(false);
  };

  // Playback handlers
  const handleNextStep = useCallback(() => {
    setStepIndex(prev => Math.min(prev + 1, activeApproach.steps.length - 1));
  }, [activeApproach.steps.length]);

  const handlePrevStep = useCallback(() => {
    setStepIndex(prev => Math.max(prev - 1, 0));
  }, []);

  const handleRestart = useCallback(() => {
    setStepIndex(0);
    setIsPlaying(false);
  }, []);

  const handleTogglePlay = useCallback(() => {
    if (stepIndex >= activeApproach.steps.length - 1) {
      setStepIndex(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(prev => !prev);
    }
  }, [stepIndex, activeApproach.steps.length]);

  const handleChangeSpeed = () => {
    const speeds = [0.5, 1, 1.5, 2];
    const nextIdx = (speeds.indexOf(speed) + 1) % speeds.length;
    setSpeed(speeds[nextIdx]);
  };

  // Autoplay ticker effect
  useEffect(() => {
    if (!isPlaying) return;

    const intervalMs = Math.round(1400 / speed);
    const timer = setInterval(() => {
      setStepIndex(prev => {
        if (prev >= activeApproach.steps.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, speed, activeApproach.steps.length]);

  // Global keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in inputs/textareas
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        handleTogglePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNextStep();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrevStep();
      } else if (e.code === 'Home') {
        e.preventDefault();
        handleRestart();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleTogglePlay, handleNextStep, handlePrevStep, handleRestart]);

  // Render proper specialized visualizer component
  const renderVisualizer = () => {
    const vType = problem.visualType || 'array';

    switch (vType) {
      case 'linked-list':
        return <LinkedListVisualizer data={problem.initialInput || [1, 2, 3, 4, 5]} step={currentStep} />;
      case 'stack':
        return <StackVisualizer data={problem.initialInput} step={currentStep} />;
      case 'tree':
        return <TreeVisualizer step={currentStep} />;
      case 'graph':
        return <GraphVisualizer step={currentStep} />;
      case 'matrix':
        return <MatrixVisualizer data={problem.initialInput} step={currentStep} />;
      case 'dp-grid':
        return <DPGridVisualizer data={problem.initialInput || [0, 1, 1, 2, 3, 5]} step={currentStep} />;
      case 'heap':
        return <HeapVisualizer data={problem.initialInput || [3, 5, 8, 10]} step={currentStep} />;
      case 'intervals':
        return <IntervalVisualizer data={problem.initialInput} step={currentStep} />;
      case 'bars':
        return <BarVisualizer data={problem.initialInput || [1, 8, 6, 2, 5, 4, 8, 3, 7]} step={currentStep} />;
      case 'array':
      default:
        return <ArrayVisualizer data={problem.initialInput || [1, 2, 3, 4, 5]} step={currentStep} />;
    }
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'var(--bg-paper)' }}>
      {/* Sidebar Navigation */}
      <Sidebar
        activeTopicId={activeTopicId}
        activeProblemId={activeProblemId}
        onSelectProblem={handleSelectProblem}
        isOpenMobile={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Studio Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
        {/* Top Header */}
        <Header
          problem={problem}
          activeApproach={activeApproach}
          activeApproachIdx={activeApproachIdx}
          stepIndex={stepIndex}
          onSelectApproach={handleSelectApproach}
          onSelectStep={handleSelectStep}
          isPracticeMode={isPracticeMode}
          onTogglePractice={() => setIsPracticeMode(!isPracticeMode)}
          hideSolutions={hideSolutions}
          onToggleHideSolutions={() => setHideSolutions(!hideSolutions)}
          theme={theme}
          onToggleTheme={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
        />

        {/* Center Workspace (Visualizer Canvas vs Practice Editor) */}
        <div style={{ flex: 1, overflow: 'hidden', display: 'flex' }}>
          {isPracticeMode ? (
            <PracticeEditor
              approach={activeApproach}
              hideSolutions={hideSolutions}
              onToggleHideSolutions={() => setHideSolutions(!hideSolutions)}
            />
          ) : (
            <div
              style={{
                flex: 1,
                display: 'grid',
                gridTemplateColumns: 'minmax(0, 1fr) 420px',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              {/* Left Visual Canvas */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'auto',
                  padding: '20px',
                  backgroundColor: 'var(--bg-paper)',
                  width: '100%',
                  height: '100%'
                }}
              >
                {renderVisualizer()}
              </div>

              {/* Right Code & Variable Watch Board */}
              <div
                style={{
                  borderLeft: '1px solid var(--border-ink-soft)',
                  backgroundColor: 'var(--bg-surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '16px',
                  overflowY: 'auto'
                }}
              >
                <CodePanel
                  approach={activeApproach}
                  activeLine={currentStep.codeLine}
                  hideSolutions={hideSolutions}
                  onOpenPractice={() => setIsPracticeMode(true)}
                />

                <StatePanel vars={currentStep.vars || []} />
              </div>
            </div>
          )}
        </div>

        {/* Bottom Narration & Step Controls */}
        {!isPracticeMode && (
          <BottomBar
            step={currentStep}
            stepIndex={stepIndex}
            totalSteps={activeApproach.steps.length}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            onRestart={handleRestart}
            onSeek={idx => setStepIndex(idx)}
            speed={speed}
            onChangeSpeed={handleChangeSpeed}
          />
        )}
      </div>
    </div>
  );
}

export default App;
