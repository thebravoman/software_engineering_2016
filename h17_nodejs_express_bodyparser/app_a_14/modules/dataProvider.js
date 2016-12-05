var fs = require('fs');

function readData(filename, response)
{
    if(fs.existsSync(filename)) {
        return fs.readFileSync(filename);
    }
}

exports.provideRawData = function(filename, contentType, response)
{
    return readData(filename, response);
};

exports.provideData = function(filename, contentType, response)
{
    return JSON.parse(readData(filename, response));
};

exports.provideList = function(response)
{
    console.log("Getting list");
    return JSON.parse(readData("public/data/data.json", response));
};

exports.queryData = function(filename, query, response) {
    if(fs.existsSync(filename)) {
        data = fs.readFileSync(filename);
        let filteredData = [];
        const allData = JSON.parse(data);
        //console.log(allData);
        if (Array.isArray(allData.characters)){

            allData.characters.forEach(function(character) {
                if(character.type == query) {
                    filteredData.push(character);
                }
            });
        }
        //console.log(filteredData);
        return JSON.stringify(filteredData, null, 4);
    }

};
