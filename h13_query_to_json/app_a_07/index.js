const http = require('http');
const url = require('url');
const port = 8107;

function handleRequest(request, response) {
  switch (request.method) {
    case 'GET':
      let query = url.parse(request.url, true).query;
      response.writeHead(200, {
        'Content-Type': 'application/json'
      });
      response.end(JSON.stringify(query, null, 4));
      break;
    default:
      response.end();
  }
}

http.createServer(handleRequest).listen(port, '127.0.0.1', function (err) {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}...`);
});
