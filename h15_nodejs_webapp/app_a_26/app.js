var url = require('url');
var http = require('http');

var module = require('./modules/get.js');
var port = 8126;


function GetRequest(request, response){
  console.log('GetRequest initiated.');
      var queryArguments = url.parse(request.url, true);

    for(var attributename in queryArguments.query){

      if(attributename == "image"){
          module.provideData('./image/hackerman.jpg',
          {'Content-Type': 'image/jpg'},
          response);

      }
      else{
        module.provideData('./data/data.json',
        {'Content-Type': 'application/json',
        'Image-Url': 'http://localhost:8126/?image'},
        response);
      }


    }

//    response.end(JSON.stringify(queryArguments.query));


}


http.createServer(GetRequest).listen(port, '127.0.0.1');
  console.log('listening on 127.0.0.1:',port);
