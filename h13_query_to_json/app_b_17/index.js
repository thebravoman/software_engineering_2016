var http = require('http');
var url = require('url');
var contentType = require('content-type');

function handleRequest(request, response) {
	
	contentType.format({type : "application/json"});
	var requestData = url.parse(request.url, true);
	response.end(JSON.stringify(requestData.query,null , 2));
}

http.createServer(handleRequest).listen(8217, '127.0.0.1'); 