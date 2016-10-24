var quadratic=require('./modules/quadratic.js');
var fs=require("fs");
var read=fs.readFileSync('');
var par=JSON.parse(read);
var string=JSON.stringify(result,null,2);
var a=par.a;
var b=par.b;
var c=par.c;
quadratic.equation(a,b,c);
