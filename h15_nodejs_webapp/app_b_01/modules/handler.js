var url = require('url');
var writer = require('./writer.js');

exports.request_handler = function(request, response) {
    var get_parametres = url.parse(request.url, true);

    if(get_parametres.query.image != null) {

        writer.write_response('image/image.jpg', {
					'contentType': 'image/jpg'}
					, response);

    } else {

        writer.write_response('data/data.json', {
            'contentType': 'application/json',
            'Image-Url':'http://localhost:8201/?image'}
						, response);
    }
};
