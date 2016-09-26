a = gets.to_f
b = gets.to_f
c = gets.to_f

if a == 0 && b == 0 && c ==0 
	puts "#"
end

if a == 0 && b != 0
	x = -c / b

	if x % 1 == 0
		puts "#{x.to_i}"
	else
		puts "#{x.round(2)}"
	end
end

d = b**2 - 4*a*c

if d == 0 && a != 0
	x = -b / (2*a)

	if x % 1 == 0
		puts "#{x.to_i}"
	else
		puts "#{x.round(2)}"
	end
end

if d > 0 && a != 0
	x1 = (-b + Math.sqrt(d)) / (2*a)
	x2 = (-b - Math.sqrt(d)) / (2*a)

	if x1 < x2
		if x1 % 1 == 0 && x2 % 1 == 0
			puts "#{x1.to_i},#{x2.to_i}"
		end

		if x1 % 1 != 0 && x2 % 1 != 0
			puts "#{x1.round(2)},#{x2.round(2)}"
		end

		if x1 % 1 == 0 && x2 % 1 != 0 
			puts "#{x1.to_i},#{x2.round(2)}"
		end

		if x1 % 1 != 0 && x2 % 1 == 0
			puts "#{x1.round(2)},#{x2.to_i}"
		end
	else
		if x1 % 1 == 0 && x2 % 1 == 0
			puts "#{x2.to_i},#{x1.to_i}"
		end

		if x1 % 1 != 0 && x2 % 1 != 0
			puts "#{x2.round(2)},#{x1.round(2)}"
		end

		if x1 % 1 == 0 && x2 % 1 != 0 
			puts "#{x2.to_i},#{x1.round(2)}"
		end

		if x1 % 1 != 0 && x2 % 1 == 0
			puts "#{x2.round(2)},#{x1.to_i}"
		end
	end
end
			
			
