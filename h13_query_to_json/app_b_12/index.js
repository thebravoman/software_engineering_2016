var http = require('http');
var url = require('url');


function handle_req(request, response)
{

    response.setHeader("Content-Type", "application/json");
    var get_data = url.parse(request.url, true);
    response.end(JSON.stringify(get_data.query, null, 2));

}

http.createServer(handle_req).listen(8212, '127.0.0.1');
