import { Problem } from '../../types';

export const dfsProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "dfs",
    "title": "Introduction",
    "subtitle": "Go deep, then backtrack · pre/in/post order",
    "kind": "intro",
    "statement": "Depth-First Search (DFS) explores as far as possible along each branch before backtracking. Operates using an explicit or implicit recursion call stack with three classic traversal orders: Pre-order (Node, Left, Right), In-order (Left, Node, Right), and Post-order (Left, Right, Node).",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2,
        "left": {
          "val": 4
        },
        "right": {
          "val": 5
        }
      },
      "right": {
        "val": 3,
        "right": {
          "val": 6
        }
      }
    },
    "approaches": [
      {
        "id": "traversal",
        "label": "DFS Traversal Orders",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "dfs(node):",
          "    if node is null: return",
          "    visit(node)           // PRE-order",
          "    dfs(node.left)        // IN-order sits between the two",
          "    // (return / backtrack)",
          "    dfs(node.right)       // POST-order acts here, after both"
        ],
        "starterCode": {
          "javascript": "function dfsIntro(root) {\n  const visited = [];\n  function dfs(node) {\n    if (!node) return;\n    visited.push(node.val); // PRE-order\n    dfs(node.left);         // IN-order sits between\n    // backtrack\n    dfs(node.right);        // POST-order acts after\n  }\n  dfs(root);\n  return visited;\n}",
          "python": "def dfsIntro(root):\n    visited = []\n    def dfs(node):\n        if not node:\n            return\n        visited.append(node.val) # PRE-order\n        dfs(node.left)           # IN-order sits between\n        # backtrack\n        dfs(node.right)          # POST-order acts after\n    dfs(root)\n    return visited"
        },
        "solutionCode": {
          "javascript": "function dfsIntro(root) {\n  const visited = [];\n  function dfs(node) {\n    if (!node) return;\n    visited.push(node.val);\n    dfs(node.left);\n    dfs(node.right);\n  }\n  dfs(root);\n  return visited;\n}",
          "python": "def dfsIntro(root):\n    visited = []\n    def dfs(node):\n        if not node:\n            return\n        visited.append(node.val)\n        dfs(node.left)\n        dfs(node.right)\n    dfs(root)\n    return visited"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2,
                  "left": {
                    "val": 4
                  },
                  "right": {
                    "val": 5
                  }
                },
                "right": {
                  "val": 3,
                  "right": {
                    "val": 6
                  }
                }
              }
            ],
            "expected": [
              1,
              2,
              4,
              5,
              3,
              6
            ],
            "description": "Pre-order tree traversal: Root -> Left -> Right"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start DFS at root node 1. We push frame dfs(1) onto the Call Stack to initiate traversal.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "orderBadges": {
                "1": 1
              },
              "activeEdges": [],
              "callStack": [
                "dfs(1)"
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "[PRE-ORDER]: Visit node 1 immediately before descending into any of its subtrees.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "orderBadges": {
                "1": 1
              },
              "activeEdges": [],
              "callStack": [
                "dfs(1)"
              ]
            },
            "vars": [
              [
                "visited",
                1
              ],
              [
                "traversal",
                "pre-order"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse left with dfs(node.left) -> call dfs(2). Push dfs(2) onto the stack.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "orderBadges": {
                "1": 1,
                "2": 2
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)"
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "[PRE-ORDER]: Visit node 2 immediately upon entry. Next, we will explore its left subtree.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "orderBadges": {
                "1": 1,
                "2": 2
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)"
              ]
            },
            "vars": [
              [
                "visited",
                2
              ],
              [
                "traversal",
                "pre-order"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Descend deeper to node 4. Push frame dfs(4) onto the stack. Active path is 1 -> 2 -> 4.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "4": 3
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)",
                "dfs(4)"
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both children of 4 are done, so dfs(4) returns and its frame pops off the stack. This pop IS the backtrack step, we climb back up to keep exploring elsewhere.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "4": 3
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)",
                "dfs(4)"
              ]
            },
            "vars": [
              [
                "returning from",
                4
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Back in dfs(2). Left subtree is complete. Line 6: recurse right with dfs(node.right) -> call dfs(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "4": 3,
                "5": 4
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)",
                "dfs(5)"
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both children of 5 are null, so dfs(5) returns and its frame pops off the stack. Backtrack to node 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "4": 3,
                "5": 4
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(2)"
              ]
            },
            "vars": [
              [
                "returning from",
                5
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both children of 2 (4 and 5) are finished. dfs(2) returns and pops off the stack. Backtrack to root 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "4": 3,
                "5": 4
              },
              "activeEdges": [],
              "callStack": [
                "dfs(1)"
              ]
            },
            "vars": [
              [
                "returning from",
                2
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At root 1, left child is complete. Line 6: recurse right with dfs(3). Push dfs(3) and explore 3 and 6.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "3": 5,
                "4": 3,
                "5": 4,
                "6": 6
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  6
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(3)",
                "dfs(6)"
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both children of 3 are done, so dfs(3) returns and its frame pops off the stack. This pop IS the backtrack step, we climb back up to keep exploring elsewhere.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "3": 5,
                "4": 3,
                "5": 4,
                "6": 6
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "dfs(1)",
                "dfs(3)"
              ]
            },
            "vars": [
              [
                "returning from",
                3
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Root 1 finishes both subtrees. dfs(1) returns and pops off. Call stack is now empty.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "3": 5,
                "4": 3,
                "5": 4,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "traversal",
                "complete"
              ],
              [
                "stack height",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "PRE-ORDER Summary: (Root -> Left -> Right). The sequence is 1, 2, 4, 5, 3, 6. Ideal for tree serialization or copying.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 1,
                "2": 2,
                "3": 5,
                "4": 3,
                "5": 4,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "order",
                "node -> left -> right"
              ],
              [
                "pre-order",
                "1, 2, 4, 5, 3, 6"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Now let's examine IN-ORDER traversal timing: left subtree -> current node -> right subtree.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 4,
                "2": 2,
                "3": 5,
                "4": 1,
                "5": 3,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "order",
                "left -> node -> right"
              ],
              [
                "step",
                "traverse left first"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In IN-ORDER, node 4 is visited first (deepest left), then parent 2, then right child 5.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 4,
                "2": 2,
                "3": 5,
                "4": 1,
                "5": 3,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "order",
                "left -> node -> right"
              ],
              [
                "left-subtree",
                "4 -> 2 -> 5"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Now IN-ORDER: recurse left, act on the node IN the middle, then recurse right. The node is handled only after its entire left subtree. The sequence becomes 4, 2, 5, 1, 3, 6.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 4,
                "2": 2,
                "3": 5,
                "4": 1,
                "5": 3,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "order",
                "left -> node -> right"
              ],
              [
                "in-order",
                "4, 2, 5, 1, 3, 6"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "IN-ORDER Property: When applied to a Binary Search Tree (BST), IN-ORDER traversal yields keys in strictly sorted ascending order.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 4,
                "2": 2,
                "3": 5,
                "4": 1,
                "5": 3,
                "6": 6
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "property",
                "sorted for BST"
              ],
              [
                "use case",
                "validate / search BST"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Now POST-ORDER: Recurse left, recurse right, and act on the node LAST, after both subtrees are done.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 6,
                "2": 3,
                "3": 5,
                "4": 1,
                "5": 2,
                "6": 4
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "order",
                "left -> right -> node"
              ],
              [
                "post-order",
                "4, 5, 2, 6, 3, 1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Post-order is the workhorse for problems where a parent needs its children's ANSWERS first, sizes, sums, heights. The values bubble UP from the leaves to the root.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 6,
                "2": 3,
                "3": 5,
                "4": 1,
                "5": 2,
                "6": 4
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "use case",
                "combine child results"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "POST-ORDER Summary: Bottom-up aggregation sequence: 4, 5, 2, 6, 3, 1. Used for subtree depth, diameter, tilt, and deletion.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5,
                6
              ],
              "orderBadges": {
                "1": 6,
                "2": 3,
                "3": 5,
                "4": 1,
                "5": 2,
                "6": 4
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ]
            },
            "vars": [
              [
                "post-order",
                "4, 5, 2, 6, 3, 1"
              ],
              [
                "complexity",
                "O(N) time · O(H) space"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "fundamentals",
    "patternId": "dfs",
    "title": "Fundamentals",
    "subtitle": "The recursion template: base case → recurse → combine",
    "kind": "concept",
    "statement": "Every tree recursion follows a clean 3-part blueprint: 1. Base Case (handle null / leaf), 2. Recursive Calls (descend into left and right subtrees), 3. Combine / Return (merge subtree answers to form the parent result).",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2,
        "left": {
          "val": 4
        },
        "right": {
          "val": 5
        }
      },
      "right": {
        "val": 3
      }
    },
    "approaches": [
      {
        "id": "template",
        "label": "The Recursion Blueprint",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "count(node):",
          "    push frame",
          "    if node is null: return 0    // 1. base case",
          "    L = count(node.left)         // 2. recurse",
          "    R = count(node.right)        // 2. recurse",
          "    return 1 + L + R             // 3. combine"
        ],
        "starterCode": {
          "javascript": "function countNodes(root) {\n  if (!root) return 0;         // 1. base case\n  const L = countNodes(root.left);  // 2. recurse\n  const R = countNodes(root.right); // 2. recurse\n  return 1 + L + R;            // 3. combine\n}",
          "python": "def countNodes(root):\n    if not root:\n        return 0         # 1. base case\n    L = countNodes(root.left)  # 2. recurse\n    R = countNodes(root.right) # 2. recurse\n    return 1 + L + R          # 3. combine"
        },
        "solutionCode": {
          "javascript": "function countNodes(root) {\n  if (!root) return 0;\n  const L = countNodes(root.left);\n  const R = countNodes(root.right);\n  return 1 + L + R;\n}",
          "python": "def countNodes(root):\n    if not root:\n        return 0\n    L = countNodes(root.left)\n    R = countNodes(root.right)\n    return 1 + L + R"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2,
                  "left": {
                    "val": 4
                  },
                  "right": {
                    "val": 5
                  }
                },
                "right": {
                  "val": 3
                }
              }
            ],
            "expected": 5,
            "description": "Total nodes = 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start count(1) at root node 1 to count the total nodes in the binary tree.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "returnedValues": {},
              "activeEdges": [],
              "callStack": [
                "count(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(1)"
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame count(1). PART 1: Check base case (node 1 is not null).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "returnedValues": {},
              "activeEdges": [],
              "callStack": [
                "count(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(1)"
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: PART 2: RECURSE LEFT. Call L = count(1.left) -> call count(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(2)"
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame count(2). Check base case (node 2 is not null).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(2)"
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse left from 2. Call L = count(2.left) -> call count(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(4)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame count(4). Check base case: node 4 is not null.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(4)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Count 4's left child (null) -> returns L = 0. Count 4's right child (null) -> returns R = 0.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: PART 3: COMBINE. For node 4, return 1 + L + R = 1 + 0 + 0 = 1.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "count(4) returns 1 and pops off stack. Node 2 receives left subtree count L = 1.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L (left count)",
                1
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Call count(5); push its frame. PART 2: RECURSE: before we can count this subtree we must count each child's subtree first. We dive left.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(5)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Node 5 is not null. Recurse into both null children: 5.left -> 0, 5.right -> 0.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: COMBINE at node 5. return 1 + 0 + 0 = 1. Value bubbles up to parent 2.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)",
                "count(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "count(5) returns 1 and pops off stack. Node 2 receives right subtree count R = 1.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L",
                1
              ],
              [
                "R",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: COMBINE at node 2. return 1 + L + R = 1 + 1 + 1 = 3 nodes in subtree 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "count(1)",
                "count(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "returning",
                3
              ],
              [
                "subtree size",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "count(2) returns 3 and pops off stack. Root 1 receives left subtree count L = 3.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "count(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L (left count)",
                3
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse right from root 1. Call R = count(1.right) -> call count(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "count(1)",
                "count(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "call",
                "count(3)"
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame count(3). Node 3 is a leaf; both 3.left and 3.right return 0.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": 3,
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "count(1)",
                "count(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: COMBINE at node 3. return 1 + 0 + 0 = 1 node in subtree 3.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "count(1)",
                "count(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "count(3) returns 1 and pops off stack. Root 1 receives right subtree count R = 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "count(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L",
                3
              ],
              [
                "R",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: COMBINE at root 1: return 1 + L + R = 1 + 3 + 1 = 5 total nodes!",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": 5,
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "count(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "total count",
                5
              ],
              [
                "result",
                "1 + 3 + 1 = 5"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "count(1) returns 5 and pops off stack. Call stack becomes empty.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": 5,
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "returned",
                5
              ],
              [
                "stack height",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Blueprint Recap: 1. Base Case (null returns 0) -> 2. Recurse (count subtrees) -> 3. Combine (1 + L + R).",
            "tree": {
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": 5,
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "blueprint",
                "base -> recurse -> combine"
              ],
              [
                "total nodes",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Complexity: Time O(N) visiting all 5 nodes once. Auxiliary Space O(H) for maximum call stack depth.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": 5,
                "2": 3,
                "3": 1,
                "4": 1,
                "5": 1
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "time",
                "O(N)"
              ],
              [
                "space",
                "O(H)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "return-values",
    "patternId": "dfs",
    "title": "Return Values",
    "subtitle": "Bubbling answers UP with post-order",
    "kind": "concept",
    "statement": "Post-order recursion operates from the bottom up. Leaf nodes calculate their base results first, which bubble up to parents to compute complex aggregate metrics like subtree sizes, sums, and depths.",
    "visualType": "tree",
    "initialInput": {
      "val": 5,
      "left": {
        "val": 3,
        "left": {
          "val": 2
        },
        "right": {
          "val": 4
        }
      },
      "right": {
        "val": 8,
        "right": {
          "val": 1
        }
      }
    },
    "approaches": [
      {
        "id": "bottom-up-sum",
        "label": "Bubbling Answers Up (Post-Order)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "sum(node):",
          "    push frame",
          "    if node is null: return 0           // base case",
          "    return node.val + sum(left) + sum(right)  // combine"
        ],
        "starterCode": {
          "javascript": "function sumNodes(root) {\n  if (!root) return 0;\n  return root.val + sumNodes(root.left) + sumNodes(root.right);\n}",
          "python": "def sumNodes(root):\n    if not root: return 0\n    return root.val + sumNodes(root.left) + sumNodes(root.right)"
        },
        "solutionCode": {
          "javascript": "function sumNodes(root) {\n  if (!root) return 0;\n  return root.val + sumNodes(root.left) + sumNodes(root.right);\n}",
          "python": "def sumNodes(root):\n    if not root: return 0\n    return root.val + sumNodes(root.left) + sumNodes(root.right)"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 5,
                "left": {
                  "val": 3,
                  "left": {
                    "val": 2
                  },
                  "right": {
                    "val": 4
                  }
                },
                "right": {
                  "val": 8,
                  "right": {
                    "val": 1
                  }
                }
              }
            ],
            "expected": 23,
            "description": "Total sum = 5 + 3 + 2 + 4 + 8 + 1 = 23"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Big idea: a child computes its own answer and RETURNS it; the parent COMBINES the children's returns into its own. We sum every value in the tree to see answers bubble UP from the leaves.",
            "tree": {
              "visitedNodes": [],
              "returnedValues": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "goal",
                "total of all node values"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Start sum(5) at root 5. We push sum(5) and begin descending into the left subtree.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [],
              "returnedValues": {},
              "activeEdges": [],
              "callStack": [
                "sum(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(5)"
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse left: call sum(3). Push frame sum(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(3)"
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse left: call sum(2). Push frame sum(2). Active path: 5 -> 3 -> 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                3
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  2
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)",
                "sum(2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(2)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Leaf 2 has null children (0 and 0). Return 2 + 0 + 0 = 2. Value bubbles up to 3.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                3,
                2
              ],
              "returnedValues": {
                "2": 2
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  2
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)",
                "sum(2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returning",
                2
              ],
              [
                "node",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum(2) returns 2 and pops off stack. Node 3 receives left sum = 2.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3,
                2
              ],
              "returnedValues": {
                "2": 2
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "left_sum",
                2
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In node 3: recurse right with sum(4). Push frame sum(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                3,
                2
              ],
              "returnedValues": {
                "2": 2
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)",
                "sum(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(4)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Leaf 4 returns 4 + 0 + 0 = 4. Value bubbles up to 3.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                3,
                2,
                4
              ],
              "returnedValues": {
                "2": 2,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)",
                "sum(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returning",
                4
              ],
              [
                "node",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum(4) returns 4 and pops off stack. Node 3 has left=2 and right=4.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3,
                2,
                4
              ],
              "returnedValues": {
                "2": 2,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "left_sum",
                2
              ],
              [
                "right_sum",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 3 combines: 3 + 2 + 4 = 9. Subtree 3 returns 9 up to root 5.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3,
                2,
                4
              ],
              "returnedValues": {
                "2": 2,
                "3": 9,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returning",
                9
              ],
              [
                "subtree_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum(3) returns 9 and pops off stack. Root 5 receives left sum = 9.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                3,
                2,
                4
              ],
              "returnedValues": {
                "2": 2,
                "3": 9,
                "4": 4
              },
              "activeEdges": [],
              "callStack": [
                "sum(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "left_sum",
                9
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "At root 5: recurse right with sum(8). Push frame sum(8).",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                2,
                4
              ],
              "returnedValues": {
                "2": 2,
                "3": 9,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(8)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(8)"
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Node 8 left child is null -> returns 0. Now recurse right to node 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8
              ],
              "returnedValues": {
                "2": 2,
                "3": 9,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  1
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(8)",
                "sum(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "call",
                "sum(1)"
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Leaf 1 returns 1 + 0 + 0 = 1. Value bubbles up to 8.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  1
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(8)",
                "sum(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 8 combines: 8 + 0 (left) + 1 (right) = 9. Returns 9 up to root 5.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "8": 9
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "sum(5)",
                "sum(8)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returning",
                9
              ],
              [
                "subtree_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum(8) returns 9 and pops off stack. Root 5 receives right sum = 9.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "sum(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "left_sum",
                9
              ],
              [
                "right_sum",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Root 5 combines: 5 + 9 + 9 = 23 total sum! Value bubbles up to the caller.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "5": 23,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "sum(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "total_sum",
                23
              ],
              [
                "result",
                "5 + 9 + 9 = 23"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "sum(5) returns 23 and pops off stack. Traversal complete.",
            "tree": {
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "5": 23,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returned",
                23
              ],
              [
                "stack height",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Post-Order Bubbling Pattern: Children return values up -> Parent combines them -> Result bubbles to root.",
            "tree": {
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "5": 23,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "pattern",
                "bottom-up post-order"
              ],
              [
                "total",
                23
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Time Complexity: O(N) visiting each node once. Space: O(H) call stack depth.",
            "tree": {
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "5": 23,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "time",
                "O(N)"
              ],
              [
                "space",
                "O(H)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Final Answer: Total sum of all nodes in tree = 23.",
            "tree": {
              "visitedNodes": [
                5,
                3,
                2,
                4,
                8,
                1
              ],
              "returnedValues": {
                "1": 1,
                "2": 2,
                "3": 9,
                "4": 4,
                "5": 23,
                "8": 9
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 1,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 2
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 1
                }
              ]
            },
            "best": {
              "label": "Total Sum = 23"
            },
            "vars": [
              [
                "sum",
                23
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "patternId": "dfs",
    "title": "Maximum Depth of Binary Tree",
    "subtitle": "Depth = 1 + max(left, right)",
    "kind": "problem",
    "leetcode": {
      "id": 104,
      "slug": "maximum-depth-of-binary-tree",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "LinkedIn",
      "Microsoft"
    ],
    "statement": "Given the root of a binary tree, return its maximum depth: the number of nodes along the longest path from the root down to the farthest leaf.",
    "visualType": "tree",
    "initialInput": {
      "val": 3,
      "left": {
        "val": 9
      },
      "right": {
        "val": 20,
        "left": {
          "val": 15
        },
        "right": {
          "val": 7
        }
      }
    },
    "approaches": [
      {
        "id": "recursive",
        "label": "Recursive DFS (post-order)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "depth(node):",
          "    push frame",
          "    if node is null: return 0     // base case",
          "    L = depth(node.left)",
          "    R = depth(node.right)",
          "    return 1 + max(L, R)          // combine"
        ],
        "starterCode": {
          "javascript": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}",
          "python": "def maxDepth(root):\n    if not root: return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))"
        },
        "solutionCode": {
          "javascript": "function maxDepth(root) {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}",
          "python": "def maxDepth(root):\n    if not root: return 0\n    return 1 + max(maxDepth(root.left), maxDepth(root.right))"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 3,
                "left": {
                  "val": 9
                },
                "right": {
                  "val": 20,
                  "left": {
                    "val": 15
                  },
                  "right": {
                    "val": 7
                  }
                }
              }
            ],
            "expected": 3,
            "description": "Max depth is 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start depth(3) at root 3. Push frame depth(3) to call stack.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [],
              "returnedValues": {},
              "activeEdges": [],
              "callStack": [
                "depth(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse left with depth(9). Push frame depth(9).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                3
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  3,
                  9
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(9)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                9
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Node 9 has null children. Both 9.left and 9.right return 0.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                3,
                9
              ],
              "returnedValues": {},
              "activeEdges": [
                [
                  3,
                  9
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(9)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: Combine at leaf 9: return 1 + max(0, 0) = 1.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                3,
                9
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [
                [
                  3,
                  9
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(9)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "depth(9) returns 1 and pops off stack. Root 3 receives left depth L = 1.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3,
                9
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [],
              "callStack": [
                "depth(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "L_depth",
                1
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "At root 3: Line 5: recurse right with depth(20). Push frame depth(20).",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                3,
                9
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                20
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In node 20: recurse left with depth(15). Push frame depth(15). Active path: 3 -> 20 -> 15.",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                3,
                9,
                20
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(15)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                15
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "depth(15): left child is null -> depth 0.",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                3,
                9,
                20
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(15)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "left of",
                15
              ],
              [
                "null ->",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "depth(15): right child is null -> depth 0.",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                3,
                9,
                20
              ],
              "returnedValues": {
                "9": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(15)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "right of",
                15
              ],
              [
                "null ->",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Combine at leaf 15: return 1 + max(0, 0) = 1.",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                3,
                9,
                20,
                15
              ],
              "returnedValues": {
                "9": 1,
                "15": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(15)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                15
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "depth(15) returns 1 and pops off stack. Node 20 now recurses right into depth(7).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                3,
                9,
                20,
                15
              ],
              "returnedValues": {
                "9": 1,
                "15": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  7
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(7)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                7
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Leaf 7 returns 1 + max(0, 0) = 1.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": 1,
                "9": 1,
                "15": 1
              },
              "activeEdges": [
                [
                  3,
                  20
                ],
                [
                  20,
                  7
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)",
                "depth(7)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "returning",
                1
              ],
              [
                "node",
                7
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Combine at node 20: return 1 + max(1, 1) = 2. Bubbles depth 2 up to root 3.",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [
                [
                  3,
                  20
                ]
              ],
              "callStack": [
                "depth(3)",
                "depth(20)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "returning",
                2
              ],
              [
                "subtree_depth",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "depth(20) returns 2 and pops off stack. Root 3 has left depth L=1, right depth R=2.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [],
              "callStack": [
                "depth(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "L_depth",
                1
              ],
              [
                "R_depth",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Combine at root 3: return 1 + max(1, 2) = 3. Max depth of tree is 3!",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "3": 3,
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [],
              "callStack": [
                "depth(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "maxDepth",
                3
              ],
              [
                "formula",
                "1 + max(1, 2) = 3"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "depth(3) returns 3 and pops off stack. Call stack is empty.",
            "tree": {
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "3": 3,
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "returned",
                3
              ],
              [
                "stack height",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Complexity: Time O(N) visiting every node once. Space O(H) recursion stack.",
            "tree": {
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "3": 3,
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "time",
                "O(N)"
              ],
              [
                "space",
                "O(H)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Final Answer: Maximum Depth = 3 (longest path 3 -> 20 -> 15 or 3 -> 20 -> 7).",
            "tree": {
              "visitedNodes": [
                3,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "3": 3,
                "7": 1,
                "9": 1,
                "15": 1,
                "20": 2
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 9
                },
                {
                  "from": 3,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "best": {
              "label": "Max Depth = 3"
            },
            "vars": [
              [
                "maxDepth",
                3
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "path-sum",
    "patternId": "dfs",
    "title": "Path Sum",
    "subtitle": "Root-to-leaf sum == target · carry the remainder down",
    "kind": "problem",
    "leetcode": {
      "id": 112,
      "slug": "path-sum",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "statement": "Given the root of a binary tree and a target sum, return true if there is a root-to-leaf path whose node values add up exactly to the target, and false otherwise.",
    "visualType": "tree",
    "initialInput": {
      "val": 5,
      "left": {
        "val": 4,
        "left": {
          "val": 11,
          "left": {
            "val": 7
          },
          "right": {
            "val": 2
          }
        }
      },
      "right": {
        "val": 8,
        "left": {
          "val": 13
        },
        "right": {
          "val": 4,
          "right": {
            "val": 1
          }
        }
      }
    },
    "approaches": [
      {
        "id": "recursive-carry-remaining",
        "label": "Recursive DFS (carry remaining down)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "hasPathSum(node, remaining):",
          "    remaining -= node.val",
          "    if leaf: return remaining == 0    // base case",
          "    if hasPathSum(node.left, remaining): return true",
          "    if hasPathSum(node.right, remaining): return true",
          "    return false                      // combine",
          "// answer = hasPathSum(root, target)"
        ],
        "starterCode": {
          "javascript": "function hasPathSum(root, targetSum) {\n  if (!root) return false;\n  const remaining = targetSum - root.val;\n  if (!root.left && !root.right) return remaining === 0;\n  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);\n}",
          "python": "def hasPathSum(root, targetSum):\n    if not root: return False\n    remaining = targetSum - root.val\n    if not root.left and not root.right:\n        return remaining == 0\n    return hasPathSum(root.left, remaining) or hasPathSum(root.right, remaining)"
        },
        "solutionCode": {
          "javascript": "function hasPathSum(root, targetSum) {\n  if (!root) return false;\n  const remaining = targetSum - root.val;\n  if (!root.left && !root.right) return remaining === 0;\n  return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);\n}",
          "python": "def hasPathSum(root, targetSum):\n    if not root: return False\n    remaining = targetSum - root.val\n    if not root.left and not root.right:\n        return remaining == 0\n    return hasPathSum(root.left, remaining) or hasPathSum(root.right, remaining)"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 5,
                "left": {
                  "val": 4,
                  "left": {
                    "val": 11,
                    "left": {
                      "val": 7
                    },
                    "right": {
                      "val": 2
                    }
                  }
                },
                "right": {
                  "val": 8,
                  "left": {
                    "val": 13
                  },
                  "right": {
                    "val": 4,
                    "right": {
                      "val": 1
                    }
                  }
                }
              },
              22
            ],
            "expected": true,
            "description": "Path 5->4->11->2 sums to 22"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Target sum = 22. Start hasPathSum at root 5 with remaining target 22.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [],
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [],
              "callStack": [
                "pathSum(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: 22 - 5 = 17 remaining. Node 5 is not a leaf.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [],
              "callStack": [
                "pathSum(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "carry remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 4 with remaining 17. Push frame pathSum(4, rem=17).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "remaining",
                13
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: 17 - 4 = 13 remaining. Node 4 is not a leaf.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "carry remaining",
                13
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 11 with remaining 13. Push frame pathSum(11, rem=13).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                11
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Line 2: 13 - 11 = 2 remaining. Node 11 is not a leaf.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                11
              ],
              [
                "carry remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "11 is not a leaf. Recurse LEFT into 7 carrying remaining 2.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 11"
              ],
              [
                "carry remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Descend to node 7. Remaining: 2 - 7 = -5. Leaf 7 fails: remaining != 0 -> return false.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "7": "rem=-5",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  7
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)",
                "pathSum(7, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "leaf_check",
                "7 (rem = -5)"
              ],
              [
                "is_valid",
                false
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Backtrack to 11. Line 5: Recurse RIGHT into leaf 2 carrying remaining 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "2": "rem=0",
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)",
                "pathSum(2, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "remaining",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: Leaf check at 2: 2 - 2 = 0 == 0 ✓! Root-to-leaf path found! Return true.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "rem=0",
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)",
                "pathSum(2, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "valid_leaf",
                true
              ],
              [
                "path",
                "5 -> 4 -> 11 -> 2 = 22"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "True bubbles up from 2 through node 11.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "11": "✓"
              },
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)",
                "pathSum(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "return",
                true
              ],
              [
                "stack height",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "True bubbles up from 11 through node 4.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "4": "✓"
              },
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "pathSum(5, rem=22)",
                "pathSum(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "return",
                true
              ],
              [
                "stack height",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "True bubbles up from 4 to root 5.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "5": "✓"
              },
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [],
              "callStack": [
                "pathSum(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "return",
                true
              ],
              [
                "stack height",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Root 5 returns true. Call stack becomes empty.",
            "tree": {
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "returned",
                true
              ],
              [
                "stack height",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Early Exit Efficiency: As soon as a valid root-to-leaf path is found (5->4->11->2), we don't need to explore subtree 8!",
            "tree": {
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "pruning",
                "subtree 8 skipped"
              ],
              [
                "time",
                "O(N)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Final Answer: true. Valid path: 5 -> 4 -> 11 -> 2 = 22.",
            "tree": {
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "5": "✓"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "best": {
              "label": "Path Sum 22 Found: 5->4->11->2"
            },
            "vars": [
              [
                "hasPathSum",
                true
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "passing-values-down-and-up",
    "patternId": "dfs",
    "title": "Passing Values Down and Up",
    "subtitle": "Parameters go down, returns come up",
    "kind": "concept",
    "statement": "Combine top-down parameters (carrying parent state, running sums, or range bounds) with bottom-up returns (bubbling subtree heights, validity booleans, or counts).",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2,
        "left": {
          "val": 4
        }
      },
      "right": {
        "val": 3,
        "right": {
          "val": 5
        }
      }
    },
    "approaches": [
      {
        "id": "dual-flow",
        "label": "Dual-Directional Flow",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "walk(node, depth):                    // depth PASSED DOWN",
          "    push frame",
          "    if node is null: return depth-1   // base case",
          "    return max(depth,                 // RETURN max",
          "               walk(node.left, depth+1),",
          "               walk(node.right, depth+1))"
        ],
        "starterCode": {
          "javascript": "function walk(node, depth = 1) {\n  if (!node) return depth - 1;\n  return Math.max(depth, walk(node.left, depth + 1), walk(node.right, depth + 1));\n}",
          "python": "def walk(node, depth=1):\n    if not node: return depth - 1\n    return max(depth, walk(node.left, depth + 1), walk(node.right, depth + 1))"
        },
        "solutionCode": {
          "javascript": "function walk(node, depth = 1) {\n  if (!node) return depth - 1;\n  return Math.max(depth, walk(node.left, depth + 1), walk(node.right, depth + 1));\n}",
          "python": "def walk(node, depth=1):\n    if not node: return depth - 1\n    return max(depth, walk(node.left, depth + 1), walk(node.right, depth + 1))"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2,
                  "left": {
                    "val": 4
                  }
                },
                "right": {
                  "val": 3,
                  "right": {
                    "val": 5
                  }
                }
              }
            ],
            "expected": 3,
            "description": "Max depth = 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Call walk(root, depth=1). Parameters flow DOWN as arguments: each frame receives its depth.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "paramBadges": {
                "1": "d=1"
              },
              "activeEdges": [],
              "callStack": [
                "walk(1, d=1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                1
              ],
              [
                "flow",
                "DOWN"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame walk(1, d=1). Node 1 is not null, so base case does not trigger.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "d=1"
              },
              "activeEdges": [],
              "callStack": [
                "walk(1, d=1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "depth",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse into left child of 1, passing depth + 1 = 2 down. Call walk(2, d=2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                2
              ],
              [
                "flow",
                "DOWN (left)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame walk(2, d=2). Node 2 is not null.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "depth",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse into left child of 2, passing depth + 1 = 3 down. Call walk(4, d=3).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2",
                "4": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)",
                "walk(4, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                3
              ],
              [
                "flow",
                "DOWN (left)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Push frame walk(4, d=3). Node 4 is a leaf at depth 3.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2",
                "4": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)",
                "walk(4, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "depth",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Left child of 4 is null at depth 4. Base case: an empty subtree has max depth 3 (depth - 1). It returns 3.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2",
                "4": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)",
                "walk(4, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                4
              ],
              [
                "null returns",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right child of 4 is null at depth 4. Base case: an empty subtree has max depth 3. It returns 3.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=2",
                "4": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)",
                "walk(4, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                4
              ],
              [
                "null returns",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 4 computes max(depth=3, left=3, right=3) = 3 and RETURNS 3 UP to parent 2. Pop walk(4, d=3).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "2": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 4 returns",
                3
              ],
              [
                "flow",
                "UP (return)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Back at node 2. Left child returned 3. Now explore right child of 2 with depth + 1 = 3.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "2": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "left return",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right child of 2 is null at depth 3. Base case returns depth - 1 = 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "2": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(2, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                3
              ],
              [
                "null returns",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 2 computes max(depth=2, left=3, right=2) = 3 and RETURNS 3 UP to root 1. Pop walk(2, d=2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "2": 3,
                "4": 3
              },
              "paramBadges": {
                "1": "d=1"
              },
              "activeEdges": [],
              "callStack": [
                "walk(1, d=1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 2 returns",
                3
              ],
              [
                "flow",
                "UP (return)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Back at root 1 (left subtree returned 3). Recurse into right child of 1, passing depth + 1 = 2 down. Call walk(3, d=2).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                3
              ],
              "returnedValues": {
                "2": 3,
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "3": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(3, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                2
              ],
              [
                "flow",
                "DOWN (right)"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Left child of 3 is null at depth 3. Base case returns depth - 1 = 2. Now recurse right into 5 with depth=3.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                3,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "3": "d=2",
                "5": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(3, d=2)",
                "walk(5, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                3
              ],
              [
                "flow",
                "DOWN (right)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "right child is null at depth 4. Base case: an empty subtree has max depth 3 (it adds no new level). We RETURN that up.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                3,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 3
              },
              "paramBadges": {
                "1": "d=1",
                "3": "d=2",
                "5": "d=3"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(3, d=2)",
                "walk(5, d=3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "depth param",
                4
              ],
              [
                "null returns",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 5 computes max(depth=3, left=2, right=3) = 3 and RETURNS 3 UP to parent 3. Pop walk(5, d=3).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                3,
                5
              ],
              "returnedValues": {
                "2": 3,
                "4": 3,
                "5": 3
              },
              "paramBadges": {
                "1": "d=1",
                "3": "d=2"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "walk(1, d=1)",
                "walk(3, d=2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 5 returns",
                3
              ],
              [
                "flow",
                "UP (return)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 3 computes max(depth=2, left=2, right=3) = 3 and RETURNS 3 UP to root 1. Pop walk(3, d=2).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                3,
                5
              ],
              "returnedValues": {
                "2": 3,
                "3": 3,
                "4": 3,
                "5": 3
              },
              "paramBadges": {
                "1": "d=1"
              },
              "activeEdges": [],
              "callStack": [
                "walk(1, d=1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 3 returns",
                3
              ],
              [
                "flow",
                "UP (return)"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Root 1 combines: max(depth=1, left=3, right=3) = 3. Final maximum depth is 3. Pop walk(1, d=1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                3,
                5
              ],
              "returnedValues": {
                "1": 3,
                "2": 3,
                "3": 3,
                "4": 3,
                "5": 3
              },
              "paramBadges": {
                "1": "d=1"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "best": {
              "label": "Dual Flow: Max Depth = 3"
            },
            "vars": [
              [
                "maxDepth",
                3
              ],
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
    "id": "validate-binary-search-tree",
    "patternId": "dfs",
    "title": "Validate Binary Search Tree",
    "subtitle": "Carry (low, high) bounds down",
    "kind": "problem",
    "leetcode": {
      "id": 98,
      "slug": "validate-binary-search-tree",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Microsoft"
    ],
    "statement": "Given the root of a binary tree, determine whether it is a valid binary search tree, where every node in a left subtree is strictly less than its parent and every node in a right subtree is strictly greater.",
    "visualType": "tree",
    "initialInput": {
      "val": 5,
      "left": {
        "val": 3,
        "left": {
          "val": 1
        },
        "right": {
          "val": 4
        }
      },
      "right": {
        "val": 8,
        "left": {
          "val": 6
        },
        "right": {
          "val": 9
        }
      }
    },
    "approaches": [
      {
        "id": "carry-bounds-down",
        "label": "Optimized DFS (carry low/high bounds down)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "valid(node, low, high):",
          "    if node is null: return true",
          "    if not (low < node.val < high): return false",
          "    return valid(node.left, low, node.val)",
          "        and valid(node.right, node.val, high)",
          "// answer = valid(root, -inf, +inf)"
        ],
        "starterCode": {
          "javascript": "function isValidBST(root, low = -Infinity, high = Infinity) {\n  if (!root) return true;\n  if (root.val <= low || root.val >= high) return false;\n  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);\n}",
          "python": "def isValidBST(root):\n    def valid(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if not (low < node.val < high): return False\n        return valid(node.left, low, node.val) and valid(node.right, node.val, high)\n    return valid(root)"
        },
        "solutionCode": {
          "javascript": "function isValidBST(root, low = -Infinity, high = Infinity) {\n  if (!root) return true;\n  if (root.val <= low || root.val >= high) return false;\n  return isValidBST(root.left, low, root.val) && isValidBST(root.right, root.val, high);\n}",
          "python": "def isValidBST(root):\n    def valid(node, low=float('-inf'), high=float('inf')):\n        if not node: return True\n        if not (low < node.val < high): return False\n        return valid(node.left, low, node.val) and valid(node.right, node.val, high)\n    return valid(root)"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 5,
                "left": {
                  "val": 3,
                  "left": {
                    "val": 1
                  },
                  "right": {
                    "val": 4
                  }
                },
                "right": {
                  "val": 8,
                  "left": {
                    "val": 6
                  },
                  "right": {
                    "val": 9
                  }
                }
              }
            ],
            "expected": true,
            "description": "Valid BST [5, 3, 8, 1, 4, 6, 9]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start validation at root 5 with full range bounds: (-∞ < x < +∞). Push valid(5, -∞, +∞).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [],
              "paramBadges": {
                "5": "-∞<x<+∞"
              },
              "activeEdges": [],
              "callStack": [
                "valid(5, -∞<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "low",
                "-∞"
              ],
              [
                "high",
                "+∞"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds: -∞ < 5 < +∞ is valid. Node 5 is within allowed ancestral bounds.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "5": "-∞<x<+∞"
              },
              "activeEdges": [],
              "callStack": [
                "valid(5, -∞<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse LEFT from 5 to node 3. Upper bound tightens to parent value 5: (-∞ < x < 5).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "range",
                "(-∞, 5)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 3: -∞ < 3 < 5 is valid.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3
              ],
              "paramBadges": {
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse LEFT from 3 to node 1. Upper bound tightens to parent value 3: (-∞ < x < 3).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3
              ],
              "paramBadges": {
                "1": "-∞<x<3",
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(1, -∞<x<3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "range",
                "(-∞, 3)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 1: -∞ < 1 < 3 is valid.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "paramBadges": {
                "1": "-∞<x<3",
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(1, -∞<x<3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Left child of 1 is null. Base case: null node is a valid BST (returns true).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "paramBadges": {
                "1": "-∞<x<3",
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(1, -∞<x<3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 1",
                "null -> true"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Right child of 1 is null. Base case: null node is a valid BST (returns true).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "paramBadges": {
                "1": "-∞<x<3",
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(1, -∞<x<3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "right of 1",
                "null -> true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both subtrees of 1 reported true. valid(1) = true. Pop the frame and return.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓"
              },
              "paramBadges": {
                "1": "-∞<x<3",
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(1, -∞<x<3)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "return",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop frame for node 1. Return true up to parent 3.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓"
              },
              "paramBadges": {
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 3",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "In node 3: recurse RIGHT into 4. Lower bound becomes 3, upper bound remains 5: (3 < x < 5).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓"
              },
              "paramBadges": {
                "3": "-∞<x<5",
                "4": "3<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(4, 3<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "range",
                "(3, 5)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 4: 3 < 4 < 5 is strictly valid.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                3,
                1,
                4
              ],
              "returnedValues": {
                "1": "✓"
              },
              "paramBadges": {
                "3": "-∞<x<5",
                "4": "3<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)",
                "valid(4, 3<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both subtrees of 4 are null (true). valid(4) = true. Pop frame.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                3,
                1,
                4
              ],
              "returnedValues": {
                "1": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "3": "-∞<x<5",
                "5": "-∞<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  3
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(3, -∞<x<5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 4 return",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both left (1) and right (4) subtrees of 3 are valid. valid(3) = true. Pop frame.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                5,
                3,
                1,
                4
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞"
              },
              "activeEdges": [],
              "callStack": [
                "valid(5, -∞<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 3 return",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at root 5. Left subtree is valid. Now recurse RIGHT into 8. Range tightens: (5 < x < +∞).",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                1,
                4
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                8
              ],
              [
                "range",
                "(5, +∞)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 8: 5 < 8 < +∞ is valid.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                8
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse LEFT from 8 into 6. Lower bound is 5, upper bound is 8: (5 < x < 8).",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "6": "5<x<8",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  6
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(6, 5<x<8)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                6
              ],
              [
                "range",
                "(5, 8)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 6: 5 < 6 < 8 is strictly valid.",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "6": "5<x<8",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  6
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(6, 5<x<8)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                6
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Subtrees of 6 are null -> valid(6) = true.",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "6": "5<x<8",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  6
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(6, 5<x<8)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 6 subtrees",
                "null -> true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop frame for node 6. Return true up to parent 8.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 8",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Recurse RIGHT from 8 into 9. Lower bound is 8, upper bound is +∞: (8 < x < +∞).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞",
                "9": "8<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  9
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(9, 8<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                9
              ],
              [
                "range",
                "(8, +∞)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Check bounds for node 9: 8 < 9 < +∞ is strictly valid.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞",
                "9": "8<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  9
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(9, 8<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                9
              ],
              [
                "valid",
                "true"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Subtrees of 9 are null -> valid(9) = true.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞",
                "9": "8<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  9
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)",
                "valid(9, 8<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 9 subtrees",
                "null -> true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop frame for node 9. Return true up to parent 8.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞",
                "8": "5<x<+∞"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "valid(5, -∞<x<+∞)",
                "valid(8, 5<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "right of 8",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both left (6) and right (9) subtrees of 8 are valid. valid(8) = true. Pop frame.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓",
                "8": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞"
              },
              "activeEdges": [],
              "callStack": [
                "valid(5, -∞<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 8 return",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at root 5. Both left subtree (3) and right subtree (8) returned true. valid(5) = true.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓",
                "6": "✓",
                "8": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "5": "-∞<x<+∞"
              },
              "activeEdges": [],
              "callStack": [
                "valid(5, -∞<x<+∞)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left_subtree",
                "true"
              ],
              [
                "right_subtree",
                "true"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop root frame valid(5). All nodes satisfied their ancestral range constraints. Entire binary tree is a VALID BST.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓",
                "6": "✓",
                "8": "✓",
                "9": "✓"
              },
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "best": {
              "label": "Valid BST: TRUE"
            },
            "vars": [
              [
                "result",
                "true"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Final Answer: true. Time complexity O(N) visiting each node once; Space complexity O(H) call stack height.",
            "tree": {
              "visitedNodes": [
                5,
                3,
                1,
                4,
                8,
                6,
                9
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓",
                "6": "✓",
                "8": "✓",
                "9": "✓"
              },
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 3,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 3
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 8,
                  "to": 6
                },
                {
                  "from": 8,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "status",
                "COMPLETE"
              ],
              [
                "answer",
                "true"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "binary-tree-tilt",
    "patternId": "dfs",
    "title": "Binary Tree Tilt",
    "subtitle": "Post-order: return subtree sums, accumulate |L − R|",
    "kind": "problem",
    "leetcode": {
      "id": 563,
      "slug": "binary-tree-tilt",
      "difficulty": "Easy"
    },
    "companies": [
      "Google",
      "Amazon"
    ],
    "statement": "Given the root of a binary tree, return the sum of every tree node's tilt. The tilt of a tree node is the absolute difference between the sum of all left subtree node values and all right subtree node values.",
    "visualType": "tree",
    "initialInput": {
      "val": 4,
      "left": {
        "val": 2,
        "left": {
          "val": 3
        },
        "right": {
          "val": 5
        }
      },
      "right": {
        "val": 9,
        "right": {
          "val": 7
        }
      }
    },
    "approaches": [
      {
        "id": "post-order-tilt",
        "label": "Post-Order Subtree Sums",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "sumAndTilt(node):",
          "    if node is null: return 0",
          "    leftSum = sumAndTilt(node.left)",
          "    rightSum = sumAndTilt(node.right)",
          "    totalTilt += abs(leftSum - rightSum)",
          "    return node.val + leftSum + rightSum"
        ],
        "starterCode": {
          "javascript": "function findTilt(root) {\n  let totalTilt = 0;\n  function sum(node) {\n    if (!node) return 0;\n    const L = sum(node.left), R = sum(node.right);\n    totalTilt += Math.abs(L - R);\n    return node.val + L + R;\n  }\n  sum(root);\n  return totalTilt;\n}",
          "python": "def findTilt(root):\n    total_tilt = 0\n    def sum_tree(node):\n        nonlocal total_tilt\n        if not node: return 0\n        L, R = sum_tree(node.left), sum_tree(node.right)\n        total_tilt += abs(L - R)\n        return node.val + L + R\n    sum_tree(root)\n    return total_tilt"
        },
        "solutionCode": {
          "javascript": "function findTilt(root) {\n  let totalTilt = 0;\n  function sum(node) {\n    if (!node) return 0;\n    const L = sum(node.left), R = sum(node.right);\n    totalTilt += Math.abs(L - R);\n    return node.val + L + R;\n  }\n  sum(root);\n  return totalTilt;\n}",
          "python": "def findTilt(root):\n    total_tilt = 0\n    def sum_tree(node):\n        nonlocal total_tilt\n        if not node: return 0\n        L, R = sum_tree(node.left), sum_tree(node.right)\n        total_tilt += abs(L - R)\n        return node.val + L + R\n    sum_tree(root)\n    return total_tilt"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2
                },
                "right": {
                  "val": 3
                }
              }
            ],
            "expected": 1,
            "description": "Tilt = |2 - 3| = 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start post-order traversal at root 4 to calculate sum of every subtree and accumulate tilt. Push sumTree(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "sumTree(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "totalTilt",
                0
              ],
              [
                "node",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse LEFT from 4 to node 2. Push sumTree(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                4
              ],
              "activeEdges": [
                [
                  4,
                  2
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "totalTilt",
                0
              ],
              [
                "node",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse LEFT from 2 to leaf 3. Push sumTree(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                2
              ],
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)",
                "sumTree(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "totalTilt",
                0
              ],
              [
                "node",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Leaf 3 has null children (sum 0). Tilt = |0 - 0| = 0. Leaf 3 returns sum = 3 + 0 + 0 = 3.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                2,
                3
              ],
              "returnedValues": {
                "3": 3
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)",
                "sumTree(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(3)",
                0
              ],
              [
                "sum(3)",
                3
              ],
              [
                "totalTilt",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop sumTree(3). Back at node 2 (left sum = 3). Now recurse RIGHT into node 5. Push sumTree(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                4,
                2,
                3
              ],
              "returnedValues": {
                "3": 3
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)",
                "sumTree(5)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "leftSum",
                3
              ],
              [
                "node",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Leaf 5 has null children. Tilt = |0 - 0| = 0. Leaf 5 returns sum = 5.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                4,
                2,
                3,
                5
              ],
              "returnedValues": {
                "3": 3,
                "5": 5
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)",
                "sumTree(5)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(5)",
                0
              ],
              [
                "sum(5)",
                5
              ],
              [
                "totalTilt",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop sumTree(5). Node 2 combines: left=3, right=5. Tilt = |3 - 5| = 2! Total tilt += 2. Subtree sum = 2 + 3 + 5 = 10.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                4,
                2,
                3,
                5
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5
              },
              "activeEdges": [
                [
                  4,
                  2
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(2)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(2)",
                2
              ],
              [
                "sum(2)",
                10
              ],
              [
                "totalTilt",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop sumTree(2). Back at root 4 (left sum = 10). Recurse RIGHT into node 9. Push sumTree(9).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                2,
                3,
                5
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5
              },
              "activeEdges": [
                [
                  4,
                  9
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "leftSum(4)",
                10
              ],
              [
                "node",
                9
              ],
              [
                "totalTilt",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse LEFT from 9: null -> returns sum 0.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                2,
                3,
                5
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5
              },
              "activeEdges": [
                [
                  4,
                  9
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "leftSum(9)",
                0
              ],
              [
                "node",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Recurse RIGHT from 9 into leaf 7. Push sumTree(7).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                2,
                3,
                5,
                9
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5
              },
              "activeEdges": [
                [
                  4,
                  9
                ],
                [
                  9,
                  7
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(9)",
                "sumTree(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "node",
                7
              ],
              [
                "totalTilt",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Leaf 7 has null children. Tilt = |0 - 0| = 0. Returns sum = 7.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                2,
                3,
                5,
                9,
                7
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5,
                "7": 7
              },
              "activeEdges": [
                [
                  4,
                  9
                ],
                [
                  9,
                  7
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(9)",
                "sumTree(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(7)",
                0
              ],
              [
                "sum(7)",
                7
              ],
              [
                "totalTilt",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop sumTree(7). Node 9 combines: left=0, right=7. Tilt = |0 - 7| = 7. Total tilt = 2 + 7 = 9. Subtree sum = 9 + 0 + 7 = 16.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                2,
                3,
                5,
                9,
                7
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "5": 5,
                "7": 7,
                "9": 16
              },
              "activeEdges": [
                [
                  4,
                  9
                ]
              ],
              "callStack": [
                "sumTree(4)",
                "sumTree(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(9)",
                7
              ],
              [
                "sum(9)",
                16
              ],
              [
                "totalTilt",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop sumTree(9). Back at root 4: left sum = 10, right sum = 16. Tilt = |10 - 16| = 6. Total tilt = 9 + 6 = 15. Subtree sum = 4 + 10 + 16 = 30.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                4,
                2,
                3,
                5,
                9,
                7
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "4": 30,
                "5": 5,
                "7": 7,
                "9": 16
              },
              "activeEdges": [],
              "callStack": [
                "sumTree(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "tilt(4)",
                6
              ],
              [
                "sum(4)",
                30
              ],
              [
                "totalTilt",
                15
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop sumTree(4). Traversal complete! Total tilt across all nodes in the tree is 15.",
            "tree": {
              "visitedNodes": [
                4,
                2,
                3,
                5,
                9,
                7
              ],
              "returnedValues": {
                "2": 10,
                "3": 3,
                "4": 30,
                "5": 5,
                "7": 7,
                "9": 16
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 9,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 9
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 5
                },
                {
                  "from": 9,
                  "to": 7
                }
              ]
            },
            "best": {
              "label": "Total Tilt: 15"
            },
            "vars": [
              [
                "result",
                15
              ],
              [
                "status",
                "DONE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "diameter-of-a-binary-tree",
    "patternId": "dfs",
    "title": "Diameter of a Binary Tree",
    "subtitle": "Post-order heights, track the widest split",
    "kind": "problem",
    "leetcode": {
      "id": 543,
      "slug": "diameter-of-binary-tree",
      "difficulty": "Easy"
    },
    "companies": [
      "Facebook",
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "statement": "Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree, which may or may not pass through the root.",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2,
        "left": {
          "val": 4
        },
        "right": {
          "val": 5
        }
      },
      "right": {
        "val": 3
      }
    },
    "approaches": [
      {
        "id": "post-order-heights",
        "label": "Recursive DFS (post-order height + global max)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "best = 0",
          "height(node):",
          "    if node is null: return -1        // base case",
          "    L = height(node.left)",
          "    R = height(node.right)",
          "    best = max(best, (L+1) + (R+1))   // path through node",
          "    return 1 + max(L, R)              // height for parent",
          "// answer = best"
        ],
        "starterCode": {
          "javascript": "function diameterOfBinaryTree(root) {\n  let maxD = 0;\n  function height(node) {\n    if (!node) return 0;\n    const L = height(node.left), R = height(node.right);\n    maxD = Math.max(maxD, L + R);\n    return 1 + Math.max(L, R);\n  }\n  height(root);\n  return maxD;\n}",
          "python": "def diameterOfBinaryTree(root):\n    max_d = 0\n    def height(node):\n        nonlocal max_d\n        if not node: return 0\n        L, R = height(node.left), height(node.right)\n        max_d = max(max_d, L + R)\n        return 1 + max(L, R)\n    height(root)\n    return max_d"
        },
        "solutionCode": {
          "javascript": "function diameterOfBinaryTree(root) {\n  let maxD = 0;\n  function height(node) {\n    if (!node) return 0;\n    const L = height(node.left), R = height(node.right);\n    maxD = Math.max(maxD, L + R);\n    return 1 + Math.max(L, R);\n  }\n  height(root);\n  return maxD;\n}",
          "python": "def diameterOfBinaryTree(root):\n    max_d = 0\n    def height(node):\n        nonlocal max_d\n        if not node: return 0\n        L, R = height(node.left), height(node.right)\n        max_d = max(max_d, L + R)\n        return 1 + max(L, R)\n    height(root)\n    return max_d"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2,
                  "left": {
                    "val": 4
                  },
                  "right": {
                    "val": 5
                  }
                },
                "right": {
                  "val": 3
                }
              }
            ],
            "expected": 3,
            "description": "Path [4,2,1,3] has 3 edges"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "The diameter is the longest path, counted in EDGES, between any two nodes. The key insight: that path may NOT pass through the root, but it always bends at SOME node. At each node, the longest path that bends there equals leftHeight + rightHeight. So we run one post-order pass: the helper returns each node's HEIGHT, and along the way we keep a global best of leftH + rightH.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "height(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "goal",
                "longest path in edges"
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Call height(1) on root. Push height(1) onto stack.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "activeEdges": [],
              "callStack": [
                "height(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT from 1 to node 2. Call height(2). Push height(2) onto stack.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT from 2 to leaf 4. Call height(4). Push height(4) onto stack.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2
              ],
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 4 left child is null -> height returns -1.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "left of 4",
                "null -> -1"
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 4 right child is null -> height returns -1.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "right of 4",
                "null -> -1"
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At leaf 4: path through 4 = (L+1) + (R+1) = (-1+1) + (-1+1) = 0 edges. best = max(0, 0) = 0.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  4
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "path through 4",
                0
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 4 returns height = 1 + max(-1, -1) = 0 to parent 2. Pop height(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "return height",
                0
              ],
              [
                "node 4",
                "done"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at node 2 (L = 0). Now recurse RIGHT into leaf 5. Call height(5). Push height(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4
              ],
              "returnedValues": {
                "4": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L of 2",
                0
              ],
              [
                "node",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 5 left child is null -> returns -1.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "left of 5",
                "null -> -1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 5 right child is null -> returns -1.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "right of 5",
                "null -> -1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At leaf 5: path through 5 = 0. best remains 0.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  5
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)",
                "height(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "path through 5",
                0
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 5 returns height = 1 + max(-1, -1) = 0 to parent 2. Pop height(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "return height",
                0
              ],
              [
                "node 5",
                "done"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At node 2: left subtree height L=0, right subtree height R=0. Path bending at 2 = (L+1) + (R+1) = (0+1) + (0+1) = 2 edges (path 4 -> 2 -> 5). Update global best = max(0, 2) = 2!",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "height(1)",
                "height(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "path through 2",
                2
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Node 2 returns height = 1 + max(0, 0) = 1 to parent 1. Pop height(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "2": "1",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [],
              "callStack": [
                "height(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "return height",
                1
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at root 1 (L = 1). Now recurse RIGHT into leaf 3. Call height(3). Push height(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5
              ],
              "returnedValues": {
                "2": "1",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "height(1)",
                "height(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "L of 1",
                1
              ],
              [
                "node",
                3
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 3 left child is null -> returns -1.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": "1",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "height(1)",
                "height(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "left of 3",
                "null -> -1"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 3 right child is null -> returns -1.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": "1",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "height(1)",
                "height(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "right of 3",
                "null -> -1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At leaf 3: path through 3 = 0. best remains 2.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": "1",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "height(1)",
                "height(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "path through 3",
                0
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 3 returns height = 1 + max(-1, -1) = 0 to root 1. Pop height(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": "1",
                "3": "0",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [],
              "callStack": [
                "height(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "return height",
                0
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At root 1: left height L=1, right height R=0. Path bending at root 1 = (L+1) + (R+1) = (1+1) + (0+1) = 3 edges (path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3). Update global best = max(2, 3) = 3!",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "2": "1",
                "3": "0",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [],
              "callStack": [
                "height(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "path through 1",
                3
              ],
              [
                "global best",
                3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Root 1 returns height = 1 + max(1, 0) = 2. Pop root frame height(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": "2",
                "2": "1",
                "3": "0",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "return height",
                2
              ],
              [
                "global best",
                3
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Post-order pass complete! The diameter of the binary tree is 3 edges (longest path: 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3). Return best = 3.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                4,
                5,
                3
              ],
              "returnedValues": {
                "1": "2",
                "2": "1",
                "3": "0",
                "4": "0",
                "5": "0"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 135,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 2,
                  "to": 5
                }
              ]
            },
            "best": {
              "label": "Diameter = 3 edges"
            },
            "vars": [
              [
                "answer",
                3
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "path-sum-ii",
    "patternId": "dfs",
    "title": "Path Sum II",
    "subtitle": "Backtracking: collect every root-to-leaf path == target",
    "kind": "problem",
    "leetcode": {
      "id": 113,
      "slug": "path-sum-ii",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Bloomberg",
      "Facebook"
    ],
    "statement": "Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.",
    "visualType": "tree",
    "initialInput": {
      "val": 5,
      "left": {
        "val": 4,
        "left": {
          "val": 11,
          "left": {
            "val": 7
          },
          "right": {
            "val": 2
          }
        }
      },
      "right": {
        "val": 8,
        "left": {
          "val": 13
        },
        "right": {
          "val": 4,
          "left": {
            "val": 5
          },
          "right": {
            "val": 1
          }
        }
      }
    },
    "approaches": [
      {
        "id": "backtracking",
        "label": "Recursive DFS + backtracking",
        "complexity": {
          "time": "O(N²)",
          "space": "O(H)"
        },
        "pseudocode": [
          "dfs(node, remaining):",
          "    path.push(node.val); remaining -= node.val // grow path",
          "    if leaf and remaining == 0: results.push(copy of path)",
          "    dfs(node.left, remaining)",
          "    dfs(node.right, remaining)",
          "    path.pop()                                 // trim path",
          "// answer = results"
        ],
        "starterCode": {
          "javascript": "function pathSum(root, targetSum) {\n  const result = [];\n  function dfs(node, rem, path) {\n    if (!node) return;\n    path.push(node.val);\n    if (!node.left && !node.right && node.val === rem) result.push([...path]);\n    dfs(node.left, rem - node.val, path);\n    dfs(node.right, rem - node.val, path);\n    path.pop();\n  }\n  dfs(root, targetSum, []);\n  return result;\n}",
          "python": "def pathSum(root, targetSum):\n    result = []\n    def dfs(node, rem, path):\n        if not node: return\n        path.append(node.val)\n        if not node.left and not node.right and node.val == rem:\n            result.append(list(path))\n        dfs(node.left, rem - node.val, path)\n        dfs(node.right, rem - node.val, path)\n        path.pop()\n    dfs(root, targetSum, [])\n    return result"
        },
        "solutionCode": {
          "javascript": "function pathSum(root, targetSum) {\n  const result = [];\n  function dfs(node, rem, path) {\n    if (!node) return;\n    path.push(node.val);\n    if (!node.left && !node.right && node.val === rem) result.push([...path]);\n    dfs(node.left, rem - node.val, path);\n    dfs(node.right, rem - node.val, path);\n    path.pop();\n  }\n  dfs(root, targetSum, []);\n  return result;\n}",
          "python": "def pathSum(root, targetSum):\n    result = []\n    def dfs(node, rem, path):\n        if not node: return\n        path.append(node.val)\n        if not node.left and not node.right and node.val == rem:\n            result.append(list(path))\n        dfs(node.left, rem - node.val, path)\n        dfs(node.right, rem - node.val, path)\n        path.pop()\n    dfs(root, targetSum, [])\n    return result"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 5,
                "left": {
                  "val": 4,
                  "left": {
                    "val": 11,
                    "right": {
                      "val": 2
                    }
                  }
                }
              },
              22
            ],
            "expected": [
              [
                5,
                4,
                11,
                2
              ]
            ],
            "description": "Collect path [5, 4, 11, 2]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start backtracking DFS at root 5 with target sum 22. path = [].",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [],
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "dfs(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[]"
              ],
              [
                "remaining",
                22
              ],
              [
                "results",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 5 to path. path = [5]. remaining = 22 - 5 = 17.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [],
              "callStack": [
                "dfs(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5]"
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "5 is not a leaf. Proceed to recurse left.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [],
              "callStack": [
                "dfs(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5]"
              ],
              [
                "isLeaf",
                "false"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 4, carrying remaining 17. Push dfs(4, rem=17).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5
              ],
              "paramBadges": {
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 5"
              ],
              [
                "path",
                "[5]"
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 4 to path. path = [5, 4]. remaining = 17 - 4 = 13.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4]"
              ],
              [
                "remaining",
                13
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 11, carrying remaining 13. Push dfs(11, rem=13).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 4"
              ],
              [
                "path",
                "[5, 4]"
              ],
              [
                "remaining",
                13
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 11 to path. path = [5, 4, 11]. remaining = 13 - 11 = 2.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4, 11]"
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 7, carrying remaining 2. Push dfs(7, rem=2).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  7
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(7, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 11"
              ],
              [
                "path",
                "[5, 4, 11]"
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 7 to path. path = [5, 4, 11, 7]. remaining = 2 - 7 = -5.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  7
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(7, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4, 11, 7]"
              ],
              [
                "remaining",
                -5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "7 is a leaf, but remaining is -5 != 0. Path [5, 4, 11, 7] sum is 27 != 22 (invalid).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  7
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(7, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "valid",
                "false"
              ],
              [
                "remaining",
                -5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 7 from path. path = [5, 4, 11]. Pop dfs(7).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4, 11]"
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse RIGHT into 2, carrying remaining 2. Push dfs(2, rem=2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                4,
                11,
                7
              ],
              "paramBadges": {
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(2, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "right of 11"
              ],
              [
                "path",
                "[5, 4, 11]"
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 2 to path. path = [5, 4, 11, 2]. remaining = 2 - 2 = 0.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "paramBadges": {
                "2": "=0 ✓",
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(2, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4, 11, 2]"
              ],
              [
                "remaining",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "2 is a leaf and remaining == 0! TARGET SUM REACHED! Add copy of path [5, 4, 11, 2] to results.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ],
                [
                  11,
                  2
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)",
                "dfs(2, rem=2)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "MATCH",
                "[5, 4, 11, 2]"
              ],
              [
                "results",
                "[[5, 4, 11, 2]]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 2 from path. path = [5, 4, 11]. Pop dfs(2).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X",
                "11": "rem=2"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)",
                "dfs(11, rem=13)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4, 11]"
              ],
              [
                "remaining",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Both children of 11 explored. Backtrack: pop 11 from path. path = [5, 4]. Pop dfs(11).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "4": "rem=13",
                "5": "rem=17",
                "7": "-5 X"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(4, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 4]"
              ],
              [
                "remaining",
                13
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Node 4 right child is null. Backtrack: pop 4 from path. path = [5]. Pop dfs(4).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X"
              },
              "activeEdges": [],
              "callStack": [
                "dfs(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5]"
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse RIGHT into 8, carrying remaining 17. Push dfs(8, rem=17).",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "right of 5"
              ],
              [
                "path",
                "[5]"
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 8 to path. path = [5, 8]. remaining = 17 - 8 = 9.",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8]"
              ],
              [
                "remaining",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into 13, carrying remaining 9. Push dfs(13, rem=9).",
            "tree": {
              "activeNode": 13,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  13
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(13, rem=9)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 8"
              ],
              [
                "path",
                "[5, 8]"
              ],
              [
                "remaining",
                9
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 13 to path. path = [5, 8, 13]. remaining = 9 - 13 = -4.",
            "tree": {
              "activeNode": 13,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  13
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(13, rem=9)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 13]"
              ],
              [
                "remaining",
                -4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "13 is leaf, remaining = -4 != 0. Backtrack: pop 13 from path. path = [5, 8]. Pop dfs(13).",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8]"
              ],
              [
                "remaining",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at 8, now recurse RIGHT into 4, carrying remaining 9. Note the path was already restored to [5,8] before this call.",
            "tree": {
              "activeNode": "4b",
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "right of 8"
              ],
              [
                "path",
                "[5, 8]"
              ],
              [
                "remaining",
                9
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 4 to path. path = [5, 8, 4]. remaining = 9 - 4 = 5.",
            "tree": {
              "activeNode": "4b",
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b"
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 4]"
              ],
              [
                "remaining",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into leaf 5, carrying remaining 5. Push dfs(5, rem=5).",
            "tree": {
              "activeNode": 51,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b"
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  51
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(5, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "left of 4"
              ],
              [
                "path",
                "[5, 8, 4]"
              ],
              [
                "remaining",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 5 to path. path = [5, 8, 4, 5]. remaining = 5 - 5 = 0.",
            "tree": {
              "activeNode": 51,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51
              ],
              "returnedValues": {
                "2": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  51
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(5, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 4, 5]"
              ],
              [
                "remaining",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "5 is a leaf and remaining == 0! SECOND MATCH! Add copy of path [5, 8, 4, 5] to results.",
            "tree": {
              "activeNode": 51,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  51
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(5, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "MATCH",
                "[5, 8, 4, 5]"
              ],
              [
                "results",
                "[[5, 4, 11, 2], [5, 8, 4, 5]]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 5 from path. path = [5, 8, 4]. Pop dfs(5).",
            "tree": {
              "activeNode": "4b",
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 4]"
              ],
              [
                "remaining",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: Recurse RIGHT into leaf 1, carrying remaining 5. Push dfs(1, rem=5).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  1
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(1, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "recurse",
                "right of 4"
              ],
              [
                "path",
                "[5, 8, 4]"
              ],
              [
                "remaining",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append 1 to path. path = [5, 8, 4, 1]. remaining = 5 - 1 = 4.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  1
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(1, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 4, 1]"
              ],
              [
                "remaining",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "1 is leaf, but remaining is 4 != 0. Path [5, 8, 4, 1] sum is 18 != 22.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ],
                [
                  "4b",
                  1
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)",
                "dfs(1, rem=5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "valid",
                "false"
              ],
              [
                "remaining",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 1 from path. path = [5, 8, 4]. Pop dfs(1).",
            "tree": {
              "activeNode": "4b",
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓",
                "4b": "rem=5"
              },
              "activeEdges": [
                [
                  5,
                  8
                ],
                [
                  8,
                  "4b"
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)",
                "dfs(4, rem=9)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8, 4]"
              ],
              [
                "remaining",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 4 from path. path = [5, 8]. Pop dfs(4).",
            "tree": {
              "activeNode": 8,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "8": "rem=9",
                "13": "-4 X",
                "51": "=0 ✓"
              },
              "activeEdges": [
                [
                  5,
                  8
                ]
              ],
              "callStack": [
                "dfs(5, rem=22)",
                "dfs(8, rem=17)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5, 8]"
              ],
              [
                "remaining",
                9
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 8 from path. path = [5]. Pop dfs(8).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "5": "rem=17",
                "7": "-5 X",
                "13": "-4 X",
                "51": "=0 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "dfs(5, rem=22)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[5]"
              ],
              [
                "remaining",
                17
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Backtrack: pop 5 from path. path = []. Pop root frame dfs(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {
                "1": "4 X",
                "2": "=0 ✓",
                "7": "-5 X",
                "13": "-4 X",
                "51": "=0 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "vars": [
              [
                "path",
                "[]"
              ],
              [
                "results",
                "[[5, 4, 11, 2], [5, 8, 4, 5]]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "DFS traversal complete! Return all collected valid paths: [[5, 4, 11, 2], [5, 8, 4, 5]].",
            "tree": {
              "visitedNodes": [
                5,
                4,
                11,
                7,
                2,
                8,
                13,
                "4b",
                51,
                1
              ],
              "returnedValues": {
                "2": "✓",
                "51": "✓"
              },
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 35
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 105
                },
                {
                  "id": 8,
                  "x": 245,
                  "y": 105
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 175
                },
                {
                  "id": 7,
                  "x": 30,
                  "y": 240
                },
                {
                  "id": 2,
                  "x": 80,
                  "y": 240
                },
                {
                  "id": 13,
                  "x": 205,
                  "y": 175
                },
                {
                  "id": "4b",
                  "x": 285,
                  "y": 175
                },
                {
                  "id": 51,
                  "x": 260,
                  "y": 240
                },
                {
                  "id": 1,
                  "x": 310,
                  "y": 240
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 8
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 11,
                  "to": 7
                },
                {
                  "from": 11,
                  "to": 2
                },
                {
                  "from": 8,
                  "to": 13
                },
                {
                  "from": 8,
                  "to": "4b"
                },
                {
                  "from": "4b",
                  "to": 51
                },
                {
                  "from": "4b",
                  "to": 1
                }
              ]
            },
            "best": {
              "label": "2 Valid Paths: [[5,4,11,2], [5,8,4,5]]"
            },
            "vars": [
              [
                "results",
                "[[5,4,11,2], [5,8,4,5]]"
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "longest-univalue-path",
    "patternId": "dfs",
    "title": "Longest Univalue Path",
    "subtitle": "Longest chain of equal values",
    "kind": "problem",
    "leetcode": {
      "id": 687,
      "slug": "longest-univalue-path",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon"
    ],
    "statement": "Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.",
    "visualType": "tree",
    "initialInput": {
      "val": 5,
      "left": {
        "val": 4,
        "left": {
          "val": 1
        },
        "right": {
          "val": 1
        }
      },
      "right": {
        "val": 5,
        "right": {
          "val": 5
        }
      }
    },
    "approaches": [
      {
        "id": "post-order-univalue",
        "label": "Recursive DFS (post-order arrows + global max)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "best = 0",
          "arrow(node):",
          "    lRaw = arrow(node.left); rRaw = arrow(node.right)",
          "    lArm = (left matches) ? lRaw + 1 : 0",
          "    rArm = (right matches) ? rRaw + 1 : 0",
          "    best = max(best, lArm + rArm)      // path bending at node",
          "    return max(lArm, rArm)             // arm for parent",
          "// answer = best"
        ],
        "starterCode": {
          "javascript": "function longestUnivaluePath(root) {\n  let maxP = 0;\n  function dfs(node) {\n    if (!node) return 0;\n    const L = dfs(node.left), R = dfs(node.right);\n    let aL = (node.left && node.left.val === node.val) ? L + 1 : 0;\n    let aR = (node.right && node.right.val === node.val) ? R + 1 : 0;\n    maxP = Math.max(maxP, aL + aR);\n    return Math.max(aL, aR);\n  }\n  dfs(root);\n  return maxP;\n}",
          "python": "def longestUnivaluePath(root):\n    max_p = 0\n    def dfs(node):\n        nonlocal max_p\n        if not node: return 0\n        L, R = dfs(node.left), dfs(node.right)\n        aL = L + 1 if node.left and node.left.val == node.val else 0\n        aR = R + 1 if node.right and node.right.val == node.val else 0\n        max_p = max(max_p, aL + aR)\n        return max(aL, aR)\n    dfs(root)\n    return max_p"
        },
        "solutionCode": {
          "javascript": "function longestUnivaluePath(root) {\n  let maxP = 0;\n  function dfs(node) {\n    if (!node) return 0;\n    const L = dfs(node.left), R = dfs(node.right);\n    let aL = (node.left && node.left.val === node.val) ? L + 1 : 0;\n    let aR = (node.right && node.right.val === node.val) ? R + 1 : 0;\n    maxP = Math.max(maxP, aL + aR);\n    return Math.max(aL, aR);\n  }\n  dfs(root);\n  return maxP;\n}",
          "python": "def longestUnivaluePath(root):\n    max_p = 0\n    def dfs(node):\n        nonlocal max_p\n        if not node: return 0\n        L, R = dfs(node.left), dfs(node.right)\n        aL = L + 1 if node.left and node.left.val == node.val else 0\n        aR = R + 1 if node.right and node.right.val == node.val else 0\n        max_p = max(max_p, aL + aR)\n        return max(aL, aR)\n    dfs(root)\n    return max_p"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 5,
                "right": {
                  "val": 5,
                  "right": {
                    "val": 5
                  }
                }
              }
            ],
            "expected": 2,
            "description": "3 nodes with val 5 -> path length 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start post-order traversal at root 5. best tracks longest univalue path length in edges. Push arrow(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "arrow(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "global best",
                0
              ],
              [
                "node",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Call arrow(5). Recurse into left child 4.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5
              ],
              "activeEdges": [],
              "callStack": [
                "arrow(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse LEFT into node 4. Push arrow(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5
              ],
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse LEFT from 4 into leaf 1. Push arrow(1).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4
              ],
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 1 left child is null -> arrow returns 0. Right child is null -> arrow returns 0.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lRaw",
                0
              ],
              [
                "rRaw",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Leaf 1 has no matching children. lArm = 0, rArm = 0. best = max(0, 0) = 0.",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  11
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lArm",
                0
              ],
              [
                "rArm",
                0
              ],
              [
                "best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 1 returns max(0, 0) = 0 to parent 4. Pop arrow(1).",
            "tree": {
              "activeNode": 11,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "returnedValues": {
                "11": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "return arm",
                0
              ],
              [
                "node 1",
                "done"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "In node 4: recurse RIGHT into leaf 1. Push arrow(1).",
            "tree": {
              "activeNode": 12,
              "visitedNodes": [
                5,
                4,
                11
              ],
              "returnedValues": {
                "11": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  12
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right leaf 1 children are null. lRaw = 0, rRaw = 0.",
            "tree": {
              "activeNode": 12,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "11": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  12
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lRaw",
                0
              ],
              [
                "rRaw",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Right leaf 1: lArm = 0, rArm = 0. best remains 0.",
            "tree": {
              "activeNode": 12,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "11": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ],
                [
                  4,
                  12
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)",
                "arrow(1)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lArm",
                0
              ],
              [
                "rArm",
                0
              ],
              [
                "best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Right leaf 1 returns 0 to parent 4. Pop arrow(1).",
            "tree": {
              "activeNode": 12,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "return arm",
                0
              ],
              [
                "node 1",
                "done"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Back at 4. Left child 1 does not match -> left arm = 0. Right child 1 does not match -> right arm = 0.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "left arm",
                0
              ],
              [
                "right arm",
                0
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At node 4: best = max(0, 0 + 0) = 0.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  4
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(4)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "path bending at 4",
                0
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Node 4 returns max(0, 0) = 0 to root 5. Pop arrow(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [],
              "callStack": [
                "arrow(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "return arm",
                0
              ],
              [
                "node 4",
                "done"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "In root 5: recurse RIGHT into node 5. Push arrow(5_right).",
            "tree": {
              "activeNode": 52,
              "visitedNodes": [
                5,
                4,
                11,
                12
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Node 5_right left child is null -> returns 0.",
            "tree": {
              "activeNode": 52,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lRaw",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Recurse RIGHT into leaf 5. Push arrow(5_leaf).",
            "tree": {
              "activeNode": 53,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ],
                [
                  52,
                  53
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)",
                "arrow(5_leaf)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "global best",
                0
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Leaf 5 has null children -> lRaw = 0, rRaw = 0.",
            "tree": {
              "activeNode": 53,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ],
                [
                  52,
                  53
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)",
                "arrow(5_leaf)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lRaw",
                0
              ],
              [
                "rRaw",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Leaf 5: lArm = 0, rArm = 0. best remains 0.",
            "tree": {
              "activeNode": 53,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ],
                [
                  52,
                  53
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)",
                "arrow(5_leaf)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "lArm",
                0
              ],
              [
                "rArm",
                0
              ],
              [
                "best",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 5 returns 0 to parent 5_right. Pop arrow(5_leaf).",
            "tree": {
              "activeNode": 53,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0",
                "53": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "return arm",
                0
              ],
              [
                "node 53",
                "done"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "In node 5_right: right child has value 5 == 5! MATCH! rArm = rRaw + 1 = 0 + 1 = 1.",
            "tree": {
              "activeNode": 52,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0",
                "53": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "right matches",
                "5 == 5"
              ],
              [
                "rArm",
                1
              ],
              [
                "lArm",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Path bending at 5_right = lArm + rArm = 0 + 1 = 1 edge. best = max(0, 1) = 1!",
            "tree": {
              "activeNode": 52,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0",
                "53": "0"
              },
              "activeEdges": [
                [
                  5,
                  52
                ]
              ],
              "callStack": [
                "arrow(5)",
                "arrow(5_right)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "path bending",
                1
              ],
              [
                "global best",
                1
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Node 5_right returns max(lArm=0, rArm=1) = 1 to root 5. Pop arrow(5_right).",
            "tree": {
              "activeNode": 52,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0",
                "52": "1",
                "53": "0"
              },
              "activeEdges": [],
              "callStack": [
                "arrow(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "return arm",
                1
              ],
              [
                "global best",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at root 5: left child 4 does not match (lArm = 0). Right child 5 MATCHES (5 == 5) -> rArm = rRaw + 1 = 1 + 1 = 2!",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "11": "0",
                "12": "0",
                "52": "1",
                "53": "0"
              },
              "activeEdges": [],
              "callStack": [
                "arrow(5)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "root 5 lArm",
                0
              ],
              [
                "root 5 rArm",
                2
              ],
              [
                "global best",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Path bending at root 5 = lArm + rArm = 0 + 2 = 2 edges (chain: 5 -> 5 -> 5). Update global best = max(1, 2) = 2!",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "5": "2",
                "11": "0",
                "12": "0",
                "52": "1",
                "53": "0"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "vars": [
              [
                "path bending at root",
                2
              ],
              [
                "global best",
                2
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Traversal complete! Longest univalue path in the tree is 2 edges (the path 5 -> 5 -> 5). Return best = 2.",
            "tree": {
              "visitedNodes": [
                5,
                4,
                11,
                12,
                52,
                53
              ],
              "returnedValues": {
                "4": "0",
                "5": "2",
                "11": "0",
                "12": "0",
                "52": "1",
                "53": "0"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 5,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 4,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 52,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 11,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 12,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 53,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 5,
                  "to": 4
                },
                {
                  "from": 5,
                  "to": 52
                },
                {
                  "from": 4,
                  "to": 11
                },
                {
                  "from": 4,
                  "to": 12
                },
                {
                  "from": 52,
                  "to": 53
                }
              ]
            },
            "best": {
              "label": "Longest Univalue Path = 2 edges"
            },
            "vars": [
              [
                "answer",
                2
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "invert-binary-tree",
    "patternId": "dfs",
    "title": "Invert Binary Tree",
    "subtitle": "Pre-order DFS, swap every node's children",
    "kind": "problem",
    "leetcode": {
      "id": 226,
      "slug": "invert-binary-tree",
      "difficulty": "Easy"
    },
    "companies": [
      "Google",
      "Amazon",
      "Facebook",
      "Microsoft"
    ],
    "statement": "Given the root of a binary tree, invert it (mirror it left-to-right) and return the root. The interview classic that, per legend, once tripped up a well-known whiteboard candidate.",
    "visualType": "tree",
    "initialInput": {
      "val": 4,
      "left": {
        "val": 2,
        "left": {
          "val": 1
        },
        "right": {
          "val": 3
        }
      },
      "right": {
        "val": 7,
        "left": {
          "val": 6
        },
        "right": {
          "val": 9
        }
      }
    },
    "approaches": [
      {
        "id": "dfs-swap",
        "label": "Recursive DFS (swap children)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "invert(node):",
          "    if node is null: return            // base case",
          "    swap node.left, node.right         // pre-order: swap children",
          "    invert(node.left)",
          "    invert(node.right)",
          "    return                             // subtree mirrored",
          "// answer = inverted root"
        ],
        "starterCode": {
          "javascript": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}",
          "python": "def invertTree(root):\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root"
        },
        "solutionCode": {
          "javascript": "function invertTree(root) {\n  if (!root) return null;\n  const temp = root.left;\n  root.left = invertTree(root.right);\n  root.right = invertTree(temp);\n  return root;\n}",
          "python": "def invertTree(root):\n    if not root: return None\n    root.left, root.right = invertTree(root.right), invertTree(root.left)\n    return root"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 4,
                "left": {
                  "val": 2
                },
                "right": {
                  "val": 7
                }
              }
            ],
            "expected": {
              "val": 4,
              "left": {
                "val": 7
              },
              "right": {
                "val": 2
              }
            },
            "description": "Swap 2 and 7"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start pre-order traversal at root 4. We visit each node and immediately swap its left and right children. Push invert(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [],
              "paramBadges": {
                "4": "⇄"
              },
              "activeEdges": [],
              "callStack": [
                "invert(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "action",
                "start"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Node 4 is not null. Base case does not trigger.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                4
              ],
              "paramBadges": {
                "4": "⇄"
              },
              "activeEdges": [],
              "callStack": [
                "invert(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "is_null",
                "false"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap left <-> right at root 4: left child (2) and right child (7) trade places. Subtree 7 is now left child, subtree 2 is now right child.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                4
              ],
              "paramBadges": {
                "4": "⇄"
              },
              "activeEdges": [],
              "callStack": [
                "invert(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                4
              ],
              [
                "old left",
                2
              ],
              [
                "old right",
                7
              ],
              [
                "new left",
                7
              ],
              [
                "new right",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse into new LEFT child 7. Call invert(7). Push invert(7).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                7
              ],
              [
                "parent",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Node 7 is not null.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                7
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                7
              ],
              [
                "is_null",
                "false"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap left <-> right at node 7: child 6 and child 9 trade places. New left is 9, new right is 6.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                7
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                7
              ],
              [
                "old left",
                6
              ],
              [
                "old right",
                9
              ],
              [
                "new left",
                9
              ],
              [
                "new right",
                6
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse into new left child 9. Call invert(9). Push invert(9).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                7
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄",
                "9": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  9
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                9
              ],
              [
                "parent",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap children of leaf 9: null <-> null.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                7,
                9
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄",
                "9": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  9
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                9
              ],
              [
                "swap",
                "null <-> null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Left of 9 is null -> return.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                7,
                9
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄",
                "9": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  9
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 9",
                "null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Right of 9 is null -> return.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                4,
                7,
                9
              ],
              "paramBadges": {
                "4": "⇄",
                "7": "⇄",
                "9": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  9
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(9)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "right of 9",
                "null"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Leaf 9 fully inverted. Return and pop invert(9).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                7,
                9
              ],
              "returnedValues": {
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 9",
                "done"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: In node 7, recurse into new RIGHT child 6. Call invert(6). Push invert(6).",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                4,
                7,
                9
              ],
              "returnedValues": {
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "6": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  6
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(6)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                6
              ],
              [
                "parent",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap children of leaf 6: null <-> null.",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "6": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  6
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(6)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                6
              ],
              [
                "swap",
                "null <-> null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Left of 6 is null -> return.",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "6": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  6
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(6)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 6",
                "null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Right of 6 is null -> return.",
            "tree": {
              "activeNode": 6,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "6": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ],
                [
                  7,
                  6
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)",
                "invert(6)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "right of 6",
                "null"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Leaf 6 fully inverted. Return and pop invert(6).",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "6": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄",
                "7": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  7
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(7)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 6",
                "done"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Subtree 7 fully inverted. Return and pop invert(7). Back at root 4.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄"
              },
              "activeEdges": [],
              "callStack": [
                "invert(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "subtree 7",
                "mirrored"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap left <-> right at node 2: its left (1) and right (3) trade places. The two subtrees physically slide across, that single line is the whole algorithm; everything else is just visiting every node so this line runs once each.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                4,
                7,
                9,
                6
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "old left",
                1
              ],
              [
                "old right",
                3
              ],
              [
                "new left",
                3
              ],
              [
                "new right",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: In node 2, recurse into new left child 3. Call invert(3). Push invert(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "3": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "parent",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap children of leaf 3: null <-> null.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "3": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "swap",
                "null <-> null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Left of 3 is null -> return.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "3": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "left of 3",
                "null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Right of 3 is null -> return.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3
              ],
              "returnedValues": {
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "3": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(3)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "right of 3",
                "null"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Leaf 3 fully inverted. Return and pop invert(3).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3
              ],
              "returnedValues": {
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 3",
                "done"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Line 5: In node 2, recurse into new right child 1. Call invert(1). Push invert(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3
              ],
              "returnedValues": {
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "1": "⇄",
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  1
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(1)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "parent",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Swap children of leaf 1: null <-> null.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3,
                1
              ],
              "returnedValues": {
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "1": "⇄",
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  1
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(1)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "swap",
                "null <-> null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Children of 1 are null -> return.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3,
                1
              ],
              "returnedValues": {
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "1": "⇄",
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ],
                [
                  2,
                  1
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)",
                "invert(1)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "children of 1",
                "null"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Leaf 1 fully inverted. Return and pop invert(1).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓",
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "2": "⇄",
                "4": "⇄"
              },
              "activeEdges": [
                [
                  4,
                  2
                ]
              ],
              "callStack": [
                "invert(4)",
                "invert(2)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "node 1",
                "done"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Subtree 2 fully inverted. Return and pop invert(2).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {
                "4": "⇄"
              },
              "activeEdges": [],
              "callStack": [
                "invert(4)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "vars": [
              [
                "subtree 2",
                "mirrored"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Entire binary tree inverted! Return root node 4.",
            "tree": {
              "visitedNodes": [
                4,
                7,
                9,
                6,
                2,
                3,
                1
              ],
              "returnedValues": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "6": "✓",
                "7": "✓",
                "9": "✓"
              },
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 4,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 7,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 3,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 6,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 9,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 4,
                  "to": 2
                },
                {
                  "from": 4,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 1
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 7,
                  "to": 6
                },
                {
                  "from": 7,
                  "to": 9
                }
              ]
            },
            "best": {
              "label": "Tree Fully Inverted"
            },
            "vars": [
              [
                "status",
                "COMPLETE"
              ],
              [
                "root",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "same-tree",
    "patternId": "dfs",
    "title": "Same Tree",
    "subtitle": "Lockstep pre-order DFS over both trees",
    "kind": "problem",
    "leetcode": {
      "id": 100,
      "slug": "same-tree",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft"
    ],
    "statement": "Given the roots of two binary trees p and q, return true if they are structurally identical and every corresponding pair of nodes has the same value.",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2
      },
      "right": {
        "val": 3
      }
    },
    "approaches": [
      {
        "id": "lockstep-dfs",
        "label": "Recursive lockstep DFS",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "same(p, q):",
          "    if p is null and q is null: return true     // both empty = identical",
          "    if p is null or q is null: return false     // shape mismatch",
          "    if p.val != q.val: return false             // value mismatch",
          "    return same(p.left, q.left) AND same(p.right, q.right)",
          "// answer = same(p, q)"
        ],
        "starterCode": {
          "javascript": "function isSameTree(p, q) {\n  if (!p && !q) return true;\n  if (!p || !q || p.val !== q.val) return false;\n  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n}",
          "python": "def isSameTree(p, q):\n    if not p and not q: return True\n    if not p or not q or p.val != q.val: return False\n    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)"
        },
        "solutionCode": {
          "javascript": "function isSameTree(p, q) {\n  if (!p && !q) return true;\n  if (!p || !q || p.val !== q.val) return false;\n  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n}",
          "python": "def isSameTree(p, q):\n    if not p and not q: return True\n    if not p or not q or p.val != q.val: return False\n    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2
                },
                "right": {
                  "val": 3
                }
              },
              {
                "val": 1,
                "left": {
                  "val": 2
                },
                "right": {
                  "val": 3
                }
              }
            ],
            "expected": true,
            "description": "Identical trees"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start lockstep pre-order DFS on roots p(1) and q(1). Both trees will be compared simultaneously.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "paramBadges": {
                "1": "q=1"
              },
              "activeEdges": [],
              "callStack": [
                "same(1, 1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "p.val",
                1
              ],
              [
                "q.val",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Neither p nor q is null.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "q=1 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "same(1, 1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "null_check",
                "passed"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Values match: p.val == q.val (1 == 1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "q=1 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "same(1, 1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "values_match",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Recurse LEFT into p.left (2) and q.left (2). Call same(2, 2). Push same(2, 2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "2": "q=2"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(2, 2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "p.left",
                2
              ],
              [
                "q.left",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Values match: p.val == q.val (2 == 2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "2": "q=2 ✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(2, 2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "p.val",
                2
              ],
              [
                "q.val",
                2
              ],
              [
                "match",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both subtrees of 2 reported back: left=true, right=true. same(2) = left AND right = true. Return true to the parent and pop this frame.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "2": "q=2 ✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(2, 2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "left",
                "true"
              ],
              [
                "right",
                "true"
              ],
              [
                "same(2)",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pop same(2, 2). Left subtree of root matches (left = true).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "q=1 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "same(1, 1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "left_result",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Now recurse RIGHT into p.right (3) and q.right (3). Call same(3, 3). Push same(3, 3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "3": "q=3"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(3, 3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "p.right",
                3
              ],
              [
                "q.right",
                3
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Values match: p.val == q.val (3 == 3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "3": "q=3 ✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(3, 3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "p.val",
                3
              ],
              [
                "q.val",
                3
              ],
              [
                "match",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Both subtrees of 3 are null -> both report true. same(3) = true. Pop same(3, 3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3
              ],
              "paramBadges": {
                "1": "q=1 ✓",
                "3": "q=3 ✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "same(1, 1)",
                "same(3, 3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "left",
                "true"
              ],
              [
                "right",
                "true"
              ],
              [
                "same(3)",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Back at root 1: left=true AND right=true -> same(1) = true.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                3
              ],
              "paramBadges": {
                "1": "q=1 ✓"
              },
              "activeEdges": [],
              "callStack": [
                "same(1, 1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "vars": [
              [
                "left",
                "true"
              ],
              [
                "right",
                "true"
              ],
              [
                "same(1)",
                "true"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop same(1, 1). Trees P and Q are completely identical in structure and values. Return true.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3
              ],
              "paramBadges": {},
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                }
              ]
            },
            "best": {
              "label": "Trees are Identical (true)"
            },
            "vars": [
              [
                "result",
                "true"
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-tree",
    "patternId": "dfs",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "subtitle": "Post-order DFS, bubble a target up, split point wins",
    "kind": "problem",
    "leetcode": {
      "id": 236,
      "slug": "lowest-common-ancestor-of-a-binary-tree",
      "difficulty": "Medium"
    },
    "companies": [
      "Facebook",
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "statement": "Given the root of a binary tree and two nodes p and q, return their lowest common ancestor: the deepest node that has both p and q as descendants (a node may be a descendant of itself).",
    "visualType": "tree",
    "initialInput": {
      "val": 3,
      "left": {
        "val": 5,
        "left": {
          "val": 6
        },
        "right": {
          "val": 2,
          "left": {
            "val": 7
          },
          "right": {
            "val": 4
          }
        }
      },
      "right": {
        "val": 1,
        "left": {
          "val": 0
        },
        "right": {
          "val": 8
        }
      }
    },
    "approaches": [
      {
        "id": "post-order-bubble",
        "label": "Recursive DFS (bubble up)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "lca(node):",
          "    if node is null: return null",
          "    if node is p or node is q: return node  // found target",
          "    left = lca(node.left)",
          "    right = lca(node.right)",
          "    if left and right: return node          // split point: this is LCA",
          "    return left or right                    // carry target up",
          "// answer = lca(root)"
        ],
        "starterCode": {
          "javascript": "function lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const L = lowestCommonAncestor(root.left, p, q);\n  const R = lowestCommonAncestor(root.right, p, q);\n  if (L && R) return root;\n  return L || R;\n}",
          "python": "def lowestCommonAncestor(root, p, q):\n    if not root or root == p or root == q: return root\n    L = lowestCommonAncestor(root.left, p, q)\n    R = lowestCommonAncestor(root.right, p, q)\n    if L and R: return root\n    return L or R"
        },
        "solutionCode": {
          "javascript": "function lowestCommonAncestor(root, p, q) {\n  if (!root || root === p || root === q) return root;\n  const L = lowestCommonAncestor(root.left, p, q);\n  const R = lowestCommonAncestor(root.right, p, q);\n  if (L && R) return root;\n  return L || R;\n}",
          "python": "def lowestCommonAncestor(root, p, q):\n    if not root or root == p or root == q: return root\n    L = lowestCommonAncestor(root.left, p, q)\n    R = lowestCommonAncestor(root.right, p, q)\n    if L and R: return root\n    return L or R"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 3,
                "left": {
                  "val": 5
                },
                "right": {
                  "val": 1
                }
              },
              5,
              1
            ],
            "expected": 3,
            "description": "LCA of 5 and 1 is 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "We want the Lowest Common Ancestor of p = 5 and q = 1: the deepest node that has BOTH as descendants (a node may be its own descendant). Both targets stay highlighted so you can watch us locate them. The trick is one post-order DFS that \"bubbles up\" a signal: each call returns a target it has seen, and the FIRST node that hears back a non-null from BOTH sides is the answer.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [],
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "p",
                5
              ],
              [
                "q",
                1
              ],
              [
                "goal",
                "deepest common ancestor"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Call lca(3) on root. Push lca(3) onto stack.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3
              ],
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [],
              "callStack": [
                "lca(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "node",
                3
              ],
              [
                "target p",
                5
              ],
              [
                "target q",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into node 5. Call lca(5). Push lca(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                3
              ],
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "lca(3)",
                "lca(5)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "node",
                5
              ],
              [
                "matches",
                "node == p (5)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: node 5 is target p! Immediately return node 5. No need to explore below 5 since if q was below 5, 5 would still be their LCA.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                3,
                5
              ],
              "returnedValues": {
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "lca(3)",
                "lca(5)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "found target",
                "p = 5"
              ],
              [
                "return",
                "node 5"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop lca(5). Left subtree of root 3 returned node 5. Now recurse RIGHT into node 1. Call lca(1). Push lca(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                3,
                5
              ],
              "returnedValues": {
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "lca(3)",
                "lca(1)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "left result",
                "node 5"
              ],
              [
                "node",
                1
              ],
              [
                "matches",
                "node == q (1)"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Line 3: node 1 is target q! Immediately return node 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                3,
                5,
                1
              ],
              "returnedValues": {
                "1": "1",
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [
                [
                  3,
                  1
                ]
              ],
              "callStack": [
                "lca(3)",
                "lca(1)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "found target",
                "q = 1"
              ],
              [
                "return",
                "node 1"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Line 6: Back at root 3. Left returned node 5 (non-null) AND Right returned node 1 (non-null). Both branches found a target! Root 3 is the SPLIT POINT: Root 3 is the Lowest Common Ancestor!",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3,
                5,
                1
              ],
              "returnedValues": {
                "1": "1",
                "3": "LCA",
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [],
              "callStack": [
                "lca(3)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "left",
                "node 5"
              ],
              [
                "right",
                "node 1"
              ],
              [
                "LCA",
                3
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Root 3 returns itself (node 3) as the LCA. Pop lca(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                3,
                5,
                1
              ],
              "returnedValues": {
                "1": "1",
                "3": "LCA",
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "vars": [
              [
                "LCA",
                3
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Post-order LCA search complete! The Lowest Common Ancestor of node 5 and node 1 is node 3.",
            "tree": {
              "visitedNodes": [
                3,
                5,
                1
              ],
              "returnedValues": {
                "1": "1",
                "3": "LCA",
                "5": "5"
              },
              "paramBadges": {
                "1": "q",
                "5": "p"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 3,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 5,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 1,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 6,
                  "x": 55,
                  "y": 205
                },
                {
                  "id": 2,
                  "x": 135,
                  "y": 205
                },
                {
                  "id": 0,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 8,
                  "x": 285,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 110,
                  "y": 265
                },
                {
                  "id": 4,
                  "x": 160,
                  "y": 265
                }
              ],
              "edges": [
                {
                  "from": 3,
                  "to": 5
                },
                {
                  "from": 3,
                  "to": 1
                },
                {
                  "from": 5,
                  "to": 6
                },
                {
                  "from": 5,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 7
                },
                {
                  "from": 2,
                  "to": 4
                },
                {
                  "from": 1,
                  "to": 0
                },
                {
                  "from": 1,
                  "to": 8
                }
              ]
            },
            "best": {
              "label": "LCA: Node 3"
            },
            "vars": [
              [
                "answer",
                3
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "patternId": "dfs",
    "title": "Binary Tree Maximum Path Sum",
    "subtitle": "Post-order gains · clamp negative arms",
    "kind": "problem",
    "leetcode": {
      "id": 124,
      "slug": "binary-tree-maximum-path-sum",
      "difficulty": "Hard"
    },
    "companies": [
      "Facebook",
      "Amazon",
      "Google",
      "DoorDash"
    ],
    "statement": "Given the root of a binary tree, return the maximum sum of any non-empty path. A path is a sequence of connected nodes and need not pass through the root.",
    "visualType": "tree",
    "initialInput": {
      "val": -10,
      "left": {
        "val": 9
      },
      "right": {
        "val": 20,
        "left": {
          "val": 15
        },
        "right": {
          "val": 7
        }
      }
    },
    "approaches": [
      {
        "id": "post-order-gains",
        "label": "Recursive DFS (post-order gain + global max)",
        "complexity": {
          "time": "O(N)",
          "space": "O(H)"
        },
        "pseudocode": [
          "best = -∞",
          "gain(node):",
          "    if node is null: return 0",
          "    L = max(gain(node.left), 0)    // drop negative arm",
          "    R = max(gain(node.right), 0)",
          "    best = max(best, node.val + L + R)  // bend here",
          "    return node.val + max(L, R)    // extend parent",
          "// answer = best"
        ],
        "starterCode": {
          "javascript": "function maxPathSum(root) {\n  let maxSum = -Infinity;\n  function maxGain(node) {\n    if (!node) return 0;\n    const L = Math.max(0, maxGain(node.left));\n    const R = Math.max(0, maxGain(node.right));\n    maxSum = Math.max(maxSum, node.val + L + R);\n    return node.val + Math.max(L, R);\n  }\n  maxGain(root);\n  return maxSum;\n}",
          "python": "def maxPathSum(root):\n    max_sum = float('-inf')\n    def max_gain(node):\n        nonlocal max_sum\n        if not node: return 0\n        L = max(0, max_gain(node.left))\n        R = max(0, max_gain(node.right))\n        max_sum = max(max_sum, node.val + L + R)\n        return node.val + max(L, R)\n    max_gain(root)\n    return max_sum"
        },
        "solutionCode": {
          "javascript": "function maxPathSum(root) {\n  let maxSum = -Infinity;\n  function maxGain(node) {\n    if (!node) return 0;\n    const L = Math.max(0, maxGain(node.left));\n    const R = Math.max(0, maxGain(node.right));\n    maxSum = Math.max(maxSum, node.val + L + R);\n    return node.val + Math.max(L, R);\n  }\n  maxGain(root);\n  return maxSum;\n}",
          "python": "def maxPathSum(root):\n    max_sum = float('-inf')\n    def max_gain(node):\n        nonlocal max_sum\n        if not node: return 0\n        L = max(0, max_gain(node.left))\n        R = max(0, max_gain(node.right))\n        max_sum = max(max_sum, node.val + L + R)\n        return node.val + max(L, R)\n    max_gain(root)\n    return max_sum"
        },
        "testCases": [
          {
            "input": [
              {
                "val": -10,
                "left": {
                  "val": 9
                },
                "right": {
                  "val": 20,
                  "left": {
                    "val": 15
                  },
                  "right": {
                    "val": 7
                  }
                }
              }
            ],
            "expected": 42,
            "description": "Path [15, 20, 7] has sum 42"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start post-order traversal at root -10. We compute maximum gain each branch can contribute, while tracking global best path sum. best = -∞.",
            "tree": {
              "activeNode": -10,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "gain(-10)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "call",
                "gain(-10)"
              ],
              [
                "stack",
                1
              ],
              [
                "global best",
                "-∞"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Call gain(-10). Recurse into left child 9. Push gain(9).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                -10
              ],
              "activeEdges": [
                [
                  -10,
                  9
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(9)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "call",
                "gain(9)"
              ],
              [
                "stack",
                2
              ],
              [
                "global best",
                "-∞"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Node 9 left child is null -> gain 0. Right child is null -> gain 0. L=0, R=0.",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                -10,
                9
              ],
              "activeEdges": [
                [
                  -10,
                  9
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(9)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "L",
                0
              ],
              [
                "R",
                0
              ],
              [
                "global best",
                "-∞"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At node 9: arch sum = 9 + 0 + 0 = 9. Update global best = max(-∞, 9) = 9!",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                -10,
                9
              ],
              "returnedValues": {
                "9": "9"
              },
              "activeEdges": [
                [
                  -10,
                  9
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(9)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "arch sum",
                9
              ],
              [
                "global best",
                9
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Node 9 returns gain = 9 + max(0, 0) = 9 to parent -10. Pop gain(9).",
            "tree": {
              "activeNode": 9,
              "visitedNodes": [
                -10,
                9
              ],
              "returnedValues": {
                "9": "9"
              },
              "activeEdges": [],
              "callStack": [
                "gain(-10)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "return gain",
                9
              ],
              [
                "global best",
                9
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "In root -10: left gain L = max(9, 0) = 9. Now recurse RIGHT into node 20. Push gain(20).",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                -10,
                9
              ],
              "returnedValues": {
                "9": "9"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "call",
                "gain(20)"
              ],
              [
                "stack",
                2
              ],
              [
                "global best",
                9
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In node 20: recurse LEFT into leaf 15. Call gain(15). Push gain(15).",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                -10,
                9,
                20
              ],
              "returnedValues": {
                "9": "9"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)",
                "gain(15)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "call",
                "gain(15)"
              ],
              [
                "stack",
                3
              ],
              [
                "global best",
                9
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At leaf 15: children are null (L=0, R=0). Arch sum = 15. Update global best = max(9, 15) = 15!",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                -10,
                9,
                20,
                15
              ],
              "returnedValues": {
                "9": "9",
                "15": "15"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ],
                [
                  20,
                  15
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)",
                "gain(15)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "arch sum",
                15
              ],
              [
                "global best",
                15
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 15 returns gain = 15 to parent 20. Pop gain(15).",
            "tree": {
              "activeNode": 15,
              "visitedNodes": [
                -10,
                9,
                20,
                15
              ],
              "returnedValues": {
                "9": "9",
                "15": "15"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "return gain",
                15
              ],
              [
                "global best",
                15
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Call gain(7). It must hear both children's gains before it can report its own. Recurse down.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                -10,
                9,
                20,
                15
              ],
              "returnedValues": {
                "9": "9",
                "15": "15"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ],
                [
                  20,
                  7
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)",
                "gain(7)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "call",
                "gain(7)"
              ],
              [
                "stack",
                3
              ],
              [
                "global best",
                15
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At leaf 7: children are null. Arch sum = 7. best remains 15. Returns gain = 7.",
            "tree": {
              "activeNode": 7,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ],
                [
                  20,
                  7
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)",
                "gain(7)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "arch sum",
                7
              ],
              [
                "global best",
                15
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Leaf 7 returns gain = 7 to parent 20. Pop gain(7).",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "L(20)",
                15
              ],
              [
                "R(20)",
                7
              ],
              [
                "global best",
                15
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "At node 20: L = 15, R = 7. Arch sum bending at 20 = 20 + 15 + 7 = 42! Update global best = max(15, 42) = 42!",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15",
                "20": "35"
              },
              "activeEdges": [
                [
                  -10,
                  20
                ]
              ],
              "callStack": [
                "gain(-10)",
                "gain(20)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "arch bending at 20",
                42
              ],
              [
                "global best",
                42
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Node 20 returns gain = 20 + max(15, 7) = 35 to root -10. Pop gain(20).",
            "tree": {
              "activeNode": 20,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15",
                "20": "35"
              },
              "activeEdges": [],
              "callStack": [
                "gain(-10)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "return gain",
                35
              ],
              [
                "global best",
                42
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Back at root -10: L = 9, R = 35. Arch sum through root = -10 + 9 + 35 = 34. Global best remains 42!",
            "tree": {
              "activeNode": -10,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15",
                "20": "35",
                "-10": "25"
              },
              "activeEdges": [],
              "callStack": [
                "gain(-10)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "arch through root",
                34
              ],
              [
                "global best",
                42
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Root -10 returns gain = -10 + max(9, 35) = 25. Pop gain(-10).",
            "tree": {
              "activeNode": -10,
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15",
                "20": "35",
                "-10": "25"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "vars": [
              [
                "return gain",
                25
              ],
              [
                "global best",
                42
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Traversal complete! The maximum path sum in the binary tree is 42 (the path 15 -> 20 -> 7). Return best = 42.",
            "tree": {
              "visitedNodes": [
                -10,
                9,
                20,
                15,
                7
              ],
              "returnedValues": {
                "7": "7",
                "9": "9",
                "15": "15",
                "20": "35"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": -10,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 9,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 20,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 15,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 7,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": -10,
                  "to": 9
                },
                {
                  "from": -10,
                  "to": 20
                },
                {
                  "from": 20,
                  "to": 15
                },
                {
                  "from": 20,
                  "to": 7
                }
              ]
            },
            "best": {
              "label": "Max Path Sum: 42"
            },
            "vars": [
              [
                "answer",
                42
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "patternId": "dfs",
    "title": "Serialize and Deserialize Binary Tree",
    "subtitle": "Pre-order with null markers, then rebuild from the stream",
    "kind": "problem",
    "leetcode": {
      "id": 297,
      "slug": "serialize-and-deserialize-binary-tree",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Facebook",
      "Microsoft",
      "Uber"
    ],
    "statement": "Design an algorithm to serialize a binary tree to a string and deserialize that string back into the identical tree. There is no restriction on the encoding/decoding format.",
    "visualType": "tree",
    "initialInput": {
      "val": 1,
      "left": {
        "val": 2
      },
      "right": {
        "val": 3,
        "left": {
          "val": 4
        },
        "right": {
          "val": 5
        }
      }
    },
    "approaches": [
      {
        "id": "preorder-stream",
        "label": "Serialize - pre-order with null markers",
        "complexity": {
          "time": "O(N)",
          "space": "O(N)"
        },
        "pseudocode": [
          "serialize(node):",
          "    if node: append(node.val)         // record on arrival",
          "    else:    append(\"#\"); return      // null marker kept",
          "    serialize(node.left); serialize(node.right)",
          "// result = \"1,2,#,#,3,4,#,#,5,#,#\""
        ],
        "starterCode": {
          "javascript": "function serialize(root) {\n  if (!root) return '#';\n  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);\n}\nfunction deserialize(data) {\n  const tokens = data.split(',');\n  let i = 0;\n  function build() {\n    if (tokens[i] === '#') { i++; return null; }\n    const node = { val: Number(tokens[i++]) };\n    node.left = build();\n    node.right = build();\n    return node;\n  }\n  return build();\n}",
          "python": "def serialize(root):\n    if not root: return '#'\n    return f\"{root.val},{serialize(root.left)},{serialize(root.right)}\"\ndef deserialize(data):\n    tokens = iter(data.split(','))\n    def build():\n        v = next(tokens)\n        if v == '#': return None\n        node = {'val': int(v)}\n        node['left'] = build()\n        node['right'] = build()\n        return node\n    return build()"
        },
        "solutionCode": {
          "javascript": "function serialize(root) {\n  if (!root) return '#';\n  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);\n}\nfunction deserialize(data) {\n  const tokens = data.split(',');\n  let i = 0;\n  function build() {\n    if (tokens[i] === '#') { i++; return null; }\n    const node = { val: Number(tokens[i++]) };\n    node.left = build();\n    node.right = build();\n    return node;\n  }\n  return build();\n}",
          "python": "def serialize(root):\n    if not root: return '#'\n    return f\"{root.val},{serialize(root.left)},{serialize(root.right)}\"\ndef deserialize(data):\n    tokens = iter(data.split(','))\n    def build():\n        v = next(tokens)\n        if v == '#': return None\n        node = {'val': int(v)}\n        node['left'] = build()\n        node['right'] = build()\n        return node\n    return build()"
        },
        "testCases": [
          {
            "input": [
              {
                "val": 1,
                "left": {
                  "val": 2
                },
                "right": {
                  "val": 3
                }
              }
            ],
            "expected": "1,2,#,#,3,#,#",
            "description": "Serialized preorder string"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start pre-order serialization at root 1. We record each node value upon arrival and encode null children as \"#\".",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "serialize(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                1
              ],
              [
                "append",
                "1"
              ],
              [
                "serialized",
                "1"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append \"1\" to string. Now recurse into left subtree of 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "serialize(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                1
              ],
              [
                "append",
                "1"
              ],
              [
                "serialized",
                "1"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Line 4: Recurse LEFT into node 2. Call serialize(2). Push serialize(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1
              ],
              "paramBadges": {
                "1": "✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                2
              ],
              [
                "append",
                "2"
              ],
              [
                "serialized",
                "1,2"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Append \"2\" to serialized stream. Recurse into left child of 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                2
              ],
              [
                "append",
                "2"
              ],
              [
                "serialized",
                "1,2"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Left child of 2 is null -> append \"#\". Return.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "left of 2"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right child of 2 is null -> append \"#\". Return. Subtree 2 serialized.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "right of 2"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#,#"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Visit node 4. Pre-order means we record it the moment we arrive: append \"4\" to the string, then descend into its left subtree first, then its right.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                3
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)",
                "serialize(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                4
              ],
              [
                "append",
                "4"
              ],
              [
                "serialized",
                "1,2,#,#,3,4"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Left child of 4 is null -> append \"#\".",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                3,
                4
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)",
                "serialize(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "left of 4"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#,#,3,4,#"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right child of 4 is null -> append \"#\". Pop serialize(4).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3,
                4
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "right of 4"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#,#,3,4,#,#"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "In node 3: recurse RIGHT into node 5. Call serialize(5). Push serialize(5).",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                3,
                4
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)",
                "serialize(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "visit",
                5
              ],
              [
                "append",
                "5"
              ],
              [
                "serialized",
                "1,2,#,#,3,4,#,#,5"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Left child of 5 is null -> append \"#\".",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)",
                "serialize(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "left of 5"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#,#,3,4,#,#,5,#"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Right child of 5 is null -> append \"#\". Pop serialize(5).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "serialize(1)",
                "serialize(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "null child",
                "right of 5"
              ],
              [
                "append",
                "#"
              ],
              [
                "serialized",
                "1,2,#,#,3,4,#,#,5,#,#"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Subtree 3 complete. Pop serialize(3). Back at root 1.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "serialize(1)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "subtree 3",
                "done"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Serialization complete! Output string: \"1,2,#,#,3,4,#,#,5,#,#\".",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "paramBadges": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "best": {
              "label": "Serialized: 1,2,#,#,3,4,#,#,5,#,#"
            },
            "vars": [
              [
                "result",
                "1,2,#,#,3,4,#,#,5,#,#"
              ],
              [
                "status",
                "SERIALIZATION DONE"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Now starting Deserialization: read from token stream [\"1\", \"2\", \"#\", \"#\", \"3\", \"4\", \"#\", \"#\", \"5\", \"#\", \"#\"].",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "deserialize()"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "token",
                "1"
              ],
              [
                "action",
                "create root 1"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Token \"1\": create node 1. Recurse left to build node.left.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1
              ],
              "activeEdges": [],
              "callStack": [
                "deserialize()",
                "deserialize(left)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                1
              ],
              [
                "building",
                "node 1 left"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Token \"2\": create node 2. Connect 1 -> 2. Recurse left.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(2)",
                "deserialize(left)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node",
                2
              ],
              [
                "building",
                "node 2 left"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Token \"#\": return null. node.left of 2 = null. Now deserialize node.right of 2.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(2)",
                "deserialize(right)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "token",
                "#"
              ],
              [
                "node 2 left",
                "null"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Token \"#\": return null. node.right of 2 = null. Node 2 complete.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                1,
                2
              ],
              "returnedValues": {
                "2": "✓"
              },
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(2)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 2",
                "fully built"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Back at root 1: left subtree 2 built. Token \"3\": create node 3. Connect 1 -> 3. Recurse left.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3
              ],
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)",
                "deserialize(left)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "token",
                "3"
              ],
              [
                "node",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Token \"4\": create node 4. Connect 3 -> 4. Recurse left.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)",
                "deserialize(4)",
                "deserialize(left)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "token",
                "4"
              ],
              [
                "node",
                4
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Tokens \"#\", \"#\": node 4 children are null. Node 4 complete.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                1,
                2,
                3,
                4
              ],
              "returnedValues": {
                "4": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)",
                "deserialize(4)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 4",
                "fully built"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Back at node 3. Token \"5\": create node 5. Connect 3 -> 5. Recurse left.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)",
                "deserialize(5)",
                "deserialize(left)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "token",
                "5"
              ],
              [
                "node",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Tokens \"#\", \"#\": node 5 children are null. Node 5 complete.",
            "tree": {
              "activeNode": 5,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "returnedValues": {
                "5": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  3,
                  5
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)",
                "deserialize(5)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "node 5",
                "fully built"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 3 complete. Subtree 3 fully reconstructed.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "returnedValues": {
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "callStack": [
                "deserialize()",
                "deserialize(3)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "subtree 3",
                "fully built"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Root 1 complete. Both left and right subtrees reconnected.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "returnedValues": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "deserialize()"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "vars": [
              [
                "root 1",
                "fully built"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Deserialization complete! Identical binary tree reconstructed from string.",
            "tree": {
              "visitedNodes": [
                1,
                2,
                3,
                4,
                5
              ],
              "returnedValues": {
                "1": "✓",
                "2": "✓",
                "3": "✓",
                "4": "✓",
                "5": "✓"
              },
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 1,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 2,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 4,
                  "x": 205,
                  "y": 205
                },
                {
                  "id": 5,
                  "x": 285,
                  "y": 205
                }
              ],
              "edges": [
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 1,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                },
                {
                  "from": 3,
                  "to": 5
                }
              ]
            },
            "best": {
              "label": "Tree Fully Rebuilt"
            },
            "vars": [
              [
                "status",
                "COMPLETE"
              ],
              [
                "root",
                1
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "graphs-overview",
    "patternId": "dfs",
    "title": "Graphs Overview",
    "subtitle": "Nodes, edges, and why DFS needs a visited set",
    "kind": "intro",
    "statement": "Unlike trees, general graphs can have multiple paths between vertices and contain cycles. A `visited` set is essential in Graph DFS to prevent infinite loops and avoid re-processing nodes.",
    "visualType": "graph",
    "initialInput": [
      [
        0,
        1
      ],
      [
        0,
        2
      ],
      [
        1,
        3
      ],
      [
        2,
        3
      ]
    ],
    "approaches": [
      {
        "id": "graph-dfs-visited",
        "label": "DFS with a visited set",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V)"
        },
        "pseudocode": [
          "dfs(graph):",
          "    visited = {}",
          "    dfs(u):",
          "        if u in visited: return        // never re-enter",
          "        mark u visited",
          "        for v in adj[u]: dfs(v)",
          "        return"
        ],
        "starterCode": {
          "javascript": "function graphDfs(adj, start) {\n  const visited = new Set();\n  function dfs(u) {\n    visited.add(u);\n    for (let v of adj[u] || []) {\n      if (!visited.has(v)) dfs(v);\n    }\n  }\n  dfs(start);\n  return Array.from(visited);\n}",
          "python": "def graphDfs(adj, start):\n    visited = set()\n    def dfs(u):\n        visited.add(u)\n        for v in adj.get(u, []):\n            if v not in visited:\n                dfs(v)\n    dfs(start)\n    return list(visited)"
        },
        "solutionCode": {
          "javascript": "function graphDfs(adj, start) {\n  const visited = new Set();\n  function dfs(u) {\n    visited.add(u);\n    for (let v of adj[u] || []) {\n      if (!visited.has(v)) dfs(v);\n    }\n  }\n  dfs(start);\n  return Array.from(visited);\n}",
          "python": "def graphDfs(adj, start):\n    visited = set()\n    def dfs(u):\n        visited.add(u)\n        for v in adj.get(u, []):\n            if v not in visited:\n                dfs(v)\n    dfs(start)\n    return list(visited)"
        },
        "testCases": [
          {
            "input": [
              {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  3
                ],
                "3": []
              },
              0
            ],
            "expected": [
              0,
              1,
              3,
              2
            ],
            "description": "Graph DFS from node 0"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "In a graph with cycles, DFS without a visited set will loop forever! We maintain a visited set to ensure each node is explored at most once.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{}"
              ],
              [
                "start",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize visited = {}. This hash set will remember every node we have already entered.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{}"
              ],
              [
                "action",
                "init visited set"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Start DFS from node 0. Call dfs(0). Push dfs(0) onto the call stack.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "call",
                "dfs(0)"
              ],
              [
                "node",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "0 is NOT visited yet. Proceed.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "check 0 in visited",
                "false"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Mark 0 visited. visited = {0}. Node 0 turns green.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0
              ],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "mark",
                0
              ],
              [
                "visited",
                "{0}"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Loop over 0's neighbours: [1, 2]. First neighbour is 1. Call dfs(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                0
              ],
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "from",
                0
              ],
              [
                "neighbour",
                1
              ],
              [
                "visited?",
                "no -> go"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "1 was NOT visited, so mark it now, paint it green. This single line is what makes the cycle safe: the next time any path leads back to 1 we will bounce off it instead of looping.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "mark",
                1
              ],
              [
                "visited",
                "{0, 1}"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Mark 1 visited. visited = {0, 1}.",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{0, 1}"
              ],
              [
                "node",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(1): look at neighbours [0, 2]. First neighbour is 0. Call dfs(0).",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  0
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "from",
                1
              ],
              [
                "neighbour",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "CYCLE BOUNCE: 0 is ALREADY in visited {0, 1}! Immediately return without exploring. Infinite loop prevented!",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  0
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "check",
                0
              ],
              [
                "in_visited",
                "YES -> RETURN"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop dfs(0) frame. Return back to dfs(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "back to",
                "dfs(1)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(1): next neighbour is 2. 2 is unvisited -> call dfs(2). Push dfs(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "from",
                1
              ],
              [
                "neighbour",
                2
              ],
              [
                "visited?",
                "no -> go"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "2 was NOT visited. Proceed to mark it.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1,
                2
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "mark",
                2
              ],
              [
                "visited",
                "{0, 1, 2}"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Mark 2 visited. visited = {0, 1, 2}.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1,
                2
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{0, 1, 2}"
              ],
              [
                "node",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(2): look at neighbours [0, 1, 3]. Check neighbour 0: ALREADY visited -> skip.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1,
                2
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "neighbour",
                0
              ],
              [
                "in_visited",
                "YES -> SKIP"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(2): check neighbour 1: ALREADY visited -> skip.",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1,
                2
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "neighbour",
                1
              ],
              [
                "in_visited",
                "YES -> SKIP"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(2): check neighbour 3. 3 is unvisited -> call dfs(3). Push dfs(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                0,
                1,
                2
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "from",
                2
              ],
              [
                "neighbour",
                3
              ],
              [
                "visited?",
                "no -> go"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Look at 3's neighbour 4. 4 is unvisited -> recurse into it.",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                0,
                1,
                2,
                3
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "from",
                3
              ],
              [
                "neighbour",
                4
              ],
              [
                "visited?",
                "no -> go"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Call dfs(4). 4 is not in visited. Push dfs(4).",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                0,
                1,
                2,
                3
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)",
                "dfs(4)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "mark",
                4
              ],
              [
                "visited",
                "{0, 1, 2, 3, 4}"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Mark 4 visited. visited = {0, 1, 2, 3, 4}. All 5 nodes are now visited!",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)",
                "dfs(4)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{0, 1, 2, 3, 4}"
              ],
              [
                "node",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(4): only neighbour is 3. 3 is ALREADY in visited set -> skip 3.",
            "tree": {
              "activeNode": 4,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ],
                [
                  3,
                  4
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)",
                "dfs(4)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "neighbour",
                3
              ],
              [
                "in_visited",
                "YES -> SKIP"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All neighbours of 4 done. Pop dfs(4) frame. Return back to dfs(3).",
            "tree": {
              "activeNode": 3,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)",
                "dfs(3)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "node 4",
                "done"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All neighbours of 3 done. Pop dfs(3) frame. Return back to dfs(2).",
            "tree": {
              "activeNode": 2,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)",
                "dfs(2)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "node 3",
                "done"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All neighbours of 2 done. Pop dfs(2) frame. Return back to dfs(1).",
            "tree": {
              "activeNode": 1,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "callStack": [
                "dfs(0)",
                "dfs(1)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "node 2",
                "done"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All neighbours of 1 done. Pop dfs(1) frame. Return back to dfs(0).",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "node 1",
                "done"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "In dfs(0): examine second neighbour 2. 2 is ALREADY in visited {0, 1, 2, 3, 4} -> skip 2.",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "dfs(0)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "neighbour",
                2
              ],
              [
                "in_visited",
                "YES -> SKIP"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All neighbours of 0 explored. Pop root frame dfs(0).",
            "tree": {
              "activeNode": 0,
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "dfs(0)",
                "pop"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Backtrack complete: every reachable node visited without infinite recursion.",
            "tree": {
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "traversal",
                "safe"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Visited set contains all 5 nodes: {0, 1, 2, 3, 4}.",
            "tree": {
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "visited",
                "{0, 1, 2, 3, 4}"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Time complexity: O(V + E) since each vertex and each edge is inspected once.",
            "tree": {
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "time",
                "O(V + E)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Space complexity: O(V) for the visited set and the recursive call stack depth.",
            "tree": {
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "vars": [
              [
                "space",
                "O(V)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Graph DFS complete! All 5 nodes safely traversed.",
            "tree": {
              "visitedNodes": [
                0,
                1,
                2,
                3,
                4
              ],
              "activeEdges": [],
              "callStack": [
                "(returned)"
              ],
              "nodes": [
                {
                  "id": 0,
                  "x": 170,
                  "y": 45
                },
                {
                  "id": 1,
                  "x": 95,
                  "y": 125
                },
                {
                  "id": 2,
                  "x": 245,
                  "y": 125
                },
                {
                  "id": 3,
                  "x": 245,
                  "y": 205
                },
                {
                  "id": 4,
                  "x": 245,
                  "y": 275
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1
                },
                {
                  "from": 1,
                  "to": 2
                },
                {
                  "from": 0,
                  "to": 2
                },
                {
                  "from": 2,
                  "to": 3
                },
                {
                  "from": 3,
                  "to": 4
                }
              ]
            },
            "best": {
              "label": "All 5 Nodes Visited Safely"
            },
            "vars": [
              [
                "visited",
                "{0, 1, 2, 3, 4}"
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
  "id": "adjacency-list",
  "patternId": "dfs",
  "title": "Adjacency List",
  "subtitle": "How to store a graph",
  "kind": "concept",
  "statement": "An Adjacency List represents a graph as a map or array of arrays where `adj[u]` stores the list of neighbors of vertex `u`. It uses optimal O(V + E) space and allows O(deg(u)) iteration.",
  "visualType": "graph",
  "initialInput": [
    [
      0,
      1
    ],
    [
      0,
      2
    ],
    [
      1,
      2
    ],
    [
      1,
      3
    ],
    [
      2,
      3
    ]
  ],
  "approaches": [
    {
      "id": "build-adj-list",
      "label": "Build & read an adjacency list",
      "complexity": {
        "time": "O(V + E)",
        "space": "O(V + E)"
      },
      "pseudocode": [
        "adj = map node -> [neighbours]",
        "for each node u:",
        "    adj[u] = []",
        "for each edge (u, v): adj[u].append(v)",
        "// traverse:",
        "for v in adj[u]: visit(v)            // read neighbours directly",
        "// matrix alternative costs O(V^2) space"
      ],
      "starterCode": {
        "javascript": "function buildAdjList(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  return adj;\n}",
        "python": "def buildAdjList(n, edges):\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n    return adj"
      },
      "solutionCode": {
        "javascript": "function buildAdjList(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n  return adj;\n}",
        "python": "def buildAdjList(n, edges):\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n    return adj"
      },
      "testCases": [
        {
          "input": [
            4,
            [
              [
                0,
                1
              ],
              [
                0,
                2
              ],
              [
                1,
                2
              ],
              [
                1,
                3
              ],
              [
                2,
                3
              ]
            ]
          ],
          "expected": [
            [
              1,
              2
            ],
            [
              0,
              2,
              3
            ],
            [
              0,
              1,
              3
            ],
            [
              1,
              2
            ]
          ],
          "description": "4-node adjacency list"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "How do we store a graph in code? The adjacency list keeps, for each node, a list of its direct neighbours. It uses O(V + E) memory, only the edges that exist, which is ideal for sparse graphs. The alternative, an adjacency matrix, is a V×V grid costing O(V^2) whether or not the edges exist.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeEdges": [],
            "adjList": {
              "0": [],
              "1": [],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "nodes",
              4
            ],
            [
              "edges",
              5
            ],
            [
              "list",
              "O(V+E)"
            ],
            [
              "matrix",
              "O(V^2)"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "We initialize empty lists for each vertex u. Starting with vertex u = 0, we will collect all incident edges.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 0,
            "activeEdges": [],
            "adjList": {
              "0": [],
              "1": [],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              0
            ],
            [
              "adj[0]",
              "[]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 0-1 exists, so append 1 to adj[0]. We light up edge (0-1) and neighbour 1 as the list fills in.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 0,
            "activeEdges": [
              [
                0,
                1
              ]
            ],
            "adjList": {
              "0": [
                1
              ],
              "1": [],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              0
            ],
            [
              "v",
              1
            ],
            [
              "adj[0]",
              "[1]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 0-2 exists, so append 2 to adj[0]. Vertex 0 now has recorded both of its neighbours [1, 2].",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 0,
            "activeEdges": [
              [
                0,
                2
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              0
            ],
            [
              "v",
              2
            ],
            [
              "adj[0]",
              "[1, 2]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Next, we move to vertex u = 1. We prepare adj[1] to collect all adjacent edges connected to vertex 1.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 1,
            "visitedNodes": [
              0
            ],
            "activeEdges": [],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              1
            ],
            [
              "adj[1]",
              "[]"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Edge 1-0 exists, so append 0 to adj[1]. We light up the edge and the neighbour as the row fills in. (Because the graph is undirected, 0 will also list 1 in its own row.)",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 1,
            "visitedNodes": [
              0
            ],
            "activeEdges": [
              [
                0,
                1
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0
              ],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "adj[1]",
              "[0]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 1-2 exists across the diagonal, so append 2 to adj[1]. Lighting up edge (1-2) and neighbour 2.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 1,
            "visitedNodes": [
              0
            ],
            "activeEdges": [
              [
                1,
                2
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2
              ],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              1
            ],
            [
              "v",
              2
            ],
            [
              "adj[1]",
              "[0, 2]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 1-3 exists, so append 3 to adj[1]. Node 1 has degree 3 with neighbours [0, 2, 3].",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 1,
            "visitedNodes": [
              0
            ],
            "activeEdges": [
              [
                1,
                3
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              1
            ],
            [
              "v",
              3
            ],
            [
              "adj[1]",
              "[0, 2, 3]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Next, we move to vertex u = 2 to record its neighbour list in adj[2].",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 2,
            "visitedNodes": [
              0,
              1
            ],
            "activeEdges": [],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              2
            ],
            [
              "adj[2]",
              "[]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 2-0 exists, so append 0 to adj[2]. Lighting up edge (2-0) and neighbour 0.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 2,
            "visitedNodes": [
              0,
              1
            ],
            "activeEdges": [
              [
                0,
                2
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0
              ],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "adj[2]",
              "[0]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 2-1 exists across the diagonal, so append 1 to adj[2]. Lighting up edge (2-1).",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 2,
            "visitedNodes": [
              0,
              1
            ],
            "activeEdges": [
              [
                1,
                2
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1
              ],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              2
            ],
            [
              "v",
              1
            ],
            [
              "adj[2]",
              "[0, 1]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 2-3 exists along the bottom, so append 3 to adj[2]. Vertex 2 has complete neighbours [0, 1, 3].",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 2,
            "visitedNodes": [
              0,
              1
            ],
            "activeEdges": [
              [
                2,
                3
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              2
            ],
            [
              "v",
              3
            ],
            [
              "adj[2]",
              "[0, 1, 3]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Finally, we examine vertex u = 3.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 3,
            "visitedNodes": [
              0,
              1,
              2
            ],
            "activeEdges": [],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": []
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "adj[3]",
              "[]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 3-1 exists, so append 1 to adj[3]. Lighting up edge (3-1) to neighbour 1.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 3,
            "visitedNodes": [
              0,
              1,
              2
            ],
            "activeEdges": [
              [
                1,
                3
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": [
                1
              ]
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "v",
              1
            ],
            [
              "adj[3]",
              "[1]"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Edge 3-2 exists, so append 2 to adj[3]. Vertex 3 list is now [1, 2]. Entire adjacency list is built!",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 3,
            "visitedNodes": [
              0,
              1,
              2
            ],
            "activeEdges": [
              [
                2,
                3
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": [
                1,
                2
              ]
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "v",
              2
            ],
            [
              "adj[3]",
              "[1, 2]"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "How to traverse: To find neighbours of node 1, we simply lookup adj[1] in O(1) time and iterate directly over [0, 2, 3] without scanning all V vertices.",
          "tree": {
            "title": "ADJACENCY LIST",
            "activeNode": 1,
            "visitedNodes": [
              0,
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                0,
                1
              ],
              [
                1,
                2
              ],
              [
                1,
                3
              ]
            ],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": [
                1,
                2
              ]
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "lookup",
              "adj[1]"
            ],
            [
              "neighbours",
              "[0, 2, 3]"
            ],
            [
              "time",
              "O(deg(1))"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Adjacency matrix alternative: A 4x4 matrix stores 16 entries (mostly zeros for sparse graphs), taking O(V^2) space and O(V) time to find neighbours.",
          "tree": {
            "title": "ADJACENCY LIST",
            "visitedNodes": [
              0,
              1,
              2,
              3
            ],
            "activeEdges": [],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": [
                1,
                2
              ]
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "list_space",
              "O(V + E)"
            ],
            [
              "matrix_space",
              "O(V^2)"
            ],
            [
              "winner",
              "Adjacency List"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Summary: Adjacency list is the standard graph representation for DFS/BFS algorithms due to O(V + E) space efficiency and fast direct neighbour iteration.",
          "tree": {
            "title": "ADJACENCY LIST",
            "visitedNodes": [
              0,
              1,
              2,
              3
            ],
            "activeEdges": [],
            "adjList": {
              "0": [
                1,
                2
              ],
              "1": [
                0,
                2,
                3
              ],
              "2": [
                0,
                1,
                3
              ],
              "3": [
                1,
                2
              ]
            },
            "nodes": [
              {
                "id": 0,
                "x": 60,
                "y": 60
              },
              {
                "id": 1,
                "x": 190,
                "y": 60
              },
              {
                "id": 2,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 0,
                "to": 1
              },
              {
                "from": 0,
                "to": 2
              },
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              }
            ]
          },
          "best": {
            "label": "Adjacency List Built"
          },
          "vars": [
            [
              "status",
              "COMPLETE"
            ],
            [
              "space",
              "O(V + E)"
            ],
            [
              "time",
              "O(V + E)"
            ]
          ]
        }
      ]
    }
  ]
},
  {
  "id": "clone-graph",
  "patternId": "dfs",
  "title": "Copy Graph",
  "subtitle": "Deep clone with an old->new map",
  "kind": "problem",
  "leetcode": {
    "id": 133,
    "slug": "clone-graph",
    "difficulty": "Medium"
  },
  "companies": [
    "Amazon",
    "Meta",
    "Google",
    "Microsoft"
  ],
  "statement": "Given a reference to a node in a connected undirected graph, return a deep copy of the entire graph, where each cloned node holds the same value and its own list of neighbor clones.",
  "visualType": "graph",
  "initialInput": [
    [
      2,
      4,
      3
    ],
    [
      1,
      3
    ],
    [
      2,
      4,
      1
    ],
    [
      1,
      3
    ]
  ],
  "approaches": [
    {
      "id": "dfs-clone",
      "label": "DFS with old->new hash map",
      "complexity": {
        "time": "O(V + E)",
        "space": "O(V)"
      },
      "pseudocode": [
        "map = {}                                // original -> clone",
        "clone(u):",
        "    if u in map: return map[u]",
        "    map[u] = new Node(u.val)            // store BEFORE recursing",
        "    for v in u.neighbours:",
        "        copy = clone(v)",
        "        map[u].neighbours.append(copy)",
        "    return map[u]"
      ],
      "starterCode": {
        "javascript": "function cloneGraph(node) {\n  if (!node) return null;\n  const map = new Map();\n  function dfs(curr) {\n    if (map.has(curr)) return map.get(curr);\n    const copy = { val: curr.val, neighbors: [] };\n    map.set(curr, copy);\n    for (let nei of curr.neighbors || []) copy.neighbors.push(dfs(nei));\n    return copy;\n  }\n  return dfs(node);\n}",
        "python": "def cloneGraph(node):\n    if not node: return None\n    cloned = {}\n    def dfs(curr):\n        if curr in cloned: return cloned[curr]\n        copy = {'val': curr['val'], 'neighbors': []}\n        cloned[curr] = copy\n        for nei in curr.get('neighbors', []):\n            copy['neighbors'].append(dfs(nei))\n        return copy\n    return dfs(node)"
      },
      "solutionCode": {
        "javascript": "function cloneGraph(node) {\n  if (!node) return null;\n  const map = new Map();\n  function dfs(curr) {\n    if (map.has(curr)) return map.get(curr);\n    const copy = { val: curr.val, neighbors: [] };\n    map.set(curr, copy);\n    for (let nei of curr.neighbors || []) copy.neighbors.push(dfs(nei));\n    return copy;\n  }\n  return dfs(node);\n}",
        "python": "def cloneGraph(node):\n    if not node: return None\n    cloned = {}\n    def dfs(curr):\n        if curr in cloned: return cloned[curr]\n        copy = {'val': curr['val'], 'neighbors': []}\n        cloned[curr] = copy\n        for nei in curr.get('neighbors', []):\n            copy['neighbors'].append(dfs(nei))\n        return copy\n    return dfs(node)"
      },
      "testCases": [
        {
          "input": [
            [
              [
                2,
                4,
                3
              ],
              [
                1,
                3
              ],
              [
                2,
                4,
                1
              ],
              [
                1,
                3
              ]
            ]
          ],
          "expected": [
            [
              2,
              4,
              3
            ],
            [
              1,
              3
            ],
            [
              2,
              4,
              1
            ],
            [
              1,
              3
            ]
          ],
          "description": "4-node connected undirected graph"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Copy Graph (LeetCode 133): deep-clone a connected undirected graph. The trick is one hash map, old->new, that records each original node's clone. The map does double duty: it stops infinite loops in the cyclic graph (a node already in the map is never re-cloned), and it lets shared neighbours reconnect to the SAME clone instead of duplicating it.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeEdges": [],
            "callStack": [],
            "paramBadges": {},
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "map old->new",
              "{}"
            ],
            [
              "goal",
              "deep copy"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Call clone(1). Push clone(1) onto the call stack to begin graph traversal.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 1,
            "activeEdges": [],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {},
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "call",
              "clone(1)"
            ],
            [
              "stack",
              1
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Check map: is 1 in map? No, node 1 has not been cloned yet.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 1,
            "activeEdges": [],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {},
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              1
            ],
            [
              "1 in map",
              false
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Instantiate clone Node(1) and record map[1] = copy(1). Store BEFORE recursing to stop infinite cycle loops.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {
              "1": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "map[1]",
              "copy(1)"
            ],
            [
              "cloned",
              "[1]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Iterate over neighbours of node 1: [2, 4, 3]. First explore neighbour 2.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1
            ],
            "activeEdges": [
              [
                1,
                2
              ]
            ],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {
              "1": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              1
            ],
            [
              "v",
              2
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Recurse on neighbour 2: call clone(2). Push clone(2) onto call stack.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 2,
            "visitedNodes": [
              1
            ],
            "activeEdges": [
              [
                1,
                2
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)"
            ],
            "paramBadges": {
              "1": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "call",
              "clone(2)"
            ],
            [
              "stack",
              2
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Check map: is 2 in map? No, proceed to create clone.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 2,
            "visitedNodes": [
              1
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)"
            ],
            "paramBadges": {
              "1": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              2
            ],
            [
              "2 in map",
              false
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Create clone Node(2) and store in map[2] = copy(2).",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "map[2]",
              "copy(2)"
            ],
            [
              "cloned",
              "[1, 2]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Enter clone(3). First check the map: is 3 already cloned?",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 3,
            "visitedNodes": [
              1,
              2
            ],
            "activeEdges": [
              [
                2,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "call",
              "clone(3)"
            ],
            [
              "stack",
              3
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Check map: node 3 is not in map. Proceed to clone vertex 3.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 3,
            "visitedNodes": [
              1,
              2
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "3 in map",
              false
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Create copy(3) and save map[3] = copy(3).",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "map[3]",
              "copy(3)"
            ],
            [
              "cloned",
              "[1, 2, 3]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Examine neighbours of node 3: [2, 4, 1]. First inspect neighbour 1 across the diagonal.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                1,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "v",
              1
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Base case reached! Node 1 is already in map. Return map[1] immediately without infinite recursion.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 1,
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                1,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "1 in map",
              true
            ],
            [
              "returns",
              "map[1] (cached copy)"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Append returned copy(1) to copy(3).neighbours. The cycle 3-1 is safely closed.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                1,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "copy(3).neighbours",
              "[copy(1)]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Next neighbour of 3 is 2. Node 2 is already in map, so append map[2] directly.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                2,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              3
            ],
            [
              "v",
              2
            ],
            [
              "2 in map",
              true
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Next unvisited neighbour of 3 is 4. Call clone(4). Push clone(4) to call stack.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "activeNode": 4,
            "visitedNodes": [
              1,
              2,
              3
            ],
            "activeEdges": [
              [
                4,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)",
              "clone(4)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "call",
              "clone(4)"
            ],
            [
              "stack",
              4
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Create copy(4) and store in map[4] = copy(4). All 4 nodes are now cloned in map!",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)",
              "clone(4)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "map[4]",
              "copy(4)"
            ],
            [
              "cloned",
              "[1, 2, 3, 4]"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Explore neighbours of node 4: [1, 3]. Check neighbour 1.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [
              [
                1,
                4
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)",
              "clone(4)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "u",
              4
            ],
            [
              "v",
              1
            ],
            [
              "1 in map",
              true
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Node 1 is in map, so link map[1] into copy(4).neighbours.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [
              [
                1,
                4
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)",
              "clone(4)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "copy(4).neighbours",
              "[copy(1)]"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "clone(4) finished connecting all neighbours. Return copy(4) to caller clone(3).",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "returned",
              "copy(4)"
            ],
            [
              "caller",
              "clone(3)"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Attach copy(4) into copy(3).neighbours. Node 3 has connected all its neighbours.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [
              [
                4,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)",
              "clone(3)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "copy(3).neighbours",
              "[copy(1), copy(2), copy(4)]"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "clone(3) finished. Return copy(3) to caller clone(2). Pop clone(3) from call stack.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)",
              "clone(2)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "returned",
              "copy(3)"
            ],
            [
              "caller",
              "clone(2)"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Attach copy(3) to copy(2).neighbours. Node 2 has completed its neighbour connections.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [
              [
                2,
                3
              ]
            ],
            "callStack": [
              "clone(1)",
              "clone(2)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "copy(2).neighbours",
              "[copy(1), copy(3)]"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "clone(2) finished. Return copy(2) to caller clone(1). Pop clone(2) from call stack.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "returned",
              "copy(2)"
            ],
            [
              "caller",
              "clone(1)"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Attach copy(2) to copy(1). Connect remaining already-cloned neighbours 4 and 3 to copy(1).",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [
              [
                1,
                2
              ],
              [
                1,
                4
              ],
              [
                1,
                3
              ]
            ],
            "callStack": [
              "clone(1)"
            ],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "copy(1).neighbours",
              "[copy(2), copy(4), copy(3)]"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "clone(1) finishes and returns the root deep copy copy(1). Pop clone(1) from call stack.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "vars": [
            [
              "returned root",
              "copy(1)"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Deep clone complete! Cloned graph has 4 vertices with identical structure and completely independent copied nodes in O(V + E) time.",
          "tree": {
            "title": "ORIGINAL GRAPH",
            "visitedNodes": [
              1,
              2,
              3,
              4
            ],
            "activeEdges": [],
            "callStack": [],
            "paramBadges": {
              "1": "cloned",
              "2": "cloned",
              "3": "cloned",
              "4": "cloned"
            },
            "nodes": [
              {
                "id": 1,
                "x": 60,
                "y": 60
              },
              {
                "id": 2,
                "x": 190,
                "y": 60
              },
              {
                "id": 4,
                "x": 60,
                "y": 190
              },
              {
                "id": 3,
                "x": 190,
                "y": 190
              }
            ],
            "edges": [
              {
                "from": 1,
                "to": 2
              },
              {
                "from": 1,
                "to": 4
              },
              {
                "from": 1,
                "to": 3
              },
              {
                "from": 2,
                "to": 3
              },
              {
                "from": 4,
                "to": 3
              }
            ]
          },
          "best": {
            "label": "Graph Deep Cloned"
          },
          "vars": [
            [
              "status",
              "COMPLETE"
            ],
            [
              "root",
              "copy(1)"
            ],
            [
              "time",
              "O(V + E)"
            ],
            [
              "space",
              "O(V)"
            ]
          ]
        }
      ]
    }
  ]
},
  {
    "id": "graph-valid-tree",
    "patternId": "dfs",
    "title": "Graph Valid Tree",
    "subtitle": "Connected + exactly n−1 edges + no cycle",
    "kind": "problem",
    "leetcode": {
      "id": 261,
      "slug": "graph-valid-tree",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Facebook",
      "Amazon"
    ],
    "statement": "Given n nodes labeled from 0 to n-1 and a list of undirected edges, determine if these edges form a valid tree (must have exactly n-1 edges, contain no cycles, and be fully connected).",
    "visualType": "graph",
    "initialInput": [
      5,
      [
        [
          0,
          1
        ],
        [
          0,
          2
        ],
        [
          0,
          3
        ],
        [
          1,
          4
        ]
      ]
    ],
    "approaches": [
      {
        "id": "dfs-cycle-check",
        "label": "DFS Cycle Detection & Connectivity",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V)"
        },
        "pseudocode": [
          "if edges.length != n - 1: return false",
          "hasCycle(node, parent, visited):",
          "    visited.add(node)",
          "    for neighbor in adj[node]:",
          "        if neighbor == parent: continue",
          "        if neighbor in visited or hasCycle(neighbor, node, visited): return true",
          "    return false",
          "return !hasCycle(0, -1, visited) and visited.size == n"
        ],
        "starterCode": {
          "javascript": "function validTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const visited = new Set();\n  function hasCycle(u, p) {\n    visited.add(u);\n    for (let v of adj[u]) {\n      if (v === p) continue;\n      if (visited.has(v) || hasCycle(v, u)) return true;\n    }\n    return false;\n  }\n  if (hasCycle(0, -1)) return false;\n  return visited.size === n;\n}",
          "python": "def validTree(n, edges):\n    if len(edges) != n - 1: return False\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v); adj[v].append(u)\n    visited = set()\n    def has_cycle(u, p):\n        visited.add(u)\n        for v in adj[u]:\n            if v == p: continue\n            if v in visited or has_cycle(v, u): return True\n        return False\n    if has_cycle(0, -1): return False\n    return len(visited) == n"
        },
        "solutionCode": {
          "javascript": "function validTree(n, edges) {\n  if (edges.length !== n - 1) return false;\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v] of edges) { adj[u].push(v); adj[v].push(u); }\n  const visited = new Set();\n  function hasCycle(u, p) {\n    visited.add(u);\n    for (let v of adj[u]) {\n      if (v === p) continue;\n      if (visited.has(v) || hasCycle(v, u)) return true;\n    }\n    return false;\n  }\n  if (hasCycle(0, -1)) return false;\n  return visited.size === n;\n}",
          "python": "def validTree(n, edges):\n    if len(edges) != n - 1: return False\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v); adj[v].append(u)\n    visited = set()\n    def has_cycle(u, p):\n        visited.add(u)\n        for v in adj[u]:\n            if v == p: continue\n            if v in visited or has_cycle(v, u): return True\n        return False\n    if has_cycle(0, -1): return False\n    return len(visited) == n"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ],
                [
                  0,
                  3
                ],
                [
                  1,
                  4
                ]
              ]
            ],
            "expected": true,
            "description": "Valid tree with 5 nodes, 4 edges"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Edge count = 4 == n - 1 (5 - 1 = 4) ✓.",
            "graph": {
              "activeNode": 0,
              "visited": [
                0
              ]
            },
            "vars": [
              [
                "edges_count",
                4
              ],
              [
                "n",
                5
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "DFS from 0 visits all 5 nodes with 0 cycles. Graph is a valid tree!",
            "graph": {
              "activeNode": 0,
              "visited": [
                0,
                1,
                2,
                3,
                4
              ]
            },
            "best": {
              "label": "Valid Tree: Connected with 0 Cycles"
            },
            "vars": [
              [
                "validTree",
                true
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "matrices",
    "patternId": "dfs",
    "title": "Matrices",
    "subtitle": "A grid is a graph · DFS the 4 neighbours",
    "kind": "concept",
    "statement": "A 2D matrix can be treated as an implicit graph where each cell (r, c) connects to its 4 orthogonal neighbors: (r-1, c), (r+1, c), (r, c-1), (r, c+1) with bounds check 0 <= r < m and 0 <= c < n.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        0,
        0,
        1
      ]
    ],
    "approaches": [
      {
        "id": "grid-dfs-template",
        "label": "4-Directional DFS Template",
        "complexity": {
          "time": "O(M · N)",
          "space": "O(M · N)"
        },
        "pseudocode": [
          "dfs(r, c):",
          "    if r < 0 or r >= m or c < 0 or c >= n: return  // Out of bounds",
          "    if grid[r][c] == 0: return                     // Water or visited",
          "    grid[r][c] = 0                                 // Mark visited",
          "    dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1)"
        ],
        "starterCode": {
          "javascript": "function gridDfs(grid, r, c) {\n  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) return;\n  grid[r][c] = 0;\n  gridDfs(grid, r - 1, c);\n  gridDfs(grid, r + 1, c);\n  gridDfs(grid, r, c - 1);\n  gridDfs(grid, r, c + 1);\n}",
          "python": "def gridDfs(grid, r, c):\n    if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] == 0: return\n    grid[r][c] = 0\n    for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n        gridDfs(grid, r + dr, c + dc)"
        },
        "solutionCode": {
          "javascript": "function gridDfs(grid, r, c) {\n  if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) return;\n  grid[r][c] = 0;\n  gridDfs(grid, r - 1, c);\n  gridDfs(grid, r + 1, c);\n  gridDfs(grid, r, c - 1);\n  gridDfs(grid, r, c + 1);\n}",
          "python": "def gridDfs(grid, r, c):\n    if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] == 0: return\n    grid[r][c] = 0\n    for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n        gridDfs(grid, r + dr, c + dc)"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  1
                ],
                [
                  0,
                  1
                ]
              ],
              0,
              0
            ],
            "expected": 3,
            "description": "Traverse 3 land cells"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start at cell (0, 0). Check 4 orthogonal neighbors (up, down, left, right).",
            "matrix": [
              [
                1,
                1,
                0
              ],
              [
                1,
                0,
                0
              ],
              [
                0,
                0,
                1
              ]
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "r",
                0
              ],
              [
                "c",
                0
              ],
              [
                "val",
                1
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Visit (0, 1) and (1, 0). All connected 1s traversed.",
            "matrix": [
              [
                1,
                1,
                0
              ],
              [
                1,
                0,
                0
              ],
              [
                0,
                0,
                1
              ]
            ],
            "highlights": [
              0,
              1,
              3
            ],
            "best": {
              "label": "Connected Region Explored"
            },
            "vars": [
              [
                "visited_cells",
                "[(0,0), (0,1), (1,0)]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "flood-fill",
    "patternId": "dfs",
    "title": "Flood Fill",
    "subtitle": "Recolour a connected region",
    "kind": "problem",
    "leetcode": {
      "id": 733,
      "slug": "flood-fill",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google"
    ],
    "statement": "An image is represented by an m x n integer grid. Perform a flood fill starting from pixel (sr, sc) by recoloring all 4-directionally connected pixels with the starting original color to a new color.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        1,
        1
      ],
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        1
      ]
    ],
    "approaches": [
      {
        "id": "dfs-flood-fill",
        "label": "DFS Flood Fill",
        "complexity": {
          "time": "O(M · N)",
          "space": "O(M · N)"
        },
        "pseudocode": [
          "floodFill(image, sr, sc, newColor):",
          "    origColor = image[sr][sc]",
          "    if origColor == newColor: return image",
          "    dfs(r, c):",
          "        if r < 0 or r >= m or c < 0 or c >= n or image[r][c] != origColor: return",
          "        image[r][c] = newColor",
          "        dfs(r-1, c); dfs(r+1, c); dfs(r, c-1); dfs(r, c+1)"
        ],
        "starterCode": {
          "javascript": "function floodFill(image, sr, sc, color) {\n  const orig = image[sr][sc];\n  if (orig === color) return image;\n  function dfs(r, c) {\n    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== orig) return;\n    image[r][c] = color;\n    dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);\n  }\n  dfs(sr, sc);\n  return image;\n}",
          "python": "def floodFill(image, sr, sc, color):\n    orig = image[sr][sc]\n    if orig == color: return image\n    def dfs(r, c):\n        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != orig: return\n        image[r][c] = color\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            dfs(r + dr, c + dc)\n    dfs(sr, sc)\n    return image"
        },
        "solutionCode": {
          "javascript": "function floodFill(image, sr, sc, color) {\n  const orig = image[sr][sc];\n  if (orig === color) return image;\n  function dfs(r, c) {\n    if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== orig) return;\n    image[r][c] = color;\n    dfs(r - 1, c); dfs(r + 1, c); dfs(r, c - 1); dfs(r, c + 1);\n  }\n  dfs(sr, sc);\n  return image;\n}",
          "python": "def floodFill(image, sr, sc, color):\n    orig = image[sr][sc]\n    if orig == color: return image\n    def dfs(r, c):\n        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]) or image[r][c] != orig: return\n        image[r][c] = color\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            dfs(r + dr, c + dc)\n    dfs(sr, sc)\n    return image"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  1,
                  1
                ],
                [
                  1,
                  1,
                  0
                ],
                [
                  1,
                  0,
                  1
                ]
              ],
              1,
              1,
              2
            ],
            "expected": [
              [
                2,
                2,
                2
              ],
              [
                2,
                2,
                0
              ],
              [
                2,
                0,
                1
              ]
            ],
            "description": "Recolor connected 1s to 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Starting flood fill at pixel (sr=1, sc=1) with original color 1, newColor = 2.",
            "matrix": {
              "grid": [
                [
                  1,
                  1,
                  1
                ],
                [
                  1,
                  1,
                  0
                ],
                [
                  1,
                  0,
                  1
                ]
              ],
              "activeCell": [
                1,
                1
              ]
            },
            "vars": [
              [
                "origColor",
                1
              ],
              [
                "newColor",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Color pixel (1, 1) -> 2. Recurse UP into (0, 1).",
            "matrix": {
              "grid": [
                [
                  1,
                  1,
                  1
                ],
                [
                  1,
                  2,
                  0
                ],
                [
                  1,
                  0,
                  1
                ]
              ],
              "activeCell": [
                0,
                1
              ]
            },
            "vars": [
              [
                "active",
                "(0, 1)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Color pixel (0, 1) -> 2. Recurse LEFT into (0, 0) and RIGHT into (0, 2).",
            "matrix": {
              "grid": [
                [
                  2,
                  2,
                  2
                ],
                [
                  1,
                  2,
                  0
                ],
                [
                  1,
                  0,
                  1
                ]
              ],
              "activeCell": [
                0,
                0
              ]
            },
            "vars": [
              [
                "active",
                "(0, 0) -> (0, 2)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Recurse into (1, 0) -> color 2. Pixel (2, 0) -> color 2. Pixel (1, 2) is water '0' (stop).",
            "matrix": {
              "grid": [
                [
                  2,
                  2,
                  2
                ],
                [
                  2,
                  2,
                  0
                ],
                [
                  2,
                  0,
                  1
                ]
              ],
              "activeCell": [
                2,
                0
              ]
            },
            "vars": [
              [
                "active",
                "(2, 0)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Flood fill complete! Pixel (2, 2) is isolated by 0s and remains color 1.",
            "matrix": {
              "grid": [
                [
                  2,
                  2,
                  2
                ],
                [
                  2,
                  2,
                  0
                ],
                [
                  2,
                  0,
                  1
                ]
              ]
            },
            "best": {
              "label": "Flood Fill Applied"
            },
            "vars": [
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "number-of-islands",
    "patternId": "dfs",
    "title": "Number of Islands",
    "subtitle": "Count components, sink each island",
    "kind": "problem",
    "leetcode": {
      "id": 200,
      "slug": "number-of-islands",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Microsoft",
      "Bloomberg"
    ],
    "statement": "Given an m x n 2D binary grid which represents a map of \"1\"s (land) and \"0\"s (water), return the number of islands. Sink each visited island by turning connected \"1\"s to \"0\"s.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        1,
        0,
        0,
        0
      ],
      [
        1,
        1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        1,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1,
        1
      ]
    ],
    "approaches": [
      {
        "id": "dfs-sink-islands",
        "label": "Sink Connected Islands via DFS",
        "complexity": {
          "time": "O(M · N)",
          "space": "O(M · N)"
        },
        "pseudocode": [
          "numIslands(grid):",
          "    count = 0",
          "    for r from 0 to m-1:",
          "        for c from 0 to n-1:",
          "            if grid[r][c] == 1:",
          "                count += 1",
          "                sink(r, c)   // DFS to turn all connected 1s to 0",
          "    return count"
        ],
        "starterCode": {
          "javascript": "function numIslands(grid) {\n  let count = 0;\n  function sink(r, c) {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) return;\n    grid[r][c] = 0;\n    sink(r - 1, c); sink(r + 1, c); sink(r, c - 1); sink(r, c + 1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === 1) { count++; sink(r, c); }\n    }\n  }\n  return count;\n}",
          "python": "def numIslands(grid):\n    count = 0\n    def sink(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] != 1: return\n        grid[r][c] = 0\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            sink(r + dr, c + dc)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == 1:\n                count += 1\n                sink(r, c)\n    return count"
        },
        "solutionCode": {
          "javascript": "function numIslands(grid) {\n  let count = 0;\n  function sink(r, c) {\n    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) return;\n    grid[r][c] = 0;\n    sink(r - 1, c); sink(r + 1, c); sink(r, c - 1); sink(r, c + 1);\n  }\n  for (let r = 0; r < grid.length; r++) {\n    for (let c = 0; c < grid[0].length; c++) {\n      if (grid[r][c] === 1) { count++; sink(r, c); }\n    }\n  }\n  return count;\n}",
          "python": "def numIslands(grid):\n    count = 0\n    def sink(r, c):\n        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]) or grid[r][c] != 1: return\n        grid[r][c] = 0\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            sink(r + dr, c + dc)\n    for r in range(len(grid)):\n        for c in range(len(grid[0])):\n            if grid[r][c] == 1:\n                count += 1\n                sink(r, c)\n    return count"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  1,
                  0
                ],
                [
                  1,
                  1,
                  0
                ],
                [
                  0,
                  0,
                  1
                ]
              ]
            ],
            "expected": 2,
            "description": "2 distinct islands"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Scan 4x5 grid top-to-bottom, left-to-right. When we encounter land '1', increment island count and sink connected land via DFS.",
            "matrix": {
              "grid": [
                [
                  1,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  1,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                0,
                0
              ]
            },
            "vars": [
              [
                "islands",
                0
              ],
              [
                "r",
                0
              ],
              [
                "c",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Found land at (0, 0)! islandCount becomes 1. Start sink DFS from (0, 0).",
            "matrix": {
              "grid": [
                [
                  1,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  1,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                0,
                0
              ]
            },
            "vars": [
              [
                "islands",
                1
              ],
              [
                "action",
                "sink island 1"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Sink (0, 0) -> '0'. Recurse to neighbors (0, 1) and (1, 0).",
            "matrix": {
              "grid": [
                [
                  0,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  1,
                  1,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                0,
                1
              ]
            },
            "vars": [
              [
                "sinking",
                "(0, 1)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Sink (0, 1) -> '0' and (1, 1) -> '0' and (1, 0) -> '0'. Island 1 is completely sunken.",
            "matrix": {
              "grid": [
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                1,
                1
              ]
            },
            "vars": [
              [
                "island 1",
                "SUNK"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Continue scanning grid: at (2, 2) find land '1'! islandCount becomes 2.",
            "matrix": {
              "grid": [
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  1,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                2,
                2
              ]
            },
            "vars": [
              [
                "islands",
                2
              ],
              [
                "found",
                "(2, 2)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Sink (2, 2) -> '0'. All 4 neighbors are water.",
            "matrix": {
              "grid": [
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  1,
                  1
                ]
              ],
              "activeCell": [
                2,
                2
              ]
            },
            "vars": [
              [
                "island 2",
                "SUNK"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Continue scan: at (3, 3) find land '1'! islandCount becomes 3. Sink (3, 3) and (3, 4).",
            "matrix": {
              "grid": [
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ],
              "activeCell": [
                3,
                3
              ]
            },
            "vars": [
              [
                "islands",
                3
              ],
              [
                "island 3",
                "SUNK"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Grid scan complete. Total number of distinct connected islands = 3.",
            "matrix": {
              "grid": [
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ],
                [
                  0,
                  0,
                  0,
                  0,
                  0
                ]
              ]
            },
            "best": {
              "label": "Total Islands: 3"
            },
            "vars": [
              [
                "count",
                3
              ],
              [
                "status",
                "COMPLETE"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "surrounded-regions",
    "patternId": "dfs",
    "title": "Surrounded Regions",
    "subtitle": "Border-connected O's are safe",
    "kind": "problem",
    "leetcode": {
      "id": 130,
      "slug": "surrounded-regions",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Facebook"
    ],
    "statement": "Given an m x n matrix board containing \"X\" and \"O\", capture all regions that are 4-directionally surrounded by \"X\". Start DFS from all border \"O\"s and mark them safe (\"S\"). Then flip remaining \"O\"s to \"X\" and restore \"S\" back to \"O\".",
    "visualType": "matrix",
    "initialInput": [
      [
        "X",
        "X",
        "X",
        "X"
      ],
      [
        "X",
        "O",
        "O",
        "X"
      ],
      [
        "X",
        "X",
        "O",
        "X"
      ],
      [
        "X",
        "O",
        "X",
        "X"
      ]
    ],
    "approaches": [
      {
        "id": "boundary-dfs",
        "label": "Boundary DFS Marking",
        "complexity": {
          "time": "O(M · N)",
          "space": "O(M · N)"
        },
        "pseudocode": [
          "1. Run DFS from all \"O\" cells on grid boundaries, mark as \"S\" (Safe)",
          "2. Iterate whole board: flip inner \"O\" -> \"X\" (captured)",
          "3. Restore \"S\" -> \"O\" (safe border-connected)"
        ],
        "starterCode": {
          "javascript": "function solve(board) {\n  const m = board.length, n = board[0].length;\n  function mark(r, c) {\n    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;\n    board[r][c] = 'S';\n    mark(r - 1, c); mark(r + 1, c); mark(r, c - 1); mark(r, c + 1);\n  }\n  for (let r = 0; r < m; r++) { mark(r, 0); mark(r, n - 1); }\n  for (let c = 0; c < n; c++) { mark(0, c); mark(m - 1, c); }\n  for (let r = 0; r < m; r++) {\n    for (let c = 0; c < n; c++) {\n      if (board[r][c] === 'O') board[r][c] = 'X';\n      else if (board[r][c] === 'S') board[r][c] = 'O';\n    }\n  }\n}",
          "python": "def solve(board):\n    m, n = len(board), len(board[0])\n    def mark(r, c):\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != 'O': return\n        board[r][c] = 'S'\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            mark(r + dr, c + dc)\n    for r in range(m): mark(r, 0); mark(r, n - 1)\n    for c in range(n): mark(0, c); mark(m - 1, c)\n    for r in range(m):\n        for c in range(n):\n            if board[r][c] == 'O': board[r][c] = 'X'\n            elif board[r][c] == 'S': board[r][c] = 'O'"
        },
        "solutionCode": {
          "javascript": "function solve(board) {\n  const m = board.length, n = board[0].length;\n  function mark(r, c) {\n    if (r < 0 || r >= m || c < 0 || c >= n || board[r][c] !== 'O') return;\n    board[r][c] = 'S';\n    mark(r - 1, c); mark(r + 1, c); mark(r, c - 1); mark(r, c + 1);\n  }\n  for (let r = 0; r < m; r++) { mark(r, 0); mark(r, n - 1); }\n  for (let c = 0; c < n; c++) { mark(0, c); mark(m - 1, c); }\n  for (let r = 0; r < m; r++) {\n    for (let c = 0; c < n; c++) {\n      if (board[r][c] === 'O') board[r][c] = 'X';\n      else if (board[r][c] === 'S') board[r][c] = 'O';\n    }\n  }\n}",
          "python": "def solve(board):\n    m, n = len(board), len(board[0])\n    def mark(r, c):\n        if r < 0 or r >= m or c < 0 or c >= n or board[r][c] != 'O': return\n        board[r][c] = 'S'\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            mark(r + dr, c + dc)\n    for r in range(m): mark(r, 0); mark(r, n - 1)\n    for c in range(n): mark(0, c); mark(m - 1, c)\n    for r in range(m):\n        for c in range(n):\n            if board[r][c] == 'O': board[r][c] = 'X'\n            elif board[r][c] == 'S': board[r][c] = 'O'"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  "X",
                  "X",
                  "X",
                  "X"
                ],
                [
                  "X",
                  "O",
                  "O",
                  "X"
                ],
                [
                  "X",
                  "X",
                  "O",
                  "X"
                ],
                [
                  "X",
                  "O",
                  "X",
                  "X"
                ]
              ]
            ],
            "expected": [
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "O",
                "X",
                "X"
              ]
            ],
            "description": "Capture inner O cells"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Mark border \"O\" at (3, 1) as Safe \"S\".",
            "matrix": [
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "O",
                "O",
                "X"
              ],
              [
                "X",
                "X",
                "O",
                "X"
              ],
              [
                "X",
                "S",
                "X",
                "X"
              ]
            ],
            "highlights": [
              13
            ],
            "vars": [
              [
                "borderSafe",
                "(3, 1)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Flip all surrounded interior \"O\"s to \"X\". Safe \"S\" restored to \"O\".",
            "matrix": [
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "X",
                "X",
                "X"
              ],
              [
                "X",
                "O",
                "X",
                "X"
              ]
            ],
            "highlights": [
              5,
              6,
              10
            ],
            "best": {
              "label": "Surrounded Regions Captured"
            },
            "vars": [
              [
                "captured",
                "3 cells"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "pacific-atlantic-water-flow",
    "patternId": "dfs",
    "title": "Pacific Atlantic Water Flow",
    "subtitle": "Flood inward from both oceans, intersect",
    "kind": "problem",
    "leetcode": {
      "id": 417,
      "slug": "pacific-atlantic-water-flow",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Facebook"
    ],
    "statement": "Given an m x n matrix of heights, water flows to adjacent cells with equal or lower height. The Pacific touches the top and left edges, and the Atlantic touches bottom and right. Return all coordinates that can reach both oceans by reverse-flooding inward from ocean borders.",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        2,
        2,
        3,
        5
      ],
      [
        3,
        2,
        3,
        4,
        4
      ],
      [
        2,
        4,
        5,
        3,
        1
      ],
      [
        6,
        7,
        1,
        4,
        5
      ],
      [
        5,
        1,
        1,
        2,
        4
      ]
    ],
    "approaches": [
      {
        "id": "reverse-flood-dfs",
        "label": "Reverse DFS from Ocean Borders",
        "complexity": {
          "time": "O(M · N)",
          "space": "O(M · N)"
        },
        "pseudocode": [
          "1. Run DFS from Pacific edges (top/left) going uphill (height >= prev)",
          "2. Run DFS from Atlantic edges (bottom/right) going uphill",
          "3. Result = Intersection of PacificReachable and AtlanticReachable"
        ],
        "starterCode": {
          "javascript": "function pacificAtlantic(heights) {\n  const m = heights.length, n = heights[0].length;\n  const pac = Array.from({ length: m }, () => Array(n).fill(false));\n  const atl = Array.from({ length: m }, () => Array(n).fill(false));\n  function dfs(r, c, reachable) {\n    reachable[r][c] = true;\n    for (let [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < m && nc >= 0 && nc < n && !reachable[nr][nc] && heights[nr][nc] >= heights[r][c]) {\n        dfs(nr, nc, reachable);\n      }\n    }\n  }\n  for (let r = 0; r < m; r++) { dfs(r, 0, pac); dfs(r, n - 1, atl); }\n  for (let c = 0; c < n; c++) { dfs(0, c, pac); dfs(m - 1, c, atl); }\n  const res = [];\n  for (let r = 0; r < m; r++) {\n    for (let c = 0; c < n; c++) if (pac[r][c] && atl[r][c]) res.push([r, c]);\n  }\n  return res;\n}",
          "python": "def pacificAtlantic(heights):\n    m, n = len(heights), len(heights[0])\n    pac = [[False]*n for _ in range(m)]\n    atl = [[False]*n for _ in range(m)]\n    def dfs(r, c, reach):\n        reach[r][c] = True\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and not reach[nr][nc] and heights[nr][nc] >= heights[r][c]:\n                dfs(nr, nc, reach)\n    for r in range(m): dfs(r, 0, pac); dfs(r, n - 1, atl)\n    for c in range(n): dfs(0, c, pac); dfs(m - 1, c, atl)\n    return [[r, c] for r in range(m) for c in range(n) if pac[r][c] and atl[r][c]]"
        },
        "solutionCode": {
          "javascript": "function pacificAtlantic(heights) {\n  const m = heights.length, n = heights[0].length;\n  const pac = Array.from({ length: m }, () => Array(n).fill(false));\n  const atl = Array.from({ length: m }, () => Array(n).fill(false));\n  function dfs(r, c, reachable) {\n    reachable[r][c] = true;\n    for (let [dr, dc] of [[-1,0],[1,0],[0,-1],[0,1]]) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < m && nc >= 0 && nc < n && !reachable[nr][nc] && heights[nr][nc] >= heights[r][c]) {\n        dfs(nr, nc, reachable);\n      }\n    }\n  }\n  for (let r = 0; r < m; r++) { dfs(r, 0, pac); dfs(r, n - 1, atl); }\n  for (let c = 0; c < n; c++) { dfs(0, c, pac); dfs(m - 1, c, atl); }\n  const res = [];\n  for (let r = 0; r < m; r++) {\n    for (let c = 0; c < n; c++) if (pac[r][c] && atl[r][c]) res.push([r, c]);\n  }\n  return res;\n}",
          "python": "def pacificAtlantic(heights):\n    m, n = len(heights), len(heights[0])\n    pac = [[False]*n for _ in range(m)]\n    atl = [[False]*n for _ in range(m)]\n    def dfs(r, c, reach):\n        reach[r][c] = True\n        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < m and 0 <= nc < n and not reach[nr][nc] and heights[nr][nc] >= heights[r][c]:\n                dfs(nr, nc, reach)\n    for r in range(m): dfs(r, 0, pac); dfs(r, n - 1, atl)\n    for c in range(n): dfs(0, c, pac); dfs(m - 1, c, atl)\n    return [[r, c] for r in range(m) for c in range(n) if pac[r][c] and atl[r][c]]"
        },
        "testCases": [
          {
            "input": [
              [
                [
                  1,
                  2,
                  2
                ],
                [
                  3,
                  2,
                  3
                ],
                [
                  2,
                  4,
                  5
                ]
              ]
            ],
            "expected": [
              [
                0,
                2
              ],
              [
                1,
                0
              ],
              [
                1,
                2
              ],
              [
                2,
                0
              ],
              [
                2,
                1
              ],
              [
                2,
                2
              ]
            ],
            "description": "Cells reaching both oceans"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Flood uphill from Pacific ocean borders (top & left).",
            "matrix": [
              [
                1,
                2,
                2,
                3,
                5
              ],
              [
                3,
                2,
                3,
                4,
                4
              ],
              [
                2,
                4,
                5,
                3,
                1
              ],
              [
                6,
                7,
                1,
                4,
                5
              ],
              [
                5,
                1,
                1,
                2,
                4
              ]
            ],
            "highlights": [
              0,
              1,
              2,
              3,
              4,
              5,
              10,
              15,
              20
            ],
            "vars": [
              [
                "pacific_flooded",
                true
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Flood uphill from Atlantic ocean borders (bottom & right). Intersect reachable sets.",
            "matrix": [
              [
                1,
                2,
                2,
                3,
                5
              ],
              [
                3,
                2,
                3,
                4,
                4
              ],
              [
                2,
                4,
                5,
                3,
                1
              ],
              [
                6,
                7,
                1,
                4,
                5
              ],
              [
                5,
                1,
                1,
                2,
                4
              ]
            ],
            "highlights": [
              4,
              9,
              11,
              12,
              15,
              16,
              19,
              20,
              24
            ],
            "best": {
              "label": "Intersection: Coordinates Reaching Both Oceans"
            },
            "vars": [
              [
                "result_cells",
                "[[0,4], [1,3], [1,4], [2,2], [3,0], [3,1], [4,0]]"
              ]
            ]
          }
        ]
      }
    ]
  }
];
