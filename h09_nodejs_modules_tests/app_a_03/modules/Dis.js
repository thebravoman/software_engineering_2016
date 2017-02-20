exports.solve = function(a, b, c)
{
	var x1,x2,d;
	var output={};
	if(a==0 && b==0 && c==0)
	{ output={"x":"any"
		 }
		   	
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
		output={"x":x1,
			}
					
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
			
		       }
			
		}
		if(d<0)
	         { 	output={
	        		 "x1":"NaN",
	        		 "x2":"NaN"		  		
			           }
		  	
	         }


	}
return output;
};