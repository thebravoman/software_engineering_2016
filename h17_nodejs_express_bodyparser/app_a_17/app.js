let express = require('express');
let bodyParser = require('body-parser');
let url = require('url');
let handler = require('./modules/handler.js');
let app = express();
app.use(bodyParser.json());
let route = express.Router();

router
	.get('/', (request, result) => {
		let params = url.parse(request.url, true);

		if (params.query.image != null) {
			handler.provideData('images/'+get_params.query.image+'.jpg', result);
		}
		else if (Object.keys(params).length > 0) {
			handler.queryData('data/data.json', get_params.query, result);
		}
		else {
			handler.provideList('data/data.json', result);
		}
	});	

app.use('/', route);

app.listen(8117, () => {
	console.log(`App running at port: ${port}`);
});
