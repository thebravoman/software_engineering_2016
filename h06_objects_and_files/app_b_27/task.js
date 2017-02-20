var fs = require('fs');
var directory = "input.json";
if (fs.existsSync(directory))
{
    var jsonAsString = fs.readFileSync(directory);
    var packageJSON = JSON.parse(jsonAsString);
    var output = new Object;


    if (packageJSON.a == 0 && packageJSON.b == 0 && packageJSON.c !=0){
        output.x1 = "invalid_data";
        output.x2 = "invalid_data";
        output.D = "invalid_data";
        console.log(JSON.stringify(output,null,2));
    }
    else if (packageJSON.a == 0 && packageJSON.b == 0 && packageJSON.c ==0){
        output.x1 = "every_x";
        output.x2 = "every_x";
        output.D = 0;
        console.log(JSON.stringify(output,null,2));
    }
    else if (packageJSON.a == 0 && packageJSON.b != 0){
        output.x1 = (packageJSON.c / packageJSON.b).toFixed(2);
        output.x2 = (packageJSON.c / packageJSON.b).toFixed(2);
        output.D = "Invalid input";
        console.log(JSON.stringify(output,null,2));

    }
    else if (packageJSON.a != 0){
        output.D = packageJSON.b * packageJSON.b - 4 * packageJSON.a * packageJSON.c;
        if (output.D == 0){
            output.x1 = ((- packageJSON.b) / ( 2 * packageJSON.a )).toFixed(2);
            output.x2 = ((- packageJSON.b) / ( 2 * packageJSON.a )).toFixed(2);
            console.log(JSON.stringify(output,null,2));
        }
        else if (output.D > 0){
            output.x1 = ((- packageJSON.b + Math.sqrt(output.D)) / ( 2 * packageJSON.a )).toFixed(2);
            output.x2 = ((- packageJSON.b - Math.sqrt(output.D)) / ( 2 * packageJSON.a )).toFixed(2);
            console.log(JSON.stringify(output,null,2));
        }
    }

}
else {

    console.log("EeeeEe LMAO file directory doesn't exist");
}
