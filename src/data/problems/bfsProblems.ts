import { Problem } from '../../types';

export const bfsProblems: Problem[] = [
  // 1. Introduction (Concept)
  {
    id: 'intro',
    patternId: 'bfs',
    title: 'Introduction',
    subtitle: 'Level by level with a FIFO queue',
    kind: 'intro',
    companies: ['Google', 'Meta', 'Amazon', 'Microsoft', 'Bloomberg'],
    statement: `Breadth-First Search (BFS) is the fundamental algorithm for **level-order traversal** and finding the **shortest path in unweighted graphs or grids**.

Unlike DFS which dives deep down a single path and backtracks with a LIFO stack, BFS explores outwards in **concentric rings** (levels) using a **FIFO (First-In, First-Out) Queue**:
1. Enqueue the starting node.
2. While the queue is not empty, dequeue the front node $u$, process it, and enqueue all of $u$'s unvisited neighbors.
3. Every node at distance $d$ is guaranteed to be visited before any node at distance $d + 1$.`,
    visualType: 'tree',
    initialInput: [1, 2, 3, 4, 5, 6, 7],
    approaches: [
      {
        label: 'Level by level with a FIFO queue',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "bfs(root):",
          "  queue = [root]",
          "  while queue not empty:",
          "    node = queue.dequeue()  // front",
          "    if node is leaf: continue",
          "    enqueue node.children   // back",
          "// visits nodes level by level"
        ],
        starterCode: {
          javascript: `function bfs(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  while (queue.length) {\n    const node = queue.shift();\n    result.push(node.val);\n    if (node.left) queue.push(node.left);\n    if (node.right) queue.push(node.right);\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef bfs(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    while queue:\n        node = queue.popleft()\n        result.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return result`
        },
        solutionCode: {
          javascript: `function bfs(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  while (queue.length) {\n    const node = queue.shift();\n    result.push(node.val);\n    if (node.left) queue.push(node.left);\n    if (node.right) queue.push(node.right);\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef bfs(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    while queue:\n        node = queue.popleft()\n        result.append(node.val)\n        if node.left:\n            queue.append(node.left)\n        if node.right:\n            queue.append(node.right)\n    return result`
        },
        testCases: [
          {
            input: [[1, 2, 3, 4, 5, 6, 7]],
            expected: [1, 2, 3, 4, 5, 6, 7],
            description: "Complete binary tree level order traversal"
          }
        ],
        steps: [
          // Step 1 / 17
          {
            codeLine: 1,
            narration: "Breadth-First Search explores a tree LEVEL BY LEVEL: all depth-1 nodes, then all depth-2, and so on. The engine is a QUEUE (first-in, first-out): you take a node from the FRONT, and add its children to the BACK. Contrast DFS, which used a stack and plunged deep first.",
            tree: {
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["order", "level by level"]]
          },
          // Step 2 / 17
          {
            codeLine: 2,
            narration: "ENQUEUE root (1). The queue holds nodes whose children we haven't explored yet.",
            tree: {
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["queue", "[1]"], ["queue size", 1]]
          },
          // Step 3 / 17
          {
            codeLine: 3,
            narration: "Queue is not empty (length = 1). Begin first loop iteration.",
            tree: {
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["queue empty?", "false"], ["queue size", 1]]
          },
          // Step 4 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 1. Visit it (it's #1 in BFS order).",
            tree: {
              activeNode: 1,
              visitedNodes: [1],
              orderBadges: { 1: 1 }
            },
            queue: [],
            vars: [["dequeued", 1], ["visit #", 1]]
          },
          // Step 5 / 17
          {
            codeLine: 6,
            narration: "ENQUEUE children of node 1 (2, 3) to the BACK of the queue. Queue = [2, 3].",
            tree: {
              activeNode: 1,
              visitedNodes: [1],
              activeEdges: [[1, 2], [1, 3]],
              orderBadges: { 1: 1 }
            },
            queue: [2, 3],
            vars: [["enqueued", "2, 3"], ["queue", "[2, 3]"], ["queue size", 2]]
          },
          // Step 6 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 2. Visit it (it's #2 in BFS order). Front node is processed.",
            tree: {
              activeNode: 2,
              visitedNodes: [1, 2],
              orderBadges: { 1: 1, 2: 2 }
            },
            queue: [3],
            vars: [["dequeued", 2], ["visit #", 2]]
          },
          // Step 7 / 17
          {
            codeLine: 6,
            narration: "ENQUEUE children of node 2 (4, 5) to the BACK of the queue. Queue = [3, 4, 5].",
            tree: {
              activeNode: 2,
              visitedNodes: [1, 2],
              activeEdges: [[2, 4], [2, 5]],
              orderBadges: { 1: 1, 2: 2 }
            },
            queue: [3, 4, 5],
            vars: [["enqueued", "4, 5"], ["queue", "[3, 4, 5]"], ["queue size", 3]]
          },
          // Step 8 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 3. Visit it (it's #3 in BFS order). Level 1 is now fully processed!",
            tree: {
              activeNode: 3,
              visitedNodes: [1, 2, 3],
              orderBadges: { 1: 1, 2: 2, 3: 3 }
            },
            queue: [4, 5],
            vars: [["dequeued", 3], ["visit #", 3]]
          },
          // Step 9 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 4. Visit it (it's #4 in BFS order). The front always leaves first, that's what keeps us moving across a level before going deeper.",
            tree: {
              activeNode: 4,
              visitedNodes: [1, 2, 3, 4],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4 }
            },
            queue: [5, 6, 7],
            vars: [["dequeued", 4], ["visit #", 4]]
          },
          // Step 10 / 17
          {
            codeLine: 5,
            narration: "Check if node 4 is a leaf. Node 4 is a leaf, so continue to the next node in the queue.",
            tree: {
              activeNode: 4,
              visitedNodes: [1, 2, 3, 4],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4 }
            },
            queue: [5, 6, 7],
            vars: [["leaf", 4], ["queue size", 3]]
          },
          // Step 11 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 5. Visit it (it's #5 in BFS order).",
            tree: {
              activeNode: 5,
              visitedNodes: [1, 2, 3, 4, 5],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
            },
            queue: [6, 7],
            vars: [["dequeued", 5], ["visit #", 5]]
          },
          // Step 12 / 17
          {
            codeLine: 5,
            narration: "Node 5 is a leaf, no children to enqueue. Queue shrinks to [6, 7].",
            tree: {
              activeNode: 5,
              visitedNodes: [1, 2, 3, 4, 5],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
            },
            queue: [6, 7],
            vars: [["leaf", 5], ["queue size", 2]]
          },
          // Step 13 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 6. Visit it (it's #6 in BFS order).",
            tree: {
              activeNode: 6,
              visitedNodes: [1, 2, 3, 4, 5, 6],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }
            },
            queue: [7],
            vars: [["dequeued", 6], ["visit #", 6]]
          },
          // Step 14 / 17
          {
            codeLine: 5,
            narration: "Node 6 is a leaf, no children to enqueue. The queue just shrinks.",
            tree: {
              activeNode: 6,
              visitedNodes: [1, 2, 3, 4, 5, 6],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6 }
            },
            queue: [7],
            vars: [["leaf", 6], ["queue size", 1]]
          },
          // Step 15 / 17
          {
            codeLine: 4,
            narration: "DEQUEUE the front: node 7. Visit it (it's #7 in BFS order). Last node at Level 2.",
            tree: {
              activeNode: 7,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }
            },
            queue: [],
            vars: [["dequeued", 7], ["visit #", 7]]
          },
          // Step 16 / 17
          {
            codeLine: 5,
            narration: "Node 7 is a leaf, no children to enqueue. Queue is now completely empty.",
            tree: {
              activeNode: 7,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }
            },
            queue: [],
            vars: [["leaf", 7], ["queue size", 0]]
          },
          // Step 17 / 17
          {
            codeLine: 7,
            narration: "Queue is empty. BFS level-order traversal is complete: [1, 2, 3, 4, 5, 6, 7]! Visited level 0 (1), then level 1 (2, 3), then level 2 (4, 5, 6, 7).",
            tree: {
              activeNode: null,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7 }
            },
            queue: [],
            best: { label: "Level-Order BFS: [1, 2, 3, 4, 5, 6, 7]" },
            vars: [["order", "[1, 2, 3, 4, 5, 6, 7]"], ["status", "complete"]]
          }
        ]
      }
    ]
  },

  // 2. Overview (Concept)
  {
    id: 'overview',
    patternId: 'bfs',
    title: 'Overview',
    subtitle: 'Process one whole level per iteration',
    kind: 'concept',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Apple'],
    statement: `### 🔁 The Level-Batching BFS Template
To collect or aggregate data level by level (e.g. tree depth, rightmost views, zigzagging, multi-source contagion), use the **Level-Batching Loop**:

\`\`\`python
queue = deque([root])
while queue:
    levelSize = len(queue)   # freeze snapshot of current level count
    for _ in range(levelSize):
        node = queue.dequeue()
        enqueue node.children
    # whole level in hand, sum / right-view / zigzag / etc
\`\`\`

By recording \`levelSize = len(queue)\` at the start of each iteration, we process **exactly one entire generation of nodes** before moving to the next.`,
    visualType: 'tree',
    initialInput: [1, 2, 3, 4, 5, 6, 7],
    approaches: [
      {
        label: 'Process one whole level per iteration',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "bfs_by_level(root):",
          "  queue = [root]",
          "  while queue not empty:",
          "    levelSize = len(queue)  // freeze: one level",
          "    for _ in range(levelSize):",
          "      node = queue.dequeue()",
          "      enqueue node.children",
          "    // whole level in hand, sum / right-view / zigzag / etc",
          "    // advance to next level",
          "  // done"
        ],
        starterCode: {
          javascript: `function bfsByLevel(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef bfs_by_level(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    while queue:\n        level_size = len(queue)\n        current_level = []\n        for _ in range(level_size):\n            node = queue.popleft()\n            current_level.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(current_level)\n    return result`
        },
        solutionCode: {
          javascript: `function bfsByLevel(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    const currentLevel = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      currentLevel.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(currentLevel);\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef bfs_by_level(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    while queue:\n        level_size = len(queue)\n        current_level = []\n        for _ in range(level_size):\n            node = queue.popleft()\n            current_level.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(current_level)\n    return result`
        },
        testCases: [
          {
            input: [[1, 2, 3, 4, 5, 6, 7]],
            expected: [[1], [2, 3], [4, 5, 6, 7]],
            description: "3-level binary tree batching"
          }
        ],
        steps: [
          // Step 1 / 16
          {
            codeLine: 1,
            narration: "Plain BFS visits one node at a time. But almost every interesting tree question, level sums, the right-side view, zigzag order, the widest level, needs to know WHICH LEVEL each node sits on. The trick that unlocks all of them is to process the queue ONE WHOLE LEVEL per outer iteration.",
            tree: {
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["idea", "one level per loop"]]
          },
          // Step 2 / 16
          {
            codeLine: 2,
            narration: "Initialize queue with root node 1. Queue = [1].",
            tree: {
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["queue", "[1]"], ["queue size", 1]]
          },
          // Step 3 / 16
          {
            codeLine: 3,
            narration: "Queue is not empty. Begin outer loop for Level 0.",
            tree: {
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["level", 0], ["queue size", 1]]
          },
          // Step 4 / 16
          {
            codeLine: 4,
            narration: "Snapshot levelSize = len(queue) = 1. This freezes how many nodes belong to Level 0 before any of their children get added.",
            tree: {
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["level", 0], ["levelSize", 1]]
          },
          // Step 5 / 16
          {
            codeLine: 6,
            narration: "Inner loop 1/1: dequeue 1 and tag it Level 0 (L0). Enqueue its children 2 and 3.",
            tree: {
              activeNode: 1,
              visitedNodes: [1],
              activeEdges: [[1, 2], [1, 3]],
              orderBadges: { 1: "L0" }
            },
            queue: [2, 3],
            vars: [["level", 0], ["dequeued", 1], ["enqueued", "2, 3"]]
          },
          // Step 6 / 16
          {
            codeLine: 8,
            narration: "Level 0 is fully consumed as a UNIT: [1]. The queue now holds exactly Level 1 nodes: [2, 3].",
            tree: {
              activeNode: null,
              visitedNodes: [1],
              orderBadges: { 1: "L0" }
            },
            queue: [2, 3],
            vars: [["finished level", 0], ["next level size", 2]]
          },
          // Step 7 / 16
          {
            codeLine: 4,
            narration: "Outer loop Level 1: Snapshot levelSize = len(queue) = 2. We will process exactly 2 nodes (2 and 3) in this batch.",
            tree: {
              activeNode: null,
              visitedNodes: [1],
              orderBadges: { 1: "L0" }
            },
            queue: [2, 3],
            vars: [["level", 1], ["levelSize", 2]]
          },
          // Step 8 / 16
          {
            codeLine: 6,
            narration: "Inner step 1 of 2: dequeue 2 and tag it Level 1 (L1). Enqueue its children 4 and 5.",
            tree: {
              activeNode: 2,
              visitedNodes: [1, 2],
              activeEdges: [[2, 4], [2, 5]],
              orderBadges: { 1: "L0", 2: "L1" }
            },
            queue: [3, 4, 5],
            vars: [["level", 1], ["processed", "1/2"], ["dequeued", 2]]
          },
          // Step 9 / 16 (Matches Screenshot 2!)
          {
            codeLine: 8,
            narration: "Level 1 is fully consumed as a UNIT. Whatever the question asks, sum these, take the last one, reverse them, measure their span, you do it right here, with the whole level in hand. The queue now holds exactly the next level: [4, 5, 6, 7].",
            tree: {
              activeNode: null,
              visitedNodes: [1, 2, 3],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1" }
            },
            queue: [4, 5, 6, 7],
            vars: [["finished level", 1], ["next level size", 4]]
          },
          // Step 10 / 16
          {
            codeLine: 4,
            narration: "Outer loop Level 2: Snapshot levelSize = len(queue) = 4. Level 2 has 4 nodes: [4, 5, 6, 7].",
            tree: {
              activeNode: null,
              visitedNodes: [1, 2, 3],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1" }
            },
            queue: [4, 5, 6, 7],
            vars: [["level", 2], ["levelSize", 4]]
          },
          // Step 11 / 16
          {
            codeLine: 6,
            narration: "Inner step 1 of 4: dequeue 4 and tag it Level 2 (L2). Node 4 is a leaf, nothing to enqueue.",
            tree: {
              activeNode: 4,
              visitedNodes: [1, 2, 3, 4],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2" }
            },
            queue: [5, 6, 7],
            vars: [["level", 2], ["processed", "1/4"], ["dequeued", 4]]
          },
          // Step 12 / 16
          {
            codeLine: 6,
            narration: "Inner step 2 of 4: dequeue 5 and tag it Level 2 (L2). Node 5 is a leaf, nothing to enqueue.",
            tree: {
              activeNode: 5,
              visitedNodes: [1, 2, 3, 4, 5],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2", 5: "L2" }
            },
            queue: [6, 7],
            vars: [["level", 2], ["processed", "2/4"], ["dequeued", 5]]
          },
          // Step 13 / 16 (Matches Screenshot 3!)
          {
            codeLine: 5,
            narration: "Inner step 3 of 4: dequeue 6 and tag it level 2. It is a leaf, nothing to enqueue. We process exactly len(queue) nodes here, no more.",
            tree: {
              activeNode: 6,
              visitedNodes: [1, 2, 3, 4, 5, 6],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2", 5: "L2", 6: "L2" }
            },
            queue: [7],
            vars: [["level", 2], ["processed", "3/4"], ["dequeued", 6]]
          },
          // Step 14 / 16
          {
            codeLine: 6,
            narration: "Inner step 4 of 4: dequeue 7 and tag it Level 2 (L2). It is a leaf, nothing to enqueue. All 4 nodes of Level 2 are processed.",
            tree: {
              activeNode: 7,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2", 5: "L2", 6: "L2", 7: "L2" }
            },
            queue: [],
            vars: [["level", 2], ["processed", "4/4"], ["dequeued", 7]]
          },
          // Step 15 / 16
          {
            codeLine: 8,
            narration: "Level 2 is fully consumed as a UNIT: [4, 5, 6, 7]. Queue is now empty.",
            tree: {
              activeNode: null,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2", 5: "L2", 6: "L2", 7: "L2" }
            },
            queue: [],
            vars: [["finished level", 2], ["next level size", 0]]
          },
          // Step 16 / 16
          {
            codeLine: 10,
            narration: "Traversal complete! Level 0 = [1], Level 1 = [2, 3], Level 2 = [4, 5, 6, 7]. Each level was isolated and batch-processed.",
            tree: {
              activeNode: null,
              visitedNodes: [1, 2, 3, 4, 5, 6, 7],
              orderBadges: { 1: "L0", 2: "L1", 3: "L1", 4: "L2", 5: "L2", 6: "L2", 7: "L2" }
            },
            queue: [],
            best: { label: "Level-Batched BFS Complete: 3 Levels" },
            vars: [["total levels", 3], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 3. Level Order Sum (LeetCode #1161)
  {
    id: 'level-order-sum',
    patternId: 'bfs',
    title: 'Level Order Sum',
    subtitle: 'Sum each level with the level-batching loop',
    kind: 'problem',
    difficulty: 'Medium',
    leetcode: {
      id: 1161,
      slug: 'maximum-level-sum-of-a-binary-tree',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Bloomberg', 'Google', 'Microsoft'],
    statement: "Given the root of a binary tree where the root is level 1 and each level below increments by one, return the smallest level number whose nodes have the largest sum of values.",
    visualType: 'tree',
    initialInput: [3, 9, 20, 15, 7],
    approaches: [
      {
        label: 'BFS by level',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "levelSums(root):",
          "  queue = [root]",
          "  while queue not empty:",
          "    levelSize = len(queue)",
          "    sum = 0",
          "    for _ in range(levelSize):",
          "      node = queue.dequeue()",
          "      sum += node.val",
          "      enqueue node.children",
          "    levelSums.append(sum)",
          "return levelSums  // max() for heaviest level"
        ],
        starterCode: {
          javascript: `function levelSums(root) {\n  if (!root) return [];\n  const queue = [root];\n  const sums = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    let sum = 0;\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      sum += node.val;\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    sums.push(sum);\n  }\n  return sums;\n}`,
          python: `from collections import deque\n\ndef levelSums(root):\n    if not root:\n        return []\n    queue = deque([root])\n    level_sums = []\n    while queue:\n        level_size = len(queue)\n        level_sum = 0\n        for _ in range(level_size):\n            node = queue.popleft()\n            level_sum += node.val\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        level_sums.append(level_sum)\n    return level_sums`
        },
        solutionCode: {
          javascript: `function levelSums(root) {\n  if (!root) return [];\n  const queue = [root];\n  const sums = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    let sum = 0;\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      sum += node.val;\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    sums.push(sum);\n  }\n  return sums;\n}`,
          python: `from collections import deque\n\ndef levelSums(root):\n    if not root:\n        return []\n    queue = deque([root])\n    level_sums = []\n    while queue:\n        level_size = len(queue)\n        level_sum = 0\n        for _ in range(level_size):\n            node = queue.popleft()\n            level_sum += node.val\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        level_sums.append(level_sum)\n    return level_sums`
        },
        testCases: [
          {
            input: [[3, 9, 20, 15, 7]],
            expected: [3, 29, 22],
            description: "Level sums: L0: 3, L1: 9+20=29, L2: 15+7=22"
          }
        ],
        steps: [
          // Step 1 / 14
          {
            codeLine: 1,
            narration: "Given a binary tree, compute the sum of node values at each level. We use the Level-Batching BFS pattern to sum all nodes within each level boundary before advancing.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["goal", "sum each level"]]
          },
          // Step 2 / 14
          {
            codeLine: 2,
            narration: "Initialize queue with root node 3. Queue = [3].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["queue", "[3]"], ["len(queue)", 1]]
          },
          // Step 3 / 14
          {
            codeLine: 3,
            narration: "Outer loop Level 0: Queue is not empty. Begin Level 0 processing.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["level", 0], ["len(queue)", 1], ["sum", 0]]
          },
          // Step 4 / 14
          {
            codeLine: 4,
            narration: "Freeze levelSize = len(queue) = 1. Level 0 has 1 node to process.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["level", 0], ["levelSize", 1], ["sum", 0]]
          },
          // Step 5 / 14
          {
            codeLine: 8,
            narration: "Dequeue 3: add to sum (sum = 3). Enqueue children 9 and 20. Level 0 completed with sum = 3.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [3],
              activeEdges: [[3, 9], [3, 20]],
              orderBadges: { 3: "L0=3" }
            },
            queue: [9, 20],
            vars: [["level", 0], ["+", 3], ["sum", 3], ["levelSums", "[3]"]]
          },
          // Step 6 / 14 (Matches Screenshot 1!)
          {
            codeLine: 3,
            narration: "Outer loop: queue holds level 1 = [9, 20]. Freeze len(queue) = 2 and start this level's running sum at 0.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3],
              orderBadges: { 3: "L0=3" }
            },
            queue: [9, 20],
            vars: [["level", 1], ["len(queue)", 2], ["sum", 0]]
          },
          // Step 7 / 14
          {
            codeLine: 6,
            narration: "Inner step 1 of 2: dequeue node 9. It is a leaf (no children to enqueue). Add 9 to sum: sum = 9.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 9,
              visitedNodes: [3, 9],
              orderBadges: { 3: "L0=3", 9: "+9" }
            },
            queue: [20],
            vars: [["level", 1], ["+", 9], ["sum", 9]]
          },
          // Step 8 / 14
          {
            codeLine: 6,
            narration: "Inner step 2 of 2: dequeue node 20. Add 20 to sum (sum = 9 + 20 = 29). Enqueue its children 15 and 7.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 20,
              visitedNodes: [3, 9, 20],
              activeEdges: [[20, 15], [20, 7]],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29" }
            },
            queue: [15, 7],
            vars: [["level", 1], ["+", 20], ["sum", 29]]
          },
          // Step 9 / 14
          {
            codeLine: 10,
            narration: "Level 1 completed! Record sum = 29. levelSums = [3, 29]. Queue holds Level 2 = [15, 7].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29" }
            },
            queue: [15, 7],
            vars: [["finished level", 1], ["level sum", 29], ["levelSums", "[3, 29]"]]
          },
          // Step 10 / 14
          {
            codeLine: 4,
            narration: "Outer loop Level 2: Freeze levelSize = len(queue) = 2. Initialize level sum = 0.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29" }
            },
            queue: [15, 7],
            vars: [["level", 2], ["len(queue)", 2], ["sum", 0]]
          },
          // Step 11 / 14
          {
            codeLine: 6,
            narration: "Inner step 1 of 2: dequeue node 15 and add it: sum = 15. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 15,
              visitedNodes: [3, 9, 20, 15],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29", 15: "+15" }
            },
            queue: [7],
            vars: [["level", 2], ["+", 15], ["sum", 15]]
          },
          // Step 12 / 14 (Matches Screenshot 2!)
          {
            codeLine: 6,
            narration: "Dequeue 7 and add it: sum = 22. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 7,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29", 15: "+15", 7: "+7" }
            },
            queue: [],
            vars: [["level", 2], ["+", 7], ["sum", 22]]
          },
          // Step 13 / 14
          {
            codeLine: 10,
            narration: "Level 2 completed! Record sum = 22. levelSums = [3, 29, 22]. Queue is empty.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29", 15: "L2=22", 7: "L2=22" }
            },
            queue: [],
            vars: [["finished level", 2], ["level sum", 22], ["levelSums", "[3, 29, 22]"]]
          },
          // Step 14 / 14
          {
            codeLine: 11,
            narration: "Return levelSums = [3, 29, 22]. Level 1 has the maximum sum = 29 (1-indexed Level 2).",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: "L0=3", 9: "L1=29", 20: "L1=29", 15: "L2=22", 7: "L2=22" }
            },
            queue: [],
            best: { label: "Level Sums: [3, 29, 22] · Max Level: 1 (sum = 29)" },
            vars: [["levelSums", "[3, 29, 22]"], ["max sum", "29 at Level 1"], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 4. Rightmost Node (LeetCode #199 - Medium)
  {
    id: 'rightmost-node',
    patternId: 'bfs',
    title: 'Rightmost Node',
    subtitle: 'Right-side view = last node of each level',
    kind: 'problem',
    difficulty: 'Medium',
    leetcode: {
      id: 199,
      slug: 'binary-tree-right-side-view',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Meta', 'Microsoft', 'Google', 'Bloomberg'],
    statement: "Given the root of a binary tree, imagine standing on its right side and return the values of the nodes visible from top to bottom, that is the rightmost node of each level.",
    visualType: 'tree',
    initialInput: [1, 2, 3, null, 5, null, 4],
    approaches: [
      {
        label: 'BFS, take last of level',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "rightSideView(root):",
          "  queue = [root]",
          "  while queue not empty:",
          "    levelSize = len(queue)",
          "    for i in range(levelSize):",
          "      node = queue.dequeue()",
          "      if i == levelSize - 1: rightView.append(node.val)",
          "      enqueue node.children",
          "return rightView"
        ],
        starterCode: {
          javascript: `function rightSideView(root) {\n  if (!root) return [];\n  const queue = [root];\n  const rightView = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      if (i === levelSize - 1) rightView.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n  }\n  return rightView;\n}`,
          python: `from collections import deque\n\ndef rightSideView(root):\n    if not root:\n        return []\n    queue = deque([root])\n    right_view = []\n    while queue:\n        level_size = len(queue)\n        for i in range(level_size):\n            node = queue.popleft()\n            if i == level_size - 1:\n                right_view.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n    return right_view`
        },
        solutionCode: {
          javascript: `function rightSideView(root) {\n  if (!root) return [];\n  const queue = [root];\n  const rightView = [];\n  while (queue.length) {\n    const levelSize = queue.length;\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      if (i === levelSize - 1) rightView.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n  }\n  return rightView;\n}`,
          python: `from collections import deque\n\ndef rightSideView(root):\n    if not root:\n        return []\n    queue = deque([root])\n    right_view = []\n    while queue:\n        level_size = len(queue)\n        for i in range(level_size):\n            node = queue.popleft()\n            if i == level_size - 1:\n                right_view.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n    return right_view`
        },
        testCases: [
          {
            input: [[1, 2, 3, null, 5, null, 4]],
            expected: [1, 3, 4],
            description: "Right-side view of skewed tree"
          }
        ],
        steps: [
          // Step 1 / 11
          {
            codeLine: 1,
            narration: "Right-Side View: When viewing a binary tree from the right, exactly ONE node per level is visible: the rightmost (last) node processed in each level batch.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["approach", "collect last node of each level"], ["rightView", "[]"]]
          },
          // Step 2 / 11 (Matches Screenshot 2!)
          {
            codeLine: 2,
            narration: "Seed the queue with the root. Queue holds level 0 = [1].",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["queue", "[1]"], ["rightView", "[]"]]
          },
          // Step 3 / 11
          {
            codeLine: 3,
            narration: "Level 0 begins: queue not empty. Freeze levelSize = 1.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 1,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [1],
            vars: [["level", 0], ["levelSize", 1]]
          },
          // Step 4 / 11
          {
            codeLine: 6,
            narration: "Dequeue 1. Since i = 0 = levelSize - 1, node 1 is the rightmost node of Level 0! Add to rightView: [1]. Enqueue children 2 and 3.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 1,
              visitedNodes: [1],
              activeEdges: [[1, 2], [1, 3]],
              orderBadges: { 1: "👁 1" }
            },
            queue: [2, 3],
            vars: [["level", 0], ["rightmost", 1], ["rightView", "[1]"]]
          },
          // Step 5 / 11
          {
            codeLine: 4,
            narration: "Level 1 begins: snapshot levelSize = len(queue) = 2 (nodes [2, 3]).",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: null,
              visitedNodes: [1],
              orderBadges: { 1: "👁 1" }
            },
            queue: [2, 3],
            vars: [["level", 1], ["levelSize", 2], ["rightView", "[1]"]]
          },
          // Step 6 / 11
          {
            codeLine: 6,
            narration: "Inner step i = 0: dequeue 2. This is NOT the last node of level 1 (i = 0 != 1). Enqueue its child 5. Queue becomes [3, 5].",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 2,
              visitedNodes: [1, 2],
              activeEdges: [[2, 5]],
              orderBadges: { 1: "👁 1" }
            },
            queue: [3, 5],
            vars: [["level", 1], ["dequeued", 2], ["isLast?", "false (i=0)"]]
          },
          // Step 7 / 11 (Matches Screenshot 1!)
          {
            codeLine: 6,
            narration: "Dequeue 3, this is the LAST node of level 1 (i = 1 = levelSize - 1). It is the one visible from the right, so collect it: rightView = [1, 3]. Enqueue its children (4).",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 3,
              visitedNodes: [1, 2, 3],
              activeEdges: [[3, 4]],
              orderBadges: { 1: "👁 1", 3: "👁 3" }
            },
            queue: [5, 4],
            vars: [["level", 1], ["rightmost", 3], ["rightView", "[1, 3]"]]
          },
          // Step 8 / 11
          {
            codeLine: 4,
            narration: "Level 2 begins: snapshot levelSize = len(queue) = 2 (nodes [5, 4]). Both are at depth 2.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: null,
              visitedNodes: [1, 2, 3],
              orderBadges: { 1: "👁 1", 3: "👁 3" }
            },
            queue: [5, 4],
            vars: [["level", 2], ["levelSize", 2], ["rightView", "[1, 3]"]]
          },
          // Step 9 / 11
          {
            codeLine: 6,
            narration: "Inner step i = 0: dequeue 5. Node 5 is blocked from right view by node 4. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 5,
              visitedNodes: [1, 2, 3, 5],
              orderBadges: { 1: "👁 1", 3: "👁 3" }
            },
            queue: [4],
            vars: [["level", 2], ["dequeued", 5], ["isLast?", "false (i=0)"]]
          },
          // Step 10 / 11
          {
            codeLine: 6,
            narration: "Inner step i = 1: dequeue 4. This is the LAST node of level 2 (i = 1 = levelSize - 1). Add to rightView: [1, 3, 4]. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: 4,
              visitedNodes: [1, 2, 3, 5, 4],
              orderBadges: { 1: "👁 1", 3: "👁 3", 4: "👁 4" }
            },
            queue: [],
            vars: [["level", 2], ["rightmost", 4], ["rightView", "[1, 3, 4]"]]
          },
          // Step 11 / 11
          {
            codeLine: 9,
            narration: "Queue is empty. Return rightView = [1, 3, 4]. From the right perspective, we see root 1, node 3, and node 4.",
            tree: {
              nodes: [
                { id: 1, x: 170, y: 38, left: 2, right: 3 },
                { id: 2, x: 100, y: 110, left: null, right: 5 },
                { id: 3, x: 240, y: 110, left: null, right: 4 },
                { id: 5, x: 135, y: 182, left: null, right: null },
                { id: 4, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 1, to: 2 },
                { from: 1, to: 3 },
                { from: 2, to: 5 },
                { from: 3, to: 4 }
              ],
              activeNode: null,
              visitedNodes: [1, 2, 3, 5, 4],
              orderBadges: { 1: "👁 1", 3: "👁 3", 4: "👁 4" }
            },
            queue: [],
            best: { label: "Right-Side View: [1, 3, 4]" },
            vars: [["rightView", "[1, 3, 4]"], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 5. Zigzag Level Order (LeetCode #103 - Medium)
  {
    id: 'zigzag-level-order',
    patternId: 'bfs',
    title: 'Zigzag Level Order',
    subtitle: 'Alternate L→R, R→L each level',
    kind: 'problem',
    difficulty: 'Medium',
    leetcode: {
      id: 103,
      slug: 'binary-tree-zigzag-level-order-traversal',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'LinkedIn', 'Meta', 'Google'],
    statement: "Given the root of a binary tree, return its zigzag level-order traversal: collect node values level by level, alternating direction left-to-right then right-to-left on each successive level.",
    visualType: 'tree',
    initialInput: [3, 9, 20, 15, 7],
    approaches: [
      {
        label: 'BFS + direction flag',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "zigzag(root):",
          "  queue = [root]; leftToRight = true",
          "  while queue not empty:",
          "    levelSize = len(queue)",
          "    collected = []",
          "    for _ in range(levelSize):",
          "      node = queue.dequeue()",
          "      collected.append(node.val)",
          "      enqueue node.children",
          "    result.append(collected if leftToRight else reversed(collected))",
          "    leftToRight = not leftToRight",
          "return result"
        ],
        starterCode: {
          javascript: `function zigzag(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  let leftToRight = true;\n  while (queue.length) {\n    const levelSize = queue.length;\n    const collected = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      collected.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(leftToRight ? collected : collected.reverse());\n    leftToRight = !leftToRight;\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef zigzag(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    leftToRight = True\n    while queue:\n        level_size = len(queue)\n        collected = []\n        for _ in range(level_size):\n            node = queue.popleft()\n            collected.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(collected if leftToRight else collected[::-1])\n        leftToRight = not leftToRight\n    return result`
        },
        solutionCode: {
          javascript: `function zigzag(root) {\n  if (!root) return [];\n  const queue = [root];\n  const result = [];\n  let leftToRight = true;\n  while (queue.length) {\n    const levelSize = queue.length;\n    const collected = [];\n    for (let i = 0; i < levelSize; i++) {\n      const node = queue.shift();\n      collected.push(node.val);\n      if (node.left) queue.push(node.left);\n      if (node.right) queue.push(node.right);\n    }\n    result.push(leftToRight ? collected : collected.reverse());\n    leftToRight = !leftToRight;\n  }\n  return result;\n}`,
          python: `from collections import deque\n\ndef zigzag(root):\n    if not root:\n        return []\n    queue = deque([root])\n    result = []\n    leftToRight = True\n    while queue:\n        level_size = len(queue)\n        collected = []\n        for _ in range(level_size):\n            node = queue.popleft()\n            collected.append(node.val)\n            if node.left:\n                queue.append(node.left)\n            if node.right:\n                queue.append(node.right)\n        result.append(collected if leftToRight else collected[::-1])\n        leftToRight = not leftToRight\n    return result`
        },
        testCases: [
          {
            input: [[3, 9, 20, null, null, 15, 7]],
            expected: [[3], [20, 9], [15, 7]],
            description: "Zigzag: L->R [3], R->L [20, 9], L->R [15, 7]"
          }
        ],
        steps: [
          // Step 1 / 14
          {
            codeLine: 1,
            narration: "Zigzag traversal: collect nodes level by level using BFS, but alternate the direction of results on each level: Level 0 L→R, Level 1 R→L, Level 2 L→R.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["direction", "L → R (starts true)"], ["result", "[]"]]
          },
          // Step 2 / 14
          {
            codeLine: 2,
            narration: "Initialize queue with root node 3. Set leftToRight = true. Queue = [3].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["queue", "[3]"], ["leftToRight", "true"]]
          },
          // Step 3 / 14
          {
            codeLine: 3,
            narration: "Outer loop Level 0 (L→R): queue is not empty. Begin Level 0 batch.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["level", 0], ["leftToRight", "true"], ["len(queue)", 1]]
          },
          // Step 4 / 14
          {
            codeLine: 4,
            narration: "Freeze levelSize = 1. Initialize collected = [].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [3],
            vars: [["level", 0], ["levelSize", 1], ["collected", "[]"]]
          },
          // Step 5 / 14
          {
            codeLine: 7,
            narration: "Dequeue 3, collected = [3]. Enqueue its children: 9, 20. Level 0 collected in L→R order: [3].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 3,
              visitedNodes: [3],
              activeEdges: [[3, 9], [3, 20]],
              orderBadges: { 3: 0 }
            },
            queue: [9, 20],
            vars: [["level", 0], ["collected", "[3]"], ["enqueued", "9, 20"]]
          },
          // Step 6 / 14
          {
            codeLine: 10,
            narration: "Append [3] to result. Flip leftToRight = false (next level will be R→L). Queue holds [9, 20].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3],
              orderBadges: { 3: 0 }
            },
            queue: [9, 20],
            vars: [["result", "[[3]]"], ["leftToRight", "false (R→L next)"]]
          },
          // Step 7 / 14
          {
            codeLine: 4,
            narration: "Outer loop Level 1 (R→L): snapshot levelSize = 2. Initialize collected = [].",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3],
              orderBadges: { 3: 0 }
            },
            queue: [9, 20],
            vars: [["level", 1], ["levelSize", 2], ["leftToRight", "false"]]
          },
          // Step 8 / 14
          {
            codeLine: 7,
            narration: "Inner step 1 of 2: dequeue 9. collected = [9]. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 9,
              visitedNodes: [3, 9],
              orderBadges: { 3: 0, 9: 1 }
            },
            queue: [20],
            vars: [["level", 1], ["dequeued", 9], ["collected", "[9]"]]
          },
          // Step 9 / 14
          {
            codeLine: 7,
            narration: "Inner step 2 of 2: dequeue 20. collected = [9, 20]. Enqueue its children 15 and 7.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 20,
              visitedNodes: [3, 9, 20],
              activeEdges: [[20, 15], [20, 7]],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [15, 7],
            vars: [["level", 1], ["dequeued", 20], ["collected", "[9, 20]"], ["enqueued", "15, 7"]]
          },
          // Step 10 / 14
          {
            codeLine: 10,
            narration: "leftToRight is false, so REVERSE collected [9, 20] -> [20, 9]. Append to result. Flip leftToRight = true (L→R next).",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [15, 7],
            vars: [["reversed", "[20, 9]"], ["result", "[[3], [20, 9]]"], ["leftToRight", "true"]]
          },
          // Step 11 / 14
          {
            codeLine: 4,
            narration: "Outer loop Level 2 (L→R): snapshot levelSize = 2. Dequeue 15, collected = [15]. Leaf, nothing to enqueue.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 15,
              visitedNodes: [3, 9, 20, 15],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [7],
            vars: [["level", 2], ["levelSize", 2], ["collected", "[15]"]]
          },
          // Step 12 / 14 (Matches Screenshot!)
          {
            codeLine: 6,
            narration: "Dequeue 7 and collect it in natural order: collected = [15, 7]. Leaf.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: 7,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [],
            vars: [["level", 2], ["collected", "[15, 7]"]]
          },
          // Step 13 / 14
          {
            codeLine: 10,
            narration: "leftToRight is true, so keep collected in natural order [15, 7]. Append to result: [[3], [20, 9], [15, 7]]. Flip leftToRight = false.",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [],
            vars: [["level", 2], ["result", "[[3], [20, 9], [15, 7]]"]]
          },
          // Step 14 / 14
          {
            codeLine: 12,
            narration: "Queue is empty. Return result = [[3], [20, 9], [15, 7]]. Zigzag level order traversal is complete!",
            tree: {
              nodes: [
                { id: 3, x: 170, y: 38, left: 9, right: 20 },
                { id: 9, x: 100, y: 110, left: null, right: null },
                { id: 20, x: 240, y: 110, left: 15, right: 7 },
                { id: 15, x: 195, y: 182, left: null, right: null },
                { id: 7, x: 275, y: 182, left: null, right: null }
              ],
              edges: [
                { from: 3, to: 9 },
                { from: 3, to: 20 },
                { from: 20, to: 15 },
                { from: 20, to: 7 }
              ],
              activeNode: null,
              visitedNodes: [3, 9, 20, 15, 7],
              orderBadges: { 3: 0, 9: 1, 20: 0 }
            },
            queue: [],
            best: { label: "Zigzag Traversal: [[3], [20, 9], [15, 7]]" },
            vars: [["result", "[[3], [20, 9], [15, 7]]"], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 6. Maximum Width of Binary Tree (LeetCode #662 - Medium)
  {
    id: 'maximum-width-of-binary-tree',
    patternId: 'bfs',
    title: 'Maximum Width of Binary Tree',
    subtitle: 'Index nodes by position 2i, 2i+1',
    kind: 'problem',
    difficulty: 'Medium',
    leetcode: {
      id: 662,
      slug: 'maximum-width-of-binary-tree',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Microsoft', 'Google', 'Bloomberg', 'Meta'],
    statement: "Given the root of a binary tree, return the maximum width across all levels, where a level's width is the distance between its leftmost and rightmost non-null nodes counting the null positions between them as if the tree were a complete binary tree.",
    visualType: 'tree',
    initialInput: [1, 3, 2, 5, 3, null, 9],
    approaches: [
      {
        label: 'BFS with position indices',
        complexity: {
          time: 'O(n)',
          space: 'O(width)'
        },
        pseudocode: [
          "widthOfTree(root):",
          "  queue = [(root, 0)]",
          "  while queue not empty:",
          "    base = queue.front.index  // normalize",
          "    width = queue.back.index - base + 1",
          "    maxWidth = max(maxWidth, width)",
          "    for _ in range(len(queue)):",
          "      node, i = queue.dequeue()  // i already normalized",
          "      enqueue (node.left, 2*i), (node.right, 2*i+1)",
          "return maxWidth"
        ],
        starterCode: {
          javascript: `function widthOfBinaryTree(root) {\n  if (!root) return 0;\n  let maxWidth = 0;\n  let queue = [{ node: root, idx: 0n }];\n  while (queue.length) {\n    const size = queue.length;\n    const base = queue[0].idx;\n    const width = Number(queue[size - 1].idx - base + 1n);\n    if (width > maxWidth) maxWidth = width;\n    for (let i = 0; i < size; i++) {\n      const { node, idx } = queue.shift();\n      const normIdx = idx - base;\n      if (node.left) queue.push({ node: node.left, idx: 2n * normIdx });\n      if (node.right) queue.push({ node: node.right, idx: 2n * normIdx + 1n });\n    }\n  }\n  return maxWidth;\n}`,
          python: `from collections import deque\n\ndef widthOfBinaryTree(root):\n    if not root:\n        return 0\n    max_width = 0\n    queue = deque([(root, 0)])\n    while queue:\n        base = queue[0][1]\n        width = queue[-1][1] - base + 1\n        max_width = max(max_width, width)\n        for _ in range(len(queue)):\n            node, idx = queue.popleft()\n            norm_idx = idx - base\n            if node.left:\n                queue.append((node.left, 2 * norm_idx))\n            if node.right:\n                queue.append((node.right, 2 * norm_idx + 1))\n    return max_width`
        },
        solutionCode: {
          javascript: `function widthOfBinaryTree(root) {\n  if (!root) return 0;\n  let maxWidth = 0;\n  let queue = [{ node: root, idx: 0n }];\n  while (queue.length) {\n    const size = queue.length;\n    const base = queue[0].idx;\n    const width = Number(queue[size - 1].idx - base + 1n);\n    if (width > maxWidth) maxWidth = width;\n    for (let i = 0; i < size; i++) {\n      const { node, idx } = queue.shift();\n      const normIdx = idx - base;\n      if (node.left) queue.push({ node: node.left, idx: 2n * normIdx });\n      if (node.right) queue.push({ node: node.right, idx: 2n * normIdx + 1n });\n    }\n  }\n  return maxWidth;\n}`,
          python: `from collections import deque\n\ndef widthOfBinaryTree(root):\n    if not root:\n        return 0\n    max_width = 0\n    queue = deque([(root, 0)])\n    while queue:\n        base = queue[0][1]\n        width = queue[-1][1] - base + 1\n        max_width = max(max_width, width)\n        for _ in range(len(queue)):\n            node, idx = queue.popleft()\n            norm_idx = idx - base\n            if node.left:\n                queue.append((node.left, 2 * norm_idx))\n            if node.right:\n                queue.append((node.right, 2 * norm_idx + 1))\n    return max_width`
        },
        testCases: [
          {
            input: [[1, 3, 2, 5, 3, null, 9]],
            expected: 4,
            description: "Level 2 width: from pos 0 (node 5) to pos 3 (node 9) = 4"
          }
        ],
        steps: [
          // Step 1 / 15
          {
            codeLine: 1,
            narration: "Maximum Width of Binary Tree: Position index each node like a complete binary tree (left = 2*i, right = 2*i+1). Width of each level is (rightmost_index - leftmost_index + 1). Normalizing by subtracting the level base prevents integer overflow.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: null,
              visitedNodes: [],
              orderBadges: {}
            },
            queue: [],
            vars: [["approach", "index by 2*i, 2*i+1"], ["maxWidth", 0]]
          },
          // Step 2 / 15
          {
            codeLine: 2,
            narration: "Initialize queue with root node 1 at index 0: queue = [(1, 0)].",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 1,
              visitedNodes: [],
              orderBadges: { 1: "i=0" }
            },
            queue: [{ val: "1", sub: "i=0" }],
            vars: [["queue", "[(1, 0)]"], ["maxWidth", 0]]
          },
          // Step 3 / 15
          {
            codeLine: 4,
            narration: "Level 0: base index = 0. Width = 0 - 0 + 1 = 1. maxWidth = max(0, 1) = 1.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 1,
              visitedNodes: [],
              orderBadges: { 1: "i=0" }
            },
            queue: [{ val: "1", sub: "i=0" }],
            vars: [["level", 0], ["width", 1], ["maxWidth", 1]]
          },
          // Step 4 / 15
          {
            codeLine: 8,
            narration: "Dequeue (1, 0). Normalized index i = 0 - 0 = 0.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 1,
              visitedNodes: [1],
              orderBadges: { 1: "i=0" }
            },
            queue: [],
            vars: [["dequeued", 1], ["index", 0]]
          },
          // Step 5 / 15
          {
            codeLine: 9,
            narration: "Enqueue left child 3 at 2*i = 0, and right child 2 at 2*i+1 = 1. Queue = [(3, 0), (2, 1)].",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 1,
              visitedNodes: [1],
              activeEdges: [[1, 3], [1, 2]],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1" }
            },
            queue: [{ val: "3", sub: "i=0" }, { val: "2", sub: "i=1" }],
            vars: [["enqueued", "(3, 0), (2, 1)"], ["queue", "[(3, 0), (2, 1)]"]]
          },
          // Step 6 / 15
          {
            codeLine: 4,
            narration: "Level 1: base index = 0. Width = right - left + 1 = 1 - 0 + 1 = 2. maxWidth = max(1, 2) = 2.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: null,
              visitedNodes: [1],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1" }
            },
            queue: [{ val: "3", sub: "i=0" }, { val: "2", sub: "i=1" }],
            vars: [["level", 1], ["width", 2], ["maxWidth", 2]]
          },
          // Step 7 / 15
          {
            codeLine: 8,
            narration: "Inner step 1: dequeue (3, 0). Normalized index i = 0 - 0 = 0.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 3,
              visitedNodes: [1, 3],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1" }
            },
            queue: [{ val: "2", sub: "i=1" }],
            vars: [["level", 1], ["dequeued", 3], ["index", 0]]
          },
          // Step 8 / 15
          {
            codeLine: 9,
            narration: "Enqueue children of 3: left child 5 at 2*0 = 0, right child 3 at 2*0+1 = 1. Queue = [(2, 1), (5, 0), (3, 1)].",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 3,
              visitedNodes: [1, 3],
              activeEdges: [[3, 5], [3, 4]],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1" }
            },
            queue: [{ val: "2", sub: "i=1" }, { val: "5", sub: "i=0" }, { val: "3", sub: "i=1" }],
            vars: [["enqueued", "(5, 0), (3, 1)"]]
          },
          // Step 9 / 15
          {
            codeLine: 8,
            narration: "Inner step 2: dequeue (2, 1). Normalized index i = 1 - 0 = 1.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 2,
              visitedNodes: [1, 3, 2],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1" }
            },
            queue: [{ val: "5", sub: "i=0" }, { val: "3", sub: "i=1" }],
            vars: [["level", 1], ["dequeued", 2], ["index", 1]]
          },
          // Step 10 / 15
          {
            codeLine: 9,
            narration: "Node 2 has no left child. Enqueue right child 9 at 2*1+1 = 3. Queue = [(5, 0), (3, 1), (9, 3)].",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 2,
              visitedNodes: [1, 3, 2],
              activeEdges: [[2, 9]],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [{ val: "5", sub: "i=0" }, { val: "3", sub: "i=1" }, { val: "9", sub: "i=3" }],
            vars: [["enqueued", "(9, 3)"], ["queue", "[(5, 0), (3, 1), (9, 3)]"]]
          },
          // Step 11 / 15 (Matches Screenshot!)
          {
            codeLine: 4,
            narration: "Width of level 2 = right - left + 1 = 3 - 0 + 1 = 4 (the null gaps between are counted). New maximum so far: 4.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: null,
              visitedNodes: [1, 3, 2],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [{ val: "5", sub: "i=0" }, { val: "3", sub: "i=1" }, { val: "9", sub: "i=3" }],
            vars: [["level", 2], ["width", 4], ["maxWidth", 4]]
          },
          // Step 12 / 15
          {
            codeLine: 8,
            narration: "Inner step 1: dequeue (5, 0). Leaf, nothing to enqueue.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 5,
              visitedNodes: [1, 3, 2, 5],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [{ val: "3", sub: "i=1" }, { val: "9", sub: "i=3" }],
            vars: [["level", 2], ["dequeued", 5], ["index", 0]]
          },
          // Step 13 / 15
          {
            codeLine: 8,
            narration: "Inner step 2: dequeue (3, 1). Leaf, nothing to enqueue.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 4,
              visitedNodes: [1, 3, 2, 5, 4],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [{ val: "9", sub: "i=3" }],
            vars: [["level", 2], ["dequeued", 3], ["index", 1]]
          },
          // Step 14 / 15
          {
            codeLine: 8,
            narration: "Inner step 3: dequeue (9, 3). Leaf, nothing to enqueue. Level 2 complete.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: 9,
              visitedNodes: [1, 3, 2, 5, 4, 9],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [],
            vars: [["level", 2], ["dequeued", 9], ["index", 3]]
          },
          // Step 15 / 15
          {
            codeLine: 10,
            narration: "Queue is empty. Return maxWidth = 4. Level 2 achieved width 4 spanning from index 0 to index 3.",
            tree: {
              title: "BINARY TREE",
              nodes: [
                { id: 1, x: 170, y: 38, left: 3, right: 2 },
                { id: 3, x: 100, y: 110, left: 5, right: 4, label: "3" },
                { id: 2, x: 240, y: 110, left: null, right: 9, label: "2" },
                { id: 5, x: 60, y: 182, left: null, right: null, label: "5" },
                { id: 4, x: 135, y: 182, left: null, right: null, label: "3" },
                { id: 9, x: 275, y: 182, left: null, right: null, label: "9" }
              ],
              edges: [
                { from: 1, to: 3 },
                { from: 1, to: 2 },
                { from: 3, to: 5 },
                { from: 3, to: 4 },
                { from: 2, to: 9 }
              ],
              activeNode: null,
              visitedNodes: [1, 3, 2, 5, 4, 9],
              orderBadges: { 1: "i=0", 3: "i=0", 2: "i=1", 5: "i=0", 4: "i=1", 9: "i=3" }
            },
            queue: [],
            best: { label: "Maximum Binary Tree Width: 4 (at Level 2)" },
            vars: [["maxWidth", 4], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 7. Graphs Overview (Concept)
  {
    id: 'graphs-overview',
    patternId: 'bfs',
    title: 'Graphs Overview',
    subtitle: 'BFS finds the shortest path (fewest edges)',
    kind: 'concept',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Bloomberg'],
    statement: "On unweighted graphs, BFS expands in concentric rings, exploring all distance-1 nodes, then distance-2 nodes. The first time a node is reached is guaranteed to be its shortest distance (fewest edges).",
    visualType: 'graph',
    initialInput: {
      title: "UNDIRECTED GRAPH: BFS FROM A",
      nodes: [
        { id: 'A', x: 170, y: 35 },
        { id: 'B', x: 95, y: 105 },
        { id: 'C', x: 245, y: 105 },
        { id: 'D', x: 120, y: 195 },
        { id: 'E', x: 220, y: 195 },
        { id: 'F', x: 170, y: 270 }
      ],
      edges: [
        { from: 'A', to: 'B' },
        { from: 'A', to: 'C' },
        { from: 'B', to: 'D' },
        { from: 'C', to: 'D' },
        { from: 'C', to: 'E' },
        { from: 'D', to: 'F' },
        { from: 'E', to: 'F' }
      ]
    },
    approaches: [
      {
        label: 'BFS shortest paths',
        complexity: {
          time: 'O(V + E)',
          space: 'O(V)'
        },
        pseudocode: [
          "bfs(graph, source):",
          "  dist = {}",
          "  dist[source] = 0",
          "  queue = [source]",
          "  while queue not empty:",
          "    u = queue.dequeue()   // front",
          "    for v in adj[u]:",
          "      if v not in dist:",
          "        dist[v] = dist[u] + 1",
          "        queue.enqueue(v)  // back",
          "// dist[v] = fewest edges from source"
        ],
        starterCode: {
          javascript: `function bfsShortestPaths(adj, source) {\n  const dist = { [source]: 0 };\n  const queue = [source];\n  while (queue.length) {\n    const u = queue.shift();\n    for (const v of adj[u] || []) {\n      if (dist[v] === undefined) {\n        dist[v] = dist[u] + 1;\n        queue.push(v);\n      }\n    }\n  }\n  return dist;\n}`,
          python: `from collections import deque\n\ndef bfs_shortest_paths(adj, source):\n    dist = {source: 0}\n    queue = deque([source])\n    while queue:\n        u = queue.popleft()\n        for v in adj.get(u, []):\n            if v not in dist:\n                dist[v] = dist[u] + 1\n                queue.append(v)\n    return dist`
        },
        solutionCode: {
          javascript: `function bfsShortestPaths(adj, source) {\n  const dist = { [source]: 0 };\n  const queue = [source];\n  while (queue.length) {\n    const u = queue.shift();\n    for (const v of adj[u] || []) {\n      if (dist[v] === undefined) {\n        dist[v] = dist[u] + 1;\n        queue.push(v);\n      }\n    }\n  }\n  return dist;\n}`,
          python: `from collections import deque\n\ndef bfs_shortest_paths(adj, source):\n    dist = {source: 0}\n    queue = deque([source])\n    while queue:\n        u = queue.popleft()\n        for v in adj.get(u, []):\n            if v not in dist:\n                dist[v] = dist[u] + 1\n                queue.append(v)\n    return dist`
        },
        testCases: [
          {
            input: [
              {
                A: ['B', 'C'],
                B: ['A', 'D'],
                C: ['A', 'D', 'E'],
                D: ['B', 'C', 'F'],
                E: ['C', 'F'],
                F: ['D', 'E']
              },
              'A'
            ],
            expected: { A: 0, B: 1, C: 1, D: 2, E: 2, F: 3 },
            description: "Shortest paths from A on 6-node undirected graph"
          }
        ],
        steps: [
          // Step 1 / 31
          {
            codeLine: 1,
            narration: "BFS on an unweighted graph explores outward in CONCENTRIC RINGS: all distance-1 nodes, then distance-2, distance-3... A FIFO queue guarantees that when we first encounter any node, we reached it via the fewest possible edges (SHORTEST PATH).",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: null,
              visited: [],
              paramBadges: {}
            },
            queue: [],
            vars: [["goal", "shortest paths from A"], ["graph", "undirected"]]
          },
          // Step 2 / 31
          {
            codeLine: 2,
            narration: "Initialize an empty distance hash table dist = {}. This serves a dual purpose: storing shortest distances and acting as our 'visited' set.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: null,
              visited: [],
              paramBadges: {}
            },
            queue: [],
            vars: [["dist", "{}"]]
          },
          // Step 3 / 31
          {
            codeLine: 3,
            narration: "Set dist[A] = 0 (distance to self is 0). A is discovered on Ring 0.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: [],
              paramBadges: { A: "d=0" }
            },
            queue: [],
            vars: [["set", "dist[A] = 0"], ["ring", 0]]
          },
          // Step 4 / 31
          {
            codeLine: 4,
            narration: "ENQUEUE source node A: queue = [A]. All nodes waiting on Ring 0 are queued.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: [],
              paramBadges: { A: "d=0" }
            },
            queue: [{ val: "A", sub: "d=0" }],
            vars: [["enqueue", "A"], ["queue", "[A]"], ["queue size", 1]]
          },
          // Step 5 / 31
          {
            codeLine: 5,
            narration: "Queue is not empty (length = 1). Begin the BFS exploration loop.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: [],
              paramBadges: { A: "d=0" }
            },
            queue: [{ val: "A", sub: "d=0" }],
            vars: [["queue empty?", "false"], ["queue size", 1]]
          },
          // Step 6 / 31
          {
            codeLine: 6,
            narration: "DEQUEUE front: node A. u = A becomes our active exploration center. It turns green (visited/expanded).",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: ['A'],
              paramBadges: { A: "d=0" }
            },
            queue: [],
            vars: [["u", "A"], ["dist[A]", 0]]
          },
          // Step 7 / 31
          {
            codeLine: 7,
            narration: "Inspect A's first neighbour: v = B. Check if B is in dist.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: ['A'],
              activeEdges: [['A', 'B']],
              paramBadges: { A: "d=0" }
            },
            queue: [],
            vars: [["from", "A"], ["neighbour", "B"], ["known?", "no"]]
          },
          // Step 8 / 31
          {
            codeLine: 8,
            narration: "B is not in dist. Set dist[B] = dist[A] + 1 = 0 + 1 = 1, and ENQUEUE B at the BACK (it turns blue, discovered, awaiting its turn).",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: ['A'],
              activeEdges: [['A', 'B']],
              newlyDiscovered: 'B',
              paramBadges: { A: "d=0", B: "d=1" }
            },
            queue: [{ val: "B", sub: "d=1" }],
            vars: [["set", "dist[B] = 1"], ["enqueue", "B"], ["queue size", 1]]
          },
          // Step 9 / 31
          {
            codeLine: 7,
            narration: "Inspect A's second neighbour: v = C. Check if C is in dist.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: ['A'],
              activeEdges: [['A', 'C']],
              paramBadges: { A: "d=0", B: "d=1" }
            },
            queue: [{ val: "B", sub: "d=1" }],
            vars: [["from", "A"], ["neighbour", "C"], ["known?", "no"]]
          },
          // Step 10 / 31
          {
            codeLine: 8,
            narration: "C is not in dist. Set dist[C] = dist[A] + 1 = 1, and ENQUEUE C at the BACK. All Ring 1 nodes [B, C] are now enqueued.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'A',
              visited: ['A'],
              activeEdges: [['A', 'C']],
              newlyDiscovered: 'C',
              paramBadges: { A: "d=0", B: "d=1", C: "d=1" }
            },
            queue: [{ val: "B", sub: "d=1" }, { val: "C", sub: "d=1" }],
            vars: [["set", "dist[C] = 1"], ["enqueue", "C"], ["queue size", 2]]
          },
          // Step 11 / 31
          {
            codeLine: 6,
            narration: "Node A's neighbours are done. DEQUEUE front of queue: node B (dist = 1). B is now the active node u.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'B',
              visited: ['A', 'B'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1" }
            },
            queue: [{ val: "C", sub: "d=1" }],
            vars: [["u", "B"], ["dist[B]", 1], ["remaining queue", "[C]"]]
          },
          // Step 12 / 31
          {
            codeLine: 7,
            narration: "Inspect B's neighbour A. A already has a distance (dist[A] = 0), so we skip it.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'B',
              visited: ['A', 'B'],
              activeEdges: [['B', 'A']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1" }
            },
            queue: [{ val: "C", sub: "d=1" }],
            vars: [["from", "B"], ["neighbour", "A"], ["known?", "yes (d=0)"]]
          },
          // Step 13 / 31
          {
            codeLine: 8,
            narration: "Inspect B's neighbour D. D is not in dist. Set dist[D] = dist[B] + 1 = 2, and ENQUEUE D at the BACK.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'B',
              visited: ['A', 'B'],
              activeEdges: [['B', 'D']],
              newlyDiscovered: 'D',
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2" }
            },
            queue: [{ val: "C", sub: "d=1" }, { val: "D", sub: "d=2" }],
            vars: [["set", "dist[D] = 2"], ["enqueue", "D"], ["queue size", 2]]
          },
          // Step 14 / 31 (Matches Screenshot 1!)
          {
            codeLine: 7,
            narration: "Look at C's neighbour A. A already has a distance (dist[A] = 0), it was discovered on an equal or earlier ring, so we DON'T overwrite it. The first distance assigned is the shortest, and we never touch it again.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'C',
              visited: ['A', 'B'],
              activeEdges: [['A', 'C']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2" }
            },
            queue: [{ val: "D", sub: "d=2" }],
            vars: [["from", "C"], ["neighbour", "A"], ["known?", "yes (d=0)"]]
          },
          // Step 15 / 31
          {
            codeLine: 7,
            narration: "DEQUEUE front: node C was dequeued. Now check C's second neighbour: v = D.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'C',
              visited: ['A', 'B', 'C'],
              activeEdges: [['C', 'D']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2" }
            },
            queue: [{ val: "D", sub: "d=2" }],
            vars: [["from", "C"], ["neighbour", "D"], ["known?", "yes (d=2)"]]
          },
          // Step 16 / 31
          {
            codeLine: 8,
            narration: "D was ALREADY discovered via B on Ring 2 (dist[D] = 2). Path A→C→D also has length 2, but we never re-enqueue or modify an already-discovered node.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'C',
              visited: ['A', 'B', 'C'],
              activeEdges: [['C', 'D']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2" }
            },
            queue: [{ val: "D", sub: "d=2" }],
            vars: [["from", "C"], ["neighbour", "D"], ["status", "already in queue (dist=2)"]]
          },
          // Step 17 / 31
          {
            codeLine: 7,
            narration: "Inspect C's third neighbour: v = E. Check if E is in dist.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'C',
              visited: ['A', 'B', 'C'],
              activeEdges: [['C', 'E']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2" }
            },
            queue: [{ val: "D", sub: "d=2" }],
            vars: [["from", "C"], ["neighbour", "E"], ["known?", "no (unvisited)"]]
          },
          // Step 18 / 31
          {
            codeLine: 8,
            narration: "E is NOT in dist. Set dist[E] = dist[C] + 1 = 2, and ENQUEUE E at the BACK. Queue now holds Ring 2 nodes: [D, E].",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'C',
              visited: ['A', 'B', 'C'],
              activeEdges: [['C', 'E']],
              newlyDiscovered: 'E',
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2" }
            },
            queue: [{ val: "D", sub: "d=2" }, { val: "E", sub: "d=2" }],
            vars: [["set", "dist[E] = 2"], ["enqueue", "E"], ["queue size", 2]]
          },
          // Step 19 / 31
          {
            codeLine: 6,
            narration: "All Ring 1 nodes have finished expanding. DEQUEUE front of Ring 2: node D (dist = 2). D becomes active node u.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'D',
              visited: ['A', 'B', 'C', 'D'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2" }
            },
            queue: [{ val: "E", sub: "d=2" }],
            vars: [["u", "D"], ["dist[D]", 2], ["remaining queue", "[E]"]]
          },
          // Step 20 / 31
          {
            codeLine: 7,
            narration: "Inspect D's neighbour B. B is already in dist (dist[B] = 1). Skip.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'D',
              visited: ['A', 'B', 'C', 'D'],
              activeEdges: [['D', 'B']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2" }
            },
            queue: [{ val: "E", sub: "d=2" }],
            vars: [["from", "D"], ["neighbour", "B"], ["known?", "yes (d=1)"]]
          },
          // Step 21 / 31
          {
            codeLine: 7,
            narration: "Inspect D's neighbour C. C is already in dist (dist[C] = 1). Skip.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'D',
              visited: ['A', 'B', 'C', 'D'],
              activeEdges: [['D', 'C']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2" }
            },
            queue: [{ val: "E", sub: "d=2" }],
            vars: [["from", "D"], ["neighbour", "C"], ["known?", "yes (d=1)"]]
          },
          // Step 22 / 31 (Matches Screenshot 2!)
          {
            codeLine: 8,
            narration: "Set dist[F] = 3 and ENQUEUE F at the BACK (it turns blue, discovered, awaiting its turn). Because the queue is FIFO, every node already waiting (all on ring 2 or earlier) gets visited before F. That ordering is exactly what keeps BFS expanding ring by ring.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'D',
              visited: ['A', 'B', 'C', 'D'],
              activeEdges: [['D', 'F']],
              newlyDiscovered: 'F',
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [{ val: "E", sub: "d=2" }, { val: "F", sub: "d=3" }],
            vars: [["set", "dist[F]=3"], ["enqueue", "F"], ["queue size", 2]]
          },
          // Step 23 / 31
          {
            codeLine: 6,
            narration: "Node D is done. DEQUEUE front: node E (dist = 2). E is the last node on Ring 2.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'E',
              visited: ['A', 'B', 'C', 'D', 'E'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [{ val: "F", sub: "d=3" }],
            vars: [["u", "E"], ["dist[E]", 2], ["remaining queue", "[F]"]]
          },
          // Step 24 / 31
          {
            codeLine: 7,
            narration: "Inspect E's neighbour C. C is already in dist (dist[C] = 1). Skip.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'E',
              visited: ['A', 'B', 'C', 'D', 'E'],
              activeEdges: [['E', 'C']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [{ val: "F", sub: "d=3" }],
            vars: [["from", "E"], ["neighbour", "C"], ["known?", "yes (d=1)"]]
          },
          // Step 25 / 31
          {
            codeLine: 7,
            narration: "Inspect E's neighbour F. F is already in dist (dist[F] = 3 via D). Path A→C→E→F also has length 3, but F is already discovered.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'E',
              visited: ['A', 'B', 'C', 'D', 'E'],
              activeEdges: [['E', 'F']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [{ val: "F", sub: "d=3" }],
            vars: [["from", "E"], ["neighbour", "F"], ["known?", "yes (d=3)"]]
          },
          // Step 26 / 31
          {
            codeLine: 6,
            narration: "Node E is done. DEQUEUE front of Ring 3: node F (dist = 3). Queue is now empty.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'F',
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            vars: [["u", "F"], ["dist[F]", 3], ["queue size", 0]]
          },
          // Step 27 / 31
          {
            codeLine: 7,
            narration: "Inspect F's neighbour D. D is already in dist (dist[D] = 2). Skip.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'F',
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              activeEdges: [['F', 'D']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            vars: [["from", "F"], ["neighbour", "D"], ["known?", "yes (d=2)"]]
          },
          // Step 28 / 31
          {
            codeLine: 7,
            narration: "Inspect F's neighbour E. E is already in dist (dist[E] = 2). Skip.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: 'F',
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              activeEdges: [['F', 'E']],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            vars: [["from", "F"], ["neighbour", "E"], ["known?", "yes (d=2)"]]
          },
          // Step 29 / 31
          {
            codeLine: 5,
            narration: "Queue is empty. The BFS while-loop terminates.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: null,
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            vars: [["queue empty?", "true"], ["total visited", 6]]
          },
          // Step 30 / 31
          {
            codeLine: 11,
            narration: "All reachable nodes have their definitive shortest distances from A: dist = { A:0, B:1, C:1, D:2, E:2, F:3 }.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: null,
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            vars: [["distances", "{A:0, B:1, C:1, D:2, E:2, F:3}"]]
          },
          // Step 31 / 31
          {
            codeLine: 11,
            narration: "BFS guarantees shortest path in unweighted graphs in O(V + E) time and O(V) space: every node is enqueued at most once, and every edge is traversed at most twice.",
            graph: {
              title: "UNDIRECTED GRAPH: BFS FROM A",
              nodes: [
                { id: 'A', x: 170, y: 35 },
                { id: 'B', x: 95, y: 105 },
                { id: 'C', x: 245, y: 105 },
                { id: 'D', x: 120, y: 195 },
                { id: 'E', x: 220, y: 195 },
                { id: 'F', x: 170, y: 270 }
              ],
              edges: [
                { from: 'A', to: 'B' },
                { from: 'A', to: 'C' },
                { from: 'B', to: 'D' },
                { from: 'C', to: 'D' },
                { from: 'C', to: 'E' },
                { from: 'D', to: 'F' },
                { from: 'E', to: 'F' }
              ],
              activeNode: null,
              visited: ['A', 'B', 'C', 'D', 'E', 'F'],
              paramBadges: { A: "d=0", B: "d=1", C: "d=1", D: "d=2", E: "d=2", F: "d=3" }
            },
            queue: [],
            best: { label: "BFS Shortest Paths: { A:0, B:1, C:1, D:2, E:2, F:3 }" },
            vars: [["time", "O(V + E)"], ["space", "O(V)"], ["status", "done"]]
          }
        ]
      }
    ]
  },

  // 8. Minimum Knight Moves (LeetCode #1197 - Medium)
  {
  "id": "minimum-knight-moves",
  "patternId": "bfs",
  "title": "Minimum Knight Moves",
  "subtitle": "BFS = shortest path on the move-graph",
  "kind": "problem",
  "difficulty": "Medium",
  "leetcode": {
    "id": 1197,
    "slug": "minimum-knight-moves",
    "difficulty": "Medium"
  },
  "companies": [
    "Amazon",
    "Google",
    "Facebook",
    "Bloomberg"
  ],
  "statement": "On an infinite chessboard with a knight starting at the origin, return the minimum number of knight moves needed to reach a given target square.",
  "visualType": "matrix",
  "initialInput": [
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ],
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ],
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ],
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ],
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ],
    [
      "·",
      "·",
      "·",
      "·",
      "·",
      "·"
    ]
  ],
  "approaches": [
    {
      "label": "BFS over knight moves",
      "complexity": {
        "time": "O(V)",
        "space": "O(V)"
      },
      "pseudocode": [
        "queue = [start]; dist(start) = 0",
        "while queue not empty:",
        "  cell = queue.dequeue()",
        "  if cell == target: return dist(cell)",
        "  for each of the 8 knight moves:",
        "    if neighbour in bounds and unvisited:",
        "      dist = dist(cell) + 1; enqueue it",
        "return -1  // unreachable"
      ],
      "starterCode": {
        "javascript": "function minKnightMoves(targetX, targetY) {\n  const queue = [[0, 0, 0]];\n  const visited = new Set(['0,0']);\n  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];\n  while (queue.length) {\n    const [r, c, d] = queue.shift();\n    if (r === targetX && c === targetY) return d;\n    for (const [dr, dc] of moves) {\n      const nr = r + dr, nc = c + dc;\n      const key = `${nr},${nc}`;\n      if (!visited.has(key) && nr >= -1 && nc >= -1) {\n        visited.add(key);\n        queue.push([nr, nc, d + 1]);\n      }\n    }\n  }\n  return -1;\n}",
        "python": "from collections import deque\n\ndef minKnightMoves(targetX: int, targetY: int) -> int:\n    queue = deque([(0, 0, 0)])\n    visited = {(0, 0)}\n    moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]\n    while queue:\n        r, c, d = queue.popleft()\n        if r == targetX and c == targetY:\n            return d\n        for dr, dc in moves:\n            nr, nc = r + dr, c + dc\n            if (nr, nc) not in visited and nr >= -1 and nc >= -1:\n                visited.add((nr, nc))\n                queue.append((nr, nc, d + 1))\n    return -1"
      },
      "solutionCode": {
        "javascript": "function minKnightMoves(targetX, targetY) {\n  const queue = [[0, 0, 0]];\n  const visited = new Set(['0,0']);\n  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];\n  while (queue.length) {\n    const [r, c, d] = queue.shift();\n    if (r === targetX && c === targetY) return d;\n    for (const [dr, dc] of moves) {\n      const nr = r + dr, nc = c + dc;\n      const key = `${nr},${nc}`;\n      if (!visited.has(key) && nr >= -1 && nc >= -1) {\n        visited.add(key);\n        queue.push([nr, nc, d + 1]);\n      }\n    }\n  }\n  return -1;\n}",
        "python": "from collections import deque\n\ndef minKnightMoves(targetX: int, targetY: int) -> int:\n    queue = deque([(0, 0, 0)])\n    visited = {(0, 0)}\n    moves = [(-2, -1), (-2, 1), (-1, -2), (-1, 2), (1, -2), (1, 2), (2, -1), (2, 1)]\n    while queue:\n        r, c, d = queue.popleft()\n        if r == targetX and c == targetY:\n            return d\n        for dr, dc in moves:\n            nr, nc = r + dr, c + dc\n            if (nr, nc) not in visited and nr >= -1 and nc >= -1:\n                visited.add((nr, nc))\n                queue.append((nr, nc, d + 1))\n    return -1"
      },
      "testCases": [
        {
          "input": [
            4,
            4
          ],
          "expected": 4,
          "description": "Knight moves from (0,0) to (4,4) in 4 moves"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Minimum Knight Moves: a knight starts at (0,0) and we want the fewest L-shaped hops to reach (4,4). The key insight: treat each square as a graph node whose neighbours are the (up to) 8 squares one knight-move away. On an UNWEIGHTED graph, BFS finds shortest paths, so the BFS layer at which (4,4) first appears is exactly the minimum number of moves.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "active",
              "badge": ""
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [],
          "vars": [
            [
              "start",
              "(0,0)"
            ],
            [
              "target",
              "(4,4)"
            ]
          ]
        },
        {
          "codeLine": 1,
          "narration": "Initialize distance table: dist(0,0) = 0. Enqueue start square (0,0) into the FIFO queue with distance 0.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            }
          ],
          "vars": [
            [
              "queue",
              "[(0,0)]"
            ],
            [
              "dist(0,0)",
              0
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (0,0) from the queue (dist = 0). Not the target (4,4), so test its 8 knight moves.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            }
          ],
          "vars": [
            [
              "cell",
              "(0,0)"
            ],
            [
              "dist",
              0
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (0,0) the knight can hop to (1,2), a fresh square -> reachable in 1 move. Stamp 1 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "1"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            },
            {
              "val": "(1,2)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "from",
              "(0,0)"
            ],
            [
              "reach",
              "(1,2) = 1"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (0,0) the knight can hop to (2,1), a fresh square -> reachable in 1 move. Stamp 1 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "1",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "1"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "from",
              "(0,0)"
            ],
            [
              "reach",
              "(2,1) = 1"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (1,2) with distance 1. Inspect all 8 knight moves for unvisited squares.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "1",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "cell",
              "(1,2)"
            ],
            [
              "dist",
              1
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (1,2) the knight can hop to (0,4), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "1",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "reach",
              "(0,4) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (1,2) the knight can hop to (2,0), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "reach",
              "(2,0) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (1,2) the knight can hop to (2,4), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 4,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "reach",
              "(2,4) = 2"
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Continue scanning knight moves from (1,2): check downward jumps.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "checking",
              "moves"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (1,2) the knight can hop to (3,1), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it so its own jumps get explored next ring.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 3,
              "c": 1,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(1,2)",
              "sub": "1"
            },
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "reach",
              "(3,1) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (1,2) the knight can hop to (3,3), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 1,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 3,
              "c": 1,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 3,
              "c": 3,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(1,2)"
            ],
            [
              "reach",
              "(3,3) = 2"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (2,1) with distance 1. Inspect its 8 knight moves.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "settled",
              "badge": "1"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 0,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 2,
              "c": 4,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 3,
              "c": 1,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 3,
              "c": 3,
              "status": "settled",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "cell",
              "(2,1)"
            ],
            [
              "dist",
              1
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,1) the knight can hop to (0,2), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "·",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 0,
              "c": 2,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(2,1)"
            ],
            [
              "reach",
              "(0,2) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,1) the knight can hop to (1,3), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 1,
              "c": 3,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(2,1)"
            ],
            [
              "reach",
              "(1,3) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,1) the knight can hop to (4,0), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 0,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "1"
            },
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(2,1)"
            ],
            [
              "reach",
              "(4,0) = 2"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,1) the knight can hop to (4,2), a fresh square -> reachable in 2 moves. Stamp 2 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 2,
              "status": "active",
              "badge": "2"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "from",
              "(2,1)"
            ],
            [
              "reach",
              "(4,2) = 2"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (0,4) (layer 2). Begin exploring layer 3 reachable squares.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "cell",
              "(0,4)"
            ],
            [
              "dist",
              2
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (0,4) the knight can hop to (2,3), a fresh square -> reachable in 3 moves. Stamp 3 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "·"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,4)",
              "sub": "2"
            },
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(0,4)"
            ],
            [
              "reach",
              "(2,3) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (0,4) the knight can hop to (2,5), a fresh square -> reachable in 3 moves. Stamp 3 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "·",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 5,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(0,4)"
            ],
            [
              "reach",
              "(2,5) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,0) the knight can hop to (0,1), a fresh square -> reachable in 3 moves. Stamp 3 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "·",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 0,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 0,
              "c": 1,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,0)"
            ],
            [
              "reach",
              "(0,1) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,0) the knight can hop to (3,2), a fresh square -> reachable in 3 moves. Stamp 3 into it and enqueue it so its own jumps get explored next ring.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "·",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 0,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 3,
              "c": 2,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,0)",
              "sub": "2"
            },
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,0)"
            ],
            [
              "reach",
              "(3,2) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,0) the knight can hop to (4,1), a fresh square -> reachable in 3 moves. Stamp 3 into it and enqueue it.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "·",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 0,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 1,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,0)"
            ],
            [
              "reach",
              "(4,1) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (2,4). From (2,4) the knight can hop to (0,3) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "·"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 0,
              "c": 3,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,4)"
            ],
            [
              "reach",
              "(0,3) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,4) the knight can hop to (0,5) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "·",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 0,
              "c": 5,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,4)"
            ],
            [
              "reach",
              "(0,5) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,4) the knight can hop to (4,3) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "·"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 3,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,4)",
              "sub": "2"
            },
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,4)"
            ],
            [
              "reach",
              "(4,3) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,4) the knight can hop to (4,5) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 4,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 5,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(2,4)"
            ],
            [
              "reach",
              "(4,5) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (3,1). From (3,1) the knight hops to (1,0) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 1,
              "c": 0,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(3,1)"
            ],
            [
              "reach",
              "(1,0) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (3,1) the knight hops to (5,0) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "·",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 0,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(3,1)",
              "sub": "2"
            },
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(3,1)"
            ],
            [
              "reach",
              "(5,0) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (3,1) the knight hops to (5,2) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 2,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(3,1)"
            ],
            [
              "reach",
              "(5,2) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (3,3). From (3,3) the knight hops to (1,4) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 1,
              "c": 4,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(3,3)",
              "sub": "2"
            },
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            },
            {
              "val": "(1,4)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(3,3)"
            ],
            [
              "reach",
              "(1,4) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (3,3) the knight hops to (5,4) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "·",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 4,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(0,2)",
              "sub": "2"
            },
            {
              "val": "(1,3)",
              "sub": "2"
            },
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            },
            {
              "val": "(1,4)",
              "sub": "3"
            },
            {
              "val": "(5,4)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(3,3)"
            ],
            [
              "reach",
              "(5,4) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (1,3). From (1,3) the knight hops to (3,4) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "·",
                "2",
                "3",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 1,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 3,
              "c": 4,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(4,0)",
              "sub": "2"
            },
            {
              "val": "(4,2)",
              "sub": "2"
            },
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            },
            {
              "val": "(1,4)",
              "sub": "3"
            },
            {
              "val": "(5,4)",
              "sub": "3"
            },
            {
              "val": "(3,4)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(1,3)"
            ],
            [
              "reach",
              "(3,4) = 3"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (4,2). From (4,2) the knight hops to (3,0) -> reachable in 3 moves. Stamp 3 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 4,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 3,
              "c": 0,
              "status": "active",
              "badge": "3"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            },
            {
              "val": "(1,4)",
              "sub": "3"
            },
            {
              "val": "(5,4)",
              "sub": "3"
            },
            {
              "val": "(3,4)",
              "sub": "3"
            },
            {
              "val": "(3,0)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "from",
              "(4,2)"
            ],
            [
              "reach",
              "(3,0) = 3"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (2,3) (layer 3). Now expanding moves into layer 4.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "·",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(0,3)",
              "sub": "3"
            },
            {
              "val": "(0,5)",
              "sub": "3"
            },
            {
              "val": "(4,3)",
              "sub": "3"
            },
            {
              "val": "(4,5)",
              "sub": "3"
            },
            {
              "val": "(1,0)",
              "sub": "3"
            },
            {
              "val": "(5,0)",
              "sub": "3"
            },
            {
              "val": "(5,2)",
              "sub": "3"
            },
            {
              "val": "(1,4)",
              "sub": "3"
            },
            {
              "val": "(5,4)",
              "sub": "3"
            },
            {
              "val": "(3,4)",
              "sub": "3"
            },
            {
              "val": "(3,0)",
              "sub": "3"
            }
          ],
          "vars": [
            [
              "cell",
              "(2,3)"
            ],
            [
              "dist",
              3
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,3) the knight hops to (1,1) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 1,
              "c": 1,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(2,3)"
            ],
            [
              "reach",
              "(1,1) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,3) the knight hops to (1,5) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "·"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 1,
              "c": 5,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(2,3)"
            ],
            [
              "reach",
              "(1,5) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,3) the knight hops to (3,5) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "·",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 3,
              "c": 5,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": ""
            }
          ],
          "queue": [
            {
              "val": "(2,3)",
              "sub": "3"
            },
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(2,3)"
            ],
            [
              "reach",
              "(3,5) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (2,3) the knight hops to target square (4,4) -> reachable in 4 moves! Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "·",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 2,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(2,5)",
              "sub": "3"
            },
            {
              "val": "(0,1)",
              "sub": "3"
            },
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(2,3)"
            ],
            [
              "reach",
              "(4,4) = 4 [TARGET]"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (0,1). From (0,1) the knight hops to (2,2) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "·",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 2,
              "c": 2,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(0,1)"
            ],
            [
              "reach",
              "(2,2) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (3,2). From (3,2) the knight hops to (5,1) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "·",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 1,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(3,2)",
              "sub": "3"
            },
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(3,2)"
            ],
            [
              "reach",
              "(5,1) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "From (3,2) the knight hops to (5,3) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 2,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 3,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(4,1)",
              "sub": "3"
            },
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            },
            {
              "val": "(5,3)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(3,2)"
            ],
            [
              "reach",
              "(5,3) = 4"
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "Dequeue (4,3). From (4,3) the knight hops to (5,5) -> reachable in 4 moves. Stamp 4 and enqueue.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "4"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 4,
              "c": 3,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 5,
              "c": 5,
              "status": "active",
              "badge": "4"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "4"
            },
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            },
            {
              "val": "(5,3)",
              "sub": "4"
            },
            {
              "val": "(5,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "from",
              "(4,3)"
            ],
            [
              "reach",
              "(5,5) = 4"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (1,1) (layer 4). All its reachable neighbours are already visited.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "4"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 1,
              "c": 1,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(1,5)",
              "sub": "4"
            },
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            },
            {
              "val": "(5,3)",
              "sub": "4"
            },
            {
              "val": "(5,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "cell",
              "(1,1)"
            ],
            [
              "dist",
              4
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (1,5) (layer 4). All its reachable neighbours are already visited.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "4"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 1,
              "c": 5,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(3,5)",
              "sub": "4"
            },
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            },
            {
              "val": "(5,3)",
              "sub": "4"
            },
            {
              "val": "(5,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "cell",
              "(1,5)"
            ],
            [
              "dist",
              4
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Dequeue (3,5) (layer 4). Next in queue is target (4,4)!",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "4"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 3,
              "c": 5,
              "status": "active",
              "badge": "knight"
            },
            {
              "r": 4,
              "c": 4,
              "status": "target",
              "badge": "4"
            }
          ],
          "queue": [
            {
              "val": "(4,4)",
              "sub": "4"
            },
            {
              "val": "(2,2)",
              "sub": "4"
            },
            {
              "val": "(5,1)",
              "sub": "4"
            },
            {
              "val": "(5,3)",
              "sub": "4"
            },
            {
              "val": "(5,5)",
              "sub": "4"
            }
          ],
          "vars": [
            [
              "cell",
              "(3,5)"
            ],
            [
              "dist",
              4
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Target (4,4) dequeued with distance 4 -> that is the minimum number of knight moves. BFS layered the board outward, and (4,4) first surfaced on layer 4, so no shorter route exists. Expected 4: verified ✓. On a bounded V-cell board each cell is enqueued once with 8 edges -> O(V) time and space.",
          "matrix": {
            "title": "6 × 6 BOARD · KNIGHT FROM (0,0) TO (4,4)",
            "grid": [
              [
                "0",
                "3",
                "2",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "4",
                "1",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "1",
                "4",
                "3",
                "2",
                "3"
              ],
              [
                "3",
                "2",
                "3",
                "2",
                "3",
                "4"
              ],
              [
                "2",
                "3",
                "2",
                "3",
                "4",
                "3"
              ],
              [
                "3",
                "4",
                "3",
                "4",
                "3",
                "4"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 4,
              "c": 4,
              "status": "active",
              "badge": "target"
            }
          ],
          "queue": [],
          "best": {
            "label": "Minimum Knight Moves = 4 (Shortest BFS Layer)"
          },
          "vars": [
            [
              "min moves",
              4
            ],
            [
              "verified",
              "true"
            ],
            [
              "time",
              "O(V)"
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

  // 9. Rotting Oranges (LeetCode #994 - Medium)
  {
  "id": "rotting-oranges",
  "patternId": "bfs",
  "title": "Rotting Oranges",
  "subtitle": "Multi-source BFS · rot spreads one ring per minute",
  "kind": "problem",
  "difficulty": "Medium",
  "leetcode": {
    "id": 994,
    "slug": "rotting-oranges",
    "difficulty": "Medium"
  },
  "companies": [
    "Amazon",
    "Google",
    "Microsoft"
  ],
  "statement": "Given a grid whose cells are empty, hold a fresh orange, or hold a rotten orange, each minute every fresh orange adjacent to a rotten one becomes rotten; return the minimum number of minutes until no fresh orange remains, or -1 if some fresh orange can never rot.",
  "visualType": "matrix",
  "initialInput": [
    [
      2,
      1,
      1
    ],
    [
      1,
      1,
      0
    ],
    [
      0,
      1,
      1
    ]
  ],
  "approaches": [
    {
      "label": "Multi-source BFS by minute",
      "complexity": {
        "time": "O(R·C)",
        "space": "O(R·C)"
      },
      "pseudocode": [
        "queue = all rotten cells  // multi-source seed",
        "fresh = count of 1s",
        "minute = 0",
        "while queue not empty and fresh > 0:",
        "  minute++",
        "  for each cell in this minute's batch:",
        "    for each fresh neighbour:",
        "      rot it, fresh--, enqueue it",
        "  queue = newly rotted",
        "return fresh == 0 ? minute : -1"
      ],
      "starterCode": {
        "javascript": "function orangesRotting(grid) {\n  const R = grid.length, C = grid[0].length;\n  const queue = [];\n  let fresh = 0;\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 2) queue.push([r, c]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let minute = 0;\n  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n  while (queue.length && fresh > 0) {\n    const size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const [r, c] = queue.shift();\n      for (const [dr, dc] of dirs) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          fresh--;\n          queue.push([nr, nc]);\n        }\n      }\n    }\n    minute++;\n  }\n  return fresh === 0 ? minute : -1;\n}",
        "python": "from collections import deque\n\ndef orangesRotting(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    queue = deque()\n    fresh = 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2:\n                queue.append((r, c))\n            elif grid[r][c] == 1:\n                fresh += 1\n    if fresh == 0:\n        return 0\n    minute = 0\n    dirs = [(0, 1), (1, 0), (0, -1), [-1, 0]]\n    while queue and fresh > 0:\n        size = len(queue)\n        for _ in range(size):\n            r, c = queue.popleft()\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    queue.append((nr, nc))\n        minute += 1\n    return minute if fresh == 0 else -1"
      },
      "solutionCode": {
        "javascript": "function orangesRotting(grid) {\n  const R = grid.length, C = grid[0].length;\n  const queue = [];\n  let fresh = 0;\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (grid[r][c] === 2) queue.push([r, c]);\n      else if (grid[r][c] === 1) fresh++;\n    }\n  }\n  if (fresh === 0) return 0;\n  let minute = 0;\n  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n  while (queue.length && fresh > 0) {\n    const size = queue.length;\n    for (let i = 0; i < size; i++) {\n      const [r, c] = queue.shift();\n      for (const [dr, dc] of dirs) {\n        const nr = r + dr, nc = c + dc;\n        if (nr >= 0 && nr < R && nc >= 0 && nc < C && grid[nr][nc] === 1) {\n          grid[nr][nc] = 2;\n          fresh--;\n          queue.push([nr, nc]);\n        }\n      }\n    }\n    minute++;\n  }\n  return fresh === 0 ? minute : -1;\n}",
        "python": "from collections import deque\n\ndef orangesRotting(grid: list[list[int]]) -> int:\n    R, C = len(grid), len(grid[0])\n    queue = deque()\n    fresh = 0\n    for r in range(R):\n        for c in range(C):\n            if grid[r][c] == 2:\n                queue.append((r, c))\n            elif grid[r][c] == 1:\n                fresh += 1\n    if fresh == 0:\n        return 0\n    minute = 0\n    dirs = [(0, 1), (1, 0), (0, -1), [-1, 0]]\n    while queue and fresh > 0:\n        size = len(queue)\n        for _ in range(size):\n            r, c = queue.popleft()\n            for dr, dc in dirs:\n                nr, nc = r + dr, c + dc\n                if 0 <= nr < R and 0 <= nc < C and grid[nr][nc] == 1:\n                    grid[nr][nc] = 2\n                    fresh -= 1\n                    queue.append((nr, nc))\n        minute += 1\n    return minute if fresh == 0 else -1"
      },
      "testCases": [
        {
          "input": [
            [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          ],
          "expected": 4,
          "description": "All oranges rot in 4 minutes"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Rotting Oranges: every minute, each rotten orange (2) rots its four fresh neighbours (1). We want the minute when the LAST fresh orange rots. The rot spreads outward in rings, exactly one cell-step per minute, which is precisely what BFS levels measure. So this is a shortest-time-to-infect problem.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [],
          "queue": [],
          "vars": [
            [
              "fresh",
              6
            ]
          ]
        },
        {
          "codeLine": 1,
          "narration": "Scan the 3×3 grid for initial rotten oranges. Cell (0,0) holds a rotten orange (value 2) — enqueue it as the multi-source starting seed.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)"
            }
          ],
          "vars": [
            [
              "queue",
              "[(0,0)]"
            ],
            [
              "fresh",
              6
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Count fresh oranges (value 1): exactly 6 fresh oranges. We track fresh count so we know when all have rotted without rescanning the entire grid.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)"
            }
          ],
          "vars": [
            [
              "fresh",
              6
            ],
            [
              "minute",
              0
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Initialize timer: minute = 0. Queue has 1 initial rotten seed, and fresh count = 6 > 0. Enter multi-source BFS loop.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)"
            }
          ],
          "vars": [
            [
              "minute",
              0
            ],
            [
              "fresh",
              6
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Minute 1 begins: expand this minute's batch from frontier cell (0,0) to adjacent 4-directional fresh neighbours.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                1,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)"
            }
          ],
          "vars": [
            [
              "minute",
              1
            ],
            [
              "batch size",
              1
            ],
            [
              "fresh",
              6
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "From (0,0), neighbour (0,1) is fresh: rot it! Value becomes 2, fresh count drops to 5, and (0,1) is enqueued.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                2,
                1
              ],
              [
                1,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "gold"
            }
          ],
          "queue": [
            {
              "val": "(0,1)"
            }
          ],
          "vars": [
            [
              "rotted",
              "(0,1)"
            ],
            [
              "fresh",
              5
            ],
            [
              "minute",
              1
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "From (0,0), neighbour (1,0) is fresh: rot it! Value becomes 2, fresh count drops to 4, and (1,0) is enqueued.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                2,
                1
              ],
              [
                2,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "gold"
            },
            {
              "r": 1,
              "c": 0,
              "status": "gold"
            }
          ],
          "queue": [
            {
              "val": "(0,1)"
            },
            {
              "val": "(1,0)"
            }
          ],
          "vars": [
            [
              "rotted",
              "(1,0)"
            ],
            [
              "fresh",
              4
            ],
            [
              "minute",
              1
            ]
          ]
        },
        {
          "codeLine": 9,
          "narration": "Minute 1 done: 2 oranges rotted this minute. They form the frontier for minute 2. 4 fresh oranges remain.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                2,
                1
              ],
              [
                2,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,1)"
            },
            {
              "val": "(1,0)"
            }
          ],
          "vars": [
            [
              "minute",
              1
            ],
            [
              "fresh",
              4
            ],
            [
              "queue size",
              2
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Minute 2 begins: expanding from frontier cells (0,1) and (1,0) to their fresh neighbours.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
            "grid": [
              [
                2,
                2,
                1
              ],
              [
                2,
                1,
                0
              ],
              [
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,1)"
            },
            {
              "val": "(1,0)"
            }
          ],
          "vars": [
            [
              "minute",
              2
            ],
            [
              "batch",
              "[(0,1), (1,0)]"
            ],
            [
              "fresh",
              4
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Minute 2 done: 2 oranges rotted this minute (the gold ring). They are now the queue for minute 3. 2 fresh oranges still left, so the rot spreads.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "gold"
            },
            {
              "r": 0,
              "c": 2,
              "status": "gold"
            }
          ],
          "queue": [
            {
              "val": "(1,1)"
            },
            {
              "val": "(0,2)"
            }
          ],
          "vars": [
            [
              "minute",
              2
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Minute 3 begins: frontier cells (1,1) and (0,2) test adjacent cells for fresh neighbours.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                1,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(1,1)"
            },
            {
              "val": "(0,2)"
            }
          ],
          "vars": [
            [
              "minute",
              3
            ],
            [
              "fresh",
              2
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "From (1,1), neighbour (2,1) is fresh: rot it! Value becomes 2, fresh count drops to 1, and (2,1) is enqueued.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "gold"
            }
          ],
          "queue": [
            {
              "val": "(2,1)"
            }
          ],
          "vars": [
            [
              "rotted",
              "(2,1)"
            ],
            [
              "fresh",
              1
            ],
            [
              "minute",
              3
            ]
          ]
        },
        {
          "codeLine": 9,
          "narration": "Minute 3 done: 1 orange rotted this minute at (2,1). Only 1 fresh orange remains at (2,2).",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(2,1)"
            }
          ],
          "vars": [
            [
              "minute",
              3
            ],
            [
              "fresh",
              1
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Minute 4 begins: expand from frontier cell (2,1) to its adjacent fresh neighbour (2,2).",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(2,1)"
            }
          ],
          "vars": [
            [
              "minute",
              4
            ],
            [
              "frontier",
              "(2,1)"
            ],
            [
              "fresh",
              1
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "From (2,1), neighbour (2,2) is fresh: rot it! Value becomes 2, fresh count drops to 0! All oranges on the board are now rotten.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                2
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 2,
              "status": "gold"
            }
          ],
          "queue": [
            {
              "val": "(2,2)"
            }
          ],
          "vars": [
            [
              "rotted",
              "(2,2)"
            ],
            [
              "fresh",
              0
            ],
            [
              "minute",
              4
            ]
          ]
        },
        {
          "codeLine": 9,
          "narration": "Minute 4 done: no fresh oranges remain (fresh = 0). The while loop terminates.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                2
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 2,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(2,2)"
            }
          ],
          "vars": [
            [
              "minute",
              4
            ],
            [
              "fresh",
              0
            ]
          ]
        },
        {
          "codeLine": 10,
          "narration": "Return minute = 4. All fresh oranges have rotted in 4 minutes! Verified via multi-source BFS layer-by-layer contagion.",
          "matrix": {
            "title": "3 × 3 GRID · 0 EMPTY · 1 FRESH · 2 ROTTEN",
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
                0,
                2,
                2
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 2,
              "c": 2,
              "status": "visited"
            }
          ],
          "queue": [],
          "best": {
            "label": "Minimum Time to Rot All Oranges = 4 Minutes"
          },
          "vars": [
            [
              "fresh",
              0
            ],
            [
              "minute",
              4
            ],
            [
              "time",
              "O(R·C)"
            ],
            [
              "space",
              "O(R·C)"
            ]
          ]
        }
      ]
    }
  ]
},

  // 10. 01 Matrix (LeetCode #542 - Medium)
  {
  "id": "01-matrix",
  "patternId": "bfs",
  "title": "01 Matrix",
  "subtitle": "Distance to nearest 0 · multi-source BFS",
  "kind": "problem",
  "difficulty": "Medium",
  "leetcode": {
    "id": 542,
    "slug": "01-matrix",
    "difficulty": "Medium"
  },
  "companies": [
    "Google",
    "Amazon"
  ],
  "statement": "Given a matrix of 0s and 1s, return a matrix of the same size where each cell holds the distance to the nearest 0, with distance measured between 4-directionally adjacent cells.",
  "visualType": "matrix",
  "initialInput": [
    [
      0,
      0,
      0
    ],
    [
      0,
      1,
      0
    ],
    [
      1,
      1,
      1
    ]
  ],
  "approaches": [
    {
      "label": "Multi-source BFS from all zeros",
      "complexity": {
        "time": "O(R·C)",
        "space": "O(R·C)"
      },
      "pseudocode": [
        "dist = grid; mark 1-cells unknown",
        "queue = all 0-cells  // multi-source seed, distance 0",
        "ring = 0",
        "while queue not empty:",
        "  ring++",
        "  for each cell in this frontier:",
        "    for each unknown neighbour:",
        "      dist = ring; enqueue it",
        "  queue = next frontier",
        "return dist"
      ],
      "starterCode": {
        "javascript": "function updateMatrix(mat) {\n  const R = mat.length, C = mat[0].length;\n  const dist = Array.from({ length: R }, () => Array(C).fill(Infinity));\n  const queue = [];\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (mat[r][c] === 0) {\n        dist[r][c] = 0;\n        queue.push([r, c]);\n      }\n    }\n  }\n  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n        if (dist[nr][nc] > dist[r][c] + 1) {\n          dist[nr][nc] = dist[r][c] + 1;\n          queue.push([nr, nc]);\n        }\n      }\n    }\n  }\n  return dist;\n}",
        "python": "from collections import deque\n\ndef updateMatrix(mat: list[list[int]]) -> list[list[int]]:\n    R, C = len(mat), len(mat[0])\n    dist = [[float('inf')] * C for _ in range(R)]\n    queue = deque()\n    for r in range(R):\n        for c in range(C):\n            if mat[r][c] == 0:\n                dist[r][c] = 0\n                queue.append((r, c))\n    dirs = [(0, 1), (1, 0), (0, -1), [-1, 0]]\n    while queue:\n        r, c = queue.popleft()\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C:\n                if dist[nr][nc] > dist[r][c] + 1:\n                    dist[nr][nc] = dist[r][c] + 1\n                    queue.append((nr, nc))\n    return dist"
      },
      "solutionCode": {
        "javascript": "function updateMatrix(mat) {\n  const R = mat.length, C = mat[0].length;\n  const dist = Array.from({ length: R }, () => Array(C).fill(Infinity));\n  const queue = [];\n  for (let r = 0; r < R; r++) {\n    for (let c = 0; c < C; c++) {\n      if (mat[r][c] === 0) {\n        dist[r][c] = 0;\n        queue.push([r, c]);\n      }\n    }\n  }\n  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];\n  while (queue.length) {\n    const [r, c] = queue.shift();\n    for (const [dr, dc] of dirs) {\n      const nr = r + dr, nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n        if (dist[nr][nc] > dist[r][c] + 1) {\n          dist[nr][nc] = dist[r][c] + 1;\n          queue.push([nr, nc]);\n        }\n      }\n    }\n  }\n  return dist;\n}",
        "python": "from collections import deque\n\ndef updateMatrix(mat: list[list[int]]) -> list[list[int]]:\n    R, C = len(mat), len(mat[0])\n    dist = [[float('inf')] * C for _ in range(R)]\n    queue = deque()\n    for r in range(R):\n        for c in range(C):\n            if mat[r][c] == 0:\n                dist[r][c] = 0\n                queue.append((r, c))\n    dirs = [(0, 1), (1, 0), (0, -1), [-1, 0]]\n    while queue:\n        r, c = queue.popleft()\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C:\n                if dist[nr][nc] > dist[r][c] + 1:\n                    dist[nr][nc] = dist[r][c] + 1\n                    queue.append((nr, nc))\n    return dist"
      },
      "testCases": [
        {
          "input": [
            [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                1,
                1
              ]
            ]
          ],
          "expected": [
            [
              0,
              0,
              0
            ],
            [
              0,
              1,
              0
            ],
            [
              1,
              2,
              1
            ]
          ],
          "description": "Distance matrix: bottom row is [1, 2, 1]"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "The 01-Matrix: replace every cell with its distance to the NEAREST 0 (moving up/down/left/right). A naive idea, run a BFS from each 1, is wasteful. Instead, flip it around: do ONE BFS that starts from ALL the zeros at once. The wavefront from the zeros reaches each 1 in increasing distance, so the first time a 1 is touched, it is touched by its closest zero.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                "·",
                0
              ],
              [
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [],
          "queue": [],
          "vars": [
            [
              "cells",
              9
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Seed multi-source BFS with all 0-cells at distance 0. Queue = [(0,0), (0,1), (0,2), (1,0), (1,2)].",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                "·",
                0
              ],
              [
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            },
            {
              "val": "(0,1)",
              "sub": "0"
            },
            {
              "val": "(0,2)",
              "sub": "0"
            },
            {
              "val": "(1,0)",
              "sub": "0"
            },
            {
              "val": "(1,2)",
              "sub": "0"
            }
          ],
          "vars": [
            [
              "0-seeds",
              5
            ],
            [
              "queue size",
              5
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Initialize distance ring = 0. All 0-cells have distance 0.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                "·",
                0
              ],
              [
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            },
            {
              "val": "(0,1)",
              "sub": "0"
            },
            {
              "val": "(0,2)",
              "sub": "0"
            },
            {
              "val": "(1,0)",
              "sub": "0"
            },
            {
              "val": "(1,2)",
              "sub": "0"
            }
          ],
          "vars": [
            [
              "ring",
              0
            ],
            [
              "frontier",
              5
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Ring 1 begins: expand 4-directional neighbours of all distance-0 cells to discover all cells at distance 1.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                "·",
                0
              ],
              [
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            }
          ],
          "queue": [
            {
              "val": "(0,0)",
              "sub": "0"
            },
            {
              "val": "(0,1)",
              "sub": "0"
            },
            {
              "val": "(0,2)",
              "sub": "0"
            },
            {
              "val": "(1,0)",
              "sub": "0"
            },
            {
              "val": "(1,2)",
              "sub": "0"
            }
          ],
          "vars": [
            [
              "ring",
              1
            ],
            [
              "expanding",
              "5 zeros"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Cell (1,1) is adjacent to zeros at (0,1), (1,0), and (1,2). Set dist(1,1) = 1 and enqueue.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                "·",
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "active"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "dist(1,1)",
              1
            ],
            [
              "ring",
              1
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Cell (2,0) is adjacent to zero at (1,0). Set dist(2,0) = 1 and enqueue.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                "·",
                "·"
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 0,
              "status": "active"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "1"
            },
            {
              "val": "(2,0)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "dist(2,0)",
              1
            ],
            [
              "ring",
              1
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Cell (2,2) is adjacent to zero at (1,2). Set dist(2,2) = 1 and enqueue.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                "·",
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "active"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "1"
            },
            {
              "val": "(2,0)",
              "sub": "1"
            },
            {
              "val": "(2,2)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "dist(2,2)",
              1
            ],
            [
              "ring",
              1
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Expanding the distance-1 frontier (3 cells). Any unknown neighbour they touch is exactly ONE step farther, so it gets distance 2. This is the next ring of the wave.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                "·",
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "active"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "settled"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "1"
            },
            {
              "val": "(2,0)",
              "sub": "1"
            },
            {
              "val": "(2,2)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "ring",
              2
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Ring 2 begins: process distance-1 frontier cells (1,1), (2,0), and (2,2).",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                "·",
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "active"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "settled"
            }
          ],
          "queue": [
            {
              "val": "(1,1)",
              "sub": "1"
            },
            {
              "val": "(2,0)",
              "sub": "1"
            },
            {
              "val": "(2,2)",
              "sub": "1"
            }
          ],
          "vars": [
            [
              "ring",
              2
            ],
            [
              "frontier",
              3
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Cell (2,1) is touched by distance-1 neighbours (1,1), (2,0), and (2,2). Set dist(2,1) = 2 and enqueue.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 1,
              "status": "active"
            }
          ],
          "queue": [
            {
              "val": "(2,1)",
              "sub": "2"
            }
          ],
          "vars": [
            [
              "dist(2,1)",
              2
            ],
            [
              "ring",
              2
            ]
          ]
        },
        {
          "codeLine": 9,
          "narration": "Frontier (2,1) has no unknown neighbours. The BFS queue is now empty.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            }
          ],
          "queue": [],
          "vars": [
            [
              "ring",
              2
            ],
            [
              "remaining unknown",
              0
            ]
          ]
        },
        {
          "codeLine": 10,
          "narration": "BFS complete! Return the distance matrix. All 9 cells now hold their exact shortest distance to the nearest 0 in O(R·C) time.",
          "matrix": {
            "title": "3 × 3 · DISTANCE TO NEAREST 0",
            "grid": [
              [
                0,
                0,
                0
              ],
              [
                0,
                1,
                0
              ],
              [
                1,
                2,
                1
              ]
            ]
          },
          "gridHighlights": [
            {
              "r": 0,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 1,
              "status": "visited"
            },
            {
              "r": 0,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 0,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 2,
              "status": "visited"
            },
            {
              "r": 1,
              "c": 1,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 0,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 2,
              "status": "settled"
            },
            {
              "r": 2,
              "c": 1,
              "status": "visited"
            }
          ],
          "queue": [],
          "best": {
            "label": "01-Matrix Distance Complete (Max Dist = 2)"
          },
          "vars": [
            [
              "completed",
              "true"
            ],
            [
              "time",
              "O(R·C)"
            ],
            [
              "space",
              "O(R·C)"
            ]
          ]
        }
      ]
    }
  ]
},

  // 11. Bus Routes (LeetCode #815 - Hard)
  {
  "id": "bus-routes",
  "patternId": "bfs",
  "title": "Bus Routes",
  "subtitle": "BFS over routes: each level = one more bus",
  "kind": "problem",
  "difficulty": "Hard",
  "leetcode": {
    "id": 815,
    "slug": "bus-routes",
    "difficulty": "Hard"
  },
  "companies": [
    "Amazon",
    "Google",
    "Uber",
    "Microsoft"
  ],
  "statement": "Given a list of bus routes where each route is a repeating sequence of stops, return the fewest buses you must take to travel from a source stop to a target stop, or -1 if it is impossible.",
  "visualType": "graph",
  "initialInput": {
    "routes": [
      [
        1,
        2,
        7
      ],
      [
        3,
        6,
        7
      ]
    ],
    "source": 1,
    "target": 6
  },
  "approaches": [
    {
      "label": "BFS where states are routes",
      "complexity": {
        "time": "O(S²)",
        "space": "O(N + S)"
      },
      "pseudocode": [
        "numBusesToDest(routes, source, target):",
        "  build stopToRoutes: stop -> [route ids]",
        "  if source == target: return 0",
        "  queue = routes serving source, each with buses = 1",
        "  visited = those routes",
        "  while queue not empty:",
        "    route = queue.dequeue()     // front",
        "    if target in route: return buses[route]",
        "    for stop in route:",
        "      for r in stopToRoutes[stop]:",
        "        if r not visited:",
        "          buses[r] = buses[route] + 1; enqueue it",
        "return -1"
      ],
      "starterCode": {
        "javascript": "function numBusesToDestination(routes, source, target) {\n  if (source === target) return 0;\n  const stopToRoutes = new Map();\n  routes.forEach((route, i) => {\n    route.forEach(stop => {\n      if (!stopToRoutes.has(stop)) stopToRoutes.set(stop, []);\n      stopToRoutes.get(stop).push(i);\n    });\n  });\n  const queue = [];\n  const visited = new Set();\n  for (const r of stopToRoutes.get(source) || []) {\n    queue.push([r, 1]);\n    visited.add(r);\n  }\n  while (queue.length) {\n    const [routeId, buses] = queue.shift();\n    if (routes[routeId].includes(target)) return buses;\n    for (const stop of routes[routeId]) {\n      for (const nextRoute of stopToRoutes.get(stop) || []) {\n        if (!visited.has(nextRoute)) {\n          visited.add(nextRoute);\n          queue.push([nextRoute, buses + 1]);\n        }\n      }\n    }\n  }\n  return -1;\n}",
        "python": "from collections import deque, defaultdict\n\ndef numBusesToDestination(routes: list[list[int]], source: int, target: int) -> int:\n    if source == target:\n        return 0\n    stop_to_routes = defaultdict(list)\n    for i, route in enumerate(routes):\n        for stop in route:\n            stop_to_routes[stop].append(i)\n    queue = deque()\n    visited = set()\n    for r in stop_to_routes[source]:\n        queue.append((r, 1))\n        visited.add(r)\n    while queue:\n        route_id, buses = queue.popleft()\n        if target in routes[route_id]:\n            return buses\n        for stop in routes[route_id]:\n            for next_route in stop_to_routes[stop]:\n                if next_route not in visited:\n                    visited.add(next_route)\n                    queue.append((next_route, buses + 1))\n    return -1"
      },
      "solutionCode": {
        "javascript": "function numBusesToDestination(routes, source, target) {\n  if (source === target) return 0;\n  const stopToRoutes = new Map();\n  routes.forEach((route, i) => {\n    route.forEach(stop => {\n      if (!stopToRoutes.has(stop)) stopToRoutes.set(stop, []);\n      stopToRoutes.get(stop).push(i);\n    });\n  });\n  const queue = [];\n  const visited = new Set();\n  for (const r of stopToRoutes.get(source) || []) {\n    queue.push([r, 1]);\n    visited.add(r);\n  }\n  while (queue.length) {\n    const [routeId, buses] = queue.shift();\n    if (routes[routeId].includes(target)) return buses;\n    for (const stop of routes[routeId]) {\n      for (const nextRoute of stopToRoutes.get(stop) || []) {\n        if (!visited.has(nextRoute)) {\n          visited.add(nextRoute);\n          queue.push([nextRoute, buses + 1]);\n        }\n      }\n    }\n  }\n  return -1;\n}",
        "python": "from collections import deque, defaultdict\n\ndef numBusesToDestination(routes: list[list[int]], source: int, target: int) -> int:\n    if source == target:\n        return 0\n    stop_to_routes = defaultdict(list)\n    for i, route in enumerate(routes):\n        for stop in route:\n            stop_to_routes[stop].append(i)\n    queue = deque()\n    visited = set()\n    for r in stop_to_routes[source]:\n        queue.append((r, 1))\n        visited.add(r)\n    while queue:\n        route_id, buses = queue.popleft()\n        if target in routes[route_id]:\n            return buses\n        for stop in routes[route_id]:\n            for next_route in stop_to_routes[stop]:\n                if next_route not in visited:\n                    visited.add(next_route)\n                    queue.append((next_route, buses + 1))\n    return -1"
      },
      "testCases": [
        {
          "input": [
            [
              [
                1,
                2,
                7
              ],
              [
                3,
                6,
                7
              ]
            ],
            1,
            6
          ],
          "expected": 2,
          "description": "Take Route 0 (1->7), transfer at stop 7, take Route 1 (7->6) -> 2 buses"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "We want the FEWEST buses to get from stop 1 to stop 6. The trick is to make the BFS states be ROUTES, not stops: while you stay on one bus you can ride any number of stops for free, so a whole route is a single \"place\". Two routes are neighbours when they share a stop, that's where you can transfer. Then every BFS level = one extra bus.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "paramBadges": {
              "R0": "{1, 2, 7}",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "source stop",
              1
            ],
            [
              "target stop",
              6
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Build stopToRoutes index: Stop 1 -> [R0], Stop 2 -> [R0], Stop 7 -> [R0, R1], Stop 3 -> [R1], Stop 6 -> [R1]. Stop 7 is the transfer hub linking R0 and R1.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "paramBadges": {
              "R0": "{1, 2, 7}",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "transfer stop",
              7
            ],
            [
              "routes at 7",
              "[R0, R1]"
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Check if source == target (stop 1 == stop 6: false). At least one bus ride is needed.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "paramBadges": {
              "R0": "{1, 2, 7}",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "source",
              1
            ],
            [
              "target",
              6
            ],
            [
              "same?",
              "false"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Stop 1 is served by Route R0. Enqueue R0 with buses = 1 as our BFS root.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R0",
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [
            {
              "val": "R0",
              "sub": "1 bus"
            }
          ],
          "vars": [
            [
              "queue",
              "[R0]"
            ],
            [
              "buses[R0]",
              1
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "Mark Route R0 visited so we never board it again.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "visited": [
              "R0"
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [
            {
              "val": "R0",
              "sub": "1 bus"
            }
          ],
          "vars": [
            [
              "visited",
              "{R0}"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Dequeue Route R0 (front of queue). It covers stops {1, 2, 7} in 1 bus trip.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R0",
            "visited": [
              "R0"
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "current_route",
              "R0"
            ],
            [
              "buses",
              1
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Target stop 6 is not on R0 ({1, 2, 7}). Iterate over all stops on R0 to find transfers to intersecting routes.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R0",
            "visited": [
              "R0"
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7}"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "target on R0?",
              "false"
            ],
            [
              "checking",
              "transfers"
            ]
          ]
        },
        {
          "codeLine": 11,
          "narration": "Set buses[R1] = 2 and ENQUEUE R1 (it turns blue). It now waits behind everything reachable in fewer buses, that FIFO order is what makes BFS hand back the fewest-buses answer the moment we dequeue a route containing 6.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R0",
            "visited": [
              "R0"
            ],
            "activeEdges": [
              [
                "R0",
                "R1"
              ]
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7} · 2 bus"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [
            {
              "val": "R1",
              "sub": "2 bus"
            }
          ],
          "vars": [
            [
              "transfer",
              "Stop 7"
            ],
            [
              "next route",
              "R1"
            ],
            [
              "buses[R1]",
              2
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Dequeue Route R1 (front of queue, buses = 2). Inspect its stops {3, 6, 7}.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R1",
            "visited": [
              "R0",
              "R1"
            ],
            "activeEdges": [
              [
                "R0",
                "R1"
              ]
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7} · 2 bus"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "current_route",
              "R1"
            ],
            [
              "buses",
              2
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Target stop 6 is found on Route R1 ({3, 6, 7})! Return buses[R1] = 2.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R1",
            "visited": [
              "R0",
              "R1"
            ],
            "activeEdges": [
              [
                "R0",
                "R1"
              ]
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7} · 2 bus [TARGET REACHED]"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "vars": [
            [
              "target stop",
              6
            ],
            [
              "found on",
              "R1"
            ],
            [
              "min buses",
              2
            ]
          ]
        },
        {
          "codeLine": 13,
          "narration": "Verify the route: board R0 at stop 1 (bus #1, stops 1,2,7) -> transfer at the shared stop 7 -> board R1 (bus #2, stops 3,6,7) -> ride to stop 6. That's exactly 2 buses, matching our answer. BFS gave the minimum because it discovered R1 on level 2 and never found a cheaper way in.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "activeNode": "R1",
            "visited": [
              "R0",
              "R1"
            ],
            "activeEdges": [
              [
                "R0",
                "R1"
              ]
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7} · 2 bus"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "best": {
            "label": "Minimum Buses = 2 (Bus 0 → Transfer at Stop 7 → Bus 1)"
          },
          "vars": [
            [
              "route",
              "R0 → Transfer(7) → R1"
            ],
            [
              "answer",
              2
            ]
          ]
        },
        {
          "codeLine": 13,
          "narration": "Bus Routes solved: minimum buses = 2. Treating whole routes as graph nodes reduced the search space and guaranteed optimal transfers via BFS level exploration.",
          "graph": {
            "title": "ROUTE GRAPH, NODES ARE BUS ROUTES",
            "isUndirected": true,
            "queueTitle": "QUEUE OF ROUTES (FIFO)",
            "nodes": [
              {
                "id": "R0",
                "x": 120,
                "y": 90,
                "label": "R0"
              },
              {
                "id": "R1",
                "x": 300,
                "y": 90,
                "label": "R1"
              }
            ],
            "edges": [
              {
                "from": "R0",
                "to": "R1"
              }
            ],
            "visited": [
              "R0",
              "R1"
            ],
            "paramBadges": {
              "R0": "{1, 2, 7} · 1 bus",
              "R1": "{3, 6, 7} · 2 bus"
            },
            "adjList": {
              "shared stop": "7 → R0, R1"
            }
          },
          "queue": [],
          "best": {
            "label": "Minimum Buses = 2 (Bus 0 → Transfer at Stop 7 → Bus 1)"
          },
          "vars": [
            [
              "min buses",
              2
            ],
            [
              "time",
              "O(S²)"
            ],
            [
              "space",
              "O(N + S)"
            ]
          ]
        }
      ]
    }
  ]
}
];
