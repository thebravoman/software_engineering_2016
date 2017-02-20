var module = require("../modules/solve.js");
var path,testObject;

exports.test_negative = function(test)
{
  path = '../input/input-any.json';
  testObject = {
     "x1": 'All',
     "x2": 'All',
     "D": undefined
   }

  test.deepEqual(testObject,module.export(path));
  test.done();
}

exports.test_none = function(test)
{
  path = '../input/input-nan.json';
  testObject = {
     "x1": "NaN",
     "x2": "NaN",
     "D": undefined
   }

  test.deepEqual(testObject,module.export(path));
  test.done();
}

exports.test_D0 = function(test)
{
  path = '../input/input-1.json';
  testObject = {
     "x1": -2,
     "x2": -2,
     "D": 0
   }

  test.deepEqual(testObject,module.export(path));
  test.done();
}


exports.test_normal = function(test)
{
  path = '../input/input-2.json';
  testObject = {
     "x1": 1,
     "x2": -4,
     "D": 25
   }

  test.deepEqual(testObject,module.export(path));
  test.done();
}
