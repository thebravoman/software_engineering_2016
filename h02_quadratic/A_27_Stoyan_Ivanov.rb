a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def round_if_needed(x)
	if x % 1 == 0
		x = x.round(0)
	else 
		x = x.round(2)
	end
		
end

if a == 0
	if b == 0 && c == 0
		print "#\n"
	
	else
		x = -c / b
	
		puts "#{round_if_needed(x)}"
	end

else
	d = (b ** 2) - (4 * a * c)
	
	if d == 0
		x = -b / (2 * a)
		
		puts "#{round_if_needed(x)}"
	
	elsif d > 0
		x_1 = (-b + Math.sqrt(d)) / (2 * a)
		x_2 = (-b - Math.sqrt(d)) / (2 * a)
			
		x_1 = round_if_needed(x_1)
		x_2 = round_if_needed(x_2)

		sorting = [x_1, x_2].sort
		puts sorting[0].to_s + "," + sorting[1].to_s
		
	end
end


