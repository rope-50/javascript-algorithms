import { describe, it, expect } from 'vitest';
import { canConstruct } from '../src/ransomNote.js';

describe('canConstruct', () => {
  it('returns true when the magazine has enough of each character', () => {
    expect(canConstruct('aa', 'aab')).toBe(true);
    expect(canConstruct('abc', 'aabbcc')).toBe(true);
  });

  it('returns false when a character is missing or insufficient', () => {
    expect(canConstruct('a', 'b')).toBe(false);
    expect(canConstruct('aa', 'ab')).toBe(false);
  });

  it('treats an empty note as always constructible', () => {
    expect(canConstruct('', 'whatever')).toBe(true);
    expect(canConstruct('', '')).toBe(true);
  });
});
