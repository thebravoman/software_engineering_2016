var fs = require("fs");
var path = 'input.json';
fs.stat(path, function(err, stat) {
    if(err == null) {
        //File exists
		var read = fs.readFileSync(path);
		var jsonparsed = JSON.parse(read);
		var asString = JSON.stringify(jsonparsed,null,2);
		var toput = new Object;
		var discriminant;
		
		if(jsonparsed.a == 0 ) {
			if( jsonparsed.b !=0 ) {
				toput.x = (jsonparsed.c/jsonparsed.b).toFixed(2);
				console.log(JSON.stringify(toput, null, 2));
			} else {
				if(jsonparsed.c != 0 ) console.log("No real roots.");
				else console.log("Everyfin is root.");
			}
		} else {
			discriminant = jsonparsed.b*jsonparsed.b - 4*jsonparsed.a*jsonparsed.c;
			if( discriminant > 0 ) {
				toput.x1 = ( ( -jsonparsed.b + Math.sqrt(discriminant) ) / ( 2*jsonparsed.a ) ).toFixed(2);
				toput.x2 = ( ( -jsonparsed.b - Math.sqrt(discriminant) ) / ( 2*jsonparsed.a ) ).toFixed(2);
				toput.D = discriminant;
				console.log(JSON.stringify(toput ,null,2));
			} else if( discriminant == 0 ) {
				toput.x1 = ( ( -jsonparsed.b ) / ( 2*jsonparsed.a ) ).toFixed(2);
				toput.x2 = ( ( -jsonparsed.b ) / ( 2*jsonparsed.a ) ).toFixed(2);
				toput.D = 0;
				console.log(JSON.stringify(toput ,null,2));
			} else {
				console.log("No real roots.");
			}					
		}	
    } else if(err.code == 'ENOENT') {
        // file does not exist
		console.log("File does not exist m8, as well as eclipse on my PC. Shit program");
    } else {
        console.log('Some other error: ', err.code);
    }
});
