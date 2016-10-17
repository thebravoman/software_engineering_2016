var number = require('./input.json');
var D = 0;
var result;

D = number["b"]* number["b"] - 4*number["a"]*number["c"];

if( number["a"] == 0 ){
	if(number["b"] == 0 && number["c"] == 0){
		console.log("#");
	}
	else{
		var x = -number["c"]/number["b"];
		if(x%1 !=0 ){ x = Number(x.toFixed(2))}
		result = {
			"x":x,
			"D":D
		}
	}

}
else{
	var x1 = (-number["b"] + Math.sqrt(D)) / (2 * number["a"]);
	if(x1%1 !=0 ){ x1 = Number(x1.toFixed(2))}
	var x2 = (-number["b"] - Math.sqrt(D)) / (2 * number["a"]);
	if(x2%1 !=0 ){ x2 = Number(x2.toFixed(2))}


	if(D%1 !=0 ){ D = Number(D.toFixed(2))}
	
	result = {
		"x1":x1,
		"x2":x2,
		"D":D
	}
}
console.log(JSON.stringify(result, undefined, 1));