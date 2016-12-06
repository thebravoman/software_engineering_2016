var fs = require('fs')

function openData(filename, headerInfo, response) {
    fs.exists(filename, function(exists) {
        if(exists) {
            fs.readFile(filename, function(error, data) {
                if(error) {
                    response.writeHead(500);
                    response.end('Server Error');
                } else {
                    response.writeHead(200, headerInfo);
                    response.end(data);
                }
            });
        } else {
            response.writeHead(404);
            response.end("Data not found");
        }
    });
}

exports.provideData = function(filename, headerInfo, response) {
    openData(filename, headerInfo, response);
};

exports.queryData = function(filename, headers, query, response) {
	fs.exists(filename, function(exists) {
		if (exists) {
			fs.readFile(filename, function(error, data) {
				if (!error)	{
					var result = {};
					var filteredData = [];
					var allData = JSON.parse(data);
                    var done;
                    var was_in = 0;
					if (Array.isArray(allData.characters)){
                        allData.characters.forEach(function(character) {
                            console.log("In character");
                            for(var key in query) {
                                if(key in character) {
                                    console.log(key + " = KEYYYYYYY")
                                    done = false;
                                    console.log("Searching eq key..")
                                    if (character[key] == query[key]) {
                                        was_in += 1
                                        console.log("ELEMENT = " + query[key])
                                        for(var i = 0; i < filteredData.length; i++) {
                                            if(filteredData[i] == character) {
                                                console.log("THERE IS SOMETHING")
                                                done = true;
                                                console.log(JSON.stringify(filteredData[i]))
                                            }
                                        }
                                        if(!done) {
                                            filteredData.push(character);
                                        }
                                    }
                                }
                                else {
                                    console.log(was_in)
                					response.writeHead("404");
                					response.end('Data not found');
                                }
                            }
                        });
					}
					if (filteredData.length > 0 && was_in == Object.keys(query).length) {
						result = filteredData;
						// var imageUrl = 'images/' + key;
						headers["Image-Url"] = 'http://localhost:8111/?image='+filteredData[0].type;

                        response.writeHead(200, headers);
                        response.end(JSON.stringify(result));
					} else {
                        console.log(was_in)
    					response.writeHead("404");
    					response.end('Data not found');
                    }

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
