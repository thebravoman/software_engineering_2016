var math = require('../modules/math.js');


exports.test_any = function(test) {
	
	var input = require('./files_to_use/case_any.json');
	test.equal(({"x": "Any"}).to_json, math.solve(input.a, input.b, input.c));
	
	test.done();
};

exports.test_none = function(test)
{
	var input = require('./files_to_use/case_nan.json');

    test.equal(({
    "x1": "NaN",
    "x2": "NaN"
	}).to_json, math.solve(input.a, input.b, input.c));
    
    test.done();
};

exports.test_D0 = function(test)
{
	var input = require('./files_to_use/case_has_1.json');

    test.equal(({
  	"x": -1
	}).to_json, math.solve(input.a, input.b, input.c));

    test.done();
};

exports.test_DGreaterThan0 = function(test)
{
	var input = require('./files_to_use/case_has_2.json');

    test.equal(({
    "x1": -0.15,
    "x2": -3.35
	}).to_json, math.solve(input.a, input.b, input.c));
    
    test.done();
}
