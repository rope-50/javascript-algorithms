/**
 * Binary heap (priority queue) backed by a plain array.
 *
 * For a node at index `i`, its children live at `2i + 1` and `2i + 2` and its
 * parent at `(i - 1) / 2`. Ordering is decided by a `compare(a, b)` function
 * that returns a negative number when `a` should sit *above* `b` (closer to the
 * root). Use {@link MinHeap} / {@link MaxHeap} for the common numeric cases.
 *
 * push / pop: O(log n) — peek: O(1)
 */
export class Heap {
  /** @param {(a: any, b: any) => number} compare */
  constructor(compare) {
    this.compare = compare;
    /** @type {any[]} */
    this.items = [];
  }

  get size() {
    return this.items.length;
  }

  /** Returns the root element without removing it. */
  peek() {
    return this.items[0];
  }

  /** Inserts `value` and restores the heap order. */
  push(value) {
    this.items.push(value);
    this.#siftUp(this.items.length - 1);
    return this;
  }

  /** Removes and returns the root element (or `undefined` if empty). */
  pop() {
    if (this.items.length === 0) return undefined;
    const top = this.items[0];
    const last = this.items.pop();
    if (this.items.length > 0) {
      // Move the last item to the root and let it sink to its place.
      this.items[0] = last;
      this.#siftDown(0);
    }
    return top;
  }

  // Bubble the item up while it ranks above its parent.
  #siftUp(index) {
    while (index > 0) {
      const parent = (index - 1) >> 1;
      if (this.compare(this.items[index], this.items[parent]) >= 0) break;
      this.#swap(index, parent);
      index = parent;
    }
  }

  // Sink the item down while a child ranks above it; always follow the
  // higher-priority child so the heap property is preserved.
  #siftDown(index) {
    const n = this.items.length;
    for (;;) {
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      let best = index;
      if (left < n && this.compare(this.items[left], this.items[best]) < 0) best = left;
      if (right < n && this.compare(this.items[right], this.items[best]) < 0) best = right;
      if (best === index) break;
      this.#swap(index, best);
      index = best;
    }
  }

  #swap(i, j) {
    [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
  }
}

/** Min-heap of numbers: the smallest value is always on top. */
export class MinHeap extends Heap {
  constructor() {
    super((a, b) => a - b);
  }
}

/** Max-heap of numbers: the largest value is always on top. */
export class MaxHeap extends Heap {
  constructor() {
    super((a, b) => b - a);
  }
}
