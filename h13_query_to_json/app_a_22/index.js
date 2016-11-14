var URL = require('url');
var HTTP = require('http');
var content_type = require('content-type');
var port = 8122

function handleGETRequest(request, response)
{
	contentType.format( {type: "application/json" } );
	
	var content = URL.parse(request.URL, true);

	response.end(JSON.stringify(content.query));
}

HTTP.createServer(handleGETRequest).listen(port, '127.0.0.1');
