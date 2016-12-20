const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const dataProvider = require('./modules/data-provider.js');

const port = 8106;

let app = express();

app.use(bodyParser.json());

let router = express.Router();

router
	.get('/', (req, res) => {
		let get_params = url.parse(req.url, true);

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
	console.log(`App running at port: ${port}`);
});

