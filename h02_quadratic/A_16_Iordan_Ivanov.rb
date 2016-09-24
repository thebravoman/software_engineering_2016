a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

D = b**2 - 4*a*c

if a == 0
	x = c/b
	if x % 1 == 0
		print "#{x.to_i}"
	else
		print "#{(x * 100).floor / 100.0}"
	end
else
	if D < 0

	elsif D == 0
		x = b / (2 * a)
		if x % 1 == 0
			print "#{x.to_i}"
		else
			print "#{(x * 100).floor / 100.0}"
		end
	elsif D > 0
		x1 = (-b + Math.sqrt(D)) / (2 * a)
		x2 = (-b - Math.sqrt(D)) / (2 * a)
		if x1 % 1 == 0 && x2 % 1 == 0 
			if x1 < x2
				print "#{x1.to_i},#{x2.to_i}"
			else
				print "#{x2.to_i},#{x1.to_i}"
			end
		else
			if x1 < x2
				print "#{(x1 * 100).floor / 100.0},#{(x2 * 100).floor / 100.0}"
			else
				print "#{(x2 * 100).floor / 100.0},#{(x1 * 100).floor / 100.0}"
			end
		end
	end
end
