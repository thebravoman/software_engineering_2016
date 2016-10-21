function parse(json)
{
	var fs = require("fs");
	
	var contents = fs.readFileSync(json);
	
	var json = JSON.parse(contents);
	
	return json;
}

var module = require('../modules/solve.js');

exports.test_none = function(test)
{
	var json;
	
	json = parse("input-none.json");
	
	var expResult = {};
	
	expResult = 
	{
		"x1": "NaN",
		"x2": "NaN"
	}
	var output = {};
	
	output = module.solve(json.a, json.b, json.c);
	
	output = JSON.stringify(output, undefined, 1);
	expResult = JSON.stringify(expResult, undefined, 1)
	
	test.equals(expResult, output);
	test.done();
}


exports.test_any = function(test)
{
	var json;
	
	json = parse("input-any.json");
	
	var expResult = {};
	
	expResult = 
	{
		"x": "Any"
	}
	var output = {};
	
	output = module.solve(json.a, json.b, json.c);
	
	output = JSON.stringify(output, undefined, 1);
	expResult = JSON.stringify(expResult, undefined, 1)
	
	test.equals(expResult, output);
	test.done();
}

exports.test_D0 = function(test)
{
	var json;
	
	json = parse("input-1.json");
	
	var expResult = {};
	
	expResult = 
	{
		"x": -2
	}
	
	var output = {};
	
	output = module.solve(json.a, json.b, json.c);
	
	output = JSON.stringify(output, undefined, 1);
	expResult = JSON.stringify(expResult, undefined, 1)
	
	test.equals(expResult, output);
	test.done();
}

exports.test_DGreaterThan0 = function(test)
{
	var json;
	
	json = parse("input-2.json");
	
	var expResult = {};
	
	expResult = 
	{
		 "x1": 0.3,
		 "x2": -0.62
	}

	var output = {};
	
	output = module.solve(json.a, json.b, json.c);
	
	output = JSON.stringify(output, undefined, 1);
	expResult = JSON.stringify(expResult, undefined, 1)
	
	test.equals(expResult, output);
	test.done();
}
