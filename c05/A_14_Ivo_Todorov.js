

var a, b, c;
a = process.argv[2];
b = process.argv[3];
c = process.argv[4];

if(a == 0){
	if(b==0 && c == 0){
		console.log("#");
	}
	else if(b!=0){
		let x = -c/b;
		
		console.log(x);	
	}

}

else{
	var d = b*b - (4 * a * c);
	if(d>0){
		let x1, x2;
		x1 = (-b + Math.sqrt(d))/(2*a);
		x2 = (-b - Math.sqrt(d))/(2*a);
		console.log("X1 = " + x1 + " X2 = " + x2);
	}
	else if (d==0){
		let x;
		x = -b/(2*a);
		console.log("X = " + x);
	}
}
