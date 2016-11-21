var fs = require('fs');

exports.writeResponse = function(file_name, contentType, resp) {
    fs.exists(file_name, function(exists){
        if(!exists) {
        	
        	resp.writeHead(404);
            resp.end("File not found");
          
        } else {
              
            fs.readFile(file_name, function(error, fileData) {
            	
                if(error) {
                    resp.writeHead(500);
                    resp.end("Internal server error");
                } else {
                	
                    resp.writeHead(200, contentType);
                    resp.end(fileData);
                }
            });
        }
        
    });
    
};
