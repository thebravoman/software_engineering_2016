var quadratic = require('./modules/quadratic.js');
var fs = require('fs');

if(fs.exists("./input.json", function(exists){
	if(exists){
		fs.readFile("./input.json", function(error, data){
			var input = JSON.parse(data);
			
			var output = quadratic.solve(input.a, input.b, input.c);
			console.log(JSON.stringify(output, null, 1));
		});
	}
}));