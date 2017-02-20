var quadratic=require('../module/module.js');
var fs=require("fs");

function parseJSON(file)
{
	return JSON.parse(fs.readFileSync(file,"utf-8"));
}
exports.test_none=function(test)
{
	var data=parseJSON("../input/input-nan.json");
	var output=JSON.stringify({"x1":"Nan", "x2": "Nan"});
	var result=JSON.stringify(quadratic.equation(data.a,data.b,data.c));
	test.equal(output,result);
	test.done();
}
exports.test_any=function(test)
{
	var data=parseJSON("../input/input-any.json");
	var output=JSON.stringify({"x":"Any"});
	var result=JSON.stringify(quadratic.equation(data.a,data.b,data.c));
	test.equal(output,result);
	test.done();
}
exports.test_DGreaterThan0=function(test)
{
	var data=parseJSON("../input/input-2.json");
	var output=JSON.stringify({"x1":-2, "x2": -3});
	var result=JSON.stringify(quadratic.equation(data.a,data.b,data.c));
	test.equal(output,result);
	test.done();
}
exports.test_D0=function(test)
{
	var data=parseJSON("../input/input-1.json");
	var output=JSON.stringify({"x":-1});
	var result=JSON.stringify(quadratic.equation(data.a,data.b,data.c));
	test.equal(output,result);
	test.done();
}
