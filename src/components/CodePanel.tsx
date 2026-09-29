import React, { useState } from 'react';
import { Approach } from '../types';
import { Copy, Check, Code2 } from 'lucide-react';

interface CodePanelProps {
  approach: Approach;
  activeLine: number;
  hideSolutions: boolean;
  onOpenPractice: () => void;
}

export const CodePanel: React.FC<CodePanelProps> = ({
  approach,
  activeLine,
  hideSolutions,
  onOpenPractice
}) => {
  const [copied, setCopied] = useState(false);
  const [langTab, setLangTab] = useState<'pseudo' | 'js' | 'py'>('pseudo');

  const getCodeLines = (): string[] => {
    if (langTab === 'js' && approach.solutionCode?.javascript) {
      return approach.solutionCode.javascript.split('\n');
    }
    if (langTab === 'py' && approach.solutionCode?.python) {
      return approach.solutionCode.python.split('\n');
    }
    return approach.pseudocode || [];
  };

  const codeLines = getCodeLines();

  const handleCopy = () => {
    const textToCopy = codeLines.join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div
      className="sketch-border"
      style={{
        backgroundColor: 'var(--bg-surface)',
        padding: '14px',
        width: '100%',
        position: 'relative'
      }}
    >
      {/* Panel Top Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-mute)', fontWeight: 700 }}>
            {approach.label}
          </div>

          {/* Language / View Switcher */}
          {!hideSolutions && (
            <div
              style={{
                display: 'inline-flex',
                backgroundColor: 'var(--bg-paper)',
                borderRadius: '4px',
                padding: '2px',
                border: '1px solid var(--border-ink-soft)'
              }}
            >
              <button
                type="button"
                onClick={() => setLangTab('pseudo')}
                style={{
                  background: langTab === 'pseudo' ? 'var(--accent)' : 'transparent',
                  color: langTab === 'pseudo' ? '#ffffff' : 'var(--text-mute)',
                  border: 'none',
                  borderRadius: '3px',
                  padding: '2px 6px',
                  fontSize: '10.5px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Pseudo
              </button>
              {approach.solutionCode?.javascript && (
                <button
                  type="button"
                  onClick={() => setLangTab('js')}
                  style={{
                    background: langTab === 'js' ? 'var(--accent)' : 'transparent',
                    color: langTab === 'js' ? '#ffffff' : 'var(--text-mute)',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '2px 6px',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  JS
                </button>
              )}
              {approach.solutionCode?.python && (
                <button
                  type="button"
                  onClick={() => setLangTab('py')}
                  style={{
                    background: langTab === 'py' ? 'var(--accent)' : 'transparent',
                    color: langTab === 'py' ? '#ffffff' : 'var(--text-mute)',
                    border: 'none',
                    borderRadius: '3px',
                    padding: '2px 6px',
                    fontSize: '10.5px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  PY
                </button>
              )}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            type="button"
            onClick={onOpenPractice}
            className="ui-btn ui-btn-primary"
            style={{ padding: '3px 8px', fontSize: '11px', gap: '4px' }}
          >
            <Code2 size={12} />
            <span>Practice</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="sketch-border-soft"
            style={{
              padding: '3px 8px',
              backgroundColor: 'var(--bg-paper)',
              color: 'var(--text-ink)',
              fontSize: '11px',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px'
            }}
          >
            {copied ? <Check size={12} color="var(--color-green)" /> : <Copy size={12} />}
            <span>{copied ? 'copied' : 'copy'}</span>
          </button>
        </div>
      </div>

      {/* Code / Pseudocode Area */}
      {hideSolutions ? (
        <div
          style={{
            padding: '30px 16px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-paper)',
            borderRadius: '6px',
            border: '1px dashed var(--border-ink)'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-ink)' }}>
            Solution is Hidden
          </div>
          <div style={{ fontSize: '11.5px', color: 'var(--text-mute)', marginTop: '4px' }}>
            Try thinking through the steps yourself or write your own implementation in Practice Mode!
          </div>
        </div>
      ) : (
        <div
          style={{
            overflowX: 'auto',
            maxHeight: '360px',
            overflowY: 'auto',
            backgroundColor: 'var(--bg-paper)',
            borderRadius: '6px',
            padding: '10px 8px',
            border: '1px solid var(--border-ink-soft)'
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: '12px',
              lineHeight: '22px',
              color: 'var(--text-ink)',
              minWidth: '100%'
            }}
          >
            {codeLines.map((line, idx) => {
              const lineNum = idx + 1;
              const isActive = (langTab === 'pseudo') && (lineNum === activeLine);

              return (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: isActive ? 'rgba(255, 139, 61, 0.18)' : 'transparent',
                    border: isActive ? '1px solid rgba(255, 139, 61, 0.45)' : '1px solid transparent',
                    padding: '2px 6px',
                    borderRadius: '6px',
                    position: 'relative',
                    boxShadow: isActive ? '0 0 12px rgba(255, 139, 61, 0.15)' : 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  {/* Active Line Pointer Arrow */}
                  <span
                    style={{
                      position: 'absolute',
                      left: '-14px',
                      color: 'var(--accent)',
                      fontSize: '11px',
                      fontWeight: 800,
                      opacity: isActive ? 1 : 0
                    }}
                  >
                    ▸
                  </span>

                  {/* Line Number */}
                  <span
                    style={{
                      width: '24px',
                      textAlign: 'right',
                      paddingRight: '10px',
                      color: isActive ? 'var(--accent)' : 'var(--text-faint)',
                      userSelect: 'none',
                      fontSize: '11px',
                      fontWeight: isActive ? 700 : 400,
                      flexShrink: 0
                    }}
                  >
                    {lineNum}
                  </span>

                  {/* Code Line Content */}
                  <span
                    style={{
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? '#ffffff' : 'var(--text-ink)',
                      whiteSpace: 'pre',
                      wordBreak: 'normal'
                    }}
                  >
                    {line}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
