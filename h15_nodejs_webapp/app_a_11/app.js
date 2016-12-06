var http = require('http');
var url = require('url');
var dataProvider = require('./modules/handler.js');

var port = 8111;

function handleRequest(request, response) {
    var get_params = url.parse(request.url, true);
    console.log(get_params.query);
    if(get_params.query.image != null && get_params.query.image != null) {
        console.log("Image called...");
        dataProvider.provideData('./images/' + get_params.query.image + '.jpeg', {'Content-Type': 'image/jpeg'}, response);
        console.log('./images/' + get_params.query.image + '.jpeg')
    } else if (Object.keys(get_params.query).length) {
        dataProvider.queryData('./data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
        console.log("AskingQuery called...");
	} else {
        console.log("In the else statement");
        dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json'}, response);
    }
}



http.createServer(handleRequest).listen(port, 'localhost');
