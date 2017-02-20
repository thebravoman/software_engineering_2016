var solve_quad = require('../Modules/quad.js');
var fs = require ('fs');

exports.test_any = function(test){
	var any_input = require('any_input.json');
	test.equals(JSON.stringify({"x":"Any"}),JSON.stringify(solve_quad.fujeclypse(any_input.a,any_input.b,any_input.c)));
	test.done()
}

exports.test_none = function(test){
	var none_input = require('none_input.json');
	test.equals(JSON.stringify({"x1":"NaN", "x2":"NaN"}),JSON.stringify(solve_quad.fujeclypse(none_input.a,none_input.b,none_input.c)));
	test.done()
}

exports.test_x1 = function(test){
	var x1_input = require('x1_input.json');
	test.equals(JSON.stringify({"x":"0,5"}),JSON.stringify(solve_quad.fujeclypse(x1_input.a,x1_input.b,x1_input.c)));
	test.done()
}

exports.test_x2 = function(test){
	var x2_input = require('x2_input.json');
	test.equals(JSON.stringify({"x1":"0,14", "x2":"-1"}),JSON.stringify(solve_quad.fujeclypse(x2_input.a,x2_input.b,x2_input.c)));
	test.done()
}

