const fs = require('fs');

function readImage(filename, response)
{
    console.log('providing ' + filename);
    fs.exists(filename, function (exists)
	{
        if (exists)
		{
            fs.readFile(filename, function (error, data)
			{
                if (!error)
				{
                    response.type('image/jpeg');
                    response.send(data);
                }
                else
				{
                    response.status(500);
                    response.send('Internal Server Error');
                }
            });
        }
        else
		{
            response.status(404);
            response.send('Image not found');
        }
    });

}

exports.provideImage = function (response)
{
    readImage('./images/image.jpg', response);
};