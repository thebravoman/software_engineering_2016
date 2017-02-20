var equation = require('./modules/equation.js');
var fs = require('fs');

fs.readFile("./input.json", function(error, data){
	if(error) {throw error;}
	
	var inputData = JSON.parse(data);
	
	var object = equation.solve(inputData.a, inputData.b, inputData.c);
	
	console.log(JSON.stringify(object, null, 1));
});