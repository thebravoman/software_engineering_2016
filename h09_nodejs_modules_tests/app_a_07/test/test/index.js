const tests = require('../solver');

for (let test in tests) {
  exports[test] = tests[test];
}
