import { Problem } from '../../types';

export const heapProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "heap",
    "title": "Overview",
    "subtitle": "Complete tree + heap property · sift-up / sift-down",
    "kind": "intro",
    "statement": "A Binary Heap is a complete binary tree that maintains the Heap Property (in a max-heap, parent >= children; in a min-heap, parent <= children). Stored compactly as an array where left child = 2i+1, right child = 2i+2, and parent = floor((i-1)/2). Supports O(1) peek and O(log n) push/pop via sift-up and sift-down.",
    "visualType": "heap",
    "initialInput": [
      45,
      30,
      40,
      10,
      20,
      35
    ],
    "approaches": [
      {
        "id": "concept",
        "label": "Concept · complete binary tree & heap operations",
        "complexity": {
          "time": "O(1) peek, O(log n) push/pop",
          "space": "O(n)"
        },
        "pseudocode": [
          "// complete binary tree, stored as an array",
          "parent(i) = [(i-1)/2]",
          "left(i) = 2i+1   right(i) = 2i+2",
          "peek(): return arr[0]             // O(1)",
          "",
          "push(x):",
          "    append x; sift it UP",
          "    while x > parent: swap up",
          "",
          "pop():",
          "    save arr[0]; move last leaf to root",
          "    sift it DOWN",
          "    while < larger child: swap down",
          "    return saved"
        ],
        "starterCode": {
          "javascript": "function heapPeek(heap) {\n  return heap.length > 0 ? heap[0] : null;\n}",
          "python": "def heapPeek(heap: list[int]) -> int:\n    return heap[0] if heap else None"
        },
        "solutionCode": {
          "javascript": "function heapPeek(heap) {\n  return heap.length > 0 ? heap[0] : null;\n}",
          "python": "def heapPeek(heap: list[int]) -> int:\n    return heap[0] if heap else None"
        },
        "testCases": [
          {
            "input": [
              [
                45,
                30,
                40,
                10,
                20,
                35
              ]
            ],
            "expected": 45,
            "description": "Peek root element"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "A complete binary tree has no gaps. We lay it out in array indices 0..n-1 without pointers: [45, 30, 40, 10, 20, 35].",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "array",
                "[45, 30, 40, 10, 20, 35]"
              ],
              [
                "size",
                6
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "parent(i) = [(i-1)/2]. E.g. parent of index 4 (val 20) is (4-1)/2 = 1 (val 30), parent of index 1 (val 30) is 0 (val 45).",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              1,
              0
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "parent = floor((i-1)/2)",
                0
              ],
              [
                "parentVal",
                45
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "For node i=1 (val 30): left child = 2(1)+1 = 3 (val 10), right child = 2(1)+2 = 4 (val 20).",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
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
                "left = 2i+1",
                3
              ],
              [
                "right = 2i+2",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In a max-heap, the maximum value is always at arr[0]. peek() is O(1) instant lookup.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              0
            ],
            "best": {
              "label": "Max Root arr[0] = 45 in O(1)"
            },
            "vars": [
              [
                "arr[0]",
                45
              ],
              [
                "time",
                "O(1)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "push(50): To insert a new value 50, we first append it as the last leaf at index 6.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35,
              50
            ],
            "highlights": [
              6
            ],
            "vars": [
              [
                "push",
                50
              ],
              [
                "appendIdx",
                6
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "New element 50 is at index 6. Its parent is (6-1)/2 = 2 (val 40). Heap property violated because 50 > 40.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35,
              50
            ],
            "highlights": [
              6,
              2
            ],
            "vars": [
              [
                "curr",
                50
              ],
              [
                "parent",
                40
              ],
              [
                "violates",
                "50 > 40"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "SIFT UP: Swap 50 (index 6) with parent 40 (index 2).",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35,
              50
            ],
            "highlights": [
              6,
              2
            ],
            "customVisual": {
              "swap": [
                6,
                2
              ]
            },
            "vars": [
              [
                "action",
                "swap(6, 2)"
              ],
              [
                "50",
                "moves to idx 2"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "After swap, 50 is at index 2. Now compare 50 with its new parent at index (2-1)/2 = 0 (val 45).",
            "heap": [
              45,
              30,
              50,
              10,
              20,
              35,
              40
            ],
            "highlights": [
              2,
              0
            ],
            "vars": [
              [
                "curr",
                50
              ],
              [
                "parent",
                45
              ],
              [
                "violates",
                "50 > 45"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Since 50 > 45, swap 50 with parent 45! 50 becomes the new root of the tree.",
            "heap": [
              45,
              30,
              50,
              10,
              20,
              35,
              40
            ],
            "highlights": [
              2,
              0
            ],
            "customVisual": {
              "swap": [
                2,
                0
              ]
            },
            "vars": [
              [
                "action",
                "swap(2, 0)"
              ],
              [
                "newRoot",
                50
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "50 is now at index 0 (root). No parent left. Sift-up finishes in O(log n) swaps!",
            "heap": [
              50,
              30,
              45,
              10,
              20,
              35,
              40
            ],
            "highlights": [
              0
            ],
            "best": {
              "label": "New Root = 50 in O(log n)"
            },
            "vars": [
              [
                "root",
                50
              ],
              [
                "status",
                "Heap property satisfied"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "pop(): Save max root arr[0] = 50 to return later. Move the last leaf 40 (at index 6) to root index 0.",
            "heap": [
              40,
              30,
              45,
              10,
              20,
              35
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "saved",
                50
              ],
              [
                "movedToRoot",
                40
              ]
            ]
          },
          {
            "codeLine": 12,
            "narration": "SIFT DOWN: Node 40 at root must sink down. Find the larger of its children: left 30 (idx 1) vs right 45 (idx 2).",
            "heap": [
              40,
              30,
              45,
              10,
              20,
              35
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "curr",
                40
              ],
              [
                "left",
                30
              ],
              [
                "right",
                45
              ],
              [
                "largerChild",
                45
              ]
            ]
          },
          {
            "codeLine": 13,
            "narration": "Larger child is 45 at index 2. Since 40 < 45, swap root 40 with child 45.",
            "heap": [
              40,
              30,
              45,
              10,
              20,
              35
            ],
            "highlights": [
              0,
              2
            ],
            "customVisual": {
              "swap": [
                0,
                2
              ]
            },
            "vars": [
              [
                "action",
                "swap(0, 2)"
              ],
              [
                "largerChild",
                45
              ]
            ]
          },
          {
            "codeLine": 13,
            "narration": "After swap, 40 is at index 2. Check its left child at index 2(2)+1 = 5 (val 35).",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              2,
              5
            ],
            "vars": [
              [
                "curr",
                40
              ],
              [
                "child",
                35
              ]
            ]
          },
          {
            "codeLine": 14,
            "narration": "SIFT DOWN: 40 is >= its children, the heap property is restored. Done.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              2
            ],
            "vars": [
              [
                "settled",
                40
              ],
              [
                "ok",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 14,
            "narration": "pop() returns extracted maximum 50. Heap is valid: [45, 30, 40, 10, 20, 35] in O(log n) time.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              0
            ],
            "best": {
              "label": "Extracted Max = 50 in O(log n)"
            },
            "vars": [
              [
                "returned",
                50
              ],
              [
                "newRoot",
                45
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Coming up: every heap problem is a disguise for 'keep the k best' or 'merge sorted streams' or 'track a running median', each just chooses min-heap, max-heap, or both, and lets push/pop do the work.",
            "heap": [
              45,
              30,
              40,
              10,
              20,
              35
            ],
            "highlights": [
              0
            ],
            "best": {
              "label": "Ready for Top-K & Median Patterns!"
            },
            "vars": [
              [
                "next",
                "Kth Largest Element"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "kth-largest-element-in-an-array",
    "patternId": "heap",
    "title": "Kth Largest Element in an Array",
    "subtitle": "Min-heap of size k as a top-k gate",
    "kind": "problem",
    "leetcode": {
      "id": 215,
      "slug": "kth-largest-element-in-an-array",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Google",
      "Apple",
      "Bloomberg"
    ],
    "statement": "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    "visualType": "heap",
    "initialInput": [
      3,
      2,
      1,
      5,
      6,
      4
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · full array sort descending",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "nums.sort(reverse=True)",
          "return nums[k - 1]"
        ],
        "starterCode": {
          "javascript": "function findKthLargest(nums, k) {\n  // Write your solution here\n  \n}",
          "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function findKthLargest(nums, k) {\n  nums.sort((a, b) => b - a);\n  return nums[k - 1];\n}",
          "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    nums.sort(reverse=True)\n    return nums[k - 1]"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              2
            ],
            "expected": 5,
            "description": "2nd largest in [3,2,1,5,6,4] is 5"
          },
          {
            "input": [
              [
                3,
                2,
                3,
                1,
                2,
                4,
                5,
                5,
                6
              ],
              4
            ],
            "expected": 4,
            "description": "4th largest is 4"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Sort entire array descending: [6, 5, 4, 3, 2, 1] in O(n log n) time.",
            "heap": [
              6,
              5,
              4,
              3,
              2,
              1
            ],
            "vars": [
              [
                "sorted",
                "[6, 5, 4, 3, 2, 1]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Look up index k - 1 = 2 - 1 = 1: Value is 5.",
            "heap": [
              6,
              5,
              4,
              3,
              2,
              1
            ],
            "highlights": [
              1
            ],
            "best": {
              "label": "2nd Largest = 5"
            },
            "vars": [
              [
                "k",
                2
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
        "label": "Optimized · size-k min-heap O(n log k)",
        "complexity": {
          "time": "O(n log k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "given arr, k",
          "heap = empty min-heap",
          "for x in arr:",
          "    if heap.size < k: push x",
          "    else if x > heap.top:",
          "        pop the smallest ...",
          "        ... and push x",
          "    else: skip",
          "return heap.top  // the k-th largest"
        ],
        "starterCode": {
          "javascript": "function findKthLargest(nums, k) {\n  // Using size-k bounded min-heap\n  const minHeap = [];\n  // ...\n}",
          "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    import heapq\n    heap = []\n    for num in nums:\n        heapq.heappush(heap, num)\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return heap[0]"
        },
        "solutionCode": {
          "javascript": "function findKthLargest(nums, k) {\n  nums.sort((a, b) => a - b);\n  return nums[nums.length - k];\n}",
          "python": "def findKthLargest(nums: list[int], k: int) -> int:\n    import heapq\n    heap = []\n    for num in nums:\n        heapq.heappush(heap, num)\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return heap[0]"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              2
            ],
            "expected": 5,
            "description": "2nd largest is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize stream [3, 2, 1, 5, 6, 4] with target k = 2. Maintain a Min-Heap of size 2.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 0,
              "heap": [],
              "heapLabel": "MIN-HEAP · KEEP TOP 2"
            },
            "vars": [
              [
                "k",
                2
              ],
              [
                "heap",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Stream[0] = 3: Heap size 0 < 2 → push 3 into min-heap.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 0,
              "heap": [
                3
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "heap size < 2: admit 3"
            },
            "vars": [
              [
                "stream[0]",
                3
              ],
              [
                "heap",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Stream[1] = 2: Heap size 1 < 2 → push 2. Sift-up places 2 at root (smaller than 3).",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 1,
              "heap": [
                2,
                3
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "heap size < 2: admit 2 (new root)"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stream[1]",
                2
              ],
              [
                "heap",
                "[2, 3]"
              ],
              [
                "root",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Stream[2] = 1: Heap size == 2. Compare 1 with heap root 2: 1 <= 2, so 1 is discarded.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 2,
              "heap": [
                2,
                3
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "1 <= 2: skip 1"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stream[2]",
                1
              ],
              [
                "root",
                2
              ],
              [
                "verdict",
                "skip"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Stream[3] = 5: Compare 5 with heap root 2: 5 > 2! Evict root 2, admit 5.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 3,
              "heap": [
                2,
                3
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "5 > 2: evict root, admit 5"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stream[3]",
                5
              ],
              [
                "root",
                2
              ],
              [
                "verdict",
                "evict root 2, admit 5"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop smallest (2) and push 5. Min-heap adjusts: 3 is the new root, 5 is child.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 3,
              "heap": [
                3,
                5
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "heap now holds top-2: [3, 5]"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "heap",
                "[3, 5]"
              ],
              [
                "root = kth so far",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Stream[4] = 6: Compare 6 with heap root 3: 6 > 3! Evict root 3, admit 6.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 4,
              "heap": [
                3,
                5
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "6 > 3: evict root, admit 6"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stream[4]",
                6
              ],
              [
                "root",
                3
              ],
              [
                "verdict",
                "evict root 3, admit 6"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop 3, push 6. Min-heap now holds the two largest elements seen so far: [5, 6].",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 4,
              "heap": [
                5,
                6
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "heap now holds top-2: [5, 6]"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "heap",
                "[5, 6]"
              ],
              [
                "root = kth so far",
                5
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Stream[5] = 4: Compare 4 with heap root 5: 4 <= 5. Discard 4.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 5,
              "heap": [
                5,
                6
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "4 <= 5: skip 4"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "stream[5]",
                4
              ],
              [
                "root",
                5
              ],
              [
                "verdict",
                "skip"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Stream finished! Root of size-k min-heap holds the kth largest element = 5 in O(n log k) time.",
            "customVisual": {
              "stream": [
                3,
                2,
                1,
                5,
                6,
                4
              ],
              "streamIndex": 5,
              "heap": [
                5,
                6
              ],
              "heapLabel": "MIN-HEAP · KEEP TOP 2",
              "verdict": "k-th largest found = 5"
            },
            "highlights": [
              0
            ],
            "best": {
              "label": "2nd Largest Element = 5"
            },
            "vars": [
              [
                "kthLargest",
                5
              ],
              [
                "time",
                "O(n log k)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "k-closest-points-to-origin",
    "patternId": "heap",
    "title": "K Closest Points to Origin",
    "subtitle": "Max-heap of size k, keyed by distance",
    "kind": "problem",
    "leetcode": {
      "id": 973,
      "slug": "k-closest-points-to-origin",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "statement": "Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0). Distance is calculated as x² + y².",
    "visualType": "heap",
    "initialInput": [
      10,
      8,
      26
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · calculate all distances & sort",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "points.sort((a, b) => (a[0]² + a[1]²) - (b[0]² + b[1]²))",
          "return points[0..k]"
        ],
        "starterCode": {
          "javascript": "function kClosest(points, k) {\n  // Write your solution here\n  \n}",
          "python": "def kClosest(points: list[list[int]], k: int) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function kClosest(points, k) {\n  points.sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2));\n  return points.slice(0, k);\n}",
          "python": "def kClosest(points: list[list[int]], k: int) -> list[list[int]]:\n    points.sort(key=lambda p: p[0]**2 + p[1]**2)\n    return points[:k]"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  3
                ],
                [
                  -2,
                  2
                ]
              ],
              1
            ],
            "expected": [
              [
                -2,
                2
              ]
            ],
            "description": "Distance 8 < 10"
          },
          {
            "input": [
              [
                [
                  3,
                  3
                ],
                [
                  5,
                  -1
                ],
                [
                  -2,
                  4
                ]
              ],
              2
            ],
            "expected": [
              [
                3,
                3
              ],
              [
                -2,
                4
              ]
            ],
            "description": "2 closest"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Calculate squared distances: [1,3] → 10, [-2,2] → 8, [5,-1] → 26. Sort points ascending by distance.",
            "heap": [
              8,
              10,
              26
            ],
            "vars": [
              [
                "distances",
                "[8, 10, 26]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Take first k=1 elements: [[-2, 2]] (dist² = 8).",
            "heap": [
              8
            ],
            "highlights": [
              0
            ],
            "best": {
              "label": "[[-2, 2]]"
            },
            "vars": [
              [
                "result",
                "[[-2, 2]]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · max-heap of size k O(n log k)",
        "complexity": {
          "time": "O(n log k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "max_heap = []  // stores (-dist, point)",
          "for p in points:",
          "    d = p[0]² + p[1]²",
          "    push (d, p) into max_heap",
          "    if len(max_heap) > k: pop farthest point",
          "return [p for (d, p) in max_heap]"
        ],
        "starterCode": {
          "javascript": "function kClosest(points, k) {\n  // Write your solution here\n  \n}",
          "python": "def kClosest(points: list[list[int]], k: int) -> list[list[int]]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function kClosest(points, k) {\n  points.sort((a, b) => (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2));\n  return points.slice(0, k);\n}",
          "python": "def kClosest(points: list[list[int]], k: int) -> list[list[int]]:\n    import heapq\n    heap = []\n    for p in points:\n        d = p[0]**2 + p[1]**2\n        heapq.heappush(heap, (-d, p))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return [p for _, p in heap]"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  3
                ],
                [
                  -2,
                  2
                ]
              ],
              1
            ],
            "expected": [
              [
                -2,
                2
              ]
            ],
            "description": "Distance 8 < 10"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Maintain a Max-Heap of size k = 2. Root holds the furthest of the closest k points.",
            "customVisual": {
              "stream": [
                10,
                8,
                26
              ],
              "streamIndex": 0,
              "heap": [],
              "heapLabel": "MAX-HEAP · KEEP TOP 2 CLOSEST"
            },
            "vars": [
              [
                "k",
                2
              ],
              [
                "maxHeap",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Point [1, 3] (dist²=10): push to max-heap. Heap = [10].",
            "customVisual": {
              "stream": [
                10,
                8,
                26
              ],
              "streamIndex": 0,
              "heap": [
                10
              ],
              "heapLabel": "MAX-HEAP · KEEP TOP 2 CLOSEST",
              "verdict": "admit dist² = 10"
            },
            "vars": [
              [
                "heap",
                "[10]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Point [-2, 2] (dist²=8): push to max-heap. Max-heap root is 10, child is 8.",
            "customVisual": {
              "stream": [
                10,
                8,
                26
              ],
              "streamIndex": 1,
              "heap": [
                10,
                8
              ],
              "heapLabel": "MAX-HEAP · KEEP TOP 2 CLOSEST",
              "verdict": "admit dist² = 8"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "heap",
                "[10, 8]"
              ],
              [
                "furthestInHeap",
                10
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Point [5, -1] (dist²=26): 26 >= root(10). Discard 26.",
            "customVisual": {
              "stream": [
                10,
                8,
                26
              ],
              "streamIndex": 2,
              "heap": [
                10,
                8
              ],
              "heapLabel": "MAX-HEAP · KEEP TOP 2 CLOSEST",
              "verdict": "26 >= 10: skip point"
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "dist²",
                26
              ],
              [
                "verdict",
                "skip"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "The 2 closest points are [[1, 3], [-2, 2]] found in O(n log k) time and O(k) space.",
            "customVisual": {
              "stream": [
                10,
                8,
                26
              ],
              "streamIndex": 2,
              "heap": [
                10,
                8
              ],
              "heapLabel": "MAX-HEAP · KEEP TOP 2 CLOSEST",
              "verdict": "2 closest points found"
            },
            "highlights": [
              0,
              1
            ],
            "best": {
              "label": "Closest: [[-2, 2], [1, 3]]"
            },
            "vars": [
              [
                "kClosest",
                "[[-2, 2], [1, 3]]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "find-k-closest-elements",
    "patternId": "heap",
    "title": "Find K Closest Elements",
    "subtitle": "Max-heap keyed by (distance, value)",
    "kind": "problem",
    "leetcode": {
      "id": 658,
      "slug": "find-k-closest-elements",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Facebook",
      "Microsoft",
      "Bloomberg"
    ],
    "statement": "Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.",
    "visualType": "heap",
    "initialInput": [
      1,
      2,
      3,
      4,
      5
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · custom sort by difference",
        "complexity": {
          "time": "O(n log n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "arr.sort((a, b) => abs(a - x) - abs(b - x) or (a - b))",
          "res = arr[0..k]",
          "return res.sort((a, b) => a - b)"
        ],
        "starterCode": {
          "javascript": "function findClosestElements(arr, k, x) {\n  // Write your solution here\n  \n}",
          "python": "def findClosestElements(arr: list[int], k: int, x: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function findClosestElements(arr, k, x) {\n  const sorted = [...arr].sort((a, b) => Math.abs(a - x) === Math.abs(b - x) ? a - b : Math.abs(a - x) - Math.abs(b - x));\n  return sorted.slice(0, k).sort((a, b) => a - b);\n}",
          "python": "def findClosestElements(arr: list[int], k: int, x: int) -> list[int]:\n    sorted_arr = sorted(arr, key=lambda num: (abs(num - x), num))\n    return sorted(sorted_arr[:k])"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5
              ],
              4,
              3
            ],
            "expected": [
              1,
              2,
              3,
              4
            ],
            "description": "4 closest to 3"
          },
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5
              ],
              4,
              -1
            ],
            "expected": [
              1,
              2,
              3,
              4
            ],
            "description": "4 closest to -1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "arr = [1, 2, 3, 4, 5], target x = 3. Sort by |val - 3|: [3, 2, 4, 1, 5].",
            "heap": [
              3,
              2,
              4,
              1,
              5
            ],
            "vars": [
              [
                "diffSorted",
                "[3, 2, 4, 1, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Take first k=4 elements [3, 2, 4, 1] and sort ascending: [1, 2, 3, 4].",
            "heap": [
              1,
              2,
              3,
              4
            ],
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "[1, 2, 3, 4]"
            },
            "vars": [
              [
                "result",
                "[1, 2, 3, 4]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · max-heap of size k O(n log k)",
        "complexity": {
          "time": "O(n log k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "max_heap = []  // stores (-abs(v - x), -v, v)",
          "for num in arr:",
          "    push (-abs(num - x), -num, num) into max_heap",
          "    if len(max_heap) > k: pop furthest from max_heap",
          "return sorted([num for _, _, num in max_heap])"
        ],
        "starterCode": {
          "javascript": "function findClosestElements(arr, k, x) {\n  // Write your solution here\n  \n}",
          "python": "def findClosestElements(arr: list[int], k: int, x: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function findClosestElements(arr, k, x) {\n  let left = 0, right = arr.length - k;\n  while (left < right) {\n    let mid = Math.floor((left + right) / 2);\n    if (x - arr[mid] > arr[mid + k] - x) left = mid + 1;\n    else right = mid;\n  }\n  return arr.slice(left, left + k);\n}",
          "python": "def findClosestElements(arr: list[int], k: int, x: int) -> list[int]:\n    import heapq\n    heap = []\n    for num in arr:\n        heapq.heappush(heap, (-abs(num - x), -num, num))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return sorted([item[2] for item in heap])"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                4,
                5
              ],
              4,
              3
            ],
            "expected": [
              1,
              2,
              3,
              4
            ],
            "description": "4 closest to 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Maintain Max-Heap of size k=4 tracking the 4 closest elements to target x=3.",
            "customVisual": {
              "stream": [
                1,
                2,
                3,
                4,
                5
              ],
              "streamIndex": 0,
              "heap": [],
              "heapLabel": "MAX-HEAP · KEEP 4 CLOSEST"
            },
            "vars": [
              [
                "k",
                4
              ],
              [
                "x",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Stream numbers 1, 2, 3, 4 into max-heap (diffs: 2, 1, 0, 1).",
            "customVisual": {
              "stream": [
                1,
                2,
                3,
                4,
                5
              ],
              "streamIndex": 3,
              "heap": [
                1,
                2,
                3,
                4
              ],
              "heapLabel": "MAX-HEAP · KEEP 4 CLOSEST",
              "verdict": "heap full: size = 4"
            },
            "vars": [
              [
                "heapSize",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Stream number 5 (diff = 2). Compare with furthest in heap (1, diff=2). Tie favors smaller value 1. Discard 5.",
            "customVisual": {
              "stream": [
                1,
                2,
                3,
                4,
                5
              ],
              "streamIndex": 4,
              "heap": [
                1,
                2,
                3,
                4
              ],
              "heapLabel": "MAX-HEAP · KEEP 4 CLOSEST",
              "verdict": "discard 5, keep [1, 2, 3, 4]"
            },
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "best": {
              "label": "4 Closest: [1, 2, 3, 4]"
            },
            "vars": [
              [
                "kClosest",
                "[1, 2, 3, 4]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "merge-k-sorted-lists",
    "patternId": "heap",
    "title": "Merge K Sorted Lists",
    "subtitle": "Min-heap of the k current heads",
    "kind": "problem",
    "leetcode": {
      "id": 23,
      "slug": "merge-k-sorted-lists",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Google",
      "Microsoft",
      "Apple",
      "Uber"
    ],
    "statement": "Given an array of k linked-lists lists, each sorted in ascending order, merge all the linked-lists into one sorted linked-list and return its head.",
    "visualType": "heap",
    "initialInput": [
      1,
      1,
      2
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · scan k heads each round",
        "complexity": {
          "time": "O(N · k)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given k sorted lists",
          "repeat until all empty:",
          "    scan the k current heads",
          "    move the minimum to output",
          "    advance that list"
        ],
        "starterCode": {
          "javascript": "function mergeKLists(lists) {\n  // Write your solution here\n  \n}",
          "python": "def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function mergeKLists(lists) {\n  const dummy = { val: 0, next: null };\n  let curr = dummy;\n  while (true) {\n    let minIdx = -1;\n    for (let i = 0; i < lists.length; i++) {\n      if (lists[i] !== null) {\n        if (minIdx === -1 || lists[i].val < lists[minIdx].val) minIdx = i;\n      }\n    }\n    if (minIdx === -1) break;\n    curr.next = lists[minIdx];\n    curr = curr.next;\n    lists[minIdx] = lists[minIdx].next;\n  }\n  return dummy.next;\n}",
          "python": "def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    curr = dummy\n    while True:\n        min_idx = -1\n        for i in range(len(lists)):\n            if lists[i]:\n                if min_idx == -1 or lists[i].val < lists[min_idx].val:\n                    min_idx = i\n        if min_idx == -1: break\n        curr.next = lists[min_idx]\n        curr = curr.next\n        lists[min_idx] = lists[min_idx].next\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  4,
                  7
                ],
                [
                  2,
                  5
                ],
                [
                  3,
                  6,
                  8
                ]
              ]
            ],
            "expected": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "description": "3 sorted lists"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given 3 sorted lists: List0=[1, 4, 7], List1=[2, 5], List2=[3, 6, 8]. Total N=8 elements.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 0
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "mergedOutput": []
            },
            "vars": [
              [
                "totalNodes",
                8
              ],
              [
                "k",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Heads: L0->1, L1->2, L2->3. Scan all 3 -> min is 1 (list 0). Took 3 comparisons this round.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 0
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 0,
              "mergedOutput": []
            },
            "vars": [
              [
                "heads",
                "1, 2, 3"
              ],
              [
                "min",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move minimum 1 to output.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 0
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 0,
              "mergedOutput": [
                1
              ]
            },
            "vars": [
              [
                "output",
                "[1]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Advance List 0 head pointer to next element 4.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "mergedOutput": [
                1
              ]
            },
            "vars": [
              [
                "L0",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Heads: L0->4, L1->2, L2->3. Scan all 3 -> min is 2 (list 1). Took 3 comparisons this round.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 1,
              "mergedOutput": [
                1
              ]
            },
            "vars": [
              [
                "heads",
                "4, 2, 3"
              ],
              [
                "min",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move minimum 2 to output.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 1,
              "mergedOutput": [
                1,
                2
              ]
            },
            "vars": [
              [
                "output",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Advance List 1 head pointer to next element 5.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "mergedOutput": [
                1,
                2
              ]
            },
            "vars": [
              [
                "L1",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Heads: L0->4, L1->5, L2->3. Scan all 3 -> min is 3 (list 2). Took 3 comparisons this round.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 2,
              "mergedOutput": [
                1,
                2
              ]
            },
            "vars": [
              [
                "heads",
                "4, 5, 3"
              ],
              [
                "min",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move minimum 3 to output.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 2,
              "mergedOutput": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "output",
                "[1, 2, 3]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Advance List 2 head to next element 6.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "mergedOutput": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "L2",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Heads: L0->4, L1->5, L2->6. Scan all 3 -> min is 4 (list 0). Took 3 comparisons this round.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 0,
              "mergedOutput": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "heads",
                "4, 5, 6"
              ],
              [
                "min",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move minimum 4 to output.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 0,
              "mergedOutput": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "output",
                "[1, 2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Advance List 0 head to 7.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "mergedOutput": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "L0",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Heads: L0->7, L1->5, L2->6. Scan all 3 -> min is 5 (list 1).",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 1,
              "mergedOutput": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "heads",
                "7, 5, 6"
              ],
              [
                "min",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move 5 to output and advance List 1 (exhausted).",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 1,
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            "vars": [
              [
                "output",
                "[1, 2, 3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Remaining active heads: L0->7, L2->6. Min is 6 (list 2).",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 2,
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            "vars": [
              [
                "heads",
                "7, 6"
              ],
              [
                "min",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move 6 to output. Advance List 2 to 8.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 2
                }
              ],
              "activeListIdx": 2,
              "mergedOutput": [
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
                "output",
                "[1, 2, 3, 4, 5, 6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Remaining active heads: L0->7, L2->8. Min is 7 (list 0).",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 2
                }
              ],
              "activeListIdx": 0,
              "mergedOutput": [
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
                "heads",
                "7, 8"
              ],
              [
                "min",
                7
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Move 7 to output. List 0 is exhausted. Append final remaining element 8 from List 2.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 3
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 3
                }
              ],
              "activeListIdx": 2,
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
              ]
            },
            "best": {
              "label": "Merged All 8 Elements in O(N · k)"
            },
            "vars": [
              [
                "result",
                "[1, 2, 3, 4, 5, 6, 7, 8]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · min-heap of heads O(N log k)",
        "complexity": {
          "time": "O(N log k)",
          "space": "O(k)"
        },
        "pseudocode": [
          "heap = min-heap; push every list head",
          "while heap not empty:",
          "    (v, list) = pop the root",
          "    append v to output",
          "    if list has a next head:",
          "        push it",
          "    // else list is exhausted",
          "return output"
        ],
        "starterCode": {
          "javascript": "function mergeKLists(lists) {\n  // Using MinPriorityQueue\n  \n}",
          "python": "def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n    import heapq\n    # ...\n"
        },
        "solutionCode": {
          "javascript": "function mergeKLists(lists) {\n  const vals = [];\n  for (let l of lists) {\n    while (l) { vals.push(l.val); l = l.next; }\n  }\n  vals.sort((a, b) => a - b);\n  const dummy = { val: 0, next: null };\n  let curr = dummy;\n  for (let v of vals) { curr.next = { val: v, next: null }; curr = curr.next; }\n  return dummy.next;\n}",
          "python": "def mergeKLists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:\n    import heapq\n    heap = []\n    for i, l in enumerate(lists):\n        if l: heapq.heappush(heap, (l.val, i, l))\n    dummy = ListNode(0)\n    curr = dummy\n    while heap:\n        val, i, node = heapq.heappop(heap)\n        curr.next = node\n        curr = curr.next\n        if node.next:\n            heapq.heappush(heap, (node.next.val, i, node.next))\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  4,
                  7
                ],
                [
                  2,
                  5
                ],
                [
                  3,
                  6,
                  8
                ]
              ]
            ],
            "expected": [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8
            ],
            "description": "3 lists"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize Min-Heap with size k=3 and push initial head of each list: 1 (List 0), 2 (List 1), 3 (List 2).",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 0
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "heap": [
                1,
                2,
                3
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": []
            },
            "vars": [
              [
                "heap",
                "[1, 2, 3]"
              ],
              [
                "output",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root. Remove the root 1, the global minimum.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 0
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 0,
              "heap": [
                1,
                2,
                3
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1
              ]
            },
            "vars": [
              [
                "heap",
                "[1, 2, 3]"
              ],
              [
                "output",
                "[1]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "List 0 has next head: push 4 into min-heap. Sift-up adjusts heap: root is 2, children [4, 3].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "heap": [
                2,
                4,
                3
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1
              ]
            },
            "vars": [
              [
                "pushed",
                4
              ],
              [
                "heap",
                "[2, 4, 3]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 2 (from List 1). Append 2 to output.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 0
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 1,
              "heap": [
                2,
                4,
                3
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2
              ]
            },
            "vars": [
              [
                "popped",
                2
              ],
              [
                "output",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "List 1 has next head: push 5. Compare values, the smaller must sit above (min-heap). Heap = [3, 4, 5].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "heap": [
                3,
                4,
                5
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2
              ]
            },
            "vars": [
              [
                "heap",
                "[3, 4, 5]"
              ],
              [
                "output",
                "2"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 3 (from List 2). Append 3 to output. Output is now [1, 2, 3].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 0
                }
              ],
              "activeListIdx": 2,
              "heap": [
                5,
                4
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "heap",
                "[5, 4]"
              ],
              [
                "output",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "List 2 has next head: push 6 into min-heap. Heap = [4, 5, 6].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "heap": [
                4,
                5,
                6
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "heap",
                "[4, 5, 6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 4 (from List 0). Append 4 to output. Output: [1, 2, 3, 4].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 1
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 0,
              "heap": [
                4,
                5,
                6
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "popped",
                4
              ],
              [
                "output",
                "[1, 2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "List 0 has next head: push 7. Heap = [5, 7, 6]. Advance L0 to 7.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 1
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "heap": [
                5,
                7,
                6
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2,
                3,
                4
              ]
            },
            "vars": [
              [
                "heap",
                "[5, 7, 6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 5 (from List 1). Append 5 to output. List 1 is now exhausted!",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 1
                }
              ],
              "activeListIdx": 1,
              "heap": [
                6,
                7
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5
              ]
            },
            "vars": [
              [
                "popped",
                5
              ],
              [
                "output",
                "[1, 2, 3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 6 (from List 2). Append 6 to output. Push next head 8 into heap: Heap = [7, 8].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 2
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 2
                }
              ],
              "activeListIdx": 2,
              "heap": [
                7,
                8
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
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
                "popped",
                6
              ],
              [
                "output",
                "[1, 2, 3, 4, 5, 6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop the root 7 (from List 0). List 0 is exhausted. Only node 8 remains in heap.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 3
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 2
                }
              ],
              "activeListIdx": 0,
              "heap": [
                8
              ],
              "heapLabel": "MIN-HEAP OF HEADS",
              "mergedOutput": [
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
                "popped",
                7
              ],
              [
                "output",
                "[1, 2, 3, 4, 5, 6, 7]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Pop final root 8 (from List 2). Append 8 to output: [1, 2, 3, 4, 5, 6, 7, 8].",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 3
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 3
                }
              ],
              "activeListIdx": 2,
              "heap": [],
              "heapLabel": "MIN-HEAP (EMPTY)",
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
              ]
            },
            "vars": [
              [
                "popped",
                8
              ],
              [
                "output",
                "[1, 2, 3, 4, 5, 6, 7, 8]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Heap empty! All k lists merged into a single sorted list in O(N log k) time and O(k) space.",
            "customVisual": {
              "lists": [
                {
                  "id": 0,
                  "name": "LIST 0",
                  "color": "#3b82f6",
                  "items": [
                    1,
                    4,
                    7
                  ],
                  "globalStartIdx": 0,
                  "headIdx": 3
                },
                {
                  "id": 1,
                  "name": "LIST 1",
                  "color": "#eab308",
                  "items": [
                    2,
                    5
                  ],
                  "globalStartIdx": 3,
                  "headIdx": 2
                },
                {
                  "id": 2,
                  "name": "LIST 2",
                  "color": "#f87171",
                  "items": [
                    3,
                    6,
                    8
                  ],
                  "globalStartIdx": 5,
                  "headIdx": 3
                }
              ],
              "heap": [],
              "mergedOutput": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8
              ]
            },
            "best": {
              "label": "Merged Output: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 in O(N log k)"
            },
            "vars": [
              [
                "result",
                "[1, 2, 3, 4, 5, 6, 7, 8]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "median-from-data-stream",
    "patternId": "heap",
    "title": "Median from Data Stream",
    "subtitle": "Two heaps straddling the middle",
    "kind": "problem",
    "leetcode": {
      "id": 295,
      "slug": "median-from-data-stream",
      "difficulty": "Hard"
    },
    "companies": [
      "Google",
      "Amazon",
      "Facebook",
      "Microsoft",
      "Apple",
      "Uber"
    ],
    "statement": "The median is the middle value in an ordered integer list. Design a data structure that supports adding numbers from a data stream and finding the median in constant/logarithmic time.",
    "visualType": "heap",
    "initialInput": [
      5,
      3,
      8,
      1,
      9
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · keep a sorted list",
        "complexity": {
          "time": "O(n²)",
          "space": "O(n)"
        },
        "pseudocode": [
          "sorted = []",
          "on addNum(x):",
          "    insert x keeping sorted order // O(n)",
          "on findMedian():",
          "    return middle (or avg of two middles)"
        ],
        "starterCode": {
          "javascript": "class MedianFinder {\n  // Write your solution here\n  \n}",
          "python": "class MedianFinder:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "class MedianFinder {\n  constructor() { this.arr = []; }\n  addNum(num) {\n    let l = 0, r = this.arr.length;\n    while (l < r) {\n      let m = (l + r) >> 1;\n      if (this.arr[m] < num) l = m + 1;\n      else r = m;\n    }\n    this.arr.splice(l, 0, num);\n  }\n  findMedian() {\n    const mid = Math.floor(this.arr.length / 2);\n    return this.arr.length % 2 !== 0 ? this.arr[mid] : (this.arr[mid - 1] + this.arr[mid]) / 2;\n  }\n}",
          "python": "class MedianFinder:\n    def __init__(self): self.arr = []\n    def addNum(self, num: int) -> None:\n        import bisect\n        bisect.insort(self.arr, num)\n    def findMedian(self) -> float:\n        mid = len(self.arr) // 2\n        return float(self.arr[mid]) if len(self.arr) % 2 else (self.arr[mid-1] + self.arr[mid]) / 2.0"
        },
        "testCases": [
          {
            "input": [
              [
                5,
                3,
                8,
                1,
                9
              ]
            ],
            "expected": 5,
            "description": "Median of 5 numbers is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start with empty sorted array. We will insert elements one-by-one into sorted positions.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 0,
              "sortedSoFar": []
            },
            "vars": [
              [
                "stream",
                "[5, 3, 8, 1, 9]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Insert 5 into sorted list: [5]. Count is odd (1) -> median is middle element 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 0,
              "sortedSoFar": [
                5
              ],
              "medianIndices": [
                0
              ]
            },
            "highlights": [
              0
            ],
            "vars": [
              [
                "inserted",
                5
              ],
              [
                "median",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Insert 3 into sorted list: [3, 5]. Count is even (2) -> median is avg of (3, 5) = 4.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 1,
              "sortedSoFar": [
                3,
                5
              ],
              "medianIndices": [
                0,
                1
              ]
            },
            "highlights": [
              0,
              1
            ],
            "vars": [
              [
                "inserted",
                3
              ],
              [
                "median",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Insert 8 into sorted list: [3, 5, 8]. Count is odd (3) -> median is middle element 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 2,
              "sortedSoFar": [
                3,
                5,
                8
              ],
              "medianIndices": [
                1
              ]
            },
            "highlights": [
              1
            ],
            "vars": [
              [
                "inserted",
                8
              ],
              [
                "median",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Insert 1 into the sorted list at index 0 -> [1, 3, 5, 8]. Median = avg of the two middles (3, 5) = 4.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 3,
              "sortedSoFar": [
                1,
                3,
                5,
                8
              ],
              "medianIndices": [
                1,
                2
              ]
            },
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "inserted",
                1
              ],
              [
                "median",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Insert 9 into sorted list: [1, 3, 5, 8, 9]. Count is odd (5) -> median is middle element 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 4,
              "sortedSoFar": [
                1,
                3,
                5,
                8,
                9
              ],
              "medianIndices": [
                2
              ]
            },
            "highlights": [
              2
            ],
            "best": {
              "label": "Final Median = 5 in O(n²)"
            },
            "vars": [
              [
                "inserted",
                9
              ],
              [
                "median",
                5
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · max-heap + min-heap",
        "complexity": {
          "time": "O(log n) add",
          "space": "O(n)"
        },
        "pseudocode": [
          "lo = max-heap (lower half)",
          "hi = min-heap (upper half)",
          "on addNum(x):",
          "    if x <= lo.top: lo.push(x) else hi.push(x)",
          "    // rebalance sizes (differ by <= 1)",
          "    if lo.size > hi.size+1: hi.push(lo.pop)",
          "    elif hi.size > lo.size: lo.push(hi.pop)",
          "on findMedian():",
          "    equal sizes -> (lo.top + hi.top)/2  else lo.top"
        ],
        "starterCode": {
          "javascript": "class MedianFinder {\n  // Using two heaps\n  \n}",
          "python": "class MedianFinder:\n    # Using heapq\n    pass"
        },
        "solutionCode": {
          "javascript": "class MedianFinder {\n  constructor() { this.arr = []; }\n  addNum(num) {\n    let l = 0, r = this.arr.length;\n    while (l < r) {\n      let m = (l + r) >> 1;\n      if (this.arr[m] < num) l = m + 1;\n      else r = m;\n    }\n    this.arr.splice(l, 0, num);\n  }\n  findMedian() {\n    const mid = Math.floor(this.arr.length / 2);\n    return this.arr.length % 2 !== 0 ? this.arr[mid] : (this.arr[mid - 1] + this.arr[mid]) / 2;\n  }\n}",
          "python": "class MedianFinder:\n    def __init__(self):\n        self.small = [] # max-heap (invert signs)\n        self.large = [] # min-heap\n    def addNum(self, num: int) -> None:\n        import heapq\n        heapq.heappush(self.small, -num)\n        heapq.heappush(self.large, -heapq.heappop(self.small))\n        if len(self.large) > len(self.small):\n            heapq.heappush(self.small, -heapq.heappop(self.large))\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0"
        },
        "testCases": [
          {
            "input": [
              [
                5,
                3,
                8,
                1,
                9
              ]
            ],
            "expected": 5,
            "description": "Median of [5, 3, 8, 1, 9] is 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize two heaps: lo (Max-Heap for lower half) and hi (Min-Heap for upper half).",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 0,
              "twoHeaps": {
                "maxHeap": [],
                "minHeap": []
              }
            },
            "vars": [
              [
                "lo (lower)",
                "[]"
              ],
              [
                "hi (upper)",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "addNum(5): Push 5 to lo (max-heap). lo = [5], hi = []. Median = lo.top = 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 0,
              "twoHeaps": {
                "maxHeap": [
                  5
                ],
                "minHeap": []
              }
            },
            "vars": [
              [
                "lo",
                "[5]"
              ],
              [
                "hi",
                "[]"
              ],
              [
                "median",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "addNum(3): 3 <= lo.top (5) -> push 3 to lo. lo = [5, 3]. Sizes differ by 2!",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 1,
              "twoHeaps": {
                "maxHeap": [
                  5,
                  3
                ],
                "minHeap": [],
                "highlightMax": [
                  1
                ]
              }
            },
            "vars": [
              [
                "lo.size",
                2
              ],
              [
                "hi.size",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Rebalance: pop max from lo (5) and push to hi. lo = [3], hi = [5]. Equal sizes -> median = (3 + 5) / 2 = 4.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 1,
              "twoHeaps": {
                "maxHeap": [
                  3
                ],
                "minHeap": [
                  5
                ]
              }
            },
            "vars": [
              [
                "lo",
                "[3]"
              ],
              [
                "hi",
                "[5]"
              ],
              [
                "median",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "addNum(8): 8 > lo.top (3) -> push 8 to hi (min-heap). hi = [5, 8]. hi.size (2) > lo.size (1).",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 2,
              "twoHeaps": {
                "maxHeap": [
                  3
                ],
                "minHeap": [
                  5,
                  8
                ],
                "highlightMin": [
                  1
                ]
              }
            },
            "vars": [
              [
                "lo",
                "[3]"
              ],
              [
                "hi",
                "[5, 8]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Rebalance: pop min from hi (5) and push to lo. lo = [5, 3], hi = [8]. lo.size > hi.size -> median = lo.top = 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 2,
              "twoHeaps": {
                "maxHeap": [
                  5,
                  3
                ],
                "minHeap": [
                  8
                ]
              }
            },
            "vars": [
              [
                "lo",
                "[5, 3]"
              ],
              [
                "hi",
                "[8]"
              ],
              [
                "median",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "addNum(1): 1 <= lo.top (5) -> push 1 to lo (max-heap). lo = [5, 3, 1], hi = [8]. lo.size (3) > hi.size (1) + 1!",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 3,
              "twoHeaps": {
                "maxHeap": [
                  5,
                  3,
                  1
                ],
                "minHeap": [
                  8
                ],
                "highlightMax": [
                  2
                ]
              }
            },
            "vars": [
              [
                "lower",
                "[5, 3, 1]"
              ],
              [
                "upper",
                "[8]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "The lower (max-heap) heap is valid again. Rebalance: pop max from lo (5) and push to hi. lo = [3, 1], hi = [5, 8].",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 3,
              "twoHeaps": {
                "maxHeap": [
                  3,
                  1
                ],
                "minHeap": [
                  5,
                  8
                ]
              }
            },
            "vars": [
              [
                "lo",
                "[3, 1]"
              ],
              [
                "hi",
                "[5, 8]"
              ],
              [
                "median",
                4
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Equal heap sizes (2 and 2) -> median = (lo.top + hi.top) / 2 = (3 + 5) / 2 = 4 in O(1) time.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 3,
              "twoHeaps": {
                "maxHeap": [
                  3,
                  1
                ],
                "minHeap": [
                  5,
                  8
                ]
              }
            },
            "best": {
              "label": "Median = 4 in O(1)"
            },
            "vars": [
              [
                "lo.top",
                3
              ],
              [
                "hi.top",
                5
              ],
              [
                "median",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "addNum(9): 9 > lo.top (3) -> push 9 to hi. hi = [5, 8, 9]. hi.size (3) > lo.size (2).",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 4,
              "twoHeaps": {
                "maxHeap": [
                  3,
                  1
                ],
                "minHeap": [
                  5,
                  8,
                  9
                ]
              }
            },
            "vars": [
              [
                "lo",
                "[3, 1]"
              ],
              [
                "hi",
                "[5, 8, 9]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Rebalance: pop min from hi (5) and push to lo. lo = [5, 3, 1], hi = [8, 9]. lo.size (3) > hi.size (2) -> median = lo.top = 5.",
            "customVisual": {
              "stream": [
                5,
                3,
                8,
                1,
                9
              ],
              "streamIndex": 4,
              "twoHeaps": {
                "maxHeap": [
                  5,
                  3,
                  1
                ],
                "minHeap": [
                  8,
                  9
                ]
              }
            },
            "best": {
              "label": "Final Median = 5 in O(1) time"
            },
            "vars": [
              [
                "lo.top",
                5
              ],
              [
                "median",
                5
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "task-scheduler",
    "patternId": "heap",
  "title": "Task Scheduler",
  "subtitle": "Most-frequent-first · max-heap vs. the frame formula",
  "kind": "problem",
  "leetcode": {
    "id": 621,
    "slug": "task-scheduler",
    "difficulty": "Medium"
  },
  "companies": [
    "Facebook",
    "Amazon",
    "Google",
    "Microsoft",
    "Bloomberg"
  ],
  "statement": "Given a characters array tasks representing CPU tasks and a cooling interval n, return the least number of intervals the CPU will take to finish all the given tasks.",
  "visualType": "heap",
  "initialInput": [
    3,
    3
  ],
  "approaches": [
    {
      "id": "brute-force",
      "label": "Greedy · most-frequent-first (max-heap)",
      "complexity": {
        "time": "O(total_intervals · log 26)",
        "space": "O(26)"
      },
      "pseudocode": [
        "count tasks; heap = max-heap by remaining count",
        "time = 0; q = deque()  // [remaining_count, ready_time]",
        "while heap or q:",
        "    time += 1",
        "    if heap: count = pop() - 1; if count > 0: q.append([count, time + n])",
        "    if q and q[0].ready_time == time: push q.popleft().count into heap",
        "return time"
      ],
      "starterCode": {
        "javascript": "function leastInterval(tasks, n) {\n  // Write your solution here\n  \n}",
        "python": "def leastInterval(tasks: list[str], n: int) -> int:\n    # Write your solution here\n    pass"
      },
      "solutionCode": {
        "javascript": "function leastInterval(tasks, n) {\n  const freq = {};\n  for (let t of tasks) freq[t] = (freq[t] || 0) + 1;\n  const maxCount = Math.max(...Object.values(freq));\n  let maxNum = 0;\n  for (let k in freq) if (freq[k] === maxCount) maxNum++;\n  return Math.max(tasks.length, (maxCount - 1) * (n + 1) + maxNum);\n}",
        "python": "def leastInterval(tasks: list[str], n: int) -> int:\n    from collections import Counter\n    counts = Counter(tasks)\n    max_f = max(counts.values())\n    max_count = sum(1 for v in counts.values() if v == max_f)\n    return max(len(tasks), (max_f - 1) * (n + 1) + max_count)"
      },
      "testCases": [
        {
          "input": [
            [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            2
          ],
          "expected": 8,
          "description": "A -> B -> idle -> A -> B -> idle -> A -> B (8 units)"
        },
        {
          "input": [
            [
              "A",
              "C",
              "A",
              "B",
              "D",
              "B"
            ],
            1
          ],
          "expected": 6,
          "description": "Cooling 1 gives 6 units"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Count task frequencies: A: 3, B: 3. Initialize Max-Heap with task counts [(3, 'A'), (3, 'B')] and empty cooldown queue.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "A",
                "count": 3
              },
              {
                "task": "B",
                "count": 3
              }
            ],
            "cooldownQueue": [],
            "timeline": [],
            "activeSlot": null,
            "activeTask": null,
            "actionType": "init"
          },
          "vars": [
            [
              "heap",
              "{A: 3, B: 3}"
            ],
            [
              "queue",
              "[]"
            ],
            [
              "time",
              0
            ],
            [
              "n",
              2
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=1 (Slot 0): Pop 'A' (count: 3) from Max-Heap. CPU executes 'A'. Remaining count is 2.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "B",
                "count": 3
              }
            ],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 2,
                "readyTime": 3
              }
            ],
            "timeline": [
              "A"
            ],
            "activeSlot": 0,
            "activeTask": "A",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              1
            ],
            [
              "executing",
              "A"
            ],
            [
              "heap",
              "{B: 3}"
            ],
            [
              "queue",
              "[A: count 2, ready t=3]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Task 'A' count decremented (3 → 2). Added to cooldown queue: cannot run again until t=3 (cooling n=2).",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "B",
                "count": 3
              }
            ],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 2,
                "readyTime": 3
              }
            ],
            "timeline": [
              "A"
            ],
            "activeSlot": 0,
            "activeTask": "A",
            "actionType": "queue"
          },
          "vars": [
            [
              "time",
              1
            ],
            [
              "queue",
              "[A: count 2, ready t=3]"
            ],
            [
              "timeline",
              "['A']"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=2 (Slot 1): Pop 'B' (count: 3) from Max-Heap. CPU executes 'B'. Remaining count is 2.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 2,
                "readyTime": 3
              },
              {
                "task": "B",
                "count": 2,
                "readyTime": 4
              }
            ],
            "timeline": [
              "A",
              "B"
            ],
            "activeSlot": 1,
            "activeTask": "B",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              2
            ],
            [
              "executing",
              "B"
            ],
            [
              "heap",
              "empty"
            ],
            [
              "queue",
              "[A: count 2, ready t=3], [B: count 2, ready t=4]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Task 'B' count decremented (3 → 2). Added to cooldown queue: ready at t=4. Max-Heap is now temporarily empty.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 2,
                "readyTime": 3
              },
              {
                "task": "B",
                "count": 2,
                "readyTime": 4
              }
            ],
            "timeline": [
              "A",
              "B"
            ],
            "activeSlot": 1,
            "activeTask": "B",
            "actionType": "queue"
          },
          "vars": [
            [
              "time",
              2
            ],
            [
              "timeline",
              "['A', 'B']"
            ],
            [
              "heap",
              "empty"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=3 (Slot 2): Max-Heap is empty, no task is eligible to run. CPU must insert an 'idle' cycle.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 2,
                "readyTime": 3
              },
              {
                "task": "B",
                "count": 2,
                "readyTime": 4
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle"
            ],
            "activeSlot": 2,
            "activeTask": "idle",
            "actionType": "idle"
          },
          "vars": [
            [
              "time",
              3
            ],
            [
              "executing",
              "idle"
            ],
            [
              "timeline",
              "['A', 'B', 'idle']"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "At t=3: Queue head 'A' has finished cooldown (readyTime == 3)! Re-insert 'A' (count: 2) into Max-Heap.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "A",
                "count": 2
              }
            ],
            "cooldownQueue": [
              {
                "task": "B",
                "count": 2,
                "readyTime": 4
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle"
            ],
            "activeSlot": 2,
            "activeTask": "idle",
            "actionType": "push"
          },
          "vars": [
            [
              "time",
              3
            ],
            [
              "reAdded",
              "A (count: 2)"
            ],
            [
              "heap",
              "{A: 2}"
            ],
            [
              "queue",
              "[B: count 2, ready t=4]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=4 (Slot 3): Pop 'A' (count: 2) from Max-Heap. CPU executes 'A'. Remaining count is 1.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "B",
                "count": 2,
                "readyTime": 4
              },
              {
                "task": "A",
                "count": 1,
                "readyTime": 6
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A"
            ],
            "activeSlot": 3,
            "activeTask": "A",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              4
            ],
            [
              "executing",
              "A"
            ],
            [
              "heap",
              "empty"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "At t=4: Queue head 'B' has finished cooldown (readyTime == 4)! Re-insert 'B' (count: 2) into Max-Heap.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "B",
                "count": 2
              }
            ],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 1,
                "readyTime": 6
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A"
            ],
            "activeSlot": 3,
            "activeTask": "A",
            "actionType": "push"
          },
          "vars": [
            [
              "time",
              4
            ],
            [
              "reAdded",
              "B (count: 2)"
            ],
            [
              "heap",
              "{B: 2}"
            ],
            [
              "queue",
              "[A: count 1, ready t=6]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=5 (Slot 4): Pop 'B' (count: 2) from Max-Heap. CPU executes 'B'. Remaining count is 1.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 1,
                "readyTime": 6
              },
              {
                "task": "B",
                "count": 1,
                "readyTime": 7
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B"
            ],
            "activeSlot": 4,
            "activeTask": "B",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              5
            ],
            [
              "executing",
              "B"
            ],
            [
              "heap",
              "empty"
            ],
            [
              "queue",
              "[A: count 1, ready t=6], [B: count 1, ready t=7]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=6 (Slot 5): Max-Heap is empty, next task 'A' is cooling until t=6. CPU executes an 'idle' cycle.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "A",
                "count": 1,
                "readyTime": 6
              },
              {
                "task": "B",
                "count": 1,
                "readyTime": 7
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle"
            ],
            "activeSlot": 5,
            "activeTask": "idle",
            "actionType": "idle"
          },
          "vars": [
            [
              "time",
              6
            ],
            [
              "executing",
              "idle"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "At t=6: Queue head 'A' has finished cooldown (readyTime == 6)! Re-insert 'A' (count: 1) into Max-Heap.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "A",
                "count": 1
              }
            ],
            "cooldownQueue": [
              {
                "task": "B",
                "count": 1,
                "readyTime": 7
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle"
            ],
            "activeSlot": 5,
            "activeTask": "idle",
            "actionType": "push"
          },
          "vars": [
            [
              "time",
              6
            ],
            [
              "reAdded",
              "A (count: 1)"
            ],
            [
              "heap",
              "{A: 1}"
            ],
            [
              "queue",
              "[B: count 1, ready t=7]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=7 (Slot 6): Pop 'A' (count: 1) from Max-Heap. CPU executes 'A'. Remaining count is 0 (Task A finished!).",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [
              {
                "task": "B",
                "count": 1,
                "readyTime": 7
              }
            ],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle",
              "A"
            ],
            "activeSlot": 6,
            "activeTask": "A",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              7
            ],
            [
              "executing",
              "A"
            ],
            [
              "status",
              "A finished completely!"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "At t=7: Queue head 'B' has finished cooldown (readyTime == 7)! Re-insert 'B' (count: 1) into Max-Heap.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [
              {
                "task": "B",
                "count": 1
              }
            ],
            "cooldownQueue": [],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle",
              "A"
            ],
            "activeSlot": 6,
            "activeTask": "A",
            "actionType": "push"
          },
          "vars": [
            [
              "time",
              7
            ],
            [
              "reAdded",
              "B (count: 1)"
            ],
            [
              "heap",
              "{B: 1}"
            ],
            [
              "queue",
              "empty"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Interval t=8 (Slot 7): Pop 'B' (count: 1) from Max-Heap. CPU executes 'B'. Remaining count is 0 (Task B finished!).",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle",
              "A",
              "B"
            ],
            "activeSlot": 7,
            "activeTask": "B",
            "actionType": "pop"
          },
          "vars": [
            [
              "time",
              8
            ],
            [
              "executing",
              "B"
            ],
            [
              "status",
              "B finished completely!"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Both Max-Heap and Cooldown Queue are empty! All tasks have finished successfully in 8 CPU intervals.",
          "customVisual": {
            "type": "task-scheduler",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "heapTasks": [],
            "cooldownQueue": [],
            "timeline": [
              "A",
              "B",
              "idle",
              "A",
              "B",
              "idle",
              "A",
              "B"
            ],
            "activeSlot": null,
            "activeTask": null,
            "actionType": "done"
          },
          "best": {
            "label": "8 Total CPU Intervals"
          },
          "vars": [
            [
              "finalTime",
              8
            ],
            [
              "schedule",
              "A → B → idle → A → B → idle → A → B"
            ]
          ]
        }
      ]
    },
    {
      "id": "optimized",
      "label": "Optimized · the math formula",
      "complexity": {
        "time": "O(N)",
        "space": "O(1)"
      },
      "pseudocode": [
        "count tasks",
        "maxFreq = max count; ties = labels with that count",
        "frame = (maxFreq - 1) * (n + 1) + ties",
        "answer = max(total tasks, frame)",
        "return answer"
      ],
      "starterCode": {
        "javascript": "function leastInterval(tasks, n) {\n  // Write your solution here\n  \n}",
        "python": "def leastInterval(tasks: list[str], n: int) -> int:\n    # Write your solution here\n    pass"
      },
      "solutionCode": {
        "javascript": "function leastInterval(tasks, n) {\n  const map = new Array(26).fill(0);\n  for (let t of tasks) map[t.charCodeAt(0) - 65]++;\n  map.sort((a, b) => b - a);\n  const maxVal = map[0] - 1;\n  let idleSlots = maxVal * n;\n  for (let i = 1; i < 26; i++) idleSlots -= Math.min(map[i], maxVal);\n  return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;\n}",
        "python": "def leastInterval(tasks: list[str], n: int) -> int:\n    from collections import Counter\n    counts = Counter(tasks)\n    max_f = max(counts.values())\n    max_count = sum(1 for v in counts.values() if v == max_f)\n    return max(len(tasks), (max_f - 1) * (n + 1) + max_count)"
      },
      "testCases": [
        {
          "input": [
            [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            2
          ],
          "expected": 8,
          "description": "8 intervals"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Step 1: Count task frequencies from input tasks ['A', 'A', 'A', 'B', 'B', 'B']. Frequency map: { A: 3, B: 3 }.",
          "customVisual": {
            "type": "task-scheduler-formula",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "formulaStage": "count",
            "maxFreq": 3,
            "ties": 2,
            "frames": [
              {
                "label": "FRAME 1 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FRAME 2 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FINAL ROW (+ 2 TIES)",
                "slots": [
                  "A",
                  "B"
                ]
              }
            ]
          },
          "vars": [
            [
              "freqMap",
              "{A: 3, B: 3}"
            ],
            [
              "n",
              2
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Step 2: Find maximum frequency: maxFreq = 3. Count tied tasks with frequency == 3: ties = 2 (tasks A and B).",
          "customVisual": {
            "type": "task-scheduler-formula",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "formulaStage": "maxFreq",
            "maxFreq": 3,
            "ties": 2,
            "frames": [
              {
                "label": "FRAME 1 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FRAME 2 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FINAL ROW (+ 2 TIES)",
                "slots": [
                  "A",
                  "B"
                ]
              }
            ]
          },
          "vars": [
            [
              "maxFreq",
              3
            ],
            [
              "ties",
              2
            ],
            [
              "tiedTasks",
              "['A', 'B']"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Step 3: Construct Frame Skeleton: (maxFreq - 1) = 2 frames. Each frame has width (n + 1) = (2 + 1) = 3 slots. Plus final row of 2 tied tasks.",
          "customVisual": {
            "type": "task-scheduler-formula",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "formulaStage": "frames",
            "maxFreq": 3,
            "ties": 2,
            "frames": [
              {
                "label": "FRAME 1 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FRAME 2 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FINAL ROW (+ 2 TIES)",
                "slots": [
                  "A",
                  "B"
                ]
              }
            ]
          },
          "vars": [
            [
              "framesCount",
              2
            ],
            [
              "frameWidth",
              3
            ],
            [
              "finalRowTies",
              2
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Frame Calculation: frame = (maxFreq - 1) * (n + 1) + ties = (3 - 1) * (2 + 1) + 2 = 2 * 3 + 2 = 8 slots.",
          "customVisual": {
            "type": "task-scheduler-formula",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "formulaStage": "calculated",
            "maxFreq": 3,
            "ties": 2,
            "frames": [
              {
                "label": "FRAME 1 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FRAME 2 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FINAL ROW (+ 2 TIES)",
                "slots": [
                  "A",
                  "B"
                ]
              }
            ]
          },
          "vars": [
            [
              "frameCalculation",
              "(3-1)*(2+1) + 2 = 8"
            ],
            [
              "frameTotal",
              8
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Step 4: Answer = max(total tasks, frame) = max(6, 8) = 8 intervals. If tasks > frame, they overflow into empty slots without needing extra idles.",
          "customVisual": {
            "type": "task-scheduler-formula",
            "tasks": [
              "A",
              "A",
              "A",
              "B",
              "B",
              "B"
            ],
            "n": 2,
            "formulaStage": "answer",
            "maxFreq": 3,
            "ties": 2,
            "frames": [
              {
                "label": "FRAME 1 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FRAME 2 (GAP n+1 = 3)",
                "slots": [
                  "A",
                  "B",
                  "idle"
                ]
              },
              {
                "label": "FINAL ROW (+ 2 TIES)",
                "slots": [
                  "A",
                  "B"
                ]
              }
            ]
          },
          "best": {
            "label": "Answer = 8 CPU Intervals in O(N) Time"
          },
          "vars": [
            [
              "totalTasks",
              6
            ],
            [
              "frameResult",
              8
            ],
            [
              "finalAnswer",
              8
            ]
          ]
        }
      ]
    }
  ]
  },
  {
  "id": "relative-ranks",
  "patternId": "heap",
  "title": "Relative Ranks",
  "subtitle": "Sort the indices so the scores keep their owners",
  "kind": "problem",
  "leetcode": {
    "id": 506,
    "slug": "relative-ranks",
    "difficulty": "Easy"
  },
  "companies": [
    "Google",
    "Amazon",
    "Microsoft"
  ],
  "statement": "You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. Return an array answer of size n where answer[i] is the rank of the ith athlete (\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\", or place number).",
  "visualType": "heap",
  "initialInput": [
    10,
    3,
    8,
    9,
    4
  ],
  "approaches": [
    {
      "id": "brute-force",
      "label": "Brute force · repeated maximum search O(n²)",
      "complexity": {
        "time": "O(n²)",
        "space": "O(n)"
      },
      "pseudocode": [
        "res = [\"\"] * n",
        "for rank from 1 to n:",
        "    find index of max remaining score",
        "    assign medal or str(rank)",
        "    mark score as -1"
      ],
      "starterCode": {
        "javascript": "function findRelativeRanks(score) {\n  // Write your solution here\n  \n}",
        "python": "def findRelativeRanks(score: list[int]) -> list[str]:\n    # Write your solution here\n    pass"
      },
      "solutionCode": {
        "javascript": "function findRelativeRanks(score) {\n  const res = new Array(score.length);\n  const copy = [...score];\n  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];\n  for (let r = 0; r < score.length; r++) {\n    let maxIdx = 0;\n    for (let i = 1; i < score.length; i++) {\n      if (copy[i] > copy[maxIdx]) maxIdx = i;\n    }\n    res[maxIdx] = r < 3 ? medals[r] : String(r + 1);\n    copy[maxIdx] = -Infinity;\n  }\n  return res;\n}",
        "python": "def findRelativeRanks(score: list[int]) -> list[str]:\n    n = len(score)\n    res = [''] * n\n    copy = list(score)\n    medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']\n    for r in range(n):\n        max_idx = copy.index(max(copy))\n        res[max_idx] = medals[r] if r < 3 else str(r + 1)\n        copy[max_idx] = -1\n    return res"
      },
      "testCases": [
        {
          "input": [
            [
              5,
              4,
              3,
              2,
              1
            ]
          ],
          "expected": [
            "Gold Medal",
            "Silver Medal",
            "Bronze Medal",
            "4",
            "5"
          ],
          "description": "Desc 5 to 1"
        },
        {
          "input": [
            [
              10,
              3,
              8,
              9,
              4
            ]
          ],
          "expected": [
            "Gold Medal",
            "5",
            "Bronze Medal",
            "Silver Medal",
            "4"
          ],
          "description": "Mixed scores"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Initialize result array res = ['', '', '', '', ''] for 5 athletes. Scores: [10, 3, 8, 9, 4].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": null,
            "ranks": [
              "",
              "",
              "",
              "",
              ""
            ],
            "currentRank": null,
            "heapPairs": []
          },
          "vars": [
            [
              "scores",
              "[10, 3, 8, 9, 4]"
            ],
            [
              "res",
              "['', '', '', '', '']"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Pass 1 (Rank 1): Find maximum remaining score. Athlete 0 has highest score (10).",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 0,
            "ranks": [
              "",
              "",
              "",
              "",
              ""
            ],
            "currentRank": {
              "rank": 1,
              "label": "Gold Medal",
              "athleteIdx": 0,
              "score": 10
            },
            "heapPairs": []
          },
          "vars": [
            [
              "rank",
              1
            ],
            [
              "maxScore",
              "10 (Athlete 0)"
            ],
            [
              "medal",
              "Gold Medal"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Assign 'Gold Medal' 🥇 to Athlete 0 (score 10). Mark score 10 as processed.",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 0,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "",
              ""
            ],
            "currentRank": {
              "rank": 1,
              "label": "Gold Medal",
              "athleteIdx": 0,
              "score": 10
            },
            "heapPairs": []
          },
          "vars": [
            [
              "res[0]",
              "'Gold Medal'"
            ],
            [
              "res",
              "['Gold Medal', '', '', '', '']"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Pass 2 (Rank 2): Find maximum remaining score among [3, 8, 9, 4]. Athlete 3 has highest score (9).",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 3,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "",
              ""
            ],
            "currentRank": {
              "rank": 2,
              "label": "Silver Medal",
              "athleteIdx": 3,
              "score": 9
            },
            "heapPairs": []
          },
          "vars": [
            [
              "rank",
              2
            ],
            [
              "maxScore",
              "9 (Athlete 3)"
            ],
            [
              "medal",
              "Silver Medal"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Assign 'Silver Medal' 🥈 to Athlete 3 (score 9). Mark score 9 as processed.",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 3,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 2,
              "label": "Silver Medal",
              "athleteIdx": 3,
              "score": 9
            },
            "heapPairs": []
          },
          "vars": [
            [
              "res[3]",
              "'Silver Medal'"
            ],
            [
              "res",
              "['Gold Medal', '', '', 'Silver Medal', '']"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Pass 3 (Rank 3): Find maximum remaining score among [3, 8, 4]. Athlete 2 has highest score (8).",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 2,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 3,
              "label": "Bronze Medal",
              "athleteIdx": 2,
              "score": 8
            },
            "heapPairs": []
          },
          "vars": [
            [
              "rank",
              3
            ],
            [
              "maxScore",
              "8 (Athlete 2)"
            ],
            [
              "medal",
              "Bronze Medal"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Assign 'Bronze Medal' 🥉 to Athlete 2 (score 8). Mark score 8 as processed.",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 2,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 3,
              "label": "Bronze Medal",
              "athleteIdx": 2,
              "score": 8
            },
            "heapPairs": []
          },
          "vars": [
            [
              "res[2]",
              "'Bronze Medal'"
            ],
            [
              "res",
              "['Gold Medal', '', 'Bronze Medal', 'Silver Medal', '']"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Pass 4 (Rank 4): Find maximum remaining score among [3, 4]. Athlete 4 has highest score (4).",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 4,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 4,
              "label": "4",
              "athleteIdx": 4,
              "score": 4
            },
            "heapPairs": []
          },
          "vars": [
            [
              "rank",
              4
            ],
            [
              "maxScore",
              "4 (Athlete 4)"
            ],
            [
              "placement",
              "'4'"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Assign '4' to Athlete 4 (score 4). Mark score 4 as processed.",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 4,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": {
              "rank": 4,
              "label": "4",
              "athleteIdx": 4,
              "score": 4
            },
            "heapPairs": []
          },
          "vars": [
            [
              "res[4]",
              "'4'"
            ],
            [
              "res",
              "['Gold Medal', '', 'Bronze Medal', 'Silver Medal', '4']"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Pass 5 (Rank 5): Last remaining score is 3 (Athlete 1).",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 1,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": {
              "rank": 5,
              "label": "5",
              "athleteIdx": 1,
              "score": 3
            },
            "heapPairs": []
          },
          "vars": [
            [
              "rank",
              5
            ],
            [
              "maxScore",
              "3 (Athlete 1)"
            ],
            [
              "placement",
              "'5'"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Assign '5' to Athlete 1 (score 3). All 5 athletes have been ranked!",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 1,
            "ranks": [
              "Gold Medal",
              "5",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": {
              "rank": 5,
              "label": "5",
              "athleteIdx": 1,
              "score": 3
            },
            "heapPairs": []
          },
          "best": {
            "label": "All Ranks Assigned"
          },
          "vars": [
            [
              "res[1]",
              "'5'"
            ],
            [
              "finalRanks",
              "['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']"
            ]
          ]
        }
      ]
    },
    {
      "id": "optimized",
      "label": "Optimized · Max-Heap of (score, index) O(n log n)",
      "complexity": {
        "time": "O(n log n)",
        "space": "O(n)"
      },
      "pseudocode": [
        "max_heap = [(-score[i], i) for i in range(n)]",
        "heapify(max_heap)",
        "medals = [\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\"]",
        "res = [\"\"] * n",
        "for rank from 0 to n-1:",
        "    _, i = pop_min(max_heap)",
        "    res[i] = medals[rank] if rank < 3 else str(rank + 1)",
        "return res"
      ],
      "starterCode": {
        "javascript": "function findRelativeRanks(score) {\n  // Write your solution here\n  \n}",
        "python": "def findRelativeRanks(score: list[int]) -> list[str]:\n    # Write your solution here\n    pass"
      },
      "solutionCode": {
        "javascript": "function findRelativeRanks(score) {\n  const sorted = score.map((s, i) => [s, i]).sort((a, b) => b[0] - a[0]);\n  const res = new Array(score.length);\n  const medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];\n  for (let r = 0; r < sorted.length; r++) {\n    const [s, i] = sorted[r];\n    res[i] = r < 3 ? medals[r] : String(r + 1);\n  }\n  return res;\n}",
        "python": "def findRelativeRanks(score: list[int]) -> list[str]:\n    import heapq\n    heap = [(-s, i) for i, s in enumerate(score)]\n    heapq.heapify(heap)\n    medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']\n    res = [''] * len(score)\n    for r in range(len(score)):\n        _, i = heapq.heappop(heap)\n        res[i] = medals[r] if r < 3 else str(r + 1)\n    return res"
      },
      "testCases": [
        {
          "input": [
            [
              10,
              3,
              8,
              9,
              4
            ]
          ],
          "expected": [
            "Gold Medal",
            "5",
            "Bronze Medal",
            "Silver Medal",
            "4"
          ],
          "description": "Mixed scores"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Create Max-Heap of (score, athleteIdx) pairs from input scores: [(10, 0), (9, 3), (8, 2), (4, 4), (3, 1)].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": null,
            "ranks": [
              "",
              "",
              "",
              "",
              ""
            ],
            "currentRank": null,
            "heapPairs": [
              {
                "score": 10,
                "athleteIdx": 0
              },
              {
                "score": 9,
                "athleteIdx": 3
              },
              {
                "score": 8,
                "athleteIdx": 2
              },
              {
                "score": 4,
                "athleteIdx": 4
              },
              {
                "score": 3,
                "athleteIdx": 1
              }
            ],
            "poppedPair": null
          },
          "vars": [
            [
              "heap",
              "[(10, #0), (9, #3), (8, #2), (4, #4), (3, #1)]"
            ],
            [
              "res",
              "['', '', '', '', '']"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Pop root from Max-Heap: (score: 10, Athlete: 0). Rank 1 → 'Gold Medal' 🥇 placed at res[0].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 0,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "",
              ""
            ],
            "currentRank": {
              "rank": 1,
              "label": "Gold Medal",
              "athleteIdx": 0,
              "score": 10
            },
            "heapPairs": [
              {
                "score": 9,
                "athleteIdx": 3
              },
              {
                "score": 4,
                "athleteIdx": 4
              },
              {
                "score": 8,
                "athleteIdx": 2
              },
              {
                "score": 3,
                "athleteIdx": 1
              }
            ],
            "poppedPair": {
              "score": 10,
              "athleteIdx": 0
            }
          },
          "vars": [
            [
              "popped",
              "Score 10 (Athlete 0)"
            ],
            [
              "rank",
              "1 (Gold Medal)"
            ],
            [
              "res[0]",
              "'Gold Medal'"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Pop root from Max-Heap: (score: 9, Athlete: 3). Rank 2 → 'Silver Medal' 🥈 placed at res[3].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 3,
            "ranks": [
              "Gold Medal",
              "",
              "",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 2,
              "label": "Silver Medal",
              "athleteIdx": 3,
              "score": 9
            },
            "heapPairs": [
              {
                "score": 8,
                "athleteIdx": 2
              },
              {
                "score": 4,
                "athleteIdx": 4
              },
              {
                "score": 3,
                "athleteIdx": 1
              }
            ],
            "poppedPair": {
              "score": 9,
              "athleteIdx": 3
            }
          },
          "vars": [
            [
              "popped",
              "Score 9 (Athlete 3)"
            ],
            [
              "rank",
              "2 (Silver Medal)"
            ],
            [
              "res[3]",
              "'Silver Medal'"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Pop root from Max-Heap: (score: 8, Athlete: 2). Rank 3 → 'Bronze Medal' 🥉 placed at res[2].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 2,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              ""
            ],
            "currentRank": {
              "rank": 3,
              "label": "Bronze Medal",
              "athleteIdx": 2,
              "score": 8
            },
            "heapPairs": [
              {
                "score": 4,
                "athleteIdx": 4
              },
              {
                "score": 3,
                "athleteIdx": 1
              }
            ],
            "poppedPair": {
              "score": 8,
              "athleteIdx": 2
            }
          },
          "vars": [
            [
              "popped",
              "Score 8 (Athlete 2)"
            ],
            [
              "rank",
              "3 (Bronze Medal)"
            ],
            [
              "res[2]",
              "'Bronze Medal'"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Pop root from Max-Heap: (score: 4, Athlete: 4). Rank 4 → '4' placed at res[4].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 4,
            "ranks": [
              "Gold Medal",
              "",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": {
              "rank": 4,
              "label": "4",
              "athleteIdx": 4,
              "score": 4
            },
            "heapPairs": [
              {
                "score": 3,
                "athleteIdx": 1
              }
            ],
            "poppedPair": {
              "score": 4,
              "athleteIdx": 4
            }
          },
          "vars": [
            [
              "popped",
              "Score 4 (Athlete 4)"
            ],
            [
              "rank",
              "4"
            ],
            [
              "res[4]",
              "'4'"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Pop root from Max-Heap: (score: 3, Athlete: 1). Rank 5 → '5' placed at res[1]. Max-Heap is empty!",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": 1,
            "ranks": [
              "Gold Medal",
              "5",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": {
              "rank": 5,
              "label": "5",
              "athleteIdx": 1,
              "score": 3
            },
            "heapPairs": [],
            "poppedPair": {
              "score": 3,
              "athleteIdx": 1
            }
          },
          "vars": [
            [
              "popped",
              "Score 3 (Athlete 1)"
            ],
            [
              "rank",
              "5"
            ],
            [
              "res[1]",
              "'5'"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Finished in O(n log n) time! Return answer array: ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'].",
          "customVisual": {
            "type": "relative-ranks",
            "scores": [
              10,
              3,
              8,
              9,
              4
            ],
            "activeScoreIdx": null,
            "ranks": [
              "Gold Medal",
              "5",
              "Bronze Medal",
              "Silver Medal",
              "4"
            ],
            "currentRank": null,
            "heapPairs": [],
            "poppedPair": null
          },
          "best": {
            "label": "[\"Gold Medal\", \"5\", \"Bronze Medal\", \"Silver Medal\", \"4\"]"
          },
          "vars": [
            [
              "result",
              "['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4']"
            ]
          ]
        }
      ]
    }
  ]
}
];
