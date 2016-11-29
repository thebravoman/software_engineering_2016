var fs = require('fs');
 
function readData(filename, contentType, response)
{
    console.log('providing ' + filename);
    fs.exists(filename, function(exists) {
        if (exists) {      
                fs.readFile(filename, function(error, data) {  
                    if (!error) {
                        //console.log(data);
                        response.writeHead(200, contentType);
                        response.end(data);
                    }
                    else {         
                        response.writeHead(500);
                        response.end('Internal Server Error');
                    }
                });
        }
        else
        {
            response.writeHead(404);
            response.end('Image not found');
        }
    });
}
 
 
 
exports.provideData = function(filename, contentType, response)
{
    readData(filename,contentType, response);
};
 
exports.provideList = function(filename, contentType,  response)
{
    readData(filename,contentType, response);
};
 
exports.queryData = function(filename, headers, query, response) {
	fs.exists(filename, function(exists) {
		if (exists) {
			fs.readFile(filename, function(error, data) {
				if (!error)	{
					var result = {};
					var filteredData = [];
					var allData = JSON.parse(data);
                    var check;
                    var size=filteredData.length;
					if (Array.isArray(allData.characters)){
                        allData.characters.forEach(function(character) {
                            for(var key in query) {
                                if(key in character) {
                                    check = false;
                                   
                                    if (character[key] == query[key]) {
                                        for(var i = 0; i <size;  i++) {
                                            if(filteredData[i] == character) {
                                                check = true;
                                            }
                                        }
                                        if(!check) {
                                            filteredData.push(character);
                                        }
                                    }
                                }
                            }
                        });
					}
					if (filteredData.length > 0) {
						result = filteredData;
						
						headers["Image-Url"] = 'http://localhost:8103/?image='+filteredData.type;
					}


					response.writeHead(200, headers);
					response.end(JSON.stringify(result));
				}
				else {
					response.writeHead(500);
					response.end('Internal Server Error');
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
