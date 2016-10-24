exports.quadratic = function (a, b, c) {
	let answers = {};

	if (a == 0) {
		if (b == 0 && c == 0) {
			answers.x = 'Any';
		} else if (b == 0 && c != 0) {
			// skip
		} else {
			let x = -c / b;

			answers.x = parseFloat(x.toFixed(2));
		}
	} else {
		const D = Math.pow(b, 2) - 4 * a * c;

		if (D > 0) {
			let x1 = (-b + Math.sqrt(D)) / (2 * a);
			answers.x1 = parseFloat(x1.toFixed(2));

			let x2 = (-b - Math.sqrt(D)) / (2 * a)
			answers.x2 = parseFloat(x2.toFixed(2));
		} else if (D == 0) {
			let x = -b / (2 * a);

			answers.x = parseFloat(x.toFixed(2));
		} else {
			answers.x1 = NaN;
			answers.x2 = NaN;
		}
	}

	return answers;
}
