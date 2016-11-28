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
                            
                            var key;
                            for (key in query) {
                                if (character[key] === query[key] && key in character) {
                                    filteredData.push(character);
                                    break;
                                }
                            
                            }
                            if (filteredData.length > 0) {
                                queryData[JSON.stringify(query)] = filteredData;
                            
                            } else {
                                response.writeHead(404);
                                response.end('Data not found');
                            }
                        });
                        queryData = JSON.stringify(queryData, null , 2);
                    }
                    response.writeHead(200, headerData);
                    response.end(queryData);
                }
            });
        } else {
            response.writeHead(404);
            response.end('File not found');
        }
    });
}