var http = require("http");
var url = require("url");
const port = 8110;

function handleRequest(request, response) 
{
	var query = url.parse(request.url, true).query;
	response.writeHead(200, {
	'Content-Type': 'application/json'
	});
	response.end(JSON.stringify(query, null, 2));
}

http.createServer(handleRequest).listen(port, '127.0.0.1');
