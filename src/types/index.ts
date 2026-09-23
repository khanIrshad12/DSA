export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Pointer {
  name: string;
  index: number;
  color?: 'accent' | 'accent2' | 'green' | 'red' | 'purple' | 'amber' | 'cyan';
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
  matrix?: (number | string)[][];
  gridHighlights?: Array<{ r: number; c: number; status?: 'active' | 'visited' | 'target' | 'blocked' }>;
  tree?: {
    activeNode?: string | number;
    visitedNodes?: (string | number)[];
    returnedValues?: Record<string | number, any>;
    orderBadges?: Record<string | number, number | string>;
    paramBadges?: Record<string | number, string>;
    activeEdges?: Array<[number | string, number | string]>;
    callStack?: string[];
    nodes?: Array<{ id: number | string; x: number; y: number; left?: number | string | null; right?: number | string | null }>;
    edges?: Array<{ from: number | string; to: number | string }>;
    title?: string;
    adjList?: Record<string | number, any>;
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
    edges?: Array<{ from: number | string; to: number | string }>;
    activeEdges?: Array<[number | string, number | string]>;
    returnedValues?: Record<string | number, any>;
    paramBadges?: Record<string | number, string>;
    callStack?: string[];
  };
  intervals?: Array<{ start: number; end: number; status?: 'default' | 'active' | 'merged' | 'added' }>;
  linkedList?: {
    activeNode?: number;
    flippedArrows?: number[];
    prev?: number | null;
    curr?: number | null;
    next?: number | null;
    reversedList?: number[];
  };
  customVisual?: any;
  vars: Array<[string, any]>;
  best?: { indices?: number[]; value?: any; label?: string };
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
  patternId: string;
  title: string;
  subtitle: string;
  kind?: 'problem' | 'concept' | 'intro';
  leetcode?: {
    id: number;
    slug: string;
    difficulty: Difficulty;
  };
  companies?: string[];
  statement: string;
  visualType?: 'array' | 'bars' | 'linked-list' | 'stack' | 'tree' | 'graph' | 'matrix' | 'heap' | 'intervals' | 'dp-grid';
  initialInput?: any;
  approaches: Approach[];
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  problems: Problem[];
}
