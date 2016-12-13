var express = require('express');
var router = express.Router();
var proccessGETRequest = require('../modules/handler.js');

router.get('/', function(request, response, next) {
	
	var GET_parametres = request.query;
  
	if(GET_parametres.image != null) {
		proccessGETRequest.provideData('images/' + GET_parametres.image + '.jpg', GET_parametres, response);
	} else if(Object.keys(GET_parametres) != null) {
		proccessGETRequest.queryData('data/data.json', GET_parametres, response);
	} else {
		proccessGETRequest.provideData('data/data.json', request, response);
	}
});

module.exports = router;
