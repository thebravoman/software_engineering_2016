const fs = require("fs");
const quadratic = require("../modules/quadratic.js");

function parseJSON(file){
	return JSON.parse(fs.readFileSync(file, "utf-8"));
}

exports.test_none = function(test){
	
	let data = parseJSON("./input-nan.json");
	let expected = JSON.stringify({"x1": "NaN", "x2": "NaN"});
	let result = JSON.stringify(quadratic.solve(data.a, data.b, data.c));
	test.equals(expected, result);
	
	test.done(); 
};
exports.test_any = function(test){
	
	let data = parseJSON("./input-any.json");
	let expected = JSON.stringify({"x":"Any"});
	let result = JSON.stringify(quadratic.solve(data.a, data.b, data.c));
	test.equals(expected, result);
	
	test.done(); 
};
exports.test_D0 = function(test){
	
	let data = parseJSON("./input-1.json");
	let expected = JSON.stringify({"x":2});
	let result = JSON.stringify(quadratic.solve(data.a, data.b, data.c));
	test.equals(expected, result);
	
	test.done(); 
};
exports.test_DGreaterThan0 = function(test){
	
	let data = parseJSON("./input-2.json");
	let expected = JSON.stringify({"x1": 1, "x2": -4});
	let result = JSON.stringify(quadratic.solve(data.a, data.b, data.c));
	test.equals(expected, result);
	
	test.done(); 
};