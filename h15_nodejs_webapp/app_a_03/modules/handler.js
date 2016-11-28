var fs = require('fs');
 
function readData(filename, contentType, response)
{
    console.log('providing ' + filename);
    fs.exists(filename, function(exists) {
        if (exists) {      
                fs.readFile(filename, function(error, data) {  
                    if (!error) {
                        //console.log(data);
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
    readData(filename,contentType, response);
};
 
exports.queryData = function(filename, headers, key, query, response) {
    fs.exists(filename, function(exists) {
        if (exists) {      
                fs.readFile(filename, function(error, data) {  
                    if (!error) {
                        var filteredData = [];
                        var allData = JSON.parse(data);
                       
                        if (Array.isArray(allData.characters)){
                           
                            allData.characters.forEach(function(character) {
                                
                                console.log("Going through character " + character.type);
                                
     							if (character[key] === query) {
    								filteredData.push(character);
    							}
                              
                               
                            });
                        }
                        if (filteredData.length > 0) {
                           
                            var imageUrl = 'images/' + query.type;
                            headers["Image-Url"] = 'http://localhost:8103/?image='+query.type;
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
        else
        {
            response.writeHead(404);
            response.end('Image not found');
        }
    });
};
