solve = function (a, b, c) {
	
	var d=((b*b)-(4*a*c));
	var x1=(-(b) + Math.sqrt(d)) / (2*a);
	var x2=(-(b) - Math.sqrt(d)) / (2*a);

	if (d < 0) {
		
		console.log("x1: \“NaN\”,")
		console.log("x2: \"NaN\"")
		
	} else if (a == 0 && b == 0 && c == 0) {
		
		console.log("{x: \“Any\”}");
		
	} else if (x1 == x2) {

		console.log("x:" + x1);
		
	} else {
		
		console.log("x1: " + x1);
		console.log("x2: " + x2);
	}
}