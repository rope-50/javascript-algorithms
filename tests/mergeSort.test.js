import { describe, it, expect } from 'vitest';
import { mergeSort, countInversions } from '../src/mergeSort.js';

describe('mergeSort', () => {
  it('sorts numbers ascending', () => {
    expect(mergeSort([3, 1, 2])).toEqual([1, 2, 3]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it('handles empty and single-element arrays', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([42])).toEqual([42]);
  });

  it('does not mutate the input', () => {
    const input = [3, 1, 2];
    mergeSort(input);
    expect(input).toEqual([3, 1, 2]);
  });
});

describe('countInversions', () => {
  it('counts zero for a sorted array', () => {
    expect(countInversions([1, 2, 3, 4])).toBe(0);
  });

  it('counts the maximum for a reversed array', () => {
    expect(countInversions([3, 2, 1])).toBe(3);
  });

  it('counts inversions in a mixed array', () => {
    expect(countInversions([2, 4, 1, 3, 5])).toBe(3);
  });
});
