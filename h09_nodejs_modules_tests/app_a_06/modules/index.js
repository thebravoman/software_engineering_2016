let myModule = (function(){
    let fs = require('fs');
    
    function findDiscriminant(a, b, c){
        return Math.pow(b, 2) -4 * a * c;
    }

    function calculateRoots(path){
        let result = {};
        let data = fs.readFileSync(path);
        let input = JSON.parse(data);

        if(input.a === 0){
            if(input.b === 0 && input.c === 0){
                result.x = 'Any';
            }
            else{
                result.x = -input.c / input.b;
            }
        }
        else{
            let discriminant = findDiscriminant(input.a, input.b, input.c);
            
            if(discriminant < 0){
                result.x1 = 'NaN';
                result.x2 = 'NaN';
            }
            else{
                result.x1 = (-input.b + Math.sqrt(discriminant)) / (2 * input.a);
                result.x2 = (-input.b - Math.sqrt(discriminant)) / (2 * input.a);
            }
        }

        return JSON.stringify(result); 
    }
    
    return{
        calculateRoots
    }
}());

module.exports = myModule;
