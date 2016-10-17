var fs = require('fs');
var q=require('./input.json');
var x1,x2,d;
var output={};
var a=q["a"], b=q["b"], c=q["c"];
if(a==0 && b==0 && c==0)
{ output={"x1":"unknown",
	  "x2":"unknown",
          "D":"unknown"
	 }
console.log(JSON.stringify(output,"\n",1));	   	
}	
if(a!=0)
{ d=(b*b)-4*(a*c);
	if (d%1!=0) 
		{d = Number(d.toFixed(2));}
	if(d==0)
	{x1=(-b)/(2*a);
		if (x1%1!=0) 
		{x1 = Number(x1.toFixed(2));}		
		
	x2=x1;
	output={"x1":x1,
		"x2":x2,
		"D":d
		}
		console.log(JSON.stringify(output,"\n",1));		
	}
	if(d>0)
	{x1=(-b+Math.sqrt(d))/(2*a)
	x2=(-b-Math.sqrt(d))/(2*a)
	
		if (x1%1!=0) 
		{x1 = Number(x1.toFixed(2));}		
		if (x2%1!=0) 
		{x2 = Number(x2.toFixed(2));}

	output={
		"x1":x2,
		"x2":x1, 
		"D":d
	       }
		console.log(JSON.stringify(output,"\n",1));
	}
	if(d<0)
         { 	output={
	  		"x1":"no answer",
	  		"x2":"no answer",
	  		"D":d
		       }
	  	console.log(JSON.stringify(output,"\n",1));
         }


}

