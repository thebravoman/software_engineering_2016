var url = require('url');
var http = require('http');
var content = require('content-type');
function server_request(request, response) {
	
	content.format({type : "application/json"});
	
	var param = url.parse(request.url, true);
	response.end(JSON.stringify(param.query, null, 2));
}

http.createServer(server_request).listen(8227, '127.0.0.1');
