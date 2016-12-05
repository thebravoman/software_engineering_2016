var express = require('express');
var index = require('./routes/index');

var app = express();
app.use('/', index);

app.listen(8208, function () {
    console.log("Server running on:" + 8208);
});
