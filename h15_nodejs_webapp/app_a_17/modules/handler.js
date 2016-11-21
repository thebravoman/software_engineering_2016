var fs = require('fs');

 function getData(filename,type, response) {
	 fs.exists(filename, function(exists) {
	        if (exists) {
	            fs.readFile(filename, function(error, data) {
	                if (error) {
	                    response.writeHead(500);
	                    response.end('Internal Server Error');
	                } else {
	                    response.writeHead(200, type);
	                    response.end(data);
	                }
	            });
	        } else {
	            response.writeHead(404);
	            response.end('File not found');
	        }
	 }); 
 }
 
 exports.provide = function(filename, type, response) {
	 return getData(filename , type, response);
 }