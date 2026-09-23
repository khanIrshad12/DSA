import { Problem } from '../../types';

export const graphProblems: Problem[] = [
  {
    id: 'intro',
    patternId: 'graphs',
    title: 'Overview',
    subtitle: 'Directed, weighted, and how we store them',
    kind: 'intro',
    statement: 'Graphs consist of a set of vertices (nodes) and edges connecting them. Can be directed or undirected, weighted or unweighted. Stored commonly as adjacency lists or matrices.',
    visualType: 'graph',
    initialInput: {
      nodes: [0, 1, 2, 3],
      edges: [[0, 1], [0, 2], [1, 3], [2, 3]]
    },
    approaches: [
      {
        label: 'Graph Fundamentals',
        complexity: { time: 'O(V + E)', space: 'O(V + E)' },
        pseudocode: [
          'adj ← adjacency list map',
          'visited ← set()',
          'bfs(start):',
          '    queue ← [start]',
          '    while queue not empty:',
          '        curr ← queue.popleft()',
          '        visit(curr)'
        ],
        starterCode: {
          javascript: `function graphBfs(numNodes, edges) {\n  const adj = Array.from({ length: numNodes }, () => []);\n  for (let [u, v] of edges) {\n    adj[u].push(v);\n  }\n  const visited = [];\n  const queue = [0];\n  const seen = new Set([0]);\n  while (queue.length) {\n    const curr = queue.shift();\n    visited.push(curr);\n    for (let neighbor of adj[curr]) {\n      if (!seen.has(neighbor)) {\n        seen.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return visited;\n}`,
          python: `def graphBfs(numNodes: int, edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(numNodes)]\n    for u, v in edges:\n        adj[u].append(v)\n    visited = []\n    queue = [0]\n    seen = {0}\n    while queue:\n        curr = queue.pop(0)\n        visited.append(curr)\n        for neighbor in adj[curr]:\n            if neighbor not in seen:\n                seen.add(neighbor)\n                queue.append(neighbor)\n    return visited`
        },
        solutionCode: {
          javascript: `function graphBfs(numNodes, edges) {\n  const adj = Array.from({ length: numNodes }, () => []);\n  for (let [u, v] of edges) {\n    adj[u].push(v);\n  }\n  const visited = [];\n  const queue = [0];\n  const seen = new Set([0]);\n  while (queue.length) {\n    const curr = queue.shift();\n    visited.push(curr);\n    for (let neighbor of adj[curr]) {\n      if (!seen.has(neighbor)) {\n        seen.add(neighbor);\n        queue.push(neighbor);\n      }\n    }\n  }\n  return visited;\n}`,
          python: `def graphBfs(numNodes: int, edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(numNodes)]\n    for u, v in edges:\n        adj[u].append(v)\n    visited = []\n    queue = [0]\n    seen = {0}\n    while queue:\n        curr = queue.pop(0)\n        visited.append(curr)\n        for neighbor in adj[curr]:\n            if neighbor not in seen:\n                seen.add(neighbor)\n                queue.append(neighbor)\n    return visited`
        },
        testCases: [
          { input: [4, [[0, 1], [0, 2], [1, 3], [2, 3]]], expected: [0, 1, 2, 3], description: 'BFS over diamond DAG' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Build adjacency list: 0: [1, 2], 1: [3], 2: [3], 3: [].',
            graph: { activeNode: 0, visited: [0], inDegree: { 0: 0, 1: 1, 2: 1, 3: 2 }, queue: [0] },
            vars: [['queue', '[0]'], ['visited', '{0}']]
          },
          {
            codeLine: 6,
            narration: 'Pop node 0. Traverse neighbors 1 and 2.',
            graph: { activeNode: 0, visited: [0, 1, 2], inDegree: { 0: 0, 1: 0, 2: 0, 3: 2 }, queue: [1, 2] },
            vars: [['queue', '[1, 2]'], ['visited', '{0, 1, 2}']]
          }
        ]
      }
    ]
  },
  {
    id: 'course-schedule-ii',
    patternId: 'graphs',
    title: 'Course Schedule II',
    subtitle: 'Return a valid topological order',
    kind: 'problem',
    leetcode: { id: 210, slug: 'course-schedule-ii', difficulty: 'Medium' },
    companies: ['Amazon', 'Meta', 'Google'],
    statement: 'Given a number of courses and their prerequisite pairs, return an ordering in which all courses can be taken. If no valid ordering exists (the graph has a cycle), return an empty list.',
    visualType: 'graph',
    initialInput: {
      nodes: [0, 1, 2, 3],
      edges: [[0, 1], [0, 2], [1, 3], [2, 3]]
    },
    approaches: [
      {
        label: "Kahn's algorithm — collect the pop order",
        complexity: { time: 'O(V + E)', space: 'O(V + E)' },
        pseudocode: [
          'build graph; edge b → a for prereq [a, b]',
          'in-deg[v] = number of edges into v',
          'queue = all v with in-deg[v] == 0',
          'order = []',
          'while queue not empty:',
          '    u = pop; order.append(u)',
          '    for u → v: in-deg[v] -= 1; if 0: push v',
          'return len(order) == numCourses ? order : []'
        ],
        starterCode: {
          javascript: `function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  const order = [];\n  while (queue.length) {\n    const curr = queue.shift();\n    order.push(curr);\n    for (const neighbor of adj[curr]) {\n      if (--inDegree[neighbor] === 0) queue.push(neighbor);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}`,
          python: `def findOrder(numCourses, prerequisites):\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n    queue = [i for i in range(numCourses) if in_degree[i] == 0]\n    order = []\n    while queue:\n        curr = queue.pop(0)\n        order.append(curr)\n        for neighbor in adj[curr]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return order if len(order) == numCourses else []`
        },
        solutionCode: {
          javascript: `function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n  for (const [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) if (inDegree[i] === 0) queue.push(i);\n  const order = [];\n  while (queue.length) {\n    const curr = queue.shift();\n    order.push(curr);\n    for (const neighbor of adj[curr]) {\n      if (--inDegree[neighbor] === 0) queue.push(neighbor);\n    }\n  }\n  return order.length === numCourses ? order : [];\n}`,
          python: `def findOrder(numCourses, prerequisites):\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n    queue = [i for i in range(numCourses) if in_degree[i] == 0]\n    order = []\n    while queue:\n        curr = queue.pop(0)\n        order.append(curr)\n        for neighbor in adj[curr]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return order if len(order) == numCourses else []`
        },
        testCases: [
          { input: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: [0, 1, 2, 3], description: 'Valid diamond DAG topological sort' },
          { input: [2, [[1, 0], [0, 1]]], expected: [], description: 'Cycle detection returns empty' },
          { input: [1, []], expected: [0], description: 'Single course with no prerequisites' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'Compute in-degrees: course 0 has 0 prereqs (in-deg 0). Queue = [0].',
            graph: { activeNode: 0, visited: [], inDegree: { 0: 0, 1: 1, 2: 1, 3: 2 }, order: [], queue: [0] },
            vars: [['in_deg', '{0:0, 1:1, 2:1, 3:2}'], ['queue', '[0]']]
          },
          {
            codeLine: 5,
            narration: 'Pop course 0 and APPEND it to the order → [0]. Decrement in-degree of 1 and 2 to 0. Push 1 and 2.',
            graph: { activeNode: 0, visited: [0], inDegree: { 0: 0, 1: 0, 2: 0, 3: 2 }, order: [0], queue: [1, 2] },
            vars: [['order', '[0]'], ['queue', '[1, 2]']]
          },
          {
            codeLine: 5,
            narration: 'Pop course 1 and APPEND to order → [0, 1]. Every prerequisite of 1 already sits earlier in the order.',
            graph: { activeNode: 1, visited: [0, 1], inDegree: { 0: 0, 1: 0, 2: 0, 3: 1 }, order: [0, 1], queue: [2] },
            vars: [['take', 1], ['order', '[0, 1]']]
          },
          {
            codeLine: 5,
            narration: 'Pop course 2 and APPEND → [0, 1, 2]. Decrement in-degree of course 3 to 0. Push 3.',
            graph: { activeNode: 2, visited: [0, 1, 2], inDegree: { 0: 0, 1: 0, 2: 0, 3: 0 }, order: [0, 1, 2], queue: [3] },
            vars: [['take', 2], ['order', '[0, 1, 2]']]
          },
          {
            codeLine: 8,
            narration: 'Pop course 3. All 4 courses taken in valid order: [0, 1, 2, 3]! DAG confirmed.',
            graph: { activeNode: 3, visited: [0, 1, 2, 3], inDegree: { 0: 0, 1: 0, 2: 0, 3: 0 }, order: [0, 1, 2, 3], queue: [] },
            best: { label: 'Topological Order: [0, 1, 2, 3]' },
            vars: [['result', '[0, 1, 2, 3]']]
          }
        ]
      }
    ]
  }
];
