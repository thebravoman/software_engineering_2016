var fs = require('fs');

function formatNumber(value) {
    if(value === parseInt(value, 10)) {
        return value;
    } else {
        return parseFloat(value.toFixed(2));
    }
}

fs.readFile('input.json', 'utf8', function(err, data) {
    var solution = {};

    if(err) {
      return console.log(err);
    }
    var param = JSON.parse(data);

    if(param.a == 0) {
        if(param.b == 0) {
            if(param.c == 0) {
                solution['x'] = 'Every x';
            } else {
                solution['x'] = 'No x found';
            }
        } else {
            if(param.c == 0) {
                solution['x'] = 0;
            } else {
                solution['x'] = formatNumber((param.c / param.b) * -1);
            }
        }
    } else {
        if(param.b == 0 && param.c == 0) {
            solution['x'] = 0;
        } else {
            var D = param.b * param.b - 4 * param.a * param.c;
            if(D < 0) {
                solution['x'] = 'No x found';
            } else if(D == 0) {
                var x = (-1 * param.b) / (2 * param.a);
                solution['x'] = formatNumber(x);
            } else {
                var x1 = (-1 * param.b + Math.sqrt(D)) / (2 * param.a);
                var x2 = (-1 * param.b - Math.sqrt(D)) / (2 * param.a);
                if(x2 > x1) {
                    var temp = x1;
                    x1 = x2;
                    x2 = temp;
                }
                solution['x1'] = formatNumber(x1);
                solution['x2'] = formatNumber(x2);
            }
            solution['D'] = formatNumber(D);
        }
    }
    solution = JSON.stringify(solution, null, 1);
    console.log(solution);
    return;
});
