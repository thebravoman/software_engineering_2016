var tests = require('../testQuadratic.js');

for (let test in tests) {
  exports[test] = tests[test];
}
