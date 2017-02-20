const solve = require('../modules/solver').quadratic;

exports.test_none = function (test) {
  const input = require('./input-nan.json');
  const expectedOutput = {
    x1: NaN,
    x2: NaN
  };
  test.equal(
    JSON.stringify(expectedOutput),
    JSON.stringify(solve(input.a, input.b, input.c))
  );
  test.done();
};

exports.test_any = function (test) {
  const input = require('./input-any.json');
  const expectedOutput = {
    x: 'Any'
  };
  test.equal(
    JSON.stringify(expectedOutput),
    JSON.stringify(solve(input.a, input.b, input.c))
  );
  test.done();
};

exports.test_D0 = function (test) {
  const input = require('./input-1.json');
  const expectedOutput = {
    x: -0.6
  };
  test.equal(
    JSON.stringify(expectedOutput),
    JSON.stringify(solve(input.a, input.b, input.c))
  );
  test.done();
};

exports.test_DGreaterThan0 = function (test) {
  const input = require('./input-2.json');
  const expectedOutput = {
    x1: 3,
    x2: 1
  };
  test.equal(
    JSON.stringify(expectedOutput),
    JSON.stringify(solve(input.a, input.b, input.c))
  );
  test.done();
};
