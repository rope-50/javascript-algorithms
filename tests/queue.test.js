import { describe, it, expect } from 'vitest';
import { Queue } from '../src/queue.js';

describe('Queue (two stacks)', () => {
  it('preserves FIFO order', () => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2).enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('interleaves enqueue and dequeue correctly', () => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2);
    expect(queue.dequeue()).toBe(1);
    queue.enqueue(3);
    expect(queue.peek()).toBe(2);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('reports size and emptiness', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue('a');
    expect(queue.size).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.dequeue()).toBe('a');
    expect(queue.dequeue()).toBeUndefined();
  });
});
