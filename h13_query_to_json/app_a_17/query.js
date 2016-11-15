var http = require('http');
var url = require('url');
var content_type = require("content-type");

function hadnleRequest(request, response) {
	var url_data = url.parse(request.url, true);
	content_type.format({type: "application/json"});
	response.end(JSON.stringify(url_data.query));
}

http.createServer(handleRequest).listen(8117, '127.0.0.1');