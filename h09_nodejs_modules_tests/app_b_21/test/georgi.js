/**
 * http://usejsdoc.org/
 */
var module1 = require('../modules/func.js');
var fs = require('fs');
exports.test_D0 = function(test)
{
	var check = "imput-1.json";
	var  Expect = JSON.parse(fs.readFileSync(check));
	test.deepEqual( { x: -1 } , module1.solve(Expect.a,Expect.b,Expect.c));
	test.done();
};

exports.test_real = function(test)
{
	var check = "imput-2.json";
	var  Expect = JSON.parse(fs.readFileSync(check));
	test.deepEqual({ x1: 1, x2: -0.5} , module1.solve(Expect.a, Expect.b, Expect.c));
	test.done();
};
exports.test_NaN = function(test)
{
	var check = "imput-nan.json";
	var checker_for_NaN = {};
	var Expect = JSON.parse(fs.readFileSync(check));
	checker_for_NaN = module1.solve(Expect.a, Expect.b, Expect.c);
	test.equal(true , isNaN(checker_for_NaN.x1));
	test.done();		
};
exports.test_any = function(test)
{
	var check = "imput-any.json";
	var Expect = JSON.parse(fs.readFileSync(check));
	test.deepEqual( { x: 'ANY' } , module1.solve(Expect.a, Expect.b, Expect.c));
	test.done();		
};
