var http = require('http');
var url = require('url');
var contentType = require('content-type');

function processGetRequest(request, response) {
    console.log('Getting')
    contentType.format({
        type: "application/json"
    });
    var get_params = url.parse(request.url, true);
    var object = JSON.stringify(get_params.query);
    response.end(object);
}
http.createServer(processGetRequest).listen(8129, '127.0.0.1', function(){
    console.log('listening on localhost:8129');
});
