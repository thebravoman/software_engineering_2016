var http = require('http');
var url = require('url');

function handleRequest(request, response)
{
	var get_params = url.parse(request.url, true);
	response.end(JSON.stringify(get_params.query));
	/*'Hello, ' + get_params.query.first_name + ' ' + get_params.query.last_name*/
}


console.log('listening on localhost:8101');


http.createServer(handleRequest).listen(8101, '127.0.0.1');
