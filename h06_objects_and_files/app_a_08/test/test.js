var quadratic=require('./modules/module.js');
var fs=require("fs");
var input_any=fs.readFileSync('./input/input-any.json');
var input_2=fs.readFileSync('./input/input-2.json');
var input_1=fs.readFileSync('./input/input-1.json');
var input_nan=fs.readFileSync('./input/input-nan.json');
var result=new Object;

exports.test_none=function(test)
{
	var par=JSON.parse(input_nan);
	var a=par.a;
	var b=par.b;
	var c=par.c;
	result.x1="NaN";
	result.x2="NaN";
	var final=result.to_json;
	test.equal(final,quadratic.equation(a,b,c));
	test.done();
}
exports.test_any=function(test)
{
	var par=JSON.parse(input_any);
	var a=par.a;
	var b=par.b;
	var c=par.c;
	result.x="Any";
	var final=result.to_json;
	test.equal(final,quadratic.equation(a,b,c));
	test.done();
}
exports.test_DGreaterThan0=function(test)
{
	var par=JSON.parse(input_2);
	var a=par.a;
	var b=par.b;
	var c=par.c;
	result.x1=3;
	result.x2=2;
	var final=result.to_json;
	test.equal(final,quadratic.equation(a,b,c));
	test.done();
}
exports.test_D0=function(test)
{
	var par=JSON.parse(input_1);
	var a=par.a;
	var b=par.b;
	var c=par.c;
	result.x=1;
	var final=result.to_json;
	test.equal(final,quadratic.equation(a,b,c));
	test.done();
}
