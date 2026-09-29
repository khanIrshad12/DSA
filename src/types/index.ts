export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'easy' | 'medium' | 'hard';

export interface Pointer {
  name: string;
  index: number;
  color?: 'accent' | 'accent2' | 'green' | 'red' | 'purple' | 'amber' | 'cyan' | 'blue' | string;
  label?: string;
  position?: 'top' | 'bottom';
}

export interface Step {
  codeLine: number;
  narration: string;
  pointers?: Pointer[];
  highlights?: number[];
  dimmed?: number[];
  secondaryHighlights?: number[];
  window?: { start: number; end: number; label?: string };
  stack?: (string | number | any)[];
  queue?: (string | number | any)[];
  heap?: (number | string)[];
  matrix?: (number | string)[][] | { grid: (number | string)[][]; activeCell?: [number, number]; [key: string]: any };
  gridHighlights?: Array<{ r: number; c: number; status?: 'active' | 'visited' | 'visited-target' | 'target' | 'blocked' | 'safe' | 'captured' | 'border-highlight' | 'pacific' | 'atlantic' | 'both' | 'settled' | 'nbr' | 'pop' | 'dst' | 'src' | string; badge?: string; [key: string]: any }>;
  tree?: {
    activeNode?: string | number;
    visitedNodes?: (string | number)[];
    returnedValues?: Record<string | number, any>;
    orderBadges?: Record<string | number, number | string>;
    paramBadges?: Record<string | number, string>;
    activeEdges?: Array<[number | string, number | string]>;
    callStack?: string[];
    nodes?: Array<{ id: number | string; x: number; y: number; left?: number | string | null; right?: number | string | null }>;
    edges?: Array<{ from: number | string; to: number | string; [key: string]: any }>;
    title?: string;
    adjList?: Record<string | number, any>;
    [key: string]: any;
  };
  graph?: {
    activeNode?: number | string;
    visited?: (number | string)[];
    inDegree?: Record<number | string, number>;
    order?: (number | string)[];
    queue?: (number | string)[];
    title?: string;
    adjList?: Record<string | number, any>;
    nodes?: Array<{ id: number | string; x: number; y: number; left?: number | string | null; right?: number | string | null }>;
    edges?: Array<{ from: number | string; to: number | string; [key: string]: any }>;
    activeEdges?: Array<[number | string, number | string]>;
    relaxedEdges?: Array<[number | string, number | string]>;
    returnedValues?: Record<string | number, any>;
    paramBadges?: Record<string | number, string>;
    callStack?: string[];
    [key: string]: any;
  intervals?: Array<{
    start: number;
    end: number;
    status?: 'default' | 'active' | 'merged' | 'added' | 'removed' | 'conflict' | 'inserted' | 'comparing' | 'current' | 'reused' | string;
    label?: string;
    badge?: string;
    lane?: number;
    color?: string;
    [key: string]: any;
  }>;
    activeNode?: number;
    flippedArrows?: number[];
    prev?: number | null;
    curr?: number | null;
    next?: number | null;
    reversedList?: number[];
  };
  backtracking?: {
    tree?: {
      nodes?: Array<{ id: number | string; label?: string; x: number; y: number; width?: number; height?: number; isPruned?: boolean; isLeaf?: boolean; isSuccess?: boolean }>;
      edges?: Array<{ from: number | string; to: number | string; label?: string; isBacktracked?: boolean; isPruned?: boolean }>;
      activeNode?: number | string;
      activeEdges?: Array<[number | string, number | string]>;
      visitedNodes?: (number | string)[];
      prunedNodes?: (number | string)[];
      successNodes?: (number | string)[];
      paramBadges?: Record<number | string, string>;
      title?: string;
    };
    board?: {
      grid?: (string | number | null)[][];
      queens?: Array<{ r: number; c: number }>;
      attackedCells?: Array<{ r: number; c: number }>;
      activeCell?: [number, number];
      colSet?: number[];
      diagSet?: number[];
      antiDiagSet?: number[];
      title?: string;
      [key: string]: any;
    };
    wordGrid?: {
      grid: string[][];
      matchedCells?: Array<{ r: number; c: number; index?: number }>;
      activeCell?: [number, number];
      rejectedCell?: [number, number];
      activeBadge?: string;
      cellBadges?: Record<string, string>;
      word?: string;
      matchedLen?: number;
      title?: string;
    };
    results?: Array<string | number[] | string[]>;
    resultsTitle?: string;
    horizontalStack?: {
      title?: string;
      items: Array<string | number | { val: string | number; sub?: string }>;
    };
    callStack?: string[];
  };
  trie?: {
    nodes?: Array<{
      id: string | number;
      char: string;
      x: number;
      y: number;
      isWord?: boolean;
      word?: string;
      isNew?: boolean;
      isMatched?: boolean;
      isSearching?: boolean;
      isHighlighted?: boolean;
    }>;
    edges?: Array<{
      from: string | number;
      to: string | number;
      char?: string;
      isActive?: boolean;
    }>;
    activeNode?: string | number;
    activeEdges?: Array<[string | number, string | number]>;
    visitedNodes?: Array<string | number>;
    title?: string;
    currentWord?: string;
    charIndex?: number;
    words?: string[];
    matchedWords?: string[];
    suggestions?: string[];
  };
  bits?: {
    registers?: Array<{
      name?: string;
      value: number | string;
      bits?: (0 | 1 | string)[];
      label?: string;
      color?: string;
      highlightIndices?: number[];
      dimmedIndices?: number[];
      badge?: string;
      [key: string]: any;
    }>;
    operation?: string;
    activeBit?: number;
    title?: string;
    description?: string;
    [key: string]: any;
  };
  customVisual?: any;
  vars: Array<[string, any]>;
  best?: { indices?: number[]; value?: any; label?: string };
  [key: string]: any;
}

export interface TestCase {
  input: any[];
  expected: any;
  description?: string;
}

export interface Approach {
  id?: string;
  label: string;
  complexity: {
    time: string;
    space: string;
  };
  pseudocode: string[];
  starterCode?: {
    javascript: string;
    python: string;
  };
  solutionCode?: {
    javascript: string;
    python: string;
  };
  testCases?: TestCase[];
  steps: Step[];
}

export interface Problem {
  id: string;
  patternId?: string;
  title: string;
  subtitle?: string;
  kind?: 'problem' | 'concept' | 'intro';
  difficulty?: Difficulty;
  leetcode?: {
    id: number;
    slug: string;
    difficulty: Difficulty;
  };
  companies?: string[];
  statement?: string;
  visualType?: 'array' | 'bars' | 'linked-list' | 'stack' | 'tree' | 'graph' | 'matrix' | 'heap' | 'intervals' | 'dp-grid' | 'backtracking' | 'trie' | 'bits' | 'bit-manipulation';
  initialInput?: any;
  approaches: Approach[];
  [key: string]: any;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  problems: Problem[];
}
