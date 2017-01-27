var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var http = require('http');
var dataProvider = require('./modules/data-provider.js');
var port = 8126;
var app = express();


app.use(bodyParser.json());

var router = express.Router();

router.get('/', (req, res) => {
		var get_params = url.parse(req.url, true);

		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/'+get_params.query.image+'.jpeg', res);
		}

		else if (Object.keys(get_params).length > 0)
		{
			dataProvider.queryData('data/data.json', get_params.query, res);
		}

		else
		{
			dataProvider.provideList('data/data.json', res);
		}
	});

app.use('/', router);


console.log('listening on localhost:',port);

http.createServer(app).listen(port, 'localhost');
