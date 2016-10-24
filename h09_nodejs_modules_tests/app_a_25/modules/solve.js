exports.quadratic = function(a, b, c) {
    var x = 0, x1 = 0, x2 = 0, d = 0;
    d = Math.pow(b, 2) - 4*a*c;
    if (a == 0 && b == 0 && c == 0) {
        return any();
    } else {
        if (d < 0) {
            return none()
        } else {
            if (d > 0) {
                return two(a, b, d)
            } else {
                if (a != 0 && b != 0 && c != 0) {
                    return one(a, b)
                } else {
                    return none()
                }
            }
        }
    }
}

function one(a, b) {
    var result;
    x = (-b) / (2 * a);
    if (x % 1 != 0) { x = Number(x.toFixed(2)); }
    result = { 
	"x": x
    }
    return { "x": x };
}

function two(a, b, d) {
    var result;
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    if (x1 > x2) { x2 = [x1, x1 = x2][0]; }
    if (x1 % 1 != 0) { x1 = Number(x1.toFixed(2)); }
    if (x2 % 1 != 0) { x2 = Number(x2.toFixed(2)); }
    result = {
        "x1":x1,
        "x2":x2
    }
    return result;
}

function any() {
    var result;
    result = {
        "x": "Any"
    }
    return result;
}

function none() {
    var result;
    result = {
    	"x1": "NaN",
    	"x2": "NaN"
    }
    return result;
}
