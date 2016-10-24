var equation = require("../modules/equation.js");
var fs = require('fs');
exports.test_none = function(test)
{
	var data = JSON.parse(fs.readFile('./inputs/none-x.json'));
	var returnExpected =
	{
			"x1":"NaN",
			"x2":"NaN",
			"D":0
	};
	test.equals(returnExpected, equation.matematika(data.a, data.b, data.c));
	test.done();
};
exports.test_any = function(test)
{
	var data = JSON.parse(fs.readFile('./inputs/any-x.json'));
	var returnExpected =
	{
			"x1":"Any",
			"x2":"Any",
			"D":0
	};
	test.equals(returnExpected, equation.matematika(data.a, data.b, data.c));
	test.done();
};
exports.test_D0 = function(test)
{
	var data = JSON.parse(fs.readFile('./inputs/1-x.json'));
	var returnExpected =
	{
			"x": 2,
			"D": 0
	};
	test.equals(returnExpected, equation.matematika(data.a, data.b, data.c));
	test.done();
};
exports.test_DGreaterThan0 = function(test)
{
	var data = JSON.parse(fs.readFile('./inputs/2-x.json'));
	var returnExpected =
	{
			"x1":4,
			"x2":-1,
			"D":25
	};
	test.equals(returnExpected, equation.matematika(data.a, data.b, data.c));
	test.done();
};
