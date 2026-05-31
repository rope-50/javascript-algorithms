/**
 * Prime numbers.
 */

/**
 * Tests whether `n` is prime by trial division.
 *
 * Only divisors up to `√n` need checking: if `n = a · b` then at least one of
 * `a`, `b` is `≤ √n`.
 *
 * Time: O(√n) — Space: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
export function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  const limit = Math.floor(Math.sqrt(n));
  for (let divisor = 2; divisor <= limit; divisor++) {
    if (n % divisor === 0) return false;
  }
  return true;
}

/**
 * Returns every prime `≤ n` using the Sieve of Eratosthenes.
 *
 * Starting from each prime `p`, mark its multiples (from `p²` upward) as
 * composite; whatever stays unmarked is prime.
 *
 * Time: O(n log log n) — Space: O(n)
 *
 * @param {number} n
 * @returns {number[]}
 */
export function primesUpTo(n) {
  if (n < 2) return [];

  const isComposite = new Array(n + 1).fill(false);
  const primes = [];
  for (let candidate = 2; candidate <= n; candidate++) {
    if (isComposite[candidate]) continue;
    primes.push(candidate);
    for (let multiple = candidate * candidate; multiple <= n; multiple += candidate) {
      isComposite[multiple] = true;
    }
  }
  return primes;
}
