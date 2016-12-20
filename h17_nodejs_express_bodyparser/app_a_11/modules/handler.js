const fs = require('fs');

function readData(filename, contentType, response) {
    console.log('providing ' + filename);
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, function (error, data) {
                if (!error) {
                    response.type(contentType);
                    response.send(data);
                }
                else {
                    response.status(500);
                    response.send('Internal Server Error');
                }
            });
        }
        else {
            response.status(404);
            response.send('Image not found');
        }
    });
}


exports.provideData = function (filename, contentType, response) {
    readData(filename, contentType, response);
};

exports.provideList = function (filename, contentType, response) {
    readData(filename, contentType, response);
};

exports.queryData = function (filename, contentType, query, response) {
    fs.exists(filename, function (exists) {
        if (exists) {
            fs.readFile(filename, function (error, data) {
                if (!error) {
                    let result = {};
                    let filteredData = [];
                    let allData = JSON.parse(data);
                    if (Array.isArray(allData.characters)) {
                        allData.characters.forEach(function (character) {
                            let eligible = true;

                            Object.keys(query).forEach(function (param) {
                                if (character[param] !== query[param]) {
                                    if (!isNaN(query[param])) {
                                        query[param] = parseFloat(query[param]);
                                    }
                                    console.log('comparing', character[param], ' and ', query[param]);
                                    eligible = false;
                                }
                            });

                            if (eligible) {
                                filteredData.push(character);
                            }
                        });
                    }

                    if (filteredData.length > 0) {
                        result.characters = filteredData;
                        if (query.image !== null) {
                            let imageUrl = 'images/' + query.image;
                            response.setHeader('Image-Url', `http://localhost:8111/?image=${query.image}`);
                        }
                    }

                    response.json(result);
                }
                else {
                    response.status(500);
                    response.send('Internal Server Error');
                }
            });
        }
        else {
            response.status(404);
            response.send('Image not found');
        }
    });
};
