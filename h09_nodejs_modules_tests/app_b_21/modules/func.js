/**
 * http://usejsdoc.org/
 */
exports.solve = function (a, b, c)
{
	var result = {};
	var Dis ;
	var x1;
	var x2;
	if (a == b && b == c && a == 0)
	{
		result.x = "ANY";
		return result;
	}else if (a == 0)
		{
		result.x = (-c/b) == 0 ? 0 : (-c/b);
		return result;
		}
	Dis = b * b - (4 * a * c);
	x1 = (-b + (Math.sqrt(Dis))) / (2 * a);
	x2 = (-b - (Math.sqrt(Dis))) / (2 * a);
	if (x1 === x2)
	{
		result.x = +x1.toFixed(2);	
		return result;
	}
	
	result.x1 = +x1.toFixed(2);
	result.x2 = +x2.toFixed(2);	
	return result;
};