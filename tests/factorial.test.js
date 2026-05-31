import { describe, it, expect } from 'vitest';
import { factorial } from '../src/factorial.js';

describe('factorial', () => {
  it('returns 1 for 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('computes small factorials', () => {
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(10)).toBe(3628800);
  });

  it('throws on negative or non-integer input', () => {
    expect(() => factorial(-1)).toThrow(RangeError);
    expect(() => factorial(2.5)).toThrow(RangeError);
  });
});
