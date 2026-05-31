import { describe, it, expect } from 'vitest';
import { derivative, integral, formatPolynomial } from '../src/polynomial.js';

describe('polynomial', () => {
  it('differentiates a polynomial', () => {
    // d/dx (4 + 2x²) = 4x  ->  [0, 4]
    expect(derivative([4, 0, 2])).toEqual([0, 4]);
  });

  it('differentiates a constant to the empty polynomial', () => {
    expect(derivative([5])).toEqual([]);
  });

  it('integrates a polynomial with a constant of integration', () => {
    expect(integral([4, 0, 2])).toEqual([0, 4, 0, 2 / 3]);
    expect(integral([4, 0, 2], 1)).toEqual([1, 4, 0, 2 / 3]);
  });

  it('formats coefficients as a readable string', () => {
    expect(formatPolynomial([4, 0, 2])).toBe('4 + 0X^1 + 2X^2');
  });

  it('derivative and integral are inverse up to the constant', () => {
    expect(derivative(integral([3, 6, 9]))).toEqual([3, 6, 9]);
  });
});
