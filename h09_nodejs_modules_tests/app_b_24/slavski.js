var mod = require("./modules/mod1.js");
var fs = require ('fs');
var read = fs.readFileSync('input-nan.json');
var parce = JSON.parse(read);
var ss = JSON.stringify(parce,null,2);
var a = parce.a;
var b = parce.b;
var c = parce.c;
mod.equation(a,b,c);
