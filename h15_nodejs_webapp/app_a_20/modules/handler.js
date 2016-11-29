var fs = require('fs');

exports.provideData = function(filename, contentType, response){
	console.log('Providing ' + filename);

	fs.exists(filename, function(exists){
		if(exists){
			fs.readFile(filename, function(error, data){
				if(!error){
					response.writeHead(200, contentType);
					response.end(data);
				} else {
					response.writeHead(500);
					response.end('Internal Server Error');
				}
			});
		} else {
			response.writeHead(404);
			response.end('Image not found');
		}
	});
}

exports.queryData = function(filename, headers, query, response) {
  fs.exists(filename, function(exists) {
    if (exists) {
      fs.readFile(filename, function(error, data) {

		if (!error) {
          var filteredData = [];
          var allData = JSON.parse(data);

        if (Array.isArray(allData.characters)) {
          allData.characters.forEach(function(character) {
			var equal = false;

			for(var key in query){
				if(key in character){
					if(character[key] === query[key]){
						equal = true;
					}
				}
			}

			if(equal){
				filteredData.push(character);
			}
          });
        }

		if (filteredData.length > 0) {
			headers["Image-Url"] = 'http://localhost:8120/?image='+filteredData[0].type;
		}

		  response.writeHead(200, headers);
		  response.end(JSON.stringify(filteredData));
        }
        else {
          response.writeHead(500);
          response.end('Internal Server Error');
        }
      });

    }
    else {
      response.writeHead(404);
      response.end('Image not found');
    }
  });
};
