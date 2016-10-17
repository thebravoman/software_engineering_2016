function solve() {
    function checkIfFloorIsNeeded(num) {
        if(num % 1 !== 0){
            num = num.toFixed(2);
        }
        else{
            num = Math.round(num);
        }

        return num;
    }

    var fs =  require('fs');
    var result = {};

    fs.readFile('./input.json', function(err, data){
        if(err !== null){
            throw 'Error';
        }

        var input = JSON.parse(data);

        if(input.a === 0){
            if(input.b === 0 && input.c === 0){
                result.x = 'Everything';
            }
            else{
                result.x1 = -input.c / input.b;
                result.x2 = -input.c / input.b;
                result.D = Math.pow(input.b, 2);
            
                result.x1 = checkIfFloorIsNeeded(result.x1);
                result.x2 = checkIfFloorIsNeeded(result.x2);
                result.D = checkIfFloorIsNeeded(result.D);
            }
        }
        else{
            var discriminant = Math.pow(input.b, 2) -4 * input.a * input.c;

            if(discriminant < 0){
                result.D = 'there are no roots';
            }
            else{
                result.x1 = (-input.b + Math.sqrt(discriminant)) / (2 * input.a);
                result.x2 = (-input.b - Math.sqrt(discriminant)) / (2 * input.a);
                result.D = discriminant;    

                result.x1 = checkIfFloorIsNeeded(result.x1);
                result.x2 = checkIfFloorIsNeeded(result.x2);
                result.D = checkIfFloorIsNeeded(result.D);
            }
        }
        
        console.log(JSON.stringify(result, null, 4));
    });
}

solve();
