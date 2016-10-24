var module = require('../module/solution.js');
var fs = require('fs');
var json = new Object;
var input_nan = fs.readFileSync('./input-nan.json');
var input_any = fs.readFileSync('./input-any.json');
var input_1_root = fs.readFileSync('./input-1.json');
var input_2_roots = fs.readFileSync('./input-2.json');
    exports.test_nan = function(test)
    {
        var input = JSON.parse(input_nan);
        json.x1 = "NaN";
        json.x2 = "NaN";
        let a = input.a;
        let b = input.b;
        let c = input.c;
        test.equal(json.to_json, module.solve(a,b,c));
        test.done();
    };
    exports.test_any = function(test)
    {
        var input = JSON.parse(input_any);
        let a = input.a;
        let b = input.b;
        let c = input.c;
        json.x = "Any";
        test.equal(json.to_json, module.solve(a,b,c));
        test.done();
    };
    exports.test_1_root = function(test)
    {
        var input = JSON.parse(input_1_root);
        let a = input.a;
        let b = input.b;
        let c = input.c;
        json.x = -2;
        test.equal(json.to_json, module.solve(a,b,c));
        test.done();
    };
    exports.test_2_roots = function(test)
    {
        var input = JSON.parse(input_2_roots);
        let a = input.a;
        let b = input.b;
        let c = input.c;
        json.x1 = -0.2;
        json.x2 = -1;
        test.equal(json.to_json, module.solve(a,b,c));
        test.done();
    };
