var http = require('http');
var url = require('url');
var dataHandler = require('./modules/handler.js');

var port = 8129;
var hostname = 'localhost'

function handleGetRequest(request, response) {
    console.log('Getting');
    var get_params = url.parse(request.url, true);
    if (get_params.query.image != null) {
        dataHandler.provideData('./image/image.jpg', {'Content-Type': 'image/jpeg'}, response);
    } else {
        dataHandler.provideData('./data/data.json', {
            'Content-Type': 'application/json',
            'Image-Url': 'http://localhost:' + port + '?image'
        }, response);
    }
}

http.createServer(handleGetRequest).listen(port, hostname, function() {
    console.log('listening on', hostname, ':', port);
});
