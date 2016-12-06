var fs = require('fs');

function readData(filename, contentType, response)
{
    console.log('providing ' + filename);
    fs.exists(filename, function(exists) {
        if (exists) {
                fs.readFile(filename, function(error, data) {
                    if (!error) {
                        // console.log(data);
                        response.writeHead(200, contentType);
                        response.end(data);
                    }
                    else {
                        response.writeHead(500);
                        response.end('Internal Server Error');
                    }
                });
        }
        else
        {
            response.writeHead(404);
            response.end('Image not found');
        }
    });
}



exports.provideData = function(filename, contentType, response)
{
    readData(filename,contentType, response);
};

exports.provideList = function(filename, contentType,  response)
{
    // console.log("Providing list");
    readData(filename,contentType, response);
};

exports.queryData = function(filename, headers, query, response) {
    fs.exists(filename, function(exists) {
        if (exists) {
                fs.readFile(filename, function(error, data) {
                    if (!error) {
                        var filteredData = [];
                        var allData = JSON.parse(data);

                        if (Array.isArray(allData.characters)){

                            allData.characters.forEach(function(character) {
                                let same = false;
                                // console.log("Going through character " + character.type);
                                for(let key in query) {
                                    if(key in character) {
                                        // console.log("Key: " + key + " | query key: " + query[key] + " | character key: " + character[key]);
                                        if(character[key] == query[key]){
                                            same = true;
                                        }
                                    }
                                }
                                if(same){
                                    filteredData.push(character);
                                }

                            });
                        }
                        //Write in Image-Url the url to the first found character in case its needed for homework again
                        if (filteredData.length > 0) {
                            if(filteredData[0].type == undefined){
                                headers["Image-Url"] = "Cannot extract image URL from character type";
                            }
                            else{
                                headers["Image-Url"] = 'http://localhost:8114/?image='+filteredData[0].type;
                            }
                        }

                        //console.log(filteredData);

                        response.writeHead(200, headers);
                        response.end(JSON.stringify(filteredData));
                    }
                    else {
                        response.writeHead(500);
                        response.end('Internal Server Error');
                    }
                });
        }
        else
        {
            response.writeHead(404);
            response.end('Image not found');
        }
    });
};
