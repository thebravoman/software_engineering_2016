var url = require('url');
var Writer = require('./Writer.js');

exports.requestHandler = function(request, response) {
    var queueParams = url.parse(request.url, true);
    if(queueParams.query.image != null) {
        Writer.writeResponse('image/image.jpeg', {'contentType': 'image/jpeg'}, response);
    } else {
        Writer.writeResponse('data/data.json', {
            'contentType': 'application/json',
            'Image-Url':'http://localhost:8214/?image'
            }, response);
    }
};
