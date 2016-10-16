const fs = require("fs");

fs.readFile("./input.json", "utf-8", function(err, data){
	if(err){
		console.log(err);
		return;
	}
	
	const args = JSON.parse(data);
	
	if(args.a == 0){
		if(args.b==0 && args.c == 0){
			let output = {"x1":undefined, "x2":undefined, "D":undefined}
			console.log(JSON.stringify(output, null, 2));
		}
		else if(b!=0){
			let x = -c/b;
			let output = {"x1":(x % 1 != 0 ? x.toFixed(1) : x), "x2":(x % 1 != 0 ? x.toFixed(1) : x), "D":undefined}
			console.log(JSON.stringify(output, null, 2));
		}
	}
	else{
		let d = Math.pow(args.b, 2) - (4 * args.a * args.c);
		
		if(d>0){
			let x1, x2;
			x1 = (-args.b + Math.sqrt(d))/(2*args.a);
			x2 = (-args.b - Math.sqrt(d))/(2*args.a);
			let output = {"x1":(x1 % 1 != 0 ? x1.toFixed(1) : x1), "x2":(x2 % 1 != 0 ? x2.toFixed(2) : x2), "D":d}
			console.log(JSON.stringify(output, null, 2));
		}
		else if (d==0){
			let x;
			x = -b/(2*a);
			let output = {"x1":(x % 1 != 0 ? x.toFixed(1) : x), "x2":(x % 1 != 0 ? x.toFixed(1) : x), "d":d};
			console.log(JSON.stringify(output, null, 2));
		}
	}
})
