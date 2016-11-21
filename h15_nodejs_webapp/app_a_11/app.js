var http = require('http');
var url = require('url');
var dataProvider = require('./modules/data_provider.js');
var imgProvider = require('./modules/img_provider.js');

var port = 8111;

function handleRequest(request, response) {
    var get_params = url.parse(request.url, true);
    if(get_params.query.image != null) {
        dataProvider.provideData('./images/image.jpeg', {'Content-Type': 'image/jpeg'}, response)
    } else {
        dataProvider.provideData('./data/data.json', {'Content-Type':'application/json', 'Image-Url': 'http://localhost:8111?image'}, response)
    }
}


http.createServer(handleRequest).listen(port, 'localhost');
