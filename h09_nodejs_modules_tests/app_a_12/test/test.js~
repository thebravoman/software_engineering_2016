var fs = require('fs');
var solve = require ('../modules/solve');

exports.test_none = function(test) {
	var contents = fs.readFileSync('input-nan.json', 'utf8');
	var object =  JSON.parse(contents);
	var result = solve.solve(object.a, object.b, object.c);
	test.equals(JSON.stringify({x1: "NaN", x2:"NaN"}), JSON.stringify(result));
	test.done();
}

exports.test_D0 = function(test) {
	var contents = fs.readFileSync('input-1.json', 'utf8');
	var object =  JSON.parse(contents);
	var result = solve.solve(object.a, object.b, object.c);
	test.equals(JSON.stringify({x: "-2.00"}), JSON.stringify(result));
	test.done();
}

exports.test_DGreaterThan0 = function(test) {
	var contents = fs.readFileSync('input-2.json', 'utf8');
	var object =  JSON.parse(contents);
	var result = solve.solve(object.a, object.b, object.c);
	test.equals(JSON.stringify({x1: "0.30", x2: "-0.62"}), JSON.stringify(result));
	test.done();
}

exports.test_any = function(test) {
	var contents = fs.readFileSync('input-any.json', 'utf8');
	var object =  JSON.parse(contents);
	var result = solve.solve(object.a, object.b, object.c);
	test.equals(JSON.stringify({x: "Any"}), JSON.stringify(result));
	test.done();
}
