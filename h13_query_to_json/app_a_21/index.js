
var http = require('http');
var url = require('url');
var ContentType = require('content-type');

function handle_request(request, response)
{

	contentType.format({type : "application/json"});
	var get_params = url.parse(request.url, true);	
	response.end(JSON.stringify(get_params.query,null,1));
}


console.log('listening on localhost:8121');


http.createServer(handle_request).listen(8121, '127.0.0.1');