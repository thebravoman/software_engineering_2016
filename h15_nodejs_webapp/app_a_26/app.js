var http = require('http');
var url = require('url');

var port = 8126;

var hostname = "127.0.0.1"

var module = require('./modules/querryHandle.js');

function handleRequest(request, response) {
	var get_params = url.parse(request.url,true);

	if(get_params.query.image) {
		console.log('getting image'+ get_params.query.image + '.jpg..');
		module.image('./image/' + get_params.query.image + '.jpg', response);
	}

  else if(Object.keys(get_params.query).length) {
      	console.log('Getting Element..');
		module.data('./data/data.json', get_params.query, response,port);
	}

  else {
    console.log('Getting all data ..');
		module.jsonOut('./data/data.json', response,port);
	}
}

console.log('listening on localhost:' + port);
http.createServer(handleRequest).listen(port, hostname);
