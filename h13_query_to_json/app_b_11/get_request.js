var http = require('http');
var url = require('url');
var contentType = require('content-type');
var particular_port = 8211

function GET_request(request, response)
{

    contentType.format({type : "application/json"});

    var get_params = url.parse(request.url, true);
	
    var params_to_JSON = JSON.stringify(get_params.query, null, 2);

    response.end(params_to_JSON);

}

var created_server = http.createServer(GET_request);

created_server.listen(particular_port, '127.0.0.1');
