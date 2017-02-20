var fs = require('fs');
	
	function parseSync(path){
		if(fs.existsSync(path)){
			var jsonFile = fs.readFileSync(path);
			var jsonObject = JSON.parse(jsonfile);
			console.log(jsonObject.autor);
		}
		JSON.keys(jsonObejct);
	}
parseSync(package.json){
	if(fs.exists(path,function(exists))
	
}
