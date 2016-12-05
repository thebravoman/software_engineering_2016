var express = require('express');
var fs = require('fs');
var dataHandler = require('../modules/handler.js');

var router = express.Router();

router.get('/', function(req, res, next) {
	if (req.query.image != null) {
        dataHandler.provideData('./image/' + req.query.image + '.jpg', {
            'Content-Type': 'image/jpeg'
        }, res);
    } else if (isEmptyObject(req.query)) {
        dataHandler.provideData('./data/data.json', null, res);
    } else {
        dataHandler.searchData('./data/data.json', req.query, res);
    }
});

function isEmptyObject(obj) {
    return !Object.keys(obj).length;
}

module.exports = router;
