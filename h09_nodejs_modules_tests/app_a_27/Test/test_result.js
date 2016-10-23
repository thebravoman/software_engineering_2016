var mod = require('../Modules/solve.js');
var json_any = require('../Input_Json/input-any.json');
var json_one = require('../Input_Json/input-1.json');
var json_two = require('../Input_Json/input-2.json');
var json_nan = require('../Input_Json/input-nan.json');

exports.test_any = function(test){
	var expected = {"x": "Any"};
	
	var a = json_any.a;
	var b = json_any.b;
	var c = json_any.c;
	
	var result = {};
	result = mod.solve_quadratic(a, b, c);

	var output = JSON.stringify(result, undefined, 1);
	expected = JSON.stringify(expected, undefined, 1);

	test.equals(output,expected);
	test.done();
};

exports.test_D0 = function(test){
	var expected = {"x": -2};
	
	var a = json_one.a;
	var b = json_one.b;
	var c = json_one.c;
	
	var result = {};
	result = mod.solve_quadratic(a, b, c);

	var output = JSON.stringify(result, undefined, 1);
	expected = JSON.stringify(expected, undefined, 1);

	test.equals(output,expected);
	test.done();
};

exports.test_DGreaterThan0 = function(test){
	var expected = {"x1": 1, "x2" : -5};
	
	var a = json_two.a;
	var b = json_two.b;
	var c = json_two.c;
	
	var result = {};
	result = mod.solve_quadratic(a, b, c);

	var output = JSON.stringify(result, undefined, 1);
	expected = JSON.stringify(expected, undefined, 1);

	test.equals(output,expected);
	test.done();
};

exports.test_none = function(test){
	var expected = {"x1": "NAN", "x2" : "NAN"};
	
	var a = json_nan.a;
	var b = json_nan.b;
	var c = json_nan.c;
	
	var result = {};
	result = mod.solve_quadratic(a, b, c);

	var output = JSON.stringify(result, undefined, 1);
	expected = JSON.stringify(expected, undefined, 1);

	test.equals(output,expected);
	test.done();
};
