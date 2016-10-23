var module = require('../modules/solve.js');
var json_none = require('../input/input-none.json');
var json_any = require('../input/input-any.json');
var json_one = require('../input/input-1.json');
var json_two = require('../input/input-2.json');

exports.test_none = function(test) {
    var a = json_none["a"]
    var b = json_none["b"]
    var c = json_none["c"]
    test.equals(JSON.stringify({"x1": "NaN", "x2": "NaN"}), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};

exports.test_any = function(test) {
    var a = json_any["a"]
    var b = json_any["b"]
    var c = json_any["c"]
    test.equals(JSON.stringify({"x": "Any"}), JSON.stringify(module.quadratic(a, b, c)));
	test.done();
};

exports.test_D0 = function(test)
{
    var a = json_one["a"]
    var b = json_one["b"]
    var c = json_one["c"]
    test.equals(JSON.stringify({ "x": 1 }), JSON.stringify(module.quadratic(a, b, c)));
    test.done();
};

exports.test_DGreaterThan0 = function(test)
{
    var a = json_two["a"]
    var b = json_two["b"]
    var c = json_two["c"]
    test.equals(JSON.stringify({"x1":-5, "x2":-1}), JSON.stringify(module.quadratic(a, b, c)));
	test.done();
};
