var fs = require	('fs');

 function getData(filename,type, response) {
	 fs.exists(filename, function(exists) {
	        if (exists) {
	            fs.readFile(filename, function(error, data) {
	                if (error) {
	                    response.writeHead(500);
	                    response.end('Internal Server Error');
	                } else {
	                    response.writeHead(200, type);
	                    response.end(data);
	                }
	            });
	        } else {
	            response.writeHead(404);
	            response.end('File not found');
	        }
	 }); 
 }
 
 exports.provideData = function(filename, response) {
	 getData(filename , response);
 };
 
 exports.provideList = function(filename, response) {
	 getData(filename, response);
 };
 
 exports.queryData = function(filename, query, response) {
	let headers = {};
	 fs.exists(filename, function(exists) {
		 if(exists) {
			fs.readFile(filename, function(error, data) {
				 if(!error) {
					 var result = {};
					 var filteredData = [];
					 var allData = JSON.parse(data);
					 var a = Object.keys(query).length;
					 
					 if(Array.isArray(allData.characters)) {
						 allData.characters.forEach(function(character) => {
							 	let is_matched = false;
							 	for(let key in query) {
							 		if(character[key] == query[key]) {
							 			is_matched = is_matched 1;
							 		}
							 	}
							 	if(is_matched == a) {
							 		filteredData.push(character);
							 	}
						 });
					 }
					 if (filteredData.length > 0) {
							result = filteredData;
							var imageUrl = 'image/' + query.type;
							headers["Image-Url"] = 'http://localhost:8117/?image=' + query.type;
				
				}		
							
						response.set(headers);
						response.json(result);
					}
					else {			
						response.send('Internal Server Error');
					}
				
			});
		}
		else
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});	
};
 
 
 
 
 
 
 
 
