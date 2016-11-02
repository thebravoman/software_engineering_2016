exports.solve = function(a,b,c){

var D=0,x1=0,x2=0,x=0;
var output={};

if (a==0&&b==0&&c==0){
	output.x="Any";
}

else{
	D=Math.pow(b,2) - 4*a*c;

	if(D>0){
	x1 = (-b + Math.sqrt(D)) / (2*a);
	x2 = (-b - Math.sqrt(D)) / (2*a);
	output.x1=int_check(x1);
	output.x2=int_check(x2);
		}
	if(D==0){
	x=(-b)/(2*a);
	output.x=int_check(x);
		}
	if(D<0){
	output.x1 = "NaN"
	output.x2 = "NaN"
		}
	}
	return output;
	
function int_check(num){

	if(num%1==0){
		return num;
	}else
		return Number(num.toFixed(2));
	}
}
