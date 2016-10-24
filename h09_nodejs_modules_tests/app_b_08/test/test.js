var equation = require("../modules/equation.js");
var fs = require('fs');


exports.test_none = function(test) {
	var data = require('./none.json');
	
	test.equals(JSON.stringify({"x1":"NaN","x2":"NaN"}), JSON.stringify(equation.solve(data.a, data.b, data.c)));
	test.done();
};

exports.test_any = function(test) {
	var data = require('./any.json');
	
	test.equals(JSON.stringify({"x":"Any"}), JSON.stringify(equation.solve(data.a, data.b, data.c)));
	test.done();
};

exports.test_D0 = function(test) {
	var data = require('./input-1.json');
	
	test.equals(JSON.stringify({"x":2}), JSON.stringify(equation.solve(data.a, data.b, data.c)));
	test.done();
};

exports.test_DGreaterThan0 = function(test) {
	var data = require('./input-2.json');

	test.equals(JSON.stringify({"x1":4,"x2":-1}), JSON.stringify(equation.solve(data.a, data.b, data.c)));
	test.done();
};
