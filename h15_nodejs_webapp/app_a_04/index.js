var http = require('http');
var url = require('url');
var dataHandler = require('./modules/get_handler.js');

function dataRequest(request, response) {
	var req =url.parse(request.url,true);
	if (req.query.image != null) {
		dataHandler.dataHandler('image/image.jpg',{'Content-Type': 'image/jpg'}, response);
	} else {
		dataHandler.dataHandler('./data/data.json', {
            'Content-Type': 'application/json',
            'Image-Url':'http://localhost:8104/?image'
        }, response);
	}
}

http.createServer(dataRequest).listen(8104, '127.0.0.1', function (err) {
  if (err) {
    throw err;
  }
  console.log(`Listening on port 8104`);
});
