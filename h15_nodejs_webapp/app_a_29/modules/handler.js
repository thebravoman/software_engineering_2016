var fs = require('fs');

exports.provideData = function(filename, headerData, response) {
    readData(filename, headerData, response);
}

exports.searchData = function(filename, headerData, query, response) {
    matchData(filename, headerData, query, response);
}

function readData(filename, headerData, response) {
    console.log('providing', filename);
    fs.exists(filename, function(exists) {
        if (exists) {
            fs.readFile(filename, function(error, data) {
                if (error) {
                    response.writeHead(500);
                    response.end('Internal Server Error');
                } else {
                    response.writeHead(200, headerData);
                    response.end(data);
                }
            });
        } else {
            response.writeHead(404);
            response.end('File not found');
        }
    });
}

function matchData(filename, headerData, query, response) {
    console.log('providing', filename);

    fs.exists(filename, function(exists) {
        if (exists) {
            
            fs.readFile(filename, function(error, data) {
                if (error) {
                    response.writeHead(500);
                    response.end('Internal Server Error');
                
                } else {
                    var allData = JSON.parse(data);                    
                    var filteredData = [];
                    var queryData = {};
                    
                    if (Array.isArray(allData.characters)) {
                        allData.characters.forEach(function(character) {
                            var matchingQueryParams = 0;
                            var key;
                            for (key in query) {
                                if (character[key] === query[key]) {
                                    matchingQueryParams++;
                                }
                            }
                            if (matchingQueryParams == Object.keys(query).length) {
                                filteredData.push(character);
                            }
                            if (filteredData.length > 0) {
                                queryData[JSON.stringify(query)] = filteredData;
                                headerData["Image-Url"] = 'http://localhost:8129/?image=' + query[key];
                            }
                        });
                        if (Object.keys(queryData).length <= 0) {
                            response.writeHead(404);
                            response.end('Data not found');
                        }
                    }
                    response.writeHead(200, headerData);
                    response.end(JSON.stringify(queryData, null , 2));
                }
            });
        } else {
            response.writeHead(404);
            response.end('File not found');
        }
    });
}