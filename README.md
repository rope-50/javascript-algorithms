# 🧮 JavaScript Algorithms

> Classic data structures and algorithms, implemented in clean, modern JavaScript - each one documented, complexity-annotated, and covered by tests.

[![CI](https://github.com/rope-50/javascript-algorithms/actions/workflows/ci.yml/badge.svg)](https://github.com/rope-50/javascript-algorithms/actions/workflows/ci.yml)
[![Node](https://img.shields.io/badge/node-%E2%89%A520-43853d?logo=node.js&logoColor=white)](https://nodejs.org)
[![Tested with Vitest](https://img.shields.io/badge/tested%20with-vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

A study-and-reference collection of well-known algorithms and data structures. Every module is a small, self-contained ES module with:

- 📖 a **docstring** explaining the idea and its **time/space complexity**,
- 🧩 **clear, commented code** that favors readability over cleverness,
- ✅ a matching **Vitest** test that doubles as usage examples.

Great for interview prep, brushing up on fundamentals, or as a base to contribute your own.

## 🚀 Getting started

```bash
git clone https://github.com/rope-50/javascript-algorithms.git
cd javascript-algorithms
npm install

npm test          # run the whole suite once
npm run test:watch  # re-run on file changes
npm run coverage    # run with a coverage report
```

> Requires **Node.js 20+**.

## 📦 Usage

Everything is exported from `src/`, individually or via the barrel `src/index.js`:

```js
import { mergeSort, BinarySearchTree, runningMedian } from './src/index.js';

mergeSort([5, 2, 9, 1]);            // -> [1, 2, 5, 9]

new BinarySearchTree()
  .insertAll([5, 3, 8, 1])
  .inOrder();                       // -> [1, 3, 5, 8]

runningMedian([12, 4, 5, 3]);       // -> [12, 8, 5, 4.5]
```

## 📚 What's inside

### Data structures
| Structure | Source | Highlights |
| --- | --- | --- |
| Binary heap (min/max) | [`heap.js`](src/heap.js) | push/pop `O(log n)`, custom comparator |
| Queue (two stacks) | [`queue.js`](src/queue.js) | FIFO with `O(1)` amortized ops |
| Binary search tree | [`binarySearchTree.js`](src/binarySearchTree.js) | insert / delete / search / traversals |
| Trie (prefix tree) | [`trie.js`](src/trie.js) | word lookup + prefix counting |

### Sorting & counting
| Algorithm | Source | Complexity |
| --- | --- | --- |
| Merge sort | [`mergeSort.js`](src/mergeSort.js) | `O(n log n)` |
| Count inversions | [`mergeSort.js`](src/mergeSort.js) | `O(n log n)` |
| Running median | [`runningMedian.js`](src/runningMedian.js) | `O(log n)` / element |

### Math
| Algorithm | Source | Complexity |
| --- | --- | --- |
| Factorial | [`factorial.js`](src/factorial.js) | `O(n)` |
| Primality test | [`primes.js`](src/primes.js) | `O(√n)` |
| Sieve of Eratosthenes | [`primes.js`](src/primes.js) | `O(n log log n)` |
| Polynomial derivative & integral | [`polynomial.js`](src/polynomial.js) | `O(n)` |

### Strings
| Algorithm | Source | Complexity |
| --- | --- | --- |
| Reverse string | [`reverseString.js`](src/reverseString.js) | `O(n)` |
| Permutation check | [`stringPermutation.js`](src/stringPermutation.js) | `O(n)` |
| Ransom note | [`ransomNote.js`](src/ransomNote.js) | `O(n)` |

### Classic problems
| Problem | Source | Complexity |
| --- | --- | --- |
| Coin change (count ways) | [`coinChange.js`](src/coinChange.js) | `O(amount × coins)` |
| H-index | [`hIndex.js`](src/hIndex.js) | `O(n)` |
| Celebrity problem | [`celebrity.js`](src/celebrity.js) | `O(n)` |
| Permutations | [`permutations.js`](src/permutations.js) | `O(n · n!)` |

## 🗂️ Project structure

```
src/      one module per algorithm or data structure
tests/    one Vitest spec per module (mirrors src/)
```

## 🤝 Contributing

Contributions are very welcome - whether it's a brand-new algorithm, a clearer
explanation, an extra test, or a bug fix. New to open source? This is a friendly
place to make your first PR. 💚

Have a look at **[CONTRIBUTING.md](CONTRIBUTING.md)** for the (short) guidelines,
then open an issue or a pull request. Every addition just needs a docstring with
its complexity and a test.

## 📄 License

Released under the [MIT License](LICENSE).
