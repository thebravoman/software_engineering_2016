var fs = require('fs');

var path = require('./input.json')

var root1 = 0, root2 = 0, rootX = 0, D = 0;

var result = {};

//Get parametres from JSON object
var a = path.a;
var b = path.b;
var	c = path.c;


if (a != 0) {
	D = Math.pow(b, 2) - 4 * a * c;

	if (D > 0) {
		root1 = (- b + Math.sqrt(D)) / (2 * a);
		root2 = (- b - Math.sqrt(D)) / (2 * a);

		dicriminant_pos(result, root1, root2, D);

	} else if (D == 0) {
		rootX = - b / (2 * a);

		dicriminant_pos(result, rootX, rootX, D);
	} else {
		no_discriminant(result, D);
	}
	
	print_result(result);

} else {
	if (b == 0 && c == 0) {
		if_no_roots(result);
	} else {
		rootX = (- c) / b;
		if_has_one_root(result, rootX);
	}
	print_result(result);
}

function is_integer(number) {
	if (number % 1 == 0) {
		return number;
	} else return Number(number.toFixed(2));
}

function if_no_roots(object) {
	object.x1 = "undefined";
	object.x2 = "undefined";
	object.D = "undefined";
}

function if_has_one_root(object, root) {
		object.x1 = is_integer(root);
		object.x2 = is_integer(root);
		object.D = "undefined";
}

function dicriminant_pos(object, root1, root2, Disc) {
		object.x1 = is_integer(root1);
		object.x2 = is_integer(root2);
		object.D = Disc;
}

function no_discriminant(object, Disc) {
	object.x1 = "undefined";
	object.x2 = "undefined";
	object.D = Disc;
}

function print_result(object) {
	console.log(JSON.stringify(object, null, 2));
}