exports.calculate = function(a, b, c){
    var result ={};
    if(a==0 && b==0 && c==0){
        result.x = "Any";
    }
    if( a==0 && b!=0){
        result.x = (-c/b).toFixed(2);
    }
    else if ( b != 0 ) {
        var D = b*b -4*a*c;
        if(D > 0) {
            result.x1 = (-b + Math.sqrt(D))/(2*a).toFixed(2);
            result.x2 = (-b - Math.sqrt(D))/(2*a).toFixed(2);
        }
        else  if (D == 0) {
            result.x = (-b)/(2*a).toFixed(2);
        }
        else {
            result.x1="NaN";
            result.x2="NaN";   
        }
    }
     return result;
};
