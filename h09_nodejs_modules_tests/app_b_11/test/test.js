var equation = require("../modules/modules.js");

var fs = require('fs');


exports.test_any = function(test)
{
	var read =  require('./input-any.json');
	var expect =
	{
			"x":"Any",
	};

	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculate(read.a, read.b, read.c)));

	test.done();
};
exports.test_DGreaterThan0 = function(test)
{
	var read =  require('./input-2.json');
	var expect =
	{
			"x1":3,
			"x2":1,
	};

	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculate(read.a, read.b, read.c)));

	test.done();
};
exports.test_D0 = function(test)
{
	var read =  require('./input-1.json');
	var expect =
	{
			"x":-2,
	};

	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculate(read.a, read.b, read.c)));

	test.done();
};

exports.test_none = function(test)
{
	var read =  require('./input-nan.json');
	var expect =
	{
			"x1":"NaN",
			"x2":"NaN",
	};

	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculate(read.a, read.b, read.c)));

	test.done();
};
