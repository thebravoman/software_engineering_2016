var input = require('./input.json');
var fs = require('fs');
var a = input.a;
var b = input.b;
var c = input.c;
var sol = {x1:"-", x2:"-",  D:"-"};
if(a==0 && b!=0 && c!=0)
{
	sol.x1 = ((c-2*c)/b);
	sol.x2 = "Empty.";
	sol.D  = "Empty.";
}
else if(a==0 && b==0 && c==0)
{
	sol.x1 = "All x.";
	sol.x2 = "Empty.";
	sol.D  = "Empty.";
}
else if(a!=0 && b!=0 && c!=0)
{
	sol.D  = (b*b)-4*a*c;	 	
	if(sol.D > 0) 
	{   
		sol.x1 = ((b*-1)+Math.sqrt(sol.D))/(2*a);
		sol.x2 = ((b*-1)-Math.sqrt(sol.D))/(2*a);
	}
	else if(sol.D < 0)
	{
		sol.x1 = "Not a real root.";
		sol.x2 = "Not a real root.";  
	}
	else if(sol.D == 0) 
	{
		sol.x1 = (b*-1)/(2*a);
		sol.x2 = "Empty.";   
	}  
}
if (typeof sol.x1 !== 'string' )
	sol.x1 = (sol.x1).toFixed(2)/1;
if (typeof sol.x2 !== 'string' ) 
	sol.x2 = (sol.x2).toFixed(2)/1;  
if (typeof sol.D !== 'string' ) 
	sol.D = (sol.D).toFixed(2)/1;
console.log(JSON.stringify(sol, null, 2));
