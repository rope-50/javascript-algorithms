import { describe, it, expect } from 'vitest';
import { findCelebrity } from '../src/celebrity.js';

describe('findCelebrity', () => {
  it('finds the person known by all who knows no one', () => {
    // Person 2 is known by 0 and 1, and knows nobody.
    const knows = [
      [0, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ];
    expect(findCelebrity(knows)).toBe(2);
  });

  it('returns -1 when there is no celebrity', () => {
    const knows = [
      [0, 1],
      [1, 0],
    ];
    expect(findCelebrity(knows)).toBe(-1);
  });

  it('handles a single person (who is trivially a celebrity)', () => {
    expect(findCelebrity([[0]])).toBe(0);
  });
});
