import { Problem } from '../../types';

export const intervalProblems: Problem[] = [
  // 1. Overview (Concept)
  {
    id: 'overview',
    patternId: 'intervals',
    title: 'Overview',
    subtitle: 'Sort, then sweep · overlap ⇔ b.start ≤ a.end',
    kind: 'concept',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Bloomberg', 'Apple'],
    statement: `Interval problems ask you to reason about a collection of 1D ranges \`[start, end]\` (representing time blocks, segments, schedules, or memory allocations).

### 🔑 The Core Principle: Sort & Sweep
Almost every interval problem begins with **sorting**:
1. **Sort by Start Time** (for Merging, Insertion, and Overlap Sweeps):
   - When intervals are sorted by start time (\`a.start ≤ b.start\`), checking for an overlap is simple:
   $$\\text{Overlap} \\iff b.\\text{start} \\le a.\\text{end}$$
2. **Sort by End Time** (for Greedy Scheduling / Selection):
   - When minimizing removals or maximizing the number of non-overlapping intervals, prioritize the **earliest ending interval** to leave the maximum possible time for subsequent intervals.

### 📐 The Overlap & Merge Mechanics:
- **No Overlap**: $b.\\text{start} > a.\\text{end}$ $\\to$ emit $a$, proceed to $b$.
- **Overlap**: $b.\\text{start} \\le a.\\text{end}$ $\\to$ combine into $[\\min(a.\\text{start}, b.\\text{start}), \\max(a.\\text{end}, b.\\text{end})]$.
- **Concurrency / Sweep Line**: Track $+1$ at start events and $-1$ at end events to compute peak simultaneous overlaps.`,
    visualType: 'intervals',
    initialInput: [
      { start: 1, end: 4, label: 'Interval A', status: 'active' },
      { start: 3, end: 8, label: 'Interval B', status: 'comparing' },
      { start: 10, end: 14, label: 'Interval C', status: 'default' }
    ],
    approaches: [
      {
        label: 'The Fundamental Overlap Rule',
        complexity: {
          time: 'O(n log n) or O(n)',
          space: 'O(1) or O(n)'
        },
        pseudocode: [
          "sort intervals by start time: a.start <= b.start",
          "for each adjacent pair (a, b):",
          "  if b.start <= a.end:   # OVERLAP!",
          "    merge: [a.start, max(a.end, b.end)]",
          "  else:                  # DISJOINT!",
          "    emit a, advance to b"
        ],
        starterCode: {
          javascript: `function checkOverlap(a, b) {\n  // Given a.start <= b.start\n  return b[0] <= a[1];\n}`,
          python: `def check_overlap(a: list[int], b: list[int]) -> bool:\n    # Given a[0] <= b[0]\n    return b[0] <= a[1]`
        },
        solutionCode: {
          javascript: `function checkOverlap(a, b) {\n  // Overlap condition assuming a is before or at b's start\n  return b[0] <= a[1];\n}`,
          python: `def check_overlap(a: list[int], b: list[int]) -> bool:\n    return b[0] <= a[1]`
        },
        testCases: [
          {
            input: [[1, 4], [3, 8]],
            expected: true,
            description: "Overlapping intervals [1,4] and [3,8]"
          },
          {
            input: [[1, 4], [5, 8]],
            expected: false,
            description: "Disjoint intervals [1,4] and [5,8]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Consider two intervals A = [1, 4] and B = [3, 8] sorted by start time (A.start ≤ B.start).",
            intervals: [
              { start: 1, end: 4, label: 'A = [1, 4]', status: 'active' },
              { start: 3, end: 8, label: 'B = [3, 8]', status: 'comparing' },
              { start: 10, end: 14, label: 'C = [10, 14]', status: 'default' }
            ],
            customVisual: {
              title: "OVERVIEW: INTERVAL OVERLAP CONDITION",
              minTime: 0,
              maxTime: 16,
              condition: { text: "Compare A and B: B.start (3) ≤ A.end (4)", type: "warning" }
            },
            vars: [["A", "[1, 4]"], ["B", "[3, 8]"]]
          },
          {
            codeLine: 3,
            narration: "Overlap detected! Since B.start (3) ≤ A.end (4), interval B starts before interval A finishes.",
            intervals: [
              { start: 1, end: 4, label: 'A = [1, 4]', status: 'active' },
              { start: 3, end: 8, label: 'B = [3, 8]', status: 'active' },
              { start: 10, end: 14, label: 'C = [10, 14]', status: 'default' }
            ],
            customVisual: {
              title: "OVERLAP CONFIRMED",
              minTime: 0,
              maxTime: 16,
              condition: { text: "3 ≤ 4 ➔ OVERLAP! Merge A and B", type: "overlap" }
            },
            vars: [["condition", "3 <= 4 (True)"], ["overlap", "Yes"]]
          },
          {
            codeLine: 4,
            narration: "Merge A and B into a unified interval: [min(1, 3), max(4, 8)] = [1, 8].",
            intervals: [
              { start: 1, end: 8, label: 'Merged [1, 8]', status: 'merged' },
              { start: 10, end: 14, label: 'C = [10, 14]', status: 'default' }
            ],
            customVisual: {
              title: "MERGED INTERVAL CREATED",
              minTime: 0,
              maxTime: 16,
              condition: { text: "Combined span: [1, max(4, 8)] = [1, 8]", type: "merge" },
              output: [[1, 8]]
            },
            vars: [["merged", "[1, 8]"]]
          },
          {
            codeLine: 2,
            narration: "Now compare the merged interval [1, 8] with next interval C = [10, 14].",
            intervals: [
              { start: 1, end: 8, label: 'Active [1, 8]', status: 'active' },
              { start: 10, end: 14, label: 'C = [10, 14]', status: 'comparing' }
            ],
            customVisual: {
              title: "COMPARE NEXT INTERVAL",
              minTime: 0,
              maxTime: 16,
              condition: { text: "Check: C.start (10) ≤ Active.end (8)?", type: "warning" }
            },
            vars: [["active", "[1, 8]"], ["next", "[10, 14]"]]
          },
          {
            codeLine: 5,
            narration: "No overlap: C.start (10) > Active.end (8). The merged interval [1, 8] is complete and can be emitted!",
            intervals: [
              { start: 1, end: 8, label: 'Done [1, 8]', status: 'safe' },
              { start: 10, end: 14, label: 'Active [10, 14]', status: 'active' }
            ],
            customVisual: {
              title: "DISJOINT: EMIT [1, 8]",
              minTime: 0,
              maxTime: 16,
              condition: { text: "10 > 8 ➔ NO OVERLAP. Emit [1, 8], start new with [10, 14]", type: "success" },
              output: [[1, 8], [10, 14]]
            },
            best: { label: "Result: [[1, 8], [10, 14]]" },
            vars: [["output", "[[1, 8], [10, 14]]"]]
          }
        ]
      },
      {
        label: 'Greedy Scheduling Principle',
        complexity: {
          time: 'O(n log n)',
          space: 'O(1)'
        },
        pseudocode: [
          "sort intervals by END time ascending",
          "keep earliest finishing interval",
          "reject all conflicting intervals with start < prev_end"
        ],
        starterCode: {
          javascript: `function greedySelect(intervals) {\n  intervals.sort((a, b) => a[1] - b[1]);\n  return intervals;\n}`,
          python: `def greedy_select(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[1])\n    return intervals`
        },
        solutionCode: {
          javascript: `function greedySelect(intervals) {\n  intervals.sort((a, b) => a[1] - b[1]);\n  return intervals;\n}`,
          python: `def greedy_select(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[1])\n    return intervals`
        },
        testCases: [
          {
            input: [[[1, 4], [2, 3], [3, 6]]],
            expected: [[2, 3], [3, 6]],
            description: "Greedy choice picks earliest finish [2, 3]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "When maximizing non-overlapping intervals, sort by END time to favor tasks that finish as early as possible.",
            intervals: [
              { start: 1, end: 4, label: 'Late Finish: [1, 4]', status: 'default' },
              { start: 2, end: 3, label: 'Early Finish: [2, 3]', status: 'active' },
              { start: 3, end: 6, label: 'Compatible: [3, 6]', status: 'default' }
            ],
            customVisual: {
              title: "GREEDY SELECTION: SORT BY END TIME",
              minTime: 0,
              maxTime: 8,
              condition: { text: "Earliest end = [2, 3] leaves maximum remaining room", type: "success" }
            },
            vars: [["pick", "[2, 3]"]]
          },
          {
            codeLine: 2,
            narration: "Picking [2, 3] allows [3, 6] to also fit, achieving 2 non-overlapping intervals instead of just 1.",
            intervals: [
              { start: 1, end: 4, label: 'Discarded [1, 4]', status: 'conflict' },
              { start: 2, end: 3, label: 'Kept [2, 3]', status: 'safe' },
              { start: 3, end: 6, label: 'Kept [3, 6]', status: 'safe' }
            ],
            customVisual: {
              title: "OPTIMAL SCHEDULE ACHIEVED",
              minTime: 0,
              maxTime: 8,
              output: [[2, 3], [3, 6]]
            },
            best: { label: "Optimal Selection: [[2, 3], [3, 6]]" },
            vars: [["kept", "[[2, 3], [3, 6]]"], ["count", 2]]
          }
        ]
      }
    ]
  },

  // 2. Merge Intervals (LeetCode #56 - Medium)
  {
    id: 'merge-intervals',
    patternId: 'intervals',
    title: 'Merge Intervals',
    subtitle: 'Sort by start · extend while overlapping',
    kind: 'problem',
    leetcode: {
      id: 56,
      slug: 'merge-intervals',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft', 'Apple', 'Uber', 'Bloomberg'],
    statement: "Given an array of `intervals` where `intervals[i] = [start_i, end_i]`, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    visualType: 'intervals',
    initialInput: [
      { start: 2, end: 6 },
      { start: 1, end: 3 },
      { start: 15, end: 18 },
      { start: 8, end: 10 }
    ],
    approaches: [
      {
        label: 'Sort by start & linear sweep',
        complexity: {
          time: 'O(n log n)',
          space: 'O(n)'
        },
        pseudocode: [
          "intervals.sort(key = x -> x.start)",
          "merged = [intervals[0]]",
          "for curr in intervals[1..]:",
          "  last = merged.last()",
          "  if curr.start <= last.end:",
          "    last.end = max(last.end, curr.end)   # extend overlap",
          "  else:",
          "    merged.append(curr)                  # start new interval",
          "return merged"
        ],
        starterCode: {
          javascript: `function merge(intervals) {\n  if (!intervals.length) return [];\n  // Sort by start time\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    const curr = intervals[i];\n    const last = merged[merged.length - 1];\n    \n    if (curr[0] <= last[1]) {\n      last[1] = Math.max(last[1], curr[1]);\n    } else {\n      merged.push(curr);\n    }\n  }\n  return merged;\n}`,
          python: `def merge(intervals: list[list[int]]) -> list[list[int]]:\n    if not intervals:\n        return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        last = merged[-1]\n        if curr[0] <= last[1]:\n            last[1] = max(last[1], curr[1])\n        else:\n            merged.append(curr)\n    return merged`
        },
        solutionCode: {
          javascript: `function merge(intervals) {\n  if (!intervals.length) return [];\n  intervals.sort((a, b) => a[0] - b[0]);\n  const merged = [intervals[0]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    const curr = intervals[i];\n    const last = merged[merged.length - 1];\n    \n    if (curr[0] <= last[1]) {\n      last[1] = Math.max(last[1], curr[1]);\n    } else {\n      merged.push(curr);\n    }\n  }\n  return merged;\n}`,
          python: `def merge(intervals: list[list[int]]) -> list[list[int]]:\n    if not intervals:\n        return []\n    intervals.sort(key=lambda x: x[0])\n    merged = [intervals[0]]\n    for curr in intervals[1:]:\n        last = merged[-1]\n        if curr[0] <= last[1]:\n            last[1] = max(last[1], curr[1])\n        else:\n            merged.append(curr)\n    return merged`
        },
        testCases: [
          {
            input: [[[1, 3], [2, 6], [8, 10], [15, 18]]],
            expected: [[1, 6], [8, 10], [15, 18]],
            description: "Standard overlapping intervals"
          },
          {
            input: [[[1, 4], [4, 5]]],
            expected: [[1, 5]],
            description: "Touching boundaries [1,4] and [4,5]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Given unsorted intervals: [[2, 6], [1, 3], [15, 18], [8, 10]]. First sort ascending by start time in O(n log n).",
            intervals: [
              { start: 2, end: 6, label: '[2, 6]', status: 'default' },
              { start: 1, end: 3, label: '[1, 3]', status: 'default' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' }
            ],
            customVisual: {
              title: "UNSORTED INPUT INTERVALS",
              minTime: 0,
              maxTime: 20,
              condition: { text: "Step 1: Sort by start time in O(n log n)", type: "neutral" }
            },
            vars: [["input", "[[2,6],[1,3],[15,18],[8,10]]"]]
          },
          {
            codeLine: 1,
            narration: "After sorting by start time: [[1, 3], [2, 6], [8, 10], [15, 18]]. Now we can sweep through in single linear pass O(n).",
            intervals: [
              { start: 1, end: 3, label: 'idx 0: [1, 3]', status: 'active' },
              { start: 2, end: 6, label: 'idx 1: [2, 6]', status: 'default' },
              { start: 8, end: 10, label: 'idx 2: [8, 10]', status: 'default' },
              { start: 15, end: 18, label: 'idx 3: [15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "SORTED INTERVALS LIST",
              minTime: 0,
              maxTime: 20,
              condition: { text: "Sorted order ready for linear sweep", type: "success" }
            },
            vars: [["sorted", "[[1,3],[2,6],[8,10],[15,18]]"]]
          },
          {
            codeLine: 2,
            narration: "Initialize merged list with the first interval [1, 3].",
            intervals: [
              { start: 1, end: 3, label: 'last: [1, 3]', status: 'active' },
              { start: 2, end: 6, label: 'curr: [2, 6]', status: 'default' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "INITIALIZE MERGED ACCUMULATOR",
              minTime: 0,
              maxTime: 20,
              output: [[1, 3]]
            },
            vars: [["merged", "[[1, 3]]"], ["last", "[1, 3]"]]
          },
          {
            codeLine: 3,
            narration: "Iterate to curr = [2, 6]. Check overlap with last = [1, 3].",
            intervals: [
              { start: 1, end: 3, label: 'last: [1, 3]', status: 'comparing' },
              { start: 2, end: 6, label: 'curr: [2, 6]', status: 'active' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "CHECK OVERLAP: [1, 3] vs [2, 6]",
              minTime: 0,
              maxTime: 20,
              condition: { text: "curr.start (2) ≤ last.end (3) ➔ OVERLAP DETECTED!", type: "overlap" },
              output: [[1, 3]]
            },
            vars: [["curr", "[2, 6]"], ["last", "[1, 3]"], ["2 <= 3", "True"]]
          },
          {
            codeLine: 6,
            narration: "Overlap detected! Extend last.end = max(3, 6) = 6. Active interval becomes [1, 6].",
            intervals: [
              { start: 1, end: 6, label: 'Merged: [1, 6]', status: 'merged' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "EXTEND MERGED INTERVAL",
              minTime: 0,
              maxTime: 20,
              condition: { text: "last.end = max(3, 6) = 6", type: "merge" },
              output: [[1, 6]]
            },
            vars: [["merged", "[[1, 6]]"], ["last", "[1, 6]"]]
          },
          {
            codeLine: 3,
            narration: "Iterate to next curr = [8, 10]. Compare with last = [1, 6].",
            intervals: [
              { start: 1, end: 6, label: 'last: [1, 6]', status: 'comparing' },
              { start: 8, end: 10, label: 'curr: [8, 10]', status: 'active' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "CHECK OVERLAP: [1, 6] vs [8, 10]",
              minTime: 0,
              maxTime: 20,
              condition: { text: "curr.start (8) > last.end (6) ➔ NO OVERLAP", type: "neutral" },
              output: [[1, 6]]
            },
            vars: [["curr", "[8, 10]"], ["last", "[1, 6]"], ["8 <= 6", "False"]]
          },
          {
            codeLine: 8,
            narration: "No overlap with [1, 6]. Append [8, 10] directly into merged list.",
            intervals: [
              { start: 1, end: 6, label: '[1, 6]', status: 'safe' },
              { start: 8, end: 10, label: 'last: [8, 10]', status: 'active' },
              { start: 15, end: 18, label: '[15, 18]', status: 'default' }
            ],
            customVisual: {
              title: "APPEND [8, 10] TO MERGED",
              minTime: 0,
              maxTime: 20,
              output: [[1, 6], [8, 10]]
            },
            vars: [["merged", "[[1, 6], [8, 10]]"], ["last", "[8, 10]"]]
          },
          {
            codeLine: 3,
            narration: "Iterate to final curr = [15, 18]. Compare with last = [8, 10].",
            intervals: [
              { start: 1, end: 6, label: '[1, 6]', status: 'safe' },
              { start: 8, end: 10, label: 'last: [8, 10]', status: 'comparing' },
              { start: 15, end: 18, label: 'curr: [15, 18]', status: 'active' }
            ],
            customVisual: {
              title: "CHECK OVERLAP: [8, 10] vs [15, 18]",
              minTime: 0,
              maxTime: 20,
              condition: { text: "curr.start (15) > last.end (10) ➔ NO OVERLAP", type: "neutral" },
              output: [[1, 6], [8, 10]]
            },
            vars: [["curr", "[15, 18]"], ["last", "[8, 10]"], ["15 <= 10", "False"]]
          },
          {
            codeLine: 8,
            narration: "No overlap. Append [15, 18] to merged list. All intervals processed!",
            intervals: [
              { start: 1, end: 6, label: '[1, 6]', status: 'safe' },
              { start: 8, end: 10, label: '[8, 10]', status: 'safe' },
              { start: 15, end: 18, label: '[15, 18]', status: 'safe' }
            ],
            customVisual: {
              title: "ALL INTERVALS MERGED SUCCESSFULLY",
              minTime: 0,
              maxTime: 20,
              condition: { text: "Complete non-overlapping set generated", type: "success" },
              output: [[1, 6], [8, 10], [15, 18]]
            },
            best: { label: "Result: [[1, 6], [8, 10], [15, 18]]" },
            vars: [["return", "[[1, 6], [8, 10], [15, 18]]"]]
          }
        ]
      }
    ]
  },

  // 3. Insert Interval (LeetCode #57 - Medium)
  {
    id: 'insert-interval',
    patternId: 'intervals',
    title: 'Insert Interval',
    subtitle: 'Sorted list · three-phase sweep · no sort',
    kind: 'problem',
    leetcode: {
      id: 57,
      slug: 'insert-interval',
      difficulty: 'Medium'
    },
    companies: ['Google', 'Facebook', 'Amazon', 'LinkedIn', 'Microsoft'],
    statement: "You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start_i, end_i]` sorted in ascending order by `start_i`. You are also given an interval `newInterval = [start, end]`. Insert `newInterval` into `intervals` such that `intervals` is still sorted and has no overlapping intervals (merge if necessary).",
    visualType: 'intervals',
    initialInput: [
      { start: 1, end: 2 },
      { start: 3, end: 5 },
      { start: 6, end: 7 },
      { start: 8, end: 10 },
      { start: 12, end: 16 }
    ],
    approaches: [
      {
        label: 'Three-Phase Linear Sweep',
        complexity: {
          time: 'O(n)',
          space: 'O(n)'
        },
        pseudocode: [
          "res = []; i = 0; n = intervals.length",
          "# Phase 1: append all intervals completely before newInterval",
          "while i < n and intervals[i].end < newInterval.start:",
          "  res.append(intervals[i]); i++",
          "# Phase 2: merge all overlapping intervals with newInterval",
          "while i < n and intervals[i].start <= newInterval.end:",
          "  newInterval.start = min(newInterval.start, intervals[i].start)",
          "  newInterval.end = max(newInterval.end, intervals[i].end)",
          "  i++",
          "res.append(newInterval)",
          "# Phase 3: append all intervals completely after newInterval",
          "while i < n: res.append(intervals[i]); i++",
          "return res"
        ],
        starterCode: {
          javascript: `function insert(intervals, newInterval) {\n  const res = [];\n  let i = 0;\n  const n = intervals.length;\n  \n  // Phase 1: add all intervals before newInterval\n  while (i < n && intervals[i][1] < newInterval[0]) {\n    res.push(intervals[i]);\n    i++;\n  }\n  \n  // Phase 2: merge overlapping intervals\n  while (i < n && intervals[i][0] <= newInterval[1]) {\n    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n    i++;\n  }\n  res.push(newInterval);\n  \n  // Phase 3: add rest of intervals\n  while (i < n) {\n    res.push(intervals[i]);\n    i++;\n  }\n  return res;\n}`,
          python: `def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    res = []\n    i, n = 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res`
        },
        solutionCode: {
          javascript: `function insert(intervals, newInterval) {\n  const res = [];\n  let i = 0;\n  const n = intervals.length;\n  \n  while (i < n && intervals[i][1] < newInterval[0]) {\n    res.push(intervals[i]);\n    i++;\n  }\n  while (i < n && intervals[i][0] <= newInterval[1]) {\n    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n    i++;\n  }\n  res.push(newInterval);\n  while (i < n) {\n    res.push(intervals[i]);\n    i++;\n  }\n  return res;\n}`,
          python: `def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    res = []\n    i, n = 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res`
        },
        testCases: [
          {
            input: [[[1, 3], [6, 9]], [2, 5]],
            expected: [[1, 5], [6, 9]],
            description: "Insert [2, 5] into [[1,3],[6,9]]"
          },
          {
            input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]],
            expected: [[1, 2], [3, 10], [12, 16]],
            description: "Insert [4, 8] spanning multiple intervals"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Given sorted intervals [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]] and target newInterval = [4, 8].",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'default' },
              { start: 3, end: 5, label: '[3, 5]', status: 'default' },
              { start: 6, end: 7, label: '[6, 7]', status: 'default' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 12, end: 16, label: '[12, 16]', status: 'default' },
              { start: 4, end: 8, label: 'NEW: [4, 8]', status: 'inserted' }
            ],
            customVisual: {
              title: "THREE-PHASE SWEEP INITIALIZATION",
              minTime: 0,
              maxTime: 18,
              condition: { text: "Insert newInterval = [4, 8] without re-sorting O(n)", type: "neutral" }
            },
            vars: [["newInterval", "[4, 8]"], ["i", 0]]
          },
          {
            codeLine: 3,
            narration: "Phase 1: Check intervals[0] = [1, 2]. Since end (2) < new.start (4), [1, 2] is completely before newInterval. Add to res.",
            intervals: [
              { start: 1, end: 2, label: 'Phase 1: [1, 2]', status: 'safe' },
              { start: 3, end: 5, label: '[3, 5]', status: 'default' },
              { start: 6, end: 7, label: '[6, 7]', status: 'default' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 12, end: 16, label: '[12, 16]', status: 'default' },
              { start: 4, end: 8, label: 'NEW: [4, 8]', status: 'inserted' }
            ],
            customVisual: {
              title: "PHASE 1: BEFORE NEW INTERVAL",
              minTime: 0,
              maxTime: 18,
              condition: { text: "intervals[0].end (2) < new.start (4) ➔ Append [1, 2]", type: "success" },
              output: [[1, 2]]
            },
            vars: [["res", "[[1, 2]]"], ["i", 1]]
          },
          {
            codeLine: 5,
            narration: "Phase 2 starts at i = 1: intervals[1] = [3, 5]. Since start (3) ≤ new.end (8), it overlaps! Merge: [min(4, 3), max(8, 5)] = [3, 8].",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'safe' },
              { start: 3, end: 8, label: 'Merging: [3, 8]', status: 'merged' },
              { start: 6, end: 7, label: '[6, 7]', status: 'default' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 12, end: 16, label: '[12, 16]', status: 'default' }
            ],
            customVisual: {
              title: "PHASE 2: OVERLAP MERGE 1",
              minTime: 0,
              maxTime: 18,
              condition: { text: "3 ≤ 8 ➔ newInterval updated to [min(4,3), max(8,5)] = [3, 8]", type: "overlap" },
              output: [[1, 2]]
            },
            vars: [["newInterval", "[3, 8]"], ["i", 2]]
          },
          {
            codeLine: 6,
            narration: "Phase 2 continues at i = 2: intervals[2] = [6, 7]. Start (6) ≤ new.end (8) ➔ Merge: [min(3, 6), max(8, 7)] = [3, 8].",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'safe' },
              { start: 3, end: 8, label: 'Merging: [3, 8]', status: 'merged' },
              { start: 8, end: 10, label: '[8, 10]', status: 'default' },
              { start: 12, end: 16, label: '[12, 16]', status: 'default' }
            ],
            customVisual: {
              title: "PHASE 2: OVERLAP MERGE 2",
              minTime: 0,
              maxTime: 18,
              condition: { text: "6 ≤ 8 ➔ Absorbs [6, 7], newInterval remains [3, 8]", type: "overlap" },
              output: [[1, 2]]
            },
            vars: [["newInterval", "[3, 8]"], ["i", 3]]
          },
          {
            codeLine: 7,
            narration: "Phase 2 continues at i = 3: intervals[3] = [8, 10]. Start (8) ≤ new.end (8) ➔ Merge: [min(3, 8), max(8, 10)] = [3, 10].",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'safe' },
              { start: 3, end: 10, label: 'Merged: [3, 10]', status: 'merged' },
              { start: 12, end: 16, label: '[12, 16]', status: 'default' }
            ],
            customVisual: {
              title: "PHASE 2: OVERLAP MERGE 3",
              minTime: 0,
              maxTime: 18,
              condition: { text: "8 ≤ 8 ➔ newInterval extended to [3, 10]", type: "merge" },
              output: [[1, 2]]
            },
            vars: [["newInterval", "[3, 10]"], ["i", 4]]
          },
          {
            codeLine: 10,
            narration: "Phase 2 check at i = 4: intervals[4] = [12, 16]. Start (12) > new.end (10) ➔ Overlap phase ends! Append merged [3, 10] to res.",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'safe' },
              { start: 3, end: 10, label: 'Inserted: [3, 10]', status: 'safe' },
              { start: 12, end: 16, label: '[12, 16]', status: 'active' }
            ],
            customVisual: {
              title: "PHASE 2 COMPLETE: APPEND MERGED INTERVAL",
              minTime: 0,
              maxTime: 18,
              condition: { text: "12 > 10 ➔ Overlap finished. res.push([3, 10])", type: "success" },
              output: [[1, 2], [3, 10]]
            },
            vars: [["res", "[[1, 2], [3, 10]]"], ["i", 4]]
          },
          {
            codeLine: 12,
            narration: "Phase 3: Append all remaining intervals after newInterval: [12, 16]. Return final non-overlapping list.",
            intervals: [
              { start: 1, end: 2, label: '[1, 2]', status: 'safe' },
              { start: 3, end: 10, label: '[3, 10]', status: 'safe' },
              { start: 12, end: 16, label: '[12, 16]', status: 'safe' }
            ],
            customVisual: {
              title: "PHASE 3: APPEND REMAINING INTERVALS",
              minTime: 0,
              maxTime: 18,
              condition: { text: "Final non-overlapping list constructed", type: "success" },
              output: [[1, 2], [3, 10], [12, 16]]
            },
            best: { label: "Result: [[1, 2], [3, 10], [12, 16]]" },
            vars: [["res", "[[1, 2], [3, 10], [12, 16]]"]]
          }
        ]
      }
    ]
  },

  // 4. Non-overlapping Intervals (LeetCode #435 - Medium)
  {
    id: 'non-overlapping-intervals',
    patternId: 'intervals',
    title: 'Non-overlapping Intervals',
    subtitle: 'Sort by end · greedily keep early finishers',
    kind: 'problem',
    leetcode: {
      id: 435,
      slug: 'non-overlapping-intervals',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft', 'Bloomberg'],
    statement: "Given an array of intervals `intervals` where `intervals[i] = [start_i, end_i]`, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",
    visualType: 'intervals',
    initialInput: [
      { start: 1, end: 2 },
      { start: 2, end: 3 },
      { start: 3, end: 4 },
      { start: 1, end: 3 }
    ],
    approaches: [
      {
        label: 'Greedy by end time',
        complexity: {
          time: 'O(n log n)',
          space: 'O(1)'
        },
        pseudocode: [
          "intervals.sort(key = x -> x.end)   # earliest finish first",
          "prev_end = -inf, removals = 0",
          "for curr in intervals:",
          "  if curr.start >= prev_end:       # compatible!",
          "    prev_end = curr.end            # keep curr",
          "  else:                            # conflict!",
          "    removals++                     # greedily drop curr (it ends later)",
          "return removals"
        ],
        starterCode: {
          javascript: `function eraseOverlapIntervals(intervals) {\n  if (!intervals.length) return 0;\n  // Sort by end time ascending\n  intervals.sort((a, b) => a[1] - b[1]);\n  \n  let removals = 0;\n  let prevEnd = intervals[0][1];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] >= prevEnd) {\n      prevEnd = intervals[i][1];\n    } else {\n      removals++;\n    }\n  }\n  return removals;\n}`,
          python: `def eraseOverlapIntervals(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    prev_end = intervals[0][1]\n    for i in range(1, len(intervals)):\n        if intervals[i][0] >= prev_end:\n            prev_end = intervals[i][1]\n        else:\n            removals += 1\n    return removals`
        },
        solutionCode: {
          javascript: `function eraseOverlapIntervals(intervals) {\n  if (!intervals.length) return 0;\n  intervals.sort((a, b) => a[1] - b[1]);\n  let removals = 0;\n  let prevEnd = intervals[0][1];\n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] >= prevEnd) {\n      prevEnd = intervals[i][1];\n    } else {\n      removals++;\n    }\n  }\n  return removals;\n}`,
          python: `def eraseOverlapIntervals(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    intervals.sort(key=lambda x: x[1])\n    removals = 0\n    prev_end = intervals[0][1]\n    for i in range(1, len(intervals)):\n        if intervals[i][0] >= prev_end:\n            prev_end = intervals[i][1]\n        else:\n            removals += 1\n    return removals`
        },
        testCases: [
          {
            input: [[[1, 2], [2, 3], [3, 4], [1, 3]]],
            expected: 1,
            description: "Remove [1, 3] to leave [[1,2],[2,3],[3,4]]"
          },
          {
            input: [[[1, 2], [1, 2], [1, 2]]],
            expected: 2,
            description: "Duplicates require 2 removals"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Given intervals: [[1, 2], [2, 3], [3, 4], [1, 3]]. Sort by END time ascending to prioritize early finishers.",
            intervals: [
              { start: 1, end: 2, label: 'end=2: [1, 2]', status: 'default' },
              { start: 2, end: 3, label: 'end=3: [2, 3]', status: 'default' },
              { start: 1, end: 3, label: 'end=3: [1, 3]', status: 'default' },
              { start: 3, end: 4, label: 'end=4: [3, 4]', status: 'default' }
            ],
            customVisual: {
              title: "SORTED BY END TIME ASCENDING",
              minTime: 0,
              maxTime: 6,
              condition: { text: "Earliest end time leaves max remaining space for future intervals", type: "neutral" }
            },
            vars: [["removals", 0], ["prevEnd", "null"]]
          },
          {
            codeLine: 2,
            narration: "Pick the first early finisher [1, 2]. Set prevEnd = 2. It is guaranteed optimal to keep this interval.",
            intervals: [
              { start: 1, end: 2, label: 'KEPT: [1, 2]', status: 'safe' },
              { start: 2, end: 3, label: '[2, 3]', status: 'default' },
              { start: 1, end: 3, label: '[1, 3]', status: 'default' },
              { start: 3, end: 4, label: '[3, 4]', status: 'default' }
            ],
            customVisual: {
              title: "KEEP EARLIEST FINISHER [1, 2]",
              minTime: 0,
              maxTime: 6,
              condition: { text: "prevEnd = 2 (first kept interval)", type: "success" },
              output: [[1, 2]]
            },
            vars: [["kept", "[[1, 2]]"], ["prevEnd", 2], ["removals", 0]]
          },
          {
            codeLine: 4,
            narration: "Check next interval [2, 3]. Start (2) ≥ prevEnd (2). Touching at boundary is allowed! Keep [2, 3], update prevEnd = 3.",
            intervals: [
              { start: 1, end: 2, label: 'KEPT: [1, 2]', status: 'safe' },
              { start: 2, end: 3, label: 'KEPT: [2, 3]', status: 'safe' },
              { start: 1, end: 3, label: '[1, 3]', status: 'default' },
              { start: 3, end: 4, label: '[3, 4]', status: 'default' }
            ],
            customVisual: {
              title: "COMPATIBLE: KEEP [2, 3]",
              minTime: 0,
              maxTime: 6,
              condition: { text: "2 ≥ 2 ➔ Compatible! Update prevEnd = 3", type: "success" },
              output: [[1, 2], [2, 3]]
            },
            vars: [["kept", "[[1, 2], [2, 3]]"], ["prevEnd", 3], ["removals", 0]]
          },
          {
            codeLine: 6,
            narration: "Check next interval [1, 3]. Start (1) < prevEnd (3) ➔ CONFLICT! Greedily discard [1, 3] (increment removals = 1).",
            intervals: [
              { start: 1, end: 2, label: 'KEPT: [1, 2]', status: 'safe' },
              { start: 2, end: 3, label: 'KEPT: [2, 3]', status: 'safe' },
              { start: 1, end: 3, label: 'DROPPED: [1, 3]', status: 'conflict' },
              { start: 3, end: 4, label: '[3, 4]', status: 'default' }
            ],
            customVisual: {
              title: "CONFLICT: DISCARD [1, 3]",
              minTime: 0,
              maxTime: 6,
              condition: { text: "1 < 3 ➔ Overlaps with kept interval! Removals++", type: "conflict" },
              output: [[1, 2], [2, 3]]
            },
            vars: [["dropped", "[1, 3]"], ["removals", 1], ["prevEnd", 3]]
          },
          {
            codeLine: 4,
            narration: "Check final interval [3, 4]. Start (3) ≥ prevEnd (3). Compatible! Keep [3, 4], update prevEnd = 4.",
            intervals: [
              { start: 1, end: 2, label: 'KEPT: [1, 2]', status: 'safe' },
              { start: 2, end: 3, label: 'KEPT: [2, 3]', status: 'safe' },
              { start: 1, end: 3, label: 'DROPPED: [1, 3]', status: 'conflict' },
              { start: 3, end: 4, label: 'KEPT: [3, 4]', status: 'safe' }
            ],
            customVisual: {
              title: "COMPATIBLE: KEEP [3, 4]",
              minTime: 0,
              maxTime: 6,
              condition: { text: "3 ≥ 3 ➔ Compatible! All intervals checked", type: "success" },
              output: [[1, 2], [2, 3], [3, 4]]
            },
            best: { label: "Minimum Removals: 1 (Discard [1, 3])" },
            vars: [["removals", 1], ["max_non_overlapping", 3]]
          }
        ]
      }
    ]
  },

  // 5. Meeting Rooms (LeetCode #252 - Easy)
  {
    id: 'meeting-rooms',
    patternId: 'intervals',
    title: 'Meeting Rooms',
    subtitle: 'Sort by start · check neighbours overlap',
    kind: 'problem',
    leetcode: {
      id: 252,
      slug: 'meeting-rooms',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Facebook', 'Google', 'Microsoft', 'Bloomberg', 'Uber'],
    statement: "Given an array of meeting time intervals `intervals` where `intervals[i] = [start_i, end_i]`, determine if a person could attend all meetings (i.e., no two meetings overlap).",
    visualType: 'intervals',
    initialInput: [
      { start: 0, end: 30 },
      { start: 5, end: 10 },
      { start: 15, end: 20 }
    ],
    approaches: [
      {
        label: 'Sort by start & adjacent check',
        complexity: {
          time: 'O(n log n)',
          space: 'O(1)'
        },
        pseudocode: [
          "intervals.sort(key = x -> x.start)",
          "for i in 1..intervals.length-1:",
          "  if intervals[i].start < intervals[i-1].end:",
          "    return false   # conflict found!",
          "return true        # all meetings can be attended"
        ],
        starterCode: {
          javascript: `function canAttendMeetings(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] < intervals[i - 1][1]) {\n      return false;\n    }\n  }\n  return true;\n}`,
          python: `def canAttendMeetings(intervals: list[list[int]]) -> bool:\n    intervals.sort(key=lambda x: x[0])\n    for i in range(1, len(intervals)):\n        if intervals[i][0] < intervals[i - 1][1]:\n            return False\n    return True`
        },
        solutionCode: {
          javascript: `function canAttendMeetings(intervals) {\n  intervals.sort((a, b) => a[0] - b[0]);\n  for (let i = 1; i < intervals.length; i++) {\n    if (intervals[i][0] < intervals[i - 1][1]) {\n      return false;\n    }\n  }\n  return true;\n}`,
          python: `def canAttendMeetings(intervals: list[list[int]]) -> bool:\n    intervals.sort(key=lambda x: x[0])\n    for i in range(1, len(intervals)):\n        if intervals[i][0] < intervals[i - 1][1]:\n            return False\n    return True`
        },
        testCases: [
          {
            input: [[[0, 30], [5, 10], [15, 20]]],
            expected: false,
            description: "Overlap between [0, 30] and [5, 10]"
          },
          {
            input: [[[7, 10], [2, 4]]],
            expected: true,
            description: "No overlaps between [2, 4] and [7, 10]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Given meeting intervals: [[0, 30], [5, 10], [15, 20]]. Sort by start time.",
            intervals: [
              { start: 0, end: 30, label: 'Meeting 1: [0, 30]', status: 'default' },
              { start: 5, end: 10, label: 'Meeting 2: [5, 10]', status: 'default' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', status: 'default' }
            ],
            customVisual: {
              title: "CHECK CONFLICTS IN SCHEDULE",
              minTime: 0,
              maxTime: 32,
              condition: { text: "Sort meetings by start time: [[0, 30], [5, 10], [15, 20]]", type: "neutral" }
            },
            vars: [["intervals", "[[0,30],[5,10],[15,20]]"]]
          },
          {
            codeLine: 2,
            narration: "Check adjacent meetings: Compare Meeting 1 [0, 30] and Meeting 2 [5, 10].",
            intervals: [
              { start: 0, end: 30, label: 'Meeting 1: [0, 30]', status: 'comparing' },
              { start: 5, end: 10, label: 'Meeting 2: [5, 10]', status: 'active' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', status: 'default' }
            ],
            customVisual: {
              title: "CHECK OVERLAP: [0, 30] vs [5, 10]",
              minTime: 0,
              maxTime: 32,
              condition: { text: "Meeting 2 start (5) < Meeting 1 end (30) ➔ CLASH!", type: "overlap" }
            },
            vars: [["Meeting 1", "[0, 30]"], ["Meeting 2", "[5, 10]"], ["overlap", "True"]]
          },
          {
            codeLine: 4,
            narration: "Direct conflict found! A person cannot be in [0, 30] and [5, 10] simultaneously. Return false.",
            intervals: [
              { start: 0, end: 30, label: 'CLASH: [0, 30]', status: 'conflict' },
              { start: 5, end: 10, label: 'CLASH: [5, 10]', status: 'conflict' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', status: 'default' }
            ],
            customVisual: {
              title: "CANNOT ATTEND ALL MEETINGS",
              minTime: 0,
              maxTime: 32,
              condition: { text: "Conflict found between [0, 30] and [5, 10] ➔ return False", type: "conflict" }
            },
            best: { label: "Result: false (Cannot attend all meetings)" },
            vars: [["return", false]]
          }
        ]
      }
    ]
  },

  // 6. Meeting Rooms II (LeetCode #253 - Medium)
  {
    id: 'meeting-rooms-ii',
    patternId: 'intervals',
    title: 'Meeting Rooms II',
    subtitle: 'Chronological sweep · peak overlap = rooms',
    kind: 'problem',
    leetcode: {
      id: 253,
      slug: 'meeting-rooms-ii',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Facebook', 'Google', 'Bloomberg', 'Microsoft', 'Uber', 'Apple', 'Oracle'],
    statement: "Given an array of meeting time intervals `intervals` where `intervals[i] = [start_i, end_i]`, find the minimum number of conference rooms required.",
    visualType: 'intervals',
    initialInput: [
      { start: 0, end: 30 },
      { start: 5, end: 10 },
      { start: 15, end: 20 }
    ],
    approaches: [
      {
        label: 'Chronological Sweep Line (Two pointers)',
        complexity: {
          time: 'O(n log n)',
          space: 'O(n)'
        },
        pseudocode: [
          "starts = sort([i.start for i in intervals])",
          "ends   = sort([i.end   for i in intervals])",
          "s = 0, e = 0, rooms = 0, maxRooms = 0",
          "while s < n:",
          "  if starts[s] < ends[e]:    # meeting started before earliest finishes",
          "    rooms++; s++",
          "    maxRooms = max(maxRooms, rooms)",
          "  else:                      # meeting finished, room liberated",
          "    rooms--; e++",
          "return maxRooms"
        ],
        starterCode: {
          javascript: `function minMeetingRooms(intervals) {\n  if (!intervals.length) return 0;\n  const starts = intervals.map(x => x[0]).sort((a, b) => a - b);\n  const ends = intervals.map(x => x[1]).sort((a, b) => a - b);\n  \n  let s = 0, e = 0;\n  let rooms = 0, maxRooms = 0;\n  \n  while (s < starts.length) {\n    if (starts[s] < ends[e]) {\n      rooms++;\n      maxRooms = Math.max(maxRooms, rooms);\n      s++;\n    } else {\n      rooms--;\n      e++;\n    }\n  }\n  return maxRooms;\n}`,
          python: `def minMeetingRooms(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    starts = sorted([i[0] for i in intervals])\n    ends = sorted([i[1] for i in intervals])\n    s, e = 0, 0\n    rooms, max_rooms = 0, 0\n    while s < len(starts):\n        if starts[s] < ends[e]:\n            rooms += 1\n            max_rooms = max(max_rooms, rooms)\n            s += 1\n        else:\n            rooms -= 1\n            e += 1\n    return max_rooms`
        },
        solutionCode: {
          javascript: `function minMeetingRooms(intervals) {\n  if (!intervals.length) return 0;\n  const starts = intervals.map(x => x[0]).sort((a, b) => a - b);\n  const ends = intervals.map(x => x[1]).sort((a, b) => a - b);\n  \n  let s = 0, e = 0;\n  let rooms = 0, maxRooms = 0;\n  \n  while (s < starts.length) {\n    if (starts[s] < ends[e]) {\n      rooms++;\n      maxRooms = Math.max(maxRooms, rooms);\n      s++;\n    } else {\n      rooms--;\n      e++;\n    }\n  }\n  return maxRooms;\n}`,
          python: `def minMeetingRooms(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    starts = sorted([i[0] for i in intervals])\n    ends = sorted([i[1] for i in intervals])\n    s, e = 0, 0\n    rooms, max_rooms = 0, 0\n    while s < len(starts):\n        if starts[s] < ends[e]:\n            rooms += 1\n            max_rooms = max(max_rooms, rooms)\n            s += 1\n        else:\n            rooms -= 1\n            e += 1\n    return max_rooms`
        },
        testCases: [
          {
            input: [[[0, 30], [5, 10], [15, 20]]],
            expected: 2,
            description: "2 rooms required"
          },
          {
            input: [[[7, 10], [2, 4]]],
            expected: 1,
            description: "Non-overlapping meetings require 1 room"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Extract and sort all start events [0, 5, 15] and end events [10, 20, 30] in chronological order.",
            intervals: [
              { start: 0, end: 30, label: 'Meeting 1: [0, 30]', lane: 0, status: 'default' },
              { start: 5, end: 10, label: 'Meeting 2: [5, 10]', lane: 1, status: 'default' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "CHRONOLOGICAL SWEEP INITIALIZATION",
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]' },
                { time: 5, type: 'start', label: '+1 Start [5,10]' },
                { time: 10, type: 'end', label: '-1 End [5,10]' },
                { time: 15, type: 'start', label: '+1 Start [15,20]' },
                { time: 20, type: 'end', label: '-1 End [15,20]' },
                { time: 30, type: 'end', label: '-1 End [0,30]' }
              ],
              condition: { text: "Sweep across time tracking active rooms count", type: "neutral" }
            },
            vars: [["starts", "[0, 5, 15]"], ["ends", "[10, 20, 30]"], ["rooms", 0], ["maxRooms", 0]]
          },
          {
            codeLine: 5,
            narration: "Sweep to t = 0: Start event starts[0] = 0 < ends[0] = 10. Meeting [0, 30] begins! Allocate Room 1 (active rooms = 1).",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 5, end: 10, label: 'Meeting 2: [5, 10]', lane: 1, status: 'default' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "EVENT @ T = 0: START [0, 30]",
              sweepTime: 0,
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]', active: true },
                { time: 5, type: 'start', label: '+1 Start [5,10]' },
                { time: 10, type: 'end', label: '-1 End [5,10]' },
                { time: 15, type: 'start', label: '+1 Start [15,20]' },
                { time: 20, type: 'end', label: '-1 End [15,20]' },
                { time: 30, type: 'end', label: '-1 End [0,30]' }
              ],
              condition: { text: "t = 0: Meeting [0, 30] starts ➔ Active rooms = 1", type: "success" }
            },
            vars: [["t", 0], ["rooms", 1], ["maxRooms", 1], ["s", 1], ["e", 0]]
          },
          {
            codeLine: 5,
            narration: "Sweep to t = 5: Start event starts[1] = 5 < ends[0] = 10. Meeting [5, 10] begins while Room 1 is occupied! Allocate Room 2 (active rooms = 2).",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 5, end: 10, label: 'Room 2: [5, 10]', lane: 1, status: 'active' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "EVENT @ T = 5: START [5, 10] (PEAK OVERLAP)",
              sweepTime: 5,
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]', done: true },
                { time: 5, type: 'start', label: '+1 Start [5,10]', active: true },
                { time: 10, type: 'end', label: '-1 End [5,10]' },
                { time: 15, type: 'start', label: '+1 Start [15,20]' },
                { time: 20, type: 'end', label: '-1 End [15,20]' },
                { time: 30, type: 'end', label: '-1 End [0,30]' }
              ],
              condition: { text: "t = 5: Concurrency peak reached! Active rooms = 2, maxRooms = 2", type: "overlap" }
            },
            vars: [["t", 5], ["rooms", 2], ["maxRooms", 2], ["s", 2], ["e", 0]]
          },
          {
            codeLine: 8,
            narration: "Sweep to t = 10: End event ends[0] = 10 ≤ starts[2] = 15. Meeting [5, 10] finishes! Room 2 is freed (active rooms = 1).",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 5, end: 10, label: 'Room 2: [5, 10] (Finished)', lane: 1, status: 'safe' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "EVENT @ T = 10: END [5, 10]",
              sweepTime: 10,
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]', done: true },
                { time: 5, type: 'start', label: '+1 Start [5,10]', done: true },
                { time: 10, type: 'end', label: '-1 End [5,10]', active: true },
                { time: 15, type: 'start', label: '+1 Start [15,20]' },
                { time: 20, type: 'end', label: '-1 End [15,20]' },
                { time: 30, type: 'end', label: '-1 End [0,30]' }
              ],
              condition: { text: "t = 10: Meeting [5, 10] ended ➔ Room 2 released! Active rooms = 1", type: "success" }
            },
            vars: [["t", 10], ["rooms", 1], ["maxRooms", 2], ["s", 2], ["e", 1]]
          },
          {
            codeLine: 5,
            narration: "Sweep to t = 15: Start event starts[2] = 15 < ends[1] = 20. Meeting [15, 20] starts! It REUSES previously freed Room 2 (active rooms = 2).",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 15, end: 20, label: 'Room 2: [15, 20] (Reused)', lane: 1, status: 'reused' }
            ],
            customVisual: {
              title: "EVENT @ T = 15: START [15, 20] (REUSE ROOM 2)",
              sweepTime: 15,
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]', done: true },
                { time: 5, type: 'start', label: '+1 Start [5,10]', done: true },
                { time: 10, type: 'end', label: '-1 End [5,10]', done: true },
                { time: 15, type: 'start', label: '+1 Start [15,20]', active: true },
                { time: 20, type: 'end', label: '-1 End [15,20]' },
                { time: 30, type: 'end', label: '-1 End [0,30]' }
              ],
              condition: { text: "t = 15: Room 2 reused without needing extra rooms!", type: "merge" }
            },
            vars: [["t", 15], ["rooms", 2], ["maxRooms", 2], ["s", 3], ["e", 1]]
          },
          {
            codeLine: 8,
            narration: "All starts processed. Remaining meetings finish at t = 20 and t = 30. The peak concurrent room demand is 2.",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'safe' },
              { start: 5, end: 10, label: 'Room 2: [5, 10]', lane: 1, status: 'safe' },
              { start: 15, end: 20, label: 'Room 2: [15, 20]', lane: 1, status: 'safe' }
            ],
            customVisual: {
              title: "SWEEP COMPLETE: PEAK ROOMS = 2",
              sweepTime: 30,
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              sweepEvents: [
                { time: 0, type: 'start', label: '+1 Start [0,30]', done: true },
                { time: 5, type: 'start', label: '+1 Start [5,10]', done: true },
                { time: 10, type: 'end', label: '-1 End [5,10]', done: true },
                { time: 15, type: 'start', label: '+1 Start [15,20]', done: true },
                { time: 20, type: 'end', label: '-1 End [15,20]', done: true },
                { time: 30, type: 'end', label: '-1 End [0,30]', done: true }
              ],
              condition: { text: "Minimum conference rooms required = 2", type: "success" }
            },
            best: { label: "Minimum Conference Rooms Required: 2" },
            vars: [["return maxRooms", 2]]
          }
        ]
      },
      {
        label: 'Min-Heap Priority Queue',
        complexity: {
          time: 'O(n log n)',
          space: 'O(n)'
        },
        pseudocode: [
          "intervals.sort(key = x -> x.start)",
          "heap = MinHeap()   # stores end times of occupied rooms",
          "heap.push(intervals[0].end)",
          "for curr in intervals[1..]:",
          "  if heap.top() <= curr.start:   # room is freed before curr starts",
          "    heap.pop()                   # reuse room",
          "  heap.push(curr.end)",
          "return heap.size()"
        ],
        starterCode: {
          javascript: `function minMeetingRooms(intervals) {\n  if (!intervals.length) return 0;\n  intervals.sort((a, b) => a[0] - b[0]);\n  const heap = [intervals[0][1]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    heap.sort((a, b) => a - b);\n    if (heap[0] <= intervals[i][0]) {\n      heap.shift(); // room freed\n    }\n    heap.push(intervals[i][1]);\n  }\n  return heap.length;\n}`,
          python: `import heapq\n\ndef minMeetingRooms(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    intervals.sort(key=lambda x: x[0])\n    heap = [intervals[0][1]]  # stores end times\n    for curr in intervals[1:]:\n        if heap[0] <= curr[0]:\n            heapq.heappop(heap)  # room liberated\n        heapq.heappush(heap, curr[1])\n    return len(heap)`
        },
        solutionCode: {
          javascript: `function minMeetingRooms(intervals) {\n  if (!intervals.length) return 0;\n  intervals.sort((a, b) => a[0] - b[0]);\n  const heap = [intervals[0][1]];\n  \n  for (let i = 1; i < intervals.length; i++) {\n    heap.sort((a, b) => a - b);\n    if (heap[0] <= intervals[i][0]) {\n      heap.shift();\n    }\n    heap.push(intervals[i][1]);\n  }\n  return heap.length;\n}`,
          python: `import heapq\n\ndef minMeetingRooms(intervals: list[list[int]]) -> int:\n    if not intervals:\n        return 0\n    intervals.sort(key=lambda x: x[0])\n    heap = [intervals[0][1]]\n    for curr in intervals[1:]:\n        if heap[0] <= curr[0]:\n            heapq.heappop(heap)\n        heapq.heappush(heap, curr[1])\n    return len(heap)`
        },
        testCases: [
          {
            input: [[[0, 30], [5, 10], [15, 20]]],
            expected: 2,
            description: "Min-heap tracks 2 rooms"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Sort meetings by start time: [[0, 30], [5, 10], [15, 20]]. Initialize Min-Heap with end time of first meeting (30).",
            intervals: [
              { start: 0, end: 30, label: 'Meeting 1: [0, 30]', lane: 0, status: 'active' },
              { start: 5, end: 10, label: 'Meeting 2: [5, 10]', lane: 1, status: 'default' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "MIN-HEAP INITIALIZATION",
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1 (until 30)' },
              heap: [30],
              condition: { text: "Heap = [30] ➔ Room 1 occupied until t = 30", type: "neutral" }
            },
            vars: [["heap", "[30]"], ["heap_size", 1]]
          },
          {
            codeLine: 4,
            narration: "Next meeting [5, 10]. Check heap top (30): 30 > 5 (earliest room not free yet!). Must allocate NEW room: push 10 to heap.",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 5, end: 10, label: 'Room 2: [5, 10]', lane: 1, status: 'active' },
              { start: 15, end: 20, label: 'Meeting 3: [15, 20]', lane: 1, status: 'default' }
            ],
            customVisual: {
              title: "PUSH NEW ROOM TO HEAP",
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1 (until 30)', 1: 'Room 2 (until 10)' },
              heap: [10, 30],
              condition: { text: "heap.top() 30 > 5 ➔ Allocate Room 2! Heap = [10, 30]", type: "overlap" }
            },
            vars: [["heap", "[10, 30]"], ["heap_size", 2]]
          },
          {
            codeLine: 5,
            narration: "Next meeting [15, 20]. Check heap top (10): 10 ≤ 15 ➔ Room 2 is FREE! Pop 10 (reuse Room 2) and push new end time 20.",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'active' },
              { start: 15, end: 20, label: 'Room 2: [15, 20] (Reused)', lane: 1, status: 'reused' }
            ],
            customVisual: {
              title: "REUSE ROOM VIA HEAP POP",
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1 (until 30)', 1: 'Room 2 (until 20)' },
              heap: [20, 30],
              condition: { text: "heap.top() 10 ≤ 15 ➔ Room 2 reused! Heap becomes [20, 30]", type: "merge" }
            },
            vars: [["heap", "[20, 30]"], ["heap_size", 2]]
          },
          {
            codeLine: 8,
            narration: "All meetings scheduled. Total rooms needed = heap.size() = 2.",
            intervals: [
              { start: 0, end: 30, label: 'Room 1: [0, 30]', lane: 0, status: 'safe' },
              { start: 15, end: 20, label: 'Room 2: [15, 20]', lane: 1, status: 'safe' }
            ],
            customVisual: {
              title: "MIN-HEAP SIMULATION COMPLETE",
              minTime: 0,
              maxTime: 32,
              laneLabels: { 0: 'Room 1', 1: 'Room 2' },
              heap: [20, 30],
              condition: { text: "Heap size = 2 ➔ Minimum 2 rooms needed", type: "success" }
            },
            best: { label: "Result: 2 Conference Rooms" },
            vars: [["return heap.size()", 2]]
          }
        ]
      }
    ]
  }
];
