exports.quadratic_solution = function(a, b, c) {
  var result = {};
  if(a === 0 && b === 0 && c === 0){
    result = {"x": "any"};
    return result;
  }
  d = disc(a, b, c);
  if(d > 0) {
    x1 = ((-b) - Math.sqrt(d)) / (2 * a);
    x2 = ((-b) + Math.sqrt(d)) / (2 * a);
    result = {"x1": is_int(x1),
              "x2": is_int(x2)};

    return result;
  }else if (d === 0) {
    result = {"x": is_int((-b) / (2 * a))};
  }else{
    result = {"x1": NaN,
              "x2": NaN};
  }
  return result;
};

function disc(a, b, c) {
  d = b * b - (4 * a * c);
  return d;
}

function is_int(x) {
  if(x % 1 === 0) {
    return x;
  }else{
    return Math.round(x * 100) / 100;
  }
}
