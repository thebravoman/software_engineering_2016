var fs = require('fs');

function openData(filename, headerInfo, response) 
{
    fs.exists(filename, function(exists) 
    {
        if(exists) 
        {
            fs.readFile(filename, function(error, data) 
            {
                if(error) 
                {
                    response.writeHead(500);
                    response.end('Server Error');
                } 
                
                else 
                {
                    response.writeHead(200, headerInfo);
                    response.end(data);
                }
            });
            
        } 
        
        else 
        {
            response.writeHead(404);
            response.end("Data not found");
        }
    });
}

exports.provideData = function(filename, headerInfo, response) 
{
    openData(filename, headerInfo, response);
};

exports.queryData = function(filename, headers, query, response) 
{
	fs.exists(filename, function(exists) 
	{
		if (exists)
		{
			fs.readFile(filename, function(error, data) 
			{
				if (!error)	
				{
					var filteredData = [];
					var allData = JSON.parse(data);
                    var check = false;
                    var count = 0;
					if (Array.isArray(allData.characters))
					{
                        allData.characters.forEach(function(character) 
                        {
                            for(var key in query) 
                            {
                                if(key in character) 
                                {
                                    if (character[key] == query[key]) 
                                    {
                                        count++;
                                        
                                        for(var n = 0; n < filteredData.length; n++) 
                                        {
                                            if(filteredData[n] == character) 
                                            {
                                                check = true;
                                            }
                                        }
                                        
                                        if(!check) 
                                        {
                                            filteredData.push(character);
                                        }
                                    }
                                }
                                
                                else 
                                {
                					response.writeHead("404");
                					response.end('Data not found');
                                }
                            }
                        });
					}
					
					if (filteredData.length > 0 && count == Object.keys(query).length)
					{
						var result = {};
						result = filteredData;
						headers["Image-Url"] = 'http://localhost:8111/?image='+filteredData[0].type;

                        response.writeHead(200, headers);
                        response.end(JSON.stringify(result));
					} 
					
					else 
					{
    					response.writeHead("404");
    					response.end('Data not found');
                    }

				}
				
				else 
				{
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