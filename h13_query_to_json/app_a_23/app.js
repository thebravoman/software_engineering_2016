var http = require('http');
var url = require('url');

function handleRequest(request, response)
{
	response.writeHead(200, { 'Content-Type': 'application/json' });
	var get_params = url.parse(request.url, true);
	response.end(JSON.stringify(get_params.query));
}

console.log('listening on localhost:8123');

http.createServer(handleRequest).listen(8123, '127.0.0.1');
