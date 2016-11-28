var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');

var port = 8111;

function handleRequest(request, response) {
    var get_params = url.parse(request.url, true);
    console.log(get_params.query);
    if(get_params.query.image != null && get_params.query.image != null) {
        console.log("Image called...");
        dataProvider.provideData('./images/image.jpeg', {'Content-Type': 'image/jpeg'}, response);
    } else if (get_params.query != null && get_params.query != null) {
        dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
        console.log("AskingQuery called...");
	} else {
        dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json'}, response);
    }
}



http.createServer(handleRequest).listen(port, 'localhost');
