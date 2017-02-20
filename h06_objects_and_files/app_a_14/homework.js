const fs = require("fs");
const quadratic = require("./modules/quadratic");

fs.readFile("./input.json", "utf-8", function(err, data){
	if(err){
		console.log(err);
		return;
	}
	
	let args = JSON.parse(data);
	
	quadratic.prettyPrint(quadratic.solve(args.a, args.b, args.c));
});
