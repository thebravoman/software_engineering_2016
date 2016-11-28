let http = require('http');
let url = require('url');
let handler = require('./modules/handler.js');

function handleRequest(request, response) {
	const query = url.parse(request.url,true).query;
	if(query.image != null) {
		handler.provideData('images/'+query.image+'.jpeg',{'Content-Type': 'image/jpeg'}, response);
	}
	else if(query != null && Object.keys(query).length > 0) {
			handler.queryData('data/data.json', {'Content-Type':'application/json'}, query, response);
		}
	else {
		handler.provideList('data/data.json', {'Content-Type':'application/json'}, response);
	}
		
}

http.createServer(handleRequest).listen(8117,'localhost');
