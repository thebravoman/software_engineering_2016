var equation = require("../modules/equation.js");
var fs = require('fs');


exports.test_none = function(test) {
	var data = JSON.parse(fs.readFile('./none.json'));
	var returnExpected = {
			"x1":"NaN",
			"x2":"NaN",
			"D":0
	};
	
	test.equals(returnExpected, equation.solve(data.a, data.b, data.c));
	test.done();
};

exports.test_any = function(test) {
	var data = JSON.parse(fs.readFile('./any.json'));
	var returnExpected = {
			"x1":"Any",
			"x2":"Any",
			"D":0
	};
	
	test.equals(returnExpected, equation.solve(data.a, data.b, data.c));
};

exports.test_D0 = function(test) {
	var data = JSON.parse(fs.readFile('./input-1.json'));
	var returnExpected = {
			"x": 2,
			"D": 0
	};
	
	test.equals(returnExpected, equation.solve(data.a, data.b, data.c));
};

exports.test_DGreaterThan0 = function(test) {
	var data = JSON.parse(fs.readFile('./input-2.json'));
	var returnExpected = {
			"x1":4,
			"x2":-1,
			"D":25
	};
	
	test.equals(returnExpected, equation.solve(data.a, data.b, data.c));
};