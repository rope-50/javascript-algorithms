/**
 * Ransom Note.
 *
 * Determines whether `note` can be assembled from the characters available in
 * `magazine`, where each character of the magazine may be used at most once.
 *
 * We tally the magazine's character counts, then "spend" one per character of
 * the note; if any character is missing or runs out, the note is impossible.
 *
 * Time: O(note + magazine) - Space: O(distinct magazine characters)
 *
 * @param {string} note - The text we want to build.
 * @param {string} magazine - The pool of available characters.
 * @returns {boolean} `true` if `note` can be built from `magazine`.
 */
export function canConstruct(note, magazine) {
  const available = new Map();
  for (const char of magazine) {
    available.set(char, (available.get(char) ?? 0) + 1);
  }

  for (const char of note) {
    const remaining = available.get(char) ?? 0;
    if (remaining === 0) return false;
    available.set(char, remaining - 1);
  }

  return true;
}
