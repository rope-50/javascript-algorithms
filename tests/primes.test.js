import { describe, it, expect } from 'vitest';
import { isPrime, primesUpTo } from '../src/primes.js';

describe('isPrime', () => {
  it('recognizes primes', () => {
    expect(isPrime(2)).toBe(true);
    expect(isPrime(13)).toBe(true);
    expect(isPrime(97)).toBe(true);
  });

  it('rejects non-primes', () => {
    expect(isPrime(1)).toBe(false);
    expect(isPrime(9)).toBe(false);
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-7)).toBe(false);
  });
});

describe('primesUpTo', () => {
  it('lists primes up to n', () => {
    expect(primesUpTo(10)).toEqual([2, 3, 5, 7]);
    expect(primesUpTo(2)).toEqual([2]);
  });

  it('returns an empty list below 2', () => {
    expect(primesUpTo(1)).toEqual([]);
    expect(primesUpTo(0)).toEqual([]);
  });
});
