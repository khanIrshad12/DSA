import { Problem } from '../../types';

export const bitProblems: Problem[] = [
  // 1. Overview (Concept)
  {
    id: 'overview',
    patternId: 'bit-manipulation',
    title: 'Overview',
    subtitle: 'AND · OR · XOR · shifts · the classic tricks',
    kind: 'concept',
    companies: ['Amazon', 'Google', 'Meta', 'Microsoft', 'Apple', 'Bloomberg'],
    statement: "Every integer is stored in memory as binary bits (0s and 1s). Bit manipulation operates directly on these bits in single CPU clock cycles with O(1) space.",
    visualType: 'array',
    initialInput: [0, 1, 0, 1],
    approaches: [
      {
        label: 'The bit toolkit',
        complexity: {
          time: 'O(1) per op',
          space: 'O(1)'
        },
        pseudocode: [
          "// bit b worth 2^position",
          "x & y    // 1 where both 1   (mask / test)",
          "x | y    // 1 where either   (set bits)",
          "x ^ y    // 1 where differ   (x^x=0, x^0=x)",
          "x << k   // shift up (*2^k); 1<<k = bit-k mask",
          "n & (n-1)// clears the lowest set bit"
        ],
        starterCode: {
          javascript: `function bitToolkit(x, y, k) {\n  const andOp = x & y;\n  const orOp = x | y;\n  const xorOp = x ^ y;\n  const shl = x << k;\n  const clearLowest = x & (x - 1);\n  return { andOp, orOp, xorOp, shl, clearLowest };\n}`,
          python: `def bit_toolkit(x: int, y: int, k: int) -> dict:\n    return {\n        "and": x & y,\n        "or": x | y,\n        "xor": x ^ y,\n        "shl": x << k,\n        "clear_lowest": x & (x - 1)\n    }`
        },
        solutionCode: {
          javascript: `function bitToolkit(x, y, k) {\n  const andOp = x & y;\n  const orOp = x | y;\n  const xorOp = x ^ y;\n  const shl = x << k;\n  const clearLowest = x & (x - 1);\n  return { andOp, orOp, xorOp, shl, clearLowest };\n}`,
          python: `def bit_toolkit(x: int, y: int, k: int) -> dict:\n    return {\n        "and": x & y,\n        "or": x | y,\n        "xor": x ^ y,\n        "shl": x << k,\n        "clear_lowest": x & (x - 1)\n    }`
        },
        testCases: [
          {
            input: [5, 3, 1],
            expected: { andOp: 1, orOp: 7, xorOp: 6, shl: 10, clearLowest: 4 },
            description: "Toolkit operations on 5 (0101) and 3 (0011)"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Every integer is a string of BITS, each worth a power of two: positions (left→right here) are 8, 4, 2, 1. 5 = 0101 = 4 + 1. Bit tricks manipulate these directly with the operators &, |, ^, ~, and the shifts << / >>.",
            customVisual: { array: [0, 1, 0, 1] },
            highlights: [1, 3],
            vars: [
              ["value", 5],
              ["binary", "0101"],
              ["places", "8 4 2 1"]
            ]
          },
          {
            codeLine: 2,
            narration: "x & y (AND): Sets bit to 1 only where BOTH x and y have 1. For x = 5 (0101) and y = 3 (0011), 5 & 3 = 0001 (1). Perfect for masking and testing bits.",
            customVisual: { array: [0, 0, 0, 1] },
            highlights: [3],
            vars: [
              ["x & y", 1],
              ["binary", "0001"],
              ["mask test", "bit 0 is 1"]
            ]
          },
          {
            codeLine: 3,
            narration: "x | y (OR): Sets bit to 1 where EITHER x or y has 1. For x = 5 (0101) and y = 3 (0011), 5 | 3 = 0111 (7). Used for setting specific bits.",
            customVisual: { array: [0, 1, 1, 1] },
            highlights: [1, 2, 3],
            vars: [
              ["x | y", 7],
              ["binary", "0111"],
              ["set bits", "bits 0, 1, 2"]
            ]
          },
          {
            codeLine: 4,
            narration: "x ^ y (XOR): 1 where bits differ, 0 where they match. Crucial laws: x ^ x = 0 (self-cancellation) and x ^ 0 = x (identity). 5 ^ 3 = 0110 (6).",
            customVisual: { array: [0, 1, 1, 0] },
            highlights: [1, 2],
            vars: [
              ["x ^ y", 6],
              ["binary", "0110"],
              ["differ at", "bits 1, 2"]
            ]
          },
          {
            codeLine: 5,
            narration: "x << k (LEFT SHIFT): Shifts bits left by k positions, multiplying by 2^k. 5 (0101) << 1 = 1010 (10). 1 << k creates a mask with only the k-th bit set.",
            customVisual: { array: [1, 0, 1, 0] },
            highlights: [0, 2],
            vars: [
              ["5 << 1", 10],
              ["binary", "1010"],
              ["multiplied", "5 * 2 = 10"]
            ]
          },
          {
            codeLine: 6,
            narration: "n & (n - 1) (BRIAN KERNIGHAN): Clears the lowest set 1-bit in O(1) time. For n = 5 (0101), 5 & 4 = 0100 (4). The rightmost 1 vanishes!",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            best: { label: "n & (n - 1) = 4 (0100)" },
            vars: [
              ["n & (n-1)", 4],
              ["binary", "0100"],
              ["lowest bit", "cleared"]
            ]
          }
        ]
      }
    ]
  },

  // 2. Single Number (LeetCode #136 - Easy)
  {
    id: 'single-number',
    patternId: 'bit-manipulation',
    title: 'Single Number',
    subtitle: 'XOR fold · pairs cancel',
    kind: 'problem',
    difficulty: 'Easy',
    leetcode: {
      id: 136,
      slug: 'single-number',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Google', 'Palantir'],
    statement: "Given a non-empty array where every element appears twice except for one, find that single one using O(1) extra space.",
    visualType: 'array',
    initialInput: [4, 1, 2, 1, 2],
    approaches: [
      {
        label: 'Brute · hash count',
        complexity: {
          time: 'O(n)',
          space: 'O(n)'
        },
        pseudocode: [
          "counts = {}",
          "for x in nums: counts[x] = (counts[x] || 0) + 1",
          "for x in nums: if counts[x] == 1: return x"
        ],
        starterCode: {
          javascript: `function singleNumber(nums) {\n  const map = {};\n  for (let x of nums) map[x] = (map[x] || 0) + 1;\n  for (let x of nums) if (map[x] === 1) return x;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    from collections import Counter\n    c = Counter(nums)\n    for x in nums:\n        if c[x] == 1:\n            return x`
        },
        solutionCode: {
          javascript: `function singleNumber(nums) {\n  const map = {};\n  for (let x of nums) map[x] = (map[x] || 0) + 1;\n  for (let x of nums) if (map[x] === 1) return x;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    from collections import Counter\n    c = Counter(nums)\n    for x in nums:\n        if c[x] == 1:\n            return x`
        },
        testCases: [
          {
            input: [[4, 1, 2, 1, 2]],
            expected: 4,
            description: "Single number 4"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Build frequency map of all elements in nums: {4: 1, 1: 2, 2: 2}.",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            vars: [["map", "{4: 1, 1: 2, 2: 2}"]]
          },
          {
            codeLine: 3,
            narration: "Element with count 1 is 4. Return 4.",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            best: { label: "Result: 4" },
            vars: [["return", 4]]
          }
        ]
      },
      {
        label: 'Optimized · XOR',
        complexity: {
          time: 'O(n)',
          space: 'O(1)'
        },
        pseudocode: [
          "acc ← 0",
          "for x in nums:",
          "  acc ← acc ^ x   // pairs cancel",
          "return acc"
        ],
        starterCode: {
          javascript: `function singleNumber(nums) {\n  let acc = 0;\n  for (let x of nums) {\n    acc ^= x;\n  }\n  return acc;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    acc = 0\n    for x in nums:\n        acc ^= x\n    return acc`
        },
        solutionCode: {
          javascript: `function singleNumber(nums) {\n  let acc = 0;\n  for (let x of nums) {\n    acc ^= x;\n  }\n  return acc;\n}`,
          python: `def singleNumber(nums: list[int]) -> int:\n    acc = 0\n    for x in nums:\n        acc ^= x\n    return acc`
        },
        testCases: [
          {
            input: [[4, 1, 2, 1, 2]],
            expected: 4,
            description: "Single number 4"
          },
          {
            input: [[2, 2, 1]],
            expected: 1,
            description: "Single number 1"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize accumulator acc = 0 (0000 in 4-bit binary).",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [
              ["acc", "0000 = 0"],
              ["i", "-"],
              ["num", "-"]
            ]
          },
          {
            codeLine: 2,
            narration: "Start loop with first element nums[0] = 4.",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [
              ["i", 0],
              ["num", 4],
              ["acc", "0000 = 0"]
            ]
          },
          {
            codeLine: 3,
            narration: "acc ^= 4: 0000 ^ 0100 = 0100 (4).",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            vars: [
              ["i", 0],
              ["num", 4],
              ["acc", "0100 = 4"]
            ]
          },
          {
            codeLine: 2,
            narration: "Next element nums[1] = 1.",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            vars: [
              ["i", 1],
              ["num", 1],
              ["acc", "0100 = 4"]
            ]
          },
          {
            codeLine: 3,
            narration: "acc ^= 1: 0100 ^ 0001 = 0101 (5).",
            customVisual: { array: [0, 1, 0, 1] },
            highlights: [1, 3],
            vars: [
              ["i", 1],
              ["num", 1],
              ["acc", "0101 = 5"]
            ]
          },
          {
            codeLine: 2,
            narration: "Next element nums[2] = 2.",
            customVisual: { array: [0, 1, 0, 1] },
            highlights: [1, 3],
            vars: [
              ["i", 2],
              ["num", 2],
              ["acc", "0101 = 5"]
            ]
          },
          {
            codeLine: 3,
            narration: "acc ^= 2: 0101 ^ 0010 = 0111 (7).",
            customVisual: { array: [0, 1, 1, 1] },
            highlights: [1, 2, 3],
            vars: [
              ["i", 2],
              ["num", 2],
              ["acc", "0111 = 7"]
            ]
          },
          {
            codeLine: 3,
            narration: "acc ^= 1: 0111 ^ 0001 = 0110 (6). The pair of 1s has completely cancelled out!",
            customVisual: { array: [0, 1, 1, 0] },
            highlights: [1, 2],
            vars: [
              ["i", 3],
              ["num", 1],
              ["acc", "0110 = 6"]
            ]
          },
          {
            codeLine: 3,
            narration: "acc ^= 2: 0110 ^ 0010 = 0100 (4). The pair of 2s has cancelled out!",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            vars: [
              ["i", 4],
              ["num", 2],
              ["acc", "0100 = 4"]
            ]
          },
          {
            codeLine: 4,
            narration: "All duplicate pairs cancelled out. Return acc = 4.",
            customVisual: { array: [0, 1, 0, 0] },
            highlights: [1],
            best: { label: "Single Number: 4" },
            vars: [
              ["return acc", 4],
              ["binary", "0100"]
            ]
          }
        ]
      }
    ]
  },

  // 3. Number of 1 Bits (LeetCode #191 - Easy)
  {
    id: 'number-of-1-bits',
    patternId: 'bit-manipulation',
    title: 'Number of 1 Bits',
    subtitle: 'Hamming weight · n & (n – 1)',
    kind: 'problem',
    difficulty: 'Easy',
    leetcode: {
      id: 191,
      slug: 'number-of-1-bits',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Apple', 'Microsoft'],
    statement: "Given an unsigned integer n, return the number of set bits (its Hamming weight).",
    visualType: 'array',
    initialInput: 11,
    approaches: [
      {
        label: 'Check each bit',
        complexity: {
          time: 'O(32)',
          space: 'O(1)'
        },
        pseudocode: [
          "count = 0",
          "for i in 0..31:",
          "  if (n >> i) & 1: count++",
          "return count"
        ],
        starterCode: {
          javascript: `function hammingWeight(n) {\n  let count = 0;\n  for (let i = 0; i < 32; i++) {\n    if ((n >> i) & 1) count++;\n  }\n  return count;\n}`,
          python: `def hammingWeight(n: int) -> int:\n    count = 0\n    for i in range(32):\n        if (n >> i) & 1:\n            count += 1\n    return count`
        },
        solutionCode: {
          javascript: `function hammingWeight(n) {\n  let count = 0;\n  for (let i = 0; i < 32; i++) {\n    if ((n >> i) & 1) count++;\n  }\n  return count;\n}`,
          python: `def hammingWeight(n: int) -> int:\n    count = 0\n    for i in range(32):\n        if (n >> i) & 1:\n            count += 1\n    return count`
        },
        testCases: [
          {
            input: [11],
            expected: 3,
            description: "11 (1011) has 3 bits"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize count = 0. Iterate through each bit position 0..31 checking if (n >> i) & 1 == 1.",
            customVisual: { array: [1, 0, 1, 1] },
            highlights: [],
            vars: [["n", "1011 = 11"], ["count", 0]]
          },
          {
            codeLine: 3,
            narration: "Found 3 set bits at positions 0, 1, and 3. Total count = 3.",
            customVisual: { array: [1, 0, 1, 1] },
            highlights: [0, 2, 3],
            best: { label: "Hamming Weight: 3" },
            vars: [["return", 3]]
          }
        ]
      },
      {
        label: 'Optimized · n & (n - 1)',
        complexity: {
          time: 'O(#set bits)',
          space: 'O(1)'
        },
        pseudocode: [
          "count ← 0",
          "while n != 0:",
          "  n ← n & (n - 1)   // clear lowest set bit",
          "  count++",
          "return count"
        ],
        starterCode: {
          javascript: `function hammingWeight(n) {\n  let count = 0;\n  while (n !== 0) {\n    n = n & (n - 1);\n    count++;\n  }\n  return count;\n}`,
          python: `def hammingWeight(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count`
        },
        solutionCode: {
          javascript: `function hammingWeight(n) {\n  let count = 0;\n  while (n !== 0) {\n    n = n & (n - 1);\n    count++;\n  }\n  return count;\n}`,
          python: `def hammingWeight(n: int) -> int:\n    count = 0\n    while n:\n        n &= (n - 1)\n        count += 1\n    return count`
        },
        testCases: [
          {
            input: [11],
            expected: 3,
            description: "11 (1011) has 3 bits"
          },
          {
            input: [128],
            expected: 1,
            description: "128 (10000000) has 1 bit"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize count = 0 for input n = 11 (binary 1011).",
            customVisual: { array: [1, 0, 1, 1] },
            highlights: [],
            vars: [
              ["n", "1011 = 11"],
              ["count", 0]
            ]
          },
          {
            codeLine: 2,
            narration: "n = 11 != 0, enter while loop.",
            customVisual: { array: [1, 0, 1, 1] },
            highlights: [3],
            vars: [
              ["n", "1011 = 11"],
              ["count", 0]
            ]
          },
          {
            codeLine: 3,
            narration: "count → 1. n & (n - 1): 1011 & 1010 = 1010. The lowest 1 (highlighted) just vanished. n = 10.",
            customVisual: { array: [1, 0, 1, 1] },
            highlights: [3],
            vars: [
              ["n", "1011 = 11"],
              ["n & (n-1)", "1010"],
              ["count", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "Increment count = 1. Updated n = 1010 (10).",
            customVisual: { array: [1, 0, 1, 0] },
            highlights: [2],
            vars: [
              ["n", "1010 = 10"],
              ["count", 1]
            ]
          },
          {
            codeLine: 2,
            narration: "n = 10 != 0, continue loop.",
            customVisual: { array: [1, 0, 1, 0] },
            highlights: [2],
            vars: [
              ["n", "1010 = 10"],
              ["count", 1]
            ]
          },
          {
            codeLine: 3,
            narration: "count → 2. n & (n - 1): 1010 & 1001 = 1000. The lowest 1 (highlighted) just vanished. n = 8.",
            customVisual: { array: [1, 0, 1, 0] },
            highlights: [2],
            vars: [
              ["n", "1010 = 10"],
              ["n & (n-1)", "1000"],
              ["count", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "Increment count = 2. Updated n = 1000 (8).",
            customVisual: { array: [1, 0, 0, 0] },
            highlights: [0],
            vars: [
              ["n", "1000 = 8"],
              ["count", 2]
            ]
          },
          {
            codeLine: 2,
            narration: "n = 8 != 0, continue loop.",
            customVisual: { array: [1, 0, 0, 0] },
            highlights: [0],
            vars: [
              ["n", "1000 = 8"],
              ["count", 2]
            ]
          },
          {
            codeLine: 3,
            narration: "count → 3. n & (n - 1): 1000 & 0111 = 0000. The lowest 1 (highlighted) just vanished. n = 0.",
            customVisual: { array: [1, 0, 0, 0] },
            highlights: [0],
            vars: [
              ["n", "1000 = 8"],
              ["n & (n-1)", "0000"],
              ["count", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "Increment count = 3. Updated n = 0000 (0).",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [
              ["n", "0000 = 0"],
              ["count", 3]
            ]
          },
          {
            codeLine: 2,
            narration: "n == 0, loop terminates.",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [
              ["n", "0000 = 0"],
              ["count", 3]
            ]
          },
          {
            codeLine: 5,
            narration: "Return total count = 3 in exactly 3 iterations.",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            best: { label: "Hamming Weight: 3" },
            vars: [["return count", 3]]
          }
        ]
      }
    ]
  },

  // 4. Missing Number (LeetCode #268 - Easy)
  {
    id: 'missing-number',
    patternId: 'bit-manipulation',
    title: 'Missing Number',
    subtitle: 'XOR index ⊕ value · pairs cancel',
    kind: 'problem',
    difficulty: 'Easy',
    leetcode: {
      id: 268,
      slug: 'missing-number',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Microsoft', 'Bloomberg'],
    statement: "An array contains n distinct numbers drawn from the range [0, n]. Exactly one number in that range is missing, find it using O(1) extra space.",
    visualType: 'array',
    initialInput: [3, 0, 1],
    approaches: [
      {
        label: 'Sum formula',
        complexity: {
          time: 'O(n)',
          space: 'O(1)'
        },
        pseudocode: [
          "expected = n * (n + 1) / 2",
          "actual = sum(nums)",
          "return expected - actual"
        ],
        starterCode: {
          javascript: `function missingNumber(nums) {\n  const n = nums.length;\n  const expected = (n * (n + 1)) / 2;\n  const actual = nums.reduce((a, b) => a + b, 0);\n  return expected - actual;\n}`,
          python: `def missingNumber(nums: list[int]) -> int:\n    n = len(nums)\n    return (n * (n + 1)) // 2 - sum(nums)`
        },
        solutionCode: {
          javascript: `function missingNumber(nums) {\n  const n = nums.length;\n  const expected = (n * (n + 1)) / 2;\n  const actual = nums.reduce((a, b) => a + b, 0);\n  return expected - actual;\n}`,
          python: `def missingNumber(nums: list[int]) -> int:\n    n = len(nums)\n    return (n * (n + 1)) // 2 - sum(nums)`
        },
        testCases: [
          {
            input: [[3, 0, 1]],
            expected: 2,
            description: "Missing number is 2 in [3, 0, 1]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Expected sum for [0..3] = 3 * 4 / 2 = 6. Actual sum = 3 + 0 + 1 = 4. Missing = 6 - 4 = 2.",
            customVisual: { array: [0, 0, 1, 0] },
            highlights: [2],
            best: { label: "Missing Number: 2" },
            vars: [["expected", 6], ["actual", 4], ["missing", 2]]
          }
        ]
      },
      {
        label: 'Optimized · XOR',
        complexity: {
          time: 'O(n)',
          space: 'O(1)'
        },
        pseudocode: [
          "acc ← 0",
          "acc ← acc ^ n         // top index has no slot",
          "for i in 0..n-1:",
          "  acc ← acc ^ i       // fold the index",
          "  acc ← acc ^ nums[i] // fold the value (pairs cancel)",
          "return acc"
        ],
        starterCode: {
          javascript: `function missingNumber(nums) {\n  let acc = 0;\n  acc ^= nums.length;\n  for (let i = 0; i < nums.length; i++) {\n    acc ^= i;\n    acc ^= nums[i];\n  }\n  return acc;\n}`,
          python: `def missingNumber(nums: list[int]) -> int:\n    acc = 0\n    acc ^= len(nums)\n    for i in range(len(nums)):\n        acc ^= i\n        acc ^= nums[i]\n    return acc`
        },
        solutionCode: {
          javascript: `function missingNumber(nums) {\n  let acc = 0;\n  acc ^= nums.length;\n  for (let i = 0; i < nums.length; i++) {\n    acc ^= i;\n    acc ^= nums[i];\n  }\n  return acc;\n}`,
          python: `def missingNumber(nums: list[int]) -> int:\n    acc = 0\n    acc ^= len(nums)\n    for i in range(len(nums)):\n        acc ^= i\n        acc ^= nums[i]\n    return acc`
        },
        testCases: [
          {
            input: [[3, 0, 1]],
            expected: 2,
            description: "Missing number is 2 in [3, 0, 1]"
          },
          {
            input: [[0, 1]],
            expected: 2,
            description: "Missing number is 2 in [0, 1]"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize acc = 0 (0000).",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [["acc", "0000 = 0"]]
          },
          {
            codeLine: 2,
            narration: "acc ^= n (3): 0000 ^ 0011 = 0011 (3). This accounts for the top index n = 3.",
            customVisual: { array: [0, 0, 1, 1] },
            highlights: [2, 3],
            vars: [["acc", "0011 = 3"], ["n", 3]]
          },
          {
            codeLine: 3,
            narration: "Start loop at i = 0.",
            customVisual: { array: [0, 0, 1, 1] },
            highlights: [2, 3],
            vars: [["i", 0], ["value", 3], ["acc", "0011 = 3"]]
          },
          {
            codeLine: 4,
            narration: "Fold in index i = 0: 0011 ^ 0000 = 0011 (3).",
            customVisual: { array: [0, 0, 1, 1] },
            highlights: [2, 3],
            vars: [["i", 0], ["folded", "index 0"], ["acc", "0011 = 3"]]
          },
          {
            codeLine: 5,
            narration: "Fold in value nums[0] = 3: 0011 ^ 0011 = 0000 (0). Index 3 was (or will be) XORed too, that pair CANCELS to 0, removing 3 from acc.",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [
              ["i", 0],
              ["value", 3],
              ["acc", "0000 = 0"],
              ["folded", "value 3"]
            ]
          },
          {
            codeLine: 3,
            narration: "Advance to i = 1.",
            customVisual: { array: [0, 0, 0, 0] },
            highlights: [],
            vars: [["i", 1], ["value", 0], ["acc", "0000 = 0"]]
          },
          {
            codeLine: 4,
            narration: "Fold in index i = 1: 0000 ^ 0001 = 0001 (1).",
            customVisual: { array: [0, 0, 0, 1] },
            highlights: [3],
            vars: [["i", 1], ["folded", "index 1"], ["acc", "0001 = 1"]]
          },
          {
            codeLine: 5,
            narration: "Fold in value nums[1] = 0: 0001 ^ 0000 = 0001 (1). Index 0 was cancelled by value 0.",
            customVisual: { array: [0, 0, 0, 1] },
            highlights: [3],
            vars: [["i", 1], ["value", 0], ["acc", "0001 = 1"]]
          },
          {
            codeLine: 3,
            narration: "Advance to i = 2.",
            customVisual: { array: [0, 0, 0, 1] },
            highlights: [3],
            vars: [["i", 2], ["value", 1], ["acc", "0001 = 1"]]
          },
          {
            codeLine: 4,
            narration: "Fold in index i = 2: 0001 ^ 0010 = 0011 (3).",
            customVisual: { array: [0, 0, 1, 1] },
            highlights: [2, 3],
            vars: [["i", 2], ["folded", "index 2"], ["acc", "0011 = 3"]]
          },
          {
            codeLine: 5,
            narration: "Fold in value nums[2] = 1: 0011 ^ 0001 = 0010 (2). Value 1 cancels out with index 1, leaving index 2 in acc!",
            customVisual: { array: [0, 0, 1, 0] },
            highlights: [2],
            vars: [["i", 2], ["value", 1], ["acc", "0010 = 2"]]
          },
          {
            codeLine: 6,
            narration: "Loop complete. All paired indices and values cancelled out to 0, leaving the uncancelled missing number 2.",
            customVisual: { array: [0, 0, 1, 0] },
            highlights: [2],
            best: { label: "Missing Number: 2" },
            vars: [["return acc", 2], ["binary", "0010"]]
          }
        ]
      }
    ]
  },

  // 5. Reverse Bits (LeetCode #190 - Easy)
  {
    id: 'reverse-bits',
    patternId: 'bit-manipulation',
    title: 'Reverse Bits',
    subtitle: 'build the answer bit by bit',
    kind: 'problem',
    difficulty: 'Easy',
    leetcode: {
      id: 190,
      slug: 'reverse-bits',
      difficulty: 'Easy'
    },
    companies: ['Amazon', 'Apple'],
    statement: "Reverse the bits of an unsigned integer (the real problem is 32-bit; we use 8 bits here for clarity). 00101011 (43) becomes 11010100 (212).",
    visualType: 'array',
    initialInput: 43,
    approaches: [
      {
        label: 'Build result bit by bit',
        complexity: {
          time: 'O(WIDTH) = O(32)',
          space: 'O(1)'
        },
        pseudocode: [
          "result ← 0",
          "repeat WIDTH times:",
          "  result ← (result << 1) | (n & 1) // pull lowest bit",
          "  n >>= 1                          // discard that bit",
          "return result"
        ],
        starterCode: {
          javascript: `function reverseBits(n) {\n  let result = 0;\n  for (let i = 0; i < 8; i++) {\n    result = (result << 1) | (n & 1);\n    n >>= 1;\n  }\n  return result;\n}`,
          python: `def reverseBits(n: int) -> int:\n    result = 0\n    for _ in range(8):\n        result = (result << 1) | (n & 1)\n        n >>= 1\n    return result`
        },
        solutionCode: {
          javascript: `function reverseBits(n) {\n  let result = 0;\n  for (let i = 0; i < 8; i++) {\n    result = (result << 1) | (n & 1);\n    n >>= 1;\n  }\n  return result;\n}`,
          python: `def reverseBits(n: int) -> int:\n    result = 0\n    for _ in range(8):\n        result = (result << 1) | (n & 1)\n        n >>= 1\n    return result`
        },
        testCases: [
          {
            input: [43],
            expected: 212,
            description: "00101011 (43) -> 11010100 (212)"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Initialize result = 0. We will iterate 8 times, pulling the lowest bit of n and shifting it into result.",
            customVisual: {
              array: [0, 0, 1, 0, 1, 0, 1, 1],
              secondaryArray: { label: 'REVERSED', array: ['·', '·', '·', '·', '·', '·', '·', '·'], highlights: [] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", "-"],
              ["result", "0 = 00000000"],
              ["i", "-"],
              ["lands at", "-"]
            ]
          },
          {
            codeLine: 2,
            narration: "Start repeat loop for i = 0.",
            customVisual: {
              array: [0, 0, 1, 0, 1, 0, 1, 1],
              secondaryArray: { label: 'REVERSED', array: ['·', '·', '·', '·', '·', '·', '·', '·'], highlights: [] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "0 = 00000000"],
              ["i", 0],
              ["lands at", 1]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 0: read n's lowest bit (n & 1) = 1. Shift result left and OR the bit in. Input bit i=0 lands at output position 1.",
            customVisual: {
              array: [0, 0, 1, 0, 1, 0, 1, 1],
              secondaryArray: { label: 'REVERSED', array: [1, '·', '·', '·', '·', '·', '·', '·'], highlights: [0] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "1 = 00000001"],
              ["i", 0],
              ["lands at", 1]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard the lowest bit. n becomes 00010101 (21).",
            customVisual: {
              array: [0, 0, 0, 1, 0, 1, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, '·', '·', '·', '·', '·', '·', '·'], highlights: [0] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "1 = 00000001"],
              ["i", 0],
              ["lands at", 1]
            ]
          },
          {
            codeLine: 2,
            narration: "Continue loop for i = 1.",
            customVisual: {
              array: [0, 0, 0, 1, 0, 1, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, '·', '·', '·', '·', '·', '·', '·'], highlights: [] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "1 = 00000001"],
              ["i", 1],
              ["lands at", 2]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 1: read n's lowest bit (n & 1) = 1. Shift result left and OR the bit in. Result becomes 00000011 (3).",
            customVisual: {
              array: [0, 0, 0, 1, 0, 1, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, 1, '·', '·', '·', '·', '·', '·'], highlights: [1] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "3 = 00000011"],
              ["i", 1],
              ["lands at", 2]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard lowest bit. n becomes 00001010 (10).",
            customVisual: {
              array: [0, 0, 0, 0, 1, 0, 1, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, '·', '·', '·', '·', '·', '·'], highlights: [1] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 0],
              ["result", "3 = 00000011"],
              ["i", 1],
              ["lands at", 2]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 2: read n's lowest bit (n & 1) = 0. Shift result left: result becomes 00000110 (6).",
            customVisual: {
              array: [0, 0, 0, 0, 1, 0, 1, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, '·', '·', '·', '·', '·'], highlights: [2] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 0],
              ["result", "6 = 00000110"],
              ["i", 2],
              ["lands at", 3]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard lowest bit. n becomes 00000101 (5).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 1, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, '·', '·', '·', '·', '·'], highlights: [2] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "6 = 00000110"],
              ["i", 2],
              ["lands at", 3]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 3: read n's lowest bit (n & 1) = 1. Shift result left (make room) and OR the bit in. Input bit i=3 lands at output position 4, the next cell from the left of the reversed row.",
            customVisual: {
              array: [0, 0, 0, 0, 0, 1, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, '·', '·', '·', '·'], highlights: [3] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "13 = 00001101"],
              ["i", 3],
              ["lands at", 4]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard lowest bit. n becomes 00000010 (2).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 1, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, '·', '·', '·', '·'], highlights: [3] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 0],
              ["result", "13 = 00001101"],
              ["i", 3],
              ["lands at", 4]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 4: read lowest bit 0. Shift result left: result becomes 00011010 (26).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 1, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, '·', '·', '·'], highlights: [4] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 0],
              ["result", "26 = 00011010"],
              ["i", 4],
              ["lands at", 5]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard lowest bit. n becomes 00000001 (1).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, '·', '·', '·'], highlights: [4] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "26 = 00011010"],
              ["i", 4],
              ["lands at", 5]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 5: read lowest bit 1. Shift result left and OR 1: result becomes 00110101 (53).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 1],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, 1, '·', '·'], highlights: [5] }
            },
            highlights: [7],
            pointers: [{ index: 7, name: 'lowest', color: 'amber', position: 'bottom' }],
            vars: [
              ["n & 1", 1],
              ["result", "53 = 00110101"],
              ["i", 5],
              ["lands at", 6]
            ]
          },
          {
            codeLine: 4,
            narration: "n >>= 1: Discard lowest bit. n becomes 00000000 (0).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, 1, '·', '·'], highlights: [5] }
            },
            highlights: [],
            vars: [
              ["n & 1", 0],
              ["result", "53 = 00110101"],
              ["i", 5],
              ["lands at", 6]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 6: read lowest bit 0. Shift result left: result becomes 01101010 (106).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, 1, 0, '·'], highlights: [6] }
            },
            highlights: [],
            vars: [
              ["n & 1", 0],
              ["result", "106 = 01101010"],
              ["i", 6],
              ["lands at", 7]
            ]
          },
          {
            codeLine: 3,
            narration: "Step i = 7: read lowest bit 0. Shift result left: result becomes 11010100 (212).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, 1, 0, 0], highlights: [7] }
            },
            highlights: [],
            vars: [
              ["n & 1", 0],
              ["result", "212 = 11010100"],
              ["i", 7],
              ["lands at", 8]
            ]
          },
          {
            codeLine: 5,
            narration: "All 8 bits reversed. Return result = 212 (binary 11010100).",
            customVisual: {
              array: [0, 0, 0, 0, 0, 0, 0, 0],
              secondaryArray: { label: 'REVERSED', array: [1, 1, 0, 1, 0, 1, 0, 0], highlights: [0, 1, 3, 5] }
            },
            highlights: [],
            best: { label: "Reversed Result: 11010100 (212)" },
            vars: [
              ["return result", "212 = 11010100"]
            ]
          }
        ]
      }
    ]
  },

  // 6. Sum of Two Integers (LeetCode #371 - Medium)
  {
    id: 'sum-of-two-integers',
    patternId: 'bit-manipulation',
    title: 'Sum of Two Integers',
    subtitle: 'XOR sum + carry · add without +',
    kind: 'problem',
    difficulty: 'Medium',
    leetcode: {
      id: 371,
      slug: 'sum-of-two-integers',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Bloomberg'],
    statement: "Compute the sum a + b of two integers without using the + or - operators.",
    visualType: 'array',
    initialInput: [5, 3],
    approaches: [
      {
        label: 'XOR sum + carry',
        complexity: {
          time: 'O(1)',
          space: 'O(1)'
        },
        pseudocode: [
          "// a + b without + or -",
          "while b != 0:",
          "  carry ← (a & b) << 1   // overflow columns",
          "  a ← a ^ b              // sum without carry",
          "  b ← carry",
          "return a"
        ],
        starterCode: {
          javascript: `function getSum(a, b) {\n  while (b !== 0) {\n    const carry = (a & b) << 1;\n    a = a ^ b;\n    b = carry;\n  }\n  return a;\n}`,
          python: `def getSum(a: int, b: int) -> int:\n    mask = 0xFFFFFFFF\n    while b & mask:\n        carry = (a & b) << 1\n        a = a ^ b\n        b = carry\n    return (a & mask) if b > 0 else a`
        },
        solutionCode: {
          javascript: `function getSum(a, b) {\n  while (b !== 0) {\n    const carry = (a & b) << 1;\n    a = a ^ b;\n    b = carry;\n  }\n  return a;\n}`,
          python: `def getSum(a: int, b: int) -> int:\n    mask = 0xFFFFFFFF\n    while b & mask:\n        carry = (a & b) << 1\n        a = a ^ b\n        b = carry\n    return (a & mask) if b > 0 else a`
        },
        testCases: [
          {
            input: [5, 3],
            expected: 8,
            description: "5 + 3 = 8"
          },
          {
            input: [9, 11],
            expected: 20,
            description: "9 + 11 = 20"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Compute a + b for a = 5 (00101) and b = 3 (00011) using XOR for sum and AND << 1 for carry.",
            customVisual: { array: [0, 0, 1, 0, 1] },
            highlights: [2, 4],
            vars: [
              ["a", "00101 = 5"],
              ["b (carry)", "00011 = 3"],
              ["carry left?", "yes, start"]
            ]
          },
          {
            codeLine: 3,
            narration: "carry = (a & b) << 1 = (00101 & 00011) << 1 = 00001 << 1 = 00010 (2).",
            customVisual: { array: [0, 0, 0, 1, 0] },
            highlights: [3],
            vars: [
              ["carry", "00010 = 2"],
              ["a & b", "00001 = 1"]
            ]
          },
          {
            codeLine: 4,
            narration: "Set a = 00110 (the XOR sum) and b = 00010 (the carry). b is still non-zero, so loop again: re-add the carry into a.",
            customVisual: { array: [0, 0, 1, 1, 0] },
            highlights: [2, 3],
            vars: [
              ["a", "00110 = 6"],
              ["b (carry)", "00010 = 2"],
              ["carry left?", "yes, repeat"]
            ]
          },
          {
            codeLine: 5,
            narration: "Update b = carry = 00010 (2).",
            customVisual: { array: [0, 0, 1, 1, 0] },
            highlights: [2, 3],
            vars: [
              ["a", "00110 = 6"],
              ["b", "00010 = 2"]
            ]
          },
          {
            codeLine: 2,
            narration: "b = 00010 != 0, continue while loop.",
            customVisual: { array: [0, 0, 1, 1, 0] },
            highlights: [2, 3],
            vars: [
              ["a", "00110 = 6"],
              ["b", "00010 = 2"]
            ]
          },
          {
            codeLine: 3,
            narration: "carry = (a & b) << 1 = (00110 & 00010) << 1 = 00010 << 1 = 00100 (4).",
            customVisual: { array: [0, 0, 1, 0, 0] },
            highlights: [2],
            vars: [
              ["carry", "00100 = 4"],
              ["a & b", "00010 = 2"]
            ]
          },
          {
            codeLine: 4,
            narration: "a = a ^ b = 00110 ^ 00010 = 00100 (4). b = carry = 00100 (4).",
            customVisual: { array: [0, 0, 1, 0, 0] },
            highlights: [2],
            vars: [
              ["a", "00100 = 4"],
              ["b (carry)", "00100 = 4"],
              ["carry left?", "yes, repeat"]
            ]
          },
          {
            codeLine: 3,
            narration: "carry = (00100 & 00100) << 1 = 00100 << 1 = 01000 (8). a = 00100 ^ 00100 = 00000 (0).",
            customVisual: { array: [0, 1, 0, 0, 0] },
            highlights: [1],
            vars: [
              ["a", "00000 = 0"],
              ["b (carry)", "01000 = 8"]
            ]
          },
          {
            codeLine: 4,
            narration: "a = 00000 ^ 01000 = 01000 (8). Carry becomes (0 & 8) << 1 = 0.",
            customVisual: { array: [0, 1, 0, 0, 0] },
            highlights: [1],
            vars: [
              ["a", "01000 = 8"],
              ["b (carry)", "00000 = 0"],
              ["carry left?", "no, done"]
            ]
          },
          {
            codeLine: 6,
            narration: "b == 0. Return sum a = 8 (binary 01000). 5 + 3 = 8 without using '+'.",
            customVisual: { array: [0, 1, 0, 0, 0] },
            highlights: [1],
            best: { label: "Result: 8 (5 + 3 = 8)" },
            vars: [["return a", "01000 = 8"]]
          }
        ]
      }
    ]
  }
];
