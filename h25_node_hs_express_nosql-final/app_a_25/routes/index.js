var express = require('express');
var router = express.Router();
var dbProvider = require('../modules/mongodb-provider.js');

router.get('/', function(request, response, next) {
    console.log('Get all');
    dbProvider.provideList(response);
});

router.post('/', function(request, response, next) {
    console.log('Post Character');
    dbProvider.saveCharacter(request, response);
});

router.post('/:type/image', function(request, response, next) {
    console.log('Save image');
    dbProvider.saveImage(request, response);
});

router.get('/:type/image', function(request, response, next) {
    console.log('Get image');
    dbProvider.getImage(request, response);
});

router.get('/:type', function(request, response, next) {
    console.log('Provide data');
    console.log(req.query);
    dbProvider.queryData({}, request.params.type, response);
});

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

module.exports = router;
