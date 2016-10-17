const fs = require('fs');

function parseJSON(){
  if(fs.existsSync('input.json')){
    var contentString = fs.readFileSync("input.json");
    var content = JSON.parse(contentString);
    // console.log(contentString);
    quadratic(content);
  }
}

function quadratic(contentJSON){
  var a = contentJSON["a"];
  var b = contentJSON["b"];
  var c = contentJSON["c"];
  var D, x1 = null, x2 = null, output;
  D = b * b - (4 * a * c);
  if(D < 0 || !(a && b && c)){
    output = {"x1":(D < 0 ? "None" :"#"),
    "x2":(D < 0 ? "None" :"#"),
    "D":(D < 0 == 0 ? D : D.toFixed(2))};
  }else{
    if(D == 0){
      x1 = (-b) / (2 * a);
      x2 = x1;
      output = {"x1":(x1 % 1 == 0 ? x1 : x1.toFixed(2)),
      "x2":( x2 % 1 == 0 ? x2 : x2.toFixed(2)),
      "D":(D % 1 == 0 ? D : D.toFixed(2))};
    }else if (D > 0) {
      x1 = ((-b) - Math.sqrt(D))/ (2 * a);
      x2 = ((-b) + Math.sqrt(D))/ (2 * a);
      output = {"x1":(x1 % 1 == 0 ? x1 : x1.toFixed(2)),
      "x2":( x2 % 1 == 0 ? x2 : x2.toFixed(2)),
      "D":(D % 1 == 0 ? D : D.toFixed(2))};
    }
  }
  console.log(JSON.stringify(output, null, '\t'));
}

parseJSON();
