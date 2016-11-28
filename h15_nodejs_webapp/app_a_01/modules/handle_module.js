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

exports.queryData=function readData(filename, headers, query, response)
{

	fs.exists(filename, function(exists) {
        if (exists) {
            fs.readFile(filename, function(error, data) {
                if (!error) {
										var result = {};
										var data_after_querry = [];
										var data_ =  JSON.parse(data);
										var arrayLength = data_.length;

										for (var i = 0; i < arrayLength; ++i) {
												var character = data_[i];
												if (character.type === query) {
													data_after_querry.push(character);
											}
										}


										if (data_after_querry.length > 0) {
											result[query] = filteredData;
											var imageUrl = 'images/' + query;
											headers["Image-Url"] = 'http://localhost:8101/?image='+query;
										}


										response.writeHead(200, headers);
										response.end(JSON.stringify(result));


                } else {
                     response.writeHead(500);
                    response.end('Internal Server Error');
                }
            });
        } else {
            response.writeHead(404);
            response.end('File not found hahaha');
        }
    });

};
