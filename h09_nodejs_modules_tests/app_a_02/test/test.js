var solve = require('../modules/solve.js');
var none = require('../input/input-none.json');
var any = require('../input/input-any.json');
var one = require('../input/input-1.json');
var two = require('../input/input-2.json');

exports.test_none = function(test) {
   	var a = none.a
  	var b = none.b
   	var c = none.c
    	test.equals({"x1":"NaN","x2":"NaN"}), solve.solve(a, b, c) );
    	test.done();
};

exports.test_any = function(test) {
	var a = any.a
  	var b = any.b
   	var c = any.c
    	test.equals({"x":"Any"}), solve.solve(a, b, c) );
    	test.done();
};

exports.test_D0 = function(test)
{
	var a = one.a
  	var b = one.b
   	var c = one.c
	test.equals({"x":"1.5"}), solve.solve(a, b, c) );
    	test.done();
};

exports.test_DGreaterThan0  = function(test)
{
    	var a = two.a
  	var b = two.b
   	var c = two.c
    	test.equals({"x1":"-0.5","x2":"2"}), solve.solve(a, b, c) );
    	test.done();
};
