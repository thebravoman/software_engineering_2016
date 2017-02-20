const http = require('http');
const url = require('url');

function handleRequest(request, response) {
var query = url.parse(request.url, true).query;
response.writeHead(200, {
'Content-Type': 'application/json'
});
response.end(JSON.stringify(query, null, 4));
}

http.createServer(handleRequest).listen(8105, '127.0.0.1');
console.log('Listening on server.... ');
