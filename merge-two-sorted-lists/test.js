const assert = require('node:assert/strict');
const mergeTwoLists = require('./solution');

function fromArray(arr) {
  const dummy = { val: 0, next: null };
  let tail = dummy;
  for (const v of arr) {
    tail.next = { val: v, next: null };
    tail = tail.next;
  }
  return dummy.next;
}

function toArray(head) {
  const out = [];
  while (head) { out.push(head.val); head = head.next; }
  return out;
}

assert.deepEqual(toArray(mergeTwoLists(fromArray([1,2,4]), fromArray([1,3,4]))), [1,1,2,3,4,4]);
assert.deepEqual(toArray(mergeTwoLists(null, null)), []);
assert.deepEqual(toArray(mergeTwoLists(null, fromArray([0]))), [0]);
