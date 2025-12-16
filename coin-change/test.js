const assert = require('node:assert/strict');
const coinChange = require('./solution');

assert.equal(coinChange([1,2,5], 11), 3);
assert.equal(coinChange([2], 3), -1);
assert.equal(coinChange([1], 0), 0);
