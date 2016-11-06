var http = require('http');
var url = require('url');
var contentType = require('content-type'); 
	contentType.format({type : "application/json"});
	
var port = 8203;

function handleRequest(request, response)
{
	var get_params = url.parse(request.url, true);
	var JSON_response = JSON.stringify(get_params.query,null, 2);
	response.end(JSON_response);
}

console.log('listening on localhost: ' + port );

http.createServer(handleRequest).listen(port, '127.0.0.1');
