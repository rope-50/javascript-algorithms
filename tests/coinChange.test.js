import { describe, it, expect } from 'vitest';
import { countChange, countChangeRecursive } from '../src/coinChange.js';

describe('coin change', () => {
  it('counts the ways to make an amount (DP)', () => {
    expect(countChange(4, [1, 2])).toBe(3); // 1+1+1+1, 1+1+2, 2+2
    expect(countChange(5, [1, 2, 5])).toBe(4);
  });

  it('has exactly one way to make 0', () => {
    expect(countChange(0, [1, 2, 5])).toBe(1);
  });

  it('returns 0 when the amount cannot be made', () => {
    expect(countChange(3, [2])).toBe(0);
  });

  it('recursive and DP solutions agree', () => {
    for (const amount of [0, 1, 4, 5, 11]) {
      expect(countChangeRecursive(amount, [1, 2, 5])).toBe(
        countChange(amount, [1, 2, 5]),
      );
    }
  });
});
