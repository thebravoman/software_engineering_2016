include Math
a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if (a == 0)
	if (b == 0)
		if (c == 0)
			puts "#"
		end
	else
		x = -c/b.to_f
		if (x % 1 == 0)
			x = x.to_i
		end
		puts "#{x.round(2)}"
	end
else
	d = b**2 - 4*a*c
	if d > 0
		x1 = (-b + sqrt(d))/2*a
		x2 = (-b - sqrt(d))/2*a
		if x1 % 1 == 0 && x2 % 1 == 0
			if x1 > x2
				puts "#{x2.to_i},#{x1.to_i}"
			else
				puts "#{x1.to_i},#{x2.to_i}"
			end
		else
			if x1 > x2
				puts "#{x2.round(2)},#{x1.round(2)}"
			else
				puts "#{x1.round(2)},#{x2.round(2)}"
			end
		end
	elsif d == 0
	x = -b/2*a
		if x % 1 == 0
			puts "#{x.to_i}"
		else
			puts "#{x.round(2)}"
		end	
	elsif d < 0
	end
end
