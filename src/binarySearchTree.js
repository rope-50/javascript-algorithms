/**
 * Binary Search Tree (BST).
 *
 * Every node's left subtree holds only smaller keys and its right subtree only
 * larger keys, so an in-order traversal yields the values in sorted order.
 * Duplicate keys are ignored. Average-case operations are O(log n); the worst
 * case is O(n) for a degenerate (unbalanced) tree.
 */

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    /** @type {BSTNode | null} */
    this.root = null;
  }

  /** Inserts `value` (ignored if it is already present). */
  insert(value) {
    this.root = this.#insertAt(this.root, value);
    return this;
  }

  #insertAt(node, value) {
    if (node === null) return new BSTNode(value);
    if (value < node.value) node.left = this.#insertAt(node.left, value);
    else if (value > node.value) node.right = this.#insertAt(node.right, value);
    // value === node.value -> duplicate, leave the tree unchanged
    return node;
  }

  /** Inserts every value from an iterable. */
  insertAll(values) {
    for (const value of values) this.insert(value);
    return this;
  }

  /** Returns `true` if `value` is in the tree. */
  has(value) {
    let node = this.root;
    while (node !== null) {
      if (value === node.value) return true;
      node = value < node.value ? node.left : node.right;
    }
    return false;
  }

  /** Removes `value` if present. */
  delete(value) {
    this.root = this.#deleteAt(this.root, value);
    return this;
  }

  #deleteAt(node, value) {
    if (node === null) return null;

    if (value < node.value) {
      node.left = this.#deleteAt(node.left, value);
    } else if (value > node.value) {
      node.right = this.#deleteAt(node.right, value);
    } else {
      // Found the node to remove — handle the three classic cases.
      if (node.left === null) return node.right; // 0 or 1 child (right)
      if (node.right === null) return node.left; // 1 child (left)

      // Two children: replace this value with its in-order successor (the
      // smallest value in the right subtree), then delete that successor.
      let successor = node.right;
      while (successor.left !== null) successor = successor.left;
      node.value = successor.value;
      node.right = this.#deleteAt(node.right, successor.value);
    }
    return node;
  }

  /** In-order traversal: returns the values sorted ascending. */
  inOrder() {
    const out = [];
    const visit = (node) => {
      if (!node) return;
      visit(node.left);
      out.push(node.value);
      visit(node.right);
    };
    visit(this.root);
    return out;
  }

  /** Pre-order traversal: root, then left subtree, then right subtree. */
  preOrder() {
    const out = [];
    const visit = (node) => {
      if (!node) return;
      out.push(node.value);
      visit(node.left);
      visit(node.right);
    };
    visit(this.root);
    return out;
  }

  /** Post-order traversal: left subtree, then right subtree, then root. */
  postOrder() {
    const out = [];
    const visit = (node) => {
      if (!node) return;
      visit(node.left);
      visit(node.right);
      out.push(node.value);
    };
    visit(this.root);
    return out;
  }

  /** Returns the values of all leaves (nodes with no children). */
  leaves() {
    const out = [];
    const visit = (node) => {
      if (!node) return;
      if (!node.left && !node.right) out.push(node.value);
      visit(node.left);
      visit(node.right);
    };
    visit(this.root);
    return out;
  }

  /** Returns the smallest value, or `undefined` if the tree is empty. */
  min() {
    if (!this.root) return undefined;
    let node = this.root;
    while (node.left) node = node.left;
    return node.value;
  }

  /** Returns every root-to-leaf path as a string, e.g. `"100->50->25"`. */
  paths() {
    const out = [];
    const visit = (node, trail) => {
      if (!node) return;
      const next = trail ? `${trail}->${node.value}` : `${node.value}`;
      if (!node.left && !node.right) {
        out.push(next);
      } else {
        visit(node.left, next);
        visit(node.right, next);
      }
    };
    visit(this.root, '');
    return out;
  }
}
