var http = require('http');
var url = require('url');
var data;

var content_type = require('content_type');

function handleRequest(request, response)
{
	content_type.format( {type : "application/json"} );
	data = url.parse(request.url, true);	
	response.end(JSON.stringify(data.query));
}

console.log('listening on localhost:8124');

http.createServer(handleRequest).listen(8124, '127.0.0.1');
