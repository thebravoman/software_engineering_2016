var http = require('http');
var url = require('url');
var contentType = require('content-type');

function handleRequest(request, response){
	contentType.format({type : "application/json"});
	var gather_info = url.parse(request.url, true);
	response.end(JSON.stringify(gather_info.query, null , 2));
}

http.createServer(handleRequest).listen(8202, '127.0.0.1');