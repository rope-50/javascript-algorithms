import { describe, it, expect } from 'vitest';
import { isPermutation } from '../src/stringPermutation.js';

describe('isPermutation', () => {
  it('returns true for rearrangements', () => {
    expect(isPermutation('abc', 'bca')).toBe(true);
    expect(isPermutation('bacedifogu', 'ugofidecab')).toBe(true);
    expect(isPermutation('', '')).toBe(true);
  });

  it('returns false for different characters or lengths', () => {
    expect(isPermutation('abc', 'abd')).toBe(false);
    expect(isPermutation('a', 'aa')).toBe(false);
    expect(isPermutation('somestring', 'nopermutation')).toBe(false);
  });

  it('returns false for non-string input', () => {
    expect(isPermutation('', 3)).toBe(false);
    expect(isPermutation(null, 'a')).toBe(false);
  });
});
