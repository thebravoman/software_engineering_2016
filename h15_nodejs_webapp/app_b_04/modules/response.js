var fs = require('fs');

exports.writeResponse = function(file, headers, response) {
    fs.exists(file, function(exists){
        if(exists) {
            fs.readFile(file, function(error, fileData) {
                if(error) {
                    response.writeHead(500);
                    response.end("Internal server error");
                } else {
                    response.writeHead(200, headers);
                    response.end(fileData);
                }
            });
        } else {
            response.writeHead(404);
            response.end("File not found");
        }
    });
};

    Contact GitHub API Training Shop Blog About 


