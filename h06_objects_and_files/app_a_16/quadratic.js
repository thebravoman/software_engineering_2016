const fs = require('fs');

var fileinput = fs.readFileSync("input.json");
var input = JSON.parse(fileinput);

var x1 = 0;
var x2 = 0;
var discriminant = ((input.b*input.b) - 4*input.a*input.c);


discriminant = Math.sqrt(discriminant);
x1 = (-(input.b) + discriminant) / (2*input.a);
if(x1 % 1 !== 0)
{
	 x1=(x1.toFixed(2))/1;
}
x2 = (-(input.b) - discriminant) / (2*input.a);
if(x2 % 1 !== 0)
{
	 x2=(x2.toFixed(2))/1;
}
if(discriminant % 1 !== 0)
{
	discriminant=(discriminant.toFixed(2))/1;
}
var output = 
	{
		"x1":x1,
		"x2":x2,
		"D":discriminant
	};

console.log(JSON.stringify(output,"\n",1));