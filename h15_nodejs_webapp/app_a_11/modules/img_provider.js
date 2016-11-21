var fs = require('fs');

function takeImage(filename, response) {
    fs.exists(filename, function(exists) {
        if(exists) {
            fs.readFile(filename, function(error, data){
                if(error) {
                    response.writeHead(500);
                    response.end('Server Error');
                } else {
                    response.writeHead(200, {'Content-Type': 'image/jpeg'});
                    response.end(data)
                }
            });
        } else {
            response.writeHead(404);
            response.end('Image not found');
        }
    });
}

exports.provideImage = function(response){
    takeImage('./images/image.jpeg', response)
}
