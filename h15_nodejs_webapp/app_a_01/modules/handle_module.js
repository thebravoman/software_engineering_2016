var fs = require('fs');

exports.provideData=function readData(filename, contentType, response)
{

					fs.exists(filename, function(exists) {
						if (exists) {
							fs.readFile(filename, function(error, data) {
						if (!error) {

							response.writeHead(200, contentType);
							response.end(data);
						} else {
							response.writeHead(500);
							response.end('Internal Server Error');
						}
						});
						} else {
							response.writeHead(404);
							response.end('File not found');
						}
					});

};

exports.queryData = function(filename, headers, query, response) {
	fs.exists(filename, function(exists) {
		if (exists) {
			fs.readFile(filename, function(error, data) {
						if (!error)	{
							var result = {};
							var data_after_querry = [];
							var data_ = JSON.parse(data);
		                    var already_done;
							if (Array.isArray(data_.characters)){
								data_.characters.forEach(function(character) {
								for(var key in query) {
								if(key in character) {
										already_done = false;
										if (character[key] == query[key]) {
											for(var i = 0; i < data_after_querry.length; i++) {
												if(data_after_querry[i] == character) {
												already_done = true;
												}
											}
											if(!already_done) {
											data_after_querry.push(character);
											}
										}
										}
								}
						});
						}
						if (data_after_querry.length > 0) {
							result = data_after_querry;
							headers["Image-Url"] = 'http://localhost:8111/?image='+data_after_querry.type;
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
