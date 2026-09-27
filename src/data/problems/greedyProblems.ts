import { Problem } from '../../types';

export const greedyProblems: Problem[] = [
  {
  "id": "intro",
  "patternId": "greedy",
  "title": "Overview",
  "subtitle": "Take the best local choice, never look back",
  "kind": "concept",
  "statement": "A Greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most immediate, local benefit. Once a choice is made, it is NEVER reconsidered (no backtracking). Greedy works when the problem exhibits the Greedy Choice Property and Optimal Substructure.",
  "visualType": "array",
  "initialInput": [
    1,
    5,
    10,
    25
  ],
  "approaches": [
    {
      "id": "the-greedy-paradigm",
      "label": "The greedy paradigm",
      "complexity": {
        "time": "O(n)",
        "space": "O(1)"
      },
      "pseudocode": [
        "greedy(problem):",
        "    solution = empty",
        "    while not done:",
        "        choice = best LOCAL option right now",
        "        commit to choice    // never reconsidered",
        "        reduce problem by choice",
        "    return solution",
        "// valid only if greedy-choice property + optimal substructure"
      ],
      "starterCode": {
        "javascript": "function greedyParadigm(denominations, amount) {\n  const result = [];\n  // Sort descending to always pick the largest coin that fits\n  denominations.sort((a, b) => b - a);\n  for (let coin of denominations) {\n    while (amount >= coin) {\n      result.push(coin);\n      amount -= coin;\n    }\n  }\n  return result;\n}",
        "python": "def greedyParadigm(denominations: list[int], amount: int) -> list[int]:\n    result = []\n    for coin in sorted(denominations, reverse=True):\n        while amount >= coin:\n            result.append(coin)\n            amount -= coin\n    return result"
      },
      "solutionCode": {
        "javascript": "function greedyParadigm(denominations, amount) {\n  const result = [];\n  denominations.sort((a, b) => b - a);\n  for (let coin of denominations) {\n    while (amount >= coin) {\n      result.push(coin);\n      amount -= coin;\n    }\n  }\n  return result;\n}",
        "python": "def greedyParadigm(denominations: list[int], amount: int) -> list[int]:\n    result = []\n    for coin in sorted(denominations, reverse=True):\n        while amount >= coin:\n            result.append(coin)\n            amount -= coin\n    return result"
      },
      "testCases": [
        {
          "input": [
            [
              1,
              5,
              10,
              25
            ],
            30
          ],
          "expected": [
            25,
            5
          ],
          "description": "Canonical US coin change for 30"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "The Greedy Paradigm: At each step, take whatever choice looks BEST right now without worrying about the future, and NEVER reconsider or backtrack. Simple, blazing fast, and optimal — IF the problem allows it.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ]
          },
          "highlights": [
            3
          ],
          "pointers": [
            {
              "name": "greedy",
              "index": 3,
              "color": "accent"
            }
          ],
          "vars": [
            [
              "rule",
              "pick best local choice"
            ],
            [
              "backtrack",
              "never"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Unlike Dynamic Programming which tries all possibilities, Greedy commits to one path forward. It makes one irrevocable decision at each stage.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ]
          },
          "highlights": [
            3
          ],
          "vars": [
            [
              "approach",
              "forward-only"
            ],
            [
              "space",
              "O(1)"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Two golden rules are required for Greedy to be correct: (1) Greedy-Choice Property — locally optimal choices lead to a global optimum. (2) Optimal Substructure — an optimal solution contains optimal solutions to subproblems.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
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
              "property 1",
              "greedy-choice"
            ],
            [
              "property 2",
              "optimal substructure"
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Worked example: coin change with the canonical set [1, 5, 10, 25]. Goal: make 30 with the FEWEST coins. The greedy rule: always grab the LARGEST coin that still fits. With these denominations that rule is provably optimal.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
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
              "amount",
              30
            ],
            [
              "picked",
              "[]"
            ],
            [
              "count",
              0
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "amount = 30. Largest coin that fits is 25 (the next one, 25, fits; nothing bigger exists). Take it. This is the greedy choice: 25 leaves the SMALLEST possible remainder, so it can never hurt us. amount -> 5.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ]
          },
          "highlights": [
            3
          ],
          "pointers": [
            {
              "name": "pick",
              "index": 3,
              "color": "accent"
            }
          ],
          "vars": [
            [
              "amount",
              5
            ],
            [
              "took",
              25
            ],
            [
              "picked",
              "[25]"
            ],
            [
              "count",
              1
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "amount = 5. Largest coin that fits is 5. Take it -> amount becomes 0.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ]
          },
          "highlights": [
            1
          ],
          "pointers": [
            {
              "name": "pick",
              "index": 1,
              "color": "accent"
            }
          ],
          "vars": [
            [
              "amount",
              0
            ],
            [
              "took",
              5
            ],
            [
              "picked",
              "[25, 5]"
            ],
            [
              "count",
              2
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "amount = 0 -> done. We made 30 with [25, 5] = just 2 coins, and that is provably optimal. Greedy WORKED because the canonical coin system has the greedy-choice property.",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ],
            "banner": "★ 25 + 5 = 30 · 2 coins"
          },
          "highlights": [
            1,
            3
          ],
          "best": {
            "label": "25 + 5 = 30 (2 coins)"
          },
          "vars": [
            [
              "amount",
              0
            ],
            [
              "picked",
              "[25, 5]"
            ],
            [
              "count",
              2
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "When does Greedy FAIL? Suppose coin denominations are [1, 3, 4] and we want to make 6. Watch what happens when we blindly pick the biggest coin.",
          "customVisual": {
            "array": [
              1,
              3,
              4
            ]
          },
          "highlights": [
            0,
            1,
            2
          ],
          "vars": [
            [
              "amount",
              6
            ],
            [
              "coins",
              "[1, 3, 4]"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Greedy takes 4 -> amount = 2, then can only use 1 + 1. Total: 4 + 1 + 1 = THREE coins. But the OPTIMAL answer is 3 + 3 = two coins. The locally best move (the big 4) painted us into a corner.",
          "customVisual": {
            "array": [
              1,
              3,
              4
            ],
            "banner": "★ optimal: 3 + 3 = 2 coins"
          },
          "highlights": [
            1,
            2
          ],
          "best": {
            "label": "Optimal = 2 coins (3 + 3)"
          },
          "vars": [
            [
              "greedy",
              "4+1+1 = 3 coins"
            ],
            [
              "optimal",
              "3+3 = 2 coins"
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Rule of thumb: Greedy is the first idea to try because it is O(N). But you must prove the greedy-choice property. If a counter-example exists, switch to Dynamic Programming!",
          "customVisual": {
            "array": [
              1,
              5,
              10,
              25
            ],
            "banner": "★ Greedy vs DP Tradeoff"
          },
          "highlights": [
            0,
            1,
            2,
            3
          ],
          "best": {
            "label": "Check Greedy-Choice Property First"
          },
          "vars": [
            [
              "rule",
              "prove greedy choice"
            ],
            [
              "fallback",
              "Dynamic Programming"
            ],
            [
              "time",
              "O(N) vs O(N · W)"
            ]
          ]
        }
      ]
    }
  ]
},
  {
    id: 'best-time-to-buy-and-sell-stock',
    patternId: 'greedy',
    title: 'Best Time to Buy and Sell Stock',
    subtitle: 'Track the cheapest day seen so far',
    difficulty: 'Easy',
    leetcodeId: 121,
    askedAt: ['Amazon', 'Microsoft', 'Google', 'Apple', 'Meta'],
    kind: 'problem',
    statement: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.',
    visualType: 'array',
    initialInput: [7, 1, 5, 3, 6, 4],
    approaches: [
      {
        id: 'one-pass-greedy',
        label: 'One-Pass Greedy Minimum',
        complexity: {
          time: 'O(N)',
          space: 'O(1)'
        },
        pseudocode: [
          'min_price = Infinity, max_profit = 0',
          'for price in prices:',
          '    if price < min_price:',
          '        min_price = price',
          '    else:',
          '        max_profit = max(max_profit, price - min_price)',
          'return max_profit'
        ],
        starterCode: {
          javascript: `function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n      maxProfit = price - minPrice;\n    }\n  }\n  return maxProfit;\n}`,
          python: `def maxProfit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit`
        },
        solutionCode: {
          javascript: `function maxProfit(prices) {\n  let minPrice = Infinity;\n  let maxProfit = 0;\n  for (let price of prices) {\n    if (price < minPrice) {\n      minPrice = price;\n    } else if (price - minPrice > maxProfit) {\n      maxProfit = price - minPrice;\n    }\n  }\n  return maxProfit;\n}`,
          python: `def maxProfit(prices: list[int]) -> int:\n    min_price = float('inf')\n    max_profit = 0\n    for p in prices:\n        if p < min_price:\n            min_price = p\n        elif p - min_price > max_profit:\n            max_profit = p - min_price\n    return max_profit`
        },
        testCases: [
          {
            input: [[7, 1, 5, 3, 6, 4]],
            expected: 5,
            description: "Buy day 2 ($1), sell day 5 ($6) = $5 profit"
          },
          {
            input: [[7, 6, 4, 3, 1]],
            expected: 0,
            description: "Decreasing prices -> profit 0"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize min_price = Infinity, max_profit = 0. Greedily maintain the minimum purchase price as we sweep left-to-right.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            vars: [
              ['min_price', 'Infinity'],
              ['max_profit', 0]
            ]
          },
          {
            codeLine: 3,
            narration: "Day 0 (price = 7): price < Infinity -> update min_price = 7.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [0],
            pointers: [{ name: 'min_buy', index: 0, color: 'accent' }],
            vars: [
              ['price', 7],
              ['min_price', 7],
              ['max_profit', 0]
            ]
          },
          {
            codeLine: 4,
            narration: "Day 1 (price = 1): price 1 < 7 -> new absolute lowest buy price! min_price = 1.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1],
            pointers: [{ name: 'min_buy', index: 1, color: 'accent' }],
            vars: [
              ['price', 1],
              ['min_price', 1],
              ['max_profit', 0]
            ]
          },
          {
            codeLine: 6,
            narration: "Day 2 (price = 5): sell potential = 5 - 1 = 4. Update max_profit = 4.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1, 2],
            pointers: [
              { name: 'min_buy', index: 1, color: 'accent' },
              { name: 'sell', index: 2, color: 'green' }
            ],
            vars: [
              ['price', 5],
              ['min_price', 1],
              ['current profit', 4],
              ['max_profit', 4]
            ]
          },
          {
            codeLine: 6,
            narration: "Day 3 (price = 3): profit = 3 - 1 = 2 < 4. max_profit stays 4.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1, 3],
            pointers: [
              { name: 'min_buy', index: 1, color: 'accent' },
              { name: 'day', index: 3, color: 'amber' }
            ],
            vars: [
              ['price', 3],
              ['min_price', 1],
              ['max_profit', 4]
            ]
          },
          {
            codeLine: 6,
            narration: "Day 4 (price = 6): sell potential = 6 - 1 = 5 > 4! New global max_profit = 5.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1, 4],
            pointers: [
              { name: 'min_buy', index: 1, color: 'accent' },
              { name: 'best_sell', index: 4, color: 'green' }
            ],
            best: { label: 'Max Profit = $5 (Buy at $1, Sell at $6)' },
            vars: [
              ['price', 6],
              ['min_price', 1],
              ['profit', 5],
              ['max_profit', 5]
            ]
          },
          {
            codeLine: 6,
            narration: "Day 5 (price = 4): profit = 4 - 1 = 3 < 5. Sweep complete.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1, 4],
            best: { label: 'Max Profit = $5' },
            vars: [
              ['status', 'COMPLETE'],
              ['max_profit', 5]
            ]
          },
          {
            codeLine: 7,
            narration: "Return max_profit = 5 in O(N) time and O(1) space.",
            customVisual: { array: [7, 1, 5, 3, 6, 4] },
            highlights: [1, 4],
            best: { label: 'Max Profit = $5' },
            vars: [
              ['return', 5],
              ['time', 'O(N)'],
              ['space', 'O(1)']
            ]
          }
        ]
      }
    ]
  },
  {
  "id": "gas-station",
  "patternId": "greedy",
  "title": "Gas Station",
  "subtitle": "If total gas >= total cost, one start works, find it",
  "difficulty": "Medium",
  "leetcodeId": 134,
  "askedAt": [
    "Amazon",
    "Google",
    "Microsoft"
  ],
  "kind": "problem",
  "statement": "Given gas available at each station along a circular route and the cost to travel from each station to the next, return the starting station index from which you can complete the full loop, or -1 if no such start exists. A unique answer is guaranteed when one exists.",
  "visualType": "array",
  "initialInput": [
    1,
    2,
    3,
    4,
    5
  ],
  "approaches": [
    {
      "id": "greedy-one-pass-reset",
      "label": "Greedy - one pass, reset start past each failure",
      "complexity": {
        "time": "O(n)",
        "space": "O(1)"
      },
      "pseudocode": [
        "given gas, cost",
        "total = 0; tank = 0; start = 0",
        "for i = 0 to n - 1:",
        "    d = gas[i] - cost[i]",
        "    total += d; tank += d",
        "    if tank < 0:        // segment start..i unusable",
        "        start = i + 1; tank = 0",
        "return total >= 0 ? start : -1"
      ],
      "starterCode": {
        "javascript": "function canCompleteCircuit(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const d = gas[i] - cost[i];\n    total += d;\n    tank += d;\n    if (tank < 0) {\n      start = i + 1;\n      tank = 0;\n    }\n  }\n  return total >= 0 ? start : -1;\n}",
        "python": "def canCompleteCircuit(gas: list[int], cost: list[int]) -> int:\n    total = tank = start = 0\n    for i in range(len(gas)):\n        d = gas[i] - cost[i]\n        total += d\n        tank += d\n        if tank < 0:\n            start = i + 1\n            tank = 0\n    return start if total >= 0 else -1"
      },
      "solutionCode": {
        "javascript": "function canCompleteCircuit(gas, cost) {\n  let total = 0, tank = 0, start = 0;\n  for (let i = 0; i < gas.length; i++) {\n    const d = gas[i] - cost[i];\n    total += d;\n    tank += d;\n    if (tank < 0) {\n      start = i + 1;\n      tank = 0;\n    }\n  }\n  return total >= 0 ? start : -1;\n}",
        "python": "def canCompleteCircuit(gas: list[int], cost: list[int]) -> int:\n    total = tank = start = 0\n    for i in range(len(gas)):\n        d = gas[i] - cost[i]\n        total += d\n        tank += d\n        if tank < 0:\n            start = i + 1\n            tank = 0\n    return start if total >= 0 else -1"
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
            [
              3,
              4,
              5,
              1,
              2
            ]
          ],
          "expected": 3,
          "description": "Start at station 3 (gas=4, cost=1) completes full loop"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Circular route of 5 stations. gas[i] = fuel you gain at station i, cost[i] = fuel to drive from i to i+1. Start with an empty tank at some station and find an index you can begin at to complete the full loop, or report -1.",
          "customVisual": {
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
              "highlights": []
            }
          },
          "vars": [
            [
              "gas",
              "[1, 2, 3, 4, 5]"
            ],
            [
              "cost",
              "[3, 4, 5, 1, 2]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "Initialise: total = 0 (running sum of every net, to test feasibility), tank = 0 (fuel since the CURRENT candidate start), start = 0 (the candidate we are testing).",
          "customVisual": {
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
              "highlights": []
            }
          },
          "pointers": [
            {
              "name": "start",
              "index": 0,
              "color": "accent"
            }
          ],
          "vars": [
            [
              "total",
              0
            ],
            [
              "tank",
              0
            ],
            [
              "start",
              0
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "i = 0. Testing station 0 as candidate start.",
          "highlights": [
            0
          ],
          "secondaryHighlights": [
            0
          ],
          "pointers": [
            {
              "name": "start",
              "index": 0,
              "color": "accent"
            },
            {
              "name": "i",
              "index": 0,
              "color": "amber"
            }
          ],
          "customVisual": {
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "total",
              0
            ],
            [
              "tank",
              0
            ],
            [
              "start",
              0
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Station 0: net = 1 - 3 = -2. Add to the tank (tank = -2) and to the overall total (total = -2).",
          "highlights": [
            0
          ],
          "secondaryHighlights": [
            0
          ],
          "pointers": [
            {
              "name": "start",
              "index": 0,
              "color": "accent"
            },
            {
              "name": "i",
              "index": 0,
              "color": "amber"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 0,
                "end": 0,
                "color": "accent",
                "label": "FROM START=0"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "net",
              -2
            ],
            [
              "total",
              -2
            ],
            [
              "tank",
              -2
            ],
            [
              "start",
              0
            ]
          ]
        },
        {
          "codeLine": 5,
          "narration": "tank = negative dropped below 0 driving from start=0 through 0. KEY GREEDY INSIGHT: no station in [0..0] can be a valid start either, each prefix from 0 was >= 0, so removing any of those leading stations only LOWERS the tank at i. So skip the whole segment: reset start = 1, tank = 0.",
          "highlights": [
            0
          ],
          "pointers": [
            {
              "name": "i",
              "index": 0,
              "color": "red"
            },
            {
              "name": "start",
              "index": 1,
              "color": "accent"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 0,
                "end": 0,
                "color": "red",
                "label": "DEAD SEGMENT [0..0]"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "total",
              -2
            ],
            [
              "tank",
              0
            ],
            [
              "start",
              1
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Station 1: net = 2 - 4 = -2. Add to total (-4) and tank (-2).",
          "highlights": [
            1
          ],
          "secondaryHighlights": [
            1
          ],
          "pointers": [
            {
              "name": "start",
              "index": 1,
              "color": "accent"
            },
            {
              "name": "i",
              "index": 1,
              "color": "amber"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 1,
                "end": 1,
                "color": "accent",
                "label": "FROM START=1"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "net",
              -2
            ],
            [
              "total",
              -4
            ],
            [
              "tank",
              -2
            ],
            [
              "start",
              1
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "tank (-2) < 0. Station 1 also failed immediately. Dead segment is now [0..1]. Reset start = 2, tank = 0.",
          "highlights": [
            1
          ],
          "pointers": [
            {
              "name": "i",
              "index": 1,
              "color": "red"
            },
            {
              "name": "start",
              "index": 2,
              "color": "accent"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 0,
                "end": 1,
                "color": "red",
                "label": "DEAD SEGMENT [0..1]"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "total",
              -4
            ],
            [
              "tank",
              0
            ],
            [
              "start",
              2
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Station 2: net = 3 - 5 = -2. Add to total (-6) and tank (-2).",
          "highlights": [
            2
          ],
          "secondaryHighlights": [
            2
          ],
          "pointers": [
            {
              "name": "start",
              "index": 2,
              "color": "accent"
            },
            {
              "name": "i",
              "index": 2,
              "color": "amber"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 2,
                "end": 2,
                "color": "accent",
                "label": "FROM START=2"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "net",
              -2
            ],
            [
              "total",
              -6
            ],
            [
              "tank",
              -2
            ],
            [
              "start",
              2
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "tank (-2) < 0. Dead segment is now [0..2]. Reset start = 3, tank = 0.",
          "highlights": [
            2
          ],
          "pointers": [
            {
              "name": "i",
              "index": 2,
              "color": "red"
            },
            {
              "name": "start",
              "index": 3,
              "color": "green"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 0,
                "end": 2,
                "color": "red",
                "label": "DEAD SEGMENT [0..2]"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "total",
              -6
            ],
            [
              "tank",
              0
            ],
            [
              "start",
              3
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Station 3: net = 4 - 1 = +3. Add to total (total = -3) and tank (tank = 3 >= 0). Station 3 is positive!",
          "highlights": [
            3
          ],
          "secondaryHighlights": [
            3
          ],
          "pointers": [
            {
              "name": "start",
              "index": 3,
              "color": "green"
            },
            {
              "name": "i",
              "index": 3,
              "color": "amber"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 3,
                "end": 3,
                "color": "green",
                "label": "CANDIDATE START [3..3]"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
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
              "net",
              3
            ],
            [
              "total",
              -3
            ],
            [
              "tank",
              3
            ],
            [
              "start",
              3
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "Station 4: net = 5 - 2 = +3. Add to total (total = 0) and tank (tank = 6 >= 0). Tank never dropped below 0 from index 3 onwards!",
          "highlights": [
            3,
            4
          ],
          "secondaryHighlights": [
            3,
            4
          ],
          "pointers": [
            {
              "name": "start",
              "index": 3,
              "color": "green"
            },
            {
              "name": "i",
              "index": 4,
              "color": "amber"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 3,
                "end": 4,
                "color": "green",
                "label": "VALID ROUTE [3..4]"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
              "highlights": [
                3,
                4
              ]
            }
          },
          "best": {
            "label": "Total Gas >= Total Cost (Surplus 0 >= 0)"
          },
          "vars": [
            [
              "i",
              4
            ],
            [
              "net",
              3
            ],
            [
              "total",
              0
            ],
            [
              "tank",
              6
            ],
            [
              "start",
              3
            ]
          ]
        },
        {
          "codeLine": 8,
          "narration": "Total net gas = 0 >= 0, so the loop is fully possible. The ONLY valid starting station is index 3. Return 3.",
          "highlights": [
            3
          ],
          "secondaryHighlights": [
            3
          ],
          "pointers": [
            {
              "name": "start",
              "index": 3,
              "color": "green"
            }
          ],
          "customVisual": {
            "brackets": [
              {
                "start": 3,
                "end": 4,
                "color": "green",
                "label": "VALID START = INDEX 3"
              }
            ],
            "secondaryArray": {
              "array": [
                3,
                4,
                5,
                1,
                2
              ],
              "label": "COST",
              "highlights": [
                3
              ]
            }
          },
          "best": {
            "label": "Start Station: Index 3"
          },
          "vars": [
            [
              "return",
              3
            ],
            [
              "time",
              "O(N)"
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
  "id": "jump-game",
  "patternId": "greedy",
  "title": "Jump Game",
  "subtitle": "Track the farthest index you can reach",
  "difficulty": "Medium",
  "leetcodeId": 55,
  "askedAt": [
    "Amazon",
    "Google",
    "Microsoft"
  ],
  "kind": "problem",
  "statement": "Given an array where each element is the maximum jump length from that position, determine whether you can reach the last index starting from the first index.",
  "visualType": "array",
  "initialInput": [
    2,
    3,
    1,
    1,
    4
  ],
  "approaches": [
    {
      "id": "greedy-farthest-reach-one-pass",
      "label": "Greedy - farthest reach in one pass",
      "complexity": {
        "time": "O(n)",
        "space": "O(1)"
      },
      "pseudocode": [
        "given nums",
        "farthest = 0",
        "for i = 0 to n - 1:",
        "    if i > farthest: return false",
        "    farthest = max(farthest, i + nums[i])",
        "    if farthest >= n - 1: return true",
        "return true"
      ],
      "starterCode": {
        "javascript": "function canJump(nums) {\n  let farthest = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > farthest) return false;\n    farthest = Math.max(farthest, i + nums[i]);\n    if (farthest >= nums.length - 1) return true;\n  }\n  return true;\n}",
        "python": "def canJump(nums: list[int]) -> bool:\n    farthest = 0\n    for i in range(len(nums)):\n        if i > farthest:\n            return False\n        farthest = max(farthest, i + nums[i])\n        if farthest >= len(nums) - 1:\n            return True\n    return True"
      },
      "solutionCode": {
        "javascript": "function canJump(nums) {\n  let farthest = 0;\n  for (let i = 0; i < nums.length; i++) {\n    if (i > farthest) return false;\n    farthest = Math.max(farthest, i + nums[i]);\n    if (farthest >= nums.length - 1) return true;\n  }\n  return true;\n}",
        "python": "def canJump(nums: list[int]) -> bool:\n    farthest = 0\n    for i in range(len(nums)):\n        if i > farthest:\n            return False\n        farthest = max(farthest, i + nums[i])\n        if farthest >= len(nums) - 1:\n            return True\n    return True"
      },
      "testCases": [
        {
          "input": [
            [
              2,
              3,
              1,
              1,
              4
            ]
          ],
          "expected": true,
          "description": "Jump 1 step from index 0 to 1, then 3 steps to the last index"
        },
        {
          "input": [
            [
              3,
              2,
              1,
              0,
              4
            ]
          ],
          "expected": false,
          "description": "Stuck at index 3 with 0 jump length"
        }
      ],
      "steps": [
        {
          "codeLine": 1,
          "narration": "Jump Game: from index i you may jump up to nums[i] steps forward. Can we reach the last index? The greedy idea is to track ONE number, farthest, the maximum index reachable so far, and never look back.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ]
          },
          "highlights": [
            0
          ],
          "vars": [
            [
              "n",
              5
            ],
            [
              "last",
              4
            ],
            [
              "nums",
              "[2, 3, 1, 1, 4]"
            ]
          ]
        },
        {
          "codeLine": 2,
          "narration": "farthest = 0. Standing at the start we can at least reach index 0. We will sweep left to right and keep stretching this reach.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 0,
                "color": "amber",
                "label": "REACHABLE [0..0]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 0,
              "color": "blue",
              "position": "top"
            }
          ],
          "highlights": [
            0
          ],
          "vars": [
            [
              "farthest",
              0
            ],
            [
              "last",
              4
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "i = 0. Check if current index i is within reach: 0 <= 0 (farthest), so we can stand here!",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 0,
                "color": "amber",
                "label": "REACHABLE [0..0]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 0,
              "color": "blue",
              "position": "top"
            },
            {
              "name": "i",
              "index": 0,
              "color": "accent",
              "position": "bottom"
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
              "farthest",
              0
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "From i = 0 we can jump nums[0] = 2 steps, reaching index 2. 2 > 0, so farthest = 2. The greedy choice, always keep the FARTHEST reach, is safe because reaching a farther index can never hurt: anything an earlier reach unlocked is still covered.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 2,
                "color": "amber",
                "label": "REACHABLE [0..2]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 2,
              "color": "blue",
              "position": "top"
            },
            {
              "name": "i",
              "index": 0,
              "color": "accent",
              "position": "bottom"
            }
          ],
          "highlights": [
            0
          ],
          "secondaryHighlights": [
            1,
            2
          ],
          "vars": [
            [
              "i",
              0
            ],
            [
              "i+nums[i]",
              2
            ],
            [
              "farthest",
              2
            ]
          ]
        },
        {
          "codeLine": 3,
          "narration": "Move to i = 1. Check if reachable: 1 <= 2 (farthest), valid!",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 2,
                "color": "amber",
                "label": "REACHABLE [0..2]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 2,
              "color": "blue",
              "position": "top"
            },
            {
              "name": "i",
              "index": 1,
              "color": "accent",
              "position": "bottom"
            }
          ],
          "highlights": [
            1
          ],
          "secondaryHighlights": [
            0,
            2
          ],
          "vars": [
            [
              "i",
              1
            ],
            [
              "farthest",
              2
            ]
          ]
        },
        {
          "codeLine": 4,
          "narration": "From i = 1 we can jump nums[1] = 3 steps, reaching index 4. 4 > 2, so farthest = 4. The greedy choice, always keep the FARTHEST reach, is safe because reaching a farther index can never hurt: anything an earlier reach unlocked is still covered.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 4,
                "color": "amber",
                "label": "REACHABLE [0..4]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 4,
              "color": "blue",
              "position": "top"
            },
            {
              "name": "i",
              "index": 1,
              "color": "accent",
              "position": "bottom"
            }
          ],
          "highlights": [
            1
          ],
          "secondaryHighlights": [
            0,
            2,
            3,
            4
          ],
          "vars": [
            [
              "i",
              1
            ],
            [
              "i+nums[i]",
              4
            ],
            [
              "farthest",
              4
            ]
          ]
        },
        {
          "codeLine": 6,
          "narration": "farthest (4) >= last index (n - 1 = 4)! We can reach the final index without even needing to scan further.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 4,
                "color": "green",
                "label": "LAST INDEX REACHED [0..4]"
              }
            ]
          },
          "pointers": [
            {
              "name": "far",
              "index": 4,
              "color": "green",
              "position": "top"
            },
            {
              "name": "i",
              "index": 1,
              "color": "accent",
              "position": "bottom"
            }
          ],
          "highlights": [
            0,
            1,
            4
          ],
          "best": {
            "label": "Can Reach Last Index: True"
          },
          "vars": [
            [
              "farthest",
              4
            ],
            [
              "last index",
              4
            ],
            [
              "canReach",
              "true"
            ]
          ]
        },
        {
          "codeLine": 7,
          "narration": "Return true! By tracking the single farthest boundary in one pass, Jump Game runs in O(n) time and O(1) space.",
          "customVisual": {
            "array": [
              2,
              3,
              1,
              1,
              4
            ],
            "brackets": [
              {
                "start": 0,
                "end": 4,
                "color": "green",
                "label": "REACHABLE"
              }
            ]
          },
          "pointers": [
            {
              "name": "target",
              "index": 4,
              "color": "green",
              "position": "top"
            }
          ],
          "highlights": [
            0,
            1,
            4
          ],
          "best": {
            "label": "Can Reach Last Index: True"
          },
          "vars": [
            [
              "return",
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
    id: 'jump-game-ii',
    patternId: 'greedy',
    title: 'Jump Game II',
    subtitle: 'Minimum jumps, greedy BFS by levels',
    difficulty: 'Medium',
    leetcodeId: 45,
    askedAt: ['Amazon', 'Google', 'Microsoft', 'Apple'],
    kind: 'problem',
    statement: 'You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0]. Each element nums[i] represents the maximum length of a forward jump from index i. Return the minimum number of jumps to reach nums[n - 1].',
    visualType: 'array',
    initialInput: [2, 3, 1, 1, 4],
    approaches: [
      {
        id: 'greedy-bfs-levels',
        label: 'Greedy BFS Level Windows',
        complexity: {
          time: 'O(N)',
          space: 'O(1)'
        },
        pseudocode: [
          'jumps = 0, cur_end = 0, farthest = 0',
          'for i from 0 to n-2:',
          '    farthest = max(farthest, i + nums[i])',
          '    if i == cur_end:',
          '        jumps++',
          '        cur_end = farthest',
          '        if cur_end >= n-1: break',
          'return jumps'
        ],
        starterCode: {
          javascript: `function jump(nums) {\n  if (nums.length <= 1) return 0;\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) {\n      jumps++;\n      curEnd = farthest;\n      if (curEnd >= nums.length - 1) break;\n    }\n  }\n  return jumps;\n}`,
          python: `def jump(nums: list[int]) -> int:\n    if len(nums) <= 1: return 0\n    jumps = cur_end = farthest = 0\n    for i in range(len(nums) - 1):\n        farthest = max(farthest, i + nums[i])\n        if i == cur_end:\n            jumps += 1\n            cur_end = farthest\n            if cur_end >= len(nums) - 1:\n                break\n    return jumps`
        },
        solutionCode: {
          javascript: `function jump(nums) {\n  if (nums.length <= 1) return 0;\n  let jumps = 0, curEnd = 0, farthest = 0;\n  for (let i = 0; i < nums.length - 1; i++) {\n    farthest = Math.max(farthest, i + nums[i]);\n    if (i === curEnd) {\n      jumps++;\n      curEnd = farthest;\n      if (curEnd >= nums.length - 1) break;\n    }\n  }\n  return jumps;\n}`,
          python: `def jump(nums: list[int]) -> int:\n    if len(nums) <= 1: return 0\n    jumps = cur_end = farthest = 0\n    for i in range(len(nums) - 1):\n        farthest = max(farthest, i + nums[i])\n        if i == cur_end:\n            jumps += 1\n            cur_end = farthest\n            if cur_end >= len(nums) - 1:\n                break\n    return jumps`
        },
        testCases: [
          {
            input: [[2, 3, 1, 1, 4]],
            expected: 2,
            description: "Jump 1 step from index 0 to 1, then 3 steps to the last index = 2 jumps"
          },
          {
            input: [[2, 3, 0, 1, 4]],
            expected: 2,
            description: "2 jumps to end"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Treat jumps as BFS distance levels: Level 0 = index 0. Level 1 = all indices reachable in 1 jump. Level 2 = all indices reachable in 2 jumps.",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 0, end: 0, color: 'accent', label: 'LEVEL 0 (0 jumps)' }]
            },
            pointers: [{ name: 'start', index: 0, color: 'accent' }],
            vars: [
              ['jumps', 0],
              ['cur_end', 0],
              ['farthest', 0]
            ]
          },
          {
            codeLine: 3,
            narration: "At i = 0 (jump = 2): farthest reachable = 0 + 2 = 2. Reached end of Level 0 (i == cur_end = 0).",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 0, end: 2, color: 'blue', label: 'JUMP 1 RANGE [1..2]' }]
            },
            highlights: [0],
            pointers: [
              { name: 'i', index: 0, color: 'accent' },
              { name: 'farthest', index: 2, color: 'accent2' }
            ],
            vars: [
              ['i', 0],
              ['farthest', 2],
              ['cur_end', 0]
            ]
          },
          {
            codeLine: 5,
            narration: "Increment jumps = 1. Level 1 window is now [1..2]. cur_end becomes 2.",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 1, end: 2, color: 'blue', label: 'LEVEL 1 WINDOW [1..2]' }]
            },
            highlights: [1, 2],
            pointers: [{ name: 'cur_end', index: 2, color: 'accent2' }],
            vars: [
              ['jumps', 1],
              ['cur_end', 2],
              ['farthest', 2]
            ]
          },
          {
            codeLine: 3,
            narration: "At i = 1 (jump = 3): farthest reachable = 1 + 3 = 4 >= target (4)! Farthest frontier expands to index 4.",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 1, end: 4, color: 'green', label: 'JUMP 2 CAN REACH TARGET (4)' }]
            },
            highlights: [1, 4],
            pointers: [
              { name: 'i', index: 1, color: 'accent' },
              { name: 'farthest', index: 4, color: 'green' }
            ],
            vars: [
              ['i', 1],
              ['farthest', 4],
              ['cur_end', 2]
            ]
          },
          {
            codeLine: 5,
            narration: "At i = 2 (end of Level 1 window): increment jumps = 2. cur_end expands to farthest = 4 >= last index. Target reached!",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 1, end: 4, color: 'green', label: 'TARGET REACHED IN 2 JUMPS' }]
            },
            highlights: [0, 1, 4],
            best: { label: 'Min Jumps = 2 (0 -> 1 -> 4)' },
            vars: [
              ['jumps', 2],
              ['cur_end', 4],
              ['status', 'REACHED']
            ]
          },
          {
            codeLine: 8,
            narration: "Return min jumps = 2 in O(N) time and O(1) space.",
            customVisual: {
              array: [2, 3, 1, 1, 4],
              brackets: [{ start: 0, end: 4, color: 'green', label: 'MIN JUMPS = 2' }]
            },
            highlights: [0, 1, 4],
            best: { label: 'Min Jumps = 2' },
            vars: [
              ['return', 2],
              ['time', 'O(N)'],
              ['space', 'O(1)']
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'partition-labels',
    patternId: 'greedy',
    title: 'Partition Labels',
    subtitle: "Extend the part to each letter's last occurrence",
    difficulty: 'Medium',
    leetcodeId: 763,
    askedAt: ['Amazon', 'Google', 'Facebook'],
    kind: 'problem',
    statement: 'You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the size of these parts.',
    visualType: 'array',
    initialInput: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
    approaches: [
      {
        id: 'greedy-last-occurrence',
        label: 'Greedy Last Occurrence Window',
        complexity: {
          time: 'O(N)',
          space: 'O(1) · at most 26 letters'
        },
        pseudocode: [
          'last = map of each char to its last index in s',
          'start = 0, end = 0, result = []',
          'for i from 0 to n-1:',
          '    end = max(end, last[s[i]])',
          '    if i == end:',
          '        result.append(end - start + 1)',
          '        start = i + 1',
          'return result'
        ],
        starterCode: {
          javascript: `function partitionLabels(s) {\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const res = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) {\n      res.push(end - start + 1);\n      start = i + 1;\n    }\n  }\n  return res;\n}`,
          python: `def partitionLabels(s: str) -> list[int]:\n    last = {c: i for i, c in enumerate(s)}\n    res = []\n    start = end = 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            res.append(end - start + 1)\n            start = i + 1\n    return res`
        },
        solutionCode: {
          javascript: `function partitionLabels(s) {\n  const last = {};\n  for (let i = 0; i < s.length; i++) last[s[i]] = i;\n  const res = [];\n  let start = 0, end = 0;\n  for (let i = 0; i < s.length; i++) {\n    end = Math.max(end, last[s[i]]);\n    if (i === end) {\n      res.push(end - start + 1);\n      start = i + 1;\n    }\n  }\n  return res;\n}`,
          python: `def partitionLabels(s: str) -> list[int]:\n    last = {c: i for i, c in enumerate(s)}\n    res = []\n    start = end = 0\n    for i, c in enumerate(s):\n        end = max(end, last[c])\n        if i == end:\n            res.append(end - start + 1)\n            start = i + 1\n    return res`
        },
        testCases: [
          {
            input: ["ababcbacadefegdehijhklij"],
            expected: [9, 7, 8],
            description: "Partitions: 'ababcbaca' (9), 'defegde' (7), 'hijhklij' (8)"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Precompute last occurrence of each char: last['a']=8, last['b']=5, last['c']=7, last['d']=14, last['e']=15, last['f']=11, last['g']=13, last['h']=19, last['i']=22, last['j']=23, last['k']=20, last['l']=21.",
            customVisual: { array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'] },
            vars: [
              ['last a', 8],
              ['last b', 5],
              ['last c', 7]
            ]
          },
          {
            codeLine: 4,
            narration: "Scan from index 0 ('a'): last['a'] = 8 -> extend end boundary to 8. Every letter in this part must be contained within at least [0..8].",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [{ start: 0, end: 8, color: 'accent', label: 'PART 1 BOUNDARY [0..8]' }]
            },
            highlights: [0, 8],
            pointers: [
              { name: 'start', index: 0, color: 'accent' },
              { name: 'end', index: 8, color: 'accent2' }
            ],
            vars: [
              ['start', 0],
              ['end', 8]
            ]
          },
          {
            codeLine: 6,
            narration: "Sweep through indices 1..8: all chars ('b' last=5, 'c' last=7) have last index <= 8. At i = 8, i == end! Cut Partition 1: length = 8 - 0 + 1 = 9 ('ababcbaca').",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [{ start: 0, end: 8, color: 'green', label: 'PARTITION 1: LENGTH 9' }]
            },
            highlights: [0, 1, 2, 3, 4, 5, 6, 7, 8],
            best: { label: 'Partition 1 = 9' },
            vars: [
              ['part 1 length', 9],
              ['collected', '[9]']
            ]
          },
          {
            codeLine: 4,
            narration: "Start Partition 2 at index 9 ('d'): last['d'] = 14. At index 10 ('e'): last['e'] = 15 -> expand end boundary to 15.",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [
                { start: 0, end: 8, color: 'green', label: 'PART 1 (9)' },
                { start: 9, end: 15, color: 'accent', label: 'PART 2 BOUNDARY [9..15]' }
              ]
            },
            highlights: [9, 15],
            pointers: [
              { name: 'start', index: 9, color: 'accent' },
              { name: 'end', index: 15, color: 'accent2' }
            ],
            vars: [
              ['start', 9],
              ['end', 15]
            ]
          },
          {
            codeLine: 6,
            narration: "Sweep through indices 11..15 ('f' last=11, 'g' last=13): all fit in <= 15. At i = 15, i == end! Cut Partition 2: length = 15 - 9 + 1 = 7 ('defegde').",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [
                { start: 0, end: 8, color: 'green', label: 'PART 1 (9)' },
                { start: 9, end: 15, color: 'green', label: 'PARTITION 2: LENGTH 7' }
              ]
            },
            highlights: [9, 10, 11, 12, 13, 14, 15],
            best: { label: 'Partitions: [9, 7]' },
            vars: [
              ['part 2 length', 7],
              ['collected', '[9, 7]']
            ]
          },
          {
            codeLine: 4,
            narration: "Start Partition 3 at index 16 ('h'): last['h']=19, last['i']=22, last['j']=23 -> expand end boundary to 23 (end of string).",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [
                { start: 0, end: 8, color: 'green', label: 'PART 1 (9)' },
                { start: 9, end: 15, color: 'green', label: 'PART 2 (7)' },
                { start: 16, end: 23, color: 'accent', label: 'PART 3 BOUNDARY [16..23]' }
              ]
            },
            highlights: [16, 23],
            pointers: [
              { name: 'start', index: 16, color: 'accent' },
              { name: 'end', index: 23, color: 'accent2' }
            ],
            vars: [
              ['start', 16],
              ['end', 23]
            ]
          },
          {
            codeLine: 6,
            narration: "At i = 23 (end of string): i == end! Cut Partition 3: length = 23 - 16 + 1 = 8 ('hijhklij').",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [
                { start: 0, end: 8, color: 'green', label: 'PART 1 (9)' },
                { start: 9, end: 15, color: 'green', label: 'PART 2 (7)' },
                { start: 16, end: 23, color: 'green', label: 'PART 3 (8)' }
              ]
            },
            highlights: [16, 17, 18, 19, 20, 21, 22, 23],
            best: { label: 'All Partitions: [9, 7, 8]' },
            vars: [
              ['part 3 length', 8],
              ['result', '[9, 7, 8]']
            ]
          },
          {
            codeLine: 8,
            narration: "Return result = [9, 7, 8]. Max partitions created such that no letter appears in more than one part. O(N) time and O(1) space.",
            customVisual: {
              array: ['a','b','a','b','c','b','a','c','a','d','e','f','e','g','d','e','h','i','j','h','k','l','i','j'],
              brackets: [
                { start: 0, end: 8, color: 'green', label: 'PART 1 (9)' },
                { start: 9, end: 15, color: 'green', label: 'PART 2 (7)' },
                { start: 16, end: 23, color: 'green', label: 'PART 3 (8)' }
              ]
            },
            best: { label: 'Result: [9, 7, 8]' },
            vars: [
              ['return', '[9, 7, 8]'],
              ['time', 'O(N)'],
              ['space', 'O(1)']
            ]
          }
        ]
      }
    ]
  }
];
