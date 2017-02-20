var fs = require('fs');
var equation = require('./modules/equation.js');

fs.readFile("./input.json" , function(err, result){
    
	if (err) {
		console.error(err);
	}
	
	var data = JSON.parse(result);
	
	var result = equation.solve(data.a, data.b, data.c);
	
	console.log(JSON.stringify(result, null, 1));
	
});
