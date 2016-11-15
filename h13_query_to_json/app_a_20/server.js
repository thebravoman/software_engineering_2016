var http = require('http');
var url = require('url');
var contentType = require('content-type');

function handleRequest(request, response){
	contentType.format({type: "application/json"});
	var params = url.parse(request.url, true);
	response.end(JSON.stringify(params.query, null, 2));
}

console.log('listening to localhost:8120');
http.createServer(handleRequest).listen(8120, '127.0.0.1');