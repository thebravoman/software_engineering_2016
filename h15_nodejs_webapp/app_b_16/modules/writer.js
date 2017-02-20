var fs = require('fs');

exports.write_response = function(file_name, contentType, response) {
    fs.exists(file_name, function(exists){
        if(exists) {
            fs.readFile(file_name, function(error, fileData) {
                if(error) {
                    response.writeHead(500);
                    response.end("Internal server error");
                } else {
                    response.writeHead(200, contentType);
                    response.end(fileData);
                }
            });
        } else {
            response.writeHead(404);
            response.end("File not found");
        }
    });
};
