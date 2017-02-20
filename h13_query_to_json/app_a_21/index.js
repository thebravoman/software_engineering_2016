var http = require('http');
var url = require('url');


function handleRequest(request, response)
{

	contentType.format({type : "application/json"});
	  response.writeHead(200, {
			'Content-Type' : 'application/json'    	
	  });
	response.end(JSON.stringify(get_params.query,null,2));
}




http.createServer(handleRequest).listen(8121, '127.0.0.1');