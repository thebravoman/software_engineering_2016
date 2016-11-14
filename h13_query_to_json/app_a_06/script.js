var http = require('http');
var url = require('url');
var content_type = require('content-type');

function handleRequest(request,response)
{
    content_type.format({ type:"application/json" });
	let data = url.parse(request.url, true);
	response.end(JSON.stringify(data.query));
}

http.createServer(handleRequest).listen(8106,'127.0.0.1');
