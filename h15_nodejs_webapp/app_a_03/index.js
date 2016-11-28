var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');

var port = 8103;

function handleRequest(request, response) {
    var get_params = url.parse(request.url, true);
    
    if(get_params.query.image != null && get_params.query.image != null) {
        
        dataProvider.provideData('./images/image.jpeg', {'Content-Type': 'image/jpeg'}, response);
    } else if (get_params.query != null && get_params.query != null) {
        for(var key in get_params.query) {
           
            dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, key, get_params.query[key], response);
        }
       
	} else {
        dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json'}, response);
    }
}

http.createServer(handleRequest).listen(port, 'localhost');
