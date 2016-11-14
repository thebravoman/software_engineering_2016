var http = require('http');
var url = require('url');
var contentType = require('content-type');

function handleGETrequest(request, responce) {
  contentType.format({type: "application/json"});
  var get_data = url.parse(request.url, true);
  responce.end(JSON.stringify(get_data.query));
}

console.log('listening on localhost: 8104/making things happen :D /: ');

http.createServer(handleGETrequest).listen('8104', '127.0.0.1');
