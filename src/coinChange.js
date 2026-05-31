/**
 * Coin Change - counting the number of ways to make an amount.
 *
 * Given a target `amount` and a set of `coins` (each available in unlimited
 * quantity), count how many distinct combinations of coins sum to the amount.
 * Combinations are order-insensitive: `1 + 2` and `2 + 1` count as one.
 */

/**
 * Recursive definition. Exponential without memoization, but it states the
 * recurrence plainly: the number of ways either uses at least one `coins[0]`
 * (stay on the same coin, smaller amount) or ignores `coins[0]` entirely.
 *
 * Time: exponential - Space: O(amount) recursion depth
 *
 * @param {number} amount
 * @param {number[]} coins
 * @returns {number}
 */
export function countChangeRecursive(amount, coins) {
  if (amount === 0) return 1;
  if (amount < 0 || coins.length === 0) return 0;
  return (
    countChangeRecursive(amount - coins[0], coins) +
    countChangeRecursive(amount, coins.slice(1))
  );
}

/**
 * Bottom-up dynamic programming - the practical solution.
 *
 * `ways[a]` holds the number of combinations summing to `a`. Iterating one coin
 * at a time (outer loop) before amounts (inner loop) guarantees each
 * combination is counted once regardless of order.
 *
 * Time: O(coins × amount) - Space: O(amount)
 *
 * @param {number} amount
 * @param {number[]} coins
 * @returns {number}
 */
export function countChange(amount, coins) {
  const ways = new Array(amount + 1).fill(0);
  ways[0] = 1; // exactly one way to make 0: pick nothing
  for (const coin of coins) {
    for (let a = coin; a <= amount; a++) {
      ways[a] += ways[a - coin];
    }
  }
  return ways[amount];
}
