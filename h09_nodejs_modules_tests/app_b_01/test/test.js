var equation = require("../modules/modules.js");
var fs = require('fs');

exports.test_none = function(test)
{
	var read =  require("inputNan.json");
	var expect =
	{
			"x1":"NaN",
			"x2":"NaN",
	};
	test.equals(JSON.stringify(expect), JSON.stringify(modules.calculation(read.a, read.b, read.c)));
	test.done();
};
exports.test_any = function(test)
{
	var read =  require("inputAny.json");
	var expect =
	{
			"x":"Any",
	};
	test.equals(JSON.stringify(expect), JSON.stringify(modules.calculation(read.a, read.b, read.c)));
	test.done();
};
exports.test_D0 = function(test)
{
	var read =  require("input01.json");
	var expect =
	{
			"x":-2,
	};
	test.equals(JSON.stringify(expect), JSON.stringify(modules.calculation(read.a, read.b, read.c)));
	test.done();
};
exports.test_DGreaterThan0 = function(test)
{
	var read =  require("input02.json");
	var expect =
	{
			"x1":3,
			"x2":1,
	};
	test.equals(JSON.stringify(expect), JSON.stringify(modules.calculation(read.a, read.b, read.c)));
	test.done();
};