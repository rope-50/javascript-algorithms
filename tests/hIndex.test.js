import { describe, it, expect } from 'vitest';
import { hIndex } from '../src/hIndex.js';

describe('hIndex', () => {
  it('computes the h-index', () => {
    expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
    expect(hIndex([1, 3, 1])).toBe(1);
  });

  it('returns 0 with no papers or no citations', () => {
    expect(hIndex([])).toBe(0);
    expect(hIndex([0, 0, 0])).toBe(0);
  });

  it('caps the index at the number of papers', () => {
    expect(hIndex([100])).toBe(1);
    expect(hIndex([10, 10, 10])).toBe(3);
  });
});
