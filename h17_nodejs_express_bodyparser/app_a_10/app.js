const express = require('express');
const url = require('url');
const dataProvider = require('./modules/handler.js');
const port = 8110;
const app = express();

app.get('*', (req, res) => {
    if (typeof req.query.image !== 'undefined')
	{
        dataProvider.provideData('images/' + req.query.image + '.jpg','image/jpeg', res);
    }
    else if (Object.keys(req.query).length !== 0)
	{
        console.log('query', req.query);
        dataProvider.queryData('data/data.json', 'application/json', req.query, res);
    }
    else
	{
        dataProvider.provideList('data/data.json', 'application/json', res);
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});