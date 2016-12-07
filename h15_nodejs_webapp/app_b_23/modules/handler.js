var url = require('url');
var responseWriter = require('./responseWriter.js');

exports.requestHandler = function(request, response) {
    var urlParams = url.parse(request.url, true);
    if(urlParams.query.image != null) {
        responseWriter.writeResponse('image/image.jpeg', {'Content-Type': 'image/jpeg'}, response);
    } else {
        responseWriter.writeResponse('data/data.json', {
            'Content-Type': 'application/json',
            'Image-Url':'http://localhost:8223/?image'
            }, response);
    }
};
