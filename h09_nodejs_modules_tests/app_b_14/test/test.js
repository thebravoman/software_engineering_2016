var equation = require("../modules/modules.js");
var fs = require('fs');

exports.test_none = function(test){
	var read =  require('./input-nan.json');
	var expect = JSON.stringify({"x1": "NaN","x2": "NaN"});
	
	var returned = JSON.stringify(equation.calculate(read.a, read.b, read.c));

	test.equals(expect, returned);
	test.done();

};
exports.test_any = function(test)
{
	var read =  require('./input-any.json');
	var expect = JSON.stringify({"x": "Any"});

	var returned = JSON.stringify(equation.calculate(read.a, read.b, read.c));
	
	test.equals(expect, returned);
	test.done();
};
exports.test_D0 = function(test)
{
	var read =  require('./input-01.json');
	var expect = JSON.stringify({"x": "2"});

	var returned = JSON.stringify(equation.calculate(read.a, read.b, read.c));
	
	test.equals(expect, returned);
	test.done();
};
exports.test_DGreaterThan0 = function(test)
{
	var read =  require('./input-02.json');
	var expect = JSON.stringify({"x1": 4,"x2": -1 });

	var returned = JSON.stringify(equation.calculate(read.a, read.b, read.c));
	
	test.equals(expect, returned);
	test.done();
};
