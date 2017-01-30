const var express = require('express');
const var path = require('path');
const var favicon = require('serve-favicon');
const var logger = require('morgan');
const var cookieParser = require('cookie-parser');
const var bodyParser = require('body-parser');
const var http = require('http');

const var routes = require('./routes/index');

const var app = express();

const var port = 8110;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes);

app.use(function(req, res, next)
{
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

http.createServer(app).listen(port, function()
{
    console.log('Express server listening on port ' + port);
});
