import { Problem } from '../../types';

export const stackProblems: Problem[] = [
  {
    "id": "intro",
    "patternId": "stack",
    "title": "Overview",
    "subtitle": "LIFO · push, pop, and why \"the top\" matters",
    "kind": "intro",
    "statement": "A Stack is a Last-In, First-Out (LIFO) linear data structure. All insertions (push) and deletions (pop) occur at a single end called \"the top\". Perfect for undo operations, syntax matching, nested expressions, and monotonic searches.",
    "visualType": "stack",
    "initialInput": [
      "(",
      "[",
      "{",
      "}",
      "]",
      ")"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Array scan · search & shift from end",
        "complexity": {
          "time": "O(n²)",
          "space": "O(n)"
        },
        "pseudocode": [
          "arr = []",
          "for item in input:",
          "    append item to arr",
          "    if match found: remove by shifting elements"
        ],
        "starterCode": {
          "javascript": "function stackArraySim(items) {\n  // Write your solution here\n  \n}",
          "python": "def stackArraySim(items: list[str]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function stackArraySim(items) {\n  const arr = [];\n  for (let ch of items) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      arr.push(ch);\n    } else {\n      if (arr.length === 0) return false;\n      arr.splice(arr.length - 1, 1);\n    }\n  }\n  return arr.length === 0;\n}",
          "python": "def stackArraySim(items: list[str]) -> bool:\n    arr = []\n    for ch in items:\n        if ch in '({[':\n            arr.append(ch)\n        else:\n            if not arr: return False\n            arr.pop()\n    return len(arr) == 0"
        },
        "testCases": [
          {
            "input": [
              [
                "(",
                "[",
                "{",
                "}",
                "]",
                ")"
              ]
            ],
            "expected": true,
            "description": "Matched pairs"
          },
          {
            "input": [
              [
                "(",
                "]"
              ]
            ],
            "expected": false,
            "description": "Mismatched"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize array simulation container.",
            "stack": [],
            "vars": [
              [
                "container",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Push opening bracket \"(\". Array length is 1.",
            "stack": [
              "("
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "input[0]",
                "("
              ],
              [
                "container",
                "['(']"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Push \"[\". Array is now [\"(\", \"[\"].",
            "stack": [
              "(",
              "["
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "input[1]",
                "["
              ],
              [
                "container",
                "['(', '[']"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Push \"{\". Array is now [\"(\", \"[\", \"{\"].",
            "stack": [
              "(",
              "[",
              "{"
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "input[2]",
                "{"
              ],
              [
                "container",
                "['(', '[', '{']"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \"}\". Scan end of array: found matching \"{\". Splice it out.",
            "stack": [
              "(",
              "["
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "input[3]",
                "}"
              ],
              [
                "match",
                "{"
              ],
              [
                "container",
                "['(', '[']"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \"]\". Scan end: matches \"[\". Splice it out.",
            "stack": [
              "("
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "green"
              }
            ],
            "vars": [
              [
                "input[4]",
                "]"
              ],
              [
                "match",
                "["
              ],
              [
                "container",
                "['(']"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \")\". Scan end: matches \"(\". Container is now empty → valid!",
            "stack": [],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "op",
                "index": 5,
                "color": "green"
              }
            ],
            "best": {
              "label": "Valid Balanced Structure"
            },
            "vars": [
              [
                "container",
                "[]"
              ],
              [
                "valid",
                true
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · LIFO stack O(1) push/pop/peek",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st ← empty stack",
          "for item in items:",
          "    if is_open(item): push(item)",
          "    else if st.top matches item: pop()",
          "    else: return false",
          "return st is empty"
        ],
        "starterCode": {
          "javascript": "function stackIntro(brackets) {\n  // Write your solution here\n  \n}",
          "python": "def stackIntro(brackets: list[str]) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function stackIntro(brackets) {\n  const st = [];\n  for (let ch of brackets) {\n    if (ch === '(' || ch === '[' || ch === '{') {\n      st.push(ch);\n    } else {\n      if (!st.length) return false;\n      st.pop();\n    }\n  }\n  return st.length === 0;\n}",
          "python": "def stackIntro(brackets: list[str]) -> bool:\n    st = []\n    for ch in brackets:\n        if ch in '({[':\n            st.append(ch)\n        else:\n            if not st: return False\n            st.pop()\n    return len(st) == 0"
        },
        "testCases": [
          {
            "input": [
              [
                "(",
                "[",
                "{",
                "}",
                "]",
                ")"
              ]
            ],
            "expected": true,
            "description": "Matched pairs"
          },
          {
            "input": [
              [
                "(",
                "]"
              ]
            ],
            "expected": false,
            "description": "Mismatched"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize LIFO stack. All operations at O(1) top pointer.",
            "stack": [],
            "vars": [
              [
                "stack",
                "[]"
              ],
              [
                "top",
                "null"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Push opening brackets \"(\", \"[\", \"{\" sequentially into stack container.",
            "stack": [
              "(",
              "[",
              "{"
            ],
            "highlights": [
              0,
              1,
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "['(', '[', '{']"
              ],
              [
                "top",
                "{"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \"}\". Top is \"{\" → exact match! O(1) pop.",
            "stack": [
              "(",
              "["
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "{}"
              ],
              [
                "stack",
                "['(', '[']"
              ],
              [
                "top",
                "["
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \"]\". Top is \"[\" → match! O(1) pop.",
            "stack": [
              "("
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "[]"
              ],
              [
                "stack",
                "['(']"
              ],
              [
                "top",
                "("
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter closing \")\". Top is \"(\" → match! O(1) pop.",
            "stack": [],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "op",
                "index": 5,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "()"
              ],
              [
                "stack",
                "[]"
              ],
              [
                "top",
                "null"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "All tokens processed. Stack is completely empty → Valid!",
            "stack": [],
            "best": {
              "label": "Valid LIFO Balance"
            },
            "vars": [
              [
                "stack.length",
                0
              ],
              [
                "result",
                true
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "valid-parentheses",
    "patternId": "stack",
    "title": "Valid Parentheses",
    "subtitle": "The top is the bracket that must close next",
    "kind": "problem",
    "leetcode": {
      "id": 20,
      "slug": "valid-parentheses",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Meta",
      "Google",
      "Microsoft",
      "Apple"
    ],
    "statement": "Given a string s containing just the characters \"(\", \")\", \"{\", \"}\", \"[\" and \"]\", determine if the input string is valid. Every open bracket must be closed by the same type of bracket in the correct order.",
    "visualType": "stack",
    "initialInput": [
      "(",
      "[",
      "{",
      "}",
      "]",
      ")"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · repeated substring replacement",
        "complexity": {
          "time": "O(n²)",
          "space": "O(n)"
        },
        "pseudocode": [
          "while \"()\" in s or \"[]\" in s or \"{}\" in s:",
          "    replace \"()\" with \"\"",
          "    replace \"[]\" with \"\"",
          "    replace \"{}\" with \"\"",
          "return s == \"\""
        ],
        "starterCode": {
          "javascript": "function isValid(s) {\n  // Write your solution here\n  \n}",
          "python": "def isValid(s: str) -> bool:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function isValid(s) {\n  while (s.includes('()') || s.includes('[]') || s.includes('{}')) {\n    s = s.replace('()', '').replace('[]', '').replace('{}', '');\n  }\n  return s.length === 0;\n}",
          "python": "def isValid(s: str) -> bool:\n    while '()' in s or '[]' in s or '{}' in s:\n        s = s.replace('()', '').replace('[]', '').replace('{}', '')\n    return len(s) == 0"
        },
        "testCases": [
          {
            "input": [
              "()[]{}"
            ],
            "expected": true,
            "description": "All closed properly"
          },
          {
            "input": [
              "(]"
            ],
            "expected": false,
            "description": "Mismatched brackets"
          },
          {
            "input": [
              "([{}])"
            ],
            "expected": true,
            "description": "Nested symmetric"
          },
          {
            "input": [
              "]"
            ],
            "expected": false,
            "description": "Single closing bracket"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start with input string s = \"([{}])\". Check for adjacent matched pairs.",
            "vars": [
              [
                "s",
                "\"([{}])\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Found \"{}\" in center. Replace \"{}\" with \"\" → s becomes \"([])\".",
            "vars": [
              [
                "found",
                "\"{}\""
              ],
              [
                "s",
                "\"([])\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Found \"[]\" in center. Replace \"[]\" with \"\" → s becomes \"()\".",
            "vars": [
              [
                "found",
                "\"[]\""
              ],
              [
                "s",
                "\"()\""
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Found \"()\". Replace \"()\" with \"\" → s becomes \"\".",
            "vars": [
              [
                "found",
                "\"()\""
              ],
              [
                "s",
                "\"\""
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "String is empty → Balanced! O(n²) string copies performed.",
            "best": {
              "label": "Valid (Empty String)"
            },
            "vars": [
              [
                "s",
                "\"\""
              ],
              [
                "result",
                true
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · stack of open brackets",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given s",
          "st = []",
          "for each ch in s:",
          "    if ch opens: push ch",
          "    else:",
          "        if st empty or top mismatches: return false",
          "        pop()",
          "return st is empty"
        ],
        "starterCode": {
          "javascript": "function isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (let ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') {\n      stack.push(ch);\n    } else {\n      if (!stack.length || stack.pop() !== pairs[ch]) return false;\n    }\n  }\n  return stack.length === 0;\n}",
          "python": "def isValid(s: str) -> bool:\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in '({[':\n            stack.append(ch)\n        elif not stack or stack.pop() != pairs[ch]:\n            return False\n    return len(stack) == 0"
        },
        "solutionCode": {
          "javascript": "function isValid(s) {\n  const stack = [];\n  const pairs = { ')': '(', '}': '{', ']': '[' };\n  for (let ch of s) {\n    if (ch === '(' || ch === '{' || ch === '[') {\n      stack.push(ch);\n    } else {\n      if (!stack.length || stack.pop() !== pairs[ch]) return false;\n    }\n  }\n  return stack.length === 0;\n}",
          "python": "def isValid(s: str) -> bool:\n    stack = []\n    pairs = {')': '(', '}': '{', ']': '['}\n    for ch in s:\n        if ch in '({[':\n            stack.append(ch)\n        elif not stack or stack.pop() != pairs[ch]:\n            return False\n    return len(stack) == 0"
        },
        "testCases": [
          {
            "input": [
              "()[]{}"
            ],
            "expected": true,
            "description": "All closed properly"
          },
          {
            "input": [
              "(]"
            ],
            "expected": false,
            "description": "Mismatched brackets"
          },
          {
            "input": [
              "([{}])"
            ],
            "expected": true,
            "description": "Nested symmetric"
          },
          {
            "input": [
              "]"
            ],
            "expected": false,
            "description": "Single closing bracket"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Initialize empty stack for unmatched opening brackets.",
            "stack": [],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[]"
              ],
              [
                "i",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "s[0] = \"(\": opening bracket → Push onto stack.",
            "stack": [
              "("
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "['(']"
              ],
              [
                "top",
                "("
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "s[1] = \"[\": opening bracket → Push onto stack.",
            "stack": [
              "(",
              "["
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "['(', '[']"
              ],
              [
                "top",
                "["
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "s[2] = \"{\": opening bracket → Push onto stack.",
            "stack": [
              "(",
              "[",
              "{"
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "['(', '[', '{']"
              ],
              [
                "top",
                "{"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "s[3] = \"}\": closing bracket. Top of stack is \"{\" → Match! Pop \"{\".",
            "stack": [
              "(",
              "["
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "{}"
              ],
              [
                "stack",
                "['(', '[']"
              ],
              [
                "top",
                "["
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "s[4] = \"]\": closing bracket. Top of stack is \"[\" → Match! Pop \"[\".",
            "stack": [
              "("
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "[]"
              ],
              [
                "stack",
                "['(']"
              ],
              [
                "top",
                "("
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "s[5] = \")\": closing bracket. Top of stack is \"(\" → Match! Pop \"(\".",
            "stack": [],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "green"
              }
            ],
            "vars": [
              [
                "matched",
                "()"
              ],
              [
                "stack",
                "[]"
              ],
              [
                "top",
                "null"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "End of string reached. Stack is completely empty → String is VALID.",
            "stack": [],
            "best": {
              "label": "Valid Parentheses!"
            },
            "vars": [
              [
                "result",
                true
              ],
              [
                "stack.length",
                0
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "baseball-game",
    "patternId": "stack",
    "title": "Baseball Game",
    "subtitle": "Every operation is about the top",
    "kind": "problem",
    "leetcode": {
      "id": 682,
      "slug": "baseball-game",
      "difficulty": "Easy"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Bloomberg"
    ],
    "statement": "You are keeping score for a baseball game with strange rules. Given a list of strings ops: integers record score, \"+\" records sum of previous two, \"D\" records double of previous score, \"C\" invalidates previous score. Return the sum of all scores.",
    "visualType": "stack",
    "initialInput": [
      "5",
      "2",
      "C",
      "D",
      "+"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · dynamic array with re-summation",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "record = []",
          "for op in ops:",
          "    if op == \"C\": remove last from record",
          "    else if op == \"D\": add 2 * record[-1]",
          "    else if op == \"+\": add record[-1] + record[-2]",
          "    else: add int(op)",
          "return sum(record)"
        ],
        "starterCode": {
          "javascript": "function calPoints(operations) {\n  // Write your solution here\n  \n}",
          "python": "def calPoints(operations: list[str]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function calPoints(operations) {\n  const record = [];\n  for (let op of operations) {\n    if (op === '+') {\n      record.push(record[record.length - 1] + record[record.length - 2]);\n    } else if (op === 'D') {\n      record.push(2 * record[record.length - 1]);\n    } else if (op === 'C') {\n      record.pop();\n    } else {\n      record.push(Number(op));\n    }\n  }\n  return record.reduce((a, b) => a + b, 0);\n}",
          "python": "def calPoints(operations: list[str]) -> int:\n    record = []\n    for op in operations:\n        if op == '+':\n            record.append(record[-1] + record[-2])\n        elif op == 'D':\n            record.append(2 * record[-1])\n        elif op == 'C':\n            record.pop()\n        else:\n            record.append(int(op))\n    return sum(record)"
        },
        "testCases": [
          {
            "input": [
              [
                "5",
                "2",
                "C",
                "D",
                "+"
              ]
            ],
            "expected": 30,
            "description": "5 + 10 + 15 = 30"
          },
          {
            "input": [
              [
                "5",
                "-2",
                "4",
                "C",
                "D",
                "9",
                "+",
                "+"
              ]
            ],
            "expected": 27,
            "description": "Multiple operations"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Start with empty record score list.",
            "stack": [],
            "vars": [
              [
                "record",
                "[]"
              ],
              [
                "total",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "op = \"5\": Record integer 5.",
            "stack": [
              5
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "record",
                "[5]"
              ],
              [
                "total",
                5
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "op = \"2\": Record integer 2.",
            "stack": [
              5,
              2
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "record",
                "[5, 2]"
              ],
              [
                "total",
                7
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "op = \"C\": Invalidate previous score 2 (pop).",
            "stack": [
              5
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "green"
              }
            ],
            "vars": [
              [
                "record",
                "[5]"
              ],
              [
                "cancelled",
                2
              ],
              [
                "total",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "op = \"D\": Double top score (2 * 5 = 10). Record 10.",
            "stack": [
              5,
              10
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "record",
                "[5, 10]"
              ],
              [
                "added",
                10
              ],
              [
                "total",
                15
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "op = \"+\": Sum top two (5 + 10 = 15). Record 15.",
            "stack": [
              5,
              10,
              15
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "green"
              }
            ],
            "best": {
              "label": "Total Score = 30"
            },
            "vars": [
              [
                "record",
                "[5, 10, 15]"
              ],
              [
                "total",
                30
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · LIFO score stack",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = []",
          "for op in ops:",
          "    if op == \"+\": st.push(st[-1] + st[-2])",
          "    else if op == \"D\": st.push(2 * st[-1])",
          "    else if op == \"C\": st.pop()",
          "    else: st.push(int(op))",
          "return sum(st)"
        ],
        "starterCode": {
          "javascript": "function calPoints(operations) {\n  // Write your solution here\n  \n}",
          "python": "def calPoints(operations: list[str]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function calPoints(operations) {\n  const st = [];\n  for (let op of operations) {\n    if (op === '+') {\n      st.push(st[st.length - 1] + st[st.length - 2]);\n    } else if (op === 'D') {\n      st.push(2 * st[st.length - 1]);\n    } else if (op === 'C') {\n      st.pop();\n    } else {\n      st.push(parseInt(op, 10));\n    }\n  }\n  return st.reduce((a, b) => a + b, 0);\n}",
          "python": "def calPoints(operations: list[str]) -> int:\n    st = []\n    for op in operations:\n        if op == '+':\n            st.append(st[-1] + st[-2])\n        elif op == 'D':\n            st.append(2 * st[-1])\n        elif op == 'C':\n            st.pop()\n        else:\n            st.append(int(op))\n    return sum(st)"
        },
        "testCases": [
          {
            "input": [
              [
                "5",
                "2",
                "C",
                "D",
                "+"
              ]
            ],
            "expected": 30,
            "description": "Total score 30"
          },
          {
            "input": [
              [
                "1",
                "C"
              ]
            ],
            "expected": 0,
            "description": "Cancel single score"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize stack container for game scores.",
            "stack": [],
            "vars": [
              [
                "stack",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push score 5 to stack.",
            "stack": [
              5
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "top",
                5
              ],
              [
                "stack",
                "[5]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push score 2 to stack.",
            "stack": [
              5,
              2
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "top",
                2
              ],
              [
                "stack",
                "[5, 2]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Operation \"C\": O(1) pop 2 from stack top.",
            "stack": [
              5
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "green"
              }
            ],
            "vars": [
              [
                "popped",
                2
              ],
              [
                "stack",
                "[5]"
              ],
              [
                "top",
                5
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Operation \"D\": 2 * top (2 * 5) = 10. Push 10.",
            "stack": [
              5,
              10
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "newScore",
                10
              ],
              [
                "stack",
                "[5, 10]"
              ],
              [
                "top",
                10
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Operation \"+\": top (10) + secondTop (5) = 15. Push 15.",
            "stack": [
              5,
              10,
              15
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "newScore",
                15
              ],
              [
                "stack",
                "[5, 10, 15]"
              ],
              [
                "top",
                15
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Sum all elements in stack: 5 + 10 + 15 = 30.",
            "stack": [
              5,
              10,
              15
            ],
            "best": {
              "label": "Sum = 30"
            },
            "vars": [
              [
                "totalSum",
                30
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "decode-string",
    "patternId": "stack",
    "title": "Decode String",
    "subtitle": "k[body] with nesting · \"]\" collapses the top",
    "kind": "problem",
    "leetcode": {
      "id": 394,
      "slug": "decode-string",
      "difficulty": "Medium"
    },
    "companies": [
      "Google",
      "Bloomberg",
      "Amazon",
      "Microsoft",
      "Cisco"
    ],
    "statement": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.",
    "visualType": "stack",
    "initialInput": [
      "3",
      "[",
      "a",
      "2",
      "[",
      "c",
      "]",
      "]"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · recursive regex substring expansion",
        "complexity": {
          "time": "O(n · maxK)",
          "space": "O(n)"
        },
        "pseudocode": [
          "while \"[\" in s:",
          "    find innermost k[encoded_string]",
          "    expand it by repeating k times",
          "    replace in original string",
          "return s"
        ],
        "starterCode": {
          "javascript": "function decodeString(s) {\n  // Write your solution here\n  \n}",
          "python": "def decodeString(s: str) -> str:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function decodeString(s) {\n  const regex = /(\\d+)\\[([a-zA-Z]+)\\]/;\n  while (regex.test(s)) {\n    s = s.replace(regex, (_, k, str) => str.repeat(Number(k)));\n  }\n  return s;\n}",
          "python": "def decodeString(s: str) -> str:\n    import re\n    while '[' in s:\n        s = re.sub(r'(\\d+)\\[([a-zA-Z]+)\\]', lambda m: m.group(2) * int(m.group(1)), s)\n    return s"
        },
        "testCases": [
          {
            "input": [
              "3[a]2[bc]"
            ],
            "expected": "aaabcbc",
            "description": "Two adjacent blocks"
          },
          {
            "input": [
              "3[a2[c]]"
            ],
            "expected": "accaccacc",
            "description": "Nested repeat"
          },
          {
            "input": [
              "2[abc]3[cd]ef"
            ],
            "expected": "abcabccdcdcdef",
            "description": "Mixed with trailing"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Input string s = \"3[a2[c]]\". Find innermost bracket pair.",
            "vars": [
              [
                "s",
                "\"3[a2[c]]\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Innermost match: 2[c] → Expand \"c\" 2 times = \"cc\".",
            "vars": [
              [
                "match",
                "\"2[c]\""
              ],
              [
                "expanded",
                "\"cc\""
              ],
              [
                "s",
                "\"3[acc]\""
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Next match: 3[acc] → Expand \"acc\" 3 times = \"accaccacc\".",
            "vars": [
              [
                "match",
                "\"3[acc]\""
              ],
              [
                "expanded",
                "\"accaccacc\""
              ],
              [
                "s",
                "\"accaccacc\""
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "No brackets remaining. Final decoded output = \"accaccacc\".",
            "best": {
              "label": "\"accaccacc\""
            },
            "vars": [
              [
                "result",
                "\"accaccacc\""
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · twin stacks (count & string)",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "numStack = [], strStack = []",
          "currNum = 0, currStr = \"\"",
          "for ch in s:",
          "    if is_digit(ch): currNum = currNum * 10 + int(ch)",
          "    else if ch == \"[\": push currStr & currNum; reset both",
          "    else if ch == \"]\": pop num & prevStr; currStr = prevStr + currStr * num",
          "    else: currStr += ch",
          "return currStr"
        ],
        "starterCode": {
          "javascript": "function decodeString(s) {\n  // Write your solution here\n  \n}",
          "python": "def decodeString(s: str) -> str:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function decodeString(s) {\n  const countStack = [];\n  const stringStack = [];\n  let currStr = '';\n  let currNum = 0;\n  for (let ch of s) {\n    if (!isNaN(ch)) {\n      currNum = currNum * 10 + parseInt(ch, 10);\n    } else if (ch === '[') {\n      countStack.push(currNum);\n      stringStack.push(currStr);\n      currStr = '';\n      currNum = 0;\n    } else if (ch === ']') {\n      const k = countStack.pop();\n      const prevStr = stringStack.pop();\n      currStr = prevStr + currStr.repeat(k);\n    } else {\n      currStr += ch;\n    }\n  }\n  return currStr;\n}",
          "python": "def decodeString(s: str) -> str:\n    count_st, str_st = [], []\n    curr_str, curr_num = '', 0\n    for ch in s:\n        if ch.isdigit():\n            curr_num = curr_num * 10 + int(ch)\n        elif ch == '[':\n            count_st.append(curr_num)\n            str_st.append(curr_str)\n            curr_str, curr_num = '', 0\n        elif ch == ']':\n            k = count_st.pop()\n            prev = str_st.pop()\n            curr_str = prev + curr_str * k\n        else:\n            curr_str += ch\n    return curr_str"
        },
        "testCases": [
          {
            "input": [
              "3[a2[c]]"
            ],
            "expected": "accaccacc",
            "description": "Nested repeat"
          },
          {
            "input": [
              "3[a]2[bc]"
            ],
            "expected": "aaabcbc",
            "description": "Two adjacent blocks"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Initialize countStack and stringStack. currNum = 0, currStr = \"\".",
            "customVisual": {
              "twinStacks": {
                "mainStack": [],
                "minStack": [],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "vars": [
              [
                "currNum",
                0
              ],
              [
                "currStr",
                "\"\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter digit \"3\": currNum = 3.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [],
                "minStack": [],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "currNum",
                3
              ],
              [
                "currStr",
                "\"\""
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Encounter \"[\": Push 3 to countStack and \"\" to stringStack. Reset both.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3
                ],
                "minStack": [
                  "\"\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "countStack",
                "[3]"
              ],
              [
                "strStack",
                "[\"\"]"
              ],
              [
                "currNum",
                0
              ],
              [
                "currStr",
                "\"\""
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Encounter char \"a\": currStr = \"a\".",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3
                ],
                "minStack": [
                  "\"\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "currStr",
                "\"a\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter digit \"2\": currNum = 2.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3
                ],
                "minStack": [
                  "\"\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "currNum",
                2
              ],
              [
                "currStr",
                "\"a\""
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Encounter \"[\": Push 2 to countStack and \"a\" to stringStack. Reset.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3,
                  2
                ],
                "minStack": [
                  "\"\"",
                  "\"a\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "countStack",
                "[3, 2]"
              ],
              [
                "strStack",
                "[\"\", \"a\"]"
              ],
              [
                "currStr",
                "\"\""
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Encounter char \"c\": currStr = \"c\".",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3,
                  2
                ],
                "minStack": [
                  "\"\"",
                  "\"a\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "op",
                "index": 5,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "currStr",
                "\"c\""
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Encounter \"]\": Pop count (2) and prevStr (\"a\"). currStr = \"a\" + \"c\"*2 = \"acc\".",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  3
                ],
                "minStack": [
                  "\"\""
                ],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              6
            ],
            "pointers": [
              {
                "name": "op",
                "index": 6,
                "color": "green"
              }
            ],
            "vars": [
              [
                "poppedCount",
                2
              ],
              [
                "poppedStr",
                "\"a\""
              ],
              [
                "currStr",
                "\"acc\""
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Encounter second \"]\": Pop count (3) and prevStr (\"\"). currStr = \"\" + \"acc\"*3 = \"accaccacc\".",
            "customVisual": {
              "twinStacks": {
                "mainStack": [],
                "minStack": [],
                "mainLabel": "COUNT",
                "secondaryLabel": "STRING"
              }
            },
            "highlights": [
              7
            ],
            "pointers": [
              {
                "name": "op",
                "index": 7,
                "color": "green"
              }
            ],
            "best": {
              "label": "\"accaccacc\""
            },
            "vars": [
              [
                "poppedCount",
                3
              ],
              [
                "currStr",
                "\"accaccacc\""
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "longest-valid-parentheses",
    "patternId": "stack",
    "title": "Longest Valid Parentheses",
    "subtitle": "Stack of indices · a base below every run",
    "kind": "problem",
    "leetcode": {
      "id": 32,
      "slug": "longest-valid-parentheses",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft",
      "ByteDance"
    ],
    "statement": "Given a string containing just the characters \"(\" and \")\", return the length of the longest valid (well-formed) parentheses substring.",
    "visualType": "stack",
    "initialInput": [
      ")",
      "(",
      "(",
      ")",
      ")",
      "("
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · check all even-length substrings",
        "complexity": {
          "time": "O(n³)",
          "space": "O(n)"
        },
        "pseudocode": [
          "maxLen = 0",
          "for i from 0 to n:",
          "    for j from i+2 to n step 2:",
          "        if isValid(s[i..j]):",
          "            maxLen = max(maxLen, j - i)",
          "return maxLen"
        ],
        "starterCode": {
          "javascript": "function longestValidParentheses(s) {\n  // Write your solution here\n  \n}",
          "python": "def longestValidParentheses(s: str) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function longestValidParentheses(s) {\n  let maxLen = 0;\n  for (let i = 0; i < s.length; i++) {\n    for (let j = i + 2; j <= s.length; j += 2) {\n      const sub = s.slice(i, j);\n      let bal = 0, ok = true;\n      for (let ch of sub) {\n        if (ch === '(') bal++;\n        else bal--;\n        if (bal < 0) { ok = false; break; }\n      }\n      if (ok && bal === 0) maxLen = Math.max(maxLen, j - i);\n    }\n  }\n  return maxLen;\n}",
          "python": "def longestValidParentheses(s: str) -> int:\n    max_len = 0\n    for i in range(len(s)):\n        for j in range(i + 2, len(s) + 1, 2):\n            sub = s[i:j]\n            bal = 0\n            ok = True\n            for ch in sub:\n                bal += 1 if ch == '(' else -1\n                if bal < 0:\n                    ok = False\n                    break\n            if ok and bal == 0:\n                max_len = max(max_len, j - i)\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              "(()"
            ],
            "expected": 2,
            "description": "Single pair in prefix"
          },
          {
            "input": [
              ")()())"
            ],
            "expected": 4,
            "description": "4 characters in middle"
          },
          {
            "input": [
              ""
            ],
            "expected": 0,
            "description": "Empty string"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given s = \") ( ( ) ) (\". Test all even-length substring windows.",
            "vars": [
              [
                "maxLen",
                0
              ],
              [
                "s",
                "\")(())(\""
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Substring [1..4] = \" ( ( ) ) \" -> Balance test passes! Length = 4.",
            "highlights": [
              1,
              2,
              3,
              4
            ],
            "best": {
              "label": "Valid Length 4: \"(())\""
            },
            "vars": [
              [
                "sub",
                "\"(())\""
              ],
              [
                "len",
                4
              ],
              [
                "maxLen",
                4
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Completed all substring checks. Maximum length = 4.",
            "best": {
              "label": "Max Length = 4"
            },
            "vars": [
              [
                "maxLen",
                4
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · stack of boundary indices",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = [-1]  // baseline index",
          "maxLen = 0",
          "for i, ch in enumerate(s):",
          "    if ch == \"(\": push(i)",
          "    else:",
          "        pop()",
          "        if st empty: push(i)  // reset baseline",
          "        else: maxLen = max(maxLen, i - st[-1])",
          "return maxLen"
        ],
        "starterCode": {
          "javascript": "function longestValidParentheses(s) {\n  // Write your solution here\n  \n}",
          "python": "def longestValidParentheses(s: str) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function longestValidParentheses(s) {\n  const stack = [-1];\n  let maxLen = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] === '(') {\n      stack.push(i);\n    } else {\n      stack.pop();\n      if (stack.length === 0) {\n        stack.push(i);\n      } else {\n        maxLen = Math.max(maxLen, i - stack[stack.length - 1]);\n      }\n    }\n  }\n  return maxLen;\n}",
          "python": "def longestValidParentheses(s: str) -> int:\n    stack = [-1]\n    max_len = 0\n    for i, ch in enumerate(s):\n        if ch == '(':\n            stack.append(i)\n        else:\n            stack.pop()\n            if not stack:\n                stack.append(i)\n            else:\n                max_len = max(max_len, i - stack[-1])\n    return max_len"
        },
        "testCases": [
          {
            "input": [
              ")()())"
            ],
            "expected": 4,
            "description": "4 characters in middle"
          },
          {
            "input": [
              "(()"
            ],
            "expected": 2,
            "description": "Single pair"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize stack with baseline index [-1]. maxLen = 0.",
            "stack": [
              -1
            ],
            "vars": [
              [
                "stack",
                "[-1]"
              ],
              [
                "maxLen",
                0
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "i=0, s[0]=\")\": pop -1. Stack empty → reset baseline: push index 0.",
            "stack": [
              0
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[0]"
              ],
              [
                "baseline",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i=1, s[1]=\"(\": push index 1.",
            "stack": [
              0,
              1
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i=2, s[2]=\"(\": push index 2.",
            "stack": [
              0,
              1,
              2
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[0, 1, 2]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=3, s[3]=\")\": pop top index 2. Top is now 1. Length = 3 - 1 = 2. maxLen = 2.",
            "stack": [
              0,
              1
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "popped",
                2
              ],
              [
                "stack",
                "[0, 1]"
              ],
              [
                "len",
                2
              ],
              [
                "maxLen",
                2
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=4, s[4]=\")\": pop top index 1. Top is now baseline 0. Length = 4 - 0 = 4. maxLen = 4!",
            "stack": [
              0
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "green"
              }
            ],
            "best": {
              "label": "Current Best = 4"
            },
            "vars": [
              [
                "popped",
                1
              ],
              [
                "stack",
                "[0]"
              ],
              [
                "len",
                4
              ],
              [
                "maxLen",
                4
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i=5, s[5]=\"(\": push index 5.",
            "stack": [
              0,
              5
            ],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "best": {
              "label": "Longest Valid Run = 4"
            },
            "vars": [
              [
                "stack",
                "[0, 5]"
              ],
              [
                "maxLen",
                4
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "monotonic-stack",
    "patternId": "stack",
    "title": "Monotonic Stack",
    "subtitle": "Keep it sorted · bigger arrivals resolve the waiters",
    "kind": "concept",
    "statement": "A Monotonic Stack maintains its elements in strictly increasing or decreasing order. When a new element violates the monotonicity, elements are popped from the top — effectively resolving past \"waiting\" elements in O(1) amortized time.",
    "visualType": "stack",
    "initialInput": [
      2,
      1,
      5,
      6,
      2,
      3
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · inner scan for next greater element",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "res = []",
          "for i from 0 to n:",
          "    found = -1",
          "    for j from i+1 to n:",
          "        if arr[j] > arr[i]: found = arr[j]; break",
          "    res.push(found)",
          "return res"
        ],
        "starterCode": {
          "javascript": "function nextGreaterElements(arr) {\n  // Write your solution here\n  \n}",
          "python": "def nextGreaterElements(arr: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function nextGreaterElements(arr) {\n  const res = [];\n  for (let i = 0; i < arr.length; i++) {\n    let found = -1;\n    for (let j = i + 1; j < arr.length; j++) {\n      if (arr[j] > arr[i]) { found = arr[j]; break; }\n    }\n    res.push(found);\n  }\n  return res;\n}",
          "python": "def nextGreaterElements(arr: list[int]) -> list[int]:\n    res = []\n    for i in range(len(arr)):\n        found = -1\n        for j in range(i + 1, len(arr)):\n            if arr[j] > arr[i]:\n                found = arr[j]\n                break\n        res.append(found)\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                6,
                2,
                3
              ]
            ],
            "expected": [
              5,
              5,
              6,
              -1,
              3,
              -1
            ],
            "description": "Next greater elements"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "i=0, arr[0]=2: Scan right. Find arr[2]=5 > 2. res[0] = 5.",
            "highlights": [
              0,
              2
            ],
            "vars": [
              [
                "i",
                0
              ],
              [
                "nextGreater",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i=1, arr[1]=1: Scan right. Find arr[2]=5 > 1. res[1] = 5.",
            "highlights": [
              1,
              2
            ],
            "vars": [
              [
                "i",
                1
              ],
              [
                "nextGreater",
                5
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "i=2, arr[2]=5: Scan right. Find arr[3]=6 > 5. res[2] = 6.",
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "i",
                2
              ],
              [
                "nextGreater",
                6
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Nested scan takes O(n²) quadratic operations.",
            "best": {
              "label": "[5, 5, 6, -1, 3, -1]"
            },
            "vars": [
              [
                "res",
                "[5, 5, 6, -1, 3, -1]"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · monotonic decreasing stack O(n)",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = []  // stores indices",
          "res = [-1] * n",
          "for i, val in enumerate(arr):",
          "    while st and arr[st[-1]] < val:",
          "        idx = st.pop()",
          "        res[idx] = val",
          "    st.push(i)",
          "return res"
        ],
        "starterCode": {
          "javascript": "function nextGreaterElements(arr) {\n  // Write your solution here\n  \n}",
          "python": "def nextGreaterElements(arr: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function nextGreaterElements(arr) {\n  const res = new Array(arr.length).fill(-1);\n  const st = [];\n  for (let i = 0; i < arr.length; i++) {\n    while (st.length && arr[st[st.length - 1]] < arr[i]) {\n      const idx = st.pop();\n      res[idx] = arr[i];\n    }\n    st.push(i);\n  }\n  return res;\n}",
          "python": "def nextGreaterElements(arr: list[int]) -> list[int]:\n    res = [-1] * len(arr)\n    st = []\n    for i, val in enumerate(arr):\n        while st and arr[st[-1]] < val:\n            idx = st.pop()\n            res[idx] = val\n        st.append(i)\n    return res"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                6,
                2,
                3
              ]
            ],
            "expected": [
              5,
              5,
              6,
              -1,
              3,
              -1
            ],
            "description": "Next greater elements"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize empty monotonic stack.",
            "stack": [],
            "vars": [
              [
                "stack",
                "[]"
              ],
              [
                "res",
                "[-1, -1, -1, -1, -1, -1]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=0, arr[0]=2: Push index 0 (val 2).",
            "stack": [
              "[0]: 2"
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=1, arr[1]=1: 1 < 2, maintain decreasing property → Push index 1 (val 1).",
            "stack": [
              "[0]: 2",
              "[1]: 1"
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[0, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "i=2, arr[2]=5: 5 > 1! Pop index 1 → res[1] = 5. Then 5 > 2! Pop index 0 → res[0] = 5.",
            "stack": [
              "[2]: 5"
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "green"
              }
            ],
            "vars": [
              [
                "resolved",
                "[0, 1] -> 5"
              ],
              [
                "res",
                "[5, 5, -1, -1, -1, -1]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=3, arr[3]=6: 6 > 5! Pop index 2 → res[2] = 6. Push index 3 (val 6).",
            "stack": [
              "[3]: 6"
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "green"
              }
            ],
            "vars": [
              [
                "res[2]",
                6
              ],
              [
                "stack",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "i=4, arr[4]=2: Push index 4.",
            "stack": [
              "[3]: 6",
              "[4]: 2"
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[3, 4]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=5, arr[5]=3: 3 > 2! Pop index 4 → res[4] = 3. Push index 5.",
            "stack": [
              "[3]: 6",
              "[5]: 3"
            ],
            "highlights": [
              5
            ],
            "best": {
              "label": "Final Result: [5, 5, 6, -1, 3, -1]"
            },
            "vars": [
              [
                "res",
                "[5, 5, 6, -1, 3, -1]"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "daily-temperatures",
    "patternId": "stack",
    "title": "Daily Temperatures",
    "subtitle": "Monotonic stack · new days resolve waiting days",
    "kind": "problem",
    "leetcode": {
      "id": 739,
      "slug": "daily-temperatures",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft",
      "Bloomberg"
    ],
    "statement": "Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.",
    "visualType": "stack",
    "initialInput": [
      73,
      74,
      75,
      71,
      69,
      72,
      76,
      73
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · scan right from every day",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "given temps",
          "answer = [0] * len(temps)",
          "for i = 0 to n - 1:",
          "    for j = i + 1 to n - 1:",
          "        if temps[j] > temps[i]:",
          "            answer[i] = j - i",
          "            break",
          "return answer"
        ],
        "starterCode": {
          "javascript": "function dailyTemperatures(temperatures) {\n  // Write your solution here\n  \n}",
          "python": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function dailyTemperatures(temperatures) {\n  const n = temperatures.length;\n  const ans = new Array(n).fill(0);\n  for (let i = 0; i < n; i++) {\n    for (let j = i + 1; j < n; j++) {\n      if (temperatures[j] > temperatures[i]) {\n        ans[i] = j - i;\n        break;\n      }\n    }\n  }\n  return ans;\n}",
          "python": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    n = len(temperatures)\n    ans = [0] * n\n    for i in range(n):\n        for j in range(i + 1, n):\n            if temperatures[j] > temperatures[i]:\n                ans[i] = j - i\n                break\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                73,
                74,
                75,
                71,
                69,
                72,
                76,
                73
              ]
            ],
            "expected": [
              1,
              1,
              4,
              2,
              1,
              1,
              0,
              0
            ],
            "description": "Full week"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given daily temperatures [73, 74, 75, 71, 69, 72, 76, 73]. Brute force scans rightwards from every day.",
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                "null"
              ],
              [
                "j",
                "null"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Initialize answer array of size 8 with 0s.",
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer",
                "[0, 0, 0, 0, 0, 0, 0, 0]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop i = 0 (73°). Scan future days j = 1..7 for a warmer day.",
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "temps[i]",
                73
              ],
              [
                "j",
                "null"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 1 (74°): 74° > 73°! Found warmer day on next day.",
            "highlights": [
              0,
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 1,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "j",
                1
              ],
              [
                "temps[0]",
                73
              ],
              [
                "temps[1]",
                74
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record answer[0] = j - i = 1 - 0 = 1 day wait. Break inner loop.",
            "highlights": [
              0
            ],
            "secondaryHighlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[0]",
                1
              ],
              [
                "i",
                0
              ],
              [
                "j",
                1
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop i = 1 (74°). Scan future days j = 2..7.",
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "temps[i]",
                74
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 2 (75°): 75° > 74°! Found warmer day.",
            "highlights": [
              1,
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 2,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "j",
                2
              ],
              [
                "temps[1]",
                74
              ],
              [
                "temps[2]",
                75
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record answer[1] = 2 - 1 = 1 day wait. Break inner loop.",
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[1]",
                1
              ],
              [
                "i",
                1
              ],
              [
                "j",
                2
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop i = 2 (75°). Scan future days j = 3..7.",
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "temps[2]",
                75
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 3 (71°): 71° <= 75°. Not warmer, continue scanning.",
            "highlights": [
              2,
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 3,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                3
              ],
              [
                "temps[3]",
                71
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 4 (69°): 69° <= 75°. Not warmer, continue scanning.",
            "highlights": [
              2,
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 4,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                4
              ],
              [
                "temps[4]",
                69
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 5 (72°): 72° <= 75°. Not warmer, continue scanning.",
            "highlights": [
              2,
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                5
              ],
              [
                "temps[5]",
                72
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Check j = 6 (76°): 76° > 75°! Warmer day found 4 days later!",
            "highlights": [
              2,
              6
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "j",
                6
              ],
              [
                "temps[6]",
                76
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record answer[2] = 6 - 2 = 4 days wait. Break inner loop.",
            "highlights": [
              2
            ],
            "secondaryHighlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[2]",
                4
              ],
              [
                "i",
                2
              ],
              [
                "j",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop i = 3 (71°). Check j = 4 (69°) -> not warmer. Check j = 5 (72°) -> 72° > 71°!",
            "highlights": [
              3,
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "j",
                5
              ],
              [
                "temps[3]",
                71
              ],
              [
                "temps[5]",
                72
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Record answer[3] = 5 - 3 = 2 days wait.",
            "highlights": [
              3
            ],
            "secondaryHighlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[3]",
                2
              ],
              [
                "i",
                3
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Outer loop i = 4 (69°). Check j = 5 (72°): 72° > 69°! Record answer[4] = 5 - 4 = 1.",
            "highlights": [
              4,
              5
            ],
            "secondaryHighlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 5,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[4]",
                1
              ],
              [
                "i",
                4
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Outer loop i = 5 (72°). Check j = 6 (76°): 76° > 72°! Record answer[5] = 6 - 5 = 1.",
            "highlights": [
              5,
              6
            ],
            "secondaryHighlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              },
              {
                "name": "j",
                "index": 6,
                "color": "purple"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[5]",
                1
              ],
              [
                "i",
                5
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Outer loop i = 6 (76°). Check j = 7 (73°): 73° <= 76°. Reach end without finding warmer day -> answer[6] = 0.",
            "highlights": [
              6,
              7
            ],
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                0,
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[6]",
                0
              ],
              [
                "i",
                6
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Outer loop i = 7 (73°): Last element, no future days -> answer[7] = 0.",
            "highlights": [
              7
            ],
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                0,
                0
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "vars": [
              [
                "answer[7]",
                0
              ],
              [
                "i",
                7
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "Brute force completed in O(n²) quadratic time. Result: [1, 1, 4, 2, 1, 1, 0, 0].",
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                0,
                0
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)"
            },
            "best": {
              "label": "Final Answer: [1, 1, 4, 2, 1, 1, 0, 0]"
            },
            "vars": [
              [
                "answer",
                "[1, 1, 4, 2, 1, 1, 0, 0]"
              ],
              [
                "timeComplexity",
                "O(n²)"
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · monotonic stack of waiting days",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "given temps",
          "st = []                // indices, temps decreas",
          "for i = 0 to n - 1:",
          "    while st not empty and temps[st.top] < temps[i]:",
          "        pop j; answer[j] = i - j",
          "    push i",
          "// leftovers: answer = 0"
        ],
        "starterCode": {
          "javascript": "function dailyTemperatures(temperatures) {\n  // Write your solution here\n  \n}",
          "python": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function dailyTemperatures(temperatures) {\n  const ans = new Array(temperatures.length).fill(0);\n  const stack = [];\n  for (let i = 0; i < temperatures.length; i++) {\n    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {\n      const prev = stack.pop();\n      ans[prev] = i - prev;\n    }\n    stack.push(i);\n  }\n  return ans;\n}",
          "python": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    ans = [0] * len(temperatures)\n    stack = []\n    for i, t in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < t:\n            prev = stack.pop()\n            ans[prev] = i - prev\n        stack.append(i)\n    return ans"
        },
        "testCases": [
          {
            "input": [
              [
                73,
                74,
                75,
                71,
                69,
                72,
                76,
                73
              ]
            ],
            "expected": [
              1,
              1,
              4,
              2,
              1,
              1,
              0,
              0
            ],
            "description": "Full week"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Given array of daily temperatures [73, 74, 75, 71, 69, 72, 76, 73]. Initialize empty stack and answer array.",
            "stack": [],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                "null"
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "st = [] will hold indices of days waiting for a warmer day, kept in decreasing temperature order.",
            "stack": [],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                "null"
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 0: Day 0 (73°). Check if stack has any unresolved days.",
            "stack": [],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Stack is empty — push Day 0 (73°) onto the stack as a waiting day.",
            "stack": [
              "0 · 73°"
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 0,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                0
              ],
              [
                "waiting",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 1: Day 1 (74°). Compare with top of stack: Day 0 (73°).",
            "stack": [
              "0 · 73°"
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "waiting",
                "[0]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Day 1 (74°) > Day 0 (73°)! A warmer day has arrived! Pop Day 0.",
            "stack": [],
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "resolved",
                "Day 0 -> 1 day wait"
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Record answer[0] = 1 - 0 = 1 day wait.",
            "stack": [],
            "highlights": [
              1
            ],
            "secondaryHighlights": [
              0
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[0]",
                1
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 1 (74°) onto the stack.",
            "stack": [
              "1 · 74°"
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 1,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                1
              ],
              [
                "waiting",
                "[1]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 2: Day 2 (75°). Compare with top of stack: Day 1 (74°).",
            "stack": [
              "1 · 74°"
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "waiting",
                "[1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Day 2 (75°) > Day 1 (74°)! Warmer day! Pop Day 1.",
            "stack": [],
            "highlights": [
              2
            ],
            "secondaryHighlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "resolved",
                "Day 1 -> 1 day wait"
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Record answer[1] = 2 - 1 = 1 day wait.",
            "stack": [],
            "highlights": [
              2
            ],
            "secondaryHighlights": [
              1
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[1]",
                1
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 2 (75°) onto the stack.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 2,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                2
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 3: Day 3 (71°). Top of stack is Day 2 (75°).",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "71° <= 75°: Day 3 is cooler than Day 2. Monotonic decreasing property holds.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 3 (71°) onto stack. The stack stays cold-on-top.",
            "stack": [
              "2 · 75°",
              "3 · 71°"
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 3,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                3
              ],
              [
                "waiting",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 4: Day 4 (69°). Top of stack is Day 3 (71°).",
            "stack": [
              "2 · 75°",
              "3 · 71°"
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "waiting",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "69° <= 71°: Day 4 is cooler. No days popped.",
            "stack": [
              "2 · 75°",
              "3 · 71°"
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "waiting",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Day 4 (69°) is not warmer than the top — push it. The stack stays cold-on-top.",
            "stack": [
              "2 · 75°",
              "3 · 71°",
              "4 · 69°"
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 4,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                4
              ],
              [
                "waiting",
                "[2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 5: Day 5 (72°). Top of stack is Day 4 (69°).",
            "stack": [
              "2 · 75°",
              "3 · 71°",
              "4 · 69°"
            ],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                "·",
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "waiting",
                "[2, 3, 4]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Day 5 (72°) > Day 4 (69°)! Warmer day found! Pop Day 4.",
            "stack": [
              "2 · 75°",
              "3 · 71°"
            ],
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "resolved",
                "Day 4 -> 1 day wait"
              ],
              [
                "waiting",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Record answer[4] = 5 - 4 = 1 day wait.",
            "stack": [
              "2 · 75°",
              "3 · 71°"
            ],
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              4
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                "·",
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[4]",
                1
              ],
              [
                "waiting",
                "[2, 3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check new top: Day 5 (72°) > Day 3 (71°)! Warmer again! Pop Day 3.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "resolved",
                "Day 3 -> 2 days wait"
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Record answer[3] = 5 - 3 = 2 days wait.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              5
            ],
            "secondaryHighlights": [
              3
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[3]",
                2
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Check top: Day 2 (75°) > 72°. Not warmer than 75°. Stop popping.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 5 (72°) onto stack.",
            "stack": [
              "2 · 75°",
              "5 · 72°"
            ],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 5,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                5
              ],
              [
                "waiting",
                "[2, 5]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 6: Day 6 (76°). Compare with top Day 5 (72°).",
            "stack": [
              "2 · 75°",
              "5 · 72°"
            ],
            "highlights": [
              6
            ],
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                "·",
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "waiting",
                "[2, 5]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Day 6 (76°) > Day 5 (72°)! Pop Day 5. answer[5] = 6 - 5 = 1.",
            "stack": [
              "2 · 75°"
            ],
            "highlights": [
              6
            ],
            "secondaryHighlights": [
              5
            ],
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                "·",
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[5]",
                1
              ],
              [
                "waiting",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Day 6 (76°) > Day 2 (75°)! Pop Day 2. answer[2] = 6 - 2 = 4 days wait!",
            "stack": [],
            "highlights": [
              6
            ],
            "secondaryHighlights": [
              2
            ],
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "green"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "answer[2]",
                4
              ],
              [
                "waiting",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 6 (76°) onto stack.",
            "stack": [
              "6 · 76°"
            ],
            "highlights": [
              6
            ],
            "pointers": [
              {
                "name": "i",
                "index": 6,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                6
              ],
              [
                "waiting",
                "[6]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Loop i = 7: Day 7 (73°). 73° <= 76°. Not warmer than Day 6.",
            "stack": [
              "6 · 76°"
            ],
            "highlights": [
              7
            ],
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                7
              ],
              [
                "waiting",
                "[6]"
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Push Day 7 (73°) onto stack.",
            "stack": [
              "6 · 76°",
              "7 · 73°"
            ],
            "highlights": [
              7
            ],
            "pointers": [
              {
                "name": "i",
                "index": 7,
                "color": "accent"
              }
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                "·",
                "·"
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "vars": [
              [
                "i",
                7
              ],
              [
                "waiting",
                "[6, 7]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "End of temperatures array reached. Leftover days in stack (Days 6 and 7) have no warmer future day → default to 0.",
            "stack": [
              "6 · 76°",
              "7 · 73°"
            ],
            "customVisual": {
              "answerArray": [
                1,
                1,
                4,
                2,
                1,
                1,
                0,
                0
              ],
              "answerTitle": "ANSWER (DAYS TO WAIT)",
              "stackLabel": "waiting days (idx · temp)"
            },
            "best": {
              "label": "Final Answer: [1, 1, 4, 2, 1, 1, 0, 0]"
            },
            "vars": [
              [
                "answer",
                "[1, 1, 4, 2, 1, 1, 0, 0]"
              ],
              [
                "timeComplexity",
                "O(n)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "largest-rectangle-in-histogram",
    "patternId": "stack",
    "title": "Largest Rectangle in Histogram",
    "subtitle": "Increasing stack · shorter bars close rectangles",
    "kind": "problem",
    "leetcode": {
      "id": 84,
      "slug": "largest-rectangle-in-histogram",
      "difficulty": "Hard"
    },
    "companies": [
      "Amazon",
      "Google",
      "Meta",
      "Microsoft",
      "ByteDance"
    ],
    "statement": "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",
    "visualType": "bars",
    "initialInput": [
      2,
      1,
      5,
      6,
      2,
      3
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · test all bar pairs",
        "complexity": {
          "time": "O(n²)",
          "space": "O(1)"
        },
        "pseudocode": [
          "maxArea = 0",
          "for i from 0 to n:",
          "    minH = heights[i]",
          "    for j from i to n:",
          "        minH = min(minH, heights[j])",
          "        maxArea = max(maxArea, minH * (j - i + 1))",
          "return maxArea"
        ],
        "starterCode": {
          "javascript": "function largestRectangleArea(heights) {\n  // Write your solution here\n  \n}",
          "python": "def largestRectangleArea(heights: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function largestRectangleArea(heights) {\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let minH = heights[i];\n    for (let j = i; j < heights.length; j++) {\n      minH = Math.min(minH, heights[j]);\n      maxArea = Math.max(maxArea, minH * (j - i + 1));\n    }\n  }\n  return maxArea;\n}",
          "python": "def largestRectangleArea(heights: list[int]) -> int:\n    max_area = 0\n    for i in range(len(heights)):\n        min_h = heights[i]\n        for j in range(i, len(heights)):\n            min_h = min(min_h, heights[j])\n            max_area = max(max_area, min_h * (j - i + 1))\n    return max_area"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                6,
                2,
                3
              ]
            ],
            "expected": 10,
            "description": "Bars [5, 6] give area 10"
          },
          {
            "input": [
              [
                2,
                4
              ]
            ],
            "expected": 4,
            "description": "Single tall bar or pair"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Test all [i..j] bar combinations and track min height.",
            "vars": [
              [
                "maxArea",
                0
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Window [2..3] with heights [5, 6]: minHeight = 5, width = 2. Area = 10!",
            "highlights": [
              2,
              3
            ],
            "best": {
              "label": "Max Area = 10"
            },
            "vars": [
              [
                "minH",
                5
              ],
              [
                "width",
                2
              ],
              [
                "area",
                10
              ],
              [
                "maxArea",
                10
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "All O(n²) pairs checked. Largest rectangle area = 10.",
            "best": {
              "label": "Max Area = 10"
            },
            "vars": [
              [
                "maxArea",
                10
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · monotonic increasing stack",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = []  // (index, height)",
          "maxArea = 0",
          "for i, h in enumerate(heights):",
          "    start = i",
          "    while st and st[-1].h > h:",
          "        idx, height = st.pop()",
          "        maxArea = max(maxArea, height * (i - idx))",
          "        start = idx",
          "    st.push((start, h))",
          "// process remaining in stack"
        ],
        "starterCode": {
          "javascript": "function largestRectangleArea(heights) {\n  // Write your solution here\n  \n}",
          "python": "def largestRectangleArea(heights: list[int]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function largestRectangleArea(heights) {\n  const stack = [];\n  let maxArea = 0;\n  for (let i = 0; i < heights.length; i++) {\n    let start = i;\n    while (stack.length && stack[stack.length - 1].height > heights[i]) {\n      const { index, height } = stack.pop();\n      maxArea = Math.max(maxArea, height * (i - index));\n      start = index;\n    }\n    stack.push({ index: start, height: heights[i] });\n  }\n  for (let { index, height } of stack) {\n    maxArea = Math.max(maxArea, height * (heights.length - index));\n  }\n  return maxArea;\n}",
          "python": "def largestRectangleArea(heights: list[int]) -> int:\n    stack = []\n    max_area = 0\n    for i, h in enumerate(heights):\n        start = i\n        while stack and stack[-1][1] > h:\n            idx, height = stack.pop()\n            max_area = max(max_area, height * (i - idx))\n            start = idx\n        stack.append((start, h))\n    for idx, height in stack:\n        max_area = max(max_area, height * (len(heights) - idx))\n    return max_area"
        },
        "testCases": [
          {
            "input": [
              [
                2,
                1,
                5,
                6,
                2,
                3
              ]
            ],
            "expected": 10,
            "description": "Bars [5, 6] give area 10"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize stack storing (startIndex, height). maxArea = 0.",
            "stack": [],
            "vars": [
              [
                "stack",
                "[]"
              ],
              [
                "maxArea",
                0
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "i=0, h=2: Push (0, 2).",
            "stack": [
              "(idx:0, h:2)"
            ],
            "highlights": [
              0
            ],
            "vars": [
              [
                "stack",
                "[(0,2)]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=1, h=1: Shorter bar! Pop (0, 2). Area = 2 * (1 - 0) = 2. Push (0, 1) extended back.",
            "stack": [
              "(idx:0, h:1)"
            ],
            "highlights": [
              1
            ],
            "vars": [
              [
                "closedArea",
                2
              ],
              [
                "maxArea",
                2
              ],
              [
                "stack",
                "[(0,1)]"
              ]
            ]
          },
          {
            "codeLine": 8,
            "narration": "i=2 (h=5) and i=3 (h=6) pushed: Increasing stack maintained.",
            "stack": [
              "(idx:0, h:1)",
              "(idx:2, h:5)",
              "(idx:3, h:6)"
            ],
            "highlights": [
              2,
              3
            ],
            "vars": [
              [
                "stack",
                "[(0,1), (2,5), (3,6)]"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "i=4, h=2: Pop (3, 6) → area 6*(4-3)=6. Pop (2, 5) → area 5*(4-2)=10! maxArea = 10.",
            "stack": [
              "(idx:0, h:1)",
              "(idx:2, h:2)"
            ],
            "highlights": [
              4
            ],
            "best": {
              "label": "Max Area = 10"
            },
            "vars": [
              [
                "popped",
                "(2,5)"
              ],
              [
                "area",
                10
              ],
              [
                "maxArea",
                10
              ]
            ]
          },
          {
            "codeLine": 9,
            "narration": "Process remaining bars extending to end of histogram. Max area confirmed = 10.",
            "best": {
              "label": "Largest Rectangle = 10"
            },
            "vars": [
              [
                "maxArea",
                10
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "min-stack",
    "patternId": "stack",
    "title": "Min Stack",
    "subtitle": "O(1) getMin · a twin min-stack",
    "kind": "problem",
    "leetcode": {
      "id": 155,
      "slug": "min-stack",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Bloomberg",
      "Microsoft",
      "Google",
      "Meta"
    ],
    "statement": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).",
    "visualType": "stack",
    "initialInput": [
      "push(-2)",
      "push(0)",
      "push(-3)",
      "getMin()",
      "pop()",
      "top()",
      "getMin()"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · linear scan on getMin()",
        "complexity": {
          "time": "O(n) per getMin",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = []",
          "push(x): st.append(x)",
          "pop(): st.pop()",
          "top(): return st[-1]",
          "getMin():",
          "    min_val = Infinity",
          "    for x in st: min_val = min(min_val, x)",
          "    return min_val  // O(n) scan"
        ],
        "starterCode": {
          "javascript": "class MinStack {\n  constructor() { this.st = []; }\n  push(val) { this.st.push(val); }\n  pop() { this.st.pop(); }\n  top() { return this.st[this.st.length - 1]; }\n  getMin() { return Math.min(...this.st); }\n}",
          "python": "class MinStack:\n    def __init__(self):\n        self.st = []\n    def push(self, val: int) -> None:\n        self.st.append(val)\n    def pop(self) -> None:\n        self.st.pop()\n    def top(self) -> int:\n        return self.st[-1]\n    def getMin(self) -> int:\n        return min(self.st)"
        },
        "solutionCode": {
          "javascript": "class MinStack {\n  constructor() { this.st = []; }\n  push(val) { this.st.push(val); }\n  pop() { this.st.pop(); }\n  top() { return this.st[this.st.length - 1]; }\n  getMin() { return Math.min(...this.st); }\n}",
          "python": "class MinStack:\n    def __init__(self):\n        self.st = []\n    def push(self, val: int) -> None:\n        self.st.append(val)\n    def pop(self) -> None:\n        self.st.pop()\n    def top(self) -> int:\n        return self.st[-1]\n    def getMin(self) -> int:\n        return min(self.st)"
        },
        "testCases": [
          {
            "input": [
              [
                -2,
                0,
                -3
              ]
            ],
            "expected": -3,
            "description": "Min of [-2, 0, -3] is -3"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Operation 1: push(-2). Append -2 to single standard stack.",
            "stack": [
              -2
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(-2)"
              ],
              [
                "stack",
                "[-2]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Operation 2: push(0). Append 0 to stack.",
            "stack": [
              -2,
              0
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(0)"
              ],
              [
                "stack",
                "[-2, 0]"
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Operation 3: push(-3). Append -3 to stack.",
            "stack": [
              -2,
              0,
              -3
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(-3)"
              ],
              [
                "stack",
                "[-2, 0, -3]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Operation 4: getMin(). Scans all 3 elements [-2, 0, -3] in O(n) time → returns -3.",
            "stack": [
              -2,
              0,
              -3
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "green"
              }
            ],
            "best": {
              "label": "getMin() = -3 (O(n) scan)"
            },
            "vars": [
              [
                "op",
                "getMin()"
              ],
              [
                "scannedElements",
                3
              ],
              [
                "min",
                -3
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Operation 5: pop(). Removes top element -3.",
            "stack": [
              -2,
              0
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "pop()"
              ],
              [
                "popped",
                -3
              ],
              [
                "stack",
                "[-2, 0]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Operation 6: top(). Returns top element 0.",
            "stack": [
              -2,
              0
            ],
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "op",
                "index": 5,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "top()"
              ],
              [
                "top",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Operation 7: getMin(). Scans remaining elements [-2, 0] in O(n) time → returns -2.",
            "stack": [
              -2,
              0
            ],
            "highlights": [
              6
            ],
            "pointers": [
              {
                "name": "op",
                "index": 6,
                "color": "green"
              }
            ],
            "best": {
              "label": "getMin() = -2 (O(n) scan)"
            },
            "vars": [
              [
                "op",
                "getMin()"
              ],
              [
                "scannedElements",
                2
              ],
              [
                "min",
                -2
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · twin min-stack O(1) all ops",
        "complexity": {
          "time": "O(1) all ops",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = [], minSt = []",
          "push(x):",
          "    st.push(x)",
          "    minSt.push(min(x, minSt[-1] if minSt else x))",
          "pop(): st.pop(), minSt.pop()",
          "top(): return st[-1]",
          "getMin(): return minSt[-1]  // O(1)"
        ],
        "starterCode": {
          "javascript": "class MinStack {\n  // Write your solution here\n  \n}",
          "python": "class MinStack:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "class MinStack {\n  constructor() {\n    this.st = [];\n    this.minSt = [];\n  }\n  push(val) {\n    this.st.push(val);\n    const minVal = this.minSt.length ? Math.min(val, this.minSt[this.minSt.length - 1]) : val;\n    this.minSt.push(minVal);\n  }\n  pop() {\n    this.st.pop();\n    this.minSt.pop();\n  }\n  top() {\n    return this.st[this.st.length - 1];\n  }\n  getMin() {\n    return this.minSt[this.minSt.length - 1];\n  }\n}",
          "python": "class MinStack:\n    def __init__(self):\n        self.st = []\n        self.min_st = []\n    def push(self, val: int) -> None:\n        self.st.append(val)\n        m = min(val, self.min_st[-1]) if self.min_st else val\n        self.min_st.append(m)\n    def pop(self) -> None:\n        self.st.pop()\n        self.min_st.pop()\n    def top(self) -> int:\n        return self.st[-1]\n    def getMin(self) -> int:\n        return self.min_st[-1]"
        },
        "testCases": [
          {
            "input": [
              [
                -2,
                0,
                -3
              ]
            ],
            "expected": -3,
            "description": "Min of [-2, 0, -3] is -3"
          }
        ],
        "steps": [
          {
            "codeLine": 2,
            "narration": "Operation 1: push(-2). MainStack pushes -2; MinStack pushes -2 (min so far).",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2
                ],
                "minStack": [
                  -2
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(-2)"
              ],
              [
                "val",
                -2
              ],
              [
                "minVal",
                -2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Operation 2: push(0). MainStack pushes 0; MinStack pushes min(0, -2) = -2.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0
                ],
                "minStack": [
                  -2,
                  -2
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(0)"
              ],
              [
                "val",
                0
              ],
              [
                "minVal",
                -2
              ]
            ]
          },
          {
            "codeLine": 2,
            "narration": "Operation 3: push(-3). MainStack pushes -3; MinStack pushes min(-3, -2) = -3.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0,
                  -3
                ],
                "minStack": [
                  -2,
                  -2,
                  -3
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "push(-3)"
              ],
              [
                "val",
                -3
              ],
              [
                "minVal",
                -3
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Operation 4: getMin(). Instantly peek MinStack top (-3) in O(1) constant time!",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0,
                  -3
                ],
                "minStack": [
                  -2,
                  -2,
                  -3
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "green"
              }
            ],
            "best": {
              "label": "O(1) getMin() = -3"
            },
            "vars": [
              [
                "op",
                "getMin()"
              ],
              [
                "minStack.top()",
                -3
              ],
              [
                "timeComplexity",
                "O(1)"
              ]
            ]
          },
          {
            "codeLine": 5,
            "narration": "Operation 5: pop(). Pop top from BOTH MainStack (-3) and MinStack (-3).",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0
                ],
                "minStack": [
                  -2,
                  -2
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "pop()"
              ],
              [
                "poppedVal",
                -3
              ],
              [
                "newMinTop",
                -2
              ]
            ]
          },
          {
            "codeLine": 6,
            "narration": "Operation 6: top(). Instantly peek MainStack top (0) in O(1) constant time.",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0
                ],
                "minStack": [
                  -2,
                  -2
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              5
            ],
            "pointers": [
              {
                "name": "op",
                "index": 5,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "op",
                "top()"
              ],
              [
                "mainStack.top()",
                0
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Operation 7: getMin(). Instantly peek MinStack top (-2) in O(1) constant time!",
            "customVisual": {
              "twinStacks": {
                "mainStack": [
                  -2,
                  0
                ],
                "minStack": [
                  -2,
                  -2
                ],
                "mainLabel": "MAIN",
                "secondaryLabel": "MIN"
              }
            },
            "highlights": [
              6
            ],
            "pointers": [
              {
                "name": "op",
                "index": 6,
                "color": "green"
              }
            ],
            "best": {
              "label": "O(1) getMin() = -2"
            },
            "vars": [
              [
                "op",
                "getMin()"
              ],
              [
                "minStack.top()",
                -2
              ],
              [
                "timeComplexity",
                "O(1)"
              ]
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "patternId": "stack",
    "title": "Evaluate Reverse Polish Notation",
    "subtitle": "Operand stack · postfix evaluation",
    "kind": "problem",
    "leetcode": {
      "id": 150,
      "slug": "evaluate-reverse-polish-notation",
      "difficulty": "Medium"
    },
    "companies": [
      "Amazon",
      "Microsoft",
      "Google",
      "LinkedIn",
      "Apple"
    ],
    "statement": "You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation (RPN). Evaluate the expression and return an integer that represents the value of the expression.",
    "visualType": "stack",
    "initialInput": [
      "2",
      "1",
      "+",
      "3",
      "*"
    ],
    "approaches": [
      {
        "id": "brute-force",
        "label": "Brute force · array scan & replace triplet",
        "complexity": {
          "time": "O(n²)",
          "space": "O(n)"
        },
        "pseudocode": [
          "while len(tokens) > 1:",
          "    find first operator at index i",
          "    res = evaluate(tokens[i-2], tokens[i-1], tokens[i])",
          "    replace triplet [i-2..i] with res",
          "return int(tokens[0])"
        ],
        "starterCode": {
          "javascript": "function evalRPN(tokens) {\n  // Write your solution here\n  \n}",
          "python": "def evalRPN(tokens: list[str]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function evalRPN(tokens) {\n  const ops = new Set(['+', '-', '*', '/']);\n  while (tokens.length > 1) {\n    let idx = tokens.findIndex(t => ops.has(t));\n    let a = Number(tokens[idx - 2]), b = Number(tokens[idx - 1]);\n    let res = 0;\n    if (tokens[idx] === '+') res = a + b;\n    else if (tokens[idx] === '-') res = a - b;\n    else if (tokens[idx] === '*') res = a * b;\n    else res = Math.trunc(a / b);\n    tokens.splice(idx - 2, 3, String(res));\n  }\n  return Number(tokens[0]);\n}",
          "python": "def evalRPN(tokens: list[str]) -> int:\n    ops = {'+', '-', '*', '/'}\n    while len(tokens) > 1:\n        idx = next(i for i, t in enumerate(tokens) if t in ops)\n        a, b = int(tokens[idx-2]), int(tokens[idx-1])\n        op = tokens[idx]\n        if op == '+': res = a + b\n        elif op == '-': res = a - b\n        elif op == '*': res = a * b\n        else: res = int(a / b)\n        tokens[idx-2:idx+1] = [str(res)]\n    return int(tokens[0])"
        },
        "testCases": [
          {
            "input": [
              [
                "2",
                "1",
                "+",
                "3",
                "*"
              ]
            ],
            "expected": 9,
            "description": "((2 + 1) * 3) = 9"
          },
          {
            "input": [
              [
                "4",
                "13",
                "5",
                "/",
                "+"
              ]
            ],
            "expected": 6,
            "description": "(4 + (13 / 5)) = 6"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Tokens: [\"2\", \"1\", \"+\", \"3\", \"*\"]. Find first operator.",
            "vars": [
              [
                "tokens",
                "[\"2\", \"1\", \"+\", \"3\", \"*\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Found \"+\" at index 2. Replace [\"2\", \"1\", \"+\"] with \"3\". Array becomes [\"3\", \"3\", \"*\"].",
            "highlights": [
              0,
              1,
              2
            ],
            "vars": [
              [
                "evaluated",
                "2 + 1 = 3"
              ],
              [
                "tokens",
                "[\"3\", \"3\", \"*\"]"
              ]
            ]
          },
          {
            "codeLine": 3,
            "narration": "Found \"*\" at index 2. Replace [\"3\", \"3\", \"*\"] with \"9\". Final result = 9.",
            "highlights": [
              0,
              1,
              2
            ],
            "best": {
              "label": "Result = 9"
            },
            "vars": [
              [
                "evaluated",
                "3 * 3 = 9"
              ],
              [
                "result",
                9
              ]
            ]
          }
        ]
      },
      {
        "id": "optimized",
        "label": "Optimized · operand stack O(n)",
        "complexity": {
          "time": "O(n)",
          "space": "O(n)"
        },
        "pseudocode": [
          "st = []",
          "for token in tokens:",
          "    if token in \"+-*/\":",
          "        b = st.pop()",
          "        a = st.pop()",
          "        st.push(eval(a, b, token))",
          "    else: st.push(int(token))",
          "return st[0]"
        ],
        "starterCode": {
          "javascript": "function evalRPN(tokens) {\n  // Write your solution here\n  \n}",
          "python": "def evalRPN(tokens: list[str]) -> int:\n    # Write your solution here\n    pass"
        },
        "solutionCode": {
          "javascript": "function evalRPN(tokens) {\n  const stack = [];\n  for (let t of tokens) {\n    if (t === '+') stack.push(stack.pop() + stack.pop());\n    else if (t === '-') { const b = stack.pop(), a = stack.pop(); stack.push(a - b); }\n    else if (t === '*') stack.push(stack.pop() * stack.pop());\n    else if (t === '/') { const b = stack.pop(), a = stack.pop(); stack.push(Math.trunc(a / b)); }\n    else stack.push(Number(t));\n  }\n  return stack[0];\n}",
          "python": "def evalRPN(tokens: list[str]) -> int:\n    st = []\n    for t in tokens:\n        if t == '+': st.append(st.pop() + st.pop())\n        elif t == '-': b, a = st.pop(), st.pop(); st.append(a - b)\n        elif t == '*': st.append(st.pop() * st.pop())\n        elif t == '/': b, a = st.pop(), st.pop(); st.append(int(a / b))\n        else: st.append(int(t))\n    return st[0]"
        },
        "testCases": [
          {
            "input": [
              [
                "2",
                "1",
                "+",
                "3",
                "*"
              ]
            ],
            "expected": 9,
            "description": "((2 + 1) * 3) = 9"
          }
        ],
        "steps": [
          {
            "codeLine": 1,
            "narration": "Initialize empty operand stack.",
            "stack": [],
            "vars": [
              [
                "stack",
                "[]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Push operand 2.",
            "stack": [
              2
            ],
            "highlights": [
              0
            ],
            "pointers": [
              {
                "name": "op",
                "index": 0,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[2]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Push operand 1.",
            "stack": [
              2,
              1
            ],
            "highlights": [
              1
            ],
            "pointers": [
              {
                "name": "op",
                "index": 1,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[2, 1]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter operator \"+\": Pop b=1, a=2. Compute 2 + 1 = 3. Push 3.",
            "stack": [
              3
            ],
            "highlights": [
              2
            ],
            "pointers": [
              {
                "name": "op",
                "index": 2,
                "color": "green"
              }
            ],
            "vars": [
              [
                "op",
                "+"
              ],
              [
                "calc",
                "2 + 1 = 3"
              ],
              [
                "stack",
                "[3]"
              ]
            ]
          },
          {
            "codeLine": 7,
            "narration": "Push operand 3.",
            "stack": [
              3,
              3
            ],
            "highlights": [
              3
            ],
            "pointers": [
              {
                "name": "op",
                "index": 3,
                "color": "accent"
              }
            ],
            "vars": [
              [
                "stack",
                "[3, 3]"
              ]
            ]
          },
          {
            "codeLine": 4,
            "narration": "Encounter operator \"*\": Pop b=3, a=3. Compute 3 * 3 = 9. Push 9.",
            "stack": [
              9
            ],
            "highlights": [
              4
            ],
            "pointers": [
              {
                "name": "op",
                "index": 4,
                "color": "green"
              }
            ],
            "best": {
              "label": "Final Output = 9"
            },
            "vars": [
              [
                "op",
                "*"
              ],
              [
                "calc",
                "3 * 3 = 9"
              ],
              [
                "result",
                9
              ]
            ]
          }
        ]
      }
    ]
  }
];
