<<<<<<< HEAD
let http = require('http');
let url = require('url');
let dataProvider = require('./modules/data-provider.js');

let port = 8106;
let hostname = 'localhost';

function handleRequest(request, response)
{
	if (request.url ==='/favicon.ico')
	{
		console.log('Ignore facicon request...');
	}
	else
	{	
		let get_params = url.parse(request.url, true);

		if (get_params.query.image != null)
		{
			dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response);
=======
const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');

const dataProvider = require('./modules/data-provider.js');

const port = 8180;

let app = express();

app.use(bodyParser.json());

let router = express.Router();

router
	.get('/', (req, res) => {
		let get_params = url.parse(req.url, true);

		if (get_params.query.image != null) {
			dataProvider.provideData('images/' + get_params.query.image + '.jpg', res);
>>>>>>> 527c97df9ab45c0b59d13b9ab64d5e046afdde85
		}
		else if (Object.keys(get_params).length > 0)
		{
			dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
		}
		else
		{
			dataProvider.provideList('data/data.json',{'Content-Type': 'application/json'}, response);
		}
	}
}

http.createServer(handleRequest).listen(port, hostname);
