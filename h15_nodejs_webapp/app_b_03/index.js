var http = require('http');
var url = require('url');
var handler = require('./modules/handler.js');

var filename = "data/data.json";
var imagename = "images/image.jpg";

var port = 8203;
var contentType = {};

function handleRequest(request, response)
{

    var get_params = url.parse(request.url, true);
    if(get_params.query.image == null) {
        contentType = {
            'Content-Type' : 'application/json',
            'Image-Url' : 'http://localhost:' + port + '/?image'
        };
        handler.provideData(filename, contentType, response);
    } else {
        contentType = {
            'Content-Type' : 'application/jpeg'
        };
        handler.provideImage(imagename, response);
    }
}


console.log('listening on localhost:' + port + '\n ...');


http.createServer(handleRequest).listen(port, '127.0.0.1');
