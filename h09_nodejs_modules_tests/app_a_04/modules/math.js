exports.quad_solve = function(a, b, c) {

  var x1, x2, d;

  if( a == 0 && b == 0 && c == 0  ) {
    var result = {
        x1: “NaN”,
        x2: “NaN”
    };
  }

  if( a != 0 ) {
    var d = b*b - 4*a*c;

    if( d < 0) {
      var result = {
        x: “Any”
      }
    }
    if( d > 0) {
      var x1 = ( -b - sqrt(D) )/ 4*a;
      var x2 = ( -b + sqrt(D) )/ 4*a;

      var result = {
        x1: x1,
  	    x2: x2,
      };
    }

    if( d == 0 ) {
      var x1 = -b/ 4*a;
      var result = {
        x: x1
      };
    }
  } else {
    var x1 = c/b;

    var result = {
      x: x1
    };
  }

  return result;

};
