var http = require('http');
var url = require('url');
var contentType = require('content-type'); 

http.createServer(function handle_request(request, response) {

	contentType.format({type : "application/json"});
	var get_data = url.parse(request.url, true);
  var get_query = get_data.query;
  response.end(JSON.stringify(query, null, 2));
      
}).listen(8210, '127.0.0.1');
