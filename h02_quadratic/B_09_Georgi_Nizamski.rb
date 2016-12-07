a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def is_integer(number)
		
	if number % 1 != 0
		return "%.2f" % number
	else 
		return number.to_i	
	end

end

if a == 0

	if b == 0 && c == 0 then puts "#" end
	
	if b != 0 then puts is_integer(-c / b) end
		
else 
	discriminant = b ** 2 - 4 * a * c;

	if discriminant == 0
		x = -b / (2 * a)
		puts is_integer(x)

	elsif discriminant > 0 
		x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
		x2 = (-b - Math.sqrt(discriminant)) / (2 * a)

		if x1 > x2 then puts "#{is_integer(x2)},#{is_integer(x1)}"
		else puts "#{is_integer(x1)},#{is_integer(x2)}"		
		end
	end
end

