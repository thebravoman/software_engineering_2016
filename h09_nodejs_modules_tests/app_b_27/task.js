var math = require("./modules/math.js");
var fs = require('fs');
function parseJSON(directory){
    if(fs.existsSync(directory)) {
        var read = fs.readFileSync(directory);
        var parse = JSON.parse(read);
        console.log(math.solution(parse.a, parse.b, parse.c))
    }
}
parseJSON("./test/input-1.json");
parseJSON("./test/input-2.json");
parseJSON("./test/input-any.json");
parseJSON("./test/input-nan.json");
