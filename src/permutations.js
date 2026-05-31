/**
 * All permutations of a list.
 *
 * Generates every ordering of the input via backtracking: fix each element as
 * the first item in turn, then recursively permute the remaining elements. A
 * list of `n` distinct elements has `n!` permutations.
 *
 * Time: O(n · n!) - Space: O(n · n!) (size of the output)
 *
 * @template T
 * @param {T[]} items
 * @returns {T[][]} Every permutation of `items`.
 */
export function permutations(items) {
  if (items.length <= 1) return [items.slice()];

  const result = [];
  for (let i = 0; i < items.length; i++) {
    const rest = [...items.slice(0, i), ...items.slice(i + 1)];
    for (const perm of permutations(rest)) {
      result.push([items[i], ...perm]);
    }
  }
  return result;
}
