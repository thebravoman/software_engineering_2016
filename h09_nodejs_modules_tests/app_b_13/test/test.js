var quad = require('../module/quad.js');
var fs = require('fs');

exports.test_any = function(test){
var input = require('./input-any.json');

test.equals(JSON.stringify({"x":"Any"}),JSON.stringify(quad.solve(input.a,input.b,input.c)));

test.done();
}

exports.test_none = function(test){
var input = require('./input-nan.json');

test.equals(JSON.stringify({"x1":"NaN","x2":"NaN"}),JSON.stringify(quad.solve(input.a,input.b,input.c)));

test.done();
}

exports.test_D_0 = function(test){
var input = require('./input-1.json');

test.equals(JSON.stringify({"x":-2}),JSON.stringify(quad.solve(input.a,input.b,input.c)));

test.done();
}

exports.test_D_greather_0 = function(test){
var input = require('./input-2.json');

test.equals(JSON.stringify({"x1":1,"x2":-5}),JSON.stringify(quad.solve(input.a,input.b,input.c)));

test.done();
}


