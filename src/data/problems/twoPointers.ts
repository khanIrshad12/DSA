import { Problem } from '../../types';

export const twoPointersProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "two-pointers",
    "title": "Introduction to Two Pointers",
    "subtitle": "Opposite-ends and same-direction two pointers intuition",
    "kind": "intro",
    "statement": "The Two Pointers technique uses two integer indices to traverse an iterable simultaneously. Commonly used on sorted sequences to replace nested loops O(n²) with linear O(n) sweeps.",
    "visualType": "array",
    "initialInput": [
      1,
      3,
      4,
      6,
      8,
      9,
      11
    ],
    "approaches": [
      {
        "label": "Concept Walkthrough",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "left = 0, right = n - 1",
          "while left < right:",
          "  sum = arr[left] + arr[right]",
          "  if sum == target:",
          "    return [left, right]",
          "  elif sum < target:",
          "    left++",
          "  else:",
          "    right--"
        ],
        "starterCode": {
          "javascript": "function twoPointersDemo(arr, target) {\n  // Write your solution here\n  \n}",
          "python": "def twoPointersDemo(arr, target):\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function twoPointersDemo(arr, target) {\n  let left = 0, right = arr.length - 1;\n  while (left < right) {\n    const sum = arr[left] + arr[right];\n    if (sum === target) return [left, right];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [-1, -1];\n}",
          "python": "def twoPointersDemo(arr: list[int], target: int) -> list[int]:\n    left, right = 0, len(arr) - 1\n    while left < right:\n        cur_sum = arr[left] + arr[right]\n        if cur_sum == target:\n            return [left, right]\n        elif cur_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return [-1, -1]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                4,
                6,
                8,
                9,
                11
              ],
              10
            ],
            "expected": [
              0,
              5
            ],
            "description": "Sum 1 + 9 = 10"
          },
          {
            "input": [
              [
                1,
                3,
                4,
                6,
                8,
                9,
                11
              ],
              15
            ],
            "expected": [
              2,
              6
            ],
            "description": "Sum 4 + 11 = 15"
          },
          {
            "input": [
              [
                1,
                2,
                3
              ],
              99
            ],
            "expected": [
              -1,
              -1
            ],
            "description": "No pair exists"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize left = 0 (val 1) and right = 6 (val 11). Target is 10.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                6
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop condition: left < right (0 < 6 is true).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
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
              6
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[0] + arr[6] = 1 + 11 = 12.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
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
              6
            ],
            "vars": [
              [
                "sum",
                12
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "sum (12) > target (10). Branch to else condition.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "sum",
                12
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decrement right pointer: right becomes 5 (val 9).",
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
            "dimmed": [
              6
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop condition: left < right (0 < 5 is true).",
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
              5
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[0] + arr[5] = 1 + 9 = 10.",
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
              5
            ],
            "vars": [
              [
                "sum",
                10
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum (10) == target (10) evaluated to TRUE!",
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
              5
            ],
            "best": {
              "label": "Pair: [0, 5]",
              "indices": [
                0,
                5
              ]
            },
            "vars": [
              [
                "sum",
                10
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return indices [0, 5]. Solution found in linear O(n) time!",
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
              5
            ],
            "best": {
              "label": "Optimal O(n)",
              "indices": [
                0,
                5
              ]
            },
            "vars": [
              [
                "result",
                "[0, 5]"
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
    "id": "two-sum-ii",
    "patternId": "two-pointers",
    "title": "Two Sum II",
    "subtitle": "Sorted input · find indices that add up to target",
    "kind": "problem",
    "leetcode": {
      "id": 167,
      "slug": "two-sum-ii-input-array-is-sorted",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Google"
    ],
    "statement": "Given a 1-indexed array of integers sorted in non-decreasing order, return the 1-based indices of the two numbers that add up to a given target. Exactly one solution exists, and you may not use the same element twice.",
    "visualType": "array",
    "initialInput": [
      2,
      5,
      8,
      11,
      15,
      19
    ],
    "approaches": [
      {
        "label": "Brute force",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given sorted arr, target",
          "for i = 0 to n - 2:",
          "  for j = i + 1 to n - 1:",
          "    sum = arr[i] + arr[j]",
          "    if sum == target:",
          "      return [i + 1, j + 1]"
        ],
        "starterCode": {
          "javascript": "function twoSum(numbers, target) {\n  // Write your solution here\n  \n}",
          "python": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function twoSum(numbers, target) {\n  for (let i = 0; i < numbers.length - 1; i++) {\n    for (let j = i + 1; j < numbers.length; j++) {\n      if (numbers[i] + numbers[j] === target) {\n        return [i + 1, j + 1];\n      }\n    }\n  }\n  return [];\n}",
          "python": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    for i in range(len(numbers) - 1):\n        for j in range(i + 1, len(numbers)):\n            if numbers[i] + numbers[j] == target:\n                return [i + 1, j + 1]\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                5,
                8,
                11,
                15,
                19
              ],
              19
            ],
            "expected": [
              3,
              4
            ],
            "description": "Target 19"
          },
          {
            "input": [
              [
                2,
                7,
                11,
                15
              ],
              9
            ],
            "expected": [
              1,
              2
            ],
            "description": "Target 9 at [1, 2]"
          },
          {
            "input": [
              [
                2,
                3,
                4
              ],
              6
            ],
            "expected": [
              1,
              3
            ],
            "description": "Target 6 at [1, 3]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given sorted array [2, 5, 8, 11, 15, 19], target = 19.",
            "vars": [
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: set i = 0 (value 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "arr[i]",
                2
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 1 (value 5).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "arr[i]",
                2
              ],
              [
                "arr[j]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[0] (2) + arr[1] (5) = 7.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "sum",
                7
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (7) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "sum",
                7
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 2 (value 8).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "arr[i]",
                2
              ],
              [
                "arr[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[0] (2) + arr[2] (8) = 10.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "sum",
                10
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (10) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "sum",
                10
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 3 (value 11).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "arr[i]",
                2
              ],
              [
                "arr[j]",
                11
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[0] (2) + arr[3] (11) = 13.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "sum",
                13
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (13) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "sum",
                13
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 4 (value 15).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                4
              ],
              [
                "arr[i]",
                2
              ],
              [
                "arr[j]",
                15
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[0] (2) + arr[4] (15) = 17.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "sum",
                17
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (17) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "sum",
                17
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 5 (value 19).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                5
              ],
              [
                "arr[i]",
                2
              ],
              [
                "arr[j]",
                19
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[0] (2) + arr[5] (19) = 21.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "vars": [
              [
                "sum",
                21
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (21) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "vars": [
              [
                "sum",
                21
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: set i = 1 (value 5).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "arr[i]",
                5
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 2 (value 8).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "arr[i]",
                5
              ],
              [
                "arr[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[1] (5) + arr[2] (8) = 13.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "sum",
                13
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (13) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "sum",
                13
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 3 (value 11).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ],
              [
                "arr[i]",
                5
              ],
              [
                "arr[j]",
                11
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[1] (5) + arr[3] (11) = 16.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "sum",
                16
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (16) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "sum",
                16
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 4 (value 15).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                4
              ],
              [
                "arr[i]",
                5
              ],
              [
                "arr[j]",
                15
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[1] (5) + arr[4] (15) = 20.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "sum",
                20
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (20) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "sum",
                20
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 5 (value 19).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                5
              ],
              [
                "arr[i]",
                5
              ],
              [
                "arr[j]",
                19
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[1] (5) + arr[5] (19) = 24.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "vars": [
              [
                "sum",
                24
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (24) == target (19) is FALSE. Continue search.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "vars": [
              [
                "sum",
                24
              ],
              [
                "target",
                19
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: set i = 2 (value 8).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "arr[i]",
                8
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inner loop: set j = 3 (value 11).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ],
              [
                "arr[i]",
                8
              ],
              [
                "arr[j]",
                11
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: arr[2] (8) + arr[3] (11) = 19.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "sum",
                19
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check condition: sum (19) == target (19) is TRUE!",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "sum",
                19
              ],
              [
                "target",
                19
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return 1-based indices [3, 4] (values 8 + 11 = 19).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "best": {
              "label": "Indices [3, 4]",
              "indices": [
                2,
                3
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ],
              [
                "1-based answer",
                "[3, 4]"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · two pointers",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "left = 0, right = n - 1",
          "while left < right:",
          "  sum = arr[left] + arr[right]",
          "  if sum == target:",
          "    return [left + 1, right + 1]",
          "  elif sum < target:",
          "    left++",
          "  else:",
          "    right--"
        ],
        "starterCode": {
          "javascript": "function twoSum(numbers, target) {\n  // Write your solution here\n  \n}",
          "python": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function twoSum(numbers, target) {\n  let left = 0, right = numbers.length - 1;\n  while (left < right) {\n    const sum = numbers[left] + numbers[right];\n    if (sum === target) return [left + 1, right + 1];\n    if (sum < target) left++;\n    else right--;\n  }\n  return [];\n}",
          "python": "def twoSum(numbers: list[int], target: int) -> list[int]:\n    left, right = 0, len(numbers) - 1\n    while left < right:\n        cur_sum = numbers[left] + numbers[right]\n        if cur_sum == target:\n            return [left, right]\n        elif cur_sum < target:\n            left += 1\n        else:\n            right -= 1\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                5,
                8,
                11,
                15,
                19
              ],
              19
            ],
            "expected": [
              3,
              4
            ],
            "description": "Target 19"
          },
          {
            "input": [
              [
                2,
                7,
                11,
                15
              ],
              9
            ],
            "expected": [
              1,
              2
            ],
            "description": "Target 9 at [1, 2]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Array is sorted non-decreasingly. Initialize left = 0 (val 2) and right = 5 (val 19).",
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
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                5
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: left < right (0 < 5 is true).",
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
              5
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[L] (2) + arr[R] (19) = 21.",
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
              5
            ],
            "vars": [
              [
                "sum",
                21
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "sum (21) > target (19). Sum is too large.",
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
              5
            ],
            "vars": [
              [
                "sum",
                21
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decrement right pointer: right is now 4 (val 15).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "dimmed": [
              5
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: left < right (0 < 4 is true).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "left",
                0
              ],
              [
                "right",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[L] (2) + arr[R] (15) = 17.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "sum",
                17
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "sum (17) < target (19). Need a larger sum.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "sum",
                17
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Advance left pointer: left is now 1 (val 5).",
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
            "dimmed": [
              0
            ],
            "vars": [
              [
                "left",
                1
              ],
              [
                "right",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: left < right (1 < 4 is true).",
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
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "left",
                1
              ],
              [
                "right",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[L] (5) + arr[R] (15) = 20.",
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
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "sum",
                20
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "sum (20) > target (19). Sum is too large.",
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
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "sum",
                20
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decrement right pointer: right is now 3 (val 11).",
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
            "dimmed": [
              4
            ],
            "vars": [
              [
                "left",
                1
              ],
              [
                "right",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: left < right (1 < 3 is true).",
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
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "left",
                1
              ],
              [
                "right",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[L] (5) + arr[R] (11) = 16.",
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
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "sum",
                16
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "sum (16) < target (19). Need a larger sum.",
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
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "sum",
                16
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Advance left pointer: left is now 2 (val 8).",
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
            "dimmed": [
              1
            ],
            "vars": [
              [
                "left",
                2
              ],
              [
                "right",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: left < right (2 < 3 is true).",
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
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "left",
                2
              ],
              [
                "right",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum = arr[L] (8) + arr[R] (11) = 19.",
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
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "sum",
                19
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check condition: sum (19) == target (19) is TRUE!",
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
            "highlights": [
              2,
              3
            ],
            "best": {
              "label": "Indices [3, 4]",
              "indices": [
                2,
                3
              ]
            },
            "vars": [
              [
                "sum",
                19
              ],
              [
                "target",
                19
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return 1-based indices [3, 4]. Found optimal solution!",
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
            "highlights": [
              2,
              3
            ],
            "best": {
              "label": "Answer: [3, 4]",
              "indices": [
                2,
                3
              ]
            },
            "vars": [
              [
                "left",
                2
              ],
              [
                "right",
                3
              ],
              [
                "answer",
                "[3, 4]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "valid-palindrome",
    "patternId": "two-pointers",
    "title": "Valid Palindrome",
    "subtitle": "Converging pointers · skip non-alphanumerics",
    "kind": "problem",
    "leetcode": {
      "id": 125,
      "slug": "valid-palindrome",
      "difficulty": "Easy"
    },
    "companies": [
      "Meta",
      "Amazon",
      "Apple",
      "Microsoft"
    ],
    "statement": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
    "visualType": "array",
    "initialInput": [
      "A",
      " ",
      "m",
      "a",
      "n",
      ",",
      " ",
      "a",
      " ",
      "p",
      "l",
      "a",
      "n",
      ",",
      " ",
      "a",
      " ",
      "c",
      "a",
      "n",
      "a",
      "l",
      ":",
      " ",
      "P",
      "a",
      "n",
      "a",
      "m",
      "a"
    ],
    "approaches": [
      {
        "label": "Brute force · clean & reverse string",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "filtered = [c.lower() for c in s if isAlphaNum(c)]",
          "reversed = copy_and_reverse(filtered)",
          "return filtered == reversed"
        ],
        "starterCode": {
          "javascript": "function isPalindrome(s) {\n  // Write your solution here\n  \n}",
          "python": "def isPalindrome(s: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isPalindrome(s) {\n  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return clean === clean.split('').reverse().join('');\n}",
          "python": "def isPalindrome(s: str) -> bool:\n    clean = ''.join(c.lower() for c in s if c.isalnum())\n    return clean == clean[::-1]"
        },
        "testCases": [
          {
            "input": [
              "A man, a plan, a canal: Panama"
            ],
            "expected": true,
            "description": "Standard palindrome"
          },
          {
            "input": [
              "race a car"
            ],
            "expected": false,
            "description": "Not a palindrome"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given string s = \"A man, a plan, a canal: Panama\". Brute force extracts alphanumerics to new buffer.",
            "customVisual": {
              "array": [
                "A",
                " ",
                "m",
                "a",
                "n",
                ",",
                " ",
                "a",
                " ",
                "p",
                "l",
                "a",
                "n",
                ",",
                " ",
                "a",
                " ",
                "c",
                "a",
                "n",
                "a",
                "l",
                ":",
                " ",
                "P",
                "a",
                "n",
                "a",
                "m",
                "a"
              ],
              "secondaryArray": {
                "label": "FILTERED",
                "array": []
              }
            },
            "vars": [
              [
                "original_len",
                30
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Filter and lowercase alphanumeric characters -> \"amanaplanacanalpanama\" (21 chars).",
            "customVisual": {
              "array": [
                "A",
                " ",
                "m",
                "a",
                "n",
                ",",
                " ",
                "a",
                " ",
                "p",
                "l",
                "a",
                "n",
                ",",
                " ",
                "a",
                " ",
                "c",
                "a",
                "n",
                "a",
                "l",
                ":",
                " ",
                "P",
                "a",
                "n",
                "a",
                "m",
                "a"
              ],
              "secondaryArray": {
                "label": "FILTERED",
                "array": [
                  "a",
                  "m",
                  "a",
                  "n",
                  "a",
                  "p",
                  "l",
                  "a",
                  "n",
                  "a",
                  "c",
                  "a",
                  "n",
                  "a",
                  "l",
                  "p",
                  "a",
                  "n",
                  "a",
                  "m",
                  "a"
                ]
              }
            },
            "highlights": [
              0,
              2,
              4,
              6,
              8,
              10,
              12,
              14,
              16,
              18,
              20,
              22,
              24,
              26,
              28
            ],
            "vars": [
              [
                "filtered",
                "amanaplanacanalpanama"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Create reversed copy of filtered array: \"amanaplanacanalpanama\".",
            "customVisual": {
              "array": [
                "a",
                "m",
                "a",
                "n",
                "a",
                "p",
                "l",
                "a",
                "n",
                "a",
                "c",
                "a",
                "n",
                "a",
                "l",
                "p",
                "a",
                "n",
                "a",
                "m",
                "a"
              ],
              "secondaryArray": {
                "label": "REVERSED",
                "array": [
                  "a",
                  "m",
                  "a",
                  "n",
                  "a",
                  "p",
                  "l",
                  "a",
                  "n",
                  "a",
                  "c",
                  "a",
                  "n",
                  "a",
                  "l",
                  "p",
                  "a",
                  "n",
                  "a",
                  "m",
                  "a"
                ]
              }
            },
            "vars": [
              [
                "reversed",
                "amanaplanacanalpanama"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare filtered with reversed: both strings are identical character by character! Return true.",
            "customVisual": {
              "array": [
                "a",
                "m",
                "a",
                "n",
                "a",
                "p",
                "l",
                "a",
                "n",
                "a",
                "c",
                "a",
                "n",
                "a",
                "l",
                "p",
                "a",
                "n",
                "a",
                "m",
                "a"
              ],
              "secondaryArray": {
                "label": "REVERSED",
                "array": [
                  "a",
                  "m",
                  "a",
                  "n",
                  "a",
                  "p",
                  "l",
                  "a",
                  "n",
                  "a",
                  "c",
                  "a",
                  "n",
                  "a",
                  "l",
                  "p",
                  "a",
                  "n",
                  "a",
                  "m",
                  "a"
                ]
              }
            },
            "best": {
              "label": "Valid Palindrome: true",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20
              ]
            },
            "vars": [
              [
                "is_palindrome",
                true
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
      },
      {
        "label": "Optimized · two pointers converging",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "left = 0, right = s.length - 1",
          "while left < right:",
          "  while left < right and !isAlphaNum(s[left]):",
          "    left++",
          "  while left < right and !isAlphaNum(s[right]):",
          "    right--",
          "  if s[left].lower() != s[right].lower():",
          "    return false",
          "  left++, right--",
          "return true"
        ],
        "starterCode": {
          "javascript": "function isPalindrome(s) {\n  // Write your solution here\n  \n}",
          "python": "def isPalindrome(s: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isPalindrome(s) {\n  let l = 0, r = s.length - 1;\n  while (l < r) {\n    while (l < r && !/[a-zA-Z0-9]/.test(s[l])) l++;\n    while (l < r && !/[a-zA-Z0-9]/.test(s[r])) r--;\n    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;\n    l++; r--;\n  }\n  return true;\n}",
          "python": "def isPalindrome(s: str) -> bool:\n    l, r = 0, len(s) - 1\n    while l < r:\n        while l < r and not s[l].isalnum(): l += 1\n        while l < r and not s[r].isalnum(): r -= 1\n        if s[l].lower() != s[r].lower(): return False\n        l += 1; r -= 1\n    return True"
        },
        "testCases": [
          {
            "input": [
              "A man, a plan, a canal: Panama"
            ],
            "expected": true,
            "description": "Standard palindrome"
          },
          {
            "input": [
              "race a car"
            ],
            "expected": false,
            "description": "Not a palindrome"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize L = 0 (\"A\") and R = 29 (\"a\"). In-place check with O(1) extra space.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 29,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                29
              ],
              [
                "s[L]",
                "A"
              ],
              [
                "s[R]",
                "a"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop check: L < R (0 < 29 is true).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 29,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              29
            ],
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                29
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare alphanumeric characters: \"A\".toLowerCase() == \"a\".toLowerCase() -> MATCH!",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 29,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              29
            ],
            "vars": [
              [
                "charL",
                "a"
              ],
              [
                "charR",
                "a"
              ],
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Advance both pointers: L++ to 1, R-- to 28 (\"m\").",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 28,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0,
              29
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                28
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "At L = 1, char is \" \" (space). Non-alphanumeric -> skip it.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 28,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "skipL",
                " "
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Increment L++ to 2 (\"m\").",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 28,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              28
            ],
            "vars": [
              [
                "L",
                2
              ],
              [
                "s[L]",
                "m"
              ],
              [
                "s[R]",
                "m"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare: s[2] (\"m\") == s[28] (\"m\") -> MATCH!",
            "pointers": [
              {
                "name": "L",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 28,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              28
            ],
            "vars": [
              [
                "charL",
                "m"
              ],
              [
                "charR",
                "m"
              ],
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Advance pointers: L++ to 3 (\"a\"), R-- to 27 (\"a\").",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 27,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              27
            ],
            "vars": [
              [
                "L",
                3
              ],
              [
                "R",
                27
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare: s[3] (\"a\") == s[27] (\"a\") -> MATCH!",
            "pointers": [
              {
                "name": "L",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 27,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              27
            ],
            "vars": [
              [
                "charL",
                "a"
              ],
              [
                "charR",
                "a"
              ],
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Advance pointers: L++ to 4 (\"n\"), R-- to 26 (\"n\").",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 26,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              26
            ],
            "vars": [
              [
                "L",
                4
              ],
              [
                "R",
                26
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare: s[4] (\"n\") == s[26] (\"n\") -> MATCH!",
            "pointers": [
              {
                "name": "L",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 26,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              26
            ],
            "vars": [
              [
                "charL",
                "n"
              ],
              [
                "charR",
                "n"
              ],
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "All valid characters mirrored perfectly across the center. Return true! O(n) time & O(1) space.",
            "pointers": [
              {
                "name": "L",
                "index": 14,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 15,
                "color": "accent2"
              }
            ],
            "best": {
              "label": "Valid Palindrome: true"
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
    "id": "three-sum",
    "patternId": "two-pointers",
    "title": "3Sum",
    "subtitle": "Find all unique triplets that sum to zero",
    "kind": "problem",
    "leetcode": {
      "id": 15,
      "slug": "3sum",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "statement": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set must not contain duplicate triplets.",
    "visualType": "array",
    "initialInput": [
      -4,
      -1,
      -1,
      0,
      1,
      2
    ],
    "approaches": [
      {
        "label": "Brute force",
        "complexity": {
          "time": "O(n³)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given arr",
          "for i = 0 to n - 3:",
          "  for j = i + 1 to n - 2:",
          "    for k = j + 1 to n - 1:",
          "      if arr[i] + arr[j] + arr[k] == 0:",
          "        record([arr[i], arr[j], arr[k]])",
          "return deduplicated results"
        ],
        "starterCode": {
          "javascript": "function threeSum(nums) {\n  // Write your solution here\n  \n}",
          "python": "def threeSum(nums: list[int]) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function threeSum(nums) {\n  const result = [];\n  const seen = new Set();\n  for (let i = 0; i < nums.length - 2; i++) {\n    for (let j = i + 1; j < nums.length - 1; j++) {\n      for (let k = j + 1; k < nums.length; k++) {\n        if (nums[i] + nums[j] + nums[k] === 0) {\n          const trip = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);\n          const key = trip.join(',');\n          if (!seen.has(key)) {\n            seen.add(key);\n            result.push(trip);\n          }\n        }\n      }\n    }\n  }\n  return result;\n}",
          "python": "def threeSum(nums: list[int]) -> list[list[int]]:\n    res = []\n    seen = set()\n    n = len(nums)\n    for i in range(n - 2):\n        for j in range(i + 1, n - 1):\n            for k in range(j + 1, n):\n                if nums[i] + nums[j] + nums[k] == 0:\n                    trip = tuple(sorted([nums[i], nums[j], nums[k]]))\n                    if trip not in seen:\n                        seen.add(trip)\n                        res.append(list(trip))\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                -1,
                0,
                1,
                2,
                -1,
                -4
              ]
            ],
            "expected": [
              [
                -1,
                -1,
                2
              ],
              [
                -1,
                0,
                1
              ]
            ],
            "description": "Standard 3Sum"
          },
          {
            "input": [
              [
                0,
                1,
                1
              ]
            ],
            "expected": [],
            "description": "No valid triplets"
          },
          {
            "input": [
              [
                0,
                0,
                0
              ]
            ],
            "expected": [
              [
                0,
                0,
                0
              ]
            ],
            "description": "All zeroes"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array [-4, -1, -1, 0, 1, 2]. Brute force tests all triplets (i, j, k).",
            "vars": [
              [
                "n",
                6
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: fix i = 0 (arr[0] = -4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "arr[i]",
                -4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 1 (arr[1] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 2 (arr[2] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              }
            ],
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
                "j",
                1
              ],
              [
                "k",
                2
              ],
              [
                "sum",
                "-4 + -1 + -1 = -6"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "-4 + -1 + 0 = -5"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-4 + -1 + 1 = -4"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-4 + -1 + 2 = -3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 2 (arr[2] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "-4 + -1 + 0 = -5"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-4 + -1 + 1 = -4"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-4 + -1 + 2 = -3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-4 + 0 + 1 = -3"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-4 + 0 + 2 = -2"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              4,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                4
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-4 + 1 + 2 = -1"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: fix i = 1 (arr[1] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "arr[i]",
                -1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 2 (arr[2] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
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
                "j",
                2
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "-1 + -1 + 0 = -2"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-1 + -1 + 1 = -1"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-1 + -1 + 2 = 0"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Triplet sum == 0 evaluated TRUE! (-1 + -1 + 2 = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "best": {
              "label": "Triplet [-1, -1, 2]",
              "indices": [
                1,
                2,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "triplet",
                "[-1, -1, 2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record triplet [-1, -1, 2] to result set.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "best": {
              "label": "Recorded [-1, -1, 2]",
              "indices": [
                1,
                2,
                5
              ]
            },
            "vars": [
              [
                "found",
                "[[-1,-1,2]]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-1 + 0 + 1 = 0"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Triplet sum == 0 evaluated TRUE! (-1 + 0 + 1 = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "best": {
              "label": "Triplet [-1, 0, 1]",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "triplet",
                "[-1, 0, 1]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record triplet [-1, 0, 1] to result set.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "best": {
              "label": "Recorded [-1, 0, 1]",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "found",
                "[[-1,-1,2],[-1,0,1]]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-1 + 0 + 2 = 1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              4,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                4
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-1 + 1 + 2 = 2"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: fix i = 2 (arr[2] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "arr[i]",
                -1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
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
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "-1 + 0 + 1 = 0"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Triplet sum == 0 evaluated TRUE! (-1 + 0 + 1 = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Triplet [-1, 0, 1]",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "triplet",
                "[-1, 0, 1]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record triplet [-1, 0, 1] to result set.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "Recorded [-1, 0, 1]",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "found",
                "[[-1,-1,2],[-1,0,1],[-1,0,1]]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              3,
              5
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-1 + 0 + 2 = 1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              4,
              5
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                4
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "-1 + 1 + 2 = 2"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Outer loop: fix i = 3 (arr[3] = 0).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "arr[i]",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Middle loop: fix j = 4 (arr[4] = 1).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check k = 5 (arr[5] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 5,
                "color": "purple"
              }
            ],
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
                "j",
                4
              ],
              [
                "k",
                5
              ],
              [
                "sum",
                "0 + 1 + 2 = 3"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Deduplicate recorded triplets and return final list: [[-1, -1, 2], [-1, 0, 1]].",
            "vars": [
              [
                "results",
                "[[-1, -1, 2], [-1, 0, 1]]"
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
      },
      {
        "label": "Optimized · sort + two pointers",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "sort(arr)",
          "for i = 0 to n - 3:",
          "  if i > 0 and arr[i] == arr[i - 1]: continue",
          "  L = i + 1, R = n - 1",
          "  while L < R:",
          "    sum = arr[i] + arr[L] + arr[R]",
          "    if sum == 0:",
          "      record([arr[i], arr[L], arr[R]])",
          "      while L < R and arr[L] == arr[L + 1]: L++",
          "      while L < R and arr[R] == arr[R - 1]: R--",
          "      L++, R--",
          "    elif sum < 0: L++",
          "    else: R--"
        ],
        "starterCode": {
          "javascript": "function threeSum(nums) {\n  // Write your solution here\n  \n}",
          "python": "def threeSum(nums: list[int]) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function threeSum(nums) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  for (let i = 0; i < nums.length - 2; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) {\n      const sum = nums[i] + nums[l] + nums[r];\n      if (sum === 0) {\n        res.push([nums[i], nums[l], nums[r]]);\n        while (l < r && nums[l] === nums[l + 1]) l++;\n        while (l < r && nums[r] === nums[r - 1]) r--;\n        l++; r--;\n      } else if (sum < 0) {\n        l++;\n      } else {\n        r--;\n      }\n    }\n  }\n  return res;\n}",
          "python": "def threeSum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    for i in range(len(nums) - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        l, r = i + 1, len(nums) - 1\n        while l < r:\n            cur = nums[i] + nums[l] + nums[r]\n            if cur == 0:\n                res.append([nums[i], nums[l], nums[r]])\n                while l < r and nums[l] == nums[l + 1]: l += 1\n                while l < r and nums[r] == nums[r - 1]: r -= 1\n                l += 1; r -= 1\n            elif cur < 0:\n                l += 1\n            else:\n                r -= 1\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                -1,
                0,
                1,
                2,
                -1,
                -4
              ]
            ],
            "expected": [
              [
                -1,
                -1,
                2
              ],
              [
                -1,
                0,
                1
              ]
            ],
            "description": "Standard 3Sum"
          },
          {
            "input": [
              [
                0,
                0,
                0
              ]
            ],
            "expected": [
              [
                0,
                0,
                0
              ]
            ],
            "description": "Zero triplet"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Step 1: Sort the array in ascending order -> [-4, -1, -1, 0, 1, 2]. Sorting takes O(n log n).",
            "vars": [
              [
                "sorted",
                "[-4, -1, -1, 0, 1, 2]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Fix first element i = 0 (arr[0] = -4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "arr[i]",
                -4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Initialize two pointers: L = 1 (val -1), R = 5 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "L",
                1
              ],
              [
                "R",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Calculate sum: (-4) + (-1) + 2 = -3 < 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              5
            ],
            "vars": [
              [
                "sum",
                -3
              ],
              [
                "target",
                0
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Sum is negative (-3 < 0) -> increment L++ to increase total sum.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "dimmed": [
              1
            ],
            "vars": [
              [
                "L",
                2
              ],
              [
                "sum",
                -3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Move to i = 1 (arr[1] = -1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "dimmed": [
              0
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "arr[i]",
                -1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Set L = 2 (val -1) and R = 5 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "L",
                2
              ],
              [
                "R",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Calculate sum: (-1) + (-1) + 2 = 0 == 0! Target match!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "best": {
              "label": "Triplet [-1, -1, 2]",
              "indices": [
                1,
                2,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "triplet",
                "[-1, -1, 2]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Record triplet [-1, -1, 2] to output.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              5
            ],
            "best": {
              "label": "Found [-1, -1, 2]",
              "indices": [
                1,
                2,
                5
              ]
            },
            "vars": [
              [
                "results",
                "[[-1, -1, 2]]"
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Advance both pointers: L++ to index 3 (0), R-- to index 4 (1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "vars": [
              [
                "L",
                3
              ],
              [
                "R",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Calculate sum: (-1) + 0 + 1 = 0 == 0! Another unique triplet found!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "best": {
              "label": "Triplet [-1, 0, 1]",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "triplet",
                "[-1, 0, 1]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Record triplet [-1, 0, 1]. All unique valid triplets collected in O(n²) time with O(1) space!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "L",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "R",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "best": {
              "label": "Optimal Results",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "final_triplets",
                "[[-1, -1, 2], [-1, 0, 1]]"
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
      }
    ]
  },
  {
    "id": "container-with-most-water",
    "patternId": "two-pointers",
    "title": "Container With Most Water",
    "subtitle": "Pick two lines that hold the most water",
    "kind": "problem",
    "leetcode": {
      "id": 11,
      "slug": "container-with-most-water",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft",
      "Apple"
    ],
    "statement": "Given heights representing vertical lines, pick two lines that together with the x-axis form a container holding the most water, and return that maximum area.",
    "visualType": "bars",
    "initialInput": [
      1,
      8,
      6,
      2,
      5,
      4,
      8,
      3,
      7
    ],
    "approaches": [
      {
        "label": "Brute force",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given heights[]",
          "max = 0",
          "for i = 0 to n - 2:",
          "  for j = i + 1 to n - 1:",
          "    area = (j - i) * min(h[i], h[j])",
          "    if area > max: max = area",
          "return max"
        ],
        "starterCode": {
          "javascript": "function maxArea(height) {\n  // Write your solution here\n  \n}",
          "python": "def maxArea(height: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxArea(height) {\n  let maxA = 0;\n  for (let i = 0; i < height.length - 1; i++) {\n    for (let j = i + 1; j < height.length; j++) {\n      const area = (j - i) * Math.min(height[i], height[j]);\n      if (area > maxA) maxA = area;\n    }\n  }\n  return maxA;\n}",
          "python": "def maxArea(height: list[int]) -> int:\n    max_a = 0\n    n = len(height)\n    for i in range(n - 1):\n        for j in range(i + 1, n):\n            area = (j - i) * min(height[i], height[j])\n            if area > max_a:\n                max_a = area\n    return max_a"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                8,
                6,
                2,
                5,
                4,
                8,
                3,
                7
              ]
            ],
            "expected": 49,
            "description": "Standard case"
          },
          {
            "input": [
              [
                1,
                1
              ]
            ],
            "expected": 1,
            "description": "Two equal lines"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "We want two lines that, with the x-axis, hold the most water. area = (j - i) * min(h[i], h[j]).",
            "vars": [
              [
                "n",
                9
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize max = 0 to track the largest container area found so far.",
            "vars": [
              [
                "max",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 0 (height 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "h[i]",
                1
              ],
              [
                "max",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 1 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (1 - 0) * min(1, 8) = 1 * 1 = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                1
              ],
              [
                "area",
                1
              ],
              [
                "max",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (1) > max (0) is TRUE! New max area = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "best": {
              "label": "New Max Area = 1",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "max",
                1
              ],
              [
                "best_walls",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 2 (height 6).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                6
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (2 - 0) * min(1, 6) = 2 * 1 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                1
              ],
              [
                "area",
                2
              ],
              [
                "max",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (2) > max (0) is TRUE! New max area = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "best": {
              "label": "New Max Area = 2",
              "indices": [
                0,
                2
              ]
            },
            "vars": [
              [
                "max",
                2
              ],
              [
                "best_walls",
                "[0, 2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 3 (height 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (3 - 0) * min(1, 2) = 3 * 1 = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                1
              ],
              [
                "area",
                3
              ],
              [
                "max",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (3) > max (0) is TRUE! New max area = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "best": {
              "label": "New Max Area = 3",
              "indices": [
                0,
                3
              ]
            },
            "vars": [
              [
                "max",
                3
              ],
              [
                "best_walls",
                "[0, 3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 4 (height 5).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                4
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (4 - 0) * min(1, 5) = 4 * 1 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "vars": [
              [
                "width",
                4
              ],
              [
                "height",
                1
              ],
              [
                "area",
                4
              ],
              [
                "max",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (4) > max (0) is TRUE! New max area = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              4
            ],
            "best": {
              "label": "New Max Area = 4",
              "indices": [
                0,
                4
              ]
            },
            "vars": [
              [
                "max",
                4
              ],
              [
                "best_walls",
                "[0, 4]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                5
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (5 - 0) * min(1, 4) = 5 * 1 = 5.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "vars": [
              [
                "width",
                5
              ],
              [
                "height",
                1
              ],
              [
                "area",
                5
              ],
              [
                "max",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (5) > max (0) is TRUE! New max area = 5.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              5
            ],
            "best": {
              "label": "New Max Area = 5",
              "indices": [
                0,
                5
              ]
            },
            "vars": [
              [
                "max",
                5
              ],
              [
                "best_walls",
                "[0, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              6
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 0) * min(1, 8) = 6 * 1 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              6
            ],
            "vars": [
              [
                "width",
                6
              ],
              [
                "height",
                1
              ],
              [
                "area",
                6
              ],
              [
                "max",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (6) > max (0) is TRUE! New max area = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              6
            ],
            "best": {
              "label": "New Max Area = 6",
              "indices": [
                0,
                6
              ]
            },
            "vars": [
              [
                "max",
                6
              ],
              [
                "best_walls",
                "[0, 6]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              7
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 0) * min(1, 3) = 7 * 1 = 7.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              7
            ],
            "vars": [
              [
                "width",
                7
              ],
              [
                "height",
                1
              ],
              [
                "area",
                7
              ],
              [
                "max",
                6
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (7) > max (0) is TRUE! New max area = 7.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              7
            ],
            "best": {
              "label": "New Max Area = 7",
              "indices": [
                0,
                7
              ]
            },
            "vars": [
              [
                "max",
                7
              ],
              [
                "best_walls",
                "[0, 7]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              8
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                1
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 0) * min(1, 7) = 8 * 1 = 8.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              8
            ],
            "vars": [
              [
                "width",
                8
              ],
              [
                "height",
                1
              ],
              [
                "area",
                8
              ],
              [
                "max",
                7
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (8) > max (0) is TRUE! New max area = 8.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              8
            ],
            "best": {
              "label": "New Max Area = 8",
              "indices": [
                0,
                8
              ]
            },
            "vars": [
              [
                "max",
                8
              ],
              [
                "best_walls",
                "[0, 8]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 1 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "h[i]",
                8
              ],
              [
                "max",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 2 (height 6).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                6
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (2 - 1) * min(8, 6) = 1 * 6 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                6
              ],
              [
                "area",
                6
              ],
              [
                "max",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 3 (height 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (3 - 1) * min(8, 2) = 2 * 2 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                2
              ],
              [
                "area",
                4
              ],
              [
                "max",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 4 (height 5).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                4
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (4 - 1) * min(8, 5) = 3 * 5 = 15.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                5
              ],
              [
                "area",
                15
              ],
              [
                "max",
                8
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (15) > max (0) is TRUE! New max area = 15.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              4
            ],
            "best": {
              "label": "New Max Area = 15",
              "indices": [
                1,
                4
              ]
            },
            "vars": [
              [
                "max",
                15
              ],
              [
                "best_walls",
                "[1, 4]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                5
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (5 - 1) * min(8, 4) = 4 * 4 = 16.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "vars": [
              [
                "width",
                4
              ],
              [
                "height",
                4
              ],
              [
                "area",
                16
              ],
              [
                "max",
                15
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (16) > max (0) is TRUE! New max area = 16.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              5
            ],
            "best": {
              "label": "New Max Area = 16",
              "indices": [
                1,
                5
              ]
            },
            "vars": [
              [
                "max",
                16
              ],
              [
                "best_walls",
                "[1, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              6
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 1) * min(8, 8) = 5 * 8 = 40.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              6
            ],
            "vars": [
              [
                "width",
                5
              ],
              [
                "height",
                8
              ],
              [
                "area",
                40
              ],
              [
                "max",
                16
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (40) > max (0) is TRUE! New max area = 40.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              6
            ],
            "best": {
              "label": "New Max Area = 40",
              "indices": [
                1,
                6
              ]
            },
            "vars": [
              [
                "max",
                40
              ],
              [
                "best_walls",
                "[1, 6]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              7
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 1) * min(8, 3) = 6 * 3 = 18.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              7
            ],
            "vars": [
              [
                "width",
                6
              ],
              [
                "height",
                3
              ],
              [
                "area",
                18
              ],
              [
                "max",
                40
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              8
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 1) * min(8, 7) = 7 * 7 = 49.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              8
            ],
            "vars": [
              [
                "width",
                7
              ],
              [
                "height",
                7
              ],
              [
                "area",
                49
              ],
              [
                "max",
                40
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "area (49) > max (0) is TRUE! New max area = 49.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              8
            ],
            "best": {
              "label": "New Max Area = 49",
              "indices": [
                1,
                8
              ]
            },
            "vars": [
              [
                "max",
                49
              ],
              [
                "best_walls",
                "[1, 8]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 2 (height 6).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "h[i]",
                6
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 3 (height 2).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (3 - 2) * min(6, 2) = 1 * 2 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                2
              ],
              [
                "area",
                2
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 4 (height 5).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                4
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (4 - 2) * min(6, 5) = 2 * 5 = 10.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                5
              ],
              [
                "area",
                10
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              5
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                5
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (5 - 2) * min(6, 4) = 3 * 4 = 12.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              5
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                4
              ],
              [
                "area",
                12
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              6
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 2) * min(6, 8) = 4 * 6 = 24.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              6
            ],
            "vars": [
              [
                "width",
                4
              ],
              [
                "height",
                6
              ],
              [
                "area",
                24
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              7
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 2) * min(6, 3) = 5 * 3 = 15.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              7
            ],
            "vars": [
              [
                "width",
                5
              ],
              [
                "height",
                3
              ],
              [
                "area",
                15
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              8
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                6
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 2) * min(6, 7) = 6 * 6 = 36.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              8
            ],
            "vars": [
              [
                "width",
                6
              ],
              [
                "height",
                6
              ],
              [
                "area",
                36
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 3 (height 2).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "h[i]",
                2
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 4 (height 5).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                4
              ],
              [
                "h[i]",
                2
              ],
              [
                "h[j]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (4 - 3) * min(2, 5) = 1 * 2 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                2
              ],
              [
                "area",
                2
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              5
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                5
              ],
              [
                "h[i]",
                2
              ],
              [
                "h[j]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (5 - 3) * min(2, 4) = 2 * 2 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              5
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                2
              ],
              [
                "area",
                4
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              6
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                2
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 3) * min(2, 8) = 3 * 2 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              6
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                2
              ],
              [
                "area",
                6
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              7
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                2
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 3) * min(2, 3) = 4 * 2 = 8.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              7
            ],
            "vars": [
              [
                "width",
                4
              ],
              [
                "height",
                2
              ],
              [
                "area",
                8
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              8
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                2
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 3) * min(2, 7) = 5 * 2 = 10.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              8
            ],
            "vars": [
              [
                "width",
                5
              ],
              [
                "height",
                2
              ],
              [
                "area",
                10
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 4 (height 5).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "h[i]",
                5
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "j",
                5
              ],
              [
                "h[i]",
                5
              ],
              [
                "h[j]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (5 - 4) * min(5, 4) = 1 * 4 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                4
              ],
              [
                "area",
                4
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              6
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                5
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 4) * min(5, 8) = 2 * 5 = 10.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              6
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                5
              ],
              [
                "area",
                10
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              7
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                5
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 4) * min(5, 3) = 3 * 3 = 9.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              7
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                3
              ],
              [
                "area",
                9
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              8
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                5
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 4) * min(5, 7) = 4 * 5 = 20.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              8
            ],
            "vars": [
              [
                "width",
                4
              ],
              [
                "height",
                5
              ],
              [
                "area",
                20
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 5 (height 4).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "highlights": [
              5
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "h[i]",
                4
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "j",
                6
              ],
              [
                "h[i]",
                4
              ],
              [
                "h[j]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (6 - 5) * min(4, 8) = 1 * 4 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                4
              ],
              [
                "area",
                4
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              7
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                4
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 5) * min(4, 3) = 2 * 3 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              7
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                3
              ],
              [
                "area",
                6
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              8
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                4
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 5) * min(4, 7) = 3 * 4 = 12.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              8
            ],
            "vars": [
              [
                "width",
                3
              ],
              [
                "height",
                4
              ],
              [
                "area",
                12
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 6 (height 8).",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "highlights": [
              6
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "h[i]",
                8
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              6,
              7
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "j",
                7
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (7 - 6) * min(8, 3) = 1 * 3 = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              6,
              7
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                3
              ],
              [
                "area",
                3
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              6,
              8
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                8
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 6) * min(8, 7) = 2 * 7 = 14.",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              6,
              8
            ],
            "vars": [
              [
                "width",
                2
              ],
              [
                "height",
                7
              ],
              [
                "area",
                14
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix left wall i = 7 (height 3).",
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              }
            ],
            "highlights": [
              7
            ],
            "vars": [
              [
                "i",
                7
              ],
              [
                "h[i]",
                3
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Inner loop: check right wall j = 8 (height 7).",
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              7,
              8
            ],
            "vars": [
              [
                "i",
                7
              ],
              [
                "j",
                8
              ],
              [
                "h[i]",
                3
              ],
              [
                "h[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Calculate area = (8 - 7) * min(3, 7) = 1 * 3 = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              7,
              8
            ],
            "vars": [
              [
                "width",
                1
              ],
              [
                "height",
                3
              ],
              [
                "area",
                3
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All pairs checked. Return max = 49 (walls [1, 8] with heights 8 and 7). Brute force takes O(n²) time.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              8
            ],
            "best": {
              "label": "Optimal Max Area = 49",
              "indices": [
                1,
                8
              ]
            },
            "vars": [
              [
                "max",
                49
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
        "label": "Optimized · two pointers",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "L = 0, R = n - 1, max = 0",
          "while L < R:",
          "  area = (R - L) * min(h[L], h[R])",
          "  if area > max: max = area",
          "  if h[L] < h[R]: L++",
          "  else: R--",
          "return max"
        ],
        "starterCode": {
          "javascript": "function maxArea(height) {\n  // Write your solution here\n  \n}",
          "python": "def maxArea(height: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function maxArea(height) {\n  let l = 0, r = height.length - 1, maxA = 0;\n  while (l < r) {\n    const h = Math.min(height[l], height[r]);\n    maxA = Math.max(maxA, h * (r - l));\n    if (height[l] < height[r]) l++;\n    else r--;\n  }\n  return maxA;\n}",
          "python": "def maxArea(height: list[int]) -> int:\n    l, r, max_a = 0, len(height) - 1, 0\n    while l < r:\n        h = min(height[l], height[r])\n        max_a = max(max_a, h * (r - l))\n        if height[l] < height[r]: l += 1\n        else: r -= 1\n    return max_a"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                8,
                6,
                2,
                5,
                4,
                8,
                3,
                7
              ]
            ],
            "expected": 49,
            "description": "Standard case"
          },
          {
            "input": [
              [
                1,
                1
              ]
            ],
            "expected": 1,
            "description": "Two equal lines"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize L = 0 (height 1) and R = 8 (height 7). max = 0.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                8
              ],
              [
                "max",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop check: L < R (0 < 8 is true).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              8
            ],
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute area = (8 - 0) * min(1, 7) = 8 * 1 = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              8
            ],
            "vars": [
              [
                "width",
                8
              ],
              [
                "height",
                1
              ],
              [
                "area",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "area (8) > max (0) -> update max = 8.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "best": {
              "label": "Area = 8",
              "indices": [
                0,
                8
              ]
            },
            "vars": [
              [
                "max",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "h[L] (1) < h[R] (7) is TRUE -> Left wall 1 is bottleneck. Advance L++ to 1 (height 8).",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute area = (8 - 1) * min(8, 7) = 7 * 7 = 49.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              8
            ],
            "vars": [
              [
                "width",
                7
              ],
              [
                "height",
                7
              ],
              [
                "area",
                49
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "area (49) > max (8) -> New maximum! max = 49.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "best": {
              "label": "Max Area = 49",
              "indices": [
                1,
                8
              ]
            },
            "vars": [
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "h[L] (8) >= h[R] (7) -> Right wall 7 is bottleneck. Decrement R-- to 7 (height 3).",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 7,
                "color": "accent2"
              }
            ],
            "dimmed": [
              8
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute area = (7 - 1) * min(8, 3) = 6 * 3 = 18 < 49.",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              7
            ],
            "vars": [
              [
                "area",
                18
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "h[7] (3) is bottleneck -> decrement R-- to 6 (height 8).",
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
            "dimmed": [
              7
            ],
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute area = (6 - 1) * min(8, 8) = 5 * 8 = 40 < 49.",
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
              1,
              6
            ],
            "vars": [
              [
                "area",
                40
              ],
              [
                "max",
                49
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Pointers meet. Return max = 49. Completed in single linear O(n) sweep with O(1) space!",
            "pointers": [
              {
                "name": "L",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 8,
                "color": "accent2"
              }
            ],
            "best": {
              "label": "Max Water: 49",
              "indices": [
                1,
                8
              ]
            },
            "vars": [
              [
                "max",
                49
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
    "id": "valid-triangle-number",
    "patternId": "two-pointers",
    "title": "Valid Triangle Number",
    "subtitle": "Count triples that form a triangle",
    "kind": "problem",
    "leetcode": {
      "id": 611,
      "slug": "valid-triangle-number",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Bloomberg"
    ],
    "statement": "Given an array of non-negative integers representing side lengths, count how many triplets can form a valid triangle.",
    "visualType": "array",
    "initialInput": [
      2,
      3,
      4,
      4,
      5
    ],
    "approaches": [
      {
        "label": "Brute force",
        "complexity": {
          "time": "O(n³)",
          "space": "O(1)"
        },
        "pseudocode": [
          "sort arr",
          "count = 0",
          "for i = 0 to n - 3:",
          "  for j = i + 1 to n - 2:",
          "    for k = j + 1 to n - 1:",
          "      if arr[i] + arr[j] > arr[k]:",
          "        count++",
          "return count"
        ],
        "starterCode": {
          "javascript": "function triangleNumber(nums) {\n  // Write your solution here\n  \n}",
          "python": "def triangleNumber(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function triangleNumber(nums) {\n  nums.sort((a, b) => a - b);\n  let count = 0;\n  for (let i = 0; i < nums.length - 2; i++) {\n    for (let j = i + 1; j < nums.length - 1; j++) {\n      for (let k = j + 1; k < nums.length; k++) {\n        if (nums[i] + nums[j] > nums[k]) {\n          count++;\n        }\n      }\n    }\n  }\n  return count;\n}",
          "python": "def triangleNumber(nums: list[int]) -> int:\n    nums.sort()\n    count = 0\n    n = len(nums)\n    for i in range(n - 2):\n        for j in range(i + 1, n - 1):\n            for k in range(j + 1, n):\n                if nums[i] + nums[j] > nums[k]:\n                    count += 1\n    return count"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                3,
                4,
                4,
                5
              ]
            ],
            "expected": 9,
            "description": "5 sides"
          },
          {
            "input": [
              [
                2,
                2,
                3,
                4
              ]
            ],
            "expected": 3,
            "description": "4 sides"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Count triplets (i, j, k) with i < j < k that form a valid triangle.",
            "vars": [
              [
                "n",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize count = 0 to track the number of valid triangles.",
            "vars": [
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix i = 0 (nums[0] = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "nums[i]",
                2
              ],
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 1 (nums[1] = 3).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 2 (nums[2] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              }
            ],
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
                "j",
                1
              ],
              [
                "k",
                2
              ],
              [
                "sum",
                "2 + 3 = 5"
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[1] (3) = 5 > nums[2] (4) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "sum",
                5
              ],
              [
                "nums[k]",
                4
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [2, 3, 4]! Increment count++ to 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "+1 Triangle [2, 3, 4]",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "count",
                1
              ],
              [
                "triplet",
                "[2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "2 + 3 = 5"
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[1] (3) = 5 > nums[3] (4) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "sum",
                5
              ],
              [
                "nums[k]",
                4
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [2, 3, 4]! Increment count++ to 2.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "best": {
              "label": "+1 Triangle [2, 3, 4]",
              "indices": [
                0,
                1,
                3
              ]
            },
            "vars": [
              [
                "count",
                2
              ],
              [
                "triplet",
                "[2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "2 + 3 = 5"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[1] (3) = 5 > nums[4] (5) is FALSE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              4
            ],
            "vars": [
              [
                "sum",
                5
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                false
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 2 (nums[2] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "2 + 4 = 6"
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[2] (4) = 6 > nums[3] (4) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              3
            ],
            "vars": [
              [
                "sum",
                6
              ],
              [
                "nums[k]",
                4
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [2, 4, 4]! Increment count++ to 3.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              3
            ],
            "best": {
              "label": "+1 Triangle [2, 4, 4]",
              "indices": [
                0,
                2,
                3
              ]
            },
            "vars": [
              [
                "count",
                3
              ],
              [
                "triplet",
                "[2, 4, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "2 + 4 = 6"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[2] (4) = 6 > nums[4] (5) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "vars": [
              [
                "sum",
                6
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [2, 4, 5]! Increment count++ to 4.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "best": {
              "label": "+1 Triangle [2, 4, 5]",
              "indices": [
                0,
                2,
                4
              ]
            },
            "vars": [
              [
                "count",
                4
              ],
              [
                "triplet",
                "[2, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "2 + 4 = 6"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[0] (2) + nums[3] (4) = 6 > nums[4] (5) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "vars": [
              [
                "sum",
                6
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [2, 4, 5]! Increment count++ to 5.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "best": {
              "label": "+1 Triangle [2, 4, 5]",
              "indices": [
                0,
                3,
                4
              ]
            },
            "vars": [
              [
                "count",
                5
              ],
              [
                "triplet",
                "[2, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix i = 1 (nums[1] = 3).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "nums[i]",
                3
              ],
              [
                "count",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 2 (nums[2] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
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
                "j",
                2
              ],
              [
                "k",
                3
              ],
              [
                "sum",
                "3 + 4 = 7"
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[1] (3) + nums[2] (4) = 7 > nums[3] (4) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "sum",
                7
              ],
              [
                "nums[k]",
                4
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [3, 4, 4]! Increment count++ to 6.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              3
            ],
            "best": {
              "label": "+1 Triangle [3, 4, 4]",
              "indices": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "count",
                6
              ],
              [
                "triplet",
                "[3, 4, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "3 + 4 = 7"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[1] (3) + nums[2] (4) = 7 > nums[4] (5) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              4
            ],
            "vars": [
              [
                "sum",
                7
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [3, 4, 5]! Increment count++ to 7.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              2,
              4
            ],
            "best": {
              "label": "+1 Triangle [3, 4, 5]",
              "indices": [
                1,
                2,
                4
              ]
            },
            "vars": [
              [
                "count",
                7
              ],
              [
                "triplet",
                "[3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "3 + 4 = 7"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[1] (3) + nums[3] (4) = 7 > nums[4] (5) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "vars": [
              [
                "sum",
                7
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [3, 4, 5]! Increment count++ to 8.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              1,
              3,
              4
            ],
            "best": {
              "label": "+1 Triangle [3, 4, 5]",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "count",
                8
              ],
              [
                "triplet",
                "[3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix i = 2 (nums[2] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "nums[i]",
                4
              ],
              [
                "count",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Middle loop: fix j = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Inner loop: check side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
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
                "j",
                3
              ],
              [
                "k",
                4
              ],
              [
                "sum",
                "4 + 4 = 8"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check triangle condition: nums[2] (4) + nums[3] (4) = 8 > nums[4] (5) is TRUE.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              3,
              4
            ],
            "vars": [
              [
                "sum",
                8
              ],
              [
                "nums[k]",
                5
              ],
              [
                "is_triangle",
                true
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Valid triangle found: [4, 4, 5]! Increment count++ to 9.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              2,
              3,
              4
            ],
            "best": {
              "label": "+1 Triangle [4, 4, 5]",
              "indices": [
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "count",
                9
              ],
              [
                "triplet",
                "[4, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "All triplets examined. Return total valid triangles count = 9. Brute force runs in O(n³) time.",
            "best": {
              "label": "Total Triangles: 9",
              "indices": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "final_count",
                9
              ],
              [
                "time",
                "O(n³)"
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
        "label": "Optimized · fix k + two pointers",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "sort arr",
          "count = 0",
          "for k = n - 1 down to 2:",
          "  i = 0, j = k - 1",
          "  while i < j:",
          "    if arr[i] + arr[j] > arr[k]:",
          "      count += (j - i)",
          "      j--",
          "    else:",
          "      i++",
          "return count"
        ],
        "starterCode": {
          "javascript": "function triangleNumber(nums) {\n  // Write your solution here\n  \n}",
          "python": "def triangleNumber(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function triangleNumber(nums) {\n  nums.sort((a, b) => a - b);\n  let count = 0;\n  for (let k = nums.length - 1; k >= 2; k--) {\n    let i = 0, j = k - 1;\n    while (i < j) {\n      if (nums[i] + nums[j] > nums[k]) {\n        count += (j - i);\n        j--;\n      } else {\n        i++;\n      }\n    }\n  }\n  return count;\n}",
          "python": "def triangleNumber(nums: list[int]) -> int:\n    nums.sort()\n    count = 0\n    for k in range(len(nums) - 1, 1, -1):\n        i, j = 0, k - 1\n        while i < j:\n            if nums[i] + nums[j] > nums[k]:\n                count += (j - i)\n                j -= 1\n            else:\n                i += 1\n    return count"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                3,
                4,
                4,
                5
              ]
            ],
            "expected": 9,
            "description": "5 sides"
          },
          {
            "input": [
              [
                2,
                2,
                3,
                4
              ]
            ],
            "expected": 3,
            "description": "4 sides"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Sort array nums in ascending order: [2, 3, 4, 4, 5].",
            "vars": [
              [
                "nums",
                "[2, 3, 4, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize count = 0.",
            "vars": [
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix largest side k = 4 (nums[4] = 5).",
            "pointers": [
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              4
            ],
            "vars": [
              [
                "k",
                4
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Initialize i = 0 (val 2) and j = 3 (val 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                3
              ],
              [
                "k",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[3] (4) = 6 > nums[4] (5) is TRUE!",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              3,
              4
            ],
            "vars": [
              [
                "sum",
                "2 + 4 = 6"
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Because array is sorted, all elements from i=0 to j-1 paired with j form valid triangles! Add (j - i) = (3 - 0) = 3 to count.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "best": {
              "label": "+3 Triangles",
              "indices": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "added",
                3
              ],
              [
                "count",
                3
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement j-- to 2 (val 4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "vars": [
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[2] (4) = 6 > 5 is TRUE!",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              4
            ],
            "vars": [
              [
                "sum",
                6
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Add (j - i) = (2 - 0) = 2 to count. count becomes 3 + 2 = 5.",
            "best": {
              "label": "+2 Triangles (count = 5)",
              "indices": [
                0,
                1,
                2,
                4
              ]
            },
            "vars": [
              [
                "added",
                2
              ],
              [
                "count",
                5
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement j-- to 1 (val 3).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              4
            ],
            "vars": [
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[1] (3) = 5 > 5 is FALSE (not strictly greater).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "vars": [
              [
                "sum",
                5
              ],
              [
                "nums[k]",
                5
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Sum too small -> increment i++ to 1 (val 3). Now i == j, inner loop finishes.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              }
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix next largest side k = 3 (nums[3] = 4).",
            "pointers": [
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "k",
                3
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Set i = 0 (2) and j = 2 (4).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              2,
              3
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                2
              ],
              [
                "k",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[2] (4) = 6 > 4 is TRUE! Add (2 - 0) = 2 to count. count becomes 5 + 2 = 7.",
            "best": {
              "label": "+2 Triangles (count = 7)",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "added",
                2
              ],
              [
                "count",
                7
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement j-- to 1 (val 3).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[1] (3) = 5 > 4 is TRUE! Add (1 - 0) = 1 to count. count becomes 7 + 1 = 8.",
            "best": {
              "label": "+1 Triangle (count = 8)",
              "indices": [
                0,
                1,
                3
              ]
            },
            "vars": [
              [
                "added",
                1
              ],
              [
                "count",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop: fix k = 2 (nums[2] = 4). Set i = 0 (2), j = 1 (3).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              }
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "k",
                2
              ],
              [
                "nums[k]",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "nums[0] (2) + nums[1] (3) = 5 > 4 is TRUE! Add (1 - 0) = 1 to count. count becomes 8 + 1 = 9.",
            "best": {
              "label": "+1 Triangle (count = 9)",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "added",
                1
              ],
              [
                "count",
                9
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "All sides evaluated. Return total valid triangles count = 9. Done in O(n²) time with O(1) space!",
            "best": {
              "label": "Optimal Triangles Count",
              "indices": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "final_count",
                9
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
      }
    ]
  },
  {
    "id": "remove-duplicates",
    "patternId": "two-pointers",
    "title": "Remove Duplicates from Sorted Array",
    "subtitle": "One write index, no extra array",
    "kind": "problem",
    "leetcode": {
      "id": 26,
      "slug": "remove-duplicates-from-sorted-array",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Adobe",
      "Meta"
    ],
    "statement": "Given a sorted integer array, remove the duplicates in place so each value appears once, keeping the relative order. Return k, the number of distinct values; the first k slots of the array must hold them.",
    "visualType": "array",
    "initialInput": [
      1,
      1,
      2,
      2,
      2,
      3,
      4,
      4
    ],
    "approaches": [
      {
        "label": "Brute force · second array",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "unique = []",
          "for x in arr:",
          "  if unique is empty or unique.last != x:",
          "    unique.append(x)",
          "return unique.length"
        ],
        "starterCode": {
          "javascript": "function removeDuplicates(nums) {\n  // Write your solution here\n  \n}",
          "python": "def removeDuplicates(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function removeDuplicates(nums) {\n  const unique = [];\n  for (const x of nums) {\n    if (unique.length === 0 || unique[unique.length - 1] !== x) {\n      unique.push(x);\n    }\n  }\n  for (let i = 0; i < unique.length; i++) {\n    nums[i] = unique[i];\n  }\n  return unique.length;\n}",
          "python": "def removeDuplicates(nums: list[int]) -> int:\n    unique = []\n    for x in nums:\n        if not unique or unique[-1] != x:\n            unique.append(x)\n    for i in range(len(unique)):\n        nums[i] = unique[i]\n    return len(unique)"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            ],
            "expected": 4,
            "description": "[1, 2, 3, 4]"
          },
          {
            "input": [
              [
                1,
                1,
                2
              ]
            ],
            "expected": 2,
            "description": "[1, 2]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Build a fresh array and copy over anything we have not already copied.",
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": []
              }
            },
            "vars": [
              [
                "extra space",
                "O(n)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[0] (value 1).",
            "pointers": [
              {
                "name": "x",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": []
              }
            },
            "vars": [
              [
                "index",
                0
              ],
              [
                "x",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique is empty or unique.last (none) != 1 is TRUE!",
            "pointers": [
              {
                "name": "x",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": []
              }
            },
            "vars": [
              [
                "is_unique",
                true
              ],
              [
                "x",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Append 1 to unique array -> UNIQUE is now [1].",
            "pointers": [
              {
                "name": "x",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1
                ]
              }
            },
            "best": {
              "label": "Appended 1",
              "indices": [
                0
              ]
            },
            "vars": [
              [
                "unique_length",
                1
              ],
              [
                "unique",
                "[1]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[1] (value 1).",
            "pointers": [
              {
                "name": "x",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1
                ]
              }
            },
            "vars": [
              [
                "index",
                1
              ],
              [
                "x",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique.last (1) == 1 -> Duplicate detected! Skip append.",
            "pointers": [
              {
                "name": "x",
                "index": 1,
                "color": "accent"
              }
            ],
            "dimmed": [
              1
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1
                ]
              }
            },
            "vars": [
              [
                "duplicate",
                true
              ],
              [
                "x",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[2] (value 2).",
            "pointers": [
              {
                "name": "x",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1
                ]
              }
            },
            "vars": [
              [
                "index",
                2
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique is empty or unique.last (1) != 2 is TRUE!",
            "pointers": [
              {
                "name": "x",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1
                ]
              }
            },
            "vars": [
              [
                "is_unique",
                true
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Append 2 to unique array -> UNIQUE is now [1, 2].",
            "pointers": [
              {
                "name": "x",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "best": {
              "label": "Appended 2",
              "indices": [
                2
              ]
            },
            "vars": [
              [
                "unique_length",
                2
              ],
              [
                "unique",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[3] (value 2).",
            "pointers": [
              {
                "name": "x",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "index",
                3
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique.last (2) == 2 -> Duplicate detected! Skip append.",
            "pointers": [
              {
                "name": "x",
                "index": 3,
                "color": "accent"
              }
            ],
            "dimmed": [
              3
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "duplicate",
                true
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[4] (value 2).",
            "pointers": [
              {
                "name": "x",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "index",
                4
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique.last (2) == 2 -> Duplicate detected! Skip append.",
            "pointers": [
              {
                "name": "x",
                "index": 4,
                "color": "accent"
              }
            ],
            "dimmed": [
              4
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "duplicate",
                true
              ],
              [
                "x",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[5] (value 3).",
            "pointers": [
              {
                "name": "x",
                "index": 5,
                "color": "accent"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "index",
                5
              ],
              [
                "x",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique is empty or unique.last (2) != 3 is TRUE!",
            "pointers": [
              {
                "name": "x",
                "index": 5,
                "color": "accent"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2
                ]
              }
            },
            "vars": [
              [
                "is_unique",
                true
              ],
              [
                "x",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Append 3 to unique array -> UNIQUE is now [1, 2, 3].",
            "pointers": [
              {
                "name": "x",
                "index": 5,
                "color": "accent"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3
                ]
              }
            },
            "best": {
              "label": "Appended 3",
              "indices": [
                5
              ]
            },
            "vars": [
              [
                "unique_length",
                3
              ],
              [
                "unique",
                "[1, 2, 3]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[6] (value 4).",
            "pointers": [
              {
                "name": "x",
                "index": 6,
                "color": "accent"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3
                ]
              }
            },
            "vars": [
              [
                "index",
                6
              ],
              [
                "x",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique is empty or unique.last (3) != 4 is TRUE!",
            "pointers": [
              {
                "name": "x",
                "index": 6,
                "color": "accent"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3
                ]
              }
            },
            "vars": [
              [
                "is_unique",
                true
              ],
              [
                "x",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Append 4 to unique array -> UNIQUE is now [1, 2, 3, 4].",
            "pointers": [
              {
                "name": "x",
                "index": 6,
                "color": "accent"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3,
                  4
                ]
              }
            },
            "best": {
              "label": "Appended 4",
              "indices": [
                6
              ]
            },
            "vars": [
              [
                "unique_length",
                4
              ],
              [
                "unique",
                "[1, 2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Iterate x = arr[7] (value 4).",
            "pointers": [
              {
                "name": "x",
                "index": 7,
                "color": "accent"
              }
            ],
            "highlights": [
              7
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3,
                  4
                ]
              }
            },
            "vars": [
              [
                "index",
                7
              ],
              [
                "x",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "unique.last (4) == 4 -> Duplicate detected! Skip append.",
            "pointers": [
              {
                "name": "x",
                "index": 7,
                "color": "accent"
              }
            ],
            "dimmed": [
              7
            ],
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3,
                  4
                ]
              }
            },
            "vars": [
              [
                "duplicate",
                true
              ],
              [
                "x",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "All elements processed. Return unique.length = 4 (elements [1, 2, 3, 4]). Uses O(n) auxiliary space.",
            "customVisual": {
              "secondaryArray": {
                "label": "UNIQUE[]",
                "array": [
                  1,
                  2,
                  3,
                  4
                ]
              }
            },
            "best": {
              "label": "Unique Count: 4",
              "indices": [
                0,
                2,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                4
              ],
              [
                "unique_elements",
                "[1, 2, 3, 4]"
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
      },
      {
        "label": "Optimized · write index",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "if n <= 1: return n",
          "write = 1",
          "for read = 1 to n - 1:",
          "  if arr[read] != arr[read - 1]:",
          "    arr[write] = arr[read]",
          "    write++",
          "return write"
        ],
        "starterCode": {
          "javascript": "function removeDuplicates(nums) {\n  // Write your solution here\n  \n}",
          "python": "def removeDuplicates(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function removeDuplicates(nums) {\n  if (nums.length <= 1) return nums.length;\n  let write = 1;\n  for (let read = 1; read < nums.length; read++) {\n    if (nums[read] !== nums[read - 1]) {\n      nums[write] = nums[read];\n      write++;\n    }\n  }\n  return write;\n}",
          "python": "def removeDuplicates(nums: list[int]) -> int:\n    if len(nums) <= 1: return len(nums)\n    write = 1\n    for read in range(1, len(nums)):\n        if nums[read] != nums[read - 1]:\n            nums[write] = nums[read]\n            write += 1\n    return write"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            ],
            "expected": 4,
            "description": "[1, 2, 3, 4]"
          },
          {
            "input": [
              [
                0,
                0,
                1,
                1,
                1,
                2,
                2,
                3,
                3,
                4
              ]
            ],
            "expected": 5,
            "description": "[0, 1, 2, 3, 4]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Array is sorted. If n <= 1 return n. Here n = 8.",
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "vars": [
              [
                "n",
                8
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize write = 1 (write index for next unique element). First element arr[0] = 1 is always kept.",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "write",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Scan read = 1 (arr[1] = 1).",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "read",
                1
              ],
              [
                "arr[read]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "arr[1] (1) == arr[0] (1) -> Duplicate! Skip writing.",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "dimmed": [
              1
            ],
            "vars": [
              [
                "duplicate",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Scan read = 2 (arr[2] = 2).",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "read",
                2
              ],
              [
                "arr[read]",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "arr[2] (2) != arr[1] (1) -> New unique value!",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "unique",
                true
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Write arr[write (1)] = 2 in-place.",
            "pointers": [
              {
                "name": "W",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "arr[1]",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Increment write++ to 2.",
            "pointers": [
              {
                "name": "W",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "vars": [
              [
                "write",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "read = 3 (2) == arr[2] (2) -> Duplicate! Skip.",
            "pointers": [
              {
                "name": "W",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "dimmed": [
              3
            ],
            "vars": [
              [
                "read",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "read = 4 (2) == arr[3] (2) -> Duplicate! Skip.",
            "pointers": [
              {
                "name": "W",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 4,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                2,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "dimmed": [
              4
            ],
            "vars": [
              [
                "read",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "read = 5 (3) != arr[4] (2) -> Write arr[2] = 3, write++ to 3.",
            "pointers": [
              {
                "name": "W",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 5,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                2,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "write",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "read = 6 (4) != arr[5] (3) -> Write arr[3] = 4, write++ to 4.",
            "pointers": [
              {
                "name": "W",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                2,
                3,
                4,
                4
              ]
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "write",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "read = 7 (4) == arr[6] (4) -> Duplicate! Skip.",
            "pointers": [
              {
                "name": "W",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 7,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                2,
                3,
                4,
                4
              ]
            },
            "dimmed": [
              7
            ],
            "vars": [
              [
                "read",
                7
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Return write = 4. The first 4 elements of arr are [1, 2, 3, 4]. Completed in O(n) time & O(1) space!",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                2,
                3,
                4,
                4
              ]
            },
            "best": {
              "label": "In-Place Result: 4 unique elements",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "k",
                4
              ],
              [
                "unique_prefix",
                "[1, 2, 3, 4]"
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
    "id": "merge-sorted-array",
    "patternId": "two-pointers",
    "title": "Merge Sorted Array",
    "subtitle": "Fill from the back so nothing is overwritten",
    "kind": "problem",
    "leetcode": {
      "id": 88,
      "slug": "merge-sorted-array",
      "difficulty": "Easy"
    },
    "companies": [
      "Facebook",
      "Microsoft",
      "Amazon",
      "Bloomberg"
    ],
    "statement": "nums1 holds m sorted values followed by n zeros of padding nums2 holds n sorted values. Merge nums2 into nums1 in place so nums1 ends up sorted.",
    "visualType": "array",
    "initialInput": [
      1,
      4,
      7,
      0,
      0,
      0
    ],
    "approaches": [
      {
        "label": "Brute force · concatenate + sort",
        "complexity": {
          "time": "O((m+n) log(m+n))",
          "space": "O(1)"
        },
        "pseudocode": [
          "# copy nums2 into the tail of nums1",
          "for j = 0 to n - 1: nums1[m + j] = nums2[j]",
          "sort(nums1)"
        ],
        "starterCode": {
          "javascript": "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}",
          "python": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function merge(nums1, m, nums2, n) {\n  for (let j = 0; j < n; j++) {\n    nums1[m + j] = nums2[j];\n  }\n  nums1.sort((a, b) => a - b);\n}",
          "python": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    for j in range(n):\n        nums1[m + j] = nums2[j]\n    nums1.sort()"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              3,
              [
                2,
                3,
                6
              ],
              3
            ],
            "expected": [
              1,
              2,
              3,
              4,
              6,
              7
            ],
            "description": "Standard merge"
          },
          {
            "input": [
              [
                1
              ],
              1,
              [],
              0
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
            "narration": "Drop nums2 into the padding at the end of nums1, then sort the whole thing.",
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              "padding": {
                "start": 3,
                "end": 5,
                "label": "PADDING"
              },
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "vars": [
              [
                "m",
                3
              ],
              [
                "n",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "j = 0: Copy nums2[0] (2) into padding slot nums1[3 + 0] (index 3).",
            "customVisual": {
              "array": [
                1,
                4,
                7,
                2,
                0,
                0
              ],
              "padding": {
                "start": 3,
                "end": 5,
                "label": "PADDING"
              },
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  0
                ]
              }
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "j",
                0
              ],
              [
                "nums2[0]",
                2
              ],
              [
                "target_index",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "j = 1: Copy nums2[1] (3) into padding slot nums1[3 + 1] (index 4).",
            "customVisual": {
              "array": [
                1,
                4,
                7,
                2,
                3,
                0
              ],
              "padding": {
                "start": 3,
                "end": 5,
                "label": "PADDING"
              },
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  1
                ]
              }
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "j",
                1
              ],
              [
                "nums2[1]",
                3
              ],
              [
                "target_index",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "j = 2: Copy nums2[2] (6) into padding slot nums1[3 + 2] (index 5).",
            "customVisual": {
              "array": [
                1,
                4,
                7,
                2,
                3,
                6
              ],
              "padding": {
                "start": 3,
                "end": 5,
                "label": "PADDING"
              },
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  2
                ]
              }
            },
            "highlights": [
              5
            ],
            "vars": [
              [
                "j",
                2
              ],
              [
                "nums2[2]",
                6
              ],
              [
                "target_index",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "All elements of nums2 copied into nums1 tail. Now execute sort(nums1).",
            "customVisual": {
              "array": [
                1,
                4,
                7,
                2,
                3,
                6
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
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
                "nums1",
                "[1, 4, 7, 2, 3, 6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort step 1: Compare 4 and 2 -> swap 2 into position.",
            "customVisual": {
              "array": [
                1,
                2,
                7,
                4,
                3,
                6
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "sorting",
                "swapped 4 and 2"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort step 2: Compare 7 and 3 -> insert 3 into position.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                7,
                4,
                6
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "sorting",
                "swapped 7 and 3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort step 3: Compare 7 and 4 -> swap 4 into position.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                7,
                6
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "sorting",
                "swapped 7 and 4"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort step 4: Compare 7 and 6 -> swap 6 and 7 into final position.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "sorting",
                "final swap 7 and 6"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "nums1 is completely merged and sorted: [1, 2, 3, 4, 6, 7]! Brute force runs in O((m+n) log(m+n)) time.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "best": {
              "label": "Merged: [1, 2, 3, 4, 6, 7]",
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
                "final_nums1",
                "[1, 2, 3, 4, 6, 7]"
              ],
              [
                "time",
                "O((m+n) log(m+n))"
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
        "label": "Optimized · merge backwards",
        "complexity": {
          "time": "O(m+n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "p1 = m - 1, p2 = n - 1, p = m + n - 1",
          "while p2 >= 0:",
          "  if p1 >= 0 and nums1[p1] > nums2[p2]:",
          "    nums1[p] = nums1[p1]",
          "    p1--",
          "  else:",
          "    nums1[p] = nums2[p2]",
          "    p2--",
          "  p--"
        ],
        "starterCode": {
          "javascript": "function merge(nums1, m, nums2, n) {\n  // Write your solution here\n  \n}",
          "python": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function merge(nums1, m, nums2, n) {\n  let p1 = m - 1, p2 = n - 1, p = m + n - 1;\n  while (p2 >= 0) {\n    if (p1 >= 0 && nums1[p1] > nums2[p2]) {\n      nums1[p] = nums1[p1];\n      p1--;\n    } else {\n      nums1[p] = nums2[p2];\n      p2--;\n    }\n    p--;\n  }\n}",
          "python": "def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:\n    p1, p2, p = m - 1, n - 1, m + n - 1\n    while p2 >= 0:\n        if p1 >= 0 and nums1[p1] > nums2[p2]:\n            nums1[p] = nums1[p1]\n            p1 -= 1\n        else:\n            nums1[p] = nums2[p2]\n            p2 -= 1\n        p -= 1"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              3,
              [
                2,
                3,
                6
              ],
              3
            ],
            "expected": [
              1,
              2,
              3,
              4,
              6,
              7
            ],
            "description": "Standard merge"
          },
          {
            "input": [
              [
                1
              ],
              1,
              [],
              0
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
            "narration": "Initialize p1 = 2 (val 7), p2 = 2 (val 6), write pointer p = 5 (tail of nums1).",
            "pointers": [
              {
                "name": "p1",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              "padding": {
                "start": 3,
                "end": 5,
                "label": "PADDING"
              },
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p1",
                2
              ],
              [
                "p2",
                2
              ],
              [
                "p",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Check loop: p2 >= 0 (2 >= 0 is true).",
            "pointers": [
              {
                "name": "p1",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p2",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare nums1[p1] (7) with nums2[p2] (6): 7 > 6 is TRUE. nums1[2] is larger!",
            "pointers": [
              {
                "name": "p1",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                0
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  2
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[p1]",
                7
              ],
              [
                "nums2[p2]",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Write larger value 7 at nums1[p (5)].",
            "pointers": [
              {
                "name": "p1",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[5]",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Decrement p1-- to 1 (val 4), p-- to 4.",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 4,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p1",
                1
              ],
              [
                "p",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare nums1[1] (4) with nums2[2] (6): 4 > 6 is FALSE. nums2[2] (6) is larger!",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 4,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                0,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  2
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[p1]",
                4
              ],
              [
                "nums2[p2]",
                6
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Write nums2[2] (6) at nums1[p (4)].",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 4,
                "color": "purple"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[4]",
                6
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement p2-- to 1 (val 3), p-- to 3.",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 3,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p2",
                1
              ],
              [
                "p",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare nums1[1] (4) with nums2[1] (3): 4 > 3 is TRUE. nums1[1] (4) is larger!",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                0,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  1
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[1]",
                4
              ],
              [
                "nums2[1]",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Write 4 at nums1[p (3)].",
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 3,
                "color": "purple"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[3]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Decrement p1-- to 0 (val 1), p-- to 2.",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 2,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p1",
                0
              ],
              [
                "p",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare nums1[0] (1) with nums2[1] (3): 1 > 3 is FALSE. nums2[1] (3) is larger!",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 2,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                7,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  1
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[0]",
                1
              ],
              [
                "nums2[1]",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Write 3 at nums1[p (2)].",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 2,
                "color": "purple"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                4,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[2]",
                3
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement p2-- to 0 (val 2), p-- to 1.",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 1,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 0,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "p2",
                0
              ],
              [
                "p",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare nums1[0] (1) with nums2[0] (2): 1 > 2 is FALSE. nums2[0] (2) is larger!",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 1,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                4,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ],
                "highlights": [
                  0
                ],
                "pointers": [
                  {
                    "name": "p2",
                    "index": 0,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "nums1[0]",
                1
              ],
              [
                "nums2[0]",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Write 2 at nums1[p (1)]. Decrement p2-- to -1, p-- to 0.",
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "p",
                "index": 0,
                "color": "purple"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "vars": [
              [
                "nums1[1]",
                2
              ],
              [
                "p2",
                -1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "p2 < 0 -> loop ends! nums1 successfully merged in place with zero overwrites. Result: [1, 2, 3, 4, 6, 7].",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                6,
                7
              ],
              "secondaryArray": {
                "label": "NUMS2",
                "array": [
                  2,
                  3,
                  6
                ]
              }
            },
            "best": {
              "label": "Optimal In-Place Merged: [1, 2, 3, 4, 6, 7]",
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
                "final_nums1",
                "[1, 2, 3, 4, 6, 7]"
              ],
              [
                "time",
                "O(m+n)"
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
    "id": "move-zeroes",
    "patternId": "two-pointers",
    "title": "Move Zeroes",
    "subtitle": "In-place · keep non-zeros in order",
    "kind": "problem",
    "leetcode": {
      "id": 283,
      "slug": "move-zeroes",
      "difficulty": "Easy"
    },
    "companies": [
      "Meta",
      "Amazon",
      "Microsoft"
    ],
    "statement": "Given an integer array, move all zeroes to the end in place while keeping the relative order of the non zero elements.",
    "visualType": "array",
    "initialInput": [
      0,
      1,
      0,
      3,
      12
    ],
    "approaches": [
      {
        "label": "Brute force · extra array",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given arr (n elements)",
          "aux = new array of size n filled with 0",
          "write = 0",
          "for i = 0 to n - 1:",
          "  if arr[i] != 0:",
          "    aux[write++] = arr[i]",
          "copy aux back into arr"
        ],
        "starterCode": {
          "javascript": "function moveZeroes(nums) {\n  // Write your solution here\n  \n}",
          "python": "def moveZeroes(nums: list[int]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function moveZeroes(nums) {\n  const aux = new Array(nums.length).fill(0);\n  let write = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] !== 0) {\n      aux[write++] = nums[i];\n    }\n  }\n  for (let i = 0; i < nums.length; i++) {\n    nums[i] = aux[i];\n  }\n}",
          "python": "def moveZeroes(nums: list[int]) -> None:\n    aux = [0] * len(nums)\n    write = 0\n    for x in nums:\n        if x != 0:\n            aux[write] = x\n            write += 1\n    for i in range(len(nums)):\n        nums[i] = aux[i]"
        },
        "testCases": [
          {
            "input": [
              [
                0,
                1,
                0,
                3,
                12
              ]
            ],
            "expected": [
              1,
              3,
              12,
              0,
              0
            ],
            "description": "Move zeroes to end"
          },
          {
            "input": [
              [
                0
              ]
            ],
            "expected": [
              0
            ],
            "description": "Single zero"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array arr of size n = 5.",
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            },
            "vars": [
              [
                "n",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "aux = new array of size n filled with 0.",
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              }
            },
            "vars": [
              [
                "aux_size",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Initialize write = 0 in aux array.",
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 0,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "write",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for i = 0: arr[0] = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 0,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "arr[i]",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "arr[0] == 0 -> zero detected, skip writing to aux.",
            "dimmed": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 0,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "zero",
                true
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for i = 1: arr[1] = 1 (non-zero!).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 0,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "arr[i]",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "arr[1] = 1 != 0 -> write it into aux[0], then write++.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  0,
                  0,
                  0,
                  0
                ],
                "highlights": [
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 1,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "aux[0]",
                1
              ],
              [
                "write",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for i = 2: arr[2] = 0 -> zero, skip.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "dimmed": [
              2
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 1,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "arr[i]",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for i = 3: arr[3] = 3 (non-zero!).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  0,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 1,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "arr[i]",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "arr[3] = 3 != 0 -> write it into aux[1], then write++.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "highlights": [
                  1
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 2,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "aux[1]",
                3
              ],
              [
                "write",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "for i = 4: arr[4] = 12 (non-zero!).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  3,
                  0,
                  0,
                  0
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 2,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "arr[i]",
                12
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "arr[4] = 12 != 0 -> write it into aux[2], then write++.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  3,
                  12,
                  0,
                  0
                ],
                "highlights": [
                  2
                ],
                "pointers": [
                  {
                    "name": "write",
                    "index": 3,
                    "color": "accent"
                  }
                ]
              }
            },
            "vars": [
              [
                "aux[2]",
                12
              ],
              [
                "write",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "copy aux back into arr -> [1, 3, 12, 0, 0]. Non-zero order kept, zeroes at end.",
            "customVisual": {
              "array": [
                1,
                3,
                12,
                0,
                0
              ],
              "secondaryArray": {
                "label": "AUX",
                "array": [
                  1,
                  3,
                  12,
                  0,
                  0
                ]
              }
            },
            "best": {
              "label": "Result: [1, 3, 12, 0, 0]",
              "indices": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "final_arr",
                "[1, 3, 12, 0, 0]"
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
      },
      {
        "label": "Optimized · same-direction two pointers",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "write = 0",
          "for read = 0 to n - 1:",
          "  if arr[read] != 0:",
          "    swap(arr[write], arr[read])",
          "    write++"
        ],
        "starterCode": {
          "javascript": "function moveZeroes(nums) {\n  // Write your solution here\n  \n}",
          "python": "def moveZeroes(nums: list[int]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function moveZeroes(nums) {\n  let write = 0;\n  for (let read = 0; read < nums.length; read++) {\n    if (nums[read] !== 0) {\n      const temp = nums[write];\n      nums[write] = nums[read];\n      nums[read] = temp;\n      write++;\n    }\n  }\n}",
          "python": "def moveZeroes(nums: list[int]) -> None:\n    write = 0\n    for read in range(len(nums)):\n        if nums[read] != 0:\n            nums[write], nums[read] = nums[read], nums[write]\n            write += 1"
        },
        "testCases": [
          {
            "input": [
              [
                0,
                1,
                0,
                3,
                12
              ]
            ],
            "expected": [
              1,
              3,
              12,
              0,
              0
            ],
            "description": "Move zeroes to end"
          },
          {
            "input": [
              [
                0
              ]
            ],
            "expected": [
              0
            ],
            "description": "Single zero"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize write = 0. We will scan read from 0 to n - 1.",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ]
            },
            "vars": [
              [
                "write",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "read = 0: arr[0] is 0.",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 0,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ]
            },
            "vars": [
              [
                "read",
                0
              ],
              [
                "arr[read]",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "arr[read] == 0 -> zero detected. Do not swap.",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 0,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ]
            },
            "dimmed": [
              0
            ],
            "vars": [
              [
                "zero",
                true
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "read = 1: arr[1] is 1 (non-zero!).",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                0,
                1,
                0,
                3,
                12
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "read",
                1
              ],
              [
                "arr[read]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Swap arr[write (0)] and arr[read (1)] -> array becomes [1, 0, 0, 3, 12].",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                0,
                0,
                3,
                12
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "swapped",
                "[0, 1] <-> [1, 0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Increment write++ to 1.",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                0,
                0,
                3,
                12
              ]
            },
            "vars": [
              [
                "write",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "read = 2: arr[2] is 0 -> skip.",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                0,
                0,
                3,
                12
              ]
            },
            "dimmed": [
              2
            ],
            "vars": [
              [
                "read",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "read = 3: arr[3] is 3 (non-zero!).",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                0,
                0,
                3,
                12
              ]
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "read",
                3
              ],
              [
                "arr[read]",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Swap arr[write (1)] and arr[read (3)] -> array becomes [1, 3, 0, 0, 12].",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                0,
                0,
                12
              ]
            },
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "swapped",
                "[0, 3] <-> [3, 0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Increment write++ to 2.",
            "pointers": [
              {
                "name": "write",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                0,
                0,
                12
              ]
            },
            "vars": [
              [
                "write",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "read = 4: arr[4] is 12 (non-zero!).",
            "pointers": [
              {
                "name": "write",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 4,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                0,
                0,
                12
              ]
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "read",
                4
              ],
              [
                "arr[read]",
                12
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Swap arr[write (2)] and arr[read (4)] -> array becomes [1, 3, 12, 0, 0].",
            "pointers": [
              {
                "name": "write",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "read",
                "index": 4,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                12,
                0,
                0
              ]
            },
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "swapped",
                "[0, 12] <-> [12, 0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Increment write++ to 3.",
            "pointers": [
              {
                "name": "write",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                12,
                0,
                0
              ]
            },
            "vars": [
              [
                "write",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop complete! All non-zeros kept in relative order [1, 3, 12] with zeroes shifted to end [0, 0]. In-place O(n) time & O(1) space!",
            "customVisual": {
              "array": [
                1,
                3,
                12,
                0,
                0
              ]
            },
            "best": {
              "label": "Optimal In-Place: [1, 3, 12, 0, 0]",
              "indices": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "final_array",
                "[1, 3, 12, 0, 0]"
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
    "id": "sort-colors",
    "patternId": "two-pointers",
    "title": "Sort Colors",
    "subtitle": "Dutch National Flag · in-place · three pointers",
    "kind": "problem",
    "leetcode": {
      "id": 75,
      "slug": "sort-colors",
      "difficulty": "Medium"
    },
    "companies": [
      "Microsoft",
      "Amazon",
      "Meta"
    ],
    "statement": "Given an array of objects colored 0, 1, or 2, sort them in place so equal colors are grouped in that order, ideally in a single pass.",
    "visualType": "array",
    "initialInput": [
      2,
      0,
      1,
      0,
      1,
      2,
      0
    ],
    "approaches": [
      {
        "label": "Brute force · counting sort (two passes)",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given arr",
          "count = [0, 0, 0]",
          "for v in arr: count[v]++",
          "write count[0] zeros, then count[1] ones, then count[2] twos",
          "return arr"
        ],
        "starterCode": {
          "javascript": "function sortColors(nums) {\n  // Write your solution here\n  \n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function sortColors(nums) {\n  const count = [0, 0, 0];\n  for (const v of nums) count[v]++;\n  let idx = 0;\n  for (let color = 0; color < 3; color++) {\n    while (count[color] > 0) {\n      nums[idx++] = color;\n      count[color]--;\n    }\n  }\n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    count = [0, 0, 0]\n    for v in nums:\n        count[v] += 1\n    idx = 0\n    for color in range(3):\n        for _ in range(count[color]):\n            nums[idx] = color\n            idx += 1"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            ],
            "expected": [
              0,
              0,
              0,
              1,
              1,
              2,
              2
            ],
            "description": "Sort 7 elements"
          },
          {
            "input": [
              [
                2,
                0,
                1
              ]
            ],
            "expected": [
              0,
              1,
              2
            ],
            "description": "3 elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array [2, 0, 1, 0, 1, 2, 0]. Approach 1: Counting Sort (2 passes).",
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "vars": [
              [
                "counts",
                "[0, 0, 0]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pass 1: Traverse array and count frequencies of 0s, 1s, and 2s.",
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
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
                "count[0]",
                3
              ],
              [
                "count[1]",
                2
              ],
              [
                "count[2]",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 2: Overwrite array with 3 zeros [indices 0..2].",
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                0,
                1,
                2,
                0
              ]
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "overwritten",
                "0s"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 2: Overwrite next 2 positions with ones [indices 3..4].",
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                0
              ]
            },
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "overwritten",
                "1s"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 2: Overwrite remaining 2 positions with twos [indices 5..6].",
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "overwritten",
                "2s"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Counting sort complete! Array is sorted: [0, 0, 0, 1, 1, 2, 2] in 2 passes (O(n) time, O(1) space).",
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "best": {
              "label": "Sorted: [0, 0, 0, 1, 1, 2, 2]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[0, 0, 0, 1, 1, 2, 2]"
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
      },
      {
        "label": "Better · two-pass swap partition (in place)",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "write = 0",
          "// Pass 1: move all 0s to front",
          "for i in 0..n-1:",
          "  if nums[i] == 0: swap(nums[write], nums[i]); write++",
          "// Pass 2: move all 1s after 0s",
          "for i in write..n-1:",
          "  if nums[i] == 1: swap(nums[write], nums[i]); write++"
        ],
        "starterCode": {
          "javascript": "function sortColors(nums) {\n  // Write your solution here\n  \n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function sortColors(nums) {\n  let write = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === 0) {\n      [nums[write], nums[i]] = [nums[i], nums[write]];\n      write++;\n    }\n  }\n  for (let i = write; i < nums.length; i++) {\n    if (nums[i] === 1) {\n      [nums[write], nums[i]] = [nums[i], nums[write]];\n      write++;\n    }\n  }\n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    write = 0\n    for i in range(len(nums)):\n        if nums[i] == 0:\n            nums[write], nums[i] = nums[i], nums[write]\n            write += 1\n    for i in range(write, len(nums)):\n        if nums[i] == 1:\n            nums[write], nums[i] = nums[i], nums[write]\n            write += 1"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            ],
            "expected": [
              0,
              0,
              0,
              1,
              1,
              2,
              2
            ],
            "description": "Sort 7 elements"
          },
          {
            "input": [
              [
                2,
                0,
                1
              ]
            ],
            "expected": [
              0,
              1,
              2
            ],
            "description": "3 elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Pass 1: Move all 0s (red) to the beginning using write pointer at index 0.",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "vars": [
              [
                "pass",
                "1 (partition 0s)"
              ],
              [
                "write",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 0: arr[0] is 2 (not 0). Advance i.",
            "pointers": [
              {
                "name": "write",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 0,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "write",
                0
              ],
              [
                "i",
                0
              ],
              [
                "arr[i]",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 1: arr[1] is 0! Swap arr[write (0)] and arr[i (1)] -> [0, 2, 1, 0, 1, 2, 0]. write++ to 1.",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                2,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "write",
                1
              ],
              [
                "i",
                1
              ],
              [
                "swapped",
                "[2] <-> [0]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 2: arr[2] is 1 (not 0). Advance i.",
            "pointers": [
              {
                "name": "write",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                2,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "write",
                1
              ],
              [
                "i",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 3: arr[3] is 0! Swap arr[write (1)] and arr[i (3)] -> [0, 0, 1, 2, 1, 2, 0]. write++ to 2.",
            "pointers": [
              {
                "name": "write",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                2,
                1,
                2,
                0
              ]
            },
            "highlights": [
              1,
              3
            ],
            "vars": [
              [
                "write",
                2
              ],
              [
                "i",
                3
              ],
              [
                "swapped",
                "[2] <-> [0]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 4, 5: arr[4] is 1, arr[5] is 2 (neither is 0). Advance i.",
            "pointers": [
              {
                "name": "write",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 5,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                2,
                1,
                2,
                0
              ]
            },
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "write",
                2
              ],
              [
                "i",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 6: arr[6] is 0! Swap arr[write (2)] and arr[i (6)] -> [0, 0, 0, 2, 1, 2, 1]. write++ to 3.",
            "pointers": [
              {
                "name": "write",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                2,
                1,
                2,
                1
              ]
            },
            "highlights": [
              2,
              6
            ],
            "vars": [
              [
                "write",
                3
              ],
              [
                "i",
                6
              ],
              [
                "swapped",
                "[1] <-> [0]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Pass 1 complete! All 0s partitioned to indices [0..2]. Start Pass 2 from write = 3 to group 1s.",
            "pointers": [
              {
                "name": "write",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                2,
                1,
                2,
                1
              ]
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "pass",
                "2 (partition 1s)"
              ],
              [
                "write",
                3
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "i = 3: arr[3] is 2 (not 1). Advance i to 4.",
            "pointers": [
              {
                "name": "write",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                2,
                1,
                2,
                1
              ]
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "write",
                3
              ],
              [
                "i",
                3
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "i = 4: arr[4] is 1! Swap arr[write (3)] and arr[i (4)] -> [0, 0, 0, 1, 2, 2, 1]. write++ to 4.",
            "pointers": [
              {
                "name": "write",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 4,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                2,
                2,
                1
              ]
            },
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "write",
                4
              ],
              [
                "i",
                4
              ],
              [
                "swapped",
                "[2] <-> [1]"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "i = 5: arr[5] is 2 (not 1). Advance i to 6.",
            "pointers": [
              {
                "name": "write",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 5,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                2,
                2,
                1
              ]
            },
            "highlights": [
              5
            ],
            "vars": [
              [
                "write",
                4
              ],
              [
                "i",
                5
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "i = 6: arr[6] is 1! Swap arr[write (4)] and arr[i (6)] -> [0, 0, 0, 1, 1, 2, 2]. write++ to 5.",
            "pointers": [
              {
                "name": "write",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "i",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              4,
              6
            ],
            "vars": [
              [
                "write",
                5
              ],
              [
                "i",
                6
              ],
              [
                "swapped",
                "[2] <-> [1]"
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Two-pass partition complete! Array is sorted: [0, 0, 0, 1, 1, 2, 2] in O(n) time & O(1) space.",
            "pointers": [
              {
                "name": "write",
                "index": 5,
                "color": "accent"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "best": {
              "label": "Two-pass Sorted: [0, 0, 0, 1, 1, 2, 2]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[0, 0, 0, 1, 1, 2, 2]"
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
      },
      {
        "label": "Optimized · Dutch National Flag (in place, one pass)",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "low = 0, mid = 0, high = n - 1",
          "while mid <= high:",
          "  if arr[mid] == 0:",
          "    swap(arr[low], arr[mid])",
          "    low++, mid++",
          "  elif arr[mid] == 1:",
          "    mid++",
          "  else:",
          "    swap(arr[mid], arr[high])",
          "    high--"
        ],
        "starterCode": {
          "javascript": "function sortColors(nums) {\n  // Write your solution here\n  \n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function sortColors(nums) {\n  let low = 0, mid = 0, high = nums.length - 1;\n  while (mid <= high) {\n    if (nums[mid] === 0) {\n      [nums[low], nums[mid]] = [nums[mid], nums[low]];\n      low++; mid++;\n    } else if (nums[mid] === 1) {\n      mid++;\n    } else {\n      [nums[mid], nums[high]] = [nums[high], nums[mid]];\n      high--;\n    }\n  }\n}",
          "python": "def sortColors(nums: list[int]) -> None:\n    low, mid, high = 0, 0, len(nums) - 1\n    while mid <= high:\n        if nums[mid] == 0:\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low += 1; mid += 1\n        elif nums[mid] == 1:\n            mid += 1\n        else:\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high -= 1"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            ],
            "expected": [
              0,
              0,
              0,
              1,
              1,
              2,
              2
            ],
            "description": "Sort 7 elements"
          },
          {
            "input": [
              [
                2,
                0,
                1
              ]
            ],
            "expected": [
              0,
              1,
              2
            ],
            "description": "3 elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize 3 pointers: low = 0 (red boundary), mid = 0 (current scan), high = 6 (blue boundary).",
            "pointers": [
              {
                "name": "low",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 0,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 6,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "vars": [
              [
                "low",
                0
              ],
              [
                "mid",
                0
              ],
              [
                "high",
                6
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop condition: mid (0) <= high (6) is true.",
            "pointers": [
              {
                "name": "low",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 0,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 6,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                2,
                0,
                1,
                0,
                1,
                2,
                0
              ]
            },
            "vars": [
              [
                "mid",
                0
              ],
              [
                "high",
                6
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "mid = 0: arr[mid] is 2 (blue). Swap with arr[high (6)] (0) -> [0, 0, 1, 0, 1, 2, 2]. Decrement high to 5.",
            "pointers": [
              {
                "name": "low",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 0,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                0,
                1,
                2,
                2
              ]
            },
            "highlights": [
              0,
              6
            ],
            "vars": [
              [
                "swapped",
                "[2] <-> [0]"
              ],
              [
                "high",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = 0: arr[mid] is 0 (red). Swap with arr[low (0)] -> low++ to 1, mid++ to 1.",
            "pointers": [
              {
                "name": "low",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                0,
                1,
                2,
                2
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "low",
                1
              ],
              [
                "mid",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = 1: arr[mid] is 0 (red). Swap with arr[low (1)] -> low++ to 2, mid++ to 2.",
            "pointers": [
              {
                "name": "low",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                0,
                1,
                2,
                2
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "low",
                2
              ],
              [
                "mid",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "mid = 2: arr[mid] is 1 (white). In middle partition! mid++ to 3.",
            "pointers": [
              {
                "name": "low",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                1,
                0,
                1,
                2,
                2
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "mid",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = 3: arr[mid] is 0 (red). Swap with arr[low (2)] (1) -> [0, 0, 0, 1, 1, 2, 2].",
            "pointers": [
              {
                "name": "low",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "swapped",
                "[1] <-> [0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Advance low++ to 3, mid++ to 4.",
            "pointers": [
              {
                "name": "low",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 4,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "vars": [
              [
                "low",
                3
              ],
              [
                "mid",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "mid = 4: arr[mid] is 1 (white). In middle partition! mid++ to 5.",
            "pointers": [
              {
                "name": "low",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 5,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "mid",
                5
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "mid = 5: arr[mid] is 2 (blue). Swap with arr[high (5)] -> high-- to 4.",
            "pointers": [
              {
                "name": "low",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 5,
                "color": "accent2"
              },
              {
                "name": "high",
                "index": 4,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              5
            ],
            "vars": [
              [
                "high",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "mid (5) > high (4) -> Partitioning complete! Colors sorted in single pass: [0, 0, 0, 1, 1, 2, 2] in O(n) time & O(1) space.",
            "pointers": [
              {
                "name": "low",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "high",
                "index": 4,
                "color": "purple"
              }
            ],
            "customVisual": {
              "isColorSort": true,
              "array": [
                0,
                0,
                0,
                1,
                1,
                2,
                2
              ]
            },
            "best": {
              "label": "Optimal Dutch Flag: [0, 0, 0, 1, 1, 2, 2]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[0, 0, 0, 1, 1, 2, 2]"
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
    "id": "rotate-array",
    "patternId": "two-pointers",
    "title": "Rotate Array by K Places",
    "subtitle": "Three reversals · no extra array",
    "kind": "problem",
    "leetcode": {
      "id": 189,
      "slug": "rotate-array",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta",
      "Google"
    ],
    "statement": "Given an integer array nums, rotate the array to the right by k steps, where k is non-negative. Do this in-place with O(1) extra space.",
    "visualType": "array",
    "initialInput": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "approaches": [
      {
        "label": "Brute force · rotate 1 step k times",
        "complexity": {
          "time": "O(n * k)",
          "space": "O(1)"
        },
        "pseudocode": [
          "k = k % n",
          "for step in 1..k:",
          "  last = nums[n - 1]",
          "  for i from n - 1 down to 1: nums[i] = nums[i - 1]",
          "  nums[0] = last"
        ],
        "starterCode": {
          "javascript": "function rotate(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function rotate(nums, k) {\n  k = k % nums.length;\n  for (let s = 0; s < k; s++) {\n    const last = nums[nums.length - 1];\n    for (let i = nums.length - 1; i > 0; i--) {\n      nums[i] = nums[i - 1];\n    }\n    nums[0] = last;\n  }\n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    k = k % len(nums)\n    for _ in range(k):\n        last = nums[-1]\n        for i in range(len(nums) - 1, 0, -1):\n            nums[i] = nums[i - 1]\n        nums[0] = last"
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
                7
              ],
              3
            ],
            "expected": [
              5,
              6,
              7,
              1,
              2,
              3,
              4
            ],
            "description": "Rotate right by 3"
          },
          {
            "input": [
              [
                -1,
                -100,
                3,
                99
              ],
              2
            ],
            "expected": [
              3,
              99,
              -1,
              -100
            ],
            "description": "Rotate right by 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 2, 3, 4, 5, 6, 7], k = 3. Approach 1: Rotate 1 step right, repeated k times.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ]
            },
            "vars": [
              [
                "k",
                3
              ],
              [
                "step",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Rotation step 1 of 3: Save last element = nums[6] (7). Shift elements [0..5] one position to the right.",
            "pointers": [
              {
                "name": "last",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ]
            },
            "highlights": [
              6
            ],
            "vars": [
              [
                "step",
                "1/3"
              ],
              [
                "last",
                7
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Shift complete: elements shifted right, place last (7) at index 0 -> [7, 1, 2, 3, 4, 5, 6].",
            "customVisual": {
              "array": [
                7,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "step",
                "1/3"
              ],
              [
                "arr[0]",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Rotation step 2 of 3: Save last element = nums[6] (6). Shift elements [0..5] one position to the right.",
            "pointers": [
              {
                "name": "last",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                7,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "highlights": [
              6
            ],
            "vars": [
              [
                "step",
                "2/3"
              ],
              [
                "last",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Shift complete: place last (6) at index 0 -> [6, 7, 1, 2, 3, 4, 5].",
            "customVisual": {
              "array": [
                6,
                7,
                1,
                2,
                3,
                4,
                5
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "step",
                "2/3"
              ],
              [
                "arr[0]",
                6
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Rotation step 3 of 3: Save last element = nums[6] (5). Shift elements [0..5] one position to the right.",
            "pointers": [
              {
                "name": "last",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                6,
                7,
                1,
                2,
                3,
                4,
                5
              ]
            },
            "highlights": [
              6
            ],
            "vars": [
              [
                "step",
                "3/3"
              ],
              [
                "last",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Shift complete: place last (5) at index 0 -> [5, 6, 7, 1, 2, 3, 4].",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "step",
                "3/3"
              ],
              [
                "arr[0]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "All 3 rotations completed! Final array: [5, 6, 7, 1, 2, 3, 4] in O(n * k) time and O(1) space.",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "best": {
              "label": "Rotated: [5, 6, 7, 1, 2, 3, 4]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[5, 6, 7, 1, 2, 3, 4]"
              ],
              [
                "time",
                "O(n * k)"
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
        "label": "Better · auxiliary array",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "temp = new Array(n)",
          "for i in 0..n-1:",
          "  temp[(i + k) % n] = nums[i]",
          "for i in 0..n-1: nums[i] = temp[i]"
        ],
        "starterCode": {
          "javascript": "function rotate(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function rotate(nums, k) {\n  const n = nums.length;\n  const temp = new Array(n);\n  for (let i = 0; i < n; i++) {\n    temp[(i + k) % n] = nums[i];\n  }\n  for (let i = 0; i < n; i++) {\n    nums[i] = temp[i];\n  }\n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    n = len(nums)\n    temp = [0] * n\n    for i in range(n):\n        temp[(i + k) % n] = nums[i]\n    for i in range(n):\n        nums[i] = temp[i]"
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
                7
              ],
              3
            ],
            "expected": [
              5,
              6,
              7,
              1,
              2,
              3,
              4
            ],
            "description": "Rotate right by 3"
          },
          {
            "input": [
              [
                -1,
                -100,
                3,
                99
              ],
              2
            ],
            "expected": [
              3,
              99,
              -1,
              -100
            ],
            "description": "Rotate right by 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 2, 3, 4, 5, 6, 7], k = 3. Approach 2: Allocate extra array temp of size 7.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryArray": [
                null,
                null,
                null,
                null,
                null,
                null,
                null
              ]
            },
            "vars": [
              [
                "k",
                3
              ],
              [
                "n",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 0 (val 1) -> maps to (0 + 3) % 7 = index 3. Set temp[3] = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryArray": [
                null,
                null,
                null,
                1,
                null,
                null,
                null
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "targetIdx",
                3
              ],
              [
                "val",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 1, 2, 3 -> placed into temp at indices 4, 5, 6 respectively.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryArray": [
                null,
                null,
                null,
                1,
                2,
                3,
                4
              ]
            },
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "indicesPlaced",
                "1..3"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 4 (val 5) -> maps to (4 + 3) % 7 = index 0. Set temp[0] = 5.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryArray": [
                5,
                null,
                null,
                1,
                2,
                3,
                4
              ]
            },
            "highlights": [
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "targetIdx",
                0
              ],
              [
                "val",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 5, 6 -> wrap around to temp[1] = 6, temp[2] = 7. temp is now complete: [5, 6, 7, 1, 2, 3, 4].",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ],
              "secondaryArray": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "temp",
                "[5, 6, 7, 1, 2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Copy all elements from temp back into nums in-place.",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ],
              "secondaryArray": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
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
                "copied",
                true
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Array rotated in O(n) time with O(n) extra space: [5, 6, 7, 1, 2, 3, 4].",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "best": {
              "label": "Rotated: [5, 6, 7, 1, 2, 3, 4]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[5, 6, 7, 1, 2, 3, 4]"
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
      },
      {
        "label": "Optimized · three reversals (in place)",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "k = k % n",
          "reverse(nums, 0, n - 1)",
          "reverse(nums, 0, k - 1)",
          "reverse(nums, k, n - 1)"
        ],
        "starterCode": {
          "javascript": "function rotate(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function rotate(nums, k) {\n  k = k % nums.length;\n  const rev = (l, r) => {\n    while (l < r) {\n      [nums[l], nums[r]] = [nums[r], nums[l]];\n      l++; r--;\n    }\n  };\n  rev(0, nums.length - 1);\n  rev(0, k - 1);\n  rev(k, nums.length - 1);\n}",
          "python": "def rotate(nums: list[int], k: int) -> None:\n    k = k % len(nums)\n    def rev(l, r):\n        while l < r:\n            nums[l], nums[r] = nums[r], nums[l]\n            l += 1; r -= 1\n    rev(0, len(nums) - 1)\n    rev(0, k - 1)\n    rev(k, len(nums) - 1)"
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
                7
              ],
              3
            ],
            "expected": [
              5,
              6,
              7,
              1,
              2,
              3,
              4
            ],
            "description": "Rotate right by 3"
          },
          {
            "input": [
              [
                -1,
                -100,
                3,
                99
              ],
              2
            ],
            "expected": [
              3,
              99,
              -1,
              -100
            ],
            "description": "Rotate right by 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "k = 3 % 7 = 3. Array is [1, 2, 3, 4, 5, 6, 7]. Optimal 3-step reversal algorithm (O(1) space).",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ]
            },
            "vars": [
              [
                "k",
                3
              ],
              [
                "n",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Phase 1: Reverse entire array [0 .. 6]. Left = 0, Right = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                5,
                6,
                7
              ]
            },
            "highlights": [
              0,
              6
            ],
            "vars": [
              [
                "phase",
                "1: reverse all"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Phase 1 in progress: Swap pairs (1 <-> 7), (2 <-> 6), (3 <-> 5). Result: [7, 6, 5, 4, 3, 2, 1].",
            "customVisual": {
              "array": [
                7,
                6,
                5,
                4,
                3,
                2,
                1
              ]
            },
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
                "allReversed",
                "[7, 6, 5, 4, 3, 2, 1]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Phase 2: Reverse first k = 3 elements [0 .. 2]. Left = 0, Right = 2.",
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
            "customVisual": {
              "array": [
                7,
                6,
                5,
                4,
                3,
                2,
                1
              ]
            },
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "phase",
                "2: reverse prefix [0..2]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Phase 2 complete: Swapped 7 <-> 5 -> [5, 6, 7, 4, 3, 2, 1]. First 3 elements are now in correct final order!",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                4,
                3,
                2,
                1
              ]
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "prefixReversed",
                "[5, 6, 7]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Phase 3: Reverse remaining n - k elements [3 .. 6]. Left = 3, Right = 6.",
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
            "customVisual": {
              "array": [
                5,
                6,
                7,
                4,
                3,
                2,
                1
              ]
            },
            "highlights": [
              3,
              6
            ],
            "vars": [
              [
                "phase",
                "3: reverse suffix [3..6]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Phase 3 in progress: Swap (4 <-> 1) and (3 <-> 2) -> [5, 6, 7, 1, 2, 3, 4].",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "highlights": [
              3,
              4,
              5,
              6
            ],
            "vars": [
              [
                "suffixReversed",
                "[1, 2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Array rotated by 3 places to the right in O(n) time & O(1) in-place extra space!",
            "customVisual": {
              "array": [
                5,
                6,
                7,
                1,
                2,
                3,
                4
              ]
            },
            "best": {
              "label": "Optimal In-Place: [5, 6, 7, 1, 2, 3, 4]",
              "indices": [
                0,
                1,
                2,
                3,
                4,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                "[5, 6, 7, 1, 2, 3, 4]"
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
    "id": "four-sum",
    "patternId": "two-pointers",
    "title": "4Sum",
    "subtitle": "3Sum with one more index pinned",
    "kind": "problem",
    "leetcode": {
      "id": 18,
      "slug": "4sum",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Adobe",
      "Meta"
    ],
    "statement": "Given an array and a target, return all unique quadruples [a, b, c, d] that sum to the target. The solution set must not contain duplicate quadruples.",
    "visualType": "array",
    "initialInput": [
      -2,
      -1,
      0,
      0,
      1,
      2
    ],
    "approaches": [
      {
        "label": "Brute force · four nested loops",
        "complexity": {
          "time": "O(n⁴)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given arr, target",
          "res = []",
          "for i = 0 to n - 4:",
          "  for j = i + 1 to n - 3:",
          "    for k = j + 1 to n - 2:",
          "      for l = k + 1 to n - 1:",
          "        if arr[i] + arr[j] + arr[k] + arr[l] == target:",
          "          record([arr[i], arr[j], arr[k], arr[l]])",
          "return deduplicated results"
        ],
        "starterCode": {
          "javascript": "function fourSum(nums, target) {\n  // Write your solution here\n  \n}",
          "python": "def fourSum(nums: list[int], target: int) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function fourSum(nums, target) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  const seen = new Set();\n  const n = nums.length;\n  for (let i = 0; i < n - 3; i++) {\n    for (let j = i + 1; j < n - 2; j++) {\n      for (let k = j + 1; k < n - 1; k++) {\n        for (let l = k + 1; l < n; l++) {\n          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {\n            const key = `${nums[i]},${nums[j]},${nums[k]},${nums[l]}`;\n            if (!seen.has(key)) {\n              seen.add(key);\n              res.push([nums[i], nums[j], nums[k], nums[l]]);\n            }\n          }\n        }\n      }\n    }\n  }\n  return res;\n}",
          "python": "def fourSum(nums: list[int], target: int) -> list[list[int]]:\n    nums.sort()\n    res = []\n    seen = set()\n    n = len(nums)\n    for i in range(n - 3):\n        for j in range(i + 1, n - 2):\n            for k in range(j + 1, n - 1):\n                for l in range(k + 1, n):\n                    if nums[i] + nums[j] + nums[k] + nums[l] == target:\n                        quad = (nums[i], nums[j], nums[k], nums[l])\n                        if quad not in seen:\n                            seen.add(quad)\n                            res.append(list(quad))\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                -2,
                -1,
                0,
                0,
                1,
                2
              ],
              0
            ],
            "expected": [
              [
                -2,
                -1,
                1,
                2
              ],
              [
                -2,
                0,
                0,
                2
              ],
              [
                -1,
                0,
                0,
                1
              ]
            ],
            "description": "Standard 4Sum"
          },
          {
            "input": [
              [
                2,
                2,
                2,
                2,
                2
              ],
              8
            ],
            "expected": [
              [
                2,
                2,
                2,
                2
              ]
            ],
            "description": "Repeated elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array [-2, -1, 0, 0, 1, 2] and target = 0. Brute force tests all 4-element combinations.",
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "target",
                0
              ],
              [
                "n",
                6
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Check indices [0, 1, 2, 3]: -2 + -1 + 0 + 0 = -3 != 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 2,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "sum",
                -3
              ],
              [
                "target",
                0
              ],
              [
                "match",
                false
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Check indices [0, 1, 4, 5]: -2 + -1 + 1 + 2 = 0 == 0 ✓ Match!.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              0,
              1,
              4,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-2, -1, 1, 2]",
              "indices": [
                0,
                1,
                4,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "target",
                0
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Record quadruple [-2, -1, 1, 2]. Total found so far: 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 4,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              0,
              1,
              4,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Recorded [-2, -1, 1, 2]",
              "indices": [
                0,
                1,
                4,
                5
              ]
            },
            "vars": [
              [
                "found",
                "[[-2,-1,1,2]]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Check indices [0, 2, 3, 5]: -2 + 0 + 0 + 2 = 0 == 0 ✓ Match!.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              0,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-2, 0, 0, 2]",
              "indices": [
                0,
                2,
                3,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "target",
                0
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Record quadruple [-2, 0, 0, 2]. Total found so far: 2.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              0,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Recorded [-2, 0, 0, 2]",
              "indices": [
                0,
                2,
                3,
                5
              ]
            },
            "vars": [
              [
                "found",
                "[[-2,-1,1,2],[-2,0,0,2]]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Check indices [1, 2, 3, 4]: -1 + 0 + 0 + 1 = 0 == 0 ✓ Match!.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-1, 0, 0, 1]",
              "indices": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "target",
                0
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Record quadruple [-1, 0, 0, 1]. Total found so far: 3.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "k",
                "index": 3,
                "color": "purple"
              },
              {
                "name": "l",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Recorded [-1, 0, 0, 1]",
              "indices": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "found",
                "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Return all deduplicated quadruples: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]. Brute force runs in O(n⁴) time.",
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Total 3 Unique Quadruples",
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
                "results",
                "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]"
              ],
              [
                "time",
                "O(n⁴)"
              ],
              [
                "space",
                "O(n)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · sort + two pointers",
        "complexity": {
          "time": "O(n³)",
          "space": "O(1)"
        },
        "pseudocode": [
          "sort(arr)",
          "for i: skip if arr[i] == arr[i - 1]",
          "  for j > i: skip duplicates; lo = j + 1; hi = n - 1",
          "    if sum == target: record, skip duplicates, move both",
          "    else if sum < target: lo = lo + 1",
          "    else: hi = hi - 1",
          "return quadruples"
        ],
        "starterCode": {
          "javascript": "function fourSum(nums, target) {\n  // Write your solution here\n  \n}",
          "python": "def fourSum(nums: list[int], target: int) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function fourSum(nums, target) {\n  nums.sort((a, b) => a - b);\n  const res = [];\n  const n = nums.length;\n  for (let i = 0; i < n - 3; i++) {\n    if (i > 0 && nums[i] === nums[i - 1]) continue;\n    for (let j = i + 1; j < n - 2; j++) {\n      if (j > i + 1 && nums[j] === nums[j - 1]) continue;\n      let lo = j + 1, hi = n - 1;\n      while (lo < hi) {\n        const sum = nums[i] + nums[j] + nums[lo] + nums[hi];\n        if (sum === target) {\n          res.push([nums[i], nums[j], nums[lo], nums[hi]]);\n          while (lo < hi && nums[lo] === nums[lo + 1]) lo++;\n          while (lo < hi && nums[hi] === nums[hi - 1]) hi--;\n          lo++; hi--;\n        } else if (sum < target) {\n          lo++;\n        } else {\n          hi--;\n        }\n      }\n    }\n  }\n  return res;\n}",
          "python": "def fourSum(nums: list[int], target: int) -> list[list[int]]:\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 3):\n        if i > 0 and nums[i] == nums[i - 1]: continue\n        for j in range(i + 1, n - 2):\n            if j > i + 1 and nums[j] == nums[j - 1]: continue\n            lo, hi = j + 1, n - 1\n            while lo < hi:\n                s = nums[i] + nums[j] + nums[lo] + nums[hi]\n                if s == target:\n                    res.append([nums[i], nums[j], nums[lo], nums[hi]])\n                    while lo < hi and nums[lo] == nums[lo + 1]: lo += 1\n                    while lo < hi and nums[hi] == nums[hi - 1]: hi -= 1\n                    lo += 1; hi -= 1\n                elif s < target: lo += 1\n                else: hi -= 1\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                -2,
                -1,
                0,
                0,
                1,
                2
              ],
              0
            ],
            "expected": [
              [
                -2,
                -1,
                1,
                2
              ],
              [
                -2,
                0,
                0,
                2
              ],
              [
                -1,
                0,
                0,
                1
              ]
            ],
            "description": "Standard 4Sum"
          },
          {
            "input": [
              [
                2,
                2,
                2,
                2,
                2
              ],
              8
            ],
            "expected": [
              [
                2,
                2,
                2,
                2
              ]
            ],
            "description": "Repeated elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Sort array -> [-2, -1, 0, 0, 1, 2]. Sorting enables two pointers and duplicate skipping.",
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "target",
                0
              ],
              [
                "sum",
                "-"
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 0: arr[0] = -2. Not duplicate (i == 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
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
                "arr[i]",
                -2
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 1: arr[1] = -1. Initialize lo = 2 (val 0), hi = 5 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 2,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              2,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
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
                "j",
                1
              ],
              [
                "lo",
                2
              ],
              [
                "hi",
                5
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: (-2) + (-1) + 0 + 2 = -1 != 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 2,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              2,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "sum",
                -1
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "sum (-1) < target (0) -> need larger sum: lo = lo + 1 = 3 (val 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "lo",
                3
              ],
              [
                "sum",
                -1
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: (-2) + (-1) + 0 + 2 = -1 != 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "sum",
                -1
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "sum (-1) < target (0) -> advance lo = lo + 1 = 4 (val 1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 4,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              4,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "lo",
                4
              ],
              [
                "sum",
                -1
              ],
              [
                "found",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: (-2) + (-1) + 1 + 2 = 0 == 0 ✓ — target match!",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 4,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              1,
              4,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-2, -1, 1, 2]",
              "indices": [
                0,
                1,
                4,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "found",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Record [-2, -1, 1, 2], then advance lo++ to 5, hi-- to 4. Now lo > hi, while loop ends.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "found",
                1
              ],
              [
                "last_recorded",
                "[-2, -1, 1, 2]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 2: arr[2] = 0. Initialize lo = 3 (val 0), hi = 5 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
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
                "j",
                2
              ],
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ],
              [
                "found",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "-2 + 0 + 0 + 2 = 0 ✓ — record [-2, 0, 0, 2], then move BOTH pointers past their duplicates.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              0,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-2, 0, 0, 2]",
              "indices": [
                0,
                2,
                3,
                5
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "lo moves to 4, hi moves to 4. lo == hi -> inner search finishes.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "lo",
                4
              ],
              [
                "hi",
                4
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 3: arr[3] (0) == arr[2] (0) -> Duplicate j detected! Skip to prevent repeated quadruples.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "dimmed": [
              3
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "skipped_duplicate_j",
                0
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 4: arr[4] = 1. lo = 5, hi = 5 -> no valid range (lo >= hi).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 1: arr[1] = -1. Move to next outer element.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "arr[i]",
                -1
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 2: arr[2] = 0. Initialize lo = 3 (val 0), hi = 5 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: (-1) + 0 + 0 + 2 = 1 > 0.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "sum",
                1
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "sum (1) > target (0) -> need smaller sum: hi = hi - 1 = 4 (val 1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 4,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "hi",
                4
              ],
              [
                "sum",
                1
              ],
              [
                "found",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compute sum: (-1) + 0 + 0 + 1 = 0 == 0 ✓ — third unique quadruple found!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 4,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Quadruple [-1, 0, 0, 1]",
              "indices": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "sum",
                0
              ],
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Record [-1, 0, 0, 1]. Move lo to 4, hi to 3 -> lo > hi, loop ends.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "found",
                3
              ],
              [
                "last_recorded",
                "[-1, 0, 0, 1]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 3: arr[3] (0) == arr[2] (0) -> Duplicate j, skip.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "dimmed": [
              3
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 2: arr[2] = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "j = 3: arr[3] = 0. lo = 4 (1), hi = 5 (2). Sum: 0 + 0 + 1 + 2 = 3 > 0.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              },
              {
                "name": "lo",
                "index": 4,
                "color": "amber",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "purple",
                "position": "top"
              }
            ],
            "highlights": [
              2,
              3,
              4,
              5
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "sum",
                3
              ],
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "sum (3) > target (0) -> hi = hi - 1 = 4. Now lo == hi, loop ends.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 3: arr[3] (0) == arr[2] (0) -> Duplicate i detected! Skip.",
            "dimmed": [
              3
            ],
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "skipped_duplicate_i",
                0
              ],
              [
                "found",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All pairs processed. Return all unique quadruples: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]. Time: O(n³), Space: O(1).",
            "customVisual": {
              "array": [
                -2,
                -1,
                0,
                0,
                1,
                2
              ]
            },
            "best": {
              "label": "Optimal 4Sum: 3 Quadruples",
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
                "quadruples",
                "[[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]"
              ],
              [
                "time",
                "O(n³)"
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
    "id": "trapping-rain-water",
    "patternId": "two-pointers",
    "title": "Trapping Rain Water",
    "subtitle": "Water held between bars of varying heights",
    "kind": "problem",
    "leetcode": {
      "id": 42,
      "slug": "trapping-rain-water",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google",
      "Goldman Sachs"
    ],
    "statement": "Given an elevation map of bar heights, compute how many units of water can be trapped between the bars after rain.",
    "visualType": "bars",
    "initialInput": [
      2,
      0,
      4,
      1,
      0,
      3,
      1
    ],
    "approaches": [
      {
        "label": "Brute force · scan both sides per column",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given h[]",
          "total = 0",
          "for i = 0 to n - 1:",
          "  maxL = max(h[0..i])",
          "  maxR = max(h[i..n-1])",
          "  cap = min(maxL, maxR)",
          "  total += max(0, cap - h[i])",
          "return total"
        ],
        "starterCode": {
          "javascript": "function trap(height) {\n  // Write your solution here\n  \n}",
          "python": "def trap(height: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function trap(height) {\n  let total = 0;\n  const n = height.length;\n  for (let i = 0; i < n; i++) {\n    let maxL = 0, maxR = 0;\n    for (let l = 0; l <= i; l++) maxL = Math.max(maxL, height[l]);\n    for (let r = i; r < n; r++) maxR = Math.max(maxR, height[r]);\n    const cap = Math.min(maxL, maxR);\n    total += Math.max(0, cap - height[i]);\n  }\n  return total;\n}",
          "python": "def trap(height: list[int]) -> int:\n    total = 0\n    n = len(height)\n    for i in range(n):\n        max_l = max(height[:i+1])\n        max_r = max(height[i:])\n        cap = min(max_l, max_r)\n        total += max(0, cap - height[i])\n    return total"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ]
            ],
            "expected": 7,
            "description": "7 units trapped"
          },
          {
            "input": [
              [
                0,
                1,
                0,
                2,
                1,
                0,
                1,
                3,
                2,
                1,
                2,
                1
              ]
            ],
            "expected": 6,
            "description": "6 units trapped"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given elevation map h = [2, 0, 4, 1, 0, 3, 1]. For each column i, water is bounded by min(maxL, maxR) - h[i].",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "total",
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
            "narration": "Initialize total = 0 to accumulate total trapped water.",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 0 (height 2): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "amber"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "h[i]",
                2
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..0]: max left wall maxL = 2. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "amber"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 0
                }
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "leftMax",
                2
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [0..6]: max right wall maxR = 4. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "amber"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 0
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 0,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "leftMax",
                2
              ],
              [
                "rightMax",
                4
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(2, 4) = 2. (Gold line is the water surface — the SHORTER wall sets it.) water[0] = 2 - 2 = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "amber"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 0
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 0,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "leftMax",
                2
              ],
              [
                "rightMax",
                4
              ],
              [
                "cap",
                2
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 0 -> total trapped water is now 0 units.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "amber"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 1 (height 0): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "amber"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "h[i]",
                0
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..1]: max left wall maxL = 2. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "amber"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 1
                }
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "leftMax",
                2
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [1..6]: max right wall maxR = 4. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "amber"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 1
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 1,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "leftMax",
                2
              ],
              [
                "rightMax",
                4
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(2, 4) = 2. (Gold line is the water surface — the SHORTER wall sets it.) water[1] = 2 - 0 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "amber"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "leftMax = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 1
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 1,
                  "endIdx": 6
                }
              ]
            },
            "best": {
              "label": "+2 Water at [1]",
              "indices": [
                1
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "leftMax",
                2
              ],
              [
                "rightMax",
                4
              ],
              [
                "cap",
                2
              ],
              [
                "water[i]",
                2
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 2 -> total trapped water is now 2 units.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "amber"
              }
            ],
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "water[i]",
                2
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 2 (height 4): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "amber"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "h[i]",
                4
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..2]: max left wall maxL = 4. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "amber"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                }
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "leftMax",
                4
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [2..6]: max right wall maxR = 4. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "amber"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 2,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                4
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(4, 4) = 4. (Gold line is the water surface — the SHORTER wall sets it.) water[2] = 4 - 4 = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "amber"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                },
                {
                  "value": 4,
                  "label": "rightMax = 4",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 2,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                4
              ],
              [
                "cap",
                4
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 0 -> total trapped water is now 2 units.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "amber"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 3 (height 1): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "h[i]",
                1
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..3]: max left wall maxL = 4. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 3
                }
              ]
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "leftMax",
                4
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [3..6]: max right wall maxR = 3. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 3
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 3,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(4, 3) = 3. (Gold line is the water surface — the SHORTER wall sets it.) water[3] = 3 - 1 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 3
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 3,
                  "endIdx": 6
                }
              ]
            },
            "best": {
              "label": "+2 Water at [3]",
              "indices": [
                3
              ]
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "cap",
                3
              ],
              [
                "water[i]",
                2
              ],
              [
                "total",
                4
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 2 -> total trapped water is now 4 units.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "amber"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "water[i]",
                2
              ],
              [
                "total",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 4 (height 0): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "h[i]",
                0
              ],
              [
                "total",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..4]: max left wall maxL = 4. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 4
                }
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "leftMax",
                4
              ],
              [
                "total",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [4..6]: max right wall maxR = 3. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 4
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 4,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "total",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(4, 3) = 3. (Gold line is the water surface — the SHORTER wall sets it.) water[4] = 3 - 0 = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 4
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 4,
                  "endIdx": 6
                }
              ]
            },
            "best": {
              "label": "+3 Water at [4]",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "cap",
                3
              ],
              [
                "water[i]",
                3
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 3 -> total trapped water is now 7 units.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "amber"
              }
            ],
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "water[i]",
                3
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 5 (height 3): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "h[i]",
                3
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..5]: max left wall maxL = 4. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 5
                }
              ]
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "leftMax",
                4
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [5..6]: max right wall maxR = 3. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 5
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 5,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(4, 3) = 3. (Gold line is the water surface — the SHORTER wall sets it.) water[5] = 3 - 3 = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 5
                },
                {
                  "value": 3,
                  "label": "rightMax = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 5,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                3
              ],
              [
                "cap",
                3
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 0 -> total trapped water is now 7 units.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "amber"
              }
            ],
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column i = 6 (height 1): examine water capacity.",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "amber"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "h[i]",
                1
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Scan left [0..6]: max left wall maxL = 4. (Shown by red dashed guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "amber"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "leftMax",
                4
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Scan right [6..6]: max right wall maxR = 1. (Shown by gold solid guideline).",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "amber"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 6
                },
                {
                  "value": 1,
                  "label": "rightMax = 1",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 6,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                1
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "cap = min(4, 1) = 1. (Gold line is the water surface — the SHORTER wall sets it.) water[6] = 1 - 1 = 0.",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "amber"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "leftMax = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 6
                },
                {
                  "value": 1,
                  "label": "rightMax = 1",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 6,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "leftMax",
                4
              ],
              [
                "rightMax",
                1
              ],
              [
                "cap",
                1
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "total += 0 -> total trapped water is now 7 units.",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "amber"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "water[i]",
                0
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "All columns evaluated. Return total = 7 units of trapped rain water! Brute force runs in O(n²) time.",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "best": {
              "label": "Total Trapped Water: 7 units",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "total",
                7
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
        "label": "Better · precompute maxL[] and maxR[] arrays",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given h[]",
          "maxL = prefix_max(h)",
          "maxR = suffix_max(h)",
          "total = 0",
          "for i = 0 to n - 1:",
          "  total += min(maxL[i], maxR[i]) - h[i]",
          "return total"
        ],
        "starterCode": {
          "javascript": "function trap(height) {\n  // Write your solution here\n  \n}",
          "python": "def trap(height: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function trap(height) {\n  const n = height.length;\n  if (n === 0) return 0;\n  const maxL = new Array(n);\n  const maxR = new Array(n);\n  maxL[0] = height[0];\n  for (let i = 1; i < n; i++) maxL[i] = Math.max(maxL[i - 1], height[i]);\n  maxR[n - 1] = height[n - 1];\n  for (let i = n - 2; i >= 0; i--) maxR[i] = Math.max(maxR[i + 1], height[i]);\n  let total = 0;\n  for (let i = 0; i < n; i++) total += Math.min(maxL[i], maxR[i]) - height[i];\n  return total;\n}",
          "python": "def trap(height: list[int]) -> int:\n    n = len(height)\n    if n == 0: return 0\n    max_l = [0] * n\n    max_r = [0] * n\n    max_l[0] = height[0]\n    for i in range(1, n): max_l[i] = max(max_l[i-1], height[i])\n    max_r[-1] = height[-1]\n    for i in range(n - 2, -1, -1): max_r[i] = max(max_r[i+1], height[i])\n    return sum(min(max_l[i], max_r[i]) - height[i] for i in range(n))"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ]
            ],
            "expected": 7,
            "description": "7 units trapped"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Precompute maxL and maxR arrays so lookup is O(1) per column.",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "n",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Left-to-right pass: maxL = [2, 2, 4, 4, 4, 4, 4].",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "secondaryArray": {
                "label": "MAX_L[]",
                "array": [
                  2,
                  2,
                  4,
                  4,
                  4,
                  4,
                  4
                ]
              }
            },
            "vars": [
              [
                "maxL",
                "[2, 2, 4, 4, 4, 4, 4]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right-to-left pass: maxR = [4, 4, 4, 3, 3, 3, 1].",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "secondaryArray": {
                "label": "MAX_R[]",
                "array": [
                  4,
                  4,
                  4,
                  3,
                  3,
                  3,
                  1
                ]
              }
            },
            "vars": [
              [
                "maxR",
                "[4, 4, 4, 3, 3, 3, 1]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Single sweep: at each i, water += min(maxL[i], maxR[i]) - h[i]. Total = 7 units.",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "best": {
              "label": "Total Water: 7 units",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "total",
                7
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
      },
      {
        "label": "Optimized · two pointers, O(1) space",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "L = 0, R = n - 1",
          "left_max = 0, right_max = 0, total = 0",
          "while L < R:",
          "  if h[L] <= h[R]:",
          "    if h[L] >= left_max: left_max = h[L]",
          "    else: total += left_max - h[L]",
          "    L++",
          "  else:",
          "    if h[R] >= right_max: right_max = h[R]",
          "    else: total += right_max - h[R]",
          "    R--",
          "return total"
        ],
        "starterCode": {
          "javascript": "function trap(height) {\n  // Write your solution here\n  \n}",
          "python": "def trap(height: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function trap(height) {\n  let l = 0, r = height.length - 1;\n  let leftMax = 0, rightMax = 0, total = 0;\n  while (l < r) {\n    if (height[l] <= height[r]) {\n      if (height[l] >= leftMax) leftMax = height[l];\n      else total += leftMax - height[l];\n      l++;\n    } else {\n      if (height[r] >= rightMax) rightMax = height[r];\n      else total += rightMax - height[r];\n      r--;\n    }\n  }\n  return total;\n}",
          "python": "def trap(height: list[int]) -> int:\n    l, r = 0, len(height) - 1\n    left_max, right_max, total = 0, 0, 0\n    while l < r:\n        if height[l] <= height[r]:\n            if height[l] >= left_max: left_max = height[l]\n            else: total += left_max - height[l]\n            l += 1\n        else:\n            if height[r] >= right_max: right_max = height[r]\n            else: total += right_max - height[r]\n            r -= 1\n    return total"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ]
            ],
            "expected": 7,
            "description": "7 units trapped"
          },
          {
            "input": [
              [
                0,
                1,
                0,
                2,
                1,
                0,
                1,
                3,
                2,
                1,
                2,
                1
              ]
            ],
            "expected": 6,
            "description": "6 units trapped"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize L = 0 (height 2), R = 6 (height 1).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                6
              ],
              [
                "left_max",
                0
              ],
              [
                "right_max",
                0
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop check: L < R (0 < 6). Compare h[L] (2) with h[R] (1).",
            "pointers": [
              {
                "name": "L",
                "index": 0,
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
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "h[L]",
                2
              ],
              [
                "h[R]",
                1
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "h[L] (2) > h[R] (1) -> Bottleneck is on right side! Process right pointer R = 6.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "bottleneck",
                "right"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "h[6] (1) >= right_max (0) -> update right_max = 1.",
            "pointers": [
              {
                "name": "L",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "R",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              6
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 1,
                  "label": "right_max = 1",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 6,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "right_max",
                1
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Decrement R-- to 5 (height 3).",
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
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "R",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare h[L] (2) <= h[R] (3) is TRUE -> Bottleneck is on left side! Process left pointer L = 0.",
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
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "bottleneck",
                "left"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "h[0] (2) >= left_max (0) -> update left_max = 2.",
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
              0
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "left_max = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 0
                },
                {
                  "value": 1,
                  "label": "right_max = 1",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 5,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "left_max",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Advance L++ to 1 (height 0).",
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
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "L",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "h[1] (0) <= h[5] (3) -> Left bottleneck. h[1] (0) < left_max (2).",
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
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                0,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "h[L]",
                0
              ],
              [
                "left_max",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Trap water at column 1: left_max (2) - h[1] (0) = 2 units! total = 2.",
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
            "highlights": [
              1
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 2,
                  "label": "left_max = 2",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 1
                }
              ]
            },
            "best": {
              "label": "+2 Water at [1]",
              "indices": [
                1
              ]
            },
            "vars": [
              [
                "trapped",
                2
              ],
              [
                "total",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Advance L++ to 2 (height 4). left_max updated to 4.",
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
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "left_max = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                }
              ]
            },
            "vars": [
              [
                "L",
                2
              ],
              [
                "left_max",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "h[L] (4) > h[R] (3) -> Bottleneck shifts to right side! Process R = 5.",
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
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "bottleneck",
                "right"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "h[5] (3) >= right_max (1) -> update right_max = 3.",
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
            "highlights": [
              5
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "left_max = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                },
                {
                  "value": 3,
                  "label": "right_max = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 5,
                  "endIdx": 6
                }
              ]
            },
            "vars": [
              [
                "right_max",
                3
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Decrement R-- to 4 (height 0).",
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
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                0,
                0,
                0
              ]
            },
            "vars": [
              [
                "R",
                4
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "h[4] (0) < right_max (3) -> Trap water at column 4: right_max (3) - 0 = 3 units! total = 2 + 3 = 5.",
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
            "highlights": [
              4
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "left_max = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                },
                {
                  "value": 3,
                  "label": "right_max = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 4,
                  "endIdx": 6
                }
              ]
            },
            "best": {
              "label": "+3 Water at [4]",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "trapped",
                3
              ],
              [
                "total",
                5
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Decrement R-- to 3 (height 1).",
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
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                0,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "R",
                3
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "h[3] (1) < right_max (3) -> Trap water at column 3: right_max (3) - 1 = 2 units! total = 5 + 2 = 7.",
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
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ],
              "guidelines": [
                {
                  "value": 4,
                  "label": "left_max = 4",
                  "color": "#f87171",
                  "style": "dashed",
                  "startIdx": 0,
                  "endIdx": 2
                },
                {
                  "value": 3,
                  "label": "right_max = 3",
                  "color": "#eab308",
                  "style": "solid",
                  "startIdx": 3,
                  "endIdx": 6
                }
              ]
            },
            "best": {
              "label": "+2 Water at [3]",
              "indices": [
                3
              ]
            },
            "vars": [
              [
                "trapped",
                2
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Decrement R-- to 2. Pointers meet at index 2 (L == R).",
            "pointers": [
              {
                "name": "L/R",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "vars": [
              [
                "L",
                2
              ],
              [
                "R",
                2
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Loop terminates. Total trapped rain water = 7 units! Solved in O(n) time and O(1) space.",
            "customVisual": {
              "array": [
                2,
                0,
                4,
                1,
                0,
                3,
                1
              ],
              "trappedWater": [
                0,
                2,
                0,
                2,
                3,
                0,
                0
              ]
            },
            "best": {
              "label": "Optimal Trapped Water: 7 units",
              "indices": [
                1,
                3,
                4
              ]
            },
            "vars": [
              [
                "total",
                7
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
    "id": "backspace-string-compare",
    "patternId": "two-pointers",
    "title": "Backspace String Compare",
    "subtitle": "Scan backwards with skip counters",
    "kind": "problem",
    "leetcode": {
      "id": 844,
      "slug": "backspace-string-compare",
      "difficulty": "Easy"
    },
    "companies": [
      "Google",
      "Meta",
      "Amazon"
    ],
    "statement": "Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character. Solve in O(1) extra space.",
    "visualType": "array",
    "initialInput": [
      "a",
      "b",
      "#",
      "c"
    ],
    "approaches": [
      {
        "label": "Brute force · build string with stack",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(n + m)"
        },
        "pseudocode": [
          "function build(str):",
          "  stack = []",
          "  for char in str:",
          "    if char != \"#\": stack.push(char)",
          "    elif stack is not empty: stack.pop()",
          "  return stack.join(\"\")",
          "return build(s) == build(t)"
        ],
        "starterCode": {
          "javascript": "function backspaceCompare(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def backspaceCompare(s: str, t: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function backspaceCompare(s, t) {\n  const build = (str) => {\n    const stack = [];\n    for (const ch of str) {\n      if (ch !== '#') stack.push(ch);\n      else if (stack.length > 0) stack.pop();\n    }\n    return stack.join('');\n  };\n  return build(s) === build(t);\n}",
          "python": "def backspaceCompare(s: str, t: str) -> bool:\n    def build(st):\n        stack = []\n        for ch in st:\n            if ch != '#':\n                stack.append(ch)\n            elif stack:\n                stack.pop()\n        return \"\".join(stack)\n    return build(s) == build(t)"
        },
        "testCases": [
          {
            "input": [
              "ab#c",
              "ad#c"
            ],
            "expected": true,
            "description": "Both evaluate to \"ac\""
          },
          {
            "input": [
              "ab##",
              "c#d#"
            ],
            "expected": true,
            "description": "Both evaluate to \"\""
          },
          {
            "input": [
              "a#c",
              "b"
            ],
            "expected": false,
            "description": "\"c\" != \"b\""
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"ab#c\", t = \"ad#c\". Approach 1: Use stacks to simulate backspaces for each string.",
            "customVisual": {
              "array": [
                "a",
                "b",
                "#",
                "c"
              ],
              "secondaryArray": []
            },
            "vars": [
              [
                "s",
                "ab#c"
              ],
              [
                "t",
                "ad#c"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process s: char \"a\" != \"#\" -> push \"a\" onto stack.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "b",
                "#",
                "c"
              ],
              "secondaryArray": [
                "a"
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stack_s",
                "[\"a\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process s: char \"b\" != \"#\" -> push \"b\" onto stack.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "b",
                "#",
                "c"
              ],
              "secondaryArray": [
                "a",
                "b"
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "stack_s",
                "[\"a\", \"b\"]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Process s: char \"#\" is backspace! Pop \"b\" from stack.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "b",
                "#",
                "c"
              ],
              "secondaryArray": [
                "a"
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "stack_s",
                "[\"a\"]"
              ],
              [
                "popped",
                "b"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process s: char \"c\" != \"#\" -> push \"c\". Final processed s = \"ac\".",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "b",
                "#",
                "c"
              ],
              "secondaryArray": [
                "a",
                "c"
              ]
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "result_s",
                "\"ac\""
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Process t = \"ad#c\": push \"a\", push \"d\", pop \"d\" on \"#\", push \"c\" -> Final processed t = \"ac\".",
            "customVisual": {
              "array": [
                "a",
                "d",
                "#",
                "c"
              ],
              "secondaryArray": [
                "a",
                "c"
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "result_s",
                "\"ac\""
              ],
              [
                "result_t",
                "\"ac\""
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Compare final strings: \"ac\" === \"ac\" -> return true! O(n + m) time & O(n + m) space.",
            "customVisual": {
              "array": [
                "a",
                "c"
              ],
              "secondaryArray": [
                "a",
                "c"
              ]
            },
            "best": {
              "label": "Equal Strings: \"ac\" == \"ac\""
            },
            "vars": [
              [
                "match",
                true
              ],
              [
                "time",
                "O(N+M)"
              ],
              [
                "space",
                "O(N+M)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · two pointers backwards scan",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(1)"
        },
        "pseudocode": [
          "p1 = s.length - 1, p2 = t.length - 1",
          "skip1 = 0, skip2 = 0",
          "while p1 >= 0 or p2 >= 0:",
          "  find next valid char in s (handling #)",
          "  find next valid char in t (handling #)",
          "  if (p1 >= 0) != (p2 >= 0): return false",
          "  if p1 >= 0 and p2 >= 0 and s[p1] != t[p2]:",
          "    return false",
          "  p1--, p2--",
          "return true"
        ],
        "starterCode": {
          "javascript": "function backspaceCompare(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def backspaceCompare(s: str, t: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function backspaceCompare(s, t) {\n  let p1 = s.length - 1, p2 = t.length - 1;\n  let skip1 = 0, skip2 = 0;\n  while (p1 >= 0 || p2 >= 0) {\n    while (p1 >= 0) {\n      if (s[p1] === '#') { skip1++; p1--; }\n      else if (skip1 > 0) { skip1--; p1--; }\n      else break;\n    }\n    while (p2 >= 0) {\n      if (t[p2] === '#') { skip2++; p2--; }\n      else if (skip2 > 0) { skip2--; p2--; }\n      else break;\n    }\n    if ((p1 >= 0) !== (p2 >= 0)) return false;\n    if (p1 >= 0 && p2 >= 0 && s[p1] !== t[p2]) return false;\n    p1--; p2--;\n  }\n  return true;\n}",
          "python": "def backspaceCompare(s: str, t: str) -> bool:\n    p1, p2 = len(s) - 1, len(t) - 1\n    skip1, skip2 = 0, 0\n    while p1 >= 0 or p2 >= 0:\n        while p1 >= 0:\n            if s[p1] == '#': skip1 += 1; p1 -= 1\n            elif skip1 > 0: skip1 -= 1; p1 -= 1\n            else: break\n        while p2 >= 0:\n            if t[p2] == '#': skip2 += 1; p2 -= 1\n            elif skip2 > 0: skip2 -= 1; p2 -= 1\n            else: break\n        if (p1 >= 0) != (p2 >= 0): return False\n        if p1 >= 0 and p2 >= 0 and s[p1] != t[p2]: return False\n        p1 -= 1; p2 -= 1\n    return True"
        },
        "testCases": [
          {
            "input": [
              "ab#c",
              "ad#c"
            ],
            "expected": true,
            "description": "Both evaluate to \"ac\""
          },
          {
            "input": [
              "ab##",
              "c#d#"
            ],
            "expected": true,
            "description": "Both evaluate to \"\""
          },
          {
            "input": [
              "a#c",
              "b"
            ],
            "expected": false,
            "description": "\"c\" != \"b\""
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "s = \"ab#c\", t = \"ad#c\". Initialize p1 = 3 (\"c\"), p2 = 3 (\"c\"), skip1 = 0, skip2 = 0.",
            "vars": [
              [
                "p1",
                3
              ],
              [
                "p2",
                3
              ],
              [
                "s[3]",
                "c"
              ],
              [
                "t[3]",
                "c"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check loop: p1 >= 0 or p2 >= 0 (3 >= 0 is true).",
            "vars": [
              [
                "p1",
                3
              ],
              [
                "p2",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "s[3] is \"c\" -> valid character found at index 3.",
            "vars": [
              [
                "validChar_s",
                "c"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "t[3] is \"c\" -> valid character found at index 3.",
            "vars": [
              [
                "validChar_t",
                "c"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare characters: s[3] (\"c\") == t[3] (\"c\") -> MATCH!",
            "vars": [
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement pointers: p1-- to 2 (\"#\"), p2-- to 2 (\"#\").",
            "vars": [
              [
                "p1",
                2
              ],
              [
                "p2",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "s[2] is \"#\" (backspace) -> skip1++ to 1. Move p1 to 1 (\"b\"). skip1 > 0 -> skip \"b\", skip1 becomes 0. Next valid char in s is at index 0 (\"a\").",
            "vars": [
              [
                "validChar_s",
                "a"
              ],
              [
                "p1",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "t[2] is \"#\" (backspace) -> skip2++ to 1. Move p2 to 1 (\"d\"). skip2 > 0 -> skip \"d\", skip2 becomes 0. Next valid char in t is at index 0 (\"a\").",
            "vars": [
              [
                "validChar_t",
                "a"
              ],
              [
                "p2",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Compare: s[0] (\"a\") == t[0] (\"a\") -> MATCH!",
            "vars": [
              [
                "matches",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Decrement pointers: p1-- to -1, p2-- to -1.",
            "vars": [
              [
                "p1",
                -1
              ],
              [
                "p2",
                -1
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Both strings exhausted with all characters matching. Return true! O(n + m) time & O(1) space.",
            "best": {
              "label": "Optimal O(1) Space: true"
            },
            "vars": [
              [
                "result",
                true
              ],
              [
                "time",
                "O(N+M)"
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
