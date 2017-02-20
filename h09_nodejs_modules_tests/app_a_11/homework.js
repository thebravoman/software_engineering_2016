
var fs = require('fs');
var solution = require('./module/solve.js');

function parseJSON(path){
  if(fs.existsSync(path)){
    var contentString = fs.readFileSync(path);
    var content = JSON.parse(contentString);
    // console.log(contentString);
    var a = content['a'];
    var b = content['b'];
    var c = content['c'];
    console.log(solution.quadratic_solution(a, b, c));
  }
}

parseJSON('./input_files/a_b_c_0.json');
parseJSON('./input_files/d_bigger_than_0.json');
parseJSON('./input_files/d_equal_0.json');
parseJSON('./input_files/d_less_than_0.json');
