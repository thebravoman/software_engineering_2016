
const http = require('http');
const url = require('url');
const port = 8121;

function handle_request(request, response) {
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

http.createServer(handle_request).listen(port, '127.0.0.1', function (err) {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});_request).listen(8121, '127.0.0.1');