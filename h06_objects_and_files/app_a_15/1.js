const fs = require('fs');
var contents = fs.readFileSync("input.json");
var input = JSON.parse(contents);

var d=((input.b*input.b)-(4*input.a*input.c));
var x1=(-(input.b) + Math.sqrt(d)) / (2*input.a);
var x2=(-(input.b) - Math.sqrt(d)) / (2*input.a);

if (x1%1 != 0){
	x1 = Number(x1.toFixed(2));
}
	
if (x2%1 != 0){
	x2 = Number(x2.toFixed(2));
}

var output = {
	"x1":x1,
	"x2":x2, 
	"D":d
}
console.log(JSON.stringify(output,"\n",1));
