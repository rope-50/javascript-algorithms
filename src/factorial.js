/**
 * Computes `n!` (n factorial) recursively.
 *
 * The factorial of a non-negative integer `n` is the product of all positive
 * integers up to `n`, with `0!` defined as `1`.
 *
 * Time: O(n) - Space: O(n) (recursion stack)
 *
 * @param {number} n - A non-negative integer.
 * @returns {number} The value of `n!`.
 * @throws {RangeError} If `n` is negative or not an integer.
 */
export function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('factorial expects a non-negative integer');
  }
  return n === 0 ? 1 : n * factorial(n - 1);
}
