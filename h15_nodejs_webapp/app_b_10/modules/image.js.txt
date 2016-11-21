var fs = require('fs'); 
 

 function ImageReader(filename, response) 
 { 
 	console.log('providing ' + filename); 
 	fs.exists(filename, function(exists) { 
 		if (exists) {		 
 				fs.readFile(filename, function(error, data) {	 
 					if (!error)	{ 
 						response.writeHead(200, {'Content-Type': 'image/jpeg'}); 
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

 exports.provideImage = function(response) 
 { 
 	readImage('./image/image.jpg', response);	 
 }; 
