exports.evall = function() {

	var fs = require('fs');
	var obj;

	fs.readFile('./val.js', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);

		var result = {x1:undefined, x2:undefined, D:undefined};

		if(!obj.a && obj.b)
			if((result.x1 = result.x2 = (-obj.c/obj.b))%1 != 0)
				result.x1 = result.x2 = result.x1.toFixed(2);
		if(!obj.b && obj.a && obj.c) {
			if((result.x1 = result.x2 = (Math.sqrt(-obj.c/obj.a)).toFixed(2)) == null)
				result.x1 = result.x2 = undefined;	
		}
		if(obj.a && obj.b && obj.c) {
			result.D = Math.pow(obj.b, 2) - 4*obj.a*obj.c;
			if(result.D >= 0) {
				if((result.x1 = (-obj.b + Math.sqrt(result.D))/(2*obj.a))%1 != 0)
					result.x1 = result.x1.toFixed(2);
				if((result.x2 = (-obj.b - Math.sqrt(result.D))/(2*obj.a))%1 != 0)
					result.x2 = result.x2.toFixed(2);
			}
		}
		console.log(result);
		return result;
	});
}


