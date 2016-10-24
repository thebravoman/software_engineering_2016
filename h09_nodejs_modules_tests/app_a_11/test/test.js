var module = require('../module/solve.js');

exports.test_one_x = function(test) {
  test.done();
};

exports.test_two_x = function(test) {
  test.equals(JSON.stringify({"x1": 1, "x2": 4}), JSON.stringify(module.quadratic_solution(1, -5, 4)));
  test.done();
};

exports.test_nan_x = function(test) {
  test.equals(JSON.stringify({"x1": NaN, "x2": NaN}), JSON.stringify(module.quadratic_solution(4, 2, 1)));
  test.done();
};

exports.test_any_x = function(test) {
  test.equals(JSON.stringify({"x": "any"}), JSON.stringify(module.quadratic_solution(0, 0, 0)));
  test.done();
};
