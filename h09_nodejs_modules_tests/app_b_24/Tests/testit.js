var mod = require("../modules/mod1.js");
var fs = require ('fs');
var input_any = fs.readFileSync('./Tests/input_files/input-any.json');
var input_1 = fs.readFileSync('./Tests/input_files/input-1.json');
var input_2 = fs.readFileSync('./Tests/input_files/input-2.json');
var input_nan = fs.readFileSync('./Tests/input_files/input-nan.json');
var final = new Object;
exports.test_any = function(test){
	var parce = JSON.parse(input_any);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x = "Any";
	var fine = final.to_json;
	test.equal(fine,mod.equation(a,b,c));
	test.done();
}
exports.test_1 = function(test){
	var parce = JSON.parse(input_1);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x = -3;
	var fine = final.to_json;
	test.equal(fine,mod.equation(a,b,c));
	test.done();
}
exports.test_2 = function(test){
	var parce = JSON.parse(input_2);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x1 = 2;
	final.x2 = -4;
	var fine = final.to_json;
	test.equal(fine,mod.equation(a,b,c))
	test.done();
}
exports.test_nan = function(test){
	var parce = JSON.parse(input_nan);
	var a = parce.a;
	var b = parce.b;
	var c = parce.c;
	final.x1 = "NaN";
	final.x2 = "NaN";
	var fine = final.to_json;
	test.equal(fine,mod.equation(a,b,c));
	test.done();
}
