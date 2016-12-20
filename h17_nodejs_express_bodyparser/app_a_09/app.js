const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const handler = require('./modules/handler.js');

let app = express();

app.use(bodyParser.json());

let router = express.Router();

router
	.get('/', (request, response) => {
		let get_params = url.parse(request.url, true);

		if(get_params.query.image != null)
		{
			handler.provideData('images/' + get_params.query.image + '.jpg', response);
		}
		else if(Object.keys(get_params).length > 0)
		{
			handler.queryData('data/data.json', get_params.query, response);
		}
		else
		{
			handler.provideList('data/data.json', response);
		}
	});

app.use('/', router);

app.listen(8109, () => {
		console.log('Express server listening on port 8109');
});
