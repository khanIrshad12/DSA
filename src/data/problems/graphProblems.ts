import { Problem } from '../../types';

export const graphProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "graphs",
    "title": "Overview",
    "subtitle": "Directed, weighted, and how we store them",
    "kind": "intro",
    "statement": "A graph G = (V, E) is a non-linear data structure consisting of vertices (nodes) and edges connecting pairs of vertices. Graphs can be directed (edges have one-way direction) or undirected (two-way), weighted (edges have numerical costs) or unweighted. In code, graphs are most commonly stored as Adjacency Lists for optimal O(V + E) space efficiency.",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 0,
          "x": 60,
          "y": 60
        },
        {
          "id": 1,
          "x": 200,
          "y": 60
        },
        {
          "id": 2,
          "x": 60,
          "y": 180
        },
        {
          "id": 3,
          "x": 200,
          "y": 180
        }
      ],
      "edges": [
        {
          "from": 0,
          "to": 1,
          "weight": 5
        },
        {
          "from": 0,
          "to": 2,
          "weight": 2
        },
        {
          "from": 2,
          "to": 1,
          "weight": 1
        },
        {
          "from": 2,
          "to": 3,
          "weight": 7
        },
        {
          "from": 1,
          "to": 3,
          "weight": 3
        }
      ]
    },
    "approaches": [
      {
        "id": "graph-vocabulary-bfs-recap",
        "label": "Graph vocabulary + a BFS recap",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "// a graph = nodes + edges",
          "edges may be directed and/or weighted",
          "in-degree(v) = edges arriving at v",
          "out-degree(v) = edges leaving v",
          "a DAG = directed graph with no cycle",
          "store as adjacency list: adj[u] = [neighbours]",
          "// traverse (BFS):",
          "seen = {source}; queue = [source]",
          "while queue: u = dequeue",
          "  for v in adj[u]: if v unseen: enqueue v",
          "done, every reachable node visited"
        ],
        "starterCode": {
          "javascript": "function graphBfs(numNodes, edges, source = 0) {\n  const adj = Array.from({ length: numNodes }, () => []);\n  for (let [u, v, w] of edges) {\n    adj[u].push(v);\n  }\n  const seen = new Set([source]);\n  const queue = [source];\n  const order = [];\n  while (queue.length) {\n    const u = queue.shift();\n    order.push(u);\n    for (let v of adj[u]) {\n      if (!seen.has(v)) {\n        seen.add(v);\n        queue.push(v);\n      }\n    }\n  }\n  return order;\n}",
          "python": "from collections import deque\n\ndef graphBfs(numNodes: int, edges: list[list[int]], source: int = 0) -> list[int]:\n    adj = [[] for _ in range(numNodes)]\n    for u, v, w in edges:\n        adj[u].append(v)\n    seen = {source}\n    queue = deque([source])\n    order = []\n    while queue:\n        u = queue.popleft()\n        order.append(u)\n        for v in adj[u]:\n            if v not in seen:\n                seen.add(v)\n                queue.append(v)\n    return order"
        },
        "solutionCode": {
          "javascript": "function graphBfs(numNodes, edges, source = 0) {\n  const adj = Array.from({ length: numNodes }, () => []);\n  for (let [u, v, w] of edges) {\n    adj[u].push(v);\n  }\n  const seen = new Set([source]);\n  const queue = [source];\n  const order = [];\n  while (queue.length) {\n    const u = queue.shift();\n    order.push(u);\n    for (let v of adj[u]) {\n      if (!seen.has(v)) {\n        seen.add(v);\n        queue.push(v);\n      }\n    }\n  }\n  return order;\n}",
          "python": "from collections import deque\n\ndef graphBfs(numNodes: int, edges: list[list[int]], source: int = 0) -> list[int]:\n    adj = [[] for _ in range(numNodes)]\n    for u, v, w in edges:\n        adj[u].append(v)\n    seen = {source}\n    queue = deque([source])\n    order = []\n    while queue:\n        u = queue.popleft()\n        order.append(u)\n        for v in adj[u]:\n            if v not in seen:\n                seen.add(v)\n                queue.append(v)\n    return order"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  0,
                  1,
                  5
                ],
                [
                  0,
                  2,
                  2
                ],
                [
                  2,
                  1,
                  1
                ],
                [
                  2,
                  3,
                  7
                ],
                [
                  1,
                  3,
                  3
                ]
              ],
              0
            ],
            "expected": [
              0,
              1,
              2,
              3
            ],
            "description": "BFS traversal on 4-node directed weighted graph"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "A graph is a set of NODES (also called vertices) joined by EDGES. Unlike a tree there is no root and edges may form cycles. Almost every graph problem is one of three flavours: REACHABILITY (can I get from A to B?), ORDERING (what sequence respects the dependencies?), or SHORTEST PATH (what is the cheapest route?). Learn the vocabulary first.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DIRECTED, WEIGHTED GRAPH"
            },
            "vars": [
              [
                "nodes (V)",
                4
              ],
              [
                "edges (E)",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Edges can be DIRECTED (one-way: u -> v, where u can reach v but not necessarily vice versa) or UNDIRECTED (two-way: u <-> v). Here all edges are directed.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DIRECTED, WEIGHTED GRAPH"
            },
            "vars": [
              [
                "edge type",
                "directed (u -> v)"
              ],
              [
                "total edges",
                5
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Each edge also carries a WEIGHT, the number in the badge. A weight is the cost of crossing that edge: distance, time, price, anything. 0->1 costs 5 but the detour 0->2->1 costs 2+1 = 3, which is cheaper. Weights are exactly why shortest-path is interesting; without them \"shortest\" just means \"fewest edges\".",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 2,
              "activeEdges": [
                [
                  0,
                  2
                ],
                [
                  2,
                  1
                ]
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DIRECTED, WEIGHTED GRAPH"
            },
            "vars": [
              [
                "0->1 direct",
                5
              ],
              [
                "0->2->1",
                3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "IN-DEGREE(v): the number of incoming edges pointing into v. Node 0 has in-degree 0 (a source). Node 1 has in-degree 2 (edges from 0 and 2). In-degrees are essential for Topological Sort and Kahn's Algorithm.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 1,
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "IN-DEGREE: ARRIVING EDGES"
            },
            "vars": [
              [
                "in-degree(0)",
                0
              ],
              [
                "in-degree(1)",
                2
              ],
              [
                "in-degree(2)",
                1
              ],
              [
                "in-degree(3)",
                2
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "OUT-DEGREE(v): the number of outgoing edges leaving v. Node 0 has out-degree 2 (edges to 1 and 2). Node 3 has out-degree 0 (a sink).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 0,
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "OUT-DEGREE: LEAVING EDGES"
            },
            "vars": [
              [
                "out-degree(0)",
                2
              ],
              [
                "out-degree(1)",
                1
              ],
              [
                "out-degree(2)",
                2
              ],
              [
                "out-degree(3)",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "DAG (Directed Acyclic Graph): A directed graph with NO directed cycles. Crucial for modeling dependencies, build systems, course prerequisites, and dynamic programming state transitions.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DIRECTED ACYCLIC GRAPH (DAG)"
            },
            "vars": [
              [
                "is DAG",
                true
              ],
              [
                "has cycle",
                false
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "ADJACENCY LIST: How we store graphs in code. adj[u] maps each vertex u to its direct list of neighbors. Space complexity is O(V + E), which is optimal compared to O(V²) for an adjacency matrix.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "ADJACENCY LIST STORAGE"
            },
            "vars": [
              [
                "storage",
                "adj[u] = [neighbours]"
              ],
              [
                "memory",
                "O(V + E)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Now let's run BFS traversal starting from source node 0. Initialize: seen = {0}, queue = [0].",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 0,
              "queue": [
                0
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "START BFS AT NODE 0"
            },
            "vars": [
              [
                "source",
                0
              ],
              [
                "seen",
                "{0}"
              ],
              [
                "queue",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "while queue: dequeue source node 0 from the queue to process it.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 0,
              "visited": [
                0
              ],
              "queue": [],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DEQUEUE NODE 0"
            },
            "vars": [
              [
                "dequeue",
                0
              ],
              [
                "queue",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Dequeue 0 and mark it done (green). Scan its neighbours: 1, 2 are new, so enqueue them. We enqueue a node the moment we FIRST see it, which guarantees each node is queued once, that is what keeps BFS O(V + E).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 0,
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ],
              "visited": [
                0
              ],
              "queue": [
                1,
                2
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "ENQUEUE UNSEEN NEIGHBORS 1 & 2"
            },
            "vars": [
              [
                "dequeue",
                0
              ],
              [
                "new",
                "1, 2"
              ],
              [
                "queue",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Dequeue 1 and mark it done. Scan 1's neighbours: node 3 is new, so enqueue 3. Queue now has [2, 3].",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 1,
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "visited": [
                0,
                1
              ],
              "queue": [
                2,
                3
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DEQUEUE 1 -> ENQUEUE 3"
            },
            "vars": [
              [
                "dequeue",
                1
              ],
              [
                "new",
                3
              ],
              [
                "queue",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Dequeue 2 and mark it done. Scan 2's neighbours: 1 and 3 are already seen, so nothing new to enqueue. Queue has [3].",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 2,
              "visited": [
                0,
                1,
                2
              ],
              "queue": [
                3
              ],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DEQUEUE 2 -> NO NEW NEIGHBORS"
            },
            "vars": [
              [
                "dequeue",
                2
              ],
              [
                "new",
                "none"
              ],
              [
                "queue",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Dequeue 3 and mark it done. All of 3's neighbours are already seen, so there is nothing new to enqueue.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "activeNode": 3,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "queue": [],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "DEQUEUE 3 -> QUEUE EMPTY"
            },
            "vars": [
              [
                "dequeue",
                3
              ],
              [
                "new",
                ""
              ],
              [
                "queue",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 11,
            "narration": "Done, every reachable node visited! Traversal order: [0, 1, 2, 3]. Time complexity is O(V + E) and space complexity is O(V + E).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 60
                },
                {
                  "id": 1,
                  "x": 200,
                  "y": 60
                },
                {
                  "id": 2,
                  "x": 60,
                  "y": 180
                },
                {
                  "id": 3,
                  "x": 200,
                  "y": 180
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 5
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 2
                },
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 7
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 3
                }
              ],
              "visited": [
                0,
                1,
                2,
                3
              ],
              "queue": [],
              "adjList": {
                "0": [
                  1,
                  2
                ],
                "1": [
                  3
                ],
                "2": [
                  1,
                  3
                ],
                "3": []
              },
              "title": "GRAPH BFS RECAP COMPLETE"
            },
            "best": {
              "label": "All 4 Nodes Visited: [0, 1, 2, 3]"
            },
            "vars": [
              [
                "visited order",
                "[0, 1, 2, 3]"
              ],
              [
                "time",
                "O(V + E)"
              ],
              [
                "space",
                "O(V + E)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "course-schedule",
    "patternId": "graphs",
    "title": "Course Schedule",
    "subtitle": "Can you finish? = is it a DAG (no cycle)?",
    "kind": "problem",
    "leetcode": {
      "id": 207,
      "slug": "course-schedule",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft"
    ],
    "statement": "Given a number of courses and a list of prerequisite pairs, determine whether it is possible to finish all courses (i.e. the prerequisite graph contains no cycle).\n\nASKED AT: Amazon Google Meta Microsoft",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 0,
          "x": 130,
          "y": 50
        },
        {
          "id": 1,
          "x": 50,
          "y": 150
        },
        {
          "id": 2,
          "x": 210,
          "y": 150
        },
        {
          "id": 3,
          "x": 130,
          "y": 250
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
          "to": 3
        },
        {
          "from": 2,
          "to": 3
        }
      ],
      "adjList": {
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
      "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)"
    },
    "approaches": [
      {
        "id": "kahns-algorithm-indegree",
        "label": "Kahn's algorithm (topological sort by in-degree)",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "build graph; edge b -> a for prereq [a, b]",
          "in-deg[v] = number of edges into v",
          "queue = all v with in-deg[v] == 0",
          "processed = 0",
          "while queue not empty:",
          "  u = pop; processed += 1",
          "  for u -> v: in-deg[v] -= 1; if 0: push v",
          "return processed == numCourses  // all drained = DAG"
        ],
        "starterCode": {
          "javascript": "function canFinish(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n\n  for (let [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n\n  let processed = 0;\n  while (queue.length > 0) {\n    const u = queue.shift();\n    processed++;\n    for (let v of adj[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n\n  return processed === numCourses;\n}",
          "python": "from collections import deque\n\ndef canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    processed = 0\n\n    while queue:\n        u = queue.popleft()\n        processed += 1\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                queue.append(v)\n\n    return processed == numCourses"
        },
        "solutionCode": {
          "javascript": "function canFinish(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n\n  for (let [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n\n  let processed = 0;\n  while (queue.length > 0) {\n    const u = queue.shift();\n    processed++;\n    for (let v of adj[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n\n  return processed === numCourses;\n}",
          "python": "from collections import deque\n\ndef canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    processed = 0\n\n    while queue:\n        u = queue.popleft()\n        processed += 1\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                queue.append(v)\n\n    return processed == numCourses"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  1,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  3,
                  1
                ],
                [
                  3,
                  2
                ]
              ]
            ],
            "expected": true,
            "description": "DAG with 4 courses and no cycles"
          },
          {
            "input": [
              2,
              [
                [
                  1,
                  0
                ],
                [
                  0,
                  1
                ]
              ]
            ],
            "expected": false,
            "description": "Cycle between courses 0 and 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Course Schedule: with numCourses = 4 and prerequisites [[1,0],[2,0],[3,1],[3,2]], can you finish every course? Each pair [a, b] reads \"b is a prerequisite of a\", so we draw the edge b -> a, the arrow points the way you progress. The whole question reduces to one thing: is this graph a DAG (no cycle)? If a cycle exists, two courses each wait on the other forever, and you can never start.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "numCourses",
                4
              ],
              [
                "answer?",
                "- is it a DAG"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Build adjacency list representation: course 0 unlocks courses 1 and 2 (0: [1, 2]), course 1 unlocks 3 (1: [3]), course 2 unlocks 3 (2: [3]), and course 3 unlocks nothing (3: []).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "adj[0]",
                "[1, 2]"
              ],
              [
                "adj[1]",
                "[3]"
              ],
              [
                "adj[2]",
                "[3]"
              ],
              [
                "adj[3]",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 0 has 0 prerequisites (no edges pointing into it), so in-degree(0) = 0.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[0]",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 1 has 1 prerequisite (edge 0 -> 1), course 2 has 1 prerequisite (edge 0 -> 2). In-degree(1) = 1, in-degree(2) = 1.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[1]",
                1
              ],
              [
                "in-degree[2]",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 3 has 2 prerequisites (edges 1 -> 3 and 2 -> 3), so in-degree(3) = 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  2,
                  3
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[3]",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "In-degrees done: course 0 has 0 prereqs, courses 1 and 2 have 1 each (course 0), course 3 has 2 (courses 1 and 2). Kahn's algorithm now repeatedly removes a course with NO remaining prerequisites, exactly the courses we are free to take right now.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degrees",
                "[0,1,1,2]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Initialize queue: find all courses with in-degree == 0. Only course 0 has in-degree 0, so enqueue course 0.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "queue",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Initialize processed counter: processed = 0.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "processed",
                0
              ],
              [
                "queue",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "While queue not empty: queue contains [0]. We can now pop course 0 and process it.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "queue",
                "[0]"
              ],
              [
                "processed",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop course 0: take course 0 and mark it done (green). Increment processed count to 1.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "visited": [
                0
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": [
                0
              ]
            },
            "vars": [
              [
                "u (pop)",
                0
              ],
              [
                "processed",
                "1/4"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "For neighbors of 0: edges 0 -> 1 and 0 -> 2. Drop in-degree[1] to 0 (push 1 to queue), drop in-degree[2] to 0 (push 2 to queue). Courses 1 and 2 are now ready!",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
                0
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 2
              },
              "queue": [
                1,
                2
              ],
              "order": [
                0
              ]
            },
            "vars": [
              [
                "unlocked",
                "1, 2"
              ],
              [
                "queue",
                "[1, 2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Edge 1 -> 3: drop in-deg[3] to 1. Still > 0, so 3 has other prerequisites left and is not ready yet.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 1,
              "visited": [
                0,
                1
              ],
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [
                2
              ],
              "order": [
                0,
                1
              ]
            },
            "vars": [
              [
                "edge",
                "1->3"
              ],
              [
                "in-deg[3]",
                1
              ],
              [
                "ready?",
                "not yet"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "While queue not empty: queue has [2]. Pop course 2 to process next.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 2,
              "visited": [
                0,
                1
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [
                2
              ],
              "order": [
                0,
                1
              ]
            },
            "vars": [
              [
                "pop",
                2
              ],
              [
                "queue",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Take course 2 and mark it done (green). Increment processed count to 3.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 2,
              "visited": [
                0,
                1,
                2
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [],
              "order": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "u (pop)",
                2
              ],
              [
                "processed",
                "3/4"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "For neighbor of 2: edge 2 -> 3. Drop in-degree[3] from 1 to 0! All prerequisites for course 3 are now complete, so push 3 into queue.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
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
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [
                3
              ],
              "order": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "edge",
                "2->3"
              ],
              [
                "in-deg[3]",
                0
              ],
              [
                "unlocked",
                3
              ],
              [
                "queue",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "The queue is empty and we processed 4 of 4 courses. Because we drained every course, the graph had NO cycle, answer is TRUE, you can finish. If even one course were left with in-degree > 0, it would mean a group of courses each waiting on another (a cycle), which can never reach in-degree 0, an impossible schedule. Kahn's algorithm runs in O(V + E).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
                0,
                1,
                2,
                3
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "processed",
                "4/4"
              ],
              [
                "canFinish",
                "true"
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
    "id": "course-schedule-ii",
    "patternId": "graphs",
    "title": "Course Schedule II",
    "subtitle": "Return a valid topological order",
    "kind": "problem",
    "leetcode": {
      "id": 210,
      "slug": "course-schedule-ii",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft"
    ],
    "statement": "Given a number of courses and their prerequisite pairs, return an ordering in which all courses can be taken. If no valid ordering exists (the graph has a cycle), return an empty list.\n\nASKED AT: Amazon Meta Google",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 0,
          "x": 130,
          "y": 50
        },
        {
          "id": 1,
          "x": 50,
          "y": 150
        },
        {
          "id": 2,
          "x": 210,
          "y": 150
        },
        {
          "id": 3,
          "x": 130,
          "y": 250
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
          "to": 3
        },
        {
          "from": 2,
          "to": 3
        }
      ],
      "adjList": {
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
      "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)"
    },
    "approaches": [
      {
        "id": "kahns-algorithm-collect-pop-order",
        "label": "Kahn's algorithm, collect the pop order",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "build graph; edge b -> a for prereq [a, b]",
          "in-deg[v] = number of edges into v",
          "queue = all v with in-deg[v] == 0",
          "order = []",
          "while queue not empty:",
          "  u = pop; order.append(u)",
          "  for u -> v: in-deg[v] -= 1; if 0: push v",
          "return len(order) == numCourses ? order : []"
        ],
        "starterCode": {
          "javascript": "function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n\n  for (let [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n\n  const order = [];\n  while (queue.length > 0) {\n    const u = queue.shift();\n    order.push(u);\n    for (let v of adj[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n\n  return order.length === numCourses ? order : [];\n}",
          "python": "from collections import deque\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n\n    while queue:\n        u = queue.popleft()\n        order.append(u)\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                queue.append(v)\n\n    return order if len(order) == numCourses else []"
        },
        "solutionCode": {
          "javascript": "function findOrder(numCourses, prerequisites) {\n  const inDegree = new Array(numCourses).fill(0);\n  const adj = Array.from({ length: numCourses }, () => []);\n\n  for (let [course, prereq] of prerequisites) {\n    adj[prereq].push(course);\n    inDegree[course]++;\n  }\n\n  const queue = [];\n  for (let i = 0; i < numCourses; i++) {\n    if (inDegree[i] === 0) queue.push(i);\n  }\n\n  const order = [];\n  while (queue.length > 0) {\n    const u = queue.shift();\n    order.push(u);\n    for (let v of adj[u]) {\n      inDegree[v]--;\n      if (inDegree[v] === 0) queue.push(v);\n    }\n  }\n\n  return order.length === numCourses ? order : [];\n}",
          "python": "from collections import deque\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    in_degree = [0] * numCourses\n    adj = [[] for _ in range(numCourses)]\n\n    for course, prereq in prerequisites:\n        adj[prereq].append(course)\n        in_degree[course] += 1\n\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n\n    while queue:\n        u = queue.popleft()\n        order.append(u)\n        for v in adj[u]:\n            in_degree[v] -= 1\n            if in_degree[v] == 0:\n                queue.append(v)\n\n    return order if len(order) == numCourses else []"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  1,
                  0
                ],
                [
                  2,
                  0
                ],
                [
                  3,
                  1
                ],
                [
                  3,
                  2
                ]
              ]
            ],
            "expected": [
              0,
              1,
              2,
              3
            ],
            "description": "DAG with 4 courses returns valid topological order"
          },
          {
            "input": [
              2,
              [
                [
                  1,
                  0
                ],
                [
                  0,
                  1
                ]
              ]
            ],
            "expected": [],
            "description": "Cycle between 0 and 1 returns empty array"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Course Schedule II: same graph, but now return a VALID ORDER to take all 4 courses. Pair [a, b] means \"take b before a\", drawn as edge b -> a. A topological order is any listing of the nodes where every edge points forward, no course appears before a prerequisite. Kahn's algorithm builds exactly such an order for free: the sequence in which we pop ready courses IS a topological sort.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "numCourses",
                4
              ],
              [
                "goal",
                "a valid topo order"
              ]
            ]
          },
          {
            "codeLine": 1,
            "narration": "Build adjacency list representation: course 0 unlocks courses 1 and 2 (0: [1, 2]), course 1 unlocks 3 (1: [3]), course 2 unlocks 3 (2: [3]), and course 3 unlocks nothing (3: []).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "adj[0]",
                "[1, 2]"
              ],
              [
                "adj[1]",
                "[3]"
              ],
              [
                "adj[2]",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 0 has 0 prerequisites (no incoming edges), so in-degree(0) = 0.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[0]",
                0
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 1 has 1 prerequisite (edge 0 -> 1), course 2 has 1 prerequisite (edge 0 -> 2). In-degree(1) = 1, in-degree(2) = 1.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 0
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[1]",
                1
              ],
              [
                "in-degree[2]",
                1
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Calculate in-degrees: course 3 has 2 prerequisites (edges 1 -> 3 and 2 -> 3), so in-degree(3) = 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeEdges": [
                [
                  1,
                  3
                ],
                [
                  2,
                  3
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degree[3]",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "All in-degrees computed: course 0 has 0 prereqs, 1 and 2 have 1 each, 3 has 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": []
            },
            "vars": [
              [
                "in-degrees",
                "[0, 1, 1, 2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Enqueue every in-degree-0 course, just course 0. These have no prerequisites, so any of them is a safe first pick.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "queue",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Initialize order list: order = []. As courses are popped and completed, they are appended to order.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "order",
                "[]"
              ],
              [
                "queue",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "While queue not empty: queue has [0]. Pop course 0 from queue.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [
                0
              ],
              "order": []
            },
            "vars": [
              [
                "queue",
                "[0]"
              ],
              [
                "order",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop course 0 and append to order: order = [0]. Mark course 0 done (green).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 0,
              "visited": [
                0
              ],
              "inDegree": {
                "0": 0,
                "1": 1,
                "2": 1,
                "3": 2
              },
              "queue": [],
              "order": [
                0
              ]
            },
            "vars": [
              [
                "u (pop)",
                0
              ],
              [
                "order",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "For neighbors of 0: edges 0 -> 1 and 0 -> 2. Drop in-degree[1] to 0 (push 1 to queue), drop in-degree[2] to 0 (push 2 to queue). Courses 1 and 2 are now ready.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
                0
              ],
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  0,
                  2
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 2
              },
              "queue": [
                1,
                2
              ],
              "order": [
                0
              ]
            },
            "vars": [
              [
                "unlocked",
                "1, 2"
              ],
              [
                "queue",
                "[1, 2]"
              ],
              [
                "order",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop course 1, append to order: order = [0, 1]. For edge 1 -> 3: drop in-deg[3] to 1. 3 has remaining prerequisites, so it is not ready yet.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 1,
              "visited": [
                0,
                1
              ],
              "activeEdges": [
                [
                  1,
                  3
                ]
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [
                2
              ],
              "order": [
                0,
                1
              ]
            },
            "vars": [
              [
                "pop",
                1
              ],
              [
                "edge",
                "1->3"
              ],
              [
                "in-deg[3]",
                1
              ],
              [
                "order",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "While queue not empty: pop course 2 from queue.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 2,
              "visited": [
                0,
                1
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [
                2
              ],
              "order": [
                0,
                1
              ]
            },
            "vars": [
              [
                "pop",
                2
              ],
              [
                "queue",
                "[2]"
              ],
              [
                "order",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Take course 2, append to order: order = [0, 1, 2]. Mark course 2 done (green).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "activeNode": 2,
              "visited": [
                0,
                1,
                2
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 1
              },
              "queue": [],
              "order": [
                0,
                1,
                2
              ]
            },
            "vars": [
              [
                "pop",
                2
              ],
              [
                "order",
                "[0, 1, 2]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "For neighbor of 2: edge 2 -> 3. Drop in-degree[3] from 1 to 0! All prerequisites are met, so push 3 into queue. Then pop 3 and append to order: order = [0, 1, 2, 3]. Mark course 3 done.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
                0,
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
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "pop",
                3
              ],
              [
                "unlocked",
                3
              ],
              [
                "order",
                "[0, 1, 2, 3]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "All 4 courses popped into order: [0, 1, 2, 3]. len(order) == 4 == numCourses, so the graph is a DAG with no cycles. Return the valid topological order [0, 1, 2, 3] (or [0, 2, 1, 3]). Kahn's algorithm runs in O(V + E) time.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 2,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 130,
                  "y": 250
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
                  "to": 3
                },
                {
                  "from": 2,
                  "to": 3
                }
              ],
              "adjList": {
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
              "title": "PREREQUISITE GRAPH (B -> A = TAKE B FIRST)",
              "visited": [
                0,
                1,
                2,
                3
              ],
              "inDegree": {
                "0": 0,
                "1": 0,
                "2": 0,
                "3": 0
              },
              "queue": [],
              "order": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "len(order)",
                4
              ],
              [
                "result",
                "[0, 1, 2, 3]"
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
    "id": "shortest-path-algorithms",
    "patternId": "graphs",
    "title": "Shortest Path Algorithms",
    "subtitle": "BFS vs Dijkstra vs Bellman-Ford",
    "kind": "intro",
    "statement": "Shortest path algorithms determine the minimum total edge weight to reach target nodes from a starting vertex. Choose BFS for unweighted graphs (O(V+E)), Dijkstra for non-negative edge weights (O(E log V)), and Bellman-Ford for negative edge weights and negative cycle detection (O(V·E)).",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": "A",
          "x": 60,
          "y": 70
        },
        {
          "id": "B",
          "x": 200,
          "y": 70
        },
        {
          "id": "C",
          "x": 130,
          "y": 190
        },
        {
          "id": "D",
          "x": 270,
          "y": 190
        }
      ],
      "edges": [
        {
          "from": "A",
          "to": "B",
          "weight": 5
        },
        {
          "from": "A",
          "to": "C",
          "weight": 2
        },
        {
          "from": "C",
          "to": "B",
          "weight": 1
        },
        {
          "from": "C",
          "to": "D",
          "weight": 3
        },
        {
          "from": "B",
          "to": "D",
          "weight": 1
        }
      ],
      "title": "WEIGHTED DIRECTED GRAPH"
    },
    "approaches": [
      {
        "id": "which-shortest-path-algorithm-to-pick",
        "label": "Which shortest-path algorithm to pick",
        "complexity": {
          "time": "BFS O(V+E) · Dijkstra O(E log V) · Bellman-Ford O(V·E)",
          "space": "O(V)"
        },
        "pseudocode": [
          "// choose by the edge weights:",
          "unweighted           -> BFS          (fewest edges)",
          "weights all >= 0     -> Dijkstra     (greedy, heap)",
          "any negative weight  -> Bellman-Ford (relax all, V-1x)",
          "",
          "Dijkstra: dist[src]=0; pop nearest; finalize;",
          "  relax u->v: if d+w < dist[v]: update",
          "",
          "Bellman-Ford: relax EVERY edge, V-1 times;",
          "  one more pass relaxes -> negative cycle"
        ],
        "starterCode": {
          "javascript": "// Dijkstra's Algorithm (non-negative weights)\nfunction dijkstra(graph, start) {\n  const dist = {};\n  for (let node in graph) dist[node] = Infinity;\n  dist[start] = 0;\n\n  const pq = [[0, start]]; // [dist, node]\n  const visited = new Set();\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, u] = pq.shift();\n\n    if (visited.has(u)) continue;\n    visited.add(u);\n\n    for (let [v, weight] of graph[u] || []) {\n      if (dist[u] + weight < dist[v]) {\n        dist[v] = dist[u] + weight;\n        pq.push([dist[v], v]);\n      }\n    }\n  }\n\n  return dist;\n}",
          "python": "import heapq\n\ndef dijkstra(graph: dict, start: str) -> dict:\n    dist = {node: float('inf') for node in graph}\n    dist[start] = 0\n    pq = [(0, start)]\n    visited = set()\n\n    while pq:\n        d, u = heapq.heappop(pq)\n        if u in visited:\n            continue\n        visited.add(u)\n\n        for v, weight in graph.get(u, []):\n            if dist[u] + weight < dist[v]:\n                dist[v] = dist[u] + weight\n                heapq.heappush(pq, (dist[v], v))\n\n    return dist"
        },
        "solutionCode": {
          "javascript": "// Dijkstra's Algorithm (non-negative weights)\nfunction dijkstra(graph, start) {\n  const dist = {};\n  for (let node in graph) dist[node] = Infinity;\n  dist[start] = 0;\n\n  const pq = [[0, start]]; // [dist, node]\n  const visited = new Set();\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, u] = pq.shift();\n\n    if (visited.has(u)) continue;\n    visited.add(u);\n\n    for (let [v, weight] of graph[u] || []) {\n      if (dist[u] + weight < dist[v]) {\n        dist[v] = dist[u] + weight;\n        pq.push([dist[v], v]);\n      }\n    }\n  }\n\n  return dist;\n}",
          "python": "import heapq\n\ndef dijkstra(graph: dict, start: str) -> dict:\n    dist = {node: float('inf') for node in graph}\n    dist[start] = 0\n    pq = [(0, start)]\n    visited = set()\n\n    while pq:\n        d, u = heapq.heappop(pq)\n        if u in visited:\n            continue\n        visited.add(u)\n\n        for v, weight in graph.get(u, []):\n            if dist[u] + weight < dist[v]:\n                dist[v] = dist[u] + weight\n                heapq.heappush(pq, (dist[v], v))\n\n    return dist"
        },
        "testCases": [
          {
            "input": [
              "A",
              {
                "A": [
                  [
                    "B",
                    5
                  ],
                  [
                    "C",
                    2
                  ]
                ],
                "B": [
                  [
                    "D",
                    1
                  ]
                ],
                "C": [
                  [
                    "B",
                    1
                  ],
                  [
                    "D",
                    3
                  ]
                ],
                "D": []
              }
            ],
            "expected": {
              "A": 0,
              "B": 3,
              "C": 2,
              "D": 4
            },
            "description": "Dijkstra on 4-node directed weighted graph"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "\"Shortest path\" has three classic tools, and choosing the right one is mostly about the EDGE WEIGHTS. The decision: are the edges unweighted? Use BFS. Weighted but all non-negative? Use Dijkstra. Any negative weights? Use Bellman-Ford. Pick the cheapest tool the weights allow, using a heavier one is correct but wasteful.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH"
            },
            "vars": [
              [
                "source",
                "A"
              ],
              [
                "question",
                "which algorithm?"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Tool 1 — Unweighted (or all weights = 1): BFS finds shortest path in O(V + E) by exploring in concentric rings. \"Shortest\" equals \"fewest edges\". But when weights differ, BFS fails because a path with fewer edges can cost more.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH"
            },
            "vars": [
              [
                "unweighted",
                "BFS O(V + E)"
              ],
              [
                "limitation",
                "fails if weights vary"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Tool 2 — Non-negative weights (all w >= 0): DIJKSTRA's algorithm finds single-source shortest path in O((V + E) log V) with a min-heap. It greedily locks in the nearest unvisited node, guaranteeing its distance is final because no negative edge can later create a cheaper shortcut.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST"
            },
            "vars": [
              [
                "weights >= 0",
                "Dijkstra O(E log V)"
              ],
              [
                "property",
                "greedy lock-in"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Tool 3 — Negative weights allowed: BELLMAN-FORD runs in O(V * E) by relaxing every single edge V - 1 times. It handles negative edges and detects negative cycles (where costs decrease infinitely).",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "BELLMAN-FORD: RELAX ALL EDGES (V-1 PASSES)"
            },
            "vars": [
              [
                "negative w",
                "Bellman-Ford O(V·E)"
              ],
              [
                "detects",
                "negative cycles"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Let's trace Dijkstra from source A: initialize dist = {A:0, B:∞, C:∞, D:∞}. Min-heap = [(0, A)]. Finalize A (dist=0, green).",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "A",
              "visited": [
                "A"
              ],
              "paramBadges": {
                "A": "d=0"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": "∞",
                    "final": false
                  },
                  "C": {
                    "dist": "∞",
                    "final": false
                  },
                  "D": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "A-0"
              ]
            },
            "vars": [
              [
                "finalized",
                "A"
              ],
              [
                "dist[A]",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "RELAX A -> B (weight 5): 0 + 5 = 5 beats B's old ∞. Lower dist[B] to 5 and push it. Notice A->C->B gives B distance 3, cheaper than the direct A->B edge of 5, which a greedy \"take the small edge first\" rule would have missed.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "A",
              "visited": [
                "A"
              ],
              "activeEdges": [
                [
                  "A",
                  "B"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=5"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 5,
                    "final": false
                  },
                  "C": {
                    "dist": "∞",
                    "final": false
                  },
                  "D": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "B-5"
              ]
            },
            "vars": [
              [
                "relax",
                "A->B"
              ],
              [
                "cand",
                5
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "RELAX A -> C (weight 2): 0 + 2 = 2 beats C's old ∞. Lower dist[C] to 2 and push (2, C). Min-heap now holds [(2, C), (5, B)].",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "A",
              "visited": [
                "A"
              ],
              "activeEdges": [
                [
                  "A",
                  "C"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=5",
                "C": "d=2"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 5,
                    "final": false
                  },
                  "C": {
                    "dist": 2,
                    "final": false
                  },
                  "D": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "C-2",
                "B-5"
              ]
            },
            "vars": [
              [
                "relax",
                "A->C"
              ],
              [
                "cand",
                2
              ],
              [
                "min-heap",
                "[(2, C), (5, B)]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop minimum from heap: node C with distance 2. Finalize C (green), its distance 2 is permanent because all remaining edges are non-negative.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "C",
              "visited": [
                "A",
                "C"
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=5",
                "C": "d=2"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 5,
                    "final": false
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "B-5"
              ]
            },
            "vars": [
              [
                "finalize",
                "C"
              ],
              [
                "dist[C]",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "RELAX C -> B (weight 1): dist[C] + 1 = 2 + 1 = 3 < dist[B] (5). Updated! Shorter path found to B via C (A->C->B). Push (3, B) into heap.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "C",
              "visited": [
                "A",
                "C"
              ],
              "activeEdges": [
                [
                  "C",
                  "B"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": false
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "B-3",
                "B-5"
              ]
            },
            "vars": [
              [
                "relax",
                "C->B"
              ],
              [
                "dist[B]",
                "5 -> 3"
              ],
              [
                "shortcut",
                "A->C->B (3)"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "RELAX C -> D (weight 3): dist[C] + 3 = 2 + 3 = 5 < dist[D] (∞). Lower dist[D] to 5, push (5, D). Min-heap now has [(3, B), (5, D), (5, B)].",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "C",
              "visited": [
                "A",
                "C"
              ],
              "activeEdges": [
                [
                  "C",
                  "D"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2",
                "D": "d=5"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": false
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": 5,
                    "final": false
                  }
                }
              },
              "queue": [
                "B-3",
                "D-5"
              ]
            },
            "vars": [
              [
                "relax",
                "C->D"
              ],
              [
                "dist[D]",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop minimum: node B with distance 3. Finalize B (green). RELAX B -> D (weight 1): dist[B] + 1 = 3 + 1 = 4 < dist[D] (5). Updated dist[D] to 4!",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: GREEDY, FINALIZE NEAREST",
              "activeNode": "B",
              "visited": [
                "A",
                "C",
                "B"
              ],
              "activeEdges": [
                [
                  "B",
                  "D"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2",
                "D": "d=4"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": true
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": 4,
                    "final": false
                  }
                }
              },
              "queue": [
                "D-4"
              ]
            },
            "vars": [
              [
                "finalize",
                "B"
              ],
              [
                "dist[D]",
                "5 -> 4"
              ],
              [
                "shortest D",
                "A->C->B->D (4)"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop minimum: node D with distance 4. Finalize D (green). All reachable nodes finalized! Shortest distances from A: {A: 0, B: 3, C: 2, D: 4}.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA: ALL NODES FINALIZED",
              "visited": [
                "A",
                "B",
                "C",
                "D"
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2",
                "D": "d=4"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": true
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": 4,
                    "final": true
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "Dijkstra",
                "complete"
              ],
              [
                "final dists",
                "A:0, B:3, C:2, D:4"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Bellman-Ford has a bonus: run ONE extra pass after the V-1. If any edge still relaxes (a distance still drops), there is a NEGATIVE CYCLE, a loop whose total weight is below zero. Such a cycle has no shortest path at all, because you can keep circling to drive the cost down forever. Dijkstra and BFS cannot detect this; Bellman-Ford reports it.",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "BELLMAN-FORD: ONE EXTRA PASS — NEGATIVE-CYCLE CHECK",
              "visited": [
                "A",
                "B",
                "C",
                "D"
              ],
              "activeEdges": [
                [
                  "A",
                  "C"
                ],
                [
                  "C",
                  "B"
                ],
                [
                  "B",
                  "D"
                ]
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2",
                "D": "d=4"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": true
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": 4,
                    "final": true
                  }
                }
              }
            },
            "vars": [
              [
                "extra pass",
                "relax again"
              ],
              [
                "if still relaxes",
                "negative cycle"
              ]
            ]
          },
          {
            "codeLine": 10,
            "narration": "Summary rule of thumb: Unweighted graph -> BFS (O(V+E)). Non-negative edge weights -> Dijkstra (O(E log V)). Negative edge weights or cycle detection -> Bellman-Ford (O(V*E)). All-pairs shortest paths -> Floyd-Warshall (O(V^3)).",
            "graph": {
              "nodes": [
                {
                  "id": "A",
                  "x": 60,
                  "y": 70
                },
                {
                  "id": "B",
                  "x": 200,
                  "y": 70
                },
                {
                  "id": "C",
                  "x": 130,
                  "y": 190
                },
                {
                  "id": "D",
                  "x": 270,
                  "y": 190
                }
              ],
              "edges": [
                {
                  "from": "A",
                  "to": "B",
                  "weight": 5
                },
                {
                  "from": "A",
                  "to": "C",
                  "weight": 2
                },
                {
                  "from": "C",
                  "to": "B",
                  "weight": 1
                },
                {
                  "from": "C",
                  "to": "D",
                  "weight": 3
                },
                {
                  "from": "B",
                  "to": "D",
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH (COMPLETE)",
              "visited": [
                "A",
                "B",
                "C",
                "D"
              ],
              "paramBadges": {
                "A": "d=0",
                "B": "d=3",
                "C": "d=2",
                "D": "d=4"
              },
              "distTable": {
                "source": "A",
                "nodes": {
                  "A": {
                    "dist": 0,
                    "final": true
                  },
                  "B": {
                    "dist": 3,
                    "final": true
                  },
                  "C": {
                    "dist": 2,
                    "final": true
                  },
                  "D": {
                    "dist": 4,
                    "final": true
                  }
                }
              }
            },
            "vars": [
              [
                "BFS",
                "O(V + E)"
              ],
              [
                "Dijkstra",
                "O(E log V)"
              ],
              [
                "Bellman-Ford",
                "O(V · E)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "network-delay-time",
    "patternId": "graphs",
    "title": "Network Delay Time",
    "subtitle": "Dijkstra · finalize the nearest unfinished node",
    "kind": "problem",
    "leetcode": {
      "id": 743,
      "slug": "network-delay-time",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Microsoft"
    ],
    "statement": "Given a directed weighted graph where each edge gives the travel time of a signal, and a starting node, return the time it takes for the signal to reach every node. If some node is unreachable, return -1.\n\nASKED AT: Amazon Google",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 2,
          "x": 130,
          "y": 50
        },
        {
          "id": 1,
          "x": 50,
          "y": 150
        },
        {
          "id": 3,
          "x": 210,
          "y": 150
        },
        {
          "id": 4,
          "x": 280,
          "y": 70
        }
      ],
      "edges": [
        {
          "from": 2,
          "to": 1,
          "weight": 1
        },
        {
          "from": 2,
          "to": 3,
          "weight": 1
        },
        {
          "from": 3,
          "to": 4,
          "weight": 1
        }
      ],
      "title": "WEIGHTED DIRECTED GRAPH"
    },
    "approaches": [
      {
        "id": "dijkstras-algorithm",
        "label": "Dijkstra's algorithm",
        "complexity": {
          "time": "O(E log V)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "given graph, source",
          "dist[source] = 0, rest = ∞; pq = {(0, source)}",
          "while pq not empty:",
          "  (d, u) = pop min",
          "  if u already done: skip",
          "  mark u done",
          "  for (u -> v, w):",
          "    if d + w < dist[v]: dist[v] = d+w; push",
          "answer = max(dist)  // -1 if any unreachable"
        ],
        "starterCode": {
          "javascript": "function networkDelayTime(times, n, k) {\n  const adj = Array.from({ length: n + 1 }, () => []);\n  for (let [u, v, w] of times) {\n    adj[u].push([v, w]);\n  }\n\n  const dist = new Array(n + 1).fill(Infinity);\n  dist[k] = 0;\n  const pq = [[0, k]];\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, u] = pq.shift();\n    if (d > dist[u]) continue;\n\n    for (let [v, w] of adj[u]) {\n      if (dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n        pq.push([dist[v], v]);\n      }\n    }\n  }\n\n  let maxDist = 0;\n  for (let i = 1; i <= n; i++) {\n    if (dist[i] === Infinity) return -1;\n    maxDist = Math.max(maxDist, dist[i]);\n  }\n  return maxDist;\n}",
          "python": "import heapq\n\ndef networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    adj = {i: [] for i in range(1, n + 1)}\n    for u, v, w in times:\n        adj[u].append((v, w))\n\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[k] = 0\n    pq = [(0, k)]\n\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n\n    max_dist = max(dist.values())\n    return max_dist if max_dist < float('inf') else -1"
        },
        "solutionCode": {
          "javascript": "function networkDelayTime(times, n, k) {\n  const adj = Array.from({ length: n + 1 }, () => []);\n  for (let [u, v, w] of times) {\n    adj[u].push([v, w]);\n  }\n\n  const dist = new Array(n + 1).fill(Infinity);\n  dist[k] = 0;\n  const pq = [[0, k]];\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, u] = pq.shift();\n    if (d > dist[u]) continue;\n\n    for (let [v, w] of adj[u]) {\n      if (dist[u] + w < dist[v]) {\n        dist[v] = dist[u] + w;\n        pq.push([dist[v], v]);\n      }\n    }\n  }\n\n  let maxDist = 0;\n  for (let i = 1; i <= n; i++) {\n    if (dist[i] === Infinity) return -1;\n    maxDist = Math.max(maxDist, dist[i]);\n  }\n  return maxDist;\n}",
          "python": "import heapq\n\ndef networkDelayTime(times: list[list[int]], n: int, k: int) -> int:\n    adj = {i: [] for i in range(1, n + 1)}\n    for u, v, w in times:\n        adj[u].append((v, w))\n\n    dist = {i: float('inf') for i in range(1, n + 1)}\n    dist[k] = 0\n    pq = [(0, k)]\n\n    while pq:\n        d, u = heapq.heappop(pq)\n        if d > dist[u]:\n            continue\n        for v, w in adj[u]:\n            if dist[u] + w < dist[v]:\n                dist[v] = dist[u] + w\n                heapq.heappush(pq, (dist[v], v))\n\n    max_dist = max(dist.values())\n    return max_dist if max_dist < float('inf') else -1"
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
                  2,
                  3,
                  1
                ],
                [
                  3,
                  4,
                  1
                ]
              ],
              4,
              2
            ],
            "expected": 2,
            "description": "Network delay time with n=4 from source k=2"
          },
          {
            "input": [
              [
                [
                  1,
                  2,
                  1
                ]
              ],
              2,
              1
            ],
            "expected": 1,
            "description": "Direct signal from 1 to 2"
          },
          {
            "input": [
              [
                [
                  1,
                  2,
                  1
                ]
              ],
              2,
              2
            ],
            "expected": -1,
            "description": "Unreachable node 1 when starting from 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "A signal starts at node 2 and travels along directed edges; each edge weight is the time to cross it. How long until EVERY node has the signal? That is the largest shortest-path distance from the source, a job for Dijkstra.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": "∞",
                    "final": false
                  },
                  "2": {
                    "dist": "∞",
                    "final": false
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "source",
                2
              ],
              [
                "n",
                4
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize distance table from source 2: dist[2] = 0, and all other distances set to ∞. Push (0, 2) into min-priority queue.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 2,
              "paramBadges": {
                "2": "d=0"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": "∞",
                    "final": false
                  },
                  "2": {
                    "dist": 0,
                    "final": false
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "2-0"
              ]
            },
            "vars": [
              [
                "dist[2]",
                0
              ],
              [
                "pq",
                "[(0, 2)]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min (0, 2) from priority queue. Node 2 is not yet marked done, so mark 2 as done (finalized).",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 2,
              "visited": [
                2
              ],
              "paramBadges": {
                "2": "d=0"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": "∞",
                    "final": false
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "pop",
                "(0, 2)"
              ],
              [
                "finalized",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "RELAX edge 2->1 (weight 1): 0 + 1 = 1 is better than 1's old ∞. Update dist[1] = 1 and push it into the queue.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 2,
              "visited": [
                2
              ],
              "activeEdges": [
                [
                  2,
                  1
                ]
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": false
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "1-1"
              ]
            },
            "vars": [
              [
                "edge",
                "2->1"
              ],
              [
                "new dist",
                1
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "RELAX edge 2->3 (weight 1): 0 + 1 = 1 is better than 3's old ∞. Update dist[3] = 1 and push it into the queue.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 2,
              "visited": [
                2
              ],
              "activeEdges": [
                [
                  2,
                  3
                ]
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": false
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "1-1",
                "3-1"
              ]
            },
            "vars": [
              [
                "edge",
                "2->3"
              ],
              [
                "new dist",
                1
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop min (1, 1) from queue. Mark node 1 done (green). Node 1 has no outgoing edges.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 1,
              "visited": [
                2,
                1
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": false
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": [
                "3-1"
              ]
            },
            "vars": [
              [
                "pop",
                "(1, 1)"
              ],
              [
                "finalized",
                1
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop min (1, 3) from queue. Mark node 3 done (green).",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 3,
              "visited": [
                2,
                1,
                3
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": true
                  },
                  "4": {
                    "dist": "∞",
                    "final": false
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "pop",
                "(1, 3)"
              ],
              [
                "finalized",
                3
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "RELAX edge 3->4 (weight 1): dist[3] + 1 = 1 + 1 = 2 < ∞. Update dist[4] = 2 and push (2, 4) into queue.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 3,
              "visited": [
                2,
                1,
                3
              ],
              "activeEdges": [
                [
                  3,
                  4
                ]
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1",
                "4": "d=2"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": true
                  },
                  "4": {
                    "dist": 2,
                    "final": false
                  }
                }
              },
              "queue": [
                "4-2"
              ]
            },
            "vars": [
              [
                "edge",
                "3->4"
              ],
              [
                "new dist",
                2
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Pop min (2, 4) from queue. Mark node 4 done (green). All 4 nodes are now finalized!",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "activeNode": 4,
              "visited": [
                2,
                1,
                3,
                4
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1",
                "4": "d=2"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": true
                  },
                  "4": {
                    "dist": 2,
                    "final": true
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "pop",
                "(2, 4)"
              ],
              [
                "finalized",
                4
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "All nodes reached! Total signal delay time is max(dist) = max(0, 1, 1, 2) = 2. Return 2.",
            "graph": {
              "nodes": [
                {
                  "id": 2,
                  "x": 130,
                  "y": 50
                },
                {
                  "id": 1,
                  "x": 50,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 210,
                  "y": 150
                },
                {
                  "id": 4,
                  "x": 280,
                  "y": 70
                }
              ],
              "edges": [
                {
                  "from": 2,
                  "to": 1,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                },
                {
                  "from": 3,
                  "to": 4,
                  "weight": 1
                }
              ],
              "title": "WEIGHTED DIRECTED GRAPH",
              "visited": [
                2,
                1,
                3,
                4
              ],
              "paramBadges": {
                "1": "d=1",
                "2": "d=0",
                "3": "d=1",
                "4": "d=2"
              },
              "distTable": {
                "source": 2,
                "title": "SHORTEST DIST FROM 2",
                "nodes": {
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": true
                  },
                  "4": {
                    "dist": 2,
                    "final": true
                  }
                }
              },
              "queue": []
            },
            "vars": [
              [
                "max(dist)",
                2
              ],
              [
                "delay time",
                2
              ],
              [
                "result",
                2
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "cheapest-flights-within-k-stops",
    "patternId": "graphs",
    "title": "Cheapest Flights Within K Stops",
    "subtitle": "Bellman-Ford bounded to K+1 hops",
    "kind": "problem",
    "leetcode": {
      "id": 787,
      "slug": "cheapest-flights-within-k-stops",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Airbnb",
      "Expedia"
    ],
    "statement": "Given flights as directed weighted edges between cities, a source, a destination, and an integer k, return the cheapest total price to travel from source to destination using at most k intermediate stops, or -1 if no such route exists.\n\nASKED AT: Amazon Google",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 0,
          "x": 60,
          "y": 150
        },
        {
          "id": 1,
          "x": 140,
          "y": 70
        },
        {
          "id": 2,
          "x": 220,
          "y": 150
        },
        {
          "id": 3,
          "x": 300,
          "y": 150
        }
      ],
      "edges": [
        {
          "from": 0,
          "to": 1,
          "weight": 100
        },
        {
          "from": 1,
          "to": 2,
          "weight": 100
        },
        {
          "from": 2,
          "to": 3,
          "weight": 100
        },
        {
          "from": 0,
          "to": 2,
          "weight": 500
        },
        {
          "from": 0,
          "to": 3,
          "weight": 500
        }
      ],
      "title": "WEIGHTED DIRECTED FLIGHTS - SRC 0, DST 3, K=1",
      "sourceNode": 0,
      "targetNode": 3
    },
    "approaches": [
      {
        "id": "bounded-bellman-ford",
        "label": "Bounded Bellman-Ford",
        "complexity": {
          "time": "O(K · E)",
          "space": "O(V)"
        },
        "pseudocode": [
          "dist = [∞...]; dist[src] = 0",
          "repeat K+1 times:",
          "  prev = copy(dist)        // freeze last round",
          "  for each (u -> v, w):",
          "    if prev[u] + w < dist[v]:",
          "      dist[v] = prev[u] + w",
          "  // each round adds at most one hop",
          "return dist[dst] (or -1 if ∞)"
        ],
        "starterCode": {
          "javascript": "function findCheapestPrice(n, flights, src, dst, k) {\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n\n  for (let i = 0; i <= k; i++) {\n    const prev = [...dist];\n    for (let [u, v, w] of flights) {\n      if (prev[u] !== Infinity && prev[u] + w < dist[v]) {\n        dist[v] = prev[u] + w;\n      }\n    }\n  }\n\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}",
          "python": "def findCheapestPrice(n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n    dist = [float('inf')] * n\n    dist[src] = 0\n\n    for _ in range(k + 1):\n        prev = dist.copy()\n        for u, v, w in flights:\n            if prev[u] != float('inf') and prev[u] + w < dist[v]:\n                dist[v] = prev[u] + w\n\n    return dist[dst] if dist[dst] != float('inf') else -1"
        },
        "solutionCode": {
          "javascript": "function findCheapestPrice(n, flights, src, dst, k) {\n  let dist = new Array(n).fill(Infinity);\n  dist[src] = 0;\n\n  for (let i = 0; i <= k; i++) {\n    const prev = [...dist];\n    for (let [u, v, w] of flights) {\n      if (prev[u] !== Infinity && prev[u] + w < dist[v]) {\n        dist[v] = prev[u] + w;\n      }\n    }\n  }\n\n  return dist[dst] === Infinity ? -1 : dist[dst];\n}",
          "python": "def findCheapestPrice(n: int, flights: list[list[int]], src: int, dst: int, k: int) -> int:\n    dist = [float('inf')] * n\n    dist[src] = 0\n\n    for _ in range(k + 1):\n        prev = dist.copy()\n        for u, v, w in flights:\n            if prev[u] != float('inf') and prev[u] + w < dist[v]:\n                dist[v] = prev[u] + w\n\n    return dist[dst] if dist[dst] != float('inf') else -1"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  0,
                  1,
                  100
                ],
                [
                  1,
                  2,
                  100
                ],
                [
                  2,
                  3,
                  100
                ],
                [
                  0,
                  2,
                  500
                ],
                [
                  0,
                  3,
                  500
                ]
              ],
              0,
              3,
              1
            ],
            "expected": 500,
            "description": "Cheapest price with at most 1 stop (2 flights)"
          },
          {
            "input": [
              3,
              [
                [
                  0,
                  1,
                  100
                ],
                [
                  1,
                  2,
                  100
                ],
                [
                  0,
                  2,
                  500
                ]
              ],
              0,
              2,
              1
            ],
            "expected": 200,
            "description": "Cheapest price with at most 1 stop taking 2 flights"
          },
          {
            "input": [
              3,
              [
                [
                  0,
                  1,
                  100
                ],
                [
                  1,
                  2,
                  100
                ],
                [
                  0,
                  2,
                  500
                ]
              ],
              0,
              2,
              0
            ],
            "expected": 500,
            "description": "Direct flight with 0 stops"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Cheapest Flights Within K Stops: given flight network, source 0, destination 3, and at most K = 1 intermediate stop. That means we can take at most K + 1 = 2 flights. Standard Dijkstra finds the cheapest path regardless of hops; Bellman-Ford bounded to K+1 rounds guarantees at most K+1 edges.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "WEIGHTED DIRECTED FLIGHTS - SRC 0, DST 3, K=1",
              "paramBadges": {
                "0": "$0"
              },
              "distTable": {
                "source": 0,
                "title": "CHEAPEST COST FROM 0",
                "nodes": {
                  "0": {
                    "dist": 0,
                    "final": true
                  },
                  "1": {
                    "dist": "∞",
                    "final": false
                  },
                  "2": {
                    "dist": "∞",
                    "final": false
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  }
                }
              }
            },
            "vars": [
              [
                "src",
                0
              ],
              [
                "dst",
                3
              ],
              [
                "K (stops)",
                1
              ],
              [
                "max flights",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Bellman-Ford, bounded: dist[src] = 0, every other city ∞. We will run exactly K+1 = 2 rounds. The KEY trick: each round relaxes every edge using ONLY the distances fixed at the END of the previous round. That guarantees each round adds at most ONE more flight, so after r rounds dist[v] = cheapest cost reaching v in <= r flights.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "WEIGHTED DIRECTED FLIGHTS - SRC 0, DST 3, K=1",
              "paramBadges": {
                "0": "$0"
              },
              "distTable": {
                "source": 0,
                "title": "CHEAPEST COST FROM 0",
                "nodes": {
                  "0": {
                    "dist": 0,
                    "final": true
                  },
                  "1": {
                    "dist": "∞",
                    "final": false
                  },
                  "2": {
                    "dist": "∞",
                    "final": false
                  },
                  "3": {
                    "dist": "∞",
                    "final": false
                  }
                }
              }
            },
            "vars": [
              [
                "dist[0]",
                0
              ],
              [
                "rounds to run",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "ROUND 1 (at most 1 flight): copy prev = [0, ∞, ∞, ∞]. Now relax all flights using prev.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - 1 FLIGHT MAXIMUM",
              "paramBadges": {
                "0": "$0"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": "∞"
                  },
                  "2": {
                    "prev": "∞",
                    "dist": "∞"
                  },
                  "3": {
                    "prev": "∞",
                    "dist": "∞"
                  }
                }
              }
            },
            "vars": [
              [
                "round",
                "1 / 2"
              ],
              [
                "prev",
                "[0, ∞, ∞, ∞]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 1, relax flight 0 -> 1 (cost 100): prev[0] + 100 = 0 + 100 = 100 < dist[1] (∞). Update dist[1] = 100.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - RELAX 0->1",
              "activeNode": 0,
              "activeEdges": [
                [
                  0,
                  1
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": "∞"
                  },
                  "3": {
                    "prev": "∞",
                    "dist": "∞"
                  }
                }
              },
              "relaxedEdges": [
                [
                  0,
                  1
                ]
              ],
              "candidateNodes": [
                1
              ]
            },
            "vars": [
              [
                "flight",
                "0->1"
              ],
              [
                "cost",
                "$100"
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 1, relax flight 0 -> 2 (cost 500): prev[0] + 500 = 0 + 500 = 500 < dist[2] (∞). Update dist[2] = 500.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - RELAX 0->2",
              "activeNode": 0,
              "activeEdges": [
                [
                  0,
                  2
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": 500
                  },
                  "3": {
                    "prev": "∞",
                    "dist": "∞"
                  }
                }
              },
              "relaxedEdges": [
                [
                  0,
                  2
                ]
              ],
              "candidateNodes": [
                2
              ]
            },
            "vars": [
              [
                "flight",
                "0->2"
              ],
              [
                "cost",
                "$500"
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 1, relax flight 0 -> 3 (cost 500): prev[0] + 500 = 0 + 500 = 500 < dist[3] (∞). Update dist[3] = 500.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - RELAX 0->3",
              "activeNode": 0,
              "activeEdges": [
                [
                  0,
                  3
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": 500
                  },
                  "3": {
                    "prev": "∞",
                    "dist": 500
                  }
                }
              },
              "relaxedEdges": [
                [
                  0,
                  3
                ]
              ],
              "candidateNodes": [
                3
              ]
            },
            "vars": [
              [
                "flight",
                "0->3"
              ],
              [
                "cost",
                "$500"
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 1, inspect flight 1 -> 2 (cost 100): prev[1] is ∞ (at start of round 1), so prev[1] + 100 = ∞. We do NOT relax 1->2 in round 1, preventing chaining 2 flights into 1 round!",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - CANNOT CHAIN 1->2 YET",
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": 500
                  },
                  "3": {
                    "prev": "∞",
                    "dist": 500
                  }
                }
              },
              "skippedEdges": [
                [
                  1,
                  2
                ]
              ],
              "candidateNodes": [
                2
              ]
            },
            "vars": [
              [
                "prev[1]",
                "∞"
              ],
              [
                "cannot chain",
                "true"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 1, inspect flight 2 -> 3 (cost 100): prev[2] is ∞ at start of round 1, so no relaxation.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 - CANNOT CHAIN 2->3 YET",
              "activeEdges": [
                [
                  2,
                  3
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": 500
                  },
                  "3": {
                    "prev": "∞",
                    "dist": 500
                  }
                }
              },
              "skippedEdges": [
                [
                  2,
                  3
                ]
              ],
              "candidateNodes": [
                3
              ]
            },
            "vars": [
              [
                "prev[2]",
                "∞"
              ],
              [
                "cannot chain",
                "true"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "End of Round 1: Cities reachable in <= 1 flight are {0: 0, 1: 100, 2: 500, 3: 500}.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 1 COMPLETE (1 FLIGHT)",
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": "∞",
                    "dist": 100
                  },
                  "2": {
                    "prev": "∞",
                    "dist": 500
                  },
                  "3": {
                    "prev": "∞",
                    "dist": 500
                  }
                }
              }
            },
            "vars": [
              [
                "round 1 done",
                "[0, 100, 500, 500]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "ROUND 2 (at most 2 flights): copy prev = [0, 100, 500, 500]. Now relax all flights using prev.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 2 - AT MOST 2 FLIGHTS (K=1 STOP)",
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$500",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 500
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              }
            },
            "vars": [
              [
                "round",
                "2 / 2"
              ],
              [
                "prev",
                "[0, 100, 500, 500]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 2, relax flight 1 -> 2 (cost 100): prev[1] + 100 = 100 + 100 = 200 < dist[2] (500). Lower dist[2] from 500 to 200!",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 2 - RELAX 1->2",
              "activeNode": 1,
              "activeEdges": [
                [
                  1,
                  2
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$200",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 200
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              },
              "relaxedEdges": [
                [
                  1,
                  2
                ]
              ],
              "candidateNodes": [
                2
              ]
            },
            "vars": [
              [
                "flight",
                "1->2"
              ],
              [
                "new cost",
                "$200"
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Round 2, relax flight 2 -> 3 (cost 100): prev[2] + 100 = 500 + 100 = 600 > dist[3] (500). Not cheaper, leave dist[3] = 500. (Notice: 2's new cost 200 cannot be used until round 3, which would exceed K=1 stops!).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 2 - RELAX 2->3",
              "activeNode": 2,
              "activeEdges": [
                [
                  2,
                  3
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$200",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 200
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              },
              "skippedEdges": [
                [
                  2,
                  3
                ]
              ],
              "candidateNodes": [
                3
              ]
            },
            "vars": [
              [
                "flight",
                "2->3"
              ],
              [
                "prev[2] + w",
                "500 + 100 = 600"
              ],
              [
                "dist[3]",
                500
              ],
              [
                "updated?",
                "✗"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Edge 0->3 (cost 500): 0 + 500 = 500 is NOT cheaper than 3's current 500. Leave it.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "ROUND 2 - RELAX 0->3",
              "activeEdges": [
                [
                  0,
                  3
                ]
              ],
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$200",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 200
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              },
              "skippedEdges": [
                [
                  0,
                  3
                ]
              ],
              "candidateNodes": [
                3
              ]
            },
            "vars": [
              [
                "edge",
                "0->3"
              ],
              [
                "prev[u] + w",
                "0 + 500"
              ],
              [
                "candidate",
                500
              ],
              [
                "updated?",
                "-"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All K + 1 = 2 rounds complete. Reached destination 3 in <= 2 flights with minimum cost = 500. Even though 0 -> 1 -> 2 -> 3 costs 300, it requires 3 flights (2 stops > K=1), so it is invalid.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "BOUNDED BELLMAN-FORD COMPLETE (K=1)",
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$200",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 200
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              }
            },
            "vars": [
              [
                "flights <= 2",
                500
              ],
              [
                "valid path",
                "0 -> 3 ($500)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Return dist[dst] = dist[3] = 500. Bounded Bellman-Ford finishes in O(K * E) time and O(V) space.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 300,
                  "y": 150
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 100
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 100
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 100
                },
                {
                  "from": 0,
                  "to": 2,
                  "weight": 500
                },
                {
                  "from": 0,
                  "to": 3,
                  "weight": 500
                }
              ],
              "title": "FINAL RESULT: $500",
              "paramBadges": {
                "0": "$0",
                "1": "$100",
                "2": "$200",
                "3": "$500"
              },
              "distTable": {
                "title": "DIST (PREV -> CURR)",
                "nodes": {
                  "0": {
                    "prev": 0,
                    "dist": 0
                  },
                  "1": {
                    "prev": 100,
                    "dist": 100
                  },
                  "2": {
                    "prev": 500,
                    "dist": 200
                  },
                  "3": {
                    "prev": 500,
                    "dist": 500
                  }
                }
              }
            },
            "vars": [
              [
                "cheapest cost",
                500
              ],
              [
                "result",
                500
              ],
              [
                "time",
                "O(K · E)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "path-with-minimum-effort",
    "patternId": "graphs",
    "title": "Path With Minimum Effort",
    "subtitle": "Dijkstra on a grid · minimize the max step",
    "kind": "problem",
    "leetcode": {
      "id": 1631,
      "slug": "path-with-minimum-effort",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Amazon",
      "Meta"
    ],
    "statement": "Given a grid of cell heights, travel from the top-left to the bottom-right moving in four directions. A path's effort is the maximum absolute height difference between consecutive cells; return the minimum possible effort over all paths.\n\nASKED AT: Amazon Google",
    "visualType": "matrix",
    "initialInput": [
      [
        1,
        2,
        2
      ],
      [
        3,
        8,
        2
      ],
      [
        5,
        3,
        5
      ]
    ],
    "approaches": [
      {
        "id": "dijkstra-minimize-max-edge",
        "label": "Dijkstra (minimize max edge)",
        "complexity": {
          "time": "O(R·C·log(R·C))",
          "space": "O(R·C)"
        },
        "pseudocode": [
          "effort[*] = ∞; effort[0][0] = 0",
          "pq = {(0, (0,0))}",
          "while pq not empty:",
          "  (e, cell) = pop min effort",
          "  if cell settled: skip; mark settled",
          "  if cell == target: return e",
          "  for each neighbour:",
          "    cand = max(e, |Δheight|)",
          "    if cand < effort[nbr]: update; push"
        ],
        "starterCode": {
          "javascript": "function minimumEffortPath(heights) {\n  const R = heights.length;\n  const C = heights[0].length;\n  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));\n  dist[0][0] = 0;\n\n  const pq = [[0, 0, 0]]; // [effort, r, c]\n  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, r, c] = pq.shift();\n\n    if (r === R - 1 && c === C - 1) return d;\n    if (d > dist[r][c]) continue;\n\n    for (let [dr, dc] of dirs) {\n      const nr = r + dr;\n      const nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n        const nextEffort = Math.max(d, Math.abs(heights[nr][nc] - heights[r][c]));\n        if (nextEffort < dist[nr][nc]) {\n          dist[nr][nc] = nextEffort;\n          pq.push([nextEffort, nr, nc]);\n        }\n      }\n    }\n  }\n\n  return 0;\n}",
          "python": "import heapq\n\ndef minimumEffortPath(heights: list[list[int]]) -> int:\n    R, C = len(heights), len(heights[0])\n    dist = [[float('inf')] * C for _ in range(R)]\n    dist[0][0] = 0\n    pq = [(0, 0, 0)] # (effort, r, c)\n\n    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]\n\n    while pq:\n        d, r, c = heapq.heappop(pq)\n        if r == R - 1 and c == C - 1:\n            return d\n        if d > dist[r][c]:\n            continue\n\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C:\n                next_effort = max(d, abs(heights[nr][nc] - heights[r][c]))\n                if next_effort < dist[nr][nc]:\n                    dist[nr][nc] = next_effort\n                    heapq.heappush(pq, (next_effort, nr, nc))\n\n    return 0"
        },
        "solutionCode": {
          "javascript": "function minimumEffortPath(heights) {\n  const R = heights.length;\n  const C = heights[0].length;\n  const dist = Array.from({ length: R }, () => new Array(C).fill(Infinity));\n  dist[0][0] = 0;\n\n  const pq = [[0, 0, 0]]; // [effort, r, c]\n  const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n\n  while (pq.length > 0) {\n    pq.sort((a, b) => a[0] - b[0]);\n    const [d, r, c] = pq.shift();\n\n    if (r === R - 1 && c === C - 1) return d;\n    if (d > dist[r][c]) continue;\n\n    for (let [dr, dc] of dirs) {\n      const nr = r + dr;\n      const nc = c + dc;\n      if (nr >= 0 && nr < R && nc >= 0 && nc < C) {\n        const nextEffort = Math.max(d, Math.abs(heights[nr][nc] - heights[r][c]));\n        if (nextEffort < dist[nr][nc]) {\n          dist[nr][nc] = nextEffort;\n          pq.push([nextEffort, nr, nc]);\n        }\n      }\n    }\n  }\n\n  return 0;\n}",
          "python": "import heapq\n\ndef minimumEffortPath(heights: list[list[int]]) -> int:\n    R, C = len(heights), len(heights[0])\n    dist = [[float('inf')] * C for _ in range(R)]\n    dist[0][0] = 0\n    pq = [(0, 0, 0)] # (effort, r, c)\n\n    dirs = [(0, 1), (0, -1), (1, 0), (-1, 0)]\n\n    while pq:\n        d, r, c = heapq.heappop(pq)\n        if r == R - 1 and c == C - 1:\n            return d\n        if d > dist[r][c]:\n            continue\n\n        for dr, dc in dirs:\n            nr, nc = r + dr, c + dc\n            if 0 <= nr < R and 0 <= nc < C:\n                next_effort = max(d, abs(heights[nr][nc] - heights[r][c]))\n                if next_effort < dist[nr][nc]:\n                    dist[nr][nc] = next_effort\n                    heapq.heappush(pq, (next_effort, nr, nc))\n\n    return 0"
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
                  8,
                  2
                ],
                [
                  5,
                  3,
                  5
                ]
              ]
            ],
            "expected": 2,
            "description": "3x3 grid with minimum effort 2"
          },
          {
            "input": [
              [
                [
                  1,
                  2,
                  3
                ],
                [
                  3,
                  8,
                  4
                ],
                [
                  5,
                  3,
                  5
                ]
              ]
            ],
            "expected": 1,
            "description": "Route with effort 1"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Travel from the top-left (0,0) to the bottom-right (2,2). A path's \"effort\" is the LARGEST absolute height difference between any two consecutive cells on it. We want the path whose largest step is as small as possible. Re-frame: give each cell a cost = the minimum possible max-step to reach it, then run Dijkstra: the priority queue always pops the lowest-effort cell, and edge \"weight\" = max(current effort, |height diff|).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                "src",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "src"
              }
            ],
            "pq": [],
            "vars": [
              [
                "size",
                "3 × 3"
              ],
              [
                "start",
                "(0,0)"
              ],
              [
                "target",
                "(2,2)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize effort table with ∞ and effort[0][0] = 0. Push initial state (0, (0,0)) into priority queue.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "active"
              }
            ],
            "pq": [
              {
                "cell": "(0,0)",
                "eff": 0
              }
            ],
            "vars": [
              [
                "effort[0][0]",
                0
              ],
              [
                "pq",
                "[(0, (0,0))]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop lowest effort cell (0,0) with effort 0.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                "pop",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "pop"
              }
            ],
            "pq": [],
            "vars": [
              [
                "popped",
                "(0,0)"
              ],
              [
                "effort",
                0
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Cell (0,0) is finalized / settled (green). Now relax its four neighbors.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              }
            ],
            "pq": [],
            "vars": [
              [
                "settled",
                "(0,0)"
              ],
              [
                "total settled",
                1
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Neighbor (0,1): |2 - 1| = 1, cand = max(0, 1) = 1 < ∞. Update effort[0][1] = 1, push (1, (0,1)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(0,1)",
                "eff": 1
              }
            ],
            "vars": [
              [
                "nbr",
                "(0,1)"
              ],
              [
                "cand",
                1
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Neighbor (1,0): |3 - 1| = 2, cand = max(0, 2) = 2 < ∞. Update effort[1][0] = 2, push (2, (1,0)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                "∞"
              ],
              [
                2,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(0,1)",
                "eff": 1
              },
              {
                "cell": "(1,0)",
                "eff": 2
              }
            ],
            "vars": [
              [
                "nbr",
                "(1,0)"
              ],
              [
                "cand",
                2
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min effort cell (0,1) at effort 1 from priority queue.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                "pop",
                "∞"
              ],
              [
                2,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "pop"
              }
            ],
            "pq": [
              {
                "cell": "(1,0)",
                "eff": 2
              }
            ],
            "vars": [
              [
                "popped",
                "(0,1)"
              ],
              [
                "effort",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Settle cell (0,1) with effort 1 (green). Relax its neighbors.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                "∞"
              ],
              [
                2,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              }
            ],
            "pq": [
              {
                "cell": "(1,0)",
                "eff": 2
              }
            ],
            "vars": [
              [
                "settled",
                "(0,1)"
              ],
              [
                "total settled",
                2
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Neighbor (0,2): |2 - 2| = 0, cand = max(1, 0) = 1 < ∞. Update effort[0][2] = 1, push (1, (0,2)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                "∞",
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(0,2)",
                "eff": 1
              },
              {
                "cell": "(1,0)",
                "eff": 2
              }
            ],
            "vars": [
              [
                "nbr",
                "(0,2)"
              ],
              [
                "cand",
                1
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Neighbor (1,1): |8 - 2| = 6, cand = max(1, 6) = 6 < ∞. Update effort[1][1] = 6, push (6, (1,1)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                "∞"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 1,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(0,2)",
                "eff": 1
              },
              {
                "cell": "(1,0)",
                "eff": 2
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(1,1)"
              ],
              [
                "cand",
                6
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop the lowest-effort cell (0,2) at effort 1. FINALIZE it (green), any other route here would have to leave through an already-settled cell whose effort is >= 1, so it can't do better. Now relax its four neighbours.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                "pop"
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "pop"
              }
            ],
            "pq": [
              {
                "cell": "(1,0)",
                "eff": 2
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "popped",
                "(1,2)"
              ],
              [
                "effort",
                1
              ],
              [
                "settled",
                4
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Neighbor (1,2): |2 - 2| = 0, cand = max(1, 0) = 1 < ∞. Update effort[1][2] = 1, push (1, (1,2)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                1
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(1,2)",
                "eff": 1
              },
              {
                "cell": "(1,0)",
                "eff": 2
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(1,2)"
              ],
              [
                "cand",
                1
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min effort cell (1,2) at effort 1. Settle (1,2) in green.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                1
              ],
              [
                "∞",
                "∞",
                "∞"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              }
            ],
            "pq": [
              {
                "cell": "(1,0)",
                "eff": 2
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "popped",
                "(1,2)"
              ],
              [
                "effort",
                1
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "From (1,2), inspect neighbor (2,2): |5 - 2| = 3, cand = max(1, 3) = 3 < ∞. Update effort[2][2] = 3, push (3, (2,2)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                1
              ],
              [
                "∞",
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 2,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(1,0)",
                "eff": 2
              },
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(2,2)"
              ],
              [
                "cand",
                3
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min effort cell (1,0) at effort 2.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                "pop",
                6,
                1
              ],
              [
                "∞",
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "pop"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "popped",
                "(1,0)"
              ],
              [
                "effort",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Settle cell (1,0) at effort 2 (green). Relax its neighbors.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                1
              ],
              [
                "∞",
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "settled",
                "(1,0)"
              ],
              [
                "effort",
                2
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "From (1,0), relax neighbor (2,0): |5 - 3| = 2, cand = max(2, 2) = 2 < ∞. Update effort[2][0] = 2, push (2, (2,0)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                6,
                1
              ],
              [
                2,
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(2,0)",
                "eff": 2
              },
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(2,0)"
              ],
              [
                "cand",
                2
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "From (1,0), relax neighbor (1,1): |8 - 3| = 5, cand = max(2, 5) = 5 < 6. Update effort[1][1] = 5, push (5, (1,1)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 1,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(2,0)",
                "eff": 2
              },
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(1,1)"
              ],
              [
                "cand",
                5
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min effort cell (2,0) at effort 2. Settle (2,0) in green.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                "∞",
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "settled"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "popped",
                "(2,0)"
              ],
              [
                "effort",
                2
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "From (2,0), relax neighbor (2,1): |3 - 5| = 2, cand = max(2, 2) = 2 < ∞. Update effort[2][1] = 2, push (2, (2,1)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                2,
                3
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 1,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(2,1)",
                "eff": 2
              },
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "nbr",
                "(2,1)"
              ],
              [
                "cand",
                2
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Neighbour (2,2): the step from height 3 to 5 is |Δ| = 2. The effort to reach it via here is max(2, 2) = 2, which beats its old ∞ (or 3). Update effort[2][2] = 2 and push it.",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                "pop",
                "nbr"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 1,
                "status": "pop"
              },
              {
                "r": 2,
                "c": 2,
                "status": "nbr"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 2
              },
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "edge",
                "(2,1)->(2,2)"
              ],
              [
                "max(e, |Δ|)",
                "max(2, 2) = 2"
              ],
              [
                "updated?",
                "✓"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Pop min effort cell (2,2) at effort 2 from queue. We have reached target (2,2)!",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                2,
                "dst"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 2,
                "status": "dst"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "target reached",
                "(2,2)"
              ],
              [
                "min effort",
                2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "The bottom-right cell is settled at effort 2, so we stop. The optimal route is 0->2->2->5->3->5 reading along (0,0)->(0,1)->(0,2)->(1,2)->(2,2) refined to a max single-step of 2; every alternative forces a bigger jump (e.g. through the 8 costs 5, or the direct down-column hits |1-3|=2 then |3-5|=2). Answer = 2 (expected 2; verified ✓). Dijkstra on R·C cells runs in O(R·C·log(R·C)).",
            "customVisual": {
              "label": "3 × 3 EFFORT GRID · CELL = BEST MAX-DIFF TO REACH IT"
            },
            "matrix": [
              [
                0,
                1,
                1
              ],
              [
                2,
                5,
                1
              ],
              [
                2,
                2,
                "dst"
              ]
            ],
            "gridHighlights": [
              {
                "r": 0,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 0,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 2,
                "status": "settled"
              },
              {
                "r": 1,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 0,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 1,
                "status": "settled"
              },
              {
                "r": 2,
                "c": 2,
                "status": "settled"
              }
            ],
            "pq": [
              {
                "cell": "(2,2)",
                "eff": 3
              },
              {
                "cell": "(1,1)",
                "eff": 5
              },
              {
                "cell": "(1,1)",
                "eff": 6
              }
            ],
            "vars": [
              [
                "answer",
                2
              ],
              [
                "verified",
                "true"
              ],
              [
                "time",
                "O(R·C·log(R·C))"
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
  {
    "id": "find-the-city-with-fewest-reachable",
    "patternId": "graphs",
    "title": "Find the City With Fewest Reachable",
    "subtitle": "Floyd-Warshall all-pairs, then count",
    "kind": "problem",
    "leetcode": {
      "id": 1334,
      "slug": "find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft"
    ],
    "statement": "Given an undirected weighted graph of cities and a distance threshold, find the city that can reach the fewest other cities within the threshold distance. If several cities tie, return the one with the largest index.\n\nASKED AT: Amazon Google",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        {
          "id": 0,
          "x": 60,
          "y": 150
        },
        {
          "id": 1,
          "x": 140,
          "y": 150
        },
        {
          "id": 3,
          "x": 220,
          "y": 70
        },
        {
          "id": 2,
          "x": 220,
          "y": 230
        }
      ],
      "edges": [
        {
          "from": 0,
          "to": 1,
          "weight": 3
        },
        {
          "from": 1,
          "to": 3,
          "weight": 4
        },
        {
          "from": 1,
          "to": 2,
          "weight": 1
        },
        {
          "from": 2,
          "to": 3,
          "weight": 1
        }
      ],
      "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4"
    },
    "approaches": [
      {
        "id": "floyd-warshall-count",
        "label": "Floyd-Warshall + count",
        "complexity": {
          "time": "O(V³)",
          "space": "O(V²)"
        },
        "pseudocode": [
          "dist[i][j] = w (edges), 0 (i==j), ∞ else",
          "for k in 0..n-1:",
          "  for i, j:",
          "    if dist[i][k] + dist[k][j] < dist[i][j]:",
          "      dist[i][j] = dist[i][k] + dist[k][j]",
          "// score cities",
          "for each city i:",
          "  count j with dist[i][j] <= threshold",
          "pick fewest count; tie -> largest index"
        ],
        "starterCode": {
          "javascript": "function findTheCity(n, edges, distanceThreshold) {\n  const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));\n  for (let i = 0; i < n; i++) dist[i][i] = 0;\n\n  for (let [u, v, w] of edges) {\n    dist[u][v] = w;\n    dist[v][u] = w;\n  }\n\n  for (let k = 0; k < n; k++) {\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < n; j++) {\n        if (dist[i][k] + dist[k][j] < dist[i][j]) {\n          dist[i][j] = dist[i][k] + dist[k][j];\n        }\n      }\n    }\n  }\n\n  let minCount = Infinity;\n  let bestCity = -1;\n\n  for (let i = 0; i < n; i++) {\n    let count = 0;\n    for (let j = 0; j < n; j++) {\n      if (i !== j && dist[i][j] <= distanceThreshold) {\n        count++;\n      }\n    }\n    if (count <= minCount) {\n      minCount = count;\n      bestCity = i;\n    }\n  }\n\n  return bestCity;\n}",
          "python": "def findTheCity(n: int, edges: list[list[int]], distanceThreshold: int) -> int:\n    dist = [[float('inf')] * n for _ in range(n)]\n    for i in range(n):\n        dist[i][i] = 0\n\n    for u, v, w in edges:\n        dist[u][v] = w\n        dist[v][u] = w\n\n    for k in range(n):\n        for i in range(n):\n            for j in range(n):\n                if dist[i][k] + dist[k][j] < dist[i][j]:\n                    dist[i][j] = dist[i][k] + dist[k][j]\n\n    min_count = float('inf')\n    best_city = -1\n\n    for i in range(n):\n        count = sum(1 for j in range(n) if i != j and dist[i][j] <= distanceThreshold)\n        if count <= min_count:\n            min_count = count\n            best_city = i\n\n    return best_city"
        },
        "solutionCode": {
          "javascript": "function findTheCity(n, edges, distanceThreshold) {\n  const dist = Array.from({ length: n }, () => new Array(n).fill(Infinity));\n  for (let i = 0; i < n; i++) dist[i][i] = 0;\n\n  for (let [u, v, w] of edges) {\n    dist[u][v] = w;\n    dist[v][u] = w;\n  }\n\n  for (let k = 0; k < n; k++) {\n    for (let i = 0; i < n; i++) {\n      for (let j = 0; j < n; j++) {\n        if (dist[i][k] + dist[k][j] < dist[i][j]) {\n          dist[i][j] = dist[i][k] + dist[k][j];\n        }\n      }\n    }\n  }\n\n  let minCount = Infinity;\n  let bestCity = -1;\n\n  for (let i = 0; i < n; i++) {\n    let count = 0;\n    for (let j = 0; j < n; j++) {\n      if (i !== j && dist[i][j] <= distanceThreshold) {\n        count++;\n      }\n    }\n    if (count <= minCount) {\n      minCount = count;\n      bestCity = i;\n    }\n  }\n\n  return bestCity;\n}",
          "python": "def findTheCity(n: int, edges: list[list[int]], distanceThreshold: int) -> int:\n    dist = [[float('inf')] * n for _ in range(n)]\n    for i in range(n):\n        dist[i][i] = 0\n\n    for u, v, w in edges:\n        dist[u][v] = w\n        dist[v][u] = w\n\n    for k in range(n):\n        for i in range(n):\n            for j in range(n):\n                if dist[i][k] + dist[k][j] < dist[i][j]:\n                    dist[i][j] = dist[i][k] + dist[k][j]\n\n    min_count = float('inf')\n    best_city = -1\n\n    for i in range(n):\n        count = sum(1 for j in range(n) if i != j and dist[i][j] <= distanceThreshold)\n        if count <= min_count:\n            min_count = count\n            best_city = i\n\n    return best_city"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  0,
                  1,
                  3
                ],
                [
                  1,
                  2,
                  1
                ],
                [
                  1,
                  3,
                  4
                ],
                [
                  2,
                  3,
                  1
                ]
              ],
              4
            ],
            "expected": 3,
            "description": "4 cities with threshold 4 returns city 3"
          },
          {
            "input": [
              5,
              [
                [
                  0,
                  1,
                  2
                ],
                [
                  0,
                  4,
                  8
                ],
                [
                  1,
                  2,
                  3
                ],
                [
                  1,
                  4,
                  2
                ],
                [
                  2,
                  3,
                  1
                ],
                [
                  3,
                  4,
                  1
                ]
              ],
              2
            ],
            "expected": 0,
            "description": "5 cities with threshold 2 returns city 0"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "For every city, count how many OTHER cities it can reach with a shortest-path distance <= 4. Then return the city with the FEWEST reachable neighbours; if several tie, return the one with the LARGEST index. We need shortest paths between ALL pairs, perfect for Floyd-Warshall.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    "∞",
                    "∞"
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    "∞",
                    1,
                    0,
                    1
                  ],
                  [
                    "∞",
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "n",
                4
              ],
              [
                "threshold",
                4
              ],
              [
                "tie-break",
                "largest id"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Floyd-Warshall Round k = 0: try routing all paths through intermediate city 0. (No shortcuts found through 0 for other pairs).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 0,
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=0)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    "∞",
                    "∞"
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    "∞",
                    1,
                    0,
                    1
                  ],
                  [
                    "∞",
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "k (pivot)",
                0
              ],
              [
                "updates",
                "none"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Floyd-Warshall Round k = 1: try routing all paths through intermediate city 1.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 1,
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=1)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    "∞",
                    "∞"
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    "∞",
                    1,
                    0,
                    1
                  ],
                  [
                    "∞",
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "k (pivot)",
                1
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pair (0, 2) through pivot 1: dist[0][1] + dist[1][2] = 3 + 1 = 4 < ∞. Update dist[0][2] = 4 and dist[2][0] = 4.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 1,
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
              "relaxedEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  2
                ]
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=1)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "activeCell": [
                  0,
                  2
                ],
                "grid": [
                  [
                    0,
                    3,
                    4,
                    "∞"
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    "∞",
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "pair",
                "(0, 2)"
              ],
              [
                "via k=1",
                "3 + 1 = 4"
              ],
              [
                "dist[0][2]",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pair (0, 3) through pivot 1: dist[0][1] + dist[1][3] = 3 + 4 = 7 < ∞. Update dist[0][3] = 7 and dist[3][0] = 7.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 1,
              "activeEdges": [
                [
                  0,
                  1
                ],
                [
                  1,
                  3
                ]
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=1)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "activeCell": [
                  0,
                  3
                ],
                "grid": [
                  [
                    0,
                    3,
                    4,
                    7
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    7,
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "pair",
                "(0, 3)"
              ],
              [
                "via k=1",
                "3 + 4 = 7"
              ],
              [
                "dist[0][3]",
                7
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Floyd-Warshall Round k = 2: try routing all paths through intermediate city 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 2,
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=2)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    7
                  ],
                  [
                    3,
                    0,
                    1,
                    4
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    7,
                    4,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "k (pivot)",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pair (1, 3) through pivot 2: dist[1][2] + dist[2][3] = 1 + 1 = 2 < old dist[1][3] (4). Shortcut found: 1->2->3 costs 2! Update dist[1][3] = 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 2,
              "activeEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "relaxedEdges": [
                [
                  1,
                  2
                ],
                [
                  2,
                  3
                ]
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (k=2)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "activeCell": [
                  1,
                  3
                ],
                "grid": [
                  [
                    0,
                    3,
                    4,
                    7
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    7,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "pair",
                "(1, 3)"
              ],
              [
                "via k=2",
                "1 + 1 = 2"
              ],
              [
                "dist[1][3]",
                "4 -> 2"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Pair (0, 3): going 0->2->3 costs 4 + 1 = 5, which beats the old dist[0][3] = 7. Update it to 5.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "0->2->3 = 5",
              "activeNode": 2,
              "activeEdges": [
                [
                  2,
                  3
                ]
              ],
              "relaxedEdges": [
                [
                  2,
                  3
                ]
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "activeCell": [
                  0,
                  3
                ],
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "pair",
                "(0, 3)"
              ],
              [
                "via k",
                "4 + 1"
              ],
              [
                "old -> new",
                "7 -> 5"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Floyd-Warshall Round k = 3: try routing through intermediate city 3. All shortest paths are already minimal!",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "activeNode": 3,
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX (FINAL)",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "k (pivot)",
                3
              ],
              [
                "matrix",
                "fully relaxed"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Now SCORE each city by counting how many other cities it reaches with distance <= threshold (4).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "UNDIRECTED WEIGHTED · THRESHOLD = 4",
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "scoring phase",
                "count <= 4"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "City 0: distances are {1: 3, 2: 4, 3: 5}. Cities within distance 4 are {1, 2} (3 and 4 <= 4) -> count = 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "CITY 0 REACHES 2 WITHIN 4",
              "activeNode": 0,
              "visited": [
                0,
                1,
                2
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "city",
                0
              ],
              [
                "reachable <= 4",
                "{1, 2}"
              ],
              [
                "count",
                2
              ],
              [
                "best so far",
                "city 0 (2)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "City 1: distances are {0: 3, 2: 1, 3: 2}. ALL other cities {0, 2, 3} are within distance 4 (3, 1, 2 <= 4) -> count = 3.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "CITY 1 REACHES 3 WITHIN 4",
              "activeNode": 1,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "city",
                1
              ],
              [
                "reachable <= 4",
                "{0, 2, 3}"
              ],
              [
                "count",
                3
              ],
              [
                "best so far",
                "city 0 (2)"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "City 2: distances are {0: 4, 1: 1, 3: 1}. ALL other cities {0, 1, 3} are within distance 4 (4, 1, 1 <= 4) -> count = 3.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "CITY 2 REACHES 3 WITHIN 4",
              "activeNode": 2,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "city",
                2
              ],
              [
                "reachable <= 4",
                "{0, 1, 3}"
              ],
              [
                "count",
                3
              ],
              [
                "best so far",
                "city 0 (2)"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "City 3: cities within distance 4 are {1, 2} -> count = 2. This ties or beats the current best (and since ties go to the LARGER index, city 3 takes the lead) -> best city = 3, count 2.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "CITY 3 REACHES 2 WITHIN 4",
              "activeNode": 3,
              "visited": [
                1,
                2,
                3
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "city",
                3
              ],
              [
                "within threshold",
                2
              ],
              [
                "best so far",
                "city 3 (2)"
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Comparison complete: City 0 reaches 2 cities, City 1 reaches 3, City 2 reaches 3, City 3 reaches 2. Cities 0 and 3 tie with 2 cities; tie-breaker picks the larger index: return 3.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "RESULT: CITY 3 (FEWEST REACHABLE: 2)",
              "activeNode": 3,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "distMatrix": {
                "title": "ALL-PAIRS DISTANCE MATRIX",
                "headers": [
                  0,
                  1,
                  2,
                  3
                ],
                "threshold": 4,
                "grid": [
                  [
                    0,
                    3,
                    4,
                    5
                  ],
                  [
                    3,
                    0,
                    1,
                    2
                  ],
                  [
                    4,
                    1,
                    0,
                    1
                  ],
                  [
                    5,
                    2,
                    1,
                    0
                  ]
                ]
              }
            },
            "vars": [
              [
                "scores",
                "0: 2, 1: 3, 2: 3, 3: 2"
              ],
              [
                "tie (0 vs 3)",
                "pick largest index 3"
              ],
              [
                "result",
                3
              ]
            ]
          }
        ]
      },
      {
        "id": "dijkstra-every-city",
        "label": "Dijkstra from every city",
        "complexity": {
          "time": "O(V · E log V)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "for src in 0..n-1:",
          "  dist = dijkstra(src, threshold)",
          "  reachable = count(dist[v] <= threshold, v != src)",
          "  if reachable <= min_reachable:",
          "    min_reachable = reachable",
          "    best_city = src",
          "return best_city"
        ],
        "starterCode": {
          "javascript": "function findTheCity(n, edges, distanceThreshold) {\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v, w] of edges) {\n    adj[u].push([v, w]);\n    adj[v].push([u, w]);\n  }\n\n  function dijkstra(src) {\n    const dist = new Array(n).fill(Infinity);\n    dist[src] = 0;\n    const pq = [[0, src]];\n\n    while (pq.length > 0) {\n      pq.sort((a, b) => a[0] - b[0]);\n      const [d, u] = pq.shift();\n      if (d > dist[u]) continue;\n\n      for (let [v, w] of adj[u]) {\n        if (d + w < dist[v] && d + w <= distanceThreshold) {\n          dist[v] = d + w;\n          pq.push([dist[v], v]);\n        }\n      }\n    }\n\n    let reachable = 0;\n    for (let i = 0; i < n; i++) {\n      if (i !== src && dist[i] <= distanceThreshold) reachable++;\n    }\n    return reachable;\n  }\n\n  let minReachable = Infinity;\n  let bestCity = -1;\n\n  for (let i = 0; i < n; i++) {\n    const count = dijkstra(i);\n    if (count <= minReachable) {\n      minReachable = count;\n      bestCity = i;\n    }\n  }\n\n  return bestCity;\n}",
          "python": "import heapq\n\ndef findTheCity(n: int, edges: list[list[int]], distanceThreshold: int) -> int:\n    adj = {i: [] for i in range(n)}\n    for u, v, w in edges:\n        adj[u].append((v, w))\n        adj[v].append((u, w))\n\n    def dijkstra(src: int) -> int:\n        dist = [float('inf')] * n\n        dist[src] = 0\n        pq = [(0, src)]\n\n        while pq:\n            d, u = heapq.heappop(pq)\n            if d > dist[u]:\n                continue\n            for v, w in adj[u]:\n                if d + w < dist[v] and d + w <= distanceThreshold:\n                    dist[v] = d + w\n                    heapq.heappush(pq, (dist[v], v))\n\n        return sum(1 for i in range(n) if i != src and dist[i] <= distanceThreshold)\n\n    min_reachable = float('inf')\n    best_city = -1\n\n    for i in range(n):\n        count = dijkstra(i)\n        if count <= min_reachable:\n            min_reachable = count\n            best_city = i\n\n    return best_city"
        },
        "solutionCode": {
          "javascript": "function findTheCity(n, edges, distanceThreshold) {\n  const adj = Array.from({ length: n }, () => []);\n  for (let [u, v, w] of edges) {\n    adj[u].push([v, w]);\n    adj[v].push([u, w]);\n  }\n\n  function dijkstra(src) {\n    const dist = new Array(n).fill(Infinity);\n    dist[src] = 0;\n    const pq = [[0, src]];\n\n    while (pq.length > 0) {\n      pq.sort((a, b) => a[0] - b[0]);\n      const [d, u] = pq.shift();\n      if (d > dist[u]) continue;\n\n      for (let [v, w] of adj[u]) {\n        if (d + w < dist[v] && d + w <= distanceThreshold) {\n          dist[v] = d + w;\n          pq.push([dist[v], v]);\n        }\n      }\n    }\n\n    let reachable = 0;\n    for (let i = 0; i < n; i++) {\n      if (i !== src && dist[i] <= distanceThreshold) reachable++;\n    }\n    return reachable;\n  }\n\n  let minReachable = Infinity;\n  let bestCity = -1;\n\n  for (let i = 0; i < n; i++) {\n    const count = dijkstra(i);\n    if (count <= minReachable) {\n      minReachable = count;\n      bestCity = i;\n    }\n  }\n\n  return bestCity;\n}",
          "python": "import heapq\n\ndef findTheCity(n: int, edges: list[list[int]], distanceThreshold: int) -> int:\n    adj = {i: [] for i in range(n)}\n    for u, v, w in edges:\n        adj[u].append((v, w))\n        adj[v].append((u, w))\n\n    def dijkstra(src: int) -> int:\n        dist = [float('inf')] * n\n        dist[src] = 0\n        pq = [(0, src)]\n\n        while pq:\n            d, u = heapq.heappop(pq)\n            if d > dist[u]:\n                continue\n            for v, w in adj[u]:\n                if d + w < dist[v] and d + w <= distanceThreshold:\n                    dist[v] = d + w\n                    heapq.heappush(pq, (dist[v], v))\n\n        return sum(1 for i in range(n) if i != src and dist[i] <= distanceThreshold)\n\n    min_reachable = float('inf')\n    best_city = -1\n\n    for i in range(n):\n        count = dijkstra(i)\n        if count <= min_reachable:\n            min_reachable = count\n            best_city = i\n\n    return best_city"
        },
        "testCases": [
          {
            "input": [
              4,
              [
                [
                  0,
                  1,
                  3
                ],
                [
                  1,
                  2,
                  1
                ],
                [
                  1,
                  3,
                  4
                ],
                [
                  2,
                  3,
                  1
                ]
              ],
              4
            ],
            "expected": 3,
            "description": "Dijkstra on each node returns city 3"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Approach 2: Run Dijkstra from EACH city (0, 1, 2, 3) up to distance threshold 4. Dijkstra runs in O(V * (E log V)), which is faster than Floyd-Warshall for sparse graphs.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA FROM EVERY CITY"
            },
            "vars": [
              [
                "method",
                "Dijkstra from each node"
              ],
              [
                "threshold",
                4
              ],
              [
                "complexity",
                "O(V · E log V)"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Dijkstra from City 0: distances found are {0:0, 1:3, 2:4, 3:5}. Reaches cities {1, 2} (count = 2 <= 4).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA FROM CITY 0 (COUNT = 2)",
              "activeNode": 0,
              "visited": [
                0,
                1,
                2
              ],
              "distTable": {
                "source": 0,
                "title": "DIST FROM CITY 0",
                "nodes": {
                  "0": {
                    "dist": 0,
                    "final": true
                  },
                  "1": {
                    "dist": 3,
                    "final": true
                  },
                  "2": {
                    "dist": 4,
                    "final": true
                  },
                  "3": {
                    "dist": 5,
                    "final": false
                  }
                }
              }
            },
            "vars": [
              [
                "src",
                0
              ],
              [
                "reachable <= 4",
                "{1, 2}"
              ],
              [
                "count",
                2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Dijkstra from City 1: distances found are {0:3, 1:0, 2:1, 3:2}. Reaches cities {0, 2, 3} (count = 3 <= 4).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA FROM CITY 1 (COUNT = 3)",
              "activeNode": 1,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "distTable": {
                "source": 1,
                "title": "DIST FROM CITY 1",
                "nodes": {
                  "0": {
                    "dist": 3,
                    "final": true
                  },
                  "1": {
                    "dist": 0,
                    "final": true
                  },
                  "2": {
                    "dist": 1,
                    "final": true
                  },
                  "3": {
                    "dist": 2,
                    "final": true
                  }
                }
              }
            },
            "vars": [
              [
                "src",
                1
              ],
              [
                "reachable <= 4",
                "{0, 2, 3}"
              ],
              [
                "count",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Dijkstra from City 2: distances found are {0:4, 1:1, 2:0, 3:1}. Reaches cities {0, 1, 3} (count = 3 <= 4).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA FROM CITY 2 (COUNT = 3)",
              "activeNode": 2,
              "visited": [
                0,
                1,
                2,
                3
              ],
              "distTable": {
                "source": 2,
                "title": "DIST FROM CITY 2",
                "nodes": {
                  "0": {
                    "dist": 4,
                    "final": true
                  },
                  "1": {
                    "dist": 1,
                    "final": true
                  },
                  "2": {
                    "dist": 0,
                    "final": true
                  },
                  "3": {
                    "dist": 1,
                    "final": true
                  }
                }
              }
            },
            "vars": [
              [
                "src",
                2
              ],
              [
                "reachable <= 4",
                "{0, 1, 3}"
              ],
              [
                "count",
                3
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Dijkstra from City 3: distances found are {0:5, 1:2, 2:1, 3:0}. Reaches cities {1, 2} (count = 2 <= 4).",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "DIJKSTRA FROM CITY 3 (COUNT = 2)",
              "activeNode": 3,
              "visited": [
                1,
                2,
                3
              ],
              "distTable": {
                "source": 3,
                "title": "DIST FROM CITY 3",
                "nodes": {
                  "0": {
                    "dist": 5,
                    "final": false
                  },
                  "1": {
                    "dist": 2,
                    "final": true
                  },
                  "2": {
                    "dist": 1,
                    "final": true
                  },
                  "3": {
                    "dist": 0,
                    "final": true
                  }
                }
              }
            },
            "vars": [
              [
                "src",
                3
              ],
              [
                "reachable <= 4",
                "{1, 2}"
              ],
              [
                "count",
                2
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Both City 0 and City 3 reach 2 cities (min reachable). Tie-breaker: pick larger index -> City 3. Returns 3.",
            "graph": {
              "nodes": [
                {
                  "id": 0,
                  "x": 60,
                  "y": 150
                },
                {
                  "id": 1,
                  "x": 140,
                  "y": 150
                },
                {
                  "id": 3,
                  "x": 220,
                  "y": 70
                },
                {
                  "id": 2,
                  "x": 220,
                  "y": 230
                }
              ],
              "edges": [
                {
                  "from": 0,
                  "to": 1,
                  "weight": 3
                },
                {
                  "from": 1,
                  "to": 3,
                  "weight": 4
                },
                {
                  "from": 1,
                  "to": 2,
                  "weight": 1
                },
                {
                  "from": 2,
                  "to": 3,
                  "weight": 1
                }
              ],
              "title": "RESULT: CITY 3",
              "activeNode": 3,
              "visited": [
                0,
                1,
                2,
                3
              ]
            },
            "vars": [
              [
                "fewest reachable",
                2
              ],
              [
                "candidates",
                "0 and 3"
              ],
              [
                "best city (max id)",
                3
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "union-find",
    "patternId": "graphs",
    "title": "Union-Find (DSU)",
    "subtitle": "Disjoint sets · find + union",
    "kind": "concept",
    "statement": "Disjoint Set Union (DSU / Union-Find) maintains a collection of disjoint dynamic sets. It provides two near-O(1) operations: find(x) with Path Compression (flattens tree pointing root directly) and union(x, y) with Union by Rank/Size (attaches smaller tree under larger). Inverse Ackermann α(N) time per operation.",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        { "id": 0, "x": 40, "y": 130 },
        { "id": 1, "x": 105, "y": 130 },
        { "id": 2, "x": 170, "y": 130 },
        { "id": 3, "x": 235, "y": 130 },
        { "id": 4, "x": 300, "y": 130 }
      ],
      "edges": [],
      "title": "DISJOINT SETS"
    },
    "approaches": [
      {
        "id": "dsu-rank-path-compression",
        "label": "Disjoint Set Union",
        "complexity": {
          "time": "~O(α(n)) per op",
          "space": "O(n)"
        },
        "pseudocode": [
          "parent[i] <- i         // each node its own set",
          "find(x): while parent[x] != x: x = parent[x]; return x",
          "union(a, b):",
          "  ra, rb <- find(a), find(b)",
          "  if ra != rb: parent[rb] = ra",
          "// same set? <=> find(a) == find(b); #sets = distinct roots"
        ],
        "starterCode": {
          "javascript": "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n    this.rank = new Array(n).fill(0);\n    this.count = n;\n  }\n  find(x) {\n    if (this.parent[x] !== x) {\n      this.parent[x] = this.find(this.parent[x]); // Path compression\n    }\n    return this.parent[x];\n  }\n  union(a, b) {\n    const ra = this.find(a);\n    const rb = this.find(b);\n    if (ra === rb) return false;\n    if (this.rank[ra] < this.rank[rb]) {\n      this.parent[ra] = rb;\n    } else if (this.rank[ra] > this.rank[rb]) {\n      this.parent[rb] = ra;\n    } else {\n      this.parent[rb] = ra;\n      this.rank[ra]++;\n    }\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.find(a) === this.find(b);\n  }\n}",
          "python": "class UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n        self.count = n\n\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  # Path compression\n        return self.parent[x]\n\n    def union(self, a: int, b: int) -> bool:\n        ra, rb = self.find(a), self.find(b)\n        if ra == rb:\n            return False\n        if self.rank[ra] < self.rank[rb]:\n            self.parent[ra] = rb\n        elif self.rank[ra] > self.rank[rb]:\n            self.parent[rb] = ra\n        else:\n            self.parent[rb] = ra\n            self.rank[ra] += 1\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.find(a) == self.find(b)"
        },
        "solutionCode": {
          "javascript": "class UnionFind {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n    this.rank = new Array(n).fill(0);\n    this.count = n;\n  }\n  find(x) {\n    if (this.parent[x] !== x) {\n      this.parent[x] = this.find(this.parent[x]); // Path compression\n    }\n    return this.parent[x];\n  }\n  union(a, b) {\n    const ra = this.find(a);\n    const rb = this.find(b);\n    if (ra === rb) return false;\n    if (this.rank[ra] < this.rank[rb]) {\n      this.parent[ra] = rb;\n    } else if (this.rank[ra] > this.rank[rb]) {\n      this.parent[rb] = ra;\n    } else {\n      this.parent[rb] = ra;\n      this.rank[ra]++;\n    }\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.find(a) === this.find(b);\n  }\n}",
          "python": "class UnionFind:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.rank = [0] * n\n        self.count = n\n\n    def find(self, x: int) -> int:\n        if self.parent[x] != x:\n            self.parent[x] = self.find(self.parent[x])  # Path compression\n        return self.parent[x]\n\n    def union(self, a: int, b: int) -> bool:\n        ra, rb = self.find(a), self.find(b)\n        if ra == rb:\n            return False\n        if self.rank[ra] < self.rank[rb]:\n            self.parent[ra] = rb\n        elif self.rank[ra] > self.rank[rb]:\n            self.parent[rb] = ra\n        else:\n            self.parent[rb] = ra\n            self.rank[ra] += 1\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.find(a) == self.find(b)"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [2, 3],
                [0, 2]
              ]
            ],
            "expected": 2,
            "description": "5 elements with 3 unions leave 2 distinct connected components"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Union-Find tracks a collection of DISJOINT sets under two questions: \"are a and b in the same set?\" and \"merge a's set with b's set\". Start with every element in its OWN set: parent[i] = i, so each node is its own root.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [],
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 1, 2, 3, 4]
              }
            },
            "vars": [
              ["sets", 5],
              ["parent", "[0,1,2,3,4]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "union(0, 1): find roots -> root(0) = 0, root(1) = 1. Different roots! Link them: parent[1] = 0. Set {0, 1} forms with root 0.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 }
              ],
              "activeNode": 0,
              "paramBadges": {
                "0": "root",
                "1": "p=0"
              },
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 3, 4],
                "highlighted": [1]
              }
            },
            "vars": [
              ["union", "(0, 1)"],
              ["root(0)", 0],
              ["root(1)", 1],
              ["sets", 4]
            ]
          },
          {
            "codeLine": 2,
            "narration": "find(1): checks parent[1] = 0 -> root is 0. find(0) = 0. Both elements agree they belong to root 0.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 }
              ],
              "activeNode": 1,
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 3, 4]
              }
            },
            "vars": [
              ["find(1)", "root 0"],
              ["find(0)", "root 0"],
              ["connected?", "YES"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "union(2, 3): find each root -> root(2) = 2, root(3) = 3. Different roots -> link them: parent[3] = 2. Set {2,3} forms with root 2.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "paramBadges": {
                "2": "root",
                "3": "→ merge"
              },
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 2, 4],
                "highlighted": [3]
              }
            },
            "vars": [
              ["root(a)", 2],
              ["root(b)", 3],
              ["same set?", "no"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Check query: are 1 and 3 in the same set? find(1) = 0, find(3) = 2. Roots differ (0 != 2) -> they are in DIFFERENT disjoint sets.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "candidateNodes": [3],
              "paramBadges": {
                "1": "root=0",
                "3": "root=2"
              },
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 2, 4]
              }
            },
            "vars": [
              ["find(1)", 0],
              ["find(3)", 2],
              ["same set?", "NO (0 != 2)"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "union(0, 2): merge set {0,1} and set {2,3}. find(0) = 0, find(2) = 2. Link root 2 under root 0: parent[2] = 0.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 0,
              "candidateNodes": [2],
              "activeEdges": [[1, 2]],
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 2, 4],
                "highlighted": [2]
              }
            },
            "vars": [
              ["merging roots", "0 and 2"],
              ["new parent[2]", 0],
              ["sets left", 2]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Linked: 2's tree now hangs under 0. The two sets are one; their shared root 0 answers \"same set?\" for every member. parent = [0, 0, 0, 2, 4].",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "visited": [0, 2],
              "activeEdges": [[1, 2]],
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 2, 4],
                "highlighted": [2]
              }
            },
            "vars": [
              ["merged", "2 -> 0"],
              ["parent", "[0, 0, 0, 2, 4]"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Now find(1), find(2), find(3) all return 0 -> they share a set; node 4 stands alone. Counting DISTINCT roots gives the number of sets (here 2). With path compression (point nodes straight at the root on each find) and union by size, every op is amortized ~O(α(n)), effectively constant.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 0,
              "visited": [0, 1, 2, 3],
              "paramBadges": {
                "0": "root of {0,1,2,3}",
                "4": "root of {4}"
              },
              "title": "DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 2, 4]
              }
            },
            "vars": [
              ["distinct roots", 2],
              ["op cost", "~O(α(n))"]
            ]
          }
        ]
      },
      {
        "id": "quick-find",
        "label": "Quick-Find (Array ID)",
        "complexity": {
          "time": "Find: O(1), Union: O(N)",
          "space": "O(N)"
        },
        "pseudocode": [
          "id = [0..N-1]             // id[x] stores component ID directly",
          "def find(x):",
          "  return id[x]           // O(1) instant lookup",
          "def union(a, b):",
          "  idA, idB = id[a], id[b]",
          "  if idA != idB:",
          "    for i in 0..N-1:     // O(N) sweep to rename",
          "      if id[i] == idB: id[i] = idA"
        ],
        "starterCode": {
          "javascript": "class QuickFind {\n  constructor(n) {\n    this.id = Array.from({ length: n }, (_, i) => i);\n    this.count = n;\n  }\n  find(x) {\n    return this.id[x]; // O(1)\n  }\n  union(a, b) {\n    const idA = this.id[a];\n    const idB = this.id[b];\n    if (idA === idB) return false;\n    for (let i = 0; i < this.id.length; i++) {\n      if (this.id[i] === idB) {\n        this.id[i] = idA; // O(N) update\n      }\n    }\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.id[a] === this.id[b];\n  }\n}",
          "python": "class QuickFind:\n    def __init__(self, n: int):\n        self.id = list(range(n))\n        self.count = n\n\n    def find(self, x: int) -> int:\n        return self.id[x]  # O(1)\n\n    def union(self, a: int, b: int) -> bool:\n        id_a, id_b = self.id[a], self.id[b]\n        if id_a == id_b:\n            return False\n        for i in range(len(self.id)):\n            if self.id[i] == id_b:\n                self.id[i] = id_a  # O(N) sweep\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.id[a] == self.id[b]"
        },
        "solutionCode": {
          "javascript": "class QuickFind {\n  constructor(n) {\n    this.id = Array.from({ length: n }, (_, i) => i);\n    this.count = n;\n  }\n  find(x) {\n    return this.id[x]; // O(1)\n  }\n  union(a, b) {\n    const idA = this.id[a];\n    const idB = this.id[b];\n    if (idA === idB) return false;\n    for (let i = 0; i < this.id.length; i++) {\n      if (this.id[i] === idB) {\n        this.id[i] = idA; // O(N) update\n      }\n    }\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.id[a] === this.id[b];\n  }\n}",
          "python": "class QuickFind:\n    def __init__(self, n: int):\n        self.id = list(range(n))\n        self.count = n\n\n    def find(self, x: int) -> int:\n        return self.id[x]  # O(1)\n\n    def union(self, a: int, b: int) -> bool:\n        id_a, id_b = self.id[a], self.id[b]\n        if id_a == id_b:\n            return False\n        for i in range(len(self.id)):\n            if self.id[i] == id_b:\n                self.id[i] = id_a  # O(N) sweep\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.id[a] == self.id[b]"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [2, 3],
                [0, 2]
              ]
            ],
            "expected": 2,
            "description": "5 elements with 3 unions leave 2 distinct connected components"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Quick-Find stores component IDs directly in an array `id[]`. Initially each element has id[i] = i.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [],
              "title": "QUICK-FIND ID ARRAY",
              "parentArray": {
                "title": "ID[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 1, 2, 3, 4]
              }
            },
            "vars": [
              ["find(x)", "O(1) lookup"],
              ["union(a,b)", "O(N) sweep"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "union(0, 1): id[0]=0, id[1]=1. Scan all elements and change all elements with ID 1 to ID 0.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [{ "from": 0, "to": 1 }],
              "activeNode": 0,
              "title": "UNION(0, 1) -> O(N) SWEEP",
              "parentArray": {
                "title": "ID[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 3, 4],
                "highlighted": [1]
              }
            },
            "vars": [
              ["changed", "id[1] = 0"],
              ["components", 4]
            ]
          },
          {
            "codeLine": 6,
            "narration": "union(2, 3): id[2]=2, id[3]=3. Scan all elements and change elements with ID 3 to ID 2.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "title": "UNION(2, 3) -> O(N) SWEEP",
              "parentArray": {
                "title": "ID[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 2, 4],
                "highlighted": [3]
              }
            },
            "vars": [
              ["changed", "id[3] = 2"],
              ["components", 3]
            ]
          },
          {
            "codeLine": 6,
            "narration": "union(0, 2): id[0]=0, id[2]=2. Scan entire array: every element with ID 2 (nodes 2 and 3) is updated to ID 0!",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 0,
              "title": "UNION(0, 2) -> ALL 2's BECOME 0",
              "parentArray": {
                "title": "ID[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 0, 4],
                "highlighted": [2, 3]
              }
            },
            "vars": [
              ["changed", "id[2]=0, id[3]=0"],
              ["components", 2]
            ]
          },
          {
            "codeLine": 3,
            "narration": "find(3) == find(1): id[3] is 0 and id[1] is 0 in O(1) time. Both share ID 0 -> same set!",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 3,
              "candidateNodes": [1],
              "title": "O(1) FIND LOOKUP",
              "parentArray": {
                "title": "ID[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 0, 4]
              }
            },
            "vars": [
              ["id[1]", 0],
              ["id[3]", 0],
              ["connected?", "YES (O(1))"]
            ]
          }
        ]
      },
      {
        "id": "quick-union-naive",
        "label": "Quick-Union (Naive Trees)",
        "complexity": {
          "time": "Find: O(N) worst, Union: O(N) worst",
          "space": "O(N)"
        },
        "pseudocode": [
          "parent = [0..N-1]         // parent pointers without balancing",
          "def root(i):",
          "  while i != parent[i]: i = parent[i]  // O(tree depth)",
          "  return i",
          "def union(a, b):",
          "  ra = root(a), rb = root(b)",
          "  parent[ra] = rb         // can create tall, degenerate chains!"
        ],
        "starterCode": {
          "javascript": "class QuickUnion {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n    this.count = n;\n  }\n  root(i) {\n    while (i !== this.parent[i]) {\n      i = this.parent[i]; // Walk up tree (O(depth))\n    }\n    return i;\n  }\n  union(a, b) {\n    const ra = this.root(a);\n    const rb = this.root(b);\n    if (ra === rb) return false;\n    this.parent[ra] = rb; // Naive link\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.root(a) === this.root(b);\n  }\n}",
          "python": "class QuickUnion:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.count = n\n\n    def root(self, i: int) -> int:\n        while i != self.parent[i]:\n            i = self.parent[i]  # Walk up tree\n        return i\n\n    def union(self, a: int, b: int) -> bool:\n        ra = self.root(a)\n        rb = self.root(b)\n        if ra == rb:\n            return False\n        self.parent[ra] = rb  # Naive link\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.root(a) == self.root(b)"
        },
        "solutionCode": {
          "javascript": "class QuickUnion {\n  constructor(n) {\n    this.parent = Array.from({ length: n }, (_, i) => i);\n    this.count = n;\n  }\n  root(i) {\n    while (i !== this.parent[i]) {\n      i = this.parent[i]; // Walk up tree (O(depth))\n    }\n    return i;\n  }\n  union(a, b) {\n    const ra = this.root(a);\n    const rb = this.root(b);\n    if (ra === rb) return false;\n    this.parent[ra] = rb; // Naive link\n    this.count--;\n    return true;\n  }\n  connected(a, b) {\n    return this.root(a) === this.root(b);\n  }\n}",
          "python": "class QuickUnion:\n    def __init__(self, n: int):\n        self.parent = list(range(n))\n        self.count = n\n\n    def root(self, i: int) -> int:\n        while i != self.parent[i]:\n            i = self.parent[i]  # Walk up tree\n        return i\n\n    def union(self, a: int, b: int) -> bool:\n        ra = self.root(a)\n        rb = self.root(b)\n        if ra == rb:\n            return False\n        self.parent[ra] = rb  # Naive link\n        self.count -= 1\n        return True\n\n    def connected(self, a: int, b: int) -> bool:\n        return self.root(a) == self.root(b)"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [1, 2],
                [2, 3]
              ]
            ],
            "expected": 2,
            "description": "Linear chain creates depth-4 tree in naive quick union"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Quick-Union represents sets as trees where parent[i] points to parent. Without balancing or path compression, tree depth can degrade to O(N).",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [],
              "title": "NAIVE QUICK-UNION TREE",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 1, 2, 3, 4]
              }
            },
            "vars": [
              ["tree depth", "unbalanced"],
              ["worst case", "O(N) per find"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Successive unions link nodes sequentially: parent[0]=1, parent[1]=2, parent[2]=3. A single tall branch of depth 4 is formed!",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 0,
              "title": "DEGENERATE LINEAR TREE (DEPTH 4)",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [1, 2, 3, 3, 4],
                "highlighted": [0, 1, 2]
              }
            },
            "vars": [
              ["chain", "0 -> 1 -> 2 -> 3"],
              ["root(0) hops", 3]
            ]
          },
          {
            "codeLine": 3,
            "narration": "To find root of 0, we must hop 0 -> 1 -> 2 -> 3 taking O(N) time. This illustrates why Path Compression & Union by Rank (DSU) is required for near-O(1) speed.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 40, "y": 130 },
                { "id": 1, "x": 105, "y": 130 },
                { "id": 2, "x": 170, "y": 130 },
                { "id": 3, "x": 235, "y": 130 },
                { "id": 4, "x": 300, "y": 130 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 3,
              "visited": [0, 1, 2, 3],
              "title": "ROOT TRAVERSAL: O(N) HOPS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [1, 2, 3, 3, 4]
              }
            },
            "vars": [
              ["root(0)", 3],
              ["hops required", 3],
              ["optimal fix", "Path Compression + Rank"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "number-of-connected-components",
    "patternId": "graphs",
    "title": "Number of Connected Components",
    "subtitle": "Union-Find · count = n, merge drops count",
    "kind": "problem",
    "leetcode": {
      "id": 323,
      "slug": "number-of-connected-components-in-an-undirected-graph",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "statement": "Given n nodes labeled 0..n-1 and a list of undirected edges, return the number of connected components in the graph.\n\nASKED AT: Amazon Google Meta",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        { "id": 0, "x": 60, "y": 70 },
        { "id": 1, "x": 140, "y": 70 },
        { "id": 2, "x": 220, "y": 70 },
        { "id": 3, "x": 60, "y": 170 },
        { "id": 4, "x": 140, "y": 170 }
      ],
      "edges": [
        { "from": 0, "to": 1 },
        { "from": 1, "to": 2 },
        { "from": 3, "to": 4 }
      ],
      "title": "UNDIRECTED GRAPH"
    },
    "approaches": [
      {
        "id": "union-find-components",
        "label": "Union-Find",
        "complexity": {
          "time": "O((n + e)·α(n))",
          "space": "O(n)"
        },
        "pseudocode": [
          "parent[i] <- i ; count <- n     // each node its own component",
          "find(x): while parent[x] != x: x = parent[x]; return x",
          "for (a, b) in edges:",
          "  ra, rb <- find(a), find(b)",
          "  if ra != rb: parent[rb] = ra; count--   // merge 2 components",
          "  // else: same component -> edge redundant, count unchanged",
          "return count                     // # connected components"
        ],
        "starterCode": {
          "javascript": "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  let count = n;\n\n  function find(x) {\n    if (parent[x] !== x) {\n      parent[x] = find(parent[x]); // Path compression\n    }\n    return parent[x];\n  }\n\n  for (const [u, v] of edges) {\n    const rootU = find(u);\n    const rootV = find(v);\n    if (rootU !== rootV) {\n      parent[rootU] = rootV;\n      count--;\n    }\n  }\n\n  return count;\n}",
          "python": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    parent = list(range(n))\n    count = n\n\n    def find(x: int) -> int:\n        if parent[x] != x:\n            parent[x] = find(parent[x])  # Path compression\n        return parent[x]\n\n    for u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u != root_v:\n            parent[root_u] = root_v\n            count -= 1\n\n    return count"
        },
        "solutionCode": {
          "javascript": "function countComponents(n, edges) {\n  const parent = Array.from({ length: n }, (_, i) => i);\n  let count = n;\n\n  function find(x) {\n    if (parent[x] !== x) {\n      parent[x] = find(parent[x]);\n    }\n    return parent[x];\n  }\n\n  for (const [u, v] of edges) {\n    const rootU = find(u);\n    const rootV = find(v);\n    if (rootU !== rootV) {\n      parent[rootU] = rootV;\n      count--;\n    }\n  }\n\n  return count;\n}",
          "python": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    parent = list(range(n))\n    count = n\n\n    def find(x: int) -> int:\n        if parent[x] != x:\n            parent[x] = find(parent[x])\n        return parent[x]\n\n    for u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u != root_v:\n            parent[root_u] = root_v\n            count -= 1\n\n    return count"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [1, 2],
                [3, 4]
              ]
            ],
            "expected": 2,
            "description": "5 nodes with edges (0-1, 1-2, 3-4) form 2 components: {0,1,2} and {3,4}"
          },
          {
            "input": [
              5,
              [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 4]
              ]
            ],
            "expected": 1,
            "description": "5 nodes fully connected in a line form 1 component"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Number of Connected Components (LeetCode 323): given n nodes and a list of undirected edges, count how many connected groups the graph splits into. Union-Find starts by assuming every node is its own component: parent[i] = i and count = n = 5. Each edge that joins two DIFFERENT components fuses them and drops the count by one.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 1, 2, 3, 4]
              }
            },
            "vars": [
              ["n", 5],
              ["count", 5],
              ["parent", "[0,1,2,3,4]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process Edge 1: (0, 1). Find roots: root(0) = 0, root(1) = 1.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "candidateNodes": [1],
              "activeEdges": [[0, 1]],
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 1, 2, 3, 4]
              }
            },
            "vars": [
              ["edge", "(0, 1)"],
              ["root(0)", 0],
              ["root(1)", 1],
              ["same component?", "no"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "union(0, 1): link 1 under 0, so parent[1] = 0. Distinct components merge -> count drops from 5 to 4.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0, 1],
              "relaxedEdges": [[0, 1]],
              "paramBadges": {
                "0": "root of {0,1}"
              },
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 2, 3, 4],
                "highlighted": [1]
              }
            },
            "vars": [
              ["merge", "1 -> 0"],
              ["count", 4],
              ["parent", "[0, 0, 2, 3, 4]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "union(0, 2): hang 2's tree under 0, so parent[2] = 0. Two components became one -> merge, count--. count is now 3. parent = [0, 0, 0, 3, 4].",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 1,
              "visited": [0, 1, 2],
              "relaxedEdges": [[0, 1], [1, 2]],
              "paramBadges": {
                "0": "root of {0,1,2}"
              },
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 3, 4],
                "highlighted": [2]
              }
            },
            "vars": [
              ["merge", "2 -> 0"],
              ["count", 3],
              ["parent", "[0, 0, 0, 3, 4]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process Edge 3: (3, 4). Find roots: root(3) = 3, root(4) = 4.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 3,
              "candidateNodes": [4],
              "activeEdges": [[3, 4]],
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 3, 4]
              }
            },
            "vars": [
              ["edge", "(3, 4)"],
              ["root(3)", 3],
              ["root(4)", 4],
              ["same component?", "no"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "union(3, 4): link 4 under 3, so parent[4] = 3. Components count drops from 3 to 2. parent = [0, 0, 0, 3, 3].",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 3,
              "visited": [0, 1, 2, 3, 4],
              "relaxedEdges": [[0, 1], [1, 2], [3, 4]],
              "paramBadges": {
                "0": "root of {0,1,2}",
                "3": "root of {3,4}"
              },
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 3, 3],
                "highlighted": [4]
              }
            },
            "vars": [
              ["merge", "4 -> 3"],
              ["count", 2],
              ["parent", "[0, 0, 0, 3, 3]"]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All edges processed. Distinct roots remain for two groups: {0,1,2} all resolve to root 0, and {3,4} resolve to root 3, so count = 2 connected components.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0, 1, 2, 3, 4],
              "paramBadges": {
                "0": "root of {0,1,2}",
                "3": "root of {3,4}"
              },
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 3, 3]
              }
            },
            "vars": [
              ["components", 2],
              ["root 0 group", "{0, 1, 2}"],
              ["root 3 group", "{3, 4}"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "All edges processed. Distinct roots remain for two groups: {0,1,2} all resolve to root 0, and {3,4} resolve to root 3, so count = 2 connected components. Each union touches the tree near its root, so with path compression + union by size every find/union is amortized ~O(α(n)); total work over n nodes and e edges is ~O((n + e)·α(n)), effectively linear.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0, 1, 2, 3, 4],
              "paramBadges": {
                "0": "root of {0,1,2}",
                "3": "root of {3,4}"
              },
              "title": "UNDIRECTED GRAPH",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [0, 1, 2, 3, 4],
                "values": [0, 0, 0, 3, 3]
              }
            },
            "best": {
              "label": "2 Connected Components Found"
            },
            "vars": [
              ["count", 2],
              ["components", 2],
              ["op cost", "~O((n+e)·α(n))"]
            ]
          }
        ]
      },
      {
        "id": "dfs-components",
        "label": "DFS Traversal",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "adj = buildAdjacencyList(n, edges)",
          "visited = set(), count = 0",
          "for i in 0..n-1:",
          "  if i not in visited:",
          "    count += 1",
          "    dfs(i, visited, adj)",
          "return count"
        ],
        "starterCode": {
          "javascript": "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  let count = 0;\n\n  function dfs(node) {\n    visited.add(node);\n    for (const neighbor of adj[node]) {\n      if (!visited.has(neighbor)) {\n        dfs(neighbor);\n      }\n    }\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (!visited.has(i)) {\n      count++;\n      dfs(i);\n    }\n  }\n\n  return count;\n}",
          "python": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n\n    visited = set()\n    count = 0\n\n    def dfs(node: int):\n        visited.add(node)\n        for neighbor in adj[node]:\n            if neighbor not in visited:\n                dfs(neighbor)\n\n    for i in range(n):\n        if i not in visited:\n            count += 1\n            dfs(i)\n\n    return count"
        },
        "solutionCode": {
          "javascript": "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  let count = 0;\n\n  function dfs(node) {\n    visited.add(node);\n    for (const neighbor of adj[node]) {\n      if (!visited.has(neighbor)) {\n        dfs(neighbor);\n      }\n    }\n  }\n\n  for (let i = 0; i < n; i++) {\n    if (!visited.has(i)) {\n      count++;\n      dfs(i);\n    }\n  }\n\n  return count;\n}",
          "python": "def countComponents(n: int, edges: list[list[int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n\n    visited = set()\n    count = 0\n\n    def dfs(node: int):\n        visited.add(node)\n        for neighbor in adj[node]:\n            if neighbor not in visited:\n                dfs(neighbor)\n\n    for i in range(n):\n        if i not in visited:\n            count += 1\n            dfs(i)\n\n    return count"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [1, 2],
                [3, 4]
              ]
            ],
            "expected": 2,
            "description": "DFS traversal visits {0,1,2} in Component 1 and {3,4} in Component 2"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "DFS approach: Build adjacency list and track visited set. Loop through all nodes 0..n-1: each unvisited node starts a new component DFS traversal.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "title": "DFS COMPONENT EXPLORATION",
              "adjList": {
                "0": [1],
                "1": [0, 2],
                "2": [1],
                "3": [4],
                "4": [3]
              }
            },
            "vars": [
              ["visited", "{}"],
              ["count", 0]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 0 is unvisited! Increment count = 1. Launch DFS(0) to explore Component 1.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0],
              "callStack": ["dfs(0)"],
              "title": "START COMPONENT 1 (DFS FROM 0)"
            },
            "vars": [
              ["component", 1],
              ["root", 0],
              ["count", 1]
            ]
          },
          {
            "codeLine": 6,
            "narration": "DFS(0) traverses neighbor 1. Launch dfs(1), marking node 1 visited.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 1,
              "visited": [0, 1],
              "relaxedEdges": [[0, 1]],
              "callStack": ["dfs(0)", "dfs(1)"],
              "title": "DFS(1) EXPLORATION"
            },
            "vars": [
              ["visiting", 1],
              ["visited", "{0, 1}"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "DFS(1) traverses neighbor 2. Launch dfs(2), completing Component 1 {0, 1, 2}.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 2,
              "visited": [0, 1, 2],
              "relaxedEdges": [[0, 1], [1, 2]],
              "callStack": ["dfs(0)", "dfs(1)", "dfs(2)"],
              "title": "COMPONENT 1 COMPLETE {0,1,2}"
            },
            "vars": [
              ["component 1", "{0, 1, 2}"],
              ["count", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Resume loop: nodes 1 and 2 already visited. Node 3 is unvisited! Increment count = 2. Launch DFS(3) for Component 2.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 3,
              "visited": [0, 1, 2, 3],
              "callStack": ["dfs(3)"],
              "title": "START COMPONENT 2 (DFS FROM 3)"
            },
            "vars": [
              ["component", 2],
              ["count", 2]
            ]
          },
          {
            "codeLine": 6,
            "narration": "DFS(3) traverses neighbor 4. Launch dfs(4), marking node 4 visited. Component 2 {3, 4} complete.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 4,
              "visited": [0, 1, 2, 3, 4],
              "relaxedEdges": [[0, 1], [1, 2], [3, 4]],
              "callStack": ["dfs(3)", "dfs(4)"],
              "title": "COMPONENT 2 COMPLETE {3,4}"
            },
            "vars": [
              ["component 2", "{3, 4}"],
              ["count", 2]
            ]
          },
          {
            "codeLine": 7,
            "narration": "All nodes visited. Loop finishes and returns total connected components = 2.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0, 1, 2, 3, 4],
              "title": "TOTAL CONNECTED COMPONENTS = 2"
            },
            "best": {
              "label": "DFS Components: 2"
            },
            "vars": [
              ["result", 2],
              ["time", "O(V + E)"]
            ]
          }
        ]
      },
      {
        "id": "bfs-components",
        "label": "BFS Traversal",
        "complexity": {
          "time": "O(V + E)",
          "space": "O(V + E)"
        },
        "pseudocode": [
          "adj = buildAdjacencyList(n, edges)",
          "visited = set(), count = 0",
          "for i in 0..n-1:",
          "  if i not in visited:",
          "    count += 1, queue = [i], visited.add(i)",
          "    while queue:",
          "      u = queue.pop(0)",
          "      for v in adj[u]:",
          "        if v not in visited: visited.add(v); queue.push(v)",
          "return count"
        ],
        "starterCode": {
          "javascript": "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  let count = 0;\n\n  for (let i = 0; i < n; i++) {\n    if (!visited.has(i)) {\n      count++;\n      const queue = [i];\n      visited.add(i);\n      while (queue.length > 0) {\n        const u = queue.shift();\n        for (const v of adj[u]) {\n          if (!visited.has(v)) {\n            visited.add(v);\n            queue.push(v);\n          }\n        }\n      }\n    }\n  }\n\n  return count;\n}",
          "python": "from collections import deque\n\ndef countComponents(n: int, edges: list[list[int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n\n    visited = set()\n    count = 0\n\n    for i in range(n):\n        if i not in visited:\n            count += 1\n            queue = deque([i])\n            visited.add(i)\n            while queue:\n                u = queue.popleft()\n                for v in adj[u]:\n                    if v not in visited:\n                        visited.add(v)\n                        queue.append(v)\n\n    return count"
        },
        "solutionCode": {
          "javascript": "function countComponents(n, edges) {\n  const adj = Array.from({ length: n }, () => []);\n  for (const [u, v] of edges) {\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  const visited = new Set();\n  let count = 0;\n\n  for (let i = 0; i < n; i++) {\n    if (!visited.has(i)) {\n      count++;\n      const queue = [i];\n      visited.add(i);\n      while (queue.length > 0) {\n        const u = queue.shift();\n        for (const v of adj[u]) {\n          if (!visited.has(v)) {\n            visited.add(v);\n            queue.push(v);\n          }\n        }\n      }\n    }\n  }\n\n  return count;\n}",
          "python": "from collections import deque\n\ndef countComponents(n: int, edges: list[list[int]]) -> int:\n    adj = [[] for _ in range(n)]\n    for u, v in edges:\n        adj[u].append(v)\n        adj[v].append(u)\n\n    visited = set()\n    count = 0\n\n    for i in range(n):\n        if i not in visited:\n            count += 1\n            queue = deque([i])\n            visited.add(i)\n            while queue:\n                u = queue.popleft()\n                for v in adj[u]:\n                    if v not in visited:\n                        visited.add(v)\n                        queue.append(v)\n\n    return count"
        },
        "testCases": [
          {
            "input": [
              5,
              [
                [0, 1],
                [1, 2],
                [3, 4]
              ]
            ],
            "expected": 2,
            "description": "BFS queue exploration counts 2 connected components"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "BFS approach: Build adjacency list and use a FIFO queue to spread level-by-level across unvisited components.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "queue": [],
              "title": "BFS COMPONENT QUEUE"
            },
            "vars": [
              ["queue", "[]"],
              ["count", 0]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 0 is unvisited. Start Component 1: count = 1, push node 0 into queue.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0],
              "queue": [0],
              "title": "BFS QUEUE: [0]"
            },
            "vars": [
              ["pop", 0],
              ["count", 1]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pop 0: explore neighbor 1. Mark 1 visited and push to queue.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 1,
              "visited": [0, 1],
              "queue": [1],
              "relaxedEdges": [[0, 1]],
              "title": "BFS QUEUE: [1]"
            },
            "vars": [
              ["explored", "0 -> 1"],
              ["queue", "[1]"]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pop 1: explore neighbor 2. Mark 2 visited and push to queue. Component 1 {0, 1, 2} fully discovered.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 2,
              "visited": [0, 1, 2],
              "queue": [],
              "relaxedEdges": [[0, 1], [1, 2]],
              "title": "COMPONENT 1 {0,1,2} DONE"
            },
            "vars": [
              ["component 1", "{0, 1, 2}"],
              ["queue", "[]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Node 3 is unvisited. Start Component 2: count = 2, push node 3 into queue.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 3,
              "visited": [0, 1, 2, 3],
              "queue": [3],
              "title": "BFS QUEUE: [3]"
            },
            "vars": [
              ["count", 2],
              ["queue", "[3]"]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Pop 3: explore neighbor 4. Mark 4 visited and push to queue. Component 2 {3, 4} fully discovered.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 4,
              "visited": [0, 1, 2, 3, 4],
              "queue": [],
              "relaxedEdges": [[0, 1], [1, 2], [3, 4]],
              "title": "COMPONENT 2 {3,4} DONE"
            },
            "vars": [
              ["component 2", "{3, 4}"],
              ["queue", "[]"]
            ]
          },
          {
            "codeLine": 10,
            "narration": "All nodes visited. Final total number of connected components = 2.",
            "graph": {
              "nodes": [
                { "id": 0, "x": 60, "y": 70 },
                { "id": 1, "x": 140, "y": 70 },
                { "id": 2, "x": 220, "y": 70 },
                { "id": 3, "x": 60, "y": 170 },
                { "id": 4, "x": 140, "y": 170 }
              ],
              "edges": [
                { "from": 0, "to": 1 },
                { "from": 1, "to": 2 },
                { "from": 3, "to": 4 }
              ],
              "activeNode": 0,
              "visited": [0, 1, 2, 3, 4],
              "title": "TOTAL CONNECTED COMPONENTS = 2"
            },
            "best": {
              "label": "BFS Components: 2"
            },
            "vars": [
              ["result", 2],
              ["time", "O(V + E)"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "redundant-connection",
    "patternId": "graphs",
    "title": "Redundant Connection",
    "subtitle": "Union-Find · first cycle-closing edge",
    "kind": "problem",
    "leetcode": {
      "id": 684,
      "slug": "redundant-connection",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "statement": "A tree of n nodes had one extra edge added, creating exactly one cycle. Given the edges in input order, return the edge that can be removed so the result is again a tree, the last edge (in input order) that closes a cycle.\n\nASKED AT: Amazon Google",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        { "id": 1, "x": 180, "y": 70 },
        { "id": 2, "x": 110, "y": 190 },
        { "id": 3, "x": 250, "y": 190 }
      ],
      "edges": [
        { "from": 1, "to": 2 },
        { "from": 1, "to": 3 },
        { "from": 2, "to": 3 }
      ],
      "title": "GRAPH + DISJOINT SETS"
    },
    "approaches": [
      {
        "id": "union-find-cycle-detect",
        "label": "Union-Find detects the cycle",
        "complexity": {
          "time": "O(n·α(n))",
          "space": "O(n)"
        },
        "pseudocode": [
          "parent[i] <- i         // each node its own set",
          "find(x): while parent[x] != x: x = parent[x]; return x",
          "for (a, b) in edges:",
          "  if find(a) == find(b): return [a, b]  // same set => cycle!",
          "  parent[find(b)] = find(a)             // union",
          "// first same-set edge is the redundant one"
        ],
        "starterCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const n = edges.length;\n  const parent = Array.from({ length: n + 1 }, (_, i) => i);\n\n  function find(x) {\n    if (parent[x] !== x) {\n      parent[x] = find(parent[x]); // Path compression\n    }\n    return parent[x];\n  }\n\n  for (const [u, v] of edges) {\n    const rootU = find(u);\n    const rootV = find(v);\n    if (rootU === rootV) {\n      return [u, v]; // Cycle detected!\n    }\n    parent[rootV] = rootU;\n  }\n\n  return [];\n}",
          "python": "def findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    n = len(edges)\n    parent = list(range(n + 1))\n\n    def find(x: int) -> int:\n        if parent[x] != x:\n            parent[x] = find(parent[x])  # Path compression\n        return parent[x]\n\n    for u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u == root_v:\n            return [u, v]  # Cycle detected!\n        parent[root_v] = root_u\n\n    return []"
        },
        "solutionCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const n = edges.length;\n  const parent = Array.from({ length: n + 1 }, (_, i) => i);\n\n  function find(x) {\n    if (parent[x] !== x) {\n      parent[x] = find(parent[x]);\n    }\n    return parent[x];\n  }\n\n  for (const [u, v] of edges) {\n    const rootU = find(u);\n    const rootV = find(v);\n    if (rootU === rootV) {\n      return [u, v];\n    }\n    parent[rootV] = rootU;\n  }\n\n  return [];\n}",
          "python": "def findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    n = len(edges)\n    parent = list(range(n + 1))\n\n    def find(x: int) -> int:\n        if parent[x] != x:\n            parent[x] = find(parent[x])\n        return parent[x]\n\n    for u, v in edges:\n        root_u, root_v = find(u), find(v)\n        if root_u == root_v:\n            return [u, v]\n        parent[root_v] = root_u\n\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                [1, 2],
                [1, 3],
                [2, 3]
              ]
            ],
            "expected": [2, 3],
            "description": "Triangle graph: edge [2, 3] creates the cycle"
          },
          {
            "input": [
              [
                [1, 2],
                [2, 3],
                [3, 4],
                [1, 4],
                [1, 5]
              ]
            ],
            "expected": [1, 4],
            "description": "Square with extra leaf: edge [1, 4] closes the 4-cycle"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Redundant Connection (LeetCode 684): A tree with n nodes has exactly one extra edge creating a cycle. Initialize Union-Find parent array where every node is its own set: parent[1]=1, parent[2]=2, parent[3]=3.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 2, 3]
              }
            },
            "vars": [
              ["n", 3],
              ["parent", "[1, 2, 3]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process Edge 1: (1, 2). Find roots: root(1) = 1, root(2) = 2.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "candidateNodes": [2],
              "activeEdges": [[1, 2]],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 2, 3]
              }
            },
            "vars": [
              ["edge", "(1, 2)"],
              ["root(1)", 1],
              ["root(2)", 2],
              ["same set?", "no"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Union: parent[find(2)] = find(1) => parent[2] = 1. Edge [1, 2] is safely added to tree without creating a cycle.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 2],
              "relaxedEdges": [[1, 2]],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 1, 3],
                "highlighted": [1]
              }
            },
            "vars": [
              ["merged", "2 -> 1"],
              ["parent", "[1, 1, 3]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process Edge 2: (1, 3). Find roots: root(1) = 1, root(3) = 3.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "candidateNodes": [3],
              "activeEdges": [[1, 3]],
              "relaxedEdges": [[1, 2]],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 1, 3]
              }
            },
            "vars": [
              ["edge", "(1, 3)"],
              ["root(1)", 1],
              ["root(3)", 3],
              ["same set?", "no"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Union: parent[3] = 1, so 3's set now hangs under 1's root 1. Their members share one root and count as connected. parent = [1, 1, 1].",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 3],
              "activeEdges": [[1, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 1, 1],
                "highlighted": [2]
              }
            },
            "vars": [
              ["merged", "3 -> 1"],
              ["parent", "[1, 1, 1]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Process Edge 3: (2, 3). Find roots: root(2) = 1, root(3) = 1.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "candidateNodes": [3],
              "activeEdges": [[2, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "title": "GRAPH + DISJOINT SETS",
              "parentArray": {
                "title": "PARENT[]",
                "indices": [1, 2, 3],
                "values": [1, 1, 1]
              }
            },
            "vars": [
              ["edge", "(2, 3)"],
              ["root(2)", 1],
              ["root(3)", 1],
              ["same root?", "YES (both 1)"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "find(2) == find(3) == 1! Both endpoints already belong to the same component root 1. Edge [2, 3] creates a cycle and is REDUNDANT.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "visited": [1, 2, 3],
              "skippedEdges": [[2, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "paramBadges": {
                "2": "CYCLE!",
                "3": "CYCLE!"
              },
              "title": "CYCLE DETECTED AT [2, 3]"
            },
            "vars": [
              ["cycle edge", "[2, 3]"],
              ["shared root", 1],
              ["redundant", true]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Return redundant edge [2, 3]. Removing [2, 3] restores the graph to a valid tree with 3 nodes and 2 edges.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 2, 3],
              "skippedEdges": [[2, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "title": "RESULT: REDUNDANT EDGE [2, 3]"
            },
            "best": {
              "label": "Redundant Connection: [2, 3]"
            },
            "vars": [
              ["result", "[2, 3]"],
              ["time", "O(n·α(n))"]
            ]
          }
        ]
      },
      {
        "id": "dfs-cycle-detect",
        "label": "DFS Cycle Detection",
        "complexity": {
          "time": "O(N²)",
          "space": "O(N)"
        },
        "pseudocode": [
          "adj = createEmptyAdjacencyList()",
          "for [u, v] in edges:",
          "  visited = set()",
          "  if dfs(u, target=v, visited, adj):",
          "    return [u, v] // path already exists -> cycle!",
          "  adj[u].push(v), adj[v].push(u)"
        ],
        "starterCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const adj = Array.from({ length: edges.length + 1 }, () => []);\n\n  function hasPath(src, target, visited) {\n    if (src === target) return true;\n    visited.add(src);\n    for (const neighbor of adj[src]) {\n      if (!visited.has(neighbor)) {\n        if (hasPath(neighbor, target, visited)) return true;\n      }\n    }\n    return false;\n  }\n\n  for (const [u, v] of edges) {\n    const visited = new Set();\n    if (hasPath(u, v, visited)) {\n      return [u, v];\n    }\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  return [];\n}",
          "python": "def findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(len(edges) + 1)]\n\n    def has_path(src: int, target: int, visited: set) -> bool:\n        if src == target:\n            return True\n        visited.add(src)\n        for neighbor in adj[src]:\n            if neighbor not in visited:\n                if has_path(neighbor, target, visited):\n                    return True\n        return False\n\n    for u, v in edges:\n        visited = set()\n        if has_path(u, v, visited):\n            return [u, v]\n        adj[u].append(v)\n        adj[v].append(u)\n\n    return []"
        },
        "solutionCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const adj = Array.from({ length: edges.length + 1 }, () => []);\n\n  function hasPath(src, target, visited) {\n    if (src === target) return true;\n    visited.add(src);\n    for (const neighbor of adj[src]) {\n      if (!visited.has(neighbor)) {\n        if (hasPath(neighbor, target, visited)) return true;\n      }\n    }\n    return false;\n  }\n\n  for (const [u, v] of edges) {\n    const visited = new Set();\n    if (hasPath(u, v, visited)) {\n      return [u, v];\n    }\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  return [];\n}",
          "python": "def findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(len(edges) + 1)]\n\n    def has_path(src: int, target: int, visited: set) -> bool:\n        if src == target:\n            return True\n        visited.add(src)\n        for neighbor in adj[src]:\n            if neighbor not in visited:\n                if has_path(neighbor, target, visited):\n                    return True\n        return False\n\n    for u, v in edges:\n        visited = set()\n        if has_path(u, v, visited):\n            return [u, v]\n        adj[u].append(v)\n        adj[v].append(u)\n\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                [1, 2],
                [1, 3],
                [2, 3]
              ]
            ],
            "expected": [2, 3],
            "description": "DFS discovers existing path 2 -> 1 -> 3 before adding edge [2, 3]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "DFS approach: For each edge [u, v], perform DFS to check if u can already reach v through previously added edges. If yes, [u, v] closes a cycle.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "title": "DFS PATH CHECKING",
              "adjList": {
                "1": [],
                "2": [],
                "3": []
              }
            },
            "vars": [
              ["method", "DFS Reachability"],
              ["current graph", "empty"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Edge [1, 2]: No path exists in graph. Add [1, 2] to adjacency list.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 2],
              "relaxedEdges": [[1, 2]],
              "title": "EDGE [1, 2] ADDED",
              "adjList": {
                "1": [2],
                "2": [1],
                "3": []
              }
            },
            "vars": [
              ["added", "[1, 2]"],
              ["hasPath(1, 2)", "false"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Edge [1, 3]: No path from 1 to 3 in graph. Add [1, 3] to adjacency list.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 2, 3],
              "relaxedEdges": [[1, 2], [1, 3]],
              "title": "EDGE [1, 3] ADDED",
              "adjList": {
                "1": [2, 3],
                "2": [1],
                "3": [1]
              }
            },
            "vars": [
              ["added", "[1, 3]"],
              ["hasPath(1, 3)", "false"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Edge [2, 3]: Launch DFS from 2 to target 3. Path 2 -> 1 -> 3 already exists in graph! Therefore, edge [2, 3] creates a cycle and is redundant.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "targetNode": 3,
              "visited": [2, 1, 3],
              "skippedEdges": [[2, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "callStack": ["dfs(2)", "dfs(1)", "dfs(3) ✓"],
              "paramBadges": {
                "2": "CYCLE",
                "3": "CYCLE"
              },
              "title": "DFS FOUND EXISTING PATH 2->1->3"
            },
            "best": {
              "label": "Redundant Edge via DFS: [2, 3]"
            },
            "vars": [
              ["hasPath(2, 3)", "TRUE"],
              ["existing path", "2 -> 1 -> 3"],
              ["redundant edge", "[2, 3]"]
            ]
          }
        ]
      },
      {
        "id": "bfs-cycle-detect",
        "label": "BFS Cycle Detection",
        "complexity": {
          "time": "O(N²)",
          "space": "O(N)"
        },
        "pseudocode": [
          "adj = createEmptyAdjacencyList()",
          "for [u, v] in edges:",
          "  if isReachableBFS(u, v, adj):",
          "    return [u, v] // already connected -> cycle edge!",
          "  adj[u].push(v), adj[v].push(u)"
        ],
        "starterCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const adj = Array.from({ length: edges.length + 1 }, () => []);\n\n  function isReachable(src, target) {\n    const queue = [src];\n    const visited = new Set([src]);\n    while (queue.length > 0) {\n      const curr = queue.shift();\n      if (curr === target) return true;\n      for (const neighbor of adj[curr]) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          queue.push(neighbor);\n        }\n      }\n    }\n    return false;\n  }\n\n  for (const [u, v] of edges) {\n    if (isReachable(u, v)) {\n      return [u, v];\n    }\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  return [];\n}",
          "python": "from collections import deque\n\ndef findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(len(edges) + 1)]\n\n    def is_reachable(src: int, target: int) -> bool:\n        queue = deque([src])\n        visited = {src}\n        while queue:\n            curr = queue.popleft()\n            if curr == target:\n                return True\n            for neighbor in adj[curr]:\n                if neighbor not in visited:\n                    visited.add(neighbor)\n                    queue.append(neighbor)\n        return False\n\n    for u, v in edges:\n        if is_reachable(u, v):\n            return [u, v]\n        adj[u].append(v)\n        adj[v].append(u)\n\n    return []"
        },
        "solutionCode": {
          "javascript": "function findRedundantConnection(edges) {\n  const adj = Array.from({ length: edges.length + 1 }, () => []);\n\n  function isReachable(src, target) {\n    const queue = [src];\n    const visited = new Set([src]);\n    while (queue.length > 0) {\n      const curr = queue.shift();\n      if (curr === target) return true;\n      for (const neighbor of adj[curr]) {\n        if (!visited.has(neighbor)) {\n          visited.add(neighbor);\n          queue.push(neighbor);\n        }\n      }\n    }\n    return false;\n  }\n\n  for (const [u, v] of edges) {\n    if (isReachable(u, v)) {\n      return [u, v];\n    }\n    adj[u].push(v);\n    adj[v].push(u);\n  }\n\n  return [];\n}",
          "python": "from collections import deque\n\ndef findRedundantConnection(edges: list[list[int]]) -> list[int]:\n    adj = [[] for _ in range(len(edges) + 1)]\n\n    def is_reachable(src: int, target: int) -> bool:\n        queue = deque([src])\n        visited = {src}\n        while queue:\n            curr = queue.popleft()\n            if curr == target:\n                return True\n            for neighbor in adj[curr]:\n                if neighbor not in visited:\n                    visited.add(neighbor)\n                    queue.append(neighbor)\n        return False\n\n    for u, v in edges:\n        if is_reachable(u, v):\n            return [u, v]\n        adj[u].append(v)\n        adj[v].append(u)\n\n    return []"
        },
        "testCases": [
          {
            "input": [
              [
                [1, 2],
                [1, 3],
                [2, 3]
              ]
            ],
            "expected": [2, 3],
            "description": "BFS queue reaches 3 from 2 before adding edge [2, 3]"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "BFS approach: Before adding each edge [u, v], use a FIFO queue to check if v is already reachable from u in the existing graph.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "queue": [],
              "title": "BFS REACHABILITY CHECK"
            },
            "vars": [
              ["queue", "[]"],
              ["edges processed", 0]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Edge [1, 2] and [1, 3] added: 1-2 and 1-3 are safe tree branches.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 1,
              "visited": [1, 2, 3],
              "relaxedEdges": [[1, 2], [1, 3]],
              "queue": [],
              "title": "TREE EDGES ADDED"
            },
            "vars": [
              ["tree edges", "[[1, 2], [1, 3]]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Edge [2, 3]: Start BFS at node 2 targeting node 3. Pop 2 -> queue push 1 -> pop 1 -> queue push 3 -> target reached! Edge [2, 3] closes a cycle.",
            "graph": {
              "nodes": [
                { "id": 1, "x": 180, "y": 70 },
                { "id": 2, "x": 110, "y": 190 },
                { "id": 3, "x": 250, "y": 190 }
              ],
              "edges": [
                { "from": 1, "to": 2 },
                { "from": 1, "to": 3 },
                { "from": 2, "to": 3 }
              ],
              "activeNode": 2,
              "targetNode": 3,
              "visited": [2, 1, 3],
              "skippedEdges": [[2, 3]],
              "relaxedEdges": [[1, 2], [1, 3]],
              "queue": [3],
              "title": "BFS REACHED TARGET 3 FROM 2"
            },
            "best": {
              "label": "Redundant Edge via BFS: [2, 3]"
            },
            "vars": [
              ["BFS target", "3 found!"],
              ["redundant edge", "[2, 3]"]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "word-ladder",
    "patternId": "graphs",
    "title": "Word Ladder",
    "subtitle": "Shortest transformation sequence via BFS",
    "kind": "problem",
    "leetcode": {
      "id": 127,
      "slug": "word-ladder",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta"
    ],
    "statement": "Given beginWord, endWord and a word list, return the length of the shortest transformation sequence from beginWord to endWord, changing one letter at a time, where every intermediate word is in the list (or 0 if impossible).\n\nASKED AT: Amazon Google Meta",
    "visualType": "graph",
    "initialInput": {
      "nodes": [
        { "id": "hit", "x": 60, "y": 140 },
        { "id": "hot", "x": 130, "y": 140 },
        { "id": "dot", "x": 200, "y": 80 },
        { "id": "lot", "x": 200, "y": 200 },
        { "id": "dog", "x": 270, "y": 80 },
        { "id": "log", "x": 270, "y": 200 },
        { "id": "cog", "x": 340, "y": 140 }
      ],
      "edges": [
        { "from": "hit", "to": "hot" },
        { "from": "hot", "to": "dot" },
        { "from": "hot", "to": "lot" },
        { "from": "dot", "to": "dog" },
        { "from": "dot", "to": "lot" },
        { "from": "lot", "to": "log" },
        { "from": "dog", "to": "log" },
        { "from": "dog", "to": "cog" },
        { "from": "log", "to": "cog" }
      ],
      "title": "WORD GRAPH (ONE-LETTER EDGES)"
    },
    "approaches": [
      {
        "id": "bfs-shortest-ladder",
        "label": "Words as a graph + BFS for the shortest ladder",
        "complexity": {
          "time": "O(N · L · 26)",
          "space": "O(N · L)"
        },
        "pseudocode": [
          "build graph: edge(a, b) if a, b differ by one letter",
          "queue = [beginWord]; dist[beginWord] = 1; visited = {beginWord}",
          "while queue: u = queue.pop_front()              // dequeue",
          "  for v in neighbours(u):",
          "    if v in visited: continue                  // already visited",
          "    dist[v] = dist[u] + 1; enqueue v           // first reach = shortest",
          "    if u == endWord: return dist[u]            // BFS finds shortest",
          "return 0                                       // unreachable"
        ],
        "starterCode": {
          "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n\n  while (queue.length > 0) {\n    const [currentWord, level] = queue.shift();\n    if (currentWord === endWord) return level;\n\n    for (let i = 0; i < currentWord.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const char = String.fromCharCode(c);\n        const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);\n        if (wordSet.has(nextWord) && !visited.has(nextWord)) {\n          visited.add(nextWord);\n          queue.push([nextWord, level + 1]);\n        }\n      }\n    }\n  }\n\n  return 0;\n}",
          "python": "from collections import deque\n\ndef ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    word_set = set(wordList)\n    if endWord not in word_set:\n        return 0\n\n    queue = deque([(beginWord, 1)])\n    visited = {beginWord}\n\n    while queue:\n        current_word, level = queue.popleft()\n        if current_word == endWord:\n            return level\n\n        for i in range(len(current_word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                next_word = current_word[:i] + c + current_word[i+1:]\n                if next_word in word_set and next_word not in visited:\n                    visited.add(next_word)\n                    queue.append((next_word, level + 1))\n\n    return 0"
        },
        "solutionCode": {
          "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n\n  const queue = [[beginWord, 1]];\n  const visited = new Set([beginWord]);\n\n  while (queue.length > 0) {\n    const [currentWord, level] = queue.shift();\n    if (currentWord === endWord) return level;\n\n    for (let i = 0; i < currentWord.length; i++) {\n      for (let c = 97; c <= 122; c++) {\n        const char = String.fromCharCode(c);\n        const nextWord = currentWord.slice(0, i) + char + currentWord.slice(i + 1);\n        if (wordSet.has(nextWord) && !visited.has(nextWord)) {\n          visited.add(nextWord);\n          queue.push([nextWord, level + 1]);\n        }\n      }\n    }\n  }\n\n  return 0;\n}",
          "python": "from collections import deque\n\ndef ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    word_set = set(wordList)\n    if endWord not in word_set:\n        return 0\n\n    queue = deque([(beginWord, 1)])\n    visited = {beginWord}\n\n    while queue:\n        current_word, level = queue.popleft()\n        if current_word == endWord:\n            return level\n\n        for i in range(len(current_word)):\n            for c in 'abcdefghijklmnopqrstuvwxyz':\n                next_word = current_word[:i] + c + current_word[i+1:]\n                if next_word in word_set and next_word not in visited:\n                    visited.add(next_word)\n                    queue.append((next_word, level + 1))\n\n    return 0"
        },
        "testCases": [
          {
            "input": [
              "hit",
              "cog",
              ["hot", "dot", "dog", "lot", "log", "cog"]
            ],
            "expected": 5,
            "description": "\"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" (shortest sequence length 5)"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Word Ladder (LeetCode 127): transform \"hit\" into \"cog\", changing ONE letter at a time, and every intermediate word must be in the word list. Model it as a GRAPH, each word is a node, and an edge joins two words that differ by exactly one letter. The answer is the SHORTEST ladder length (count of words on the path). Shortest path on an unweighted graph = BFS.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["begin", "hit"],
              ["end", "cog"],
              ["goal", "fewest words"]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize BFS: queue = [(\"hit\", 1)], dist[\"hit\"] = 1, visited = {\"hit\"}.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hit",
              "visited": ["hit"],
              "paramBadges": {
                "hit": "1"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "hit", "lvl": "lvl 1" }]
              }
            },
            "vars": [
              ["queue", "[\"hit\"]"],
              ["dist[\"hit\"]", 1],
              ["visited", "{\"hit\"}"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"hit\" (level 1). Because BFS processes layer-by-layer, dist[\"hit\"] = 1 is optimal. Now inspect its one-letter neighbors.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hit",
              "visited": ["hit"],
              "paramBadges": {
                "hit": "1"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["dequeue", "hit"],
              ["level", 1],
              ["queue left", 0]
            ]
          },
          {
            "codeLine": 4,
            "narration": "For word \"hit\", test changing each letter 'a'-'z'. Mutation \"hot\" exists in word list!",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hit",
              "candidateNodes": ["hot"],
              "activeEdges": [["hit", "hot"]],
              "visited": ["hit"],
              "paramBadges": {
                "hit": "1"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["u", "hit"],
              ["checking v", "hot"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "\"hot\" is not in visited! dist[\"hot\"] = dist[\"hit\"] + 1 = 2. Enqueue (\"hot\", 2) and add to visited.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hot",
              "visited": ["hit", "hot"],
              "relaxedEdges": [["hit", "hot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "hot", "lvl": "lvl 2" }]
              }
            },
            "vars": [
              ["dist[\"hot\"]", 2],
              ["queue", "[\"hot\"]"],
              ["visited", "{\"hit\", \"hot\"}"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"hot\" (level 2). BFS reaches all distance-2 words before distance-3 words. Scan 1-letter neighbours of \"hot\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hot",
              "visited": ["hit", "hot"],
              "relaxedEdges": [["hit", "hot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["dequeue", "hot"],
              ["level", 2],
              ["queue left", 0]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Checking mutations of \"hot\": found valid word \"dot\" in word list.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hot",
              "candidateNodes": ["dot"],
              "activeEdges": [["hot", "dot"]],
              "visited": ["hit", "hot"],
              "relaxedEdges": [["hit", "hot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["u", "hot"],
              ["checking v", "dot"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "\"dot\" is unvisited. Set dist[\"dot\"] = 3, visited.add(\"dot\"), and push \"dot\" to queue.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dot",
              "visited": ["hit", "hot", "dot"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "dot", "lvl": "lvl 3" }]
              }
            },
            "vars": [
              ["dist[\"dot\"]", 3],
              ["queue", "[\"dot\"]"]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Checking next mutation of \"hot\": found valid word \"lot\" in word list.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hot",
              "candidateNodes": ["lot"],
              "activeEdges": [["hot", "lot"]],
              "visited": ["hit", "hot", "dot"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "dot", "lvl": "lvl 3" }]
              }
            },
            "vars": [
              ["u", "hot"],
              ["checking v", "lot"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "\"lot\" is unvisited. Set dist[\"lot\"] = 3, visited.add(\"lot\"), and enqueue (\"lot\", 3).",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "lot",
              "visited": ["hit", "hot", "dot", "lot"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [
                  { "word": "dot", "lvl": "lvl 3" },
                  { "word": "lot", "lvl": "lvl 3" }
                ]
              }
            },
            "vars": [
              ["dist[\"lot\"]", 3],
              ["queue", "[\"dot\", \"lot\"]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"dot\" (level 3). Now expand all valid 1-letter substitutions from \"dot\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dot",
              "visited": ["hit", "hot", "dot", "lot"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "lot", "lvl": "lvl 3" }]
              }
            },
            "vars": [
              ["dequeue", "dot"],
              ["level", 3],
              ["queue left", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "From \"dot\", mutation \"dog\" is found in the word list and has not been visited.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dot",
              "candidateNodes": ["dog"],
              "activeEdges": [["dot", "dog"]],
              "visited": ["hit", "hot", "dot", "lot"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "lot", "lvl": "lvl 3" }]
              }
            },
            "vars": [
              ["u", "dot"],
              ["checking v", "dog"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"lot\" (level 3). Because BFS pulls words in non-decreasing level order, the first time we ever reach a word is along a shortest ladder, so dist[\"lot\"] = 3 is final. Now scan its one-letter neighbours.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "lot",
              "visited": ["hit", "hot", "dot", "lot", "dog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "dog", "lvl": "lvl 4" }]
              }
            },
            "vars": [
              ["dequeue", "lot"],
              ["level", 3],
              ["queue left", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "From \"lot\", scanning 1-letter substitutions: \"dot\" is in visited (skip), \"log\" is in word list!",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "lot",
              "candidateNodes": ["log"],
              "activeEdges": [["lot", "log"]],
              "visited": ["hit", "hot", "dot", "lot", "dog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "dog", "lvl": "lvl 4" }]
              }
            },
            "vars": [
              ["u", "lot"],
              ["checking v", "log"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "\"log\" is unvisited! dist[\"log\"] = dist[\"lot\"] + 1 = 4. visited.add(\"log\"), enqueue (\"log\", 4).",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "log",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [
                  { "word": "dog", "lvl": "lvl 4" },
                  { "word": "log", "lvl": "lvl 4" }
                ]
              }
            },
            "vars": [
              ["dist[\"log\"]", 4],
              ["queue", "[\"dog\", \"log\"]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"dog\" (level 4). Queue still has [\"log\"]. Now scan one-letter neighbors of \"dog\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "log", "lvl": "lvl 4" }]
              }
            },
            "vars": [
              ["dequeue", "dog"],
              ["level", 4],
              ["queue left", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "From \"dog\", check neighbor \"cog\". \"cog\" is the target endWord and not yet visited!",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dog",
              "candidateNodes": ["cog"],
              "activeEdges": [["dog", "cog"]],
              "visited": ["hit", "hot", "dot", "lot", "dog", "log"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "log", "lvl": "lvl 4" }]
              }
            },
            "vars": [
              ["u", "dog"],
              ["target found", "cog"]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Enqueue \"cog\" with dist[\"cog\"] = dist[\"dog\"] + 1 = 5. Mark \"cog\" as visited.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "targetNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [
                  { "word": "log", "lvl": "lvl 4" },
                  { "word": "cog", "lvl": "lvl 5" }
                ]
              }
            },
            "vars": [
              ["dist[\"cog\"]", 5],
              ["queue", "[\"log\", \"cog\"]"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"log\" (level 4). Queue now has [\"cog\"]. Scan neighbours of \"log\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "log",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "cog", "lvl": "lvl 5" }]
              }
            },
            "vars": [
              ["dequeue", "log"],
              ["level", 4],
              ["queue left", 1]
            ]
          },
          {
            "codeLine": 4,
            "narration": "From \"log\", neighbours \"lot\", \"dog\", \"cog\" are all in visited. Skip.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "log",
              "activeEdges": [["log", "cog"], ["dog", "log"]],
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "cog", "lvl": "lvl 5" }]
              }
            },
            "vars": [
              ["u", "log"],
              ["status", "all neighbours visited"]
            ]
          },
          {
            "codeLine": 5,
            "narration": "if v in visited: continue for all visited neighbours of \"log\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "log",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "cog", "lvl": "lvl 5" }]
              }
            },
            "vars": [
              ["skipped", "visited neighbours"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Queue has 1 element remaining: \"cog\" (level 5).",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": [{ "word": "cog", "lvl": "lvl 5" }]
              }
            },
            "vars": [
              ["next in queue", "cog"],
              ["queue left", 1]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Popping front of queue: pop \"cog\".",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["popping", "cog"]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Assign u = \"cog\", level = 5.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["u", "cog"],
              ["level", 5]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Dequeue \"cog\" (level 5). Because BFS pulls words in non-decreasing level order, the first time we ever reach a word is along a shortest ladder, so dist[\"cog\"] = 5 is final. Now scan its one-letter neighbours.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["hot", "lot"], ["dot", "dog"], ["lot", "log"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["dequeue", "cog"],
              ["level", 5],
              ["queue left", 0]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Check condition: u == endWord (\"cog\" == \"cog\") is TRUE! Return dist[\"cog\"] = 5.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "targetNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["dot", "dog"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5 ✓"
              },
              "title": "WORD GRAPH (ONE-LETTER EDGES)",
              "horizontalQueue": {
                "title": "BFS QUEUE",
                "items": []
              }
            },
            "vars": [
              ["condition", "u == endWord"],
              ["return dist[u]", 5]
            ]
          },
          {
            "codeLine": 7,
            "narration": "BFS Complete! Shortest transformation path is \"hit\" -> \"hot\" -> \"dot\" -> \"dog\" -> \"cog\" with length 5 words. Time Complexity: O(N · L · 26), Space Complexity: O(N · L).",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "targetNode": "cog",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["dot", "dog"], ["dog", "cog"]],
              "paramBadges": {
                "hit": "1",
                "hot": "2",
                "dot": "3",
                "lot": "3",
                "dog": "4",
                "log": "4",
                "cog": "5 ✓"
              },
              "title": "SHORTEST PATH = 5 WORDS"
            },
            "best": {
              "label": "Shortest Transformation: 5"
            },
            "vars": [
              ["shortest ladder", 5],
              ["path", "hit -> hot -> dot -> dog -> cog"],
              ["time", "O(N · L · 26)"],
              ["space", "O(N · L)"]
            ]
          }
        ]
      },
      {
        "id": "bidirectional-bfs",
        "label": "Bidirectional BFS (Two-Ended BFS)",
        "complexity": {
          "time": "O(N · L · 26)",
          "space": "O(N · L)"
        },
        "pseudocode": [
          "beginSet = {beginWord}, endSet = {endWord}, len = 1",
          "while beginSet and endSet:",
          "  if len(beginSet) > len(endSet): swap(beginSet, endSet) // expand smaller set",
          "  nextSet = set()",
          "  for word in beginSet:",
          "    for neighbor in get1LetterMutations(word):",
          "      if neighbor in endSet: return len + 1  // frontiers meet!",
          "      if neighbor in wordSet: nextSet.add(neighbor); wordSet.remove(neighbor)",
          "  beginSet = nextSet; len += 1",
          "return 0"
        ],
        "starterCode": {
          "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n\n  let beginSet = new Set([beginWord]);\n  let endSet = new Set([endWord]);\n  let len = 1;\n\n  while (beginSet.size > 0 && endSet.size > 0) {\n    if (beginSet.size > endSet.size) {\n      const temp = beginSet;\n      beginSet = endSet;\n      endSet = temp;\n    }\n\n    const nextSet = new Set();\n    for (const word of beginSet) {\n      for (let i = 0; i < word.length; i++) {\n        for (let c = 97; c <= 122; c++) {\n          const char = String.fromCharCode(c);\n          const nextWord = word.slice(0, i) + char + word.slice(i + 1);\n          if (endSet.has(nextWord)) return len + 1;\n          if (wordSet.has(nextWord)) {\n            nextSet.add(nextWord);\n            wordSet.delete(nextWord);\n          }\n        }\n      }\n    }\n    beginSet = nextSet;\n    len++;\n  }\n\n  return 0;\n}",
          "python": "def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    word_set = set(wordList)\n    if endWord not in word_set:\n        return 0\n\n    begin_set = {beginWord}\n    end_set = {endWord}\n    length = 1\n\n    while begin_set and end_set:\n        if len(begin_set) > len(end_set):\n            begin_set, end_set = end_set, begin_set\n\n        next_set = set()\n        for word in begin_set:\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    next_word = word[:i] + c + word[i+1:]\n                    if next_word in end_set:\n                        return length + 1\n                    if next_word in word_set:\n                        next_set.add(next_word)\n                        word_set.remove(next_word)\n        begin_set = next_set\n        length += 1\n\n    return 0"
        },
        "solutionCode": {
          "javascript": "function ladderLength(beginWord, endWord, wordList) {\n  const wordSet = new Set(wordList);\n  if (!wordSet.has(endWord)) return 0;\n\n  let beginSet = new Set([beginWord]);\n  let endSet = new Set([endWord]);\n  let len = 1;\n\n  while (beginSet.size > 0 && endSet.size > 0) {\n    if (beginSet.size > endSet.size) {\n      const temp = beginSet;\n      beginSet = endSet;\n      endSet = temp;\n    }\n\n    const nextSet = new Set();\n    for (const word of beginSet) {\n      for (let i = 0; i < word.length; i++) {\n        for (let c = 97; c <= 122; c++) {\n          const char = String.fromCharCode(c);\n          const nextWord = word.slice(0, i) + char + word.slice(i + 1);\n          if (endSet.has(nextWord)) return len + 1;\n          if (wordSet.has(nextWord)) {\n            nextSet.add(nextWord);\n            wordSet.delete(nextWord);\n          }\n        }\n      }\n    }\n    beginSet = nextSet;\n    len++;\n  }\n\n  return 0;\n}",
          "python": "def ladderLength(beginWord: str, endWord: str, wordList: list[str]) -> int:\n    word_set = set(wordList)\n    if endWord not in word_set:\n        return 0\n\n    begin_set = {beginWord}\n    end_set = {endWord}\n    length = 1\n\n    while begin_set and end_set:\n        if len(begin_set) > len(end_set):\n            begin_set, end_set = end_set, begin_set\n\n        next_set = set()\n        for word in begin_set:\n            for i in range(len(word)):\n                for c in 'abcdefghijklmnopqrstuvwxyz':\n                    next_word = word[:i] + c + word[i+1:]\n                    if next_word in end_set:\n                        return length + 1\n                    if next_word in word_set:\n                        next_set.add(next_word)\n                        word_set.remove(next_word)\n        begin_set = next_set\n        length += 1\n\n    return 0"
        },
        "testCases": [
          {
            "input": [
              "hit",
              "cog",
              ["hot", "dot", "dog", "lot", "log", "cog"]
            ],
            "expected": 5,
            "description": "Bidirectional search meets in middle: length 5"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Bidirectional BFS: Maintain two frontiers simultaneously: beginSet = {\"hit\"} and endSet = {\"cog\"}. Always expand the smaller frontier to drastically reduce search volume from O(b^d) to O(b^(d/2)).",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hit",
              "targetNode": "cog",
              "title": "BIDIRECTIONAL BFS FRONTIERS"
            },
            "vars": [
              ["beginSet", "{\"hit\"}"],
              ["endSet", "{\"cog\"}"],
              ["len", 1]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Forward expansion from {\"hit\"}: Mutation leads to {\"hot\"}. Update beginSet = {\"hot\"}, len = 2.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "hot",
              "targetNode": "cog",
              "visited": ["hit", "hot"],
              "relaxedEdges": [["hit", "hot"]],
              "title": "FORWARD EXPAND -> {\"hot\"}"
            },
            "vars": [
              ["beginSet", "{\"hot\"}"],
              ["endSet", "{\"cog\"}"],
              ["len", 2]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Backward expansion from {\"cog\"}: Mutation leads to {\"dog\", \"log\"}. Swap sets so we expand the smaller set.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "cog",
              "candidateNodes": ["dog", "log"],
              "visited": ["hit", "hot", "cog", "dog", "log"],
              "relaxedEdges": [["hit", "hot"], ["dog", "cog"], ["log", "cog"]],
              "title": "BACKWARD EXPAND -> {\"dog\", \"log\"}"
            },
            "vars": [
              ["forward set", "{\"hot\"}"],
              ["backward set", "{\"dog\", \"log\"}"],
              ["len", 3]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Expanding {\"hot\"}: Mutations yield \"dot\" and \"lot\". \"dot\" connects directly to backward frontier member \"dog\"! Frontiers meet -> total shortest ladder length = 5.",
            "graph": {
              "nodes": [
                { "id": "hit", "x": 60, "y": 140 },
                { "id": "hot", "x": 130, "y": 140 },
                { "id": "dot", "x": 200, "y": 80 },
                { "id": "lot", "x": 200, "y": 200 },
                { "id": "dog", "x": 270, "y": 80 },
                { "id": "log", "x": 270, "y": 200 },
                { "id": "cog", "x": 340, "y": 140 }
              ],
              "edges": [
                { "from": "hit", "to": "hot" },
                { "from": "hot", "to": "dot" },
                { "from": "hot", "to": "lot" },
                { "from": "dot", "to": "dog" },
                { "from": "dot", "to": "lot" },
                { "from": "lot", "to": "log" },
                { "from": "dog", "to": "log" },
                { "from": "dog", "to": "cog" },
                { "from": "log", "to": "cog" }
              ],
              "activeNode": "dot",
              "visited": ["hit", "hot", "dot", "lot", "dog", "log", "cog"],
              "relaxedEdges": [["hit", "hot"], ["hot", "dot"], ["dot", "dog"], ["dog", "cog"]],
              "title": "FRONTIERS MET AT DOT -> DOG"
            },
            "best": {
              "label": "Bidirectional BFS: 5 Words"
            },
            "vars": [
              ["result", 5],
              ["meeting edge", "\"dot\" <-> \"dog\""],
              ["complexity", "O(b^(d/2)) search space"]
            ]
          }
        ]
      }
    ]
  }
];
