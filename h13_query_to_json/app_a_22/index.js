var url = require("url");
var http = require("http");
var port = 8122

function handleGETRequest(request, response)
{
	
	var content = url.parse(request.url, true);
	response.writeHead(200, {
    		'Content-Type' : 'application/json'    	
  	});	  
	response.end(JSON.stringify(content.query));
}
http.createServer(handleGETRequest).listen(port, '127.0.0.1');
