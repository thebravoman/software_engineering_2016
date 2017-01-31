// var http = require('http');
// var url = require('url');
// var port = 8101;
// var dataProvider = require('./modules/handle_module.js');
//
// function handleRequest(request, response)
// {
//   var get_params = url.parse(request.url, true);
//   if (get_params.query.image != null && get_params.query.image != null)
//   {
//     console.log("image only")
//     dataProvider.provideData('images/'+get_params.query.image+'.jpg',{'Content-Type': 'image/jpeg'}, response)
//   }else if (Object.keys(get_params.query).length){
//       console.log("queeeeeeeeery")
//       dataProvider.queryData('data/data.json',{'Content-Type': 'application/json'}, get_params.query, response);
//   }else{
//     dataProvider.provideData('./data/data.json', {'Content-Type': 'application/json','Image-Url':'http://localhost:8101/?image'}, response);
//   }
//
// }
//
// console.log('listening on localhost:8101');
//
//
// http.createServer(handleRequest).listen(port, '127.0.0.1');
var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var http = require('http')

var routes = require('./routes/index')

var app = express()

var port = 8101


app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.use(function(req, res, next) {
    var err = new Error('Not Found')
    err.status = 404
    next(err)
})

http.createServer(app).listen(port, function(){
    console.log('Express server listening on port ' + port)
})
