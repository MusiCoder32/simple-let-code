const assert = require('node:assert/strict');
const numIslands = require('./solution');

function cloneGrid(g) { return g.map(row => row.slice()); }

const g1 = [
  ['1','1','1','1','0'],
  ['1','1','0','1','0'],
  ['1','1','0','0','0'],
  ['0','0','0','0','0']
];
assert.equal(numIslands(cloneGrid(g1)), 1);

const g2 = [
  ['1','1','0','0','0'],
  ['1','1','0','0','0'],
  ['0','0','1','0','0'],
  ['0','0','0','1','1']
];
assert.equal(numIslands(cloneGrid(g2)), 3);
