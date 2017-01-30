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
			var key;
			fs.readFile(filename, function(error, data) {
						if (!error)	{
							var result = {};
							var data_after_querry = [];
							var data_ = JSON.parse(data);
		          var already_done;
							var match = 0;
							var num_of_query_characters = 0;
							for(key in query) {
								num_of_query_characters +=1;
							}
								if (Array.isArray(data_.characters)){
										data_.characters.forEach(function(character) {
											for(key in query) {
												match = 0;
												console.log("//query data");
												console.log(query[key]);
												for(key in character) {
															console.log("//JSON data")
															console.log(character[key])
																if (character[key] == query[key]) {
																	match++;
																}
																}
																if(match == num_of_query_characters && for ( var i = 0 ; i < data_after_querry.length; i++){}){
																			data_after_querry.push(character);
															}
										}
								});
							}
						if (data_after_querry.length > 0) {
							result = data_after_querry;
							headers["Image-Url"] = 'http://localhost:8101/?image='+result[0].type;
						}else{
							response.writeHead(404);
							response.end('Data not found');
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
