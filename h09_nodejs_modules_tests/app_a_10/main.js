var fs = require("fs");
var kvadratno = require("./modules/kvadratno.js");
var input = require("./input.json");

var a=input["a"];
var b=input["b"];
var c=input["c"];

console.log(JSON.stringify(kvadratno.solve(a, b, c), undefined, 2));

