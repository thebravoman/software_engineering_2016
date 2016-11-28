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
 
 exports.provideData = function(filename, contentType, response) {
	 return getData(filename , contentType, response);
 };
 
 exports.provideList = function(filename, contentType, response) {
	 return getData(filename, contentType, response);
 };
 
 exports.queryData = function(filename, headers, query,response) {
	 fs.exists(filename, function(exists) {
		 if(exists) {
			fs.readFile(filename, function(error, data) {
				 if(!error) {
					 var result = {};
					 var filteredData = [];
					 var allData = JSON.parse(data);
					 
					 if(Array.isArray(allData.characters)) {
						 allData.characters.forEach(function(character){
							 	let is_matched = false;
							 	for(let key in query) {
							 		if(character[key] == query[key]) {
							 			is_matched = true;
							 			
							 		}
							 	}
							 	if(is_matched) {
							 		filteredData.push(character);
							 	}
						 });
					 }
					 if (filteredData.length > 0) {
							result[query.type] = filteredData;
							var imageUrl = 'images/' + query.type;
							headers["Image-Url"] = 'http://localhost:8127/?image='+ query.type;
				
						
							
						response.writeHead(200, headers);
						response.end(JSON.stringify(result));
					}
					else {			
						response.writeHead(500);
						response.end('Internal Server Error');
					}
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
 
 
 
 
 
 
 
 
 
 
 