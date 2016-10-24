var equation = require("../modules/modules.js");
var fs = require('fs');

exports.test_none = function(test)
{
	var read =  require('./input-none.json');
	var expect =
	{
			"x1":"NaN",
			"x2":"NaN",
	};
	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculatе(read.a, read.b, read.c)));
	test.done();
};
exports.test_any = function(test)
{
	var read =  require('./input-any.json');
	var expect =
	{
			"x":"Any",
	};
	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculatе(read.a, read.b, read.c)));
	test.done();
};
exports.test_D0 = function(test)
{
	var read =  require('./input-01.json');
	var expect =
	{
			"x":-2,
	};
	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculatе(read.a, read.b, read.c)));
	test.done();
};
exports.test_DGreaterThan0 = function(test)
{
	var read =  require('./input-02.json');
	var expect =
	{
			"x1":3,
			"x2":1,
	};
	test.equals(JSON.stringify(expect), JSON.stringify(equation.calculatе(read.a, read.b, read.c)));
	test.done();
};
