var express = require('express');
var bodyParser = require('body-parser');
var url = require('url');
var dataProvider = require('./modules/dataprovider.js');

var port = 8122;

let app = express();

app.use(bodyParser.json());

let router = express.Router();

router.get('/', (req, res) => {

		let get_params = url.parse(req.url, true);

		if (get_params.query.image != null) {

			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, res);

		} else if (Object.keys(get_params).length > 0) {

			dataProvider.queryData('data/data.json', {}, get_params.query, res);

		} else {

			dataProvider.provideList('data/data.json', res);

		}
});	

app.use('/', router);

app.listen(port, () => {});
