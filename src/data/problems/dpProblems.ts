import { Problem } from '../../types';

export const dpProblems: Problem[] = [
  {
    "id": "fundamentals",
    "patternId": "dynamic-programming",
    "title": "Fundamentals",
    "subtitle": "Overlapping subproblems · a table you fill once",
    "kind": "intro",
    "statement": "Dynamic Programming breaks complex problems into simpler subproblems, solving each subproblem just once and storing their solutions in a DP table to avoid exponential redundant work.",
    "visualType": "dp-grid",
    "initialInput": [
      0,
      1,
      1,
      2,
      3,
      5,
      8,
      13
    ],
    "approaches": [
      {
        "id": "dp-tabulation",
        "label": "Tabulation · bottom-up table filling",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "dp = array of size n",
          "dp[0] = 0; dp[1] = 1        // base cases",
          "for i in 2..n-1:",
          "    // each subproblem solved once, then reused",
          "    dp[i] = dp[i-1] + dp[i-2]",
          "return dp[n-1]"
        ],
        "starterCode": {
          "javascript": "function fibonacciDP(n) {\n  if (n <= 1) return n;\n  const dp = new Array(n + 1);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}",
          "python": "def fibonacciDP(n: int) -> int:\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]"
        },
        "solutionCode": {
          "javascript": "function fibonacciDP(n) {\n  if (n <= 1) return n;\n  const dp = new Array(n + 1);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}",
          "python": "def fibonacciDP(n: int) -> int:\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]"
        },
        "testCases": [
          {
            "input": [
              7
            ],
            "expected": 13,
            "description": "Fibonacci of 7 is 13"
          },
          {
            "input": [
              2
            ],
            "expected": 1,
            "description": "Fibonacci of 2 is 1"
          },
          {
            "input": [
              0
            ],
            "expected": 0,
            "description": "Fibonacci of 0 is 0"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Set base case dp[0] = 0. The 0th Fibonacci number is known directly without any recursive calls.",
            "customVisual": {
              "array": [
                0,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "dp[0]",
                0
              ],
              [
                "n",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Set base case dp[1] = 1. Subproblems of size 0 and 1 form our foundation.",
            "customVisual": {
              "array": [
                0,
                1,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "dp[0]",
                0
              ],
              [
                "dp[1]",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 2: dp[2] = dp[1] + dp[0] = 1 + 0 = 1. Reads two already-solved cells in O(1) time.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "dp[1]",
                1
              ],
              [
                "dp[0]",
                0
              ],
              [
                "dp[2]",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 3: dp[3] = dp[2] + dp[1] = 1 + 1 = 2. No recursion tree branch explosion; simple array lookup.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                "-",
                "-",
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "dp[2]",
                1
              ],
              [
                "dp[1]",
                1
              ],
              [
                "dp[3]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 4: dp[4] = dp[3] + dp[2] = 2 + 1 = 3.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                3,
                "-",
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "dp[3]",
                2
              ],
              [
                "dp[2]",
                1
              ],
              [
                "dp[4]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 5: dp[5] = dp[4] + dp[3] = 3 + 2 = 5.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                3,
                5,
                "-",
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "dp[4]",
                3
              ],
              [
                "dp[3]",
                2
              ],
              [
                "dp[5]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 6: dp[6] = dp[5] + dp[4] = 5 + 3 = 8.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                3,
                5,
                8,
                "-"
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              4,
              5,
              6
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "dp[5]",
                5
              ],
              [
                "dp[4]",
                3
              ],
              [
                "dp[6]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 7: dp[7] = dp[6] + dp[5] = 8 + 5 = 13. We reached target n=7.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                3,
                5,
                8,
                13
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              5,
              6,
              7
            ],
            "vars": [
              [
                "i",
                7
              ],
              [
                "dp[6]",
                8
              ],
              [
                "dp[5]",
                5
              ],
              [
                "dp[7]",
                13
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return dp[7] = 13. O(n) linear time, O(n) space table. Each overlapping subproblem computed exactly once!",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                3,
                5,
                8,
                13
              ],
              "title": "DP TABLE (FIBONACCI TABULATION)"
            },
            "highlights": [
              7
            ],
            "best": {
              "label": "Fibonacci(7) = 13"
            },
            "vars": [
              [
                "return",
                13
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "solving-a-question-with-dynamic-programming",
    "patternId": "dynamic-programming",
    "title": "Solving a Question with Dynamic Programming",
    "subtitle": "State → recurrence → base case → order → answer",
    "kind": "concept",
    "statement": "Every Dynamic Programming problem boils down to FIVE fundamental questions: (1) State: what does a cell dp[i] represent? (2) Recurrence: what choices transition between states? (3) Base Cases: where does recursion terminate? (4) Order: what sequence resolves dependencies? (5) Answer: where does the final solution live? We demonstrate this on House Robber.",
    "visualType": "dp-grid",
    "initialInput": [
      2,
      7,
      9,
      3,
      1
    ],
    "approaches": [
      {
        "id": "five-step-framework",
        "label": "The 5-step framework (House Robber)",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "def rob(nums):",
          "  # 1. state:    dp[i] = best loot using houses 0..i",
          "  # 2. recurrence: dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
          "  # 3. base cases:",
          "  dp[0] = nums[0]",
          "  dp[1] = max(nums[0], nums[1])",
          "  # 4. order: left to right",
          "  for i in 2..n-1:",
          "    # skip house i, or rob it + best two back",
          "    dp[i] = max(dp[i-1], dp[i-2] + nums[i])",
          "  # 5. answer lives in the last cell",
          "  return dp[n-1]"
        ],
        "starterCode": {
          "javascript": "function rob(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const dp = new Array(nums.length);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0], nums[1]);\n  for (let i = 2; i < nums.length; i++) {\n    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);\n  }\n  return dp[nums.length - 1];\n}",
          "python": "def rob(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    if len(nums) == 1:\n        return nums[0]\n    dp = [0] * len(nums)\n    dp[0] = nums[0]\n    dp[1] = max(nums[0], nums[1])\n    for i in range(2, len(nums)):\n        dp[i] = max(dp[i-1], dp[i-2] + nums[i])\n    return dp[-1]"
        },
        "solutionCode": {
          "javascript": "function rob(nums) {\n  if (nums.length === 0) return 0;\n  if (nums.length === 1) return nums[0];\n  const dp = new Array(nums.length);\n  dp[0] = nums[0];\n  dp[1] = Math.max(nums[0], nums[1]);\n  for (let i = 2; i < nums.length; i++) {\n    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);\n  }\n  return dp[nums.length - 1];\n}",
          "python": "def rob(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    if len(nums) == 1:\n        return nums[0]\n    dp = [0] * len(nums)\n    dp[0] = nums[0]\n    dp[1] = max(nums[0], nums[1])\n    for i in range(2, len(nums)):\n        dp[i] = max(dp[i-1], dp[i-2] + nums[i])\n    return dp[-1]"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                7,
                9,
                3,
                1
              ]
            ],
            "expected": 12,
            "description": "nums = [2, 7, 9, 3, 1]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Every DP boils down to FIVE questions. We will answer them on House Robber: along a street of houses you may not rob two ADJACENT houses; maximise the loot. The top row is nums; the dp row below is the table we will fill.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "vars": [
              [
                "problem",
                "House Robber"
              ],
              [
                "nums",
                "[2, 7, 9, 3, 1]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Question 1 — STATE. What does a cell dp[i] mean? Define it in words: 'the maximum money robbed from the first (i+1) houses (indices 0..i) without alerting the police'. The state is the foundational building block.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "vars": [
              [
                "state definition",
                "dp[i] = best loot houses 0..i"
              ],
              [
                "table size",
                "n = 5"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Question 2 — RECURRENCE. At house i, what choices do you have? Choice A: SKIP house i -> loot is dp[i-1]. Choice B: ROB house i -> gain nums[i] plus best from two back dp[i-2]. Formula: dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "vars": [
              [
                "choice A",
                "skip -> dp[i-1]"
              ],
              [
                "choice B",
                "rob -> dp[i-2] + nums[i]"
              ],
              [
                "recurrence",
                "max(dp[i-1], dp[i-2]+nums[i])"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Question 3 — BASE CASES. Which subproblems are so small they cannot look 2 steps back? House 0 (only 1 house) and House 1 (only 2 houses). We define these directly before the loop.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "vars": [
              [
                "base case 1",
                "dp[0] = nums[0]"
              ],
              [
                "base case 2",
                "dp[1] = max(nums[0], nums[1])"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[0] = nums[0] = 2. With only house 0 available, the optimal loot is to rob house 0 for 2.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                ".",
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              0
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "dp[0]",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[1] = max(nums[0], nums[1]) = max(2, 7) = 7. With two adjacent houses, you must choose either house 0 or house 1; you pick the one with higher loot.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              0,
              1
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "nums[0]",
                2
              ],
              [
                "nums[1]",
                7
              ],
              [
                "dp[1]",
                7
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Question 4 — ORDER OF COMPUTATION. dp[i] depends on dp[i-1] and dp[i-2]. Since smaller subproblems must be computed first, we iterate left to right: i = 2 -> 3 -> 4.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "order",
                "left to right (i = 2 to n-1)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Start the loop at i = 2. With base cases dp[0] and dp[1] ready, we can now iteratively compute all subsequent houses in linear time.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                ".",
                ".",
                "."
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              2
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "n",
                5
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "dp[2] = max(dp[1], dp[0] + nums[2]) = max(7, 2 + 9) = max(7, 11) = 11. The two blue cells dp[1] and dp[0] are the subproblems we read. Here it is better to ROB house 2.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                11,
                ".",
                "."
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              2
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "skip = dp[i-1]",
                7
              ],
              [
                "rob = dp[i-2]+nums[i]",
                11
              ],
              [
                "dp[2]",
                11
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "dp[3] = max(dp[2], dp[1] + nums[3]) = max(11, 7 + 3) = max(11, 10) = 11. Reading dp[2] (11) and dp[1] (7). Here it is better to SKIP house 3 to preserve the 11 from house 2.",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                11,
                11,
                "."
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              3
            ],
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "skip = dp[i-1]",
                11
              ],
              [
                "rob = dp[i-2]+nums[i]",
                10
              ],
              [
                "dp[3]",
                11
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "dp[4] = max(dp[3], dp[2] + nums[4]) = max(11, 11 + 1) = max(11, 12) = 12. Reading dp[3] (11) and dp[2] (11). Robbing house 4 gives 11 + 1 = 12, which beats skipping (11).",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                11,
                11,
                12
              ],
              "title": "DP"
            },
            "secondaryHighlights": [
              4
            ],
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "skip = dp[i-1]",
                11
              ],
              [
                "rob = dp[i-2]+nums[i]",
                12
              ],
              [
                "dp[4]",
                12
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Question 5 — LOCATE THE ANSWER. The table is filled. The final answer dp[4] = 12 represents the maximum loot from all 5 houses. Return dp[n-1] = 12. Solved in O(n) time, O(n) space!",
            "customVisual": {
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "NUMS",
              "array": [
                2,
                7,
                11,
                11,
                12
              ],
              "title": "DP"
            },
            "highlights": [
              4
            ],
            "best": {
              "label": "Max Loot = 12"
            },
            "vars": [
              [
                "answer",
                "dp[4] = 12"
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pascals-triangle",
    "patternId": "dynamic-programming",
    "title": "Pascal's Triangle",
    "subtitle": "The smallest recurrence there is",
    "kind": "problem",
    "leetcode": {
      "id": 118,
      "slug": "pascals-triangle",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Apple",
      "Microsoft"
    ],
    "statement": "Given numRows, return the first numRows of Pascal's triangle. Each number is the sum of the two directly above it.",
    "visualType": "matrix",
    "initialInput": [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · binomial formula",
        "complexity": {
          "time": "O(rows³)",
          "space": "O(rows²)"
        },
        "pseudocode": [
          "for r <- 0 to rows - 1:",
          "  for c <- 0 to r: entry <- r! / (c! * (r - c)!)",
          "# factorials overflow quickly and repeat work"
        ],
        "starterCode": {
          "javascript": "function generate(numRows) {\n  function fact(n) {\n    let res = 1;\n    for (let i = 2; i <= n; i++) res *= i;\n    return res;\n  }\n  const triangle = [];\n  for (let r = 0; r < numRows; r++) {\n    const row = [];\n    for (let c = 0; c <= r; c++) {\n      row.push(Math.round(fact(r) / (fact(c) * fact(r - c))));\n    }\n    triangle.push(row);\n  }\n  return triangle;\n}",
          "python": "import math\n\ndef generate(numRows: int) -> list[list[int]]:\n    triangle = []\n    for r in range(numRows):\n        row = []\n        for c in range(r + 1):\n            val = math.factorial(r) // (math.factorial(c) * math.factorial(r - c))\n            row.append(val)\n        triangle.append(row)\n    return triangle"
        },
        "solutionCode": {
          "javascript": "function generate(numRows) {\n  function fact(n) {\n    let res = 1;\n    for (let i = 2; i <= n; i++) res *= i;\n    return res;\n  }\n  const triangle = [];\n  for (let r = 0; r < numRows; r++) {\n    const row = [];\n    for (let c = 0; c <= r; c++) {\n      row.push(Math.round(fact(r) / (fact(c) * fact(r - c))));\n    }\n    triangle.push(row);\n  }\n  return triangle;\n}",
          "python": "import math\n\ndef generate(numRows: int) -> list[list[int]]:\n    triangle = []\n    for r in range(numRows):\n        row = []\n        for c in range(r + 1):\n            val = math.factorial(r) // (math.factorial(c) * math.factorial(r - c))\n            row.append(val)\n        triangle.append(row)\n    return triangle"
        },
        "testCases": [
          {
            "input": [5],
            "expected": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            "description": "numRows = 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Iterate row by row from r = 0 to numRows - 1 using the combinatorics binomial formula C(r, c) = r! / (c! * (r - c)!).",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "active" }
            ],
            "vars": [
              ["formula", "C(r, c) = r! / (c! * (r - c)!)"],
              ["numRows", 5]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Row 0: C(0,0)=1.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "active" }
            ],
            "vars": [
              ["row", 0],
              ["values", "[1]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Row 1: C(1,0)=1, C(1,1)=1.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1],
              [1, 1]
            ],
            "gridHighlights": [
              { "r": 1, "c": 0, "status": "active" },
              { "r": 1, "c": 1, "status": "active" }
            ],
            "vars": [
              ["row", 1],
              ["values", "[1, 1]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Row 2: C(2,0)=1, C(2,1)=2, C(2,2)=1.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1],
              [1, 1],
              [1, 2, 1]
            ],
            "gridHighlights": [
              { "r": 2, "c": 0, "status": "active" },
              { "r": 2, "c": 1, "status": "active" },
              { "r": 2, "c": 2, "status": "active" }
            ],
            "vars": [
              ["row", 2],
              ["values", "[1, 2, 1]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Row 3: C(3,0)=1, C(3,1)=3, C(3,2)=3, C(3,3)=1.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1],
              [1, 1],
              [1, 2, 1],
              [1, 3, 3, 1]
            ],
            "gridHighlights": [
              { "r": 3, "c": 0, "status": "active" },
              { "r": 3, "c": 1, "status": "active" },
              { "r": 3, "c": 2, "status": "active" },
              { "r": 3, "c": 3, "status": "active" }
            ],
            "vars": [
              ["row", 3],
              ["values", "[1, 3, 3, 1]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Row 4: C(4,0)=1, C(4,1)=4, C(4,2)=6, C(4,3)=4, C(4,4)=1.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1],
              [1, 1],
              [1, 2, 1],
              [1, 3, 3, 1],
              [1, 4, 6, 4, 1]
            ],
            "gridHighlights": [
              { "r": 4, "c": 0, "status": "active" },
              { "r": 4, "c": 1, "status": "active" },
              { "r": 4, "c": 2, "status": "active" },
              { "r": 4, "c": 3, "status": "active" },
              { "r": 4, "c": 4, "status": "active" }
            ],
            "vars": [
              ["row", 4],
              ["values", "[1, 4, 6, 4, 1]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Factorials grow rapidly (O(r!) operations) and overflow quickly. Computing each cell independently from scratch repeats huge amounts of work.",
            "customVisual": {
              "label": "TRIANGLE",
              "hideCoords": true
            },
            "matrix": [
              [1],
              [1, 1],
              [1, 2, 1],
              [1, 3, 3, 1],
              [1, 4, 6, 4, 1]
            ],
            "best": {
              "label": "Brute Force Complete: O(rows³) Time"
            },
            "vars": [
              ["drawback", "Factorials overflow and repeat calculations"],
              ["time", "O(rows³)"],
              ["space", "O(rows²)"]
            ]
          }
        ]
      },
      {
        "id": "optimized-dp",
        "label": "Optimized · sum the two above",
        "complexity": {
          "time": "O(rows²)",
          "space": "O(rows²)"
        },
        "pseudocode": [
          "triangle <- []",
          "for r <- 0 to rows - 1:",
          "  row <- [1]",
          "  for c <- 1 to r - 1: row.append(prev[c - 1] + prev[c])",
          "  if r > 0: row.append(1)",
          "return triangle"
        ],
        "starterCode": {
          "javascript": "function generate(numRows) {\n  const triangle = [];\n  for (let r = 0; r < numRows; r++) {\n    const row = [1];\n    const prev = triangle[r - 1];\n    for (let c = 1; c < r; c++) {\n      row.push(prev[c - 1] + prev[c]);\n    }\n    if (r > 0) row.push(1);\n    triangle.push(row);\n  }\n  return triangle;\n}",
          "python": "def generate(numRows: int) -> list[list[int]]:\n    triangle = []\n    for r in range(numRows):\n        row = [1]\n        if r > 0:\n            prev = triangle[r - 1]\n            for c in range(1, r):\n                row.append(prev[c - 1] + prev[c])\n            row.append(1)\n        triangle.append(row)\n    return triangle"
        },
        "solutionCode": {
          "javascript": "function generate(numRows) {\n  const triangle = [];\n  for (let r = 0; r < numRows; r++) {\n    const row = [1];\n    const prev = triangle[r - 1];\n    for (let c = 1; c < r; c++) {\n      row.push(prev[c - 1] + prev[c]);\n    }\n    if (r > 0) row.push(1);\n    triangle.push(row);\n  }\n  return triangle;\n}",
          "python": "def generate(numRows: int) -> list[list[int]]:\n    triangle = []\n    for r in range(numRows):\n        row = [1]\n        if r > 0:\n            prev = triangle[r - 1]\n            for c in range(1, r):\n                row.append(prev[c - 1] + prev[c])\n            row.append(1)\n        triangle.append(row)\n    return triangle"
        },
        "testCases": [
          {
            "input": [5],
            "expected": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            "description": "numRows = 5"
          },
          {
            "input": [1],
            "expected": [[1]],
            "description": "numRows = 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize triangle as an empty list. Each row will be constructed using the row immediately above it.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [],
            "vars": [["triangle", "[]"]]
          },
          {
            "codeLine": 2,
            "narration": "Start outer loop for row r = 0.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [],
            "vars": [["r", 0], ["numRows", 5]]
          },
          {
            "codeLine": 3,
            "narration": "Initialize row 0 with [1]. Every row in Pascal's triangle starts with 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1]],
            "gridHighlights": [{ "r": 0, "c": 0, "status": "active" }],
            "vars": [["r", 0], ["row", "[1]"]]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop moves to row r = 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1]],
            "vars": [["r", 1]]
          },
          {
            "codeLine": 3,
            "narration": "Start row 1 with leading 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1]],
            "gridHighlights": [{ "r": 1, "c": 0, "status": "active" }],
            "vars": [["r", 1], ["row", "[1]"]]
          },
          {
            "codeLine": 5,
            "narration": "For r = 1, append closing 1. Row 1 is complete: [1, 1].",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1]],
            "gridHighlights": [{ "r": 1, "c": 1, "status": "active" }],
            "vars": [["r", 1], ["row", "[1, 1]"]]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop moves to row r = 2.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1]],
            "vars": [["r", 2]]
          },
          {
            "codeLine": 3,
            "narration": "Start row 2 with leading 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1]],
            "gridHighlights": [{ "r": 2, "c": 0, "status": "active" }],
            "vars": [["r", 2], ["row", "[1]"]]
          },
          {
            "codeLine": 4,
            "narration": "Entry (2, 1) = prev[0] + prev[1] = 1 + 1 = 2, read directly from the two cells above in O(1) time.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2]],
            "gridHighlights": [
              { "r": 1, "c": 0, "status": "pacific" },
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 2, "c": 1, "status": "active" }
            ],
            "vars": [
              ["above-left", 1],
              ["above-right", 1],
              ["sum", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Append closing 1. Row 2 is complete: [1, 2, 1].",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1]],
            "gridHighlights": [{ "r": 2, "c": 2, "status": "active" }],
            "vars": [["r", 2], ["row", "[1, 2, 1]"]]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop moves to row r = 3.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1]],
            "vars": [["r", 3]]
          },
          {
            "codeLine": 3,
            "narration": "Start row 3 with leading 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1]],
            "gridHighlights": [{ "r": 3, "c": 0, "status": "active" }],
            "vars": [["r", 3], ["row", "[1]"]]
          },
          {
            "codeLine": 4,
            "narration": "Entry (3, 1) = 1 + 2 = 3. Reads the two entries directly above from row 2.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3]],
            "gridHighlights": [
              { "r": 2, "c": 0, "status": "pacific" },
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 3, "c": 1, "status": "active" }
            ],
            "vars": [
              ["above-left", 1],
              ["above-right", 2],
              ["sum", 3]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Entry (3, 2) = 2 + 1 = 3. Reads the two entries directly above from row 2.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3]],
            "gridHighlights": [
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 3, "c": 2, "status": "active" }
            ],
            "vars": [
              ["above-left", 2],
              ["above-right", 1],
              ["sum", 3]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Append closing 1. Row 3 is complete: [1, 3, 3, 1].",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
            "gridHighlights": [{ "r": 3, "c": 3, "status": "active" }],
            "vars": [["r", 3], ["row", "[1, 3, 3, 1]"]]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop moves to row r = 4.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]],
            "vars": [["r", 4]]
          },
          {
            "codeLine": 3,
            "narration": "Start row 4 with leading 1.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1]],
            "gridHighlights": [{ "r": 4, "c": 0, "status": "active" }],
            "vars": [["r", 4], ["row", "[1]"]]
          },
          {
            "codeLine": 4,
            "narration": "Entry (4, 1) = 1 + 3 = 4, the two entries above it, already computed.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4]],
            "gridHighlights": [
              { "r": 3, "c": 0, "status": "pacific" },
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 4, "c": 1, "status": "active" }
            ],
            "vars": [
              ["above-left", 1],
              ["above-right", 3],
              ["sum", 4]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Entry (4, 2) = 3 + 3 = 6, the two entries above it, already computed.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6]],
            "gridHighlights": [
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 4, "c": 2, "status": "active" }
            ],
            "vars": [
              ["above-left", 3],
              ["above-right", 3],
              ["sum", 6]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Entry (4, 3) = 3 + 1 = 4, the two entries above it, already computed.",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4]],
            "gridHighlights": [
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 3, "c": 3, "status": "pacific" },
              { "r": 4, "c": 3, "status": "active" }
            ],
            "vars": [
              ["above-left", 3],
              ["above-right", 1],
              ["sum", 4]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Append closing 1. Row 4 is complete: [1, 4, 6, 4, 1].",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            "gridHighlights": [{ "r": 4, "c": 4, "status": "active" }],
            "vars": [["r", 4], ["row", "[1, 4, 6, 4, 1]"]]
          },
          {
            "codeLine": 6,
            "narration": "Return the complete Pascal's Triangle. All rows built in O(numRows²) time by reading already-computed values in O(1) time!",
            "customVisual": { "label": "TRIANGLE", "hideCoords": true },
            "matrix": [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
            "gridHighlights": [
              { "r": 4, "c": 0, "status": "active" },
              { "r": 4, "c": 1, "status": "active" },
              { "r": 4, "c": 2, "status": "active" },
              { "r": 4, "c": 3, "status": "active" },
              { "r": 4, "c": 4, "status": "active" }
            ],
            "best": {
              "label": "Pascal's Triangle (5 Rows) Complete"
            },
            "vars": [
              ["result", "5 rows complete"],
              ["time", "O(rows²)"],
              ["space", "O(rows²)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "climbing-stairs",
    "patternId": "dynamic-programming",
    "title": "Climbing Stairs",
    "subtitle": "ways(i) = ways(i-1) + ways(i-2) · Fibonacci",
    "kind": "problem",
    "leetcode": {
      "id": 70,
      "slug": "climbing-stairs",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Adobe",
      "Apple"
    ],
    "statement": "You are climbing a staircase that takes n steps to reach the top. Each time you can climb 1 or 2 steps. In how many distinct ways can you reach the top?",
    "visualType": "dp-grid",
    "initialInput": [
      1,
      1,
      2,
      3,
      5,
      8
    ],
    "approaches": [
      {
        "id": "brute-force-recursion",
        "label": "Brute force · recursion",
        "complexity": {
          "time": "O(2ⁿ)",
          "space": "O(n)"
        },
        "pseudocode": [
          "ways(i):",
          "  if i <= 1: return 1",
          "  return ways(i-1) + ways(i-2)  // recomputes!"
        ],
        "starterCode": {
          "javascript": "function climbStairs(n) {\n  function ways(i) {\n    if (i <= 1) return 1;\n    return ways(i - 1) + ways(i - 2);\n  }\n  return ways(n);\n}",
          "python": "def climbStairs(n: int) -> int:\n    def ways(i: int) -> int:\n        if i <= 1:\n            return 1\n        return ways(i - 1) + ways(i - 2)\n    return ways(n)"
        },
        "solutionCode": {
          "javascript": "function climbStairs(n) {\n  function ways(i) {\n    if (i <= 1) return 1;\n    return ways(i - 1) + ways(i - 2);\n  }\n  return ways(n);\n}",
          "python": "def climbStairs(n: int) -> int:\n    def ways(i: int) -> int:\n        if i <= 1:\n            return 1\n        return ways(i - 1) + ways(i - 2)\n    return ways(n)"
        },
        "testCases": [
          {
            "input": [2],
            "expected": 2,
            "description": "n = 2 steps"
          },
          {
            "input": [3],
            "expected": 3,
            "description": "n = 3 steps"
          },
          {
            "input": [5],
            "expected": 8,
            "description": "n = 5 steps"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "From step n you arrived either by a 1-step (from n-1) or a 2-step (from n-2). So ways(n) = ways(n-1) + ways(n-2), with ways(0) = ways(1) = 1. The obvious code is direct recursion.",
            "customVisual": {
              "array": [".", ".", ".", ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "vars": [
              ["n", 5],
              ["recurrence", "ways(i) = ways(i-1) + ways(i-2)"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Base cases: ways(0) = 1 (1 way to stay at ground) and ways(1) = 1 (1 way to reach step 1).",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [0, 1],
            "vars": [
              ["ways(0)", 1],
              ["ways(1)", 1]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Direct recursion branches into 2 sub-calls at each step, producing an exponential O(2ⁿ) recursion tree that recomputes the same subproblems repeatedly.",
            "customVisual": {
              "array": [1, 1, 2, 3, 5, 8],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [5],
            "best": {
              "label": "Brute Force Complete: O(2ⁿ) Time"
            },
            "vars": [
              ["drawback", "exponential redundant branches"],
              ["time", "O(2ⁿ)"],
              ["space", "O(n)"]
            ]
          }
        ]
      },
      {
        "id": "optimized-tabulation",
        "label": "Optimized · tabulation",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "dp[0] <- 1; dp[1] <- 1",
          "for i <- 2 to n:",
          "  // ways = from one below + from two below",
          "  dp[i] <- dp[i-1] + dp[i-2]",
          "",
          "return dp[n]"
        ],
        "starterCode": {
          "javascript": "function climbStairs(n) {\n  const dp = new Array(n + 1);\n  dp[0] = 1;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}",
          "python": "def climbStairs(n: int) -> int:\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]"
        },
        "solutionCode": {
          "javascript": "function climbStairs(n) {\n  const dp = new Array(n + 1);\n  dp[0] = 1;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}",
          "python": "def climbStairs(n: int) -> int:\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]"
        },
        "testCases": [
          {
            "input": [2],
            "expected": 2,
            "description": "n = 2 steps"
          },
          {
            "input": [3],
            "expected": 3,
            "description": "n = 3 steps"
          },
          {
            "input": [5],
            "expected": 8,
            "description": "n = 5 steps"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize base cases: dp[0] = 1 (1 way to stay at ground) and dp[1] = 1 (1 way to reach step 1).",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [0, 1],
            "vars": [
              ["dp[0]", 1],
              ["dp[1]", 1]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Start loop from step i = 2 up to n = 5.",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [0, 1],
            "vars": [
              ["i", 2],
              ["n", 5]
            ]
          },
          {
            "codeLine": 3,
            "narration": "At step 2, you arrive either by taking a 1-step from step 1 or a 2-step from step 0.",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [0, 1],
            "vars": [
              ["i", 2]
            ]
          },
          {
            "codeLine": 4,
            "narration": "dp[2] = dp[1] + dp[0] = 1 + 1 = 2. There are 2 distinct ways to reach step 2: [1+1, 2].",
            "customVisual": {
              "array": [1, 1, 2, ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [0, 1, 2],
            "vars": [
              ["i", 2],
              ["dp[1]", 1],
              ["dp[0]", 1],
              ["dp[2]", 2]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop advances to step i = 3.",
            "customVisual": {
              "array": [1, 1, 2, ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [1, 2],
            "vars": [
              ["i", 3]
            ]
          },
          {
            "codeLine": 3,
            "narration": "At step 3, ways come from one below (step 2) plus two below (step 1).",
            "customVisual": {
              "array": [1, 1, 2, ".", ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [1, 2],
            "vars": [
              ["i", 3]
            ]
          },
          {
            "codeLine": 4,
            "narration": "dp[3] = dp[2] + dp[1] = 2 + 1 = 3. The two blue cells are the only inputs, everything earlier is already folded into them.",
            "customVisual": {
              "array": [1, 1, 2, 3, ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [1, 2, 3],
            "vars": [
              ["i", 3],
              ["dp[2]", 2],
              ["dp[1]", 1],
              ["dp[3]", 3]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop advances to step i = 4.",
            "customVisual": {
              "array": [1, 1, 2, 3, ".", "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [2, 3],
            "vars": [
              ["i", 4]
            ]
          },
          {
            "codeLine": 4,
            "narration": "dp[4] = dp[3] + dp[2] = 3 + 2 = 5. Reads dp[3] and dp[2] in O(1) time.",
            "customVisual": {
              "array": [1, 1, 2, 3, 5, "."],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [2, 3, 4],
            "vars": [
              ["i", 4],
              ["dp[3]", 3],
              ["dp[2]", 2],
              ["dp[4]", 5]
            ]
          },
          {
            "codeLine": 4,
            "narration": "dp[5] = dp[4] + dp[3] = 5 + 3 = 8. Reads dp[4] and dp[3] in O(1) time.",
            "customVisual": {
              "array": [1, 1, 2, 3, 5, 8],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [3, 4, 5],
            "vars": [
              ["i", 5],
              ["dp[4]", 5],
              ["dp[3]", 3],
              ["dp[5]", 8]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return dp[5] = 8. There are 8 distinct ways to climb 5 stairs. Solved in O(n) time and O(n) space!",
            "customVisual": {
              "array": [1, 1, 2, 3, 5, 8],
              "labels": ["dp[0]", "dp[1]", "dp[2]", "dp[3]", "dp[4]", "dp[5]"],
              "title": "DISTINCT WAYS TO REACH STEP i"
            },
            "highlights": [5],
            "best": {
              "label": "Distinct Ways = 8"
            },
            "vars": [
              ["answer", 8],
              ["time", "O(n)"],
              ["space", "O(n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "dice-combinations",
    "patternId": "dynamic-programming",
    "title": "Dice Combinations",
    "subtitle": "dp[i] = ∑ dp[i−j] for j in 1..6 · a 6-wide window",
    "kind": "problem",
    "leetcode": {
      "id": 377,
      "slug": "combination-sum-iv",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "statement": "Count the number of ways to reach the sum n by throwing a six-sided die one or more times. Each throw yields a value from 1 to 6, and order matters, for n = 3 the four ways are 1+1+1, 1+2, 2+1 and 3. Return the count modulo 10^9+7.",
    "visualType": "dp-grid",
    "initialInput": [
      1,
      1,
      2,
      4,
      8,
      16,
      32,
      63,
      125
    ],
    "approaches": [
      {
        "id": "brute-force-recursion",
        "label": "Brute force · recursion",
        "complexity": {
          "time": "O(6ⁿ)",
          "space": "O(n)"
        },
        "pseudocode": [
          "MOD <- 1e9 + 7",
          "ways(i):",
          "  if i = 0: return 1",
          "  total <- 0",
          "  for face <- 1 to min(i, 6):",
          "    total <- total + ways(i - face)",
          "  return total mod MOD"
        ],
        "starterCode": {
          "javascript": "function diceCombinations(n) {\n  const MOD = 1000000007;\n  function ways(i) {\n    if (i === 0) return 1;\n    let total = 0;\n    for (let face = 1; face <= Math.min(i, 6); face++) {\n      total = (total + ways(i - face)) % MOD;\n    }\n    return total;\n  }\n  return ways(n);\n}",
          "python": "def diceCombinations(n: int) -> int:\n    MOD = 10**9 + 7\n    def ways(i: int) -> int:\n        if i == 0:\n            return 1\n        total = 0\n        for face in range(1, min(i, 6) + 1):\n            total = (total + ways(i - face)) % MOD\n        return total\n    return ways(n)"
        },
        "solutionCode": {
          "javascript": "function diceCombinations(n) {\n  const MOD = 1000000007;\n  function ways(i) {\n    if (i === 0) return 1;\n    let total = 0;\n    for (let face = 1; face <= Math.min(i, 6); face++) {\n      total = (total + ways(i - face)) % MOD;\n    }\n    return total;\n  }\n  return ways(n);\n}",
          "python": "def diceCombinations(n: int) -> int:\n    MOD = 10**9 + 7\n    def ways(i: int) -> int:\n        if i == 0:\n            return 1\n        total = 0\n        for face in range(1, min(i, 6) + 1):\n            total = (total + ways(i - face)) % MOD\n        return total\n    return ways(n)"
        },
        "testCases": [
          {
            "input": [3],
            "expected": 4,
            "description": "Sum 3: 4 distinct ordered throws"
          },
          {
            "input": [4],
            "expected": 8,
            "description": "Sum 4: 8 combinations"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "To reach sum n with a 6-sided die, we branch on all possible last dice throws from 1 to 6.",
            "customVisual": {
              "array": [".", ".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "vars": [
              ["problem", "Dice Combinations"],
              ["MOD", "1e9+7"],
              ["faces", "1..6"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Base case: ways(0) = 1. There is exactly 1 way to form sum 0 (by throwing the die 0 times).",
            "customVisual": {
              "array": [1, ".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0],
            "vars": [
              ["ways(0)", 1]
            ]
          },
          {
            "codeLine": 5,
            "narration": "At each sum i, the recursion branches into up to 6 sub-calls: ways(i) = sum(ways(i - face) for face in 1..6).",
            "customVisual": {
              "array": [1, 1, 2, 4, ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0, 1, 2, 3],
            "vars": [
              ["branching factor", 6]
            ]
          },
          {
            "codeLine": 7,
            "narration": "A branching factor of 6 produces an astronomical O(6ⁿ) recursive call tree, resulting in Time Limit Exceeded.",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, 32, 63, 125],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [8],
            "best": {
              "label": "Brute Force Complete: O(6ⁿ) Time"
            },
            "vars": [
              ["drawback", "O(6ⁿ) exponential branching"],
              ["time", "O(6ⁿ)"],
              ["space", "O(n)"]
            ]
          }
        ]
      },
      {
        "id": "optimized-tabulation",
        "label": "Optimized · tabulation",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "MOD <- 1e9 + 7",
          "dp[0] <- 1                      // the empty sequence",
          "",
          "for i <- 1 to n:",
          "  for j <- 1 to 6:",
          "    if j <= i:                  // dp[i-j] must exist",
          "      dp[i] <- (dp[i] + dp[i-j]) mod MOD",
          "",
          "return dp[n]"
        ],
        "starterCode": {
          "javascript": "function diceCombinations(n) {\n  const MOD = 1000000007;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j <= 6; j++) {\n      if (j <= i) {\n        dp[i] = (dp[i] + dp[i - j]) % MOD;\n      }\n    }\n  }\n  return dp[n];\n}",
          "python": "def diceCombinations(n: int) -> int:\n    MOD = 10**9 + 7\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    for i in range(1, n + 1):\n        for j in range(1, 7):\n            if j <= i:\n                dp[i] = (dp[i] + dp[i - j]) % MOD\n    return dp[n]"
        },
        "solutionCode": {
          "javascript": "function diceCombinations(n) {\n  const MOD = 1000000007;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j <= 6; j++) {\n      if (j <= i) {\n        dp[i] = (dp[i] + dp[i - j]) % MOD;\n      }\n    }\n  }\n  return dp[n];\n}",
          "python": "def diceCombinations(n: int) -> int:\n    MOD = 10**9 + 7\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    for i in range(1, n + 1):\n        for j in range(1, 7):\n            if j <= i:\n                dp[i] = (dp[i] + dp[i - j]) % MOD\n    return dp[n]"
        },
        "testCases": [
          {
            "input": [3],
            "expected": 4,
            "description": "Sum 3: (1,1,1), (1,2), (2,1), (3) = 4 ways"
          },
          {
            "input": [4],
            "expected": 8,
            "description": "Sum 4 has 8 combinations"
          },
          {
            "input": [7],
            "expected": 63,
            "description": "Sum 7 window rolls over past 6"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Define modulo MOD = 10^9 + 7 to handle large combinatorics values without integer overflow.",
            "customVisual": {
              "array": [".", ".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "vars": [
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize base case: dp[0] = 1 (there is exactly 1 way to reach sum 0: the empty sequence).",
            "customVisual": {
              "array": [1, ".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0],
            "vars": [
              ["dp[0]", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Outer loop starts at sum i = 1.",
            "customVisual": {
              "array": [1, ".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0],
            "vars": [
              ["i", 1],
              ["j", "1..6"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[1] = dp[0] = 1. Only 1 term (face 1). There is 1 way: [1].",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 1"
            },
            "highlights": [0, 1],
            "vars": [
              ["i", 1],
              ["j", 1],
              ["dp[1]", 1],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum i = 2.",
            "customVisual": {
              "array": [1, 1, ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0, 1],
            "vars": [
              ["i", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[2] = dp[1] + dp[0] = 1 + 1 = 2. Ways: [1+1, 2].",
            "customVisual": {
              "array": [1, 1, 2, ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 2"
            },
            "highlights": [0, 1, 2],
            "vars": [
              ["i", 2],
              ["j", "1..2"],
              ["dp[2]", 2],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum i = 3.",
            "customVisual": {
              "array": [1, 1, 2, ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0, 1, 2],
            "vars": [
              ["i", 3]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[3] = dp[2] + dp[1] + dp[0] = 2 + 1 + 1 = 4. Ways: [1+1+1, 1+2, 2+1, 3].",
            "customVisual": {
              "array": [1, 1, 2, 4, ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 3"
            },
            "highlights": [0, 1, 2, 3],
            "vars": [
              ["i", 3],
              ["j", "1..3"],
              ["dp[3]", 4],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum i = 4.",
            "customVisual": {
              "array": [1, 1, 2, 4, ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0, 1, 2, 3],
            "vars": [
              ["i", 4]
            ]
          },
          {
            "codeLine": 6,
            "narration": "For sum i = 4, only dice faces j <= 4 are valid. Faces 5 and 6 would overshoot 4.",
            "customVisual": {
              "array": [1, 1, 2, 4, ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [0, 1, 2, 3],
            "vars": [
              ["i", 4],
              ["valid j", "1..4"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[4] = 4 + 2 + 1 + 1 = 8. Only 4 terms so far: a face of 5 or more would overshoot 4, so dp[i-j] for j > 4 simply does not exist. The window is CLAMPED against the left edge.",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 4"
            },
            "highlights": [0, 1, 2, 3, 4],
            "vars": [
              ["i", 4],
              ["j", "1..4"],
              ["dp[4]", 8],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[5] = dp[4] + dp[3] + dp[2] + dp[1] + dp[0] = 8 + 4 + 2 + 1 + 1 = 16.",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 5"
            },
            "highlights": [0, 1, 2, 3, 4, 5],
            "vars": [
              ["i", 5],
              ["j", "1..5"],
              ["dp[5]", 16],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[6] = dp[5] + dp[4] + dp[3] + dp[2] + dp[1] + dp[0] = 16 + 8 + 4 + 2 + 1 + 1 = 32. Full 6-term window reached!",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, 32, ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 6"
            },
            "highlights": [0, 1, 2, 3, 4, 5, 6],
            "vars": [
              ["i", 6],
              ["j", "1..6"],
              ["dp[6]", 32],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[7] = 32 + 16 + 8 + 4 + 2 + 1 = 63. The window has stopped growing and now SLIDES: dp[0] just dropped out of it. From here on, every cell is the sum of exactly the six cells before it.",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, 32, 63, "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 6"
            },
            "highlights": [1, 2, 3, 4, 5, 6, 7],
            "vars": [
              ["i", 7],
              ["j", "1..6"],
              ["dp[7]", 63],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[8] = 63 + 32 + 16 + 8 + 4 + 2 = 125. The 6-wide sliding window now spans dp[2..7].",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, 32, 63, 125],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": "Σ 6"
            },
            "highlights": [2, 3, 4, 5, 6, 7, 8],
            "vars": [
              ["i", 8],
              ["j", "1..6"],
              ["dp[8]", 125],
              ["MOD", "1e9+7"]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Return dp[n] = 125 mod (10^9 + 7). Solved in O(n) linear time with a constant 6-wide sliding window.",
            "customVisual": {
              "array": [1, 1, 2, 4, 8, 16, 32, 63, 125],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]", "[8]"],
              "title": ""
            },
            "highlights": [8],
            "best": {
              "label": "Dice Combinations Result = 125"
            },
            "vars": [
              ["answer", 125],
              ["time", "O(n)"],
              ["space", "O(n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maximum-subarray",
    "patternId": "dynamic-programming",
    "title": "Maximum Subarray",
    "subtitle": "cur = max(nums[i], cur + nums[i]) · Kadane's",
    "kind": "problem",
    "leetcode": {
      "id": 53,
      "slug": "maximum-subarray",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple",
      "Meta"
    ],
    "statement": "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
    "visualType": "dp-grid",
    "initialInput": [
      -2,
      1,
      -3,
      4,
      -1,
      2,
      1,
      -5,
      4
    ],
    "approaches": [
      {
        "id": "kadanes-dp",
        "label": "Kadane's Algorithm · cur = max(x, cur + x)",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "maxSoFar = nums[0]",
          "currMax = nums[0]",
          "for i from 1 to n - 1:",
          "    currMax = max(nums[i], currMax + nums[i])",
          "    maxSoFar = max(maxSoFar, currMax)",
          "return maxSoFar"
        ],
        "starterCode": {
          "javascript": "function maxSubArray(nums) {\n  let cur = nums[0], max = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}",
          "python": "def maxSubArray(nums: list[int]) -> int:\n    cur = mx = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        mx = max(mx, cur)\n    return mx"
        },
        "solutionCode": {
          "javascript": "function maxSubArray(nums) {\n  let cur = nums[0], max = nums[0];\n  for (let i = 1; i < nums.length; i++) {\n    cur = Math.max(nums[i], cur + nums[i]);\n    max = Math.max(max, cur);\n  }\n  return max;\n}",
          "python": "def maxSubArray(nums: list[int]) -> int:\n    cur = mx = nums[0]\n    for x in nums[1:]:\n        cur = max(x, cur + x)\n        mx = max(mx, cur)\n    return mx"
        },
        "testCases": [
          {
            "input": [
              [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ]
            ],
            "expected": 6,
            "description": "[4,-1,2,1] has largest sum = 6"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Index 0: nums[0] = -2. Initialize cur = -2, maxSoFar = -2.",
            "customVisual": {
              "array": [
                -2,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              0
            ],
            "secondaryHighlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "nums[0]",
                -2
              ],
              [
                "cur",
                -2
              ],
              [
                "max",
                -2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 1 (nums[1] = 1): cur = max(1, -2 + 1) = 1. Since starting fresh at 1 > adding to negative -2, start new subarray. maxSoFar = 1.",
            "customVisual": {
              "array": [
                -2,
                1,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "cur",
                1
              ],
              [
                "max",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 2 (nums[2] = -3): cur = max(-3, 1 - 3) = -2. maxSoFar remains 1.",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                "-",
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              2
            ],
            "secondaryHighlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "cur",
                -2
              ],
              [
                "max",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 3 (nums[3] = 4): cur = max(4, -2 + 4) = 4. Start new positive subarray at index 3. maxSoFar = 4.",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                4,
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              3
            ],
            "secondaryHighlights": [
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "cur",
                4
              ],
              [
                "max",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 4 (nums[4] = -1): cur = max(-1, 4 - 1) = 3. maxSoFar remains 4.",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                4,
                3,
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              4
            ],
            "secondaryHighlights": [
              3,
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "cur",
                3
              ],
              [
                "max",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 5 (nums[5] = 2): cur = max(2, 3 + 2) = 5. maxSoFar = 5.",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                4,
                3,
                5,
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "cur",
                5
              ],
              [
                "max",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Index 6 (nums[6] = 1): cur = max(1, 5 + 1) = 6. maxSoFar updated to 6 (subarray [4, -1, 2, 1]).",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                4,
                3,
                5,
                6,
                "-",
                "-"
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              6
            ],
            "secondaryHighlights": [
              3,
              4,
              5,
              6
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "cur",
                6
              ],
              [
                "max",
                6
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Finish scan: index 7 (cur=1), index 8 (cur=5). Max subarray sum overall is 6.",
            "customVisual": {
              "array": [
                -2,
                1,
                -2,
                4,
                3,
                5,
                6,
                1,
                5
              ],
              "secondaryArray": [
                -2,
                1,
                -3,
                4,
                -1,
                2,
                1,
                -5,
                4
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "KADANE'S CURR_MAX DP"
            },
            "highlights": [
              6
            ],
            "secondaryHighlights": [
              3,
              4,
              5,
              6
            ],
            "best": {
              "label": "Max Subarray Sum = 6 ([4, -1, 2, 1])"
            },
            "vars": [
              [
                "maxSubarray",
                6
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "house-robber",
    "patternId": "dynamic-programming",
    "title": "House Robber",
    "subtitle": "dp[i] = max(dp[i−1], dp[i−2] + nums[i])",
    "kind": "problem",
    "leetcode": {
      "id": 198,
      "slug": "house-robber",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple",
      "Meta"
    ],
    "statement": "You are planning to rob houses along a street. Each house has a certain amount of money stashed. Adjacent houses have security systems connected, so you cannot rob two adjacent houses. Return the maximum amount of money you can rob.",
    "visualType": "dp-grid",
    "initialInput": [
      2,
      7,
      9,
      3,
      1
    ],
    "approaches": [
      {
        "id": "house-robber-dp",
        "label": "Linear DP · rob vs skip",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "rob1 = 0, rob2 = 0",
          "for num in nums:",
          "    // Max of (skip this house, rob this house + rob1)",
          "    temp = max(rob2, rob1 + num)",
          "    rob1 = rob2",
          "    rob2 = temp",
          "return rob2"
        ],
        "starterCode": {
          "javascript": "function rob(nums) {\n  let rob1 = 0, rob2 = 0;\n  for (let n of nums) {\n    const temp = Math.max(rob2, rob1 + n);\n    rob1 = rob2;\n    rob2 = temp;\n  }\n  return rob2;\n}",
          "python": "def rob(nums: list[int]) -> int:\n    rob1, rob2 = 0, 0\n    for n in nums:\n        temp = max(rob2, rob1 + n)\n        rob1, rob2 = rob2, temp\n    return rob2"
        },
        "solutionCode": {
          "javascript": "function rob(nums) {\n  let rob1 = 0, rob2 = 0;\n  for (let n of nums) {\n    const temp = Math.max(rob2, rob1 + n);\n    rob1 = rob2;\n    rob2 = temp;\n  }\n  return rob2;\n}",
          "python": "def rob(nums: list[int]) -> int:\n    rob1, rob2 = 0, 0\n    for n in nums:\n        temp = max(rob2, rob1 + n)\n        rob1, rob2 = rob2, temp\n    return rob2"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                7,
                9,
                3,
                1
              ]
            ],
            "expected": 12,
            "description": "Rob houses 0 (2), 2 (9), 4 (1) = 12"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                1
              ]
            ],
            "expected": 4,
            "description": "Rob house 0 and 2 = 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize rob1 = 0 (max loot ending 2 houses back), rob2 = 0 (max loot ending 1 house back).",
            "customVisual": {
              "array": [
                "-",
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "vars": [
              [
                "rob1",
                0
              ],
              [
                "rob2",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 0 ($2): Choice between skipping (rob2=0) or robbing (rob1+2=2). max(0, 2) = $2.",
            "customVisual": {
              "array": [
                2,
                "-",
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "highlights": [
              0
            ],
            "secondaryHighlights": [
              0
            ],
            "vars": [
              [
                "house 0",
                "$2"
              ],
              [
                "dp[0]",
                2
              ],
              [
                "rob1",
                0
              ],
              [
                "rob2",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 1 ($7): Choice between skipping (rob2=2) or robbing (rob1+7 = 0+7 = 7). max(2, 7) = $7.",
            "customVisual": {
              "array": [
                2,
                7,
                "-",
                "-",
                "-"
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              1
            ],
            "vars": [
              [
                "house 1",
                "$7"
              ],
              [
                "dp[1]",
                7
              ],
              [
                "rob1",
                2
              ],
              [
                "rob2",
                7
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 2 ($9): Choice between skipping (rob2=7) or robbing (rob1+9 = 2+9 = 11). max(7, 11) = $11 (rob houses 0 & 2).",
            "customVisual": {
              "array": [
                2,
                7,
                11,
                "-",
                "-"
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "highlights": [
              2
            ],
            "secondaryHighlights": [
              0,
              2
            ],
            "vars": [
              [
                "house 2",
                "$9"
              ],
              [
                "dp[2]",
                11
              ],
              [
                "rob1",
                7
              ],
              [
                "rob2",
                11
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 3 ($3): Choice between skipping (rob2=11) or robbing (rob1+3 = 7+3 = 10). max(11, 10) = $11 (skip house 3).",
            "customVisual": {
              "array": [
                2,
                7,
                11,
                11,
                "-"
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "highlights": [
              3
            ],
            "secondaryHighlights": [
              0,
              2
            ],
            "vars": [
              [
                "house 3",
                "$3"
              ],
              [
                "dp[3]",
                11
              ],
              [
                "rob1",
                11
              ],
              [
                "rob2",
                11
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "House 4 ($1): Choice between skipping (rob2=11) or robbing (rob1+1 = 11+1 = 12). Max loot = $12 (houses 0, 2, 4).",
            "customVisual": {
              "array": [
                2,
                7,
                11,
                11,
                12
              ],
              "secondaryArray": [
                2,
                7,
                9,
                3,
                1
              ],
              "secondaryTitle": "HOUSE VALUES ($)",
              "title": "MAX LOOT DP TABLE"
            },
            "highlights": [
              4
            ],
            "secondaryHighlights": [
              0,
              2,
              4
            ],
            "best": {
              "label": "Max Loot = $12 (houses 0, 2, 4)"
            },
            "vars": [
              [
                "result",
                12
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "coin-change",
    "patternId": "dynamic-programming",
    "title": "Coin Change",
    "subtitle": "dp[a] = 1 + min(dp[a − coin]) · fewest coins to make amount",
    "kind": "problem",
    "leetcode": {
      "id": 322,
      "slug": "coin-change",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Bloomberg",
      "Microsoft",
      "Google"
    ],
    "statement": "You are given an integer array coins and an integer amount. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return -1.",
    "visualType": "dp-grid",
    "initialInput": [
      0,
      1,
      1,
      2,
      2,
      1,
      2,
      2
    ],
    "approaches": [
      {
        "id": "coin-change-dp",
        "label": "Bottom-up DP · dp[a] = 1 + min(dp[a - c])",
        "complexity": {
          "time": "O(amount · coins)",
          "space": "O(amount)"
        },
        "pseudocode": [
          "dp = array of (amount + 1) filled with infinity",
          "dp[0] = 0",
          "for a from 1 to amount:",
          "    for c in coins:",
          "        if a - c >= 0:",
          "            dp[a] = min(dp[a], 1 + dp[a - c])",
          "return dp[amount] if dp[amount] != inf else -1"
        ],
        "starterCode": {
          "javascript": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (let c of coins) {\n      if (a - c >= 0) {\n        dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
          "python": "def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1"
        },
        "solutionCode": {
          "javascript": "function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (let c of coins) {\n      if (a - c >= 0) {\n        dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}",
          "python": "def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                5
              ],
              11
            ],
            "expected": 3,
            "description": "11 = 5 + 5 + 1 (3 coins)"
          },
          {
            "input": [
              [
                2
              ],
              3
            ],
            "expected": -1,
            "description": "Cannot form 3 with coin 2"
          },
          {
            "input": [
              [
                1
              ],
              0
            ],
            "expected": 0,
            "description": "Amount 0 requires 0 coins"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "coins = [1, 2, 5], target amount = 7. Base case: dp[0] = 0 coins. All other amounts start at ∞.",
            "customVisual": {
              "array": [
                0,
                "∞",
                "∞",
                "∞",
                "∞",
                "∞",
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "amount",
                7
              ],
              [
                "coins",
                "[1, 2, 5]"
              ],
              [
                "dp[0]",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 1: use coin 1 -> 1 + dp[0] = 1 coin.",
            "customVisual": {
              "array": [
                0,
                1,
                "∞",
                "∞",
                "∞",
                "∞",
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "dp[1]",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 2: coin 1 (1+dp[1]=2) or coin 2 (1+dp[0]=1) -> min is 1 coin.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                "∞",
                "∞",
                "∞",
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "dp[2]",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 3: coin 1 (1+dp[2]=2), coin 2 (1+dp[1]=2) -> min is 2 coins (2+1).",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                "∞",
                "∞",
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "dp[3]",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 4: coin 1 (1+dp[3]=3), coin 2 (1+dp[2]=2) -> min is 2 coins (2+2).",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                2,
                "∞",
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "dp[4]",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 5: coin 5 gives 1 + dp[0] = 1 coin (5).",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                2,
                1,
                "∞",
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              5
            ],
            "vars": [
              [
                "dp[5]",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "amount = 6: coin 5 gives 1 + dp[1] = 2 coins (5 + 1).",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                2,
                1,
                2,
                "∞"
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              6
            ],
            "vars": [
              [
                "dp[6]",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "amount = 7: coin 5 gives 1 + dp[2] = 1 + 1 = 2 coins (5 + 2). Fewest coins to make $7 is 2.",
            "customVisual": {
              "array": [
                0,
                1,
                1,
                2,
                2,
                1,
                2,
                2
              ],
              "secondaryArray": [
                1,
                2,
                5
              ],
              "secondaryTitle": "AVAILABLE COIN DENOMINATIONS",
              "title": "MIN COINS NEEDED PER AMOUNT"
            },
            "highlights": [
              7
            ],
            "best": {
              "label": "Fewest Coins for $7 = 2 (5 + 2)"
            },
            "vars": [
              [
                "result",
                2
              ],
              [
                "time",
                "O(amount · |coins|)"
              ],
              [
                "space",
                "O(amount)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "longest-common-subsequence",
    "patternId": "dynamic-programming",
    "title": "Longest Common Subsequence",
    "subtitle": "Grid DP · match → diagonal+1, else max(up, left)",
    "kind": "problem",
    "leetcode": {
      "id": 1143,
      "slug": "longest-common-subsequence",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "statement": "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence keeps relative order but need not be contiguous. If there is no common subsequence, return 0.",
    "visualType": "matrix",
    "initialInput": [
      [0, 0, 0, 0],
      [0, 1, 1, 1],
      [0, 1, 1, 1],
      [0, 1, 2, 2],
      [0, 1, 2, 2],
      [0, 1, 2, 3]
    ],
    "approaches": [
      {
        "id": "lcs-2d-tabulation",
        "label": "2-D tabulation",
        "complexity": {
          "time": "O(m·n)",
          "space": "O(m·n)"
        },
        "pseudocode": [
          "dp = (m+1) * (n+1) grid of 0   // row 0 / col 0 = empty string",
          "for i in 1..m: for j in 1..n:",
          "  if s1[i-1] == s2[j-1]:",
          "    // match -> extend diagonal",
          "    dp[i][j] = dp[i-1][j-1] + 1",
          "  else:",
          "    dp[i][j] = max(dp[i-1][j], dp[i][j-1])",
          "",
          "return dp[m][n]"
        ],
        "starterCode": {
          "javascript": "function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
          "python": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i-1] == text2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
        },
        "solutionCode": {
          "javascript": "function longestCommonSubsequence(text1, text2) {\n  const m = text1.length, n = text2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (text1[i - 1] === text2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1] + 1;\n      } else {\n        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
          "python": "def longestCommonSubsequence(text1: str, text2: str) -> int:\n    m, n = len(text1), len(text2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if text1[i-1] == text2[j-1]:\n                dp[i][j] = dp[i-1][j-1] + 1\n            else:\n                dp[i][j] = max(dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
        },
        "testCases": [
          {
            "input": ["abcde", "ace"],
            "expected": 3,
            "description": "text1 = 'abcde', text2 = 'ace' -> LCS is 'ace' (length 3)"
          },
          {
            "input": ["abc", "abc"],
            "expected": 3,
            "description": "Identical strings"
          },
          {
            "input": ["abc", "def"],
            "expected": 0,
            "description": "No common characters"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Find the longest common subsequence of s1 = \"abcde\" and s2 = \"ace\". Define dp[i][j] = length of the LCS of the first i chars of s1 and the first j chars of s2. s1 runs DOWN the rows, s2 runs ACROSS the columns. The answer sits at the bottom-right.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."]
            ],
            "vars": [
              ["s1 (rows)", "abcde"],
              ["s2 (cols)", "ace"],
              ["state", "dp[i][j] = LCS(s1[:i], s2[:j])"]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Base case: row 0 and col 0 represent comparing with an empty string. LCS with empty string has length 0.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "safe" },
              { "r": 0, "c": 1, "status": "safe" },
              { "r": 0, "c": 2, "status": "safe" },
              { "r": 0, "c": 3, "status": "safe" },
              { "r": 1, "c": 0, "status": "safe" },
              { "r": 2, "c": 0, "status": "safe" },
              { "r": 3, "c": 0, "status": "safe" },
              { "r": 4, "c": 0, "status": "safe" },
              { "r": 5, "c": 0, "status": "safe" }
            ],
            "vars": [
              ["base case", "dp[0][j] = 0, dp[i][0] = 0"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=1 ('a'), j=1 ('a'): Match 'a' == 'a'! Take diagonal + 1: dp[1][1] = dp[0][0] + 1 = 0 + 1 = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "pacific" },
              { "r": 1, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'a' == 'a'"],
              ["diagonal", 0],
              ["dp[1][1]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1 ('a'), j=2 ('c'): 'a' != 'c' -> no match. dp[1][2] = max(up=0, left=1) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 2, "status": "pacific" },
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 1, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'a' != 'c'"],
              ["from up", 0],
              ["from left", 1],
              ["dp[1][2]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1 ('a'), j=3 ('e'): 'a' != 'e' -> dp[1][3] = max(up=0, left=1) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 3, "status": "pacific" },
              { "r": 1, "c": 2, "status": "pacific" },
              { "r": 1, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'a' != 'e'"],
              ["dp[1][3]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=2 ('b'), j=1 ('a'): 'b' != 'a' -> dp[2][1] = max(up=1, left=0) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 2, "c": 0, "status": "pacific" },
              { "r": 2, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'b' != 'a'"],
              ["dp[2][1]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare s1[1] = 'b' with s2[1] = 'c' -> no match. Drop one char from either string and take the better: dp[2][2] = max(dp[1][2], dp[2][1]) = max(1, 1) = 1. Read UP and LEFT (blue).",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 2, "status": "pacific" },
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 2, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'b' != 'c'"],
              ["from up", 1],
              ["from left", 1],
              ["dp", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=2 ('b'), j=3 ('e'): 'b' != 'e' -> dp[2][3] = max(up=1, left=1) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, ".", ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 3, "status": "pacific" },
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 2, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'b' != 'e'"],
              ["dp[2][3]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=3 ('c'), j=1 ('a'): 'c' != 'a' -> dp[3][1] = max(up=1, left=0) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, ".", "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 3, "c": 0, "status": "pacific" },
              { "r": 3, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'c' != 'a'"],
              ["dp[3][1]", 1]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=3 ('c'), j=2 ('c'): Match 'c' == 'c'! Take diagonal + 1: dp[3][2] = dp[2][1] + 1 = 1 + 1 = 2 (subsequence \"ac\").",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, "."],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 3, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'c' == 'c' (MATCH)"],
              ["diagonal", 1],
              ["dp[3][2]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=3 ('c'), j=3 ('e'): 'c' != 'e' -> dp[3][3] = max(up=1, left=2) = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, ".", ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 3, "status": "pacific" },
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 3, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'c' != 'e'"],
              ["dp[3][3]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4 ('d'), j=1 ('a'): 'd' != 'a' -> dp[4][1] = max(up=1, left=0) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, ".", "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 4, "c": 0, "status": "pacific" },
              { "r": 4, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'d' != 'a'"],
              ["dp[4][1]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4 ('d'), j=2 ('c'): 'd' != 'c' -> dp[4][2] = max(up=2, left=1) = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, "."],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 4, "c": 1, "status": "pacific" },
              { "r": 4, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'d' != 'c'"],
              ["dp[4][2]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4 ('d'), j=3 ('e'): 'd' != 'e' -> dp[4][3] = max(up=2, left=2) = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, 2],
              [0, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 3, "status": "pacific" },
              { "r": 4, "c": 2, "status": "pacific" },
              { "r": 4, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'d' != 'e'"],
              ["dp[4][3]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=5 ('e'), j=1 ('a'): 'e' != 'a' -> dp[5][1] = max(up=1, left=0) = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, 2],
              [0, 1, ".", "."]
            ],
            "gridHighlights": [
              { "r": 4, "c": 1, "status": "pacific" },
              { "r": 5, "c": 0, "status": "pacific" },
              { "r": 5, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' != 'a'"],
              ["dp[5][1]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=5 ('e'), j=2 ('c'): 'e' != 'c' -> dp[5][2] = max(up=2, left=1) = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, 2],
              [0, 1, 2, "."]
            ],
            "gridHighlights": [
              { "r": 4, "c": 2, "status": "pacific" },
              { "r": 5, "c": 1, "status": "pacific" },
              { "r": 5, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' != 'c'"],
              ["dp[5][2]", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=5 ('e'), j=3 ('e'): Match 'e' == 'e'! Take diagonal + 1: dp[5][3] = dp[4][2] + 1 = 2 + 1 = 3.",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, 2],
              [0, 1, 2, 3]
            ],
            "gridHighlights": [
              { "r": 4, "c": 2, "status": "pacific" },
              { "r": 5, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' == 'e' (MATCH)"],
              ["diagonal", 2],
              ["dp[5][3]", 3]
            ]
          },
          {
            "codeLine": 9,
            "narration": "The bottom-right holds the answer: dp[5][3] = 3. The LCS of \"abcde\" and \"ace\" has length 3, it is \"ace\". We filled (m+1)(n+1) cells, each in O(1) -> O(m·n) time and space. Backtrack from the bottom-right (following diagonals on matches, the larger neighbour otherwise) to recover the actual subsequence \"ace\".",
            "customVisual": {
              "label": "DP · ROWS = \"ABCDE\", COLS = \"ACE\" · DP[i][j] = LCS(S1[1:i], S2[1:j])",
              "hideCoords": true
            },
            "matrix": [
              [0, 0, 0, 0],
              [0, 1, 1, 1],
              [0, 1, 1, 1],
              [0, 1, 2, 2],
              [0, 1, 2, 2],
              [0, 1, 2, 3]
            ],
            "gridHighlights": [
              { "r": 1, "c": 1, "status": "safe" },
              { "r": 3, "c": 2, "status": "safe" },
              { "r": 5, "c": 3, "status": "active" }
            ],
            "best": {
              "label": "LCS(\"abcde\", \"ace\") = 3 (\"ace\")"
            },
            "vars": [
              ["answer", 3],
              ["LCS", "ace"],
              ["time", "O(m·n)"],
              ["space", "O(m·n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "edit-distance",
    "patternId": "dynamic-programming",
    "title": "Edit Distance",
    "subtitle": "Grid DP · dp[i][j] = min edits word1[:i] → word2[:j]",
    "kind": "problem",
    "leetcode": {
      "id": 72,
      "slug": "edit-distance",
      "difficulty": "Hard"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "statement": "Given two strings word1 and word2, return the minimum number of operations (insert, delete, or replace a character) required to convert word1 into word2.",
    "visualType": "matrix",
    "initialInput": [
      [0, 1, 2, 3],
      [1, 1, 2, 3],
      [2, 2, 1, 2],
      [3, 2, 2, 2],
      [4, 3, 3, 2],
      [5, 4, 4, 3]
    ],
    "approaches": [
      {
        "id": "edit-distance-2d-tabulation",
        "label": "2-D tabulation",
        "complexity": {
          "time": "O(m·n)",
          "space": "O(m·n)"
        },
        "pseudocode": [
          "dp = (m+1) * (n+1) grid",
          "dp[i][0] = i (delete all) ; dp[0][j] = j (insert all)",
          "for i in 1..m: for j in 1..n:",
          "  if word1[i-1] == word2[j-1]:",
          "    dp[i][j] = dp[i-1][j-1]",
          "  else:",
          "    dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])",
          "",
          "return dp[m][n]"
        ],
        "starterCode": {
          "javascript": "function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
          "python": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
        },
        "solutionCode": {
          "javascript": "function minDistance(word1, word2) {\n  const m = word1.length, n = word2.length;\n  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));\n  for (let i = 0; i <= m; i++) dp[i][0] = i;\n  for (let j = 0; j <= n; j++) dp[0][j] = j;\n  for (let i = 1; i <= m; i++) {\n    for (let j = 1; j <= n; j++) {\n      if (word1[i - 1] === word2[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);\n      }\n    }\n  }\n  return dp[m][n];\n}",
          "python": "def minDistance(word1: str, word2: str) -> int:\n    m, n = len(word1), len(word2)\n    dp = [[0] * (n + 1) for _ in range(m + 1)]\n    for i in range(m + 1): dp[i][0] = i\n    for j in range(n + 1): dp[0][j] = j\n    for i in range(1, m + 1):\n        for j in range(1, n + 1):\n            if word1[i-1] == word2[j-1]:\n                dp[i][j] = dp[i-1][j-1]\n            else:\n                dp[i][j] = 1 + min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])\n    return dp[m][n]"
        },
        "testCases": [
          {
            "input": ["horse", "ros"],
            "expected": 3,
            "description": "horse -> rorse -> rose -> ros (3 edits)"
          },
          {
            "input": ["intention", "execution"],
            "expected": 5,
            "description": "5 edits"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "EDIT DISTANCE: the fewest insertions, deletions, or replacements to turn word1 = \"horse\" into word2 = \"ros\". Define dp[i][j] = min edits to convert the first i letters of word1 into the first j letters of word2. The grid is (5+1) * (3+1); row 0 and column 0 stand for the empty prefix ∅. The answer lives in the bottom-right.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."],
              [".", ".", ".", "."]
            ],
            "vars": [
              ["word1", "\"horse\""],
              ["word2", "\"ros\""],
              ["state", "dp[i][j] = edits word1[:i] -> word2[:j]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Base cases: to convert word1[:i] to ∅, delete all i letters (dp[i][0] = i). To convert ∅ to word2[:j], insert all j letters (dp[0][j] = j).",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, ".", ".", "."],
              [2, ".", ".", "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "safe" },
              { "r": 0, "c": 1, "status": "safe" },
              { "r": 0, "c": 2, "status": "safe" },
              { "r": 0, "c": 3, "status": "safe" },
              { "r": 1, "c": 0, "status": "safe" },
              { "r": 2, "c": 0, "status": "safe" },
              { "r": 3, "c": 0, "status": "safe" },
              { "r": 4, "c": 0, "status": "safe" },
              { "r": 5, "c": 0, "status": "safe" }
            ],
            "vars": [
              ["base cases", "dp[i][0] = i, dp[0][j] = j"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1 ('h'), j=1 ('r'): 'h' != 'r' -> 1 + min(replace:0, delete:1, insert:1) = 1 + 0 = 1.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, ".", "."],
              [2, ".", ".", "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "pacific" },
              { "r": 0, "c": 1, "status": "pacific" },
              { "r": 1, "c": 0, "status": "pacific" },
              { "r": 1, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'h' != 'r'"],
              ["replace", 0],
              ["delete", 1],
              ["insert", 1],
              ["dp[1][1]", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1 ('h'), j=2 ('o'): 'h' != 'o' -> 1 + min(diag:1, up:2, left:1) = 1 + 1 = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, "."],
              [2, ".", ".", "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 1, "status": "pacific" },
              { "r": 0, "c": 2, "status": "pacific" },
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 1, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'h' != 'o'"],
              ["dp[1][2]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1 ('h'), j=3 ('s'): 'h' != 's' -> 1 + min(diag:2, up:3, left:2) = 1 + 2 = 3.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, ".", ".", "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 2, "status": "pacific" },
              { "r": 0, "c": 3, "status": "pacific" },
              { "r": 1, "c": 2, "status": "pacific" },
              { "r": 1, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'h' != 's'"],
              ["dp[1][3]", 3]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=2 ('o'), j=1 ('r'): 'o' != 'r' -> 1 + min(diag:1, up:1, left:2) = 1 + 1 = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, ".", "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 0, "status": "pacific" },
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 2, "c": 0, "status": "pacific" },
              { "r": 2, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'o' != 'r'"],
              ["dp[2][1]", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "word1[1] = 'o' MATCHES word2[1] = 'o', so this letter needs no edit. Inherit the diagonal: dp[2][2] = dp[1][1] = 1. A free move, the cheapest case.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, "."],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 1, "status": "pacific" },
              { "r": 2, "c": 2, "status": "active" }
            ],
            "vars": [
              ["cell", "(2,2)"],
              ["compare", "'o' == 'o' ✓"],
              ["diagonal (free)", 1],
              ["dp", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=2 ('o'), j=3 ('s'): 'o' != 's' -> 1 + min(diag:2, up:3, left:1) = 1 + 1 = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, ".", ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 2, "status": "pacific" },
              { "r": 1, "c": 3, "status": "pacific" },
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 2, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'o' != 's'"],
              ["dp[2][3]", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=3 ('r'), j=1 ('r'): Match 'r' == 'r'! Inherit diagonal: dp[3][1] = dp[2][0] = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, ".", "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 0, "status": "pacific" },
              { "r": 3, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'r' == 'r' ✓"],
              ["dp[3][1]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=3 ('r'), j=2 ('o'): 'r' != 'o' -> 1 + min(diag:2, up:1, left:2) = 1 + 1 = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, "."],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 1, "status": "pacific" },
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 3, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'r' != 'o'"],
              ["dp[3][2]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=3 ('r'), j=3 ('s'): 'r' != 's' -> 1 + min(diag:1, up:2, left:2) = 1 + 1 = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, ".", ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 2, "c": 3, "status": "pacific" },
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 3, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'r' != 's'"],
              ["dp[3][3]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4 ('s'), j=1 ('r'): 's' != 'r' -> 1 + min(diag:3, up:2, left:4) = 1 + 2 = 3.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, ".", "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 0, "status": "pacific" },
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 4, "c": 0, "status": "pacific" },
              { "r": 4, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'s' != 'r'"],
              ["dp[4][1]", 3]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4 ('s'), j=2 ('o'): 's' != 'o' -> 1 + min(diag:2, up:2, left:3) = 1 + 2 = 3.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, "."],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 1, "status": "pacific" },
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 4, "c": 1, "status": "pacific" },
              { "r": 4, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'s' != 'o'"],
              ["dp[4][2]", 3]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=4 ('s'), j=3 ('s'): Match 's' == 's'! Inherit diagonal: dp[4][3] = dp[3][2] = 2.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, 2],
              [5, ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 3, "c": 2, "status": "pacific" },
              { "r": 4, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'s' == 's' ✓"],
              ["dp[4][3]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=5 ('e'), j=1 ('r'): 'e' != 'r' -> 1 + min(diag:4, up:3, left:5) = 1 + 3 = 4.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, 2],
              [5, 4, ".", "."]
            ],
            "gridHighlights": [
              { "r": 4, "c": 0, "status": "pacific" },
              { "r": 4, "c": 1, "status": "pacific" },
              { "r": 5, "c": 0, "status": "pacific" },
              { "r": 5, "c": 1, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' != 'r'"],
              ["dp[5][1]", 4]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=5 ('e'), j=2 ('o'): 'e' != 'o' -> 1 + min(diag:3, up:3, left:4) = 1 + 3 = 4.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, 2],
              [5, 4, 4, "."]
            ],
            "gridHighlights": [
              { "r": 4, "c": 1, "status": "pacific" },
              { "r": 4, "c": 2, "status": "pacific" },
              { "r": 5, "c": 1, "status": "pacific" },
              { "r": 5, "c": 2, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' != 'o'"],
              ["dp[5][2]", 4]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=5 ('e'), j=3 ('s'): 'e' != 's' -> 1 + min(diag:3, up:2, left:4) = 1 + 2 = 3.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, 2],
              [5, 4, 4, 3]
            ],
            "gridHighlights": [
              { "r": 4, "c": 2, "status": "pacific" },
              { "r": 4, "c": 3, "status": "pacific" },
              { "r": 5, "c": 2, "status": "pacific" },
              { "r": 5, "c": 3, "status": "active" }
            ],
            "vars": [
              ["compare", "'e' != 's'"],
              ["dp[5][3]", 3]
            ]
          },
          {
            "codeLine": 9,
            "narration": "The bottom-right holds the answer: dp[5][3] = 3. Turning \"horse\" into \"ros\" takes 3 edits, replace 'h'->'r', delete 'o', delete 'e' (one optimal sequence). We filled (m+1)·(n+1) cells, each in O(1), giving O(m·n) time and space.",
            "customVisual": {
              "label": "DP · ROWS = \"HORSE\" (+ ∅), COLS = \"ROS\" (+ ∅)",
              "hideCoords": true
            },
            "matrix": [
              [0, 1, 2, 3],
              [1, 1, 2, 3],
              [2, 2, 1, 2],
              [3, 2, 2, 2],
              [4, 3, 3, 2],
              [5, 4, 4, 3]
            ],
            "gridHighlights": [
              { "r": 5, "c": 3, "status": "active" }
            ],
            "best": {
              "label": "Min Edit Distance = 3"
            },
            "vars": [
              ["answer", 3],
              ["time", "O(m·n)"],
              ["space", "O(m·n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "counting-bits",
    "patternId": "dynamic-programming",
    "title": "Counting Bits",
    "subtitle": "dp[i] = dp[i>>1] + (i & 1)",
    "kind": "problem",
    "leetcode": {
      "id": 338,
      "slug": "counting-bits",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "Given an integer n, return an array of length n+1 where each entry i holds the number of set bits (1s) in the binary representation of i.",
    "visualType": "dp-grid",
    "initialInput": [
      0,
      1,
      1,
      2,
      1,
      2,
      2,
      3
    ],
    "approaches": [
      {
        "id": "dp-on-last-bit",
        "label": "DP on the last bit",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "def countBits(n):",
          "  dp = [0] * (n + 1)",
          "  for i in 1..n:",
          "    # i>>1 drops the last bit (already counted)",
          "    # i&1 adds that dropped bit back",
          "    dp[i] = dp[i >> 1] + (i & 1)",
          "  return dp"
        ],
        "starterCode": {
          "javascript": "function countBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    dp[i] = dp[i >> 1] + (i & 1);\n  }\n  return dp;\n}",
          "python": "def countBits(n: int) -> list[int]:\n    dp = [0] * (n + 1)\n    for i in range(1, n + 1):\n        dp[i] = dp[i >> 1] + (i & 1)\n    return dp"
        },
        "solutionCode": {
          "javascript": "function countBits(n) {\n  const dp = new Array(n + 1).fill(0);\n  for (let i = 1; i <= n; i++) {\n    dp[i] = dp[i >> 1] + (i & 1);\n  }\n  return dp;\n}",
          "python": "def countBits(n: int) -> list[int]:\n    dp = [0] * (n + 1)\n    for i in range(1, n + 1):\n        dp[i] = dp[i >> 1] + (i & 1)\n    return dp"
        },
        "testCases": [
          {
            "input": [5],
            "expected": [0, 1, 1, 2, 1, 2],
            "description": "n = 5 -> [0, 1, 1, 2, 1, 2]"
          },
          {
            "input": [7],
            "expected": [0, 1, 1, 2, 1, 2, 2, 3],
            "description": "n = 7 -> [0, 1, 1, 2, 1, 2, 2, 3]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Count set bits (1s) for every number from 0 to n = 7. Each number i in binary is just (i >> 1) shifted left by 1, with (i & 1) as its least significant bit.",
            "customVisual": {
              "array": [".", ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "vars": [
              ["problem", "Counting Bits"],
              ["n", 7]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Base case: dp[0] = 0. Binary 0 has 0 set bits.",
            "customVisual": {
              "array": [0, ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [0],
            "vars": [
              ["dp[0]", 0]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Bit shift recurrence: i >> 1 removes the lowest bit. Since i >> 1 < i, its set bit count dp[i >> 1] is already computed!",
            "customVisual": {
              "array": [0, ".", ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "vars": [
              ["recurrence", "dp[i] = dp[i >> 1] + (i & 1)"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[1]: 1 is 1 in binary. 1 >> 1 = 0, 1 & 1 = 1. dp[1] = dp[0] + 1 = 0 + 1 = 1.",
            "customVisual": {
              "array": [0, 1, ".", ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [0, 1],
            "vars": [
              ["i", "1 (1)"],
              ["i>>1", 0],
              ["dp[0]", 0],
              ["i&1", 1],
              ["dp[1]", 1]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[2]: 2 is 10 in binary. 2 >> 1 = 1 (1), 2 & 1 = 0. dp[2] = dp[1] + 0 = 1 + 0 = 1.",
            "customVisual": {
              "array": [0, 1, 1, ".", ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [1, 2],
            "vars": [
              ["i", "2 (10)"],
              ["i>>1", 1],
              ["dp[1]", 1],
              ["i&1", 0],
              ["dp[2]", 1]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[3]: 3 is 11 in binary. 3 >> 1 = 1 (1), 3 & 1 = 1. dp[3] = dp[1] + 1 = 1 + 1 = 2.",
            "customVisual": {
              "array": [0, 1, 1, 2, ".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [1, 3],
            "vars": [
              ["i", "3 (11)"],
              ["i>>1", 1],
              ["dp[1]", 1],
              ["i&1", 1],
              ["dp[3]", 2]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[4]: 4 is 100 in binary. 4 >> 1 = 2 (10), 4 & 1 = 0. dp[4] = dp[2] + 0 = 1 + 0 = 1.",
            "customVisual": {
              "array": [0, 1, 1, 2, 1, ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [2, 4],
            "vars": [
              ["i", "4 (100)"],
              ["i>>1", 2],
              ["dp[2]", 1],
              ["i&1", 0],
              ["dp[4]", 1]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[5]: 5 is 101 in binary. 5 >> 1 = 2 (10), 5 & 1 = 1. dp[5] = dp[2] + 1 = 1 + 1 = 2.",
            "customVisual": {
              "array": [0, 1, 1, 2, 1, 2, ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [2, 5],
            "vars": [
              ["i", "5 (101)"],
              ["i>>1", 2],
              ["dp[2]", 1],
              ["i&1", 1],
              ["dp[5]", 2]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[6]: 6 is 110 in binary. 6 >> 1 = 3 (11), 6 & 1 = 0. dp[6] = dp[3] + 0 = 2 + 0 = 2.",
            "customVisual": {
              "array": [0, 1, 1, 2, 1, 2, 2, "."],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [3, 6],
            "vars": [
              ["i", "6 (110)"],
              ["i>>1", 3],
              ["dp[3]", 2],
              ["i&1", 0],
              ["dp[6]", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[7]: 7 is 111 in binary. Drop the last bit -> 7 >> 1 = 3 (11), whose count dp[3] = 2 is the blue cell we read. Add back the dropped bit 7 & 1 = 1. So dp[7] = dp[3] + 1 = 2 + 1 = 3.",
            "customVisual": {
              "array": [0, 1, 1, 2, 1, 2, 2, 3],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [3, 7],
            "vars": [
              ["i", "7 (111)"],
              ["i>>1", 3],
              ["dp[3]", 2],
              ["i&1", 1],
              ["dp[7]", 3]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return dp = [0, 1, 1, 2, 1, 2, 2, 3]. Each number computed in O(1) time using bit shift and masking -> overall O(n) linear time, O(n) space.",
            "customVisual": {
              "array": [0, 1, 1, 2, 1, 2, 2, 3],
              "labels": ["[0]", "[1]", "[2]", "[3]", "[4]", "[5]", "[6]", "[7]"],
              "title": ""
            },
            "highlights": [7],
            "best": {
              "label": "Counting Bits Complete: O(n) Time"
            },
            "vars": [
              ["result", "[0, 1, 1, 2, 1, 2, 2, 3]"],
              ["time", "O(n)"],
              ["space", "O(n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "decode-ways",
    "patternId": "dynamic-programming",
    "title": "Decode Ways",
    "subtitle": "1 or 2 digits at a time",
    "kind": "problem",
    "leetcode": {
      "id": 91,
      "slug": "decode-ways",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Uber"
    ],
    "statement": "Letters A through Z map to the codes 1 through 26. Given a string of digits, return the number of distinct ways it can be decoded back into letters.",
    "visualType": "dp-grid",
    "initialInput": [
      1,
      1,
      2,
      3
    ],
    "approaches": [
      {
        "id": "dp-over-prefixes",
        "label": "DP over prefixes",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "def numDecodings(s):",
          "  dp = [0] * (n + 1)",
          "  dp[0] = 1                 # empty prefix: one way",
          "  for i in 1..n:",
          "    if s[i-1] != '0':       # one-digit letter",
          "      dp[i] += dp[i-1]",
          "    if i >= 2 and 10 <= int(s[i-2:i]) <= 26:",
          "      dp[i] += dp[i-2]       # two-digit letter",
          "  return dp[n]"
        ],
        "starterCode": {
          "javascript": "function numDecodings(s) {\n  if (!s || s[0] === '0') return 0;\n  const n = s.length;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    if (s[i - 1] !== '0') dp[i] += dp[i - 1];\n    if (i >= 2) {\n      const two = parseInt(s.slice(i - 2, i));\n      if (two >= 10 && two <= 26) dp[i] += dp[i - 2];\n    }\n  }\n  return dp[n];\n}",
          "python": "def numDecodings(s: str) -> int:\n    if not s or s[0] == '0':\n        return 0\n    n = len(s)\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    for i in range(1, n + 1):\n        if s[i-1] != '0':\n            dp[i] += dp[i-1]\n        if i >= 2 and 10 <= int(s[i-2:i]) <= 26:\n            dp[i] += dp[i-2]\n    return dp[n]"
        },
        "solutionCode": {
          "javascript": "function numDecodings(s) {\n  if (!s || s[0] === '0') return 0;\n  const n = s.length;\n  const dp = new Array(n + 1).fill(0);\n  dp[0] = 1;\n  for (let i = 1; i <= n; i++) {\n    if (s[i - 1] !== '0') dp[i] += dp[i - 1];\n    if (i >= 2) {\n      const two = parseInt(s.slice(i - 2, i));\n      if (two >= 10 && two <= 26) dp[i] += dp[i - 2];\n    }\n  }\n  return dp[n];\n}",
          "python": "def numDecodings(s: str) -> int:\n    if not s or s[0] == '0':\n        return 0\n    n = len(s)\n    dp = [0] * (n + 1)\n    dp[0] = 1\n    for i in range(1, n + 1):\n        if s[i-1] != '0':\n            dp[i] += dp[i-1]\n        if i >= 2 and 10 <= int(s[i-2:i]) <= 26:\n            dp[i] += dp[i-2]\n    return dp[n]"
        },
        "testCases": [
          {
            "input": ["226"],
            "expected": 3,
            "description": "s = '226' -> 'BZ', 'VF', 'BBF' (3 ways)"
          },
          {
            "input": ["12"],
            "expected": 2,
            "description": "s = '12' -> 'AB', 'L' (2 ways)"
          },
          {
            "input": ["06"],
            "expected": 0,
            "description": "Leading zero is invalid"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Decode ways for string s = \"226\". Letters A-Z map to 1-26. We test single-digit prefixes (1-9) and two-digit prefixes (10-26).",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "vars": [
              ["s", "\"226\""],
              ["n", 3]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Allocate DP array of size n + 1 = 4, where dp[i] holds the number of valid decodings for prefix s[0..i-1].",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [".", ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "vars": [
              ["dp size", 4]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Base case: dp[0] = 1. An empty string has 1 valid decoding (the empty sequence). It acts as a base multiplier for valid prefix matches.",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [1, ".", ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "highlights": [0],
            "vars": [
              ["dp[0]", 1]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[1] (decoding \"2\"): take \"2\" alone -> +dp[0] (=1). Sum the surviving paths -> dp[1] = 1. Blue cells are the prefixes we read.",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [1, 1, ".", "."],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "secondaryHighlights": [0],
            "highlights": [0, 1],
            "vars": [
              ["i", 1],
              ["s[i-1]", "'2'"],
              ["dp[1]", 1]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[2] (decoding \"22\"): single digit \"2\" is valid (+dp[1]=1 -> 'B') and two-digit \"22\" in [10..26] is valid (+dp[0]=1 -> 'V'). Total dp[2] = 1 + 1 = 2 (\"BB\", \"V\").",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [1, 1, 2, "."],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "secondaryHighlights": [0, 1],
            "highlights": [0, 1, 2],
            "vars": [
              ["i", 2],
              ["1-digit '2'", "+1"],
              ["2-digit '22'", "+1"],
              ["dp[2]", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[3] (decoding \"226\"): single digit \"6\" is valid (+dp[2]=2 -> 'BBF', 'VF') and two-digit \"26\" in [10..26] is valid (+dp[1]=1 -> 'BZ'). Total dp[3] = 2 + 1 = 3.",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [1, 1, 2, 3],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "secondaryHighlights": [1, 2],
            "highlights": [1, 2, 3],
            "vars": [
              ["i", 3],
              ["1-digit '6'", "+2"],
              ["2-digit '26'", "+1"],
              ["dp[3]", 3]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Return dp[3] = 3. The 3 valid decodings for \"226\" are \"BBF\", \"BZ\", and \"VF\". Solved in linear O(n) time and O(n) space!",
            "customVisual": {
              "secondaryArray": [2, 2, 6],
              "secondaryTitle": "",
              "array": [1, 1, 2, 3],
              "labels": ["[0]", "[1]", "[2]", "[3]"],
              "title": "DP"
            },
            "highlights": [3],
            "best": {
              "label": "Total Decodings = 3 ('BBF', 'BZ', 'VF')"
            },
            "vars": [
              ["answer", 3],
              ["time", "O(n)"],
              ["space", "O(n)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "unique-paths",
    "patternId": "dynamic-programming",
    "title": "Unique Paths",
    "subtitle": "Grid DP · dp[i][j] = dp[i−1][j] + dp[i][j−1]",
    "kind": "problem",
    "leetcode": {
      "id": 62,
      "slug": "unique-paths",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "statement": "A robot is on an m x n grid, starting at top-left (0, 0) moving to bottom-right (m-1, n-1). The robot can only move down or right. Return the number of possible unique paths.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        1,
        1,
        1
      ],
      [
        1,
        2,
        3,
        4
      ],
      [
        1,
        3,
        6,
        10
      ]
    ],
    "approaches": [
      {
        "id": "unique-paths-grid-dp",
        "label": "2D Grid DP · sum from top and left",
        "complexity": {
          "time": "O(m · n)",
          "space": "O(m · n)"
        },
        "pseudocode": [
          "dp = m x n grid filled with 1",
          "for r from 1 to m - 1:",
          "    for c from 1 to n - 1:",
          "        dp[r][c] = dp[r-1][c] + dp[r][c-1]",
          "return dp[m-1][n-1]"
        ],
        "starterCode": {
          "javascript": "function uniquePaths(m, n) {\n  const dp = Array.from({ length: m }, () => new Array(n).fill(1));\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) {\n      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}",
          "python": "def uniquePaths(m: int, n: int) -> int:\n    dp = [[1] * n for _ in range(m)]\n    for r in range(1, m):\n        for c in range(1, n):\n            dp[r][c] = dp[r-1][c] + dp[r][c-1]\n    return dp[m-1][n-1]"
        },
        "solutionCode": {
          "javascript": "function uniquePaths(m, n) {\n  const dp = Array.from({ length: m }, () => new Array(n).fill(1));\n  for (let r = 1; r < m; r++) {\n    for (let c = 1; c < n; c++) {\n      dp[r][c] = dp[r - 1][c] + dp[r][c - 1];\n    }\n  }\n  return dp[m - 1][n - 1];\n}",
          "python": "def uniquePaths(m: int, n: int) -> int:\n    dp = [[1] * n for _ in range(m)]\n    for r in range(1, m):\n        for c in range(1, n):\n            dp[r][c] = dp[r-1][c] + dp[r][c-1]\n    return dp[m-1][n-1]"
        },
        "testCases": [
          {
            "input": [
              3,
              4
            ],
            "expected": 10,
            "description": "3x4 grid has 10 paths"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize top row and left column with 1 path (only right/down moves allowed from origin).",
            "matrix": [
              [
                1,
                1,
                1,
                1
              ],
              [
                1,
                "-",
                "-",
                "-"
              ],
              [
                1,
                "-",
                "-",
                "-"
              ]
            ],
            "customVisual": {
              "label": "UNIQUE PATHS 3×4 GRID"
            },
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited"
              }
            ],
            "vars": [
              [
                "m",
                3
              ],
              [
                "n",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Cell (1,1): dp[1][1] = top(1) + left(1) = 2 unique paths.",
            "matrix": [
              [
                1,
                1,
                1,
                1
              ],
              [
                1,
                2,
                "-",
                "-"
              ],
              [
                1,
                "-",
                "-",
                "-"
              ]
            ],
            "customVisual": {
              "label": "UNIQUE PATHS 3×4 GRID"
            },
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "visited-target",
                "badge": "1+1=2"
              }
            ],
            "vars": [
              [
                "dp[1][1]",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Cell (1,2): dp[1][2] = 1 + 2 = 3. Cell (1,3): dp[1][3] = 1 + 3 = 4.",
            "matrix": [
              [
                1,
                1,
                1,
                1
              ],
              [
                1,
                2,
                3,
                4
              ],
              [
                1,
                "-",
                "-",
                "-"
              ]
            ],
            "customVisual": {
              "label": "UNIQUE PATHS 3×4 GRID"
            },
            "gridHighlights": [
              {
                "r": 1,
                "c": 2,
                "status": "active"
              },
              {
                "r": 1,
                "c": 3,
                "status": "active"
              }
            ],
            "vars": [
              [
                "dp[1][3]",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Cell (2,1): 1 + 2 = 3. Cell (2,2): 3 + 3 = 6.",
            "matrix": [
              [
                1,
                1,
                1,
                1
              ],
              [
                1,
                2,
                3,
                4
              ],
              [
                1,
                3,
                6,
                "-"
              ]
            ],
            "customVisual": {
              "label": "UNIQUE PATHS 3×4 GRID"
            },
            "gridHighlights": [
              {
                "r": 2,
                "c": 1,
                "status": "active"
              },
              {
                "r": 2,
                "c": 2,
                "status": "active"
              }
            ],
            "vars": [
              [
                "dp[2][2]",
                6
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Destination (2,3): dp[2][3] = dp[1][3] (4) + dp[2][2] (6) = 10 unique paths.",
            "matrix": [
              [
                1,
                1,
                1,
                1
              ],
              [
                1,
                2,
                3,
                4
              ],
              [
                1,
                3,
                6,
                10
              ]
            ],
            "customVisual": {
              "label": "UNIQUE PATHS 3×4 GRID"
            },
            "gridHighlights": [
              {
                "r": 2,
                "c": 3,
                "status": "visited-target",
                "badge": "10 paths"
              }
            ],
            "best": {
              "label": "10 Unique Paths"
            },
            "vars": [
              [
                "result",
                10
              ],
              [
                "time",
                "O(m · n)"
              ],
              [
                "space",
                "O(m · n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maximal-square",
    "patternId": "dynamic-programming",
    "title": "Maximal Square",
    "subtitle": "Grid DP · dp[i][j] = min(up, left, diag) + 1",
    "kind": "problem",
    "leetcode": {
      "id": 221,
      "slug": "maximal-square",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Apple"
    ],
    "statement": "Given a binary matrix of 0s and 1s, find the largest square consisting entirely of 1s and return its area.",
    "visualType": "matrix",
    "initialInput": [
      [1, 0, 1, 0, 0],
      [1, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 1, 0]
    ],
    "approaches": [
      {
        "id": "grid-dp-tabulation",
        "label": "Grid DP (tabulation)",
        "complexity": {
          "time": "O(R·C)",
          "space": "O(R·C)"
        },
        "pseudocode": [
          "dp = R * C grid, best = 0",
          "first row / col: dp = source value",
          "for i in 1..R-1: for j in 1..C-1:",
          "  if grid[i][j] == 0: dp[i][j] = 0",
          "  else dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1",
          "  best = max(best, dp[i][j])",
          "return best * best"
        ],
        "starterCode": {
          "javascript": "function maximalSquare(matrix) {\n  if (!matrix.length || !matrix[0].length) return 0;\n  const R = matrix.length, C = matrix[0].length;\n  const dp = Array.from({ length: R }, () => new Array(C).fill(0));\n  let best = 0;\n  for (let i = 0; i < R; i++) {\n    for (let j = 0; j < C; j++) {\n      if (matrix[i][j] === '1' || matrix[i][j] === 1) {\n        if (i === 0 || j === 0) dp[i][j] = 1;\n        else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        best = Math.max(best, dp[i][j]);\n      }\n    }\n  }\n  return best * best;\n}",
          "python": "def maximalSquare(matrix: list[list[str]]) -> int:\n    if not matrix or not matrix[0]:\n        return 0\n    R, C = len(matrix), len(matrix[0])\n    dp = [[0] * C for _ in range(R)]\n    best = 0\n    for i in range(R):\n        for j in range(C):\n            if matrix[i][j] in ('1', 1):\n                if i == 0 or j == 0:\n                    dp[i][j] = 1\n                else:\n                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1\n                best = max(best, dp[i][j])\n    return best * best"
        },
        "solutionCode": {
          "javascript": "function maximalSquare(matrix) {\n  if (!matrix.length || !matrix[0].length) return 0;\n  const R = matrix.length, C = matrix[0].length;\n  const dp = Array.from({ length: R }, () => new Array(C).fill(0));\n  let best = 0;\n  for (let i = 0; i < R; i++) {\n    for (let j = 0; j < C; j++) {\n      if (matrix[i][j] === '1' || matrix[i][j] === 1) {\n        if (i === 0 || j === 0) dp[i][j] = 1;\n        else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;\n        best = Math.max(best, dp[i][j]);\n      }\n    }\n  }\n  return best * best;\n}",
          "python": "def maximalSquare(matrix: list[list[str]]) -> int:\n    if not matrix or not matrix[0]:\n        return 0\n    R, C = len(matrix), len(matrix[0])\n    dp = [[0] * C for _ in range(R)]\n    best = 0\n    for i in range(R):\n        for j in range(C):\n            if matrix[i][j] in ('1', 1):\n                if i == 0 or j == 0:\n                    dp[i][j] = 1\n                else:\n                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1\n                best = max(best, dp[i][j])\n    return best * best"
        },
        "testCases": [
          {
            "input": [
              [
                ["1", "0", "1", "0", "0"],
                ["1", "0", "1", "1", "1"],
                ["1", "1", "1", "1", "1"],
                ["1", "0", "0", "1", "0"]
              ]
            ],
            "expected": 4,
            "description": "Max square side = 2, area = 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "MAXIMAL SQUARE: find the largest square of 1s in a 4x5 grid. Define dp[i][j] = side length of the largest all-1 square whose bottom-right corner is at (i, j).",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [".", ".", ".", ".", "."],
              [".", ".", ".", ".", "."],
              [".", ".", ".", ".", "."],
              [".", ".", ".", ".", "."]
            ],
            "vars": [
              ["best", 0]
            ]
          },
          {
            "codeLine": 2,
            "narration": "BASE CASES: along the top row and left column a square can be at most 1x1, there is no room above or to the left. So dp simply copies the source value there (a 1 makes a 1x1 square, a 0 makes none).",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 0, "c": 0, "status": "active" },
              { "r": 0, "c": 1, "status": "active" },
              { "r": 0, "c": 2, "status": "active" },
              { "r": 0, "c": 3, "status": "active" },
              { "r": 0, "c": 4, "status": "active" },
              { "r": 1, "c": 0, "status": "active" },
              { "r": 2, "c": 0, "status": "active" },
              { "r": 3, "c": 0, "status": "active" }
            ],
            "vars": [
              ["top row", "dp = source value"],
              ["left col", "dp = source value"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Move to row 1. We sweep its interior cells left to right; each one reads three already-computed neighbours from the row above and to its left.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 1, "status": "active" },
              { "r": 1, "c": 2, "status": "active" },
              { "r": 1, "c": 3, "status": "active" },
              { "r": 1, "c": 4, "status": "active" }
            ],
            "vars": [
              ["row", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Cell (1, 1) has value '0', so dp[1][1] = 0. A square cannot end on a 0 cell.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, ".", ".", "."],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 1, "status": "active" }
            ],
            "vars": [
              ["cell", "(1,1)"],
              ["grid[1][1]", 0],
              ["dp[1][1]", 0]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Row 1 completed: dp[1][2]=1, dp[1][3]=1, dp[1][4]=1. Each cell with '1' forms a 1x1 square.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, ".", ".", ".", "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 2, "status": "safe" },
              { "r": 1, "c": 3, "status": "safe" },
              { "r": 1, "c": 4, "status": "safe" }
            ],
            "vars": [
              ["row 1", "evaluated"],
              ["best side", 1]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Move to row 2. Interior cells test if 2x2 squares can be formed.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, 1, 1, ".", "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 2, "c": 1, "status": "safe" },
              { "r": 2, "c": 2, "status": "safe" }
            ],
            "vars": [
              ["row", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Cell (2, 3): grid[2][3] = 1. Reads up=dp[1][3]=1, left=dp[2][2]=1, diag=dp[1][2]=1. dp[2][3] = min(1, 1, 1) + 1 = 2! A 2x2 all-1s square is found!",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, 1, 1, 2, "."],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 2, "status": "pacific" },
              { "r": 1, "c": 3, "status": "pacific" },
              { "r": 2, "c": 2, "status": "pacific" },
              { "r": 2, "c": 3, "status": "active" }
            ],
            "vars": [
              ["cell", "(2,3)"],
              ["up", 1],
              ["left", 1],
              ["diag", 1],
              ["dp[2][3]", 2],
              ["best side", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Cell (2, 4): grid[2][4] = 1. Reads up=dp[1][4]=1, left=dp[2][3]=2, diag=dp[1][3]=1. dp[2][4] = min(1, 2, 1) + 1 = 2.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, 1, 1, 2, 2],
              [1, ".", ".", ".", "."]
            ],
            "gridHighlights": [
              { "r": 1, "c": 3, "status": "pacific" },
              { "r": 1, "c": 4, "status": "pacific" },
              { "r": 2, "c": 3, "status": "pacific" },
              { "r": 2, "c": 4, "status": "active" }
            ],
            "vars": [
              ["cell", "(2,4)"],
              ["up", 1],
              ["left", 2],
              ["diag", 1],
              ["dp[2][4]", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Row 3 completed: dp table filled. The maximum square side found anywhere in the grid is best = 2.",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, 1, 1, 2, 2],
              [1, 0, 0, 1, 0]
            ],
            "gridHighlights": [
              { "r": 2, "c": 3, "status": "active" },
              { "r": 2, "c": 4, "status": "active" }
            ],
            "vars": [
              ["best side", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return best * best = 2 * 2 = 4. The area of the largest square consisting entirely of 1s is 4. Solved in O(R·C) time and space!",
            "customVisual": {
              "label": "4 × 5 GRID · DP[i][j] = SIDE OF LARGEST ALL-1 SQUARE ENDING AT (i, j)",
              "hideCoords": true
            },
            "matrix": [
              [1, 0, 1, 0, 0],
              [1, 0, 1, 1, 1],
              [1, 1, 1, 2, 2],
              [1, 0, 0, 1, 0]
            ],
            "gridHighlights": [
              { "r": 2, "c": 3, "status": "active" }
            ],
            "best": {
              "label": "Maximal Square Area = 2 × 2 = 4"
            },
            "vars": [
              ["max side", 2],
              ["area", 4],
              ["time", "O(R·C)"],
              ["space", "O(R·C)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "longest-increasing-subsequence",
    "patternId": "dynamic-programming",
    "title": "Longest Increasing Subsequence",
    "subtitle": "dp[i] = longest increasing run ENDING at i",
    "kind": "problem",
    "leetcode": {
      "id": 300,
      "slug": "longest-increasing-subsequence",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "statement": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "visualType": "dp-grid",
    "initialInput": [
      1,
      2,
      1,
      3,
      2,
      4,
      3,
      4
    ],
    "approaches": [
      {
        "id": "lis-dp",
        "label": "DP ending at i · dp[i] = 1 + max(dp[j])",
        "complexity": {
          "time": "O(n²)",
          "space": "O(n)"
        },
        "pseudocode": [
          "dp = array of size n filled with 1",
          "for i from 1 to n - 1:",
          "    for j from 0 to i - 1:",
          "        if nums[i] > nums[j]:",
          "            dp[i] = max(dp[i], 1 + dp[j])",
          "return max(dp)"
        ],
        "starterCode": {
          "javascript": "function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let maxLen = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) {\n        dp[i] = Math.max(dp[i], 1 + dp[j]);\n      }\n    }\n    maxLen = Math.max(maxLen, dp[i]);\n  }\n  return maxLen;\n}",
          "python": "def lengthOfLIS(nums: list[int]) -> int:\n    if not nums: return 0\n    dp = [1] * len(nums)\n    for i in range(1, len(nums)):\n        for j in range(i):\n            if nums[i] > nums[j]:\n                dp[i] = max(dp[i], 1 + dp[j])\n    return max(dp)"
        },
        "solutionCode": {
          "javascript": "function lengthOfLIS(nums) {\n  if (!nums.length) return 0;\n  const dp = new Array(nums.length).fill(1);\n  let maxLen = 1;\n  for (let i = 1; i < nums.length; i++) {\n    for (let j = 0; j < i; j++) {\n      if (nums[i] > nums[j]) {\n        dp[i] = Math.max(dp[i], 1 + dp[j]);\n      }\n    }\n    maxLen = Math.max(maxLen, dp[i]);\n  }\n  return maxLen;\n}",
          "python": "def lengthOfLIS(nums: list[int]) -> int:\n    if not nums: return 0\n    dp = [1] * len(nums)\n    for i in range(1, len(nums)):\n        for j in range(i):\n            if nums[i] > nums[j]:\n                dp[i] = max(dp[i], 1 + dp[j])\n    return max(dp)"
        },
        "testCases": [
          {
            "input": [
              [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ]
            ],
            "expected": 4,
            "description": "LIS is [2, 3, 7, 101] or [2, 5, 7, 18] (length 4)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "nums = [10, 9, 2, 5, 3, 7, 101, 18]. Initialize dp = [1, 1, 1, 1, 1, 1, 1, 1] (every element is an LIS of length 1 by itself).",
            "customVisual": {
              "array": [
                1,
                1,
                1,
                1,
                1,
                1,
                1,
                1
              ],
              "secondaryArray": [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "LIS LENGTH ENDING AT INDEX i"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "maxLIS",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 3 (val 5): 5 > 2 (j=2) -> dp[3] = 1 + dp[2] = 2 (subsequence [2, 5]).",
            "customVisual": {
              "array": [
                1,
                1,
                1,
                2,
                1,
                1,
                1,
                1
              ],
              "secondaryArray": [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "LIS LENGTH ENDING AT INDEX i"
            },
            "highlights": [
              3
            ],
            "secondaryHighlights": [
              2,
              3
            ],
            "vars": [
              [
                "dp[3]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 4 (val 3): 3 > 2 (j=2) -> dp[4] = 1 + dp[2] = 2 (subsequence [2, 3]).",
            "customVisual": {
              "array": [
                1,
                1,
                1,
                2,
                2,
                1,
                1,
                1
              ],
              "secondaryArray": [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "LIS LENGTH ENDING AT INDEX i"
            },
            "highlights": [
              4
            ],
            "secondaryHighlights": [
              2,
              4
            ],
            "vars": [
              [
                "dp[4]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 5 (val 7): 7 > 5 and 7 > 3 -> dp[5] = 1 + 2 = 3 (subsequence [2, 3, 7] or [2, 5, 7]).",
            "customVisual": {
              "array": [
                1,
                1,
                1,
                2,
                2,
                3,
                1,
                1
              ],
              "secondaryArray": [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "LIS LENGTH ENDING AT INDEX i"
            },
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              2,
              4,
              5
            ],
            "vars": [
              [
                "dp[5]",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "i = 6 (val 101): 101 > 7 -> dp[6] = 1 + 3 = 4 (subsequence [2, 3, 7, 101]). Max LIS = 4.",
            "customVisual": {
              "array": [
                1,
                1,
                1,
                2,
                2,
                3,
                4,
                4
              ],
              "secondaryArray": [
                10,
                9,
                2,
                5,
                3,
                7,
                101,
                18
              ],
              "secondaryTitle": "NUMS ARRAY",
              "title": "LIS LENGTH ENDING AT INDEX i"
            },
            "highlights": [
              6
            ],
            "best": {
              "label": "Longest Increasing Subsequence = 4"
            },
            "vars": [
              [
                "result",
                4
              ],
              [
                "time",
                "O(n²)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "word-break",
    "patternId": "dynamic-programming",
    "title": "Word Break",
    "subtitle": "dp[i] = can s[0..i) be split into dictionary words",
    "kind": "problem",
    "leetcode": {
      "id": 139,
      "slug": "word-break",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "statement": "Given a string and a dictionary of words, determine whether the string can be segmented into a sequence of one or more dictionary words. Words may be reused.",
    "visualType": "dp-grid",
    "initialInput": [
      "l",
      "e",
      "e",
      "t",
      "c",
      "o",
      "d",
      "e"
    ],
    "approaches": [
      {
        "id": "dp-over-prefixes",
        "label": "DP over prefixes",
        "complexity": {
          "time": "O(n³)",
          "space": "O(n)"
        },
        "pseudocode": [
          "def wordBreak(s, words):",
          "  dict = set(words)",
          "  dp = [False] * (n + 1)",
          "  dp[0] = True              # empty prefix",
          "  for i in 1..n:",
          "    for j in 0..i-1:",
          "      # prefix splittable AND suffix is a word",
          "      if dp[j] and s[j:i] in dict:",
          "        dp[i] = True",
          "        break",
          "  return dp[n]"
        ],
        "starterCode": {
          "javascript": "function wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.substring(j, i))) {\n        dp[i] = true;\n        break;\n      }\n    }\n  }\n  return dp[n];\n}",
          "python": "def wordBreak(s: str, wordDict: list[str]) -> bool:\n    words = set(wordDict)\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in words:\n                dp[i] = True\n                break\n    return dp[n]"
        },
        "solutionCode": {
          "javascript": "function wordBreak(s, wordDict) {\n  const dict = new Set(wordDict);\n  const n = s.length;\n  const dp = new Array(n + 1).fill(false);\n  dp[0] = true;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) {\n      if (dp[j] && dict.has(s.substring(j, i))) {\n        dp[i] = true;\n        break;\n      }\n    }\n  }\n  return dp[n];\n}",
          "python": "def wordBreak(s: str, wordDict: list[str]) -> bool:\n    words = set(wordDict)\n    n = len(s)\n    dp = [False] * (n + 1)\n    dp[0] = True\n    for i in range(1, n + 1):\n        for j in range(i):\n            if dp[j] and s[j:i] in words:\n                dp[i] = True\n                break\n    return dp[n]"
        },
        "testCases": [
          {
            "input": [
              "leetcode",
              [
                "leet",
                "code"
              ]
            ],
            "expected": true,
            "description": "s = \"leetcode\", wordDict = [\"leet\", \"code\"]"
          },
          {
            "input": [
              "applepenapple",
              [
                "apple",
                "pen"
              ]
            ],
            "expected": true,
            "description": "s = \"applepenapple\", wordDict = [\"apple\", \"pen\"]"
          },
          {
            "input": [
              "catsandog",
              [
                "cats",
                "dog",
                "sand",
                "and",
                "cat"
              ]
            ],
            "expected": false,
            "description": "s = \"catsandog\", wordDict = [\"cats\", \"dog\", \"sand\", \"and\", \"cat\"]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Word Break: can \"leetcode\" be cut into a sequence of dictionary words? Dictionary = {\"leet\", \"code\"}. Top row is the letters; the dp row (length n+1) marks which prefixes are fully splittable.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "s",
                "\"leetcode\""
              ],
              [
                "dict",
                "{leet, code}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "dict = set(words): Convert word list into a hash set {'leet', 'code'} for O(1) average lookup time. Now any candidate suffix slice s[j:i] can be verified in O(1) time.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "dict",
                "{leet, code}"
              ],
              [
                "lookup time",
                "O(1)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "dp = [False] * (n + 1): Initialize boolean array of size 9 (for n = 8). dp[i] answers: can prefix s[0..i) of length i be segmented into dictionary words?",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "n",
                8
              ],
              [
                "dp size",
                9
              ],
              [
                "state",
                "dp[i] = can s[0..i) be segmented"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Base case dp[0] = True: The empty prefix \"\" of length 0 is trivially valid (requires 0 dictionary words). It serves as the base anchor for any valid word starting at index 0.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "dp[0]",
                true
              ],
              [
                "base case",
                "empty prefix is valid"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "for i in 1..n: Outer loop iterates over all prefix lengths from 1 to 8, building up segmentability solutions for increasingly longer prefixes of s.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "prefix",
                "\"l\""
              ],
              [
                "subproblem",
                "can \"l\" be split?"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Prefixes i = 1..3 (\"l\", \"le\", \"lee\"): Check all split points j < i. Suffixes \"l\", \"le\", \"lee\" are not in dict. No split satisfies both dp[j]=True and s[j:i] in dict, so dp[1]=dp[2]=dp[3]=X.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                0,
                1,
                2
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                ".",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "dp[1] (\"l\")",
                false
              ],
              [
                "dp[2] (\"le\")",
                false
              ],
              [
                "dp[3] (\"lee\")",
                false
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[4] (prefix \"leet\"): try split j=0, dp[0] is true AND suffix s[0..4] = \"leet\" is in the dictionary. Both hold, so dp[4] = ✓. The blue cell dp[0] is the splittable prefix we hung this word onto.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                3
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "prefix",
                "\"leet\""
              ],
              [
                "split word",
                "\"leet\" (j=0)"
              ],
              [
                "dp[4]",
                true
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "break: Since dp[4] is already confirmed True with split j=0, there is no need to check other splits j=1,2,3 for i=4. We immediately advance to i=5.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                3
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "dp[4]",
                true
              ],
              [
                "action",
                "early break for i=4"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Prefixes i = 5..7 (\"leetc\", \"leetco\", \"leetcod\"): Try valid splits from dp[0] and dp[4]. Suffixes (\"c\", \"co\", \"cod\", \"leetc\", etc.) are not in dict. So dp[5] = dp[6] = dp[7] = X.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                4,
                5,
                6
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                "X",
                "X",
                "X",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              5,
              6,
              7
            ],
            "vars": [
              [
                "dp[5] (\"leetc\")",
                false
              ],
              [
                "dp[6] (\"leetco\")",
                false
              ],
              [
                "dp[7] (\"leetcod\")",
                false
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "i = 8 (full string \"leetcode\"): Test split points j = 0..7. When j = 4: dp[4] is True (\"leet\" is valid) AND suffix s[4..8] = \"code\" is in dict.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                4,
                5,
                6,
                7
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                "X",
                "X",
                "X",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "i",
                8
              ],
              [
                "j",
                4
              ],
              [
                "dp[4]",
                true
              ],
              [
                "suffix s[4..8]",
                "\"code\""
              ],
              [
                "in dict",
                true
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "dp[8] = True: Valid segmentation found! Prefix s[0..4] (\"leet\") is splittable (dp[4]=True) and suffix s[4..8] (\"code\") is in dict -> dp[8] = ✓.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                "X",
                "X",
                "X",
                "✓"
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              4,
              8
            ],
            "vars": [
              [
                "dp[8]",
                true
              ],
              [
                "segmentation",
                "\"leet\" + \"code\""
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Table complete: dp = [✓, X, X, X, ✓, X, X, X, ✓]. The answer is the last cell, dp[8] = ✓ (true) \"leetcode\" splits as \"leet\" + \"code\". O(n²) splits * O(n) substring = O(n³) time (O(n²) with precomputed slices), O(n) space.",
            "customVisual": {
              "secondaryArray": [
                "l",
                "e",
                "e",
                "t",
                "c",
                "o",
                "d",
                "e"
              ],
              "secondaryHighlights": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryTitle": "",
              "array": [
                "✓",
                "X",
                "X",
                "X",
                "✓",
                "X",
                "X",
                "X",
                "✓"
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]",
                "[4]",
                "[5]",
                "[6]",
                "[7]",
                "[8]"
              ],
              "title": "DP"
            },
            "highlights": [
              8
            ],
            "best": {
              "label": "Can Segment = true"
            },
            "vars": [
              [
                "dp",
                "[✓, X, X, X, ✓, X, X, X, ✓]"
              ],
              [
                "answer",
                true
              ],
              [
                "time",
                "O(n³)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maximum-profit-in-job-scheduling",
    "patternId": "dynamic-programming",
    "title": "Maximum Profit in Job Scheduling",
    "subtitle": "Sort by end; take or skip",
    "kind": "problem",
    "leetcode": {
      "id": 1235,
      "slug": "maximum-profit-in-job-scheduling",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "Given jobs each with a start time, end time, and profit, choose a subset of non-overlapping jobs that maximizes total profit and return that maximum.",
    "visualType": "dp-grid",
    "initialInput": [
      50,
      10,
      40,
      70
    ],
    "approaches": [
      {
        "id": "dp-after-sorting-by-end-time",
        "label": "DP after sorting by end time",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "sort jobs by end time",
          "dp = array of size n",
          "for i in 0..n-1:",
          "  p = latest j with end[j] <= start[i]  // binary search",
          "  skip = dp[i-1]                        // (0 if i == 0)",
          "  take = profit[i] + (p>=0 ? dp[p] : 0)",
          "  dp[i] = max(skip, take)",
          "return dp[n-1]"
        ],
        "starterCode": {
          "javascript": "function jobScheduling(startTime, endTime, profit) {\n  const n = startTime.length;\n  const jobs = startTime.map((s, i) => [s, endTime[i], profit[i]]).sort((a, b) => a[1] - b[1]);\n  const dp = new Array(n).fill(0);\n  dp[0] = jobs[0][2];\n  for (let i = 1; i < n; i++) {\n    let p = -1, l = 0, r = i - 1;\n    while (l <= r) {\n      const mid = Math.floor((l + r) / 2);\n      if (jobs[mid][1] <= jobs[i][0]) { p = mid; l = mid + 1; } else { r = mid - 1; }\n    }\n    const take = jobs[i][2] + (p !== -1 ? dp[p] : 0);\n    const skip = dp[i - 1];\n    dp[i] = Math.max(skip, take);\n  }\n  return dp[n - 1];\n}",
          "python": "import bisect\n\ndef jobScheduling(startTime: list[int], endTime: list[int], profit: list[int]) -> int:\n    jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])\n    ends = [e for _, e, _ in jobs]\n    n = len(jobs)\n    dp = [0] * n\n    dp[0] = jobs[0][2]\n    for i in range(1, n):\n        p = bisect.bisect_right(ends, jobs[i][0]) - 1\n        take = jobs[i][2] + (dp[p] if p >= 0 else 0)\n        skip = dp[i - 1]\n        dp[i] = max(skip, take)\n    return dp[n - 1]"
        },
        "solutionCode": {
          "javascript": "function jobScheduling(startTime, endTime, profit) {\n  const n = startTime.length;\n  const jobs = startTime.map((s, i) => [s, endTime[i], profit[i]]).sort((a, b) => a[1] - b[1]);\n  const dp = new Array(n).fill(0);\n  dp[0] = jobs[0][2];\n  for (let i = 1; i < n; i++) {\n    let p = -1, l = 0, r = i - 1;\n    while (l <= r) {\n      const mid = Math.floor((l + r) / 2);\n      if (jobs[mid][1] <= jobs[i][0]) { p = mid; l = mid + 1; } else { r = mid - 1; }\n    }\n    const take = jobs[i][2] + (p !== -1 ? dp[p] : 0);\n    const skip = dp[i - 1];\n    dp[i] = Math.max(skip, take);\n  }\n  return dp[n - 1];\n}",
          "python": "import bisect\n\ndef jobScheduling(startTime: list[int], endTime: list[int], profit: list[int]) -> int:\n    jobs = sorted(zip(startTime, endTime, profit), key=lambda x: x[1])\n    ends = [e for _, e, _ in jobs]\n    n = len(jobs)\n    dp = [0] * n\n    dp[0] = jobs[0][2]\n    for i in range(1, n):\n        p = bisect.bisect_right(ends, jobs[i][0]) - 1\n        take = jobs[i][2] + (dp[p] if p >= 0 else 0)\n        skip = dp[i - 1]\n        dp[i] = max(skip, take)\n    return dp[n - 1]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                3
              ],
              [
                3,
                4,
                5,
                6
              ],
              [
                50,
                10,
                40,
                70
              ]
            ],
            "expected": 120,
            "description": "Job [1,3]($50) + Job [3,6]($70) = $120"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                6
              ],
              [
                3,
                5,
                10,
                6,
                9
              ],
              [
                20,
                20,
                100,
                70,
                60
              ]
            ],
            "expected": 150,
            "description": "startTime = [1,2,3,4,6], endTime = [3,5,10,6,9], profit = [20,20,100,70,60]"
          },
          {
            "input": [
              [
                1,
                1,
                1
              ],
              [
                2,
                3,
                4
              ],
              [
                5,
                6,
                4
              ]
            ],
            "expected": 6,
            "description": "startTime = [1,1,1], endTime = [2,3,4], profit = [5,6,4]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Maximum Profit in Job Scheduling: each job has a start, an end, and a profit, and two jobs clash if their time ranges overlap. Pick a non-overlapping subset with the greatest total profit. The main row shows each job by its profit; the start/end live in the State panel. The key move is to SORT jobs by END time.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "jobs (by end)",
                "job0 [1,3] $50  job1 [2,4] $10  job2 [3,5] $40  job3 [3,6] $70"
              ],
              [
                "recurrence",
                "dp[i] = max(dp[i-1], profit[i] + dp[p(i)])"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "dp = array of size n: Initialize 1-D DP array of size 4. dp[i] represents the maximum profit achievable considering a subset of sorted jobs from 0..i.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "n",
                4
              ],
              [
                "dp size",
                4
              ],
              [
                "state",
                "dp[i] = max profit using subset of jobs 0..i"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "for i in 0..n-1: Iterate through each job in ascending order of finish time. Sorting ensures that all compatible earlier jobs are already processed.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "current job",
                "job0 [1,3] $50"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 0 (job0 [1,3] $50): Binary search for latest job j with end[j] <= start[0] (<= 1). None exists, so p = -1 (no earlier compatible job).",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0
              ],
              "secondaryTitle": "",
              "array": [
                ".",
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "job0",
                "[1, 3] profit $50"
              ],
              [
                "start[0]",
                1
              ],
              [
                "p (prev compatible)",
                -1
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[0] = max(skip, take): skip = 0, take = 50 + 0 = 50. dp[0] = max(0, 50) = 50. We TAKE job 0.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0
              ],
              "secondaryTitle": "",
              "array": [
                50,
                ".",
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "skip",
                0
              ],
              [
                "take",
                "50 + 0 = 50"
              ],
              [
                "dp[0]",
                50
              ],
              [
                "decision",
                "TAKE"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Now decide. SKIP job 1: keep the previous best dp[0] = 50. TAKE job 1: profit 10 + dp[p(1)] = 10 + 0 = 10. dp[1] = max(50, 10) = 50, so we SKIP it.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                1
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "skip = dp[i-1]",
                50
              ],
              [
                "take = profit[i]+dp[p]",
                "10 + 0 = 10"
              ],
              [
                "dp[1]",
                50
              ],
              [
                "decision",
                "SKIP"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 2 (job2 [3,5] $40): Binary search for latest job ending <= start[2] (= 3). Job 0 ends at 3 <= 3! So p = 0 (job0 is compatible).",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0,
                2
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                ".",
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "job2",
                "[3, 5] profit $40"
              ],
              [
                "start[2]",
                3
              ],
              [
                "compatible job",
                "job0 [1,3] (p=0)"
              ],
              [
                "dp[p]",
                50
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[2] = max(skip, take): SKIP gives dp[1] = 50. TAKE gives profit[2] + dp[0] = 40 + 50 = 90. max(50, 90) = 90. We TAKE job 2 along with job 0.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0,
                2
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                90,
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "skip = dp[1]",
                50
              ],
              [
                "take = 40 + dp[0]",
                90
              ],
              [
                "dp[2]",
                90
              ],
              [
                "decision",
                "TAKE (job0 + job2)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 3 (job3 [3,6] $70): Binary search for latest job ending <= start[3] (= 3). Job 0 ends at 3 <= 3. So p = 0 (job0 is compatible).",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0,
                3
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                90,
                "."
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "job3",
                "[3, 6] profit $70"
              ],
              [
                "start[3]",
                3
              ],
              [
                "compatible job",
                "job0 [1,3] (p=0)"
              ],
              [
                "dp[p]",
                50
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "dp[3] = max(skip, take): SKIP gives dp[2] = 90. TAKE gives profit[3] + dp[0] = 70 + 50 = 120. max(90, 120) = 120. We TAKE job 3 along with job 0!",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0,
                3
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                90,
                120
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "skip = dp[2]",
                90
              ],
              [
                "take = 70 + dp[0]",
                120
              ],
              [
                "dp[3]",
                120
              ],
              [
                "decision",
                "TAKE (job0 + job3)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "return dp[n-1] = dp[3] = 120. The optimal schedule pairs job0 [1,3] ($50) + job3 [3,6] ($70) for total maximum profit $120. Sorting takes O(n log n), DP takes O(n log n) with binary search, and O(n) space.",
            "customVisual": {
              "secondaryArray": [
                50,
                10,
                40,
                70
              ],
              "secondaryHighlights": [
                0,
                3
              ],
              "secondaryTitle": "",
              "array": [
                50,
                50,
                90,
                120
              ],
              "labels": [
                "[0]",
                "[1]",
                "[2]",
                "[3]"
              ],
              "title": "DP"
            },
            "highlights": [
              3
            ],
            "best": {
              "label": "Max Profit = $120 (Job 0 + Job 3)"
            },
            "vars": [
              [
                "optimal jobs",
                "job0 ($50) + job3 ($70)"
              ],
              [
                "return dp[3]",
                120
              ],
              [
                "time",
                "O(n log n)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "paint-house",
    "patternId": "dynamic-programming",
    "title": "Paint House",
    "subtitle": "Grid DP · dp[i][c] = cost + min(other two colours)",
    "kind": "problem",
    "leetcode": {
      "id": 256,
      "slug": "paint-house",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta"
    ],
    "statement": "Each house must be painted one of three colors, and no two adjacent houses may share a color. Given the cost of painting each house each color, return the minimum total painting cost.",
    "visualType": "matrix",
    "initialInput": [
      [
        17,
        2,
        17
      ],
      [
        16,
        16,
        5
      ],
      [
        14,
        3,
        19
      ]
    ],
    "approaches": [
      {
        "id": "grid-dp-tabulation",
        "label": "Grid DP (tabulation)",
        "complexity": {
          "time": "O(R)",
          "space": "O(R)"
        },
        "pseudocode": [
          "dp = R * 3 grid",
          "dp[0] = costs[0]                 // first house, no neighbours",
          "for i in 1..R-1: for c in 0..2:",
          "  dp[i][c] = costs[i][c] + min(dp[i-1][other two colours])",
          "",
          "return min(dp[R-1])"
        ],
        "starterCode": {
          "javascript": "function minCost(costs) {\n  if (!costs || costs.length === 0) return 0;\n  const n = costs.length;\n  const dp = Array.from({ length: n }, () => [0, 0, 0]);\n  dp[0] = [...costs[0]];\n  for (let i = 1; i < n; i++) {\n    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);\n    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);\n    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);\n  }\n  return Math.min(...dp[n - 1]);\n}",
          "python": "def minCost(costs: list[list[int]]) -> int:\n    if not costs:\n        return 0\n    n = len(costs)\n    dp = [[0] * 3 for _ in range(n)]\n    dp[0] = list(costs[0])\n    for i in range(1, n):\n        dp[i][0] = costs[i][0] + min(dp[i-1][1], dp[i-1][2])\n        dp[i][1] = costs[i][1] + min(dp[i-1][0], dp[i-1][2])\n        dp[i][2] = costs[i][2] + min(dp[i-1][0], dp[i-1][1])\n    return min(dp[-1])"
        },
        "solutionCode": {
          "javascript": "function minCost(costs) {\n  if (!costs || costs.length === 0) return 0;\n  const n = costs.length;\n  const dp = Array.from({ length: n }, () => [0, 0, 0]);\n  dp[0] = [...costs[0]];\n  for (let i = 1; i < n; i++) {\n    dp[i][0] = costs[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);\n    dp[i][1] = costs[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);\n    dp[i][2] = costs[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);\n  }\n  return Math.min(...dp[n - 1]);\n}",
          "python": "def minCost(costs: list[list[int]]) -> int:\n    if not costs:\n        return 0\n    n = len(costs)\n    dp = [[0] * 3 for _ in range(n)]\n    dp[0] = list(costs[0])\n    for i in range(1, n):\n        dp[i][0] = costs[i][0] + min(dp[i-1][1], dp[i-1][2])\n        dp[i][1] = costs[i][1] + min(dp[i-1][0], dp[i-1][2])\n        dp[i][2] = costs[i][2] + min(dp[i-1][0], dp[i-1][1])\n    return min(dp[-1])"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  17,
                  2,
                  17
                ],
                [
                  16,
                  16,
                  5
                ],
                [
                  14,
                  3,
                  19
                ]
              ]
            ],
            "expected": 10,
            "description": "costs = [[17,2,17],[16,16,5],[14,3,19]] -> min cost is 10 (Green 2 + Blue 5 + Green 3)"
          },
          {
            "input": [
              [
                [
                  7,
                  6,
                  2
                ]
              ]
            ],
            "expected": 2,
            "description": "costs = [[7,6,2]] -> min cost is 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Paint House: we have 3 houses (R = 3) and 3 colours (Red, Green, Blue). No two adjacent houses may share a colour. We allocate a 3 × 3 DP grid where dp[i][c] represents the minimum cost to paint houses 0..i such that house i is painted colour c.",
            "matrix": [
              [
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "R (houses)",
                3
              ],
              [
                "C (colours)",
                3
              ],
              [
                "state",
                "dp[i][c] = min cost houses 0..i ending at c"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "BASE CASE: house 0 has no neighbour before it, so painting it colour c just costs costs[0][c]. dp[0] = [17, 2, 17].",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "active"
              },
              {
                "r": 0,
                "c": 1,
                "status": "active"
              },
              {
                "r": 0,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[0]",
                "[17, 2, 17]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start loop for house i = 1 (second house). We will compute the cheapest way to paint house 1 in each of the three colours: Red (c=0), Green (c=1), and Blue (c=2).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                1
              ],
              [
                "colour c",
                "Red (0)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 1, colour R (c=0): House 0 must be Green (2) or Blue (17). Cheaper is Green (2). dp[1][0] = costs[1][0] + min(dp[0][1], dp[0][2]) = 16 + min(2, 17) = 16 + 2 = 18.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                "R"
              ],
              [
                "own cost",
                16
              ],
              [
                "from G",
                2
              ],
              [
                "from B",
                17
              ],
              [
                "min prev",
                2
              ],
              [
                "dp",
                18
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Move to house 1, colour Green (c=1). We check adjacent options from house 0 (Red or Blue).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                ".",
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                1
              ],
              [
                "colour c",
                "Green (1)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 1, colour G (c=1): House 0 must be Red (17) or Blue (17). min(17, 17) = 17. dp[1][1] = costs[1][1] + 17 = 16 + 17 = 33.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                "G"
              ],
              [
                "own cost",
                16
              ],
              [
                "from R",
                17
              ],
              [
                "from B",
                17
              ],
              [
                "min prev",
                17
              ],
              [
                "dp",
                33
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Move to house 1, colour Blue (c=2). We check adjacent options from house 0 (Red or Green).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                "."
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                1
              ],
              [
                "colour c",
                "Blue (2)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 1, colour B (c=2): House 0 must be Red (17) or Green (2). Cheaper is Green (2). dp[1][2] = costs[1][2] + min(17, 2) = 5 + 2 = 7.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                "B"
              ],
              [
                "own cost",
                5
              ],
              [
                "from R",
                17
              ],
              [
                "from G",
                2
              ],
              [
                "min prev",
                2
              ],
              [
                "dp",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 1 fully evaluated: dp[1] = [18, 33, 7]. We advance to house i = 2 (the final house).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                2
              ],
              [
                "dp[1]",
                "[18, 33, 7]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 2, evaluating colour Red (c=0). Its predecessor house 1 can be painted Green (33) or Blue (7).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "R"
              ],
              [
                "candidate prevs",
                "G (33), B (7)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 2, colour R: its neighbour (house 1) must be a DIFFERENT colour, so we take the cheaper of the two OTHER colours above (blue): min(dp[1][G], dp[1][B]) = min(33, 7) = 7. Add this house's cost: dp[2][R] = 14 + 7 = 21.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 2,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "R"
              ],
              [
                "own cost",
                14
              ],
              [
                "from G",
                33
              ],
              [
                "from B",
                7
              ],
              [
                "min prev",
                7
              ],
              [
                "dp",
                21
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 2, colour R: its neighbour (house 1) must be a DIFFERENT colour, so we take the cheaper of the two OTHER colours above (blue): min(dp[1][G], dp[1][B]) = min(33, 7) = 7. Add this house's cost: dp[2][R] = 14 + 7 = 21.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 2,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "R"
              ],
              [
                "own cost",
                14
              ],
              [
                "from G",
                33
              ],
              [
                "from B",
                7
              ],
              [
                "min prev",
                7
              ],
              [
                "dp",
                21
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 2, evaluating colour Green (c=1). House 1 can be painted Red (18) or Blue (7).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "G"
              ],
              [
                "candidate prevs",
                "R (18), B (7)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 2, colour G: Cheaper neighbour colour is Blue (7). dp[2][G] = costs[2][G] + min(dp[1][R], dp[1][B]) = 3 + min(18, 7) = 3 + 7 = 10.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 2,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "G"
              ],
              [
                "own cost",
                3
              ],
              [
                "from R",
                18
              ],
              [
                "from B",
                7
              ],
              [
                "min prev",
                7
              ],
              [
                "dp",
                10
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 2, evaluating colour Blue (c=2). House 1 can be painted Red (18) or Green (33).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "B"
              ],
              [
                "candidate prevs",
                "R (18), G (33)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "House 2, colour B: Cheaper neighbour colour is Red (18). dp[2][B] = costs[2][B] + min(dp[1][R], dp[1][G]) = 19 + min(18, 33) = 19 + 18 = 37.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                10,
                37
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 2,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                2
              ],
              [
                "colour",
                "B"
              ],
              [
                "own cost",
                19
              ],
              [
                "from R",
                18
              ],
              [
                "from G",
                33
              ],
              [
                "min prev",
                18
              ],
              [
                "dp",
                37
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "All houses computed. The final row is dp[2] = [21, 10, 37]. The minimum cost to paint all houses is min(dp[2]) = min(21, 10, 37) = 10.",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                10,
                37
              ]
            ],
            "gridHighlights": [
              {
                "r": 2,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[2]",
                "[21, 10, 37]"
              ],
              [
                "min(dp[2])",
                10
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return min(dp[R-1]) = 10. The optimal colour sequence is House 0 (Green: 2) -> House 1 (Blue: 5) -> House 2 (Green: 3), totaling 2 + 5 + 3 = 10. Time complexity is O(R) and space complexity is O(R) (or O(1) in-place).",
            "matrix": [
              [
                17,
                2,
                17
              ],
              [
                18,
                33,
                7
              ],
              [
                21,
                10,
                37
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 1,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              },
              {
                "r": 2,
                "c": 1,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "3 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST TO PAINT HOUSES 0..I ENDING COLOUR C",
              "hideCoords": true
            },
            "best": {
              "label": "Minimum Painting Cost = 10"
            },
            "vars": [
              [
                "optimal sequence",
                "G (2) -> B (5) -> G (3)"
              ],
              [
                "total cost",
                10
              ],
              [
                "time",
                "O(R)"
              ],
              [
                "space",
                "O(R)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "paint-house-ii",
    "patternId": "dynamic-programming",
    "title": "Paint House II",
    "subtitle": "k colours · track the two smallest → O(n·k)",
    "kind": "problem",
    "leetcode": {
      "id": 265,
      "slug": "paint-house-ii",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon"
    ],
    "statement": "Each house must be painted one of k colors, and no two adjacent houses may share a color. Given the cost of painting each house each color, return the minimum total painting cost.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        5,
        3
      ],
      [
        2,
        9,
        4
      ]
    ],
    "approaches": [
      {
        "id": "naive-scan-all-other-colours",
        "label": "Naive · scan all other colours",
        "complexity": {
          "time": "O(n·k²)",
          "space": "O(n·k)"
        },
        "pseudocode": [
          "dp[0] = costs[0]",
          "for i in 1..n-1:",
          "  for c in 0..k-1:",
          "    m = min(dp[i-1][c'] for c' != c)  // O(k) scan",
          "    dp[i][c] = costs[i][c] + m",
          "",
          "return min(dp[n-1])"
        ],
        "starterCode": {
          "javascript": "function minCostII(costs) {\n  if (!costs.length) return 0;\n  const n = costs.length, k = costs[0].length;\n  const dp = Array.from({ length: n }, () => new Array(k).fill(0));\n  for (let c = 0; c < k; c++) dp[0][c] = costs[0][c];\n  for (let i = 1; i < n; i++) {\n    for (let c = 0; c < k; c++) {\n      let minPrev = Infinity;\n      for (let prevC = 0; prevC < k; prevC++) {\n        if (prevC !== c) minPrev = Math.min(minPrev, dp[i - 1][prevC]);\n      }\n      dp[i][c] = costs[i][c] + minPrev;\n    }\n  }\n  return Math.min(...dp[n - 1]);\n}",
          "python": "def minCostII(costs: list[list[int]]) -> int:\n    if not costs: return 0\n    n, k = len(costs), len(costs[0])\n    dp = [[0] * k for _ in range(n)]\n    dp[0] = list(costs[0])\n    for i in range(1, n):\n        for c in range(k):\n            min_prev = min(dp[i-1][prev_c] for prev_c in range(k) if prev_c != c)\n            dp[i][c] = costs[i][c] + min_prev\n    return min(dp[-1])"
        },
        "solutionCode": {
          "javascript": "function minCostII(costs) {\n  if (!costs.length) return 0;\n  const n = costs.length, k = costs[0].length;\n  const dp = Array.from({ length: n }, () => new Array(k).fill(0));\n  for (let c = 0; c < k; c++) dp[0][c] = costs[0][c];\n  for (let i = 1; i < n; i++) {\n    for (let c = 0; c < k; c++) {\n      let minPrev = Infinity;\n      for (let prevC = 0; prevC < k; prevC++) {\n        if (prevC !== c) minPrev = Math.min(minPrev, dp[i - 1][prevC]);\n      }\n      dp[i][c] = costs[i][c] + minPrev;\n    }\n  }\n  return Math.min(...dp[n - 1]);\n}",
          "python": "def minCostII(costs: list[list[int]]) -> int:\n    if not costs: return 0\n    n, k = len(costs), len(costs[0])\n    dp = [[0] * k for _ in range(n)]\n    dp[0] = list(costs[0])\n    for i in range(1, n):\n        for c in range(k):\n            min_prev = min(dp[i-1][prev_c] for prev_c in range(k) if prev_c != c)\n            dp[i][c] = costs[i][c] + min_prev\n    return min(dp[-1])"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  5,
                  3
                ],
                [
                  2,
                  9,
                  4
                ]
              ]
            ],
            "expected": 5,
            "description": "costs = [[1,5,3],[2,9,4]] -> min cost is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Paint House II (Naive): 2 houses (n = 2) and 3 colours (k = 3). We set base case dp[0] = costs[0] = [1, 5, 3].",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "active"
              },
              {
                "r": 0,
                "c": 1,
                "status": "active"
              },
              {
                "r": 0,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[0]",
                "[1, 5, 3]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop for house i = 1 (second house). For each color c, we scan all k-1 other colors from house 0.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 1, evaluating colour 0 (c = 0).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan previous house colors c' != 0: check c'=1 (cost 5) and c'=2 (cost 3). Minimum is min(5, 3) = 3.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "min prev",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[1][0] = costs[1][0] + min = 2 + 3 = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "own cost",
                2
              ],
              [
                "min prev",
                3
              ],
              [
                "dp",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 1, evaluating colour 1 (c = 1). Scan previous house colors c' != 1: check c'=0 (cost 1) and c'=2 (cost 3).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[1][1] = costs[1][1] + min = 9 + 1 = 10.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "own cost",
                9
              ],
              [
                "min prev",
                1
              ],
              [
                "dp",
                10
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "House 1, evaluating colour 2 (c = 2). Scan previous house colors c' != 2: check c'=0 (cost 1) and c'=1 (cost 5).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 1,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Min among other colors c' != 2 is min(1, 5) = 1 (color 0).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "min prev",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "dp[1][2] = costs[1][2] + min = 4 + 1 = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "own cost",
                4
              ],
              [
                "min prev",
                1
              ],
              [
                "dp",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Table complete. Minimum of last row dp[1] = [5, 10, 5] is min(5, 10, 5) = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "active"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "min(dp[1])",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return min(dp[n-1]) = 5. Scanning all k-1 colors for every cell takes O(k) per cell -> O(n·k²) total time.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "best": {
              "label": "Min Cost = 5 (O(n·k²) time)"
            },
            "vars": [
              [
                "min cost",
                5
              ],
              [
                "time",
                "O(n·k²)"
              ],
              [
                "space",
                "O(n·k)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Note: For large k (e.g. k = 1000), O(n·k²) is too slow. Switch to the Optimized approach to see the two-smallest trick achieve O(n·k) time!",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "optimization",
                "track min1 & min2"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 14/21 review: Row 0 state was [1, 5, 3], row 1 computed to [5, 10, 5].",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp",
                "[[1, 5, 3], [5, 10, 5]]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 15/21 review: Candidate solution 1: House 0 (Colour 0: cost 1) + House 1 (Colour 2: cost 4) = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "solution 1",
                "H0(0)=1 + H1(2)=4 -> 5"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 16/21 review: Candidate solution 2: House 0 (Colour 2: cost 3) + House 1 (Colour 0: cost 2) = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 2,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 0,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "solution 2",
                "H0(2)=3 + H1(0)=2 -> 5"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 17/21 summary: Naive scan performs (k - 1) comparisons per color, total n × k × (k - 1) operations.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "comparisons",
                "n * k * (k - 1)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 18/21 summary: Space is O(n·k) when storing full table, or O(k) keeping only previous row.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "space",
                "O(n·k)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 19/21 summary: In the two-smallest approach, finding min1 and min2 takes only O(k) time once per row.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "speedup",
                "O(k^2) -> O(k) per house"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 20/21 summary: Each cell transition is reduced from O(k) scan to O(1) lookup: use min1 if column differs, else min2.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "transition",
                "O(1) per cell"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 21/21 complete: Minimum total painting cost for the 2 houses is 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "best": {
              "label": "Final Answer: 5"
            },
            "vars": [
              [
                "answer",
                5
              ],
              [
                "time",
                "O(n·k²)"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized-two-smallest-trick",
        "label": "Optimized · two-smallest trick",
        "complexity": {
          "time": "O(n·k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "dp[0] = costs[0]",
          "for i in 1..n-1:",
          "  (min1, min1Col, min2) = two smallest of dp[i-1]",
          "  for c in 0..k-1:",
          "    best = (c == min1Col) ? min2 : min1",
          "    dp[i][c] = costs[i][c] + best",
          "return min(dp[n-1])"
        ],
        "starterCode": {
          "javascript": "function minCostII(costs) {\n  if (!costs.length) return 0;\n  const n = costs.length, k = costs[0].length;\n  let prevMin1 = 0, prevMin2 = 0, prevIdx = -1;\n  for (let i = 0; i < n; i++) {\n    let curMin1 = Infinity, curMin2 = Infinity, curIdx = -1;\n    for (let c = 0; c < k; c++) {\n      const val = costs[i][c] + (c !== prevIdx ? prevMin1 : prevMin2);\n      if (val < curMin1) {\n        curMin2 = curMin1;\n        curMin1 = val;\n        curIdx = c;\n      } else if (val < curMin2) {\n        curMin2 = val;\n      }\n    }\n    prevMin1 = curMin1; prevMin2 = curMin2; prevIdx = curIdx;\n  }\n  return prevMin1;\n}",
          "python": "def minCostII(costs: list[list[int]]) -> int:\n    if not costs: return 0\n    prev_min1 = prev_min2 = 0\n    prev_idx = -1\n    for row in costs:\n        cur_min1 = cur_min2 = float('inf')\n        cur_idx = -1\n        for c, val in enumerate(row):\n            total = val + (prev_min1 if c != prev_idx else prev_min2)\n            if total < cur_min1:\n                cur_min2, cur_min1, cur_idx = cur_min1, total, c\n            elif total < cur_min2:\n                cur_min2 = total\n        prev_min1, prev_min2, prev_idx = cur_min1, cur_min2, cur_idx\n    return prev_min1"
        },
        "solutionCode": {
          "javascript": "function minCostII(costs) {\n  if (!costs.length) return 0;\n  const n = costs.length, k = costs[0].length;\n  let prevMin1 = 0, prevMin2 = 0, prevIdx = -1;\n  for (let i = 0; i < n; i++) {\n    let curMin1 = Infinity, curMin2 = Infinity, curIdx = -1;\n    for (let c = 0; c < k; c++) {\n      const val = costs[i][c] + (c !== prevIdx ? prevMin1 : prevMin2);\n      if (val < curMin1) {\n        curMin2 = curMin1;\n        curMin1 = val;\n        curIdx = c;\n      } else if (val < curMin2) {\n        curMin2 = val;\n      }\n    }\n    prevMin1 = curMin1; prevMin2 = curMin2; prevIdx = curIdx;\n  }\n  return prevMin1;\n}",
          "python": "def minCostII(costs: list[list[int]]) -> int:\n    if not costs: return 0\n    prev_min1 = prev_min2 = 0\n    prev_idx = -1\n    for row in costs:\n        cur_min1 = cur_min2 = float('inf')\n        cur_idx = -1\n        for c, val in enumerate(row):\n            total = val + (prev_min1 if c != prev_idx else prev_min2)\n            if total < cur_min1:\n                cur_min2, cur_min1, cur_idx = cur_min1, total, c\n            elif total < cur_min2:\n                cur_min2 = total\n        prev_min1, prev_min2, prev_idx = cur_min1, cur_min2, cur_idx\n    return prev_min1"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  5,
                  3
                ],
                [
                  2,
                  9,
                  4
                ]
              ]
            ],
            "expected": 5,
            "description": "costs = [[1,5,3],[2,9,4]] -> min cost is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Optimized Paint House II: By finding only the 2 smallest values of the previous row (min1 and min2), each transition becomes O(1) instead of scanning O(k) other colors.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "active"
              },
              {
                "r": 0,
                "c": 1,
                "status": "active"
              },
              {
                "r": 0,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[0]",
                "[1, 5, 3]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop for house i = 1.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house i",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Find two smallest in dp[0] = [1, 5, 3]: min1 = 1 (column 0), min2 = 3 (column 2).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "min1",
                1
              ],
              [
                "min1Col",
                0
              ],
              [
                "min2",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for c in 0..k-1: evaluate color c = 0.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "c = 0 matches min1Col (0), so we cannot use min1. Use second smallest: min2 = 3 in O(1) time!",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "c == min1Col",
                true
              ],
              [
                "use",
                "min2 = 3"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[1][0] = costs[1][0] + min2 = 2 + 3 = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[1][0]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for c in 0..k-1: evaluate color c = 1.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "c = 1 differs from min1Col (0), so use the absolute minimum min1 = 1 directly in O(1)!",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "c != min1Col",
                true
              ],
              [
                "use",
                "min1 = 1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[1][1] = costs[1][1] + min1 = 9 + 1 = 10.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[1][1]",
                10
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for c in 0..k-1: evaluate color c = 2.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "c = 2 differs from min1Col (0), so use min1 = 1 directly: O(1), no scan.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                2
              ],
              [
                "use",
                "min1 = 1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "dp[1][2] = costs[1][2] + min1 = 4 + 1 = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "dp[1][2]",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Both rows filled. Row 1: [5, 10, 5]. Minimum is 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "active"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "min(dp[1])",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Two valid minimum paths: House 0 (0) + House 1 (2) = 1 + 4 = 5, or House 0 (2) + House 1 (0) = 3 + 2 = 5.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "best": {
              "label": "Min Cost = 5 (O(n·k) Optimal)"
            },
            "vars": [
              [
                "min cost",
                5
              ],
              [
                "time",
                "O(n·k)"
              ],
              [
                "space",
                "O(k)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 15/21: Why track 2 minimums? If the current color clashes with the absolute minimum (min1), the best alternative must be the second minimum (min2).",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "rule",
                "use min2 only if col == min1Col"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 16/21: No other value in the previous row could ever be better than min1 or min2, so checking only these 2 values is mathematically complete.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "correctness",
                "min1 and min2 cover all k colors"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 17/21: Finding min1 & min2 in each row takes a single O(k) linear pass.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "row prepass",
                "O(k) time"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 18/21: Updating the current row with k colors takes O(1) per cell, so O(k) total per house.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "row updates",
                "O(k) total"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Colour 2 differs from the cheapest column (0), so use min1 = 1 directly: O(1), no scan.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "house",
                1
              ],
              [
                "colour",
                2
              ],
              [
                "use",
                "min1 = 1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Total runtime across n houses is n × O(k) = O(n·k), achieving optimal theoretical complexity.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "vars": [
              [
                "total complexity",
                "O(n·k)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "return min(dp[n-1]) = 5. Optimal result achieved in O(n·k) time and O(1) extra space.",
            "matrix": [
              [
                1,
                5,
                3
              ],
              [
                5,
                10,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "visited-target"
              },
              {
                "r": 1,
                "c": 2,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "2 HOUSES × 3 COLOURS · DP[I][C] = CHEAPEST WITH HOUSE I = COLOUR C",
              "hideCoords": true
            },
            "best": {
              "label": "Min Painting Cost = 5"
            },
            "vars": [
              [
                "return",
                5
              ],
              [
                "time",
                "O(n·k)"
              ],
              [
                "space",
                "O(k)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "minimum-window-subsequence",
    "patternId": "dynamic-programming",
    "title": "Minimum Window Subsequence",
    "subtitle": "Smallest window of S containing T as a subsequence",
    "kind": "problem",
    "leetcode": {
      "id": 727,
      "slug": "minimum-window-subsequence",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "Given strings S and T, return the shortest contiguous substring of S that contains T as a subsequence. If there are several such windows of minimum length, return the one starting at the smallest index; if none exists, return an empty string.",
    "visualType": "matrix",
    "initialInput": [
      [
        0,
        "Ø",
        "Ø",
        "Ø"
      ],
      [
        1,
        "Ø",
        "Ø",
        "Ø"
      ],
      [
        2,
        1,
        "Ø",
        "Ø"
      ],
      [
        3,
        1,
        "Ø",
        "Ø"
      ],
      [
        4,
        1,
        1,
        "Ø"
      ],
      [
        5,
        1,
        1,
        1
      ],
      [
        6,
        5,
        1,
        1
      ],
      [
        7,
        5,
        5,
        1
      ],
      [
        8,
        5,
        5,
        1
      ],
      [
        9,
        5,
        5,
        5
      ]
    ],
    "approaches": [
      {
        "id": "grid-dp-carry-the-start-index",
        "label": "Grid DP · carry the start index",
        "complexity": {
          "time": "O(n·m)",
          "space": "O(n·m)"
        },
        "pseudocode": [
          "dp[(n+1) * (m+1)], -1 = no window",
          "dp[i][0] = i                        // empty T -> start = i",
          "for i in 1..n: for j in 1..m:",
          "  if S[i-1] == T[j-1]: dp[i][j] = dp[i-1][j-1]  // match -> diagonal",
          "  else:                dp[i][j] = dp[i-1][j]    // mismatch -> copy up",
          "  if dp[i][m] valid: window = S[dp[i][m]..i]",
          "    keep it if shorter than best",
          "return best window"
        ],
        "starterCode": {
          "javascript": "function minWindow(s, t) {\n  const n = s.length, m = t.length;\n  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1));\n  for (let i = 0; i <= n; i++) dp[i][0] = i;\n  let minLen = Infinity, minStart = -1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j <= m; j++) {\n      if (s[i - 1] === t[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = dp[i - 1][j];\n      }\n    }\n    if (dp[i][m] !== -1) {\n      const len = i - dp[i][m];\n      if (len < minLen) {\n        minLen = len;\n        minStart = dp[i][m];\n      }\n    }\n  }\n  return minStart === -1 ? '' : s.slice(minStart, minStart + minLen);\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    n, m = len(s), len(t)\n    dp = [[-1] * (m + 1) for _ in range(n + 1)]\n    for i in range(n + 1):\n        dp[i][0] = i\n    min_len = float('inf')\n    min_start = -1\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if s[i - 1] == t[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = dp[i - 1][j]\n        if dp[i][m] != -1:\n            length = i - dp[i][m]\n            if length < min_len:\n                min_len = length\n                min_start = dp[i][m]\n    return '' if min_start == -1 else s[min_start : min_start + min_len]"
        },
        "solutionCode": {
          "javascript": "function minWindow(s, t) {\n  const n = s.length, m = t.length;\n  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(-1));\n  for (let i = 0; i <= n; i++) dp[i][0] = i;\n  let minLen = Infinity, minStart = -1;\n  for (let i = 1; i <= n; i++) {\n    for (let j = 1; j <= m; j++) {\n      if (s[i - 1] === t[j - 1]) {\n        dp[i][j] = dp[i - 1][j - 1];\n      } else {\n        dp[i][j] = dp[i - 1][j];\n      }\n    }\n    if (dp[i][m] !== -1) {\n      const len = i - dp[i][m];\n      if (len < minLen) {\n        minLen = len;\n        minStart = dp[i][m];\n      }\n    }\n  }\n  return minStart === -1 ? '' : s.slice(minStart, minStart + minLen);\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    n, m = len(s), len(t)\n    dp = [[-1] * (m + 1) for _ in range(n + 1)]\n    for i in range(n + 1):\n        dp[i][0] = i\n    min_len = float('inf')\n    min_start = -1\n    for i in range(1, n + 1):\n        for j in range(1, m + 1):\n            if s[i - 1] == t[j - 1]:\n                dp[i][j] = dp[i - 1][j - 1]\n            else:\n                dp[i][j] = dp[i - 1][j]\n        if dp[i][m] != -1:\n            length = i - dp[i][m]\n            if length < min_len:\n                min_len = length\n                min_start = dp[i][m]\n    return '' if min_start == -1 else s[min_start : min_start + min_len]"
        },
        "testCases": [
          {
            "input": [
              "abcdebdde",
              "bde"
            ],
            "expected": "bcde",
            "description": "s = \"abcdebdde\", t = \"bde\" -> shortest window is \"bcde\""
          },
          {
            "input": [
              "jmeqqaewqwpdpqqaquaqsqqpqqa",
              "q"
            ],
            "expected": "q",
            "description": "s = \"jmeqqaewqwpdpqqaquaqsqqpqqa\", t = \"q\" -> shortest window is \"q\""
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Minimum Window Subsequence: Find the shortest contiguous substring of S = \"abcdebdde\" containing T = \"bde\" as a subsequence. Allocate a 10 × 4 DP table where dp[i][j] stores the starting index in S of the window.",
            "matrix": [
              [
                0,
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ],
              [
                ".",
                ".",
                ".",
                "."
              ]
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S",
                "\"abcdebdde\""
              ],
              [
                "T",
                "\"bde\""
              ],
              [
                "dp shape",
                "10 × 4"
              ],
              [
                "meaning",
                "dp[i][j] = window start index in S"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Base case dp[i][0] = i: An empty target string T[0..0] is trivially contained ending at any prefix S[0..i), with start index equal to i.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                ".",
                ".",
                "."
              ],
              [
                2,
                ".",
                ".",
                "."
              ],
              [
                3,
                ".",
                ".",
                "."
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "active"
              },
              {
                "r": 1,
                "c": 0,
                "status": "active"
              },
              {
                "r": 2,
                "c": 0,
                "status": "active"
              },
              {
                "r": 3,
                "c": 0,
                "status": "active"
              },
              {
                "r": 4,
                "c": 0,
                "status": "active"
              },
              {
                "r": 5,
                "c": 0,
                "status": "active"
              },
              {
                "r": 6,
                "c": 0,
                "status": "active"
              },
              {
                "r": 7,
                "c": 0,
                "status": "active"
              },
              {
                "r": 8,
                "c": 0,
                "status": "active"
              },
              {
                "r": 9,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "base case",
                "dp[i][0] = i for all i"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 1, prefix S[0..1) = \"a\". Check characters against T (\"b\", \"d\", \"e\").",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                ".",
                ".",
                "."
              ],
              [
                3,
                ".",
                ".",
                "."
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[0]",
                "'a'"
              ],
              [
                "T[0]",
                "'b'"
              ],
              [
                "match",
                "no"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "S[0] = 'a' mismatches all T characters ('b','d','e'). Copy from row 0 above: dp[1][1] = dp[1][2] = dp[1][3] = Ø.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                ".",
                ".",
                "."
              ],
              [
                3,
                ".",
                ".",
                "."
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 1,
                "status": "active"
              },
              {
                "r": 1,
                "c": 2,
                "status": "active"
              },
              {
                "r": 1,
                "c": 3,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "row 1",
                "[1, Ø, Ø, Ø]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 2, S[1] = 'b' MATCHES T[0] = 'b'! Copy diagonal: dp[2][1] = dp[1][0] = 1. The window matching \"b\" starts at index 1.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                ".",
                ".",
                "."
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 1,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 2,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[1]",
                "'b'"
              ],
              [
                "T[0]",
                "'b'"
              ],
              [
                "match",
                "yes -> diagonal"
              ],
              [
                "dp[2][1]",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "For j = 2,3: S[1]='b' mismatches T[1]='d' and T[2]='e'. Copy from above: dp[2][2] = dp[2][3] = Ø.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                ".",
                ".",
                "."
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 2,
                "c": 2,
                "status": "active"
              },
              {
                "r": 2,
                "c": 3,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "row 2",
                "[2, 1, Ø, Ø]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i = 3, S[2] = 'c' mismatches all T characters. Copy down values from row 2: dp[3][1] = 1, dp[3][2] = Ø, dp[3][3] = Ø.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                ".",
                ".",
                "."
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 2,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 3,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[2]",
                "'c'"
              ],
              [
                "dp[3][1]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 4, S[3] = 'd' MATCHES T[1] = 'd'! Copy diagonal: dp[4][2] = dp[3][1] = 1. Subsequence \"bd\" is matched in S[1..4], starting at index 1.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                ".",
                ".",
                "."
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 3,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 4,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[3]",
                "'d'"
              ],
              [
                "T[1]",
                "'d'"
              ],
              [
                "match",
                "yes -> diagonal"
              ],
              [
                "dp[4][2]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "S[4] = 'e' MATCHES T[2] = 'e'. We consume this character of T, so the window now needs T[0..2] before it, copy the DIAGONAL (blue): dp[5][3] = dp[4][2] = 1. The start index is carried straight through from the smaller sub-match.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 4,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 5,
                "c": 3,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[i-1]",
                "e"
              ],
              [
                "T[j-1]",
                "e"
              ],
              [
                "match",
                "yes -> diagonal"
              ],
              [
                "dp",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Valid window completed at i = 5: dp[5][3] = 1. Candidate window = S[1..5] = \"bcde\" (length = 4). Set best = \"bcde\".",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                ".",
                ".",
                "."
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "window start",
                1
              ],
              [
                "window end",
                5
              ],
              [
                "candidate",
                "\"bcde\""
              ],
              [
                "len",
                4
              ],
              [
                "best",
                "\"bcde\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 6, S[5] = 'b' MATCHES T[0] = 'b'. Diagonal copy: dp[6][1] = dp[5][0] = 5 (a new possible start index for \"b\").",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                ".",
                ".",
                "."
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 0,
                "status": "pacific"
              },
              {
                "r": 6,
                "c": 1,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[5]",
                "'b'"
              ],
              [
                "dp[6][1]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 7, S[6] = 'd' MATCHES T[1] = 'd'. Diagonal copy: dp[7][2] = dp[6][1] = 5.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                ".",
                ".",
                "."
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 6,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 7,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[6]",
                "'d'"
              ],
              [
                "dp[7][2]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 8, S[7] = 'd' MATCHES T[1] = 'd'. Diagonal copy: dp[8][2] = dp[7][1] = 5.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                ".",
                ".",
                "."
              ]
            ],
            "gridHighlights": [
              {
                "r": 7,
                "c": 1,
                "status": "pacific"
              },
              {
                "r": 8,
                "c": 2,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[7]",
                "'d'"
              ],
              [
                "dp[8][2]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 9, S[8] = 'e' MATCHES T[2] = 'e'. Diagonal copy: dp[9][3] = dp[8][2] = 5.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 8,
                "c": 2,
                "status": "pacific"
              },
              {
                "r": 9,
                "c": 3,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "S[8]",
                "'e'"
              ],
              [
                "dp[9][3]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Second valid window at i = 9: dp[9][3] = 5. Window = S[5..9] = \"bdde\" (length = 4). Ties current best length 4; keep earlier start index 1 (\"bcde\").",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              },
              {
                "r": 9,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "new window",
                "\"bdde\" (len 4)"
              ],
              [
                "existing best",
                "\"bcde\" (len 4)"
              ],
              [
                "tie breaker",
                "keep leftmost start index = 1"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 16/35: Table analysis and invariant verification. Row 4 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 17/35: Table analysis and invariant verification. Row 4 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 18/35: Table analysis and invariant verification. Row 4 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 19/35: Table analysis and invariant verification. Row 4 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 20/35: Table analysis and invariant verification. Row 5 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 21/35: Table analysis and invariant verification. Row 5 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 22/35: Table analysis and invariant verification. Row 5 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 23/35: Table analysis and invariant verification. Row 5 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 24/35: Table analysis and invariant verification. Row 6 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 25/35: Table analysis and invariant verification. Row 6 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 26/35: Table analysis and invariant verification. Row 6 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 27/35: Table analysis and invariant verification. Row 6 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 28/35: Table analysis and invariant verification. Row 7 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 29/35: Table analysis and invariant verification. Row 7 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 30/35: Table analysis and invariant verification. Row 7 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 31/35: Table analysis and invariant verification. Row 7 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 32/35: Table analysis and invariant verification. Row 8 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 33/35: Table analysis and invariant verification. Row 8 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Step 34/35: Table analysis and invariant verification. Row 8 maintains the optimal start indices for all sub-targets.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "vars": [
              [
                "optimal window",
                "\"bcde\""
              ],
              [
                "start index",
                1
              ],
              [
                "end index",
                5
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Return best window = \"bcde\". 2D Grid DP takes O(n·m) time and O(n·m) space.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "ROWS = S PREFIX LENGTH (0..9), COLS = T PREFIX LENGTH (0..3) · VALUE = WINDOW START INDEX IN S",
              "hideCoords": true
            },
            "best": {
              "label": "Min Window Subsequence = \"bcde\""
            },
            "vars": [
              [
                "return",
                "\"bcde\""
              ],
              [
                "time",
                "O(n·m)"
              ],
              [
                "space",
                "O(n·m)"
              ]
            ]
          }
        ]
      },
      {
        "id": "two-pointer-space-optimized-scan",
        "label": "Two-Pointer · space-optimized scan",
        "complexity": {
          "time": "O(n·m)",
          "space": "O(1)"
        },
        "pseudocode": [
          "sIdx = 0, tIdx = 0, minLen = inf, minStart = -1",
          "while sIdx < len(S):",
          "  if S[sIdx] == T[tIdx]: tIdx += 1",
          "  if tIdx == len(T):  // all matched",
          "    // backtrack to find tight start",
          "    end = sIdx, start = sIdx, tIdx -= 1",
          "    while tIdx >= 0:",
          "      if S[start] == T[tIdx]: tIdx -= 1",
          "      start -= 1",
          "    start += 1",
          "    if (end - start + 1) < minLen: minLen = end - start + 1; minStart = start",
          "    sIdx = start, tIdx = 0",
          "  sIdx += 1",
          "return S[minStart : minStart + minLen]"
        ],
        "starterCode": {
          "javascript": "function minWindow(s, t) {\n  let sIdx = 0, minLen = Infinity, minStart = -1;\n  while (sIdx < s.length) {\n    let tIdx = 0;\n    while (sIdx < s.length && tIdx < t.length) {\n      if (s[sIdx] === t[tIdx]) tIdx++;\n      sIdx++;\n    }\n    if (tIdx === t.length) {\n      let end = sIdx - 1, start = sIdx - 1;\n      tIdx--;\n      while (tIdx >= 0) {\n        if (s[start] === t[tIdx]) tIdx--;\n        start--;\n      }\n      start++;\n      if (end - start + 1 < minLen) {\n        minLen = end - start + 1;\n        minStart = start;\n      }\n      sIdx = start + 1;\n    }\n  }\n  return minStart === -1 ? '' : s.slice(minStart, minStart + minLen);\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    s_idx, min_len, min_start = 0, float('inf'), -1\n    while s_idx < len(s):\n        t_idx = 0\n        while s_idx < len(s) and t_idx < len(t):\n            if s[s_idx] == t[t_idx]:\n                t_idx += 1\n            s_idx += 1\n        if t_idx == len(t):\n            end = start = s_idx - 1\n            t_idx -= 1\n            while t_idx >= 0:\n                if s[start] == t[t_idx]:\n                    t_idx -= 1\n                start -= 1\n            start += 1\n            if end - start + 1 < min_len:\n                min_len = end - start + 1\n                min_start = start\n            s_idx = start + 1\n    return '' if min_start == -1 else s[min_start : min_start + min_len]"
        },
        "solutionCode": {
          "javascript": "function minWindow(s, t) {\n  let sIdx = 0, minLen = Infinity, minStart = -1;\n  while (sIdx < s.length) {\n    let tIdx = 0;\n    while (sIdx < s.length && tIdx < t.length) {\n      if (s[sIdx] === t[tIdx]) tIdx++;\n      sIdx++;\n    }\n    if (tIdx === t.length) {\n      let end = sIdx - 1, start = sIdx - 1;\n      tIdx--;\n      while (tIdx >= 0) {\n        if (s[start] === t[tIdx]) tIdx--;\n        start--;\n      }\n      start++;\n      if (end - start + 1 < minLen) {\n        minLen = end - start + 1;\n        minStart = start;\n      }\n      sIdx = start + 1;\n    }\n  }\n  return minStart === -1 ? '' : s.slice(minStart, minStart + minLen);\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    s_idx, min_len, min_start = 0, float('inf'), -1\n    while s_idx < len(s):\n        t_idx = 0\n        while s_idx < len(s) and t_idx < len(t):\n            if s[s_idx] == t[t_idx]:\n                t_idx += 1\n            s_idx += 1\n        if t_idx == len(t):\n            end = start = s_idx - 1\n            t_idx -= 1\n            while t_idx >= 0:\n                if s[start] == t[t_idx]:\n                    t_idx -= 1\n                start -= 1\n            start += 1\n            if end - start + 1 < min_len:\n                min_len = end - start + 1\n                min_start = start\n            s_idx = start + 1\n    return '' if min_start == -1 else s[min_start : min_start + min_len]"
        },
        "testCases": [
          {
            "input": [
              "abcdebdde",
              "bde"
            ],
            "expected": "bcde",
            "description": "s = \"abcdebdde\", t = \"bde\" -> shortest window is \"bcde\""
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Two-Pointer Backtracking: S = \"abcdebdde\", T = \"bde\". Scan forward to find matches, then backtrack to find the tightest start index without a 2D matrix (O(1) space).",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "customVisual": {
              "label": "TWO-POINTER FORWARD & BACKTRACK WINDOW SCAN",
              "hideCoords": true
            },
            "vars": [
              [
                "S",
                "\"abcdebdde\""
              ],
              [
                "T",
                "\"bde\""
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Forward scan: Match S[1]='b' (T[0]), S[3]='d' (T[1]), S[4]='e' (T[2]). All characters of T matched at end = 4.",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "active"
              }
            ],
            "customVisual": {
              "label": "TWO-POINTER FORWARD & BACKTRACK WINDOW SCAN",
              "hideCoords": true
            },
            "vars": [
              [
                "forward match at",
                "S[4] = 'e'"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Backtrack from end = 4: Walk leftwards to find earliest start index matching 'b'. Start found at index 1. Window 1: S[1..5] = \"bcde\" (length = 4).",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "TWO-POINTER FORWARD & BACKTRACK WINDOW SCAN",
              "hideCoords": true
            },
            "vars": [
              [
                "window 1",
                "\"bcde\""
              ],
              [
                "len",
                4
              ],
              [
                "best",
                "\"bcde\""
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Resume scan from start + 1 = 2. Next forward scan finds match ending at S[8]='e'. Backtrack finds start at S[5]='b'. Window 2: S[5..9] = \"bdde\" (length = 4).",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              },
              {
                "r": 9,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "TWO-POINTER FORWARD & BACKTRACK WINDOW SCAN",
              "hideCoords": true
            },
            "vars": [
              [
                "window 2",
                "\"bdde\""
              ],
              [
                "len",
                4
              ],
              [
                "best",
                "\"bcde\" (leftmost)"
              ]
            ]
          },
          {
            "codeLine": 14,
            "narration": "Return \"bcde\". Both windows have length 4; we pick the leftmost window. Time complexity is O(n·m) and auxiliary space is O(1).",
            "matrix": [
              [
                0,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                1,
                "Ø",
                "Ø",
                "Ø"
              ],
              [
                2,
                1,
                "Ø",
                "Ø"
              ],
              [
                3,
                1,
                "Ø",
                "Ø"
              ],
              [
                4,
                1,
                1,
                "Ø"
              ],
              [
                5,
                1,
                1,
                1
              ],
              [
                6,
                5,
                1,
                1
              ],
              [
                7,
                5,
                5,
                1
              ],
              [
                8,
                5,
                5,
                1
              ],
              [
                9,
                5,
                5,
                5
              ]
            ],
            "gridHighlights": [
              {
                "r": 5,
                "c": 3,
                "status": "visited-target"
              }
            ],
            "customVisual": {
              "label": "TWO-POINTER FORWARD & BACKTRACK WINDOW SCAN",
              "hideCoords": true
            },
            "best": {
              "label": "Min Window = \"bcde\" (O(1) Space)"
            },
            "vars": [
              [
                "result",
                "\"bcde\""
              ],
              [
                "time",
                "O(n·m)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      }
    ]
  }
];
