/**
 * Reverses a string.
 *
 * JavaScript strings are immutable, so we copy the characters into an array and
 * swap from both ends toward the middle. Spreading with `[...str]` iterates by
 * Unicode code point, so characters outside the Basic Multilingual Plane (e.g.
 * many emoji) survive intact.
 *
 * Time: O(n) — Space: O(n)
 *
 * @param {string} str
 * @returns {string} The reversed string.
 */
export function reverseString(str) {
  const chars = [...str];
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    [chars[left], chars[right]] = [chars[right], chars[left]];
    left++;
    right--;
  }
  return chars.join('');
}
