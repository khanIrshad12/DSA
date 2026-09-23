import { Problem } from '../../types';

export const linkedListProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "linked-list",
    "title": "Overview",
    "subtitle": "Nodes, next-pointers, and O(1) surgery",
    "kind": "intro",
    "statement": "A Linked List is a linear collection of data elements called nodes whose order is not given by their physical placement in memory. Instead, each node points to the next, allowing O(1) insertions and deletions given a pointer, but O(n) sequential lookups.",
    "visualType": "linked-list",
    "initialInput": [
      10,
      20,
      30,
      40
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Array copy · O(n) element shifts",
        "complexity": {
          "time": "O(n) per insert/delete",
          "space": "O(n)"
        },
        "pseudocode": [
          "arr = [10, 20, 30, 40]",
          "insert(val, index):",
          "    shift all elements right from index",
          "    arr[index] = val",
          "delete(index):",
          "    shift all elements left from index + 1"
        ],
        "starterCode": {
          "javascript": "function arrayShiftSim(arr, index, val) {\n  // Write your solution here\n  \n}",
          "python": "def arrayShiftSim(arr: list[int], index: int, val: int) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function arrayShiftSim(arr, index, val) {\n  arr.splice(index, 0, val);\n  return arr;\n}",
          "python": "def arrayShiftSim(arr: list[int], index: int, val: int) -> list[int]:\n    arr.insert(index, val)\n    return arr"
        },
        "testCases": [
          {
            "input": [
              [
                10,
                20,
                30,
                40
              ],
              1,
              99
            ],
            "expected": [
              10,
              99,
              20,
              30,
              40
            ],
            "description": "Insert in middle"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Array with contiguous memory: [10, 20, 30, 40].",
            "vars": [
              [
                "arr",
                "[10, 20, 30, 40]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "To delete index 1 (20), elements 30 and 40 must physically shift left to fill gap (O(n) memory copying).",
            "highlights": [
              1,
              2,
              3
            ],
            "vars": [
              [
                "deleted",
                20
              ],
              [
                "shifted",
                "[30, 40]"
              ],
              [
                "cost",
                "O(n) shifts"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Array becomes [10, 30, 40].",
            "best": {
              "label": "Array delete requires O(n) shifts"
            },
            "vars": [
              [
                "arr",
                "[10, 30, 40]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Concept · O(1) pointer surgery",
        "complexity": {
          "time": "O(1) given pointer",
          "space": "O(1)"
        },
        "pseudocode": [
          "node = { value, next }       // next ARE the structure",
          "walk:    cur = cur.next       // access is O(n)",
          "splice:  a.next = b           // insert/delete is O(1)",
          "reverse: flip the arrows",
          "// tools: slow/fast pointers, dummy head"
        ],
        "starterCode": {
          "javascript": "function deleteNode(nodeA, nodeB) {\n  // Write your solution here\n  nodeA.next = nodeB;\n}",
          "python": "def deleteNode(node_a, node_b):\n    # Write your solution here\n    node_a.next = node_b"
        },
        "solutionCode": {
          "javascript": "function deleteNode(nodeA, nodeB) {\n  nodeA.next = nodeB;\n  return nodeA;\n}",
          "python": "def deleteNode(node_a, node_b):\n    node_a.next = node_b\n    return node_a"
        },
        "testCases": [
          {
            "input": [
              [
                10,
                20,
                30,
                40
              ]
            ],
            "expected": [
              10,
              30,
              40
            ],
            "description": "Delete node 20"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Linked list nodes [10, 20, 30, 40] connected via next pointers: 10 → 20 → 30 → 40 → Ø.",
            "linkedList": {
              "curr": null,
              "prev": null
            },
            "vars": [
              [
                "op",
                "initial list"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Walk: Traversing from head to node 20 requires following pointers sequentially (O(n)).",
            "linkedList": {
              "curr": 1
            },
            "highlights": [
              0,
              1
            ],
            "pointers": [
              {
                "name": "curr",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "curr.val",
                20
              ],
              [
                "accessCost",
                "O(n)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "The payoff: SURGERY is O(1). To delete node 2, nobody moves — node 1 simply points PAST it: node1.next = node2.next. Compare: an array delete shifts everything left.",
            "linkedList": {
              "curr": 1
            },
            "customVisual": {
              "bypassArrow": {
                "from": 0,
                "to": 2
              }
            },
            "best": {
              "label": "O(1) Pointer Surgery: 10 → 30"
            },
            "vars": [
              [
                "op",
                "delete node 20"
              ],
              [
                "surgery",
                "10.next = 30"
              ],
              [
                "time",
                "O(1)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Reverse: Reversing is just flipping arrows backwards in-place with O(1) extra space.",
            "linkedList": {
              "curr": 3,
              "flippedArrows": [
                0,
                1,
                2,
                3
              ]
            },
            "best": {
              "label": "Reversal flips pointers in O(1) space"
            },
            "vars": [
              [
                "op",
                "reverse arrows"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "reverse-linked-list",
    "patternId": "linked-list",
    "title": "Reverse Linked List",
    "subtitle": "Flip every arrow · prev / curr / next",
    "kind": "problem",
    "leetcode": {
      "id": 206,
      "slug": "reverse-linked-list",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Google",
      "Meta",
      "Bloomberg"
    ],
    "statement": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    "visualType": "linked-list",
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
        "label": "Brute force · array buffer value rewrite",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "vals = []",
          "curr = head",
          "while curr: vals.push(curr.val); curr = curr.next",
          "curr = head",
          "while curr: curr.val = vals.pop(); curr = curr.next",
          "return head"
        ],
        "starterCode": {
          "javascript": "function reverseList(head) {\n  // Write your solution here\n  \n}",
          "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function reverseList(head) {\n  const vals = [];\n  let curr = head;\n  while (curr) { vals.push(curr.val); curr = curr.next; }\n  curr = head;\n  while (curr) { curr.val = vals.pop(); curr = curr.next; }\n  return head;\n}",
          "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    vals = []\n    curr = head\n    while curr:\n        vals.append(curr.val)\n        curr = curr.next\n    curr = head\n    while curr:\n        curr.val = vals.pop()\n        curr = curr.next\n    return head"
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
              ]
            ],
            "expected": [
              5,
              4,
              3,
              2,
              1
            ],
            "description": "Standard 5 nodes"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Traverse list and collect all node values into array: [1, 2, 3, 4, 5].",
            "vars": [
              [
                "buffer",
                "[1, 2, 3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop from buffer in reverse order and overwrite node values: 5 → 4 → 3 → 2 → 1.",
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Reversed: 5 → 4 → 3 → 2 → 1"
            },
            "vars": [
              [
                "nodeValues",
                "[5, 4, 3, 2, 1]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · in-place 3-pointer arrow flip O(1) space",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "prev = null",
          "curr = head",
          "while curr:",
          "    next = curr.next",
          "    curr.next = prev",
          "    prev = curr",
          "    curr = next",
          "return prev"
        ],
        "starterCode": {
          "javascript": "function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}",
          "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev"
        },
        "solutionCode": {
          "javascript": "function reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}",
          "python": "def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:\n    prev = None\n    curr = head\n    while curr:\n        next_node = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_node\n    return prev"
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
              ]
            ],
            "expected": [
              5,
              4,
              3,
              2,
              1
            ],
            "description": "Standard 5 nodes"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize prev = null, curr = Node 1. Prepare to flip arrows.",
            "linkedList": {
              "curr": 0,
              "prev": null,
              "flippedArrows": []
            },
            "pointers": [
              {
                "name": "curr",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "prev",
                "null"
              ],
              [
                "curr",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 1: save next (2). Flip 1.next = null (prev). Advance prev to 1, curr to 2.",
            "linkedList": {
              "curr": 1,
              "prev": 0,
              "flippedArrows": [
                0
              ]
            },
            "pointers": [
              {
                "name": "curr",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "prev",
                1
              ],
              [
                "curr",
                2
              ],
              [
                "flipped",
                "1 → Ø"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 2: save next (3). Flip 2.next = 1. Advance prev to 2, curr to 3.",
            "linkedList": {
              "curr": 2,
              "prev": 1,
              "flippedArrows": [
                0,
                1
              ]
            },
            "pointers": [
              {
                "name": "curr",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "prev",
                2
              ],
              [
                "curr",
                3
              ],
              [
                "flipped",
                "2 → 1"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 3: save next (4). Flip 3.next = 2. Advance prev to 3, curr to 4.",
            "linkedList": {
              "curr": 3,
              "prev": 2,
              "flippedArrows": [
                0,
                1,
                2
              ]
            },
            "pointers": [
              {
                "name": "curr",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "prev",
                3
              ],
              [
                "curr",
                4
              ],
              [
                "flipped",
                "3 → 2"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 4: save next (5). Flip 4.next = 3. Advance prev to 4, curr to 5.",
            "linkedList": {
              "curr": 4,
              "prev": 3,
              "flippedArrows": [
                0,
                1,
                2,
                3
              ]
            },
            "pointers": [
              {
                "name": "curr",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "prev",
                4
              ],
              [
                "curr",
                5
              ],
              [
                "flipped",
                "4 → 3"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 5: save next (null). Flip 5.next = 4. Advance prev to 5, curr to null.",
            "linkedList": {
              "curr": null,
              "prev": 4,
              "flippedArrows": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "pointers": [
              {
                "name": "prev (head)",
                "index": 4,
                "color": "green"
              }
            ],
            "best": {
              "label": "Reversed: 5 → 4 → 3 → 2 → 1"
            },
            "vars": [
              [
                "newHead",
                5
              ],
              [
                "curr",
                "null"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "merge-two-sorted-lists",
    "patternId": "linked-list",
    "title": "Merge Two Sorted Lists",
    "subtitle": "Splice the smaller head · dummy node",
    "kind": "problem",
    "leetcode": {
      "id": 21,
      "slug": "merge-two-sorted-lists",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Apple",
      "Google",
      "Meta",
      "Uber"
    ],
    "statement": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
    "visualType": "linked-list",
    "initialInput": [
      1,
      2,
      4
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · array collect & sort",
        "complexity": {
          "time": "O((n+m) log(n+m))",
          "space": "O(n+m)"
        },
        "pseudocode": [
          "arr = []",
          "collect all nodes from list1 & list2 into arr",
          "arr.sort((a, b) => a - b)",
          "rebuild linked list from arr",
          "return newHead"
        ],
        "starterCode": {
          "javascript": "function mergeTwoLists(list1, list2) {\n  // Write your solution here\n  \n}",
          "python": "def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function mergeTwoLists(list1, list2) {\n  const vals = [];\n  while (list1) { vals.push(list1.val); list1 = list1.next; }\n  while (list2) { vals.push(list2.val); list2 = list2.next; }\n  vals.sort((a, b) => a - b);\n  const dummy = { val: 0, next: null };\n  let curr = dummy;\n  for (let v of vals) { curr.next = { val: v, next: null }; curr = curr.next; }\n  return dummy.next;\n}",
          "python": "def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    vals = []\n    while list1:\n        vals.append(list1.val)\n        list1 = list1.next\n    while list2:\n        vals.append(list2.val)\n        list2 = list2.next\n    vals.sort()\n    dummy = ListNode(0)\n    curr = dummy\n    for v in vals:\n        curr.next = ListNode(v)\n        curr = curr.next\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                4
              ],
              [
                1,
                3,
                4
              ]
            ],
            "expected": [
              1,
              1,
              2,
              3,
              4,
              4
            ],
            "description": "Standard two lists"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Extract [1, 2, 4] and [1, 3, 4] into combined array [1, 2, 4, 1, 3, 4].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    1,
                    2,
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    1,
                    3,
                    4
                  ]
                }
              ]
            },
            "vars": [
              [
                "combined",
                "[1, 2, 4, 1, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Sort array in O((n+m)log(n+m)) time: [1, 1, 2, 3, 4, 4].",
            "customVisual": {
              "resultList": [
                1,
                1,
                2,
                3,
                4,
                4
              ]
            },
            "best": {
              "label": "[1, 1, 2, 3, 4, 4]"
            },
            "vars": [
              [
                "sorted",
                "[1, 1, 2, 3, 4, 4]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · dummy head + two-pointer splice O(1) space",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(1)"
        },
        "pseudocode": [
          "dummy = ListNode(0)",
          "tail = dummy",
          "while l1 and l2:",
          "    if l1.val <= l2.val: tail.next = l1; l1 = l1.next",
          "    else: tail.next = l2; l2 = l2.next",
          "    tail = tail.next",
          "tail.next = l1 or l2",
          "return dummy.next"
        ],
        "starterCode": {
          "javascript": "function mergeTwoLists(list1, list2) {\n  // Write your solution here\n  \n}",
          "python": "def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function mergeTwoLists(list1, list2) {\n  const dummy = { val: 0, next: null };\n  let tail = dummy;\n  while (list1 && list2) {\n    if (list1.val <= list2.val) {\n      tail.next = list1;\n      list1 = list1.next;\n    } else {\n      tail.next = list2;\n      list2 = list2.next;\n    }\n    tail = tail.next;\n  }\n  tail.next = list1 || list2;\n  return dummy.next;\n}",
          "python": "def mergeTwoLists(list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    tail = dummy\n    while list1 and list2:\n        if list1.val <= list2.val:\n            tail.next = list1\n            list1 = list1.next\n        else:\n            tail.next = list2\n            list2 = list2.next\n        tail = tail.next\n    tail.next = list1 or list2\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                4
              ],
              [
                1,
                3,
                4
              ]
            ],
            "expected": [
              1,
              1,
              2,
              3,
              4,
              4
            ],
            "description": "Standard merge"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Create dummy head node. Compare List1 [1, 2, 4] and List2 [1, 3, 4].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    1,
                    2,
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    1,
                    3,
                    4
                  ]
                }
              ]
            },
            "pointers": [
              {
                "name": "l1",
                "index": 0,
                "color": "cyan"
              },
              {
                "name": "l2",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "dummy",
                0
              ],
              [
                "tail",
                "dummy"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare l1(1) and l2(1): l1 <= l2. Splice l1(1). Result list starts: [1].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    1,
                    3,
                    4
                  ]
                }
              ],
              "resultList": [
                1
              ]
            },
            "pointers": [
              {
                "name": "l1",
                "index": 1,
                "color": "cyan"
              },
              {
                "name": "l2",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "spliced",
                1
              ],
              [
                "l1",
                2
              ],
              [
                "l2",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Compare l1(2) and l2(1): l2 < l1. Splice l2(1). Result: [1, 1].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    3,
                    4
                  ]
                }
              ],
              "resultList": [
                1,
                1
              ]
            },
            "pointers": [
              {
                "name": "l1",
                "index": 1,
                "color": "cyan"
              },
              {
                "name": "l2",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "spliced",
                1
              ],
              [
                "l1",
                2
              ],
              [
                "l2",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare l1(2) and l2(3): l1 < l2. Splice l1(2). Result: [1, 1, 2].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    3,
                    4
                  ]
                }
              ],
              "resultList": [
                1,
                1,
                2
              ]
            },
            "pointers": [
              {
                "name": "l1",
                "index": 2,
                "color": "cyan"
              },
              {
                "name": "l2",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "spliced",
                2
              ],
              [
                "l1",
                4
              ],
              [
                "l2",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Compare l1(4) and l2(3): l2 < l1. Splice l2(3). Result: [1, 1, 2, 3].",
            "customVisual": {
              "multiLists": [
                {
                  "label": "LIST 1",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    4
                  ]
                },
                {
                  "label": "LIST 2",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    4
                  ]
                }
              ],
              "resultList": [
                1,
                1,
                2,
                3
              ]
            },
            "pointers": [
              {
                "name": "l1",
                "index": 2,
                "color": "cyan"
              },
              {
                "name": "l2",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "spliced",
                3
              ],
              [
                "l1",
                4
              ],
              [
                "l2",
                4
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Attach remaining nodes [4, 4]. Final merged list complete!",
            "customVisual": {
              "resultList": [
                1,
                1,
                2,
                3,
                4,
                4
              ]
            },
            "best": {
              "label": "Merged List: 1 → 1 → 2 → 3 → 4 → 4"
            },
            "vars": [
              [
                "result",
                "1 → 1 → 2 → 3 → 4 → 4"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "add-two-numbers",
    "patternId": "linked-list",
    "title": "Add Two Numbers",
    "subtitle": "Elementary addition · carry",
    "kind": "problem",
    "leetcode": {
      "id": 2,
      "slug": "add-two-numbers",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Apple",
      "Meta",
      "Bloomberg"
    ],
    "statement": "You are given two non-empty linked lists representing two non-negative integers in reverse order. Add the two numbers and return the sum as a linked list.",
    "visualType": "linked-list",
    "initialInput": [
      2,
      4,
      3
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · convert to BigInt & reconstruct",
        "complexity": {
          "time": "O(n + m)",
          "space": "O(n + m)"
        },
        "pseudocode": [
          "num1 = convertToNumber(l1)",
          "num2 = convertToNumber(l2)",
          "sum = num1 + num2",
          "convert sum to reversed linked list",
          "return head"
        ],
        "starterCode": {
          "javascript": "function addTwoNumbers(l1, l2) {\n  // Write your solution here\n  \n}",
          "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function addTwoNumbers(l1, l2) {\n  let s1 = '', s2 = '';\n  while (l1) { s1 = l1.val + s1; l1 = l1.next; }\n  while (l2) { s2 = l2.val + s2; l2 = l2.next; }\n  let total = BigInt(s1) + BigInt(s2);\n  let digits = total.toString().split('').reverse();\n  const dummy = { val: 0, next: null };\n  let curr = dummy;\n  for (let d of digits) { curr.next = { val: Number(d), next: null }; curr = curr.next; }\n  return dummy.next;\n}",
          "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    s1, s2 = '', ''\n    while l1: s1 = str(l1.val) + s1; l1 = l1.next\n    while l2: s2 = str(l2.val) + s2; l2 = l2.next\n    total = str(int(s1) + int(s2))[::-1]\n    dummy = ListNode(0)\n    curr = dummy\n    for ch in total:\n        curr.next = ListNode(int(ch))\n        curr = curr.next\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                4,
                3
              ],
              [
                5,
                6,
                4
              ]
            ],
            "expected": [
              7,
              0,
              8
            ],
            "description": "342 + 465 = 807"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "l1 represents 342 (stored 2 → 4 → 3), l2 represents 465 (stored 5 → 6 → 4).",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ]
            },
            "vars": [
              [
                "num 1",
                342
              ],
              [
                "num 2",
                465
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Calculate 342 + 465 = 807.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ]
            },
            "vars": [
              [
                "sum",
                807
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Convert 807 into reversed linked list: 7 → 0 → 8.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ],
              "resultList": [
                7,
                0,
                8
              ]
            },
            "best": {
              "label": "7 → 0 → 8 (807)"
            },
            "vars": [
              [
                "result",
                "7 → 0 → 8"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · digit-by-digit carry addition O(1) space",
        "complexity": {
          "time": "O(max(n, m))",
          "space": "O(1)"
        },
        "pseudocode": [
          "dummy = node; tail = dummy; carry = 0",
          "while l1 or l2 or carry:",
          "    sum = (l1.val or 0) + (l2.val or 0) + carry",
          "    carry = sum // 10",
          "    tail.next = node(sum % 10); tail = tail.next",
          "    advance l1 and l2 if present",
          "return dummy.next"
        ],
        "starterCode": {
          "javascript": "function addTwoNumbers(l1, l2) {\n  // Write your solution here\n  \n}",
          "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function addTwoNumbers(l1, l2) {\n  const dummy = { val: 0, next: null };\n  let curr = dummy, carry = 0;\n  while (l1 || l2 || carry) {\n    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;\n    carry = Math.floor(sum / 10);\n    curr.next = { val: sum % 10, next: null };\n    curr = curr.next;\n    if (l1) l1 = l1.next;\n    if (l2) l2 = l2.next;\n  }\n  return dummy.next;\n}",
          "python": "def addTwoNumbers(l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0)\n    curr, carry = dummy, 0\n    while l1 or l2 or carry:\n        v1 = l1.val if l1 else 0\n        v2 = l2.val if l2 else 0\n        s = v1 + v2 + carry\n        carry = s // 10\n        curr.next = ListNode(s % 10)\n        curr = curr.next\n        l1 = l1.next if l1 else None\n        l2 = l2.next if l2 else None\n    return dummy.next"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                4,
                3
              ],
              [
                5,
                6,
                4
              ]
            ],
            "expected": [
              7,
              0,
              8
            ],
            "description": "342 + 465 = 807"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Each list holds the digits of a number in REVERSE order, so index 0 is the ones place. Add them exactly like grade-school addition: walk both lists together, summing one column at a time and carrying the overflow.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "cyan"
              },
              {
                "name": "p2",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "num 1",
                342
              ],
              [
                "num 2",
                465
              ],
              [
                "carry",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column 0 (ones place): 2 + 5 + carry(0) = 7. carry = 0, new result node = 7.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ],
              "resultList": [
                7
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "cyan"
              },
              {
                "name": "p2",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "column",
                0
              ],
              [
                "sum",
                7
              ],
              [
                "digit",
                7
              ],
              [
                "carry",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Column 1 (place value 10^1): 4 + 6 = 10 — that's 10, so write 0 and carry the 1.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ],
              "resultList": [
                7,
                0
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "cyan"
              },
              {
                "name": "p2",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "column",
                1
              ],
              [
                "sum",
                "4 + 6 = 10"
              ],
              [
                "digit",
                0
              ],
              [
                "carry",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Column 2 (place value 10^2): 3 + 4 + carry(1) = 8. carry = 0, write 8.",
            "customVisual": {
              "multiLists": [
                {
                  "label": "NUM 1 (342)",
                  "color": "rgba(0, 210, 255, 0.7)",
                  "nodes": [
                    2,
                    4,
                    3
                  ]
                },
                {
                  "label": "NUM 2 (465)",
                  "color": "rgba(255, 170, 0, 0.8)",
                  "nodes": [
                    5,
                    6,
                    4
                  ]
                }
              ],
              "resultList": [
                7,
                0,
                8
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 2,
                "color": "cyan"
              },
              {
                "name": "p2",
                "index": 2,
                "color": "accent"
              }
            ],
            "best": {
              "label": "Result List: 7 → 0 → 8 (807)"
            },
            "vars": [
              [
                "column",
                2
              ],
              [
                "sum",
                "3 + 4 + 1 = 8"
              ],
              [
                "digit",
                8
              ],
              [
                "carry",
                0
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "linked-list-cycle",
    "patternId": "linked-list",
    "title": "Linked List Cycle",
    "subtitle": "Floyd's tortoise & hare",
    "kind": "problem",
    "leetcode": {
      "id": 141,
      "slug": "linked-list-cycle",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Meta",
      "Apple",
      "Spotify"
    ],
    "statement": "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle if there is some node in the list that can be reached again by continuously following the next pointer.",
    "visualType": "linked-list",
    "initialInput": [
      3,
      2,
      0,
      -4
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · hash set visited tracker",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "visited = set()",
          "curr = head",
          "while curr:",
          "    if curr in visited: return true",
          "    visited.add(curr)",
          "    curr = curr.next",
          "return false"
        ],
        "starterCode": {
          "javascript": "function hasCycle(head) {\n  // Write your solution here\n  \n}",
          "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function hasCycle(head) {\n  const visited = new Set();\n  let curr = head;\n  while (curr) {\n    if (visited.has(curr)) return true;\n    visited.add(curr);\n    curr = curr.next;\n  }\n  return false;\n}",
          "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    visited = set()\n    curr = head\n    while curr:\n        if curr in visited:\n            return True\n        visited.add(curr)\n        curr = curr.next\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                0,
                -4
              ]
            ],
            "expected": true,
            "description": "Cycle connects back to pos 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize hash set to store visited node references.",
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "cur",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "visited",
                "{}"
              ],
              [
                "cur",
                "node 3"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Visit nodes 3, 2, 0, -4. Add each to visited set.",
            "highlights": [
              0,
              1,
              2,
              3
            ],
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "cur",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "visited",
                "{0, 1, 2, 3}"
              ],
              [
                "cur",
                "node -4"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node -4.next points back to Node 2 (already in set) → Cycle detected!",
            "highlights": [
              1,
              3
            ],
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "cycle match",
                "index": 1,
                "color": "green"
              }
            ],
            "best": {
              "label": "Cycle Found at Node 2"
            },
            "vars": [
              [
                "cycleDetected",
                true
              ],
              [
                "visitedMatch",
                "node 2"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · Floyd's tortoise & hare O(1) space",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "slow = head, fast = head",
          "while fast and fast.next:",
          "    slow = slow.next          // 1 step",
          "    fast = fast.next.next     // 2 steps",
          "    if slow == fast: return true",
          "return false"
        ],
        "starterCode": {
          "javascript": "function hasCycle(head) {\n  // Write your solution here\n  \n}",
          "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next;\n    fast = fast.next.next;\n    if (slow === fast) return true;\n  }\n  return false;\n}",
          "python": "def hasCycle(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next:\n        slow = slow.next\n        fast = fast.next.next\n        if slow == fast:\n            return True\n    return False"
        },
        "testCases": [
          {
            "input": [
              [
                3,
                2,
                0,
                -4
              ]
            ],
            "expected": true,
            "description": "Cycle connects back to pos 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize slow = Node 3 (idx 0), fast = Node 3 (idx 0).",
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "slow",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 0,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow",
                3
              ],
              [
                "fast",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Step 1: slow moves 1 step to Node 2 (idx 1), fast moves 2 steps to Node 0 (idx 2).",
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "slow",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 2,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow",
                2
              ],
              [
                "fast",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Step 2: slow moves to Node 0 (idx 2), fast cycles from -4 back to Node 2 (idx 1).",
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "slow",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 1,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow",
                0
              ],
              [
                "fast",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Step 3: slow moves to Node -4 (idx 3), fast moves 2 steps from Node 2 to Node -4 (idx 3). slow == fast → Cycle Confirmed!",
            "customVisual": {
              "cycle": {
                "from": 3,
                "to": 1
              }
            },
            "pointers": [
              {
                "name": "slow = fast",
                "index": 3,
                "color": "green"
              }
            ],
            "best": {
              "label": "Cycle Confirmed in O(1) Space"
            },
            "vars": [
              [
                "matchNode",
                -4
              ],
              [
                "hasCycle",
                true
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "palindrome-linked-list",
    "patternId": "linked-list",
    "title": "Palindrome Linked List",
    "subtitle": "Middle + reverse half + two pointers",
    "kind": "problem",
    "leetcode": {
      "id": 234,
      "slug": "palindrome-linked-list",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Meta",
      "Apple"
    ],
    "statement": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    "visualType": "linked-list",
    "initialInput": [
      1,
      2,
      3,
      2,
      1
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · copy to array + two pointers",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "vals = []",
          "curr = head",
          "while curr: vals.push(curr.val); curr = curr.next",
          "return vals == vals[::-1]"
        ],
        "starterCode": {
          "javascript": "function isPalindrome(head) {\n  // Write your solution here\n  \n}",
          "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isPalindrome(head) {\n  const vals = [];\n  let curr = head;\n  while (curr) { vals.push(curr.val); curr = curr.next; }\n  let l = 0, r = vals.length - 1;\n  while (l < r) {\n    if (vals[l] !== vals[r]) return false;\n    l++; r--;\n  }\n  return true;\n}",
          "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    vals = []\n    curr = head\n    while curr:\n        vals.append(curr.val)\n        curr = curr.next\n    return vals == vals[::-1]"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                2,
                1
              ]
            ],
            "expected": true,
            "description": "Symmetric odd-length palindrome"
          },
          {
            "input": [
              [
                1,
                2
              ]
            ],
            "expected": false,
            "description": "Not palindrome"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Copy node values to array: [1, 2, 3, 2, 1].",
            "vars": [
              [
                "vals",
                "[1, 2, 3, 2, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Compare from both ends: vals[0]==vals[4] (1==1) and vals[1]==vals[3] (2==2). Valid palindrome.",
            "highlights": [
              0,
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Palindrome: True"
            },
            "vars": [
              [
                "isPalindrome",
                true
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · reverse second half in-place O(1) space",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "// 1. Find middle with slow & fast",
          "slow = fast = head",
          "while fast and fast.next: slow = slow.next; fast = fast.next.next",
          "// 2. Reverse second half from slow",
          "prev = null; curr = slow.next",
          "while curr: next = curr.next; curr.next = prev; prev = curr; curr = next",
          "// 3. Compare first & second halves",
          "p1 = head, p2 = prev",
          "while p2: if p1.val != p2.val: return false; p1 = p1.next; p2 = p2.next",
          "return true"
        ],
        "starterCode": {
          "javascript": "function isPalindrome(head) {\n  // Write your solution here\n  \n}",
          "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isPalindrome(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }\n  let prev = null, curr = slow;\n  while (curr) {\n    const next = curr.next;\n    curr.next = prev;\n    prev = curr;\n    curr = next;\n  }\n  let p1 = head, p2 = prev;\n  while (p2) {\n    if (p1.val !== p2.val) return false;\n    p1 = p1.next;\n    p2 = p2.next;\n  }\n  return true;\n}",
          "python": "def isPalindrome(head: Optional[ListNode]) -> bool:\n    slow = fast = head\n    while fast and fast.next: slow = slow.next; fast = fast.next.next\n    prev, curr = None, slow\n    while curr: next_n = curr.next; curr.next = prev; prev = curr; curr = next_n\n    p1, p2 = head, prev\n    while p2:\n        if p1.val != p2.val: return False\n        p1 = p1.next; p2 = p2.next\n    return True"
        },
        "testCases": [
          {
            "input": [
              [
                1,
                2,
                3,
                2,
                1
              ]
            ],
            "expected": true,
            "description": "Symmetric odd-length"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Phase 1: Find middle using slow and fast pointers. Initialize slow = Node 1, fast = Node 1.",
            "pointers": [
              {
                "name": "slow",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 0,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow",
                1
              ],
              [
                "fast",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Hop 1: slow → Node 2 (idx 1), fast → Node 3 (idx 2).",
            "pointers": [
              {
                "name": "slow",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 2,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow",
                2
              ],
              [
                "fast",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Hop 2: slow → Node 3 (idx 2), fast → Node 1 (idx 4, the tail). fast is done, so slow = node 2 IS the middle.",
            "pointers": [
              {
                "name": "slow",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 4,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "middle",
                "node 2 (val 3)"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Phase 2: Reverse right half in-place starting after middle. Flip arrows on right half: 3 ← 2 ← 1.",
            "linkedList": {
              "curr": 4,
              "prev": 3,
              "flippedArrows": [
                3,
                4
              ]
            },
            "highlights": [
              3,
              4
            ],
            "vars": [
              [
                "reversedTail",
                "node 1 (idx 4)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Phase 3: Two pointers check symmetry. Compare outer pair: p1 at head (val 1) == p2 at tail (val 1). Match!",
            "linkedList": {
              "curr": 0,
              "prev": 4,
              "flippedArrows": [
                3,
                4
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 0,
                "color": "green"
              },
              {
                "name": "p2",
                "index": 4,
                "color": "green"
              }
            ],
            "vars": [
              [
                "p1.val",
                1
              ],
              [
                "p2.val",
                1
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Advance inward: compare inner pair: p1 at idx 1 (val 2) == p2 at idx 3 (val 2). Match!",
            "linkedList": {
              "curr": 1,
              "prev": 3,
              "flippedArrows": [
                3,
                4
              ]
            },
            "pointers": [
              {
                "name": "p1",
                "index": 1,
                "color": "green"
              },
              {
                "name": "p2",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "p1.val",
                2
              ],
              [
                "p2.val",
                2
              ],
              [
                "match",
                true
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Both pointers reach middle node. All pairs matched symmetrically! Palindrome Validated in O(1) Space.",
            "linkedList": {
              "curr": 2,
              "prev": 2,
              "flippedArrows": [
                3,
                4
              ]
            },
            "pointers": [
              {
                "name": "p1 = p2 = mid",
                "index": 2,
                "color": "green"
              }
            ],
            "best": {
              "label": "Valid Palindrome Confirmed (O(1) space)"
            },
            "vars": [
              [
                "isPalindrome",
                true
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "remove-nth-node-from-end",
    "patternId": "linked-list",
    "title": "Remove Nth Node From End",
    "subtitle": "Two pointers locked n apart",
    "kind": "problem",
    "leetcode": {
      "id": 19,
      "slug": "remove-nth-node-from-end",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "Meta",
      "Apple"
    ],
    "statement": "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
    "visualType": "linked-list",
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
        "label": "Brute force · two-pass length count",
        "complexity": {
          "time": "O(2n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "len = 0; curr = head",
          "while curr: len++; curr = curr.next",
          "target = len - n",
          "curr = head",
          "for i in range(target - 1): curr = curr.next",
          "curr.next = curr.next.next",
          "return head"
        ],
        "starterCode": {
          "javascript": "function removeNthFromEnd(head, n) {\n  // Write your solution here\n  \n}",
          "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function removeNthFromEnd(head, n) {\n  let len = 0, curr = head;\n  while (curr) { len++; curr = curr.next; }\n  if (len === n) return head.next;\n  curr = head;\n  for (let i = 0; i < len - n - 1; i++) curr = curr.next;\n  curr.next = curr.next.next;\n  return head;\n}",
          "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    length = 0\n    curr = head\n    while curr: length += 1; curr = curr.next\n    if length == n: return head.next\n    curr = head\n    for _ in range(length - n - 1): curr = curr.next\n    curr.next = curr.next.next\n    return head"
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
              2
            ],
            "expected": [
              1,
              2,
              3,
              5
            ],
            "description": "Remove 2nd from end (node 4)"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Pass 1: Count total list length = 5 nodes.",
            "vars": [
              [
                "length",
                5
              ],
              [
                "n",
                2
              ],
              [
                "targetIdx",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pass 2: Traverse to node 3 (idx 2) and skip node 4: 3.next = 5.",
            "customVisual": {
              "bypassArrow": {
                "from": 2,
                "to": 4
              }
            },
            "best": {
              "label": "Result: 1 → 2 → 3 → 5"
            },
            "vars": [
              [
                "bypassed",
                "node 4"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · one-pass two pointers locked n apart",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "dummy = ListNode(0, head)",
          "fast = slow = dummy",
          "for _ in range(n + 1): fast = fast.next",
          "while fast: slow = slow.next; fast = fast.next",
          "slow.next = slow.next.next",
          "return dummy.next"
        ],
        "starterCode": {
          "javascript": "function removeNthFromEnd(head, n) {\n  // Write your solution here\n  \n}",
          "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function removeNthFromEnd(head, n) {\n  const dummy = { val: 0, next: head };\n  let fast = dummy, slow = dummy;\n  for (let i = 0; i <= n; i++) fast = fast.next;\n  while (fast) { slow = slow.next; fast = fast.next; }\n  slow.next = slow.next.next;\n  return dummy.next;\n}",
          "python": "def removeNthFromEnd(head: Optional[ListNode], n: int) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    fast = slow = dummy\n    for _ in range(n + 1): fast = fast.next\n    while fast: slow = slow.next; fast = fast.next\n    slow.next = slow.next.next\n    return dummy.next"
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
              2
            ],
            "expected": [
              1,
              2,
              3,
              5
            ],
            "description": "One-pass remove node 4"
          }
        ],
        "steps": [
          {
            "codeLine": 3,
            "narration": "Advance fast pointer n+1=3 steps ahead of slow. Pointers are now locked 2 nodes apart.",
            "pointers": [
              {
                "name": "slow",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 2,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "gap",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Slide both pointers together until fast hits end: slow lands right before target (at node 3).",
            "pointers": [
              {
                "name": "slow",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "fast",
                "index": 4,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "slow.val",
                3
              ],
              [
                "target",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "O(1) surgery: slow.next = slow.next.next. Node 3 directly links to Node 5, skipping Node 4!",
            "customVisual": {
              "bypassArrow": {
                "from": 2,
                "to": 4
              }
            },
            "best": {
              "label": "Deleted in 1 Pass: 1 → 2 → 3 → 5"
            },
            "vars": [
              [
                "deleted",
                "node 4"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "reorder-list",
    "patternId": "linked-list",
    "title": "Reorder List",
    "subtitle": "Middle + reverse + alternate merge",
    "kind": "problem",
    "leetcode": {
      "id": 143,
      "slug": "reorder-list",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft",
      "Google"
    ],
    "statement": "Reorder the list to be on the following form: L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …",
    "visualType": "linked-list",
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
        "label": "Brute force · array buffer node reconnecting",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "nodes = []",
          "curr = head",
          "while curr: nodes.push(curr); curr = curr.next",
          "l = 0, r = len(nodes) - 1",
          "while l < r: nodes[l].next = nodes[r]; l++; nodes[r].next = nodes[l]; r--"
        ],
        "starterCode": {
          "javascript": "function reorderList(head) {\n  // Write your solution here\n  \n}",
          "python": "def reorderList(head: Optional[ListNode]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function reorderList(head) {\n  if (!head || !head.next) return;\n  const nodes = [];\n  let curr = head;\n  while (curr) { nodes.push(curr); curr = curr.next; }\n  let l = 0, r = nodes.length - 1;\n  while (l < r) {\n    nodes[l].next = nodes[r];\n    l++;\n    if (l === r) break;\n    nodes[r].next = nodes[l];\n    r--;\n  }\n  nodes[l].next = null;\n}",
          "python": "def reorderList(head: Optional[ListNode]) -> None:\n    if not head or not head.next: return\n    nodes = []\n    curr = head\n    while curr: nodes.append(curr); curr = curr.next\n    l, r = 0, len(nodes) - 1\n    while l < r:\n        nodes[l].next = nodes[r]\n        l += 1\n        if l == r: break\n        nodes[r].next = nodes[l]\n        r -= 1\n    nodes[l].next = None"
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
              ]
            ],
            "expected": [
              1,
              5,
              2,
              4,
              3
            ],
            "description": "Odd length 5 nodes"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Store all node references in array: [Node 1, Node 2, Node 3, Node 4, Node 5].",
            "vars": [
              [
                "nodes",
                "[1, 2, 3, 4, 5]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Interleave edges from array ends: 1 → 5 → 2 → 4 → 3.",
            "customVisual": {
              "resultList": [
                1,
                5,
                2,
                4,
                3
              ]
            },
            "best": {
              "label": "Reordered: 1 → 5 → 2 → 4 → 3"
            },
            "vars": [
              [
                "reordered",
                "1 → 5 → 2 → 4 → 3"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · split, reverse 2nd half, zip merge O(1) space",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "// 1. Find middle",
          "slow = fast = head",
          "while fast and fast.next: slow = slow.next; fast = fast.next.next",
          "// 2. Reverse 2nd half",
          "prev = null; curr = slow.next; slow.next = null",
          "while curr: next = curr.next; curr.next = prev; prev = curr; curr = next",
          "// 3. Zip merge first and reversed second half",
          "p1 = head, p2 = prev",
          "while p2: t1 = p1.next, t2 = p2.next; p1.next = p2; p2.next = t1; p1 = t1; p2 = t2"
        ],
        "starterCode": {
          "javascript": "function reorderList(head) {\n  // Write your solution here\n  \n}",
          "python": "def reorderList(head: Optional[ListNode]) -> None:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function reorderList(head) {\n  if (!head || !head.next) return;\n  let slow = head, fast = head;\n  while (fast.next && fast.next.next) { slow = slow.next; fast = fast.next.next; }\n  let prev = null, curr = slow.next;\n  slow.next = null;\n  while (curr) { const n = curr.next; curr.next = prev; prev = curr; curr = n; }\n  let p1 = head, p2 = prev;\n  while (p2) { const t1 = p1.next, t2 = p2.next; p1.next = p2; p2.next = t1; p1 = t1; p2 = t2; }\n}",
          "python": "def reorderList(head: Optional[ListNode]) -> None:\n    if not head or not head.next: return\n    slow, fast = head, head\n    while fast.next and fast.next.next: slow = slow.next; fast = fast.next.next\n    prev, curr = None, slow.next\n    slow.next = None\n    while curr: n = curr.next; curr.next = prev; prev = curr; curr = n\n    p1, p2 = head, prev\n    while p2: t1, t2 = p1.next, p2.next; p1.next = p2; p2.next = t1; p1 = t1; p2 = t2"
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
              ]
            ],
            "expected": [
              1,
              5,
              2,
              4,
              3
            ],
            "description": "In-place reorder"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Find middle with slow and fast pointers. List splits into [1, 2, 3] and [4, 5].",
            "pointers": [
              {
                "name": "mid",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "firstHalf",
                "1 → 2 → 3"
              ],
              [
                "secondHalf",
                "4 → 5"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Reverse 2nd half [4, 5] in-place into [5, 4].",
            "linkedList": {
              "curr": 4,
              "prev": 3,
              "flippedArrows": [
                3,
                4
              ]
            },
            "vars": [
              [
                "reversed2ndHalf",
                "5 → 4"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Zip merge both halves: 1 → 5 → 2 → 4 → 3.",
            "customVisual": {
              "resultList": [
                1,
                5,
                2,
                4,
                3
              ]
            },
            "best": {
              "label": "Reordered in O(1) Space: 1 → 5 → 2 → 4 → 3"
            },
            "vars": [
              [
                "result",
                "1 → 5 → 2 → 4 → 3"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "swap-nodes-in-pairs",
    "patternId": "linked-list",
    "title": "Swap Nodes in Pairs",
    "subtitle": "Three arrows per pair · dummy head",
    "kind": "problem",
    "leetcode": {
      "id": 24,
      "slug": "swap-nodes-in-pairs",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg",
      "Meta"
    ],
    "statement": "Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)",
    "visualType": "linked-list",
    "initialInput": [
      1,
      2,
      3,
      4
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Shortcut · swap node values",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "curr = head",
          "while curr and curr.next:",
          "    swap(curr.val, curr.next.val)",
          "    curr = curr.next.next",
          "return head"
        ],
        "starterCode": {
          "javascript": "function swapPairs(head) {\n  // Write your solution here\n  \n}",
          "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function swapPairs(head) {\n  let curr = head;\n  while (curr && curr.next) {\n    const temp = curr.val;\n    curr.val = curr.next.val;\n    curr.next.val = temp;\n    curr = curr.next.next;\n  }\n  return head;\n}",
          "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    curr = head\n    while curr and curr.next:\n        curr.val, curr.next.val = curr.next.val, curr.val\n        curr = curr.next.next\n    return head"
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
              2,
              1,
              4,
              3
            ],
            "description": "4 nodes swapped in pairs"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Initial linked list: 1 → 2 → 3 → 4 → Ø. cur points to head (node 1).",
            "pointers": [
              {
                "name": "cur",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "cur.val",
                1
              ],
              [
                "next.val",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Values traded: cells [0] and [1] physically swap! The arrows never changed — only the cargo moved.",
            "highlights": [
              0,
              1
            ],
            "customVisual": {
              "swap": [
                0,
                1
              ]
            },
            "pointers": [
              {
                "name": "cur",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "pairSwapped",
                "(1, 2) → (2, 1)"
              ],
              [
                "list",
                "2 → 1 → 3 → 4"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Advance cur to pair 2: node 3 at index 2.",
            "pointers": [
              {
                "name": "cur",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "cur.val",
                3
              ],
              [
                "next.val",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Values traded: cells [2] and [3] physically swap! (3, 4) becomes (4, 3).",
            "highlights": [
              2,
              3
            ],
            "customVisual": {
              "swap": [
                2,
                3
              ]
            },
            "pointers": [
              {
                "name": "cur",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "pairSwapped",
                "(3, 4) → (4, 3)"
              ],
              [
                "list",
                "2 → 1 → 4 → 3"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "All pairs processed! Final swapped list: 2 → 1 → 4 → 3 → Ø.",
            "customVisual": {
              "resultList": [
                2,
                1,
                4,
                3
              ]
            },
            "best": {
              "label": "Swapped: 2 → 1 → 4 → 3"
            },
            "vars": [
              [
                "result",
                "2 → 1 → 4 → 3"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · dummy head & pointer rewiring",
        "complexity": {
          "time": "O(n)",
          "space": "O(1)"
        },
        "pseudocode": [
          "dummy = ListNode(0, head)",
          "prev = dummy",
          "while prev.next and prev.next.next:",
          "    a = prev.next; b = a.next",
          "    a.next = b.next; b.next = a; prev.next = b",
          "    prev = a",
          "return dummy.next"
        ],
        "starterCode": {
          "javascript": "function swapPairs(head) {\n  // Write your solution here\n  \n}",
          "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function swapPairs(head) {\n  const dummy = { val: 0, next: head };\n  let prev = dummy;\n  while (prev.next && prev.next.next) {\n    const a = prev.next;\n    const b = a.next;\n    a.next = b.next;\n    b.next = a;\n    prev.next = b;\n    prev = a;\n  }\n  return dummy.next;\n}",
          "python": "def swapPairs(head: Optional[ListNode]) -> Optional[ListNode]:\n    dummy = ListNode(0, head)\n    prev = dummy\n    while prev.next and prev.next.next:\n        a = prev.next\n        b = a.next\n        a.next = b.next\n        b.next = a\n        prev.next = b\n        prev = a\n    return dummy.next"
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
              2,
              1,
              4,
              3
            ],
            "description": "4 nodes pointer swap"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Create dummy head (prev). Identify first pair: a = Node 1 (idx 0), b = Node 2 (idx 1).",
            "pointers": [
              {
                "name": "a",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "b",
                "index": 1,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "a",
                1
              ],
              [
                "b",
                2
              ],
              [
                "prev",
                "dummy"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Surgery: rewire 3 arrows: a.next = 3, b.next = 1, prev.next = 2. Pair 1 reversed to 2 → 1!",
            "linkedList": {
              "curr": 1,
              "prev": 0,
              "flippedArrows": [
                0
              ]
            },
            "pointers": [
              {
                "name": "newHead",
                "index": 1,
                "color": "green"
              },
              {
                "name": "prev = a",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "pair1Rewired",
                "2 → 1 → 3 → 4"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Advance to pair 2: a = Node 3 (idx 2), b = Node 4 (idx 3).",
            "pointers": [
              {
                "name": "a",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "b",
                "index": 3,
                "color": "cyan"
              }
            ],
            "vars": [
              [
                "a",
                3
              ],
              [
                "b",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Rewire pair 2: 3.next = null, 4.next = 3, 1.next = 4. Final list: 2 → 1 → 4 → 3.",
            "customVisual": {
              "resultList": [
                2,
                1,
                4,
                3
              ]
            },
            "best": {
              "label": "In-Place Rewired: 2 → 1 → 4 → 3"
            },
            "vars": [
              [
                "result",
                "2 → 1 → 4 → 3"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "lru-cache",
    "patternId": "linked-list",
    "title": "LRU Cache",
    "subtitle": "Hash map + doubly linked list · O(1) get / put",
    "kind": "problem",
    "leetcode": {
      "id": 146,
      "slug": "lru-cache",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Meta",
      "Apple",
      "Uber"
    ],
    "statement": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache with get and put in O(1) time complexity.",
    "visualType": "linked-list",
    "initialInput": [
      1,
      2
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · array with linear timestamp search",
        "complexity": {
          "time": "O(n) per operation",
          "space": "O(capacity)"
        },
        "pseudocode": [
          "cache = []  // stores { key, value, lastUsed }",
          "get(key): scan array for key, update lastUsed, return val",
          "put(key, val): if exists update; if full find min(lastUsed) and evict, append new"
        ],
        "starterCode": {
          "javascript": "class LRUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    this.items = [];\n  }\n  get(key) { /* Write solution */ }\n  put(key, value) { /* Write solution */ }\n}",
          "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.items = []\n    def get(self, key: int) -> int:\n        pass\n    def put(self, key: int, value: int) -> None:\n        pass"
        },
        "solutionCode": {
          "javascript": "class LRUCache {\n  constructor(capacity) {\n    this.capacity = capacity;\n    this.items = [];\n  }\n  get(key) {\n    const item = this.items.find(x => x.key === key);\n    if (!item) return -1;\n    item.time = Date.now();\n    return item.val;\n  }\n  put(key, val) {\n    const item = this.items.find(x => x.key === key);\n    if (item) { item.val = val; item.time = Date.now(); return; }\n    if (this.items.length >= this.capacity) {\n      this.items.sort((a, b) => a.time - b.time);\n      this.items.shift();\n    }\n    this.items.push({ key, val, time: Date.now() });\n  }\n}",
          "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.items = []\n        self.time = 0\n    def get(self, key: int) -> int:\n        for item in self.items:\n            if item['key'] == key:\n                self.time += 1\n                item['time'] = self.time\n                return item['val']\n        return -1\n    def put(self, key: int, value: int) -> None:\n        self.time += 1\n        for item in self.items:\n            if item['key'] == key:\n                item['val'] = value\n                item['time'] = self.time\n                return\n        if len(self.items) >= self.cap:\n            lru_idx = min(range(len(self.items)), key=lambda i: self.items[i]['time'])\n            self.items.pop(lru_idx)\n        self.items.append({'key': key, 'val': value, 'time': self.time})"
        },
        "testCases": [
          {
            "input": [
              2,
              [
                [
                  "put",
                  1,
                  1
                ],
                [
                  "put",
                  2,
                  2
                ],
                [
                  "get",
                  1
                ],
                [
                  "put",
                  3,
                  3
                ],
                [
                  "get",
                  2
                ]
              ]
            ],
            "expected": [
              null,
              null,
              1,
              null,
              -1
            ],
            "description": "LRU eviction test"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "put(1, 1): Insert {key: 1, val: 1, t: 1} into slot 0. Cache capacity is 1 / 2.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "PUT(1, 1)",
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 1,
                    "status": "mru"
                  }
                ]
              }
            },
            "vars": [
              [
                "op",
                "put(1, 1)"
              ],
              [
                "size",
                "1 / 2"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "put(2, 2): Insert {key: 2, val: 2, t: 2} into slot 1. Cache capacity is now FULL (2 / 2).",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "PUT(2, 2) · FULL",
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 1,
                    "status": "lru"
                  },
                  {
                    "key": 2,
                    "val": 2,
                    "timestamp": 2,
                    "status": "mru"
                  }
                ]
              }
            },
            "vars": [
              [
                "op",
                "put(2, 2)"
              ],
              [
                "MRU",
                "key 2"
              ],
              [
                "LRU",
                "key 1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "get(1): Linear scan checking slot 0... Match found! Timestamp refreshed to t=3. Key 1 is now MRU, Key 2 becomes LRU.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "GET(1) → 1 (HIT)",
                "scanIndex": 0,
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 3,
                    "status": "mru"
                  },
                  {
                    "key": 2,
                    "val": 2,
                    "timestamp": 2,
                    "status": "lru"
                  }
                ]
              }
            },
            "vars": [
              [
                "accessed",
                "key 1"
              ],
              [
                "return",
                1
              ],
              [
                "MRU",
                "key 1"
              ],
              [
                "LRU",
                "key 2"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "put(3, 3): Capacity 2 full! Linear scan finds oldest timestamp: slot 1 (key 2 with t=2) is the LRU item.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "PUT(3, 3) · SCANNING FOR LRU",
                "scanIndex": 1,
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 3,
                    "status": "mru"
                  },
                  {
                    "key": 2,
                    "val": 2,
                    "timestamp": 2,
                    "status": "lru"
                  }
                ]
              }
            },
            "vars": [
              [
                "oldestTime",
                "t=2 (key 2)"
              ],
              [
                "action",
                "evict key 2"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "EVICTION: Key 2 is evicted from cache to make room. Slot 1 receives new item {key: 3, val: 3, t: 4}.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "EVICT KEY 2 → INSERT KEY 3",
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 3,
                    "status": "lru"
                  },
                  {
                    "key": 3,
                    "val": 3,
                    "timestamp": 4,
                    "status": "mru"
                  }
                ]
              }
            },
            "best": {
              "label": "Key 2 Evicted (LRU) → Key 3 Inserted"
            },
            "vars": [
              [
                "evicted",
                "key 2"
              ],
              [
                "cache",
                "[{1:1, t:3}, {3:3, t:4}]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "get(2): Linear scan checks slot 0 (key 1) and slot 1 (key 3). Key 2 is NOT present in cache (was evicted) → Returns -1.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "GET(2) → -1 (MISS / EVICTED)",
                "scanIndex": 1,
                "entries": [
                  {
                    "key": 1,
                    "val": 1,
                    "timestamp": 3,
                    "status": "lru"
                  },
                  {
                    "key": 3,
                    "val": 3,
                    "timestamp": 4,
                    "status": "mru"
                  }
                ]
              }
            },
            "best": {
              "label": "get(2) = -1 (Not in cache)"
            },
            "vars": [
              [
                "get(2)",
                -1
              ],
              [
                "cost",
                "O(n) linear scan per operation"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · HashMap + Doubly Linked List O(1) all ops",
        "complexity": {
          "time": "O(1) all ops",
          "space": "O(capacity)"
        },
        "pseudocode": [
          "HashMap: key -> Node(key, val)",
          "DoublyLinkedList: dummy HEAD <-> ... <-> dummy TAIL",
          "get(key): node = map[key]; moveToHead(node); return node.val",
          "put(key, val): if key exists update & moveToHead; else addNode to head; if over capacity: removeNode(tail.prev), delete map[lru.key]"
        ],
        "starterCode": {
          "javascript": "class LRUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    // Implement HashMap + Doubly LinkedList\n  }\n  get(key) {}\n  put(key, value) {}\n}",
          "python": "class LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n    def get(self, key: int) -> int:\n        pass\n    def put(self, key: int, value: int) -> None:\n        pass"
        },
        "solutionCode": {
          "javascript": "class Node { constructor(k=0, v=0) { this.k = k; this.v = v; this.prev = null; this.next = null; } }\nclass LRUCache {\n  constructor(capacity) {\n    this.cap = capacity;\n    this.map = new Map();\n    this.head = new Node();\n    this.tail = new Node();\n    this.head.next = this.tail;\n    this.tail.prev = this.head;\n  }\n  _remove(node) { node.prev.next = node.next; node.next.prev = node.prev; }\n  _add(node) { node.next = this.head.next; node.prev = this.head; this.head.next.prev = node; this.head.next = node; }\n  get(key) {\n    if (!this.map.has(key)) return -1;\n    const node = this.map.get(key);\n    this._remove(node); this._add(node);\n    return node.v;\n  }\n  put(key, value) {\n    if (this.map.has(key)) this._remove(this.map.get(key));\n    const node = new Node(key, value);\n    this._add(node); this.map.set(key, node);\n    if (this.map.size > this.cap) {\n      const lru = this.tail.prev;\n      this._remove(lru); this.map.delete(lru.k);\n    }\n  }\n}",
          "python": "class Node:\n    def __init__(self, k=0, v=0):\n        self.k, self.v = k, v\n        self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.map = {}\n        self.head, self.tail = Node(), Node()\n        self.head.next, self.tail.prev = self.tail, self.head\n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n    def _add(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n    def get(self, key: int) -> int:\n        if key not in self.map: return -1\n        node = self.map[key]\n        self._remove(node); self._add(node)\n        return node.v\n    def put(self, key: int, value: int) -> None:\n        if key in self.map: self._remove(self.map[key])\n        node = Node(key, value)\n        self._add(node); self.map[key] = node\n        if len(self.map) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru); del self.map[lru.k]"
        },
        "testCases": [
          {
            "input": [
              2,
              [
                [
                  "put",
                  1,
                  1
                ],
                [
                  "put",
                  2,
                  2
                ],
                [
                  "get",
                  1
                ],
                [
                  "put",
                  3,
                  3
                ],
                [
                  "get",
                  2
                ]
              ]
            ],
            "expected": [
              null,
              null,
              1,
              null,
              -1
            ],
            "description": "O(1) HashMap + DoublyLinkedList"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "put(1, 1), put(2, 2): Insert nodes right after dummy HEAD. DLL: HEAD ⇄ [2:2] ⇄ [1:1] ⇄ TAIL.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "PUT(1,1), PUT(2,2) · O(1)",
                "hashMap": {
                  "1": "0x7F10 (Node 1)",
                  "2": "0x7F20 (Node 2)"
                },
                "doublyList": [
                  {
                    "key": "key 2",
                    "val": "2"
                  },
                  {
                    "key": "key 1",
                    "val": "1"
                  }
                ]
              }
            },
            "vars": [
              [
                "map",
                "{1: Node, 2: Node}"
              ],
              [
                "MRU",
                "key 2"
              ],
              [
                "LRU",
                "key 1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "get(1): O(1) hash map lookup finds Node(1, 1). Splice node from middle and move to HEAD. DLL: HEAD ⇄ [1:1] ⇄ [2:2] ⇄ TAIL.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "GET(1) → 1 · SPLICE TO HEAD O(1)",
                "hashMap": {
                  "1": "0x7F10 (Node 1)",
                  "2": "0x7F20 (Node 2)"
                },
                "doublyList": [
                  {
                    "key": "key 1",
                    "val": "1"
                  },
                  {
                    "key": "key 2",
                    "val": "2"
                  }
                ]
              }
            },
            "vars": [
              [
                "return",
                1
              ],
              [
                "MRU",
                "key 1"
              ],
              [
                "LRU",
                "key 2"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "put(3, 3): Capacity 2 exceeded. Evict LRU node (tail.prev = Node 2) in O(1). Delete map[2]. Insert Node(3,3) at HEAD.",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "PUT(3, 3) · EVICT TAIL.PREV O(1)",
                "hashMap": {
                  "1": "0x7F10 (Node 1)",
                  "3": "0x7F30 (Node 3)"
                },
                "doublyList": [
                  {
                    "key": "key 3",
                    "val": "3"
                  },
                  {
                    "key": "key 1",
                    "val": "1"
                  }
                ]
              }
            },
            "vars": [
              [
                "evicted",
                "key 2"
              ],
              [
                "DLL",
                "HEAD ⇄ [3:3] ⇄ [1:1] ⇄ TAIL"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "get(2): O(1) lookup in Hash Map — key 2 is not found in map. Returns -1 instantly in O(1) time without any scanning!",
            "customVisual": {
              "lruCache": {
                "capacity": 2,
                "opLabel": "GET(2) → -1 · O(1) INSTANT MISS",
                "hashMap": {
                  "1": "0x7F10 (Node 1)",
                  "3": "0x7F30 (Node 3)"
                },
                "doublyList": [
                  {
                    "key": "key 3",
                    "val": "3"
                  },
                  {
                    "key": "key 1",
                    "val": "1"
                  }
                ]
              }
            },
            "best": {
              "label": "All operations O(1) via HashMap + Doubly Linked List"
            },
            "vars": [
              [
                "get(2)",
                -1
              ],
              [
                "timeComplexity",
                "O(1) all ops"
              ]
            ]
          }
        ]
      }
    ]
  }
];
