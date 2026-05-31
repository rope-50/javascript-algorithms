import { describe, it, expect } from 'vitest';
import { runningMedian } from '../src/runningMedian.js';

// Brute-force reference median for cross-checking.
function medianOf(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

describe('runningMedian', () => {
  it('returns the median after each insertion', () => {
    expect(runningMedian([12, 4, 5, 3, 8, 7])).toEqual([12, 8, 5, 4.5, 5, 6]);
  });

  it('matches a brute-force median at every step', () => {
    const stream = [9, 1, 7, 3, 2, 8, 5, 6, 4, 10];
    const seen = [];
    const expected = stream.map((value) => {
      seen.push(value);
      return medianOf(seen);
    });
    expect(runningMedian(stream)).toEqual(expected);
  });

  it('handles an empty stream', () => {
    expect(runningMedian([])).toEqual([]);
  });
});
