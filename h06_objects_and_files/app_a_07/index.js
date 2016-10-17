const readFile = require('fs').readFile;

readFile('./input.json', (err, data) => {
	if (err) {
		throw err;
	}

	let problem = JSON.parse(data);
	console.log(JSON.stringify(getAnswers(problem), null, 4));
});

function getAnswers(problem) {
	let answers = {};

	if (problem.a == 0) {
		if (problem.b == 0 && problem.c == 0) {
			answers.x1 = '*';
			answers.x2 = '*';
			answers.D = undefined;
		} else if (problem.b == 0 && problem.c != 0) {
			// skip
		} else {
			let x = -problem.c / problem.b;
			
			answers.x1 = parseFloat(x.toFixed(2));
			answers.x2 = answers.x1;
			answers.D = undefined;
		}
	} else {
		const D = Math.pow(problem.b, 2) - 4 * problem.a * problem.c;
		answers.D = parseFloat(D.toFixed(2));

		if (D > 0) {
			let x1 = (-problem.b + Math.sqrt(D)) / (2 * problem.a);
			answers.x1 = parseFloat(x1.toFixed(2));

			let x2 = (-problem.b - Math.sqrt(D)) / (2 * problem.a)
			answers.x2 = parseFloat(x2.toFixed(2));
		} else if (D == 0) {
			let x = -problem.b / (2 * problem.a);

			answers.x1 = parseFloat(x.toFixed(2));
			answers.x2 = answers.x1;
		} else {
			answers.x1 = undefined;
			answers.x2 = undefined;
		}
	}

	return answers;
}