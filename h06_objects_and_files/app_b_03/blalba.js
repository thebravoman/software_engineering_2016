var Object = JSON.parse("file.JSON");

var objectasstring = stringify(Object);
var discrimantnen; = objectasstring[1]*objectasstring[1]  - 4*objectasstring[0]*objectasstring[2];
var resultaten = -objectasstring[1]-sqrt(discrimantnen) / 2*objectasstring[0];

var Rdy = jsonify(resultaten);
Console.log(Rdy);
