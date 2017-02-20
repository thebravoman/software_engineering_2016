var express = require('Express');
var dbProvider = require('../modules/mongodb-provider.js');
var router = express.Router();


router.get('/', function(request, response, next) 
{
    dbProvider.provideList(response);
});

router.post('/', function(request, response, next)
{
    dbProvider.saveCharacter(request, response);
});

router.post('/:type/image', function(request, response, next)
{
    dbProvider.saveImage(request, response);
});

router.get('/:type/image', function(request, response, next)
{
    dbProvider.getImage(request, response);
});

router.get('/:type', function(request, response, next) {
    dbProvider.queryData(request.params.type, response);
});

module.exports = router;
