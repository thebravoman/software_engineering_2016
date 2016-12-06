var fs = require('fs');

function readData(filename, response)
{
    if(fs.existsSync(filename)) {
        response.status(200);
        return fs.readFileSync(filename);
    }
    else{
        response.status(404);
    }
}

exports.provideRawData = function(filename, response)
{
    return readData(filename, response);
};

exports.provideData = function(filename, response)
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
        response.status(200);
        data = fs.readFileSync(filename);
        let filteredData = [];
        const allData = JSON.parse(data);
        //console.log(allData);
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
        //console.log(filteredData);
        
        if (filteredData.length > 0) {
            if(filteredData[0].type == undefined){
                response.set("Image-Url", "Cannot extract image URL from character type");
            }
            else{
                response.set("Image-Url", "http://localhost:8114/?image="+filteredData[0].type)
            }
	}
        
        return JSON.stringify(filteredData, null, 4);
    }
    else{
        response.status(404);
    }
};
