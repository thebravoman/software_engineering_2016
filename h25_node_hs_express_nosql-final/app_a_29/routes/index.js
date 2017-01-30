var express = require('express');
var dbProvider = require('../modules/mongodb-provider.js');
var router = express.Router();

router.get('/', function(req, res, next) {
	console.log('Get all');
	dbProvider.provideList(res);
});

router.post('/', function(req, res, next) {
	dbProvider.saveCharacter(req, res);
});

router.post('/:type/image', function(req, res, next) {
	dbProvider.saveImage(req, res);
});

router.get('/:type/image', function(req, res, next) {
	dbProvider.getImage(req, res);
});

router.get('/:type', function(req, res, next) {
	dbProvider.provideData({}, req.params.type, response);
});

/*
router.get('/', function(req, res, next) {
	if (req.query.image != null) {
        dataHandler.provideData('./image/' + req.query.image + '.jpg', {
            'Content-Type': 'image/jpeg'
        }, res);
    } else if (isEmptyObject(req.query)) {
        dataHandler.provideData('./data/data.json', {
            'Content-Type': 'application/json'
        }, res);
    } else {
        console.log("here,searchData");
        dataHandler.searchData('./data/data.json', {
            'Content-Type': 'application/json'
        }, req.query, res);
    }
});
*/
function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

module.exports = router;
