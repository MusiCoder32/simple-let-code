const assert = require('node:assert/strict');
const levelOrder = require('./solution');

function buildTree(arr) {
  if (!arr.length || arr[0] == null) return null;
  const nodes = arr.map(v => (v == null ? null : { val: v, left: null, right: null }));
  for (let i = 0, j = 1; j < nodes.length; i++) {
    if (nodes[i]) {
      nodes[i].left = nodes[j++] || null;
      if (j < nodes.length) nodes[i].right = nodes[j++] || null;
    }
  }
  return nodes[0];
}

assert.deepEqual(levelOrder(buildTree([3,9,20,null,null,15,7])), [[3],[9,20],[15,7]]);
assert.deepEqual(levelOrder(buildTree([])), []);
