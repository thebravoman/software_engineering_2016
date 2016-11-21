var fs = require('fs');

exports.dataProvider=function readData(filename, contentType, response)
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
