const fs = require("fs");

function getData(filePath, headers ,response) {
    fs.exists(filePath, function(exists) {
        if(exists){
            fs.readFile(filePath, function(err, data) {
                if(err){
                    console.log(err);
                    response.writeHead(500);
                    response.end("Internal server error!");
                }
                else {
                    console.log(typeof data);
                    response.writeHead(200, headers);
                    response.end(data);
                }
            });
        }
        else{
            response.writeHead(404);
            response.end("Image not found!");
        }
    })
}

exports.provideData = function (filePath, headers, response){
    return getData(filePath, headers, response);
}
