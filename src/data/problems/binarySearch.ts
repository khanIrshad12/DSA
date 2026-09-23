import { Problem } from '../../types';

export const binarySearchProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "binary-search",
    "title": "Overview",
    "subtitle": "Halve the search space · then search answers, not arrays",
    "kind": "intro",
    "statement": "Binary Search cuts the search space in half each iteration by comparing the target with the midpoint element. Operates in logarithmic O(log n) time on monotonic search spaces.",
    "visualType": "array",
    "initialInput": [
      -1,
      0,
      3,
      5,
      9,
      12
    ],
    "approaches": [
      {
        "id": "overview",
        "label": "Binary Search Principle",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "lo ← 0, hi ← n − 1",
          "while lo <= hi:",
          "    mid ← (lo + hi) // 2",
          "    if arr[mid] == target: return mid",
          "    else if arr[mid] < target: lo ← mid + 1",
          "    else: hi ← mid − 1",
          "return -1"
        ],
        "starterCode": {
          "javascript": "function binarySearchIntro(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}",
          "python": "def binarySearchIntro(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1"
        },
        "solutionCode": {
          "javascript": "function binarySearchIntro(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}",
          "python": "def binarySearchIntro(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                -1,
                0,
                3,
                5,
                9,
                12
              ],
              9
            ],
            "expected": 4,
            "description": "Target 9 at index 4"
          },
          {
            "input": [
              [
                -1,
                0,
                3,
                5,
                9,
                12
              ],
              2
            ],
            "expected": -1,
            "description": "Target 2 not found"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 9. Set initial search window lo = 0, hi = 5.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                5
              ],
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Compute midpoint: mid = (0 + 5) // 2 = 2 (value 3).",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 2,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "mid",
                2
              ],
              [
                "arr[mid]",
                3
              ],
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "arr[mid] (3) < target (9). Discard left half [0..2] and set lo = mid + 1 = 3.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Next mid = (3 + 5) // 2 = 4 (value 9). arr[4] == 9! Target found at index 4.",
            "pointers": [
              {
                "name": "mid",
                "index": 4,
                "color": "green",
                "position": "top"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Found at index 4",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "result",
                4
              ],
              [
                "time",
                "O(log n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "binary-search",
    "patternId": "binary-search",
    "title": "Binary Search",
    "subtitle": "The canonical template · halve [lo, hi]",
    "kind": "problem",
    "leetcode": {
      "id": 704,
      "slug": "binary-search",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Apple"
    ],
    "statement": "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
    "visualType": "array",
    "initialInput": [
      -1,
      0,
      3,
      5,
      9,
      12
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · linear scan",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 1:",
          "    if nums[i] == target: return i",
          "return -1"
        ],
        "starterCode": {
          "javascript": "function search(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === target) return i;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] == target:\n            return i\n    return -1"
        },
        "solutionCode": {
          "javascript": "function search(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === target) return i;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] == target:\n            return i\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                -1,
                0,
                3,
                5,
                9,
                12
              ],
              9
            ],
            "expected": 4,
            "description": "Target 9 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 9. Scan index 0 (val -1 != 9).",
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
                -1
              ],
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 1 (val 0 != 9).",
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
                0
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 2 (val 3 != 9).",
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
                3
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 3 (val 5 != 9).",
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
                "nums[i]",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Scan index 4 (val 9 == 9). Match found at index 4!",
            "pointers": [
              {
                "name": "match",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Found at index 4"
            },
            "vars": [
              [
                "result",
                4
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "lo ← 0; hi ← n − 1",
          "while lo <= hi:",
          "    mid ← (lo + hi) // 2",
          "    if nums[mid] == target: return mid",
          "    if nums[mid] < target: lo ← mid + 1",
          "    else: hi ← mid − 1",
          "return -1"
        ],
        "starterCode": {
          "javascript": "function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1"
        },
        "solutionCode": {
          "javascript": "function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                -1,
                0,
                3,
                5,
                9,
                12
              ],
              9
            ],
            "expected": 4,
            "description": "Target 9 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 9. Search interval: lo = 0, hi = 5.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                5
              ],
              [
                "target",
                9
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (0 + 5) // 2 = 2. nums[2] = 3.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 2,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "mid",
                2
              ],
              [
                "hi",
                5
              ],
              [
                "nums[mid]",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "nums[mid] < 9. lo ← mid + 1 = 3.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (3 + 5) // 2 = 4 (value 9). Match found! Return index 4.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "mid",
                "index": 4,
                "color": "green",
                "position": "top"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Match at index 4",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "result",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "search-insert-position",
    "patternId": "binary-search",
    "title": "Search Insert Position",
    "subtitle": "Where lo lands when the target is missing",
    "kind": "problem",
    "leetcode": {
      "id": 35,
      "slug": "search-insert-position",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "statement": "Given a sorted array of distinct integers and a target, return the index of the target. If it is not present, return the index where it would be inserted to keep the array sorted. Must run in O(log n).",
    "visualType": "array",
    "initialInput": [
      1,
      3,
      5,
      6,
      8,
      9
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · linear scan",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 1:",
          "    if nums[i] >= target: return i",
          "return n"
        ],
        "starterCode": {
          "javascript": "function searchInsert(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] >= target) return i;\n  }\n  return nums.length;\n}",
          "python": "def searchInsert(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] >= target:\n            return i\n    return len(nums)"
        },
        "solutionCode": {
          "javascript": "function searchInsert(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] >= target) return i;\n  }\n  return nums.length;\n}",
          "python": "def searchInsert(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] >= target:\n            return i\n    return len(nums)"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                5,
                6,
                8,
                9
              ],
              6
            ],
            "expected": 3,
            "description": "Target 6 exists at index 3"
          },
          {
            "input": [
              [
                1,
                3,
                5,
                6,
                8,
                9
              ],
              7
            ],
            "expected": 4,
            "description": "Target 7 inserts at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 6. Scan index 0 (val 1 < 6).",
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
              ],
              [
                "target",
                6
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 1 (val 3 < 6).",
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
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Scan index 2 (val 5 < 6).",
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
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Scan index 3 (val 6 >= 6). Found target at index 3!",
            "pointers": [
              {
                "name": "match",
                "index": 3,
                "color": "green"
              }
            ],
            "highlights": [
              3
            ],
            "best": {
              "label": "Found at index 3"
            },
            "vars": [
              [
                "result",
                3
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "lo ← 0; hi ← n − 1",
          "while lo <= hi:",
          "    mid ← (lo + hi) / 2",
          "    if arr[mid] == target: return mid",
          "    if arr[mid] < target: lo ← mid + 1",
          "    else: hi ← mid − 1",
          "return lo"
        ],
        "starterCode": {
          "javascript": "function searchInsert(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return lo;\n}",
          "python": "def searchInsert(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return lo"
        },
        "solutionCode": {
          "javascript": "function searchInsert(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return lo;\n}",
          "python": "def searchInsert(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return lo"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                5,
                6,
                8,
                9
              ],
              6
            ],
            "expected": 3,
            "description": "Target 6 exists at index 3"
          },
          {
            "input": [
              [
                1,
                3,
                5,
                6,
                8,
                9
              ],
              7
            ],
            "expected": 4,
            "description": "Target 7 inserts at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 6. Initialize search range: lo = 0, hi = 5.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                5
              ],
              [
                "target",
                6
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "while lo <= hi: lo = 0, hi = 5.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (0 + 5) / 2 = 2. arr[2] = 5.",
            "window": {
              "start": 0,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 2,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "mid",
                2
              ],
              [
                "hi",
                5
              ],
              [
                "arr[mid]",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "arr[mid] (5) < target (6). Search right: lo = mid + 1 = 3.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "while lo <= hi: lo = 3, hi = 5.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (3 + 5) / 2 = 4. arr[4] = 8.",
            "window": {
              "start": 3,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 4,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "highlights": [
              4
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "mid",
                4
              ],
              [
                "hi",
                5
              ],
              [
                "arr[mid]",
                8
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "arr[mid] (8) > target (6). Search left: hi = mid - 1 = 3.",
            "window": {
              "start": 3,
              "end": 3,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 3,
                "color": "accent2"
              }
            ],
            "dimmed": [
              4,
              5
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "hi",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "mid = 3, arr[mid] = 6.",
            "window": {
              "start": 3,
              "end": 3,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "mid",
                "index": 3,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "lo",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 3,
                "color": "accent2"
              }
            ],
            "highlights": [
              3
            ],
            "vars": [
              [
                "lo",
                3
              ],
              [
                "mid",
                3
              ],
              [
                "hi",
                3
              ],
              [
                "arr[mid]",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "arr[mid] == 6 == target! Found exact target at index 3.",
            "pointers": [
              {
                "name": "match",
                "index": 3,
                "color": "green",
                "position": "top"
              }
            ],
            "highlights": [
              3
            ],
            "best": {
              "label": "Found at index 3"
            },
            "vars": [
              [
                "result",
                3
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "peak-index-in-a-mountain-array",
    "patternId": "binary-search",
    "title": "Peak Index in a Mountain Array",
    "subtitle": "Binary search without a sorted array",
    "kind": "problem",
    "leetcode": {
      "id": 852,
      "slug": "peak-index-in-a-mountain-array",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "An array rises strictly to a single peak and then falls strictly away from it. Return the index of that peak in O(log n) time.",
    "visualType": "bars",
    "initialInput": [
      1,
      3,
      6,
      9,
      12,
      8,
      4,
      2
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · walk the slope",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 2:",
          "    if arr[i] > arr[i + 1]: return i",
          "return n - 1"
        ],
        "starterCode": {
          "javascript": "function peakIndexInMountainArray(arr) {\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] > arr[i + 1]) return i;\n  }\n  return arr.length - 1;\n}",
          "python": "def peakIndexInMountainArray(arr: list[int]) -> int:\n    for i in range(len(arr) - 1):\n        if arr[i] > arr[i + 1]:\n            return i\n    return len(arr) - 1"
        },
        "solutionCode": {
          "javascript": "function peakIndexInMountainArray(arr) {\n  for (let i = 0; i < arr.length - 1; i++) {\n    if (arr[i] > arr[i + 1]) return i;\n  }\n  return arr.length - 1;\n}",
          "python": "def peakIndexInMountainArray(arr: list[int]) -> int:\n    for i in range(len(arr) - 1):\n        if arr[i] > arr[i + 1]:\n            return i\n    return len(arr) - 1"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                6,
                9,
                12,
                8,
                4,
                2
              ]
            ],
            "expected": 4,
            "description": "Peak 12 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Walk slope from left: arr[0] (1) < arr[1] (3), keep climbing.",
            "pointers": [
              {
                "name": "i",
                "index": 0,
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
                0
              ],
              [
                "height",
                1
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "arr[3] (9) < arr[4] (12), climbing.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
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
                "height",
                9
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "arr[4] (12) > arr[5] (8) → Peak reached at index 4 (height 12)!",
            "pointers": [
              {
                "name": "Peak",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Peak at index 4"
            },
            "vars": [
              [
                "peakIndex",
                4
              ],
              [
                "peakHeight",
                12
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "lo ← 0; hi ← n - 1",
          "while lo < hi:",
          "    mid ← (lo + hi) / 2",
          "    if arr[mid] < arr[mid + 1]: lo ← mid + 1   # rising slope",
          "    else: hi ← mid                             # falling slope",
          "return lo"
        ],
        "starterCode": {
          "javascript": "function peakIndexInMountainArray(arr) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (arr[mid] < arr[mid + 1]) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}",
          "python": "def peakIndexInMountainArray(arr: list[int]) -> int:\n    lo, hi = 0, len(arr) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if arr[mid] < arr[mid + 1]:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo"
        },
        "solutionCode": {
          "javascript": "function peakIndexInMountainArray(arr) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (arr[mid] < arr[mid + 1]) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}",
          "python": "def peakIndexInMountainArray(arr: list[int]) -> int:\n    lo, hi = 0, len(arr) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if arr[mid] < arr[mid + 1]:\n            lo = mid + 1\n        else:\n            hi = mid\n    return lo"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                3,
                6,
                9,
                12,
                8,
                4,
                2
              ]
            ],
            "expected": 4,
            "description": "Peak 12 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Mountain heights: [1, 3, 6, 9, 12, 8, 4, 2]. Initialize lo = 0, hi = 7.",
            "window": {
              "start": 0,
              "end": 7,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 7,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (0 + 7) / 2 = 3. arr[3] = 9, arr[4] = 12.",
            "window": {
              "start": 0,
              "end": 7,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 3,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "mid",
                3
              ],
              [
                "hi",
                7
              ],
              [
                "arr[mid]",
                9
              ],
              [
                "arr[mid+1]",
                12
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Still rising at mid → the peak is strictly to the right. Everything up to and including 3 can go. lo ← 4.",
            "window": {
              "start": 4,
              "end": 7,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 7,
                "color": "accent2"
              }
            ],
            "dimmed": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "lo",
                4
              ],
              [
                "hi",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (4 + 7) / 2 = 5. arr[5] = 8, arr[6] = 4.",
            "window": {
              "start": 4,
              "end": 7,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 5,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 7,
                "color": "accent2"
              }
            ],
            "highlights": [
              5,
              6
            ],
            "vars": [
              [
                "lo",
                4
              ],
              [
                "mid",
                5
              ],
              [
                "hi",
                7
              ],
              [
                "arr[mid]",
                8
              ],
              [
                "arr[mid+1]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Falling at mid (arr[5] > arr[6]) → peak is at mid or to the left. hi ← mid = 5.",
            "window": {
              "start": 4,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 5,
                "color": "accent2"
              }
            ],
            "dimmed": [
              6,
              7
            ],
            "vars": [
              [
                "lo",
                4
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (4 + 5) / 2 = 4. arr[4] = 12, arr[5] = 8.",
            "window": {
              "start": 4,
              "end": 5,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 4,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
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
                "lo",
                4
              ],
              [
                "mid",
                4
              ],
              [
                "hi",
                5
              ],
              [
                "arr[mid]",
                12
              ],
              [
                "arr[mid+1]",
                8
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Falling at mid (12 > 8) → hi ← 4. lo == hi == 4 (Peak)!",
            "window": {
              "start": 4,
              "end": 4,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo=hi=Peak",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Peak Index = 4 (Height 12)"
            },
            "vars": [
              [
                "peakIndex",
                4
              ],
              [
                "peakHeight",
                12
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maximum-candies-allocated-to-k-children",
    "patternId": "binary-search",
    "title": "Maximum Candies Allocated to K Children",
    "subtitle": "Binary search the answer, not the array",
    "kind": "problem",
    "leetcode": {
      "id": 2226,
      "slug": "maximum-candies-allocated-to-k-children",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "You have piles of candies and k children. A pile may be split into equal sub-piles, and leftovers are discarded; piles cannot be combined. Find the largest number of candies each child can receive, or 0 if it is impossible.",
    "visualType": "bars",
    "initialInput": [
      5,
      8,
      6
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · try every size",
        "complexity": {
          "time": "O(N · max(piles))",
          "space": "O(1)"
        },
        "pseudocode": [
          "for size from max(piles) down to 1:",
          "    if sum(pile // size) >= k: return size",
          "return 0"
        ],
        "starterCode": {
          "javascript": "function maximumCandies(candies, k) {\n  let maxVal = Math.max(...candies);\n  for (let s = maxVal; s >= 1; s--) {\n    let count = 0;\n    for (let c of candies) count += Math.floor(c / s);\n    if (count >= k) return s;\n  }\n  return 0;\n}",
          "python": "def maximumCandies(candies: list[int], k: int) -> int:\n    for s in range(max(candies), 0, -1):\n        if sum(c // s for c in candies) >= k:\n            return s\n    return 0"
        },
        "solutionCode": {
          "javascript": "function maximumCandies(candies, k) {\n  let maxVal = Math.max(...candies);\n  for (let s = maxVal; s >= 1; s--) {\n    let count = 0;\n    for (let c of candies) count += Math.floor(c / s);\n    if (count >= k) return s;\n  }\n  return 0;\n}",
          "python": "def maximumCandies(candies: list[int], k: int) -> int:\n    for s in range(max(candies), 0, -1):\n        if sum(c // s for c in candies) >= k:\n            return s\n    return 0"
        },
        "testCases": [
          {
            "input": [
              [
                5,
                8,
                6
              ],
              3
            ],
            "expected": 5,
            "description": "Max candies per child is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Try size 8: 5//8 + 8//8 + 6//8 = 0 + 1 + 0 = 1 child (< 3). Cannot satisfy.",
            "highlights": [
              1
            ],
            "vars": [
              [
                "size",
                8
              ],
              [
                "children",
                1
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Try size 7: 0 + 1 + 0 = 1 child (< 3). Cannot satisfy.",
            "highlights": [
              1
            ],
            "vars": [
              [
                "size",
                7
              ],
              [
                "children",
                1
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Try size 6: 0 + 1 + 1 = 2 children (< 3). Cannot satisfy.",
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "size",
                6
              ],
              [
                "children",
                2
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Try size 5: 5//5 + 8//5 + 6//5 = 1 + 1 + 1 = 3 children >= 3! Found max size 5.",
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Max Candies per Child = 5"
            },
            "vars": [
              [
                "size",
                5
              ],
              [
                "children",
                3
              ],
              [
                "need",
                3
              ],
              [
                "result",
                5
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search the answer",
        "complexity": {
          "time": "O(n log max)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo ← 1; hi ← max(piles); best ← 0",
          "2  while lo <= hi:",
          "3      mid ← (lo + hi) / 2",
          "4      if Σ [pile / mid] >= k: best ← mid; lo ← mid + 1",
          "5      else: hi ← mid - 1",
          "6  return best"
        ],
        "starterCode": {
          "javascript": "function maximumCandies(candies, k) {\n  let lo = 1, hi = Math.max(...candies), best = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let count = 0;\n    for (let c of candies) count += Math.floor(c / mid);\n    if (count >= k) {\n      best = mid;\n      lo = mid + 1;\n    } else {\n      hi = mid - 1;\n    }\n  }\n  return best;\n}",
          "python": "def maximumCandies(candies: list[int], k: int) -> int:\n    lo, hi = 1, max(candies)\n    best = 0\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if sum(c // mid for c in candies) >= k:\n            best = mid\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return best"
        },
        "solutionCode": {
          "javascript": "function maximumCandies(candies, k) {\n  let lo = 1, hi = Math.max(...candies), best = 0;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let count = 0;\n    for (let c of candies) count += Math.floor(c / mid);\n    if (count >= k) {\n      best = mid;\n      lo = mid + 1;\n    } else {\n      hi = mid - 1;\n    }\n  }\n  return best;\n}",
          "python": "def maximumCandies(candies: list[int], k: int) -> int:\n    lo, hi = 1, max(candies)\n    best = 0\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if sum(c // mid for c in candies) >= k:\n            best = mid\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return best"
        },
        "testCases": [
          {
            "input": [
              [
                5,
                8,
                6
              ],
              3
            ],
            "expected": 5,
            "description": "Each child receives 5 candies"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Piles: [5, 8, 6], k = 3 children. Range: lo = 1, hi = 8, best = 0.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                1
              ],
              [
                "hi",
                8
              ],
              [
                "best",
                0
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (1 + 8) / 2 = 4 candies/child.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                1
              ],
              [
                "mid",
                4
              ],
              [
                "hi",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Try size 4: 5/4 + 8/4 + 6/4 = 1 + 2 + 1 = 4 children >= 3. Feasible! best ← 4, try larger: lo ← 5.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                5
              ],
              [
                "mid",
                4
              ],
              [
                "hi",
                8
              ],
              [
                "children",
                4
              ],
              [
                "best",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (5 + 8) / 2 = 6 candies/child.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                5
              ],
              [
                "mid",
                6
              ],
              [
                "hi",
                8
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Try size 6: ⌊5/6⌋ + ⌊8/6⌋ + ⌊6/6⌋ = 2 children.",
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "lo",
                5
              ],
              [
                "mid",
                6
              ],
              [
                "hi",
                8
              ],
              [
                "children",
                2
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "2 children < 3 (need 3). Too large! hi ← mid - 1 = 5.",
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "lo",
                5
              ],
              [
                "mid",
                6
              ],
              [
                "hi",
                5
              ],
              [
                "children",
                2
              ],
              [
                "need",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = (5 + 5) / 2 = 5 candies/child.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                5
              ],
              [
                "mid",
                5
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Try size 5: 5/5 + 8/5 + 6/5 = 1 + 1 + 1 = 3 children >= 3! Feasible! best ← 5, lo ← 6.",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "lo",
                6
              ],
              [
                "mid",
                5
              ],
              [
                "hi",
                5
              ],
              [
                "children",
                3
              ],
              [
                "best",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Loop exits (lo 6 > hi 5). Optimal answer is best = 5 candies per child!",
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Max Candies Allocated = 5"
            },
            "vars": [
              [
                "best",
                5
              ],
              [
                "result",
                5
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "koko-eating-bananas",
    "patternId": "binary-search",
    "title": "Apple Harvest (Koko Eating Bananas)",
    "subtitle": "Binary search on the answer · feasibility probe",
    "kind": "problem",
    "leetcode": {
      "id": 875,
      "slug": "koko-eating-bananas",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "statement": "Given piles of bananas and a fixed number of hours, find the minimum constant eating speed (bananas per hour) that lets you finish all piles within the hour limit. Each hour you eat from a single pile, and if a pile has fewer bananas than your speed you still spend the whole hour on it.",
    "visualType": "array",
    "initialInput": [
      3,
      6,
      7,
      11
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · try every speed",
        "complexity": {
          "time": "O(N · max(piles))",
          "space": "O(1)"
        },
        "pseudocode": [
          "for speed from 1 to max(piles):",
          "    hours = sum(ceil(p / speed) for p in piles)",
          "    if hours <= h: return speed"
        ],
        "starterCode": {
          "javascript": "function minEatingSpeed(piles, h) {\n  let maxP = Math.max(...piles);\n  for (let s = 1; s <= maxP; s++) {\n    let hrs = 0;\n    for (let p of piles) hrs += Math.ceil(p / s);\n    if (hrs <= h) return s;\n  }\n  return maxP;\n}",
          "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    import math\n    for s in range(1, max(piles) + 1):\n        if sum(math.ceil(p / s) for p in piles) <= h:\n            return s\n    return max(piles)"
        },
        "solutionCode": {
          "javascript": "function minEatingSpeed(piles, h) {\n  let maxP = Math.max(...piles);\n  for (let s = 1; s <= maxP; s++) {\n    let hrs = 0;\n    for (let p of piles) hrs += Math.ceil(p / s);\n    if (hrs <= h) return s;\n  }\n  return maxP;\n}",
          "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    import math\n    for s in range(1, max(piles) + 1):\n        if sum(math.ceil(p / s) for p in piles) <= h:\n            return s\n    return max(piles)"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                6,
                7,
                11
              ],
              8
            ],
            "expected": 4,
            "description": "Speed k = 4 finishes in 8 hours"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Speed 1: 3 + 6 + 7 + 11 = 27 hrs > 8. Too slow.",
            "customVisual": {
              "secondaryArray": [
                3,
                6,
                7,
                11
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 1"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "speed",
                1
              ],
              [
                "hours",
                27
              ],
              [
                "h",
                8
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Speed 2: 2 + 3 + 4 + 6 = 15 hrs > 8. Too slow.",
            "customVisual": {
              "secondaryArray": [
                2,
                3,
                4,
                6
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 2"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "speed",
                2
              ],
              [
                "hours",
                15
              ],
              [
                "h",
                8
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Speed 3: 1 + 2 + 3 + 4 = 10 hrs > 8. Too slow.",
            "customVisual": {
              "secondaryArray": [
                1,
                2,
                3,
                4
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 3"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "speed",
                3
              ],
              [
                "hours",
                10
              ],
              [
                "h",
                8
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Speed 4: ceil(3/4)=1, ceil(6/4)=2, ceil(7/4)=2, ceil(11/4)=3 → Total 8 hrs <= 8! Minimum speed is 4.",
            "customVisual": {
              "secondaryArray": [
                1,
                2,
                2,
                3
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 4"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "Min Eating Speed = 4"
            },
            "vars": [
              [
                "speed",
                4
              ],
              [
                "hours",
                8
              ],
              [
                "h",
                8
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search the speed",
        "complexity": {
          "time": "O(n log max)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  given piles, H",
          "2  lo ← 1, hi ← max(piles)",
          "3  while lo <= hi:",
          "4      mid ← (lo + hi) / 2",
          "5      if Σ ceil(pile / mid) <= H:",
          "6          ans ← mid; hi ← mid - 1   // try slower",
          "7      else: lo ← mid + 1            // need faster",
          "8  return ans"
        ],
        "starterCode": {
          "javascript": "function minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles), ans = hi;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let hours = 0;\n    for (let p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      ans = mid;\n      hi = mid - 1;\n    } else {\n      lo = mid + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    import math\n    lo, hi = 1, max(piles)\n    ans = hi\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        hours = sum(math.ceil(p / mid) for p in piles)\n        if hours <= h:\n            ans = mid\n            hi = mid - 1\n        else:\n            lo = mid + 1\n    return ans"
        },
        "solutionCode": {
          "javascript": "function minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles), ans = hi;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let hours = 0;\n    for (let p of piles) hours += Math.ceil(p / mid);\n    if (hours <= h) {\n      ans = mid;\n      hi = mid - 1;\n    } else {\n      lo = mid + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def minEatingSpeed(piles: list[int], h: int) -> int:\n    import math\n    lo, hi = 1, max(piles)\n    ans = hi\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        hours = sum(math.ceil(p / mid) for p in piles)\n        if hours <= h:\n            ans = mid\n            hi = mid - 1\n        else:\n            lo = mid + 1\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                6,
                7,
                11
              ],
              8
            ],
            "expected": 4,
            "description": "Speed 4 finishes in 8 hours"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Piles: [3, 6, 7, 11], H = 8 hours. Search speed range: lo = 1, hi = 11 bananas/hr.",
            "customVisual": {
              "secondaryArray": [
                3,
                6,
                7,
                11
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 1"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "lo..hi",
                "1..11"
              ],
              [
                "k = mid",
                "-"
              ],
              [
                "hours",
                "-"
              ],
              [
                "fits",
                "-"
              ],
              [
                "best k",
                "-"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Speeds [1..11] remain. Probe the middle: k = 6 → 1 + 1 + 2 + 2 = 6 <= 8 ✓. It fits, remember it, but a SLOWER speed might also fit: search [1..5].",
            "customVisual": {
              "secondaryArray": [
                1,
                1,
                2,
                2
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 6"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "lo..hi",
                "1..11"
              ],
              [
                "k = mid",
                6
              ],
              [
                "hours",
                6
              ],
              [
                "fits",
                "✓"
              ],
              [
                "best k",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Probe speed k = 3: 1 + 2 + 3 + 4 = 10 hrs > 8 ✗. Too slow! Need faster speed: search [4..5].",
            "customVisual": {
              "secondaryArray": [
                1,
                2,
                3,
                4
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 3"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "lo..hi",
                "1..5"
              ],
              [
                "k = mid",
                3
              ],
              [
                "hours",
                10
              ],
              [
                "fits",
                "✗"
              ],
              [
                "best k",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Probe speed k = 4: 1 + 2 + 2 + 3 = 8 hrs <= 8 ✓. Feasible! ans = 4, try slower: hi = 3.",
            "customVisual": {
              "secondaryArray": [
                1,
                2,
                2,
                3
              ],
              "secondaryLabel": "HOURS PER PILE AT K = 4"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "Min Eating Speed = 4"
            },
            "vars": [
              [
                "lo..hi",
                "4..5"
              ],
              [
                "k = mid",
                4
              ],
              [
                "hours",
                8
              ],
              [
                "fits",
                "✓"
              ],
              [
                "best k",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "search-rotated-sorted",
    "patternId": "binary-search",
    "title": "Search in Rotated Sorted Array",
    "subtitle": "One half is always sorted, use it to steer",
    "kind": "problem",
    "leetcode": {
      "id": 33,
      "slug": "search-in-rotated-sorted-array",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "statement": "Given an ascending sorted array that has been rotated at an unknown pivot, find the index of a target value in O(log n) time, returning -1 if it is not present.",
    "visualType": "array",
    "initialInput": [
      4,
      5,
      6,
      7,
      0,
      1,
      2
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · linear scan",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "for i from 0 to n - 1:",
          "    if nums[i] == target: return i",
          "return -1"
        ],
        "starterCode": {
          "javascript": "function search(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === target) return i;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] == target:\n            return i\n    return -1"
        },
        "solutionCode": {
          "javascript": "function search(nums, target) {\n  for (let i = 0; i < nums.length; i++) {\n    if (nums[i] === target) return i;\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    for i in range(len(nums)):\n        if nums[i] == target:\n            return i\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                4,
                5,
                6,
                7,
                0,
                1,
                2
              ],
              0
            ],
            "expected": 4,
            "description": "Target 0 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 0. Linear scan index 0..3: values [4, 5, 6, 7] != 0.",
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "dimmed": [
              0,
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
                "nums[i]",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Scan index 4: nums[4] == 0! Target found.",
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Found Target 0 at index 4"
            },
            "vars": [
              [
                "result",
                4
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · steer by the sorted half",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = 0, hi = n - 1",
          "2  while lo <= hi:",
          "3      mid = (lo + hi) / 2",
          "4      if arr[mid] == target: return mid",
          "5      if arr[lo] <= arr[mid]:                 // left sorted",
          "6          target in [arr[lo], arr[mid]) ? hi = mid - 1 : lo = mid + 1",
          "7      else:                                   // right sorted",
          "8          target in (arr[mid], arr[hi]] ? lo = mid + 1 : hi = mid - 1"
        ],
        "starterCode": {
          "javascript": "function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[lo] <= nums[mid]:\n            if nums[lo] <= target < nums[mid]:\n                hi = mid - 1\n            else:\n                lo = mid + 1\n        else:\n            if nums[mid] < target <= nums[hi]:\n                lo = mid + 1\n            else:\n                hi = mid - 1\n    return -1"
        },
        "solutionCode": {
          "javascript": "function search(nums, target) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] === target) return mid;\n    if (nums[lo] <= nums[mid]) {\n      if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n      else lo = mid + 1;\n    } else {\n      if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n      else hi = mid - 1;\n    }\n  }\n  return -1;\n}",
          "python": "def search(nums: list[int], target: int) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if nums[mid] == target:\n            return mid\n        if nums[lo] <= nums[mid]:\n            if nums[lo] <= target < nums[mid]:\n                hi = mid - 1\n            else:\n                lo = mid + 1\n        else:\n            if nums[mid] < target <= nums[hi]:\n                lo = mid + 1\n            else:\n                hi = mid - 1\n    return -1"
        },
        "testCases": [
          {
            "input": [
              [
                4,
                5,
                6,
                7,
                0,
                1,
                2
              ],
              0
            ],
            "expected": 4,
            "description": "Target 0 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target = 0. Array = [4, 5, 6, 7, 0, 1, 2]. Set lo = 0, hi = 6.",
            "window": {
              "start": 0,
              "end": 6,
              "label": "SEARCH RANGE"
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                6
              ],
              [
                "target",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = 3 (val 7). Left half [4..7] is sorted, target 0 is not in [4..7) → search right: lo = 4.",
            "window": {
              "start": 0,
              "end": 6,
              "label": "SEARCH RANGE"
            },
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 3,
                  "label": "SORTED HALF ✓",
                  "color": "amber"
                }
              ]
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 3,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "dimmed": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "mid",
                3
              ],
              [
                "arr[mid]",
                7
              ],
              [
                "sorted half",
                "left"
              ],
              [
                "go",
                "→ right"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "lo = 4, hi = 6 → mid = 5. arr[4] = 0 <= arr[5] = 1 → LEFT half is sorted: values 0..1. Target 0 IS in that range → search left.",
            "customVisual": {
              "brackets": [
                {
                  "start": 4,
                  "end": 5,
                  "label": "SORTED HALF ✓",
                  "color": "amber"
                }
              ]
            },
            "pointers": [
              {
                "name": "mid",
                "index": 5,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              4,
              5
            ],
            "dimmed": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "mid",
                5
              ],
              [
                "arr[mid]",
                1
              ],
              [
                "sorted half",
                "left"
              ],
              [
                "go",
                "← left"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "lo = 4, hi = 4. mid = 4 (val 0). arr[4] == 0! Target found at index 4.",
            "pointers": [
              {
                "name": "mid",
                "index": 4,
                "color": "green",
                "position": "top"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Found Target 0 at index 4",
              "indices": [
                4
              ]
            },
            "vars": [
              [
                "result",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "patternId": "binary-search",
    "title": "Find Minimum in Rotated Sorted Array",
    "subtitle": "Compare mid to hi to find the cliff",
    "kind": "problem",
    "leetcode": {
      "id": 153,
      "slug": "find-minimum-in-rotated-sorted-array",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "statement": "An ascending sorted array of unique values was rotated at an unknown pivot. Return its minimum element in O(log n) time.",
    "visualType": "array",
    "initialInput": [
      4,
      5,
      6,
      7,
      0,
      1,
      2
    ],
    "approaches": [
      {
        "id": "optimized",
        "label": "Binary search on the rotation",
        "complexity": {
          "time": "O(log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = 0, hi = n - 1",
          "2  while lo < hi:",
          "3      mid = lo + (hi - lo) / 2",
          "4      if arr[mid] > arr[hi]:    // cliff is to the right",
          "5          lo = mid + 1",
          "6      else:                     // min at mid or left of mid",
          "7          hi = mid",
          "8  return arr[lo]"
        ],
        "starterCode": {
          "javascript": "function findMin(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] > nums[hi]) lo = mid + 1;\n    else hi = mid;\n  }\n  return nums[lo];\n}",
          "python": "def findMin(nums: list[int]) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if nums[mid] > nums[hi]:\n            lo = mid + 1\n        else:\n            hi = mid\n    return nums[lo]"
        },
        "solutionCode": {
          "javascript": "function findMin(nums) {\n  let lo = 0, hi = nums.length - 1;\n  while (lo < hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (nums[mid] > nums[hi]) lo = mid + 1;\n    else hi = mid;\n  }\n  return nums[lo];\n}",
          "python": "def findMin(nums: list[int]) -> int:\n    lo, hi = 0, len(nums) - 1\n    while lo < hi:\n        mid = (lo + hi) // 2\n        if nums[mid] > nums[hi]:\n            lo = mid + 1\n        else:\n            hi = mid\n    return nums[lo]"
        },
        "testCases": [
          {
            "input": [
              [
                4,
                5,
                6,
                7,
                0,
                1,
                2
              ]
            ],
            "expected": 0,
            "description": "Min is 0 at index 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "A sorted array was ROTATED: [0,1,2,4,5,6,7] became [4,5,6,7,0,1,2]. The minimum is the rotation point, the single \"cliff\" where 7 drops to 0. We never scan: keep a range [lo, hi] containing the cliff and halve it. Start lo = 0, hi = 6.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 3,
                  "label": "HIGH BLOCK",
                  "color": "blue"
                },
                {
                  "start": 4,
                  "end": 6,
                  "label": "LOW BLOCK (HOLDS MIN)",
                  "color": "amber"
                }
              ]
            },
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "mid = 3 (val 7), hi = 6 (val 2). arr[mid] > arr[hi] (7 > 2) → rotation cliff is on right! lo = mid + 1 = 4.",
            "pointers": [
              {
                "name": "lo",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 3,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              3
            ],
            "dimmed": [
              0,
              1,
              2,
              3
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "mid",
                3
              ],
              [
                "hi",
                6
              ],
              [
                "arr[mid]",
                7
              ],
              [
                "arr[hi]",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "lo = 4, hi = 6. mid = 5 (val 1), hi = 6 (val 2). arr[mid] <= arr[hi] (1 <= 2) → min is at mid or to left. hi = mid = 5.",
            "pointers": [
              {
                "name": "lo",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "mid",
                "index": 5,
                "color": "purple",
                "position": "top"
              },
              {
                "name": "hi",
                "index": 6,
                "color": "accent2"
              }
            ],
            "highlights": [
              5
            ],
            "dimmed": [
              0,
              1,
              2,
              3,
              6
            ],
            "vars": [
              [
                "lo",
                4
              ],
              [
                "mid",
                5
              ],
              [
                "hi",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "lo = 4, hi = 5. mid = 4 (val 0), hi = 5 (val 1). arr[4] <= arr[5] (0 <= 1) → hi = 4.",
            "pointers": [
              {
                "name": "Min",
                "index": 4,
                "color": "green"
              }
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Minimum Element = 0"
            },
            "vars": [
              [
                "minElement",
                0
              ],
              [
                "index",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "search-a-2d-matrix",
    "patternId": "binary-search",
    "title": "Search a 2D Matrix",
    "subtitle": "Treat the grid as one flat sorted array · binary search 0..m·n-1",
    "kind": "problem",
    "leetcode": {
      "id": 74,
      "slug": "search-a-2d-matrix",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "statement": "Given an m x n matrix where each row is sorted left-to-right and the first integer of each row is greater than the last integer of the previous row, determine whether a target value exists in the matrix in O(log(m·n)) time.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        3,
        5,
        7
      ],
      [
        10,
        11,
        16,
        20
      ],
      [
        23,
        30,
        34,
        60
      ]
    ],
    "approaches": [
      {
        "id": "optimized",
        "label": "Binary search the flattened grid",
        "complexity": {
          "time": "O(log(m·n))",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = 0, hi = m * n - 1",
          "2  while lo <= hi:",
          "3      mid = (lo + hi) / 2",
          "4      val = matrix[mid / n][mid % n]",
          "5      if val == target: return True",
          "6      if val < target: lo = mid + 1",
          "7      else: hi = mid - 1",
          "8  return False"
        ],
        "starterCode": {
          "javascript": "function searchMatrix(matrix, target) {\n  const m = matrix.length, n = matrix[0].length;\n  let lo = 0, hi = m * n - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    const val = matrix[Math.floor(mid / n)][mid % n];\n    if (val === target) return true;\n    if (val < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}",
          "python": "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    m, n = len(matrix), len(matrix[0])\n    lo, hi = 0, m * n - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        val = matrix[mid // n][mid % n]\n        if val == target:\n            return True\n        elif val < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return False"
        },
        "solutionCode": {
          "javascript": "function searchMatrix(matrix, target) {\n  const m = matrix.length, n = matrix[0].length;\n  let lo = 0, hi = m * n - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    const val = matrix[Math.floor(mid / n)][mid % n];\n    if (val === target) return true;\n    if (val < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  return false;\n}",
          "python": "def searchMatrix(matrix: list[list[int]], target: int) -> bool:\n    m, n = len(matrix), len(matrix[0])\n    lo, hi = 0, m * n - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        val = matrix[mid // n][mid % n]\n        if val == target:\n            return True\n        elif val < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  3,
                  5,
                  7
                ],
                [
                  10,
                  11,
                  16,
                  20
                ],
                [
                  23,
                  30,
                  34,
                  60
                ]
              ],
              3
            ],
            "expected": true,
            "description": "Target 3 exists"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Matrix 3x4 (total 12 elements). Target = 3. Virtual 1D indices: lo = 0, hi = 11.",
            "customVisual": {
              "label": "3 × 4 GRID · READ AS A FLAT SORTED ARRAY OF LENGTH 12"
            },
            "matrix": [
              [
                1,
                3,
                5,
                7
              ],
              [
                10,
                11,
                16,
                20
              ],
              [
                23,
                30,
                34,
                60
              ]
            ],
            "vars": [
              [
                "lo",
                0
              ],
              [
                "hi",
                11
              ],
              [
                "target",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "mid = 5. row = 1, col = 1, matrix[1][1] = 11. 11 > 3 → search left: hi = 4.",
            "customVisual": {
              "label": "3 × 4 GRID · READ AS A FLAT SORTED ARRAY OF LENGTH 12"
            },
            "matrix": [
              [
                1,
                3,
                5,
                7
              ],
              [
                10,
                11,
                16,
                20
              ],
              [
                23,
                30,
                34,
                60
              ]
            ],
            "highlights": [
              5
            ],
            "dimmed": [
              5,
              6,
              7,
              8,
              9,
              10,
              11
            ],
            "vars": [
              [
                "mid",
                5
              ],
              [
                "cell",
                "(1, 1)"
              ],
              [
                "grid[mid]",
                11
              ],
              [
                "keep",
                "LEFT"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "lo = 0, hi = 4. mid = 2. row = 0, col = 2, matrix[0][2] = 5. 5 > 3 → hi = 1.",
            "customVisual": {
              "label": "3 × 4 GRID · READ AS A FLAT SORTED ARRAY OF LENGTH 12"
            },
            "matrix": [
              [
                1,
                3,
                5,
                7
              ],
              [
                10,
                11,
                16,
                20
              ],
              [
                23,
                30,
                34,
                60
              ]
            ],
            "highlights": [
              2
            ],
            "dimmed": [
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
            ],
            "vars": [
              [
                "mid",
                2
              ],
              [
                "cell",
                "(0, 2)"
              ],
              [
                "grid[mid]",
                5
              ],
              [
                "keep",
                "LEFT"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "mid index = 0 → row = 0, col = 0, grid[0][0] = 1 < 3. The flat array is sorted, so the target must be in the RIGHT half, discard every index <= 0 and set lo = 1.",
            "customVisual": {
              "label": "3 × 4 GRID · READ AS A FLAT SORTED ARRAY OF LENGTH 12"
            },
            "matrix": [
              [
                1,
                3,
                5,
                7
              ],
              [
                10,
                11,
                16,
                20
              ],
              [
                23,
                30,
                34,
                60
              ]
            ],
            "highlights": [
              0
            ],
            "dimmed": [
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
              11
            ],
            "vars": [
              [
                "mid",
                0
              ],
              [
                "cell",
                "(0, 0)"
              ],
              [
                "grid[mid]",
                1
              ],
              [
                "keep",
                "RIGHT"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "lo = 1, hi = 1. mid = 1. row = 0, col = 1, matrix[0][1] = 3. Target 3 found at (0, 1)!",
            "customVisual": {
              "label": "3 × 4 GRID · READ AS A FLAT SORTED ARRAY OF LENGTH 12"
            },
            "matrix": [
              [
                1,
                3,
                5,
                7
              ],
              [
                10,
                11,
                16,
                20
              ],
              [
                23,
                30,
                34,
                60
              ]
            ],
            "highlights": [
              1
            ],
            "best": {
              "label": "Target 3 found at cell (0, 1)"
            },
            "vars": [
              [
                "found",
                true
              ],
              [
                "location",
                "(0, 1)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "split-array-largest-sum",
    "patternId": "binary-search",
    "title": "Split Array Largest Sum",
    "subtitle": "Binary search the cap · greedy feasibility",
    "kind": "problem",
    "leetcode": {
      "id": 410,
      "slug": "split-array-largest-sum",
      "difficulty": "Hard"
    },
    "companies": [
      "Google",
      "Amazon"
    ],
    "statement": "Given an array of non-negative integers and an integer k, split the array into k non-empty contiguous subarrays so that the largest subarray sum is minimized, and return that minimized largest sum.",
    "visualType": "array",
    "initialInput": [
      7,
      2,
      5,
      10,
      8
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · try every cut",
        "complexity": {
          "time": "O(N^k)",
          "space": "O(N)"
        },
        "pseudocode": [
          "for each way to place k - 1 cuts in array:",
          "    max_subarray = max(sum(piece) for piece in subarrays)",
          "    best = min(best, max_subarray)",
          "return best"
        ],
        "starterCode": {
          "javascript": "function splitArray(nums, k) {\n  // Brute force recursion across cut boundaries\n}",
          "python": "def splitArray(nums: list[int], k: int) -> int:\n    pass"
        },
        "solutionCode": {
          "javascript": "function splitArray(nums, k) {\n  let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0);\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let pieces = 1, sum = 0;\n    for (let x of nums) {\n      if (sum + x > mid) { pieces++; sum = x; } else sum += x;\n    }\n    if (pieces <= k) hi = mid - 1;\n    else lo = mid + 1;\n  }\n  return lo;\n}",
          "python": "def splitArray(nums: list[int], k: int) -> int:\n    lo, hi = max(nums), sum(nums)\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        pieces, sum_curr = 1, 0\n        for x in nums:\n            if sum_curr + x > mid:\n                pieces += 1\n                sum_curr = x\n            else:\n                sum_curr += x\n        if pieces <= k: hi = mid - 1\n        else: lo = mid + 1\n    return lo"
        },
        "testCases": [
          {
            "input": [
              [
                7,
                2,
                5,
                10,
                8
              ],
              2
            ],
            "expected": 18,
            "description": "Split into [7,2,5] (14) and [10,8] (18)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Try cut [7] (7) and [2,5,10,8] (25) → Max piece is 25.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 0,
                  "label": "SUM=7",
                  "color": "blue"
                },
                {
                  "start": 1,
                  "end": 4,
                  "label": "SUM=25",
                  "color": "amber"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "cut",
                "at 0"
              ],
              [
                "max_piece",
                25
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Try cut [7,2,5] (14) and [10,8] (18) → Max piece is 18. This minimizes the largest sum!",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "SUM=14",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 4,
                  "label": "SUM=18",
                  "color": "amber"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Optimal Largest Sum = 18"
            },
            "vars": [
              [
                "cut",
                "at 2"
              ],
              [
                "max_piece",
                18
              ],
              [
                "best",
                18
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search the answer",
        "complexity": {
          "time": "O(n log Σ)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = max(arr), hi = sum(arr)",
          "2  while lo <= hi:",
          "3      cap = (lo + hi) / 2",
          "4      greedy: count pieces if no piece > cap",
          "5      if pieces <= m:",
          "6          ans = cap; hi = cap - 1    // tighter",
          "7      else: lo = cap + 1             // looser",
          "8  return ans"
        ],
        "starterCode": {
          "javascript": "function splitArray(nums, k) {\n  let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0), ans = hi;\n  while (lo <= hi) {\n    const cap = Math.floor((lo + hi) / 2);\n    let pieces = 1, sum = 0;\n    for (let x of nums) {\n      if (sum + x > cap) {\n        pieces++;\n        sum = x;\n      } else {\n        sum += x;\n      }\n    }\n    if (pieces <= k) {\n      ans = cap;\n      hi = cap - 1;\n    } else {\n      lo = cap + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def splitArray(nums: list[int], k: int) -> int:\n    lo, hi = max(nums), sum(nums)\n    ans = hi\n    while lo <= hi:\n        cap = (lo + hi) // 2\n        pieces, s = 1, 0\n        for x in nums:\n            if s + x > cap:\n                pieces += 1\n                s = x\n            else:\n                s += x\n        if pieces <= k:\n            ans = cap\n            hi = cap - 1\n        else:\n            lo = cap + 1\n    return ans"
        },
        "solutionCode": {
          "javascript": "function splitArray(nums, k) {\n  let lo = Math.max(...nums), hi = nums.reduce((a, b) => a + b, 0), ans = hi;\n  while (lo <= hi) {\n    const cap = Math.floor((lo + hi) / 2);\n    let pieces = 1, sum = 0;\n    for (let x of nums) {\n      if (sum + x > cap) {\n        pieces++;\n        sum = x;\n      } else {\n        sum += x;\n      }\n    }\n    if (pieces <= k) {\n      ans = cap;\n      hi = cap - 1;\n    } else {\n      lo = cap + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def splitArray(nums: list[int], k: int) -> int:\n    lo, hi = max(nums), sum(nums)\n    ans = hi\n    while lo <= hi:\n        cap = (lo + hi) // 2\n        pieces, s = 1, 0\n        for x in nums:\n            if s + x > cap:\n                pieces += 1\n                s = x\n            else:\n                s += x\n        if pieces <= k:\n            ans = cap\n            hi = cap - 1\n        else:\n            lo = cap + 1\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                7,
                2,
                5,
                10,
                8
              ],
              2
            ],
            "expected": 18,
            "description": "Split into [7,2,5] (sum 14) and [10,8] (sum 18)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "nums = [7, 2, 5, 10, 8], k = 2. Range: lo = max = 10, hi = sum = 32.",
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "lo",
                10
              ],
              [
                "hi",
                32
              ],
              [
                "k",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Probe mid cap = 21. Subarrays: [7,2,5] (14), [10,8] (18) → 2 pieces <= 2 ✓. Feasible, search tighter [10..20].",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "SUM=14",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 4,
                  "label": "SUM=18",
                  "color": "amber"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "cap",
                21
              ],
              [
                "pieces",
                "2 / 2"
              ],
              [
                "feasible",
                "✓"
              ],
              [
                "best",
                21
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "lo = 10, hi = 20. Probe cap = 15. Subarrays: [7,2,5] (14), [10] (10), [8] (8) → 3 pieces > 2 ✗. Too small! lo = 16.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "SUM=14",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 3,
                  "label": "SUM=10",
                  "color": "amber"
                },
                {
                  "start": 4,
                  "end": 4,
                  "label": "SUM=8",
                  "color": "red"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "vars": [
              [
                "cap",
                15
              ],
              [
                "pieces",
                "3 / 2"
              ],
              [
                "feasible",
                "✗"
              ],
              [
                "best",
                21
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "cap ∈ [16..20], probe mid = 18. Greedy-fill pieces, cutting only when forced: [7,2,5] [10,8] → 2 pieces <= 2 ✓. Feasible, try a smaller cap: [16..17].",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "SUM=14",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 4,
                  "label": "SUM=18",
                  "color": "amber"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Optimal Minimized Largest Sum = 18"
            },
            "vars": [
              [
                "cap",
                18
              ],
              [
                "pieces",
                "2 / 2"
              ],
              [
                "feasible",
                "✓"
              ],
              [
                "best",
                18
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kth-smallest-element-in-a-sorted-matrix",
    "patternId": "binary-search",
    "title": "Kth Smallest in a Sorted Matrix",
    "subtitle": "Binary search on values · count <= x probes",
    "kind": "problem",
    "leetcode": {
      "id": 378,
      "slug": "kth-smallest-element-in-a-sorted-matrix",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "Given an n x n matrix whose rows and columns are each sorted in ascending order, find the kth smallest element in the matrix considering its sorted order, counting duplicate values separately.",
    "visualType": "array",
    "initialInput": [
      1,
      5,
      9,
      10,
      11,
      13,
      12,
      13,
      15
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · flatten and sort",
        "complexity": {
          "time": "O(n² log n²)",
          "space": "O(n²)"
        },
        "pseudocode": [
          "1  given matrix, k",
          "2  flatten into a list; sort it",
          "3  return list[k - 1]"
        ],
        "starterCode": {
          "javascript": "function kthSmallest(matrix, k) {\n  const flat = matrix.flat().sort((a, b) => a - b);\n  return flat[k - 1];\n}",
          "python": "def kthSmallest(matrix: list[list[int]], k: int) -> int:\n    flat = sorted([x for row in matrix for x in row])\n    return flat[k - 1]"
        },
        "solutionCode": {
          "javascript": "function kthSmallest(matrix, k) {\n  const flat = matrix.flat().sort((a, b) => a - b);\n  return flat[k - 1];\n}",
          "python": "def kthSmallest(matrix: list[list[int]], k: int) -> int:\n    flat = sorted([x for row in matrix for x in row])\n    return flat[k - 1]"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  5,
                  9
                ],
                [
                  10,
                  11,
                  13
                ],
                [
                  12,
                  13,
                  15
                ]
              ],
              8
            ],
            "expected": 13,
            "description": "8th smallest is 13"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "A 3×3 matrix where every ROW and every COLUMN is sorted (shown flattened, one bracket per row). Find the k = 8th smallest element. Brute: ignore all that structure, dump and sort.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "ROW 0 →",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 5,
                  "label": "ROW 1 →",
                  "color": "amber"
                },
                {
                  "start": 6,
                  "end": 8,
                  "label": "ROW 2 →",
                  "color": "gray"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "vars": [
              [
                "k",
                8
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Sort flattened array: [1, 5, 9, 10, 11, 12, 13, 13, 15]. The 8th element (1-based) is index 7 value 13.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "ROW 0 →",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 5,
                  "label": "ROW 1 →",
                  "color": "amber"
                },
                {
                  "start": 6,
                  "end": 8,
                  "label": "ROW 2 →",
                  "color": "gray"
                }
              ]
            },
            "highlights": [
              7
            ],
            "best": {
              "label": "8th Smallest = 13"
            },
            "vars": [
              [
                "result",
                13
              ],
              [
                "k",
                8
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search the value range",
        "complexity": {
          "time": "O(n log range)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = matrix min, hi = matrix max",
          "2  while lo <= hi:",
          "3      x = (lo + hi) / 2",
          "4      cnt = # cells <= x   (per sorted row)",
          "5      if cnt >= k:",
          "6          ans = x; hi = x - 1",
          "7      else: lo = x + 1",
          "8  return ans"
        ],
        "starterCode": {
          "javascript": "function kthSmallest(matrix, k) {\n  const n = matrix.length;\n  let lo = matrix[0][0], hi = matrix[n-1][n-1], ans = hi;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let count = 0, c = n - 1;\n    for (let r = 0; r < n; r++) {\n      while (c >= 0 && matrix[r][c] > mid) c--;\n      count += (c + 1);\n    }\n    if (count >= k) {\n      ans = mid;\n      hi = mid - 1;\n    } else {\n      lo = mid + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def kthSmallest(matrix: list[list[int]], k: int) -> int:\n    n = len(matrix)\n    lo, hi = matrix[0][0], matrix[n-1][n-1]\n    ans = hi\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        count, c = 0, n - 1\n        for r in range(n):\n            while c >= 0 and matrix[r][c] > mid:\n                c -= 1\n            count += (c + 1)\n        if count >= k:\n            ans = mid\n            hi = mid - 1\n        else:\n            lo = mid + 1\n    return ans"
        },
        "solutionCode": {
          "javascript": "function kthSmallest(matrix, k) {\n  const n = matrix.length;\n  let lo = matrix[0][0], hi = matrix[n-1][n-1], ans = hi;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    let count = 0, c = n - 1;\n    for (let r = 0; r < n; r++) {\n      while (c >= 0 && matrix[r][c] > mid) c--;\n      count += (c + 1);\n    }\n    if (count >= k) {\n      ans = mid;\n      hi = mid - 1;\n    } else {\n      lo = mid + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def kthSmallest(matrix: list[list[int]], k: int) -> int:\n    n = len(matrix)\n    lo, hi = matrix[0][0], matrix[n-1][n-1]\n    ans = hi\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        count, c = 0, n - 1\n        for r in range(n):\n            while c >= 0 and matrix[r][c] > mid:\n                c -= 1\n            count += (c + 1)\n        if count >= k:\n            ans = mid\n            hi = mid - 1\n        else:\n            lo = mid + 1\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  5,
                  9
                ],
                [
                  10,
                  11,
                  13
                ],
                [
                  12,
                  13,
                  15
                ]
              ],
              8
            ],
            "expected": 13,
            "description": "8th smallest is 13"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Matrix range: lo = 1, hi = 15, k = 8.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "ROW 0 →",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 5,
                  "label": "ROW 1 →",
                  "color": "amber"
                },
                {
                  "start": 6,
                  "end": 8,
                  "label": "ROW 2 →",
                  "color": "gray"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "vars": [
              [
                "lo",
                1
              ],
              [
                "hi",
                15
              ],
              [
                "k",
                8
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Values [13..15], probe x = 14. Count <= 14 per row: 3 + 3 + 2 = 8 >= k = 8 ✓. The k-th is <= 14, search smaller: [13..13].",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "ROW 0 →",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 5,
                  "label": "ROW 1 →",
                  "color": "amber"
                },
                {
                  "start": 6,
                  "end": 8,
                  "label": "ROW 2 →",
                  "color": "gray"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            "dimmed": [
              8
            ],
            "vars": [
              [
                "x",
                14
              ],
              [
                "count <= x",
                "8 >= 8"
              ],
              [
                "verdict",
                "✓"
              ],
              [
                "best",
                14
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Probe x = 13. Count <= 13: 3 + 3 + 2 = 8 >= 8 ✓. Found optimal value: 13.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 2,
                  "label": "ROW 0 →",
                  "color": "blue"
                },
                {
                  "start": 3,
                  "end": 5,
                  "label": "ROW 1 →",
                  "color": "amber"
                },
                {
                  "start": 6,
                  "end": 8,
                  "label": "ROW 2 →",
                  "color": "gray"
                }
              ]
            },
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              7
            ],
            "best": {
              "label": "8th Smallest Value = 13"
            },
            "vars": [
              [
                "x",
                13
              ],
              [
                "count <= x",
                "8 >= 8"
              ],
              [
                "verdict",
                "✓"
              ],
              [
                "best",
                13
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "capacity-to-ship-packages-within-d-days",
    "patternId": "binary-search",
    "title": "Minimum Shipping Capacity",
    "subtitle": "Ship packages in D days · search the capacity",
    "kind": "problem",
    "leetcode": {
      "id": 1011,
      "slug": "capacity-to-ship-packages-within-d-days",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google"
    ],
    "statement": "Given package weights that must be shipped in their given order, find the minimum ship capacity such that all packages can be shipped within a given number of days, where each day loads consecutive packages without exceeding the capacity.",
    "visualType": "array",
    "initialInput": [
      3,
      2,
      2,
      4,
      1,
      4
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · grow the ship one unit at a time",
        "complexity": {
          "time": "O(N · sum(w))",
          "space": "O(1)"
        },
        "pseudocode": [
          "for cap from max(weights) to sum(weights):",
          "    days = count_days(weights, cap)",
          "    if days <= D: return cap"
        ],
        "starterCode": {
          "javascript": "function shipWithinDays(weights, days) {\n  let maxW = Math.max(...weights), sumW = weights.reduce((a, b) => a + b, 0);\n  for (let cap = maxW; cap <= sumW; cap++) {\n    let needed = 1, curr = 0;\n    for (let w of weights) {\n      if (curr + w > cap) { needed++; curr = w; } else curr += w;\n    }\n    if (needed <= days) return cap;\n  }\n  return sumW;\n}",
          "python": "def shipWithinDays(weights: list[int], days: int) -> int:\n    for cap in range(max(weights), sum(weights) + 1):\n        needed, curr = 1, 0\n        for w in weights:\n            if curr + w > cap:\n                needed += 1\n                curr = w\n            else:\n                curr += w\n        if needed <= days:\n            return cap\n    return sum(weights)"
        },
        "solutionCode": {
          "javascript": "function shipWithinDays(weights, days) {\n  let maxW = Math.max(...weights), sumW = weights.reduce((a, b) => a + b, 0);\n  for (let cap = maxW; cap <= sumW; cap++) {\n    let needed = 1, curr = 0;\n    for (let w of weights) {\n      if (curr + w > cap) { needed++; curr = w; } else curr += w;\n    }\n    if (needed <= days) return cap;\n  }\n  return sumW;\n}",
          "python": "def shipWithinDays(weights: list[int], days: int) -> int:\n    for cap in range(max(weights), sum(weights) + 1):\n        needed, curr = 1, 0\n        for w in weights:\n            if curr + w > cap:\n                needed += 1\n                curr = w\n            else:\n                curr += w\n        if needed <= days:\n            return cap\n    return sum(weights)"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                2,
                4,
                1,
                4
              ],
              3
            ],
            "expected": 6,
            "description": "Capacity 6 ships in 3 days"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Try cap = 4: [3] [2,2] [4] [1] [4] → 5 days > 3. Too small.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 0,
                  "label": "DAY 1 - 3",
                  "color": "blue"
                },
                {
                  "start": 1,
                  "end": 2,
                  "label": "DAY 2 - 4",
                  "color": "amber"
                },
                {
                  "start": 3,
                  "end": 3,
                  "label": "DAY 3 - 4",
                  "color": "red"
                },
                {
                  "start": 4,
                  "end": 4,
                  "label": "DAY 4 - 1",
                  "color": "gray"
                },
                {
                  "start": 5,
                  "end": 5,
                  "label": "DAY 5 - 4",
                  "color": "gray"
                }
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
                "cap",
                4
              ],
              [
                "days",
                5
              ],
              [
                "D",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Try cap = 6: [3, 2], [2, 4], [1, 4] → 3 days <= 3! Minimum capacity is 6.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 1,
                  "label": "DAY 1 - 5",
                  "color": "blue"
                },
                {
                  "start": 2,
                  "end": 3,
                  "label": "DAY 2 - 6",
                  "color": "amber"
                },
                {
                  "start": 4,
                  "end": 5,
                  "label": "DAY 3 - 5",
                  "color": "green"
                }
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
            "best": {
              "label": "Minimum Capacity = 6"
            },
            "vars": [
              [
                "cap",
                6
              ],
              [
                "days",
                3
              ],
              [
                "D",
                3
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · binary search the capacity",
        "complexity": {
          "time": "O(n log Σ)",
          "space": "O(1)"
        },
        "pseudocode": [
          "1  lo = max(w), hi = sum(w)",
          "2  while lo <= hi:",
          "3      cap = (lo + hi) / 2",
          "4      days = greedy-load at cap",
          "5      if days <= D:",
          "6          ans = cap; hi = cap - 1",
          "7      else: lo = cap + 1",
          "8  return ans"
        ],
        "starterCode": {
          "javascript": "function shipWithinDays(weights, days) {\n  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0), ans = hi;\n  while (lo <= hi) {\n    const cap = Math.floor((lo + hi) / 2);\n    let needed = 1, curr = 0;\n    for (let w of weights) {\n      if (curr + w > cap) { needed++; curr = w; } else curr += w;\n    }\n    if (needed <= days) {\n      ans = cap;\n      hi = cap - 1;\n    } else {\n      lo = cap + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def shipWithinDays(weights: list[int], days: int) -> int:\n    lo, hi = max(weights), sum(weights)\n    ans = hi\n    while lo <= hi:\n        cap = (lo + hi) // 2\n        needed, curr = 1, 0\n        for w in weights:\n            if curr + w > cap:\n                needed += 1\n                curr = w\n            else:\n                curr += w\n        if needed <= days:\n            ans = cap\n            hi = cap - 1\n        else:\n            lo = cap + 1\n    return ans"
        },
        "solutionCode": {
          "javascript": "function shipWithinDays(weights, days) {\n  let lo = Math.max(...weights), hi = weights.reduce((a, b) => a + b, 0), ans = hi;\n  while (lo <= hi) {\n    const cap = Math.floor((lo + hi) / 2);\n    let needed = 1, curr = 0;\n    for (let w of weights) {\n      if (curr + w > cap) { needed++; curr = w; } else curr += w;\n    }\n    if (needed <= days) {\n      ans = cap;\n      hi = cap - 1;\n    } else {\n      lo = cap + 1;\n    }\n  }\n  return ans;\n}",
          "python": "def shipWithinDays(weights: list[int], days: int) -> int:\n    lo, hi = max(weights), sum(weights)\n    ans = hi\n    while lo <= hi:\n        cap = (lo + hi) // 2\n        needed, curr = 1, 0\n        for w in weights:\n            if curr + w > cap:\n                needed += 1\n                curr = w\n            else:\n                curr += w\n        if needed <= days:\n            ans = cap\n            hi = cap - 1\n        else:\n            lo = cap + 1\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                2,
                4,
                1,
                4
              ],
              3
            ],
            "expected": 6,
            "description": "Capacity 6 ships in 3 days"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "weights = [3, 2, 2, 4, 1, 4], D = 3. Search range: lo = max(w) = 4, hi = sum(w) = 16.",
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
                "lo",
                4
              ],
              [
                "hi",
                16
              ],
              [
                "D",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "cap ∈ [4..5], probe 4: [3] [2,2] [4] [1] [4] → 5 days ✗. Too small, search [5..5].",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 0,
                  "label": "DAY 1 - 3",
                  "color": "blue"
                },
                {
                  "start": 1,
                  "end": 2,
                  "label": "DAY 2 - 4",
                  "color": "amber"
                },
                {
                  "start": 3,
                  "end": 3,
                  "label": "DAY 3 - 4",
                  "color": "red"
                },
                {
                  "start": 4,
                  "end": 4,
                  "label": "DAY 4 - 1",
                  "color": "gray"
                },
                {
                  "start": 5,
                  "end": 5,
                  "label": "DAY 5 - 4",
                  "color": "gray"
                }
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
                "capacity",
                4
              ],
              [
                "days used",
                "5 / 3"
              ],
              [
                "feasible",
                "✗"
              ],
              [
                "best",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Probe cap = 6: [3, 2], [2, 4], [1, 4] → 3 days <= 3 ✓. Feasible! Minimum shipping capacity = 6.",
            "customVisual": {
              "brackets": [
                {
                  "start": 0,
                  "end": 1,
                  "label": "DAY 1 - 5",
                  "color": "blue"
                },
                {
                  "start": 2,
                  "end": 3,
                  "label": "DAY 2 - 6",
                  "color": "amber"
                },
                {
                  "start": 4,
                  "end": 5,
                  "label": "DAY 3 - 5",
                  "color": "green"
                }
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
            "best": {
              "label": "Minimum Shipping Capacity = 6"
            },
            "vars": [
              [
                "capacity",
                6
              ],
              [
                "days used",
                "3 / 3"
              ],
              [
                "feasible",
                "✓"
              ],
              [
                "best",
                6
              ]
            ]
          }
        ]
      }
    ]
  }
];
