var fs = require('fs');
var obj;
fs.readFile('./val.js', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);

	var result = {x1:undefined, x2:undefined, D:undefined};
	result.D = Math.pow(obj.b, 2) - 4*obj.a*obj.c;

	if(!obj.a && obj.b)
		result.x1 = result.x2 = (-obj.c/obj.b).toFixed(2);
	else if(!obj.b) {

	}
	if(result.D >= 0) {
		if((result.x1 = (-obj.b + Math.sqrt(result.D))/(2*obj.a))%1 != 0)
			result.x1 = x1.toFixed(2);
		if((result.x2 = (-obj.b - Math.sqrt(result.D))/(2*obj.a))%1 != 0)
			result.x2 = x2.toFixed(2);
	}

	console.log(JSON.stringify(result, null, 1	));
});
