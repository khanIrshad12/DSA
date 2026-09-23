import { Topic } from '../types';
import { twoPointersProblems } from './problems/twoPointers';
import { arraysHashingProblems } from './problems/arraysHashing';
import { slidingWindowProblems } from './problems/slidingWindow';
import { stackProblems } from './problems/stackProblems';
import { linkedListProblems } from './problems/linkedListProblems';
import { binarySearchProblems } from './problems/binarySearch';
import { dfsProblems } from './problems/dfsProblems';
import { dpProblems } from './problems/dpProblems';
import { graphProblems } from './problems/graphProblems';
import { heapProblems } from './problems/heapProblems';
import { greedyProblems, matrixProblems, intervalProblems, bitProblems } from './problems/otherPatterns';

export const allTopics: Topic[] = [
  {
    id: 'two-pointers',
    title: 'Two Pointers',
    description: 'Converging and running pointers for sorted arrays & palindromes',
    icon: 'Split',
    problems: twoPointersProblems
  },
  {
    id: 'arrays-hashing',
    title: 'Arrays & Hashing',
    description: 'Trade space for O(1) lookups — sets & maps',
    icon: 'Hash',
    problems: arraysHashingProblems
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    description: 'Maintain contiguous subarrays & dynamic ranges',
    icon: 'Maximize2',
    problems: slidingWindowProblems
  },
  {
    id: 'stack',
    title: 'Stack',
    description: 'LIFO · push, pop, monotonic stacks & expression parsing',
    icon: 'Layers',
    problems: stackProblems
  },
  {
    id: 'linked-list',
    title: 'Linked List',
    description: 'Nodes, next-pointers, reversal, and fast-slow pointers',
    icon: 'GitCommit',
    problems: linkedListProblems
  },
  {
    id: 'heap',
    title: 'Heap / Priority Queue',
    description: 'Complete tree + heap property · sift-up / sift-down',
    icon: 'TrendingUp',
    problems: heapProblems
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: 'Halve the search space · answer search on monotonic ranges',
    icon: 'Search',
    problems: binarySearchProblems
  },
  {
    id: 'dfs',
    title: 'Depth-First Search',
    description: 'Go deep, then backtrack · pre/in/post order & graph DFS',
    icon: 'GitBranch',
    problems: dfsProblems
  },
  {
    id: 'greedy',
    title: 'Greedy Algorithms',
    description: 'Take the best local choice, never look back',
    icon: 'Zap',
    problems: greedyProblems
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    description: 'Overlapping subproblems · state recurrence tables',
    icon: 'Grid',
    problems: dpProblems
  },
  {
    id: 'graphs',
    title: 'Graphs',
    description: 'Directed, weighted, topological sort, BFS & Dijkstra',
    icon: 'Share2',
    problems: graphProblems
  },
  {
    id: 'matrices',
    title: 'Matrices',
    description: '2D grid traversal, boundary simulation & rotations',
    icon: 'LayoutGrid',
    problems: matrixProblems
  },
  {
    id: 'intervals',
    title: 'Intervals',
    description: 'Interval scheduling, merging and overlap sweeps',
    icon: 'Sliders',
    problems: intervalProblems
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    description: 'XOR tricks, masks, bit shifts and bitwise arithmetic',
    icon: 'Binary',
    problems: bitProblems
  }
];

export const getProblemById = (topicId: string, problemId: string) => {
  const topic = allTopics.find(t => t.id === topicId);
  if (!topic) return undefined;
  return topic.problems.find(p => p.id === problemId);
};
