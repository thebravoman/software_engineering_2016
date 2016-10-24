exports.solve = function(a, b , c)
{

var x = 0;
var x_1 = 0;
var x_2 = 0;
var d = 0;
var result;

if  (a == 0 &&	b == 0 && c == 0 ) {
  result = {
    "x": "Any"
    }
  return result;
}else{

  if (a == 0){
  		x = (-c)/b;
  			if ( x % 1 != 0 ){
  				  x = Number(x.toFixed(2));
          }
          result = {
          "x":x
          }
          return result;
  		    }
  		}else{
      		//d = b*b - 4*a*c;
      	if (d == 0){
          		x = (-b)/(2*a);
              if ( x % 1 != 0 ){
                  x = Number(x.toFixed(2));
                }
              result = {
              "x":x
              }
              return result;
          }
          if (d < 0){
              result = {
                  	"x1": "NaN",
                  	"x2": "NaN"
                  }
              return result;
          }
      	  if (d > 0){
        	      	x1 = ((-b-Math.sqrt(d))/2/a);
        	      	x2 = ((-b+Math.sqrt(d))/2/a);

                  if ( x1 % 1 != 0 ){
                      x1 = Number(x1.toFixed(2));
                    }
                  if ( x2 % 1 != 0 ){
              			  x2 = Number(x2.toFixed(2));
                    }

                  result = {
                      "x1":x1,
                      "x2":x2
                        }
                  return result;
                }

    }
}
