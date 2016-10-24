exports.solution = function(a, b, c) {

        var output = new Object;
        if (a == 0 && b == 0 && c != 0) {
            output.x1 = "NaN";
            output.x2 = "NaN";
        }
        else if (a == 0 && b == 0 && c == 0) {
            output.x = "Any";
        }
        else if (a == 0 && b != 0) {
            output.x1 = (c / b).toFixed(2);
        }
        else if (a != 0) {
            var D = b * b - (4 * a * c);
            if (D == 0) {
                output.x = ((-b) / ( 2 * a )).toFixed(2);
            }
            else if (D > 0) {
                output.x1 = ((-b + Math.sqrt(D)) / ( 2 * a )).toFixed(2);
                output.x2 = ((-b - Math.sqrt(D)) / ( 2 * a )).toFixed(2);

            }
            else {
                output.x1 = "NaN";
                output.x2 = "NaN";
            }
        }


    return output;
}
