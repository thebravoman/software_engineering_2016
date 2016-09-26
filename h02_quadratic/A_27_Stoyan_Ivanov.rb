a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0
	if b == 0 && c == 0
		print "#\n"
	
	else
		x = -c / b
	
		if x % 1 == 0
			puts "#{x.round(0)}"
	
			else
			puts "#{x.round(2)}"
		end
	end

else
	d = (b ** 2) - (4 * a * c)
	
	if d == 0
		x = -b / (2 * a)
		
		if x % 1 == 0
			puts "#{x.round(0)}"
	
		else
			puts "#{x.round(2)}"
		end
	
	elsif d > 0
		x_1 = (-b + Math.sqrt(d)) / (2 * a)
		x_2 = (-b - Math.sqrt(d)) / (2 * a)
			
		if x_1 % 1 == 0
			x_1 = x_1.round(0)
			
		else
			x_1 = x_1.round(2)
		end
		
		if x_2 % 1 == 0
			x_2 = x_2.round(0)
			
		else
			x_2 = x_2.round(2)
		end
		
		sorting = [x_1, x_2].sort
		puts sorting[0].to_s + "," + sorting[1].to_s
		
	end
end
