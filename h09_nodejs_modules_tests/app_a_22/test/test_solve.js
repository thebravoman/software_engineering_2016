var file = require('fs');
var solve = require('../modules/solve.js');
var jsonfile;
var result;
var expectation;

function parsing(jsonfile) {
	var values = file.readFileSync(jsonfile);
	var parse = JSON.parse(values);
	return parse;
}

exports.test_none = function(test) {
	jsonfile = parsing("input-none.json");
	expectation = {"x1": "NaN","x2": "NaN"};
	result = solve.solve(jsonfile.a, jsonfile.b, jsonfile.c);
	
	result = JSON.stringify(result, undefined, 1);
	expectation = JSON.stringify(expectation, undefined, 1);
	
	test.equals(result, expectation);
	test.done();
};

exports.test_any = function(test) {
	jsonfile = parsing("input-any.json");
	expectation = {"x": "Any"};
	result = solve.solve(jsonfile.a, jsonfile.b, jsonfile.c);
	
	result = JSON.stringify(result, undefined, 1);
	expectation = JSON.stringify(expectation, undefined, 1);
	
	test.equals(result, expectation);
	test.done();
};

exports.test_D0 = function(test) {
	jsonfile = parsing("input-1.json");
	result = solve.solve(jsonfile.a, jsonfile.b, jsonfile.c);
	expectation  = {"x": -2};

	result = JSON.stringify(result, undefined, 1);
	expectation = JSON.stringify(expectation, undefined, 1);
	
	test.equals(result, expectation);
	test.done();
};

exports.test_DGreaterThan0 = function(test) {
	jsonfile = parsing("input-2.json");
	result = solve.solve(jsonfile.a, jsonfile.b, jsonfile.c);
	expectation = {"x1": -1,"x2": -4};
	
	
	result = JSON.stringify(result, undefined, 1);
	expectation = JSON.stringify(expectation, undefined, 1);
	
	test.equals(result, expectation);
	test.done();
};
