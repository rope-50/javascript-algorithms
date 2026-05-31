/**
 * H-Index.
 *
 * A researcher's h-index is the largest number `h` such that they have at least
 * `h` papers with `h` or more citations each.
 *
 * This uses counting (bucket) sort: a citation count can be capped at `n` (the
 * paper count) because the h-index can never exceed the number of papers. We
 * then scan buckets from the top, accumulating papers until we find the largest
 * `h` whose running total reaches `h`.
 *
 * Time: O(n) - Space: O(n)
 *
 * @param {number[]} citations - Citation count for each paper.
 * @returns {number} The h-index.
 */
export function hIndex(citations) {
  const n = citations.length;

  // buckets[k] = number of papers with exactly k citations (k capped at n).
  const buckets = new Array(n + 1).fill(0);
  for (const count of citations) {
    buckets[Math.min(count, n)]++;
  }

  // Walk down from h = n; once at least `h` papers have ≥ h citations, that's it.
  let papers = 0;
  for (let h = n; h >= 0; h--) {
    papers += buckets[h];
    if (papers >= h) return h;
  }
  return 0;
}
