const express = require('express');
const router = express.Router();
const dataProvider = require('../modules/data-provider.js');

const dbProvider = require('../modules/mongodb-provider.js');


router.get('/', function(request, response, next){
	console.log('Get all');
	dbProvider.provideList(response);
	
});
router.post('/', function(request, response, next){
	dbProvider.saveCharacter(request, response);
});

router.post('/:type/image', function(request, response, next){
	dbProvider.saveImage(request, response);
});

router.get('/:type/image', function(request, response, next){
	dbProvider.getImage(request, response);

});

router.get('/:type', function(request, response, next){
	dbProvider.queryData({}, request.params.type, response);
});

module.exports = router;
