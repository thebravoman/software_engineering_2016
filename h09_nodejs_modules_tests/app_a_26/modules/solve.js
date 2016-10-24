var fs = require('fs');
var jsonObject;

exports.export = function (path)
{
  jsonObject = parseSync(path);
  return discriminant_calc(jsonObject);
}

function parseSync(path)
{
  var jsonFile = fs.readFileSync(path);
  var jsonObject = JSON.parse(jsonFile);
  return jsonObject;
}

function discriminant_calc(jsonObject)
{
  var answerObject;

  var a,b,c,D,x1,x2;


  a = jsonObject.a;
  b = jsonObject.b;
  c = jsonObject.c;



  D = Math.pow(b,2) - 4*a*c;

  if(D > 0)
  {

  x1 = (-b + Math.sqrt(D)) / (2*a);
  x2 = (-b - Math.sqrt(D)) / (2 * a);

  }
  if(D == 0)
  {
    x2 = x1 =  (-b)/(2*a);
  }

  if(D < 0)
  {
    x1 = "All";
    x2 = "All";
    D = undefined;
  }

  if(x1 % 1 != 0 && D >= 0)
  {
    x1 = Number(x1.toFixed(2));
  }

  if(x2 % 1 != 0 && D >= 0)
  {
    x2 = Number(x2.toFixed(2));
  }


  if(a == 0 && b == 0 && c == 0)
  {
    x1 = "NaN";
    x2 = "NaN";
    D = undefined;
  }

  answerObject =
  {
    "x1" : x1,
    "x2" : x2,
    "D" : D
  }

  return answerObject;
}
