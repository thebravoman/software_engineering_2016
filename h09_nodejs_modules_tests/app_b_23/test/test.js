var export_solve = require("../modules/solve.js");

exports.test_none = function(test)
{
    var test_numb = require('./input-none.json');
    var result = export_solve.solve(test_numb.a, test_numb.b, test_numb.c);
    var wanted_result = {
            "x1":"Nan",
            "x2":"Nan"
        };
    test.equals(JSON.stringify(wanted_result), JSON.stringify(result));
    test.done();
};


exports.test_any = function(test)
{
    var test_numb = require('./input-any.json');
    var result = export_solve.solve(test_numb.a, test_numb.b, test_numb.c);
    var wanted_result = {
            "x":"Any"
        };
    test.equals(JSON.stringify(wanted_result), JSON.stringify(result));
    test.done();
};



exports.test_D0 = function(test)
{
    var test_numb = require('./input-1.json');
    var result = export_solve.solve(test_numb.a, test_numb.b, test_numb.c);
    var wanted_result = {
            "x1":-0.6,
            "x2":-1
        };
    test.equals(JSON.stringify(wanted_result), JSON.stringify(result));
    test.done();
};


exports.test_DGreaterThan0 = function(test)
{
    var test_numb = require('./input-2.json');
    var result = export_solve.solve(test_numb.a, test_numb.b, test_numb.c);
    var wanted_result = {
            "x1":-0.28,
            "x2":0.82
        };
    test.equals(JSON.stringify(wanted_result), JSON.stringify(result));
    test.done();
};