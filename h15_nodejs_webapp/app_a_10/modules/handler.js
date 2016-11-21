const fs = require("fs");

exports.provideData = function(filename, headerContent, response)
{
	console.log("Providing " + filename);
	fs.exists(filename, function(exists)
	{
		if(exists)
		{
			fs.readFile(filename, function(error, data){
              		if (error)
			{
                  		response.writeHead(500);
                    		response.end("Internal Server Error");
                	} else {
                    		response.writeHead(200, headerContent);
                    		response.end(data);
			}
		});
		} else {
			response.writeHead(404);
			response.end("Image not found");
		}
	});
};
