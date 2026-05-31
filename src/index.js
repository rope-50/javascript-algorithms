/**
 * Barrel module: re-exports every algorithm and data structure so consumers can
 * import from a single entry point, e.g. `import { mergeSort } from './src'`.
 */

export { factorial } from './factorial.js';
export { findCelebrity } from './celebrity.js';
export { derivative, integral, formatPolynomial } from './polynomial.js';
export { countChange, countChangeRecursive } from './coinChange.js';
export { hIndex } from './hIndex.js';
export { Heap, MinHeap, MaxHeap } from './heap.js';
export { mergeSort, countInversions, sortAndCount } from './mergeSort.js';
export { runningMedian } from './runningMedian.js';
export { permutations } from './permutations.js';
export { isPrime, primesUpTo } from './primes.js';
export { Queue } from './queue.js';
export { canConstruct } from './ransomNote.js';
export { reverseString } from './reverseString.js';
export { isPermutation } from './stringPermutation.js';
export { BinarySearchTree } from './binarySearchTree.js';
export { Trie } from './trie.js';
