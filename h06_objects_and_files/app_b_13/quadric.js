var fs = require('fs');

var input = require('./input.json');

var x1 = 0,x2 = 0,x = 0,D = 0;

var output={};

var a=input.a;
var b=input.b;
var c=input.c;

D=Math.pow(b,2) - 4*a*c;

	if(D > 0){
	x1 = (-b + Math.sqrt(D)) / (2*a);
	x2 = (-b - Math.sqrt(D)) / (2*a);
	output.x1=int_check(x1);
	output.x2=int_check(x2);
	output.D = D;
		}
	if(D==0){

	x=(-b)/(2*a);
	output.x=int_check(x);
	output.D = D;
	}
	if(D<0){

	output.x1 = "-"
	output.x2 = "-"
	output.D = D;

	}


console.log(JSON.stringify(output, null,2));

function int_check(num){

	if(num%1==0){
		return num;
	}else
		return Number(num.toFixed(2));
}




