import { describe, it, expect } from 'vitest';
import { Trie } from '../src/trie.js';

function sampleTrie() {
  return new Trie().add('cat').add('car').add('dog');
}

describe('Trie', () => {
  it('finds whole words that were inserted', () => {
    const trie = sampleTrie();
    expect(trie.has('cat')).toBe(true);
    expect(trie.has('car')).toBe(true);
    expect(trie.has('dog')).toBe(true);
  });

  it('does not treat a prefix as a complete word', () => {
    const trie = sampleTrie();
    expect(trie.has('ca')).toBe(false);
    expect(trie.has('do')).toBe(false);
    expect(trie.has('cats')).toBe(false);
  });

  it('counts words sharing a prefix', () => {
    const trie = sampleTrie();
    expect(trie.countPrefix('ca')).toBe(2);
    expect(trie.countPrefix('c')).toBe(2);
    expect(trie.countPrefix('d')).toBe(1);
    expect(trie.countPrefix('z')).toBe(0);
  });
});
