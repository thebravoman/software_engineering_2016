var math = require("../modules/math.js");
var fs = require('fs');


exports.test_two = function (test) {
    var test_file = JSON.parse(fs.readFileSync("input-2.json"));
    var test_values = {
        x1 : 1.00,
        x2 : -0.50
    };
    var sol_test = math.solution(test_file.a, test_file.b, test_file.c)
    test.deepEqual(sol_test, test_values);
    test.done();
}

exports.test_one = function (test) {
    var test_file = JSON.parse(fs.readFileSync("input-1.json"));
    var test_values = {
        x : -1.00
    };
    var sol_test = math.solution(test_file.a, test_file.b, test_file.c)
    test.deepEqual(sol_test, test_values);
    test.done();
}

exports.test_nan = function (test) {
    var test_file = JSON.parse(fs.readFileSync("input-2.json"));
    var test_values = {
        x1 : "NaN",
        x2 : "NaN"
    };
    var sol_test = math.solution(test_file.a, test_file.b, test_file.c)
    test.deepEqual(sol_test, test_values);
    test.done();
}

exports.test_any = function (test) {
    var test_file = JSON.parse(fs.readFileSync("input-2.json"));
    var test_values = {
        x : "Any"
    };
    var sol_test = math.solution(test_file.a, test_file.b, test_file.c)
    test.deepEqual(sol_test, test_values);
    test.done();
}
