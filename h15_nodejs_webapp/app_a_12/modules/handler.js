var result;
var response = {};
var filename = './data/data.json';
var fs = require('fs');
function queryData(query, callback) {
	
	console.log('providing ' + filename);
	fs.exists(filename, function(exists) {
		if (exists) {		
				fs.readFile(filename, function(error, data) {	
						var arr=query.split("&");
						var params = arr.map(function(el){
						el.split("=");	
						var characters = data.characters;
						params.forEach(function(param){
							characters = characters.filter(function(hero){
								return hero[param[0]] === param[1];
							})
						});
						
						response.statusCode = 200;
						response.data = JSON.stringify(characters);	
						
					});	
				});
		}
		else
		{
			response.statusCode = 404;
			response.data = 'data.json not found';
		}
		
		callback(response);
	});	
	
}
	
function getHeaders() {
			return {'Content-Type': 'application/json'};
}

function getRequestBody() {
	return response;
}

module.exports.queryData = queryData;
module.exports.getHeaders = getHeaders;
module.exports.getRequestBody = getRequestBody;
