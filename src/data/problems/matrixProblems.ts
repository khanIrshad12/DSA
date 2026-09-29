import { Problem } from '../../types';

export const matrixProblems: Problem[] = [
  // 1. Spiral Matrix (LeetCode #54 - Medium)
  {
    id: 'spiral-matrix',
    patternId: 'matrices',
    title: 'Spiral Matrix',
    subtitle: 'Four shrinking boundaries',
    kind: 'problem',
    leetcode: {
      id: 54,
      slug: 'spiral-matrix',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'Google', 'Apple'],
    statement: "Given an m x n matrix, return all of its elements in spiral order, traversing the outer ring clockwise and spiraling inward.",
    visualType: 'matrix',
    initialInput: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ],
    approaches: [
      {
        label: 'Boundary simulation',
        complexity: {
          time: 'O(R · C)',
          space: 'O(1)'
        },
        pseudocode: [
          "top=0, bottom=R-1, left=0, right=C-1",
          "while top <= bottom and left <= right:",
          "  for c in left..right: take (top, c)",
          "  top++",
          "  for r in top..bottom: take (r, right)",
          "  right--",
          "  if top <= bottom:",
          "    for c in right..left: take (bottom, c)",
          "    bottom--",
          "  if left <= right:",
          "    for r in bottom..top: take (r, left)",
          "    left++",
          "return result"
        ],
        starterCode: {
          javascript: `function spiralOrder(matrix) {\n  if (!matrix || !matrix.length) return [];\n  const res = [];\n  let top = 0, bottom = matrix.length - 1;\n  let left = 0, right = matrix[0].length - 1;\n\n  while (top <= bottom && left <= right) {\n    for (let c = left; c <= right; c++) res.push(matrix[top][c]);\n    top++;\n    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);\n    right--;\n    if (top <= bottom) {\n      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);\n      bottom--;\n    }\n    if (left <= right) {\n      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);\n      left++;\n    }\n  }\n  return res;\n}`,
          python: `def spiralOrder(matrix: list[list[int]]) -> list[int]:\n    if not matrix:\n        return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n\n    while top <= bottom and left <= right:\n        for c in range(left, right + 1):\n            res.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom + 1):\n            res.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left - 1, -1):\n                res.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top - 1, -1):\n                res.append(matrix[r][left])\n            left += 1\n    return res`
        },
        solutionCode: {
          javascript: `function spiralOrder(matrix) {\n  if (!matrix || !matrix.length) return [];\n  const res = [];\n  let top = 0, bottom = matrix.length - 1;\n  let left = 0, right = matrix[0].length - 1;\n\n  while (top <= bottom && left <= right) {\n    for (let c = left; c <= right; c++) res.push(matrix[top][c]);\n    top++;\n    for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);\n    right--;\n    if (top <= bottom) {\n      for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);\n      bottom--;\n    }\n    if (left <= right) {\n      for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);\n      left++;\n    }\n  }\n  return res;\n}`,
          python: `def spiralOrder(matrix: list[list[int]]) -> list[int]:\n    if not matrix:\n        return []\n    res = []\n    top, bottom = 0, len(matrix) - 1\n    left, right = 0, len(matrix[0]) - 1\n\n    while top <= bottom and left <= right:\n        for c in range(left, right + 1):\n            res.append(matrix[top][c])\n        top += 1\n        for r in range(top, bottom + 1):\n            res.append(matrix[r][right])\n        right -= 1\n        if top <= bottom:\n            for c in range(right, left - 1, -1):\n                res.append(matrix[bottom][c])\n            bottom -= 1\n        if left <= right:\n            for r in range(bottom, top - 1, -1):\n                res.append(matrix[r][left])\n            left += 1\n    return res`
        },
        testCases: [
          {
            input: [[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]],
            expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
            description: "3x4 matrix spiral traversal"
          },
          {
            input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
            expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
            description: "3x3 matrix spiral traversal"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize four boundaries: top = 0, bottom = 2, left = 0, right = 3.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [] },
            vars: [["cell", "—"], ["dir", "none"]]
          },
          {
            codeLine: 4,
            narration: "Walk RIGHT along row 0: take 1.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1] },
            vars: [["cell", 1], ["dir", "right"]]
          },
          {
            codeLine: 4,
            narration: "Walk RIGHT along row 0: take 2.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2] },
            vars: [["cell", 2], ["dir", "right"]]
          },
          {
            codeLine: 4,
            narration: "Walk RIGHT along row 0: take 3.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 0, c: 2, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3] },
            vars: [["cell", 3], ["dir", "right"]]
          },
          {
            codeLine: 4,
            narration: "Walk RIGHT along row 0: take 4.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 0, c: 3, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4] },
            vars: [["cell", 4], ["dir", "right"]]
          },
          {
            codeLine: 5,
            narration: "Top row finished; shrink top boundary: top++ (now 1).",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4] },
            vars: [["top", 1], ["bottom", 2], ["left", 0], ["right", 3]]
          },
          {
            codeLine: 6,
            narration: "Walk DOWN along column 3: take 8.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 1, c: 3, status: 'active', badge: '↓' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8] },
            vars: [["cell", 8], ["dir", "down"]]
          },
          {
            codeLine: 6,
            narration: "Walk DOWN along column 3: take 12.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 2, c: 3, status: 'active', badge: '↓' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12] },
            vars: [["cell", 12], ["dir", "down"]]
          },
          {
            codeLine: 7,
            narration: "Right column finished; shrink right boundary: right-- (now 2).",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12] },
            vars: [["top", 1], ["bottom", 2], ["left", 0], ["right", 2]]
          },
          {
            codeLine: 8,
            narration: "Walk LEFT along row 2: take 11.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 2, c: 2, status: 'active', badge: '←' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11] },
            vars: [["cell", 11], ["dir", "left"]]
          },
          {
            codeLine: 8,
            narration: "Walk LEFT along row 2: take 10.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 2, c: 1, status: 'active', badge: '←' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10] },
            vars: [["cell", 10], ["dir", "left"]]
          },
          {
            codeLine: 8,
            narration: "Walk LEFT along row 2: take 9.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 2, c: 0, status: 'active', badge: '←' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9] },
            vars: [["cell", 9], ["dir", "left"]]
          },
          {
            codeLine: 10,
            narration: "Bottom row finished; shrink bottom boundary: bottom-- (now 1).",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9] },
            vars: [["top", 1], ["bottom", 1], ["left", 0], ["right", 2]]
          },
          {
            codeLine: 11,
            narration: "Walk UP along column 0: take 5.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 1, c: 0, status: 'active', badge: '↑' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5] },
            vars: [["cell", 5], ["dir", "up"]]
          },
          {
            codeLine: 13,
            narration: "Left column finished; shrink left boundary: left++ (now 1). Outer ring complete!",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5] },
            vars: [["top", 1], ["bottom", 1], ["left", 1], ["right", 2]]
          },
          {
            codeLine: 4,
            narration: "Inner ring: Walk RIGHT along row 1: take 6.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 1, c: 1, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6] },
            vars: [["cell", 6], ["dir", "right"]]
          },
          {
            codeLine: 4,
            narration: "Inner ring: Walk RIGHT along row 1: take 7.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active', badge: '→' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
            vars: [["cell", 7], ["dir", "right"]]
          },
          {
            codeLine: 5,
            narration: "Row 1 finished; shrink top boundary: top++ (now 2).",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
            vars: [["top", 2], ["bottom", 1], ["left", 1], ["right", 2]]
          },
          {
            codeLine: 2,
            narration: "top (2) > bottom (1): Loop condition terminates. All layers traversed!",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
            vars: [["top <= bottom", false], ["left <= right", true]]
          },
          {
            codeLine: 14,
            narration: "Return collected spiral order array of length 12.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            best: { label: "[1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]" },
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
            vars: [["cell", 12], ["dir", "none"]]
          },
          {
            codeLine: 14,
            narration: "Spiral traversal complete: all 12 elements traversed in O(R · C) time and O(1) space.",
            matrix: {
              grid: [
                [1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12]
              ]
            },
            gridHighlights: [],
            best: { label: "12 Elements Collected" },
            customVisual: { label: "3 × 4 GRID", hideCoords: true, spiralOrder: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7] },
            vars: [["time", "O(R · C)"], ["space", "O(1)"]]
          }
        ]
      }
    ]
  },

  // 2. Rotate Image (LeetCode #48 - Medium)
  {
    id: 'rotate-image',
    patternId: 'matrices',
    title: 'Rotate Image',
    subtitle: '90° in place · transpose+reverse or 4-cycles',
    kind: 'problem',
    leetcode: {
      id: 48,
      slug: 'rotate-image',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'Apple'],
    statement: "Given an n x n matrix representing an image, rotate the image by 90 degrees clockwise in place, modifying the matrix directly without allocating another 2D array.",
    visualType: 'matrix',
    initialInput: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ],
    approaches: [
      {
        label: 'Transpose + reverse rows',
        complexity: {
          time: 'O(n²)',
          space: 'O(1)'
        },
        pseudocode: [
          "// Step 1: Transpose (swap matrix[i][j] with matrix[j][i])",
          "for i in 0..n-1:",
          "  for j in i+1..n-1:",
          "    swap(matrix[i][j], matrix[j][i])",
          "// Step 2: Reverse each row",
          "for i in 0..n-1:",
          "  reverse(matrix[i])"
        ],
        starterCode: {
          javascript: `function rotate(matrix) {\n  const n = matrix.length;\n  // 1. Transpose\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      const temp = matrix[i][j];\n      matrix[i][j] = matrix[j][i];\n      matrix[j][i] = temp;\n    }\n  }\n  // 2. Reverse each row\n  for (let i = 0; i < n; i++) {\n    matrix[i].reverse();\n  }\n}`,
          python: `def rotate(matrix: list[list[int]]) -> None:\n    n = len(matrix)\n    # 1. Transpose\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    # 2. Reverse rows\n    for i in range(n):\n        matrix[i].reverse()`
        },
        solutionCode: {
          javascript: `function rotate(matrix) {\n  const n = matrix.length;\n  // 1. Transpose\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      const temp = matrix[i][j];\n      matrix[i][j] = matrix[j][i];\n      matrix[j][i] = temp;\n    }\n  }\n  // 2. Reverse each row\n  for (let i = 0; i < n; i++) {\n    matrix[i].reverse();\n  }\n}`,
          python: `def rotate(matrix: list[list[int]]) -> None:\n    n = len(matrix)\n    # 1. Transpose\n    for i in range(n):\n        for j in range(i + 1, n):\n            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n    # 2. Reverse rows\n    for i in range(n):\n        matrix[i].reverse()`
        },
        testCases: [
          {
            input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
            expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]],
            description: "3x3 matrix rotated 90 degrees clockwise"
          },
          {
            input: [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]],
            expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]],
            description: "4x4 matrix rotated 90 degrees clockwise"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "A 90° clockwise rotation is mathematically equivalent to: Transpose (flip over diagonal) followed by Reversing each row horizontally.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'pacific' },
              { r: 1, c: 1, status: 'pacific' },
              { r: 2, c: 2, status: 'pacific' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["operation", "Original Matrix"], ["n", 3]]
          },
          {
            codeLine: 4,
            narration: "Transpose: swap (0, 1) [2] with (1, 0) [4].",
            matrix: {
              grid: [
                [1, 4, 3],
                [2, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'active' },
              { r: 1, c: 0, status: 'active' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["swapped", "(0,1) ↔ (1,0)"]]
          },
          {
            codeLine: 4,
            narration: "Transpose: swap (0, 2) [3] with (2, 0) [7].",
            matrix: {
              grid: [
                [1, 4, 7],
                [2, 5, 6],
                [3, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 2, status: 'active' },
              { r: 2, c: 0, status: 'active' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["swapped", "(0,2) ↔ (2,0)"]]
          },
          {
            codeLine: 4,
            narration: "Transpose: swap (1, 2) [6] with (2, 1) [8]. Transpose complete!",
            matrix: {
              grid: [
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9]
              ]
            },
            gridHighlights: [
              { r: 1, c: 2, status: 'visited' },
              { r: 2, c: 1, status: 'visited' }
            ],
            best: { label: "Transposed: rows become columns" },
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["phase", "Transpose Complete"]]
          },
          {
            codeLine: 7,
            narration: "Reverse row 0: [1, 4, 7] -> [7, 4, 1].",
            matrix: {
              grid: [
                [7, 4, 1],
                [2, 5, 8],
                [3, 6, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited-target' },
              { r: 0, c: 1, status: 'visited-target' },
              { r: 0, c: 2, status: 'visited-target' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["row 0 reversed", "[7, 4, 1]"]]
          },
          {
            codeLine: 7,
            narration: "Reverse row 1: [2, 5, 8] -> [8, 5, 2].",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [3, 6, 9]
              ]
            },
            gridHighlights: [
              { r: 1, c: 0, status: 'visited-target' },
              { r: 1, c: 1, status: 'visited-target' },
              { r: 1, c: 2, status: 'visited-target' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["row 1 reversed", "[8, 5, 2]"]]
          },
          {
            codeLine: 7,
            narration: "Reverse row 2: [3, 6, 9] -> [9, 6, 3]. Complete 90° clockwise in-place rotation!",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
              ]
            },
            gridHighlights: [
              { r: 2, c: 0, status: 'visited-target' },
              { r: 2, c: 1, status: 'visited-target' },
              { r: 2, c: 2, status: 'visited-target' }
            ],
            best: { label: "90° Rotated In-Place" },
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["final", "[[7,4,1],[8,5,2],[9,6,3]]"], ["time", "O(n²)"], ["extra space", "O(1)"]]
          }
        ]
      },
      {
        label: 'Direct 4-cycle rotation',
        complexity: {
          time: 'O(n²)',
          space: 'O(1)'
        },
        pseudocode: [
          "given matrix (n × n)",
          "for layer in 0..n/2:",
          "  for i in layer..n-1-layer:",
          "    save top",
          "    top    ← left",
          "    left   ← bottom",
          "    bottom ← right",
          "    right  ← saved top"
        ],
        starterCode: {
          javascript: `function rotate(matrix) {\n  const n = matrix.length;\n  for (let layer = 0; layer < Math.floor(n / 2); layer++) {\n    const first = layer;\n    const last = n - 1 - layer;\n    for (let i = first; i < last; i++) {\n      const offset = i - first;\n      const top = matrix[first][i];\n      // left -> top\n      matrix[first][i] = matrix[last - offset][first];\n      // bottom -> left\n      matrix[last - offset][first] = matrix[last][last - offset];\n      // right -> bottom\n      matrix[last][last - offset] = matrix[i][last];\n      // top -> right\n      matrix[i][last] = top;\n    }\n  }\n}`,
          python: `def rotate(matrix: list[list[int]]) -> None:\n    n = len(matrix)\n    for layer in range(n // 2):\n        first = layer\n        last = n - 1 - layer\n        for i in range(first, last):\n            offset = i - first\n            top = matrix[first][i]\n            # left -> top\n            matrix[first][i] = matrix[last - offset][first]\n            # bottom -> left\n            matrix[last - offset][first] = matrix[last][last - offset]\n            # right -> bottom\n            matrix[last][last - offset] = matrix[i][last]\n            # top -> right\n            matrix[i][last] = top`
        },
        solutionCode: {
          javascript: `function rotate(matrix) {\n  const n = matrix.length;\n  for (let layer = 0; layer < Math.floor(n / 2); layer++) {\n    const first = layer;\n    const last = n - 1 - layer;\n    for (let i = first; i < last; i++) {\n      const offset = i - first;\n      const top = matrix[first][i];\n      // left -> top\n      matrix[first][i] = matrix[last - offset][first];\n      // bottom -> left\n      matrix[last - offset][first] = matrix[last][last - offset];\n      // right -> bottom\n      matrix[last][last - offset] = matrix[i][last];\n      // top -> right\n      matrix[i][last] = top;\n    }\n  }\n}`,
          python: `def rotate(matrix: list[list[int]]) -> None:\n    n = len(matrix)\n    for layer in range(n // 2):\n        first = layer\n        last = n - 1 - layer\n        for i in range(first, last):\n            offset = i - first\n            top = matrix[first][i]\n            # left -> top\n            matrix[first][i] = matrix[last - offset][first]\n            # bottom -> left\n            matrix[last - offset][first] = matrix[last][last - offset]\n            # right -> bottom\n            matrix[last][last - offset] = matrix[i][last]\n            # top -> right\n            matrix[i][last] = top`
        },
        testCases: [
          {
            input: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
            expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]],
            description: "3x3 matrix rotated 90 degrees clockwise"
          },
          {
            input: [[[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]],
            expected: [[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]],
            description: "4x4 matrix rotated 90 degrees clockwise"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Given an n × n matrix representing an image (here n = 3), rotate it 90° clockwise in-place using 4-way cyclical swaps.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["n", 3], ["layers", "0..1"]]
          },
          {
            codeLine: 2,
            narration: "Process outer layer (layer = 0): contains the outer ring of cells.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 0, c: 1, status: 'visited' },
              { r: 0, c: 2, status: 'visited' },
              { r: 1, c: 2, status: 'visited' },
              { r: 2, c: 2, status: 'visited' },
              { r: 2, c: 1, status: 'visited' },
              { r: 2, c: 0, status: 'visited' },
              { r: 1, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["layer", 0], ["first", 0], ["last", 2]]
          },
          {
            codeLine: 3,
            narration: "Start inner loop at i = 0. Identify 4 symmetric corner cells.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'active' },
              { r: 0, c: 2, status: 'active' },
              { r: 2, c: 2, status: 'active' },
              { r: 2, c: 0, status: 'active' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["i", 0], ["cycle", "1→3→9→7"]]
          },
          {
            codeLine: 4,
            narration: "Save top corner value 1 into temporary variable 'top'.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'active' }],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["saved top", 1], ["cycle", "1→3→9→7"]]
          },
          {
            codeLine: 5,
            narration: "Move left corner (2,0) [7] into top corner (0,0). Top becomes 7.",
            matrix: {
              grid: [
                [7, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'active' },
              { r: 2, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["top", 7], ["left", 7]]
          },
          {
            codeLine: 6,
            narration: "Move bottom corner (2,2) [9] into left corner (2,0). Left becomes 9.",
            matrix: {
              grid: [
                [7, 2, 3],
                [4, 5, 6],
                [9, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 2, c: 0, status: 'active' },
              { r: 2, c: 2, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["left", 9], ["bottom", 9]]
          },
          {
            codeLine: 7,
            narration: "Move right corner (0,2) [3] into bottom corner (2,2). Bottom becomes 3.",
            matrix: {
              grid: [
                [7, 2, 3],
                [4, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [
              { r: 2, c: 2, status: 'active' },
              { r: 0, c: 2, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["bottom", 3], ["right", 3]]
          },
          {
            codeLine: 8,
            narration: "Move saved top value [1] into right corner (0,2). First 4-cycle complete!",
            matrix: {
              grid: [
                [7, 2, 1],
                [4, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 0, c: 2, status: 'visited' },
              { r: 2, c: 2, status: 'visited' },
              { r: 2, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["right", 1], ["corners rotated", "✓"]]
          },
          {
            codeLine: 3,
            narration: "Advance to i = 1. Identify 4 edge midpoints.",
            matrix: {
              grid: [
                [7, 2, 1],
                [4, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'active' },
              { r: 1, c: 2, status: 'active' },
              { r: 2, c: 1, status: 'active' },
              { r: 1, c: 0, status: 'active' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["i", 1], ["cycle", "2→6→8→4"]]
          },
          {
            codeLine: 4,
            narration: "Save top edge value 2 into temporary variable 'top'.",
            matrix: {
              grid: [
                [7, 2, 1],
                [4, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active' }],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["saved top", 2], ["cycle", "2→6→8→4"]]
          },
          {
            codeLine: 5,
            narration: "Move left edge (1,0) [4] into top edge (0,1). Top edge becomes 4.",
            matrix: {
              grid: [
                [7, 4, 1],
                [4, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'active' },
              { r: 1, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["top", 4], ["left", 4]]
          },
          {
            codeLine: 6,
            narration: "Move bottom edge (2,1) [8] into left edge (1,0). Left edge becomes 8.",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 6],
                [9, 8, 3]
              ]
            },
            gridHighlights: [
              { r: 1, c: 0, status: 'active' },
              { r: 2, c: 1, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["left", 8], ["bottom", 8]]
          },
          {
            codeLine: 7,
            narration: "Move right edge (1,2) [6] into bottom edge (2,1). Bottom edge becomes 6.",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 6],
                [9, 6, 3]
              ]
            },
            gridHighlights: [
              { r: 2, c: 1, status: 'active' },
              { r: 1, c: 2, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["bottom", 6], ["right", 6]]
          },
          {
            codeLine: 4,
            narration: "Take the ring of four: top 1, right 3, bottom 9, left 7. They will rotate one quarter clockwise.",
            matrix: {
              grid: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'active' },
              { r: 0, c: 2, status: 'active' },
              { r: 2, c: 2, status: 'active' },
              { r: 2, c: 0, status: 'active' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["cycle", "1→3→9→7"]]
          },
          {
            codeLine: 8,
            narration: "Move saved top value [2] into right edge (1,2). Second 4-cycle complete!",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'visited' },
              { r: 1, c: 2, status: 'visited' },
              { r: 2, c: 1, status: 'visited' },
              { r: 1, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["right", 2], ["edges rotated", "✓"]]
          },
          {
            codeLine: 2,
            narration: "Layer 0 complete. Center element (1,1) [5] does not move during 90° rotation.",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
              ]
            },
            gridHighlights: [{ r: 1, c: 1, status: 'pacific' }],
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["center", 5], ["fixed", true]]
          },
          {
            codeLine: 1,
            narration: "All layers completed in place without allocating auxiliary 2D buffers.",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 0, c: 1, status: 'visited' },
              { r: 0, c: 2, status: 'visited' },
              { r: 1, c: 0, status: 'visited' },
              { r: 1, c: 1, status: 'visited' },
              { r: 1, c: 2, status: 'visited' },
              { r: 2, c: 0, status: 'visited' },
              { r: 2, c: 1, status: 'visited' },
              { r: 2, c: 2, status: 'visited' }
            ],
            best: { label: "Rotated 90° In-Place" },
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["final", "[[7,4,1],[8,5,2],[9,6,3]]"]]
          },
          {
            codeLine: 1,
            narration: "90° Clockwise In-Place Rotation completed in O(n²) time and O(1) space.",
            matrix: {
              grid: [
                [7, 4, 1],
                [8, 5, 2],
                [9, 6, 3]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'both' },
              { r: 0, c: 1, status: 'both' },
              { r: 0, c: 2, status: 'both' },
              { r: 1, c: 0, status: 'both' },
              { r: 1, c: 1, status: 'both' },
              { r: 1, c: 2, status: 'both' },
              { r: 2, c: 0, status: 'both' },
              { r: 2, c: 1, status: 'both' },
              { r: 2, c: 2, status: 'both' }
            ],
            best: { label: "[[7,4,1],[8,5,2],[9,6,3]]" },
            customVisual: { label: "3 × 3 IMAGE", hideCoords: true },
            vars: [["time", "O(n²)"], ["space", "O(1)"]]
          }
        ]
      }
    ]
  },

  // 3. Set Matrix Zeroes (LeetCode #73 - Medium)
  {
    id: 'set-matrix-zeroes',
    patternId: 'matrices',
    title: 'Set Matrix Zeroes',
    subtitle: 'Find then zero · markers in the first row/col',
    kind: 'problem',
    leetcode: {
      id: 73,
      slug: 'set-matrix-zeroes',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'Meta'],
    statement: "Given an m x n matrix, if any element is 0 set its entire row and column to 0, modifying the matrix in place.",
    visualType: 'matrix',
    initialInput: [
      [1, 1, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 1]
    ],
    approaches: [
      {
        label: 'Brute force · row & column sets',
        complexity: {
          time: 'O(R · C)',
          space: 'O(R + C)'
        },
        pseudocode: [
          "rows = set(), cols = set()",
          "for r in 0..R-1, c in 0..C-1:",
          "  if matrix[r][c] == 0:",
          "    rows.add(r); cols.add(c)",
          "for r in rows: zero row r",
          "for c in cols: zero col c"
        ],
        starterCode: {
          javascript: `function setZeroes(matrix) {\n  const R = matrix.length, C = matrix[0].length;\n  const zeroRows = new Set(), zeroCols = new Set();\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (matrix[r][c] === 0) {\n        zeroRows.add(r);\n        zeroCols.add(c);\n      }\n    }\n  }\n\n  for (const r of zeroRows) {\n    for (let c = 0; c < C; c++) matrix[r][c] = 0;\n  }\n  for (const c of zeroCols) {\n    for (let r = 0; r < R; r++) matrix[r][c] = 0;\n  }\n}`,
          python: `def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    zero_rows, zero_cols = set(), set()\n\n    for r in range(R):\n        for c in range(C):\n            if matrix[r][c] == 0:\n                zero_rows.add(r)\n                zero_cols.add(c)\n\n    for r in zero_rows:\n        for c in range(C):\n            matrix[r][c] = 0\n    for c in zero_cols:\n        for r in range(R):\n            matrix[r][c] = 0`
        },
        solutionCode: {
          javascript: `function setZeroes(matrix) {\n  const R = matrix.length, C = matrix[0].length;\n  const zeroRows = new Set(), zeroCols = new Set();\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (matrix[r][c] === 0) {\n        zeroRows.add(r);\n        zeroCols.add(c);\n      }\n    }\n  }\n\n  for (const r of zeroRows) {\n    for (let c = 0; c < C; c++) matrix[r][c] = 0;\n  }\n  for (const c of zeroCols) {\n    for (let r = 0; r < R; r++) matrix[r][c] = 0;\n  }\n}`,
          python: `def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    zero_rows, zero_cols = set(), set()\n\n    for r in range(R):\n        for c in range(C):\n            if matrix[r][c] == 0:\n                zero_rows.add(r)\n                zero_cols.add(c)\n\n    for r in zero_rows:\n        for c in range(C):\n            matrix[r][c] = 0\n    for c in zero_cols:\n        for r in range(R):\n            matrix[r][c] = 0`
        },
        testCases: [
          {
            input: [[[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1]]],
            expected: [[1, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
            description: "3x4 matrix zeroing"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Record row and column indices containing zeros using two hash sets.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["rows", "{}"], ["cols", "{}"]]
          },
          {
            codeLine: 4,
            narration: "Found 0 at (1, 1) and (2, 2). Sets: rows = {1, 2}, cols = {1, 2}.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 1, c: 1, status: 'active' },
              { r: 2, c: 2, status: 'active' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["rows", "{1, 2}"], ["cols", "{1, 2}"]]
          },
          {
            codeLine: 5,
            narration: "Zero out rows 1 and 2.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 1, c: 0, status: 'captured' },
              { r: 1, c: 1, status: 'captured' },
              { r: 1, c: 2, status: 'captured' },
              { r: 1, c: 3, status: 'captured' },
              { r: 2, c: 0, status: 'captured' },
              { r: 2, c: 1, status: 'captured' },
              { r: 2, c: 2, status: 'captured' },
              { r: 2, c: 3, status: 'captured' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["rows zeroed", "[1, 2]"]]
          },
          {
            codeLine: 6,
            narration: "Zero out cols 1 and 2 in row 0.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'captured' },
              { r: 0, c: 2, status: 'captured' }
            ],
            best: { label: "Zeroing Complete" },
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["time", "O(R · C)"], ["space", "O(R + C)"]]
          }
        ]
      },
      {
        label: 'Optimized · markers in first row/col',
        complexity: {
          time: 'O(R · C)',
          space: 'O(1)'
        },
        pseudocode: [
          "firstRowZero = any 0 in row 0",
          "firstColZero = any 0 in col 0",
          "for r,c in interior:",
          "  if M[r][c]==0: M[r][0]=0; M[0][c]=0",
          "for r,c in interior:",
          "  if M[r][0]==0 or M[0][c]==0: M[r][c]=0",
          "if firstRowZero: zero row 0",
          "if firstColZero: zero col 0",
          "done"
        ],
        starterCode: {
          javascript: `function setZeroes(matrix) {\n  const R = matrix.length, C = matrix[0].length;\n  let firstRowZero = false, firstColZero = false;\n\n  for (let c = 0; c < C; c++) if (matrix[0][c] === 0) firstRowZero = true;\n  for (let r = 0; r < R; r++) if (matrix[r][0] === 0) firstColZero = true;\n\n  for (let r = 1; r < R; r++) {\n    for (let c = 1; c < C; c++) {\n      if (matrix[r][c] === 0) {\n        matrix[r][0] = 0;\n        matrix[0][c] = 0;\n      }\n    }\n  }\n\n  for (let r = 1; r < R; r++) {\n    for (let c = 1; c < C; c++) {\n      if (matrix[r][0] === 0 || matrix[0][c] === 0) {\n        matrix[r][c] = 0;\n      }\n    }\n  }\n\n  if (firstRowZero) for (let c = 0; c < C; c++) matrix[0][c] = 0;\n  if (firstColZero) for (let r = 0; r < R; r++) matrix[r][0] = 0;\n}`,
          python: `def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    first_row_zero = any(matrix[0][c] == 0 for c in range(C))\n    first_col_zero = any(matrix[r][0] == 0 for r in range(R))\n\n    for r in range(1, R):\n        for c in range(1, C):\n            if matrix[r][c] == 0:\n                matrix[r][0] = 0\n                matrix[0][c] = 0\n\n    for r in range(1, R):\n        for c in range(1, C):\n            if matrix[r][0] == 0 or matrix[0][c] == 0:\n                matrix[r][c] = 0\n\n    if first_row_zero:\n        for c in range(C):\n            matrix[0][c] = 0\n    if first_col_zero:\n        for r in range(R):\n            matrix[r][0] = 0`
        },
        solutionCode: {
          javascript: `function setZeroes(matrix) {\n  const R = matrix.length, C = matrix[0].length;\n  let firstRowZero = false, firstColZero = false;\n\n  for (let c = 0; c < C; c++) if (matrix[0][c] === 0) firstRowZero = true;\n  for (let r = 0; r < R; r++) if (matrix[r][0] === 0) firstColZero = true;\n\n  for (let r = 1; r < R; r++) {\n    for (let c = 1; c < C; c++) {\n      if (matrix[r][c] === 0) {\n        matrix[r][0] = 0;\n        matrix[0][c] = 0;\n      }\n    }\n  }\n\n  for (let r = 1; r < R; r++) {\n    for (let c = 1; c < C; c++) {\n      if (matrix[r][0] === 0 || matrix[0][c] === 0) {\n        matrix[r][c] = 0;\n      }\n    }\n  }\n\n  if (firstRowZero) for (let c = 0; c < C; c++) matrix[0][c] = 0;\n  if (firstColZero) for (let r = 0; r < R; r++) matrix[r][0] = 0;\n}`,
          python: `def setZeroes(matrix: list[list[int]]) -> None:\n    R, C = len(matrix), len(matrix[0])\n    first_row_zero = any(matrix[0][c] == 0 for c in range(C))\n    first_col_zero = any(matrix[r][0] == 0 for r in range(R))\n\n    for r in range(1, R):\n        for c in range(1, C):\n            if matrix[r][c] == 0:\n                matrix[r][0] = 0\n                matrix[0][c] = 0\n\n    for r in range(1, R):\n        for c in range(1, C):\n            if matrix[r][0] == 0 or matrix[0][c] == 0:\n                matrix[r][c] = 0\n\n    if first_row_zero:\n        for c in range(C):\n            matrix[0][c] = 0\n    if first_col_zero:\n        for r in range(R):\n            matrix[r][0] = 0`
        },
        testCases: [
          {
            input: [[[1, 1, 1, 1], [1, 0, 1, 1], [1, 1, 0, 1]]],
            expected: [[1, 0, 0, 1], [0, 0, 0, 0], [0, 0, 0, 0]],
            description: "3x4 matrix in-place zeroing"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Check first row: row 0 has no zeros -> firstRowZero = false.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 0, c: 1, status: 'visited' },
              { r: 0, c: 2, status: 'visited' },
              { r: 0, c: 3, status: 'visited' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["firstRowZero", false]]
          },
          {
            codeLine: 2,
            narration: "Check first column: col 0 has no zeros -> firstColZero = false.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 1, c: 0, status: 'visited' },
              { r: 2, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["firstRowZero", false], ["firstColZero", false]]
          },
          {
            codeLine: 3,
            narration: "Scan interior cells (r: 1..2, c: 1..3) to find zeros and record markers on edge headers.",
            matrix: {
              grid: [
                [1, 1, 1, 1],
                [1, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 1, c: 1, status: 'active' },
              { r: 2, c: 2, status: 'active' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["interior scan", "in progress"]]
          },
          {
            codeLine: 4,
            narration: "Found zero at interior cell (1, 1). Set row marker M[1][0] = 0 and column marker M[0][1] = 0.",
            matrix: {
              grid: [
                [1, 0, 1, 1],
                [0, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 1, c: 1, status: 'active' },
              { r: 1, c: 0, status: 'active' },
              { r: 0, c: 1, status: 'active' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["zero at", "(1, 1)"], ["mark", "M[1][0]=0, M[0][1]=0"]]
          },
          {
            codeLine: 5,
            narration: "Interior 0 at (1, 1). Write the markers: set M[1][0] = 0 and M[0][1] = 0. The flags now live on the grid's edges, no extra arrays.",
            matrix: {
              grid: [
                [1, 0, 1, 1],
                [0, 0, 1, 1],
                [1, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 1, c: 1, status: 'active' },
              { r: 1, c: 0, status: 'active' },
              { r: 0, c: 1, status: 'active' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["zero at", "(1, 1)"], ["mark", "M[1][0]=0, M[0][1]=0"]]
          },
          {
            codeLine: 4,
            narration: "Found zero at interior cell (2, 2). Set row marker M[2][0] = 0 and column marker M[0][2] = 0.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 1, 1],
                [0, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 2, c: 2, status: 'active' },
              { r: 2, c: 0, status: 'active' },
              { r: 0, c: 2, status: 'active' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["zero at", "(2, 2)"], ["mark", "M[2][0]=0, M[0][2]=0"]]
          },
          {
            codeLine: 5,
            narration: "Second pass: iterate through interior cells (r: 1..2, c: 1..3) and set M[r][c] = 0 if row or column header is 0.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 1, 1],
                [0, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'visited' },
              { r: 0, c: 2, status: 'visited' },
              { r: 1, c: 0, status: 'visited' },
              { r: 2, c: 0, status: 'visited' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["phase", "Zeroing interior"]]
          },
          {
            codeLine: 6,
            narration: "Row 1 has marker M[1][0] == 0: all cells in row 1 become 0.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 1, 0, 1]
              ]
            },
            gridHighlights: [
              { r: 1, c: 0, status: 'captured' },
              { r: 1, c: 1, status: 'captured' },
              { r: 1, c: 2, status: 'captured' },
              { r: 1, c: 3, status: 'captured' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["row 1", "zeroed"]]
          },
          {
            codeLine: 6,
            narration: "Row 2 has marker M[2][0] == 0: all cells in row 2 become 0.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 2, c: 0, status: 'captured' },
              { r: 2, c: 1, status: 'captured' },
              { r: 2, c: 2, status: 'captured' },
              { r: 2, c: 3, status: 'captured' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["row 2", "zeroed"]]
          },
          {
            codeLine: 6,
            narration: "Col 1 (M[0][1]==0) and Col 2 (M[0][2]==0) interior cells confirmed zeroed.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 1, c: 1, status: 'captured' },
              { r: 2, c: 1, status: 'captured' },
              { r: 1, c: 2, status: 'captured' },
              { r: 2, c: 2, status: 'captured' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["cols 1 & 2", "zeroed"]]
          },
          {
            codeLine: 7,
            narration: "Check firstRowZero: false, so row 0 keeps its original values except marker positions.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'visited' },
              { r: 0, c: 3, status: 'visited' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["firstRowZero", false]]
          },
          {
            codeLine: 8,
            narration: "Interior done, each cell read its two edge markers. The borders still hold their marker values; handle them last.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 1, c: 0, status: 'captured' },
              { r: 1, c: 1, status: 'captured' },
              { r: 1, c: 2, status: 'captured' },
              { r: 1, c: 3, status: 'captured' },
              { r: 2, c: 0, status: 'captured' },
              { r: 2, c: 1, status: 'captured' },
              { r: 2, c: 2, status: 'captured' },
              { r: 2, c: 3, status: 'captured' }
            ],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["interior", "zeroed"]]
          },
          {
            codeLine: 8,
            narration: "Check firstColZero: false, so column 0 does not need full zeroing.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'visited' }],
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["firstColZero", false]]
          },
          {
            codeLine: 9,
            narration: "In-place matrix zeroing complete with O(1) auxiliary space and O(R · C) runtime.",
            matrix: {
              grid: [
                [1, 0, 0, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'both' },
              { r: 0, c: 1, status: 'both' },
              { r: 0, c: 2, status: 'both' },
              { r: 0, c: 3, status: 'both' },
              { r: 1, c: 0, status: 'both' },
              { r: 1, c: 1, status: 'both' },
              { r: 1, c: 2, status: 'both' },
              { r: 1, c: 3, status: 'both' },
              { r: 2, c: 0, status: 'both' },
              { r: 2, c: 1, status: 'both' },
              { r: 2, c: 2, status: 'both' },
              { r: 2, c: 3, status: 'both' }
            ],
            best: { label: "In-Place Zeroing Complete" },
            customVisual: { label: "3 × 4 GRID", hideCoords: true },
            vars: [["time", "O(R · C)"], ["space", "O(1)"]]
          }
        ]
      }
    ]
  },

  // 4. Island Perimeter (LeetCode #463 - Easy)
  {
    id: 'island-perimeter',
    patternId: 'matrices',
    title: 'Island Perimeter',
    subtitle: 'Count contributions, not the outline',
    kind: 'problem',
    leetcode: {
      id: 463,
      slug: 'island-perimeter',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Google'],
    statement: "A grid of 0s (water) and 1s (land) contains exactly one island with no lakes. Return the perimeter of that island.",
    visualType: 'matrix',
    initialInput: [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0]
    ],
    approaches: [
      {
        label: 'Brute force · check four sides',
        complexity: {
          time: 'O(R · C)',
          space: 'O(1)'
        },
        pseudocode: [
          "perimeter = 0",
          "for r in 0..R-1, c in 0..C-1:",
          "  if grid[r][c] == 1:",
          "    for nr, nc in 4 neighbors:",
          "      if out_of_bounds or grid[nr][nc] == 0: perimeter++",
          "return perimeter"
        ],
        starterCode: {
          javascript: `function islandPerimeter(grid) {\n  const R = grid.length, C = grid[0].length;\n  let perimeter = 0;\n  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 1) {\n        for (const [dr, dc] of dirs) {\n          const nr = r + dr, nc = c + dc;\n          if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] === 0) {\n            perimeter++;\n          }\n        }\n      }\n    }\n  }\n  return perimeter;\n}`,
          python: `def islandPerimeter(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    perimeter = 0\n    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 1:\n                for dr, dc in dirs:\n                    nr, nc = r + dr, c + dc\n                    if nr < 0 or nr >= R or nc < 0 or nc >= C or grid[nr][nc] == 0:\n                        perimeter += 1\n    return perimeter`
        },
        solutionCode: {
          javascript: `function islandPerimeter(grid) {\n  const R = grid.length, C = grid[0].length;\n  let perimeter = 0;\n  const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 1) {\n        for (const [dr, dc] of dirs) {\n          const nr = r + dr, nc = c + dc;\n          if (nr < 0 || nr >= R || nc < 0 || nc >= C || grid[nr][nc] === 0) {\n            perimeter++;\n          }\n        }\n      }\n    }\n  }\n  return perimeter;\n}`,
          python: `def islandPerimeter(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    perimeter = 0\n    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]\n\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 1:\n                for dr, dc in dirs:\n                    nr, nc = r + dr, c + dc\n                    if nr < 0 or nr >= R or nc < 0 or nc >= C or grid[nr][nc] == 0:\n                        perimeter += 1\n    return perimeter`
        },
        testCases: [
          {
            input: [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0]]],
            expected: 12,
            description: "3x4 grid island perimeter = 12"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Scan each land cell (1) and count exposed edges adjacent to water (0) or grid boundaries.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["perimeter", 0]]
          },
          {
            codeLine: 3,
            narration: "Cell (0, 1) = 1: 3 exposed edges (top boundary, left water, right water). Perimeter = 3.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["cell", "(0, 1)"], ["perimeter", 3]]
          },
          {
            codeLine: 3,
            narration: "Cell (1, 0) = 1: 3 exposed edges (top water, left boundary, bottom water). Perimeter = 3 + 3 = 6.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'visited' },
              { r: 1, c: 0, status: 'active' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["cell", "(1, 0)"], ["perimeter", 6]]
          },
          {
            codeLine: 3,
            narration: "Cell (1, 1) = 1: 0 exposed edges (all 4 neighbors are land). Perimeter remains 6.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'visited' },
              { r: 1, c: 0, status: 'visited' },
              { r: 1, c: 1, status: 'active' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["cell", "(1, 1)"], ["perimeter", 6]]
          },
          {
            codeLine: 3,
            narration: "Cell (1, 2) = 1: 3 exposed edges. Cell (2, 1) = 1: 3 exposed edges. Total perimeter = 12.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'both' },
              { r: 1, c: 0, status: 'both' },
              { r: 1, c: 1, status: 'both' },
              { r: 1, c: 2, status: 'both' },
              { r: 2, c: 1, status: 'both' }
            ],
            best: { label: "Perimeter = 12" },
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["final perimeter", 12], ["time", "O(R · C)"], ["space", "O(1)"]]
          }
        ]
      },
      {
        label: 'Optimized · 4 per cell - 2 per shared edge',
        complexity: {
          time: 'O(R · C)',
          space: 'O(1)'
        },
        pseudocode: [
          "cells = 0; shared = 0",
          "for each land cell: cells++; shared += land above? + land left?",
          "return 4 * cells - 2 * shared"
        ],
        starterCode: {
          javascript: `function islandPerimeter(grid) {\n  const R = grid.length, C = grid[0].length;\n  let cells = 0, shared = 0;\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 1) {\n        cells++;\n        if (r > 0 && grid[r - 1][c] === 1) shared++;\n        if (c > 0 && grid[r][c - 1] === 1) shared++;\n      }\n    }\n  }\n  return 4 * cells - 2 * shared;\n}`,
          python: `def islandPerimeter(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    cells = 0\n    shared = 0\n\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 1:\n                cells += 1\n                if r > 0 and grid[r - 1][c] == 1:\n                    shared += 1\n                if c > 0 and grid[r][c - 1] == 1:\n                    shared += 1\n    return 4 * cells - 2 * shared`
        },
        solutionCode: {
          javascript: `function islandPerimeter(grid) {\n  const R = grid.length, C = grid[0].length;\n  let cells = 0, shared = 0;\n\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 1) {\n        cells++;\n        if (r > 0 && grid[r - 1][c] === 1) shared++;\n        if (c > 0 && grid[r][c - 1] === 1) shared++;\n      }\n    }\n  }\n  return 4 * cells - 2 * shared;\n}`,
          python: `def islandPerimeter(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    cells = 0\n    shared = 0\n\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 1:\n                cells += 1\n                if r > 0 and grid[r - 1][c] == 1:\n                    shared += 1\n                if c > 0 and grid[r][c - 1] == 1:\n                    shared += 1\n    return 4 * cells - 2 * shared`
        },
        testCases: [
          {
            input: [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0]]],
            expected: 12,
            description: "Island perimeter = 12"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize counters: cells = 0 (land cells), shared = 0 (adjacent shared boundaries).",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["cells", 0], ["shared", 0]]
          },
          {
            codeLine: 2,
            narration: "Scan cell (0, 0) = 0: water cell, skip.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'visited' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["cells", 0], ["shared", 0]]
          },
          {
            codeLine: 2,
            narration: "Scan cell (0, 1) = 1: land cell! Increment cells = 1. No top or left neighbor.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 1], ["shared edges", 0], ["4·cells - 2·shared", 4]]
          },
          {
            codeLine: 2,
            narration: "Scan cell (0, 2) = 0: water cell, skip.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 0, c: 2, status: 'visited' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 1], ["shared edges", 0]]
          },
          {
            codeLine: 2,
            narration: "Scan cell (0, 3) = 0: water cell, skip. Row 0 complete.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 0, c: 3, status: 'visited' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 1], ["shared edges", 0]]
          },
          {
            codeLine: 2,
            narration: "Scan cell (1, 0) = 1: land cell! Increment cells = 2. Cell above (0, 0) is water -> 0 shared edges.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 2], ["shared edges", 0], ["4·cells - 2·shared", 8]]
          },
          {
            codeLine: 2,
            narration: "Checking cell (1, 0) boundaries: perimeter contribution is 4.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'pacific' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 2], ["shared edges", 0]]
          },
          {
            codeLine: 2,
            narration: "Move to cell (1, 1): land cell = 1.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'pacific' }, { r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 3], ["shared edges", 0]]
          },
          {
            codeLine: 2,
            narration: "Check neighbor above: (0, 1) is land -> shared++ (1 shared edge).",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'pacific' }, { r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 3], ["shared edges", 1]]
          },
          {
            codeLine: 2,
            narration: "Check neighbor to left: (1, 0) is land -> shared++ (2 shared edges).",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'pacific' }, { r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 3], ["shared edges", 2]]
          },
          {
            codeLine: 2,
            narration: "Perimeter updated for cell (1, 1): 4·3 - 2·2 = 8.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'pacific' }, { r: 1, c: 0, status: 'pacific' }, { r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["land cells", 3], ["shared edges", 2], ["4·cells - 2·shared", 8]]
          },
          {
            codeLine: 2,
            narration: "Land at (1, 1) -> 3 cells so far. It touches the cell above AND the one to its left -> 2 shared edges.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'pacific' },
              { r: 1, c: 0, status: 'pacific' },
              { r: 1, c: 1, status: 'active' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["land cells", 3],
              ["shared edges", 2],
              ["4·cells - 2·shared", 8]
            ]
          },
          {
            codeLine: 2,
            narration: "Scan cell (1, 2) = 1: land cells = 4. Touches left neighbor (1, 1) -> shared = 3. Perimeter = 4·4 - 2·3 = 10.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'pacific' },
              { r: 1, c: 0, status: 'pacific' },
              { r: 1, c: 1, status: 'pacific' },
              { r: 1, c: 2, status: 'active' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["land cells", 4],
              ["shared edges", 3],
              ["4·cells - 2·shared", 10]
            ]
          },
          {
            codeLine: 2,
            narration: "Scan cell (2, 1) = 1: land cells = 5. Touches top neighbor (1, 1) -> shared = 4. Perimeter = 4·5 - 2·4 = 12.",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'pacific' },
              { r: 1, c: 0, status: 'pacific' },
              { r: 1, c: 1, status: 'pacific' },
              { r: 1, c: 2, status: 'pacific' },
              { r: 2, c: 1, status: 'active' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["land cells", 5],
              ["shared edges", 4],
              ["4·cells - 2·shared", 12]
            ]
          },
          {
            codeLine: 3,
            narration: "Formula: 4 · cells - 2 · shared = 4·5 - 2·4 = 12. Island perimeter calculation complete!",
            matrix: {
              grid: [
                [0, 1, 0, 0],
                [1, 1, 1, 0],
                [0, 1, 0, 0]
              ]
            },
            gridHighlights: [
              { r: 0, c: 1, status: 'both' },
              { r: 1, c: 0, status: 'both' },
              { r: 1, c: 1, status: 'both' },
              { r: 1, c: 2, status: 'both' },
              { r: 2, c: 1, status: 'both' }
            ],
            best: { label: "Island Perimeter = 12" },
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["final perimeter", 12],
              ["time", "O(R · C)"],
              ["space", "O(1)"]
            ]
          }
        ]
      }
    ]
  },

  // 5. Find Missing and Repeated Values (LeetCode #2965 - Easy)
  {
    id: 'find-missing-and-repeated-values',
    patternId: 'matrices',
    title: 'Find Missing and Repeated Values',
    subtitle: 'Two equations, two unknowns',
    kind: 'problem',
    leetcode: {
      id: 2965,
      slug: 'find-missing-and-repeated-values',
      difficulty: 'Easy'
    },
    companies: ['Amazon'],
    statement: "An nxn grid should contain every integer from 1 to n² exactly once, but one value appears twice and another is missing. Return [repeated, missing].",
    visualType: 'matrix',
    initialInput: [
      [9, 1, 7],
      [8, 9, 2],
      [3, 4, 6]
    ],
    approaches: [
      {
        label: 'Brute force · count occurrences',
        complexity: {
          time: 'O(n²)',
          space: 'O(n²)'
        },
        pseudocode: [
          "count = map()",
          "for row in grid, x in row:",
          "  count[x] = (count[x] || 0) + 1",
          "for v in 1..n*n:",
          "  if count[v] == 2: a = v",
          "  if count[v] == 0: b = v",
          "return [a, b]"
        ],
        starterCode: {
          javascript: `function findMissingAndRepeatedValues(grid) {\n  const n = grid.length;\n  const count = new Map();\n  for (const row of grid) {\n    for (const x of row) {\n      count.set(x, (count.get(x) || 0) + 1);\n    }\n  }\n  let a = -1, b = -1;\n  for (let v = 1; v <= n * n; v++) {\n    const c = count.get(v) || 0;\n    if (c === 2) a = v;\n    if (c === 0) b = v;\n  }\n  return [a, b];\n}`,
          python: `def findMissingAndRepeatedValues(grid: list[list[int]]) -> list[int]:\n    n = len(grid)\n    count = {}\n    for row in grid:\n        for x in row:\n            count[x] = count.get(x, 0) + 1\n    a, b = -1, -1\n    for v in range(1, n * n + 1):\n        c = count.get(v, 0)\n        if c == 2:\n            a = v\n        elif c == 0:\n            b = v\n    return [a, b]`
        },
        solutionCode: {
          javascript: `function findMissingAndRepeatedValues(grid) {\n  const n = grid.length;\n  const count = new Map();\n  for (const row of grid) {\n    for (const x of row) {\n      count.set(x, (count.get(x) || 0) + 1);\n    }\n  }\n  let a = -1, b = -1;\n  for (let v = 1; v <= n * n; v++) {\n    const c = count.get(v) || 0;\n    if (c === 2) a = v;\n    if (c === 0) b = v;\n  }\n  return [a, b];\n}`,
          python: `def findMissingAndRepeatedValues(grid: list[list[int]]) -> list[int]:\n    n = len(grid)\n    count = {}\n    for row in grid:\n        for x in row:\n            count[x] = count.get(x, 0) + 1\n    a, b = -1, -1\n    for v in range(1, n * n + 1):\n        c = count.get(v, 0)\n        if c == 2:\n            a = v\n        elif c == 0:\n            b = v\n    return [a, b]`
        },
        testCases: [
          {
            input: [[[9, 1, 7], [8, 9, 2], [3, 4, 6]]],
            expected: [9, 5],
            description: "9 is repeated, 5 is missing"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Build frequency count table for all numbers in range 1..n².",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["count map", "{}"]]
          },
          {
            codeLine: 3,
            narration: "Count frequencies: 9 appears twice, 5 appears zero times.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'active', badge: 'count=2' },
              { r: 1, c: 1, status: 'active', badge: 'count=2' }
            ],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["count[9]", 2], ["count[5]", 0]]
          },
          {
            codeLine: 7,
            narration: "Scan frequencies: count[9] == 2 -> a = 9 (repeated), count[5] == 0 -> b = 5 (missing).",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'both' },
              { r: 1, c: 1, status: 'both' }
            ],
            best: { label: "[9, 5]" },
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["repeated (a)", 9], ["missing (b)", 5], ["result", "[9, 5]"]]
          }
        ]
      },
      {
        label: 'Optimized · sums and squares',
        complexity: {
          time: 'O(n²)',
          space: 'O(1)'
        },
        pseudocode: [
          "expected Σ ← m(m+1)/2, expected Σ² ← m(m+1)(2m+1)/6",
          "measure the actual Σ and Σ² in one pass",
          "a - b ← Σ - expectedΣ            # a repeated, b missing",
          "a + b ← (Σ² - expectedΣ²) / (a - b)",
          "return [(sumDiff + plus) / 2, plus - a]"
        ],
        starterCode: {
          javascript: `function findMissingAndRepeatedValues(grid) {\n  const n = grid.length;\n  const m = n * n;\n  const expSum = (m * (m + 1)) / 2;\n  const expSq = (m * (m + 1) * (2 * m + 1)) / 6;\n\n  let sum = 0, sq = 0;\n  for (let r = 0; r < n; r++) {\n    for (let c = 0; c < n; c++) {\n      const val = grid[r][c];\n      sum += val;\n      sq += val * val;\n    }\n  }\n\n  const diff = sum - expSum; // a - b\n  const sqDiff = sq - expSq; // a^2 - b^2\n  const plus = sqDiff / diff; // a + b\n\n  const a = (diff + plus) / 2;\n  const b = plus - a;\n  return [a, b];\n}`,
          python: `def findMissingAndRepeatedValues(grid: list[list[int]]) -> list[int]:\n    n = len(grid)\n    m = n * n\n    exp_sum = m * (m + 1) // 2\n    exp_sq = m * (m + 1) * (2 * m + 1) // 6\n\n    actual_sum = sum(x for row in grid for x in row)\n    actual_sq = sum(x * x for row in grid for x in row)\n\n    diff = actual_sum - exp_sum  # a - b\n    sq_diff = actual_sq - exp_sq  # a^2 - b^2\n    plus = sq_diff // diff  # a + b\n\n    a = (diff + plus) // 2\n    b = plus - a\n    return [a, b]`
        },
        solutionCode: {
          javascript: `function findMissingAndRepeatedValues(grid) {\n  const n = grid.length;\n  const m = n * n;\n  const expSum = (m * (m + 1)) / 2;\n  const expSq = (m * (m + 1) * (2 * m + 1)) / 6;\n\n  let sum = 0, sq = 0;\n  for (let r = 0; r < n; r++) {\n    for (let c = 0; c < n; c++) {\n      const val = grid[r][c];\n      sum += val;\n      sq += val * val;\n    }\n  }\n\n  const diff = sum - expSum; // a - b\n  const sqDiff = sq - expSq; // a^2 - b^2\n  const plus = sqDiff / diff; // a + b\n\n  const a = (diff + plus) / 2;\n  const b = plus - a;\n  return [a, b];\n}`,
          python: `def findMissingAndRepeatedValues(grid: list[list[int]]) -> list[int]:\n    n = len(grid)\n    m = n * n\n    exp_sum = m * (m + 1) // 2\n    exp_sq = m * (m + 1) * (2 * m + 1) // 6\n\n    actual_sum = sum(x for row in grid for x in row)\n    actual_sq = sum(x * x for row in grid for x in row)\n\n    diff = actual_sum - exp_sum  # a - b\n    sq_diff = actual_sq - exp_sq  # a^2 - b^2\n    plus = sq_diff // diff  # a + b\n\n    a = (diff + plus) // 2\n    b = plus - a\n    return [a, b]`
        },
        testCases: [
          {
            input: [[[9, 1, 7], [8, 9, 2], [3, 4, 6]]],
            expected: [9, 5],
            description: "9 is repeated, 5 is missing"
          },
          {
            input: [[[1, 3], [2, 2]]],
            expected: [2, 4],
            description: "2 is repeated, 4 is missing"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Grid size n = 3 -> m = 9 values from 1 to 9. Compute theoretical expected sum and sum of squares.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["m (n²)", 9]]
          },
          {
            codeLine: 1,
            narration: "Expected sum = m(m+1)/2 = 9·10/2 = 45.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["expected Σ", 45]]
          },
          {
            codeLine: 1,
            narration: "Expected sum of squares = m(m+1)(2m+1)/6 = 9·10·19/6 = 285.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["expected Σ", 45], ["expected Σ²", 285]]
          },
          {
            codeLine: 2,
            narration: "Initialize accumulators: actual Σ = 0, actual Σ² = 0. Iterate through grid elements.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 0], ["Σ² so far", 0]]
          },
          {
            codeLine: 2,
            narration: "Inspect cell (0, 0) with value 9.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 9]]
          },
          {
            codeLine: 2,
            narration: "Add 9: running sum 9, running sum of squares 81.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 9], ["Σ² so far", 81]]
          },
          {
            codeLine: 2,
            narration: "Inspect cell (0, 1) with value 1.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 1]]
          },
          {
            codeLine: 2,
            narration: "Add 1: running sum 10, running sum of squares 82.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 10], ["Σ² so far", 82]]
          },
          {
            codeLine: 2,
            narration: "Inspect cell (0, 2) with value 7.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 7]]
          },
          {
            codeLine: 2,
            narration: "Add 7: running sum 17, running sum of squares 131.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 0, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 17], ["Σ² so far", 131]]
          },
          {
            codeLine: 2,
            narration: "Inspect cell (1, 0) with value 8.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 8]]
          },
          {
            codeLine: 2,
            narration: "Add 8: running sum 25, running sum of squares 195.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 25], ["Σ² so far", 195]]
          },
          {
            codeLine: 2,
            narration: "Inspect cell (1, 1) with value 9 (repeated).",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 9]]
          },
          {
            codeLine: 2,
            narration: "Add 9: running sum 34, running sum of squares 276.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 34], ["Σ² so far", 276]]
          },
          {
            codeLine: 2,
            narration: "Move to cell (1, 2) with value 2.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["current val", 2]]
          },
          {
            codeLine: 2,
            narration: "Add value 2 to sum (34 + 2 = 36).",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 36], ["Σ² so far", 276]]
          },
          {
            codeLine: 2,
            narration: "Add value 2² = 4 to sum of squares (276 + 4 = 280).",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 36], ["Σ² so far", 280]]
          },
          {
            codeLine: 2,
            narration: "Updating statistics for cell (1, 2).",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 36], ["Σ² so far", 280]]
          },
          {
            codeLine: 2,
            narration: "Add 2: running sum 36, running sum of squares 280.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 1, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["Σ so far", 36],
              ["Σ² so far", 280]
            ]
          },
          {
            codeLine: 2,
            narration: "Add 3 at (2, 0): running sum 39, running sum of squares 289.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 2, c: 0, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 39], ["Σ² so far", 289]]
          },
          {
            codeLine: 2,
            narration: "Add 4 at (2, 1): running sum 43, running sum of squares 305.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 2, c: 1, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["Σ so far", 43], ["Σ² so far", 305]]
          },
          {
            codeLine: 2,
            narration: "Add 6 at (2, 2): total actual Σ = 49, total actual Σ² = 341. Grid iteration complete!",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [{ r: 2, c: 2, status: 'active' }],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["actual Σ", 49], ["actual Σ²", 341]]
          },
          {
            codeLine: 3,
            narration: "Equation 1: a - b = actual Σ - expected Σ = 49 - 45 = 4.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["a - b", 4]]
          },
          {
            codeLine: 4,
            narration: "Equation 2: (a² - b²) / (a - b) = (341 - 285) / 4 = 56 / 4 = 14 -> a + b = 14.",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [],
            customVisual: { label: "GRID", hideCoords: true },
            vars: [["a - b", 4], ["a + b", 14]]
          },
          {
            codeLine: 5,
            narration: "Solve: a = (4 + 14) / 2 = 9 (Repeated), b = 14 - 9 = 5 (Missing). Return [9, 5].",
            matrix: {
              grid: [
                [9, 1, 7],
                [8, 9, 2],
                [3, 4, 6]
              ]
            },
            gridHighlights: [
              { r: 0, c: 0, status: 'both', badge: 'a = 9' },
              { r: 1, c: 1, status: 'both', badge: 'a = 9' }
            ],
            best: { label: "Repeated: 9, Missing: 5 -> [9, 5]" },
            customVisual: { label: "GRID", hideCoords: true },
            vars: [
              ["repeated (a)", 9],
              ["missing (b)", 5],
              ["result", "[9, 5]"]
            ]
          }
        ]
      }
    ]
  }
];
