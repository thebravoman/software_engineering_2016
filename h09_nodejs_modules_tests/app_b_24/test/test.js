var mod = require("../modules/mod1.js");
var fs = require ('fs');
var input_any = fs.readFileSync('input-any.json');
var input_1 = fs.readFileSync('input-1.json');
var input_2 = fs.readFileSync('input-2.json');
var input_nan = fs.readFileSync('input-nan.json');
exports.test_any = function(test){
	var final = new Object;
	var parce = JSON.parse(input_any);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x = "Any";
	var actual = mod.equation(a,b,c)
	test.equal(JSON.stringify(final),JSON.stringify(actual));
	test.done();
}
exports.test_1 = function(test){
	var final = new Object;
	var parce = JSON.parse(input_1);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x = -3;
	var actual = mod.equation(a,b,c)
	test.equal(JSON.stringify(final),JSON.stringify(actual));
	test.done();
}
exports.test_2 = function(test){
	var final = new Object;
	var parce = JSON.parse(input_2);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x1 = -2;
	final.x2 = 1;
	var actual = mod.equation(a,b,c)
	test.equal(JSON.stringify(final),JSON.stringify(actual));
	test.done();
}
exports.test_nan = function(test){
	var final = new Object;
	var parce = JSON.parse(input_nan);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x1 = "NaN";
	final.x2 = "NaN";
	var actual = mod.equation(a,b,c)
	test.equal(JSON.stringify(final),JSON.stringify(actual));
	test.done();
}
