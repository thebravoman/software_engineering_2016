var url = require('url');
var responseWriter = require('./requestWriter.js');

exports.Handler = function(request, response) {
    var queueParams = url.parse(request.url, true);
    if(queueParams.query.image != null) {
        responseWriter.writeResponse('image/image.jpeg', {'contentType': 'image/jpeg'}, response);
    } else {
        responseWriter.writeResponse('data/data.json', {
            'contentType': 'application/json',
            'Image-Url':'http://localhost:8224/?image'
            }, response);
    }
};
