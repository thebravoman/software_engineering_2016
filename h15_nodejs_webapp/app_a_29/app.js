var http = require('http');
var url = require('url');
var dataHandler = require('./modules/handler.js');

var port = 8129;
var hostname = 'localhost';

function handleGetRequest(request, response) {
    console.log('Getting');

    var get_params = url.parse(request.url, true);
    if (get_params.query.image != null) {
        dataHandler.provideData('./image/' + get_params.query.image + '.jpg', {
        	'Content-Type': 'image/jpeg'
        }, response);
    
    } else if (isEmptyObject(get_params.query)) {
        dataHandler.provideData('./data/data.json', {
            'Content-Type': 'application/json'
        }, response);
    
    } else {
    	dataHandler.searchData('./data/data.json', {
            'Content-Type': 'application/json'
        }, get_params.query, response);
    }
}

http.createServer(handleGetRequest).listen(port, hostname, function() {
    console.log('listening on', hostname, ':', port);
});

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}