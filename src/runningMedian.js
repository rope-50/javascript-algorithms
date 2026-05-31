import { MinHeap, MaxHeap } from './heap.js';

/**
 * Running (streaming) Median.
 *
 * Maintains the median of a growing stream of numbers with two heaps:
 *   - a max-heap (`lower`) holding the smaller half, largest on top;
 *   - a min-heap (`upper`) holding the larger half, smallest on top.
 *
 * After each insertion the heaps are rebalanced so their sizes differ by at
 * most one. The median is then either the top of the larger heap or, when the
 * halves are equal, the average of both tops.
 *
 * Per element - Time: O(log n) - Space: O(n)
 *
 * @param {number[]} stream - Numbers arriving one at a time.
 * @returns {number[]} The median computed after each element is added.
 */
export function runningMedian(stream) {
  const lower = new MaxHeap(); // smaller half
  const upper = new MinHeap(); // larger half
  const medians = [];

  for (const value of stream) {
    // Route the value to the half it belongs in.
    if (lower.size === 0 || value <= lower.peek()) {
      lower.push(value);
    } else {
      upper.push(value);
    }

    // Rebalance so that 0 <= lower.size - upper.size <= 1.
    if (lower.size > upper.size + 1) {
      upper.push(lower.pop());
    } else if (upper.size > lower.size) {
      lower.push(upper.pop());
    }

    medians.push(
      lower.size === upper.size
        ? (lower.peek() + upper.peek()) / 2
        : lower.peek(),
    );
  }

  return medians;
}
