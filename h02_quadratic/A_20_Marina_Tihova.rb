a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def round(x)
	if x % 1 == 0
		x = x.to_i
	else 
		x = x.round(2)
	end
		
	x
end

if a != 0
	d = b ** 2 - 4 * a * c
	
	if d == 0
		x = (- b) / (2 * a)
		
		puts round(x);
	elsif d > 0
		x_1 = (((- b) + Math.sqrt(d)) / (2 * a)).round(2)
		x_2 = (((- b) - Math.sqrt(d)) / (2 * a)).round(2)
		
		if x_1 > x_2
			swap = x_1
			x_1 = x_2
			x_2 = swap
		end

		puts "#{round(x_1)},#{round(x_2)}"
	end
else
	if b != 0
		puts round(-c / b)
	end
	
	if b == 0 && c == 0
		puts "#"
	end
end
