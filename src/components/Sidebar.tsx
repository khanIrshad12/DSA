import React, { useState } from 'react';
import { allTopics } from '../data/topics';
import {
  ChevronDown,
  ChevronRight,
  Search,
  BookOpen,
  Split,
  Hash,
  Sigma,
  Maximize2,
  Layers,
  GitCommit,
  TrendingUp,
  GitBranch,
  Zap,
  Grid,
  Share2,
  LayoutGrid,
  Sliders,
  Binary,
  RotateCcw,
  Radio,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTopicId: string;
  activeProblemId: string;
  onSelectProblem: (topicId: string, problemId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const topicIcons: Record<string, React.ReactNode> = {
  'two-pointers': <Split size={16} />,
  'arrays-hashing': <Hash size={16} />,
  'prefix-sum': <Sigma size={16} />,
  'sliding-window': <Maximize2 size={16} />,
  'stack': <Layers size={16} />,
  'linked-list': <GitCommit size={16} />,
  'heap': <TrendingUp size={16} />,
  'binary-search': <Search size={16} />,
  'dfs': <GitBranch size={16} />,
  'bfs': <Radio size={16} />,
  'backtracking': <RotateCcw size={16} />,
  'greedy': <Zap size={16} />,
  'dynamic-programming': <Grid size={16} />,
  'graphs': <Share2 size={16} />,
  'matrices': <LayoutGrid size={16} />,
  'intervals': <Sliders size={16} />,
  'bit-manipulation': <Binary size={16} />,
  'trie': <GitBranch size={16} />
};

export const Sidebar: React.FC<SidebarProps> = ({
  activeTopicId,
  activeProblemId,
  onSelectProblem,
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopics, setExpandedTopics] = useState<Record<string, boolean>>({
    [activeTopicId]: true
  });

  if (!isOpen) return null;

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev => ({ ...prev, [topicId]: !prev[topicId] }));
  };

  const filteredTopics = allTopics.map(topic => {
    const matchesTopic = topic.title.toLowerCase().includes(searchQuery.toLowerCase());
    const filteredProblems = topic.problems.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...topic,
      problems: searchQuery ? filteredProblems : topic.problems,
      isMatch: matchesTopic || filteredProblems.length > 0
    };
  }).filter(t => t.isMatch);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="sidebar-backdrop"
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 45
        }}
      />

      <aside
        style={{
          width: '300px',
          height: '100vh',
          backgroundColor: 'var(--bg-surface)',
          borderRight: '1.5px solid var(--border-ink)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'fixed',
          zIndex: 50,
          left: 0,
          top: 0,
          boxShadow: '4px 0 24px rgba(0,0,0,0.5)',
          animation: 'sidebarSlide 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Logo / Header */}
        <div style={{ padding: '16px 16px 12px 16px', borderBottom: '1px solid var(--border-ink-soft)', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-soft)',
                  border: '1.5px solid var(--accent-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)'
                }}
              >
                <BookOpen size={18} />
              </div>
              <div>
                <div className="font-hand" style={{ fontSize: '24px', lineHeight: 1, color: 'var(--text-ink)', fontWeight: 700 }}>
                  DSA <span style={{ color: 'var(--accent)' }}>Visual</span>
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-mute)', marginTop: '2px' }}>
                  step-by-step interactive animations
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="sketch-border-soft"
              style={{
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-paper)',
                color: 'var(--text-mute)',
                cursor: 'pointer',
                borderRadius: '6px'
              }}
              title="Close sidebar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Search Box */}
          <div
            style={{
              marginTop: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'var(--bg-paper)',
              border: '1px solid var(--border-ink)',
              borderRadius: '8px',
              padding: '6px 10px'
            }}
          >
            <Search size={14} style={{ color: 'var(--text-mute)' }} />
            <input
              type="text"
              placeholder="Search problems... (⌘K)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-ink)',
                fontSize: '12px',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Topic & Problem List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '12px 10px' }}>
          {filteredTopics.map(topic => {
            const isExpanded = searchQuery ? true : !!expandedTopics[topic.id];
            const isTopicActive = activeTopicId === topic.id;

            return (
              <div key={topic.id} style={{ marginBottom: '6px' }}>
                <button
                  type="button"
                  onClick={() => toggleTopic(topic.id)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    background: isTopicActive ? 'var(--bg-surface-elevated)' : 'transparent',
                    border: 'none',
                    color: isTopicActive ? 'var(--text-ink)' : 'var(--text-mute)',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600,
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: isTopicActive ? 'var(--accent)' : 'var(--text-faint)' }}>
                      {topicIcons[topic.id] || <Split size={15} />}
                    </span>
                    <span style={{ textTransform: 'capitalize' }}>{topic.title}</span>
                    <span
                      style={{
                        fontSize: '10px',
                        padding: '1px 6px',
                        borderRadius: '9999px',
                        backgroundColor: 'var(--bg-paper)',
                        color: 'var(--text-faint)'
                      }}
                    >
                      {topic.problems.length}
                    </span>
                  </div>
                  {isExpanded ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>

                {/* Problems list */}
                {isExpanded && (
                  <div style={{ paddingLeft: '16px', marginTop: '2px', borderLeft: '1.5px solid var(--border-ink-soft)', marginLeft: '14px' }}>
                    {topic.problems.map(problem => {
                      const isActive = activeTopicId === topic.id && activeProblemId === problem.id;
                      return (
                        <button
                          key={problem.id}
                          type="button"
                          onClick={() => {
                            onSelectProblem(topic.id, problem.id);
                            onClose();
                          }}
                          style={{
                            width: '100%',
                            display: 'block',
                            padding: '6px 10px',
                            margin: '2px 0',
                            borderRadius: '6px',
                            backgroundColor: isActive ? 'var(--accent-soft)' : 'transparent',
                            border: isActive ? '1px solid var(--accent-border)' : '1px solid transparent',
                            color: isActive ? 'var(--accent)' : 'var(--text-ink)',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.1s ease'
                          }}
                        >
                          <div style={{ fontSize: '12.5px', fontWeight: isActive ? 600 : 500 }}>
                            {problem.title}
                          </div>
                          {problem.subtitle && (
                            <div style={{ fontSize: '10.5px', color: 'var(--text-mute)', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {problem.subtitle}
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer shortcuts */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid var(--border-ink-soft)', fontSize: '11px', color: 'var(--text-mute)' }}>
          <div><kbd style={{ padding: '1px 4px', border: '1px solid var(--border-ink)', borderRadius: '4px' }}>←</kbd> / <kbd style={{ padding: '1px 4px', border: '1px solid var(--border-ink)', borderRadius: '4px' }}>→</kbd> step</div>
          <div style={{ marginTop: '3px' }}><kbd style={{ padding: '1px 4px', border: '1px solid var(--border-ink)', borderRadius: '4px' }}>Space</kbd> play / pause</div>
        </div>
      </aside>
    </>
  );
};
