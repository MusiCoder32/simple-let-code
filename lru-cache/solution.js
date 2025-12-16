class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = { prev: null, next: null };
    this.tail = { prev: null, next: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key);
    this.#moveToFront(node);
    return node.value;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this.#moveToFront(node);
      return;
    }
    const node = { key, value, prev: null, next: null };
    this.map.set(key, node);
    this.#insertFront(node);
    if (this.map.size > this.capacity) {
      const lru = this.tail.prev;
      this.#removeNode(lru);
      this.map.delete(lru.key);
    }
  }

  #moveToFront(node) {
    this.#removeNode(node);
    this.#insertFront(node);
  }

  #insertFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }

  #removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
}

module.exports = LRUCache;
