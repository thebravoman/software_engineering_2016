var http = require('http');
var url = require('url');
var port = 8109;

http.createServer(function(request, response)
{
	var queryObject = url.parse(request.url, true).query;
	response.writeHead(200, {
      'Content-Type': 'application/json'
    });
	response.end(JSON.stringify(queryObject, null, 2));
}).listen(port, '127.0.0.1');