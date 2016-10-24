var module = require('../modules/module.js');


exports.test_any = function(test) {
	
	var any = require('./input-any.json');

	test.equal(({"x": "Any"}).to_json, module.solve(any.a, any.b, any.c));
	
	test.done();
};

exports.test_none = function(test)
{
	var nan = require('./input-nan.json');

    test.equal(({
    "x1": "NaN",
    "x2": "NaN"
	}).to_json, module.solve(nan.a, nan.b, nan.c));
    
    test.done();
};

exports.test_D0 = function(test)
{
	var x = require('./input-1.json');

    test.equal(({
  	"x":-1
	}).to_json, module.solve(x.a, x.b, x.c));

    test.done();
};

exports.test_DGreaterThan0 = function(test)
{
	var x2 = require('./input-2.json');

    test.equal(({
    "x1":-1,
    "x2":1.5
	}).to_json, module.solve(x2.a, x2.b, x2.c));
    
    test.done();
};
