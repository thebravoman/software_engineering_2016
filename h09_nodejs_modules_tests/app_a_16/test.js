var fs = require("fs");
var quadraticsolver = require("./quadraticsolver.js");

var fileinput1 = fs.readFileSync("input-1.json");
var input_1 = JSON.parse(fileinput1);

var fileinput2 = fs.readFileSync("input-2.json");
var input_2 = JSON.parse(fileinput2);

var fileinputnan = fs.readFileSync("input-nan.json");
var input_nan = JSON.parse(fileinputnan);

var fileinputany = fs.readFileSync("input-any.json");
var input_any = JSON.parse(fileinputany);

exports.test_none = function(test)
{
	var expected = {"x1": "NaN", "x2": "NaN"};
	var a = input_nan.a;
	var b = input_nan.b;
	var c = input_nan.c;

	var received = {};
	received = quadraticsolver.solve(a, b, c);
	
	var output = JSON.stringify(received);
	expected = JSON.stringify(expected);
	test.equals(output, expected);
	test.done();
};

exports.test_any = function(test)
{
	var expected = {"x": "Any"};
	var a = input_any.a;
	var b = input_any.b;
	var c = input_any.c;
	
	var received = {};
	received = quadraticsolver.solve(a, b, c);

	var output = JSON.stringify(received);
	expected = JSON.stringify(expected);
	test.equals(output, expected);
	test.done();
};

exports.test_D0 = function(test)
{
	var expected = {"x": -1};
	var a = input_2.a;
	var b = input_2.b;
	var c = input_2.c;

	var received = {};
	received = quadraticsolver.solve(a, b, c);

	var output = JSON.stringify(received);
	expected = JSON.stringify(expected);
	test.equals(output, expected);
	test.done();
};

exports.test_DGreaterThan0 = function(test)
{
	var expected = {"x1": 4, "x2": -1};
	var a = input_1.a;
	var b = input_1.b;
	var c = input_1.c;

	var received = {};
	received = quadraticsolver.solve(a, b, c);

	var output = JSON.stringify(received);
	expected = JSON.stringify(expected);
	test.equals(output, expected);
	test.done();
};
