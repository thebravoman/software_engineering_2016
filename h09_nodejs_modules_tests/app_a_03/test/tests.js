var dis= require('../modules/Dis.js');
var fs = require('fs');



exports.test_none = function(test)
{var q=require('./input-none.json');
var a=q["a"], b=q["b"], c=q["c"];
 var expected_output=
		{
		"x1":"NaN",
  		"x2":"NaN"
		}
	 var output= dis.solve(a,b,c);
 	output = JSON.stringify(output, "\n", 1);
	expected_output = JSON.stringify(expected_output, "\n", 1);
	test.equals(expected_output,output);
	test.done();	
};

exports.test_any = function(test)
{var q=require('./intput-any.json');
var a=q["a"], b=q["b"], c=q["c"];
var expected_output=
	{"x":"any"}
var output=dis.solve(a,b,c);
output = JSON.stringify(output, "\n", 1);
expected_output = JSON.stringify(expected_output, "\n", 1);
test.equals(expected_output,output);
test.done();	
};
exports.test_D0 = function(test)
{var q=require('./input-1.json');
var a=q["a"], b=q["b"], c=q["c"];
var expected_output=
{"x":-1}	
var output=dis.solve(a,b,c);
output = JSON.stringify(output, "\n", 1);
expected_output = JSON.stringify(expected_output, "\n", 1);
test.equals(expected_output,output);
test.done();	
};
exports.test_DGreaterThan0 = function(test)
{var q=require('./input-2.json');
var a=q["a"], b=q["b"], c=q["c"];
var expected_output=
	{
		"x1":3,
		"x2":-1,		
	}
var output=dis.solve(a,b,c);
output = JSON.stringify(output, "\n", 1);
expected_output = JSON.stringify(expected_output, "\n", 1);
test.equals(expected_output,output);
test.done();		
};
