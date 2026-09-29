import { Problem } from '../../types';

export const prefixSumProblems: Problem[] = [
  // 1. Overview (Concept)
  {
    id: 'overview',
    patternId: 'prefix-sum',
    title: 'Overview',
    subtitle: 'Precompute running totals · range sum in O(1)',
    kind: 'concept',
    statement: "A prefix-sum array answers \"what is the sum of arr[0..i]?\" instantly. Precompute it ONCE, then any range sum becomes a single subtraction. The trick that turns repeated range queries from O(n) each into O(1) each.",
    visualType: 'array',
    initialInput: [3, 1, 4, 1, 5, 9, 2],
    approaches: [
      {
        label: 'Concept',
        complexity: {
          time: 'O(n) build, O(1) query',
          space: 'O(n)'
        },
        pseudocode: [
          "given arr (n elements)",
          "P = array of size n+1",
          "P[0] = 0                     // sum of nothing",
          "for i in 0..n-1:",
          "  P[i+1] = P[i] + arr[i]",
          "// now P is ready",
          "rangeSum(l, r):",
          "  return P[r+1] - P[l]       // O(1)"
        ],
        starterCode: {
          javascript: `class PrefixSum {\n  constructor(arr) {\n    this.P = new Array(arr.length + 1).fill(0);\n    for (let i = 0; i < arr.length; i++) {\n      this.P[i + 1] = this.P[i] + arr[i];\n    }\n  }\n\n  rangeSum(l, r) {\n    return this.P[r + 1] - this.P[l];\n  }\n}`,
          python: `class PrefixSum:\n    def __init__(self, arr: list[int]):\n        self.P = [0] * (len(arr) + 1)\n        for i in range(len(arr)):\n            self.P[i + 1] = self.P[i] + arr[i]\n\n    def range_sum(self, l: int, r: int) -> int:\n        return self.P[r + 1] - self.P[l]`
        },
        solutionCode: {
          javascript: `class PrefixSum {\n  constructor(arr) {\n    this.P = new Array(arr.length + 1).fill(0);\n    for (let i = 0; i < arr.length; i++) {\n      this.P[i + 1] = this.P[i] + arr[i];\n    }\n  }\n\n  rangeSum(l, r) {\n    return this.P[r + 1] - this.P[l];\n  }\n}`,
          python: `class PrefixSum:\n    def __init__(self, arr: list[int]):\n        self.P = [0] * (len(arr) + 1)\n        for i in range(len(arr)):\n            self.P[i + 1] = self.P[i] + arr[i]\n\n    def range_sum(self, l: int, r: int) -> int:\n        return self.P[r + 1] - self.P[l]`
        },
        testCases: [
          {
            input: [[3, 1, 4, 1, 5, 9, 2], 1, 4],
            expected: 11,
            description: "Sum of arr[1..4] = [1, 4, 1, 5] is 11"
          },
          {
            input: [[3, 1, 4, 1, 5, 9, 2], 0, 2],
            expected: 8,
            description: "Sum of arr[0..2] = [3, 1, 4] is 8"
          },
          {
            input: [[3, 1, 4, 1, 5, 9, 2], 2, 6],
            expected: 21,
            description: "Sum of arr[2..6] = [4, 1, 5, 9, 2] is 21"
          }
        ],
        steps: [
          // Step 1
          {
            codeLine: 1,
            narration: "A prefix-sum array answers \"what is the sum of arr[0..i]?\" instantly. Precompute it ONCE, then any range sum becomes a single subtraction. The trick that turns repeated range queries from O(n) each into O(1) each.",
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, '·', '·', '·', '·', '·', '·', '·'],
                highlights: [0]
              }
            },
            vars: [
              ["n", 7]
            ]
          },
          // Step 2: i = 0
          {
            codeLine: 5,
            narration: "i = 0: P[1] = P[0] + arr[0] = 0 + 3 = 3. Prefix sum for arr[0..0] is 3.",
            pointers: [{ name: 'i', index: 0, position: 'top', color: 'accent' }],
            highlights: [0],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, '·', '·', '·', '·', '·', '·'],
                highlights: [1],
                pointers: [{ name: 'i+1', index: 1, color: 'accent' }]
              }
            },
            vars: [
              ["i", 0],
              ["arr[0]", 3],
              ["P[0]", 0],
              ["P[1]", 3]
            ]
          },
          // Step 3: i = 1
          {
            codeLine: 5,
            narration: "i = 1: P[2] = P[1] + arr[1] = 3 + 1 = 4. Prefix sum for arr[0..1] is 4.",
            pointers: [{ name: 'i', index: 1, position: 'top', color: 'accent' }],
            highlights: [1],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, '·', '·', '·', '·', '·'],
                highlights: [2],
                pointers: [{ name: 'i+1', index: 2, color: 'accent' }]
              }
            },
            vars: [
              ["i", 1],
              ["arr[1]", 1],
              ["P[1]", 3],
              ["P[2]", 4]
            ]
          },
          // Step 4: i = 2
          {
            codeLine: 5,
            narration: "i = 2: P[3] = P[2] + arr[2] = 4 + 4 = 8. Prefix sum for arr[0..2] is 8.",
            pointers: [{ name: 'i', index: 2, position: 'top', color: 'accent' }],
            highlights: [2],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, '·', '·', '·', '·'],
                highlights: [3],
                pointers: [{ name: 'i+1', index: 3, color: 'accent' }]
              }
            },
            vars: [
              ["i", 2],
              ["arr[2]", 4],
              ["P[2]", 4],
              ["P[3]", 8]
            ]
          },
          // Step 5: i = 3
          {
            codeLine: 5,
            narration: "i = 3: P[4] = P[3] + arr[3] = 8 + 1 = 9. Prefix sum for arr[0..3] is 9.",
            pointers: [{ name: 'i', index: 3, position: 'top', color: 'accent' }],
            highlights: [3],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, '·', '·', '·'],
                highlights: [4],
                pointers: [{ name: 'i+1', index: 4, color: 'accent' }]
              }
            },
            vars: [
              ["i", 3],
              ["arr[3]", 1],
              ["P[3]", 8],
              ["P[4]", 9]
            ]
          },
          // Step 6: i = 4
          {
            codeLine: 5,
            narration: "i = 4: P[5] = P[4] + arr[4] = 9 + 5 = 14. Prefix sum for arr[0..4] is 14.",
            pointers: [{ name: 'i', index: 4, position: 'top', color: 'accent' }],
            highlights: [4],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, '·', '·'],
                highlights: [5],
                pointers: [{ name: 'i+1', index: 5, color: 'accent' }]
              }
            },
            vars: [
              ["i", 4],
              ["arr[4]", 5],
              ["P[4]", 9],
              ["P[5]", 14]
            ]
          },
          // Step 7: i = 5
          {
            codeLine: 5,
            narration: "i = 5: P[6] = P[5] + arr[5] = 14 + 9 = 23. Prefix sum for arr[0..5] is 23.",
            pointers: [{ name: 'i', index: 5, position: 'top', color: 'accent' }],
            highlights: [5],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, '·'],
                highlights: [6],
                pointers: [{ name: 'i+1', index: 6, color: 'accent' }]
              }
            },
            vars: [
              ["i", 5],
              ["arr[5]", 9],
              ["P[5]", 14],
              ["P[6]", 23]
            ]
          },
          // Step 8: i = 6
          {
            codeLine: 5,
            narration: "i = 6: P[7] = P[6] + arr[6] = 23 + 2 = 25. Completed building P in O(n) time!",
            pointers: [{ name: 'i', index: 6, position: 'top', color: 'accent' }],
            highlights: [6],
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [7],
                pointers: [{ name: 'i+1', index: 7, color: 'accent' }]
              }
            },
            vars: [
              ["i", 6],
              ["arr[6]", 2],
              ["P[6]", 23],
              ["P[7]", 25]
            ]
          },
          // Step 9: ready
          {
            codeLine: 6,
            narration: "Now P is ready. Any range sum query [l..r] can be computed in O(1) time using: P[r + 1] - P[l].",
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [0, 1, 2, 3, 4, 5, 6, 7]
              }
            },
            best: {
              label: "P array ready in O(N) time"
            },
            vars: [
              ["P", "[0, 3, 4, 8, 9, 14, 23, 25]"],
              ["query formula", "P[r+1] - P[l]"]
            ]
          },
          // Step 10: rangeSum(1, 4)
          {
            codeLine: 8,
            narration: "Query rangeSum(l = 1, r = 4): arr[1..4] = [1, 4, 1, 5]. By formula: P[4+1] - P[1] = P[5] - P[1] = 14 - 3 = 11. (1 + 4 + 1 + 5 = 11).",
            highlights: [1, 2, 3, 4],
            customVisual: {
              brackets: [
                { start: 1, end: 4, label: "SUM = 11", color: "accent" }
              ],
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [1, 5],
                pointers: [
                  { name: "P[l=1]", index: 1, color: "accent" },
                  { name: "P[r+1=5]", index: 5, color: "green" }
                ]
              }
            },
            best: {
              label: "rangeSum(1, 4) = 14 - 3 = 11"
            },
            vars: [
              ["query", "[1, 4]"],
              ["P[5]", 14],
              ["P[1]", 3],
              ["result", 11]
            ]
          },
          // Step 11: rangeSum(0, 2)
          {
            codeLine: 8,
            narration: "Query rangeSum(l = 0, r = 2): arr[0..2] = [3, 1, 4]. Formula: P[2+1] - P[0] = P[3] - P[0] = 8 - 0 = 8. Notice how P[0] = 0 makes index 0 queries effortless without boundary checks!",
            highlights: [0, 1, 2],
            customVisual: {
              brackets: [
                { start: 0, end: 2, label: "SUM = 8", color: "green" }
              ],
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [0, 3],
                pointers: [
                  { name: "P[l=0]", index: 0, color: "accent" },
                  { name: "P[r+1=3]", index: 3, color: "green" }
                ]
              }
            },
            best: {
              label: "rangeSum(0, 2) = 8 - 0 = 8"
            },
            vars: [
              ["query", "[0, 2]"],
              ["P[3]", 8],
              ["P[0]", 0],
              ["result", 8]
            ]
          },
          // Step 12: rangeSum(2, 6)
          {
            codeLine: 8,
            narration: "Query rangeSum(l = 2, r = 6): arr[2..6] = [4, 1, 5, 9, 2]. Formula: P[6+1] - P[2] = P[7] - P[2] = 25 - 4 = 21. Total sum computed in O(1) time!",
            highlights: [2, 3, 4, 5, 6],
            customVisual: {
              brackets: [
                { start: 2, end: 6, label: "SUM = 21", color: "amber" }
              ],
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [2, 7],
                pointers: [
                  { name: "P[l=2]", index: 2, color: "accent" },
                  { name: "P[r+1=7]", index: 7, color: "green" }
                ]
              }
            },
            best: {
              label: "rangeSum(2, 6) = 25 - 4 = 21"
            },
            vars: [
              ["query", "[2, 6]"],
              ["P[7]", 25],
              ["P[2]", 4],
              ["result", 21]
            ]
          },
          // Step 13: Summary
          {
            codeLine: 8,
            narration: "Prefix sum summary: Precompute P in O(n) time and O(n) space. Query any arbitrary subarray [l..r] in O(1) time. The foundational pattern for range queries and subarray problems.",
            customVisual: {
              secondaryArray: {
                label: "PREFIX P (P[0] = 0)",
                array: [0, 3, 4, 8, 9, 14, 23, 25],
                highlights: [0, 1, 2, 3, 4, 5, 6, 7]
              }
            },
            best: {
              label: "Build: O(N) · Range Sum: O(1)"
            },
            vars: [
              ["build time", "O(N)"],
              ["query time", "O(1)"],
              ["space", "O(N)"]
            ]
          }
        ]
      }
    ]
  },

  // 2. Count Vowels in Substrings (LeetCode #2559 style / Prefix Indicator)
  {
    id: 'count-vowels-in-substrings',
    patternId: 'prefix-sum',
    title: 'Count Vowels in Substrings',
    subtitle: 'Prefix-sum a 0/1 indicator',
    kind: 'problem',
    leetcode: {
      id: 2559,
      slug: 'count-vowel-strings-in-ranges',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Microsoft', 'Bloomberg'],
    statement: "Given a string, precompute prefix counts of vowels so that the number of vowels in any substring range can be answered in constant time per query.",
    visualType: 'array',
    initialInput: ['l', 'e', 'e', 't', 'c', 'o', 'd', 'e'],
    approaches: [
      {
        label: 'Brute force · scan each query',
        complexity: {
          time: 'O(n · q)',
          space: 'O(1)'
        },
        pseudocode: [
          "given s, queries",
          "for each query (l, r):",
          "  count = 0",
          "  for k in l..r: if s[k] is vowel: count++",
          "  answer the query with count"
        ],
        starterCode: {
          javascript: `function vowelStrings(s, queries) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  return queries.map(([l, r]) => {\n    let count = 0;\n    for (let k = l; k <= r; k++) {\n      if (vowels.has(s[k])) count++;\n    }\n    return count;\n  });\n}`,
          python: `def vowel_strings(s: str, queries: list[list[int]]) -> list[int]:\n    vowels = set('aeiou')\n    res = []\n    for l, r in queries:\n        count = sum(1 for k in range(l, r + 1) if s[k] in vowels)\n        res.append(count)\n    return res`
        },
        solutionCode: {
          javascript: `function vowelStrings(s, queries) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  return queries.map(([l, r]) => {\n    let count = 0;\n    for (let k = l; k <= r; k++) {\n      if (vowels.has(s[k])) count++;\n    }\n    return count;\n  });\n}`,
          python: `def vowel_strings(s: str, queries: list[list[int]]) -> list[int]:\n    vowels = set('aeiou')\n    res = []\n    for l, r in queries:\n        count = sum(1 for k in range(l, r + 1) if s[k] in vowels)\n        res.append(count)\n    return res`
        },
        testCases: [
          {
            input: ["leetcode", [[1, 4], [0, 2], [2, 6], [5, 7]]],
            expected: [2, 2, 2, 2],
            description: "Count vowels in ranges [1,4], [0,2], [2,6], [5,7]"
          }
        ],
        steps: [
          // Step 1: Init
          {
            codeLine: 1,
            narration: "Given string s = \"leetcode\" of length n = 8 and 4 range queries. Brute force iterates through every character in each query range.",
            vars: [
              ["s", "\"leetcode\""],
              ["queries", "[[1,4], [0,2], [2,6], [5,7]]"]
            ]
          },
          // Step 2: Query 1 start [1, 4]
          {
            codeLine: 3,
            narration: "Query 1: s[1..4] = \"eetc\". Scan all 4 characters -> 2 vowels. Each query costs O(range length).",
            highlights: [1, 2, 3, 4],
            customVisual: {
              brackets: [
                { start: 1, end: 4, label: "2 VOWELS", color: "amber" }
              ]
            },
            vars: [
              ["query", "[1, 4]"],
              ["vowels", 2]
            ]
          },
          // Step 3: Query 1 k = 1 ('e')
          {
            codeLine: 4,
            narration: "k = 1: s[1] = 'e' is a vowel. Count = 1.",
            pointers: [{ name: 'k', index: 1, position: 'top', color: 'green' }],
            highlights: [1],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "SCANNING [1..4]", color: "amber" }]
            },
            vars: [["query", "[1, 4]"], ["char", "'e'"], ["isVowel", true], ["count", 1]]
          },
          // Step 4: Query 1 k = 2 ('e')
          {
            codeLine: 4,
            narration: "k = 2: s[2] = 'e' is a vowel. Count = 2.",
            pointers: [{ name: 'k', index: 2, position: 'top', color: 'green' }],
            highlights: [1, 2],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "SCANNING [1..4]", color: "amber" }]
            },
            vars: [["query", "[1, 4]"], ["char", "'e'"], ["isVowel", true], ["count", 2]]
          },
          // Step 5: Query 1 k = 3 ('t')
          {
            codeLine: 4,
            narration: "k = 3: s[3] = 't' is not a vowel. Count remains 2.",
            pointers: [{ name: 'k', index: 3, position: 'top', color: 'accent' }],
            highlights: [1, 2],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "SCANNING [1..4]", color: "amber" }]
            },
            vars: [["query", "[1, 4]"], ["char", "'t'"], ["isVowel", false], ["count", 2]]
          },
          // Step 6: Query 1 k = 4 ('c')
          {
            codeLine: 4,
            narration: "k = 4: s[4] = 'c' is not a vowel. Count remains 2.",
            pointers: [{ name: 'k', index: 4, position: 'top', color: 'accent' }],
            highlights: [1, 2],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "SCANNING [1..4]", color: "amber" }]
            },
            vars: [["query", "[1, 4]"], ["char", "'c'"], ["isVowel", false], ["count", 2]]
          },
          // Step 7: Query 1 done
          {
            codeLine: 5,
            narration: "Query 1 [1, 4] finished -> answer is 2. Scanned 4 characters.",
            highlights: [1, 2, 3, 4],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "2 VOWELS FOUND", color: "green" }]
            },
            best: { label: "Query [1, 4] = 2" },
            vars: [["query", "[1, 4]"], ["answer", 2], ["answers", "[2]"]]
          },
          // Step 8: Query 2 start [0, 2]
          {
            codeLine: 3,
            narration: "Query 2: s[0..2] = \"lee\". Reset count = 0. Scan indices 0 through 2.",
            highlights: [0, 1, 2],
            customVisual: {
              brackets: [{ start: 0, end: 2, label: "SCANNING [0..2]", color: "amber" }]
            },
            vars: [["query", "[0, 2]"], ["count", 0]]
          },
          // Step 9: Query 2 k = 0, 1, 2
          {
            codeLine: 4,
            narration: "Scan s[0]='l' (no), s[1]='e' (+1), s[2]='e' (+1) -> Count = 2 vowels.",
            pointers: [{ name: 'k', index: 2, position: 'top', color: 'green' }],
            highlights: [1, 2],
            customVisual: {
              brackets: [{ start: 0, end: 2, label: "2 VOWELS", color: "green" }]
            },
            vars: [["query", "[0, 2]"], ["count", 2]]
          },
          // Step 10: Query 2 done
          {
            codeLine: 5,
            narration: "Query 2 [0, 2] finished -> answer is 2. Scanned 3 characters.",
            highlights: [0, 1, 2],
            customVisual: {
              brackets: [{ start: 0, end: 2, label: "2 VOWELS FOUND", color: "green" }]
            },
            best: { label: "Query [0, 2] = 2" },
            vars: [["query", "[0, 2]"], ["answer", 2], ["answers", "[2, 2]"]]
          },
          // Step 11: Query 3 start [2, 6]
          {
            codeLine: 3,
            narration: "Query 3: s[2..6] = \"etcod\". Reset count = 0. Scan indices 2 through 6.",
            highlights: [2, 3, 4, 5, 6],
            customVisual: {
              brackets: [{ start: 2, end: 6, label: "SCANNING [2..6]", color: "amber" }]
            },
            vars: [["query", "[2, 6]"], ["count", 0]]
          },
          // Step 12: Query 3 scan
          {
            codeLine: 4,
            narration: "Scan s[2]='e' (+1), s[3]='t' (no), s[4]='c' (no), s[5]='o' (+1), s[6]='d' (no) -> Count = 2 vowels.",
            highlights: [2, 5],
            customVisual: {
              brackets: [{ start: 2, end: 6, label: "2 VOWELS", color: "green" }]
            },
            vars: [["query", "[2, 6]"], ["count", 2]]
          },
          // Step 13: Query 3 done
          {
            codeLine: 5,
            narration: "Query 3 [2, 6] finished -> answer is 2. Scanned 5 characters.",
            highlights: [2, 3, 4, 5, 6],
            customVisual: {
              brackets: [{ start: 2, end: 6, label: "2 VOWELS FOUND", color: "green" }]
            },
            best: { label: "Query [2, 6] = 2" },
            vars: [["query", "[2, 6]"], ["answer", 2], ["answers", "[2, 2, 2]"]]
          },
          // Step 14: Query 4 start [5, 7]
          {
            codeLine: 3,
            narration: "Query 4: s[5..7] = \"ode\". Reset count = 0. Scan indices 5 through 7.",
            highlights: [5, 6, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "SCANNING [5..7]", color: "amber" }]
            },
            vars: [["query", "[5, 7]"], ["count", 0]]
          },
          // Step 15: Query 4 scan
          {
            codeLine: 4,
            narration: "Scan s[5]='o' (+1), s[6]='d' (no), s[7]='e' (+1) -> Count = 2 vowels.",
            highlights: [5, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "2 VOWELS", color: "green" }]
            },
            vars: [["query", "[5, 7]"], ["count", 2]]
          },
          // Step 16: Query 4 done
          {
            codeLine: 5,
            narration: "Query 4 [5, 7] finished -> answer is 2. Scanned 3 characters.",
            highlights: [5, 6, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "2 VOWELS FOUND", color: "green" }]
            },
            best: { label: "Query [5, 7] = 2" },
            vars: [["query", "[5, 7]"], ["answer", 2], ["answers", "[2, 2, 2, 2]"]]
          },
          // Step 17: All queries answered
          {
            codeLine: 5,
            narration: "All 4 queries answered: [2, 2, 2, 2]. Notice that we repeatedly re-scanned the same overlapping characters across queries!",
            best: { label: "Results: [2, 2, 2, 2]" },
            vars: [["results", "[2, 2, 2, 2]"], ["total scans", 15]]
          },
          // Step 18: Complexity drawback
          {
            codeLine: 5,
            narration: "Brute force time complexity is O(n · q). If string length n = 100,000 and queries q = 100,000, this takes 10^10 operations (Time Limit Exceeded). We can optimize to O(n + q) using Prefix Sum!",
            best: { label: "Time: O(N · Q) — TLE on large Q" },
            vars: [["time", "O(n · q)"], ["space", "O(1)"]]
          }
        ]
      },
      {
        label: 'Optimized · prefix vowel counts',
        complexity: {
          time: 'O(n + q)',
          space: 'O(n)'
        },
        pseudocode: [
          "given s, queries",
          "P = array of size n+1, P[0] = 0",
          "for i in 0..n-1:",
          "  isVowel = s[i] in 'aeiou' ? 1 : 0",
          "  P[i+1] = P[i] + isVowel",
          "for each query (l, r):",
          "  count = P[r+1] - P[l]    // O(1)",
          "  answer query with count"
        ],
        starterCode: {
          javascript: `function vowelStrings(s, queries) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  const n = s.length;\n  const P = new Array(n + 1).fill(0);\n  for (let i = 0; i < n; i++) {\n    P[i + 1] = P[i] + (vowels.has(s[i]) ? 1 : 0);\n  }\n  return queries.map(([l, r]) => P[r + 1] - P[l]);\n}`,
          python: `def vowel_strings(s: str, queries: list[list[int]]) -> list[int]:\n    vowels = set('aeiou')\n    n = len(s)\n    P = [0] * (n + 1)\n    for i in range(n):\n        P[i + 1] = P[i] + (1 if s[i] in vowels else 0)\n    return [P[r + 1] - P[l] for l, r in queries]`
        },
        solutionCode: {
          javascript: `function vowelStrings(s, queries) {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  const n = s.length;\n  const P = new Array(n + 1).fill(0);\n  for (let i = 0; i < n; i++) {\n    P[i + 1] = P[i] + (vowels.has(s[i]) ? 1 : 0);\n  }\n  return queries.map(([l, r]) => P[r + 1] - P[l]);\n}`,
          python: `def vowel_strings(s: str, queries: list[list[int]]) -> list[int]:\n    vowels = set('aeiou')\n    n = len(s)\n    P = [0] * (n + 1)\n    for i in range(n):\n        P[i + 1] = P[i] + (1 if s[i] in vowels else 0)\n    return [P[r + 1] - P[l] for l, r in queries]`
        },
        testCases: [
          {
            input: ["leetcode", [[1, 4], [0, 2], [2, 6], [5, 7]]],
            expected: [2, 2, 2, 2],
            description: "Prefix count answers all queries in O(1) each"
          }
        ],
        steps: [
          // Step 1: Concept
          {
            codeLine: 2,
            narration: "Map vowels to 1 and consonants to 0: \"leetcode\" -> [0, 1, 1, 0, 0, 1, 0, 1]. Compute running prefix sum P where P[i] = total vowels in s[0..i-1].",
            customVisual: {
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, '·', '·', '·', '·', '·', '·', '·', '·'],
                highlights: [0]
              }
            },
            vars: [["s", "\"leetcode\""], ["P[0]", 0]]
          },
          // Step 2: Build P array
          {
            codeLine: 5,
            narration: "Build prefix array in a single O(n) pass: P = [0, 0, 1, 2, 2, 2, 3, 3, 4]. Each element stores total vowels up to that index.",
            customVisual: {
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              }
            },
            best: { label: "P array built in O(N)" },
            vars: [["P", "[0, 0, 1, 2, 2, 2, 3, 3, 4]"], ["total vowels in s", 4]]
          },
          // Step 3: Query 1 [1, 4]
          {
            codeLine: 7,
            narration: "Query 1: [1, 4]. Formula: P[4+1] - P[1] = P[5] - P[1] = 2 - 0 = 2 vowels. Instant O(1) answer without scanning!",
            highlights: [1, 2, 3, 4],
            customVisual: {
              brackets: [{ start: 1, end: 4, label: "2 VOWELS (O(1))", color: "accent" }],
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [1, 5],
                pointers: [
                  { name: "P[1]", index: 1, color: "accent" },
                  { name: "P[5]", index: 5, color: "green" }
                ]
              }
            },
            best: { label: "P[5] - P[1] = 2 - 0 = 2" },
            vars: [["query", "[1, 4]"], ["P[5]", 2], ["P[1]", 0], ["count", 2]]
          },
          // Step 4: Query 2 [0, 2]
          {
            codeLine: 7,
            narration: "Query 2: [0, 2]. Formula: P[2+1] - P[0] = P[3] - P[0] = 2 - 0 = 2 vowels.",
            highlights: [0, 1, 2],
            customVisual: {
              brackets: [{ start: 0, end: 2, label: "2 VOWELS (O(1))", color: "green" }],
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [0, 3],
                pointers: [
                  { name: "P[0]", index: 0, color: "accent" },
                  { name: "P[3]", index: 3, color: "green" }
                ]
              }
            },
            best: { label: "P[3] - P[0] = 2 - 0 = 2" },
            vars: [["query", "[0, 2]"], ["P[3]", 2], ["P[0]", 0], ["count", 2]]
          },
          // Step 5: Query 3 [2, 6]
          {
            codeLine: 7,
            narration: "Query 3: [2, 6]. Formula: P[6+1] - P[2] = P[7] - P[2] = 3 - 1 = 2 vowels.",
            highlights: [2, 3, 4, 5, 6],
            customVisual: {
              brackets: [{ start: 2, end: 6, label: "2 VOWELS (O(1))", color: "amber" }],
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [2, 7],
                pointers: [
                  { name: "P[2]", index: 2, color: "accent" },
                  { name: "P[7]", index: 7, color: "green" }
                ]
              }
            },
            best: { label: "P[7] - P[2] = 3 - 1 = 2" },
            vars: [["query", "[2, 6]"], ["P[7]", 3], ["P[2]", 1], ["count", 2]]
          },
          // Step 6: Query 4 [5, 7]
          {
            codeLine: 7,
            narration: "Query 4: [5, 7]. Formula: P[7+1] - P[5] = P[8] - P[5] = 4 - 2 = 2 vowels.",
            highlights: [5, 6, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "2 VOWELS (O(1))", color: "purple" }],
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [5, 8],
                pointers: [
                  { name: "P[5]", index: 5, color: "accent" },
                  { name: "P[8]", index: 8, color: "green" }
                ]
              }
            },
            best: { label: "P[8] - P[5] = 4 - 2 = 2" },
            vars: [["query", "[5, 7]"], ["P[8]", 4], ["P[5]", 2], ["count", 2]]
          },
          // Step 7: Completed
          {
            codeLine: 8,
            narration: "All queries answered in O(1) each! Total runtime reduced from O(n · q) to O(n + q). Prefix-sum turned repeated character scanning into a single array subtraction.",
            customVisual: {
              secondaryArray: {
                label: "PREFIX VOWEL COUNT P (P[0] = 0)",
                array: [0, 0, 1, 2, 2, 2, 3, 3, 4],
                highlights: [0, 1, 2, 3, 4, 5, 6, 7, 8]
              }
            },
            best: { label: "Optimal O(N + Q) Runtime" },
            vars: [["answers", "[2, 2, 2, 2]"], ["build time", "O(n)"], ["query time", "O(1) each"]]
          }
        ]
      }
    ]
  },

  // 3. Subarray Sum Equals K (LeetCode #560 - Medium)
  {
    id: 'subarray-sum-equals-k',
    patternId: 'prefix-sum',
    title: 'Subarray Sum Equals K',
    subtitle: 'Running prefix + a count hashmap',
    kind: 'problem',
    leetcode: {
      id: 560,
      slug: 'subarray-sum-equals-k',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Meta', 'Google'],
    statement: "Given an integer array and an integer k, return the total number of contiguous subarrays whose elements sum to exactly k.",
    visualType: 'array',
    initialInput: [3, 4, 7, 2, -3, 1, 4, 2],
    approaches: [
      {
        label: 'Brute force · every subarray',
        complexity: {
          time: 'O(n²)',
          space: 'O(1)'
        },
        pseudocode: [
          "count = 0",
          "for i in 0..n-1:",
          "  sum = 0",
          "  for j in i..n-1:",
          "    sum += arr[j]",
          "    if sum == k: count++",
          "return count"
        ],
        starterCode: {
          javascript: `function subarraySum(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum === k) count++;\n    }\n  }\n  return count;\n}`,
          python: `def subarray_sum(nums: list[int], k: int) -> int:\n    count = 0\n    for i in range(len(nums)):\n        curr_sum = 0\n        for j in range(i, len(nums)):\n            curr_sum += nums[j]\n            if curr_sum == k:\n                count += 1\n    return count`
        },
        solutionCode: {
          javascript: `function subarraySum(nums, k) {\n  let count = 0;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum === k) count++;\n    }\n  }\n  return count;\n}`,
          python: `def subarray_sum(nums: list[int], k: int) -> int:\n    count = 0\n    for i in range(len(nums)):\n        curr_sum = 0\n        for j in range(i, len(nums)):\n            curr_sum += nums[j]\n            if curr_sum == k:\n                count += 1\n    return count`
        },
        testCases: [
          {
            input: [[3, 4, 7, 2, -3, 1, 4, 2], 7],
            expected: 4,
            description: "Subarrays summing to 7 in [3, 4, 7, 2, -3, 1, 4, 2]"
          },
          {
            input: [[1, 1, 1], 2],
            expected: 2,
            description: "Two subarrays summing to 2 in [1, 1, 1]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Brute force: check all n(n+1)/2 = 36 subarrays [i..j] and compute their sums.",
            vars: [["arr", "[3, 4, 7, 2, -3, 1, 4, 2]"], ["k", 7], ["total subarrays", 36]]
          },
          {
            codeLine: 4,
            narration: "i = 0, j = 0: arr[0..0] = [3], sum = 3 (≠ 7).",
            pointers: [{ name: 'i', index: 0, position: 'top', color: 'accent' }, { name: 'j', index: 0, position: 'bottom', color: 'accent' }],
            highlights: [0],
            vars: [["i", 0], ["j", 0], ["sum", 3], ["count", 0]]
          },
          {
            codeLine: 6,
            narration: "i = 0, j = 1: arr[0..1] = [3, 4], sum = 3 + 4 = 7 (== k). Match #1! Count = 1.",
            pointers: [{ name: 'i', index: 0, position: 'top', color: 'green' }, { name: 'j', index: 1, position: 'bottom', color: 'green' }],
            highlights: [0, 1],
            customVisual: {
              brackets: [{ start: 0, end: 1, label: "SUM = 7 (MATCH #1)", color: "green" }]
            },
            best: { label: "Subarray [3, 4] sums to 7" },
            vars: [["i", 0], ["j", 1], ["sum", 7], ["count", 1]]
          },
          {
            codeLine: 4,
            narration: "i = 0, j = 2..7: sum continues growing -> [3, 4, 7] = 14, [3..3] = 16, [3..4] = 13, [3..5] = 14, [3..6] = 18, [3..7] = 20.",
            pointers: [{ name: 'i', index: 0, position: 'top', color: 'accent' }, { name: 'j', index: 7, position: 'bottom', color: 'accent' }],
            highlights: [0, 1, 2, 3, 4, 5, 6, 7],
            vars: [["i", 0], ["count", 1]]
          },
          {
            codeLine: 4,
            narration: "i = 1: test subarrays starting at index 1 -> [4]=4, [4,7]=11, [4..3]=13, [4..4]=10, [4..5]=11, [4..6]=15, [4..7]=17. None equal 7.",
            pointers: [{ name: 'i', index: 1, position: 'top', color: 'accent' }],
            highlights: [1],
            vars: [["i", 1], ["count", 1]]
          },
          {
            codeLine: 6,
            narration: "i = 2, j = 2: arr[2..2] = [7], sum = 7 (== k). Match #2! Count = 2.",
            pointers: [{ name: 'i', index: 2, position: 'top', color: 'green' }, { name: 'j', index: 2, position: 'bottom', color: 'green' }],
            highlights: [2],
            customVisual: {
              brackets: [{ start: 2, end: 2, label: "SUM = 7 (MATCH #2)", color: "green" }]
            },
            best: { label: "Subarray [7] sums to 7" },
            vars: [["i", 2], ["j", 2], ["sum", 7], ["count", 2]]
          },
          {
            codeLine: 4,
            narration: "i = 2, j = 3, 4: arr[2..3] = [7, 2] = 9; arr[2..4] = [7, 2, -3] = 6.",
            pointers: [{ name: 'i', index: 2, position: 'top', color: 'accent' }, { name: 'j', index: 4, position: 'bottom', color: 'accent' }],
            highlights: [2, 3, 4],
            vars: [["i", 2], ["j", 4], ["sum", 6], ["count", 2]]
          },
          {
            codeLine: 6,
            narration: "i = 2, j = 5: arr[2..5] = [7, 2, -3, 1], sum = 6 + 1 = 7 (== k). Match #3! Count = 3.",
            pointers: [{ name: 'i', index: 2, position: 'top', color: 'green' }, { name: 'j', index: 5, position: 'bottom', color: 'green' }],
            highlights: [2, 3, 4, 5],
            customVisual: {
              brackets: [{ start: 2, end: 5, label: "SUM = 7 (MATCH #3)", color: "green" }]
            },
            best: { label: "Subarray [7, 2, -3, 1] sums to 7" },
            vars: [["i", 2], ["j", 5], ["sum", 7], ["count", 3]]
          },
          {
            codeLine: 4,
            narration: "i = 3, 4: subarrays starting at 3 and 4 do not sum to 7.",
            pointers: [{ name: 'i', index: 3, position: 'top', color: 'accent' }],
            highlights: [3, 4],
            vars: [["i", 3], ["count", 3]]
          },
          {
            codeLine: 6,
            narration: "i = 5, j = 7: arr[5..7] = [1, 4, 2], sum = 1 + 4 + 2 = 7 (== k). Match #4! Count = 4.",
            pointers: [{ name: 'i', index: 5, position: 'top', color: 'green' }, { name: 'j', index: 7, position: 'bottom', color: 'green' }],
            highlights: [5, 6, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "SUM = 7 (MATCH #4)", color: "green" }]
            },
            best: { label: "Subarray [1, 4, 2] sums to 7" },
            vars: [["i", 5], ["j", 7], ["sum", 7], ["count", 4]]
          },
          {
            codeLine: 7,
            narration: "Completed all 36 checks. Total subarrays summing to 7 = 4: [3, 4], [7], [7, 2, -3, 1], [1, 4, 2]. Runtime is O(n²).",
            best: { label: "Total = 4 (O(n²) Time)" },
            vars: [["count", 4], ["time", "O(n²)"], ["space", "O(1)"]]
          }
        ]
      },
      {
        label: 'Optimized · prefix + hashmap',
        complexity: {
          time: 'O(n)',
          space: 'O(n)'
        },
        pseudocode: [
          "given arr, k",
          "seen = {0: 1}; cur = 0; count = 0",
          "for x in arr:",
          "  cur += x",
          "  count += seen.get(cur - k, 0)",
          "  seen[cur] += 1",
          "return count"
        ],
        starterCode: {
          javascript: `function subarraySum(nums, k) {\n  let count = 0;\n  let cur = 0;\n  const seen = new Map();\n  seen.set(0, 1);\n\n  for (const x of nums) {\n    cur += x;\n    if (seen.has(cur - k)) {\n      count += seen.get(cur - k);\n    }\n    seen.set(cur, (seen.get(cur) || 0) + 1);\n  }\n\n  return count;\n}`,
          python: `def subarray_sum(nums: list[int], k: int) -> int:\n    count = 0\n    cur = 0\n    seen = {0: 1}\n\n    for x in nums:\n        cur += x\n        if cur - k in seen:\n            count += seen[cur - k]\n        seen[cur] = seen.get(cur, 0) + 1\n\n    return count`
        },
        solutionCode: {
          javascript: `function subarraySum(nums, k) {\n  let count = 0;\n  let cur = 0;\n  const seen = new Map();\n  seen.set(0, 1);\n\n  for (const x of nums) {\n    cur += x;\n    if (seen.has(cur - k)) {\n      count += seen.get(cur - k);\n    }\n    seen.set(cur, (seen.get(cur) || 0) + 1);\n  }\n\n  return count;\n}`,
          python: `def subarray_sum(nums: list[int], k: int) -> int:\n    count = 0\n    cur = 0\n    seen = {0: 1}\n\n    for x in nums:\n        cur += x\n        if cur - k in seen:\n            count += seen[cur - k]\n        seen[cur] = seen.get(cur, 0) + 1\n\n    return count`
        },
        testCases: [
          {
            input: [[3, 4, 7, 2, -3, 1, 4, 2], 7],
            expected: 4,
            description: "Prefix sum + map finds 4 subarrays summing to 7 in O(n)"
          },
          {
            input: [[1, 1, 1], 2],
            expected: 2,
            description: "Two subarrays summing to 2 in [1, 1, 1]"
          }
        ],
        steps: [
          // Step 1: Init
          {
            codeLine: 2,
            narration: "Initialize seen = {0: 1}, cur = 0, count = 0. The base entry {0: 1} represents the empty prefix sum before reading any element.",
            vars: [
              ["cur", 0],
              ["map", "{0: 1}"],
              ["count", 0]
            ]
          },
          // Element 0: x = 3
          // Step 2: cur += 3 -> 3
          {
            codeLine: 4,
            narration: "Index 0: x = 3. Add to running sum: cur = 0 + 3 = 3.",
            pointers: [{ name: 'x', index: 0, position: 'top', color: 'accent' }],
            highlights: [0],
            vars: [
              ["x", 3],
              ["cur", 3],
              ["map", "{0: 1}"],
              ["count", 0]
            ]
          },
          // Step 3: check cur - k = 3 - 7 = -4
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 3 - 7 = -4. Not in map -> count += 0.",
            pointers: [{ name: 'x', index: 0, position: 'top', color: 'accent' }],
            highlights: [0],
            vars: [
              ["cur", 3],
              ["need (cur - k)", -4],
              ["seen.get(-4)", 0],
              ["map", "{0: 1}"],
              ["count", 0]
            ]
          },
          // Step 4: record seen[3] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[3] -> 1. A later index can now use THIS prefix as its \"start - 1\".",
            pointers: [{ name: 'x', index: 0, position: 'top', color: 'accent' }],
            highlights: [0],
            vars: [
              ["cur", 3],
              ["map", "{0: 1, 3: 1}"],
              ["count", 0]
            ]
          },

          // Element 1: x = 4
          // Step 5: cur += 4 -> 7
          {
            codeLine: 4,
            narration: "Index 1: x = 4. Add to running sum: cur = 3 + 4 = 7.",
            pointers: [{ name: 'x', index: 1, position: 'top', color: 'accent' }],
            highlights: [1],
            vars: [
              ["x", 4],
              ["cur", 7],
              ["map", "{0: 1, 3: 1}"],
              ["count", 0]
            ]
          },
          // Step 6: check cur - k = 7 - 7 = 0 -> MATCH!
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 7 - 7 = 0. Found seen[0] = 1! Subarray arr[0..1] = [3, 4] sums to 7! count becomes 0 + 1 = 1.",
            pointers: [{ name: 'x', index: 1, position: 'top', color: 'green' }],
            highlights: [0, 1],
            customVisual: {
              brackets: [{ start: 0, end: 1, label: "SUBARRAY SUM = 7 (MATCH #1)", color: "green" }]
            },
            best: { label: "Subarray [3, 4] found (sum = 7)" },
            vars: [
              ["cur", 7],
              ["need (cur - k)", 0],
              ["seen.get(0)", 1],
              ["map", "{0: 1, 3: 1}"],
              ["count", 1]
            ]
          },
          // Step 7: record seen[7] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[7] -> 1.",
            pointers: [{ name: 'x', index: 1, position: 'top', color: 'accent' }],
            highlights: [1],
            vars: [
              ["cur", 7],
              ["map", "{0: 1, 3: 1, 7: 1}"],
              ["count", 1]
            ]
          },

          // Element 2: x = 7
          // Step 8: cur += 7 -> 14
          {
            codeLine: 4,
            narration: "Index 2: x = 7. Add to running sum: cur = 7 + 7 = 14.",
            pointers: [{ name: 'x', index: 2, position: 'top', color: 'accent' }],
            highlights: [2],
            vars: [
              ["x", 7],
              ["cur", 14],
              ["map", "{0: 1, 3: 1, 7: 1}"],
              ["count", 1]
            ]
          },
          // Step 9: check cur - k = 14 - 7 = 7 -> MATCH!
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 14 - 7 = 7. Found seen[7] = 1! Subarray arr[2..2] = [7] sums to 7! count becomes 1 + 1 = 2.",
            pointers: [{ name: 'x', index: 2, position: 'top', color: 'green' }],
            highlights: [2],
            customVisual: {
              brackets: [{ start: 2, end: 2, label: "SUBARRAY SUM = 7 (MATCH #2)", color: "green" }]
            },
            best: { label: "Subarray [7] found (sum = 7)" },
            vars: [
              ["cur", 14],
              ["need (cur - k)", 7],
              ["seen.get(7)", 1],
              ["map", "{0: 1, 3: 1, 7: 1}"],
              ["count", 2]
            ]
          },
          // Step 10: record seen[14] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[14] -> 1.",
            pointers: [{ name: 'x', index: 2, position: 'top', color: 'accent' }],
            highlights: [2],
            vars: [
              ["cur", 14],
              ["map", "{0: 1, 3: 1, 7: 1, 14: 1}"],
              ["count", 2]
            ]
          },

          // Element 3: x = 2
          // Step 11: cur += 2 -> 16
          {
            codeLine: 4,
            narration: "Index 3: x = 2. Add to running sum: cur = 14 + 2 = 16.",
            pointers: [{ name: 'x', index: 3, position: 'top', color: 'accent' }],
            highlights: [3],
            vars: [
              ["x", 2],
              ["cur", 16],
              ["map", "{0: 1, 3: 1, 7: 1, 14: 1}"],
              ["count", 2]
            ]
          },
          // Step 12: check cur - k = 16 - 7 = 9
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 16 - 7 = 9. Not in map -> count remains 2.",
            pointers: [{ name: 'x', index: 3, position: 'top', color: 'accent' }],
            highlights: [3],
            vars: [
              ["cur", 16],
              ["need (cur - k)", 9],
              ["seen.get(9)", 0],
              ["map", "{0: 1, 3: 1, 7: 1, 14: 1}"],
              ["count", 2]
            ]
          },
          // Step 13: record seen[16] += 1 (MATCHES SCREENSHOT STEP 49)
          {
            codeLine: 6,
            narration: "Record the current prefix: map[16] -> 1. A later index can now use THIS prefix as its \"start - 1\".",
            pointers: [{ name: 'x', index: 3, position: 'top', color: 'accent' }],
            highlights: [3],
            vars: [
              ["cur", 16],
              ["map", "{0:1, 3:1, 7:1, 14:1, 16:1}"],
              ["count", 2]
            ]
          },

          // Element 4: x = -3
          // Step 14: cur += (-3) -> 13
          {
            codeLine: 4,
            narration: "Index 4: x = -3. Add to running sum: cur = 16 + (-3) = 13.",
            pointers: [{ name: 'x', index: 4, position: 'top', color: 'accent' }],
            highlights: [4],
            vars: [
              ["x", -3],
              ["cur", 13],
              ["map", "{0: 1, 3: 1, 7: 1, 14: 1, 16: 1}"],
              ["count", 2]
            ]
          },
          // Step 15: check cur - k = 13 - 7 = 6
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 13 - 7 = 6. Not in map -> count remains 2.",
            pointers: [{ name: 'x', index: 4, position: 'top', color: 'accent' }],
            highlights: [4],
            vars: [
              ["cur", 13],
              ["need (cur - k)", 6],
              ["seen.get(6)", 0],
              ["map", "{0: 1, 3: 1, 7: 1, 14: 1, 16: 1}"],
              ["count", 2]
            ]
          },
          // Step 16: record seen[13] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[13] -> 1.",
            pointers: [{ name: 'x', index: 4, position: 'top', color: 'accent' }],
            highlights: [4],
            vars: [
              ["cur", 13],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 1, 16: 1}"],
              ["count", 2]
            ]
          },

          // Element 5: x = 1
          // Step 17: cur += 1 -> 14
          {
            codeLine: 4,
            narration: "Index 5: x = 1. Add to running sum: cur = 13 + 1 = 14.",
            pointers: [{ name: 'x', index: 5, position: 'top', color: 'accent' }],
            highlights: [5],
            vars: [
              ["x", 1],
              ["cur", 14],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 1, 16: 1}"],
              ["count", 2]
            ]
          },
          // Step 18: check cur - k = 14 - 7 = 7 -> MATCH!
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 14 - 7 = 7. Found seen[7] = 1! Subarray arr[2..5] = [7, 2, -3, 1] sums to 7! count becomes 2 + 1 = 3.",
            pointers: [{ name: 'x', index: 5, position: 'top', color: 'green' }],
            highlights: [2, 3, 4, 5],
            customVisual: {
              brackets: [{ start: 2, end: 5, label: "SUBARRAY SUM = 7 (MATCH #3)", color: "green" }]
            },
            best: { label: "Subarray [7, 2, -3, 1] sums to 7" },
            vars: [
              ["cur", 14],
              ["need (cur - k)", 7],
              ["seen.get(7)", 1],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 1, 16: 1}"],
              ["count", 3]
            ]
          },
          // Step 19: record seen[14] += 1 -> frequency becomes 2
          {
            codeLine: 6,
            narration: "Record the current prefix: map[14] -> 2. Prefix 14 has now appeared twice.",
            pointers: [{ name: 'x', index: 5, position: 'top', color: 'accent' }],
            highlights: [5],
            vars: [
              ["cur", 14],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1}"],
              ["count", 3]
            ]
          },

          // Element 6: x = 4
          // Step 20: cur += 4 -> 18
          {
            codeLine: 4,
            narration: "Index 6: x = 4. Add to running sum: cur = 14 + 4 = 18.",
            pointers: [{ name: 'x', index: 6, position: 'top', color: 'accent' }],
            highlights: [6],
            vars: [
              ["x", 4],
              ["cur", 18],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1}"],
              ["count", 3]
            ]
          },
          // Step 21: check cur - k = 18 - 7 = 11
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 18 - 7 = 11. Not in map -> count remains 3.",
            pointers: [{ name: 'x', index: 6, position: 'top', color: 'accent' }],
            highlights: [6],
            vars: [
              ["cur", 18],
              ["need (cur - k)", 11],
              ["seen.get(11)", 0],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1}"],
              ["count", 3]
            ]
          },
          // Step 22: record seen[18] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[18] -> 1.",
            pointers: [{ name: 'x', index: 6, position: 'top', color: 'accent' }],
            highlights: [6],
            vars: [
              ["cur", 18],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1, 18: 1}"],
              ["count", 3]
            ]
          },

          // Element 7: x = 2
          // Step 23: cur += 2 -> 20
          {
            codeLine: 4,
            narration: "Index 7: x = 2. Add to running sum: cur = 18 + 2 = 20.",
            pointers: [{ name: 'x', index: 7, position: 'top', color: 'accent' }],
            highlights: [7],
            vars: [
              ["x", 2],
              ["cur", 20],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1, 18: 1}"],
              ["count", 3]
            ]
          },
          // Step 24: check cur - k = 20 - 7 = 13 -> MATCH!
          {
            codeLine: 5,
            narration: "Check seen for (cur - k) = 20 - 7 = 13. Found seen[13] = 1! Subarray arr[5..7] = [1, 4, 2] sums to 7! count becomes 3 + 1 = 4.",
            pointers: [{ name: 'x', index: 7, position: 'top', color: 'green' }],
            highlights: [5, 6, 7],
            customVisual: {
              brackets: [{ start: 5, end: 7, label: "SUBARRAY SUM = 7 (MATCH #4)", color: "green" }]
            },
            best: { label: "Subarray [1, 4, 2] sums to 7" },
            vars: [
              ["cur", 20],
              ["need (cur - k)", 13],
              ["seen.get(13)", 1],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1, 18: 1}"],
              ["count", 4]
            ]
          },
          // Step 25: record seen[20] += 1
          {
            codeLine: 6,
            narration: "Record the current prefix: map[20] -> 1.",
            pointers: [{ name: 'x', index: 7, position: 'top', color: 'accent' }],
            highlights: [7],
            vars: [
              ["cur", 20],
              ["map", "{0: 1, 3: 1, 7: 1, 13: 1, 14: 2, 16: 1, 18: 1, 20: 1}"],
              ["count", 4]
            ]
          },

          // Step 26: Return result
          {
            codeLine: 7,
            narration: "Finished iterating. Total subarrays summing to k = 7 is 4: [3, 4], [7], [7, 2, -3, 1], and [1, 4, 2]. Computed in a single O(n) pass!",
            best: { label: "Total Subarrays = 4 (O(n) Time)" },
            vars: [
              ["total count", 4],
              ["time", "O(n)"],
              ["space", "O(n)"]
            ]
          }
        ]
      }
    ]
  }
];
