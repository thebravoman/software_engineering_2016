var http = require("http");
var url = require("url");
var content_type = require("content-type");
const port = 8110;

function handle_request(request, response)
{
	content_type.format({type: "application/json"});
	var data = url.parse(request.url, true);
	response.end(JSON.stringify(data.query, null , 2));
}

http.createServer(handle_request).listen(port, '127.0.0.1');
