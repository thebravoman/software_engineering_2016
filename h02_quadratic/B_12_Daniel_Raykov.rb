def rounding(number)
		
	if number % 1 != 0
		return "%.2f" % number
	else 
		return number.to_i	
	end

end

a = ARGV[0].to_i
b = ARGV[1].to_i
c = ARGV[2].to_i

d = b*b - 4*a*c

if a == 0 && b == 0 && c == 0 then puts "#"

elsif a == 0 && b != 0
x = -c / b
puts rounding(x)

elsif d == 0
x = -b / (2*a)
puts rounding(x)

elsif d > 0
x1 = (-b + Math.sqrt(d)) / (2*a)
x2 = (-b - Math.sqrt(d)) / (2*a)

if x1 > x2 then puts "#{rounding(x1)},#{rounding(x2)}"
else puts "#{rounding(x2)},#{rounding(x1)}"

end

end
