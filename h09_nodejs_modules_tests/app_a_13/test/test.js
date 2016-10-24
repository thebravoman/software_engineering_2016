var solver = require('../modules/quadratic_solver.js');

var none = require('../test_inputs/input-none.json');
var any = require('../test_inputs/input-any.json');
var one = require('../test_inputs/input-1.json');
var two = require('../test_inputs/input-2.json');

exports.test_none = function(test) {
    var a = none["a"];
    var b = none["b"];
    var c = none["c"];
    var expected = {"x1": "NaN", "x2": "NaN"}
    var output = solver.quadratic_solver(a,b,c);
    
    expected = JSON.stringify(expected, "\n", 1);
    output = JSON.stringify(output, "\n", 1);
    
    test.equals(expected,output);
    test.done();
};

exports.test_any = function(test) {
    var a = any["a"];
    var b = any["b"];
    var c = any["c"];
    var expected = {"x": "Any"}
    var output = solver.quadratic_solver(a,b,c);
    
    expected = JSON.stringify(expected, "\n", 1);
    output = JSON.stringify(output, "\n", 1);
    
    test.equals(expected,output);
    test.done();
};

exports.test_D0 = function(test) {
    var a = one["a"];
    var b = one["b"];
    var c = one["c"];
    var expected = {"x": 1}
    var output = solver.quadratic_solver(a,b,c);
    
    expected = JSON.stringify(expected, "\n", 1);
    output = JSON.stringify(output, "\n", 1);
    
    test.equals(expected,output);
    test.done();
};

exports.test_DGreaterThan0 = function(test) {
    var a = two["a"];
    var b = two["b"];
    var c = two["c"];
    var expected = {"x1": 1, "x2": -4}
    var output = solver.quadratic_solver(a,b,c);
    
    expected = JSON.stringify(expected, "\n", 1);
    output = JSON.stringify(output, "\n", 1);
    
    test.equals(expected,output);
    test.done();
};