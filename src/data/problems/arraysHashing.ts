import { Problem } from '../../types';

export const arraysHashingProblems: Problem[] = [
  {
    "id": "overview",
    "patternId": "arrays-hashing",
    "title": "Overview",
    "subtitle": "Trade space for O(1) lookups — sets & maps",
    "kind": "intro",
    "statement": "Hash maps and hash sets allow O(1) average time lookups, insertions, and deletions by mapping keys to bucket indices using a hash function. We trade memory to eliminate nested loops from O(n²) to O(n).",
    "visualType": "array",
    "initialInput": [
      3,
      8,
      2,
      5
    ],
    "approaches": [
      {
        "label": "Concept Walkthrough",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "seen = empty hash map {value: index}",
          "for i from 0 to n - 1:",
          "  diff = target - arr[i]",
          "  if diff in seen: return [seen[diff], i]",
          "  seen[arr[i]] = i"
        ],
        "starterCode": {
          "javascript": "function findComplementPair(arr, target) {\n  // Write your solution here\n  \n}",
          "python": "def findComplementPair(arr: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function findComplementPair(arr, target) {\n  const seen = new Map();\n  for (let i = 0; i < arr.length; i++) {\n    const diff = target - arr[i];\n    if (seen.has(diff)) return [seen.get(diff), i];\n    seen.set(arr[i], i);\n  }\n  return [];\n}",
          "python": "def findComplementPair(arr: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(arr):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                8,
                2,
                5
              ],
              10
            ],
            "expected": [
              1,
              2
            ],
            "description": "8 + 2 = 10"
          },
          {
            "input": [
              [
                1,
                4,
                6
              ],
              10
            ],
            "expected": [
              1,
              2
            ],
            "description": "4 + 6 = 10"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize empty hash map seen = {}. It stores seen values as keys and their indices as values.",
            "vars": [
              [
                "seen",
                "{}"
              ],
              [
                "target",
                10
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop iteration i = 0: inspect element arr[0] = 3.",
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
                3
              ],
              [
                "seen",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate needed complement: diff = target - arr[0] = 10 - 3 = 7.",
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
                "val",
                3
              ],
              [
                "diff",
                7
              ],
              [
                "seen",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check hash map: is 7 in seen? Map is empty (false).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "checkKey",
                7
              ],
              [
                "found",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Insert current element: seen[3] = 0. Map is now {3: 0}.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "seen",
                "{3: 0}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop iteration i = 1: inspect element arr[1] = 8.",
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
                8
              ],
              [
                "seen",
                "{3: 0}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate needed complement: diff = 10 - 8 = 2.",
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
                "val",
                8
              ],
              [
                "diff",
                2
              ],
              [
                "seen",
                "{3: 0}"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "2 is not in seen. Insert seen[8] = 1. Map is now {3: 0, 8: 1}.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "seen",
                "{3: 0, 8: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop iteration i = 2: inspect element arr[2] = 2.",
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
                2
              ],
              [
                "seen",
                "{3: 0, 8: 1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate needed complement: diff = 10 - 2 = 8.",
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
                "val",
                2
              ],
              [
                "diff",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check hash map: is 8 in seen? YES! 8 was stored at index 1! O(1) instant lookup.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "best": {
              "label": "Match [8, 2] = 10",
              "indices": [
                1,
                2
              ]
            },
            "vars": [
              [
                "diff",
                8
              ],
              [
                "seen[8]",
                1
              ],
              [
                "result",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Return indices [1, 2]. Pair found in linear O(n) single pass!",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "best": {
              "label": "Optimal [1, 2]",
              "indices": [
                1,
                2
              ]
            },
            "vars": [
              [
                "result",
                "[1, 2]"
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
    "id": "two-sum",
    "patternId": "arrays-hashing",
    "title": "Two Sum",
    "subtitle": "Unsorted · find a pair adding to target",
    "kind": "problem",
    "leetcode": {
      "id": 1,
      "slug": "two-sum",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Apple",
      "Microsoft",
      "Meta"
    ],
    "statement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    "visualType": "array",
    "initialInput": [
      2,
      7,
      11,
      15
    ],
    "approaches": [
      {
        "label": "Brute force · nested loops",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 1:",
          "  for j from i + 1 to n - 1:",
          "    if nums[i] + nums[j] == target:",
          "      return [i, j]"
        ],
        "starterCode": {
          "javascript": "function twoSum(nums, target) {\n  // Write your solution here\n  \n}",
          "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function twoSum(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [];\n}",
          "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n    return []"
        },
        "testCases": [
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
              0,
              1
            ],
            "description": "Target 9 at [0, 1]"
          },
          {
            "input": [
              [
                3,
                2,
                4
              ],
              6
            ],
            "expected": [
              1,
              2
            ],
            "description": "Target 6 at [1, 2]"
          },
          {
            "input": [
              [
                3,
                3
              ],
              6
            ],
            "expected": [
              0,
              1
            ],
            "description": "Duplicates [0, 1]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [2, 7, 11, 15], target = 9. Approach 1: Check all pairs (i, j) with nested loops.",
            "vars": [
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Outer loop: i = 0 (value nums[0] = 2).",
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
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Inner loop: j = 1 (value nums[1] = 7).",
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
                "nums[i]",
                2
              ],
              [
                "nums[j]",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute sum: nums[0] + nums[1] = 2 + 7 = 9. Compare with target = 9.",
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
                9
              ],
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Condition sum (9) == target (9) is TRUE! Complement pair found.",
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
              "label": "Pair: [0, 1]",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "nums[i]",
                2
              ],
              [
                "nums[j]",
                7
              ],
              [
                "result",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Return [0, 1]. Brute force completes in O(n²) worst-case time & O(1) space.",
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
              "label": "Result [0, 1]",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "result",
                "[0, 1]"
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
        "label": "Optimized · one-pass hash map",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "seen = empty hash map {value: index}",
          "for i from 0 to n - 1:",
          "  diff = target - nums[i]",
          "  if diff in seen: return [seen[diff], i]",
          "  seen[nums[i]] = i"
        ],
        "starterCode": {
          "javascript": "function twoSum(nums, target) {\n  // Write your solution here\n  \n}",
          "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function twoSum(nums, target) {\n  const map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    map.set(nums[i], i);\n  }\n  return [];\n}",
          "python": "def twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []"
        },
        "testCases": [
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
              0,
              1
            ],
            "description": "Target 9 at [0, 1]"
          },
          {
            "input": [
              [
                3,
                2,
                4
              ],
              6
            ],
            "expected": [
              1,
              2
            ],
            "description": "Target 6 at [1, 2]"
          },
          {
            "input": [
              [
                3,
                3
              ],
              6
            ],
            "expected": [
              0,
              1
            ],
            "description": "Duplicates [0, 1]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize empty hash map seen = {}. Stores {element_value: index} for O(1) complement lookup.",
            "vars": [
              [
                "target",
                9
              ],
              [
                "seen",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop iteration i = 0: inspect element nums[0] = 2.",
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
                "seen",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate needed complement: diff = target - nums[0] = 9 - 2 = 7.",
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
                "val",
                2
              ],
              [
                "diff",
                7
              ],
              [
                "seen",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check hash map: is 7 in seen? Hash map is empty -> condition is false.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "diff",
                7
              ],
              [
                "in_seen",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Record current element: store seen[2] = 0. Map is now {2: 0}.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "seen",
                "{2: 0}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop iteration i = 1: inspect element nums[1] = 7.",
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
                7
              ],
              [
                "seen",
                "{2: 0}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate needed complement: diff = target - nums[1] = 9 - 7 = 2.",
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
                "val",
                7
              ],
              [
                "diff",
                2
              ],
              [
                "seen",
                "{2: 0}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check hash map: is 2 in seen? YES! 2 is found at index 0 (seen[2] = 0). Condition is TRUE!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "best": {
              "label": "Match [0, 1]",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "diff",
                2
              ],
              [
                "seen[2]",
                0
              ],
              [
                "i",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Return indices [seen[2], 1] = [0, 1]. Solved in linear O(n) time & O(n) space!",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "best": {
              "label": "Optimal Solution [0, 1]",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "result",
                "[0, 1]"
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
    "id": "contains-duplicate",
    "patternId": "arrays-hashing",
    "title": "Contains Duplicate",
    "subtitle": "Any value appear twice?",
    "kind": "problem",
    "leetcode": {
      "id": 217,
      "slug": "contains-duplicate",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Apple",
      "Adobe",
      "Microsoft"
    ],
    "statement": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "visualType": "array",
    "initialInput": [
      1,
      2,
      3,
      1
    ],
    "approaches": [
      {
        "label": "Brute force · nested loops",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 1:",
          "  for j from i + 1 to n - 1:",
          "    if nums[i] == nums[j]: return true",
          "return false"
        ],
        "starterCode": {
          "javascript": "function containsDuplicate(nums) {\n  // Write your solution here\n  \n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function containsDuplicate(nums) {\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] === nums[j]) return true;\n    }\n  }\n  return false;\n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] == nums[j]: return True\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                1
              ]
            ],
            "expected": true,
            "description": "Duplicate 1"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": false,
            "description": "All distinct"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 2, 3, 1]. Approach 1: Check every pair (i, j) with nested loops.",
            "vars": [
              [
                "n",
                4
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Outer loop: i = 0 (value nums[0] = 1).",
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
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Inner loop: compare with j = 1 (val 2) & j = 2 (val 3). No match.",
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
                "nums[i]",
                1
              ],
              [
                "nums[j]",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Inner loop: compare with j = 3 (val 1).",
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
                "nums[i]",
                1
              ],
              [
                "nums[j]",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "nums[0] (1) == nums[3] (1) is TRUE! Duplicate found.",
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
              "label": "Duplicate 1 found",
              "indices": [
                0,
                3
              ]
            },
            "vars": [
              [
                "duplicate",
                1
              ],
              [
                "result",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Return true in O(n²) time & O(1) space.",
            "best": {
              "label": "Result: true",
              "indices": [
                0,
                3
              ]
            },
            "vars": [
              [
                "result",
                true
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
        "label": "Better · sort and scan",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "nums.sort()",
          "for i from 0 to n - 2:",
          "  if nums[i] == nums[i + 1]: return true",
          "return false"
        ],
        "starterCode": {
          "javascript": "function containsDuplicate(nums) {\n  // Write your solution here\n  \n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function containsDuplicate(nums) {\n  nums.sort((a, b) => a - b);\n  for (let i = 0; i < nums.length - 1; i++) {\n    if (nums[i] === nums[i + 1]) return true;\n  }\n  return false;\n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    nums.sort()\n    for i in range(len(nums) - 1):\n        if nums[i] == nums[i + 1]: return True\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                1
              ]
            ],
            "expected": true,
            "description": "Duplicate 1"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": false,
            "description": "All distinct"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Original array [1, 2, 3, 1]. Sort array first in O(n log n) time.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                1
              ]
            },
            "vars": [
              [
                "array",
                "[1, 2, 3, 1]"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Array after sorting: [1, 1, 2, 3]. Duplicate values are now positioned next to each other.",
            "customVisual": {
              "array": [
                1,
                1,
                2,
                3
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
                "sorted",
                "[1, 1, 2, 3]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Scan adjacent pairs: i = 0. Compare nums[0] (1) and nums[1] (1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "i+1",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "nums[0]",
                1
              ],
              [
                "nums[1]",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "nums[0] == nums[1] (1 == 1) is TRUE! Adjacent duplicate detected.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "i+1",
                "index": 1,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                3
              ]
            },
            "highlights": [
              0,
              1
            ],
            "best": {
              "label": "Duplicate 1",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "duplicate",
                1
              ],
              [
                "result",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Return true! Completed in O(n log n) time & O(1) auxiliary space.",
            "best": {
              "label": "Result: true",
              "indices": [
                0,
                1
              ]
            },
            "vars": [
              [
                "result",
                true
              ],
              [
                "time",
                "O(n log n)"
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
        "label": "Optimized · hash set",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "seen = empty hash set",
          "for num in nums:",
          "  if num in seen: return true",
          "  seen.add(num)",
          "return false"
        ],
        "starterCode": {
          "javascript": "function containsDuplicate(nums) {\n  // Write your solution here\n  \n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function containsDuplicate(nums) {\n  const seen = new Set();\n  for (const num of nums) {\n    if (seen.has(num)) return true;\n    seen.add(num);\n  }\n  return false;\n}",
          "python": "def containsDuplicate(nums: list[int]) -> bool:\n    seen = set()\n    for num in nums:\n        if num in seen: return True\n        seen.add(num)\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                1
              ]
            ],
            "expected": true,
            "description": "Duplicate 1"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": false,
            "description": "All distinct"
          },
          {
            "input": [
              [
                1,
                1,
                1,
                3,
                3,
                4,
                3,
                2,
                4,
                2
              ]
            ],
            "expected": true,
            "description": "Multiple duplicates"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize empty hash set seen = set(). Enables O(1) membership checks.",
            "vars": [
              [
                "seen",
                "set()"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop i = 0: inspect element nums[0] = 1.",
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
                "num",
                1
              ],
              [
                "seen",
                "set()"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check hash set: is 1 in seen? (false).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "1 in seen",
                false
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Add 1 to seen: seen = {1}.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "seen",
                "{1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop i = 1 (val 2) & i = 2 (val 3): neither in seen. Insert both into seen = {1, 2, 3}.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "seen",
                "{1, 2, 3}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Loop i = 3: inspect element nums[3] = 1.",
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
                "num",
                1
              ],
              [
                "seen",
                "{1, 2, 3}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check hash set: is 1 in seen? YES! 1 already exists in seen set. Duplicate detected!",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              3
            ],
            "best": {
              "label": "Duplicate 1 found (true)",
              "indices": [
                0,
                3
              ]
            },
            "vars": [
              [
                "duplicate",
                1
              ],
              [
                "in_seen",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Return true. Solved in linear O(n) time & O(n) space!",
            "best": {
              "label": "Optimal Result: true",
              "indices": [
                0,
                3
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
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "valid-anagram",
    "patternId": "arrays-hashing",
    "title": "Valid Anagram",
    "subtitle": "Same letters, same counts?",
    "kind": "problem",
    "leetcode": {
      "id": 242,
      "slug": "valid-anagram",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Uber",
      "Bloomberg"
    ],
    "statement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word formed by rearranging letters.",
    "visualType": "array",
    "initialInput": [
      "a",
      "n",
      "a",
      "g",
      "r",
      "a",
      "m"
    ],
    "approaches": [
      {
        "label": "Brute force · sort and compare",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "if s.length != t.length: return false",
          "sorted_s = s.split(\"\").sort().join(\"\")",
          "sorted_t = t.split(\"\").sort().join(\"\")",
          "return sorted_s == sorted_t"
        ],
        "starterCode": {
          "javascript": "function isAnagram(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def isAnagram(s: str, t: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  return s.split('').sort().join('') === t.split('').sort().join('');\n}",
          "python": "def isAnagram(s: str, t: str) -> bool:\n    return sorted(s) == sorted(t)"
        },
        "testCases": [
          {
            "input": [
              "anagram",
              "nagaram"
            ],
            "expected": true,
            "description": "Valid anagram"
          },
          {
            "input": [
              "rat",
              "car"
            ],
            "expected": false,
            "description": "Different characters"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \"anagram\", t = \"nagaram\". Check if string lengths match: 7 == 7 (true).",
            "vars": [
              [
                "len(s)",
                7
              ],
              [
                "len(t)",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Sort s: \"anagram\" -> [\"a\", \"a\", \"a\", \"g\", \"m\", \"n\", \"r\"].",
            "customVisual": {
              "array": [
                "a",
                "a",
                "a",
                "g",
                "m",
                "n",
                "r"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
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
                "sorted_s",
                "\"aaagmnr\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort t: \"nagaram\" -> [\"a\", \"a\", \"a\", \"g\", \"m\", \"n\", \"r\"].",
            "customVisual": {
              "array": [
                "a",
                "a",
                "a",
                "g",
                "m",
                "n",
                "r"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "a",
                  "a",
                  "a",
                  "g",
                  "m",
                  "n",
                  "r"
                ]
              }
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
                "sorted_t",
                "\"aaagmnr\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare sorted strings: \"aaagmnr\" == \"aaagmnr\" -> all characters match identically.",
            "customVisual": {
              "array": [
                "a",
                "a",
                "a",
                "g",
                "m",
                "n",
                "r"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "a",
                  "a",
                  "a",
                  "g",
                  "m",
                  "n",
                  "r"
                ]
              }
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
            "secondaryHighlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6
            ],
            "best": {
              "label": "Valid Anagram (true)"
            },
            "vars": [
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Return true. Solved in O(n log n) time & O(n) space.",
            "best": {
              "label": "Result: true"
            },
            "vars": [
              [
                "result",
                true
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
      },
      {
        "label": "Optimized · count map",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "if len(s) != len(t): return false",
          "count = {}; for c in s: count[c]++",
          "for c in t:   count[c]--",
          "              if count[c] < 0: return false",
          "return true"
        ],
        "starterCode": {
          "javascript": "function isAnagram(s, t) {\n  // Write your solution here\n  \n}",
          "python": "def isAnagram(s: str, t: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const count = {};\n  for (const c of s) count[c] = (count[c] || 0) + 1;\n  for (const c of t) {\n    if (!count[c]) return false;\n    count[c]--;\n  }\n  return true;\n}",
          "python": "def isAnagram(s: str, t: str) -> bool:\n    if len(s) != len(t): return False\n    count = {}\n    for c in s: count[c] = count.get(c, 0) + 1\n    for c in t:\n        if count.get(c, 0) == 0: return False\n        count[c] -= 1\n    return True"
        },
        "testCases": [
          {
            "input": [
              "anagram",
              "nagaram"
            ],
            "expected": true,
            "description": "Valid anagram"
          },
          {
            "input": [
              "rat",
              "car"
            ],
            "expected": false,
            "description": "Different characters"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Line 1: Check lengths: len(s) = 7, len(t) = 7. Both lengths match.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "vars": [
              [
                "len(s)",
                7
              ],
              [
                "len(t)",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: a -> 1. Build a histogram of every letter in s.",
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
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
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
                "count",
                "{a: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: n -> 1. Build a histogram of every letter in s.",
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
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "count",
                "{a: 1, n: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: a -> 2. Build a histogram of every letter in s.",
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
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "count",
                "{a: 2, n: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: g -> 1. Build a histogram of every letter in s.",
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
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "highlights": [
              3
            ],
            "vars": [
              [
                "i",
                3
              ],
              [
                "count",
                "{a: 2, n: 1, g: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: r -> 1. Build a histogram of every letter in s.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
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
                "count",
                "{a: 2, n: 1, g: 1, r: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: a -> 3. Build a histogram of every letter in s.",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "highlights": [
              5
            ],
            "vars": [
              [
                "i",
                5
              ],
              [
                "count",
                "{a: 3, n: 1, g: 1, r: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Tally s: m -> 1. Histogram for s complete!",
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
            },
            "highlights": [
              6
            ],
            "vars": [
              [
                "i",
                6
              ],
              [
                "count",
                "{a: 3, n: 1, g: 1, r: 1, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[0] (\"n\"): decrement count[\"n\"] from 1 -> 0.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  0
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 0,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                0
              ],
              [
                "char",
                "n"
              ],
              [
                "count",
                "{a: 3, n: 0, g: 1, r: 1, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Check count[\"n\"] (0) < 0 is false (valid).",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "count[\"n\"]",
                0
              ],
              [
                "valid",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[1] (\"a\"): decrement count[\"a\"] from 3 -> 2.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  1
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 1,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                1
              ],
              [
                "char",
                "a"
              ],
              [
                "count",
                "{a: 2, n: 0, g: 1, r: 1, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Check count[\"a\"] (2) < 0 is false (valid).",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "count[\"a\"]",
                2
              ],
              [
                "valid",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[2] (\"g\"): decrement count[\"g\"] from 1 -> 0.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  2
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 2,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                2
              ],
              [
                "char",
                "g"
              ],
              [
                "count",
                "{a: 2, n: 0, g: 0, r: 1, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Check count[\"g\"] (0) < 0 is false (valid).",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "count[\"g\"]",
                0
              ],
              [
                "valid",
                true
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[3] (\"a\"): decrement count[\"a\"] from 2 -> 1.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  3
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 3,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                3
              ],
              [
                "char",
                "a"
              ],
              [
                "count",
                "{a: 1, n: 0, g: 0, r: 1, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[4] (\"r\"): decrement count[\"r\"] from 1 -> 0.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  4
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 4,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                4
              ],
              [
                "char",
                "r"
              ],
              [
                "count",
                "{a: 1, n: 0, g: 0, r: 0, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[5] (\"a\"): decrement count[\"a\"] from 1 -> 0.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  5
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 5,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                5
              ],
              [
                "char",
                "a"
              ],
              [
                "count",
                "{a: 0, n: 0, g: 0, r: 0, m: 1}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Consume t[6] (\"m\"): decrement count[\"m\"] from 1 -> 0.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  6
                ],
                "pointers": [
                  {
                    "name": "j",
                    "index": 6,
                    "color": "accent2"
                  }
                ]
              }
            },
            "vars": [
              [
                "j",
                6
              ],
              [
                "char",
                "m"
              ],
              [
                "count",
                "{a: 0, n: 0, g: 0, r: 0, m: 0}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Check count[\"m\"] (0) < 0 is false. All characters accounted for with zero deficits.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  6
                ]
              }
            },
            "vars": [
              [
                "counts",
                "all 0s"
              ],
              [
                "deficit",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Loop complete. All letters in s were matched and cancelled by t.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ],
                "highlights": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
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
              5,
              6
            ],
            "best": {
              "label": "Valid Anagram (true)",
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
                true
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return true! Valid anagram confirmed in O(n) time and O(1) auxiliary space.",
            "customVisual": {
              "array": [
                "a",
                "n",
                "a",
                "g",
                "r",
                "a",
                "m"
              ],
              "secondaryArray": {
                "label": "T = \"NAGARAM\"",
                "array": [
                  "n",
                  "a",
                  "g",
                  "a",
                  "r",
                  "a",
                  "m"
                ]
              }
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
            "best": {
              "label": "Valid Anagram: true",
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
    "id": "group-anagrams",
    "patternId": "arrays-hashing",
    "title": "Group Anagrams",
    "subtitle": "Bucket words by their sorted-letter signature",
    "kind": "problem",
    "leetcode": {
      "id": 49,
      "slug": "group-anagrams",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Facebook",
      "Affirm"
    ],
    "statement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "visualType": "array",
    "initialInput": [
      "eat",
      "tea",
      "tan",
      "ate",
      "nat",
      "bat"
    ],
    "approaches": [
      {
        "label": "Brute force · pairwise",
        "complexity": {
          "time": "O(n² · k)",
          "space": "O(n · k)"
        },
        "pseudocode": [
          "groups = []",
          "visited = set()",
          "for i from 0 to n - 1:",
          "  if i in visited: continue",
          "  currentGroup = [words[i]]",
          "  for j from i + 1 to n - 1:",
          "    if isAnagram(words[i], words[j]):",
          "      currentGroup.append(words[j])",
          "      visited.add(j)",
          "  groups.append(currentGroup)",
          "return groups"
        ],
        "starterCode": {
          "javascript": "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function groupAnagrams(strs) {\n  const isAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');\n  const visited = new Set();\n  const groups = [];\n  for (let i = 0; i < strs.length; i++) {\n    if (visited.has(i)) continue;\n    const group = [strs[i]];\n    visited.add(i);\n    for (let j = i + 1; j < strs.length; j++) {\n      if (!visited.has(j) && isAnagram(strs[i], strs[j])) {\n        group.push(strs[j]);\n        visited.add(j);\n      }\n    }\n    groups.push(group);\n  }\n  return groups;\n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    def isAnagram(s, t): return sorted(s) == sorted(t)\n    visited = set()\n    groups = []\n    for i in range(len(strs)):\n        if i in visited: continue\n        group = [strs[i]]\n        visited.add(i)\n        for j in range(i + 1, len(strs)):\n            if j not in visited and isAnagram(strs[i], strs[j]):\n                group.append(strs[j])\n                visited.add(j)\n        groups.append(group)\n    return groups"
        },
        "testCases": [
          {
            "input": [
              [
                "eat",
                "tea",
                "tan",
                "ate",
                "nat",
                "bat"
              ]
            ],
            "expected": [
              [
                "eat",
                "tea",
                "ate"
              ],
              [
                "tan",
                "nat"
              ],
              [
                "bat"
              ]
            ],
            "description": "3 grouped buckets"
          },
          {
            "input": [
              [
                ""
              ]
            ],
            "expected": [
              [
                ""
              ]
            ],
            "description": "Empty string"
          },
          {
            "input": [
              [
                "a"
              ]
            ],
            "expected": [
              [
                "a"
              ]
            ],
            "description": "Single character"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given words = [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]. Initialize visited set and result groups.",
            "vars": [
              [
                "visited",
                "set()"
              ],
              [
                "groups",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 0 (\"eat\"): start new group with \"eat\". Check subsequent words.",
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
                "currentGroup",
                "[\"eat\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare \"eat\" with \"tea\": isAnagram(\"eat\", \"tea\") -> TRUE! Add \"tea\" to group.",
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
                "currentGroup",
                "[\"eat\", \"tea\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare \"eat\" with \"tan\": isAnagram(\"eat\", \"tan\") -> FALSE.",
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
                "isAnagram",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare \"eat\" with \"ate\": isAnagram(\"eat\", \"ate\") -> TRUE! Add \"ate\" to group.",
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
              1,
              3
            ],
            "vars": [
              [
                "currentGroup",
                "[\"eat\", \"tea\", \"ate\"]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Group 1 complete: [\"eat\", \"tea\", \"ate\"]. Mark indices 0, 1, 3 as visited.",
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "groups[0]",
                "[\"eat\", \"tea\", \"ate\"]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 2 (\"tan\"): unvisited. Start new group with \"tan\".",
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
                "currentGroup",
                "[\"tan\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compare \"tan\" with \"nat\": isAnagram(\"tan\", \"nat\") -> TRUE! Add \"nat\".",
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
                "currentGroup",
                "[\"tan\", \"nat\"]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Group 2 complete: [\"tan\", \"nat\"]. Mark indices 2, 4 as visited.",
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "groups[1]",
                "[\"tan\", \"nat\"]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 5 (\"bat\"): unvisited. Forms Group 3: [\"bat\"].",
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
                "groups[2]",
                "[\"bat\"]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return all 3 groups: [[\"eat\", \"tea\", \"ate\"], [\"tan\", \"nat\"], [\"bat\"]]. O(n² · k) time.",
            "best": {
              "label": "3 Anagram Groups",
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
                "result",
                "[[\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], [\"bat\"]]"
              ],
              [
                "time",
                "O(n² · k)"
              ],
              [
                "space",
                "O(n · k)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · signature map",
        "complexity": {
          "time": "O(n · k log k)",
          "space": "O(n · k)"
        },
        "pseudocode": [
          "given words; groups = {}  // signature -> list of words",
          "for i = 0 to n - 1:",
          "  sig = sorted(words[i])",
          "  groups[sig].append(words[i])",
          "return groups.values()"
        ],
        "starterCode": {
          "javascript": "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const key = s.split('').sort().join('');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    from collections import defaultdict\n    groups = defaultdict(list)\n    for s in strs:\n        groups[''.join(sorted(s))].append(s)\n    return list(groups.values())"
        },
        "testCases": [
          {
            "input": [
              [
                "eat",
                "tea",
                "tan",
                "ate",
                "nat",
                "bat"
              ]
            ],
            "expected": [
              [
                "eat",
                "tea",
                "ate"
              ],
              [
                "tan",
                "nat"
              ],
              [
                "bat"
              ]
            ],
            "description": "3 grouped buckets"
          },
          {
            "input": [
              [
                ""
              ]
            ],
            "expected": [
              [
                ""
              ]
            ],
            "description": "Empty string"
          },
          {
            "input": [
              [
                "a"
              ]
            ],
            "expected": [
              [
                "a"
              ]
            ],
            "description": "Single character"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Line 1: Initialize empty hash map groups = {}. Key will be sorted letter signature -> list of words.",
            "vars": [
              [
                "groups",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 0: inspect words[0] = \"eat\".",
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
                "word",
                "\"eat\""
              ],
              [
                "groups",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 0: word \"eat\". Sort its letters -> signature \"aet\".",
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
                "word",
                "\"eat\""
              ],
              [
                "sig",
                "\"aet\""
              ],
              [
                "groups",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: \"aet\" is a new signature. Create bucket groups[\"aet\"] = [\"eat\"].",
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
                "sig",
                "\"aet\""
              ],
              [
                "groups",
                "{aet: [\"eat\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 1: inspect words[1] = \"tea\".",
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
                "word",
                "\"tea\""
              ],
              [
                "groups",
                "{aet: [\"eat\"]}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 1: word \"tea\". Sort its letters -> signature \"aet\".",
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
                "word",
                "\"tea\""
              ],
              [
                "sig",
                "\"aet\""
              ],
              [
                "groups",
                "{aet: [\"eat\"]}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Signature \"aet\" already exists in groups! Append \"tea\" -> groups[\"aet\"] = [\"eat\", \"tea\"].",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "sig",
                "\"aet\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 2: inspect words[2] = \"tan\".",
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
                "word",
                "\"tan\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\"]}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 2: word \"tan\". Sort its letters -> signature \"ant\".",
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
                "word",
                "\"tan\""
              ],
              [
                "sig",
                "\"ant\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\"]}"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: \"ant\" is a new signature. Create bucket groups[\"ant\"] = [\"tan\"].",
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
                "sig",
                "\"ant\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\"], ant: [\"tan\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 3: inspect words[3] = \"ate\".",
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
                "word",
                "\"ate\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 3: word \"ate\". Sort its letters -> signature \"aet\".",
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
                "word",
                "\"ate\""
              ],
              [
                "sig",
                "\"aet\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Signature \"aet\" exists! Append \"ate\" -> groups[\"aet\"] = [\"eat\", \"tea\", \"ate\"].",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
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
                3
              ],
              [
                "sig",
                "\"aet\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\", \"ate\"], ant: [\"tan\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 4: inspect words[4] = \"nat\".",
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
                "word",
                "\"nat\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 4: word \"nat\". Sort its letters -> signature \"ant\".",
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
                "word",
                "\"nat\""
              ],
              [
                "sig",
                "\"ant\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Signature \"ant\" exists! Append \"nat\" -> groups[\"ant\"] = [\"tan\", \"nat\"].",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "i",
                4
              ],
              [
                "sig",
                "\"ant\""
              ],
              [
                "groups",
                "{aet: [\"eat\", \"tea\", \"ate\"], ant: [\"tan\", \"nat\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop i = 5: inspect words[5] = \"bat\".",
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
                "word",
                "\"bat\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: i = 5: word \"bat\". Sort its letters -> signature \"abt\".",
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
                "word",
                "\"bat\""
              ],
              [
                "sig",
                "\"abt\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: \"abt\" is a new signature. Create bucket groups[\"abt\"] = [\"bat\"].",
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
                "sig",
                "\"abt\""
              ],
              [
                "groups",
                "{aet: [...], ant: [...], abt: [\"bat\"]}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: Loop condition i = 6 < n (6) is false. All words have been categorized.",
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
                "i",
                6
              ],
              [
                "finished",
                true
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Group 1: signature \"aet\" -> [\"eat\", \"tea\", \"ate\"].",
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "group_1",
                "[\"eat\", \"tea\", \"ate\"]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Group 2: signature \"ant\" -> [\"tan\", \"nat\"].",
            "highlights": [
              2,
              4
            ],
            "vars": [
              [
                "group_2",
                "[\"tan\", \"nat\"]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Group 3: signature \"abt\" -> [\"bat\"].",
            "highlights": [
              5
            ],
            "vars": [
              [
                "group_3",
                "[\"bat\"]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Collect values from hash map: [[\"eat\", \"tea\", \"ate\"], [\"tan\", \"nat\"], [\"bat\"]].",
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "best": {
              "label": "3 Anagram Groups Formed",
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
                "groupsCount",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return groups.values()! Solved in O(n · k log k) time and O(n · k) space.",
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "best": {
              "label": "Optimal Result: 3 Groups",
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
                "result",
                "[[\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], [\"bat\"]]"
              ],
              [
                "time",
                "O(N · K log K)"
              ],
              [
                "space",
                "O(N · K)"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "All anagram groups categorized into canonical buckets.",
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "best": {
              "label": "Categorized 3 Groups",
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
                "groupsCount",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Completed successfully: all anagram groups partitioned in a single pass!",
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5
            ],
            "best": {
              "label": "Completed ✓",
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
                "status",
                "done"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · 26-count frequency tuple (linear O(n · k))",
        "complexity": {
          "time": "O(n · k)",
          "space": "O(n · k)"
        },
        "pseudocode": [
          "groups = {}",
          "for word in words:",
          "  count = array of 26 zeros",
          "  for char in word: count[char - \"a\"]++",
          "  key = tuple(count)",
          "  groups[key].append(word)",
          "return list(groups.values())"
        ],
        "starterCode": {
          "javascript": "function groupAnagrams(strs) {\n  // Write your solution here\n  \n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function groupAnagrams(strs) {\n  const map = new Map();\n  for (const s of strs) {\n    const count = new Array(26).fill(0);\n    for (let i = 0; i < s.length; i++) count[s.charCodeAt(i) - 97]++;\n    const key = count.join('#');\n    if (!map.has(key)) map.set(key, []);\n    map.get(key).push(s);\n  }\n  return Array.from(map.values());\n}",
          "python": "def groupAnagrams(strs: list[str]) -> list[list[str]]:\n    from collections import defaultdict\n    groups = defaultdict(list)\n    for s in strs:\n        count = [0] * 26\n        for c in s:\n            count[ord(c) - ord('a')] += 1\n        groups[tuple(count)].append(s)\n    return list(groups.values())"
        },
        "testCases": [
          {
            "input": [
              [
                "eat",
                "tea",
                "tan",
                "ate",
                "nat",
                "bat"
              ]
            ],
            "expected": [
              [
                "eat",
                "tea",
                "ate"
              ],
              [
                "tan",
                "nat"
              ],
              [
                "bat"
              ]
            ],
            "description": "3 grouped buckets"
          },
          {
            "input": [
              [
                ""
              ]
            ],
            "expected": [
              [
                ""
              ]
            ],
            "description": "Empty string"
          },
          {
            "input": [
              [
                "a"
              ]
            ],
            "expected": [
              [
                "a"
              ]
            ],
            "description": "Single character"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Optimal Approach: Instead of sorting words in O(k log k), build a 26-character frequency count tuple in linear O(k) time.",
            "vars": [
              [
                "groups",
                "{}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Process \"eat\": count frequency tuple [1,0,0,0,1,0,...] (1 \"a\", 1 \"e\", 1 \"t\") -> groups[tuple].push(\"eat\").",
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
                "countTuple(\"eat\")",
                "(1,0,0,0,1,...,1,...)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Process \"tea\" and \"ate\": generate exact same 26-count tuple! Both bucketed into groups[tuple].",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "bucket",
                "[\"eat\", \"tea\", \"ate\"]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Process \"tan\" and \"nat\": 26-count tuple matches (1 \"a\", 1 \"n\", 1 \"t\") -> bucketed into [\"tan\", \"nat\"].",
            "pointers": [
              {
                "name": "i",
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
                "bucket",
                "[\"tan\", \"nat\"]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Process \"bat\": tuple (1 \"a\", 1 \"b\", 1 \"t\") -> bucketed into [\"bat\"].",
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "purple"
              }
            ],
            "highlights": [
              5
            ],
            "vars": [
              [
                "bucket",
                "[\"bat\"]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Strictly linear O(n · k) time & O(n · k) space! Return list of grouped anagram buckets.",
            "best": {
              "label": "Optimal O(N·K): 3 Groups",
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
                "result",
                "[[\"eat\",\"tea\",\"ate\"], [\"tan\",\"nat\"], [\"bat\"]]"
              ],
              [
                "time",
                "O(N · K)"
              ],
              [
                "space",
                "O(N · K)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "top-k-frequent",
    "patternId": "arrays-hashing",
    "title": "Top K Frequent Elements",
    "subtitle": "Frequency map · return the k most common values",
    "kind": "problem",
    "leetcode": {
      "id": 347,
      "slug": "top-k-frequent-elements",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Bloomberg",
      "Google"
    ],
    "statement": "Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
    "visualType": "array",
    "initialInput": [
      1,
      1,
      1,
      2,
      2,
      3
    ],
    "approaches": [
      {
        "label": "Brute force · count and sort",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "counts = frequency map of nums",
          "entries = list of [num, count]",
          "sort entries by count descending",
          "return first k keys"
        ],
        "starterCode": {
          "javascript": "function topKFrequent(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function topKFrequent(nums, k) {\n  const count = new Map();\n  for (let n of nums) count.set(n, (count.get(n) || 0) + 1);\n  return Array.from(count.entries())\n    .sort((a, b) => b[1] - a[1])\n    .slice(0, k)\n    .map(e => e[0]);\n}",
          "python": "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    from collections import Counter\n    count = Counter(nums)\n    return [item for item, _ in count.most_common(k)]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                1,
                1,
                2,
                2,
                3
              ],
              2
            ],
            "expected": [
              1,
              2
            ],
            "description": "Top 2 frequent"
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
            "narration": "Given nums = [1, 1, 1, 2, 2, 3], k = 2. Approach 1: Count frequencies with map then sort entries.",
            "vars": [
              [
                "k",
                2
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Count frequencies: 1 appears 3 times, 2 appears 2 times, 3 appears 1 time.",
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
                "counts",
                "{1: 3, 2: 2, 3: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Convert map entries to list: [[1, 3], [2, 2], [3, 1]].",
            "vars": [
              [
                "entries",
                "[[1, 3], [2, 2], [3, 1]]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort entries by frequency descending: [1 (freq 3), 2 (freq 2), 3 (freq 1)].",
            "vars": [
              [
                "sorted",
                "[[1, 3], [2, 2], [3, 1]]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Extract top k = 2 keys: [1, 2].",
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Top 2: [1, 2]",
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
                "result",
                "[1, 2]"
              ],
              [
                "time",
                "O(n log n)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · bucket sort by frequency",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "count = frequency map of nums",
          "buckets = array of empty lists of size n + 1",
          "for num, freq in count: buckets[freq].append(num)",
          "res = []",
          "for i from n down to 1: add elements from buckets[i] until res.length == k",
          "return res"
        ],
        "starterCode": {
          "javascript": "function topKFrequent(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function topKFrequent(nums, k) {\n  const count = new Map();\n  for (const n of nums) count.set(n, (count.get(n) || 0) + 1);\n  const buckets = Array.from({ length: nums.length + 1 }, () => []);\n  for (const [num, freq] of count.entries()) buckets[freq].push(num);\n  const res = [];\n  for (let i = buckets.length - 1; i >= 0 && res.length < k; i--) {\n    for (const num of buckets[i]) {\n      res.push(num);\n      if (res.length === k) break;\n    }\n  }\n  return res;\n}",
          "python": "def topKFrequent(nums: list[int], k: int) -> list[int]:\n    count = {}\n    for n in nums: count[n] = count.get(n, 0) + 1\n    buckets = [[] for _ in range(len(nums) + 1)]\n    for n, freq in count.items():\n        buckets[freq].append(n)\n    res = []\n    for i in range(len(buckets) - 1, 0, -1):\n        for n in buckets[i]:\n            res.append(n)\n            if len(res) == k: return res\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                1,
                1,
                2,
                2,
                3
              ],
              2
            ],
            "expected": [
              1,
              2
            ],
            "description": "Top 2 frequent"
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
            "narration": "Given nums = [1, 1, 1, 2, 2, 3], k = 2. Approach 2: Bucket sort by frequency in O(n) time.",
            "vars": [
              [
                "k",
                2
              ],
              [
                "n",
                6
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Pass 1: Count frequencies: 1 appears 3 times, 2 appears 2 times, 3 appears 1 time.",
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
                "freq",
                "{1: 3, 2: 2, 3: 1}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Create buckets array of size n + 1 (size 7). bucket[f] holds numbers with frequency f.",
            "vars": [
              [
                "buckets",
                "7 empty slots"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Place numbers into buckets: bucket[3] = [1], bucket[2] = [2], bucket[1] = [3].",
            "vars": [
              [
                "bucket[3]",
                "[1]"
              ],
              [
                "bucket[2]",
                "[2]"
              ],
              [
                "bucket[1]",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Iterate buckets from highest frequency (6 down to 1). Check bucket[3] -> found [1]. Add 1 to result.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "res",
                "[1]"
              ],
              [
                "collected",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check bucket[2] -> found [2]. Add 2 to result: res = [1, 2].",
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "res",
                "[1, 2]"
              ],
              [
                "collected",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Target k = 2 items collected! Stop traversal immediately.",
            "best": {
              "label": "Optimal Top 2: [1, 2]",
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
                "result",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return [1, 2]. Solved in linear O(n) time & O(n) space!",
            "best": {
              "label": "Optimal Result: [1, 2]",
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
                "result",
                "[1, 2]"
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
    "id": "product-except-self",
    "patternId": "arrays-hashing",
    "title": "Product of Array Except Self",
    "subtitle": "Prefix × suffix · no division, O(n)",
    "kind": "problem",
    "leetcode": {
      "id": 238,
      "slug": "product-of-array-except-self",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Apple",
      "Microsoft",
      "Facebook"
    ],
    "statement": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(n) time without using the division operation.",
    "visualType": "array",
    "initialInput": [
      1,
      2,
      3,
      4
    ],
    "approaches": [
      {
        "label": "Better · prefix & suffix arrays",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "prefix = new array[n]",
          "prefix[0] = 1",
          "for i = 1 to n - 1:",
          "  prefix[i] = prefix[i - 1] * nums[i - 1]",
          "suffix = new array[n]",
          "suffix[n - 1] = 1",
          "for i = n - 2 down to 0:",
          "  suffix[i] = suffix[i + 1] * nums[i + 1]",
          "res = new array[n]",
          "for i = 0 to n - 1:",
          "  res[i] = prefix[i] * suffix[i]",
          "return res"
        ],
        "starterCode": {
          "javascript": "function productExceptSelf(nums) {\n  // Write your solution here\n  \n}",
          "python": "def productExceptSelf(nums: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const prefix = new Array(n).fill(1);\n  const suffix = new Array(n).fill(1);\n  for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] * nums[i - 1];\n  for (let i = n - 2; i >= 0; i--) suffix[i] = suffix[i + 1] * nums[i + 1];\n  const res = new Array(n);\n  for (let i = 0; i < n; i++) res[i] = prefix[i] * suffix[i];\n  return res;\n}",
          "python": "def productExceptSelf(nums: list[int]) -> list[int]:\n    n = len(nums)\n    prefix, suffix = [1] * n, [1] * n\n    for i in range(1, n): prefix[i] = prefix[i - 1] * nums[i - 1]\n    for i in range(n - 2, -1, -1): suffix[i] = suffix[i + 1] * nums[i + 1]\n    return [prefix[i] * suffix[i] for i in range(n)]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              24,
              12,
              8,
              6
            ],
            "description": "Product of [1, 2, 3, 4]"
          },
          {
            "input": [
              [
                -1,
                1,
                0,
                -3,
                3
              ]
            ],
            "expected": [
              0,
              0,
              9,
              0,
              0
            ],
            "description": "Contains 0"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [1, 2, 3, 4]. Approach 1: Build prefix and suffix product arrays.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "PREFIX",
                "array": [
                  null,
                  null,
                  null,
                  null
                ]
              }
            },
            "vars": [
              [
                "n",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize prefix[0] = 1 (no elements to the left of index 0).",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "PREFIX",
                "array": [
                  1,
                  null,
                  null,
                  null
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "prefix[0]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 1 (Prefix) i = 1: prefix[1] = prefix[0] * nums[0] = 1 * 1 = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "PREFIX",
                "array": [
                  1,
                  1,
                  null,
                  null
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "prefix[1]",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 1 (Prefix) i = 2: prefix[2] = prefix[1] * nums[1] = 1 * 2 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "PREFIX",
                "array": [
                  1,
                  1,
                  2,
                  null
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "prefix[2]",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pass 1 (Prefix) i = 3: prefix[3] = prefix[2] * nums[2] = 2 * 3 = 6. Prefix array complete!",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "position": "top",
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "PREFIX",
                "array": [
                  1,
                  1,
                  2,
                  6
                ],
                "highlights": [
                  3
                ]
              }
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "prefix[3]",
                6
              ],
              [
                "prefix",
                "[1, 1, 2, 6]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Initialize suffix array: suffix[3] = 1 (no elements to the right of index 3).",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "SUFFIX",
                "array": [
                  null,
                  null,
                  null,
                  1
                ],
                "highlights": [
                  3
                ]
              }
            },
            "vars": [
              [
                "suffix[3]",
                1
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2 (Suffix) i = 2: suffix[2] = suffix[3] * nums[3] = 1 * 4 = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "SUFFIX",
                "array": [
                  null,
                  null,
                  4,
                  1
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "suffix[2]",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2 (Suffix) i = 1: suffix[1] = suffix[2] * nums[2] = 4 * 3 = 12.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "SUFFIX",
                "array": [
                  null,
                  12,
                  4,
                  1
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "suffix[1]",
                12
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2 (Suffix) i = 0: suffix[0] = suffix[1] * nums[1] = 12 * 2 = 24. Suffix array complete!",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "SUFFIX",
                "array": [
                  24,
                  12,
                  4,
                  1
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "suffix[0]",
                24
              ],
              [
                "suffix",
                "[24, 12, 4, 1]"
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Combine: res[0] = prefix[0] * suffix[0] = 1 * 24 = 24.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "green"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "RESULT",
                "array": [
                  24,
                  null,
                  null,
                  null
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "res[0]",
                24
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Combine: res[1] = prefix[1] * suffix[1] = 1 * 12 = 12.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "green"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "RESULT",
                "array": [
                  24,
                  12,
                  null,
                  null
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "res[1]",
                12
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Combine: res[2] = prefix[2] * suffix[2] = 2 * 4 = 8.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "green"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "RESULT",
                "array": [
                  24,
                  12,
                  8,
                  null
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "res[2]",
                8
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Combine: res[3] = prefix[3] * suffix[3] = 6 * 1 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "position": "top",
                "color": "green"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "RESULT",
                "array": [
                  24,
                  12,
                  8,
                  6
                ],
                "highlights": [
                  3
                ]
              }
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "res[3]",
                6
              ],
              [
                "res",
                "[24, 12, 8, 6]"
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "Return res = [24, 12, 8, 6]. Total time O(n) using O(n) auxiliary prefix & suffix space.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "RESULT",
                "array": [
                  24,
                  12,
                  8,
                  6
                ],
                "highlights": [
                  0,
                  1,
                  2,
                  3
                ]
              }
            },
            "best": {
              "label": "Result: [24, 12, 8, 6]",
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
                "[24, 12, 8, 6]"
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
        "label": "Optimized · prefix × suffix",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given arr; output = new array[n]",
          "prefix = 1                            // pass 1: left -> right",
          "for i = 0 to n - 1:",
          "  output[i] = prefix",
          "  prefix = prefix * arr[i]",
          "suffix = 1                            // pass 2: right -> left",
          "for i = n - 1 down to 0:",
          "  output[i] = output[i] * suffix",
          "  suffix = suffix * arr[i]",
          "return output"
        ],
        "starterCode": {
          "javascript": "function productExceptSelf(nums) {\n  // Write your solution here\n  \n}",
          "python": "def productExceptSelf(nums: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function productExceptSelf(nums) {\n  const n = nums.length;\n  const res = new Array(n).fill(1);\n  let prefix = 1;\n  for (let i = 0; i < n; i++) {\n    res[i] = prefix;\n    prefix *= nums[i];\n  }\n  let postfix = 1;\n  for (let i = n - 1; i >= 0; i--) {\n    res[i] *= postfix;\n    postfix *= nums[i];\n  }\n  return res;\n}",
          "python": "def productExceptSelf(nums: list[int]) -> list[int]:\n    n = len(nums)\n    res = [1] * n\n    prefix = 1\n    for i in range(n):\n        res[i] = prefix\n        prefix *= nums[i]\n    postfix = 1\n    for i in range(n - 1, -1, -1):\n        res[i] *= postfix\n        postfix *= nums[i]\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              24,
              12,
              8,
              6
            ],
            "description": "Product of [1, 2, 3, 4]"
          },
          {
            "input": [
              [
                -1,
                1,
                0,
                -3,
                3
              ]
            ],
            "expected": [
              0,
              0,
              9,
              0,
              0
            ],
            "description": "Contains 0"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize output array of length n = 4. arr = [1, 2, 3, 4].",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ]
              }
            },
            "vars": [
              [
                "output",
                "[1, 1, 1, 1]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Pass 1 (left to right): prefix accumulates product of all elements to the left. Initialize prefix = 1.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ]
              }
            },
            "vars": [
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pass 1, loop i = 0: current arr[0] = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
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
                1
              ],
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "output[0] ← prefix = 1 (product of everything left of index 0).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "output[0]",
                1
              ],
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Update prefix = prefix * arr[0] = 1 * 1 = 1.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pass 1, loop i = 1: current arr[1] = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent"
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
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
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
                2
              ],
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "output[1] ← prefix = 1 (product of elements left of index 1: arr[0]=1).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent"
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
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "output[1]",
                1
              ],
              [
                "prefix (left)",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Update prefix = prefix * arr[1] = 1 * 2 = 2.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent"
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
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "prefix (left)",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pass 1, loop i = 2: current arr[2] = 3.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  1,
                  1
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
                3
              ],
              [
                "prefix (left)",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "output[2] ← prefix = 2 (product of elements left of index 2: 1 * 2 = 2).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  1
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "output[2]",
                2
              ],
              [
                "prefix (left)",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Update prefix = prefix * arr[2] = 2 * 3 = 6.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "prefix (left)",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pass 1, loop i = 3: current arr[3] = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  1
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
                4
              ],
              [
                "prefix (left)",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "output[3] ← prefix = 6 (product of elements left of index 3: 1 * 2 * 3 = 6). Pass 1 complete!",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  6
                ],
                "highlights": [
                  3
                ]
              }
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "output[3]",
                6
              ],
              [
                "output",
                "[1, 1, 2, 6]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pass 2 (right to left): suffix accumulates product of all elements to the right. Initialize suffix = 1.",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  6
                ]
              }
            },
            "vars": [
              [
                "suffix (right)",
                1
              ],
              [
                "output",
                "[1, 1, 2, 6]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2, loop i = 3: output[3] = output[3] * suffix = 6 * 1 = 6. Update suffix = 1 * arr[3] (4) = 4.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  2,
                  6
                ],
                "highlights": [
                  3
                ]
              }
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "output[3]",
                6
              ],
              [
                "suffix (right)",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2, loop i = 2: output[2] = output[2] * suffix = 2 * 4 = 8. Update suffix = 4 * arr[2] (3) = 12.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  1,
                  8,
                  6
                ],
                "highlights": [
                  2
                ]
              }
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "output[2]",
                8
              ],
              [
                "suffix (right)",
                12
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2, loop i = 1: output[1] = output[1] * suffix = 1 * 12 = 12. Update suffix = 12 * arr[1] (2) = 24.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "position": "top",
                "color": "accent"
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
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  1,
                  12,
                  8,
                  6
                ],
                "highlights": [
                  1
                ]
              }
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "output[1]",
                12
              ],
              [
                "suffix (right)",
                24
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pass 2, loop i = 0: output[0] = output[0] * suffix = 1 * 24 = 24. Update suffix = 24 * arr[0] (1) = 24.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "position": "top",
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  24,
                  12,
                  8,
                  6
                ],
                "highlights": [
                  0
                ]
              }
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "output[0]",
                24
              ],
              [
                "suffix (right)",
                24
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Return output = [24, 12, 8, 6]. Solved in O(n) time with O(1) auxiliary extra memory!",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4
              ],
              "secondaryArray": {
                "label": "OUTPUT",
                "array": [
                  24,
                  12,
                  8,
                  6
                ],
                "highlights": [
                  0,
                  1,
                  2,
                  3
                ]
              }
            },
            "best": {
              "label": "Result: [24, 12, 8, 6]",
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
                "[24, 12, 8, 6]"
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
    "id": "longest-consecutive-sequence",
    "patternId": "arrays-hashing",
    "title": "Longest Consecutive Sequence",
    "subtitle": "Unordered · longest run of consecutive integers in O(n)",
    "kind": "problem",
    "leetcode": {
      "id": 128,
      "slug": "longest-consecutive-sequence",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta",
      "Spotify"
    ],
    "statement": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time.",
    "visualType": "array",
    "initialInput": [
      100,
      4,
      200,
      1,
      3,
      2
    ],
    "approaches": [
      {
        "label": "Better · sort and scan",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "if nums is empty: return 0",
          "nums.sort()",
          "longest = 1",
          "current_streak = 1",
          "for i in 1..n-1:",
          "  if nums[i] == nums[i-1]: continue",
          "  if nums[i] == nums[i-1] + 1: current_streak++",
          "  else:",
          "    longest = max(longest, current_streak)",
          "    current_streak = 1",
          "return max(longest, current_streak)"
        ],
        "starterCode": {
          "javascript": "function longestConsecutive(nums) {\n  // Write your solution here\n  \n}",
          "python": "def longestConsecutive(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function longestConsecutive(nums) {\n  if (!nums.length) return 0;\n  nums.sort((a, b) => a - b);\n  let longest = 1, curr = 1;\n  for (let i = 1; i < nums.length; i++) {\n    if (nums[i] === nums[i - 1]) continue;\n    if (nums[i] === nums[i - 1] + 1) curr++;\n    else { longest = Math.max(longest, curr); curr = 1; }\n  }\n  return Math.max(longest, curr);\n}",
          "python": "def longestConsecutive(nums: list[int]) -> int:\n    if not nums: return 0\n    nums.sort()\n    longest, curr = 1, 1\n    for i in range(1, len(nums)):\n        if nums[i] == nums[i - 1]: continue\n        if nums[i] == nums[i - 1] + 1: curr += 1\n        else: longest = max(longest, curr); curr = 1\n    return max(longest, curr)"
        },
        "testCases": [
          {
            "input": [
              [
                100,
                4,
                200,
                1,
                3,
                2
              ]
            ],
            "expected": 4,
            "description": "Streak [1, 2, 3, 4] -> 4"
          },
          {
            "input": [
              [
                0,
                3,
                7,
                2,
                5,
                8,
                4,
                6,
                0,
                1
              ]
            ],
            "expected": 9,
            "description": "Streak [0..8] -> 9"
          },
          {
            "input": [
              []
            ],
            "expected": 0,
            "description": "Empty array"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [100, 4, 200, 1, 3, 2]. Approach 1: Sort array in O(n log n) -> [1, 2, 3, 4, 100, 200].",
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                100,
                200
              ]
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
                "sorted",
                "[1, 2, 3, 4, 100, 200]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Initialize longest = 1, current_streak = 1.",
            "vars": [
              [
                "longest",
                1
              ],
              [
                "curr",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Scan consecutive runs: [1, 2, 3, 4] increases by 1 each step (streak reaches 4).",
            "pointers": [
              {
                "name": "start",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "end",
                "index": 3,
                "color": "accent2"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                100,
                200
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
                "streak",
                4
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Jump to 100: not consecutive -> streak resets to 1. Jump to 200 -> streak resets to 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                3,
                4,
                100,
                200
              ]
            },
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "longest",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Longest consecutive streak is 4: [1, 2, 3, 4]. Return 4 in O(n log n) time.",
            "best": {
              "label": "Max Streak: 4 ([1, 2, 3, 4])",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "maxStreak",
                4
              ],
              [
                "time",
                "O(n log n)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · hash set sequence start detection",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "numSet = set(nums)",
          "longest = 0",
          "for num in numSet:",
          "  if num - 1 not in numSet:       // start of sequence",
          "    curr = num",
          "    streak = 1",
          "    while curr + 1 in numSet:",
          "      curr = curr + 1",
          "      streak = streak + 1",
          "    longest = max(longest, streak)",
          "return longest"
        ],
        "starterCode": {
          "javascript": "function longestConsecutive(nums) {\n  // Write your solution here\n  \n}",
          "python": "def longestConsecutive(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function longestConsecutive(nums) {\n  const numSet = new Set(nums);\n  let longest = 0;\n  for (const num of numSet) {\n    if (!numSet.has(num - 1)) {\n      let curr = num;\n      let streak = 1;\n      while (numSet.has(curr + 1)) {\n        curr++;\n        streak++;\n      }\n      longest = Math.max(longest, streak);\n    }\n  }\n  return longest;\n}",
          "python": "def longestConsecutive(nums: list[int]) -> int:\n    num_set = set(nums)\n    longest = 0\n    for num in num_set:\n        if num - 1 not in num_set:\n            curr = num\n            streak = 1\n            while curr + 1 in num_set:\n                curr += 1\n                streak += 1\n            longest = max(longest, streak)\n    return longest"
        },
        "testCases": [
          {
            "input": [
              [
                100,
                4,
                200,
                1,
                3,
                2
              ]
            ],
            "expected": 4,
            "description": "Streak [1, 2, 3, 4] -> 4"
          },
          {
            "input": [
              [
                0,
                3,
                7,
                2,
                5,
                8,
                4,
                6,
                0,
                1
              ]
            ],
            "expected": 9,
            "description": "Streak [0..8] -> 9"
          },
          {
            "input": [
              []
            ],
            "expected": 0,
            "description": "Empty array"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Insert all numbers into hash set: numSet = {1, 2, 3, 4, 100, 200}. Lookups are O(1).",
            "customVisual": {
              "array": [
                100,
                4,
                200,
                1,
                3,
                2
              ]
            },
            "vars": [
              [
                "numSet",
                "{1, 2, 3, 4, 100, 200}"
              ],
              [
                "longest",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect num = 100: check if (100 - 1 = 99) in numSet? No! 100 is the START of a sequence.",
            "pointers": [
              {
                "name": "curr",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "num",
                100
              ],
              [
                "isStart",
                true
              ],
              [
                "streak",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check 101 in numSet -> No. Streak for 100 ends at length 1. longest = max(0, 1) = 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "longest",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect num = 4: check if (4 - 1 = 3) in numSet? YES! 4 is NOT a start (3 already covers it). Skip in O(1)!",
            "pointers": [
              {
                "name": "curr",
                "index": 1,
                "color": "accent"
              }
            ],
            "dimmed": [
              1
            ],
            "vars": [
              [
                "num",
                4
              ],
              [
                "skipped",
                true
              ],
              [
                "reason",
                "3 in set"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect num = 200: check (200 - 1 = 199) in numSet? No -> 200 is start of streak of length 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "num",
                200
              ],
              [
                "isStart",
                true
              ],
              [
                "streak",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect num = 1: check (1 - 1 = 0) in numSet? No! 1 is the START of a new sequence.",
            "pointers": [
              {
                "name": "curr",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "num",
                1
              ],
              [
                "isStart",
                true
              ],
              [
                "streak",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Expand streak from 1: 2 is in set (len 2), 3 is in set (len 3), 4 is in set (len 4)! 5 not in set.",
            "pointers": [
              {
                "name": "curr",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              1,
              3,
              4,
              5
            ],
            "best": {
              "label": "Streak [1, 2, 3, 4] (len 4)",
              "indices": [
                1,
                3,
                4,
                5
              ]
            },
            "vars": [
              [
                "streak",
                4
              ],
              [
                "longest",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Inspect 3 and 2: predecessors (2, 1) in set -> both skipped in O(1).",
            "dimmed": [
              4,
              5
            ],
            "vars": [
              [
                "remaining",
                "skipped"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All elements processed. Return longest sequence length = 4. Solved in linear O(n) time & O(n) space!",
            "best": {
              "label": "Optimal O(n) Result: 4",
              "indices": [
                1,
                3,
                4,
                5
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
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "encode-and-decode-strings",
    "patternId": "arrays-hashing",
    "title": "Encode and Decode Strings",
    "subtitle": "Round-trip a list of strings · survive any character",
    "kind": "problem",
    "leetcode": {
      "id": 271,
      "slug": "encode-and-decode-strings",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "statement": "Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings. Must survive any ASCII/delimiter characters.",
    "visualType": "array",
    "initialInput": [
      "lint",
      "code",
      "love",
      "you"
    ],
    "approaches": [
      {
        "label": "Optimized · length-prefix delimiter (e.g. 4#lint4#code)",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "function encode(strs):",
          "  res = \"\"",
          "  for s in strs: res += str(len(s)) + \"#\" + s",
          "  return res",
          "function decode(str):",
          "  res = [], i = 0",
          "  while i < len(str):",
          "    j = find next \"#\" from i",
          "    length = int(str[i..j-1])",
          "    res.append(str[j+1 .. j+length])",
          "    i = j + 1 + length",
          "  return res"
        ],
        "starterCode": {
          "javascript": "class Solution {\n  encode(strs) {\n    // Write your solution here\n  }\n  decode(str) {\n    // Write your solution here\n  }\n}",
          "python": "class Solution:\n    def encode(self, strs: list[str]) -> str:\n        # Write your solution here\n        pass\n    def decode(self, s: str) -> list[str]:\n        # Write your solution here\n        pass"
        },
        "solutionCode": {
          "javascript": "class Solution {\n  encode(strs) {\n    let res = '';\n    for (const s of strs) res += `${s.length}#${s}`;\n    return res;\n  }\n  decode(str) {\n    const res = [];\n    let i = 0;\n    while (i < str.length) {\n      const j = str.indexOf('#', i);\n      const length = parseInt(str.substring(i, j), 10);\n      res.push(str.substring(j + 1, j + 1 + length));\n      i = j + 1 + length;\n    }\n    return res;\n  }\n}",
          "python": "class Solution:\n    def encode(self, strs: list[str]) -> str:\n        return \"\".join(f\"{len(s)}#{s}\" for s in strs)\n    def decode(self, s: str) -> list[str]:\n        res, i = [], 0\n        while i < len(s):\n            j = s.find('#', i)\n            length = int(s[i:j])\n            res.append(s[j + 1 : j + 1 + length])\n            i = j + 1 + length\n        return res"
        },
        "testCases": [
          {
            "input": [
              [
                "lint",
                "code",
                "love",
                "you"
              ]
            ],
            "expected": [
              "lint",
              "code",
              "love",
              "you"
            ],
            "description": "Standard words"
          },
          {
            "input": [
              [
                "we",
                "say",
                ":",
                "yes",
                "!@#$%^&*"
              ]
            ],
            "expected": [
              "we",
              "say",
              ":",
              "yes",
              "!@#$%^&*"
            ],
            "description": "Contains special characters & delimiters"
          },
          {
            "input": [
              [
                ""
              ]
            ],
            "expected": [
              ""
            ],
            "description": "Empty string"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given list of strings [\"lint\", \"code\", \"love\", \"you\"]. Encode format: \"<len>#<string>\".",
            "customVisual": {
              "array": [
                "lint",
                "code",
                "love",
                "you"
              ]
            },
            "vars": [
              [
                "strs",
                "[\"lint\", \"code\", \"love\", \"you\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Encode string 1: \"lint\" (length 4) -> append \"4#lint\".",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "4#lint",
                "code",
                "love",
                "you"
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "encoded",
                "\"4#lint\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Encode string 2: \"code\" (length 4) -> append \"4#code\".",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "4#lint",
                "4#code",
                "love",
                "you"
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "encoded",
                "\"4#lint4#code\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Encode string 3 & 4: \"love\" (4) & \"you\" (3) -> append \"4#love3#you\".",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "4#lint",
                "4#code",
                "4#love",
                "3#you"
              ]
            },
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "fullEncoded",
                "\"4#lint4#code4#love3#you\""
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Decode start: Read integer before \"#\" at index 1 -> length = 4. Slice next 4 chars -> \"lint\".",
            "pointers": [
              {
                "name": "read",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "lint",
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
                "decoded[0]",
                "\"lint\""
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decode next: Read length 4 at index 7 -> extract \"code\".",
            "pointers": [
              {
                "name": "read",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "lint",
                "code",
                null,
                null
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "decoded[1]",
                "\"code\""
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decode next: Read length 4 at index 13 -> extract \"love\".",
            "pointers": [
              {
                "name": "read",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "lint",
                "code",
                "love",
                null
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "decoded[2]",
                "\"love\""
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Decode last: Read length 3 at index 19 -> extract \"you\".",
            "pointers": [
              {
                "name": "read",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                "lint",
                "code",
                "love",
                "you"
              ]
            },
            "highlights": [
              3
            ],
            "best": {
              "label": "Decoded: [\"lint\", \"code\", \"love\", \"you\"]",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "decoded",
                "[\"lint\", \"code\", \"love\", \"you\"]"
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "All strings decoded losslessly! Survives any special character in linear O(n) time & O(1) space.",
            "best": {
              "label": "Decoded: [\"lint\", \"code\", \"love\", \"you\"]",
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
                "[\"lint\", \"code\", \"love\", \"you\"]"
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
    "id": "majority-element",
    "patternId": "arrays-hashing",
    "title": "Majority Element",
    "subtitle": "Boyer-Moore voting — one candidate, one counter",
    "kind": "problem",
    "leetcode": {
      "id": 169,
      "slug": "majority-element",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "statement": "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists.",
    "visualType": "array",
    "initialInput": [
      2,
      2,
      1,
      1,
      1,
      2,
      2
    ],
    "approaches": [
      {
        "label": "Better · frequency hash map",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "count = empty hash map",
          "for num in nums: count[num] = count.get(num, 0) + 1",
          "for num, c in count: if c > floor(n / 2): return num"
        ],
        "starterCode": {
          "javascript": "function majorityElement(nums) {\n  // Write your solution here\n  \n}",
          "python": "def majorityElement(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function majorityElement(nums) {\n  const count = new Map();\n  const threshold = Math.floor(nums.length / 2);\n  for (const n of nums) {\n    count.set(n, (count.get(n) || 0) + 1);\n    if (count.get(n) > threshold) return n;\n  }\n  return -1;\n}",
          "python": "def majorityElement(nums: list[int]) -> int:\n    count = {}\n    threshold = len(nums) // 2\n    for n in nums:\n        count[n] = count.get(n, 0) + 1\n        if count[n] > threshold: return n\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                3
              ]
            ],
            "expected": 3,
            "description": "Majority is 3"
          },
          {
            "input": [
              [
                2,
                2,
                1,
                1,
                1,
                2,
                2
              ]
            ],
            "expected": 2,
            "description": "Majority is 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums = [2, 2, 1, 1, 1, 2, 2]. Approach 1: Count element frequencies in a hash map.",
            "vars": [
              [
                "n",
                7
              ],
              [
                "threshold (n/2)",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Traverse array and populate frequency map: count[2] = 4, count[1] = 3.",
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
                "counts",
                "{2: 4, 1: 3}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check frequency against majority threshold: count[2] = 4 > floor(7 / 2 = 3).",
            "highlights": [
              0,
              1,
              5,
              6
            ],
            "best": {
              "label": "Majority Element: 2",
              "indices": [
                0,
                1,
                5,
                6
              ]
            },
            "vars": [
              [
                "result",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Return majority element 2 in O(n) time & O(n) space.",
            "best": {
              "label": "Result: 2",
              "indices": [
                0,
                1,
                5,
                6
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
                "O(n)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · Boyer-Moore voting algorithm",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "candidate = null, count = 0",
          "for num in nums:",
          "  if count == 0: candidate = num",
          "  count += 1 if num == candidate else -1",
          "return candidate"
        ],
        "starterCode": {
          "javascript": "function majorityElement(nums) {\n  // Write your solution here\n  \n}",
          "python": "def majorityElement(nums: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function majorityElement(nums) {\n  let candidate = null;\n  let count = 0;\n  for (const num of nums) {\n    if (count === 0) candidate = num;\n    count += (num === candidate) ? 1 : -1;\n  }\n  return candidate;\n}",
          "python": "def majorityElement(nums: list[int]) -> int:\n    candidate = None\n    count = 0\n    for num in nums:\n        if count == 0: candidate = num\n        count += (1 if num == candidate else -1)\n    return candidate"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                3
              ]
            ],
            "expected": 3,
            "description": "Majority is 3"
          },
          {
            "input": [
              [
                2,
                2,
                1,
                1,
                1,
                2,
                2
              ]
            ],
            "expected": 2,
            "description": "Majority is 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Boyer-Moore Voting: candidate = null, count = 0. Elements cancel opposing votes.",
            "vars": [
              [
                "candidate",
                null
              ],
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 0 (val 2): count is 0 -> set candidate = 2, count = 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "candidate",
                2
              ],
              [
                "count",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 1 (val 2): nums[1] == candidate (2) -> count++ to 2.",
            "pointers": [
              {
                "name": "curr",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "candidate",
                2
              ],
              [
                "count",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 2 (val 1): nums[2] != candidate (2) -> count-- to 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "candidate",
                2
              ],
              [
                "count",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 3 (val 1): nums[3] != candidate (2) -> count-- to 0.",
            "pointers": [
              {
                "name": "curr",
                "index": 3,
                "color": "accent"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "candidate",
                2
              ],
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 4 (val 1): count is 0 -> candidate becomes 1, count = 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 4,
                "color": "accent"
              }
            ],
            "highlights": [
              4
            ],
            "vars": [
              [
                "candidate",
                1
              ],
              [
                "count",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i = 5 (val 2): nums[5] != candidate (1) -> count-- to 0.",
            "pointers": [
              {
                "name": "curr",
                "index": 5,
                "color": "accent"
              }
            ],
            "highlights": [
              5
            ],
            "vars": [
              [
                "candidate",
                1
              ],
              [
                "count",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "i = 6 (val 2): count is 0 -> candidate becomes 2, count = 1.",
            "pointers": [
              {
                "name": "curr",
                "index": 6,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1,
              5,
              6
            ],
            "best": {
              "label": "Majority Candidate = 2",
              "indices": [
                0,
                1,
                5,
                6
              ]
            },
            "vars": [
              [
                "candidate",
                2
              ],
              [
                "count",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Array exhausted. Candidate 2 is the guaranteed majority element (> n/2). Solved in O(n) time & O(1) space!",
            "best": {
              "label": "Majority = 2",
              "indices": [
                0,
                1,
                5,
                6
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
    "id": "plus-one",
    "patternId": "arrays-hashing",
    "title": "Plus One",
    "subtitle": "The carry that runs off the front",
    "kind": "problem",
    "leetcode": {
      "id": 66,
      "slug": "plus-one",
      "difficulty": "Easy"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Apple"
    ],
    "statement": "You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. Increment the large integer by one and return the resulting array of digits.",
    "visualType": "array",
    "initialInput": [
      1,
      2,
      9
    ],
    "approaches": [
      {
        "label": "Optimized · right-to-left in-place carry ripple",
        "complexity": {
          "time": "O(n)",
          "space": "O(1) extra"
        },
        "pseudocode": [
          "for i from n - 1 down to 0:",
          "  if digits[i] < 9:",
          "    digits[i]++",
          "    return digits",
          "  digits[i] = 0",
          "return [1, ...digits]"
        ],
        "starterCode": {
          "javascript": "function plusOne(digits) {\n  // Write your solution here\n  \n}",
          "python": "def plusOne(digits: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function plusOne(digits) {\n  for (let i = digits.length - 1; i >= 0; i--) {\n    if (digits[i] < 9) {\n      digits[i]++;\n      return digits;\n    }\n    digits[i] = 0;\n  }\n  return [1, ...digits];\n}",
          "python": "def plusOne(digits: list[int]) -> list[int]:\n    for i in range(len(digits) - 1, -1, -1):\n        if digits[i] < 9:\n            digits[i] += 1\n            return digits\n        digits[i] = 0\n    return [1] + digits"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                9
              ]
            ],
            "expected": [
              1,
              3,
              0
            ],
            "description": "Carry ripple at end"
          },
          {
            "input": [
              [
                4,
                3,
                2,
                1
              ]
            ],
            "expected": [
              4,
              3,
              2,
              2
            ],
            "description": "Simple increment"
          },
          {
            "input": [
              [
                9,
                9,
                9
              ]
            ],
            "expected": [
              1,
              0,
              0,
              0
            ],
            "description": "All 9s -> prepend 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given digits = [1, 2, 9]. Add 1 to the integer representation and handle right-to-left carry.",
            "customVisual": {
              "array": [
                1,
                2,
                9
              ]
            },
            "vars": [
              [
                "digits",
                "[1, 2, 9]"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan from rightmost index: i = 2 (val 9).",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                9
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "digits[2]",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "digits[2] is 9 (not < 9) -> digits[2] becomes 0. Carry ripples left to index 1.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
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
                "i",
                2
              ],
              [
                "digits[2]",
                0
              ],
              [
                "carry",
                1
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Move left to index i = 1 (val 2).",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                2,
                0
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "digits[1]",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "digits[1] (2) is < 9! Increment digits[1]++ to 3.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                3,
                0
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "digits[1]",
                3
              ],
              [
                "carryResolved",
                true
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "No more carry needed! Return digits immediately: [1, 3, 0].",
            "customVisual": {
              "array": [
                1,
                3,
                0
              ]
            },
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Result: [1, 3, 0]",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "result",
                "[1, 3, 0]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Finished in linear O(n) time & O(1) in-place auxiliary space.",
            "best": {
              "label": "Optimal Result: [1, 3, 0]",
              "indices": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "result",
                "[1, 3, 0]"
              ],
              [
                "time",
                "O(n)"
              ],
              [
                "extra_space",
                "O(1)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "intersection-of-two-arrays",
    "patternId": "arrays-hashing",
    "title": "Intersection of Two Arrays",
    "subtitle": "The set is the shape of the answer",
    "kind": "problem",
    "leetcode": {
      "id": 349,
      "slug": "intersection-of-two-arrays",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Facebook",
      "LinkedIn"
    ],
    "statement": "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.",
    "visualType": "array",
    "initialInput": [
      4,
      9,
      5
    ],
    "approaches": [
      {
        "label": "Brute force · nested search",
        "complexity": {
          "time": "O(n · m)",
          "space": "O(n)"
        },
        "pseudocode": [
          "res = set()",
          "for num1 in nums1:",
          "  for num2 in nums2:",
          "    if num1 == num2: res.add(num1)",
          "return list(res)"
        ],
        "starterCode": {
          "javascript": "function intersection(nums1, nums2) {\n  // Write your solution here\n  \n}",
          "python": "def intersection(nums1: list[int], nums2: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function intersection(nums1, nums2) {\n  const res = new Set();\n  for (const a of nums1) {\n    for (const b of nums2) {\n      if (a === b) res.add(a);\n    }\n  }\n  return Array.from(res);\n}",
          "python": "def intersection(nums1: list[int], nums2: list[int]) -> list[int]:\n    res = set()\n    for a in nums1:\n        for b in nums2:\n            if a == b: res.add(a)\n    return list(res)"
        },
        "testCases": [
          {
            "input": [
              [
                4,
                9,
                5
              ],
              [
                9,
                4,
                9,
                8,
                4
              ]
            ],
            "expected": [
              4,
              9
            ],
            "description": "Common elements 4, 9"
          },
          {
            "input": [
              [
                1,
                2,
                2,
                1
              ],
              [
                2,
                2
              ]
            ],
            "expected": [
              2
            ],
            "description": "Common element 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]. Check each element of nums1 against nums2.",
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "vars": [
              [
                "len1",
                3
              ],
              [
                "len2",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Search 4 in nums2: match found at index 1! Add 4 to result set.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "highlights": [
              0
            ],
            "secondaryHighlights": [
              1
            ],
            "vars": [
              [
                "intersect",
                "[4]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Search 9 in nums2: match found at index 0! Add 9 to result set.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              0
            ],
            "vars": [
              [
                "intersect",
                "[4, 9]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Search 5 in nums2: not found in nums2.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "highlights": [
              2
            ],
            "vars": [
              [
                "found",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Return unique intersection: [4, 9] in O(n · m) time.",
            "best": {
              "label": "Intersection: [4, 9]"
            },
            "vars": [
              [
                "result",
                "[4, 9]"
              ],
              [
                "time",
                "O(N * M)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · hash set lookup",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(n)"
        },
        "pseudocode": [
          "set1 = set(nums1)",
          "res = set()",
          "for num in nums2:",
          "  if num in set1: res.add(num)",
          "return list(res)"
        ],
        "starterCode": {
          "javascript": "function intersection(nums1, nums2) {\n  // Write your solution here\n  \n}",
          "python": "def intersection(nums1: list[int], nums2: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function intersection(nums1, nums2) {\n  const set1 = new Set(nums1);\n  const res = new Set();\n  for (const n of nums2) {\n    if (set1.has(n)) res.add(n);\n  }\n  return Array.from(res);\n}",
          "python": "def intersection(nums1: list[int], nums2: list[int]) -> list[int]:\n    return list(set(nums1) & set(nums2))"
        },
        "testCases": [
          {
            "input": [
              [
                4,
                9,
                5
              ],
              [
                9,
                4,
                9,
                8,
                4
              ]
            ],
            "expected": [
              4,
              9
            ],
            "description": "Common elements 4, 9"
          },
          {
            "input": [
              [
                1,
                2,
                2,
                1
              ],
              [
                2,
                2
              ]
            ],
            "expected": [
              2
            ],
            "description": "Common element 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Convert nums1 into hash set: set1 = {4, 9, 5}. Enables O(1) membership lookups.",
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "vars": [
              [
                "set1",
                "{4, 9, 5}"
              ],
              [
                "res",
                "set()"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check nums2[0] = 9: 9 is in set1! Add 9 to res set = {9}.",
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              0
            ],
            "vars": [
              [
                "res",
                "{9}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check nums2[1] = 4: 4 is in set1! Add 4 to res set = {9, 4}.",
            "customVisual": {
              "array": [
                4,
                9,
                5
              ],
              "secondaryArray": [
                9,
                4,
                9,
                8,
                4
              ]
            },
            "highlights": [
              0
            ],
            "secondaryHighlights": [
              1
            ],
            "vars": [
              [
                "res",
                "{9, 4}"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check nums2[2] = 9: 9 already in res set -> duplicates deduplicated automatically.",
            "secondaryHighlights": [
              2
            ],
            "vars": [
              [
                "skipped",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check nums2[3] = 8: 8 is not in set1 -> ignored.",
            "secondaryHighlights": [
              3
            ],
            "vars": [
              [
                "found",
                false
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check nums2[4] = 4: already in res set -> skipped.",
            "secondaryHighlights": [
              4
            ],
            "vars": [
              [
                "skipped",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "All elements scanned. Return unique intersection list: [9, 4] in O(n + m) time!",
            "best": {
              "label": "Optimal Set Intersection: [9, 4]"
            },
            "vars": [
              [
                "result",
                "[9, 4]"
              ],
              [
                "time",
                "O(N + M)"
              ],
              [
                "space",
                "O(N)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "distribute-candies",
    "patternId": "arrays-hashing",
    "title": "Distribute Candies",
    "subtitle": "Whichever ceiling binds first",
    "kind": "problem",
    "leetcode": {
      "id": 575,
      "slug": "distribute-candies",
      "difficulty": "Easy"
    },
    "companies": [
      "Google",
      "Amazon",
      "Facebook"
    ],
    "statement": "Alice has n candies, where the ith candy is of type candyType[i]. Alice wants to eat n / 2 candies while maximizing the number of different types of candies she eats. Return the maximum number of different types of candies she can eat.",
    "visualType": "array",
    "initialInput": [
      1,
      1,
      2,
      2,
      3,
      3
    ],
    "approaches": [
      {
        "label": "Optimized · hash set unique type bound",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "unique_types = len(set(candyType))",
          "max_allowed = len(candyType) // 2",
          "return min(unique_types, max_allowed)"
        ],
        "starterCode": {
          "javascript": "function distributeCandies(candyType) {\n  // Write your solution here\n  \n}",
          "python": "def distributeCandies(candyType: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function distributeCandies(candyType) {\n  const unique = new Set(candyType).size;\n  return Math.min(unique, candyType.length / 2);\n}",
          "python": "def distributeCandies(candyType: list[int]) -> int:\n    return min(len(set(candyType)), len(candyType) // 2)"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                1,
                2,
                2,
                3,
                3
              ]
            ],
            "expected": 3,
            "description": "3 unique types among 6 candies"
          },
          {
            "input": [
              [
                1,
                1,
                2,
                3
              ]
            ],
            "expected": 2,
            "description": "3 unique types but can only eat 2"
          },
          {
            "input": [
              [
                6,
                6,
                6,
                6
              ]
            ],
            "expected": 1,
            "description": "Only 1 unique type"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given candyType = [1, 1, 2, 2, 3, 3] (total n = 6 candies). Alice can eat at most n / 2 = 3 candies.",
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                3,
                3
              ]
            },
            "vars": [
              [
                "n",
                6
              ],
              [
                "maxCandies (n/2)",
                3
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Count distinct candy types using a hash set: start scanning array.",
            "vars": [
              [
                "uniqueSet",
                "set()"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 0 & 1 (type 1): insert 1 into set -> uniqueSet = {1}.",
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
                1,
                2,
                2,
                3,
                3
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "uniqueSet",
                "{1}"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 2 & 3 (type 2): insert 2 into set -> uniqueSet = {1, 2}.",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "array": [
                1,
                1,
                2,
                2,
                3,
                3
              ]
            },
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "uniqueSet",
                "{1, 2}"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 4 & 5 (type 3): insert 3 into set -> uniqueSet = {1, 2, 3}.",
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
                1,
                2,
                2,
                3,
                3
              ]
            },
            "highlights": [
              4,
              5
            ],
            "vars": [
              [
                "uniqueSet",
                "{1, 2, 3}"
              ],
              [
                "unique_types",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Alice is allowed to eat at most max_allowed = len(candyType) // 2 = 6 // 2 = 3 candies.",
            "vars": [
              [
                "unique_types",
                3
              ],
              [
                "max_allowed",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute min(unique_types, max_allowed) = min(3, 3) = 3. Alice eats 3 distinct candy types!",
            "best": {
              "label": "Max Unique Types: 3",
              "indices": [
                0,
                2,
                4
              ]
            },
            "vars": [
              [
                "result",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Return 3. Solved in linear O(n) time & O(n) space!",
            "best": {
              "label": "Optimal Result: 3",
              "indices": [
                0,
                2,
                4
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
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "count-inversions",
    "patternId": "arrays-hashing",
    "title": "Count Inversions",
    "subtitle": "Counted in blocks during a merge",
    "kind": "problem",
    "leetcode": {
      "id": 315,
      "slug": "count-of-smaller-numbers-after-self",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Flipkart"
    ],
    "statement": "Given an array of integers arr, return the inversion count in the array. Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.",
    "visualType": "array",
    "initialInput": [
      8,
      4,
      2,
      1
    ],
    "approaches": [
      {
        "label": "Brute force · nested loops",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "inv = 0",
          "for i from 0 to n - 1:",
          "  for j from i + 1 to n - 1:",
          "    if arr[i] > arr[j]: inv++",
          "return inv"
        ],
        "starterCode": {
          "javascript": "function countInversions(arr) {\n  // Write your solution here\n  \n}",
          "python": "def countInversions(arr: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function countInversions(arr) {\n  let inv = 0;\n  for (let i = 0; i < arr.length; i++) {\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[i] > arr[j]) inv++;\n    }\n  }\n  return inv;\n}",
          "python": "def countInversions(arr: list[int]) -> int:\n    inv = 0\n    for i in range(len(arr)):\n        for j in range(i + 1, len(arr)):\n            if arr[i] > arr[j]: inv += 1\n    return inv"
        },
        "testCases": [
          {
            "input": [
              [
                8,
                4,
                2,
                1
              ]
            ],
            "expected": 6,
            "description": "Reverse sorted 4 elements -> 6 inversions"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5
              ]
            ],
            "expected": 0,
            "description": "Already sorted -> 0 inversions"
          },
          {
            "input": [
              [
                2,
                4,
                1,
                3,
                5
              ]
            ],
            "expected": 3,
            "description": "3 inversions: (2,1), (4,1), (4,3)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array [8, 4, 2, 1]. Inversion: any pair (i, j) where i < j and arr[i] > arr[j].",
            "customVisual": {
              "array": [
                8,
                4,
                2,
                1
              ]
            },
            "vars": [
              [
                "inversions",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 0 (val 8): compare with (4), (2), (1) -> 3 inversions: (8,4), (8,2), (8,1).",
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "inversions",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 1 (val 4): compare with (2), (1) -> 2 inversions: (4,2), (4,1). Total = 5.",
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "inversions",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i = 2 (val 2): compare with (1) -> 1 inversion: (2,1). Total = 6 inversions!",
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "inversions",
                6
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Total inversions = 6. All pairs verified in O(n²) time & O(1) space.",
            "best": {
              "label": "Total Inversions: 6",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "totalInversions",
                6
              ],
              [
                "time",
                "O(n²)"
              ]
            ]
          }
        ]
      },
      {
        "label": "Optimized · modified merge sort",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "function mergeSortAndCount(arr, temp, left, right):",
          "  if left >= right: return 0",
          "  mid = (left + right) // 2",
          "  count = mergeSortAndCount(arr, temp, left, mid)",
          "  count += mergeSortAndCount(arr, temp, mid + 1, right)",
          "  count += mergeAndCount(arr, temp, left, mid, right)",
          "  return count",
          "// in mergeAndCount: when arr[j] < arr[i], count += (mid - i + 1)"
        ],
        "starterCode": {
          "javascript": "function countInversions(arr) {\n  // Write your solution here\n  \n}",
          "python": "def countInversions(arr: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function countInversions(arr) {\n  const temp = new Array(arr.length);\n  function merge(l, m, r) {\n    let i = l, j = m + 1, k = l, inv = 0;\n    while (i <= m && j <= r) {\n      if (arr[i] <= arr[j]) temp[k++] = arr[i++];\n      else {\n        temp[k++] = arr[j++];\n        inv += (m - i + 1);\n      }\n    }\n    while (i <= m) temp[k++] = arr[i++];\n    while (j <= r) temp[k++] = arr[j++];\n    for (let x = l; x <= r; x++) arr[x] = temp[x];\n    return inv;\n  }\n  function sort(l, r) {\n    if (l >= r) return 0;\n    const m = Math.floor((l + r) / 2);\n    return sort(l, m) + sort(m + 1, r) + merge(l, m, r);\n  }\n  return sort(0, arr.length - 1);\n}",
          "python": "def countInversions(arr: list[int]) -> int:\n    temp = [0] * len(arr)\n    def merge(l, m, r):\n        i, j, k, inv = l, m + 1, l, 0\n        while i <= m and j <= r:\n            if arr[i] <= arr[j]: temp[k] = arr[i]; i += 1\n            else:\n                temp[k] = arr[j]; j += 1\n                inv += (m - i + 1)\n            k += 1\n        while i <= m: temp[k] = arr[i]; i += 1; k += 1\n        while j <= r: temp[k] = arr[j]; j += 1; k += 1\n        for x in range(l, r + 1): arr[x] = temp[x]\n        return inv\n    def sort(l, r):\n        if l >= r: return 0\n        m = (l + r) // 2\n        return sort(l, m) + sort(m + 1, r) + merge(l, m, r)\n    return sort(0, len(arr) - 1)"
        },
        "testCases": [
          {
            "input": [
              [
                8,
                4,
                2,
                1
              ]
            ],
            "expected": 6,
            "description": "Reverse sorted 4 elements -> 6 inversions"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5
              ]
            ],
            "expected": 0,
            "description": "Already sorted -> 0 inversions"
          },
          {
            "input": [
              [
                2,
                4,
                1,
                3,
                5
              ]
            ],
            "expected": 3,
            "description": "3 inversions: (2,1), (4,1), (4,3)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array [8, 4, 2, 1]. Count inversions in blocks during Merge Sort in O(n log n).",
            "customVisual": {
              "array": [
                8,
                4,
                2,
                1
              ]
            },
            "vars": [
              [
                "inversions",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Divide into halves: left = [8, 4], right = [2, 1].",
            "customVisual": {
              "array": [
                8,
                4,
                2,
                1
              ]
            },
            "highlights": [
              0,
              1
            ],
            "secondaryHighlights": [
              2,
              3
            ],
            "vars": [
              [
                "left",
                "[8, 4]"
              ],
              [
                "right",
                "[2, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Sort left [8, 4]: 8 > 4 -> 1 inversion -> left sorted = [4, 8]. Sort right [2, 1]: 2 > 1 -> 1 inversion -> right sorted = [1, 2].",
            "customVisual": {
              "array": [
                4,
                8,
                1,
                2
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
                "leftSorted",
                "[4, 8]"
              ],
              [
                "rightSorted",
                "[1, 2]"
              ],
              [
                "currentInversions",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Merge [4, 8] and [1, 2]: compare 4 and 1. Since right element 1 < 4, ALL remaining elements in left ([4, 8]) are greater!",
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
                4,
                8,
                1,
                2
              ]
            },
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "mid - i + 1",
                2
              ],
              [
                "inversionsAdded",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Add mid - i + 1 = 2 inversions. Next right element 2 < 4 -> adds 2 more inversions ([4, 8] > 2). Total = 6.",
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
            "customVisual": {
              "array": [
                1,
                2,
                4,
                8
              ]
            },
            "highlights": [
              0,
              1,
              3
            ],
            "vars": [
              [
                "totalInversions",
                6
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Merge complete: sorted array [1, 2, 4, 8] with 6 total inversions!",
            "customVisual": {
              "array": [
                1,
                2,
                4,
                8
              ]
            },
            "best": {
              "label": "Optimal Inversions: 6",
              "indices": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "totalInversions",
                6
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
  }
];
