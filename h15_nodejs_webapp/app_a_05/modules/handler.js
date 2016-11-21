var fs = require('fs');
var error='Internal Server Error'
exports.data = function(file_path, header, response) {
    console.log('Using', file_path);
    fs.exists(file_path, function(works) {
        if (!works) 
	{
            response.writeHead(404);

            response.end('No image m8');
        }
	else {

            fs.readFile(file_path, function(error, data) {

                if (!error) {
                    response.writeHead(200,header);
                    response.end(data);
                }
		 else 
		{
                    response.writeHead(500);
		    response.end(error);
                }
            });
        }
    });
}
