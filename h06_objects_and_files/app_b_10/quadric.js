var fs = require('fs');

var path = fs.readFile("input.json")
if(path.is_open()) {
console.log(" asd");
var a = path.a;
var b = path.b;
var c = path.c;

quadratic(a,b,c);
}
function quadratic(a, b, c) {
    var d = (Math.pow(b, 2) - (4 * a * c));
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
        JSON(x1,x2,d);
    }
    if (d == 0) {
        x1 = (-b) / (2 * a);
        JSON1(x1,d);
    }
    if (d < 0) {
        console.log("No real roots");
    }
}


function JSON(x1, x2, d) {
	var js = {
		"x1":x1,
		"x2":x2,
		"D":d
	}
	console.log(JSON.stringify(js, null, 1));
}

function JSON1(x1,d) {
	var print = {
		"x":x1,
		"D":d
	}
	console.log(JSON.stringify(print, null, 1));
}