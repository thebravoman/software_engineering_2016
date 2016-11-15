let http = require('http');
let url = require('url');

function handleRequest(request, response)
{
    if(request.method == 'GET'){
		let data = url.parse(request.url, true);
		response.writeHead(200, {
			'Content-type': 'application/json'
		});
		response.end(JSON.stringify(data.query));
	}
}

http.createServer(handleRequest).listen(8106,'127.0.0.1');
console.log('Listening');
