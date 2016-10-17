const fs = require('fs');

var read = fs.readFileSync('input.json', 'utf8');
var index = require('./input.json');

var D;
var x1;
var x2;
var print={};

if (index.a==0 && index.b==0)
{
	print="#"
	
	console.log(print);
}

if (index.a==0 && index.b!=0)
{
	x1=(-c)/b
	print = {"x1":x1}; 
	console.log(print);
}

D=(index.b*index.b)+(-4*index.a*index.c);

if (D<0 && index.a!=0)
{
	print ="NOT MENTIONED"
	console.log(print);
}

if (D>0 && index.a!=0)
{
	discr=Math.sqrt(D)
	x1=(-index.b+discr)/(2*index.a)
	x2=(-index.b+(-discr))/(2*index.a)

	print = {"x2":x2, "x1":x1, "D":D};
	print=JSON.stringify(print,"\n",1);
	console.log(print);
}

if (D==0 && index.a!=0)
{
	x1=(-b)/(2*a)
	print = {"x1":x1}; 
	console.log(print);
}
