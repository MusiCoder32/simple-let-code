const fs = require('fs');
const path = require('path');

function findTestFiles(root) {
  const entries = fs.readdirSync(root, { withFileTypes: true });
  const tests = [];
  for (const e of entries) {
    if (e.isDirectory()) {
      const testPath = path.join(root, e.name, 'test.js');
      if (fs.existsSync(testPath)) tests.push(testPath);
    }
  }
  return tests;
}

function runAll() {
  const tests = findTestFiles(__dirname);
  let pass = 0, fail = 0;
  for (const file of tests) {
    const caseName = path.basename(path.dirname(file));
    try {
      require(file);
      console.log(`\u2713 ${caseName}`);
      pass += 1;
    } catch (err) {
      console.error(`\u2717 ${caseName}`);
      console.error(err && err.stack ? err.stack : err);
      fail += 1;
    }
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  if (fail > 0) process.exitCode = 1;
}

runAll();
