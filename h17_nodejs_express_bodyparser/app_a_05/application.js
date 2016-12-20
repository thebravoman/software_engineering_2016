var url = require('url');
var bodyParser = require('body-parser');
var express = require('express');
var dataProvider = require('./modules/dataProvider.js');
var port = 8105;
var app = express();
app.use(bodyParser.json());
var router = express.Router();
router
	.get('/', (req, res) => {
		var get_params = url.parse(req.url, true);

		if (get_params.query.image != null) {
			dataProvider.provideData('images/'+get_params.query.image+'.jpg', res);
		}
		else if (Object.keys(get_params).length > 0) {
			dataProvider.queryData('data/data.json', get_params.query, res);
		}
		else {
			dataProvider.provideList('data/data.json', res);
		}
	});	

app.use('/', router);

app.listen(port, () => {
	console.log("Listening on"+port);
});
