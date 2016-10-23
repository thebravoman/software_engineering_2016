var mod = require("./modules/mod1.js");
var fs = require ('fs');
//files that can be used :
//'./Tests/input_files/input-nan.json'
//'./Tests/input_files/input-any.json'
//'./Tests/input_files/input-1.json'
//'./Tests/input_files/input-2.json'
var read = fs.readFileSync('./Tests/input_files/input-nan.json');
var parce = JSON.parse(read);
var ss = JSON.stringify(parce,null,2);
var a = parce.a;
var b = parce.b;
var c = parce.c;
mod.equation(a,b,c);
