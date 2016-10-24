var fs = require('fs');
var expected = require('./expected.js');
var quadratic = require('../modules/solve_quadratic.js');

var expected_none = JSON.stringify({
    'x1': 'NaN',
    'x2': 'NaN'
}, null, 1);
var expected_any = JSON.stringify({
    'x': 'Any'
}, null, 1);
var expected_D0 = JSON.stringify({
    'x': -1
}, null, 1);
var expected_DGreaterThan0 = JSON.stringify({
    'x1': 1.08,
    'x2': -1.16
}, null, 1);

exports.test_none = function(test) {
    var param = fs.readFileSync(__dirname + '/input-none.json', 'utf8');
    param = JSON.parse(param);
    test.equals(expected_none, quadratic.solve(param.a, param.b, param.c));
    test.done();
};

exports.test_any = function(test) {
    var param = fs.readFileSync(__dirname + '/input-any.json', 'utf8');
    param = JSON.parse(param);
    test.equals(expected_any, quadratic.solve(param.a, param.b, param.c));
    test.done();
};

exports.test_D0 = function(test) {
    var param = fs.readFileSync(__dirname + '/input-1.json', 'utf8');
    param = JSON.parse(param);
    test.equals(expected_D0, quadratic.solve(param.a, param.b, param.c));
    test.done();
};

exports.test_DGreaterThan0 = function(test) {
    var param = fs.readFileSync(__dirname + '/input-2.json', 'utf8');
    param = JSON.parse(param);
    test.equals(expected_DGreaterThan0, quadratic.solve(param.a, param.b, param.c));
    test.done();
};
