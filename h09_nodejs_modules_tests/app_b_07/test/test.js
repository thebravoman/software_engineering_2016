var math = require('../modules/math.js');
var fs = require('fs');

var none = fs.readFileSync('./test/input-none.json');
var any = fs.readFileSync('./test/input-any.json');
var i_1 = fs.readFileSync('./test/input-1.json');
var i_2 = fs.readFileSync('./test/input-2.json');

var test_answer = new Object;

exports.test_none = function(test)
{
		delete test_answer.x1;
		delete test_answer.x2;
		delete test_answer.x;
		test_answer.x1 = "NaN";
		test_answer.x2 = "NaN";
		var obj = JSON.parse(none);
		test.equals( math.solve(obj.a, obj.b, obj.c), JSON.stringify(test_answer, null , 2));
		test.done();
};

exports.test_any = function(test)
{
		delete test_answer.x1;
		delete test_answer.x2;
		delete test_answer.x;
		test_answer.x = "Any";
		var obj = JSON.parse(any);
		test.equals( math.solve(obj.a, obj.b, obj.c), JSON.stringify(test_answer, null , 2));
		test.done();
};

exports.test_D0 = function(test)
{
		delete test_answer.x1;
		delete test_answer.x2;
		delete test_answer.x;
		test_answer.x = -3;
		var obj = JSON.parse(i_1);
		test.equals( math.solve(obj.a, obj.b, obj.c), JSON.stringify(test_answer, null , 2));
		test.done();
};

exports.test_DGreaterThan0 = function(test)
{
		delete test_answer.x1;
		delete test_answer.x2;
		delete test_answer.x;
		test_answer.x1 = 2;
		test_answer.x2 = 1;
		var obj = JSON.parse(i_2);
		test.equals( math.solve(obj.a, obj.b, obj.c), JSON.stringify(test_answer, null , 2));
		test.done();
};
