const fs = require('fs');
var p = require('./input.json');
var x1,x2;
var D=(p.b*p.b)-4*(p.a*p.c);
var out={};
if(p.a==0)
{
	x1=(-c)/b;
	x1=Math.round(x1*100)/100;
	x2=x1;
	out={	"x1":x2,	"x2":x1};
	out=JSON.stringify(out,"\n",1);
	console.log(out);
}
else
{	if (D>=0)
	{	
		D=Math.sqrt(D);
		x1=(-p.b+D)/(2*p.a);
		x2=(-p.b-D)/(2*p.a);
		x1=Math.round(x1*100)/100;
		x2=Math.round(x2*100)/100;
		out={	"x1":x2,	"x2":x1,	"D":D};
		out=JSON.stringify(out,"\n",1);
		console.log(out);

	}
	else
	{
		out={"D":D};
		out=JSON.stringify(out,"\n",1);
		console.log(out);
	}
}
