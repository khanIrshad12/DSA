import { Problem } from '../../types';

export const trieProblems: Problem[] = [
  // 1. Trie Overview (Concept)
  {
    id: 'trie-overview',
    patternId: 'trie',
    title: 'Overview',
    subtitle: 'Prefix tree · shared prefixes stored once',
    kind: 'concept',
    statement: "A Trie (pronounced 'try' or 'tree'), also called a prefix tree, is an ordered tree data structure used to store a dynamic set or associative array where the keys are usually strings. Unlike a binary search tree, no node in the tree stores the key associated with that node; instead, its position in the tree defines the key with which it is associated. All descendants of a node have a common prefix of the string associated with that node, and the root is associated with the empty string.",
    visualType: 'trie',
    initialInput: ['cat', 'car', 'card', 'dog'],
    approaches: [
      {
        id: 'trie-concept',
        label: 'Concept',
        complexity: {
          time: 'O(L) per op',
          space: 'O(total letters)'
        },
        pseudocode: [
          "node = { children: map<char,node>, isWord }",
          "insert(word):",
          "  cur = root",
          "  for ch in word:",
          "    if ch not in cur.children:",
          "      cur.children[ch] = new node",
          "    cur = cur.children[ch]",
          "  cur.isWord = true",
          "",
          "search(word): walk; true if path exists",
          "  AND the final node.isWord",
          "// shared prefixes => stored once"
        ],
        starterCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) {\n        cur.children[ch] = new TrieNode();\n      }\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (const ch of prefix) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                cur.children[ch] = TrieNode()\n            cur = cur.children[ch]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return True"
        },
        solutionCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) {\n        cur.children[ch] = new TrieNode();\n      }\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (const ch of prefix) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                cur.children[ch] = TrieNode()\n            cur = cur.children[ch]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return True"
        },
        steps: [
          // Step 1 / 25 (Screenshot 2)
          {
            codeLine: 1,
            narration: "A trie (prefix tree) stores a SET of strings by their letters. Each node is one character; a path down from the root spells a prefix. Ringed nodes mark where a complete word ends. Watch it grow.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false }
              ],
              edges: [],
              activeNode: 'root',
              title: "TRIE"
            },
            vars: [
              ["structure", "prefix tree"]
            ]
          },
          // Step 2 / 25
          {
            codeLine: 2,
            narration: "Insert word \"cat\": Begin at the root node. We will process characters 'c', 'a', 't' sequentially.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false }
              ],
              edges: [],
              activeNode: 'root',
              currentWord: 'cat',
              charIndex: 0,
              title: "TRIE"
            },
            vars: [
              ["op", "insert(\"cat\")"],
              ["cur", "root"],
              ["char", "c"]
            ]
          },
          // Step 3 / 25
          {
            codeLine: 6,
            narration: "'c' is not in root.children: create new node 'c' and step into it. Prefix is now \"c\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true }
              ],
              activeNode: 'c',
              currentWord: 'cat',
              charIndex: 0,
              title: "TRIE"
            },
            vars: [
              ["char", "c"],
              ["action", "new node"],
              ["prefix", "c"]
            ]
          },
          // Step 4 / 25 (Screenshot 3)
          {
            codeLine: 6,
            narration: "'a' is new, create a child node and step into it. The path now spells \"ca\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca', isActive: true }
              ],
              activeNode: 'ca',
              currentWord: 'cat',
              charIndex: 1,
              title: "TRIE"
            },
            vars: [
              ["char", "a"],
              ["action", "new node"],
              ["prefix", "ca"]
            ]
          },
          // Step 5 / 25
          {
            codeLine: 6,
            narration: "'t' is new, create a child node under 'ca' and step into it. The path now spells \"cat\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'cat', isActive: true }
              ],
              activeNode: 'cat',
              currentWord: 'cat',
              charIndex: 2,
              title: "TRIE"
            },
            vars: [
              ["char", "t"],
              ["action", "new node"],
              ["prefix", "cat"]
            ]
          },
          // Step 6 / 25
          {
            codeLine: 8,
            narration: "End of word \"cat\" reached! Mark cur.isWord = true (ringed green node). Word \"cat\" is stored.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'cat',
              words: ['cat'],
              title: "TRIE"
            },
            vars: [
              ["cur.isWord", true],
              ["stored word", "cat"]
            ]
          },
          // Step 7 / 25
          {
            codeLine: 2,
            narration: "Insert word \"car\": Start at root again. First character is 'c'.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'root',
              currentWord: 'car',
              charIndex: 0,
              words: ['cat'],
              title: "TRIE"
            },
            vars: [
              ["op", "insert(\"car\")"],
              ["cur", "root"]
            ]
          },
          // Step 8 / 25
          {
            codeLine: 4,
            narration: "'c' already exists in root.children! We REUSE node 'c' without creating any new node.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'c',
              currentWord: 'car',
              charIndex: 0,
              words: ['cat'],
              title: "TRIE"
            },
            vars: [
              ["char", "c"],
              ["action", "reuse node 'c'"],
              ["prefix", "c"]
            ]
          },
          // Step 9 / 25
          {
            codeLine: 4,
            narration: "'a' already exists in cur.children! We REUSE node 'ca' without allocating memory.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca', isActive: true },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'ca',
              currentWord: 'car',
              charIndex: 1,
              words: ['cat'],
              title: "TRIE"
            },
            vars: [
              ["char", "a"],
              ["action", "reuse node 'ca'"],
              ["prefix", "ca"]
            ]
          },
          // Step 10 / 25
          {
            codeLine: 6,
            narration: "'r' is not in cur.children: create new child node 'r' under 'ca'. Prefix spells \"car\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: false, isNew: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car', isActive: true },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'car',
              currentWord: 'car',
              charIndex: 2,
              words: ['cat'],
              title: "TRIE"
            },
            vars: [
              ["char", "r"],
              ["action", "new node"],
              ["prefix", "car"]
            ]
          },
          // Step 11 / 25
          {
            codeLine: 8,
            narration: "Mark cur.isWord = true on node 'car'. Both \"cat\" and \"car\" now share the single prefix path \"c\" -> \"a\"!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'car',
              words: ['cat', 'car'],
              title: "TRIE"
            },
            vars: [
              ["cur.isWord", true],
              ["words", '"cat", "car"']
            ]
          },
          // Step 12 / 25
          {
            codeLine: 2,
            narration: "Insert word \"card\": Start at root. Walk 'c' -> 'a' -> 'r'.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'root',
              currentWord: 'card',
              charIndex: 0,
              words: ['cat', 'car'],
              title: "TRIE"
            },
            vars: [
              ["op", "insert(\"card\")"],
              ["cur", "root"]
            ]
          },
          // Step 13 / 25
          {
            codeLine: 4,
            narration: "'c' -> 'a' -> 'r' all exist. Step through them. Notice that 'car' is already marked as a valid word.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car', isActive: true },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'car',
              currentWord: 'card',
              charIndex: 2,
              words: ['cat', 'car'],
              title: "TRIE"
            },
            vars: [
              ["prefix reused", "car"],
              ["cur", "r"]
            ]
          },
          // Step 14 / 25
          {
            codeLine: 6,
            narration: "'d' is not in children of 'car': create child node 'd' at (140, 280) and step into it.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: false, isNew: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card', isActive: true },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'card',
              currentWord: 'card',
              charIndex: 3,
              words: ['cat', 'car'],
              title: "TRIE"
            },
            vars: [
              ["char", "d"],
              ["action", "new node"],
              ["prefix", "card"]
            ]
          },
          // Step 15 / 25
          {
            codeLine: 8,
            narration: "Mark cur.isWord = true on node 'card'. Note how 'car' is a valid word AND a prefix of 'card'!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'card',
              words: ['cat', 'car', 'card'],
              title: "TRIE"
            },
            vars: [
              ["cur.isWord", true],
              ["words", '"cat", "car", "card"']
            ]
          },
          // Step 16 / 25
          {
            codeLine: 2,
            narration: "Insert word \"dog\": Start at root. 'd' is not in root.children.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' }
              ],
              activeNode: 'root',
              currentWord: 'dog',
              charIndex: 0,
              words: ['cat', 'car', 'card'],
              title: "TRIE"
            },
            vars: [
              ["op", "insert(\"dog\")"],
              ["cur", "root"]
            ]
          },
          // Step 17 / 25
          {
            codeLine: 6,
            narration: "'d' is a new root child: create node 'd' at (240, 100).",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd', isActive: true }
              ],
              activeNode: 'd',
              currentWord: 'dog',
              charIndex: 0,
              words: ['cat', 'car', 'card'],
              title: "TRIE"
            },
            vars: [
              ["char", "d"],
              ["action", "new branch 'd'"]
            ]
          },
          // Step 18 / 25
          {
            codeLine: 6,
            narration: "'o' is new under 'd': create node 'o' at (240, 160) and step into it. Path spells \"do\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do', isActive: true }
              ],
              activeNode: 'do',
              currentWord: 'dog',
              charIndex: 1,
              words: ['cat', 'car', 'card'],
              title: "TRIE"
            },
            vars: [
              ["char", "o"],
              ["prefix", "do"]
            ]
          },
          // Step 19 / 25
          {
            codeLine: 6,
            narration: "'g' is new under 'do': create node 'g' at (240, 220). Path spells \"dog\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog', isActive: true }
              ],
              activeNode: 'dog',
              currentWord: 'dog',
              charIndex: 2,
              words: ['cat', 'car', 'card'],
              title: "TRIE"
            },
            vars: [
              ["char", "g"],
              ["prefix", "dog"]
            ]
          },
          // Step 20 / 25
          {
            codeLine: 8,
            narration: "Mark cur.isWord = true on node 'dog'. Word \"dog\" is stored.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              activeNode: 'dog',
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE"
            },
            vars: [
              ["cur.isWord", true],
              ["words", '"cat", "car", "card", "dog"']
            ]
          },
          // Step 21 / 25
          {
            codeLine: 10,
            narration: "search(\"card\"): Walk root -> 'c' -> 'a' -> 'r' -> 'd'. Node exists and cur.isWord == true -> returns TRUE.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false, isMatched: true },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false, isMatched: true },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true, isMatched: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true, isMatched: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true },
                { from: 'c', to: 'ca', isActive: true },
                { from: 'ca', to: 'car', isActive: true },
                { from: 'car', to: 'card', isActive: true },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              activeNode: 'card',
              currentWord: 'card',
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE"
            },
            best: {
              label: "search(\"card\") = true"
            },
            vars: [
              ["op", "search(\"card\")"],
              ["path exists", true],
              ["isWord", true],
              ["result", true]
            ]
          },
          // Step 22 / 25
          {
            codeLine: 11,
            narration: "search(\"ca\"): Walk root -> 'c' -> 'a'. The path exists, but cur.isWord == false (node 'ca' is not ringed) -> returns FALSE.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false, isSearching: true },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false, isSearching: true },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true },
                { from: 'c', to: 'ca', isActive: true },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              activeNode: 'ca',
              currentWord: 'ca',
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE"
            },
            best: {
              label: "search(\"ca\") = false"
            },
            vars: [
              ["op", "search(\"ca\")"],
              ["path exists", true],
              ["isWord", false],
              ["result", false]
            ]
          },
          // Step 23 / 25 (Screenshot 4)
          {
            codeLine: 8,
            narration: "Four words, but \"ca\", \"car\" are each stored ONCE and reused. That sharing is why a trie shines for autocomplete and dictionaries: every word costs only its own NEW letters.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE"
            },
            vars: [
              ["words", '"cat" "car" "card" "dog"']
            ]
          },
          // Step 24 / 25
          {
            codeLine: 10,
            narration: "startsWith(\"ca\"): Walk root -> 'c' -> 'a'. The prefix path exists -> returns TRUE regardless of whether 'ca' is a complete word!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false, isMatched: true },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false, isMatched: true },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true },
                { from: 'c', to: 'ca', isActive: true },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              activeNode: 'ca',
              suggestions: ['cat', 'car', 'card'],
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE"
            },
            best: {
              label: "startsWith(\"ca\") = true"
            },
            vars: [
              ["op", "startsWith(\"ca\")"],
              ["prefix found", true],
              ["subtree words", '["cat", "car", "card"]']
            ]
          },
          // Step 25 / 25
          {
            codeLine: 12,
            narration: "Trie summary: O(L) time per insertion/search where L is word length. Optimal for prefix searching, autocomplete, spell-checking, and IP routing tables.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'car', char: 'r', x: 140, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 140, y: 280, isWord: true },
                { id: 'cat', char: 't', x: 190, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 240, y: 100, isWord: false },
                { id: 'do', char: 'o', x: 240, y: 160, isWord: false },
                { id: 'dog', char: 'g', x: 240, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'ca', to: 'cat' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'do' },
                { from: 'do', to: 'dog' }
              ],
              words: ['cat', 'car', 'card', 'dog'],
              title: "TRIE OVERVIEW COMPLETE"
            },
            best: {
              label: "Trie: O(L) Lookups"
            },
            vars: [
              ["insert time", "O(L)"],
              ["search time", "O(L)"],
              ["startsWith time", "O(L)"],
              ["space", "O(total letters)"]
            ]
          }
        ]
      }
    ]
  },

  // 2. Implement Trie (Prefix Tree) (LeetCode #208 - Medium)
  {
    id: 'implement-trie',
    patternId: 'trie',
    title: 'Implement Trie Methods',
    subtitle: 'insert · search · startsWith',
    kind: 'problem',
    leetcode: {
      id: 208,
      slug: 'implement-trie-prefix-tree',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Google', 'Microsoft', 'Apple', 'Meta', 'Uber'],
    statement: "A trie (pronounced as \"try\") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.\n\nImplement the Trie class:\n- Trie() Initializes the trie object.\n- void insert(String word) Inserts the string word into the trie.\n- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.\n- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.",
    visualType: 'trie',
    initialInput: ['apple', 'app'],
    approaches: [
      {
        id: 'hash-map-trie',
        label: 'Hash Map / Object Child Nodes',
        complexity: {
          time: 'O(L) per insert / search / startsWith',
          space: 'O(N * L) total characters'
        },
        pseudocode: [
          "class TrieNode:",
          "  children = {}, isWord = false",
          "class Trie:",
          "  insert(word):",
          "    cur = root",
          "    for ch in word:",
          "      if ch not in cur.children: cur.children[ch] = new TrieNode()",
          "      cur = cur.children[ch]",
          "    cur.isWord = true",
          "  search(word):",
          "    cur = root",
          "    for ch in word:",
          "      if ch not in cur.children: return false",
          "      cur = cur.children[ch]",
          "    return cur.isWord",
          "  startsWith(prefix):",
          "    cur = root",
          "    for ch in prefix:",
          "      if ch not in cur.children: return false",
          "      cur = cur.children[ch]",
          "    return true"
        ],
        starterCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) cur.children[ch] = new TrieNode();\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (const ch of prefix) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                cur.children[ch] = TrieNode()\n            cur = cur.children[ch]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return True"
        },
        solutionCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = {};\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) cur.children[ch] = new TrieNode();\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (const ch of prefix) {\n      if (!cur.children[ch]) return false;\n      cur = cur.children[ch];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = {}\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                cur.children[ch] = TrieNode()\n            cur = cur.children[ch]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            if ch not in cur.children:\n                return False\n            cur = cur.children[ch]\n        return True"
        },
        testCases: [
          {
            input: [["insert", "search", "search", "startsWith", "insert", "search"], ["apple", "apple", "app", "app", "app", "app"]],
            expected: [null, true, false, true, null, true],
            description: "Standard LeetCode 208 sequence"
          }
        ],
        steps: [
          {
            codeLine: 4,
            narration: "Initialize empty Trie: root node created. Operation 1: insert(\"apple\").",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false }
              ],
              edges: [],
              activeNode: 'root',
              currentWord: 'apple',
              charIndex: 0,
              title: "TRIE - INSERT(\"apple\")"
            },
            vars: [
              ["op", "insert(\"apple\")"],
              ["cur", "root"]
            ]
          },
          {
            codeLine: 7,
            narration: "Walk characters of \"apple\": create path 'a' -> 'p' -> 'p' -> 'l' -> 'e'.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: false },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: false, isNew: true }
              ],
              edges: [
                { from: 'root', to: 'a' },
                { from: 'a', to: 'ap' },
                { from: 'ap', to: 'app' },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple', isActive: true }
              ],
              activeNode: 'apple',
              currentWord: 'apple',
              charIndex: 4,
              title: "TRIE - INSERT(\"apple\")"
            },
            vars: [
              ["char", "e"],
              ["action", "created path apple"]
            ]
          },
          {
            codeLine: 9,
            narration: "Mark final node cur.isWord = true (ringed). \"apple\" is now fully inserted.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: false },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a' },
                { from: 'a', to: 'ap' },
                { from: 'ap', to: 'app' },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple' }
              ],
              activeNode: 'apple',
              words: ['apple'],
              title: "TRIE"
            },
            vars: [
              ["stored words", '["apple"]'],
              ["cur.isWord", true]
            ]
          },
          {
            codeLine: 11,
            narration: "Operation 2: search(\"apple\"). Walk root -> 'a' -> 'p' -> 'p' -> 'l' -> 'e'. All exist and isWord == true -> return TRUE.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false, isMatched: true },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false, isMatched: true },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: false, isMatched: true },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false, isMatched: true },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true, isMatched: true }
              ],
              edges: [
                { from: 'root', to: 'a', isActive: true },
                { from: 'a', to: 'ap', isActive: true },
                { from: 'ap', to: 'app', isActive: true },
                { from: 'app', to: 'appl', isActive: true },
                { from: 'appl', to: 'apple', isActive: true }
              ],
              activeNode: 'apple',
              currentWord: 'apple',
              words: ['apple'],
              title: "TRIE - SEARCH(\"apple\")"
            },
            best: {
              label: "search(\"apple\") = true"
            },
            vars: [
              ["op", "search(\"apple\")"],
              ["found", true]
            ]
          },
          {
            codeLine: 15,
            narration: "Operation 3: search(\"app\"). Walk root -> 'a' -> 'p' -> 'p'. Path exists, but cur.isWord == false -> return FALSE.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false, isSearching: true },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false, isSearching: true },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: false, isSearching: true },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a', isActive: true },
                { from: 'a', to: 'ap', isActive: true },
                { from: 'ap', to: 'app', isActive: true },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple' }
              ],
              activeNode: 'app',
              currentWord: 'app',
              words: ['apple'],
              title: "TRIE - SEARCH(\"app\")"
            },
            best: {
              label: "search(\"app\") = false"
            },
            vars: [
              ["op", "search(\"app\")"],
              ["path exists", true],
              ["isWord", false],
              ["result", false]
            ]
          },
          {
            codeLine: 18,
            narration: "Operation 4: startsWith(\"app\"). Walk root -> 'a' -> 'p' -> 'p'. Path exists -> return TRUE (startsWith ignores isWord).",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false, isMatched: true },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false, isMatched: true },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: false, isMatched: true },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a', isActive: true },
                { from: 'a', to: 'ap', isActive: true },
                { from: 'ap', to: 'app', isActive: true },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple' }
              ],
              activeNode: 'app',
              currentWord: 'app',
              suggestions: ['apple'],
              words: ['apple'],
              title: "TRIE - STARTSWITH(\"app\")"
            },
            best: {
              label: "startsWith(\"app\") = true"
            },
            vars: [
              ["op", "startsWith(\"app\")"],
              ["prefix found", true],
              ["result", true]
            ]
          },
          {
            codeLine: 9,
            narration: "Operation 5: insert(\"app\"). Walk 'a' -> 'p' -> 'p' (all exist), then mark cur.isWord = true on node 'app'!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: true },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a' },
                { from: 'a', to: 'ap' },
                { from: 'ap', to: 'app' },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple' }
              ],
              activeNode: 'app',
              words: ['apple', 'app'],
              title: "TRIE - INSERT(\"app\")"
            },
            vars: [
              ["op", "insert(\"app\")"],
              ["updated node", "app.isWord = true"],
              ["words", '["apple", "app"]']
            ]
          },
          {
            codeLine: 15,
            narration: "Operation 6: search(\"app\"). Walk to node 'app'. Since cur.isWord is now true -> return TRUE!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 90, isWord: false, isMatched: true },
                { id: 'ap', char: 'p', x: 200, y: 140, isWord: false, isMatched: true },
                { id: 'app', char: 'p', x: 200, y: 190, isWord: true, isMatched: true },
                { id: 'appl', char: 'l', x: 200, y: 240, isWord: false },
                { id: 'apple', char: 'e', x: 200, y: 290, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a', isActive: true },
                { from: 'a', to: 'ap', isActive: true },
                { from: 'ap', to: 'app', isActive: true },
                { from: 'app', to: 'appl' },
                { from: 'appl', to: 'apple' }
              ],
              activeNode: 'app',
              currentWord: 'app',
              words: ['apple', 'app'],
              title: "TRIE - SEARCH(\"app\")"
            },
            best: {
              label: "search(\"app\") = true"
            },
            vars: [
              ["op", "search(\"app\")"],
              ["isWord", true],
              ["result", true]
            ]
          }
        ]
      },
      {
        id: 'array-26-trie',
        label: 'Fixed 26-Array Child Pointers',
        complexity: {
          time: 'O(L) per operation',
          space: 'O(26 * N * L) alphabet nodes'
        },
        pseudocode: [
          "class TrieNode:",
          "  children = new Array(26).fill(null)",
          "  isWord = false",
          "insert(word):",
          "  cur = root",
          "  for ch in word:",
          "    idx = ch.charCodeAt(0) - 97",
          "    if not cur.children[idx]: cur.children[idx] = new TrieNode()",
          "    cur = cur.children[idx]",
          "  cur.isWord = true"
        ],
        starterCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = new Array(26).fill(null);\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const idx = word.charCodeAt(i) - 97;\n      if (!cur.children[idx]) cur.children[idx] = new TrieNode();\n      cur = cur.children[idx];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const idx = word.charCodeAt(i) - 97;\n      if (!cur.children[idx]) return false;\n      cur = cur.children[idx];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (let i = 0; i < prefix.length; i++) {\n      const idx = prefix.charCodeAt(i) - 97;\n      if (!cur.children[idx]) return false;\n      cur = cur.children[idx];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = [None] * 26\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                cur.children[idx] = TrieNode()\n            cur = cur.children[idx]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                return False\n            cur = cur.children[idx]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                return False\n            cur = cur.children[idx]\n        return True"
        },
        solutionCode: {
          javascript: "class TrieNode {\n  constructor() {\n    this.children = new Array(26).fill(null);\n    this.isWord = false;\n  }\n}\n\nclass Trie {\n  constructor() {\n    this.root = new TrieNode();\n  }\n\n  insert(word) {\n    let cur = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const idx = word.charCodeAt(i) - 97;\n      if (!cur.children[idx]) cur.children[idx] = new TrieNode();\n      cur = cur.children[idx];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    let cur = this.root;\n    for (let i = 0; i < word.length; i++) {\n      const idx = word.charCodeAt(i) - 97;\n      if (!cur.children[idx]) return false;\n      cur = cur.children[idx];\n    }\n    return cur.isWord;\n  }\n\n  startsWith(prefix) {\n    let cur = this.root;\n    for (let i = 0; i < prefix.length; i++) {\n      const idx = prefix.charCodeAt(i) - 97;\n      if (!cur.children[idx]) return false;\n      cur = cur.children[idx];\n    }\n    return true;\n  }\n}",
          python: "class TrieNode:\n    def __init__(self):\n        self.children = [None] * 26\n        self.is_word = False\n\nclass Trie:\n    def __init__(self):\n        self.root = TrieNode()\n\n    def insert(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                cur.children[idx] = TrieNode()\n            cur = cur.children[idx]\n        cur.is_word = True\n\n    def search(self, word: str) -> bool:\n        cur = self.root\n        for ch in word:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                return False\n            cur = cur.children[idx]\n        return cur.is_word\n\n    def starts_with(self, prefix: str) -> bool:\n        cur = self.root\n        for ch in prefix:\n            idx = ord(ch) - ord('a')\n            if not cur.children[idx]:\n                return False\n            cur = cur.children[idx]\n        return True"
        },
        steps: [
          {
            codeLine: 2,
            narration: "Fixed 26-Array approach: Each node stores an array of size 26 for 'a' through 'z'. O(1) index calculation `ord(ch) - 97`.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'a', char: 'a', x: 200, y: 100, isWord: false },
                { id: 'app', char: 'p', x: 200, y: 180, isWord: true },
                { id: 'apple', char: 'e', x: 200, y: 260, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'a' },
                { from: 'a', to: 'app' },
                { from: 'app', to: 'apple' }
              ],
              words: ['app', 'apple'],
              title: "TRIE (26-ARRAY CHILDREN)"
            },
            best: {
              label: "Array index lookup O(1)"
            },
            vars: [
              ["array size", 26],
              ["access", "cur.children[ord(ch) - 97]"]
            ]
          }
        ]
      }
    ]
  },

  // 3. Prefix Matching / Autocomplete
  {
    id: 'prefix-matching',
    patternId: 'trie',
    title: 'Prefix Matching',
    subtitle: 'Autocomplete · walk prefix, collect subtree',
    kind: 'problem',
    companies: ['Google', 'Amazon', 'Twitter', 'Microsoft'],
    statement: "Design a search autocomplete system using a Trie. Given a prefix string, return all words stored in the dictionary that start with that prefix in lexicographical order.",
    visualType: 'trie',
    initialInput: ['cat', 'car', 'card', 'care', 'dog'],
    approaches: [
      {
        id: 'trie-dfs-autocomplete',
        label: 'Walk Prefix + DFS Subtree Collection',
        complexity: {
          time: 'O(P + K) where P=prefix length, K=subtree size',
          space: 'O(K) output list'
        },
        pseudocode: [
          "autocomplete(prefix):",
          "  cur = root",
          "  for ch in prefix:",
          "    if ch not in cur.children: return []",
          "    cur = cur.children[ch]",
          "  ",
          "  results = []",
          "  dfs(node, path):",
          "    if node.isWord: results.append(path)",
          "    for ch, child in sorted(node.children):",
          "      dfs(child, path + ch)",
          "  ",
          "  dfs(cur, prefix)",
          "  return results"
        ],
        starterCode: {
          javascript: "function autocomplete(words, prefix) {\n  const root = { children: {}, isWord: false };\n  for (const w of words) {\n    let cur = root;\n    for (const ch of w) {\n      if (!cur.children[ch]) cur.children[ch] = { children: {}, isWord: false };\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  let cur = root;\n  for (const ch of prefix) {\n    if (!cur.children[ch]) return [];\n    cur = cur.children[ch];\n  }\n\n  const results = [];\n  function dfs(node, path) {\n    if (node.isWord) results.push(path);\n    for (const ch of Object.keys(node.children).sort()) {\n      dfs(node.children[ch], path + ch);\n    }\n  }\n\n  dfs(cur, prefix);\n  return results;\n}",
          python: "def autocomplete(words: list[str], prefix: str) -> list[str]:\n    root = {}\n    for w in words:\n        cur = root\n        for ch in w:\n            cur = cur.setdefault(ch, {})\n        cur['#'] = True  # is_word\n        \n    cur = root\n    for ch in prefix:\n        if ch not in cur:\n            return []\n        cur = cur[ch]\n        \n    results = []\n    def dfs(node, path):\n        if '#' in node:\n            results.append(path)\n        for ch in sorted(k for k in node if k != '#'):\n            dfs(node[ch], path + ch)\n            \n    dfs(cur, prefix)\n    return results"
        },
        solutionCode: {
          javascript: "function autocomplete(words, prefix) {\n  const root = { children: {}, isWord: false };\n  for (const w of words) {\n    let cur = root;\n    for (const ch of w) {\n      if (!cur.children[ch]) cur.children[ch] = { children: {}, isWord: false };\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  let cur = root;\n  for (const ch of prefix) {\n    if (!cur.children[ch]) return [];\n    cur = cur.children[ch];\n  }\n\n  const results = [];\n  function dfs(node, path) {\n    if (node.isWord) results.push(path);\n    for (const ch of Object.keys(node.children).sort()) {\n      dfs(node.children[ch], path + ch);\n    }\n  }\n\n  dfs(cur, prefix);\n  return results;\n}",
          python: "def autocomplete(words: list[str], prefix: str) -> list[str]:\n    root = {}\n    for w in words:\n        cur = root\n        for ch in w:\n            cur = cur.setdefault(ch, {})\n        cur['#'] = True\n        \n    cur = root\n    for ch in prefix:\n        if ch not in cur:\n            return []\n        cur = cur[ch]\n        \n    results = []\n    def dfs(node, path):\n        if '#' in node:\n            results.append(path)\n        for ch in sorted(k for k in node if k != '#'):\n            dfs(node[ch], path + ch)\n            \n    dfs(cur, prefix)\n    return results"
        },
        testCases: [
          {
            input: [['cat', 'car', 'card', 'care', 'dog'], 'car'],
            expected: ['car', 'card', 'care'],
            description: "Prefix 'car' matches ['car', 'card', 'care']"
          }
        ],
        steps: [
          {
            codeLine: 2,
            narration: "Given dictionary [\"cat\", \"car\", \"card\", \"care\", \"dog\"]. Query prefix = \"car\". Step 1: Walk from root down the prefix path.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 210, y: 220, isWord: true },
                { id: 'car', char: 'r', x: 130, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 110, y: 280, isWord: true },
                { id: 'care', char: 'e', x: 150, y: 280, isWord: true },
                { id: 'd', char: 'd', x: 250, y: 100, isWord: false },
                { id: 'dog', char: 'g', x: 250, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'cat' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'car', to: 'care' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'dog' }
              ],
              activeNode: 'root',
              currentWord: 'car',
              charIndex: 0,
              words: ['cat', 'car', 'card', 'care', 'dog'],
              title: "PREFIX MATCHING - WALK PREFIX \"car\""
            },
            vars: [
              ["query prefix", "car"],
              ["step", "navigate to prefix subtree"]
            ]
          },
          {
            codeLine: 5,
            narration: "Walked down 'c' -> 'a' -> 'r'. Reached subtree root at node 'car'. All words starting with \"car\" lie exclusively in this subtree!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false, isMatched: true },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false, isMatched: true },
                { id: 'cat', char: 't', x: 210, y: 220, isWord: true },
                { id: 'car', char: 'r', x: 130, y: 220, isWord: true, isMatched: true },
                { id: 'card', char: 'd', x: 110, y: 280, isWord: true },
                { id: 'care', char: 'e', x: 150, y: 280, isWord: true },
                { id: 'd', char: 'd', x: 250, y: 100, isWord: false },
                { id: 'dog', char: 'g', x: 250, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c', isActive: true },
                { from: 'c', to: 'ca', isActive: true },
                { from: 'ca', to: 'car', isActive: true },
                { from: 'ca', to: 'cat' },
                { from: 'car', to: 'card' },
                { from: 'car', to: 'care' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'dog' }
              ],
              activeNode: 'car',
              currentWord: 'car',
              suggestions: ['car'],
              title: "SUBTREE ROOT AT \"car\""
            },
            vars: [
              ["subtree root", "node 'car'"],
              ["found prefix", true]
            ]
          },
          {
            codeLine: 9,
            narration: "DFS Subtree Collection: Node 'car' has isWord == true -> Add \"car\" to results.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 210, y: 220, isWord: true },
                { id: 'car', char: 'r', x: 130, y: 220, isWord: true, isMatched: true },
                { id: 'card', char: 'd', x: 110, y: 280, isWord: true },
                { id: 'care', char: 'e', x: 150, y: 280, isWord: true },
                { id: 'd', char: 'd', x: 250, y: 100, isWord: false },
                { id: 'dog', char: 'g', x: 250, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'car', to: 'care' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'dog' }
              ],
              activeNode: 'car',
              suggestions: ['car'],
              title: "COLLECTED \"car\""
            },
            vars: [
              ["collected", '"car"'],
              ["results", '["car"]']
            ]
          },
          {
            codeLine: 11,
            narration: "DFS into child 'd': path spells \"card\". isWord == true -> Add \"card\" to results.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 210, y: 220, isWord: true },
                { id: 'car', char: 'r', x: 130, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 110, y: 280, isWord: true, isMatched: true },
                { id: 'care', char: 'e', x: 150, y: 280, isWord: true },
                { id: 'd', char: 'd', x: 250, y: 100, isWord: false },
                { id: 'dog', char: 'g', x: 250, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card', isActive: true },
                { from: 'car', to: 'care' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'dog' }
              ],
              activeNode: 'card',
              suggestions: ['car', 'card'],
              title: "COLLECTED \"card\""
            },
            vars: [
              ["collected", '"card"'],
              ["results", '["car", "card"]']
            ]
          },
          {
            codeLine: 11,
            narration: "DFS into child 'e': path spells \"care\". isWord == true -> Add \"care\" to results.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'c', char: 'c', x: 170, y: 100, isWord: false },
                { id: 'ca', char: 'a', x: 170, y: 160, isWord: false },
                { id: 'cat', char: 't', x: 210, y: 220, isWord: true },
                { id: 'car', char: 'r', x: 130, y: 220, isWord: true },
                { id: 'card', char: 'd', x: 110, y: 280, isWord: true },
                { id: 'care', char: 'e', x: 150, y: 280, isWord: true, isMatched: true },
                { id: 'd', char: 'd', x: 250, y: 100, isWord: false },
                { id: 'dog', char: 'g', x: 250, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'c' },
                { from: 'c', to: 'ca' },
                { from: 'ca', to: 'car' },
                { from: 'car', to: 'card' },
                { from: 'car', to: 'care', isActive: true },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'dog' }
              ],
              activeNode: 'care',
              suggestions: ['car', 'card', 'care'],
              title: "AUTOCOMPLETE FINISHED"
            },
            best: {
              label: "Autocomplete: [\"car\", \"card\", \"care\"]"
            },
            vars: [
              ["results", '["car", "card", "care"]'],
              ["total matches", 3]
            ]
          }
        ]
      }
    ]
  },

  // 4. Design Add and Search Words Data Structure (LeetCode #211 - Medium)
  {
    id: 'word-dictionary',
    patternId: 'trie',
    title: 'Word Dictionary (Wildcard Search)',
    subtitle: 'Wildcard matching · recursive DFS for \'.\'',
    kind: 'problem',
    leetcode: {
      id: 211,
      slug: 'design-add-and-search-words-data-structure',
      difficulty: 'Medium'
    },
    companies: ['Amazon', 'Meta', 'Google', 'Microsoft'],
    statement: "Design a data structure that supports adding new words and finding if a string matches any previously added string.\n\nImplement the WordDictionary class:\n- WordDictionary() Initializes the object.\n- void addWord(word) Adds word to the data structure.\n- bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.",
    visualType: 'trie',
    initialInput: ['bad', 'dad', 'mad'],
    approaches: [
      {
        id: 'trie-wildcard-dfs',
        label: 'Trie + Recursive DFS for Wildcards',
        complexity: {
          time: 'O(L) standard words, O(26^D * L) with D wildcards',
          space: 'O(total characters)'
        },
        pseudocode: [
          "search(word):",
          "  dfs(node, idx):",
          "    if idx == word.length: return node.isWord",
          "    ch = word[idx]",
          "    if ch != '.':",
          "      if ch not in node.children: return false",
          "      return dfs(node.children[ch], idx + 1)",
          "    // Wildcard: try all branches",
          "    for child in node.children.values():",
          "      if dfs(child, idx + 1): return true",
          "    return false"
        ],
        starterCode: {
          javascript: "class WordDictionary {\n  constructor() {\n    this.root = { children: {}, isWord: false };\n  }\n\n  addWord(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) cur.children[ch] = { children: {}, isWord: false };\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    function dfs(node, idx) {\n      if (idx === word.length) return node.isWord;\n      const ch = word[idx];\n      if (ch !== '.') {\n        if (!node.children[ch]) return false;\n        return dfs(node.children[ch], idx + 1);\n      }\n      for (const child of Object.values(node.children)) {\n        if (dfs(child, idx + 1)) return true;\n      }\n      return false;\n    }\n    return dfs(this.root, 0);\n  }\n}",
          python: "class WordDictionary:\n    def __init__(self):\n        self.root = {}\n\n    def addWord(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            cur = cur.setdefault(ch, {})\n        cur['#'] = True\n\n    def search(self, word: str) -> bool:\n        def dfs(node, idx):\n            if idx == len(word):\n                return '#' in node\n            ch = word[idx]\n            if ch != '.':\n                if ch not in node:\n                    return False\n                return dfs(node[ch], idx + 1)\n            for key in node:\n                if key != '#' and dfs(node[key], idx + 1):\n                    return True\n            return False\n        return dfs(self.root, 0)"
        },
        solutionCode: {
          javascript: "class WordDictionary {\n  constructor() {\n    this.root = { children: {}, isWord: false };\n  }\n\n  addWord(word) {\n    let cur = this.root;\n    for (const ch of word) {\n      if (!cur.children[ch]) cur.children[ch] = { children: {}, isWord: false };\n      cur = cur.children[ch];\n    }\n    cur.isWord = true;\n  }\n\n  search(word) {\n    function dfs(node, idx) {\n      if (idx === word.length) return node.isWord;\n      const ch = word[idx];\n      if (ch !== '.') {\n        if (!node.children[ch]) return false;\n        return dfs(node.children[ch], idx + 1);\n      }\n      for (const child of Object.values(node.children)) {\n        if (dfs(child, idx + 1)) return true;\n      }\n      return false;\n    }\n    return dfs(this.root, 0);\n  }\n}",
          python: "class WordDictionary:\n    def __init__(self):\n        self.root = {}\n\n    def addWord(self, word: str) -> None:\n        cur = self.root\n        for ch in word:\n            cur = cur.setdefault(ch, {})\n        cur['#'] = True\n\n    def search(self, word: str) -> bool:\n        def dfs(node, idx):\n            if idx == len(word):\n                return '#' in node\n            ch = word[idx]\n            if ch != '.':\n                if ch not in node:\n                    return False\n                return dfs(node[ch], idx + 1)\n            for key in node:\n                if key != '#' and dfs(node[key], idx + 1):\n                    return True\n            return False\n        return dfs(self.root, 0)"
        },
        testCases: [
          {
            input: [['bad', 'dad', 'mad'], '.ad'],
            expected: true,
            description: "'.ad' matches 'bad', 'dad', 'mad'"
          }
        ],
        steps: [
          {
            codeLine: 1,
            narration: "Words added: [\"bad\", \"dad\", \"mad\"]. Now searching for wildcard pattern \".ad\".",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'b', char: 'b', x: 130, y: 100, isWord: false },
                { id: 'ba', char: 'a', x: 130, y: 160, isWord: false },
                { id: 'bad', char: 'd', x: 130, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 200, y: 100, isWord: false },
                { id: 'da', char: 'a', x: 200, y: 160, isWord: false },
                { id: 'dad', char: 'd', x: 200, y: 220, isWord: true },
                { id: 'm', char: 'm', x: 270, y: 100, isWord: false },
                { id: 'ma', char: 'a', x: 270, y: 160, isWord: false },
                { id: 'mad', char: 'd', x: 270, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'b' },
                { from: 'b', to: 'ba' },
                { from: 'ba', to: 'bad' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'da' },
                { from: 'da', to: 'dad' },
                { from: 'root', to: 'm' },
                { from: 'm', to: 'ma' },
                { from: 'ma', to: 'mad' }
              ],
              activeNode: 'root',
              currentWord: '.ad',
              charIndex: 0,
              words: ['bad', 'dad', 'mad'],
              title: "SEARCH PATTERN \".ad\""
            },
            vars: [
              ["search pattern", ".ad"],
              ["char[0]", "'.' (wildcard)"]
            ]
          },
          {
            codeLine: 9,
            narration: "Encountered '.' wildcard at idx=0: Branch into ALL child nodes from root ('b', 'd', 'm'). First explore branch 'b'.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'b', char: 'b', x: 130, y: 100, isWord: false, isMatched: true },
                { id: 'ba', char: 'a', x: 130, y: 160, isWord: false },
                { id: 'bad', char: 'd', x: 130, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 200, y: 100, isWord: false },
                { id: 'da', char: 'a', x: 200, y: 160, isWord: false },
                { id: 'dad', char: 'd', x: 200, y: 220, isWord: true },
                { id: 'm', char: 'm', x: 270, y: 100, isWord: false },
                { id: 'ma', char: 'a', x: 270, y: 160, isWord: false },
                { id: 'mad', char: 'd', x: 270, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'b', isActive: true },
                { from: 'b', to: 'ba' },
                { from: 'ba', to: 'bad' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'da' },
                { from: 'da', to: 'dad' },
                { from: 'root', to: 'm' },
                { from: 'm', to: 'ma' },
                { from: 'ma', to: 'mad' }
              ],
              activeNode: 'b',
              currentWord: '.ad',
              charIndex: 0,
              title: "TRY BRANCH 'b'"
            },
            vars: [
              ["wildcard '.' matches", "'b'"],
              ["next char", "a"]
            ]
          },
          {
            codeLine: 7,
            narration: "From node 'b', match next char 'a': node 'ba' exists! Step down to 'ba'.",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'b', char: 'b', x: 130, y: 100, isWord: false, isMatched: true },
                { id: 'ba', char: 'a', x: 130, y: 160, isWord: false, isMatched: true },
                { id: 'bad', char: 'd', x: 130, y: 220, isWord: true },
                { id: 'd', char: 'd', x: 200, y: 100, isWord: false },
                { id: 'da', char: 'a', x: 200, y: 160, isWord: false },
                { id: 'dad', char: 'd', x: 200, y: 220, isWord: true },
                { id: 'm', char: 'm', x: 270, y: 100, isWord: false },
                { id: 'ma', char: 'a', x: 270, y: 160, isWord: false },
                { id: 'mad', char: 'd', x: 270, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'b' },
                { from: 'b', to: 'ba', isActive: true },
                { from: 'ba', to: 'bad' },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'da' },
                { from: 'da', to: 'dad' },
                { from: 'root', to: 'm' },
                { from: 'm', to: 'ma' },
                { from: 'ma', to: 'mad' }
              ],
              activeNode: 'ba',
              currentWord: '.ad',
              charIndex: 1,
              title: "MATCH 'a'"
            },
            vars: [
              ["char[1]", "a"],
              ["status", "matched"]
            ]
          },
          {
            codeLine: 3,
            narration: "From node 'ba', match next char 'd': node 'bad' exists and isWord == true! Pattern \".ad\" successfully matched word \"bad\" -> return TRUE!",
            trie: {
              nodes: [
                { id: 'root', char: '•', x: 200, y: 40, isWord: false },
                { id: 'b', char: 'b', x: 130, y: 100, isWord: false, isMatched: true },
                { id: 'ba', char: 'a', x: 130, y: 160, isWord: false, isMatched: true },
                { id: 'bad', char: 'd', x: 130, y: 220, isWord: true, isMatched: true },
                { id: 'd', char: 'd', x: 200, y: 100, isWord: false },
                { id: 'da', char: 'a', x: 200, y: 160, isWord: false },
                { id: 'dad', char: 'd', x: 200, y: 220, isWord: true },
                { id: 'm', char: 'm', x: 270, y: 100, isWord: false },
                { id: 'ma', char: 'a', x: 270, y: 160, isWord: false },
                { id: 'mad', char: 'd', x: 270, y: 220, isWord: true }
              ],
              edges: [
                { from: 'root', to: 'b', isActive: true },
                { from: 'b', to: 'ba', isActive: true },
                { from: 'ba', to: 'bad', isActive: true },
                { from: 'root', to: 'd' },
                { from: 'd', to: 'da' },
                { from: 'da', to: 'dad' },
                { from: 'root', to: 'm' },
                { from: 'm', to: 'ma' },
                { from: 'ma', to: 'mad' }
              ],
              activeNode: 'bad',
              currentWord: '.ad',
              charIndex: 2,
              suggestions: ['bad'],
              title: "WILDCARD MATCHED: \"bad\""
            },
            best: {
              label: "search(\".ad\") = true (matched 'bad')"
            },
            vars: [
              ["matched word", "bad"],
              ["result", true]
            ]
          }
        ]
      }
    ]
  }
];
