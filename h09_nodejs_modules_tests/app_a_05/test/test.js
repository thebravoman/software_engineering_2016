var find=require('../modules/math.js');
var root_any=require('../input/input-any.json');
var root_one=require('../input/input-1.json');
var roots_two=require('../input/input-2.json');
var roots_nan=require('../input/input-nan.json');
exports.test_root_any = function(test)
{
var a=root_any.a;
var b=root_any.b;
var c=root_any.c;
var test_any={};
test_any=find.math(a,b,c);
var output=JSON.stringify(test_any,"\n",1);
var expection={"x":"Any"};
expection=JSON.stringify(expection,"\n",1);
test.equals(output,expection);
test.done();
};
exports.test_root_one=function(test)
{
var a=root_one.a;
var b=root_one.b;
var c=root_one.c;
var test_one={};
test_one=find.math(a,b,c);
var output=JSON.stringify(test_one,"\n",1);
var expection={"x":-1};
expection=JSON.stringify(expection,"\n",1);
test.equals(output,expection);
test.done();
};
exports.test_root_two=function(test)
{
var a=roots_two.a;
var b=roots_two.b;
var c=roots_two.c;
var test_two={};
test_two=find.math(a,b,c);
var output=JSON.stringify(test_two,"\n",1);
var expection={"x1":-2,"x2":-3};
expection=JSON.stringify(expection,"\n",1);
test.equals(output,expection);
test.done();
};
exports.test_root_nan=function(test)
{
var a=roots_nan.a;
var b=roots_nan.b;
var c=roots_nan.c;
var test_nan={};
test_nan=find.math(a,b,c);
var output=JSON.stringify(test_nan,"\n",1);
var expection={"x1":"NaN","x2":"NaN"}; 
expection=JSON.stringify(expection,"\n",1);
test.equals(output,expection);
test.done();
};
