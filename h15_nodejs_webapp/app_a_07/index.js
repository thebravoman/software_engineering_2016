const http = require('http');
const url = require('url');
const fs = require('fs');
const port = 8107;

function handleRequest(request, response) {
  switch (request.method) {
    case 'GET':

      const query = url.parse(request.url, true).query;

      if (typeof query.image !== 'undefined') {
        const imagePath = `./images/${query.image}`;

        fs.exists(imagePath, exists => {
          if (exists) {
            fs.readFile(imagePath, (err, image) => {
              if (err) {
                console.log(err);
                response.writeHead(500);
                response.end("Internal server error!");
              } else {
                response.writeHead(200, {
                  'Content-Type': 'image/jpeg'
                });
                response.end(image);
              }
            });
          } else {
            response.writeHead(404);
            response.end("Image not found!");
          }
        });
      } else {
        const jsonObject = require('./data/data.json');

        response.writeHead(200, {
          'Content-Type': 'application/json',
          'Image-Url': `http://localhost:${port}?image`
        });

        response.end(JSON.stringify(jsonObject, null, 4));
      }

      break;

    default:
      response.end();
  }
}

http.createServer(handleRequest).listen(port, '127.0.0.1', err => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}...`);
});
