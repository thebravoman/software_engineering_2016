var http = require('http');
var url = require('url');
var fs = require('fs');
var handler = require('./handler');

function handleRequest(request, response)
{
	
    var query = url.parse(request.url, true).query;
    handler.init(query);
    var headers = handler.getHeaders();
    response.writeHead(200, headers);
    
    var requestBody = handler.getRequestBody();
    response.end(requestBody);
}


http.createServer(handleRequest).listen(8112, '127.0.0.1');
