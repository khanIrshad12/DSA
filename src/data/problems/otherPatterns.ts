import { Problem } from '../../types';

export const heapProblems: Problem[] = [
  {
    id: 'intro',
    patternId: 'heap',
    title: 'Overview',
    subtitle: 'Complete tree + heap property · sift-up / sift-down',
    kind: 'intro',
    statement: 'A Binary Heap is a complete binary tree that maintains the Heap Property (parent is always <= children for min-heap or >= for max-heap). Provides O(1) peek and O(log n) push/pop.',
    visualType: 'heap',
    initialInput: [3, 5, 8, 10, 12, 15],
    approaches: [
      {
        label: 'Min-Heap Anatomy',
        complexity: { time: 'O(log n)', space: 'O(1)' },
        pseudocode: [
          'min_element = heap[0]  // O(1) peek',
          'pop_min() -> swap with last, sift_down()',
          'push(val) -> append to end, sift_up()'
        ],
        starterCode: {
          javascript: `function minHeapPeek(heap) {\n  return heap && heap.length > 0 ? heap[0] : null;\n}`,
          python: `def minHeapPeek(heap: list[int]) -> int:\n    return heap[0] if heap else None`
        },
        solutionCode: {
          javascript: `function minHeapPeek(heap) {\n  return heap && heap.length > 0 ? heap[0] : null;\n}`,
          python: `def minHeapPeek(heap: list[int]) -> int:\n    return heap[0] if heap else None`
        },
        testCases: [
          { input: [[3, 5, 8, 10, 12, 15]], expected: 3, description: 'Peek minimum element' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Root element heap[0] = 3 is always the absolute minimum across all elements.',
            highlights: [0],
            heap: [3, 5, 8, 10, 12, 15],
            vars: [['min', 3]]
          }
        ]
      }
    ]
  },
  {
    id: 'kth-largest-element',
    patternId: 'heap',
    title: 'Kth Largest Element in an Array',
    subtitle: 'Min-heap of size k as a top-k gate',
    kind: 'problem',
    leetcode: { id: 215, slug: 'kth-largest-element-in-an-array', difficulty: 'Medium' },
    companies: ['Facebook', 'Amazon', 'Microsoft', 'Google'],
    statement: 'Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.',
    visualType: 'heap',
    initialInput: [3, 2, 1, 5, 6, 4],
    approaches: [
      {
        label: 'Min-Heap of Size K',
        complexity: { time: 'O(n log k)', space: 'O(k)' },
        pseudocode: [
          'min_heap = []',
          'for num in nums:',
          '    push num into min_heap',
          '    if len(min_heap) > k: pop min',
          'return min_heap[0]'
        ],
        starterCode: {
          javascript: `function findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}`,
          python: `def findKthLargest(nums: list[int], k: int) -> int:\n    nums.sort(reverse=True)\n    return nums[k - 1]`
        },
        solutionCode: {
          javascript: `function findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}`,
          python: `def findKthLargest(nums: list[int], k: int) -> int:\n    nums.sort(reverse=True)\n    return nums[k - 1]`
        },
        testCases: [
          { input: [[3, 2, 1, 5, 6, 4], 2], expected: 5, description: '2nd largest in [3,2,1,5,6,4] is 5' },
          { input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4], expected: 4, description: '4th largest is 4' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Maintain a min-heap of size k = 2. It holds the k largest elements seen so far.',
            vars: [['k', 2], ['heap', '[]']]
          },
          {
            codeLine: 3,
            narration: 'Push elements: 3, 2, 1, 5, 6, 4. Pop smallest whenever size > 2.',
            heap: [5, 6],
            highlights: [0],
            best: { label: '2nd Largest = 5' },
            vars: [['heap', '[5, 6]'], ['kth_largest', 5]]
          }
        ]
      }
    ]
  }
];

export const greedyProblems: Problem[] = [
  {
    id: 'best-time-buy-sell-stock',
    patternId: 'greedy',
    title: 'Best Time to Buy and Sell Stock',
    subtitle: 'Track the cheapest day seen so far',
    kind: 'problem',
    leetcode: { id: 121, slug: 'best-time-to-buy-and-sell-stock', difficulty: 'Easy' },
    companies: ['Amazon', 'Microsoft', 'Facebook', 'Google'],
    statement: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
    visualType: 'array',
    initialInput: [7, 1, 5, 3, 6, 4],
    approaches: [
      {
        label: 'One-Pass Greedy',
        complexity: { time: 'O(n)', space: 'O(1)' },
        pseudocode: [
          'min_price ← ∞, max_profit ← 0',
          'for price in prices:',
          '    min_price = min(min_price, price)',
          '    profit = price − min_price',
          '    max_profit = max(max_profit, profit)',
          'return max_profit'
        ],
        starterCode: {
          javascript: `function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n      maxProfit = price - minPrice;\n    }\n  }\n  return maxProfit;\n}`,
          python: `def maxProfit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit`
        },
        solutionCode: {
          javascript: `function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n      maxProfit = price - minPrice;\n    }\n  }\n  return maxProfit;\n}`,
          python: `def maxProfit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit`
        },
        testCases: [
          { input: [[7, 1, 5, 3, 6, 4]], expected: 5, description: 'Buy at 1, sell at 6 = 5' },
          { input: [[7, 6, 4, 3, 1]], expected: 0, description: 'Monotonically decreasing prices' },
          { input: [[2, 4, 1]], expected: 2, description: 'Buy at 2, sell at 4' }
        ],
        steps: [
          {
            codeLine: 3,
            narration: 'Day 1: price = 1 is new lowest price (min_price = 1).',
            pointers: [{ name: 'min_buy', index: 1, color: 'accent' }],
            highlights: [1],
            vars: [['min_price', 1], ['max_profit', 0]]
          },
          {
            codeLine: 4,
            narration: 'Day 4: price = 6. Sell at 6 with buy at 1 yields profit = 6 - 1 = 5! Maximum profit recorded.',
            pointers: [{ name: 'min_buy', index: 1, color: 'accent' }, { name: 'sell', index: 4, color: 'green' }],
            highlights: [1, 4],
            best: { label: 'Max Profit = $5', indices: [1, 4] },
            vars: [['buy_price', 1], ['sell_price', 6], ['profit', 5]]
          }
        ]
      }
    ]
  }
];

export const matrixProblems: Problem[] = [
  {
    id: 'spiral-matrix',
    patternId: 'matrices',
    title: 'Spiral Matrix',
    subtitle: 'Four shrinking boundaries',
    kind: 'problem',
    leetcode: { id: 54, slug: 'spiral-matrix', difficulty: 'Medium' },
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    statement: 'Given an m x n matrix, return all of its elements in spiral order, traversing the outer ring clockwise and spiraling inward.',
    visualType: 'matrix',
    initialInput: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ],
    approaches: [
      {
        label: 'Boundary simulation',
        complexity: { time: 'O(R · C)', space: 'O(1)' },
        pseudocode: [
          'top=0, bottom=R-1, left=0, right=C-1',
          'while top <= bottom and left <= right:',
          '    for c in left..right: take (top, c)',
          '    top++',
          '    for r in top..bottom: take (r, right)',
          '    right--',
          '    if top <= bottom: for c in right..left: take (bottom, c); bottom--',
          '    if left <= right: for r in bottom..top: take (r, left); left++',
          'return collected'
        ],
        starterCode: {
          javascript: `function spiralOrder(matrix) {\n  if (!matrix || !matrix.length) return [];\n  const res = [];\n  let top = 0, bottom = matrix.length - 1;\n  let left = 0, right = matrix[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let c = left; c <= right; c++) res.push(matrix[top][c]);\n    top++;\n    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);\n    right--;\n    if (top <= bottom) {\n      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);\n      bottom--;\n    }\n    if (left <= right) {\n      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);\n      left++;\n    }\n  }\n  return res;\n}`,
          python: `def spiralOrder(matrix: list[list[int]]) -> list[int]:\n    if not matrix:\n        return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    while top <= bottom and left <= right:\n        for c in range(left, right + 1):\n            res.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom + 1):\n            res.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left - 1, -1):\n                res.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top - 1, -1):\n                res.append(matrix[r][left])\n            left += 1\n    return res`
        },
        solutionCode: {
          javascript: `function spiralOrder(matrix) {\n  if (!matrix || !matrix.length) return [];\n  const res = [];\n  let top = 0, bottom = matrix.length - 1;\n  let left = 0, right = matrix[0].length - 1;\n  while (top <= bottom && left <= right) {\n    for (let c = left; c <= right; c++) res.push(matrix[top][c]);\n    top++;\n    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);\n    right--;\n    if (top <= bottom) {\n      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);\n      bottom--;\n    }\n    if (left <= right) {\n      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);\n      left++;\n    }\n  }\n  return res;\n}`,
          python: `def spiralOrder(matrix: list[list[int]]) -> list[int]:\n    if not matrix:\n        return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n    while top <= bottom and left <= right:\n        for c in range(left, right + 1):\n            res.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom + 1):\n            res.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left - 1, -1):\n                res.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top - 1, -1):\n                res.append(matrix[r][left])\n            left += 1\n    return res`
        },
        testCases: [
          {
            input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
            expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
            description: '3x3 grid spiral'
          },
          {
            input: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]],
            expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
            description: '3x4 rectangle spiral'
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Initialize four boundaries: top=0, bottom=2, left=0, right=3.',
            gridHighlights: [{ r: 0, c: 0, status: 'active' }],
            vars: [['top', 0], ['bottom', 2], ['left', 0], ['right', 3]]
          },
          {
            codeLine: 3,
            narration: 'Traverse top row: [1, 2, 3, 4]. Increment top = 1.',
            gridHighlights: [{ r: 0, c: 0, status: 'visited' }, { r: 0, c: 1, status: 'visited' }, { r: 0, c: 2, status: 'visited' }, { r: 0, c: 3, status: 'visited' }],
            vars: [['collected', '[1, 2, 3, 4]'], ['top', 1]]
          },
          {
            codeLine: 5,
            narration: 'Traverse right col: [8, 12]. Decrement right = 2.',
            gridHighlights: [{ r: 1, c: 3, status: 'visited' }, { r: 2, c: 3, status: 'visited' }],
            vars: [['collected', '[1, 2, 3, 4, 8, 12]'], ['right', 2]]
          },
          {
            codeLine: 7,
            narration: 'Bottom row done — traverse left [11, 10, 9] and raise bottom to 1.',
            gridHighlights: [{ r: 2, c: 2, status: 'visited' }, { r: 2, c: 1, status: 'visited' }, { r: 2, c: 0, status: 'visited' }],
            best: { label: 'Spiral: [1,2,3,4,8,12,11,10,9,5,6,7]' },
            vars: [['bottom', 1], ['collected', '[1..9]']]
          }
        ]
      }
    ]
  }
];

export const intervalProblems: Problem[] = [
  {
    id: 'insert-interval',
    patternId: 'intervals',
    title: 'Insert Interval',
    subtitle: 'Sorted list · three-phase sweep · no sort',
    kind: 'problem',
    leetcode: { id: 57, slug: 'insert-interval', difficulty: 'Medium' },
    companies: ['Amazon', 'Google', 'LinkedIn'],
    statement: 'Given a sorted list of non-overlapping intervals and a new interval, insert it and merge any overlaps, returning the still-sorted, non-overlapping result.',
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
        complexity: { time: 'O(n)', space: 'O(n)' },
        pseudocode: [
          'out ← []; i ← 0',
          '// phase 1: intervals entirely before new',
          'while i < n and intervals[i].end < new.start: out.append(intervals[i++])',
          '// phase 2: merge every overlapping interval into new',
          'while i < n and intervals[i].start <= new.end:',
          '    new = [min(starts), max(ends)]; i++',
          'out.append(new)',
          '// phase 3: copy the rest',
          'while i < n: out.append(intervals[i++])',
          'return out'
        ],
        starterCode: {
          javascript: `function insert(intervals, newInterval) {\n  const res = [];\n  let i = 0;\n  const n = intervals.length;\n  \n  // Phase 1: add all intervals before newInterval\n  while (i < n && intervals[i][1] < newInterval[0]) {\n    res.push(intervals[i]);\n    i++;\n  }\n  \n  // Phase 2: merge overlapping intervals\n  while (i < n && intervals[i][0] <= newInterval[1]) {\n    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n    i++;\n  }\n  res.push(newInterval);\n  \n  // Phase 3: add rest of intervals\n  while (i < n) {\n    res.push(intervals[i]);\n    i++;\n  }\n  return res;\n}`,
          python: `def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    res = []\n    i, n = 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res`
        },
        solutionCode: {
          javascript: `function insert(intervals, newInterval) {\n  const res = [];\n  let i = 0;\n  const n = intervals.length;\n  \n  // Phase 1: add all intervals before newInterval\n  while (i < n && intervals[i][1] < newInterval[0]) {\n    res.push(intervals[i]);\n    i++;\n  }\n  \n  // Phase 2: merge overlapping intervals\n  while (i < n && intervals[i][0] <= newInterval[1]) {\n    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);\n    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);\n    i++;\n  }\n  res.push(newInterval);\n  \n  // Phase 3: add rest of intervals\n  while (i < n) {\n    res.push(intervals[i]);\n    i++;\n  }\n  return res;\n}`,
          python: `def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    res = []\n    i, n = 0, len(intervals)\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res`
        },
        testCases: [
          {
            input: [[[1, 3], [6, 9]], [2, 5]],
            expected: [[1, 5], [6, 9]],
            description: 'Insert [2, 5] into [[1,3],[6,9]]'
          },
          {
            input: [[[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]],
            expected: [[1, 2], [3, 10], [12, 16]],
            description: 'Insert [4, 8] spanning multiple intervals'
          }
        ],
        steps: [
          {
            codeLine: 3,
            narration: 'Phase 1: [1, 2] ends before new [4, 8] starts. Add [1, 2] directly to result.',
            intervals: [{ start: 1, end: 2, status: 'default' }],
            vars: [['out', '[[1, 2]]'], ['new', '[4, 8]']]
          },
          {
            codeLine: 5,
            narration: 'Phase 2 (overlap). [3, 5] and [6, 7] and [8, 10] overlap with [4, 8]. Merge into [min(3, 4), max(10, 8)] = [3, 10].',
            intervals: [{ start: 1, end: 2, status: 'default' }, { start: 3, end: 10, status: 'merged' }, { start: 12, end: 16, status: 'default' }],
            best: { label: 'Merged into [3, 10]' },
            vars: [['merged_new', '[3, 10]']]
          }
        ]
      }
    ]
  }
];

export const bitProblems: Problem[] = [
  {
    id: 'single-number',
    patternId: 'bit-manipulation',
    title: 'Single Number',
    subtitle: 'XOR index ⊕ value · pairs cancel',
    kind: 'problem',
    leetcode: { id: 136, slug: 'single-number', difficulty: 'Easy' },
    companies: ['Amazon', 'Apple', 'Google'],
    statement: 'Given a non-empty array of integers nums, every element appears twice except for one. Find that single one in O(n) linear time with O(1) extra space.',
    visualType: 'array',
    initialInput: [4, 1, 2, 1, 2],
    approaches: [
      {
        label: 'Bitwise XOR',
        complexity: { time: 'O(n)', space: 'O(1)' },
        pseudocode: [
          'res ← 0',
          'for num in nums:',
          '    res ^= num   // a ^ a = 0; a ^ 0 = a',
          'return res'
        ],
        starterCode: {
          javascript: `function singleNumber(nums) {\n  let res = 0;\n  for (let num of nums) {\n    res ^= num;\n  }\n  return res;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    res = 0\n    for num in nums:\n        res ^= num\n    return res`
        },
        solutionCode: {
          javascript: `function singleNumber(nums) {\n  let res = 0;\n  for (let num of nums) {\n    res ^= num;\n  }\n  return res;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    res = 0\n    for num in nums:\n        res ^= num\n    return res`
        },
        testCases: [
          { input: [[2, 2, 1]], expected: 1, description: 'Single 1' },
          { input: [[4, 1, 2, 1, 2]], expected: 4, description: 'Single 4' },
          { input: [[1]], expected: 1, description: 'Single element array' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'XOR property: x ^ x = 0, and x ^ 0 = x. All duplicate pairs cancel each other out.',
            vars: [['res', 0]]
          },
          {
            codeLine: 3,
            narration: 'Accumulate XOR: 0 ^ 4 ^ 1 ^ 2 ^ 1 ^ 2 = 4 ^ (1 ^ 1) ^ (2 ^ 2) = 4 ^ 0 ^ 0 = 4.',
            highlights: [0, 1, 2, 3, 4],
            best: { label: 'Single Number = 4', indices: [0] },
            vars: [['result', 4]]
          }
        ]
      }
    ]
  }
];
