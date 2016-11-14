var http = require('http');
var url = require('url');
var contentType = require('content-type');

function handleRequest(request, response)
{

	contentType.format({type : "application/json"});
	var get_params = url.parse(request.url, true);	
	response.end(JSON.stringify(get_params.query,null,2));
}


console.log('listening on localhost:8102');


http.createServer(handleRequest).listen(8102, '127.0.0.1');
