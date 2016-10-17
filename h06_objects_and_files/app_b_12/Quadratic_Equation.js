var fs = require('fs');

var path = require('./input.json');

var x;
var x1;
var x2;
var D;

var object = {};

var a = path.a;
var b = path.b;
var c = path.c;

D = Math.pow(b, 2) - (4*a*c);

if (a == 0 && b == 0 && c == 0) {
	object.x1= "#";
	object.x2 = "#";
	object.D = "#";
}

if (a == 0 && b != 0 && c != 0) {
	x = -c / b;
	if (x % 1 == 0) {object.x1 = x; object.x2 = x;}
	else {object.x1 = x.toFixed(2); object.x2 = x.toFixed(2);}
}

if (a != 0) {
	if (D == 0) {
		x = -b / (2*a);
		if (x % 1 == 0) {object.x1 = x; object.x2 = x; object.D = 0;}
		else {object.x1 = x.toFixed(2); object.x2 = x.toFixed(2); object.D = 0;}
	}

	if (D > 0) {
		x1 = (-b + Math.sqrt(D)) / (2*a);
		x2 = (-b - Math.sqrt(D)) / (2*a);

		if (x1 % 1 == 0) object.x1 = x1;
		else object.x1 = x1.toFixed(2);

		if (x2 % 1 == 0) object.x2 = x2;
		else object.x2 = x2.toFixed(2);

		if (D % 1 == 0) object.D = D;
		else object.D = D.toFixed(2);
	}

	if (D < 0) {
	object.x1 = "-";
	object.x2 = "-";

	if (D % 1 == 0) object.D = D;
	else object.D = D.toFixed(2);
	}
}

console.log(JSON.stringify(object, null, 2));
