var fs = require("fs");
var read = fs.readFileSync('input.json');
var parce = JSON.parse(read);
var ss = JSON.stringify(parce,null,2);
var a = parce.a;
var b = parce.b;
var c = parce.c;
var D = 0;
var final = new Object;
if (a == 0 && b != 0){
	var x1 = +(c/b).toFixed(2);
	final.x = x1;
	console.log(JSON.stringify(final,null,2));
}else if (a != 0){
 	D = b*b - 4*a*c;
	if (D == 0){
    	var x = +(-b/2/a).toFixed(2);
		if (x == -0){
			var x = +Math.abs(x);
			final.x1 = x;
			final.x2 = x;
			final.D = D;
    		console.log(JSON.stringify(final ,null,2));
		}
		else{ 
			final.x1 = x;
			final.x2 = x;	
			final.D = D; 
			console.log(JSON.stringify(final ,null,2));
		}
	}else if (D > 0){
     	var x1 = +((-b-Math.sqrt(D))/2/a).toFixed(2);
     	var x2 = +((-b+Math.sqrt(D))/2/a).toFixed(2);
     	final.x1 = x1;
     	final.x2 = x2;
     	final.D = D;
		console.log(JSON.stringify(final,null,2));
	}
}
if (b == 0 && a == 0 && c == 0){
	console.log("#");	
}
