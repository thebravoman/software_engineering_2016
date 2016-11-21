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
    openData(filename, headerInfo, response)
}
