var fs = require("fs");
var kvadratno = require("../modules/kvadratno.js");

function parseJSON(file)
{
	return JSON.parse(fs.readFileSync(file, "utf-8"));
}

exports.test_none = function(test)
{
	var data = parseJSON(__dirname + "/input-none.json");
	test.equals(JSON.stringify({"x1": "NaN", "x2": "NaN"}), JSON.stringify(kvadratno.solve(data.a, data.b, data.c)));
	
	test.done(); 
};

exports.test_any = function(test)
{	
	var data = parseJSON(__dirname + "/input-any.json");
	test.equals(JSON.stringify({"x":"Any"}), JSON.stringify(kvadratno.solve(data.a, data.b, data.c)));
	
	test.done(); 
};

exports.test_D0 = function(test)
{	
	var data = parseJSON(__dirname + "/input-1.json");
	test.equals(JSON.stringify({"x":-2}), JSON.stringify(kvadratno.solve(data.a, data.b, data.c)));
	
	test.done(); 
};

exports.test_DGreaterThan0 = function(test)
{	
	var data = parseJSON(__dirname + "/input-2.json");
	test.equals(JSON.stringify({"x1": -1, "x2": 4}), JSON.stringify(kvadratno.solve(data.a, data.b, data.c)));
	
	test.done(); 
};