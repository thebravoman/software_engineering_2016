a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

D = b**2 - 4*a*c

if a == 0
	x = -c/b
	if b == 0
		if c == 0
			puts "#"
		end
	elsif x % 1 == 0
		puts "#{x.to_i}"
	else
		puts "#{x.round(2)}"
	end
else
	if D < 0

	elsif D == 0
		x = -b / (2 * a)
		if x % 1 == 0
			puts "#{x.to_i}"
		else
			puts "#{x.round(2)}"
		end
	elsif D > 0
		x1 = (-b + Math.sqrt(D)) / (2 * a)
		x2 = (-b - Math.sqrt(D)) / (2 * a)
		if x1 < x2
			if x1 % 1 == 0
				print "#{x1.to_i},"
			else
				print "#{x1.round(2)},"
			end
			if x2 % 1 == 0
				print "#{x2.to_i}"
			else
				puts "#{x2.round(2)}"
			end
		else
			if x2 % 1 == 0
				print "#{x2.to_i},"
			else
				print "#{x2.round(2)},"
			end
			if x1 % 1 == 0
				print "#{x1.to_i}"
			else
				puts "#{x1.round(2)}"
			end
		end
	end
end
