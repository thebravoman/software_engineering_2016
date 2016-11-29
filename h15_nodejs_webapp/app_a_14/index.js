const http = require('http');
const url = require('url');
const dataProvider = require('./modules/dataProvider.js');

const port = 8114;
const hostname = 'localhost';

function handleRequest(request, response) {
    switch(request.method) {
        case "GET":
            const query = url.parse(request.url, true).query;
            if (query.image != null) {
                dataProvider.provideData('images/'+query.image+'.jpeg',{'Content-Type': 'image/jpeg'}, response);
            }
            else if (query != null && Object.keys(query).length > 0) {
                dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, query, response);
            }
            else {
                dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
            }
            break;
        default:
            writeHead(204);
            response.end();
    }
}

http.createServer(handleRequest).listen(port, hostname, function(err) {
    if(err){
        console.log(err);
        return;
    }
    console.log("Listening at " + hostname + ":" + port);
});
