var fs = require('fs');

var input = require('./input.json');

var a = input.a;
var b = input.b;
var c = input.c;

	var d=(Math.pow(b,2)-(4*a*c));
	var x1=(-b + Math.sqrt(d)) / (2*a);
	var x2=(-b - Math.sqrt(d)) / (2*a);

    if (d < 0) {
        console.log("No real roots");
    } else if (d == 0) {
        console.log("X = "  + x1);
    } else {
        console.log("X1 = " + x1 + " X2 = " + x2);
    } 
}
