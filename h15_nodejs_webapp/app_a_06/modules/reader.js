let fs = require('fs');

let  data = (function(){
    function getData(file, headerContent, response){
        fs.exists(file, function(exists)
        {
            if (exists)
            {
                fs.readFile(file, function(error, data)
                {
                    if (error)
                    {
                        response.writeHead(500);
                        response.end('Internal Server Error');
                    }
                    else
                    {
                        response.writeHead(200, headerContent);
                        response.end(data);
                    }
                });
            }
            else
            {
                response.writeHead(404);
                response.end('File not found');
            }
        });
    }

    return{
        getData
    }
}());  

module.exports = data;
