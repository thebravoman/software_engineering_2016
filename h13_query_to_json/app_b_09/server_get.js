var url = require('url');
var http = require('http');

function processGETRequest(request, response) {
	
	response.setHeader("Content-Type", "application/json");
	
	var GET_parametres = url.parse(request.url, true);
	
	response.end(JSON.stringify(GET_parametres.query, null, 2));
}

http.createServer(processGETRequest).listen(8209, '127.0.0.1');
