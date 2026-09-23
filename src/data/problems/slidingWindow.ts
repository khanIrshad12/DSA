import { Problem } from '../../types';

export const slidingWindowProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "sliding-window",
    "title": "Overview",
    "subtitle": "What a sliding window is · the fixed-size flavor",
    "kind": "intro",
    "statement": "A sliding window maintains a contiguous subarray or substring range [left, right] that expands and contracts as you scan. Converts repeated O(k · n) subsegment recomputations into O(n) rolling updates.",
    "visualType": "array",
    "initialInput": [
      2,
      1,
      5,
      1,
      3,
      2
    ],
    "approaches": [
      {
        "label": "Brute force · re-evaluate window each step",
        "complexity": {
          "time": "O(n · k)",
          "space": "O(1)"
        },
        "pseudocode": [
          "max_sum = -infinity",
          "for i = 0 to n - k:",
          "  sum = 0",
          "  for j = i to i + k - 1:",
          "    sum += arr[j]",
          "  max_sum = max(max_sum, sum)",
          "return max_sum"
        ],
        "starterCode": {
          "javascript": "function slidingWindowIntro(arr, k) {\n  // Write your solution here\n  \n}",
          "python": "def slidingWindowIntro(arr: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function slidingWindowIntro(arr, k) {\n  let maxSum = -Infinity;\n  for (let i = 0; i <= arr.length - k; i++) {\n    let sum = 0;\n    for (let j = i; j < i + k; j++) sum += arr[j];\n    maxSum = Math.max(maxSum, sum);\n  }\n  return maxSum;\n}",
          "python": "def slidingWindowIntro(arr: list[int], k: int) -> int:\n    max_sum = float('-inf')\n    for i in range(len(arr) - k + 1):\n        max_sum = max(max_sum, sum(arr[i:i+k]))\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                1,
                3,
                2
              ],
              3
            ],
            "expected": 9,
            "description": "Window of size 3 over [2, 1, 5, 1, 3, 2]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given arr = [2, 1, 5, 1, 3, 2], k = 3. Brute force approach re-sums all k elements for each possible window position.",
            "vars": [
              [
                "k",
                3
              ],
              [
                "max_sum",
                "-∞"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 0: Recompute sum arr[0..2] = 2 + 1 + 5 = 8. max_sum = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window 0 (sum=8)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "sum",
                8
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 1: Recompute sum arr[1..3] = 1 + 5 + 1 = 7. max_sum remains 8.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window 1 (sum=7)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "sum",
                7
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 2: Recompute sum arr[2..4] = 5 + 1 + 3 = 9. New max_sum = 9!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Window 2 (sum=9)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Max = 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "sum",
                9
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 3: Recompute sum arr[3..5] = 1 + 3 + 2 = 6. max_sum remains 9.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Window 3 (sum=6)"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "sum",
                6
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return max_sum = 9. Redundant element additions cost O(n · k) time.",
            "best": {
              "label": "Result: 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                9
              ],
              [
                "time",
                "O(n · k)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · rolling window update",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "window_sum = sum of first k elements",
          "max_sum = window_sum",
          "for i = k to n - 1:",
          "  window_sum += arr[i] - arr[i - k]",
          "  max_sum = max(max_sum, window_sum)",
          "return max_sum"
        ],
        "starterCode": {
          "javascript": "function slidingWindowIntro(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
          "python": "def slidingWindowIntro(arr: list[int], k: int) -> int:\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum"
        },
        "solutionCode": {
          "javascript": "function slidingWindowIntro(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
          "python": "def slidingWindowIntro(arr: list[int], k: int) -> int:\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                1,
                3,
                2
              ],
              3
            ],
            "expected": 9,
            "description": "Window of size 3 over [2, 1, 5, 1, 3, 2]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Build initial fixed window of size K = 3 over [2, 1, 5]. Initial window_sum = 2 + 1 + 5 = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window K=3 (sum=8)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "k",
                3
              ],
              [
                "window_sum",
                8
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window right to i = 3: subtract leaving element arr[0] (2) and add entering element arr[3] (1).",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window K=3"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "dimmed": [
              0
            ],
            "vars": [
              [
                "left_out",
                2
              ],
              [
                "right_in",
                1
              ],
              [
                "window_sum",
                "8 - 2 + 1 = 7"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Compare window_sum (7) with max_sum (8) -> max_sum remains 8.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window K=3"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "window_sum",
                7
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window right to i = 4: subtract arr[1] (1) and add arr[4] (3). New window_sum = 7 - 1 + 3 = 9.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Window K=3"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "dimmed": [
              0,
              1
            ],
            "vars": [
              [
                "left_out",
                1
              ],
              [
                "right_in",
                3
              ],
              [
                "window_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "window_sum (9) > max_sum (8)! Update max_sum = 9.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "New Max = 9"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "New Max = 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "window_sum",
                9
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window right to i = 5: subtract arr[2] (5) and add arr[5] (2). New window_sum = 9 - 5 + 2 = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Window K=3"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "dimmed": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "window_sum",
                6
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Array traversal complete. Return max_sum = 9 in O(n) single pass with O(1) space!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Max Window [5, 1, 3]"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Optimal Max = 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                9
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
    "id": "max-sum-subarray-k",
    "patternId": "sliding-window",
    "title": "Max Sum Subarray of Size K",
    "subtitle": "Find the K-length contiguous subarray with the largest sum",
    "kind": "problem",
    "leetcode": {
      "id": 643,
      "slug": "maximum-average-subarray-i",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Microsoft"
    ],
    "statement": "Given an integer array and a window size k, find the maximum sum among all contiguous subarrays of length k.",
    "visualType": "array",
    "initialInput": [
      2,
      1,
      5,
      1,
      3,
      2
    ],
    "approaches": [
      {
        "label": "Brute force · re-check every window",
        "complexity": {
          "time": "O(n · k)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given arr, K",
          "best = 0",
          "for i = 0 to n - K:",
          "  win = arr[i .. i+K-1]",
          "  best = max(best, sum(win))",
          "return best"
        ],
        "starterCode": {
          "javascript": "function maxSumSubarray(arr, k) {\n  let maxSum = -Infinity;\n  for (let i = 0; i <= arr.length - k; i++) {\n    let currentSum = 0;\n    for (let j = i; j < i + k; j++) {\n      currentSum += arr[j];\n    }\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  return maxSum;\n}",
          "python": "def maxSumSubarray(arr: list[int], k: int) -> int:\n    max_sum = float('-inf')\n    for i in range(len(arr) - k + 1):\n        current_sum = sum(arr[i:i+k])\n        max_sum = max(max_sum, current_sum)\n    return max_sum"
        },
        "solutionCode": {
          "javascript": "function maxSumSubarray(arr, k) {\n  let maxSum = -Infinity;\n  for (let i = 0; i <= arr.length - k; i++) {\n    let currentSum = 0;\n    for (let j = i; j < i + k; j++) {\n      currentSum += arr[j];\n    }\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  return maxSum;\n}",
          "python": "def maxSumSubarray(arr: list[int], k: int) -> int:\n    max_sum = float('-inf')\n    for i in range(len(arr) - k + 1):\n        current_sum = sum(arr[i:i+k])\n        max_sum = max(max_sum, current_sum)\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                1,
                3,
                2
              ],
              3
            ],
            "expected": 9,
            "description": "Max window [5, 1, 3] = 9"
          },
          {
            "input": [
              [
                2,
                3,
                4,
                1,
                5
              ],
              2
            ],
            "expected": 7,
            "description": "Max window [3, 4] = 7"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given arr = [2, 1, 5, 1, 3, 2], k = 3. Re-calculate sum for each k-length window from scratch.",
            "vars": [
              [
                "k",
                3
              ],
              [
                "max_sum",
                "-∞"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Window 0 [2, 1, 5]: sum = 2 + 1 + 5 = 8. best = max(0, 8) = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window [2, 1, 5]"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "sum",
                8
              ],
              [
                "best",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Window 1 [1, 5, 1]: sum = 1 + 5 + 1 = 7. best stays 8.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window [1, 5, 1]"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "sum",
                7
              ],
              [
                "best",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Window 2 [5, 1, 3]: sum = 5 + 1 + 3 = 9. New maximum: best = 9!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Window [5, 1, 3]"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Max [5, 1, 3] = 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "sum",
                9
              ],
              [
                "best",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Window 3 [1, 3, 2]: sum = 1 + 3 + 2 = 6. best stays 9.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Window [1, 3, 2]"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "sum",
                6
              ],
              [
                "best",
                9
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return best = 9. Total time O(n · k) with O(1) space.",
            "best": {
              "label": "Result: 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                9
              ],
              [
                "time",
                "O(n · k)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · fixed sliding window",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "window_sum = sum of first k elements",
          "max_sum = window_sum",
          "for i = k to n - 1:",
          "  window_sum += arr[i] - arr[i - k]",
          "  max_sum = max(max_sum, window_sum)",
          "return max_sum"
        ],
        "starterCode": {
          "javascript": "function maxSumSubarray(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
          "python": "def maxSumSubarray(arr: list[int], k: int) -> int:\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum"
        },
        "solutionCode": {
          "javascript": "function maxSumSubarray(arr, k) {\n  let windowSum = 0;\n  for (let i = 0; i < k; i++) windowSum += arr[i];\n  let maxSum = windowSum;\n  for (let i = k; i < arr.length; i++) {\n    windowSum += arr[i] - arr[i - k];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  return maxSum;\n}",
          "python": "def maxSumSubarray(arr: list[int], k: int) -> int:\n    window_sum = sum(arr[:k])\n    max_sum = window_sum\n    for i in range(k, len(arr)):\n        window_sum += arr[i] - arr[i - k]\n        max_sum = max(max_sum, window_sum)\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                1,
                3,
                2
              ],
              3
            ],
            "expected": 9,
            "description": "Max window [5, 1, 3] = 9"
          },
          {
            "input": [
              [
                2,
                3,
                4,
                1,
                5
              ],
              2
            ],
            "expected": 7,
            "description": "Max window [3, 4] = 7"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize rolling window sum: sum first 3 elements [2, 1, 5] = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window K=3"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "window_sum",
                8
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to index 3: subtract 2, add 1. window_sum = 8 - 2 + 1 = 7. max_sum = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3
            },
            "highlights": [
              1,
              2,
              3
            ],
            "dimmed": [
              0
            ],
            "vars": [
              [
                "window_sum",
                7
              ],
              [
                "max_sum",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to index 4: subtract 1, add 3. window_sum = 7 - 1 + 3 = 9. Update max_sum = 9!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4
            },
            "highlights": [
              2,
              3,
              4
            ],
            "dimmed": [
              0,
              1
            ],
            "best": {
              "label": "Max Sum = 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "window_sum",
                9
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to index 5: subtract 5, add 2. window_sum = 9 - 5 + 2 = 6. max_sum remains 9.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5
            },
            "highlights": [
              3,
              4,
              5
            ],
            "dimmed": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "window_sum",
                6
              ],
              [
                "max_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Scan complete. Return max_sum = 9 in O(n) time with O(1) space!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "best": {
              "label": "Optimal Max: 9",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                9
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
    "id": "max-sum-distinct-subarrays-k",
    "patternId": "sliding-window",
    "title": "Max Sum of Distinct Subarrays, Size K",
    "subtitle": "Fixed window + a frequency map gate",
    "kind": "problem",
    "leetcode": {
      "id": 2461,
      "slug": "maximum-sum-of-distinct-subarrays-with-length-k",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Meta"
    ],
    "statement": "Given an integer array nums and a length k, find the maximum sum among all contiguous subarrays of length k whose elements are all distinct.",
    "visualType": "array",
    "initialInput": [
      1,
      5,
      4,
      2,
      9,
      9,
      9
    ],
    "approaches": [
      {
        "label": "Brute force · re-check every window",
        "complexity": {
          "time": "O(n · k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "given arr, K",
          "best = 0",
          "for i = 0 to n - K:",
          "  win = arr[i .. i+K-1]",
          "  if win has a duplicate: skip",
          "  best = max(best, sum(win))",
          "return best"
        ],
        "starterCode": {
          "javascript": "function maximumSubarraySum(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def maximumSubarraySum(nums: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maximumSubarraySum(nums, k) {\n  let maxSum = 0;\n  for (let i = 0; i <= nums.length - k; i++) {\n    const sub = nums.slice(i, i + k);\n    const set = new Set(sub);\n    if (set.size === k) {\n      const sum = sub.reduce((a, b) => a + b, 0);\n      maxSum = Math.max(maxSum, sum);\n    }\n  }\n  return maxSum;\n}",
          "python": "def maximumSubarraySum(nums: list[int], k: int) -> int:\n    max_sum = 0\n    for i in range(len(nums) - k + 1):\n        sub = nums[i:i+k]\n        if len(set(sub)) == k:\n            max_sum = max(max_sum, sum(sub))\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                5,
                4,
                2,
                9,
                9,
                9
              ],
              3
            ],
            "expected": 15,
            "description": "[4, 2, 9] = 15"
          },
          {
            "input": [
              [
                4,
                4,
                4
              ],
              3
            ],
            "expected": 0,
            "description": "No distinct subarray"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given arr = [1, 5, 4, 2, 9, 9, 9], K = 3. Check every window for duplicates, record maximum sum among valid distinct windows.",
            "vars": [
              [
                "K",
                3
              ],
              [
                "best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 0: inspect window win = arr[0..2] = [1, 5, 4].",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "WINDOW K=3"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "win",
                "[1, 5, 4]"
              ],
              [
                "best",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check win [1, 5, 4]: all 3 elements distinct! Calculate sum = 1 + 5 + 4 = 10. best = max(0, 10) = 10.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "DISTINCT (SUM=10)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Sum = 10",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "win",
                "[1, 5, 4]"
              ],
              [
                "best",
                10
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 1: inspect window win = arr[1..3] = [5, 4, 2].",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "WINDOW K=3"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "win",
                "[5, 4, 2]"
              ],
              [
                "best",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check win [5, 4, 2]: all distinct! Sum = 5 + 4 + 2 = 11. best = max(10, 11) = 11.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "DISTINCT (SUM=11)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "best": {
              "label": "New Best = 11",
              "indices": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "win",
                "[5, 4, 2]"
              ],
              [
                "best",
                11
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 2: inspect window win = arr[2..4] = [4, 2, 9].",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "WINDOW K=3"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "win",
                "[4, 2, 9]"
              ],
              [
                "best",
                11
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check win [4, 2, 9]: all distinct! Sum = 4 + 2 + 9 = 15. best = max(11, 15) = 15!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "DISTINCT (SUM=15)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "New Best = 15",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "win",
                "[4, 2, 9]"
              ],
              [
                "best",
                15
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 3: inspect window win = arr[3..5] = [2, 9, 9].",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "WINDOW K=3"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "win",
                "[2, 9, 9]"
              ],
              [
                "best",
                15
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Duplicate! 9 appears more than once. This window is DISQUALIFIED — sum 20 is irrelevant. best stays 15.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "red"
              },
              {
                "name": "R",
                "index": 5,
                "color": "red"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "DUPLICATE 9 ✕"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "dup",
                9
              ],
              [
                "best",
                15
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 4: inspect window win = arr[4..6] = [9, 9, 9].",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 4,
              "end": 6,
              "label": "WINDOW K=3"
            },
            "highlights": [
              4,
              5,
              6
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "win",
                "[9, 9, 9]"
              ],
              [
                "best",
                15
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Duplicate! 9 appears more than once. This window is DISQUALIFIED — sum 27 is irrelevant. best stays 15.",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "red"
              },
              {
                "name": "R",
                "index": 6,
                "color": "red"
              }
            ],
            "window": {
              "start": 4,
              "end": 6,
              "label": "DUPLICATE 9 ✕"
            },
            "highlights": [
              4,
              5,
              6
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "dup",
                9
              ],
              [
                "best",
                15
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All windows checked. Return best = 15 (subarray [4, 2, 9]).",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Optimal Window [4, 2, 9]"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Optimal Result: 15",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                15
              ],
              [
                "time",
                "O(n · k)"
              ],
              [
                "space",
                "O(k)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · slide with freq map",
        "complexity": {
          "time": "O(n)",
          "space": "O(k)"
        },
        "pseudocode": [
          "freq = empty map, sum = 0, best = 0",
          "for i = 0 to n - 1:",
          "  sum += nums[i]; freq[nums[i]]++",
          "  if i >= k:",
          "    out = nums[i - k]",
          "    sum -= out; freq[out]--",
          "    if freq[out] == 0: delete freq[out]",
          "  if i >= k - 1 and len(freq) == k:",
          "    best = max(best, sum)",
          "return best"
        ],
        "starterCode": {
          "javascript": "function maximumSubarraySum(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def maximumSubarraySum(nums: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maximumSubarraySum(nums, k) {\n  const freq = new Map();\n  let sum = 0, maxSum = 0;\n  for (let i = 0; i < nums.length; i++) {\n    sum += nums[i];\n    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);\n    if (i >= k) {\n      const out = nums[i - k];\n      sum -= out;\n      const count = freq.get(out) - 1;\n      if (count === 0) freq.delete(out);\n      else freq.set(out, count);\n    }\n    if (i >= k - 1 && freq.size === k) {\n      maxSum = Math.max(maxSum, sum);\n    }\n  }\n  return maxSum;\n}",
          "python": "def maximumSubarraySum(nums: list[int], k: int) -> int:\n    freq = {}\n    curr_sum = 0\n    max_sum = 0\n    for i, num in enumerate(nums):\n        curr_sum += num\n        freq[num] = freq.get(num, 0) + 1\n        if i >= k:\n            out = nums[i - k]\n            curr_sum -= out\n            freq[out] -= 1\n            if freq[out] == 0:\n                del freq[out]\n        if i >= k - 1 and len(freq) == k:\n            max_sum = max(max_sum, curr_sum)\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                5,
                4,
                2,
                9,
                9,
                9
              ],
              3
            ],
            "expected": 15,
            "description": "[4, 2, 9] = 15"
          },
          {
            "input": [
              [
                4,
                4,
                4
              ],
              3
            ],
            "expected": 0,
            "description": "No distinct subarray"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 5, 4, 2, 9, 9, 9], k = 3. Maintain sliding window of size k with a frequency map for O(1) duplicate checks.",
            "vars": [
              [
                "k",
                3
              ],
              [
                "freq",
                "{}"
              ],
              [
                "max_sum",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Build initial window over indices 0..2: add 1, 5, 4. sum = 10. freq = {1:1, 5:1, 4:1}.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "WINDOW K=3"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "window_sum",
                10
              ],
              [
                "distinct_count",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "len(freq) == 3 (all elements distinct!). Record max_sum = 10.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "DISTINCT (SUM=10)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Sum = 10",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "max_sum",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide window to index 3 (val 2): evict nums[0] (1) -> freq removes 1. Add 2 -> freq[2]=1. sum = 10 - 1 + 2 = 11.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "DISTINCT (SUM=11)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "window_sum",
                11
              ],
              [
                "distinct_count",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All distinct! window_sum (11) > max_sum (10) -> update max_sum = 11.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "New Max = 11"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "best": {
              "label": "Max Sum = 11",
              "indices": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "max_sum",
                11
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide to index 4 (val 9): evict nums[1] (5), add 9. freq = {4:1, 2:1, 9:1}. sum = 11 - 5 + 9 = 15.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "DISTINCT (SUM=15)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "window_sum",
                15
              ],
              [
                "distinct_count",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All distinct! 15 > 11 -> update max_sum = 15.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "New Max = 15"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Max Sum = 15",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "max_sum",
                15
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide to index 5 (val 9): evict nums[2] (4), add second 9. freq = {2:1, 9:2}. Duplicate detected! len(freq)=2 < 3.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "red"
              },
              {
                "name": "R",
                "index": 5,
                "color": "red"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "DUPLICATE 9 ✕"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "window_sum",
                20
              ],
              [
                "distinct_count",
                2
              ],
              [
                "valid",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide to index 6 (val 9): evict nums[3] (2), add third 9. freq = {9:3}. Duplicate 9 -> skip update.",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "red"
              },
              {
                "name": "R",
                "index": 6,
                "color": "red"
              }
            ],
            "window": {
              "start": 4,
              "end": 6,
              "label": "DUPLICATE 9 ✕"
            },
            "highlights": [
              4,
              5,
              6
            ],
            "vars": [
              [
                "window_sum",
                27
              ],
              [
                "distinct_count",
                1
              ],
              [
                "valid",
                false
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Return max_sum = 15 in linear O(n) time & O(k) auxiliary space!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Optimal [4, 2, 9]"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Optimal Result: 15",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                15
              ],
              [
                "time",
                "O(n)"
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
    "id": "max-points-from-cards",
    "patternId": "sliding-window",
    "title": "Max Points From Cards",
    "subtitle": "Take K from either end · complement window",
    "kind": "problem",
    "leetcode": {
      "id": 1423,
      "slug": "maximum-points-you-can-obtain-from-cards",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "ByteDance"
    ],
    "statement": "There are several cards arranged in a row. You can take one card from the beginning or from the end. You have to take exactly k cards. Return the maximum score you can obtain.",
    "visualType": "array",
    "initialInput": [
      1,
      2,
      3,
      4,
      5,
      6,
      1
    ],
    "approaches": [
      {
        "label": "Brute force · try all k prefix/suffix splits",
        "complexity": {
          "time": "O(k²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "max_score = 0",
          "for i = 0 to k:",
          "  score = sum(cardPoints[0..i-1]) + sum(cardPoints[n-(k-i)..n-1])",
          "  max_score = max(max_score, score)",
          "return max_score"
        ],
        "starterCode": {
          "javascript": "function maxScore(cardPoints, k) {\n  // Write your solution here\n  \n}",
          "python": "def maxScore(cardPoints: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxScore(cardPoints, k) {\n  const n = cardPoints.length;\n  let maxScore = 0;\n  for (let i = 0; i <= k; i++) {\n    let score = 0;\n    for (let l = 0; l < i; l++) score += cardPoints[l];\n    for (let r = 0; r < k - i; r++) score += cardPoints[n - 1 - r];\n    maxScore = Math.max(maxScore, score);\n  }\n  return maxScore;\n}",
          "python": "def maxScore(cardPoints: list[int], k: int) -> int:\n    n = len(cardPoints)\n    max_score = 0\n    for i in range(k + 1):\n        score = sum(cardPoints[:i]) + sum(cardPoints[n - (k - i):] if k - i > 0 else [])\n        max_score = max(max_score, score)\n    return max_score"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5,
                6,
                1
              ],
              3
            ],
            "expected": 12,
            "description": "Take 5, 6, 1 = 12"
          },
          {
            "input": [
              [
                2,
                2,
                2
              ],
              2
            ],
            "expected": 4,
            "description": "Take 2 + 2 = 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given cardPoints = [1, 2, 3, 4, 5, 6, 1], k = 3. Brute force tests all k+1 combinations of taking i cards from left and (k - i) from right.",
            "vars": [
              [
                "k",
                3
              ],
              [
                "max_score",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Split 1 (Take 3 from left, 0 from right): [1, 2, 3] -> sum = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "take_left",
                3
              ],
              [
                "take_right",
                0
              ],
              [
                "score",
                6
              ],
              [
                "max_score",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Split 2 (Take 2 from left [1, 2], 1 from right [1]): sum = 1 + 2 + 1 = 4.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1,
              6
            ],
            "vars": [
              [
                "take_left",
                2
              ],
              [
                "take_right",
                1
              ],
              [
                "score",
                4
              ],
              [
                "max_score",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Split 3 (Take 1 from left [1], 2 from right [6, 1]): sum = 1 + 6 + 1 = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5,
              6
            ],
            "vars": [
              [
                "take_left",
                1
              ],
              [
                "take_right",
                2
              ],
              [
                "score",
                8
              ],
              [
                "max_score",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Split 4 (Take 0 from left, 3 from right [5, 6, 1]): sum = 5 + 6 + 1 = 12! New maximum!",
            "pointers": [
              {
                "name": "R",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4,
              5,
              6
            ],
            "best": {
              "label": "Max Score = 12",
              "indices": [
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "take_left",
                0
              ],
              [
                "take_right",
                3
              ],
              [
                "score",
                12
              ],
              [
                "max_score",
                12
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return max_score = 12. Brute force tries all combinations in O(k²) time.",
            "highlights": [
              4,
              5,
              6
            ],
            "best": {
              "label": "Result: 12",
              "indices": [
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                12
              ],
              [
                "time",
                "O(k²)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · complement minimum sliding window",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "total = sum(cardPoints)",
          "w = len(cardPoints) - k",
          "window_sum = sum(cardPoints[0..w-1])",
          "min_sum = window_sum",
          "for i = w to n - 1:",
          "  window_sum += cardPoints[i] - cardPoints[i - w]",
          "  min_sum = min(min_sum, window_sum)",
          "return total - min_sum"
        ],
        "starterCode": {
          "javascript": "function maxScore(cardPoints, k) {\n  // Write your solution here\n  \n}",
          "python": "def maxScore(cardPoints: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxScore(cardPoints, k) {\n  const n = cardPoints.length;\n  const total = cardPoints.reduce((a, b) => a + b, 0);\n  const w = n - k;\n  if (w === 0) return total;\n  let windowSum = 0;\n  for (let i = 0; i < w; i++) windowSum += cardPoints[i];\n  let minSum = windowSum;\n  for (let i = w; i < n; i++) {\n    windowSum += cardPoints[i] - cardPoints[i - w];\n    minSum = Math.min(minSum, windowSum);\n  }\n  return total - minSum;\n}",
          "python": "def maxScore(cardPoints: list[int], k: int) -> int:\n    n = len(cardPoints)\n    total = sum(cardPoints)\n    w = n - k\n    if w == 0: return total\n    window_sum = sum(cardPoints[:w])\n    min_sum = window_sum\n    for i in range(w, n):\n        window_sum += cardPoints[i] - cardPoints[i - w]\n        min_sum = min(min_sum, window_sum)\n    return total - min_sum"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5,
                6,
                1
              ],
              3
            ],
            "expected": 12,
            "description": "Take 5, 6, 1 = 12"
          },
          {
            "input": [
              [
                2,
                2,
                2
              ],
              2
            ],
            "expected": 4,
            "description": "Take 2 + 2 = 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Taking k cards from ends is equivalent to leaving a contiguous middle window of size (n - k) = 7 - 3 = 4 with MINIMUM sum!",
            "vars": [
              [
                "n",
                7
              ],
              [
                "k",
                3
              ],
              [
                "window_size (n - k)",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Total sum of all cards = 1 + 2 + 3 + 4 + 5 + 6 + 1 = 22.",
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "vars": [
              [
                "total_sum",
                22
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Initial middle window of size 4: [1, 2, 3, 4]. Window sum = 10. Remaining score = 22 - 10 = 12.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "Leave [1, 2, 3, 4] (sum=10)"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "window_sum",
                10
              ],
              [
                "min_window",
                10
              ],
              [
                "max_points",
                12
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide window to [2, 3, 4, 5]: subtract 1, add 5 -> window sum = 14. Remaining points = 22 - 14 = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 4,
              "label": "Leave [2, 3, 4, 5] (sum=14)"
            },
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "window_sum",
                14
              ],
              [
                "min_window",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide window to [3, 4, 5, 6]: subtract 2, add 6 -> window sum = 18. Remaining points = 22 - 18 = 4.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 5,
              "label": "Leave [3, 4, 5, 6] (sum=18)"
            },
            "highlights": [
              2,
              3,
              4,
              5
            ],
            "vars": [
              [
                "window_sum",
                18
              ],
              [
                "min_window",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Slide window to [4, 5, 6, 1]: subtract 3, add 1 -> window sum = 16. Remaining points = 22 - 16 = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 6,
              "label": "Leave [4, 5, 6, 1] (sum=16)"
            },
            "highlights": [
              3,
              4,
              5,
              6
            ],
            "vars": [
              [
                "window_sum",
                16
              ],
              [
                "min_window",
                10
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Minimum middle window sum = 10 (leaving [1, 2, 3, 4]). Taken cards are [5, 6, 1] -> maximum score = 22 - 10 = 12!",
            "highlights": [
              4,
              5,
              6
            ],
            "best": {
              "label": "Max Points = 12 (Cards 5, 6, 1)",
              "indices": [
                4,
                5,
                6
              ]
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
    "id": "variable-size-window",
    "patternId": "sliding-window",
    "title": "Variable-Size Window",
    "subtitle": "The expand → repair → record template",
    "kind": "concept",
    "statement": "Variable-size sliding windows expand the right pointer to explore, then contract the left pointer to repair an invalid invariant or find the minimal optimal range. This 3-phase template (Expand → Repair / Shrink → Record) solves shortest/longest valid subarray problems in O(n) time.",
    "visualType": "array",
    "initialInput": [
      2,
      3,
      1,
      2,
      4,
      3
    ],
    "approaches": [
      {
        "label": "Brute force · all subarrays (nested loops)",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "min_len = infinity",
          "for i = 0 to n - 1:",
          "  sum = 0",
          "  for j = i to n - 1:",
          "    sum += arr[j]",
          "    if sum >= target:",
          "      min_len = min(min_len, j - i + 1)",
          "      break",
          "return min_len"
        ],
        "starterCode": {
          "javascript": "function minSubArrayLen(target, nums) {\n  // Write your solution here\n  \n}",
          "python": "def minSubArrayLen(target: int, nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function minSubArrayLen(target, nums) {\n  let minLen = Infinity;\n  for (let i = 0; i < nums.length; i++) {\n    let sum = 0;\n    for (let j = i; j < nums.length; j++) {\n      sum += nums[j];\n      if (sum >= target) {\n        minLen = Math.min(minLen, j - i + 1);\n        break;\n      }\n    }\n  }\n  return minLen === Infinity ? 0 : minLen;\n}",
          "python": "def minSubArrayLen(target: int, nums: list[int]) -> int:\n    min_len = float('inf')\n    for i in range(len(nums)):\n        curr_sum = 0\n        for j in range(i, len(nums)):\n            curr_sum += nums[j]\n            if curr_sum >= target:\n                min_len = min(min_len, j - i + 1)\n                break\n    return 0 if min_len == float('inf') else min_len"
        },
        "testCases": [
          {
            "input": [
              7,
              [
                2,
                3,
                1,
                2,
                4,
                3
              ]
            ],
            "expected": 2,
            "description": "[4, 3] sum=7 len=2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [2, 3, 1, 2, 4, 3], target = 7. Brute force checks all O(n²) subarrays starting at each index.",
            "vars": [
              [
                "target",
                7
              ],
              [
                "min_len",
                "∞"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start index i = 0: [2, 3, 1, 2] reaches sum = 8 >= 7 at length 4.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "Len = 4 (sum=8)"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "sum",
                8
              ],
              [
                "len",
                4
              ],
              [
                "min_len",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start index i = 1: [3, 1, 2, 4] reaches sum = 10 >= 7 at length 4.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 4,
              "label": "Len = 4 (sum=10)"
            },
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "sum",
                10
              ],
              [
                "min_len",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start index i = 2: [1, 2, 4] reaches sum = 7 >= 7 at length 3! min_len = 3.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Len = 3 (sum=7)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Min Len = 3",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "sum",
                7
              ],
              [
                "min_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start index i = 4: [4, 3] reaches sum = 7 >= 7 at length 2! min_len = 2!",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "green"
              },
              {
                "name": "R",
                "index": 5,
                "color": "green"
              }
            ],
            "window": {
              "start": 4,
              "end": 5,
              "label": "Optimal [4, 3] (len=2)"
            },
            "highlights": [
              4,
              5
            ],
            "best": {
              "label": "Optimal [4, 3] (len=2)",
              "indices": [
                4,
                5
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "sum",
                7
              ],
              [
                "min_len",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return min_len = 2. Brute force requires checking all subarrays in O(n²) time.",
            "best": {
              "label": "Result: 2",
              "indices": [
                4,
                5
              ]
            },
            "vars": [
              [
                "result",
                2
              ],
              [
                "time",
                "O(n²)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · expand-repair-record template",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "left = 0, min_len = infinity, sum = 0",
          "for right = 0 to n - 1:",
          "  sum += arr[right]              // 1. Expand right",
          "  while sum >= target:           // 2. Repair / Shrink left",
          "    min_len = min(min_len, right - left + 1) // 3. Record",
          "    sum -= arr[left]",
          "    left++",
          "return min_len"
        ],
        "starterCode": {
          "javascript": "function minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, minLen = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      minLen = Math.min(minLen, right - left + 1);\n      sum -= nums[left++];\n    }\n  }\n  return minLen === Infinity ? 0 : minLen;\n}",
          "python": "def minSubArrayLen(target: int, nums: list[int]) -> int:\n    left, curr_sum, min_len = 0, 0, float('inf')\n    for right, val in enumerate(nums):\n        curr_sum += val\n        while curr_sum >= target:\n            min_len = min(min_len, right - left + 1)\n            curr_sum -= nums[left]\n            left += 1\n    return 0 if min_len == float('inf') else min_len"
        },
        "solutionCode": {
          "javascript": "function minSubArrayLen(target, nums) {\n  let left = 0, sum = 0, minLen = Infinity;\n  for (let right = 0; right < nums.length; right++) {\n    sum += nums[right];\n    while (sum >= target) {\n      minLen = Math.min(minLen, right - left + 1);\n      sum -= nums[left++];\n    }\n  }\n  return minLen === Infinity ? 0 : minLen;\n}",
          "python": "def minSubArrayLen(target: int, nums: list[int]) -> int:\n    left, curr_sum, min_len = 0, 0, float('inf')\n    for right, val in enumerate(nums):\n        curr_sum += val\n        while curr_sum >= target:\n            min_len = min(min_len, right - left + 1)\n            curr_sum -= nums[left]\n            left += 1\n    return 0 if min_len == float('inf') else min_len"
        },
        "testCases": [
          {
            "input": [
              7,
              [
                2,
                3,
                1,
                2,
                4,
                3
              ]
            ],
            "expected": 2,
            "description": "[4, 3] sum=7 len=2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [2, 3, 1, 2, 4, 3], target = 7. Expand R to explore, shrink L to minimize length.",
            "vars": [
              [
                "target",
                7
              ],
              [
                "min_len",
                "∞"
              ],
              [
                "sum",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right R=0..3: window [2, 3, 1, 2] has sum = 8 >= 7 (Target reached!).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "Sum = 8 >= 7"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                3
              ],
              [
                "sum",
                8
              ],
              [
                "len",
                4
              ],
              [
                "min_len",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Shrink left: subtract nums[0] (2) -> window [3, 1, 2] sum = 6 < 7. L moves to 1.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Sum = 6 < 7"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                3
              ],
              [
                "sum",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right R=4 (val 4): window [3, 1, 2, 4] has sum = 10 >= 7.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 4,
              "label": "Sum = 10 >= 7"
            },
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "sum",
                10
              ],
              [
                "len",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Shrink left: subtract nums[1] (3) -> window [1, 2, 4] sum = 7 >= 7! Record min_len = min(4, 3) = 3.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Sum = 7 (len=3)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "L",
                2
              ],
              [
                "R",
                4
              ],
              [
                "sum",
                7
              ],
              [
                "min_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right R=5 (val 3): window [2, 4, 3] sum = 9 >= 7.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Sum = 9 >= 7"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "sum",
                9
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Shrink left: subtract nums[3] (2) -> window [4, 3] sum = 7 >= 7! Record new shortest min_len = min(3, 2) = 2!",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "green"
              },
              {
                "name": "R",
                "index": 5,
                "color": "green"
              }
            ],
            "window": {
              "start": 4,
              "end": 5,
              "label": "Optimal [4, 3] len=2"
            },
            "highlights": [
              4,
              5
            ],
            "best": {
              "label": "Min Subarray [4, 3] (len=2)",
              "indices": [
                4,
                5
              ]
            },
            "vars": [
              [
                "L",
                4
              ],
              [
                "R",
                5
              ],
              [
                "sum",
                7
              ],
              [
                "min_len",
                2
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Return min_len = 2. Each element added once by R and removed at most once by L -> O(n) total time!",
            "best": {
              "label": "Result: 2",
              "indices": [
                4,
                5
              ]
            },
            "vars": [
              [
                "result",
                2
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
    "id": "longest-substring-no-repeat",
    "patternId": "sliding-window",
    "title": "Longest Substring Without Repeats",
    "subtitle": "Variable-size sliding window over a string",
    "kind": "problem",
    "leetcode": {
      "id": 3,
      "slug": "longest-substring-without-repeating-characters",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg",
      "Facebook",
      "Apple"
    ],
    "statement": "Given a string s, find the length of the longest substring without repeating characters.",
    "visualType": "array",
    "initialInput": [
      "a",
      "b",
      "c",
      "a",
      "b",
      "c",
      "b",
      "b"
    ],
    "approaches": [
      {
        "label": "Brute force · all substrings uniqueness check",
        "complexity": {
          "time": "O(n³)",
          "space": "O(min(n, m))"
        },
        "pseudocode": [
          "max_len = 0",
          "for i = 0 to n - 1:",
          "  for j = i to n - 1:",
          "    if hasUniqueChars(s[i..j]):",
          "      max_len = max(max_len, j - i + 1)",
          "return max_len"
        ],
        "starterCode": {
          "javascript": "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}",
          "python": "def lengthOfLongestSubstring(s: str) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function lengthOfLongestSubstring(s) {\n  let maxLen = 0;\n  for (let i = 0; i < s.length; i++) {\n    const seen = new Set();\n    for (let j = i; j < s.length; j++) {\n      if (seen.has(s[j])) break;\n      seen.add(s[j]);\n      maxLen = Math.max(maxLen, j - i + 1);\n    }\n  }\n  return maxLen;\n}",
          "python": "def lengthOfLongestSubstring(s: str) -> int:\n    max_len = 0\n    for i in range(len(s)):\n        seen = set()\n        for j in range(i, len(s)):\n            if s[j] in seen:\n                break\n            seen.add(s[j])\n            max_len = max(max_len, j - i + 1)\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              "abcabcbb"
            ],
            "expected": 3,
            "description": "abc with length 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"abcabcbb\". Brute force generates all O(n²) substrings and checks each for duplicates in O(n) time.",
            "vars": [
              [
                "max_len",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start i=0: \"abc\" is unique (len 3). At j=3 (\"a\"), duplicate \"a\" found. Longest unique from i=0 is 3.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Unique \"abc\" (len 3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start i=1: \"bca\" is unique (len 3). At j=4 (\"b\"), duplicate \"b\" found. max_len remains 3.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Unique \"bca\" (len 3)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start i=2: \"cab\" is unique (len 3). At j=5 (\"c\"), duplicate \"c\" found. max_len remains 3.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Unique \"cab\" (len 3)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Remaining starts i=3..7 yield lengths <= 3 (\"abc\", \"cb\", \"b\").",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 6
            },
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return max_len = 3. Brute force takes O(n³) time.",
            "best": {
              "label": "Result: 3",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "result",
                3
              ],
              [
                "time",
                "O(n³)"
              ],
              [
                "space",
                "O(min(n, m))"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · variable sliding window + hash set",
        "complexity": {
          "time": "O(n)",
          "space": "O(min(n, m))"
        },
        "pseudocode": [
          "char_set = empty set",
          "left = 0, max_len = 0",
          "for right = 0 to n - 1:",
          "  while s[right] in char_set:",
          "    char_set.remove(s[left])",
          "    left++",
          "  char_set.add(s[right])",
          "  max_len = max(max_len, right - left + 1)",
          "return max_len"
        ],
        "starterCode": {
          "javascript": "function lengthOfLongestSubstring(s) {\n  const charSet = new Set();\n  let left = 0, maxLen = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (charSet.has(s[right])) {\n      charSet.delete(s[left]);\n      left++;\n    }\n    charSet.add(s[right]);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
          "python": "def lengthOfLongestSubstring(s: str) -> int:\n    char_set = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len"
        },
        "solutionCode": {
          "javascript": "function lengthOfLongestSubstring(s) {\n  const charSet = new Set();\n  let left = 0, maxLen = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (charSet.has(s[right])) {\n      charSet.delete(s[left]);\n      left++;\n    }\n    charSet.add(s[right]);\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
          "python": "def lengthOfLongestSubstring(s: str) -> int:\n    char_set = set()\n    left = 0\n    max_len = 0\n    for right in range(len(s)):\n        while s[right] in char_set:\n            char_set.remove(s[left])\n            left += 1\n        char_set.add(s[right])\n        max_len = max(max_len, right - left + 1)\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              "abcabcbb"
            ],
            "expected": 3,
            "description": "abc with length 3"
          },
          {
            "input": [
              "bbbbb"
            ],
            "expected": 1,
            "description": "All b, length 1"
          },
          {
            "input": [
              "pwwkew"
            ],
            "expected": 3,
            "description": "wke with length 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"abcabcbb\". Find the length of the longest substring with unique characters.",
            "vars": [
              [
                "left",
                0
              ],
              [
                "max_len",
                0
              ],
              [
                "char_set",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right R=0 (\"a\"): add \"a\". Window [\"a\"]. max_len = 1.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 0,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 0
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "max_len",
                1
              ],
              [
                "char_set",
                "{a}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right R=1 (\"b\"): add \"b\". Window [\"a\", \"b\"]. max_len = 2.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 1
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "max_len",
                2
              ],
              [
                "char_set",
                "{a, b}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right R=2 (\"c\"): add \"c\". Window [\"a\", \"b\", \"c\"]. max_len = 3.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Valid \"abc\" (len 3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Length = 3 (\"abc\")",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "max_len",
                3
              ],
              [
                "char_set",
                "{a, b, c}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Right R=3 (\"a\"): duplicate \"a\" detected! Shrink left: remove s[0] (\"a\"), L moves to 1.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Valid \"bca\" (len 3)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                3
              ],
              [
                "char_set",
                "{b, c, a}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Right R=4 (\"b\"): duplicate \"b\"! Shrink left: remove s[1] (\"b\"), L moves to 2.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Valid \"cab\" (len 3)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "L",
                2
              ],
              [
                "R",
                4
              ],
              [
                "char_set",
                "{c, a, b}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Right R=5 (\"c\"): duplicate \"c\"! Shrink left: remove s[2] (\"c\"), L moves to 3.",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Valid \"abc\" (len 3)"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "L",
                3
              ],
              [
                "R",
                5
              ],
              [
                "char_set",
                "{a, b, c}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Right R=6 (\"b\"): duplicate \"b\"! Shrink left past \"a\" and \"b\" -> window [\"c\", \"b\"] (len 2).",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 6
            },
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "L",
                5
              ],
              [
                "R",
                6
              ],
              [
                "char_set",
                "{c, b}"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Traversal finished. Longest unique substring length = 3. Solved in O(n) time & O(min(n, m)) space!",
            "window": {
              "start": 0,
              "end": 2,
              "label": "Optimal \"abc\" (len 3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Optimal Result: 3",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "result",
                3
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(min(n, m))"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "longest-repeating-character-replacement",
    "patternId": "sliding-window",
    "title": "Longest Repeating Character Replacement",
    "subtitle": "Variable window · invariant len – maxFreq ≤ k",
    "kind": "problem",
    "leetcode": {
      "id": 424,
      "slug": "longest-repeating-character-replacement",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Uber"
    ],
    "statement": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get.",
    "visualType": "array",
    "initialInput": [
      "A",
      "A",
      "B",
      "A",
      "B",
      "B",
      "A"
    ],
    "approaches": [
      {
        "label": "Brute force · check all substrings against 26 letters",
        "complexity": {
          "time": "O(26 · n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "max_len = 0",
          "for char in \"A\"..\"Z\":",
          "  for i = 0 to n - 1:",
          "    flips = 0",
          "    for j = i to n - 1:",
          "      if s[j] != char: flips++",
          "      if flips > k: break",
          "      max_len = max(max_len, j - i + 1)",
          "return max_len"
        ],
        "starterCode": {
          "javascript": "function characterReplacement(s, k) {\n  // Write your solution here\n  \n}",
          "python": "def characterReplacement(s: str, k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function characterReplacement(s, k) {\n  let maxLen = 0;\n  for (let c = 65; c <= 90; c++) {\n    const char = String.fromCharCode(c);\n    for (let i = 0; i < s.length; i++) {\n      let flips = 0;\n      for (let j = i; j < s.length; j++) {\n        if (s[j] !== char) flips++;\n        if (flips > k) break;\n        maxLen = Math.max(maxLen, j - i + 1);\n      }\n    }\n  }\n  return maxLen;\n}",
          "python": "def characterReplacement(s: str, k: int) -> int:\n    max_len = 0\n    for c in range(65, 91):\n        char = chr(c)\n        for i in range(len(s)):\n            flips = 0\n            for j in range(i, len(s)):\n                if s[j] != char:\n                    flips += 1\n                if flips > k:\n                    break\n                max_len = max(max_len, j - i + 1)\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              "ABAB",
              2
            ],
            "expected": 4,
            "description": "Flip two -> AAAA (4)"
          },
          {
            "input": [
              "AABABBA",
              1
            ],
            "expected": 4,
            "description": "Flip one -> AAAA (4)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"AABABBA\", k = 1. Brute force tests every substring against all 26 possible target characters.",
            "vars": [
              [
                "k",
                1
              ],
              [
                "max_len",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Test target \"A\": Window \"AAB\" (len 3) has count(A)=2. Replacements = 3 - 2 = 1 <= 1 (flip B->A). Valid len 3.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Flip B -> AAA (len 3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "target",
                "A"
              ],
              [
                "flips",
                1
              ],
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Test target \"A\": Window \"AABA\" (len 4) has count(A)=3. Replacements = 4 - 3 = 1 <= 1. Valid len 4!",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "Flip B -> AAAA (len 4)"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "Max Len = 4 (\"AABA\")",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "target",
                "A"
              ],
              [
                "flips",
                1
              ],
              [
                "max_len",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Test target \"B\": Window \"ABBB\" (indices 2..5) has count(B)=3. Replacements = 4 - 3 = 1 <= 1. Valid len 4.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 5,
              "label": "Flip A -> BBBB (len 4)"
            },
            "highlights": [
              2,
              3,
              4,
              5
            ],
            "vars": [
              [
                "target",
                "B"
              ],
              [
                "flips",
                1
              ],
              [
                "max_len",
                4
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return max_len = 4. Brute force evaluates all pairs in O(26 · n²) time.",
            "best": {
              "label": "Result: 4",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "result",
                4
              ],
              [
                "time",
                "O(26 · n²)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · sliding window + max frequency",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "count = array of 26 zeros",
          "left = 0, max_freq = 0, max_len = 0",
          "for right = 0 to n - 1:",
          "  count[s[right]]++",
          "  max_freq = max(max_freq, count[s[right]])",
          "  while (right - left + 1) - max_freq > k:",
          "    count[s[left]]--",
          "    left++",
          "  max_len = max(max_len, right - left + 1)",
          "return max_len"
        ],
        "starterCode": {
          "javascript": "function characterReplacement(s, k) {\n  // Write your solution here\n  \n}",
          "python": "def characterReplacement(s: str, k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function characterReplacement(s, k) {\n  const count = new Array(26).fill(0);\n  let left = 0, maxFreq = 0, maxLen = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s.charCodeAt(right) - 65;\n    count[c]++;\n    maxFreq = Math.max(maxFreq, count[c]);\n    while ((right - left + 1) - maxFreq > k) {\n      count[s.charCodeAt(left) - 65]--;\n      left++;\n    }\n    maxLen = Math.max(maxLen, right - left + 1);\n  }\n  return maxLen;\n}",
          "python": "def characterReplacement(s: str, k: int) -> int:\n    count = {}\n    left = 0\n    max_freq = 0\n    max_len = 0\n    for right, c in enumerate(s):\n        count[c] = count.get(c, 0) + 1\n        max_freq = max(max_freq, count[c])\n        while (right - left + 1) - max_freq > k:\n            count[s[left]] -= 1\n            left += 1\n        max_len = max(max_len, right - left + 1)\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              "ABAB",
              2
            ],
            "expected": 4,
            "description": "Flip two -> AAAA (4)"
          },
          {
            "input": [
              "AABABBA",
              1
            ],
            "expected": 4,
            "description": "Flip one -> AAAA (4)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"AABABBA\", k = 1. Substring valid if: (window_length - max_frequency) <= k.",
            "vars": [
              [
                "k",
                1
              ],
              [
                "max_freq",
                0
              ],
              [
                "max_len",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "R=0 (\"A\"): count[A]=1. max_freq=1. Window \"A\" (len 1). Replacements: 1 - 1 = 0 <= 1. Valid! max_len = 1.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 0,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 0
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "window",
                "\"A\""
              ],
              [
                "len",
                1
              ],
              [
                "replacements",
                0
              ],
              [
                "max_len",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "R=1 (\"A\"): count[A]=2. max_freq=2. Window \"AA\" (len 2). Replacements: 2 - 2 = 0 <= 1. Valid! max_len = 2.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 1
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "window",
                "\"AA\""
              ],
              [
                "len",
                2
              ],
              [
                "max_len",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "R=2 (\"B\"): count[B]=1. max_freq=2. Window \"AAB\" (len 3). Replacements: 3 - 2 = 1 <= 1 (flip B->A). Valid! max_len = 3.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "AAB (1 flip -> AAA)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Max Len = 3",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "window",
                "\"AAB\""
              ],
              [
                "len",
                3
              ],
              [
                "replacements",
                1
              ],
              [
                "max_len",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "R=3 (\"A\"): count[A]=3. max_freq=3. Window \"AABA\" (len 4). Replacements: 4 - 3 = 1 <= 1. Valid! max_len = 4.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "AABA (1 flip -> AAAA)"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "Max Len = 4 (\"AABA\")",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "window",
                "\"AABA\""
              ],
              [
                "len",
                4
              ],
              [
                "max_len",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "R=4 (\"B\"): count[B]=2. Window \"AABAB\" (len 5). Replacements: 5 - 3 = 2 > 1 (INVALID). Shrink left: count[A]--, L moves to 1.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 4,
              "label": "ABAB (len 4)"
            },
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                4
              ],
              [
                "len",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "R=5 (\"B\"): count[B]=3. max_freq=3. Window \"ABBB\" (len 4). Replacements: 4 - 3 = 1 <= 1 (flip A->B). Valid!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 5,
              "label": "ABBB (flip A -> BBBB)"
            },
            "highlights": [
              2,
              3,
              4,
              5
            ],
            "vars": [
              [
                "L",
                2
              ],
              [
                "R",
                5
              ],
              [
                "len",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Scan complete. Longest valid repeating character substring after k=1 replacement is length 4 (\"AABA\" or \"BBBA\").",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 3,
              "label": "Optimal Window [0..3]"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "Optimal Result: 4",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "result",
                4
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "space",
                "O(1) (26 chars)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "minimum-window-substring",
    "patternId": "sliding-window",
    "title": "Minimum Window Substring",
    "subtitle": "Smallest window of s covering all of t",
    "kind": "problem",
    "leetcode": {
      "id": 76,
      "slug": "minimum-window-substring",
      "difficulty": "Hard"
    },
    "companies": [
      "Facebook",
      "Amazon",
      "Google",
      "Microsoft",
      "LinkedIn",
      "Uber"
    ],
    "statement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return \"\".",
    "visualType": "array",
    "initialInput": [
      "A",
      "D",
      "O",
      "B",
      "E",
      "C",
      "O",
      "D",
      "E",
      "B",
      "A",
      "N",
      "C"
    ],
    "approaches": [
      {
        "label": "Brute force · check all substrings for target inclusion",
        "complexity": {
          "time": "O(n² · m)",
          "space": "O(m)"
        },
        "pseudocode": [
          "min_len = infinity, res = \"\"",
          "for i = 0 to len(s) - 1:",
          "  for j = i to len(s) - 1:",
          "    sub = s[i..j]",
          "    if containsAllChars(sub, t) and len(sub) < min_len:",
          "      min_len = len(sub); res = sub",
          "return res"
        ],
        "starterCode": {
          "javascript": "function minWindow(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function minWindow(s, t) {\n  let minLen = Infinity, res = '';\n  const isMatch = (sub) => {\n    const count = {};\n    for (const c of t) count[c] = (count[c] || 0) + 1;\n    for (const c of sub) if (count[c]) count[c]--;\n    return Object.values(count).every(v => v <= 0);\n  };\n  for (let i = 0; i < s.length; i++) {\n    for (let j = i; j < s.length; j++) {\n      const sub = s.substring(i, j + 1);\n      if (isMatch(sub) && sub.length < minLen) {\n        minLen = sub.length;\n        res = sub;\n      }\n    }\n  }\n  return res;\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    from collections import Counter\n    t_count = Counter(t)\n    min_len = float('inf')\n    res = \"\"\n    for i in range(len(s)):\n        for j in range(i, len(s)):\n            sub = s[i:j+1]\n            sub_count = Counter(sub)\n            if all(sub_count[c] >= t_count[c] for c in t_count):\n                if len(sub) < min_len:\n                    min_len = len(sub)\n                    res = sub\n    return res"
        },
        "testCases": [
          {
            "input": [
              "ADOBECODEBANC",
              "ABC"
            ],
            "expected": "BANC",
            "description": "Smallest window is BANC"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"ADOBECODEBANC\", target = \"ABC\". Brute force tests all O(n²) substrings to check if all characters in target are covered.",
            "vars": [
              [
                "target",
                "\"ABC\""
              ],
              [
                "min_len",
                "∞"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect substring s[0..5] = \"ADOBEC\": contains \"A\", \"B\", and \"C\"! Valid window of length 6.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 5,
              "label": "\"ADOBEC\" (len 6)"
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "vars": [
              [
                "window",
                "\"ADOBEC\""
              ],
              [
                "valid",
                true
              ],
              [
                "min_len",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect substring s[5..10] = \"CODEBA\": contains \"C\", \"B\", and \"A\"! Valid window of length 6.",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 10,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 10,
              "label": "\"CODEBA\" (len 6)"
            },
            "highlights": [
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "vars": [
              [
                "window",
                "\"CODEBA\""
              ],
              [
                "valid",
                true
              ],
              [
                "min_len",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect substring s[9..12] = \"BANC\": contains \"B\", \"A\", \"N\", \"C\"! Contains all chars {A, B, C} with shortest length = 4!",
            "pointers": [
              {
                "name": "L",
                "index": 9,
                "color": "green"
              },
              {
                "name": "R",
                "index": 12,
                "color": "green"
              }
            ],
            "window": {
              "start": 9,
              "end": 12,
              "label": "Optimal \"BANC\" (len 4)"
            },
            "highlights": [
              9,
              10,
              11,
              12
            ],
            "best": {
              "label": "Min Window: \"BANC\"",
              "indices": [
                9,
                10,
                11,
                12
              ]
            },
            "vars": [
              [
                "window",
                "\"BANC\""
              ],
              [
                "valid",
                true
              ],
              [
                "min_len",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return shortest valid window \"BANC\". Brute force takes O(n² · m) time.",
            "best": {
              "label": "Result: \"BANC\"",
              "indices": [
                9,
                10,
                11,
                12
              ]
            },
            "vars": [
              [
                "result",
                "\"BANC\""
              ],
              [
                "time",
                "O(n² · m)"
              ],
              [
                "space",
                "O(m)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · two pointers + frequency match",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(m)"
        },
        "pseudocode": [
          "if t is empty: return \"\"",
          "target_map = count of chars in t",
          "window_map = empty map, have = 0, need = len(target_map)",
          "res = [-1, -1], min_len = infinity, left = 0",
          "for right = 0 to len(s) - 1:",
          "  c = s[right]; window_map[c]++",
          "  if c in target_map and window_map[c] == target_map[c]: have++",
          "  while have == need:",
          "    if (right - left + 1) < min_len:",
          "      res = [left, right]; min_len = right - left + 1",
          "    window_map[s[left]]--",
          "    if s[left] in target_map and window_map[s[left]] < target_map[s[left]]: have--",
          "    left++",
          "return s[res[0]..res[1]] if min_len != infinity else \"\""
        ],
        "starterCode": {
          "javascript": "function minWindow(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function minWindow(s, t) {\n  if (!t.length || !s.length) return '';\n  const target = new Map();\n  for (const c of t) target.set(c, (target.get(c) || 0) + 1);\n  const window = new Map();\n  let have = 0, need = target.size;\n  let res = [-1, -1], minLen = Infinity, left = 0;\n  for (let right = 0; right < s.length; right++) {\n    const c = s[right];\n    window.set(c, (window.get(c) || 0) + 1);\n    if (target.has(c) && window.get(c) === target.get(c)) have++;\n    while (have === need) {\n      if (right - left + 1 < minLen) {\n        res = [left, right];\n        minLen = right - left + 1;\n      }\n      const lChar = s[left];\n      window.set(lChar, window.get(lChar) - 1);\n      if (target.has(lChar) && window.get(lChar) < target.get(lChar)) have--;\n      left++;\n    }\n  }\n  return minLen === Infinity ? '' : s.substring(res[0], res[1] + 1);\n}",
          "python": "def minWindow(s: str, t: str) -> str:\n    if not t or not s: return \"\"\n    from collections import Counter\n    target = Counter(t)\n    window = {}\n    have, need = 0, len(target)\n    res, min_len = [-1, -1], float('inf')\n    left = 0\n    for right, c in enumerate(s):\n        window[c] = window.get(c, 0) + 1\n        if c in target and window[c] == target[c]:\n            have += 1\n        while have == need:\n            if (right - left + 1) < min_len:\n                res = [left, right]\n                min_len = right - left + 1\n            window[s[left]] -= 1\n            if s[left] in target and window[s[left]] < target[s[left]]:\n                have -= 1\n            left += 1\n    return \"\" if min_len == float('inf') else s[res[0]:res[1] + 1]"
        },
        "testCases": [
          {
            "input": [
              "ADOBECODEBANC",
              "ABC"
            ],
            "expected": "BANC",
            "description": "Smallest window is BANC"
          },
          {
            "input": [
              "a",
              "a"
            ],
            "expected": "a",
            "description": "Single character match"
          },
          {
            "input": [
              "a",
              "aa"
            ],
            "expected": "",
            "description": "Not enough characters"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"ADOBECODEBANC\", target t = \"ABC\". Goal: find shortest window in s containing all chars {A:1, B:1, C:1}.",
            "vars": [
              [
                "target_t",
                "\"ABC\""
              ],
              [
                "needed",
                "{A:1, B:1, C:1}"
              ],
              [
                "have/need",
                "0 / 3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right to R=5 (\"C\"): window \"ADOBEC\" contains \"A\", \"B\", and \"C\"! have = 3/3 (MATCH!). Window len = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 5,
              "label": "\"ADOBEC\" (len 6)"
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "best": {
              "label": "Candidate: \"ADOBEC\" (len 6)",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5
              ]
            },
            "vars": [
              [
                "have",
                "3 / 3"
              ],
              [
                "min_len",
                6
              ],
              [
                "res",
                "\"ADOBEC\""
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Shrink left: remove s[0] (\"A\") -> have drops to 2/3. L moves to 1.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 5
            },
            "highlights": [
              1,
              2,
              3,
              4,
              5
            ],
            "vars": [
              [
                "have",
                "2 / 3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right to R=10 (\"A\"): window \"DOBECODEBA\" contains A, B, C! have = 3/3.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 10,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 10
            },
            "highlights": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "vars": [
              [
                "have",
                "3 / 3"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Shrink left past D, O -> L reaches 5 (\"C\"). Window \"CODEBA\" (len 6).",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 10,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 10,
              "label": "\"CODEBA\" (len 6)"
            },
            "highlights": [
              5,
              6,
              7,
              8,
              9,
              10
            ],
            "vars": [
              [
                "min_len",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Expand right to R=12 (\"C\"): window \"ODEBANC\" contains A, B, C! have = 3/3.",
            "pointers": [
              {
                "name": "L",
                "index": 6,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 12,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 6,
              "end": 12
            },
            "highlights": [
              6,
              7,
              8,
              9,
              10,
              11,
              12
            ],
            "vars": [
              [
                "have",
                "3 / 3"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Shrink left past O, D, E -> L reaches 9 (\"B\"). Window \"BANC\" (len 4)! Contains A, B, C! New minimum len = 4!",
            "pointers": [
              {
                "name": "L",
                "index": 9,
                "color": "green"
              },
              {
                "name": "R",
                "index": 12,
                "color": "green"
              }
            ],
            "window": {
              "start": 9,
              "end": 12,
              "label": "Optimal \"BANC\" (len 4)"
            },
            "highlights": [
              9,
              10,
              11,
              12
            ],
            "best": {
              "label": "Min Window: \"BANC\" (len 4)",
              "indices": [
                9,
                10,
                11,
                12
              ]
            },
            "vars": [
              [
                "min_len",
                4
              ],
              [
                "best_str",
                "\"BANC\""
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Traversal finished. Return minimum window substring \"BANC\". Solved in linear O(n + m) time!",
            "pointers": [
              {
                "name": "L",
                "index": 9,
                "color": "green"
              },
              {
                "name": "R",
                "index": 12,
                "color": "green"
              }
            ],
            "window": {
              "start": 9,
              "end": 12,
              "label": "Result: \"BANC\""
            },
            "highlights": [
              9,
              10,
              11,
              12
            ],
            "best": {
              "label": "Optimal Window: \"BANC\"",
              "indices": [
                9,
                10,
                11,
                12
              ]
            },
            "vars": [
              [
                "result",
                "\"BANC\""
              ],
              [
                "time",
                "O(n + m)"
              ],
              [
                "space",
                "O(m)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "permutation-in-string",
    "patternId": "sliding-window",
    "title": "Permutation in String",
    "subtitle": "Fixed-size window + frequency match",
    "kind": "problem",
    "leetcode": {
      "id": 567,
      "slug": "permutation-in-string",
      "difficulty": "Medium"
    },
    "companies": [
      "Microsoft",
      "Amazon",
      "Google",
      "Apple",
      "Yandex"
    ],
    "statement": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is the substring of s2.",
    "visualType": "array",
    "initialInput": [
      "e",
      "i",
      "d",
      "b",
      "a",
      "o",
      "o",
      "o"
    ],
    "approaches": [
      {
        "label": "Brute force · sort and compare each window",
        "complexity": {
          "time": "O(n · k log k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "s1_sorted = sort(s1)",
          "for i = 0 to len(s2) - len(s1):",
          "  window = s2[i .. i + len(s1) - 1]",
          "  if sort(window) == s1_sorted: return true",
          "return false"
        ],
        "starterCode": {
          "javascript": "function checkInclusion(s1, s2) {\n  // Write your solution here\n  \n}",
          "python": "def checkInclusion(s1: str, s2: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function checkInclusion(s1, s2) {\n  const sortedS1 = s1.split('').sort().join('');\n  const k = s1.length;\n  for (let i = 0; i <= s2.length - k; i++) {\n    const win = s2.substring(i, i + k).split('').sort().join('');\n    if (win === sortedS1) return true;\n  }\n  return false;\n}",
          "python": "def checkInclusion(s1: str, s2: str) -> bool:\n    s1_sorted = sorted(s1)\n    k = len(s1)\n    for i in range(len(s2) - k + 1):\n        if sorted(s2[i:i+k]) == s1_sorted:\n            return True\n    return False"
        },
        "testCases": [
          {
            "input": [
              "ab",
              "eidbaooo"
            ],
            "expected": true,
            "description": "Contains \"ba\""
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s1 = \"ab\", s2 = \"eidbaooo\". Brute force sorts every 2-character window in s2 and compares against sorted s1 (\"ab\").",
            "vars": [
              [
                "s1",
                "\"ab\""
              ],
              [
                "k",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 0 [e, i]: sorted(\"ei\") = \"ei\" != \"ab\" -> false.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 1,
              "label": "\"ei\" != \"ab\""
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "window",
                "\"ei\""
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 1 [i, d]: sorted(\"id\") = \"di\" != \"ab\" -> false.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 2,
              "label": "\"id\" != \"ab\""
            },
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "window",
                "\"id\""
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 2 [d, b]: sorted(\"db\") = \"bd\" != \"ab\" -> false.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 3,
              "label": "\"db\" != \"ab\""
            },
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "window",
                "\"db\""
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 3 [b, a]: sorted(\"ba\") = \"ab\" == \"ab\"! Permutation found!",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "green"
              },
              {
                "name": "R",
                "index": 4,
                "color": "green"
              }
            ],
            "window": {
              "start": 3,
              "end": 4,
              "label": "MATCH \"ba\" == \"ab\"!"
            },
            "highlights": [
              3,
              4
            ],
            "best": {
              "label": "Match Found: true",
              "indices": [
                3,
                4
              ]
            },
            "vars": [
              [
                "window",
                "\"ba\""
              ],
              [
                "match",
                true
              ],
              [
                "result",
                true
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return true. Brute force takes O(n · k log k) time.",
            "best": {
              "label": "Result: true",
              "indices": [
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                true
              ],
              [
                "time",
                "O(n · k log k)"
              ],
              [
                "space",
                "O(k)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · fixed window + 26-char frequency match",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "if len(s1) > len(s2): return false",
          "s1_count = count array of 26 zeros",
          "s2_count = count array of 26 zeros",
          "for i = 0 to len(s1) - 1:",
          "  s1_count[s1[i]]++; s2_count[s2[i]]++",
          "if s1_count == s2_count: return true",
          "for i = len(s1) to len(s2) - 1:",
          "  s2_count[s2[i]]++",
          "  s2_count[s2[i - len(s1)]]--",
          "  if s1_count == s2_count: return true",
          "return false"
        ],
        "starterCode": {
          "javascript": "function checkInclusion(s1, s2) {\n  // Write your solution here\n  \n}",
          "python": "def checkInclusion(s1: str, s2: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function checkInclusion(s1, s2) {\n  if (s1.length > s2.length) return false;\n  const c1 = new Array(26).fill(0), c2 = new Array(26).fill(0);\n  for (let i = 0; i < s1.length; i++) {\n    c1[s1.charCodeAt(i) - 97]++;\n    c2[s2.charCodeAt(i) - 97]++;\n  }\n  const matches = () => c1.every((val, idx) => val === c2[idx]);\n  if (matches()) return true;\n  for (let i = s1.length; i < s2.length; i++) {\n    c2[s2.charCodeAt(i) - 97]++;\n    c2[s2.charCodeAt(i - s1.length) - 97]--;\n    if (matches()) return true;\n  }\n  return false;\n}",
          "python": "def checkInclusion(s1: str, s2: str) -> bool:\n    if len(s1) > len(s2): return False\n    c1 = [0] * 26\n    c2 = [0] * 26\n    for i in range(len(s1)):\n        c1[ord(s1[i]) - ord('a')] += 1\n        c2[ord(s2[i]) - ord('a')] += 1\n    if c1 == c2: return True\n    for i in range(len(s1), len(s2)):\n        c2[ord(s2[i]) - ord('a')] += 1\n        c2[ord(s2[i - len(s1)]) - ord('a')] -= 1\n        if c1 == c2: return True\n    return False"
        },
        "testCases": [
          {
            "input": [
              "ab",
              "eidbaooo"
            ],
            "expected": true,
            "description": "Contains \"ba\""
          },
          {
            "input": [
              "ab",
              "eidboaoo"
            ],
            "expected": false,
            "description": "No permutation found"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s1 = \"ab\", s2 = \"eidbaooo\". Check if s2 contains any permutation of s1 (fixed window size = len(s1) = 2).",
            "vars": [
              [
                "s1",
                "\"ab\""
              ],
              [
                "window_size",
                2
              ],
              [
                "target_counts",
                "{a:1, b:1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect window 0 [e, i]: counts {e:1, i:1} != {a:1, b:1} -> matches = false.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 1,
              "label": "Window \"ei\""
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "window",
                "\"ei\""
              ],
              [
                "matches",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to [i, d]: counts {i:1, d:1} != {a:1, b:1} -> matches = false.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 2,
              "label": "Window \"id\""
            },
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "window",
                "\"id\""
              ],
              [
                "matches",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to [d, b]: counts {d:1, b:1} != {a:1, b:1} -> matches = false.",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 3,
              "label": "Window \"db\""
            },
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "window",
                "\"db\""
              ],
              [
                "matches",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Slide window to [b, a]: counts {b:1, a:1} == {a:1, b:1}! Exact permutation match found at index 3..4!",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "green"
              },
              {
                "name": "R",
                "index": 4,
                "color": "green"
              }
            ],
            "window": {
              "start": 3,
              "end": 4,
              "label": "Permutation \"ba\"!"
            },
            "highlights": [
              3,
              4
            ],
            "best": {
              "label": "Permutation Match \"ba\" (true)",
              "indices": [
                3,
                4
              ]
            },
            "vars": [
              [
                "window",
                "\"ba\""
              ],
              [
                "matches",
                true
              ],
              [
                "result",
                true
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return true immediately. Solved in O(len(s2)) time with O(1) space (26 characters)!",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "green"
              },
              {
                "name": "R",
                "index": 4,
                "color": "green"
              }
            ],
            "window": {
              "start": 3,
              "end": 4,
              "label": "Valid Permutation"
            },
            "highlights": [
              3,
              4
            ],
            "best": {
              "label": "Result: true",
              "indices": [
                3,
                4
              ]
            },
            "vars": [
              [
                "result",
                true
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
    "id": "sliding-window-maximum",
    "patternId": "sliding-window",
    "title": "Sliding Window Maximum",
    "subtitle": "Monotonic deque · the front is always the window max",
    "kind": "problem",
    "leetcode": {
      "id": 239,
      "slug": "sliding-window-maximum",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Meta",
      "Citadel",
      "Uber"
    ],
    "statement": "You are given an array of integers nums and a sliding window of size k moving from left to right. Return the max sliding window values at each step.",
    "visualType": "array",
    "initialInput": [
      1,
      3,
      -1,
      -3,
      5,
      3,
      6,
      7
    ],
    "approaches": [
      {
        "label": "Brute force · linear scan max of each window",
        "complexity": {
          "time": "O(n · k)",
          "space": "O(1)"
        },
        "pseudocode": [
          "output = []",
          "for i = 0 to n - k:",
          "  max_val = max(nums[i .. i + k - 1])",
          "  output.append(max_val)",
          "return output"
        ],
        "starterCode": {
          "javascript": "function maxSlidingWindow(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxSlidingWindow(nums, k) {\n  const res = [];\n  for (let i = 0; i <= nums.length - k; i++) {\n    let m = -Infinity;\n    for (let j = i; j < i + k; j++) m = Math.max(m, nums[j]);\n    res.push(m);\n  }\n  return res;\n}",
          "python": "def maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    return [max(nums[i:i+k]) for i in range(len(nums) - k + 1)]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                -1,
                -3,
                5,
                3,
                6,
                7
              ],
              3
            ],
            "expected": [
              3,
              3,
              5,
              5,
              6,
              7
            ],
            "description": "Window of 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3. Brute force scans each window linearly to find maximum.",
            "vars": [
              [
                "k",
                3
              ],
              [
                "output",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 0 [1, 3, -1]: scan elements -> max is 3. output = [3].",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window 0 (Max=3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "max",
                3
              ],
              [
                "output",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 1 [3, -1, -3]: scan elements -> max is 3. output = [3, 3].",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window 1 (Max=3)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "max",
                3
              ],
              [
                "output",
                "[3, 3]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 2 [-1, -3, 5]: scan elements -> max is 5. output = [3, 3, 5].",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Window 2 (Max=5)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Max = 5",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "max",
                5
              ],
              [
                "output",
                "[3, 3, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Window 3 [-3, 5, 3]: max is 5. Window 4 [5, 3, 6]: max is 6. Window 5 [3, 6, 7]: max is 7.",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 7,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 7,
              "label": "Window 5 (Max=7)"
            },
            "highlights": [
              5,
              6,
              7
            ],
            "best": {
              "label": "Max = 7",
              "indices": [
                7
              ]
            },
            "vars": [
              [
                "output",
                "[3, 3, 5, 5, 6, 7]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return [3, 3, 5, 5, 6, 7]. Brute force takes O(n · k) time.",
            "best": {
              "label": "Result: [3, 3, 5, 5, 6, 7]",
              "indices": [
                1,
                4,
                6,
                7
              ]
            },
            "vars": [
              [
                "result",
                "[3, 3, 5, 5, 6, 7]"
              ],
              [
                "time",
                "O(n · k)"
              ],
              [
                "space",
                "O(1)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · monotonic decreasing deque",
        "complexity": {
          "time": "O(n)",
          "space": "O(k)"
        },
        "pseudocode": [
          "deque = empty double-ended queue  // stores indices",
          "output = []",
          "for i = 0 to n - 1:",
          "  if deque not empty and deque.front <= i - k:",
          "    deque.pop_front()            // 1. Remove out of window",
          "  while deque not empty and nums[deque.back] < nums[i]:",
          "    deque.pop_back()             // 2. Maintain decreasing order",
          "  deque.push_back(i)",
          "  if i >= k - 1:",
          "    output.append(nums[deque.front]) // 3. Front is window max",
          "return output"
        ],
        "starterCode": {
          "javascript": "function maxSlidingWindow(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxSlidingWindow(nums, k) {\n  const q = []; // stores indices\n  const res = [];\n  for (let i = 0; i < nums.length; i++) {\n    if (q.length && q[0] <= i - k) q.shift();\n    while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop();\n    q.push(i);\n    if (i >= k - 1) res.push(nums[q[0]]);\n  }\n  return res;\n}",
          "python": "def maxSlidingWindow(nums: list[int], k: int) -> list[int]:\n    from collections import deque\n    q = deque()\n    res = []\n    for i, n in enumerate(nums):\n        if q and q[0] <= i - k:\n            q.popleft()\n        while q and nums[q[-1]] < n:\n            q.pop()\n        q.append(i)\n        if i >= k - 1:\n            res.append(nums[q[0]])\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                -1,
                -3,
                5,
                3,
                6,
                7
              ],
              3
            ],
            "expected": [
              3,
              3,
              5,
              5,
              6,
              7
            ],
            "description": "Window of 3"
          },
          {
            "input": [
              [
                1
              ],
              1
            ],
            "expected": [
              1
            ],
            "description": "Single element"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3. Use monotonic decreasing deque: deque front ALWAYS stores the maximum index of current window!",
            "vars": [
              [
                "k",
                3
              ],
              [
                "deque",
                "[]"
              ],
              [
                "output",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 0 (val 1): push index 0 -> deque = [0 (val 1)].",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent",
                "position": "top"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "deque",
                "[0(1)]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 1 (val 3): 3 > 1 -> pop index 0! push index 1 -> deque = [1 (val 3)].",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent",
                "position": "top"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "deque",
                "[1(3)]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 2 (val -1): push index 2 -> deque = [1 (val 3), 2 (val -1)]. Window 0 complete -> max is nums[deque[0]] = 3! output = [3].",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 0,
              "end": 2,
              "label": "Window 0 (Max=3)"
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Max = 3",
              "indices": [
                1
              ]
            },
            "vars": [
              [
                "deque",
                "[1(3), 2(-1)]"
              ],
              [
                "output",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 3 (val -3): window [3, -1, -3]. deque = [1(3), 2(-1), 3(-3)]. Deque front is index 1 (val 3)! output = [3, 3].",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 1,
              "end": 3,
              "label": "Window 1 (Max=3)"
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "deque",
                "[1(3), 2(-1), 3(-3)]"
              ],
              [
                "output",
                "[3, 3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 4 (val 5): index 1 out of window -> remove. 5 > -3 and 5 > -1 -> pop all! push 4 -> deque = [4(5)]. output = [3, 3, 5].",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 2,
              "end": 4,
              "label": "Window 2 (Max=5)"
            },
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Max = 5",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "deque",
                "[4(5)]"
              ],
              [
                "output",
                "[3, 3, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 5 (val 3): window [-3, 5, 3]. push 5 -> deque = [4(5), 5(3)]. Front is 5! output = [3, 3, 5, 5].",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 3,
              "end": 5,
              "label": "Window 3 (Max=5)"
            },
            "highlights": [
              3,
              4,
              5
            ],
            "vars": [
              [
                "deque",
                "[4(5), 5(3)]"
              ],
              [
                "output",
                "[3, 3, 5, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 6 (val 6): 6 > 3, 6 > 5 -> pop all! push 6 -> deque = [6(6)]. output = [3, 3, 5, 5, 6].",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 4,
              "end": 6,
              "label": "Window 4 (Max=6)"
            },
            "highlights": [
              4,
              5,
              6
            ],
            "best": {
              "label": "Max = 6",
              "indices": [
                6
              ]
            },
            "vars": [
              [
                "deque",
                "[6(6)]"
              ],
              [
                "output",
                "[3, 3, 5, 5, 6]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 7 (val 7): 7 > 6 -> pop 6! push 7 -> deque = [7(7)]. output = [3, 3, 5, 5, 6, 7].",
            "pointers": [
              {
                "name": "L",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 7,
                "color": "accent2"
              }
            ],
            "window": {
              "start": 5,
              "end": 7,
              "label": "Window 5 (Max=7)"
            },
            "highlights": [
              5,
              6,
              7
            ],
            "best": {
              "label": "Max = 7",
              "indices": [
                7
              ]
            },
            "vars": [
              [
                "deque",
                "[7(7)]"
              ],
              [
                "output",
                "[3, 3, 5, 5, 6, 7]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Traversal finished. Return [3, 3, 5, 5, 6, 7]. Each element pushed and popped at most once -> O(n) linear time!",
            "best": {
              "label": "Result: [3, 3, 5, 5, 6, 7]",
              "indices": [
                1,
                4,
                6,
                7
              ]
            },
            "vars": [
              [
                "result",
                "[3, 3, 5, 5, 6, 7]"
              ],
              [
                "time",
                "O(n)"
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
  }
];
