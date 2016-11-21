const http = require("http");
const url = require("url");

const port = 8114;

const dataProvider = require("./modules/dataProvider.js");

function handleRequest(request, response){
    switch (request.method){
        case "GET":
            let query = url.parse(request.url, true).query;
            if(query.image != null){
                dataProvider.provideData("./images/" + query.image + ".jpeg", {"Content-Type": "image/jpeg"}, response);
            }
            else {
                dataProvider.provideData("./data/data.json", {"Content-Type": "application/json", "Image-Url": "http://localhost:" + port + "?image=turboman"}, response);
            }
            break;
    }
}

http.createServer(handleRequest).listen(port, "127.0.0.1", function(err){
    if(err){
        console.error("Error creating server!", err);
        return;
    }
    console.log("Listening at port " + port);
});
