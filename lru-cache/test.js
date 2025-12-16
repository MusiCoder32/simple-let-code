const assert = require('node:assert/strict');
const LRUCache = require('./solution');

const cache = new LRUCache(2);
cache.put(1, 1); // {1}
cache.put(2, 2); // {2,1}
assert.equal(cache.get(1), 1); // {1,2}
cache.put(3, 3); // evict 2 -> {3,1}
assert.equal(cache.get(2), -1);
cache.put(4, 4); // evict 1 -> {4,3}
assert.equal(cache.get(1), -1);
assert.equal(cache.get(3), 3);
assert.equal(cache.get(4), 4);
