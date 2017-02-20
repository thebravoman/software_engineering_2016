var fs = require('fs');
var equation = require('../modules/equation.js');	

exports.test_none = function(test) {
	
	var input = require('./input-nan.json');
	
	var expectedResult = JSON.stringify({"x1": "NaN","x2": "NaN"});
	
	var returnedResult = JSON.stringify(equation.solve(input.a, input.b, input.c));
	
	test.equals(expectedResult, returnedResult);
	test.done();
};

exports.test_any = function(test) {
	
	var input = require('./input-any.json');
	var expectedResult = JSON.stringify({"x": "Any"});

	var returnedResult = JSON.stringify(equation.solve(input.a, input.b, input.c));
	
	test.equals(expectedResult, returnedResult);
	test.done();
};

exports.test_D0 = function(test) {
	
	var input = require('./input-1.json');
	var expectedResult = JSON.stringify({"x": "-0.67"});

	var returnedResult = JSON.stringify(equation.solve(input.a, input.b, input.c));
	
	test.equals(expectedResult, returnedResult);
	test.done();
};

exports.test_DGreaterThan0 = function(test)
{
	var input = require('./input-2.json');
	var expectedResult = JSON.stringify({"x1": 4,"x2": -1 });

	var returnedResult = JSON.stringify(equation.solve(input.a, input.b, input.c));
	
	test.equals(expectedResult, returnedResult);
	test.done();
};
