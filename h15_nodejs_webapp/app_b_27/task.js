var http = require('http');
var url = require('url');

var responseWriter = require('./modules/writer.js');

function requestHandle(request, response) {
    var params = url.parse(request.url, true);
    
    if(params.query.image != null) {
    	responseWriter.writer('./image/image.jpeg', 
        		{'contentType': 'image/jpeg'}, response);
    } 
    else {
    	responseWriter.writer('./data/data.json', 
    			{'contentType': 'application/json', 
    			'Image-url':'localhost:8217/?image'}, response);
    }
}

http.createServer(requestHandle).listen(8227, '127.0.0.1');
