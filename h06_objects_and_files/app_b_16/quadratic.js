var fs = require('fs');

var input = require('./input.json')

var a = input.a;
var b = input.b;
var c = input.c;
var output = {x1: "-", x2: "-",  D: "-"};

 if( a==0 && b!=0){
	output.x1 = -c/b ;
}
else if ( b != 0 ) {

	output.D = b*b -4*a*c ;
	
	if( output.D > 0) {
		output.x1 = (-b + Math.sqrt(output.D))/(2*a);
		output.x2 = (-b - Math.sqrt(output.D))/(2*a);
	}
	else  if (output.D == 0) {
		output.x1 = -b/(2*a);
		output.x2 = output.x1;
	}
}

if(output.x1!= '-')
	if( (output.x1) % 1 != 0)
		output.x1=(output.x1).toFixed(2)/1;

if(output.x2!= '-')
	if( (output.x2) % 1 != 0)
		output.x2=(output.x2).toFixed(2)/1;

if(output.D!= '-')
	if( (output.D) % 1 != 0)
		output.D=(output.D).toFixed(2)/1;

 console.log(JSON.stringify(output, null, 2));

