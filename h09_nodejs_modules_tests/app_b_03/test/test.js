fs = require('fs');
quad = require('../modules/quadratic.js');

exports.test_none = function(test) {
	//read a,b,c from input-none.json
	var  inputfile = JSON.parse(fs.readFileSync("input-none.json"));
    var solution = quad.solve(inputfile.a, inputfile.b, inputfile.c);
    if(isNaN(solution.x1))
    	test.deepEqual( 2 , 2 );
    else
    	test.deepEqual( 2 , 3 );
    test.done();
}

exports.test_any = function(test) {
    //read a,b,c from input-any.json
    var  inputfile = JSON.parse(fs.readFileSync("input-any.json"));
    var expected = {};
    var solution = quad.solve(inputfile.a, inputfile.b, inputfile.c );
    expected.x = "ANY";

    test.deepEqual( solution , expected );
    test.done();
};

exports.test_D0 = function(test) {
	//read a,b,c from input-1.json
	var  inputfile = JSON.parse(fs.readFileSync("input-1.json"));
    var expected = {};
    var solution = quad.solve(inputfile.a, inputfile.b, inputfile.c );
    expected.x = -1;
    
    
	test.deepEqual(solution, expected);
	test.done();
};

exports.test_real = function(test) {
	//read a,b,c from input-2.json
	var  inputfile = JSON.parse(fs.readFileSync("input-2.json"));
    var expected = {};
    var solution = quad.solve(inputfile.a, inputfile.b, inputfile.c );
    expected.x1 = 1;
    expected.x2 = -0.5;
    
    
	test.deepEqual(solution, expected);
	test.done();
};


