 a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def check_int(number)
		
	if number % 1 != 0
		return number.round(2)
	else 
		return number.to_i	
	end

end

if a == 0

	if b == 0 && c == 0  
		puts "#" 
	end
	
	if b != 0 	
		puts check_int(-c / b) 
	end
		
else 
	D = b*b - 4* a* c;

	if D == 0
		x = -b / (2 * a)
		puts check_int(x)

	elsif D > 0 
		x1 = (-b + Math.sqrt(D)) / (2 * a)
		x2 = (-b - Math.sqrt(D)) / (2 * a)

		if x1 > x2 then puts "#{check_int(x2)},#{check_int(x1)}"
		else puts "#{check_int(x1)},#{check_int(x2)}"		
		end
	end
end
