import { describe, it, expect } from 'vitest';
import { permutations } from '../src/permutations.js';

describe('permutations', () => {
  it('generates all orderings of a list', () => {
    const result = permutations([1, 2, 3]);
    expect(result).toHaveLength(6);
    expect(result).toContainEqual([1, 2, 3]);
    expect(result).toContainEqual([3, 2, 1]);
    expect(result).toContainEqual([2, 1, 3]);
  });

  it('produces n! permutations', () => {
    expect(permutations(['a', 'b', 'c', 'd'])).toHaveLength(24);
  });

  it('handles empty and single-element lists', () => {
    expect(permutations([])).toEqual([[]]);
    expect(permutations([7])).toEqual([[7]]);
  });

  it('does not mutate the input', () => {
    const input = [1, 2, 3];
    permutations(input);
    expect(input).toEqual([1, 2, 3]);
  });
});
