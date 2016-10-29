var fs=require("fs");
var quadratic=require('./module/quadratic.js');
var input=require("./input.json");
var a,b,c;
a=input["a"];
b=input["b"];
c=input["c"];
console.log(JSON.stringify(module.equation(a,b,c),undefined,2));
