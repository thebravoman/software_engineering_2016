var fs=require("fs");
var url=require("url");
var port=8108;

exports.image=function image(file, response) 
{
	fs.exists(file, function(exists) 
	{
		if (exists) 
		{
			var img=fs.readFileSync(file);
			response.writeHead(200, { 'Content-Type': 'image/jpeg' });
			response.end(img, 'binary');
		} 
		else 
		{
			response.writeHead(404);
			response.end('Image not found');
		}
	});
};

exports.data = function data(file, query, response) 
{
	fs.exists(file, function(exists) 
	{
		if(exists) 
		{
			fs.readFile(file, function(error, data) 
			{
				if(!error) 
				{
					var result={};
					var filtered=[];
					var allData=JSON.parse(data);
					if(Array.isArray(allData.characters))
					{
						allData.characters.forEach(function(character) 
						{
							if(character.type===query) 
							{
								filtered.push(character);
							}
						});
					}
					if(filtered.length>0) 
					{
						result[query]=filtered;
					}
					response.writeHead(200, 
					{
						'Content-Type': 'application/json',
						'Image-Url': 'http://localhost:' + port +
						'/?image=' + result.type });
					response.end(JSON.stringify(result));
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
			response.end('Data not found');
		}
	});
};

exports.allData=function(file, response) 
{
	fs.exists(file, function(exists) 
	{
		if(exists) 
		{
			fs.readFile(file, function(error, data) 
			{
				if(!error) 
				{
					response.writeHead(200, 
					{
						'Content-Type': 'application/json',
						'Image-Url': 'http://localhost:' + port + '?image' });
					response.end(JSON.stringify(JSON.parse(data)));
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
			response.end('Data not found');
		}
	});
};
