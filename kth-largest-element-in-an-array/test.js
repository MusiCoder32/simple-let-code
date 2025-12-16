const assert = require('node:assert/strict');
const findKthLargest = require('./solution');

assert.equal(findKthLargest([3,2,1,5,6,4], 2), 5);
assert.equal(findKthLargest([3,2,3,1,2,4,5,5,6], 4), 4);
