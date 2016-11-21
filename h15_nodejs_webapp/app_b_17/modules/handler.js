var url = require('url');
var responseWriter = require('./writeResponse.js');

function requestHandle(request, response) {
    var params = url.parse(request.url, true);
    
    if(params.query.image != null) {
    	responseWriter.writeResponse('../image/image.jpeg', 
        		{'contentType': 'image/jpeg'}, response);
    } 
    else {
    	responseWriter.writeResponse('data/data.json', {
            'contentType': 'application/json',
            'Image-Url':'http://localhost:8208/?image'
            }, response);
    }
}

exports.handleRequest = function()
{
	requestHandle();	
};