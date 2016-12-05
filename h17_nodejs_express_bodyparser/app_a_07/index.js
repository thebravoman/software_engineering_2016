const express = require('express');
const url = require('url');
const dataProvider = require('./modules/data-provider.js');

const app = express();
const port = 8107;

app.get('*', (req, res) => {
    if (typeof req.query.image !== 'undefined') {
        dataProvider.provideData('images/' + req.query.image + '.jpg','image/jpeg', res);
    }
    else if (Object.keys(req.query).length !== 0) {
        console.log('query', req.query);
        dataProvider.queryData('data/data.json', 'application/json', req.query, res);
    }
    else {
        dataProvider.provideList('data/data.json', 'application/json', res);
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});
