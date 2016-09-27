a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0 
	if b == 0
		if c == 0
		 	puts "#"
		else
			puts ""
		end
	else
		x = -(c) / b
		puts "#{(x % 1 == 0) ? "%.2f" % x.round(2) : x.to_i}"
	end
else 
	d = b ** 2 - 4 * a * c
	
	if d == 0
		x = -b / (2 * a)
		puts "#{(x % 1 == 0) ? "%.2f" % x.round(2) : x.to_i}"
	elsif d > 0
		x1 = (-b + Math.sqrt(d)) / (2 * a)
		x2 = (-b - Math.sqrt(d)) / (2 * a)
	
		if x1 > x2
			temp = x1
			x1 = x2
			x2 = temp
		end

		puts "#{(x1 % 1 == 0) ? x1.to_i : "%.2f" % x1.round(2)},#{(x2 % 1 == 0) ? x2.to_i : "%.2f" % x2.round(2)}"
		
	else 
		puts ""
		
	end
end
