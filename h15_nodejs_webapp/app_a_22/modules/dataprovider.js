var fs = require('fs');

function readData(filename, contentType, response) {

    fs.exists(filename, function(exists) {

        if (exists) {

            fs.readFile(filename, function(error, data) {

                if (!error) {

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


exports.provideData = function(filename, contentType, response) {
    readData(filename,contentType, response);
};

exports.provideList = function(filename, contentType,  response) {
    readData(filename,contentType, response);
};

exports.queryData = function(filename, headers, query, response) {

    fs.exists(filename, function(exists) {

        if (exists) {

            fs.readFile(filename, function(error, data) {

                if (!error) {

                    var filteredData = [];
                    var allData = JSON.parse(data);

                    if (Array.isArray(allData.characters)) {

                        allData.characters.forEach(function(character) {

                            let equal = false;
                           
                            for(let word in query) {

                                if(word in character) {
                                   
                                    if(character[word] == query[word]) {

                                        equal = true;
                                    }

                                }
                            }
                            if(equal) {

                                filteredData.push(character);

                            }

                        });
                    }
               
                   /* if (filteredData.length > 0) {

                        if(filteredData[0].type == undefined){

                            headers["Image-Url"] = "Cannot extract image URL from character type";

                        }
                        else{

                            headers["Image-Url"] = 'http://localhost:8180/?image='+filteredData[0].type;

                        }
                    }*/

                    response.writeHead(200, headers);
                    response.end(JSON.stringify(filteredData));

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
};