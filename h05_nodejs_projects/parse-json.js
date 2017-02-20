/**
 * New node file
 */

var fs = require('fs');
var http = require('http');
var port = 8080;
var url = require('url');


function parseJSONSync(className, number)
{
	var prefix ="app";
	var suffix = "/package.json";
	var projectPath = prefix+'_'+className+'_';
	if (number < 10)
	{
		projectPath += '0' + number + suffix;
	}
	else
	{
		projectPath += number + suffix;
	}
	var path = './' + projectPath;
	if (fs.existsSync(path))
	{
		
		var jsonAsString = fs.readFileSync(projectPath);
		var packageJSON = JSON.parse(jsonAsString);
		console.log(packageJSON.author + ':' + projectPath);
		
	}
	
	
}

function parseJSONAsync(className, number)
{
	var prefix ="app";
	var suffix = "/package.json";
	var projectPath = prefix+'_'+className+'_';
	if (number < 10)
	{
		projectPath += '0' + number + suffix;
	}
	else
	{
		projectPath += number + suffix;
	}
	var path = './' + projectPath;
	if (fs.exists(path, function (exists)
	{   var data = [];
		if (exists)
		{
				var jsonAsString = fs.readFile(projectPath, function(error, data){			    
				var packageJSON = JSON.parse(data);
				console.log(packageJSON.author + ':' + projectPath);	
			});
				
		}
		
	}));
	
	
}

function handle(request, response)
{
	
	var classNames = ['a', 'b'];
	for (var c =0; c < classNames.length; c++)
	{
		for (var i = 1; i < 30; i++)
		{
		
			parseJSONAsync(classNames[c], i);
		}
	}
	
	
	
}


handle(null, null);

