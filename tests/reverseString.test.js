import { describe, it, expect } from 'vitest';
import { reverseString } from '../src/reverseString.js';

describe('reverseString', () => {
  it('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('reverse this string')).toBe('gnirts siht esrever');
  });

  it('handles empty and single-character strings', () => {
    expect(reverseString('')).toBe('');
    expect(reverseString('x')).toBe('x');
  });

  it('is its own inverse', () => {
    expect(reverseString(reverseString('palindrome'))).toBe('palindrome');
  });
});
