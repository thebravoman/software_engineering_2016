fs = require('fs');

var solve = require('./modules/solve.js');

var jsonObject,answerObject;

path = 'input/input-2.json';

answerObject = solve.export(path);

console.log(JSON.stringify(answerObject,undefined,1));
