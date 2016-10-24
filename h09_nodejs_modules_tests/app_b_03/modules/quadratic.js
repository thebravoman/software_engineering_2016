exports.solve = function(a, b, c) {
    var d = 0;
    var result = {};

    if ( a == 0 ) {
        if( b == 0 && c == 0 ) {
            result.x = "ANY";
        } else if( b == 0 && c != 0 ) {
            result.x2 = result.x1 = "NaN";
        } else {
            (-c/b) == 0 ? result.x = 0 : result.x = +(-c/b).toFixed(2) ;
        }
    } else {
        d = b*b - 4*a*c;
        if(d != 0  ) {
        	result.x1 = +( (-b + Math.sqrt(d)) / (2 * a) ).toFixed(2);
        	result.x2 = +( (-b - Math.sqrt(d)) / (2 * a) ).toFixed(2);
        } else {
        	result.x = +( (-b) / (2 * a) ).toFixed(2);
        }
        
    }
    return result;
};