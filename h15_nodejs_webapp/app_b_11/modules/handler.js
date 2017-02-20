var url = require('url');
var writer = require('./writer.js');

exports.requestHandler = function(request, response) {
    var getParam = url.parse(request.url, true);

    if(getParam.query.image == null) {
 
        writer.writeResponse('data/data.json', {
            'Content-Type': 'application/json',
            'Image-Url':'http://localhost:8211/?image'}
						, response);

    } else {

    	 writer.writeResponse('image/image.jpg', {
				'Content-Type': 'image/jpg'}
				, response);
        
    }
};
