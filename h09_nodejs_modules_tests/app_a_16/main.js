var fs = require("fs");
var quadraticsolver = require("./quadraticsolver.js");

var fileinput = fs.readFileSync("input-1.json");
var input = JSON.parse(fileinput);

var a=input.a;
var b=input.b;
var c=input.c;

quadraticsolver.solve(a, b, c);