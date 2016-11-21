var url = require('url');
var file = require('./response.js');
exports.requestHandler = function(request, response)
{
	var queueParams = url.parse(request.url, true);
	if(queueParams.query.image != null) file.writeResponse('image/image.jpeg', {'contentType': 'image/jpeg'}, response);
	else
	{
        	file.writeResponse('data/data.json', 
		{
            		'contentType': 'application/json',
            		'Image-Url':'http://localhost:8222/?image'
            	}, response);
    	}
};
