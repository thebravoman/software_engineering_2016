var module = require('../module/solution.js');


	exports.test_none = function(test)
	{
		var input = require('./input_files/input_nan.json');
		test.equal(({
		    "x1": "NaN",
		    "x2": "NaN"
			}).to_json, module.solve(input.a, input.b, input.c));
		    
		test.done();
	};

	exports.test_any = function(test)
	{

		var input = require('./input_files/input_any.json');
		test.equal(({"x": "Any"}).to_json, module.solve(input.a, input.b, input.c));
		
		test.done();
	};

	exports.test_D0 = function(test)
	{
		var input = require('./input_files/input-1.json');

	    test.equal(({
	  	"x": -1
		}).to_json, module.solve(input.a, input.b, input.c));

	test.done();
	};
	
	exports.test_DGreaterThan0 = function(test)
	{
		var input = require('./input_files/input-2.json');

	    test.equal(({
	    "x1": -0.2,
	    "x2": -1
		}).to_json, module.solve(input.a, input.b, input.c));
	    
	    test.done();
	};
