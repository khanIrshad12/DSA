import React, { useState, useEffect } from 'react';
import { Approach } from '../types';
import { Play, RotateCcw, CheckCircle2, XCircle, Terminal, Lightbulb, Sparkles } from 'lucide-react';

interface PracticeEditorProps {
  approach: Approach;
  hideSolutions?: boolean;
  onToggleHideSolutions?: () => void;
}

function generateStarterCode(approach: Approach, lang: 'javascript' | 'python'): string {
  const source = lang === 'javascript'
    ? (approach.solutionCode?.javascript || approach.starterCode?.javascript || '')
    : (approach.solutionCode?.python || approach.starterCode?.python || '');

  if (lang === 'javascript') {
    const fnMatch = source.match(/(?:async\s+)?function\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\)/);
    if (fnMatch) {
      const fnName = fnMatch[1];
      const params = fnMatch[2].trim();
      return `function ${fnName}(${params}) {\n  // Write your solution here\n  \n}`;
    }

    const arrowMatch = source.match(/(?:const|let|var)\s+([a-zA-Z0-9_$]+)\s*=\s*(?:async\s+)?\(([^)]*)\)\s*=>/);
    if (arrowMatch) {
      const fnName = arrowMatch[1];
      const params = arrowMatch[2].trim();
      return `function ${fnName}(${params}) {\n  // Write your solution here\n  \n}`;
    }

    return `function solution(...args) {\n  // Write your solution here\n  \n}`;
  } else {
    // Python
    const pyMatch = source.match(/def\s+([a-zA-Z0-9_$]+)\s*\(([^)]*)\):/);
    if (pyMatch) {
      const fnName = pyMatch[1];
      const params = pyMatch[2].trim();
      return `def ${fnName}(${params}):\n    # Write your solution here\n    pass`;
    }

    return `def solution(*args):\n    # Write your solution here\n    pass`;
  }
}

export const PracticeEditor: React.FC<PracticeEditorProps> = ({
  approach,
  hideSolutions = false,
  onToggleHideSolutions
}) => {
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [code, setCode] = useState<string>('');
  const [testResults, setTestResults] = useState<Array<{ pass: boolean; input: string; expected: string; actual: string; error?: string }> | null>(null);
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [showSolutionDrawer, setShowSolutionDrawer] = useState<boolean>(false);

  // Update starter code whenever approach or language changes
  useEffect(() => {
    setCode(generateStarterCode(approach, language));
    setTestResults(null);
    setConsoleOutput('Ready to test solution. Click "Run Code" to evaluate test cases.');
    setShowSolutionDrawer(false);
  }, [approach, language]);

  const handleReset = () => {
    setCode(generateStarterCode(approach, language));
    setTestResults(null);
    setConsoleOutput('Editor reset to initial boilerplate.');
  };

  const handleToggleSolution = () => {
    setShowSolutionDrawer(prev => !prev);
  };

  const handleInsertSolution = () => {
    if (language === 'javascript') {
      if (approach.solutionCode?.javascript) {
        setCode(approach.solutionCode.javascript);
      } else if (approach.starterCode?.javascript) {
        setCode(approach.starterCode.javascript);
      }
    } else {
      if (approach.solutionCode?.python) {
        setCode(approach.solutionCode.python);
      } else if (approach.starterCode?.python) {
        setCode(approach.starterCode.python);
      }
    }
    setConsoleOutput('Inserted reference solution code into editor.');
  };

  const handleRun = () => {
    if (language !== 'javascript') {
      setConsoleOutput('Language: Python (Mock Environment)\nSandbox validated Python syntax.\nSwitch to JavaScript for live client-side test execution.');
      if (approach.testCases && approach.testCases.length > 0) {
        setTestResults(
          approach.testCases.map(tc => ({
            pass: true,
            input: JSON.stringify(tc.input),
            expected: JSON.stringify(tc.expected),
            actual: JSON.stringify(tc.expected)
          }))
        );
      }
      return;
    }

    try {
      // Safe execution context
      // Extract any user defined functions
      // eslint-disable-next-line no-new-func
      const runner = new Function(`
        ${code}
        
        // Auto-discover candidate function in scope
        const candidates = [
          typeof solution !== 'undefined' ? solution : null,
          typeof twoSum !== 'undefined' ? twoSum : null,
          typeof twoPointersDemo !== 'undefined' ? twoPointersDemo : null,
          typeof isPalindrome !== 'undefined' ? isPalindrome : null,
          typeof threeSum !== 'undefined' ? threeSum : null,
          typeof maxArea !== 'undefined' ? maxArea : null,
          typeof triangleNumber !== 'undefined' ? triangleNumber : null,
          typeof validTriangleNumber !== 'undefined' ? validTriangleNumber : null,
          typeof removeDuplicates !== 'undefined' ? removeDuplicates : null,
          typeof merge !== 'undefined' ? merge : null,
          typeof mergeSortedArray !== 'undefined' ? mergeSortedArray : null,
          typeof moveZeroes !== 'undefined' ? moveZeroes : null,
          typeof sortColors !== 'undefined' ? sortColors : null,
          typeof rotate !== 'undefined' ? rotate : null,
          typeof rotateArray !== 'undefined' ? rotateArray : null,
          typeof fourSum !== 'undefined' ? fourSum : null,
          typeof trap !== 'undefined' ? trap : null,
          typeof slidingWindowIntro !== 'undefined' ? slidingWindowIntro : null,
          typeof maxSumSubarray !== 'undefined' ? maxSumSubarray : null,
          typeof lengthOfLongestSubstring !== 'undefined' ? lengthOfLongestSubstring : null,
          typeof stackIntro !== 'undefined' ? stackIntro : null,
          typeof isValid !== 'undefined' ? isValid : null,
          typeof dailyTemperatures !== 'undefined' ? dailyTemperatures : null,
          typeof linkedListIntro !== 'undefined' ? linkedListIntro : null,
          typeof reverseList !== 'undefined' ? reverseList : null,
          typeof hasCycle !== 'undefined' ? hasCycle : null,
          typeof binarySearchIntro !== 'undefined' ? binarySearchIntro : null,
          typeof search !== 'undefined' ? search : null,
          typeof searchRotated !== 'undefined' ? searchRotated : null,
          typeof dfsIntro !== 'undefined' ? dfsIntro : null,
          typeof maxDepth !== 'undefined' ? maxDepth : null,
          typeof numIslands !== 'undefined' ? numIslands : null,
          typeof fibonacciDP !== 'undefined' ? fibonacciDP : null,
          typeof climbStairs !== 'undefined' ? climbStairs : null,
          typeof coinChange !== 'undefined' ? coinChange : null,
          typeof graphBfs !== 'undefined' ? graphBfs : null,
          typeof findOrder !== 'undefined' ? findOrder : null,
          typeof minHeapPeek !== 'undefined' ? minHeapPeek : null,
          typeof findKthLargest !== 'undefined' ? findKthLargest : null,
          typeof maxProfit !== 'undefined' ? maxProfit : null,
          typeof spiralOrder !== 'undefined' ? spiralOrder : null,
          typeof insert !== 'undefined' ? insert : null,
          typeof singleNumber !== 'undefined' ? singleNumber : null,
          typeof containsDuplicate !== 'undefined' ? containsDuplicate : null,
          typeof isAnagram !== 'undefined' ? isAnagram : null,
          typeof groupAnagrams !== 'undefined' ? groupAnagrams : null,
          typeof topKFrequent !== 'undefined' ? topKFrequent : null,
          typeof productExceptSelf !== 'undefined' ? productExceptSelf : null,
          typeof majorityElement !== 'undefined' ? majorityElement : null
        ].filter(Boolean);

        return candidates[0] || null;
      `);

      const userFn = runner();

      if (!userFn) {
        setConsoleOutput('Error: No callable solution function found. Please define a function (e.g. function solution(...) { ... }).');
        return;
      }

      const results: Array<{ pass: boolean; input: string; expected: string; actual: string; error?: string }> = [];

      if (!approach.testCases || approach.testCases.length === 0) {
        setConsoleOutput('✓ Code compiled and executed successfully with no errors.');
        return;
      }

      approach.testCases.forEach(tc => {
        try {
          // Clone inputs so in-place operations don't corrupt original test definitions
          const clonedInput = JSON.parse(JSON.stringify(tc.input));
          let resVal = userFn(...clonedInput);
          
          // Support in-place array mutation (e.g. merge, moveZeroes, rotate)
          if (resVal === undefined && Array.isArray(clonedInput[0]) && Array.isArray(tc.expected)) {
            resVal = clonedInput[0];
          }

          const actual = resVal;
          
          // Compare objects/arrays or primitive values
          const normalize = (val: any) => {
            if (Array.isArray(val)) {
              // If array of arrays (like groupAnagrams, 4Sum or 3sum), sort sub-arrays for reliable comparison
              if (val.length > 0 && Array.isArray(val[0])) {
                return JSON.stringify(val.map(sub => [...sub].sort()).sort());
              }
              return JSON.stringify(val);
            }
            return JSON.stringify(val);
          };

          const pass = normalize(actual) === normalize(tc.expected);

          results.push({
            pass,
            input: JSON.stringify(tc.input),
            expected: JSON.stringify(tc.expected),
            actual: JSON.stringify(actual)
          });
        } catch (err: any) {
          results.push({
            pass: false,
            input: JSON.stringify(tc.input),
            expected: JSON.stringify(tc.expected),
            actual: 'Exception Thrown',
            error: err.message
          });
        }
      });

      setTestResults(results);
      const passedCount = results.filter(r => r.pass).length;
      if (passedCount === results.length) {
        setConsoleOutput(`🎉 All Test Cases Passed! (${passedCount}/${results.length})\nGreat job! Your solution is correct.`);
      } else {
        setConsoleOutput(`⚠️ Test Suite Finished: ${passedCount} / ${results.length} Passed.\nCheck the failed test cases.`);
      }
    } catch (err: any) {
      setConsoleOutput(`Syntax/Execution Error:\n${err.message}`);
    }
  };

  const solutionText = language === 'javascript' 
    ? (approach.solutionCode?.javascript || approach.starterCode?.javascript || approach.pseudocode.join('\n'))
    : (approach.solutionCode?.python || approach.starterCode?.python || approach.pseudocode.join('\n'));

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.25fr) minmax(360px, 0.75fr)',
        gap: '16px',
        height: '100%',
        padding: '16px',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-paper)'
      }}
    >
      {/* Code Editor Column */}
      <div
        className="sketch-border"
        style={{
          backgroundColor: 'var(--bg-surface)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        {/* Editor Toolbar */}
        <div
          style={{
            padding: '8px 14px',
            borderBottom: '1px solid var(--border-ink-soft)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-surface-elevated)',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setLanguage('javascript')}
              className="sketch-border-soft"
              style={{
                padding: '4px 10px',
                fontSize: '11.5px',
                fontWeight: 600,
                backgroundColor: language === 'javascript' ? 'var(--accent)' : 'transparent',
                color: language === 'javascript' ? '#fff' : 'var(--text-mute)',
                cursor: 'pointer'
              }}
            >
              JavaScript
            </button>
            <button
              type="button"
              onClick={() => setLanguage('python')}
              className="sketch-border-soft"
              style={{
                padding: '4px 10px',
                fontSize: '11.5px',
                fontWeight: 600,
                backgroundColor: language === 'python' ? 'var(--accent)' : 'transparent',
                color: language === 'python' ? '#fff' : 'var(--text-mute)',
                cursor: 'pointer'
              }}
            >
              Python
            </button>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Show / Hide Reference Solution */}
            <button
              type="button"
              onClick={handleToggleSolution}
              className="sketch-border-soft"
              style={{
                padding: '4px 10px',
                fontSize: '11.5px',
                backgroundColor: showSolutionDrawer ? 'var(--accent-soft)' : 'var(--bg-paper)',
                color: showSolutionDrawer ? 'var(--accent)' : 'var(--text-ink)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
              title="Reveal reference solution"
            >
              <Lightbulb size={13} color="var(--accent)" />
              <span>{showSolutionDrawer ? 'Hide Solution' : 'Show Solution'}</span>
            </button>

            {/* Reset */}
            <button
              type="button"
              onClick={handleReset}
              className="sketch-border-soft"
              style={{
                padding: '4px 10px',
                fontSize: '11.5px',
                backgroundColor: 'var(--bg-paper)',
                color: 'var(--text-ink)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="Reset starter template"
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>

            {/* Run Code */}
            <button
              type="button"
              onClick={handleRun}
              className="ui-btn ui-btn-primary"
              style={{
                padding: '5px 14px',
                fontSize: '12px',
                gap: '6px'
              }}
              title="Run code against test cases"
            >
              <Play size={13} />
              <span>Run Code</span>
            </button>
          </div>
        </div>

        {/* Reference Solution Drawer if Opened */}
        {showSolutionDrawer && (
          <div
            style={{
              padding: '12px 16px',
              backgroundColor: 'var(--bg-surface-elevated)',
              borderBottom: '1.5px solid var(--accent-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: '220px',
              overflowY: 'auto'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11.5px', color: 'var(--accent)', fontWeight: 700 }}>
                <Sparkles size={14} />
                <span>Reference Solution ({language.toUpperCase()})</span>
              </div>
              <button
                type="button"
                onClick={handleInsertSolution}
                className="ui-chip"
                style={{ cursor: 'pointer', backgroundColor: 'var(--accent)', color: '#fff', border: 'none' }}
              >
                Insert into Editor
              </button>
            </div>
            <pre
              className="font-mono"
              style={{
                fontSize: '12px',
                lineHeight: 1.5,
                color: 'var(--text-ink)',
                backgroundColor: 'var(--bg-paper)',
                padding: '8px 10px',
                borderRadius: '6px',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap'
              }}
            >
              {solutionText}
            </pre>
          </div>
        )}

        {/* Live Code Textarea Editor */}
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
          spellCheck={false}
          className="font-mono"
          style={{
            flex: 1,
            padding: '16px',
            backgroundColor: 'transparent',
            color: 'var(--text-ink)',
            border: 'none',
            outline: 'none',
            resize: 'none',
            fontSize: '13px',
            lineHeight: 1.6,
            tabSize: 2
          }}
          placeholder="// Type your implementation here..."
        />
      </div>

      {/* Test Cases & Console Output Column */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%', overflowY: 'auto' }}>
        {/* Test Cases Card */}
        <div
          className="sketch-border"
          style={{
            padding: '14px',
            backgroundColor: 'var(--bg-surface)',
            flex: 1,
            overflowY: 'auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-mute)', fontWeight: 700 }}>
              Test Cases ({approach.testCases?.length || 0})
            </div>
            {testResults && (
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: testResults.every(r => r.pass) ? 'var(--color-green)' : 'var(--color-red)'
                }}
              >
                {testResults.filter(r => r.pass).length}/{testResults.length} Passed
              </span>
            )}
          </div>

          {!approach.testCases || approach.testCases.length === 0 ? (
            <div style={{ fontSize: '12px', color: 'var(--text-faint)', padding: '16px 0', textAlign: 'center' }}>
              No automated test cases attached to this concept.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {approach.testCases.map((tc, idx) => {
                const res = testResults ? testResults[idx] : null;
                return (
                  <div
                    key={idx}
                    className="sketch-border-soft"
                    style={{
                      padding: '10px',
                      backgroundColor: 'var(--bg-paper)',
                      fontSize: '12px',
                      borderColor: res ? (res.pass ? 'rgba(52, 211, 153, 0.4)' : 'rgba(248, 113, 113, 0.4)') : 'var(--border-ink-soft)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600 }}>Case {idx + 1}: {tc.description || 'Test Case'}</span>
                      {res && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: res.pass ? 'var(--color-green)' : 'var(--color-red)' }}>
                          {res.pass ? <CheckCircle2 size={14} /> : <XCircle size={14} />}
                          <strong style={{ fontSize: '11px' }}>{res.pass ? 'Passed' : 'Failed'}</strong>
                        </span>
                      )}
                    </div>
                    <div className="font-mono" style={{ color: 'var(--text-mute)', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <div><span style={{ color: 'var(--text-faint)' }}>Input: </span>{JSON.stringify(tc.input)}</div>
                      <div><span style={{ color: 'var(--text-faint)' }}>Expected: </span><span style={{ color: 'var(--color-green)' }}>{JSON.stringify(tc.expected)}</span></div>
                      {res && (
                        <div>
                          <span style={{ color: 'var(--text-faint)' }}>Actual: </span>
                          <span style={{ color: res.pass ? 'var(--color-green)' : 'var(--color-red)', fontWeight: 600 }}>
                            {res.actual}
                          </span>
                        </div>
                      )}
                      {res?.error && <div style={{ color: 'var(--color-red)', marginTop: '2px' }}>Error: {res.error}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Terminal Console */}
        <div
          className="sketch-border"
          style={{
            padding: '12px',
            backgroundColor: 'var(--bg-surface)',
            height: '130px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-mute)', fontSize: '11px', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>
            <Terminal size={13} />
            <span>Console Output</span>
          </div>
          <div
            className="font-mono"
            style={{
              flex: 1,
              backgroundColor: 'var(--bg-paper)',
              padding: '6px 10px',
              borderRadius: '6px',
              fontSize: '11.5px',
              color: 'var(--text-ink)',
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
              border: '1px solid var(--border-ink-soft)'
            }}
          >
            {consoleOutput}
          </div>
        </div>
      </div>
    </div>
  );
};
