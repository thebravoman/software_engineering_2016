var fs = require('fs');

function formatNumberType(value) {
    if (value === parseInt(value, 10)) {
        return value;
    } else {
        return parseFloat(value.toFixed(2));
    }
}

exports.solve = function(a, b, c) {
    var solution = {};
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                solution['x'] = 'Any';
            } else {
                solution['x2'] = solution['x1'] = 'NaN';
            }
        } else {
            if (c == 0) {
                solution['x'] = 0;
            } else {
                solution['x'] = formatNumberType((c / b) * -1);
            }
        }
    } else {
        if (b == 0 && c == 0) {
            solution['x'] = 0;
        } else {
            var D = b * b - 4 * a * c;
            if (D < 0) {
                solution['x2'] = solution['x1'] = 'NaN';
            } else if (D == 0) {
                var x = (-1 * b) / (2 * a);
                solution['x'] = formatNumberType(x);
            } else {
                var x1 = (-1 * b + Math.sqrt(D)) / (2 * a);
                var x2 = (-1 * b - Math.sqrt(D)) / (2 * a);
                if (x2 > x1) {
                    var temp = x1;
                    x1 = x2;
                    x2 = temp;
                }
                solution['x1'] = formatNumberType(x1);
                solution['x2'] = formatNumberType(x2);
            }
        }
    }
    solution = JSON.stringify(solution, null, 1);
    return solution;
};
