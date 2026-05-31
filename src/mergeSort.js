/**
 * Merge Sort and inversion counting.
 *
 * Merge sort is a stable, O(n log n) divide-and-conquer sort: split the array
 * in half, sort each half, then merge. While merging we can also count
 * "inversions" — pairs `(i, j)` with `i < j` but `a[i] > a[j]`, a measure of how
 * unsorted the array is — at no extra asymptotic cost.
 */

/**
 * Returns a new ascending-sorted copy of `items`. Does not mutate the input.
 *
 * Time: O(n log n) — Space: O(n)
 *
 * @param {number[]} items
 * @returns {number[]}
 */
export function mergeSort(items) {
  return sortAndCount(items).sorted;
}

/**
 * Counts the number of inversions in `items`.
 *
 * Time: O(n log n) — Space: O(n)
 *
 * @param {number[]} items
 * @returns {number}
 */
export function countInversions(items) {
  return sortAndCount(items).inversions;
}

/**
 * Sorts `items` and counts inversions in a single divide-and-conquer pass.
 *
 * @param {number[]} items
 * @returns {{ sorted: number[], inversions: number }}
 */
export function sortAndCount(items) {
  if (items.length < 2) {
    return { sorted: items.slice(), inversions: 0 };
  }
  const middle = Math.floor(items.length / 2);
  const left = sortAndCount(items.slice(0, middle));
  const right = sortAndCount(items.slice(middle));
  const merged = merge(left.sorted, right.sorted);
  return {
    sorted: merged.sorted,
    inversions: left.inversions + right.inversions + merged.inversions,
  };
}

// Merges two sorted arrays into one, counting cross-inversions on the way.
function merge(left, right) {
  const sorted = [];
  let i = 0;
  let j = 0;
  let inversions = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i++]);
    } else {
      // right[j] is smaller than every remaining element of `left`, so it forms
      // an inversion with each of them.
      inversions += left.length - i;
      sorted.push(right[j++]);
    }
  }

  // One side is now empty; append whatever remains of the other.
  while (i < left.length) sorted.push(left[i++]);
  while (j < right.length) sorted.push(right[j++]);

  return { sorted, inversions };
}
