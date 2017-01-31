var express = require('express');
var index = require('./routes/index');

var app = express();
app.use('/', index);

app.listen(8120, function () {
    console.log("Listening on port: 8120");
});
