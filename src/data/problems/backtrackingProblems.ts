import { Problem } from '../../types';

export const backtrackingProblems: Problem[] = [
  // 1. Overview (Concept)
  {
    id: 'overview',
    patternId: 'backtracking',
    title: 'Overview',
    subtitle: 'Choose → explore → un-choose',
    kind: 'concept',
    statement: "Backtracking is depth-first search over a tree of partial solutions, with one extra move: UNDO. At each decision point, you CHOOSE a candidate, EXPLORE recursively, and if that branch fails or finishes, UN-CHOOSE (pop/undo) so the state returns to clean for the next choice.",
    visualType: 'backtracking',
    initialInput: [1, 2],
    approaches: [
      {
        id: 'universal-template',
        label: 'The universal backtracking template',
        complexity: {
          time: 'O(b^d) branches explored',
          space: 'O(d) recursion depth'
        },
        pseudocode: [
          "backtrack(path):",
          "  if path is complete: record path; return",
          "  for candidate in candidates(path):",
          "    path.push(candidate)         // choose",
          "    if valid(path):              // prune invalid branch",
          "      backtrack(path)            // explore",
          "    path.pop()                   // un-choose",
          "  return"
        ],
        starterCode: {
          javascript: "function generatePermutations(nums) {\n  const result = [];\n  \n  function backtrack(path, used) {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      path.push(nums[i]);\n      used[i] = true;\n      backtrack(path, used);\n      path.pop();\n      used[i] = false;\n    }\n  }\n  \n  backtrack([], []);\n  return result;\n}",
          python: "def generatePermutations(nums: list[int]) -> list[list[int]]:\n    result = []\n    used = [False] * len(nums)\n    \n    def backtrack(path):\n        if len(path) == len(nums):\n            result.append(list(path))\n            return\n        for i, val in enumerate(nums):\n            if used[i]: continue\n            path.append(val)\n            used[i] = True\n            backtrack(path)\n            path.pop()\n            used[i] = False\n            \n    backtrack([])\n    return result"
        },
        solutionCode: {
          javascript: "function generatePermutations(nums) {\n  const result = [];\n  \n  function backtrack(path, used) {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      if (used[i]) continue;\n      path.push(nums[i]);\n      used[i] = true;\n      backtrack(path, used);\n      path.pop();\n      used[i] = false;\n    }\n  }\n  \n  backtrack([], []);\n  return result;\n}",
          python: "def generatePermutations(nums: list[int]) -> list[list[int]]:\n    result = []\n    used = [False] * len(nums)\n    \n    def backtrack(path):\n        if len(path) == len(nums):\n            result.append(list(path))\n            return\n        for i, val in enumerate(nums):\n            if used[i]: continue\n            path.append(val)\n            used[i] = True\n            backtrack(path)\n            path.pop()\n            used[i] = False\n            \n    backtrack([])\n    return result"
        },
        testCases: [
          {
            input: [[1, 2]],
            expected: [[1, 2], [2, 1]],
            description: "Permutations of [1, 2]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Backtracking is depth-first search over a tree of partial solutions, with one extra move: UNDO. Here we build every permutation of [1, 2]. The root [] is the empty solution; each edge is one choice of an unused number; each leaf is a finished permutation.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 45 },
                  { id: "1", label: "1", x: 160, y: 125 },
                  { id: "2", label: "2", x: 300, y: 125 },
                  { id: "12", label: "[1,2]", x: 160, y: 205 },
                  { id: "21", label: "[2,1]", x: 300, y: 205 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "12" },
                  { from: "2", to: "21" }
                ],
                activeNode: "root",
                title: "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              results: [],
              resultsTitle: "PERMUTATIONS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }]
              }
            },
            vars: [
              ["input", "[1, 2]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "From root [], available unused candidates: [1, 2]. Loop begins with candidate 1.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205 },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "root",
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": [],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }]
              }
            },
            "vars": [
              ["candidates", "[1, 2]"],
              ["path", "[]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "CHOOSE 1: path.push(1) -> path becomes [1]. Transition from root to node 1.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205 },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "1",
                "activeEdges": [["root", "1"]],
                "visitedNodes": ["root"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": [],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "1" }]
              }
            },
            "vars": [
              ["choose", 1],
              ["path", "[1]"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "EXPLORE: recursively call backtrack([1]). Remaining unused candidates: [2].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205 },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "1",
                "visitedNodes": ["root", "1"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": [],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "1" }]
              }
            },
            "vars": [
              ["depth", 1],
              ["path", "[1]"],
              ["unused", "[2]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "CHOOSE 2: path.push(2) -> path becomes [1, 2]. Reach leaf node [1, 2].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "12",
                "activeEdges": [["1", "12"]],
                "visitedNodes": ["root", "1"],
                "successNodes": ["12"],
                "paramBadges": { "12": "✓" },
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": [],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "1" }, { "val": "2" }]
              }
            },
            "vars": [
              ["choose", 2],
              ["path", "[1, 2]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "BASE CASE: path length == 2! Record permutation [1, 2] in results.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "12",
                "visitedNodes": ["root", "1", "12"],
                "successNodes": ["12"],
                "paramBadges": { "12": "✓" },
                "title": "RECORD COMPLETE SOLUTION"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "1" }, { "val": "2" }]
              }
            },
            "vars": [
              ["record", "[1, 2]"],
              ["results count", 1]
            ]
          },
          {
            "codeLine": 7,
            "narration": "UN-CHOOSE: path.pop() removes 2 -> path reverts back to [1].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "1",
                "visitedNodes": ["root", "1", "12"],
                "successNodes": ["12"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "1" }]
              }
            },
            "vars": [
              ["un-choose", 2],
              ["path", "[1]"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "UN-CHOOSE: loop at node 1 finishes. path.pop() removes 1 -> path returns to empty [].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "root",
                "visitedNodes": ["root", "1", "12"],
                "successNodes": ["12"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }]
              }
            },
            "vars": [
              ["un-choose", 1],
              ["path", "[]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "CHOOSE 2 at the root: path becomes [2]. This is the second branch out of the empty solution, the same three-move dance starts over on this side of the tree.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "2",
                "activeEdges": [["root", "2"]],
                "visitedNodes": ["root", "1", "12"],
                "successNodes": ["12"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "2" }]
              }
            },
            "vars": [
              ["choose", 2],
              ["path", "[2]"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "EXPLORE: recursively call backtrack([2]). Remaining unused candidate: [1].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205 }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "2",
                "visitedNodes": ["root", "1", "12", "2"],
                "successNodes": ["12"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "2" }]
              }
            },
            "vars": [
              ["depth", 1],
              ["path", "[2]"],
              ["unused", "[1]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "CHOOSE 1: path.push(1) -> path becomes [2, 1]. Reach leaf node [2, 1].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205, "isSuccess": true }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "21",
                "activeEdges": [["2", "21"]],
                "visitedNodes": ["root", "1", "12", "2"],
                "successNodes": ["12", "21"],
                "paramBadges": { "21": "✓" },
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "2" }, { "val": "1" }]
              }
            },
            "vars": [
              ["choose", 1],
              ["path", "[2, 1]"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "BASE CASE: path length == 2! Record permutation [2, 1] in results.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205, "isSuccess": true }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "21",
                "visitedNodes": ["root", "1", "12", "2", "21"],
                "successNodes": ["12", "21"],
                "paramBadges": { "21": "✓" },
                "title": "RECORD COMPLETE SOLUTION"
              },
              "results": ["[1, 2]", "[2, 1]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }, { "val": "2" }, { "val": "1" }]
              }
            },
            "vars": [
              ["record", "[2, 1]"],
              ["total permutations", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "UN-CHOOSE: path.pop() removes 1, then path.pop() removes 2 -> back to root [].",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205, "isSuccess": true }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "activeNode": "root",
                "visitedNodes": ["root", "1", "12", "2", "21"],
                "successNodes": ["12", "21"],
                "title": "CHOOSE → EXPLORE → UN-CHOOSE"
              },
              "results": ["[1, 2]", "[2, 1]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": [{ "val": "[ ]" }]
              }
            },
            "vars": [
              ["un-choose", 2],
              ["path", "[]"]
            ]
          },
          {
            "codeLine": 8,
            "narration": "ALL BRANCHES COMPLETE: Returned 2 valid permutations: [[1, 2], [2, 1]]. Notice how state mutates down the tree and cleanly restores upon returning.",
            "backtracking": {
              "tree": {
                "nodes": [
                  { "id": "root", "label": "[ ]", "x": 230, "y": 45 },
                  { "id": "1", "label": "1", "x": 160, "y": 125 },
                  { "id": "2", "label": "2", "x": 300, "y": 125 },
                  { "id": "12", "label": "[1,2]", "x": 160, "y": 205, "isSuccess": true },
                  { "id": "21", "label": "[2,1]", "x": 300, "y": 205, "isSuccess": true }
                ],
                "edges": [
                  { "from": "root", "to": "1" },
                  { "from": "root", "to": "2" },
                  { "from": "1", "to": "12" },
                  { "from": "2", "to": "21" }
                ],
                "visitedNodes": ["root", "1", "12", "2", "21"],
                "successNodes": ["12", "21"],
                "title": "BACKTRACKING COMPLETE: 2 PERMUTATIONS"
              },
              "results": ["[1, 2]", "[2, 1]"],
              "resultsTitle": "PERMUTATIONS FOUND",
              "horizontalStack": {
                "title": "CALL STACK (DEPTH)",
                "items": []
              }
            },
            "best": {
              "label": "2 Permutations Generated"
            },
            "vars": [
              ["total permutations", 2],
              ["result", "[[1, 2], [2, 1]]"],
              ["time", "O(N · N!)"],
              ["space", "O(N)"]
            ]
          }
        ]
      }
    ]
  },

  // 2. Word Search (LeetCode #79 - Medium)
  {
    id: 'word-search',
    patternId: 'backtracking',
    title: 'Word Search',
    subtitle: 'DFS with mark-and-unmark backtracking',
    kind: 'problem',
    leetcode: {
      id: 79,
      slug: 'word-search',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'Bloomberg', 'Apple'],
    statement: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.\n\nThe word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
    visualType: 'backtracking',
    initialInput: {
      grid: [
        ['A', 'B', 'C', 'E'],
        ['S', 'F', 'C', 'S'],
        ['A', 'D', 'E', 'E']
      ],
      word: 'ABCCED'
    },
    approaches: [
      {
        id: 'backtracking-dfs-mark-unmark',
        label: 'Backtracking - DFS mark & unmark',
        complexity: {
          time: 'O(R · C · 4^L)',
          space: 'O(L)'
        },
        pseudocode: [
          "exist(word):",
          "  for each start cell == word[0]:",
          "    if dfs(r, c, 0): return true",
          "dfs(r, c, i):                        // board[r][c] == word[i]",
          "  mark (r, c) used",
          "  if i == last index: return true",
          "  for each neighbour (nr, nc):",
          "    if used or letter != word[i+1]: skip",
          "    if dfs(nr, nc, i+1): return true",
          "  unmark (r, c)                      // backtrack",
          "  return false"
        ],
        starterCode: {
          javascript: "function exist(board, word) {\n  const R = board.length, C = board[0].length;\n  \n  function dfs(r, c, i) {\n    if (i === word.length - 1) return true;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    \n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && board[nr][nc] === word[i + 1]) {\n        if (dfs(nr, nc, i + 1)) return true;\n      }\n    }\n    \n    board[r][c] = temp;\n    return false;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (board[r][c] === word[0]) {\n        if (dfs(r, c, 0)) return true;\n      }\n    }\n  }\n  return false;\n}",
          python: "def exist(board: list[list[str]], word: str) -> bool:\n    R, C = len(board), len(board[0])\n    \n    def dfs(r, c, i):\n        if i == len(word) - 1:\n            return True\n        temp = board[r][c]\n        board[r][c] = '#'\n        \n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] == word[i + 1]:\n                if dfs(nr, nc, i + 1):\n                    return True\n                    \n        board[r][c] = temp\n        return False\n        \n    for r in range(R):\n        for c in range(C):\n            if board[r][c] == word[0]:\n                if dfs(r, c, 0):\n                    return True\n    return False"
        },
        solutionCode: {
          javascript: "function exist(board, word) {\n  const R = board.length, C = board[0].length;\n  \n  function dfs(r, c, i) {\n    if (i === word.length - 1) return true;\n    const temp = board[r][c];\n    board[r][c] = '#';\n    \n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && board[nr][nc] === word[i + 1]) {\n        if (dfs(nr, nc, i + 1)) return true;\n      }\n    }\n    \n    board[r][c] = temp;\n    return false;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (board[r][c] === word[0]) {\n        if (dfs(r, c, 0)) return true;\n      }\n    }\n  }\n  return false;\n}",
          python: "def exist(board: list[list[str]], word: str) -> bool:\n    R, C = len(board), len(board[0])\n    \n    def dfs(r, c, i):\n        if i == len(word) - 1:\n            return True\n        temp = board[r][c]\n        board[r][c] = '#'\n        \n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] == word[i + 1]:\n                if dfs(nr, nc, i + 1):\n                    return True\n                    \n        board[r][c] = temp\n        return False\n        \n    for r in range(R):\n        for c in range(C):\n            if board[r][c] == word[0]:\n                if dfs(r, c, 0):\n                    return True\n    return False"
        },
        testCases: [
          {
            input: [
              [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
              'ABCCED'
            ],
            expected: true,
            description: "Word \"ABCCED\" found in 3x4 grid"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Word Search: can we spell \"ABCCED\" by walking the grid one letter at a time, moving up/down/left/right, never re-using a cell? The plan is DFS with mark-and-unmark backtracking. We try a start cell that matches the first letter, mark it used, then recurse into neighbours that match the next letter. If a branch dead-ends we UN-MARK and try another direction.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["word", "ABCCED"],
              ["len", 6],
              ["size", "3 × 4"]
            ]
          },
          {
            codeLine: 2,
            narration: "Scan the board for starting cell matching word[0] = 'A'. Found 'A' at (0, 0).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["find start", "word[0]='A'"],
              ["found at", "(0, 0)"]
            ]
          },
          {
            codeLine: 3,
            narration: "Call dfs(0, 0, 0) to explore path starting at (0, 0) for letter 'A'.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["call", "dfs(0, 0, 0)"],
              ["i", 0]
            ]
          },
          {
            codeLine: 4,
            narration: "board[0][0] = 'A' matches word[0] = 'A'. Enter dfs(0, 0, 0).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["at", "(0, 0)"],
              ["matched", "A"],
              ["need next", "B"]
            ]
          },
          {
            codeLine: 5,
            narration: "CHOOSE (0, 0): mark (0, 0) used (tinted green). It cannot be reused in this active path.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["mark used", "(0, 0)='A'"],
              ["path", "A"]
            ]
          },
          {
            codeLine: 6,
            narration: "Check if i == last index (0 == 5): False. Continue to explore neighbours.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["index i", 0],
              ["last index", 5]
            ]
          },
          {
            codeLine: 7,
            narration: "For each 4-directional neighbour of (0, 0): Test Down (1, 0).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 0)"],
              ["try neighbour", "(1, 0)='S'"],
              ["want", "B"]
            ]
          },
          {
            codeLine: 8,
            narration: "Neighbour (1, 0) = 'S' != 'B'. Reject this direction (tinted red) and try the next neighbour.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 0],
                rejectedCell: [1, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 0)"],
              ["try", "(1, 0)='S'"],
              ["want", "B"],
              ["result", "reject"]
            ]
          },
          {
            codeLine: 7,
            narration: "Next neighbour of (0, 0): Test Right (0, 1) = 'B'.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 1],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 0)"],
              ["try neighbour", "(0, 1)='B'"],
              ["want", "B"]
            ]
          },
          {
            codeLine: 9,
            narration: "board[0][1] = 'B' matches word[1] = 'B'! Recurse: call dfs(0, 1, 1).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 1],
                activeBadge: "w[1]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["match", "word[1]='B'"],
              ["call", "dfs(0, 1, 1)"]
            ]
          },
          {
            codeLine: 4,
            narration: "board[0][1] = 'B' matches word[1] = 'B'. Enter dfs(0, 1, 1).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 1],
                activeBadge: "w[1]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["at", "(0, 1)"],
              ["matched", "AB"],
              ["need next", "C"]
            ]
          },
          {
            codeLine: 5,
            narration: "CHOOSE (0, 1): mark (0, 1) used (tinted green). Path is now \"AB\".",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 1],
                activeBadge: "w[1]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["mark used", "(0, 1)='B'"],
              ["path", "AB"]
            ]
          },
          {
            codeLine: 6,
            narration: "Check if i == 5: False (i = 1). Scan neighbours of (0, 1).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["index i", 1],
              ["last index", 5]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbour Left (0, 0): already marked used! Skip.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 1],
                rejectedCell: [0, 0],
                activeBadge: "w[1]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 1)"],
              ["try", "(0, 0)"],
              ["status", "already used"],
              ["result", "skip"]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbour Down (1, 1) = 'F'.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 1],
                activeBadge: "w[1]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 1)"],
              ["try", "(1, 1)='F'"],
              ["want", "C"]
            ]
          },
          {
            codeLine: 8,
            narration: "Neighbour (1, 1) = 'F' != 'C'. Reject this direction (tinted red) and try the next neighbour. no point recursing where the letter already disagrees.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }],
                activeCell: [0, 1],
                activeBadge: "w[1]",
                rejectedCell: [1, 1],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 1)"],
              ["try", "(1, 1)='F'"],
              ["want", "C"],
              ["result", "reject"]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbour Right (0, 2) = 'C'.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 2],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 1)"],
              ["try", "(0, 2)='C'"],
              ["want", "C"]
            ]
          },
          {
            codeLine: 9,
            narration: "board[0][2] = 'C' matches word[2] = 'C'! Call dfs(0, 2, 2).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 2],
                activeBadge: "w[2]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["match", "word[2]='C'"],
              ["call", "dfs(0, 2, 2)"]
            ]
          },
          {
            codeLine: 4,
            narration: "board[0][2] = 'C' matches word[2] = 'C'. Enter dfs(0, 2, 2).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }],
                activeCell: [0, 2],
                activeBadge: "w[2]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["at", "(0, 2)"],
              ["matched", "ABC"],
              ["need next", "C"]
            ]
          },
          {
            codeLine: 5,
            narration: "CHOOSE (0, 2): mark (0, 2) used (tinted green). Path is now \"ABC\".",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
                activeCell: [0, 2],
                activeBadge: "w[2]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["mark used", "(0, 2)='C'"],
              ["path", "ABC"]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbour Right (0, 3) = 'E' != 'C' (reject). Test neighbour Down (1, 2) = 'C'.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
                activeCell: [1, 2],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(0, 2)"],
              ["try", "(1, 2)='C'"],
              ["want", "C"]
            ]
          },
          {
            codeLine: 9,
            narration: "board[1][2] = 'C' matches word[3] = 'C'! Call dfs(1, 2, 3).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
                activeCell: [1, 2],
                activeBadge: "w[3]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["match", "word[3]='C'"],
              ["call", "dfs(1, 2, 3)"]
            ]
          },
          {
            codeLine: 4,
            narration: "board[1][2] = 'C' matches word[3] = 'C'. Enter dfs(1, 2, 3).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
                activeCell: [1, 2],
                activeBadge: "w[3]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["at", "(1, 2)"],
              ["matched", "ABCC"],
              ["need next", "E"]
            ]
          },
          {
            codeLine: 5,
            narration: "CHOOSE (1, 2): mark (1, 2) used (tinted green). Path is now \"ABCC\".",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }],
                activeCell: [1, 2],
                activeBadge: "w[3]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["mark used", "(1, 2)='C'"],
              ["path", "ABCC"]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbours of (1, 2): Left (1, 1) = 'F' != 'E' (reject), Right (1, 3) = 'S' != 'E' (reject), Down (2, 2) = 'E' (MATCH!).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }],
                activeCell: [2, 2],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(1, 2)"],
              ["try", "(2, 2)='E'"],
              ["want", "E"]
            ]
          },
          {
            codeLine: 4,
            narration: "board[2][2] = 'E' matches word[4] = 'E'. CHOOSE it: mark the cell green (used) so the rest of this path can't step on it again. Now look for 'D' (word[5]) among its 4 neighbours.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }],
                activeCell: [2, 2],
                activeBadge: "w[4]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["at", "(2, 2)"],
              ["matched", "ABCCE"],
              ["need next", "D"]
            ]
          },
          {
            codeLine: 5,
            narration: "Mark (2, 2) used (tinted green). Path is now \"ABCCE\".",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],
                activeCell: [2, 2],
                activeBadge: "w[4]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["mark used", "(2, 2)='E'"],
              ["path", "ABCCE"]
            ]
          },
          {
            codeLine: 7,
            narration: "Test neighbours of (2, 2): Right (2, 3) = 'E' != 'D' (reject), Left (2, 1) = 'D' (MATCH!).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],
                activeCell: [2, 1],
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["from", "(2, 2)"],
              ["try", "(2, 1)='D'"],
              ["want", "D"]
            ]
          },
          {
            codeLine: 9,
            narration: "board[2][1] = 'D' matches word[5] = 'D'! Call dfs(2, 1, 5).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],
                activeCell: [2, 1],
                activeBadge: "w[5]",
                word: "ABCCED",
                title: "3 × 4 BOARD · WORD = \"ABCCED\""
              }
            },
            vars: [
              ["match", "word[5]='D'"],
              ["call", "dfs(2, 1, 5)"]
            ]
          },
          {
            codeLine: 6,
            narration: "BASE CASE REACHED: i == last index (5 == 5). Word \"ABCCED\" completely formed along path (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1)! Return true.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [
                  { r: 0, c: 0 },
                  { r: 0, c: 1 },
                  { r: 0, c: 2 },
                  { r: 1, c: 2 },
                  { r: 2, c: 2 },
                  { r: 2, c: 1 }
                ],
                activeCell: [2, 1],
                activeBadge: "w[5] ✓",
                word: "ABCCED",
                title: "WORD FOUND: \"ABCCED\""
              }
            },
            vars: [
              ["condition", "i == 5 (MATCH!)"],
              ["word found", "ABCCED"],
              ["return", "true"]
            ]
          },
          {
            codeLine: 3,
            narration: "Search completed successfully: exist(\"ABCCED\") returns true. Time Complexity: O(R · C · 4^L), Space Complexity: O(L).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [
                  { r: 0, c: 0 },
                  { r: 0, c: 1 },
                  { r: 0, c: 2 },
                  { r: 1, c: 2 },
                  { r: 2, c: 2 },
                  { r: 2, c: 1 }
                ],
                word: "ABCCED",
                title: "SEARCH COMPLETE · RESULT = TRUE"
              },
              results: ["Path: (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(2,1)"],
              resultsTitle: "RESULT"
            },
            best: {
              label: "Word Found: TRUE"
            },
            vars: [
              ["exist", "true"],
              ["path", "(0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1)"],
              ["time", "O(R · C · 4^L)"],
              ["space", "O(L)"]
            ]
          }
        ]
      },
      {
        id: 'backtracking-visited-set',
        label: 'Backtracking - DFS with Visited Array (No Board Mutation)',
        complexity: {
          time: 'O(R · C · 4^L)',
          space: 'O(R · C + L)'
        },
        pseudocode: [
          "function exist(board, word):",
          "  R = len(board), C = len(board[0])",
          "  visited = 2D boolean array of size R x C (all false)",
          "  function dfs(r, c, i):",
          "    if i == len(word) - 1: return true",
          "    visited[r][c] = true                       // choose",
          "    for (dr, dc) in [(0,1), (1,0), (0,-1), (-1,0)]:",
          "      nr = r + dr, nc = c + dc",
          "      if in_bounds(nr, nc) and not visited[nr][nc] and board[nr][nc] == word[i+1]:",
          "        if dfs(nr, nc, i+1): return true       // explore",
          "    visited[r][c] = false                      // un-choose",
          "    return false",
          "  for r from 0 to R-1; for c from 0 to C-1:",
          "    if board[r][c] == word[0] and dfs(r, c, 0): return true",
          "  return false"
        ],
        starterCode: {
          javascript: "function exist(board, word) {\n  const R = board.length, C = board[0].length;\n  const visited = Array.from({ length: R }, () => Array(C).fill(false));\n  \n  function dfs(r, c, i) {\n    if (i === word.length - 1) return true;\n    visited[r][c] = true;\n    \n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[nr][nc] && board[nr][nc] === word[i + 1]) {\n        if (dfs(nr, nc, i + 1)) return true;\n      }\n    }\n    \n    visited[r][c] = false;\n    return false;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;\n    }\n  }\n  return false;\n}",
          python: "def exist(board: list[list[str]], word: str) -> bool:\n    R, C = len(board), len(board[0])\n    visited = [[False] * C for _ in range(R)]\n    \n    def dfs(r, c, i):\n        if i == len(word) - 1:\n            return True\n        visited[r][c] = True\n        \n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and not visited[nr][nc] and board[nr][nc] == word[i + 1]:\n                if dfs(nr, nc, i + 1):\n                    return True\n                    \n        visited[r][c] = False\n        return False\n        \n    for r in range(R):\n        for c in range(C):\n            if board[r][c] == word[0] and dfs(r, c, 0):\n                return True\n    return False"
        },
        solutionCode: {
          javascript: "function exist(board, word) {\n  const R = board.length, C = board[0].length;\n  const visited = Array.from({ length: R }, () => Array(C).fill(false));\n  \n  function dfs(r, c, i) {\n    if (i === word.length - 1) return true;\n    visited[r][c] = true;\n    \n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && !visited[nr][nc] && board[nr][nc] === word[i + 1]) {\n        if (dfs(nr, nc, i + 1)) return true;\n      }\n    }\n    \n    visited[r][c] = false;\n    return false;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (board[r][c] === word[0] && dfs(r, c, 0)) return true;\n    }\n  }\n  return false;\n}",
          python: "def exist(board: list[list[str]], word: str) -> bool:\n    R, C = len(board), len(board[0])\n    visited = [[False] * C for _ in range(R)]\n    \n    def dfs(r, c, i):\n        if i == len(word) - 1:\n            return True\n        visited[r][c] = True\n        \n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and not visited[nr][nc] and board[nr][nc] == word[i + 1]:\n                if dfs(nr, nc, i + 1):\n                    return True\n                    \n        visited[r][c] = False\n        return False\n        \n    for r in range(R):\n        for c in range(C):\n            if board[r][c] == word[0] and dfs(r, c, 0):\n                return True\n    return False"
        },
        testCases: [
          {
            input: [
              [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
              'ABCCED'
            ],
            expected: true,
            description: "Word \"ABCCED\" found using separate visited array"
          }
        ],
        steps: [
          {
            codeLine: 3,
            narration: "Visited Array Approach: Preserves board immutability by using a 2D boolean table visited[r][c] to track active path cells.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                activeCell: [0, 0],
                activeBadge: "w[0]",
                word: "ABCCED",
                title: "IMMUTABLE BOARD WITH VISITED 2D ARRAY"
              }
            },
            vars: [
              ["visited matrix", "3 × 4 boolean"],
              ["board mutation", "none (immutable)"]
            ]
          },
          {
            codeLine: 10,
            narration: "DFS navigates (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (2,1) marking visited[r][c]=true, and resetting to false during un-choose backtrack.",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [
                  { r: 0, c: 0 },
                  { r: 0, c: 1 },
                  { r: 0, c: 2 },
                  { r: 1, c: 2 },
                  { r: 2, c: 2 },
                  { r: 2, c: 1 }
                ],
                activeCell: [2, 1],
                activeBadge: "w[5] ✓",
                word: "ABCCED",
                title: "VISITED ARRAY SEARCH COMPLETE"
              },
              results: ["Path: (0,0)→(0,1)→(0,2)→(1,2)→(2,2)→(2,1)"],
              resultsTitle: "RESULT"
            },
            best: {
              label: "Word Found: TRUE"
            },
            vars: [
              ["result", "true"],
              ["time", "O(R · C · 4^L)"],
              ["space", "O(R · C + L)"]
            ]
          }
        ]
      },
      {
        id: 'trie-prefix-search',
        label: 'Trie + Backtracking (Multi-Word / Prefix Tree)',
        complexity: {
          time: 'O(R · C · 4^L)',
          space: 'O(M) Trie nodes'
        },
        pseudocode: [
          "buildTrie(words): insert words into Prefix Tree",
          "function findWords(board, words):",
          "  root = buildTrie(words), result = []",
          "  function dfs(r, c, trieNode):",
          "    char = board[r][c]",
          "    if not trieNode.children[char]: return      // PRUNE prefixes not in Trie!",
          "    trieNode = trieNode.children[char]",
          "    if trieNode.isWord: result.push(trieNode.word)",
          "    board[r][c] = '#'",
          "    for (dr, dc) in [(0,1), (1,0), (0,-1), (-1,0)]:",
          "      if in_bounds(r+dr, c+dc) and board[r+dr][c+dc] != '#':",
          "        dfs(r+dr, c+dc, trieNode)",
          "    board[r][c] = char",
          "  for r in range(R); for c in range(C):",
          "    dfs(r, c, root)",
          "  return result"
        ],
        starterCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.word = null;\n  }\n}\n\nfunction findWords(board, words) {\n  const root = new TrieNode();\n  for (const w of words) {\n    let node = root;\n    for (const ch of w) {\n      if (!node.children[ch]) node.children[ch] = new TrieNode();\n      node = node.children[ch];\n    }\n    node.word = w;\n  }\n  \n  const R = board.length, C = board[0].length;\n  const result = [];\n  \n  function dfs(r, c, node) {\n    const ch = board[r][c];\n    if (!node.children[ch]) return;\n    \n    node = node.children[ch];\n    if (node.word) {\n      result.push(node.word);\n      node.word = null;\n    }\n    \n    board[r][c] = '#';\n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && board[nr][nc] !== '#') {\n        dfs(nr, nc, node);\n      }\n    }\n    board[r][c] = ch;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      dfs(r, c, root);\n    }\n  }\n  return result;\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.word = None\n\ndef findWords(board: list[list[str]], words: list[str]) -> list[str]:\n    root = TrieNode()\n    for w in words:\n        node = root\n        for ch in w:\n            if ch not in node.children:\n                node.children[ch] = TrieNode()\n            node = node.children[ch]\n        node.word = w\n        \n    R, C = len(board), len(board[0])\n    result = []\n    \n    def dfs(r, c, node):\n        ch = board[r][c]\n        if ch not in node.children:\n            return\n            \n        node = node.children[ch]\n        if node.word:\n            result.append(node.word)\n            node.word = None\n            \n        board[r][c] = '#'\n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] != '#':\n                dfs(nr, nc, node)\n        board[r][c] = ch\n        \n    for r in range(R):\n        for c in range(C):\n            dfs(r, c, root)\n    return result"
        },
        solutionCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.word = null;\n  }\n}\n\nfunction findWords(board, words) {\n  const root = new TrieNode();\n  for (const w of words) {\n    let node = root;\n    for (const ch of w) {\n      if (!node.children[ch]) node.children[ch] = new TrieNode();\n      node = node.children[ch];\n    }\n    node.word = w;\n  }\n  \n  const R = board.length, C = board[0].length;\n  const result = [];\n  \n  function dfs(r, c, node) {\n    const ch = board[r][c];\n    if (!node.children[ch]) return;\n    \n    node = node.children[ch];\n    if (node.word) {\n      result.push(node.word);\n      node.word = null;\n    }\n    \n    board[r][c] = '#';\n    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C && board[nr][nc] !== '#') {\n        dfs(nr, nc, node);\n      }\n    }\n    board[r][c] = ch;\n  }\n  \n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      dfs(r, c, root);\n    }\n  }\n  return result;\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.word = None\n\ndef findWords(board: list[list[str]], words: list[str]) -> list[str]:\n    root = TrieNode()\n    for w in words:\n        node = root\n        for ch in w:\n            if ch not in node.children:\n                node.children[ch] = TrieNode()\n            node = node.children[ch]\n        node.word = w\n        \n    R, C = len(board), len(board[0])\n    result = []\n    \n    def dfs(r, c, node):\n        ch = board[r][c]\n        if ch not in node.children:\n            return\n            \n        node = node.children[ch]\n        if node.word:\n            result.append(node.word)\n            node.word = None\n            \n        board[r][c] = '#'\n        for dr, dc in [(0, 1), (1, 0), (0, -1), (-1, 0)]:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C and board[nr][nc] != '#':\n                dfs(nr, nc, node)\n        board[r][c] = ch\n        \n    for r in range(R):\n        for c in range(C):\n            dfs(r, c, root)\n    return result"
        },
        testCases: [
          {
            input: [
              [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']],
              ['ABCCED']
            ],
            expected: ['ABCCED'],
            description: "Trie prefix search for words on board"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Trie + Backtracking: Insert target words into a Prefix Tree (Trie). At each DFS step, if the current prefix is NOT in the Trie, prune the entire search branch immediately (O(1) prefix validation).",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                word: "ABCCED",
                title: "PREFIX TREE (TRIE) PRUNING"
              }
            },
            vars: [
              ["trie lookup", "O(1) prefix check"],
              ["pruning", "skips non-dictionary prefixes"]
            ]
          },
          {
            codeLine: 8,
            narration: "Trie path matches: 'A' -> 'B' -> 'C' -> 'C' -> 'E' -> 'D'. Leaf node has isWord=true. Word \"ABCCED\" emitted directly!",
            backtracking: {
              wordGrid: {
                grid: [
                  ['A', 'B', 'C', 'E'],
                  ['S', 'F', 'C', 'S'],
                  ['A', 'D', 'E', 'E']
                ],
                matchedCells: [
                  { r: 0, c: 0 },
                  { r: 0, c: 1 },
                  { r: 0, c: 2 },
                  { r: 1, c: 2 },
                  { r: 2, c: 2 },
                  { r: 2, c: 1 }
                ],
                activeCell: [2, 1],
                activeBadge: "w[5] ✓",
                word: "ABCCED",
                title: "TRIE SEARCH COMPLETE"
              },
              results: ["[\"ABCCED\"]"],
              resultsTitle: "WORDS FOUND"
            },
            best: {
              label: "Trie Search Found: [\"ABCCED\"]"
            },
            vars: [
              ["words found", "[\"ABCCED\"]"],
              ["time", "O(R · C · 4^L)"]
            ]
          }
        ]
      }
    ]
  },

  // 3. Solution Space Trees (Concept)
  {
    id: 'solution-space-trees',
    patternId: 'backtracking',
    title: 'Solution Space Trees',
    subtitle: 'Nodes = partial solutions, edges = choices',
    kind: 'concept',
    statement: "Every backtracking problem is secretly the SAME object: a solution-space tree. The root is the empty solution, each edge is one decision, internal nodes are partial solutions, and leaves are complete solutions, some valid, some dead.",
    visualType: 'backtracking',
    initialInput: [1, 2],
    approaches: [
      {
        id: 'mental-model-solution-space',
        label: 'The mental model behind every backtracking problem',
        complexity: {
          time: 'O(tree size), pruning shrinks it',
          space: 'O(depth)'
        },
        pseudocode: [
          "tree = solution space:",
          "  root    = empty solution",
          "  edge    = one decision",
          "  node    = partial solution",
          "  leaf    = complete solution (valid or dead)",
          "explore(node):",
          "  if rule already broken: prune subtree  // cut, don't visit",
          "  else for each edge: explore(child)",
          "  collect valid leaves"
        ],
        starterCode: {
          javascript: "function exploreTree(elements) {\n  const leaves = [];\n  \n  function explore(node, i) {\n    if (i === elements.length) {\n      leaves.push([...node]);\n      return;\n    }\n    \n    // Edge 1: take elements[i]\n    node.push(elements[i]);\n    explore(node, i + 1);\n    node.pop(); // un-choose / backtrack\n    \n    // Edge 2: skip elements[i]\n    explore(node, i + 1);\n  }\n  \n  explore([], 0);\n  return leaves;\n}",
          python: "def explore_tree(elements: list[int]) -> list[list[int]]:\n    leaves = []\n    \n    def explore(node, i):\n        if i == len(elements):\n            leaves.append(list(node))\n            return\n            \n        # Edge 1: take elements[i]\n        node.append(elements[i])\n        explore(node, i + 1)\n        node.pop() # un-choose / backtrack\n        \n        # Edge 2: skip elements[i]\n        explore(node, i + 1)\n        \n    explore([], 0)\n    return leaves"
        },
        solutionCode: {
          javascript: "function exploreTree(elements) {\n  const leaves = [];\n  \n  function explore(node, i) {\n    if (i === elements.length) {\n      leaves.push([...node]);\n      return;\n    }\n    \n    // Edge 1: take elements[i]\n    node.push(elements[i]);\n    explore(node, i + 1);\n    node.pop(); // un-choose / backtrack\n    \n    // Edge 2: skip elements[i]\n    explore(node, i + 1);\n  }\n  \n  explore([], 0);\n  return leaves;\n}",
          python: "def explore_tree(elements: list[int]) -> list[list[int]]:\n    leaves = []\n    \n    def explore(node, i):\n        if i == len(elements):\n            leaves.append(list(node))\n            return\n            \n        # Edge 1: take elements[i]\n        node.append(elements[i])\n        explore(node, i + 1)\n        node.pop() # un-choose / backtrack\n        \n        # Edge 2: skip elements[i]\n        explore(node, i + 1)\n        \n    explore([], 0)\n    return leaves"
        },
        testCases: [
          {
            input: [[1, 2]],
            expected: [[1, 2], [1], [2], []],
            description: "Subsets of [1, 2]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Every backtracking problem is secretly the SAME object: a solution-space tree. The root is the empty solution, each edge is one decision, internal nodes are partial solutions, and leaves are complete solutions, some valid, some dead.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26 },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "root",
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: [],
              resultsTitle: "LEAVES REACHED"
            },
            vars: [
              ["example", "subsets of [1, 2]"]
            ]
          },
          {
            codeLine: 3,
            narration: "DECISION 1: Consider element 1. Take the left edge 'take 1'. We push 1 into our partial solution -> {1}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26 },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1",
                activeEdges: [["root", "take1"]],
                visitedNodes: ["root"],
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: [],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }]
              }
            },
            vars: [
              ["at node", "take 1"],
              ["partial", "{1}"]
            ]
          },
          {
            codeLine: 3,
            narration: "DECISION 2: From partial {1}, consider element 2 and choose to take 2. Move along the branch to complete leaf {1, 2}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26 },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1_take2",
                activeEdges: [["root", "take1"], ["take1", "take1_take2"]],
                visitedNodes: ["root", "take1"],
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: [],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }, { val: "take 2" }]
              }
            },
            vars: [
              ["at node", "take 2"],
              ["partial", "{1, 2}"]
            ]
          },
          {
            codeLine: 5,
            narration: "LEAF REACHED: All decisions made! {1, 2} is a complete, valid leaf solution. Record it into reached leaves.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1_take2",
                activeEdges: [["root", "take1"], ["take1", "take1_take2"]],
                visitedNodes: ["root", "take1"],
                successNodes: ["take1_take2"],
                paramBadges: { "take1_take2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }, { val: "take 2" }]
              }
            },
            vars: [
              ["leaf reached", "{1, 2}"],
              ["status", "valid leaf"]
            ]
          },
          {
            codeLine: 5,
            narration: "UN-CHOOSE element 2 and step back up to {1}. Backtracking restores the partial solution so the OTHER edge out of {1}, skip 2, can be tried from the same starting point. Without undoing, the {2} from the last branch would still be sitting in our partial solution!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1",
                activeEdges: [["root", "take1"]],
                visitedNodes: ["root"],
                successNodes: ["take1_take2"],
                paramBadges: { "take1_take2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }]
              }
            },
            vars: [
              ["back at", "{1}"],
              ["next edge", "skip 2"]
            ]
          },
          {
            codeLine: 3,
            narration: "EXPLORE NEXT BRANCH: Step along 'skip 2' out of {1}. Partial solution remains {1}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26 },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1_skip2",
                activeEdges: [["root", "take1"], ["take1", "take1_skip2"]],
                visitedNodes: ["root", "take1"],
                successNodes: ["take1_take2"],
                paramBadges: { "take1_take2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }, { val: "skip 2" }]
              }
            },
            vars: [
              ["at node", "skip 2"],
              ["partial", "{1}"]
            ]
          },
          {
            codeLine: 5,
            narration: "LEAF REACHED: Leaf {1} is complete! Collect {1} into the list of reached leaves.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "take1_skip2",
                activeEdges: [["root", "take1"], ["take1", "take1_skip2"]],
                visitedNodes: ["root", "take1"],
                successNodes: ["take1_take2", "take1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "take 1" }, { val: "skip 2" }]
              }
            },
            vars: [
              ["leaf reached", "{1}"],
              ["collected", "{1,2}, {1}"]
            ]
          },
          {
            codeLine: 5,
            narration: "BACKTRACK TO ROOT: Un-choose element 1 (pop 1). The call stack pops back up to root { }.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "root",
                visitedNodes: ["take1"],
                successNodes: ["take1_take2", "take1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }]
              }
            },
            vars: [
              ["back at", "root { }"],
              ["next edge", "skip 1"]
            ]
          },
          {
            codeLine: 3,
            narration: "EXPLORE RIGHT SUBTREE: Follow edge 'skip 1'. Partial solution is empty { }.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "skip1",
                activeEdges: [["root", "skip1"]],
                visitedNodes: ["root", "take1"],
                successNodes: ["take1_take2", "take1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "skip 1" }]
              }
            },
            vars: [
              ["at node", "skip 1"],
              ["partial", "{ }"]
            ]
          },
          {
            codeLine: 3,
            narration: "DECISION: From skip 1, choose 'take 2'. Push 2 into partial solution -> {2}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26 }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "skip1_take2",
                activeEdges: [["root", "skip1"], ["skip1", "skip1_take2"]],
                visitedNodes: ["root", "take1", "skip1"],
                successNodes: ["take1_take2", "take1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "skip 1" }, { val: "take 2" }]
              }
            },
            vars: [
              ["at node", "take 2"],
              ["partial", "{2}"]
            ]
          },
          {
            codeLine: 5,
            narration: "LEAF REACHED: {2} is a complete, valid leaf solution! Collect {2}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "skip1_take2",
                activeEdges: [["root", "skip1"], ["skip1", "skip1_take2"]],
                visitedNodes: ["root", "take1", "skip1"],
                successNodes: ["take1_take2", "take1_skip2", "skip1_take2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓", "skip1_take2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}", "{2}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "skip 1" }, { val: "take 2" }]
              }
            },
            vars: [
              ["leaf reached", "{2}"],
              ["leaves reached", 3]
            ]
          },
          {
            codeLine: 5,
            narration: "UN-CHOOSE 2 and explore final edge 'skip 2' from skip 1. Partial solution is { }.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26 },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "skip1_skip2",
                activeEdges: [["root", "skip1"], ["skip1", "skip1_skip2"]],
                visitedNodes: ["root", "take1", "skip1"],
                successNodes: ["take1_take2", "take1_skip2", "skip1_take2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓", "skip1_take2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}", "{2}"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "skip 1" }, { val: "skip 2" }]
              }
            },
            vars: [
              ["at node", "skip 2"],
              ["partial", "{ }"]
            ]
          },
          {
            codeLine: 5,
            narration: "LEAF REACHED: Empty set { } is complete! Collect { } as the 4th leaf.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "skip1_skip2",
                activeEdges: [["root", "skip1"], ["skip1", "skip1_skip2"]],
                visitedNodes: ["root", "take1", "skip1"],
                successNodes: ["take1_take2", "take1_skip2", "skip1_take2", "skip1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓", "skip1_take2": "✓", "skip1_skip2": "✓" },
                title: "NODES = PARTIAL SOLUTIONS, EDGES = CHOICES"
              },
              results: ["{1,2}", "{1}", "{2}", "{ }"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "skip 1" }, { val: "skip 2" }]
              }
            },
            vars: [
              ["leaf reached", "{ }"],
              ["total leaves", "4 of 4"]
            ]
          },
          {
            codeLine: 9,
            narration: "TREE FULLY TRAVERSED: All 2^2 = 4 leaves reached: {1,2}, {1}, {2}, { }. Backtracking completely explored the solution space with O(N) memory.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "take1", label: "take 1", x: 160, y: 110, width: 62, height: 28 },
                  { id: "skip1", label: "skip 1", x: 300, y: 110, width: 62, height: 28 },
                  { id: "take1_skip2", label: "{1}", x: 125, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "take1_take2", label: "{1,2}", x: 195, y: 190, width: 48, height: 26, isSuccess: true },
                  { id: "skip1_skip2", label: "{ }", x: 265, y: 190, width: 40, height: 26, isSuccess: true },
                  { id: "skip1_take2", label: "{2}", x: 335, y: 190, width: 40, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "take1" },
                  { from: "root", to: "skip1" },
                  { from: "take1", to: "take1_skip2" },
                  { from: "take1", to: "take1_take2" },
                  { from: "skip1", to: "skip1_skip2" },
                  { from: "skip1", to: "skip1_take2" }
                ],
                activeNode: "root",
                visitedNodes: ["root", "take1", "skip1"],
                successNodes: ["take1_take2", "take1_skip2", "skip1_take2", "skip1_skip2"],
                paramBadges: { "take1_take2": "✓", "take1_skip2": "✓", "skip1_take2": "✓", "skip1_skip2": "✓" },
                title: "BACKTRACKING TREE EXPLORATION COMPLETE"
              },
              results: ["{1,2}", "{1}", "{2}", "{ }"],
              resultsTitle: "LEAVES REACHED",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "All 4 Leaves Reached"
            },
            vars: [
              ["total subsets", 4],
              ["time", "O(2^N)"],
              ["space", "O(N) depth"]
            ]
          }
        ]
      },
      {
        id: 'branch-pruning-tree',
        label: 'Branch Pruning (Cutting Dead Subtrees)',
        complexity: {
          time: 'O(b^d) bounded by pruning',
          space: 'O(d) recursion stack'
        },
        pseudocode: [
          "explore(path, sum, target):",
          "  if sum > target:              // PRUNING RULE",
          "    prune_branch()              // cut off entire subtree",
          "    return",
          "  if path is complete:",
          "    if sum == target: collect(path)",
          "    return",
          "  for choice in choices:",
          "    path.push(choice)",
          "    explore(path, sum + choice, target)",
          "    path.pop()                  // undo"
        ],
        starterCode: {
          javascript: "function solveWithPruning(nums, target) {\n  const results = [];\n  function backtrack(i, path, currentSum) {\n    if (currentSum === target) {\n      results.push([...path]);\n      return;\n    }\n    if (currentSum > target || i === nums.length) return; // PRUNE!\n    \n    // Choice 1: Include\n    path.push(nums[i]);\n    backtrack(i + 1, path, currentSum + nums[i]);\n    path.pop();\n    \n    // Choice 2: Exclude\n    backtrack(i + 1, path, currentSum);\n  }\n  backtrack(0, [], 0);\n  return results;\n}",
          python: "def solve_with_pruning(nums: list[int], target: int) -> list[list[int]]:\n    results = []\n    def backtrack(i, path, current_sum):\n        if current_sum == target:\n            results.append(list(path))\n            return\n        if current_sum > target or i == len(nums): # PRUNE!\n            return\n        \n        # Choice 1: Include\n        path.append(nums[i])\n        backtrack(i + 1, path, current_sum + nums[i])\n        path.pop()\n        \n        # Choice 2: Exclude\n        backtrack(i + 1, path, current_sum)\n        \n    backtrack(0, [], 0)\n    return results"
        },
        solutionCode: {
          javascript: "function solveWithPruning(nums, target) {\n  const results = [];\n  function backtrack(i, path, currentSum) {\n    if (currentSum === target) {\n      results.push([...path]);\n      return;\n    }\n    if (currentSum > target || i === nums.length) return; // PRUNE!\n    \n    // Choice 1: Include\n    path.push(nums[i]);\n    backtrack(i + 1, path, currentSum + nums[i]);\n    path.pop();\n    \n    // Choice 2: Exclude\n    backtrack(i + 1, path, currentSum);\n  }\n  backtrack(0, [], 0);\n  return results;\n}",
          python: "def solve_with_pruning(nums: list[int], target: int) -> list[list[int]]:\n    results = []\n    def backtrack(i, path, current_sum):\n        if current_sum == target:\n            results.append(list(path))\n            return\n        if current_sum > target or i == len(nums): # PRUNE!\n            return\n        \n        # Choice 1: Include\n        path.append(nums[i])\n        backtrack(i + 1, path, current_sum + nums[i])\n        path.pop()\n        \n        # Choice 2: Exclude\n        backtrack(i + 1, path, current_sum)\n        \n    backtrack(0, [], 0)\n    return results"
        },
        testCases: [
          {
            input: [[1, 2, 3], 3],
            expected: [[1, 2], [3]],
            description: "Subsets summing to target 3 with pruning"
          }
        ],
        steps: [
          {
            codeLine: 2,
            narration: "Pruning Mechanism: When exploring combinations for target sum = 3, evaluating [1, 2, 3] yields sum 6 > 3. Backtracking immediately cuts the branch without recursing into deeper invalid descendants.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[], s=0", x: 230, y: 35 },
                  { id: "inc1", label: "[1], s=1", x: 130, y: 105 },
                  { id: "exc1", label: "[], s=0", x: 330, y: 105 },
                  { id: "inc1_inc2", label: "[1,2], s=3", x: 70, y: 175, isSuccess: true },
                  { id: "p3", label: "[1,2,3] s=6", x: 40, y: 245, isPruned: true },
                  { id: "sol3", label: "[3], s=3", x: 350, y: 245, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "inc1", label: "+1" },
                  { from: "root", to: "exc1", label: "skip" },
                  { from: "inc1", to: "inc1_inc2", label: "+2" },
                  { from: "inc1_inc2", to: "p3", label: "+3", isPruned: true },
                  { from: "exc1", to: "sol3", label: "+3" }
                ],
                activeNode: "p3",
                prunedNodes: ["p3"],
                paramBadges: { "p3": "PRUNED ✗ (6>3)" },
                title: "BRANCH PRUNING AT VIOLATION"
              },
              results: ["[1, 2]"],
              resultsTitle: "VALID SOLUTIONS",
              horizontalStack: {
                title: "CALL STACK",
                items: [{ val: "[]" }, { val: "[1]" }]
              }
            },
            vars: [
              ["prune condition", "sum > 3 (6 > 3)"],
              ["subtree saved", "O(2^(N-depth))"]
            ]
          },
          {
            codeLine: 6,
            narration: "Valid leaf [3] collected through skip 1 -> skip 2 -> include 3 branch. Final solutions: [1, 2] and [3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[], s=0", x: 230, y: 35 },
                  { id: "inc1", label: "[1], s=1", x: 130, y: 105 },
                  { id: "exc1", label: "[], s=0", x: 330, y: 105 },
                  { id: "inc1_inc2", label: "[1,2], s=3", x: 70, y: 175, isSuccess: true },
                  { id: "p3", label: "[1,2,3] s=6", x: 40, y: 245, isPruned: true },
                  { id: "sol3", label: "[3], s=3", x: 350, y: 245, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "inc1", label: "+1" },
                  { from: "root", to: "exc1", label: "skip" },
                  { from: "inc1", to: "inc1_inc2", label: "+2" },
                  { from: "inc1_inc2", to: "p3", label: "+3", isPruned: true },
                  { from: "exc1", to: "sol3", label: "+3" }
                ],
                activeNode: "sol3",
                visitedNodes: ["root", "inc1", "exc1"],
                successNodes: ["inc1_inc2", "sol3"],
                paramBadges: { "sol3": "✓ MATCH" },
                title: "PRUNED TREE SEARCH COMPLETE"
              },
              results: ["[1, 2]", "[3]"],
              resultsTitle: "VALID SOLUTIONS",
              horizontalStack: {
                title: "CALL STACK",
                items: []
              }
            },
            best: {
              label: "Pruned Search Completed: 2 Solutions"
            },
            vars: [
              ["solutions", "[[1, 2], [3]]"],
              ["efficiency", "Skipped ~50% of search space"]
            ]
          }
        ]
      }
    ]
  },

  // 4. Subsets (LeetCode #78 - Medium)
  {
    id: 'subsets',
    patternId: 'backtracking',
    title: 'Subsets',
    subtitle: 'Every node of the tree is a subset',
    kind: 'problem',
    leetcode: {
      id: 78,
      slug: 'subsets',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Meta', 'Google'],
    statement: "Given an array of distinct integers, return all possible subsets (the power set), with no duplicate subsets in the result.",
    visualType: 'backtracking',
    initialInput: [1, 2, 3],
    approaches: [
      {
        id: 'backtracking-extend-later',
        label: 'Backtracking - extend with later elements',
        complexity: {
          time: 'O(2^n · n)',
          space: 'O(n)'
        },
        pseudocode: [
          "subsets(start, path):",
          "  record path              // every node is a subset",
          "  for i in start..n-1:",
          "    path.push(arr[i])      // choose",
          "    subsets(i+1, path)     // explore",
          "    path.pop()             // un-choose (backtrack)"
        ],
        starterCode: {
          javascript: "function subsets(nums) {\n  const result = [];\n  \n  function backtrack(start, path) {\n    result.push([...path]); // every node is a subset\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);   // choose\n      backtrack(i + 1, path); // explore\n      path.pop();           // un-choose\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(start, path):\n        result.append(list(path)) # every node is a subset\n        for i in range(start, len(nums)):\n            path.append(nums[i])   # choose\n            backtrack(i + 1, path) # explore\n            path.pop()             # un-choose\n            \n    backtrack(0, [])\n    return result"
        },
        solutionCode: {
          javascript: "function subsets(nums) {\n  const result = [];\n  \n  function backtrack(start, path) {\n    result.push([...path]); // every node is a subset\n    for (let i = start; i < nums.length; i++) {\n      path.push(nums[i]);   // choose\n      backtrack(i + 1, path); // explore\n      path.pop();           // un-choose\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(start, path):\n        result.append(list(path)) # every node is a subset\n        for i in range(start, len(nums)):\n            path.append(nums[i])   # choose\n            backtrack(i + 1, path) # explore\n            path.pop()             # un-choose\n            \n    backtrack(0, [])\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]],
            description: "All 8 subsets of [1, 2, 3]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Generate EVERY subset of [1, 2, 3]. Backtracking builds them by extending a partial subset with later elements. Each node in this tree is one partial subset; exploring the whole tree visits every subset exactly once.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26 },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26 },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "root",
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "SUBSETS FOUND"
            },
            vars: [
              ["input", "[1, 2, 3]"]
            ]
          },
          {
            codeLine: 2,
            narration: "Record empty subset { }: every node is a valid subset! Root { } is collected.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26 },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26 },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "root",
                successNodes: ["root"],
                paramBadges: { "root": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }]
              }
            },
            vars: [
              ["recorded", "{ }"],
              ["count", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "Loop i=0: CHOOSE 1. path becomes {1}. Recurse with subsets(start=1, path={1}).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26 },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26 },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root"],
                successNodes: ["root"],
                paramBadges: { "root": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "{1}"]
            ]
          },
          {
            codeLine: 2,
            narration: "Record subset {1}. Subsets found now: { }, {1}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26 },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root"],
                successNodes: ["root", "1"],
                paramBadges: { "root": "✓", "1": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }]
              }
            },
            vars: [
              ["recorded", "{1}"],
              ["count", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From {1}, loop i=1: CHOOSE 2. path becomes {1, 2}. Recurse with subsets(start=2, path={1, 2}).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26 },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "12",
                activeEdges: [["root", "1"], ["1", "12"]],
                visitedNodes: ["root", "1"],
                successNodes: ["root", "1"],
                paramBadges: { "root": "✓", "1": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }, { val: "{1,2}" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "{1, 2}"]
            ]
          },
          {
            codeLine: 2,
            narration: "Record subset {1, 2}. Subsets found: { }, {1}, {1, 2}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "12",
                activeEdges: [["root", "1"], ["1", "12"]],
                visitedNodes: ["root", "1"],
                successNodes: ["root", "1", "12"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }, { val: "{1,2}" }]
              }
            },
            vars: [
              ["recorded", "{1, 2}"],
              ["count", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "From {1, 2}, loop i=2: CHOOSE 3. path becomes {1, 2, 3}. Recurse with start=3.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "123",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "123"]],
                visitedNodes: ["root", "1", "12"],
                successNodes: ["root", "1", "12"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }, { val: "{1,2}" }, { val: "{1,2,3}" }]
              }
            },
            vars: [
              ["choose", 3],
              ["path", "{1, 2, 3}"]
            ]
          },
          {
            codeLine: 2,
            narration: "Record subset {1, 2, 3}. Start index reaches n=3 (no more elements to extend with).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26 },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "123",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "123"]],
                visitedNodes: ["root", "1", "12"],
                successNodes: ["root", "1", "12", "123"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }, { val: "{1,2}" }, { val: "{1,2,3}" }]
              }
            },
            vars: [
              ["recorded", "{1, 2, 3}"],
              ["count", 4]
            ]
          },
          {
            codeLine: 4,
            narration: "Backtrack pop 3, pop 2 back to {1}. Next loop option: CHOOSE 3 -> reach {1, 3} and record it.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "13",
                activeEdges: [["root", "1"], ["1", "13"]],
                visitedNodes: ["root", "1", "12", "123"],
                successNodes: ["root", "1", "12", "123", "13"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{1}" }, { val: "{1,3}" }]
              }
            },
            vars: [
              ["recorded", "{1, 3}"],
              ["count", 5]
            ]
          },
          {
            codeLine: 6,
            narration: "Backtrack to { }: undo the last choice (pop the element) so we can try the next option. This \"choose → explore → un-choose\" is the heartbeat of backtracking.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "12", "123", "13"],
                successNodes: ["root", "1", "12", "123", "13"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }]
              }
            },
            vars: [
              ["back at", "{ }"]
            ]
          },
          {
            codeLine: 4,
            narration: "From { }, loop i=1: CHOOSE 2 -> path becomes {2}. Recurse with subsets(start=2, path={2}).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26 },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "1", "12", "123", "13"],
                successNodes: ["root", "1", "12", "123", "13"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{2}" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "{2}"]
            ]
          },
          {
            codeLine: 2,
            narration: "Record subset {2}. Subsets found now: 6 of 8.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26 },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "1", "12", "123", "13"],
                successNodes: ["root", "1", "12", "123", "13", "2"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{2}" }]
              }
            },
            vars: [
              ["recorded", "{2}"],
              ["count", 6]
            ]
          },
          {
            codeLine: 4,
            narration: "From {2}, loop i=2: CHOOSE 3 -> path becomes {2, 3}. Recurse and record {2, 3}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "23",
                activeEdges: [["root", "2"], ["2", "23"]],
                visitedNodes: ["root", "1", "12", "123", "13", "2"],
                successNodes: ["root", "1", "12", "123", "13", "2", "23"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓", "23": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}", "{2,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{2}" }, { val: "{2,3}" }]
              }
            },
            vars: [
              ["recorded", "{2, 3}"],
              ["count", 7]
            ]
          },
          {
            codeLine: 6,
            narration: "Pop 3 back to {2}, then pop 2 back to { }. Ready for final option starting at element 3.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26 },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "12", "123", "13", "2", "23"],
                successNodes: ["root", "1", "12", "123", "13", "2", "23"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓", "23": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}", "{2,3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }]
              }
            },
            vars: [
              ["back at", "{ }"],
              ["next choice", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "From { }, loop i=2: CHOOSE 3 -> path becomes {3}. Recurse and record {3}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "3",
                activeEdges: [["root", "3"]],
                visitedNodes: ["root", "1", "12", "123", "13", "2", "23"],
                successNodes: ["root", "1", "12", "123", "13", "2", "23", "3"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓", "23": "✓", "3": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}", "{2,3}", "{3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }, { val: "{3}" }]
              }
            },
            vars: [
              ["recorded", "{3}"],
              ["count", 8]
            ]
          },
          {
            codeLine: 6,
            narration: "Pop 3 back to { }. Loop finishes: all choices exhausted!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "12", "123", "13", "2", "23", "3"],
                successNodes: ["root", "1", "12", "123", "13", "2", "23", "3"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓", "23": "✓", "3": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}", "{2,3}", "{3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "{ }" }]
              }
            },
            vars: [
              ["back at", "{ }"],
              ["status", "done exploring"]
            ]
          },
          {
            codeLine: 1,
            narration: "COMPLETE: Generated all 2^3 = 8 subsets. Notice every node in the recursion tree formed a valid subset with zero duplicates due to forward-index constraints.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "{ }", x: 230, y: 40, width: 44, height: 26, isSuccess: true },
                  { id: "1", label: "{1}", x: 130, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "2", label: "{2}", x: 250, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "3", label: "{3}", x: 340, y: 110, width: 42, height: 26, isSuccess: true },
                  { id: "12", label: "{1,2}", x: 90, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "13", label: "{1,3}", x: 170, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "23", label: "{2,3}", x: 280, y: 180, width: 48, height: 26, isSuccess: true },
                  { id: "123", label: "{1,2,3}", x: 90, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "23" },
                  { from: "12", to: "123" }
                ],
                visitedNodes: ["root", "1", "2", "3", "12", "13", "23", "123"],
                successNodes: ["root", "1", "2", "3", "12", "13", "23", "123"],
                paramBadges: { "root": "✓", "1": "✓", "12": "✓", "123": "✓", "13": "✓", "2": "✓", "23": "✓", "3": "✓" },
                title: "ALL 8 SUBSETS GENERATED"
              },
              results: ["{ }", "{1}", "{1,2}", "{1,2,3}", "{1,3}", "{2}", "{2,3}", "{3}"],
              resultsTitle: "SUBSETS FOUND",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "Total Subsets: 2^3 = 8"
            },
            vars: [
              ["total subsets", 8],
              ["time", "O(2^N · N)"],
              ["space", "O(N)"]
            ]
          }
        ]
      },
      {
        id: 'cascading-subsets',
        label: 'Cascading / Iterative Generation',
        complexity: {
          time: 'O(N · 2^N)',
          space: 'O(1) auxiliary space'
        },
        pseudocode: [
          "function subsets(nums):",
          "  result = [[]]",
          "  for num in nums:",
          "    new_subsets = []",
          "    for existing in result:",
          "      new_subsets.append(existing + [num])",
          "    result.extend(new_subsets)",
          "  return result"
        ],
        starterCode: {
          javascript: "function subsets(nums) {\n  let result = [[]];\n  for (const num of nums) {\n    const len = result.length;\n    for (let i = 0; i < len; i++) {\n      result.push([...result[i], num]);\n    }\n  }\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    result = [[]]\n    for num in nums:\n        result += [curr + [num] for curr in result]\n    return result"
        },
        solutionCode: {
          javascript: "function subsets(nums) {\n  let result = [[]];\n  for (const num of nums) {\n    const len = result.length;\n    for (let i = 0; i < len; i++) {\n      result.push([...result[i], num]);\n    }\n  }\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    result = [[]]\n    for num in nums:\n        result += [curr + [num] for curr in result]\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
            description: "Cascading iterative subset generation"
          }
        ],
        steps: [
          {
            codeLine: 2,
            narration: "Start with empty set [[]]. For each element num, duplicate all existing subsets and append num.",
            backtracking: {
              results: ["[]"],
              resultsTitle: "CASCADING SUBSETS",
              horizontalStack: {
                title: "CURRENT ELEMENT",
                items: [{ val: "start: [[]]" }]
              }
            },
            vars: [
              ["base", "[[]]"]
            ]
          },
          {
            codeLine: 5,
            narration: "Add 1 -> [[], [1]]. Add 2 -> [[], [1], [2], [1,2]]. Add 3 -> 8 total subsets.",
            backtracking: {
              results: ["[]", "[1]", "[2]", "[1, 2]", "[3]", "[1, 3]", "[2, 3]", "[1, 2, 3]"],
              resultsTitle: "CASCADING SUBSETS",
              horizontalStack: {
                title: "CURRENT ELEMENT",
                items: [{ val: "num = 3" }]
              }
            },
            best: {
              label: "8 Subsets via Cascading"
            },
            vars: [
              ["total subsets", 8],
              ["time", "O(N · 2^N)"]
            ]
          }
        ]
      },
      {
        id: 'bitmask-subsets',
        label: 'Bit Manipulation / Binary Mask',
        complexity: {
          time: 'O(N · 2^N)',
          space: 'O(1) auxiliary space'
        },
        pseudocode: [
          "function subsets(nums):",
          "  n = len(nums)",
          "  result = []",
          "  for mask from 0 to (1 << n) - 1:     // 0 to 7",
          "    sub = []",
          "    for i from 0 to n - 1:",
          "      if (mask >> i) & 1: sub.push(nums[i])",
          "    result.append(sub)",
          "  return result"
        ],
        starterCode: {
          javascript: "function subsets(nums) {\n  const n = nums.length;\n  const result = [];\n  const total = 1 << n;\n  for (let mask = 0; mask < total; mask++) {\n    const sub = [];\n    for (let i = 0; i < n; i++) {\n      if ((mask >> i) & 1) sub.push(nums[i]);\n    }\n    result.push(sub);\n  }\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    n = len(nums)\n    result = []\n    for mask in range(1 << n):\n        sub = [nums[i] for i in range(n) if (mask >> i) & 1]\n        result.append(sub)\n    return result"
        },
        solutionCode: {
          javascript: "function subsets(nums) {\n  const n = nums.length;\n  const result = [];\n  const total = 1 << n;\n  for (let mask = 0; mask < total; mask++) {\n    const sub = [];\n    for (let i = 0; i < n; i++) {\n      if ((mask >> i) & 1) sub.push(nums[i]);\n    }\n    result.push(sub);\n  }\n  return result;\n}",
          python: "def subsets(nums: list[int]) -> list[list[int]]:\n    n = len(nums)\n    result = []\n    for mask in range(1 << n):\n        sub = [nums[i] for i in range(n) if (mask >> i) & 1]\n        result.append(sub)\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]],
            description: "Binary mask generation of subsets"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Bitmask Approach: An array of size 3 has 2^3 = 8 subsets. Each integer from 0 to 7 (binary 000 to 111) uniquely selects which elements to include.",
            backtracking: {
              results: ["000 -> []", "001 -> [1]", "010 -> [2]", "011 -> [1, 2]", "100 -> [3]", "101 -> [1, 3]", "110 -> [2, 3]", "111 -> [1, 2, 3]"],
              resultsTitle: "BITMASKS (0..7)",
              horizontalStack: {
                title: "BINARY MASK",
                items: [{ val: "0..7 binary" }]
              }
            },
            best: {
              label: "8 Subsets via Bitmask"
            },
            vars: [
              ["total masks", "1 << 3 = 8"],
              ["time", "O(N · 2^N)"],
              ["space", "O(1)"]
            ]
          }
        ]
      }
    ]
  },

  // 5. Permutations (LeetCode #46 - Medium)
  {
    id: 'permutations',
    patternId: 'backtracking',
    title: 'Permutations',
    subtitle: 'Choose an unused element at each level',
    kind: 'problem',
    leetcode: {
      id: 46,
      slug: 'permutations',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Meta'],
    statement: "Given an array of distinct integers, return all possible orderings (permutations) of the array, in any order.",
    visualType: 'backtracking',
    initialInput: [1, 2, 3],
    approaches: [
      {
        id: 'backtracking-choose-unused',
        label: 'Backtracking - choose an unused element at each level',
        complexity: {
          time: 'O(n · n!)',
          space: 'O(n)'
        },
        pseudocode: [
          "permute(path, used):",
          "  if path.length == n:",
          "    record path             // a complete permutation",
          "  for num in nums where !used[num]:",
          "    used[num] = true; path.push(num)  // choose",
          "    permute(path, used)               // explore",
          "    used[num] = false; path.pop()     // un-choose"
        ],
        starterCode: {
          javascript: "function permute(nums) {\n  const result = [];\n  const used = {};\n  \n  function backtrack(path) {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    for (const num of nums) {\n      if (used[num]) continue;\n      used[num] = true;\n      path.push(num);\n      backtrack(path);\n      path.pop();\n      used[num] = false;\n    }\n  }\n  \n  backtrack([]);\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    result = []\n    used = set()\n    \n    def backtrack(path):\n        if len(path) == len(nums):\n            result.append(list(path))\n            return\n        for num in nums:\n            if num in used: continue\n            used.add(num)\n            path.append(num)\n            backtrack(path)\n            path.pop()\n            used.remove(num)\n            \n    backtrack([])\n    return result"
        },
        solutionCode: {
          javascript: "function permute(nums) {\n  const result = [];\n  const used = {};\n  \n  function backtrack(path) {\n    if (path.length === nums.length) {\n      result.push([...path]);\n      return;\n    }\n    for (const num of nums) {\n      if (used[num]) continue;\n      used[num] = true;\n      path.push(num);\n      backtrack(path);\n      path.pop();\n      used[num] = false;\n    }\n  }\n  \n  backtrack([]);\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    result = []\n    used = set()\n    \n    def backtrack(path):\n        if len(path) == len(nums):\n            result.append(list(path))\n            return\n        for num in nums:\n            if num in used: continue\n            used.add(num)\n            path.append(num)\n            backtrack(path)\n            path.pop()\n            used.remove(num)\n            \n    backtrack([])\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]],
            description: "All 6 permutations of [1, 2, 3]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Generate EVERY ordering of [1, 2, 3]. At each level we CHOOSE one number that has not been used yet, then recurse on what is left. A path from the root to a depth-3 leaf spells out one full permutation.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 270, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 110, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 270, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 430, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 70, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 150, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 230, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 310, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 390, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 470, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 70, y: 250, width: 56, height: 26 },
                  { id: "132", label: "[1,3,2]", x: 150, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 230, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 310, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 390, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 470, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "root",
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "PERMUTATIONS"
            },
            vars: [
              ["input", "[1, 2, 3]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From root [ ], loop over unused numbers {1, 2, 3}. CHOOSE 1 -> path becomes [1]. Recurse with used={1}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 270, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 110, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 270, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 430, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 70, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 150, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 230, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 310, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 390, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 470, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 70, y: 250, width: 56, height: 26 },
                  { id: "132", label: "[1,3,2]", x: 150, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 230, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 310, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 390, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 470, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root"],
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "[1]"],
              ["unused left", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From [1], remaining unused options: {2, 3}. CHOOSE 2 -> path becomes [1, 2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 270, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 110, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 270, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 430, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 70, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 150, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 230, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 310, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 390, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 470, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 70, y: 250, width: 56, height: 26 },
                  { id: "132", label: "[1,3,2]", x: 150, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 230, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 310, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 390, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 470, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "12",
                activeEdges: [["root", "1"], ["1", "12"]],
                visitedNodes: ["root", "1"],
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,2]" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "[1, 2]"],
              ["unused left", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "From [1, 2], only 3 remains unused. CHOOSE 3 -> reach leaf [1, 2, 3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "123",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "123"]],
                visitedNodes: ["root", "1", "12"],
                successNodes: ["123"],
                paramBadges: { "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,2]" }, { val: "[1,2,3]" }]
              }
            },
            vars: [
              ["choose", 3],
              ["path", "[1, 2, 3]"],
              ["unused left", 0]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: path length == 3. Complete permutation [1, 2, 3] recorded!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "123",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "123"]],
                visitedNodes: ["root", "1", "12", "123"],
                successNodes: ["123"],
                paramBadges: { "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,2]" }, { val: "[1,2,3]" }]
              }
            },
            vars: [
              ["recorded", "[1, 2, 3]"],
              ["permutations found", 1]
            ]
          },
          {
            codeLine: 7,
            narration: "UN-CHOOSE 3: pop 3, used[3] = false -> back to [1, 2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "12",
                activeEdges: [["root", "1"], ["1", "12"]],
                visitedNodes: ["root", "1"],
                successNodes: ["123"],
                paramBadges: { "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,2]" }]
              }
            },
            vars: [
              ["back at", "[1, 2]"],
              ["un-choose", 3]
            ]
          },
          {
            codeLine: 7,
            narration: "Finished loop at [1, 2]: pop 2, used[2] = false -> back to [1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root"],
                successNodes: ["123"],
                paramBadges: { "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }]
              }
            },
            vars: [
              ["back at", "[1]"],
              ["next choice", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "From [1], next unused option is 3. CHOOSE 3 -> path becomes [1, 3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26 },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "13",
                activeEdges: [["root", "1"], ["1", "13"]],
                visitedNodes: ["root", "1"],
                successNodes: ["123"],
                paramBadges: { "123": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,3]" }]
              }
            },
            vars: [
              ["choose", 3],
              ["path", "[1, 3]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [1, 3], remaining unused is 2. CHOOSE 2 -> reach leaf [1, 3, 2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "132",
                activeEdges: [["root", "1"], ["1", "13"], ["13", "132"]],
                visitedNodes: ["root", "1", "13"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,3]" }, { val: "[1,3,2]" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "[1, 3, 2]"]
            ]
          },
          {
            codeLine: 3,
            narration: "Leaf [1, 3, 2] complete! Record [1, 3, 2]. 2 permutations found.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "132",
                activeEdges: [["root", "1"], ["1", "13"], ["13", "132"]],
                visitedNodes: ["root", "1", "13", "132"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }, { val: "[1,3]" }, { val: "[1,3,2]" }]
              }
            },
            vars: [
              ["recorded", "[1, 3, 2]"],
              ["permutations found", 2]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 2 -> back to [1, 3], then pop 3 -> back to [1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root", "12", "123", "13", "132"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[1]" }]
              }
            },
            vars: [
              ["back at", "[1]"]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 1, used[1] = false -> back to root [ ]. All permutations starting with 1 are complete.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "12", "123", "13", "132"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }]
              }
            },
            vars: [
              ["back at", "[ ]"],
              ["next branch", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From root [ ], CHOOSE 2 -> path becomes [2]. Recurse with used={2}.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "1", "12", "123", "13", "132"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "[2]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [2], choose unused 1 -> path becomes [2, 1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26 },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "21",
                activeEdges: [["root", "2"], ["2", "21"]],
                visitedNodes: ["root", "2"],
                successNodes: ["123", "132"],
                paramBadges: { "123": "✓", "132": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,1]" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "[2, 1]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [2, 1], choose remaining 3 -> reach leaf [2, 1, 3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "213",
                activeEdges: [["root", "2"], ["2", "21"], ["21", "213"]],
                visitedNodes: ["root", "2", "21"],
                successNodes: ["123", "132", "213"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,1]" }, { val: "[2,1,3]" }]
              }
            },
            vars: [
              ["choose", 3],
              ["path", "[2, 1, 3]"]
            ]
          },
          {
            codeLine: 3,
            narration: "Leaf [2, 1, 3] complete! Record [2, 1, 3]. Subsets found: 3.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "213",
                activeEdges: [["root", "2"], ["2", "21"], ["21", "213"]],
                visitedNodes: ["root", "2", "21", "213"],
                successNodes: ["123", "132", "213"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,1]" }, { val: "[2,1,3]" }]
              }
            },
            vars: [
              ["recorded", "[2, 1, 3]"],
              ["permutations found", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "At [2,3], 1 numbers remain unused. CHOOSE one to place next, options: [2,3,1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26 },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "23",
                activeEdges: [["root", "2"], ["2", "23"]],
                visitedNodes: ["root", "2", "21", "213"],
                successNodes: ["123", "132", "213"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,3]" }]
              }
            },
            vars: [
              ["current", "[2, 3]"],
              ["unused left", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "From [2, 3], choose 1 -> reach leaf [2, 3, 1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "231",
                activeEdges: [["root", "2"], ["2", "23"], ["23", "231"]],
                visitedNodes: ["root", "2", "23"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,3]" }, { val: "[2,3,1]" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "[2, 3, 1]"]
            ]
          },
          {
            codeLine: 3,
            narration: "Leaf [2, 3, 1] complete! Record [2, 3, 1]. 4 permutations recorded.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "231",
                activeEdges: [["root", "2"], ["2", "23"], ["23", "231"]],
                visitedNodes: ["root", "2", "23", "231"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }, { val: "[2,3]" }, { val: "[2,3,1]" }]
              }
            },
            vars: [
              ["recorded", "[2, 3, 1]"],
              ["permutations found", 4]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 1 -> back to [2, 3], then pop 3 -> back to [2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "21", "213", "23", "231"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[2]" }]
              }
            },
            vars: [
              ["back at", "[2]"]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 2 -> back to root [ ]. Branches starting with 1 and 2 are complete!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "2", "21", "213", "23", "231"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }]
              }
            },
            vars: [
              ["back at", "[ ]"],
              ["next branch", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "From root [ ], CHOOSE 3 -> path becomes [3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "3",
                activeEdges: [["root", "3"]],
                visitedNodes: ["root", "1", "2"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }]
              }
            },
            vars: [
              ["choose", 3],
              ["path", "[3]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [3], choose unused 1 -> path becomes [3, 1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26 },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "31",
                activeEdges: [["root", "3"], ["3", "31"]],
                visitedNodes: ["root", "3"],
                successNodes: ["123", "132", "213", "231"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,1]" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "[3, 1]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [3, 1], choose remaining 2 -> reach leaf [3, 1, 2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "312",
                activeEdges: [["root", "3"], ["3", "31"], ["31", "312"]],
                visitedNodes: ["root", "3", "31"],
                successNodes: ["123", "132", "213", "231", "312"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,1]" }, { val: "[3,1,2]" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "[3, 1, 2]"]
            ]
          },
          {
            codeLine: 3,
            narration: "Leaf [3, 1, 2] complete! Record [3, 1, 2]. 5 permutations recorded.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "312",
                activeEdges: [["root", "3"], ["3", "31"], ["31", "312"]],
                visitedNodes: ["root", "3", "31", "312"],
                successNodes: ["123", "132", "213", "231", "312"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,1]" }, { val: "[3,1,2]" }]
              }
            },
            vars: [
              ["recorded", "[3, 1, 2]"],
              ["permutations found", 5]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 2 -> back to [3, 1], then pop 1 -> back to [3].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "3",
                activeEdges: [["root", "3"]],
                visitedNodes: ["root", "31", "312"],
                successNodes: ["123", "132", "213", "231", "312"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }]
              }
            },
            vars: [
              ["back at", "[3]"],
              ["next option", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From [3], next unused option is 2. CHOOSE 2 -> path becomes [3, 2].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "32",
                activeEdges: [["root", "3"], ["3", "32"]],
                visitedNodes: ["root", "3"],
                successNodes: ["123", "132", "213", "231", "312"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,2]" }]
              }
            },
            vars: [
              ["choose", 2],
              ["path", "[3, 2]"]
            ]
          },
          {
            codeLine: 4,
            narration: "From [3, 2], remaining unused is 1. CHOOSE 1 -> reach leaf [3, 2, 1].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "321",
                activeEdges: [["root", "3"], ["3", "32"], ["32", "321"]],
                visitedNodes: ["root", "3", "32"],
                successNodes: ["123", "132", "213", "231", "312", "321"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓", "321": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,2]" }, { val: "[3,2,1]" }]
              }
            },
            vars: [
              ["choose", 1],
              ["path", "[3, 2, 1]"]
            ]
          },
          {
            codeLine: 3,
            narration: "Leaf [3, 2, 1] complete! Record [3, 2, 1]. All 6 permutations found!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "321",
                activeEdges: [["root", "3"], ["3", "32"], ["32", "321"]],
                visitedNodes: ["root", "3", "32", "321"],
                successNodes: ["123", "132", "213", "231", "312", "321"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓", "321": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]", "[3,2,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }, { val: "[3]" }, { val: "[3,2]" }, { val: "[3,2,1]" }]
              }
            },
            vars: [
              ["recorded", "[3, 2, 1]"],
              ["permutations found", 6]
            ]
          },
          {
            codeLine: 7,
            narration: "Pop 1 -> back to [3, 2], pop 2 -> back to [3], pop 3 -> back to root [ ].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "2", "3", "31", "312", "32", "321"],
                successNodes: ["123", "132", "213", "231", "312", "321"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓", "321": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]", "[3,2,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "[ ]" }]
              }
            },
            vars: [
              ["back at", "[ ]"]
            ]
          },
          {
            codeLine: 1,
            narration: "COMPLETE: Generated all 3! = 6 permutations. Every branch of the state-space tree was explored exhaustively and correctly restored.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "[ ]", x: 230, y: 40, width: 44, height: 26 },
                  { id: "1", label: "[1]", x: 100, y: 110, width: 42, height: 26 },
                  { id: "2", label: "[2]", x: 230, y: 110, width: 42, height: 26 },
                  { id: "3", label: "[3]", x: 360, y: 110, width: 42, height: 26 },
                  { id: "12", label: "[1,2]", x: 65, y: 180, width: 48, height: 26 },
                  { id: "13", label: "[1,3]", x: 135, y: 180, width: 48, height: 26 },
                  { id: "21", label: "[2,1]", x: 195, y: 180, width: 48, height: 26 },
                  { id: "23", label: "[2,3]", x: 265, y: 180, width: 48, height: 26 },
                  { id: "31", label: "[3,1]", x: 325, y: 180, width: 48, height: 26 },
                  { id: "32", label: "[3,2]", x: 395, y: 180, width: 48, height: 26 },
                  { id: "123", label: "[1,2,3]", x: 65, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "132", label: "[1,3,2]", x: 135, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "213", label: "[2,1,3]", x: 195, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "231", label: "[2,3,1]", x: 265, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "312", label: "[3,1,2]", x: 325, y: 250, width: 56, height: 26, isSuccess: true },
                  { id: "321", label: "[3,2,1]", x: 395, y: 250, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "1", to: "12" },
                  { from: "1", to: "13" },
                  { from: "2", to: "21" },
                  { from: "2", to: "23" },
                  { from: "3", to: "31" },
                  { from: "3", to: "32" },
                  { from: "12", to: "123" },
                  { from: "13", to: "132" },
                  { from: "21", to: "213" },
                  { from: "23", to: "231" },
                  { from: "31", to: "312" },
                  { from: "32", to: "321" }
                ],
                visitedNodes: ["root", "1", "2", "3", "12", "13", "21", "23", "31", "32", "123", "132", "213", "231", "312", "321"],
                successNodes: ["123", "132", "213", "231", "312", "321"],
                paramBadges: { "123": "✓", "132": "✓", "213": "✓", "231": "✓", "312": "✓", "321": "✓" },
                title: "ALL 6 PERMUTATIONS GENERATED"
              },
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]", "[3,2,1]"],
              resultsTitle: "PERMUTATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "Total Permutations: 3! = 6"
            },
            vars: [
              ["total permutations", 6],
              ["time", "O(N · N!)"],
              ["space", "O(N) depth"]
            ]
          }
        ]
      },
      {
        id: 'backtracking-swap-inplace',
        label: 'In-Place Swapping Backtracking (O(1) Aux Space)',
        complexity: {
          time: 'O(N · N!)',
          space: 'O(N) recursion stack only'
        },
        pseudocode: [
          "function permute(nums):",
          "  result = []",
          "  function backtrack(first):",
          "    if first == len(nums): result.append(copy(nums)); return",
          "    for i from first to len(nums) - 1:",
          "      swap(nums[first], nums[i])        // choose in-place",
          "      backtrack(first + 1)",
          "      swap(nums[first], nums[i])        // un-choose (swap back)",
          "  backtrack(0)",
          "  return result"
        ],
        starterCode: {
          javascript: "function permute(nums) {\n  const result = [];\n  \n  function backtrack(first) {\n    if (first === nums.length) {\n      result.push([...nums]);\n      return;\n    }\n    for (let i = first; i < nums.length; i++) {\n      [nums[first], nums[i]] = [nums[i], nums[first]]; // swap\n      backtrack(first + 1);\n      [nums[first], nums[i]] = [nums[i], nums[first]]; // backtrack swap\n    }\n  }\n  \n  backtrack(0);\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(first):\n        if first == len(nums):\n            result.append(list(nums))\n            return\n        for i in range(first, len(nums)):\n            nums[first], nums[i] = nums[i], nums[first] # swap\n            backtrack(first + 1)\n            nums[first], nums[i] = nums[i], nums[first] # backtrack swap\n            \n    backtrack(0)\n    return result"
        },
        solutionCode: {
          javascript: "function permute(nums) {\n  const result = [];\n  \n  function backtrack(first) {\n    if (first === nums.length) {\n      result.push([...nums]);\n      return;\n    }\n    for (let i = first; i < nums.length; i++) {\n      [nums[first], nums[i]] = [nums[i], nums[first]]; // swap\n      backtrack(first + 1);\n      [nums[first], nums[i]] = [nums[i], nums[first]]; // backtrack swap\n    }\n  }\n  \n  backtrack(0);\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    result = []\n    \n    def backtrack(first):\n        if first == len(nums):\n            result.append(list(nums))\n            return\n        for i in range(first, len(nums)):\n            nums[first], nums[i] = nums[i], nums[first] # swap\n            backtrack(first + 1)\n            nums[first], nums[i] = nums[i], nums[first] # backtrack swap\n            \n    backtrack(0)\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]],
            description: "In-place swap permutations"
          }
        ],
        steps: [
          {
            codeLine: 5,
            narration: "In-Place Swap Backtracking: Rather than allocating a boolean used array, swap nums[first] with nums[i] to fix the prefix, recurse, then swap back on return.",
            backtracking: {
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,2,1]", "[3,1,2]"],
              resultsTitle: "SWAP PERMUTATIONS",
              horizontalStack: {
                title: "ARRAY STATE",
                items: [{ val: "swap in-place: O(1) aux" }]
              }
            },
            best: {
              label: "6 Permutations via Swapping"
            },
            vars: [
              ["method", "in-place swap"],
              ["space saving", "no used table (O(1) aux)"]
            ]
          }
        ]
      },
      {
        id: 'lexicographical-next-permutation',
        label: 'Lexicographical Generation (Next Permutation Iteration)',
        complexity: {
          time: 'O(N · N!)',
          space: 'O(1) auxiliary space'
        },
        pseudocode: [
          "function permute(nums):",
          "  nums.sort()",
          "  result = [copy(nums)]",
          "  while nextPermutation(nums):",
          "    result.append(copy(nums))",
          "  return result",
          "",
          "function nextPermutation(nums):",
          "  1. Find rightmost pivot i where nums[i] < nums[i+1]",
          "  2. Find rightmost j > i where nums[j] > nums[i]",
          "  3. Swap nums[i] and nums[j]",
          "  4. Reverse suffix nums[i+1...end]"
        ],
        starterCode: {
          javascript: "function permute(nums) {\n  nums.sort((a, b) => a - b);\n  const result = [[...nums]];\n  \n  function nextPermutation(arr) {\n    let i = arr.length - 2;\n    while (i >= 0 && arr[i] >= arr[i + 1]) i--;\n    if (i < 0) return false;\n    \n    let j = arr.length - 1;\n    while (arr[j] <= arr[i]) j--;\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n    \n    let l = i + 1, r = arr.length - 1;\n    while (l < r) {\n      [arr[l], arr[r]] = [arr[r], arr[l]];\n      l++; r--;\n    }\n    return true;\n  }\n  \n  while (nextPermutation(nums)) {\n    result.push([...nums]);\n  }\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    result = [list(nums)]\n    \n    def next_perm(arr):\n        i = len(arr) - 2\n        while i >= 0 and arr[i] >= arr[i + 1]:\n            i -= 1\n        if i < 0: return False\n        \n        j = len(arr) - 1\n        while arr[j] <= arr[i]:\n            j -= 1\n        arr[i], arr[j] = arr[j], arr[i]\n        arr[i + 1:] = reversed(arr[i + 1:])\n        return True\n        \n    while next_perm(nums):\n        result.append(list(nums))\n    return result"
        },
        solutionCode: {
          javascript: "function permute(nums) {\n  nums.sort((a, b) => a - b);\n  const result = [[...nums]];\n  \n  function nextPermutation(arr) {\n    let i = arr.length - 2;\n    while (i >= 0 && arr[i] >= arr[i + 1]) i--;\n    if (i < 0) return false;\n    \n    let j = arr.length - 1;\n    while (arr[j] <= arr[i]) j--;\n    [arr[i], arr[j]] = [arr[j], arr[i]];\n    \n    let l = i + 1, r = arr.length - 1;\n    while (l < r) {\n      [arr[l], arr[r]] = [arr[r], arr[l]];\n      l++; r--;\n    }\n    return true;\n  }\n  \n  while (nextPermutation(nums)) {\n    result.push([...nums]);\n  }\n  return result;\n}",
          python: "def permute(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    result = [list(nums)]\n    \n    def next_perm(arr):\n        i = len(arr) - 2\n        while i >= 0 and arr[i] >= arr[i + 1]:\n            i -= 1\n        if i < 0: return False\n        \n        j = len(arr) - 1\n        while arr[j] <= arr[i]:\n            j -= 1\n        arr[i], arr[j] = arr[j], arr[i]\n        arr[i + 1:] = reversed(arr[i + 1:])\n        return True\n        \n    while next_perm(nums):\n        result.append(list(nums))\n    return result"
        },
        testCases: [
          {
            input: [[1, 2, 3]],
            expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]],
            description: "Lexicographical ordered permutations"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Lexicographical Generation: Generates each permutation strictly in sorted order using Narayana Pandita's nextPermutation algorithm with zero recursion overhead.",
            backtracking: {
              results: ["[1,2,3]", "[1,3,2]", "[2,1,3]", "[2,3,1]", "[3,1,2]", "[3,2,1]"],
              resultsTitle: "LEXICOGRAPHICAL ORDER",
              horizontalStack: {
                title: "ITERATION STATUS",
                items: [{ val: "Narayana's Next Permutation (O(1) aux)" }]
              }
            },
            best: {
              label: "6 Permutations in Lexicographical Order"
            },
            vars: [
              ["method", "nextPermutation iteration"],
              ["order", "strictly sorted lexicographically"],
              ["recursion", "none (iterative)"]
            ]
          }
        ]
      }
    ]
  },

  // 6. Letter Combinations of a Phone Number (LeetCode #17 - Medium)
  {
    id: 'letter-combinations-of-a-phone-number',
    patternId: 'backtracking',
    title: 'Letter Combinations of a Phone Number',
    subtitle: 'One digit per tree level',
    kind: 'problem',
    leetcode: {
      id: 17,
      slug: 'letter-combinations-of-a-phone-number',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Meta'],
    statement: "Given a string of digits 2-9, return all letter combinations the number could spell using the classic phone keypad mapping (2→abc, 3→def, ...). Return them in any order.",
    visualType: 'backtracking',
    initialInput: '23',
    approaches: [
      {
        id: 'backtracking-one-digit-per-level',
        label: 'Backtracking - one digit per level',
        complexity: {
          time: 'O(4^n · n)',
          space: 'O(n)'
        },
        pseudocode: [
          "combine(index, path):",
          "  if index == len(digits):",
          "    record path          // a full combination",
          "    return",
          "  for letter in keypad[digits[index]]:",
          "    path.push(letter)    // choose",
          "    combine(index+1, path) // explore next digit",
          "    path.pop()           // un-choose (backtrack)"
        ],
        starterCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  const result = [];\n  \n  function backtrack(index, path) {\n    if (index === digits.length) {\n      result.push(path.join(''));\n      return;\n    }\n    for (const letter of keypad[digits[index]]) {\n      path.push(letter);\n      backtrack(index + 1, path);\n      path.pop();\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    result = []\n    \n    def backtrack(index: int, path: list[str]):\n        if index == len(digits):\n            result.append(''.join(path))\n            return\n        for letter in keypad[digits[index]]:\n            path.append(letter)\n            backtrack(index + 1, path)\n            path.pop()\n            \n    backtrack(0, [])\n    return result"
        },
        solutionCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  const result = [];\n  \n  function backtrack(index, path) {\n    if (index === digits.length) {\n      result.push(path.join(''));\n      return;\n    }\n    for (const letter of keypad[digits[index]]) {\n      path.push(letter);\n      backtrack(index + 1, path);\n      path.pop();\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    result = []\n    \n    def backtrack(index: int, path: list[str]):\n        if index == len(digits):\n            result.append(''.join(path))\n            return\n        for letter in keypad[digits[index]]:\n            path.append(letter)\n            backtrack(index + 1, path)\n            path.pop()\n            \n    backtrack(0, [])\n    return result"
        },
        testCases: [
          {
            input: ['23'],
            expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
            description: "Letter combinations for '23'"
          },
          {
            input: [''],
            expected: [],
            description: "Empty string"
          },
          {
            input: ['2'],
            expected: ['a', 'b', 'c'],
            description: "Single digit '2'"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Generate EVERY letter string for the phone digits "23". On a keypad 2 ->abc and 3 ->def, so each combination picks one letter from each digit. We descend the tree one DIGIT per level: level 1 chooses a letter of digit 2, level 2 a letter of digit 3.',
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26 },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "root",
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "COMBINATIONS"
            },
            vars: [
              ["digits", "\"23\""],
              ["2", "abc"],
              ["3", "def"]
            ]
          },
          {
            codeLine: 5,
            narration: "Digit 2 maps to ['a', 'b', 'c']. Loop first option: CHOOSE 'a' -> path becomes \"a\". Recurse to digit 3 (index 1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26 },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root"],
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }]
              }
            },
            vars: [
              ["index", 0],
              ["digit", "'2'"],
              ["choose", "'a'"]
            ]
          },
          {
            codeLine: 5,
            narration: "At index 1, digit 3 maps to ['d', 'e', 'f']. Loop first option: CHOOSE 'd' -> path becomes \"ad\". Recurse with index=2.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26 },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ad",
                activeEdges: [["root", "a"], ["a", "ad"]],
                visitedNodes: ["root", "a"],
                title: "SOLUTION-SPACE TREE"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "ad" }]
              }
            },
            vars: [
              ["index", 1],
              ["digit", "'3'"],
              ["choose", "'d'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == len(digits) == 2. Reached a LEAF! RECORD full combination \"ad\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ad",
                activeEdges: [["root", "a"], ["a", "ad"]],
                visitedNodes: ["root", "a", "ad"],
                successNodes: ["ad"],
                paramBadges: { "ad": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "ad" }]
              }
            },
            vars: [
              ["combination", "\"ad\""],
              ["found", 1]
            ]
          },
          {
            codeLine: 8,
            narration: "UN-CHOOSE 'd': pop 'd' -> backtrack to \"a\". Next option for digit 3 is 'e'.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "ad"],
                successNodes: ["ad"],
                paramBadges: { "ad": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }]
              }
            },
            vars: [
              ["backtrack to", "'a'"],
              ["next choice", "'e'"]
            ]
          },
          {
            codeLine: 6,
            narration: "CHOOSE 'e' for digit 3 -> path becomes \"ae\". Recurse with index=2.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26 },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ae",
                activeEdges: [["root", "a"], ["a", "ae"]],
                visitedNodes: ["root", "a", "ad"],
                successNodes: ["ad"],
                paramBadges: { "ad": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "ae" }]
              }
            },
            vars: [
              ["index", 1],
              ["choose", "'e'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == 2. Reached LEAF \"ae\"! RECORD \"ae\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ae",
                activeEdges: [["root", "a"], ["a", "ae"]],
                visitedNodes: ["root", "a", "ad", "ae"],
                successNodes: ["ad", "ae"],
                paramBadges: { "ad": "✓", "ae": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "ae" }]
              }
            },
            vars: [
              ["combination", "\"ae\""],
              ["found", 2]
            ]
          },
          {
            codeLine: 8,
            narration: "UN-CHOOSE 'e': pop 'e' -> backtrack to \"a\". Next option for digit 3 is 'f'.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "ad", "ae"],
                successNodes: ["ad", "ae"],
                paramBadges: { "ad": "✓", "ae": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }]
              }
            },
            vars: [
              ["backtrack to", "'a'"],
              ["next choice", "'f'"]
            ]
          },
          {
            codeLine: 6,
            narration: "CHOOSE 'f' for digit 3 -> path becomes \"af\". Recurse with index=2.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26 },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "af",
                activeEdges: [["root", "a"], ["a", "af"]],
                visitedNodes: ["root", "a", "ad", "ae"],
                successNodes: ["ad", "ae"],
                paramBadges: { "ad": "✓", "ae": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "af" }]
              }
            },
            vars: [
              ["index", 1],
              ["choose", "'f'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == 2. Reached LEAF \"af\"! RECORD \"af\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "af",
                activeEdges: [["root", "a"], ["a", "af"]],
                visitedNodes: ["root", "a", "ad", "ae", "af"],
                successNodes: ["ad", "ae", "af"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "a" }, { val: "af" }]
              }
            },
            vars: [
              ["combination", "\"af\""],
              ["found", 3]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'f', then pop 'a' -> back to root \" \". Branch 'a' complete (ad, ae, af). Next digit 2 option is 'b'.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "root",
                visitedNodes: ["a", "ad", "ae", "af"],
                successNodes: ["ad", "ae", "af"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "\" \"" }]
              }
            },
            vars: [
              ["backtrack to", "root"],
              ["next branch", "'b'"]
            ]
          },
          {
            codeLine: 6,
            narration: "CHOOSE 'b' for digit 2 -> path becomes \"b\". Recurse to digit 3.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26 },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "b",
                activeEdges: [["root", "b"]],
                visitedNodes: ["root", "a", "ad", "ae", "af"],
                successNodes: ["ad", "ae", "af"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "b" }]
              }
            },
            vars: [
              ["index", 0],
              ["digit", "'2'"],
              ["choose", "'b'"]
            ]
          },
          {
            codeLine: 6,
            narration: "For 'b', choose first digit 3 option: CHOOSE 'd' -> path becomes \"bd\". Reached leaf!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26 },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "bd",
                activeEdges: [["root", "b"], ["b", "bd"]],
                visitedNodes: ["root", "b", "bd"],
                successNodes: ["ad", "ae", "af", "bd"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "b" }, { val: "bd" }]
              }
            },
            vars: [
              ["combination", "\"bd\""],
              ["found", 4]
            ]
          },
          {
            codeLine: 3,
            narration: 'Reached a LEAF after picking one letter per digit -> "be" is a complete combination of length 2. RECORD it, then backtrack to try the next letter.',
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "be",
                activeEdges: [["root", "b"], ["b", "be"]],
                visitedNodes: ["root", "b", "bd", "be"],
                successNodes: ["ad", "ae", "af", "bd", "be"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "b" }, { val: "be" }]
              }
            },
            vars: [
              ["combination", "\"be\""],
              ["found", 5]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'e' -> backtrack to \"b\". Choose third option 'f' for digit 3 -> path becomes \"bf\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26 },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "bf",
                activeEdges: [["root", "b"], ["b", "bf"]],
                visitedNodes: ["root", "b", "bd", "be"],
                successNodes: ["ad", "ae", "af", "bd", "be"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "b" }, { val: "bf" }]
              }
            },
            vars: [
              ["index", 1],
              ["choose", "'f'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == 2. Reached LEAF \"bf\"! RECORD \"bf\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "bf",
                activeEdges: [["root", "b"], ["b", "bf"]],
                visitedNodes: ["root", "b", "bd", "be", "bf"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "b" }, { val: "bf" }]
              }
            },
            vars: [
              ["combination", "\"bf\""],
              ["found", 6]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'f', pop 'b' -> backtrack to root \" \". Branch 'b' complete (bd, be, bf). Next digit 2 option is 'c'.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "root",
                visitedNodes: ["a", "b", "ad", "ae", "af", "bd", "be", "bf"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "\" \"" }]
              }
            },
            vars: [
              ["backtrack to", "root"],
              ["next branch", "'c'"]
            ]
          },
          {
            codeLine: 6,
            narration: "CHOOSE 'c' for digit 2 -> path becomes \"c\". Recurse to digit 3.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26 },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "c",
                activeEdges: [["root", "c"]],
                visitedNodes: ["root", "a", "b"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }]
              }
            },
            vars: [
              ["index", 0],
              ["digit", "'2'"],
              ["choose", "'c'"]
            ]
          },
          {
            codeLine: 6,
            narration: "For 'c', choose first digit 3 option: CHOOSE 'd' -> path becomes \"cd\". Reached leaf!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "cd",
                activeEdges: [["root", "c"], ["c", "cd"]],
                visitedNodes: ["root", "c", "cd"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }, { val: "cd" }]
              }
            },
            vars: [
              ["combination", "\"cd\""],
              ["found", 7]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'd' -> backtrack to \"c\". Next option for digit 3 is 'e'. CHOOSE 'e' -> path becomes \"ce\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26 },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ce",
                activeEdges: [["root", "c"], ["c", "ce"]],
                visitedNodes: ["root", "c", "cd"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }, { val: "ce" }]
              }
            },
            vars: [
              ["index", 1],
              ["choose", "'e'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == 2. Reached LEAF \"ce\"! RECORD \"ce\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "ce",
                activeEdges: [["root", "c"], ["c", "ce"]],
                visitedNodes: ["root", "c", "cd", "ce"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }, { val: "ce" }]
              }
            },
            vars: [
              ["combination", "\"ce\""],
              ["found", 8]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'e' -> backtrack to \"c\". Next option for digit 3 is 'f'. CHOOSE 'f' -> path becomes \"cf\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26 }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "cf",
                activeEdges: [["root", "c"], ["c", "cf"]],
                visitedNodes: ["root", "c", "cd", "ce"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }, { val: "cf" }]
              }
            },
            vars: [
              ["index", 1],
              ["choose", "'f'"]
            ]
          },
          {
            codeLine: 3,
            narration: "BASE CASE: index == 2. Reached final LEAF \"cf\"! RECORD \"cf\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "cf",
                activeEdges: [["root", "c"], ["c", "cf"]],
                visitedNodes: ["root", "c", "cd", "ce", "cf"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓", "cf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }, { val: "cf" }]
              }
            },
            vars: [
              ["combination", "\"cf\""],
              ["found", 9]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'f' -> backtrack to \"c\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "c",
                activeEdges: [["root", "c"]],
                visitedNodes: ["root", "cd", "ce", "cf"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓", "cf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "c" }]
              }
            },
            vars: [
              ["backtrack to", "'c'"]
            ]
          },
          {
            codeLine: 8,
            narration: "Pop 'c' -> backtrack to root \" \". All branches of digit 2 ('a', 'b', 'c') explored!",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                activeNode: "root",
                visitedNodes: ["1", "2", "3", "a", "b", "c"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓", "cf": "✓" },
                title: "SOLUTION-SPACE TREE"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "\" \"" }]
              }
            },
            vars: [
              ["back at", "root"],
              ["status", "all branches explored"]
            ]
          },
          {
            codeLine: 1,
            narration: "COMPLETE: Generated all 3 × 3 = 9 letter combinations for \"23\". Depth-first backtracking formed each combination along root-to-leaf paths.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "\" \"", x: 230, y: 40, width: 44, height: 26 },
                  { id: "a", label: "a", x: 100, y: 110, width: 42, height: 26 },
                  { id: "b", label: "b", x: 230, y: 110, width: 42, height: 26 },
                  { id: "c", label: "c", x: 360, y: 110, width: 42, height: 26 },
                  { id: "ad", label: "ad", x: 65, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ae", label: "ae", x: 100, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "af", label: "af", x: 135, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bd", label: "bd", x: 195, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "be", label: "be", x: 230, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "bf", label: "bf", x: 265, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cd", label: "cd", x: 325, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "ce", label: "ce", x: 360, y: 180, width: 46, height: 26, isSuccess: true },
                  { id: "cf", label: "cf", x: 395, y: 180, width: 46, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "b" },
                  { from: "root", to: "c" },
                  { from: "a", to: "ad" },
                  { from: "a", to: "ae" },
                  { from: "a", to: "af" },
                  { from: "b", to: "bd" },
                  { from: "b", to: "be" },
                  { from: "b", to: "bf" },
                  { from: "c", to: "cd" },
                  { from: "c", to: "ce" },
                  { from: "c", to: "cf" }
                ],
                visitedNodes: ["root", "a", "b", "c", "ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
                successNodes: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
                paramBadges: { "ad": "✓", "ae": "✓", "af": "✓", "bd": "✓", "be": "✓", "bf": "✓", "cd": "✓", "ce": "✓", "cf": "✓" },
                title: "ALL 9 COMBINATIONS GENERATED"
              },
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "9 Combinations Found"
            },
            vars: [
              ["total combinations", 9],
              ["time", "O(4^N · N)"],
              ["space", "O(N)"]
            ]
          }
        ]
      },
      {
        id: 'iterative-queue-cartesian',
        label: 'Iterative BFS / Cartesian Queue',
        complexity: {
          time: 'O(4^N · N)',
          space: 'O(4^N) queue size'
        },
        pseudocode: [
          "function letterCombinations(digits):",
          "  if not digits: return []",
          "  queue = ['']",
          "  for digit in digits:",
          "    letters = keypad[digit]",
          "    next_queue = []",
          "    for combination in queue:",
          "      for char in letters:",
          "        next_queue.append(combination + char)",
          "    queue = next_queue",
          "  return queue"
        ],
        starterCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  let queue = [''];\n  for (const digit of digits) {\n    const nextQueue = [];\n    for (const prefix of queue) {\n      for (const char of keypad[digit]) {\n        nextQueue.push(prefix + char);\n      }\n    }\n    queue = nextQueue;\n  }\n  return queue;\n}",
          python: "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    queue = ['']\n    for digit in digits:\n        queue = [prefix + char for prefix in queue for char in keypad[digit]]\n    return queue"
        },
        solutionCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  let queue = [''];\n  for (const digit of digits) {\n    const nextQueue = [];\n    for (const prefix of queue) {\n      for (const char of keypad[digit]) {\n        nextQueue.push(prefix + char);\n      }\n    }\n    queue = nextQueue;\n  }\n  return queue;\n}",
          python: "def letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    queue = ['']\n    for digit in digits:\n        queue = [prefix + char for prefix in queue for char in keypad[digit]]\n    return queue"
        },
        testCases: [
          {
            input: ['23'],
            expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
            description: "Iterative queue combination generation"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "BFS Queue / Cartesian Expansion: Start with queue = ['']. For each digit, pop previous level strings and append each mapped letter.",
            backtracking: {
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "QUEUE COMBINATIONS",
              horizontalStack: {
                title: "BFS QUEUE",
                items: [{ val: "queue expansion level by level" }]
              }
            },
            best: {
              label: "9 Combinations via BFS Queue"
            },
            vars: [
              ["method", "BFS Cartesian Queue"],
              ["total combinations", 9],
              ["time", "O(4^N · N)"]
            ]
          }
        ]
      },
      {
        id: 'functional-reduce-flatmap',
        label: 'Functional Reduce / FlatMap',
        complexity: {
          time: 'O(4^N · N)',
          space: 'O(4^N) array allocation'
        },
        pseudocode: [
          "function letterCombinations(digits):",
          "  if not digits: return []",
          "  return digits.split('').reduce(",
          "    (acc, d) => acc.flatMap(prefix => keypad[d].split('').map(c => prefix + c)),",
          "    ['']",
          "  )"
        ],
        starterCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  return digits.split('').reduce(\n    (acc, d) => acc.flatMap(prefix => keypad[d].split('').map(c => prefix + c)),\n    ['']\n  );\n}",
          python: "from functools import reduce\n\ndef letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    return reduce(lambda acc, d: [p + c for p in acc for c in keypad[d]], digits, [''])"
        },
        solutionCode: {
          javascript: "function letterCombinations(digits) {\n  if (!digits.length) return [];\n  const keypad = {\n    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n  };\n  return digits.split('').reduce(\n    (acc, d) => acc.flatMap(prefix => keypad[d].split('').map(c => prefix + c)),\n    ['']\n  );\n}",
          python: "from functools import reduce\n\ndef letterCombinations(digits: str) -> list[str]:\n    if not digits: return []\n    keypad = {\n        '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',\n        '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'\n    }\n    return reduce(lambda acc, d: [p + c for p in acc for c in keypad[d]], digits, [''])"
        },
        testCases: [
          {
            input: ['23'],
            expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
            description: "Functional flatMap combination accumulation"
          }
        ],
        steps: [
          {
            codeLine: 3,
            narration: "Functional Array Accumulation: Elegantly folds digits with reduce/flatMap, mapping each prefix across current digit's character set.",
            backtracking: {
              results: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
              resultsTitle: "REDUCE COMBINATIONS",
              horizontalStack: {
                title: "FUNCTIONAL ACCUMULATOR",
                items: [{ val: "digits.reduce(flatMap)" }]
              }
            },
            best: {
              label: "9 Combinations via Functional Reduce"
            },
            vars: [
              ["method", "reduce / flatMap"],
              ["total combinations", 9],
              ["time", "O(4^N · N)"]
            ]
          }
        ]
      }
    ]
  },

  // 7. Generate Parentheses (LeetCode #22 - Medium)
  {
    id: 'generate-parentheses',
    patternId: 'backtracking',
    title: 'Generate Parentheses',
    subtitle: "Add '(' or ')' with validity pruning",
    kind: 'problem',
    leetcode: {
      id: 22,
      slug: 'generate-parentheses',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Meta', 'Uber'],
    statement: "Given an integer n, return all distinct strings of n pairs of parentheses that are well-formed (every opening parenthesis is properly matched and closed).",
    visualType: 'backtracking',
    initialInput: 3,
    approaches: [
      {
        id: 'backtracking-open-close-counters',
        label: 'Backtracking - open/close counters with pruning',
        complexity: {
          time: 'O(4^n / √n)',
          space: 'O(n)'
        },
        pseudocode: [
          "gen(s, opens, closes):",
          "  if s.length == 2n: record s; return   // complete",
          "  // choose ( while opens < n",
          "  if opens < n:",
          "    gen(s + \"(\", opens + 1, closes)",
          "  // choose ) while closes < opens, else prune",
          "  if closes < opens:",
          "    gen(s + \")\", opens, closes + 1)",
          "  return                                 // un-choose",
          "// answer = all recorded strings"
        ],
        starterCode: {
          javascript: "function generateParenthesis(n) {\n  const result = [];\n  \n  function backtrack(s, opens, closes) {\n    if (s.length === 2 * n) {\n      result.push(s);\n      return;\n    }\n    if (opens < n) {\n      backtrack(s + '(', opens + 1, closes);\n    }\n    if (closes < opens) {\n      backtrack(s + ')', opens, closes + 1);\n    }\n  }\n  \n  backtrack('', 0, 0);\n  return result;\n}",
          python: "def generateParenthesis(n: int) -> list[str]:\n    result = []\n    \n    def backtrack(s: str, opens: int, closes: int):\n        if len(s) == 2 * n:\n            result.append(s)\n            return\n        if opens < n:\n            backtrack(s + '(', opens + 1, closes)\n        if closes < opens:\n            backtrack(s + ')', opens, closes + 1)\n            \n    backtrack('', 0, 0)\n    return result"
        },
        solutionCode: {
          javascript: "function generateParenthesis(n) {\n  const result = [];\n  \n  function backtrack(s, opens, closes) {\n    if (s.length === 2 * n) {\n      result.push(s);\n      return;\n    }\n    if (opens < n) {\n      backtrack(s + '(', opens + 1, closes);\n    }\n    if (closes < opens) {\n      backtrack(s + ')', opens, closes + 1);\n    }\n  }\n  \n  backtrack('', 0, 0);\n  return result;\n}",
          python: "def generateParenthesis(n: int) -> list[str]:\n    result = []\n    \n    def backtrack(s: str, opens: int, closes: int):\n        if len(s) == 2 * n:\n            result.append(s)\n            return\n        if opens < n:\n            backtrack(s + '(', opens + 1, closes)\n        if closes < opens:\n            backtrack(s + ')', opens, closes + 1)\n            \n    backtrack('', 0, 0)\n    return result"
        },
        testCases: [
          {
            input: [3],
            expected: ['((()))', '(()())', '(())()', '()(())', '()()()'],
            description: "3 pairs of parentheses (5 Catalan strings)"
          },
          {
            input: [1],
            expected: ['()'],
            description: "1 pair of parentheses"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Generate all well-formed strings of 3 pairs of parentheses. We build them one character at a time. At each node we may add "(" while we still have opens left, or ")" while there are unmatched opens to close. The tree below is the whole space of these choices.',
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "root",
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["n", 3],
              ["goal", "5 valid strings"]
            ]
          },
          {
            codeLine: 4,
            narration: "From root ε: opens=0 < n=3. CHOOSE '(' -> string becomes \"(\" (opens=1, closes=0).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1",
                activeEdges: [["root", "1"]],
                visitedNodes: ["root"],
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(\""],
              ["opens", 1],
              ["closes", 0]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"(\": opens=1 < 3. CHOOSE '(' -> string becomes \"((\" (opens=2, closes=0).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "11",
                activeEdges: [["root", "1"], ["1", "11"]],
                visitedNodes: ["root", "1"],
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"((\""],
              ["opens", 2],
              ["closes", 0]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"((\": opens=2 < 3. CHOOSE '(' -> string becomes \"(((\" (opens=3, closes=0).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "111",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "111"]],
                visitedNodes: ["root", "1", "11"],
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(((\""],
              ["opens", 3],
              ["closes", 0]
            ]
          },
          {
            codeLine: 7,
            narration: "From \"(((\": opens == 3 (cannot add '('). But closes=0 < opens=3, so CHOOSE ')' -> \"((()\" (opens=3, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1112",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "111"], ["111", "1112"]],
                visitedNodes: ["root", "1", "11", "111"],
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"((()\""],
              ["opens", 3],
              ["closes", 1]
            ]
          },
          {
            codeLine: 7,
            narration: "From \"((()\": closes=1 < 3. CHOOSE ')' -> \"((())\" (opens=3, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26 },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26 },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26 },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "11122",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "111"], ["111", "1112"], ["1112", "11122"]],
                visitedNodes: ["root", "1", "11", "111", "1112"],
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: [],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"((())\""],
              ["opens", 3],
              ["closes", 2]
            ]
          },
          {
            codeLine: 2,
            narration: "From \"((())\": closes=2 < 3. CHOOSE ')' -> \"((()))\" (Length = 6 = 2n). RECORD Solution 1: \"((()))\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26 },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf1",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "111"], ["111", "1112"], ["1112", "11122"], ["11122", "leaf1"]],
                visitedNodes: ["root", "1", "11", "111", "1112", "11122", "leaf1"],
                successNodes: ["leaf1"],
                paramBadges: { "leaf1": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["recorded", "\"((()))\""],
              ["found", 1]
            ]
          },
          {
            codeLine: 9,
            narration: "Backtrack to \"((\": second branch is closes < opens (0 < 2). CHOOSE ')' -> \"(()\" (opens=2, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26 },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "112",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"]],
                visitedNodes: ["root", "1", "11", "leaf1"],
                successNodes: ["leaf1"],
                paramBadges: { "leaf1": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(()\""],
              ["opens", 2],
              ["closes", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"(()\": opens=2 < 3. CHOOSE '(' -> \"(()(\" (opens=3, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26 },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1121",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1121"]],
                visitedNodes: ["root", "1", "11", "112", "leaf1"],
                successNodes: ["leaf1"],
                paramBadges: { "leaf1": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(()(\""],
              ["opens", 3],
              ["closes", 1]
            ]
          },
          {
            codeLine: 7,
            narration: "From \"(()(\": opens=3, closes=1 < 3. CHOOSE ')' -> \"(()()\" (opens=3, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26 },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "11212",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1121"], ["1121", "11212"]],
                visitedNodes: ["root", "1", "11", "112", "1121", "leaf1"],
                successNodes: ["leaf1"],
                paramBadges: { "leaf1": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(()()\""],
              ["opens", 3],
              ["closes", 2]
            ]
          },
          {
            codeLine: 2,
            narration: "From \"(()()\": closes=2 < 3. CHOOSE ')' -> \"(()())\" (Length = 6 = 2n). RECORD Solution 2: \"(()())\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf2",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1121"], ["1121", "11212"], ["11212", "leaf2"]],
                visitedNodes: ["root", "1", "11", "112", "1121", "11212", "leaf1", "leaf2"],
                successNodes: ["leaf1", "leaf2"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["recorded", "\"(()())\""],
              ["found", 2]
            ]
          },
          {
            codeLine: 9,
            narration: "Backtrack to \"(()\": try next choice closes < opens (1 < 2). CHOOSE ')' -> \"(())\" (opens=2, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1122",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1122"]],
                visitedNodes: ["root", "1", "11", "112", "leaf1", "leaf2"],
                successNodes: ["leaf1", "leaf2"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(()) \""],
              ["opens", 2],
              ["closes", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"(())\": closes == opens == 2 (cannot close). opens=2 < 3. CHOOSE '(' -> \"(())( \" (opens=3, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26 },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "11221",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1122"], ["1122", "11221"]],
                visitedNodes: ["root", "1", "11", "112", "1122", "leaf1", "leaf2"],
                successNodes: ["leaf1", "leaf2"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(())( \""],
              ["opens", 3],
              ["closes", 2]
            ]
          },
          {
            codeLine: 7,
            narration: "From \"(())( \": closes=2 < 3. CHOOSE ')' -> \"(())()\". Length 6 reached.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf3",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1122"], ["1122", "11221"], ["11221", "leaf3"]],
                visitedNodes: ["root", "1", "11", "112", "1122", "11221", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"(())()\""],
              ["found", 3]
            ]
          },
          {
            codeLine: 8,
            narration: 'Length reached 2n = 6 and every "(" is matched -> "(())()" is a complete valid string. RECORD it (✓). This is a leaf where the goal is satisfied. Solutions found so far: 3.',
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf3",
                activeEdges: [["root", "1"], ["1", "11"], ["11", "112"], ["112", "1122"], ["1122", "11221"], ["11221", "leaf3"]],
                visitedNodes: ["root", "1", "11", "112", "1122", "11221", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["string", "(())()"],
              ["found", 3]
            ]
          },
          {
            codeLine: 9,
            narration: "Unwind back to \"(\" (opens=1, closes=0). Second branch from \"(\" is closes < opens (0 < 1). CHOOSE ')' -> \"()\" (opens=1, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "12",
                activeEdges: [["root", "1"], ["1", "12"]],
                visitedNodes: ["root", "1", "11", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()\""],
              ["opens", 1],
              ["closes", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"()\": closes == opens == 1 (cannot add ')'). opens=1 < 3. CHOOSE '(' -> \"()(\" (opens=2, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "121",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"]],
                visitedNodes: ["root", "1", "12", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()(\""],
              ["opens", 2],
              ["closes", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"()(\": opens=2 < 3. CHOOSE '(' -> \"()((\" (opens=3, closes=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26 },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1211",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1211"]],
                visitedNodes: ["root", "1", "12", "121", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()((\""],
              ["opens", 3],
              ["closes", 1]
            ]
          },
          {
            codeLine: 7,
            narration: "From \"()((\": opens=3, closes=1 < 3. CHOOSE ')' -> \"()(()\" (opens=3, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26 },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "12112",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1211"], ["1211", "12112"]],
                visitedNodes: ["root", "1", "12", "121", "1211", "leaf1", "leaf2", "leaf3"],
                successNodes: ["leaf1", "leaf2", "leaf3"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()(()\""],
              ["opens", 3],
              ["closes", 2]
            ]
          },
          {
            codeLine: 2,
            narration: "From \"()(()\": closes=2 < 3. CHOOSE ')' -> \"()(())\" (Length = 6 = 2n). RECORD Solution 4: \"()(())\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf4",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1211"], ["1211", "12112"], ["12112", "leaf4"]],
                visitedNodes: ["root", "1", "12", "121", "1211", "12112", "leaf1", "leaf2", "leaf3", "leaf4"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()", "()(())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["recorded", "\"()(())\""],
              ["found", 4]
            ]
          },
          {
            codeLine: 9,
            narration: "Backtrack to \"()(\": next choice is closes < opens (1 < 2). CHOOSE ')' -> \"()()\" (opens=2, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "1212",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1212"]],
                visitedNodes: ["root", "1", "12", "121", "leaf1", "leaf2", "leaf3", "leaf4"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()", "()(())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()()\""],
              ["opens", 2],
              ["closes", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "From \"()()\": closes == opens == 2. opens=2 < 3. CHOOSE '(' -> \"()()(\" (opens=3, closes=2).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 200, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 370, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 140, y: 130, width: 40, height: 26 },
                  { id: "12", label: "()", x: 280, y: 130, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 80, y: 180, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 190, y: 180, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 290, y: 180, width: 44, height: 26 },
                  { id: "122", label: "())", x: 380, y: 180, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 80, y: 230, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 155, y: 230, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 225, y: 230, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 295, y: 230, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 365, y: 230, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 80, y: 280, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 155, y: 280, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 225, y: 280, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 295, y: 280, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 365, y: 280, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 80, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 155, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 225, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 295, y: 330, width: 58, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 365, y: 330, width: 58, height: 26 }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "12121",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1212"], ["1212", "12121"]],
                visitedNodes: ["root", "1", "12", "121", "1212", "leaf1", "leaf2", "leaf3", "leaf4"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()", "()(())"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["current", "\"()()(\""],
              ["opens", 3],
              ["closes", 2]
            ]
          },
          {
            codeLine: 2,
            narration: "From \"()()(\": closes=2 < 3. CHOOSE ')' -> \"()()()\" (Length = 6 = 2n). RECORD Solution 5: \"()()()\".",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "leaf5",
                activeEdges: [["root", "1"], ["1", "12"], ["12", "121"], ["121", "1212"], ["1212", "12121"], ["12121", "leaf5"]],
                visitedNodes: ["root", "1", "12", "121", "1212", "12121", "leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓", "leaf5": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()", "()(())", "()()()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["recorded", "\"()()()\""],
              ["found", 5]
            ]
          },
          {
            codeLine: 9,
            narration: "Pop ')' and backtrack upwards through \"()()(\" -> \"()()\" -> \"()(\" -> \"()\" -> \"(\" -> root ε.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                activeNode: "root",
                visitedNodes: ["root", "1", "11", "12", "111", "112", "121", "1212", "leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓", "leaf5": "✓" },
                title: "ADD '(' OR ')' WITH VALIDITY PRUNING"
              },
              results: ["((()))", "(()())", "(())()", "()(())", "()()()"],
              resultsTitle: "VALID STRINGS"
            },
            vars: [
              ["backtrack to", "root ε"],
              ["status", "all branches explored"]
            ]
          },
          {
            codeLine: 1,
            narration: "COMPLETE: Generated all 5 Catalan valid parenthesis combinations for n=3. Validity pruning discarded all invalid branches with zero wasted leaves.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 26 },
                  { id: "1", label: "(", x: 165, y: 80, width: 36, height: 26 },
                  { id: "2", label: ")", x: 310, y: 80, width: 36, height: 26, isPruned: true },
                  { id: "11", label: "((", x: 105, y: 125, width: 40, height: 26 },
                  { id: "12", label: "()", x: 235, y: 125, width: 40, height: 26 },
                  { id: "111", label: "(((", x: 75, y: 170, width: 44, height: 26 },
                  { id: "112", label: "(()", x: 135, y: 170, width: 44, height: 26 },
                  { id: "121", label: "()(", x: 205, y: 170, width: 44, height: 26 },
                  { id: "122", label: "())", x: 265, y: 170, width: 44, height: 26, isPruned: true },
                  { id: "1112", label: "((()", x: 75, y: 215, width: 48, height: 26 },
                  { id: "1121", label: "(()(", x: 115, y: 215, width: 48, height: 26 },
                  { id: "1122", label: "(())", x: 155, y: 215, width: 48, height: 26 },
                  { id: "1211", label: "()((", x: 195, y: 215, width: 48, height: 26 },
                  { id: "1212", label: "()()", x: 235, y: 215, width: 48, height: 26 },
                  { id: "11122", label: "((())", x: 75, y: 260, width: 52, height: 26 },
                  { id: "11212", label: "(()()", x: 115, y: 260, width: 52, height: 26 },
                  { id: "11221", label: "(())(", x: 155, y: 260, width: 52, height: 26 },
                  { id: "12112", label: "()(()", x: 195, y: 260, width: 52, height: 26 },
                  { id: "12121", label: "()()(", x: 235, y: 260, width: 52, height: 26 },
                  { id: "leaf1", label: "((()))", x: 75, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf2", label: "(()())", x: 115, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf3", label: "(())()", x: 155, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf4", label: "()(())", x: 195, y: 305, width: 56, height: 26, isSuccess: true },
                  { id: "leaf5", label: "()()()", x: 235, y: 305, width: 56, height: 26, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "1" },
                  { from: "root", to: "2" },
                  { from: "1", to: "11" },
                  { from: "1", to: "12" },
                  { from: "11", to: "111" },
                  { from: "11", to: "112" },
                  { from: "12", to: "121" },
                  { from: "12", to: "122" },
                  { from: "111", to: "1112" },
                  { from: "112", to: "1121" },
                  { from: "112", to: "1122" },
                  { from: "121", to: "1211" },
                  { from: "121", to: "1212" },
                  { from: "1112", to: "11122" },
                  { from: "1121", to: "11212" },
                  { from: "1122", to: "11221" },
                  { from: "1211", to: "12112" },
                  { from: "1212", to: "12121" },
                  { from: "11122", to: "leaf1" },
                  { from: "11212", to: "leaf2" },
                  { from: "11221", to: "leaf3" },
                  { from: "12112", to: "leaf4" },
                  { from: "12121", to: "leaf5" }
                ],
                visitedNodes: ["root", "1", "11", "12", "111", "112", "121", "1212", "leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                successNodes: ["leaf1", "leaf2", "leaf3", "leaf4", "leaf5"],
                paramBadges: { "leaf1": "✓", "leaf2": "✓", "leaf3": "✓", "leaf4": "✓", "leaf5": "✓" },
                title: "5 VALID STRINGS GENERATED"
              },
              results: ["((()))", "(()())", "(())()", "()(())", "()()()"],
              resultsTitle: "VALID STRINGS"
            },
            best: {
              label: "5 Catalan Strings Found"
            },
            vars: [
              ["Catalan(3)", "5 valid strings"],
              ["time", "O(4^N / √N)"],
              ["space", "O(N)"]
            ]
          }
        ]
      },
      {
        id: 'catalan-closure-dp',
        label: 'Catalan Closure DP / Divide & Conquer',
        complexity: {
          time: 'O(4^N / √N)',
          space: 'O(4^N / √N)'
        },
        pseudocode: [
          "function generateParenthesis(n):",
          "  if n == 0: return ['']",
          "  result = []",
          "  for c from 0 to n - 1:            // size of left closure",
          "    for left in generateParenthesis(c):",
          "      for right in generateParenthesis(n - 1 - c):",
          "        result.append('(' + left + ')' + right)",
          "  return result"
        ],
        starterCode: {
          javascript: "function generateParenthesis(n) {\n  const dp = Array.from({ length: n + 1 }, () => []);\n  dp[0] = [''];\n  \n  for (let i = 1; i <= n; i++) {\n    for (let c = 0; c < i; c++) {\n      for (const left of dp[c]) {\n        for (const right of dp[i - 1 - c]) {\n          dp[i].push('(' + left + ')' + right);\n        }\n      }\n    }\n  }\n  return dp[n];\n}",
          python: "def generateParenthesis(n: int) -> list[str]:\n    dp = [[] for _ in range(n + 1)]\n    dp[0] = ['']\n    \n    for i in range(1, n + 1):\n        for c in range(i):\n            for left in dp[c]:\n                for right in dp[i - 1 - c]:\n                    dp[i].append(f'({left}){right}')\n    return dp[n]"
        },
        solutionCode: {
          javascript: "function generateParenthesis(n) {\n  const dp = Array.from({ length: n + 1 }, () => []);\n  dp[0] = [''];\n  \n  for (let i = 1; i <= n; i++) {\n    for (let c = 0; c < i; c++) {\n      for (const left of dp[c]) {\n        for (const right of dp[i - 1 - c]) {\n          dp[i].push('(' + left + ')' + right);\n        }\n      }\n    }\n  }\n  return dp[n];\n}",
          python: "def generateParenthesis(n: int) -> list[str]:\n    dp = [[] for _ in range(n + 1)]\n    dp[0] = ['']\n    \n    for i in range(1, n + 1):\n        for c in range(i):\n            for left in dp[c]:\n                for right in dp[i - 1 - c]:\n                    dp[i].append(f'({left}){right}')\n    return dp[n]"
        },
        testCases: [
          {
            input: [3],
            expected: ['((()))', '(()())', '(())()', '()(())', '()()()'],
            description: "Catalan DP generation for n=3"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Closure DP: Every valid string has unique first closure '(' + A + ')' + B where A has c pairs and B has n-1-c pairs.",
            backtracking: {
              results: ["((()))", "(()())", "(())()", "()(())", "()()()"],
              resultsTitle: "CATALAN DP STRINGS",
              horizontalStack: {
                title: "CATALAN RECURRENCE",
                items: [{ val: "dp[n] = Σ '(' + dp[c] + ')' + dp[n-1-c]" }]
              }
            },
            best: {
              label: "5 Strings via Catalan DP"
            },
            vars: [
              ["method", "Catalan Closure DP"],
              ["total valid", 5],
              ["time", "O(4^N / √N)"]
            ]
          }
        ]
      }
    ]
  },

  // 8. Combination Sum (LeetCode #39 - Medium)
  {
    id: 'combination-sum',
    patternId: 'backtracking',
    title: 'Combination Sum',
    subtitle: 'Reuse allowed: prune when the sum overshoots',
    kind: 'problem',
    leetcode: {
      id: 39,
      slug: 'combination-sum',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Meta', 'Uber'],
    statement: "Given an array of distinct candidate numbers and a target, return all unique combinations of candidates that sum to the target, where each candidate may be reused an unlimited number of times.",
    visualType: 'backtracking',
    initialInput: {
      candidates: [2, 3, 6, 7],
      target: 7
    },
    approaches: [
      {
        id: 'backtracking-non-decreasing',
        label: 'Backtracking · non-decreasing picks with overshoot pruning',
        complexity: {
          time: 'O(n^(T/min))',
          space: 'O(T/min)'
        },
        pseudocode: [
          "combo(start, rem, path):",
          "  if rem == 0: record path; return   // exact hit",
          "  for i in start..n-1:",
          "    if cand[i] > rem: prune; continue // overshoot",
          "    path.push(cand[i])               // choose",
          "    combo(i, rem - cand[i], path)    // explore",
          "    path.pop()                       // un-choose",
          "  return"
        ],
        starterCode: {
          javascript: "function combinationSum(candidates, target) {\n  candidates.sort((a, b) => a - b);\n  const result = [];\n  \n  function combo(start, rem, path) {\n    if (rem === 0) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = start; i < candidates.length; i++) {\n      if (candidates[i] > rem) break; // overshoot pruning\n      path.push(candidates[i]);\n      combo(i, rem - candidates[i], path); // i allows reuse\n      path.pop();\n    }\n  }\n  \n  combo(0, target, []);\n  return result;\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    candidates.sort()\n    result = []\n    \n    def combo(start, rem, path):\n        if rem == 0:\n            result.append(list(path))\n            return\n        for i in range(start, len(candidates)):\n            if candidates[i] > rem:\n                break  # overshoot pruning\n            path.append(candidates[i])\n            combo(i, rem - candidates[i], path)  # i allows reuse\n            path.pop()\n            \n    combo(0, target, [])\n    return result"
        },
        solutionCode: {
          javascript: "function combinationSum(candidates, target) {\n  candidates.sort((a, b) => a - b);\n  const result = [];\n  \n  function combo(start, rem, path) {\n    if (rem === 0) {\n      result.push([...path]);\n      return;\n    }\n    for (let i = start; i < candidates.length; i++) {\n      if (candidates[i] > rem) break; // overshoot pruning\n      path.push(candidates[i]);\n      combo(i, rem - candidates[i], path); // i allows reuse\n      path.pop();\n    }\n  }\n  \n  combo(0, target, []);\n  return result;\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    candidates.sort()\n    result = []\n    \n    def combo(start, rem, path):\n        if rem == 0:\n            result.append(list(path))\n            return\n        for i in range(start, len(candidates)):\n            if candidates[i] > rem:\n                break  # overshoot pruning\n            path.append(candidates[i])\n            combo(i, rem - candidates[i], path)  # i allows reuse\n            path.pop()\n            \n    combo(0, target, [])\n    return result"
        },
        testCases: [
          {
            input: [[2, 3, 6, 7], 7],
            expected: [[2, 2, 3], [7]],
            description: "Candidates [2, 3, 6, 7] with target 7"
          },
          {
            input: [[2, 3, 5], 8],
            expected: [[2, 2, 2, 2], [2, 3, 3], [3, 5]],
            description: "Candidates [2, 3, 5] with target 8"
          }
        ],
        steps: [
          // Step 1: Root State (Matches Screenshot 1)
          {
            codeLine: 1,
            narration: "Find every combination of [2, 3, 6, 7] that sums to 7. Numbers may be reused. We track the REMAINING target: start at 7 and subtract each number we pick. The tree below is the full space of picks; r is the remaining target at each node.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "root",
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS"
            },
            vars: [
              ["candidates", "[2, 3, 6, 7]"],
              ["target", 7]
            ]
          },
          // Step 2: Choose 2 from root
          {
            codeLine: 5,
            narration: "From root (r=7): loop i=0..3. Pick cand[0]=2. CHOOSE 2 -> remaining target becomes 7 - 2 = 5. Recurse combo(start=0, rem=5, path=[2]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "2"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }]
              }
            },
            vars: [
              ["cand[i]", 2],
              ["rem", 5],
              ["path", "[2]"]
            ]
          },
          // Step 3: Choose 2 from [2]
          {
            codeLine: 5,
            narration: "At [2] (r=5): loop i=0..3 (start=0 allows reusing 2). CHOOSE 2 -> remaining target becomes 5 - 2 = 3. Recurse combo(start=0, rem=3, path=[2, 2]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "22",
                activeEdges: [["root", "2"], ["2", "22"]],
                visitedNodes: ["root", "2", "22"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }]
              }
            },
            vars: [
              ["cand[i]", 2],
              ["rem", 3],
              ["path", "[2, 2]"]
            ]
          },
          // Step 4: Choose 2 from [2,2]
          {
            codeLine: 5,
            narration: "At [2,2] (r=3): loop i=0..3 (reuse 2). CHOOSE 2 -> remaining target becomes 3 - 2 = 1. Recurse combo(start=0, rem=1, path=[2, 2, 2]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "222",
                activeEdges: [["root", "2"], ["2", "22"], ["22", "222"]],
                visitedNodes: ["root", "2", "22", "222"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }, { val: "[2,2,2] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 2],
              ["rem", 1],
              ["path", "[2, 2, 2]"]
            ]
          },
          // Step 5: Prune [2,2,2,2] overshoot
          {
            codeLine: 4,
            narration: "At [2,2,2] (r=1): try cand[0]=2. cand[0]=2 > rem=1 (overshoots!). Prune [2,2,2,2] (r=-1). All higher candidates also overshoot; loop terminates.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "2222",
                activeEdges: [["root", "2"], ["2", "22"], ["22", "222"], ["222", "2222"]],
                visitedNodes: ["root", "2", "22", "222"],
                prunedNodes: ["2222"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }, { val: "[2,2,2] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 2],
              ["rem", 1],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 6: Backtrack to [2,2]
          {
            codeLine: 7,
            narration: "Backtrack from [2,2,2]: UN-CHOOSE 2 (rem restored to 3). Return to [2,2] (r=3).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "22",
                activeEdges: [["root", "2"], ["2", "22"]],
                visitedNodes: ["root", "2", "22"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }]
              }
            },
            vars: [
              ["un-choose", 2],
              ["rem", 3],
              ["path", "[2, 2]"]
            ]
          },
          // Step 7: At [2,2], choose 3 -> [2,2,3]
          {
            codeLine: 5,
            narration: "At [2,2] (r=3): next candidate i=1 is cand[1]=3. CHOOSE 3 -> remaining target becomes 3 - 3 = 0. Recurse combo(start=1, rem=0, path=[2, 2, 3]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "223",
                activeEdges: [["root", "2"], ["2", "22"], ["22", "223"]],
                visitedNodes: ["root", "2", "22", "223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: [],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }, { val: "[2,2,3] r=0" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 0],
              ["path", "[2, 2, 3]"]
            ]
          },
          // Step 8: Exact Hit [2,2,3]
          {
            codeLine: 2,
            narration: "At [2,2,3] (r=0): rem == 0 (EXACT HIT!). Record solution [2, 2, 3] to combinations list (✓). Return.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "223",
                activeEdges: [["root", "2"], ["2", "22"], ["22", "223"]],
                visitedNodes: ["root", "2", "22", "223"],
                successNodes: ["223"],
                paramBadges: { "223": "✓" },
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }, { val: "[2,2,3] r=0" }]
              }
            },
            vars: [
              ["recorded", "[2, 2, 3]"],
              ["rem", 0]
            ]
          },
          // Step 9: Backtrack from [2,2,3]
          {
            codeLine: 7,
            narration: "Backtrack from [2,2,3]: UN-CHOOSE 3 (rem restored to 3). Return to [2,2] (r=3).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "22",
                activeEdges: [["root", "2"], ["2", "22"]],
                visitedNodes: ["root", "2", "22"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }]
              }
            },
            vars: [
              ["un-choose", 3],
              ["rem", 3],
              ["path", "[2, 2]"]
            ]
          },
          // Step 10: Prune [2,2,6] overshoot
          {
            codeLine: 4,
            narration: "At [2,2] (r=3): next candidate i=2 is cand[2]=6. cand[2]=6 > rem=3 -> OVERSHOOT! Prune [2,2,6] (r=-3). Loop at [2,2] terminates.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "226",
                activeEdges: [["root", "2"], ["2", "22"], ["22", "226"]],
                visitedNodes: ["root", "2", "22"],
                prunedNodes: ["226"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,2] r=3" }]
              }
            },
            vars: [
              ["cand[i]", 6],
              ["rem", 3],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 11: Backtrack from [2,2] to [2]
          {
            codeLine: 7,
            narration: "Backtrack from [2,2]: UN-CHOOSE 2 (rem restored to 5). Return to [2] (r=5).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "2"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }]
              }
            },
            vars: [
              ["un-choose", 2],
              ["rem", 5],
              ["path", "[2]"]
            ]
          },
          // Step 12: At [2], choose 3 -> [2,3]
          {
            codeLine: 5,
            narration: "At [2] (r=5): next candidate i=1 is cand[1]=3. CHOOSE 3 -> remaining target becomes 5 - 3 = 2. Recurse combo(start=1, rem=2, path=[2, 3]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "23",
                activeEdges: [["root", "2"], ["2", "23"]],
                visitedNodes: ["root", "2", "23"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,3] r=2" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 2],
              ["path", "[2, 3]"]
            ]
          },
          // Step 13: Prune [2,3,3] overshoot
          {
            codeLine: 4,
            narration: "At [2,3] (r=2): try cand[1]=3 (start=1). cand[1]=3 > rem=2 -> OVERSHOOT! Prune [2,3,3] (r=-1). All higher candidates also overshoot.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "233",
                activeEdges: [["root", "2"], ["2", "23"], ["23", "233"]],
                visitedNodes: ["root", "2", "23"],
                prunedNodes: ["233"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }, { val: "[2,3] r=2" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 2],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 14: Backtrack from [2,3] to [2]
          {
            codeLine: 7,
            narration: "Backtrack from [2,3]: UN-CHOOSE 3 (rem restored to 5). Return to [2] (r=5).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "2"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }]
              }
            },
            vars: [
              ["un-choose", 3],
              ["rem", 5],
              ["path", "[2]"]
            ]
          },
          // Step 15: Prune [2,6] overshoot
          {
            codeLine: 4,
            narration: "At [2] (r=5): next candidate i=2 is cand[2]=6. cand[2]=6 > rem=5 -> OVERSHOOT! Prune [2,6] (r=-1). All higher candidates overshoot.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "26",
                activeEdges: [["root", "2"], ["2", "26"]],
                visitedNodes: ["root", "2"],
                prunedNodes: ["26"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }]
              }
            },
            vars: [
              ["cand[i]", 6],
              ["rem", 5],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 16: Un-choose 2 from [2] (Matches Screenshot 2)
          {
            codeLine: 7,
            narration: "Every candidate from [2] has been tried. UN-CHOOSE 2: add it back to the remaining target and return to the parent with the state restored.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "2",
                activeEdges: [["root", "2"]],
                visitedNodes: ["root", "2"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[2] r=5" }]
              }
            },
            vars: [
              ["un-choose", 2],
              ["rem", 5]
            ]
          },
          // Step 17: Back at root, choose 3 -> [3]
          {
            codeLine: 5,
            narration: "Back at root (r=7): next candidate i=1 is cand[1]=3. CHOOSE 3 -> remaining target becomes 7 - 3 = 4. Recurse combo(start=1, rem=4, path=[3]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "3",
                activeEdges: [["root", "3"]],
                visitedNodes: ["root", "2", "3"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[3] r=4" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 4],
              ["path", "[3]"]
            ]
          },
          // Step 18: At [3], choose 3 -> [3,3]
          {
            codeLine: 5,
            narration: "At [3] (r=4): loop i=1..3 (start=1 allows reusing 3). CHOOSE 3 -> remaining target becomes 4 - 3 = 1. Recurse combo(start=1, rem=1, path=[3, 3]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "33",
                activeEdges: [["root", "3"], ["3", "33"]],
                visitedNodes: ["root", "2", "3", "33"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[3] r=4" }, { val: "[3,3] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 1],
              ["path", "[3, 3]"]
            ]
          },
          // Step 19: Prune [3,3,3] overshoot
          {
            codeLine: 4,
            narration: "At [3,3] (r=1): try cand[1]=3 (start=1). cand[1]=3 > rem=1 -> OVERSHOOT! Prune [3,3,3] (r=-2). All higher candidates overshoot.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "333",
                activeEdges: [["root", "3"], ["3", "33"], ["33", "333"]],
                visitedNodes: ["root", "2", "3", "33"],
                prunedNodes: ["333"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[3] r=4" }, { val: "[3,3] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 3],
              ["rem", 1],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 20: Backtrack from [3,3] to [3]
          {
            codeLine: 7,
            narration: "Backtrack from [3,3]: UN-CHOOSE 3 (rem restored to 4). Return to [3] (r=4).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "3",
                activeEdges: [["root", "3"]],
                visitedNodes: ["root", "2", "3"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[3] r=4" }]
              }
            },
            vars: [
              ["un-choose", 3],
              ["rem", 4],
              ["path", "[3]"]
            ]
          },
          // Step 21: Prune [3,6] overshoot
          {
            codeLine: 4,
            narration: "At [3] (r=4): next candidate i=2 is cand[2]=6. cand[2]=6 > rem=4 -> OVERSHOOT! Prune [3,6] (r=-2). All higher candidates overshoot.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "36",
                activeEdges: [["root", "3"], ["3", "36"]],
                visitedNodes: ["root", "2", "3"],
                prunedNodes: ["36"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[3] r=4" }]
              }
            },
            vars: [
              ["cand[i]", 6],
              ["rem", 4],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 22: Un-choose 3 from [3], return to root
          {
            codeLine: 7,
            narration: "Every candidate from [3] has been tried. UN-CHOOSE 3: rem restored to 7. Return to root.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "root",
                activeEdges: [],
                visitedNodes: ["root", "2", "3"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }]
              }
            },
            vars: [
              ["un-choose", 3],
              ["rem", 7]
            ]
          },
          // Step 23: Back at root, choose 6 -> [6]
          {
            codeLine: 5,
            narration: "Back at root (r=7): next candidate i=2 is cand[2]=6. CHOOSE 6 -> remaining target becomes 7 - 6 = 1. Recurse combo(start=2, rem=1, path=[6]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "6",
                activeEdges: [["root", "6"]],
                visitedNodes: ["root", "2", "3", "6"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[6] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 6],
              ["rem", 1],
              ["path", "[6]"]
            ]
          },
          // Step 24: Prune [6,6] overshoot
          {
            codeLine: 4,
            narration: "At [6] (r=1): try cand[2]=6 (start=2). cand[2]=6 > rem=1 -> OVERSHOOT! Prune [6,6] (r=-5). All higher candidates overshoot. UN-CHOOSE 6, return to root.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "66",
                activeEdges: [["root", "6"], ["6", "66"]],
                visitedNodes: ["root", "2", "3", "6"],
                prunedNodes: ["66"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[6] r=1" }]
              }
            },
            vars: [
              ["cand[i]", 6],
              ["rem", 1],
              ["status", "pruned (overshoot)"]
            ]
          },
          // Step 25: Back at root, choose 7 -> [7]
          {
            codeLine: 5,
            narration: "Back at root (r=7): next candidate i=3 is cand[3]=7. CHOOSE 7 -> remaining target becomes 7 - 7 = 0. Recurse combo(start=3, rem=0, path=[7]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "7",
                activeEdges: [["root", "7"]],
                visitedNodes: ["root", "2", "3", "6", "7"],
                successNodes: ["223"],
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[7] r=0" }]
              }
            },
            vars: [
              ["cand[i]", 7],
              ["rem", 0],
              ["path", "[7]"]
            ]
          },
          // Step 26: Exact Hit [7]
          {
            codeLine: 2,
            narration: "At [7] (r=0): rem == 0 (EXACT HIT!). Record solution [7] to combinations list (✓). Solutions collected: [[2, 2, 3], [7]]. Return.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "7",
                activeEdges: [["root", "7"]],
                visitedNodes: ["root", "2", "3", "6", "7"],
                successNodes: ["223", "7"],
                paramBadges: { "223": "✓", "7": "✓" },
                title: "REUSE ALLOWED; PRUNE WHEN THE SUM OVERSHOOTS"
              },
              results: ["[2,2,3]", "[7]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε r=7" }, { val: "[7] r=0" }]
              }
            },
            vars: [
              ["recorded", "[7]"],
              ["found", 2]
            ]
          },
          // Step 27: COMPLETE
          {
            codeLine: 8,
            narration: "COMPLETE: Explored all branches with forward-only indexing and overshoot pruning. All valid combinations summing to 7 are: [[2, 2, 3], [7]].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε r=7", x: 270, y: 35, width: 50, height: 24 },
                  { id: "2", label: "[2] r=5", x: 130, y: 88, width: 54, height: 24 },
                  { id: "3", label: "[3] r=4", x: 260, y: 88, width: 54, height: 24 },
                  { id: "6", label: "[6] r=1", x: 370, y: 88, width: 54, height: 24 },
                  { id: "7", label: "[7] r=0", x: 450, y: 88, width: 54, height: 24, isSuccess: true },
                  { id: "22", label: "[2,2] r=3", x: 75, y: 145, width: 62, height: 24 },
                  { id: "23", label: "[2,3] r=2", x: 155, y: 145, width: 62, height: 24 },
                  { id: "26", label: "[2,6] r=-1", x: 230, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "33", label: "[3,3] r=1", x: 305, y: 145, width: 62, height: 24 },
                  { id: "36", label: "[3,6] r=-2", x: 380, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "66", label: "[6,6] r=-5", x: 455, y: 145, width: 64, height: 24, isPruned: true },
                  { id: "222", label: "[2,2,2] r=1", x: 50, y: 205, width: 72, height: 24 },
                  { id: "223", label: "[2,2,3] r=0", x: 130, y: 205, width: 72, height: 24, isSuccess: true },
                  { id: "226", label: "[2,2,6] r=-3", x: 210, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "233", label: "[2,3,3] r=-1", x: 290, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "333", label: "[3,3,3] r=-2", x: 370, y: 205, width: 74, height: 24, isPruned: true },
                  { id: "2222", label: "[2,2,2,2] r=-1", x: 50, y: 265, width: 84, height: 24, isPruned: true }
                ],
                edges: [
                  { from: "root", to: "2" },
                  { from: "root", to: "3" },
                  { from: "root", to: "6" },
                  { from: "root", to: "7" },
                  { from: "2", to: "22" },
                  { from: "2", to: "23" },
                  { from: "2", to: "26" },
                  { from: "3", to: "33" },
                  { from: "3", to: "36" },
                  { from: "6", to: "66" },
                  { from: "22", to: "222" },
                  { from: "22", to: "223" },
                  { from: "22", to: "226" },
                  { from: "23", to: "233" },
                  { from: "33", to: "333" },
                  { from: "222", to: "2222" }
                ],
                activeNode: "root",
                activeEdges: [],
                visitedNodes: ["root", "2", "3", "6", "7", "22", "23", "33", "222", "223"],
                prunedNodes: ["2222", "226", "233", "26", "333", "36", "66"],
                successNodes: ["223", "7"],
                paramBadges: { "223": "✓", "7": "✓" },
                title: "COMPLETE: ALL COMBINATIONS FOUND"
              },
              results: ["[2,2,3]", "[7]"],
              resultsTitle: "COMBINATIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "Combinations: [[2, 2, 3], [7]]"
            },
            vars: [
              ["combinations", "[[2, 2, 3], [7]]"],
              ["total found", 2],
              ["time", "O(n^(T/min))"],
              ["space", "O(T/min)"]
            ]
          }
        ]
      },
      {
        id: 'dp-unbounded-knapsack',
        label: '1D Bottom-Up DP / Unbounded Knapsack Combinations',
        complexity: {
          time: 'O(N · target · K)',
          space: 'O(target · K)'
        },
        pseudocode: [
          "function combinationSum(candidates, target):",
          "  dp = Array(target + 1).fill([])",
          "  dp[0] = [[]]                          // base case",
          "  for c in candidates:                  // iterate items",
          "    for t from c to target:             // unbounded reuse",
          "      for combo in dp[t - c]:",
          "        dp[t].push(combo + [c])",
          "  return dp[target]"
        ],
        starterCode: {
          javascript: "function combinationSum(candidates, target) {\n  const dp = Array.from({ length: target + 1 }, () => []);\n  dp[0] = [[]];\n  \n  for (const c of candidates) {\n    for (let t = c; t <= target; t++) {\n      for (const comb of dp[t - c]) {\n        dp[t].push([...comb, c]);\n      }\n    }\n  }\n  return dp[target];\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    dp = [[] for _ in range(target + 1)]\n    dp[0] = [[]]\n    \n    for c in candidates:\n        for t in range(c, target + 1):\n            for comb in dp[t - c]:\n                dp[t].append(comb + [c])\n    return dp[target]"
        },
        solutionCode: {
          javascript: "function combinationSum(candidates, target) {\n  const dp = Array.from({ length: target + 1 }, () => []);\n  dp[0] = [[]];\n  \n  for (const c of candidates) {\n    for (let t = c; t <= target; t++) {\n      for (const comb of dp[t - c]) {\n        dp[t].push([...comb, c]);\n      }\n    }\n  }\n  return dp[target];\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    dp = [[] for _ in range(target + 1)]\n    dp[0] = [[]]\n    \n    for c in candidates:\n        for t in range(c, target + 1):\n            for comb in dp[t - c]:\n                dp[t].append(comb + [c])\n    return dp[target]"
        },
        testCases: [
          {
            input: [[2, 3, 6, 7], 7],
            expected: [[2, 2, 3], [7]],
            description: "DP combination table for target 7"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Unbounded Knapsack DP: Process candidates outer-loop to avoid permutations. dp[t] builds all combinations summing to t.",
            backtracking: {
              results: ["[2, 2, 3]", "[7]"],
              resultsTitle: "DP COMBINATIONS",
              horizontalStack: {
                title: "DP ARRAY SLICES (dp[0..7])",
                items: [
                  { val: "dp[0]: [[]]" },
                  { val: "dp[2]: [[2]]" },
                  { val: "dp[3]: [[3]]" },
                  { val: "dp[4]: [[2,2]]" },
                  { val: "dp[6]: [[2,2,2], [3,3], [6]]" },
                  { val: "dp[7]: [[2,2,3], [7]]" }
                ]
              }
            },
            best: {
              label: "DP Result: [[2, 2, 3], [7]]"
            },
            vars: [
              ["method", "1D Bottom-Up DP"],
              ["candidates", "[2, 3, 6, 7]"],
              ["dp[7]", "[[2,2,3], [7]]"]
            ]
          }
        ]
      },
      {
        id: 'dfs-include-exclude',
        label: 'Binary Choice DFS (Include / Exclude Candidate)',
        complexity: {
          time: 'O(2^(target / min))',
          space: 'O(target / min)'
        },
        pseudocode: [
          "function dfs(i, rem, path):",
          "  if rem == 0: record path; return",
          "  if i >= len(candidates) or rem < 0: return",
          "  // Choice 1: Include candidates[i] (allow reuse)",
          "  path.push(candidates[i])",
          "  dfs(i, rem - candidates[i], path)",
          "  path.pop()",
          "  // Choice 2: Exclude candidates[i] (move next)",
          "  dfs(i + 1, rem, path)"
        ],
        starterCode: {
          javascript: "function combinationSum(candidates, target) {\n  const result = [];\n  \n  function dfs(i, rem, path) {\n    if (rem === 0) {\n      result.push([...path]);\n      return;\n    }\n    if (i >= candidates.length || rem < 0) return;\n    \n    // Include cand[i]\n    path.push(candidates[i]);\n    dfs(i, rem - candidates[i], path);\n    path.pop();\n    \n    // Exclude cand[i]\n    dfs(i + 1, rem, path);\n  }\n  \n  dfs(0, target, []);\n  return result;\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    result = []\n    \n    def dfs(i, rem, path):\n        if rem == 0:\n            result.append(list(path))\n            return\n        if i >= len(candidates) or rem < 0:\n            return\n            \n        # Include cand[i]\n        path.append(candidates[i])\n        dfs(i, rem - candidates[i], path)\n        path.pop()\n        \n        # Exclude cand[i]\n        dfs(i + 1, rem, path)\n        \n    dfs(0, target, [])\n    return result"
        },
        solutionCode: {
          javascript: "function combinationSum(candidates, target) {\n  const result = [];\n  \n  function dfs(i, rem, path) {\n    if (rem === 0) {\n      result.push([...path]);\n      return;\n    }\n    if (i >= candidates.length || rem < 0) return;\n    \n    // Include cand[i]\n    path.push(candidates[i]);\n    dfs(i, rem - candidates[i], path);\n    path.pop();\n    \n    // Exclude cand[i]\n    dfs(i + 1, rem, path);\n  }\n  \n  dfs(0, target, []);\n  return result;\n}",
          python: "def combinationSum(candidates: list[int], target: int) -> list[list[int]]:\n    result = []\n    \n    def dfs(i, rem, path):\n        if rem == 0:\n            result.append(list(path))\n            return\n        if i >= len(candidates) or rem < 0:\n            return\n            \n        # Include cand[i]\n        path.append(candidates[i])\n        dfs(i, rem - candidates[i], path)\n        path.pop()\n        \n        # Exclude cand[i]\n        dfs(i + 1, rem, path)\n        \n    dfs(0, target, [])\n    return result"
        },
        testCases: [
          {
            input: [[2, 3, 6, 7], 7],
            expected: [[2, 2, 3], [7]],
            description: "Binary DFS tree for [2, 3, 6, 7] target 7"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Binary Choice DFS: At each step, branch into 2 decisions: (1) Include candidates[i] and stay at index i to allow reuse, (2) Exclude candidates[i] and advance index to i+1.",
            backtracking: {
              results: ["[2, 2, 3]", "[7]"],
              resultsTitle: "VALID COMBINATIONS",
              horizontalStack: {
                title: "BINARY CHOICES",
                items: [
                  { val: "Include cand[i] -> dfs(i, rem-cand[i])" },
                  { val: "Exclude cand[i] -> dfs(i+1, rem)" }
                ]
              }
            },
            best: {
              label: "Binary DFS Result: [[2, 2, 3], [7]]"
            },
            vars: [
              ["method", "Binary Include / Exclude DFS"],
              ["candidates", "[2, 3, 6, 7]"],
              ["results", "[[2, 2, 3], [7]]"]
            ]
          }
        ]
      }
    ]
  },

  // 9. Palindrome Partitioning (LeetCode #131 - Medium)
  {
    id: 'palindrome-partitioning',
    patternId: 'backtracking',
    title: 'Palindrome Partitioning',
    subtitle: 'Cut only where the prefix is a palindrome',
    kind: 'problem',
    leetcode: {
      id: 131,
      slug: 'palindrome-partitioning',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google'],
    statement: "Given a string, return all ways to partition it into contiguous substrings such that every substring is a palindrome.",
    visualType: 'backtracking',
    initialInput: 'aab',
    approaches: [
      {
        id: 'backtracking-palindrome-prefixes',
        label: 'Backtracking · cut on palindrome prefixes only',
        complexity: {
          time: 'O(n · 2ⁿ)',
          space: 'O(n)'
        },
        pseudocode: [
          "partition(pos, parts):",
          "  if pos == len(s): record parts; return // reached end",
          "  for end in pos+1..len(s):",
          "    prefix = s[pos..end]",
          "    if not isPalindrome(prefix): prune; continue",
          "    parts.push(prefix)                    // choose",
          "    partition(end, parts)                 // explore",
          "    parts.pop()                           // un-choose",
          "  return",
          "// answer = all recorded partitions"
        ],
        starterCode: {
          javascript: "function partition(s) {\n  const result = [];\n  \n  function isPal(str, l, r) {\n    while (l < r) {\n      if (str[l++] !== str[r--]) return false;\n    }\n    return true;\n  }\n  \n  function partitionHelper(pos, parts) {\n    if (pos === s.length) {\n      result.push([...parts]);\n      return;\n    }\n    for (let end = pos + 1; end <= s.length; end++) {\n      if (isPal(s, pos, end - 1)) {\n        parts.push(s.slice(pos, end));\n        partitionHelper(end, parts);\n        parts.pop();\n      }\n    }\n  }\n  \n  partitionHelper(0, []);\n  return result;\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    result = []\n    \n    def is_pal(sub):\n        return sub == sub[::-1]\n        \n    def partition_helper(pos, parts):\n        if pos == len(s):\n            result.append(list(parts))\n            return\n        for end in range(pos + 1, len(s) + 1):\n            prefix = s[pos:end]\n            if is_pal(prefix):\n                parts.append(prefix)\n                partition_helper(end, parts)\n                parts.pop()\n                \n    partition_helper(0, [])\n    return result"
        },
        solutionCode: {
          javascript: "function partition(s) {\n  const result = [];\n  \n  function isPal(str, l, r) {\n    while (l < r) {\n      if (str[l++] !== str[r--]) return false;\n    }\n    return true;\n  }\n  \n  function partitionHelper(pos, parts) {\n    if (pos === s.length) {\n      result.push([...parts]);\n      return;\n    }\n    for (let end = pos + 1; end <= s.length; end++) {\n      if (isPal(s, pos, end - 1)) {\n        parts.push(s.slice(pos, end));\n        partitionHelper(end, parts);\n        parts.pop();\n      }\n    }\n  }\n  \n  partitionHelper(0, []);\n  return result;\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    result = []\n    \n    def is_pal(sub):\n        return sub == sub[::-1]\n        \n    def partition_helper(pos, parts):\n        if pos == len(s):\n            result.append(list(parts))\n            return\n        for end in range(pos + 1, len(s) + 1):\n            prefix = s[pos:end]\n            if is_pal(prefix):\n                parts.append(prefix)\n                partition_helper(end, parts)\n                parts.pop()\n                \n    partition_helper(0, [])\n    return result"
        },
        testCases: [
          {
            input: ['aab'],
            expected: [['a', 'a', 'b'], ['aa', 'b']],
            description: "Palindrome partitions of \"aab\""
          },
          {
            input: ['a'],
            expected: [['a']],
            description: "Single character \"a\""
          }
        ],
        steps: [
          // Step 1: Root State (Matches Screenshot 1)
          {
            codeLine: 1,
            narration: "Find all ways to partition \"aab\" such that every piece is a palindrome. We cut prefixes one by one: if a cut is a palindrome, we recurse on the remainder; otherwise we prune immediately. The tree shows all prefix choices.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 230, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 160, y: 85, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 240, y: 85, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 300, y: 85, width: 40, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 130, y: 135, width: 40, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 190, y: 135, width: 44, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 240, y: 135, width: 44, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 130, y: 185, width: 48, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "root",
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS"
            },
            vars: [
              ["s", "\"aab\""],
              ["goal", "all-palindrome partitions"]
            ]
          },
          // Step 2: Test prefix "a"
          {
            codeLine: 3,
            narration: "From pos 0: test prefix s[0..1] = \"a\". Is \"a\" a palindrome? YES (✓).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "a"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["pos", 0],
              ["end", 1],
              ["prefix", "\"a\""],
              ["isPalindrome", "true ✓"]
            ]
          },
          // Step 3: Choose "a"
          {
            codeLine: 6,
            narration: "CHOOSE prefix \"a\": push \"a\" to parts -> parts = [\"a\"]. Recurse partition(pos=1, parts=[\"a\"]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "a"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["pos", 1],
              ["parts", "[\"a\"]"]
            ]
          },
          // Step 4: At pos 1, test prefix "a"
          {
            codeLine: 3,
            narration: "At pos 1: test prefix s[1..2] = \"a\". Is \"a\" a palindrome? YES (✓).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a",
                activeEdges: [["root", "a"], ["a", "a_a"]],
                visitedNodes: ["root", "a", "a_a"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["pos", 1],
              ["end", 2],
              ["prefix", "\"a\""],
              ["isPalindrome", "true ✓"]
            ]
          },
          // Step 5: Choose "a" at pos 1
          {
            codeLine: 6,
            narration: "CHOOSE prefix \"a\": push \"a\" to parts -> parts = [\"a\", \"a\"]. Recurse partition(pos=2, parts=[\"a\", \"a\"]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a",
                activeEdges: [["root", "a"], ["a", "a_a"]],
                visitedNodes: ["root", "a", "a_a"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }]
              }
            },
            vars: [
              ["pos", 2],
              ["parts", "[\"a\", \"a\"]"]
            ]
          },
          // Step 6: At pos 2, test prefix "b"
          {
            codeLine: 3,
            narration: "At pos 2: test prefix s[2..3] = \"b\". Is \"b\" a palindrome? YES (✓).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a_b",
                activeEdges: [["root", "a"], ["a", "a_a"], ["a_a", "a_a_b"]],
                visitedNodes: ["root", "a", "a_a", "a_a_b"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }]
              }
            },
            vars: [
              ["pos", 2],
              ["end", 3],
              ["prefix", "\"b\""],
              ["isPalindrome", "true ✓"]
            ]
          },
          // Step 7: Choose "b" at pos 2
          {
            codeLine: 6,
            narration: "CHOOSE prefix \"b\": push \"b\" to parts -> parts = [\"a\", \"a\", \"b\"]. Recurse partition(pos=3, parts=[\"a\", \"a\", \"b\"]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a_b",
                activeEdges: [["root", "a"], ["a", "a_a"], ["a_a", "a_a_b"]],
                visitedNodes: ["root", "a", "a_a", "a_a_b"],
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: [],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }, { val: "a|a|b" }]
              }
            },
            vars: [
              ["pos", 3],
              ["parts", "[\"a\", \"a\", \"b\"]"]
            ]
          },
          // Step 8: Exact Hit ["a", "a", "b"]
          {
            codeLine: 2,
            narration: "pos == 3 == len(s) (REACHED END!). Every partition piece is a palindrome. Record partition [\"a\", \"a\", \"b\"] to results (✓). Return.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a_b",
                activeEdges: [["root", "a"], ["a", "a_a"], ["a_a", "a_a_b"]],
                visitedNodes: ["root", "a", "a_a", "a_a_b"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }, { val: "a|a|b" }]
              }
            },
            vars: [
              ["recorded", "[\"a\", \"a\", \"b\"]"],
              ["found", 1]
            ]
          },
          // Step 9: Backtrack un-choose "b"
          {
            codeLine: 8,
            narration: "Backtrack: UN-CHOOSE \"b\": parts.pop() -> parts = [\"a\", \"a\"]. Return to pos 2.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a",
                activeEdges: [["root", "a"], ["a", "a_a"]],
                visitedNodes: ["root", "a", "a_a"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }]
              }
            },
            vars: [
              ["un-choose", "\"b\""],
              ["parts", "[\"a\", \"a\"]"]
            ]
          },
          // Step 10: pos 2 exhausted
          {
            codeLine: 9,
            narration: "All prefix cuts from pos 2 exhausted. Return to pos 1.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_a",
                activeEdges: [["root", "a"], ["a", "a_a"]],
                visitedNodes: ["root", "a", "a_a"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }, { val: "a|a" }]
              }
            },
            vars: [
              ["return to", "pos 1"]
            ]
          },
          // Step 11: Un-choose "a" at pos 1
          {
            codeLine: 8,
            narration: "Backtrack: UN-CHOOSE \"a\": parts.pop() -> parts = [\"a\"]. Return to pos 1 loop.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "a"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["un-choose", "\"a\""],
              ["parts", "[\"a\"]"]
            ]
          },
          // Step 12: At pos 1, test prefix "ab"
          {
            codeLine: 4,
            narration: "At pos 1: next cut is s[1..3] = \"ab\". Is \"ab\" a palindrome? NO (✗).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_ab",
                activeEdges: [["root", "a"], ["a", "a_ab"]],
                visitedNodes: ["root", "a"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["pos", 1],
              ["end", 3],
              ["prefix", "\"ab\""],
              ["isPalindrome", "false ✗"]
            ]
          },
          // Step 13: Prune "a|ab"
          {
            codeLine: 5,
            narration: "PRUNE \"a|ab\": \"ab\" is not a palindrome. Discard branch without exploring deeper.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a_ab",
                activeEdges: [["root", "a"], ["a", "a_ab"]],
                visitedNodes: ["root", "a"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["status", "pruned (not palindrome)"]
            ]
          },
          // Step 14: Return from pos 1
          {
            codeLine: 9,
            narration: "All cuts from pos 1 completed. Returning from partition(pos=1).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "a",
                activeEdges: [["root", "a"]],
                visitedNodes: ["root", "a"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "a" }]
              }
            },
            vars: [
              ["return to", "pos 0"]
            ]
          },
          // Step 15: Un-choose "a" (Matches Screenshot 2)
          {
            codeLine: 9,
            narration: "UN-CHOOSE \"a\": drop that piece and return to \"ε\". The state restored so the next, longer prefix cut starts fresh from position 0.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "root",
                activeEdges: [],
                visitedNodes: ["root", "a"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["un-choose", "\"a\""],
              ["back at", "ε"]
            ]
          },
          // Step 16: From pos 0, test prefix "aa"
          {
            codeLine: 3,
            narration: "From pos 0: test next prefix s[0..2] = \"aa\". Is \"aa\" a palindrome? YES (✓).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa",
                activeEdges: [["root", "aa"]],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["pos", 0],
              ["end", 2],
              ["prefix", "\"aa\""],
              ["isPalindrome", "true ✓"]
            ]
          },
          // Step 17: Choose "aa"
          {
            codeLine: 6,
            narration: "CHOOSE prefix \"aa\": push \"aa\" to parts -> parts = [\"aa\"]. Recurse partition(pos=2, parts=[\"aa\"]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa",
                activeEdges: [["root", "aa"]],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "aa" }]
              }
            },
            vars: [
              ["pos", 2],
              ["parts", "[\"aa\"]"]
            ]
          },
          // Step 18: At pos 2, test prefix "b"
          {
            codeLine: 3,
            narration: "At pos 2: test prefix s[2..3] = \"b\". Is \"b\" a palindrome? YES (✓).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa_b",
                activeEdges: [["root", "aa"], ["aa", "aa_b"]],
                visitedNodes: ["root", "a", "aa", "aa_b"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "aa" }]
              }
            },
            vars: [
              ["pos", 2],
              ["end", 3],
              ["prefix", "\"b\""],
              ["isPalindrome", "true ✓"]
            ]
          },
          // Step 19: Choose "b" at pos 2
          {
            codeLine: 6,
            narration: "CHOOSE prefix \"b\": push \"b\" to parts -> parts = [\"aa\", \"b\"]. Recurse partition(pos=3, parts=[\"aa\", \"b\"]).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa_b",
                activeEdges: [["root", "aa"], ["aa", "aa_b"]],
                visitedNodes: ["root", "a", "aa", "aa_b"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b"],
                paramBadges: { "a_a_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "aa" }, { val: "aa|b" }]
              }
            },
            vars: [
              ["pos", 3],
              ["parts", "[\"aa\", \"b\"]"]
            ]
          },
          // Step 20: Exact Hit ["aa", "b"]
          {
            codeLine: 2,
            narration: "pos == 3 == len(s) (REACHED END!). Record partition [\"aa\", \"b\"] to results (✓). Solutions collected: [[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]]. Return.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa_b",
                activeEdges: [["root", "aa"], ["aa", "aa_b"]],
                visitedNodes: ["root", "a", "aa", "aa_b"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "aa" }, { val: "aa|b" }]
              }
            },
            vars: [
              ["recorded", "[\"aa\", \"b\"]"],
              ["found", 2]
            ]
          },
          // Step 21: Backtrack un-choose "b"
          {
            codeLine: 8,
            narration: "Backtrack: UN-CHOOSE \"b\": parts.pop() -> parts = [\"aa\"]. Return to pos 2.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aa",
                activeEdges: [["root", "aa"]],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }, { val: "aa" }]
              }
            },
            vars: [
              ["un-choose", "\"b\""],
              ["parts", "[\"aa\"]"]
            ]
          },
          // Step 22: Backtrack un-choose "aa"
          {
            codeLine: 8,
            narration: "Backtrack: UN-CHOOSE \"aa\": parts.pop() -> parts = []. Return to pos 0.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "root",
                activeEdges: [],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["un-choose", "\"aa\""],
              ["parts", "[]"]
            ]
          },
          // Step 23: From pos 0, test prefix "aab"
          {
            codeLine: 4,
            narration: "From pos 0: test next prefix s[0..3] = \"aab\". Is \"aab\" a palindrome? NO (✗).",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aab",
                activeEdges: [["root", "aab"]],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab", "aab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["pos", 0],
              ["end", 3],
              ["prefix", "\"aab\""],
              ["isPalindrome", "false ✗"]
            ]
          },
          // Step 24: Prune "aab"
          {
            codeLine: 5,
            narration: "PRUNE \"aab\": not a palindrome. Discard branch without exploring deeper.",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "aab",
                activeEdges: [["root", "aab"]],
                visitedNodes: ["root", "a", "aa"],
                prunedNodes: ["a_ab", "aab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "CUT ONLY WHERE THE PREFIX IS A PALINDROME"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: [{ val: "ε" }]
              }
            },
            vars: [
              ["status", "pruned (not palindrome)"]
            ]
          },
          // Step 25: COMPLETE
          {
            codeLine: 10,
            narration: "COMPLETE: All prefix choices and branches explored. All valid palindrome partitions of \"aab\" are: [[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]].",
            backtracking: {
              tree: {
                nodes: [
                  { id: "root", label: "ε", x: 270, y: 35, width: 36, height: 24 },
                  { id: "a", label: "a", x: 150, y: 90, width: 36, height: 24 },
                  { id: "aa", label: "aa", x: 270, y: 90, width: 36, height: 24 },
                  { id: "aab", label: "aab", x: 390, y: 90, width: 44, height: 24, isPruned: true },
                  { id: "a_a", label: "a|a", x: 100, y: 150, width: 44, height: 24 },
                  { id: "a_ab", label: "a|ab", x: 200, y: 150, width: 48, height: 24, isPruned: true },
                  { id: "aa_b", label: "aa|b", x: 270, y: 150, width: 48, height: 24, isSuccess: true },
                  { id: "a_a_b", label: "a|a|b", x: 100, y: 210, width: 52, height: 24, isSuccess: true }
                ],
                edges: [
                  { from: "root", to: "a" },
                  { from: "root", to: "aa" },
                  { from: "root", to: "aab" },
                  { from: "a", to: "a_a" },
                  { from: "a", to: "a_ab" },
                  { from: "aa", to: "aa_b" },
                  { from: "a_a", to: "a_a_b" }
                ],
                activeNode: "root",
                activeEdges: [],
                visitedNodes: ["root", "a", "aa", "a_a"],
                prunedNodes: ["a_ab", "aab"],
                successNodes: ["a_a_b", "aa_b"],
                paramBadges: { "a_a_b": "✓", "aa_b": "✓" },
                title: "COMPLETE: ALL PARTITIONS FOUND"
              },
              results: ["[\"a\", \"a\", \"b\"]", "[\"aa\", \"b\"]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "CALL STACK (DEPTH)",
                items: []
              }
            },
            best: {
              label: "Partitions: [[\"a\",\"a\",\"b\"], [\"aa\",\"b\"]]"
            },
            vars: [
              ["partitions", "[[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]]"],
              ["total", 2],
              ["time", "O(n · 2ⁿ)"],
              ["space", "O(n)"]
            ]
          }
        ]
      },
      {
        id: 'dp-table-backtracking',
        label: 'DP 2D Palindrome Table + Backtracking',
        complexity: {
          time: 'O(n² + n · 2ⁿ)',
          space: 'O(n²)'
        },
        pseudocode: [
          "function partition(s):",
          "  n = len(s)",
          "  dp = 2D boolean array of size n x n  // isPal[i][j]",
          "  for len from 1 to n:",
          "    for i from 0 to n - len:",
          "      j = i + len - 1",
          "      if s[i] == s[j] and (len <= 2 or dp[i+1][j-1]):",
          "        dp[i][j] = true",
          "  // Backtrack using O(1) table lookups",
          "  result = []",
          "  backtrack(0, [])",
          "  return result"
        ],
        starterCode: {
          javascript: "function partition(s) {\n  const n = s.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  \n  for (let len = 1; len <= n; len++) {\n    for (let i = 0; i <= n - len; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len <= 2 || dp[i + 1][j - 1])) {\n        dp[i][j] = true;\n      }\n    }\n  }\n  \n  const result = [];\n  function backtrack(start, path) {\n    if (start === n) {\n      result.push([...path]);\n      return;\n    }\n    for (let end = start; end < n; end++) {\n      if (dp[start][end]) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    n = len(s)\n    dp = [[False] * n for _ in range(n)]\n    \n    for length in range(1, n + 1):\n        for i in range(n - length + 1):\n            j = i + length - 1\n            if s[i] == s[j] and (length <= 2 or dp[i + 1][j - 1]):\n                dp[i][j] = True\n                \n    result = []\n    def backtrack(start, path):\n        if start == n:\n            result.append(list(path))\n            return\n        for end in range(start, n):\n            if dp[start][end]:\n                path.append(s[start:end + 1])\n                backtrack(end + 1, path)\n                path.pop()\n                \n    backtrack(0, [])\n    return result"
        },
        solutionCode: {
          javascript: "function partition(s) {\n  const n = s.length;\n  const dp = Array.from({ length: n }, () => new Array(n).fill(false));\n  \n  for (let len = 1; len <= n; len++) {\n    for (let i = 0; i <= n - len; i++) {\n      const j = i + len - 1;\n      if (s[i] === s[j] && (len <= 2 || dp[i + 1][j - 1])) {\n        dp[i][j] = true;\n      }\n    }\n  }\n  \n  const result = [];\n  function backtrack(start, path) {\n    if (start === n) {\n      result.push([...path]);\n      return;\n    }\n    for (let end = start; end < n; end++) {\n      if (dp[start][end]) {\n        path.push(s.slice(start, end + 1));\n        backtrack(end + 1, path);\n        path.pop();\n      }\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    n = len(s)\n    dp = [[False] * n for _ in range(n)]\n    \n    for length in range(1, n + 1):\n        for i in range(n - length + 1):\n            j = i + length - 1\n            if s[i] == s[j] and (length <= 2 or dp[i + 1][j - 1]):\n                dp[i][j] = True\n                \n    result = []\n    def backtrack(start, path):\n        if start == n:\n            result.append(list(path))\n            return\n        for end in range(start, n):\n            if dp[start][end]:\n                path.append(s[start:end + 1])\n                backtrack(end + 1, path)\n                path.pop()\n                \n    backtrack(0, [])\n    return result"
        },
        testCases: [
          {
            input: ['aab'],
            expected: [['a', 'a', 'b'], ['aa', 'b']],
            description: "2D DP Palindrome table precomputation for \"aab\""
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "2D DP Precomputation: Precalculate a boolean table dp[i][j] for whether s[i..j] is a palindrome in O(n²) time. Backtracking checks palindrome validity in O(1).",
            backtracking: {
              results: ["[ \"a\", \"a\", \"b\" ]", "[ \"aa\", \"b\" ]"],
              resultsTitle: "PARTITIONS",
              horizontalStack: {
                title: "2D DP TABLE isPal[i][j]",
                items: [
                  { val: "dp[0][0]='a' (T)" },
                  { val: "dp[0][1]='aa' (T)" },
                  { val: "dp[0][2]='aab' (F)" },
                  { val: "dp[1][1]='a' (T)" },
                  { val: "dp[1][2]='ab' (F)" },
                  { val: "dp[2][2]='b' (T)" }
                ]
              }
            },
            best: {
              label: "Partitions: [[\"a\",\"a\",\"b\"], [\"aa\",\"b\"]]"
            },
            vars: [
              ["method", "DP Table + O(1) Checks"],
              ["DP precalc", "O(n²)"],
              ["partitions", "[[a, a, b], [aa, b]]"]
            ]
          }
        ]
      },
      {
        id: 'bottom-up-dp',
        label: 'Bottom-Up 1D DP Partition Collector',
        complexity: {
          time: 'O(n · 2ⁿ)',
          space: 'O(n · 2ⁿ)'
        },
        pseudocode: [
          "function partition(s):",
          "  dp = Array(n + 1).fill([])",
          "  dp[0] = [[]]                          // base case",
          "  for i from 1 to n:",
          "    for j from 0 to i - 1:",
          "      if isPalindrome(s[j..i-1]):",
          "        for part in dp[j]:",
          "          dp[i].push(part + [s[j..i-1]])",
          "  return dp[n]"
        ],
        starterCode: {
          javascript: "function partition(s) {\n  const n = s.length;\n  const dp = Array.from({ length: n + 1 }, () => []);\n  dp[0] = [[]];\n  \n  function isPal(str, l, r) {\n    while (l < r) {\n      if (str[l++] !== str[r--]) return false;\n    }\n    return true;\n  }\n  \n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) {\n      if (isPal(s, j, i - 1)) {\n        const sub = s.slice(j, i);\n        for (const part of dp[j]) {\n          dp[i].push([...part, sub]);\n        }\n      }\n    }\n  }\n  return dp[n];\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    n = len(s)\n    dp = [[] for _ in range(n + 1)]\n    dp[0] = [[]]\n    \n    def is_pal(sub):\n        return sub == sub[::-1]\n        \n    for i in range(1, n + 1):\n        for j in range(i):\n            sub = s[j:i]\n            if is_pal(sub):\n                for part in dp[j]:\n                    dp[i].append(part + [sub])\n                    \n    return dp[n]"
        },
        solutionCode: {
          javascript: "function partition(s) {\n  const n = s.length;\n  const dp = Array.from({ length: n + 1 }, () => []);\n  dp[0] = [[]];\n  \n  function isPal(str, l, r) {\n    while (l < r) {\n      if (str[l++] !== str[r--]) return false;\n    }\n    return true;\n  }\n  \n  for (let i = 1; i <= n; i++) {\n    for (let j = 0; j < i; j++) {\n      if (isPal(s, j, i - 1)) {\n        const sub = s.slice(j, i);\n        for (const part of dp[j]) {\n          dp[i].push([...part, sub]);\n        }\n      }\n    }\n  }\n  return dp[n];\n}",
          python: "def partition(s: str) -> list[list[str]]:\n    n = len(s)\n    dp = [[] for _ in range(n + 1)]\n    dp[0] = [[]]\n    \n    def is_pal(sub):\n        return sub == sub[::-1]\n        \n    for i in range(1, n + 1):\n        for j in range(i):\n            sub = s[j:i]\n            if is_pal(sub):\n                for part in dp[j]:\n                    dp[i].append(part + [sub])\n                    \n    return dp[n]"
        },
        testCases: [
          {
            input: ['aab'],
            expected: [['a', 'a', 'b'], ['aa', 'b']],
            description: "1D DP array partitions of \"aab\""
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Bottom-Up 1D DP: dp[i] contains all palindrome partitions for prefix s[0..i-1]. We extend dp[j] by appending palindrome piece s[j..i-1].",
            backtracking: {
              results: ["[ \"a\", \"a\", \"b\" ]", "[ \"aa\", \"b\" ]"],
              resultsTitle: "DP PARTITIONS",
              horizontalStack: {
                title: "1D DP ACCUMULATOR",
                items: [
                  { val: "dp[0]: [[]]" },
                  { val: "dp[1]: [[\"a\"]]" },
                  { val: "dp[2]: [[\"a\",\"a\"], [\"aa\"]]" },
                  { val: "dp[3]: [[\"a\",\"a\",\"b\"], [\"aa\",\"b\"]]" }
                ]
              }
            },
            best: {
              label: "Result: [[\"a\",\"a\",\"b\"], [\"aa\",\"b\"]]"
            },
            vars: [
              ["method", "1D Bottom-Up DP"],
              ["dp[3]", "[[\"a\",\"a\",\"b\"], [\"aa\",\"b\"]]"]
            ]
          }
        ]
      }
    ]
  },

  // 10. N-Queens (LeetCode #51 - Hard)
  {
    id: 'n-queens',
    patternId: 'backtracking',
    title: 'N-Queens',
    subtitle: 'Place row by row, backtrack on attack',
    kind: 'problem',
    leetcode: {
      id: 51,
      slug: 'n-queens',
      difficulty: 'Hard'
    },
    companies: ['Amazon', 'Google', 'Adobe', 'Microsoft', 'Meta'],
    statement: "Given an integer n, return all distinct ways to place n queens on an n-by-n chessboard so that no two queens attack each other, with each solution shown as a board layout.",
    visualType: 'backtracking',
    initialInput: 4,
    approaches: [
      {
        id: 'backtracking-row-by-row',
        label: 'Backtracking · one queen per row',
        complexity: {
          time: 'O(N!)',
          space: 'O(N)'
        },
        pseudocode: [
          "solve(N):",
          "  return place(row = 0)",
          "place(row):",
          "  if row == N: return true     // all queens placed",
          "  for col in 0..N-1:",
          "    if attacked(row, col):",
          "      continue                  // reject, try next",
          "    board[row][col] = Q        // choose",
          "    if place(row + 1): return true",
          "    board[row][col] = .        // un-choose (backtrack)",
          "  return false                 // no safe column",
          "attacked(row, col):",
          "  any earlier queen in same column or diagonal"
        ],
        starterCode: {
          javascript: "function solveNQueens(n) {\n  const result = [];\n  const board = Array.from({ length: n }, () => new Array(n).fill('.'));\n\n  function isAttacked(row, col) {\n    for (let r = 0; r < row; r++) {\n      for (let c = 0; c < n; c++) {\n        if (board[r][c] === 'Q') {\n          if (c === col || r - c === row - col || r + c === row + col) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n\n  function place(row) {\n    if (row === n) {\n      result.push(board.map(r => r.join('')));\n      return;\n    }\n    for (let col = 0; col < n; col++) {\n      if (isAttacked(row, col)) continue;\n      board[row][col] = 'Q';\n      place(row + 1);\n      board[row][col] = '.';\n    }\n  }\n\n  place(0);\n  return result;\n}",
          python: "def solveNQueens(n: int) -> list[list[str]]:\n    result = []\n    board = [['.'] * n for _ in range(n)]\n\n    def is_attacked(row: int, col: int) -> bool:\n        for r in range(row):\n            for c in range(n):\n                if board[r][c] == 'Q':\n                    if c == col or (r - c) == (row - col) or (r + c) == (row + col):\n                        return True\n        return False\n\n    def place(row: int) -> None:\n        if row == n:\n            result.append([''.join(r) for r in board])\n            return\n        for col in range(n):\n            if is_attacked(row, col):\n                continue\n            board[row][col] = 'Q'\n            place(row + 1)\n            board[row][col] = '.'\n\n    place(0)\n    return result"
        },
        solutionCode: {
          javascript: "function solveNQueens(n) {\n  const result = [];\n  const board = Array.from({ length: n }, () => new Array(n).fill('.'));\n\n  function isAttacked(row, col) {\n    for (let r = 0; r < row; r++) {\n      for (let c = 0; c < n; c++) {\n        if (board[r][c] === 'Q') {\n          if (c === col || r - c === row - col || r + c === row + col) {\n            return true;\n          }\n        }\n      }\n    }\n    return false;\n  }\n\n  function place(row) {\n    if (row === n) {\n      result.push(board.map(r => r.join('')));\n      return;\n    }\n    for (let col = 0; col < n; col++) {\n      if (isAttacked(row, col)) continue;\n      board[row][col] = 'Q';\n      place(row + 1);\n      board[row][col] = '.';\n    }\n  }\n\n  place(0);\n  return result;\n}",
          python: "def solveNQueens(n: int) -> list[list[str]]:\n    result = []\n    board = [['.'] * n for _ in range(n)]\n\n    def is_attacked(row: int, col: int) -> bool:\n        for r in range(row):\n            for c in range(n):\n                if board[r][c] == 'Q':\n                    if c == col or (r - c) == (row - col) or (r + c) == (row + col):\n                        return True\n        return False\n\n    def place(row: int) -> None:\n        if row == n:\n            result.append([''.join(r) for r in board])\n            return\n        for col in range(n):\n            if is_attacked(row, col):\n                continue\n            board[row][col] = 'Q'\n            place(row + 1)\n            board[row][col] = '.'\n\n    place(0)\n    return result"
        },
        testCases: [
          {
            input: [4],
            expected: [
              ['.Q..', '...Q', 'Q...', '..Q.'],
              ['..Q.', 'Q...', '...Q', '.Q..']
            ],
            description: "2 distinct solutions for 4-Queens"
          },
          {
            input: [1],
            expected: [['Q']],
            description: "1x1 chessboard trivially has 1 queen"
          }
        ],
        steps: [
          // Step 1 / 37 (Screenshot 1)
          {
            codeLine: 1,
            narration: "N-Queens (N = 4): place 4 queens so none attack another, no two in the same column or on the same diagonal (rows are automatically distinct because we place exactly one queen per row). We go row by row: in each row try columns left to right, place a queen where it is safe, recurse to the next row, and BACKTRACK (lift the queen) whenever a row has no safe square.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: []
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["N", 4],
              ["rule", "no shared column / diagonal"]
            ]
          },
          // Step 2 / 37
          {
            codeLine: 2,
            narration: "solve(N = 4): initiate search by placing queen in row 0.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: []
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 0],
              ["board", "empty 4x4"]
            ]
          },
          // Step 3 / 37
          {
            codeLine: 8,
            narration: "Row 0, column 0: Safe (first queen). Place Q at (0, 0) and recurse to row 1.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }],
                activeCell: [0, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (0, 0)"],
              ["next row", 1]
            ]
          },
          // Step 4 / 37
          {
            codeLine: 7,
            narration: "Row 1, column 0: Unsafe, attacked by Q at (0, 0) along column 0. Reject (continue).",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['try', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }],
                tryCell: [1, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(1, 0)"],
              ["attacked by", "(0, 0) col"]
            ]
          },
          // Step 5 / 37
          {
            codeLine: 7,
            narration: "Row 1, column 1: Unsafe, attacked by Q at (0, 0) along main diagonal. Reject (continue).",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', 'try', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }],
                tryCell: [1, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(1, 1)"],
              ["attacked by", "(0, 0) diag"]
            ]
          },
          // Step 6 / 37
          {
            codeLine: 8,
            narration: "Row 1, column 2: Safe! Not attacked by any queen. Place Q at (1, 2) and recurse to row 2.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }],
                activeCell: [1, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (1, 2)"],
              ["next row", 2]
            ]
          },
          // Step 7 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 0: Attacked by Q at (0, 0) along column 0. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['try', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }],
                tryCell: [2, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 0)"],
              ["attacked by", "(0, 0)"]
            ]
          },
          // Step 8 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 1: Attacked diagonally by Q at (1, 2). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['.', 'try', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }],
                tryCell: [2, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 1)"],
              ["attacked by", "(1, 2)"]
            ]
          },
          // Step 9 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 2: Attacked by Q at (1, 2) in column 2 and (0, 0) diagonally. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['.', '.', 'try', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }],
                tryCell: [2, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 2)"],
              ["attacked by", "(1, 2) col, (0, 0) diag"]
            ]
          },
          // Step 10 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 3: Attacked diagonally by Q at (1, 2). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['.', '.', '.', 'try'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }],
                tryCell: [2, 3]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 3)"],
              ["attacked by", "(1, 2) diag"]
            ]
          },
          // Step 11 / 37
          {
            codeLine: 11,
            narration: "Row 2 has no safe columns. Return false to backtrack to row 1.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 2 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 2],
              ["result", "no safe column"]
            ]
          },
          // Step 12 / 37
          {
            codeLine: 10,
            narration: "Un-choose: lift Queen from (1, 2) and try the next column in row 1.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["un-choose", "lift Q from (1, 2)"],
              ["row", 1]
            ]
          },
          // Step 13 / 37
          {
            codeLine: 8,
            narration: "Row 1, column 3: Safe! Place Queen at (1, 3) and recurse to row 2.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }],
                activeCell: [1, 3]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (1, 3)"],
              ["next row", 2]
            ]
          },
          // Step 14 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 0: Attacked by Q at (0, 0) along column 0. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['try', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }],
                tryCell: [2, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 0)"],
              ["attacked by", "(0, 0)"]
            ]
          },
          // Step 15 / 37
          {
            codeLine: 8,
            narration: "Row 2, column 1: Safe! Not attacked by (0, 0) or (1, 3). Place Queen at (2, 1) and recurse to row 3.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }, { r: 2, c: 1 }],
                activeCell: [2, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (2, 1)"],
              ["next row", 3]
            ]
          },
          // Step 16 / 37
          {
            codeLine: 7,
            narration: "Row 3, column 0: Attacked by Q at (0, 0) in column 0 and Q at (2, 1) diagonally. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.'],
                  ['try', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }, { r: 2, c: 1 }],
                tryCell: [3, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(3, 0)"],
              ["attacked by", "(0, 0), (2, 1)"]
            ]
          },
          // Step 17 / 37
          {
            codeLine: 7,
            narration: "Row 3, column 1: Attacked by Q at (2, 1) in column 1. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.'],
                  ['.', 'try', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }, { r: 2, c: 1 }],
                tryCell: [3, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(3, 1)"],
              ["attacked by", "(2, 1)"]
            ]
          },
          // Step 18 / 37
          {
            codeLine: 7,
            narration: "Row 3, column 2: Attacked diagonally by Q at (2, 1) and Q at (1, 3). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.'],
                  ['.', '.', 'try', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }, { r: 2, c: 1 }],
                tryCell: [3, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(3, 2)"],
              ["attacked by", "(2, 1), (1, 3)"]
            ]
          },
          // Step 19 / 37 (Screenshot 2)
          {
            codeLine: 11,
            narration: "Every column in row 3 is either attacked or led to a dead end. Return false so the caller (row 2) lifts ITS queen and tries elsewhere. A whole sub-tree is pruned here.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }, { r: 2, c: 1 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 3],
              ["result", "no safe column"]
            ]
          },
          // Step 20 / 37
          {
            codeLine: 10,
            narration: "Backtrack to row 2: lift Q from (2, 1). Resume checking remaining columns in row 2.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["un-choose", "lift Q from (2, 1)"],
              ["row", 2]
            ]
          },
          // Step 21 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 2: Unsafe, attacked diagonally by Q at (0, 0) and Q at (1, 3). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', 'try', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }],
                tryCell: [2, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 2)"],
              ["attacked by", "(0, 0), (1, 3)"]
            ]
          },
          // Step 22 / 37
          {
            codeLine: 7,
            narration: "Row 2, column 3: Unsafe, attacked by Q at (1, 3) along column 3. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', '.', 'try'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }, { r: 1, c: 3 }],
                tryCell: [2, 3]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(2, 3)"],
              ["attacked by", "(1, 3) col"]
            ]
          },
          // Step 23 / 37
          {
            codeLine: 11,
            narration: "Row 2 exhausted. Return false to row 1, which lifts Q from (1, 3) and finds no more columns.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 0 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 2],
              ["result", "no safe column"]
            ]
          },
          // Step 24 / 37
          {
            codeLine: 10,
            narration: "Row 1 exhausted. Backtrack to row 0: lift Queen from (0, 0) and try column 1.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: []
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["un-choose", "lift Q from (0, 0)"],
              ["row", 0]
            ]
          },
          // Step 25 / 37
          {
            codeLine: 8,
            narration: "Row 0, column 1: Place Queen at (0, 1) and recurse to row 1.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }],
                activeCell: [0, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (0, 1)"],
              ["next row", 1]
            ]
          },
          // Step 26 / 37
          {
            codeLine: 7,
            narration: "Row 1, column 0: Unsafe, attacked diagonally by Q at (0, 1). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['try', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }],
                tryCell: [1, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(1, 0)"],
              ["attacked by", "(0, 1) diag"]
            ]
          },
          // Step 27 / 37
          {
            codeLine: 7,
            narration: "Row 1, column 1: Unsafe, attacked by Q at (0, 1) along column 1. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', 'try', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }],
                tryCell: [1, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(1, 1)"],
              ["attacked by", "(0, 1) col"]
            ]
          },
          // Step 28 / 37
          {
            codeLine: 7,
            narration: "Row 1, column 2: Unsafe, attacked diagonally by Q at (0, 1). Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', 'try', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }],
                tryCell: [1, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(1, 2)"],
              ["attacked by", "(0, 1) diag"]
            ]
          },
          // Step 29 / 37
          {
            codeLine: 8,
            narration: "Row 1, column 3: Safe! Not attacked by Q at (0, 1). Place Q at (1, 3) and recurse to row 2.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }],
                activeCell: [1, 3]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (1, 3)"],
              ["next row", 2]
            ]
          },
          // Step 30 / 37
          {
            codeLine: 8,
            narration: "Row 2, column 0: Safe! Not attacked by (0, 1) or (1, 3). Place Q at (2, 0) and recurse to row 3.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }],
                activeCell: [2, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (2, 0)"],
              ["next row", 3]
            ]
          },
          // Step 31 / 37
          {
            codeLine: 5,
            narration: "Row 3: Test columns 0 through 3 for a safe placement.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 3],
              ["testing", "col 0..3"]
            ]
          },
          // Step 32 / 37
          {
            codeLine: 6,
            narration: "Check if (3, 0) is attacked by any placed queen.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["check", "(3, 0)"],
              ["queens", "[(0,1),(1,3),(2,0)]"]
            ]
          },
          // Step 33 / 37 (Screenshot 3)
          {
            codeLine: 7,
            narration: "Try row 3, column 0. Unsafe: the queen at (2, 0) attacks it along column 0. Reject this square (red) and slide to the next column.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['try', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }],
                tryCell: [3, 0]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(3, 0)"],
              ["attacked by", "(2, 0)"]
            ]
          },
          // Step 34 / 37
          {
            codeLine: 7,
            narration: "Try row 3, column 1. Unsafe: Q at (0, 1) attacks along column 1, and Q at (2, 0) attacks diagonally. Reject.",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', 'try', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }],
                tryCell: [3, 1]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["try", "(3, 1)"],
              ["attacked by", "(0, 1), (2, 0)"]
            ]
          },
          // Step 35 / 37
          {
            codeLine: 8,
            narration: "Try row 3, column 2: Safe! No attacking queens on column 2 or diagonals. Place Queen at (3, 2).",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }, { r: 3, c: 2 }],
                activeCell: [3, 2]
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (3, 2)"],
              ["next row", 4]
            ]
          },
          // Step 36 / 37
          {
            codeLine: 4,
            narration: "Base case reached: row == 4 (all 4 queens successfully placed!). Record Solution 1: [.Q.., ...Q, Q..., ..Q.].",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }, { r: 3, c: 2 }]
              },
              results: [
                "[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\" ]"
              ],
              resultsTitle: "VALID BOARDS"
            },
            best: {
              label: "Solution 1 Found"
            },
            vars: [
              ["solution 1", "[1, 3, 0, 2]"],
              ["status", "valid placement"]
            ]
          },
          // Step 37 / 37
          {
            codeLine: 10,
            narration: "Backtrack and explore symmetric branch starting at (0, 2): Yields Solution 2 [..Q., Q..., ...Q, .Q..]. Total 2 distinct valid solutions found!",
            backtracking: {
              board: {
                title: "4 × 4 BOARD · PLACE 1 QUEEN PER ROW",
                grid: [
                  ['.', '.', 'Q', '.'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.']
                ],
                queens: [{ r: 0, c: 2 }, { r: 1, c: 0 }, { r: 2, c: 3 }, { r: 3, c: 1 }]
              },
              results: [
                "[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\" ]",
                "[ \"..Q.\", \"Q...\", \"...Q\", \".Q..\" ]"
              ],
              resultsTitle: "VALID BOARDS"
            },
            best: {
              label: "2 Valid 4-Queens Placements"
            },
            vars: [
              ["total solutions", 2],
              ["time", "O(N!)"],
              ["space", "O(N)"]
            ]
          }
        ]
      },
      {
        id: 'backtracking-sets',
        label: 'Backtracking with O(1) Attack Sets (Cols, Diagonals)',
        complexity: {
          time: 'O(N!)',
          space: 'O(N) sets & recursion depth'
        },
        pseudocode: [
          "solveNQueens(n):",
          "  cols = set(), diag1 = set() /* r - c */, diag2 = set() /* r + c */",
          "  result = []",
          "  backtrack(r, queens):",
          "    if r == n: result.append(format(queens)); return",
          "    for c from 0 to n - 1:",
          "      if c in cols or (r-c) in diag1 or (r+c) in diag2: continue",
          "      cols.add(c); diag1.add(r-c); diag2.add(r+c)",
          "      backtrack(r + 1, queens + [c])",
          "      cols.remove(c); diag1.remove(r-c); diag2.remove(r+c)",
          "  backtrack(0, [])",
          "  return result"
        ],
        starterCode: {
          javascript: "function solveNQueens(n) {\n  const result = [];\n  const cols = new Set(), diag1 = new Set(), diag2 = new Set();\n  const queens = [];\n  \n  function backtrack(r) {\n    if (r === n) {\n      const board = [];\n      for (let i = 0; i < n; i++) {\n        const row = new Array(n).fill('.');\n        row[queens[i]] = 'Q';\n        board.push(row.join(''));\n      }\n      result.push(board);\n      return;\n    }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;\n      cols.add(c); diag1.add(r - c); diag2.add(r + c);\n      queens.push(c);\n      backtrack(r + 1);\n      queens.pop();\n      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);\n    }\n  }\n  \n  backtrack(0);\n  return result;\n}",
          python: "def solveNQueens(n: int) -> list[list[str]]:\n    result = []\n    cols, diag1, diag2 = set(), set(), set()\n    queens = []\n    \n    def backtrack(r):\n        if r == n:\n            board = []\n            for c in queens:\n                row = ['.'] * n\n                row[c] = 'Q'\n                board.append(''.join(row))\n            result.append(board)\n            return\n        for c in range(n):\n            if c in cols or (r - c) in diag1 or (r + c) in diag2:\n                continue\n            cols.add(c); diag1.add(r - c); diag2.add(r + c)\n            queens.append(c)\n            backtrack(r + 1)\n            queens.pop()\n            cols.remove(c); diag1.remove(r - c); diag2.remove(r + c)\n            \n    backtrack(0)\n    return result"
        },
        solutionCode: {
          javascript: "function solveNQueens(n) {\n  const result = [];\n  const cols = new Set(), diag1 = new Set(), diag2 = new Set();\n  const queens = [];\n  \n  function backtrack(r) {\n    if (r === n) {\n      const board = [];\n      for (let i = 0; i < n; i++) {\n        const row = new Array(n).fill('.');\n        row[queens[i]] = 'Q';\n        board.push(row.join(''));\n      }\n      result.push(board);\n      return;\n    }\n    for (let c = 0; c < n; c++) {\n      if (cols.has(c) || diag1.has(r - c) || diag2.has(r + c)) continue;\n      cols.add(c); diag1.add(r - c); diag2.add(r + c);\n      queens.push(c);\n      backtrack(r + 1);\n      queens.pop();\n      cols.delete(c); diag1.delete(r - c); diag2.delete(r + c);\n    }\n  }\n  \n  backtrack(0);\n  return result;\n}",
          python: "def solveNQueens(n: int) -> list[list[str]]:\n    result = []\n    cols, diag1, diag2 = set(), set(), set()\n    queens = []\n    \n    def backtrack(r):\n        if r == n:\n            board = []\n            for c in queens:\n                row = ['.'] * n\n                row[c] = 'Q'\n                board.append(''.join(row))\n            result.append(board)\n            return\n        for c in range(n):\n            if c in cols or (r - c) in diag1 or (r + c) in diag2:\n                continue\n            cols.add(c); diag1.add(r - c); diag2.add(r + c)\n            queens.append(c)\n            backtrack(r + 1)\n            queens.pop()\n            cols.remove(c); diag1.remove(r - c); diag2.remove(r + c)\n            \n    backtrack(0)\n    return result"
        },
        testCases: [
          {
            input: [4],
            expected: [
              ['.Q..', '...Q', 'Q...', '..Q.'],
              ['..Q.', 'Q...', '...Q', '.Q..']
            ],
            description: "2 distinct solutions for 4-Queens"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "N-Queens for N=4: Place queens row by row. Each placed queen attacks its column c, diagonal (r-c), and anti-diagonal (r+c). Start at row 0.",
            backtracking: {
              board: {
                grid: [
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [],
                colSet: [],
                diagSet: [],
                antiDiagSet: [],
                title: "4 × 4 BOARD · O(1) SETS"
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row", 0],
              ["board size", "4x4"],
              ["queens needed", 4]
            ]
          },
          {
            codeLine: 8,
            narration: "Row 0: Try placing Queen at (0, 1). Safe! Add col=1, diag1=-1, diag2=1. Recurse to Row 1.",
            backtracking: {
              board: {
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }],
                activeCell: [0, 1],
                colSet: [1],
                diagSet: [-1],
                antiDiagSet: [1],
                attackedCells: [
                  { r: 1, c: 1 }, { r: 2, c: 1 }, { r: 3, c: 1 },
                  { r: 1, c: 2 }, { r: 2, c: 3 },
                  { r: 1, c: 0 }
                ],
                title: "QUEEN AT (0, 1)"
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["placed", "Q at (0, 1)"],
              ["cols", "[1]"],
              ["diag1 (r-c)", "[-1]"],
              ["diag2 (r+c)", "[1]"]
            ]
          },
          {
            codeLine: 8,
            narration: "Row 1: Columns 0, 1, 2 are under attack! Column 3 is safe. Place Queen at (1, 3). Recurse to Row 2.",
            backtracking: {
              board: {
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }],
                activeCell: [1, 3],
                colSet: [1, 3],
                diagSet: [-1, -2],
                antiDiagSet: [1, 4],
                attackedCells: [
                  { r: 2, c: 1 }, { r: 2, c: 3 }, { r: 2, c: 2 },
                  { r: 3, c: 1 }, { r: 3, c: 3 }
                ],
                title: "QUEEN AT (1, 3)"
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row 1", "Q at (1, 3)"],
              ["cols", "[1, 3]"],
              ["safe in row 2", "col 0"]
            ]
          },
          {
            codeLine: 8,
            narration: "Row 2: Column 0 is safe. Place Queen at (2, 0). Recurse to Row 3.",
            backtracking: {
              board: {
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }],
                activeCell: [2, 0],
                colSet: [1, 3, 0],
                diagSet: [-1, -2, 2],
                antiDiagSet: [1, 4, 2],
                attackedCells: [
                  { r: 3, c: 0 }, { r: 3, c: 1 }, { r: 3, c: 3 }
                ],
                title: "QUEEN AT (2, 0)"
              },
              results: [],
              resultsTitle: "VALID BOARDS"
            },
            vars: [
              ["row 2", "Q at (2, 0)"],
              ["safe in row 3", "col 2"]
            ]
          },
          {
            codeLine: 4,
            narration: "Row 3: Column 2 is safe! Place Queen at (3, 2). All 4 rows placed -> r == 4 (BASE CASE). Record Solution 1!",
            backtracking: {
              board: {
                grid: [
                  ['.', 'Q', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', 'Q', '.']
                ],
                queens: [{ r: 0, c: 1 }, { r: 1, c: 3 }, { r: 2, c: 0 }, { r: 3, c: 2 }],
                colSet: [1, 3, 0, 2],
                title: "SOLUTION 1: [.Q.., ...Q, Q..., ..Q.]"
              },
              results: [
                "[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\" ]"
              ],
              resultsTitle: "VALID BOARDS"
            },
            best: {
              label: "Solution 1 Found"
            },
            vars: [
              ["solution 1", "[1, 3, 0, 2]"],
              ["queens placed", 4]
            ]
          },
          {
            codeLine: 10,
            narration: "Backtrack and explore symmetric branch starting at (0, 2): Yields Solution 2 [2, 0, 3, 1]. All N-Queens solutions complete!",
            backtracking: {
              board: {
                grid: [
                  ['.', '.', 'Q', '.'],
                  ['Q', '.', '.', '.'],
                  ['.', '.', '.', 'Q'],
                  ['.', 'Q', '.', '.']
                ],
                queens: [{ r: 0, c: 2 }, { r: 1, c: 0 }, { r: 2, c: 3 }, { r: 3, c: 1 }],
                colSet: [2, 0, 3, 1],
                title: "SOLUTION 2: [..Q., Q..., ...Q, .Q..]"
              },
              results: [
                "[ \".Q..\", \"...Q\", \"Q...\", \"..Q.\" ]",
                "[ \"..Q.\", \"Q...\", \"...Q\", \".Q..\" ]"
              ],
              resultsTitle: "VALID BOARDS"
            },
            best: {
              label: "2 Valid 4-Queens Placements"
            },
            vars: [
              ["total solutions", 2],
              ["time", "O(N!)"],
              ["space", "O(N)"]
            ]
          }
        ]
      }
    ]
  }
];
