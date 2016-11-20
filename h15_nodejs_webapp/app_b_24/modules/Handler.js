var url = require('url');
var Writer = require('./Writer.js');

exports.Handler = function(request, response) {
    var queueParams = url.parse(request.url, true);
    if(queueParams.query.image != null) {
        Writer.writeResponse('image/image.jpeg', {'contentType': 'image/jpeg'}, response);
    } else {
        Writer.writeResponse('data/data.json', {
            'contentType': 'application/json',
            'Image-Url':'http://localhost:8224/?image'
            }, response);
    }
};
