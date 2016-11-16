var http = require('http');
var url = require('url');
var data;

function handleGetRequest(request, response)
{
	response.writeHead(200, {'Content-Type' : "application/json"});
	data = url.parse(request.url, true);	
	response.end(JSON.stringify(data.query));
}

console.log('listening on localhost:8124');

http.createServer(handleGetRequest).listen(8124, '127.0.0.1');
