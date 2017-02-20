var fs = require('fs');
fs.readFile("input.json", function(err, file){
	if(err) {
		console.error(err);	
	}
	let obj = JSON.parse(file);
	var Hash = new Object;
	var D = obj.b * obj.b - 4 * obj.a * obj.c;
	if(D < 0) return 1;
	Hash.x1 = +( ( -obj.b + Math.sqrt(D) ) / (2*obj.a) ).toFixed(2);
	Hash.x2 = +( ( -obj.b - Math.sqrt(D) ) / (2*obj.a) ).toFixed(2);
	if(obj.a == 0) {
		Hash.x1 = -(obj.c/obj.b);
		Hash.x2 = -(obj.c/obj.b);
		D = 0;
	}
	Hash.D = +D.toFixed(2);
	console.log(JSON.stringify(Hash, null , 2));
});
