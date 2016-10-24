var module = require('../modules/solve.js');
var one = require('../input/input-1.json');
var two = require('../input/input-2.json');
var none = require('../input/input-none.json');
var any = require('../input/input-any.json');

exports.test_none = function(test) {
    var a = none["a"]
    var b = none["b"]
    var c = none["c"]
    test.equals(JSON.stringify({"x1": "NaN", "x2": "NaN"}), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};

exports.test_any = function(test) {
    var a = any["a"]
    var b = any["b"]
    var c = any["c"]
    test.equals(JSON.stringify({"x": "Any"}), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};

exports.test_D0 = function(test) {
    var a = one["a"]
    var b = one["b"]
    var c = one["c"]
    test.equals(JSON.stringify({"x": 1}), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};

exports.test_Dmorethan0 = function(test) {
    var a = two["a"]
    var b = two["b"]
    var c = two["c"]
    test.equals(JSON.stringify({"x1":-5, "x2":-1}), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};
