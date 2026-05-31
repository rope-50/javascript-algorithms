/**
 * The Celebrity Problem.
 *
 * In a group of `n` people, a "celebrity" is someone who is known by everyone
 * else but knows nobody. Relationships are given as an `n × n` matrix where
 * `knows[a][b]` is truthy when person `a` knows person `b`.
 *
 * The trick is candidate elimination: a single linear pass narrows the field to
 * the only possible celebrity, then a second pass verifies the claim. Every
 * comparison `knows[a][b]` rules out exactly one person as a celebrity, so the
 * candidate is found in O(n) instead of checking all O(n²) pairs.
 *
 * Time: O(n) - Space: O(1)
 *
 * @param {Array<Array<number|boolean>>} knows - Square "who-knows-whom" matrix.
 * @returns {number} The celebrity's index, or `-1` if there is none.
 */
export function findCelebrity(knows) {
  const n = knows.length;

  // Phase 1 - find the single possible candidate.
  // If `candidate` knows `other`, then `candidate` cannot be the celebrity, so
  // `other` becomes the new candidate. Anyone skipped is ruled out too.
  let candidate = 0;
  for (let other = 1; other < n; other++) {
    if (knows[candidate][other]) {
      candidate = other;
    }
  }

  // Phase 2 - verify: the candidate must know no one and be known by everyone.
  for (let other = 0; other < n; other++) {
    if (other === candidate) continue;
    const candidateKnowsOther = Boolean(knows[candidate][other]);
    const otherKnowsCandidate = Boolean(knows[other][candidate]);
    if (candidateKnowsOther || !otherKnowsCandidate) {
      return -1;
    }
  }
  return candidate;
}
