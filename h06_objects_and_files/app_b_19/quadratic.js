var fs = require('fs');
	 
   var input = require('./input.json')

   	var a = input.a;
  	var b = input.b;
  	var c = input.c;

     	var r = (b*b) - (4 * a * c);
      var x1 = (-b - Math.sqrt(r)) / (2 * a);
      var x2 = (-b + Math.sqrt(r)) / (2 * a);
      var x;
    
    if (r > 0)
    {

		if(x1 % 1 != 0)
    {

      	x1 = ((-b - Math.sqrt(r)) / (2 * a)).toFixed(2);

		}
    else 
        {

			  x1 = (-b - Math.sqrt(r)) / (2 * a); 

	    	}

      if(x2 % 1 != 0)
      {

		      x2 = ((-b + Math.sqrt(r)) / (2 * a)).toFixed(2);
		
	  	}
    else
      {

		  	  x2 = (-b + Math.sqrt(r)) / (2 * a);

		}

        result = {"x1":x1,"x2":x2,"r":r}
		console.log(JSON.stringify(result, undefined, 1));

    }
    else if (r == 0)
    {

		if(x2 % 1 != 0)
    {

		   x = ((-b) / (2 * a)).toFixed(2);

		}
    else
          {

			  x = (-b) / (2 * a);

}
        result = {"x": x}
		console.log(JSON.stringify(result, undefined, 1));

    }
    else 
    {

        console.log("No real roots");
    
	}
