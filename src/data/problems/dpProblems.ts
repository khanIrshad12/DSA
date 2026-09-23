import { Problem } from '../../types';

export const dpProblems: Problem[] = [
  {
    id: 'fundamentals',
    patternId: 'dynamic-programming',
    title: 'Fundamentals',
    subtitle: 'Overlapping subproblems · a table you fill once',
    kind: 'intro',
    statement: 'Dynamic Programming breaks complex problems into simpler subproblems, solving each subproblem just once and storing their solutions in a DP table to avoid exponential redundant work.',
    visualType: 'dp-grid',
    initialInput: [0, 1, 1, 2, 3, 5, 8, 13],
    approaches: [
      {
        label: 'Tabulation (Bottom-Up)',
        complexity: { time: 'O(n)', space: 'O(n)' },
        pseudocode: [
          'dp = array of size n',
          'dp[0] = 0; dp[1] = 1        // base cases',
          'for i in 2..n-1:',
          '    // each subproblem solved once, then reused',
          '    dp[i] = dp[i-1] + dp[i-2]',
          'return dp[n-1]'
        ],
        starterCode: {
          javascript: `function fibonacciDP(n) {\n  if (n <= 1) return n;\n  const dp = new Array(n + 1);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}`,
          python: `def fibonacciDP(n: int) -> int:\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]`
        },
        solutionCode: {
          javascript: `function fibonacciDP(n) {\n  if (n <= 1) return n;\n  const dp = new Array(n + 1);\n  dp[0] = 0;\n  dp[1] = 1;\n  for (let i = 2; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  return dp[n];\n}`,
          python: `def fibonacciDP(n: int) -> int:\n    if n <= 1:\n        return n\n    dp = [0] * (n + 1)\n    dp[1] = 1\n    for i in range(2, n + 1):\n        dp[i] = dp[i - 1] + dp[i - 2]\n    return dp[n]`
        },
        testCases: [
          { input: [7], expected: 13, description: 'Fibonacci of 7 is 13' },
          { input: [2], expected: 1, description: 'Fibonacci of 2 is 1' },
          { input: [0], expected: 0, description: 'Fibonacci of 0 is 0' }
        ],
        steps: [
          {
            codeLine: 2,
            narration: 'Set base cases: dp[0] = 0, dp[1] = 1.',
            highlights: [0, 1],
            vars: [['dp[0]', 0], ['dp[1]', 1]]
          },
          {
            codeLine: 5,
            narration: 'Compute dp[2] = dp[1] + dp[0] = 1 + 0 = 1. Reads two already solved cells in O(1) time.',
            highlights: [0, 1, 2],
            vars: [['i', 2], ['dp[1]', 1], ['dp[0]', 0], ['dp[2]', 1]]
          },
          {
            codeLine: 5,
            narration: 'Compute dp[3] = dp[2] + dp[1] = 1 + 1 = 2. The two blue cells are the subproblems we READ; they are already solved.',
            highlights: [1, 2, 3],
            vars: [['i', 3], ['dp[2]', 1], ['dp[1]', 1], ['dp[3]', 2]]
          },
          {
            codeLine: 5,
            narration: 'Compute dp[4] = 2 + 1 = 3, dp[5] = 3 + 2 = 5, dp[6] = 5 + 3 = 8, dp[7] = 8 + 5 = 13.',
            highlights: [0, 1, 2, 3, 4, 5, 6, 7],
            best: { label: 'dp[7] = 13', indices: [7] },
            vars: [['dp[7]', 13], ['time', 'O(n)'], ['space', 'O(n)']]
          }
        ]
      }
    ]
  },
  {
    id: 'climbing-stairs',
    patternId: 'dynamic-programming',
    title: 'Climbing Stairs',
    subtitle: 'ways(i) = ways(i−1) + ways(i−2) · Fibonacci',
    kind: 'problem',
    leetcode: { id: 70, slug: 'climbing-stairs', difficulty: 'Easy' },
    companies: ['Amazon', 'Google', 'Apple', 'Microsoft'],
    statement: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
    visualType: 'dp-grid',
    initialInput: [1, 2, 3, 5, 8],
    approaches: [
      {
        label: 'DP (Space Optimized)',
        complexity: { time: 'O(n)', space: 'O(1)' },
        pseudocode: [
          'one ← 1, two ← 1',
          'for i in 0..n-2:',
          '    temp ← one',
          '    one ← one + two',
          '    two ← temp',
          'return one'
        ],
        starterCode: {
          javascript: `function climbStairs(n) {\n  let a = 1, b = 1;\n  for (let i = 2; i <= n; i++) {\n    const c = a + b;\n    a = b;\n    b = c;\n  }\n  return b;\n}`,
          python: `def climbStairs(n: int) -> int:\n    a, b = 1, 1\n    for i in range(2, n + 1):\n        a, b = b, a + b\n    return b`
        },
        solutionCode: {
          javascript: `function climbStairs(n) {\n  let a = 1, b = 1;\n  for (let i = 2; i <= n; i++) {\n    const c = a + b;\n    a = b;\n    b = c;\n  }\n  return b;\n}`,
          python: `def climbStairs(n: int) -> int:\n    a, b = 1, 1\n    for i in range(2, n + 1):\n        a, b = b, a + b\n    return b`
        },
        testCases: [
          { input: [2], expected: 2, description: 'n = 2 steps' },
          { input: [3], expected: 3, description: 'n = 3 steps' },
          { input: [5], expected: 8, description: 'n = 5 steps' }
        ],
        steps: [
          {
            codeLine: 1,
            narration: 'To reach step i, we can jump 1 step from (i-1) or 2 steps from (i-2). Total ways = ways(i-1) + ways(i-2).',
            vars: [['one', 1], ['two', 1], ['n', 5]]
          },
          {
            codeLine: 4,
            narration: 'Step 2: 1 + 1 = 2 ways. Step 3: 2 + 1 = 3 ways. Step 4: 3 + 2 = 5 ways. Step 5: 5 + 3 = 8 ways.',
            highlights: [0, 1, 2, 3, 4],
            best: { label: '8 Distinct Ways for n=5' },
            vars: [['result', 8]]
          }
        ]
      }
    ]
  },
  {
    id: 'coin-change',
    patternId: 'dynamic-programming',
    title: 'Coin Change',
    subtitle: 'dp[a] = 1 + min(dp[a − coin]) · fewest coins to make amount',
    kind: 'problem',
    leetcode: { id: 322, slug: 'coin-change', difficulty: 'Medium' },
    companies: ['Amazon', 'Bloomberg', 'Microsoft', 'Google'],
    statement: 'You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount.',
    visualType: 'dp-grid',
    initialInput: [0, 1, 1, 2, 2, 1, 2, 2],
    approaches: [
      {
        label: 'Bottom-Up DP',
        complexity: { time: 'O(amount · coins)', space: 'O(amount)' },
        pseudocode: [
          'dp ← array of (amount + 1) filled with ∞',
          'dp[0] ← 0',
          'for a in 1..amount:',
          '    for c in coins:',
          '        if a − c >= 0:',
          '            dp[a] = min(dp[a], 1 + dp[a − c])',
          'return dp[amount] if dp[amount] != ∞ else -1'
        ],
        starterCode: {
          javascript: `function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (let c of coins) {\n      if (a - c >= 0) {\n        dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}`,
          python: `def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1`
        },
        solutionCode: {
          javascript: `function coinChange(coins, amount) {\n  const dp = new Array(amount + 1).fill(Infinity);\n  dp[0] = 0;\n  for (let a = 1; a <= amount; a++) {\n    for (let c of coins) {\n      if (a - c >= 0) {\n        dp[a] = Math.min(dp[a], 1 + dp[a - c]);\n      }\n    }\n  }\n  return dp[amount] === Infinity ? -1 : dp[amount];\n}`,
          python: `def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for a in range(1, amount + 1):\n        for c in coins:\n            if a - c >= 0:\n                dp[a] = min(dp[a], 1 + dp[a - c])\n    return dp[amount] if dp[amount] != float('inf') else -1`
        },
        testCases: [
          { input: [[1, 2, 5], 11], expected: 3, description: '11 = 5 + 5 + 1 (3 coins)' },
          { input: [[2], 3], expected: -1, description: 'Cannot make 3 with 2s' },
          { input: [[1], 0], expected: 0, description: 'Amount 0 takes 0 coins' }
        ],
        steps: [
          {
            codeLine: 2,
            narration: 'Base case: 0 coins needed to make amount 0 → dp[0] = 0.',
            highlights: [0],
            vars: [['dp[0]', 0], ['coins', '[1, 2, 5]'], ['amount', 7]]
          },
          {
            codeLine: 6,
            narration: 'Compute amount 7 with coins [1, 2, 5]: 1 + dp[7-5] = 1 + dp[2] = 1 + 1 = 2 coins (5 + 2).',
            highlights: [7],
            best: { label: 'Fewest Coins = 2 (5 + 2)' },
            vars: [['dp[7]', 2], ['result', 2]]
          }
        ]
      }
    ]
  }
];
