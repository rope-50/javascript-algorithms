/**
 * String Permutation check.
 *
 * Returns `true` when `a` and `b` are permutations of each other — i.e. they
 * contain exactly the same characters with the same frequencies, possibly in a
 * different order. Strings of different lengths can never be permutations, so
 * that is checked first as a fast exit.
 *
 * Time: O(n) — Space: O(distinct characters)
 *
 * @param {string} a
 * @param {string} b
 * @returns {boolean}
 */
export function isPermutation(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;

  const counts = new Map();
  for (const char of a) {
    counts.set(char, (counts.get(char) ?? 0) + 1);
  }
  for (const char of b) {
    const remaining = counts.get(char) ?? 0;
    if (remaining === 0) return false; // extra/unknown char -> not a permutation
    counts.set(char, remaining - 1);
  }

  return true;
}
