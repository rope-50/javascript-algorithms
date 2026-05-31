/**
 * Trie (prefix tree).
 *
 * Stores strings character by character so words that share a prefix also share
 * nodes. Each node records how many inserted words pass through it, which makes
 * "how many words start with this prefix?" an O(prefix length) lookup.
 */

class TrieNode {
  constructor() {
    /** @type {Map<string, TrieNode>} */
    this.children = new Map();
    this.passing = 0; // number of inserted words passing through this node
    this.isWord = false; // does a complete word end exactly here?
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /** Inserts a word into the trie. */
  add(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
      node.passing++;
    }
    node.isWord = true;
    return this;
  }

  /** Returns `true` if the exact `word` was inserted. */
  has(word) {
    const node = this.#find(word);
    return node !== null && node.isWord;
  }

  /** Returns how many inserted words start with `prefix`. */
  countPrefix(prefix) {
    const node = this.#find(prefix);
    return node === null ? 0 : node.passing;
  }

  // Walks down from the root following `text`; returns the node it lands on,
  // or null if the path falls off the trie.
  #find(text) {
    let node = this.root;
    for (const char of text) {
      if (!node.children.has(char)) return null;
      node = node.children.get(char);
    }
    return node;
  }
}
