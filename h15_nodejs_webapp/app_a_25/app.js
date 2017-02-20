var http = require('http');
var url = require('url');
var handle = require('./modules/handler.js');

function handleRequest(request, response) {
	var get_params = url.parse(request.url, true);
	if(get_params.query.image) {
		console.log('image/' + get_params.query.image + '.jpg');
		handle.image('./image/' + get_params.query.image + '.jpg', response);
	} else if(Object.keys(get_params.query).length) {
		handle.data('./data/data.json', get_params.query, response);
	} else {
		handle.allData('./data/data.json', response);
	}
}

console.log('listening on localhost: 8125');

http.createServer(handleRequest).listen(8125, '127.0.0.1');
