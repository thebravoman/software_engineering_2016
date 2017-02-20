var calculator = require('./../modules/index.js');
var fs = require('fs');

exports.test_none = function(assert){
    path = './../inputs/input-none.json';
    let result = JSON.parse(calculator.calculateRoots(path));

    assert.equals(result.x1, 'NaN');
    assert.equals(result.x2, 'NaN');
    assert.done();
}

exports.test_any = function(assert){
    path = './../inputs/input-any.json';
    let result = JSON.parse(calculator.calculateRoots(path));

    assert.equals(result.x, 'Any');
    assert.done();
}

exports.test_one_root = function(assert){
    path = './../inputs/input-one.json';
    let result = JSON.parse(calculator.calculateRoots(path));

    assert.equals(result.x, -2);
    assert.done();
}

exports.test_two_roots = function(assert){
    path = './../inputs/input-two.json';
    let result = JSON.parse(calculator.calculateRoots(path));

    assert.equals(result.x1, -0.5);
    assert.equals(result.x2, -2);
    assert.done();
}