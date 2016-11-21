var http = require('http');
var url = require('url');

function handleRequest(request, response){
	 response.writeHead(200, {
		 'Content-Type' : 'application/json'}
     );
	 
	 var data = url.parse(request.url, true);
	 
     response.end(JSON.stringify(data.query, null, 2));
}

http.createServer(handleRequest).listen(8217, '127.0.0.1');
