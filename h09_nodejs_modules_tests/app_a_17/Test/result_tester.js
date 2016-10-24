var result = require('../Module/solve.js');
var json_one_root = require('../Test/input_1.json');
var json_two_roots = require('../Test/input_2.json');
var json_any = require('../Test/input_any.json');
var json_no = require('../Test/input_no.json');

exports.test_DgreaterThan0 = function(test) {
	
	var a = json_two_roots.a;
	var b = json_two_roots.b;
	var c = json_two_roots.c;
	
	test.equals({"x1":-2, "x2":-3},result.solve(a, b, c));
	
	test.done();
}

exports.test_D0 = function(test) {
	var a = json_one_root.a;
	var b = json_one_root.b;
	var c = json_one_root.c;
	
	test.equals({"x": -1}, result.solve(a, b, c));
	
	test.done();
}

exports.test_any = function(test) {
	
	var a = json_any.a;
	var b = json_any.b;
	var c = json_any.c;
	
	test.equals({"x": "Any"}, result.solve(a, b, c));
	
	test.done();
}

exports.test_no = function(test) {
	
	var a = json_no.a;
	var b = json_no.b;
	var c = json_no.c;
	
	test.equals({"x1":NaN, "x2":NaN}, result.solve(a, b, c));
	
	test.done();
}