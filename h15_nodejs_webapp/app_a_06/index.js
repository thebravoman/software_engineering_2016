let http = require('http');
let url = require('url');
let dataProvider = require('./modules/reader.js');

let port = 8106;

function handleRequest(request, response)
{
	if(request.method == 'GET'){
		let data = url.parse(request.url, true);

        if (data.query.image != null) {
            let headers = {
                'Content-Type': 'image/jpeg',
            }

            dataProvider.getData('images/image.jpeg',headers, response);
        }
        else{
            let headers = {
                'Content-Type': 'application/json',
                'Image-Url':'http://localhost:8106/?image'
            }

            dataProvider.getData('./data/data.json', headers, response);
        }
	}	
}

http.createServer(handleRequest).listen(port, 'localhost');
console.log(`Listening on ${port}:`);
