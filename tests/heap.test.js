import { describe, it, expect } from 'vitest';
import { MinHeap, MaxHeap, Heap } from '../src/heap.js';

describe('MinHeap', () => {
  it('always pops the smallest element', () => {
    const heap = new MinHeap();
    [5, 3, 8, 1, 9, 2].forEach((n) => heap.push(n));
    expect(heap.peek()).toBe(1);

    const popped = [];
    while (heap.size > 0) popped.push(heap.pop());
    expect(popped).toEqual([1, 2, 3, 5, 8, 9]);
  });
});

describe('MaxHeap', () => {
  it('always pops the largest element', () => {
    const heap = new MaxHeap();
    [5, 3, 8, 1, 9, 2].forEach((n) => heap.push(n));
    expect(heap.peek()).toBe(9);

    const popped = [];
    while (heap.size > 0) popped.push(heap.pop());
    expect(popped).toEqual([9, 8, 5, 3, 2, 1]);
  });
});

describe('Heap', () => {
  it('returns undefined when popping an empty heap', () => {
    expect(new MinHeap().pop()).toBeUndefined();
  });

  it('accepts a custom comparator (e.g. by string length)', () => {
    const heap = new Heap((a, b) => a.length - b.length);
    heap.push('ccc').push('a').push('bb');
    expect(heap.pop()).toBe('a');
    expect(heap.pop()).toBe('bb');
    expect(heap.pop()).toBe('ccc');
  });
});
