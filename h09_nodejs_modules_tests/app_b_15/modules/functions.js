exports.solveMyProblem = function(a, b ,c){
	var output = new Object;

	if(a == 0){
    if(b == 0 && c == 0){
        out = {"x" : "Any"}; 
    }
    else {
        var x = -(c)/b;
        out = {
            "x" : int_only(x)
        };
    }
}else{
    var D = b * b - 4 * a * c;
        if(D > 0){
            var x1 = (-b + Math.sqrt(D))/(2 * a);
            var x2 = (-b - Math.sqrt(D))/(2 * a);
            out = {
                "x1" : int_only(x1),
                "x2" : int_only(x2)
            };
        }else if(D == 0){
            var x = -b/(2 * a);
            out = {
                "x" : int_only(x)
            };
        }else {
            out = {
                "x1" : "NaN",
                "x2" : "NaN"
            };
        }
}
	return out;
};

function int_only(num){
	if(num %1 == 0) return num;
	else return Number(num.toFixed(2));
}
