const assert = require('node:assert/strict');
const isValid = require('./solution');

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('(]'), false);
assert.equal(isValid('([)]'), false);
assert.equal(isValid('{[]}'), true);
