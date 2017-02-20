var module = require('../module/solve.js');
var fs = require('fs');
var d_eq_0 = JSON.parse(fs.readFileSync('../input_files/d_equal_0.json'));
var d_bg_0 = JSON.parse(fs.readFileSync('../input_files/d_bigger_than_0.json'));
var d_less_0 = JSON.parse(fs.readFileSync('../input_files/d_less_than_0.json'));
var a_b_c_0 = JSON.parse(fs.readFileSync('../input_files/a_b_c_0.json'));


exports.test_one_x = function(test) {
  var a = d_eq_0['a'];
  var b = d_eq_0['b'];
  var c = d_eq_0['c'];
  test.equals(JSON.stringify({"x": -0.5}), JSON.stringify(module.quadratic_solution(a, b, c)));
  test.done();
};

exports.test_two_x = function(test) {
  var a = d_bg_0['a'];
  var b = d_bg_0['b'];
  var c = d_bg_0['c'];
  test.equals(JSON.stringify({"x1": 1, "x2": 4}), JSON.stringify(module.quadratic_solution(a, b, c)));
  test.done();
};

exports.test_nan_x = function(test) {
  var a = d_less_0['a'];
  var b = d_less_0['b'];
  var c = d_less_0['c'];
  test.equals(JSON.stringify({"x1": NaN, "x2": NaN}), JSON.stringify(module.quadratic_solution(a, b, c)));
  test.done();
};

exports.test_any_x = function(test) {
  var a = a_b_c_0['a'];
  var b = a_b_c_0['b'];
  var c = a_b_c_0['c'];
  test.equals(JSON.stringify({"x": "any"}), JSON.stringify(module.quadratic_solution(a, b, c)));
  test.done();
};
