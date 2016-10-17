/**
 * Created by Ivaylo on 17.10.2016 г..
 */
var fs = require('fs');
var file = require('./input.json');

var out = {};

if(file.a == 0){
    if(file.b == 0 && file.c == 0){
        out = {
            "x1" : "undefined",
            "x2" : "undefined",
            "D" : "undefined"
        };
    }
    else {
        var x = -(file.c)/file.b;
        out = {
            "x1" : int_only(x),
            "x2" : int_only(x),
            "D" : "undefined"
        };
    }
}else{
    var D = file.b * file.b - 4 * file.a * file.c;
        if(D > 0){
            var x1 = (-file.b + Math.sqrt(D))/(2 * file.a);
            var x2 = (-file.b - Math.sqrt(D))/(2 * file.a);
            out = {
                "x1" : int_only(x1),
                "x2" : int_only(x2),
                "D" : D
            };
        }else if(D == 0){
            var x = -file.b/(2 * file.a);
            out = {
                "x1" : int_only(x),
                "x2" : int_only(x),
                "D" : D
            };
        }else {
            out = {
                "x1" : "undefined",
                "x2" : "undefined",
                "D" : D
            };
        }
}
	console.log(JSON.stringify(out, null, 2));

function int_only(num){
	if(num %1 == 0) return num;
	else return Number(num.toFixed(2));
}
