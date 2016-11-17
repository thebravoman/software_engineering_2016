var http = require('http');
var url = require('url');

http.createServer(function requestHandler(request, response) {
    response.writeHead (200, {
        "contentType": "application/json"
    });
	var requestData = url.parse(request.url, true);
    response.end(JSON.stringify(requestData.query,null , 2));
}).listen(8208, '127.0.0.1');
