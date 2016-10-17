const fs=require("fs");
var digits_from_file;
var inputs;
numbers = fs.readFileSync("input.json");
inputs = JSON.parse(numbers);
var a=inputs.a; 
var b=inputs.b;
var c=inputs.c;
var print;
if(a==0)
	{
	if(b!=0)
		{
		var x;
		x=-c/b;
		if(x%1!=0)
			{
			x=x.toFixed(2)/1;
			}	
		print={
		"x":x					
		}
		console.log(JSON.stringify(print,null,2));
		}
	}
else if(b==0 && c==0 )
	{
		console.log("All integers are 0.Therefore there are no roots.");
	}
else
	{
	var x1,x2;
	var D;
	D=b*b - 4*a*c;
	x1=(-b+Math.sqrt(D))/2/a;
	x2=(-b-Math.sqrt(D))/2/a;
	if(x1%1!=0)
	{
		x1=x1.toFixed(2)/1;
	}
		if(x2%1!=0)
	{
		x2=x2.toFixed(2)/1;
	}
	print={
	"x1":x1,
	"x2":x2,
	"D":D
	}
	console.log(JSON.stringify(print,null,2));
}
