var http = require('http');
var url = require('url');


function hadnleRequest(request, response) {
	var url_data = url.parse(request.url, true);
	response.writeHead(200, {
    		'Content-Type' : 'application/json'    	
  	});	  
	response.end(JSON.stringify(url_data.query));
}

http.createServer(handleRequest).listen(8117, '127.0.0.1');
