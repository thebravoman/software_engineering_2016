
var http = require('http');
var url = require('url');
var contentType = require('content-type');

http.createServer(function requestHandler(request, response) {	
    contentType.format({type : "application/json"});
	
	var requestData = url.parse(request.url, true);

    response.end(JSON.stringify(requestData.query,null , 2));
}).listen(8215, '127.0.0.1');
