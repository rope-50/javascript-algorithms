/**
 * Queue implemented with two stacks.
 *
 * A FIFO queue built from two LIFO stacks. `enqueue` always pushes onto the
 * `inbox`. `dequeue` / `peek` take from the `outbox`; when the outbox runs out,
 * the inbox is poured into it, which reverses the order so the oldest element
 * ends up on top. Each element is moved between stacks at most once, giving
 * O(1) amortized operations.
 */
export class Queue {
  constructor() {
    /** @type {any[]} newest elements, in arrival order */
    this.inbox = [];
    /** @type {any[]} oldest elements, reversed and ready to leave */
    this.outbox = [];
  }

  get size() {
    return this.inbox.length + this.outbox.length;
  }

  isEmpty() {
    return this.size === 0;
  }

  /** Adds `value` to the back of the queue. */
  enqueue(value) {
    this.inbox.push(value);
    return this;
  }

  /** Removes and returns the front value, or `undefined` if empty. */
  dequeue() {
    this.#fill();
    return this.outbox.pop();
  }

  /** Returns the front value without removing it, or `undefined` if empty. */
  peek() {
    this.#fill();
    return this.outbox[this.outbox.length - 1];
  }

  // Refill the outbox from the inbox only when the outbox is exhausted.
  #fill() {
    if (this.outbox.length === 0) {
      while (this.inbox.length > 0) {
        this.outbox.push(this.inbox.pop());
      }
    }
  }
}
