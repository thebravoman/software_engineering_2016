var module = require('../modules/quadratic.js');

var oneX = require('../input/input-1.json');
var twoX = require('../input/input-2.json');
var anyX = require('../input/input-any.json');
var noneX = require('../input/input-nan.json');

exports.test_none = function(test){
    test.equals(JSON.stringify({"x1":"NaN","x2":"NaN"}), 
    		JSON.stringify(module.solve(noneX.a,noneX.b,noneX.c)));
    test.done();
};

exports.test_any = function(test){
	test.equals(JSON.stringify({"x":"Any"}), 
			JSON.stringify(module.solve(anyX.a,anyX.b,anyX.c)));
    test.done();
};


exports.test_D0 = function(test){
	test.equals(JSON.stringify({"x":-1}), 
			JSON.stringify(module.solve(oneX.a,oneX.b,oneX.c)));
    test.done();
};

exports.test_DGreaterThan0 = function(test){
	test.equals(JSON.stringify({"x1":1,"x2":-4}), 
			JSON.stringify(module.solve(twoX.a,twoX.b,twoX.c)));
    test.done();
};