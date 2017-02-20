var fs = require("fs");
var read = fs.readFileSync('input.json');
var take = JSON.parse(read);
//var tos = JSON.stringify(jsonparsed,null,2);
var out = {};
var D;
var a =  take.a;
var b =  take.b;
var c =  take.c;



if(a == 0 && b == 0 ) {
    if(c == 0 ) {
        console.log("#");
    } else {
        console.log("no solution.");
    }
}
if( a == 0 && b != 0 ) {
    out.x1 = (c / b).toFixed(2);
    out.x2 = (c / b).toFixed(2);
    console.log(JSON.stringify(out, null, 2));
}

if(a != 0 ) {
    D = b*b - 4*a*c;
    if( D >= 0 ) {
        out.x1 = ( ( -b + Math.sqrt(D) ) / ( 2*a ) ).toFixed(2);
        out.x2 = ( ( -b - Math.sqrt(D) ) / ( 2*a ) ).toFixed(2);
        out.D = D;
        console.log(JSON.stringify(out ,null,2));
    } else {
        console.log("no solution.");
    }
}

