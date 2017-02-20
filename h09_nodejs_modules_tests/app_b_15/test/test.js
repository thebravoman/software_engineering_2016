
var modules = require('../modules/functions.js');
var none = require('./input-none.json');
var any = require('./input-any.json');
var oneRoot = require('./input-1.json');
var twoRoots = require('./input-2.json');

exports.test_none = function(test) {
   
    test.equals(JSON.stringify({"x1": "NaN", "x2": "NaN"}), JSON.stringify(modules.solveMyProblem(none.a, none.b, none.c)));
    test.done();
};

exports.test_any = function(test) {

    test.equals(JSON.stringify({"x": "Any"}), JSON.stringify(modules.solveMyProblem(any.a, any.b, any.c)));
	test.done();
};

exports.test_D0 = function(test)
{
 
    test.equals(JSON.stringify({ "x": -1 }), JSON.stringify(modules.solveMyProblem(oneRoot.a, oneRoot.b, oneRoot.c)));
    test.done();
};

exports.test_DGreaterThan0 = function(test)
{

    test.equals(JSON.stringify({"x1":1.3, "x2":-2.3}), JSON.stringify(modules.solveMyProblem(twoRoots.a, twoRoots.b, twoRoots.c)));
	test.done();
};
