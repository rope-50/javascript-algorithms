import { describe, it, expect } from 'vitest';
import { BinarySearchTree } from '../src/binarySearchTree.js';

function sampleTree() {
  return new BinarySearchTree().insertAll([5, 3, 8, 1, 4]);
}

describe('BinarySearchTree', () => {
  it('keeps in-order traversal sorted', () => {
    expect(sampleTree().inOrder()).toEqual([1, 3, 4, 5, 8]);
  });

  it('supports pre-order and post-order traversals', () => {
    const tree = sampleTree();
    expect(tree.preOrder()).toEqual([5, 3, 1, 4, 8]);
    expect(tree.postOrder()).toEqual([1, 4, 3, 8, 5]);
  });

  it('searches for values', () => {
    const tree = sampleTree();
    expect(tree.has(4)).toBe(true);
    expect(tree.has(9)).toBe(false);
  });

  it('ignores duplicate inserts', () => {
    const tree = new BinarySearchTree().insertAll([1, 1, 2, 2, 3]);
    expect(tree.inOrder()).toEqual([1, 2, 3]);
  });

  it('deletes a node with two children and stays sorted', () => {
    const tree = sampleTree();
    tree.delete(3);
    expect(tree.has(3)).toBe(false);
    expect(tree.inOrder()).toEqual([1, 4, 5, 8]);
  });

  it('reports leaves, minimum and root-to-leaf paths', () => {
    const tree = sampleTree();
    expect(tree.leaves()).toEqual([1, 4, 8]);
    expect(tree.min()).toBe(1);
    expect(tree.paths()).toEqual(['5->3->1', '5->3->4', '5->8']);
  });

  it('handles an empty tree', () => {
    const tree = new BinarySearchTree();
    expect(tree.inOrder()).toEqual([]);
    expect(tree.min()).toBeUndefined();
    expect(tree.has(1)).toBe(false);
  });
});
