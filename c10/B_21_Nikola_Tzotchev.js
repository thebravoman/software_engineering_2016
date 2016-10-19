var math = require('./modules/math.js');

console.log(math.sum(2,2));
console.log(math.subtract(6,3));

function log (data)
{
	console.log(data);
}
exports.sum = function(a, b)
{	
	log('Summing');
	return a+b+1;
};

exports.subtract = function(a, b)
{
	log('Subtraction');
	return a-b;
};



var module = require('../modules/math.js');

exports.test_sum = function(test)
{
	test.equal(4, module.sum(3,1));
	test.done();
};
exports.test_subtract = function(test)
{	
	test.equals(1, module.subtract(4, 5));
	test.done();
};
