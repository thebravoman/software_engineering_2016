include Math	

a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if (a == 0 && b == 0 && c == 00)
	print "#\n"


elsif a == 0
	x_0 = -c/b
	if x_0 % 1 == 0
		x_0.to_i = x_0.to_i
		print "#{x_0}\n"
	else
		print "#{x_0.round(2)}\n"
	end
else
	d = b*b - (4 * a * c)
	
	if d == 0
		x_0 = (-b + sqrt(d)) / (2*a)

		if x_0 % 1 == 0
			x_0 = x_0.to_i
			print "#{x_0}\n"
		else
			print "#{x_0.round(2)}\n"
		end
	end

	if d > 0
		x_1 = (-b + sqrt(d)) / (2*a)
		x_2 = (-b - sqrt(d)) / (2*a)
		
		if (x_2 > x_1)

		if x_1 % 1 == 0
			x_1 = x_1.to_i
			print "#{x_1},"
		else
			print "#{x_1.round(2)},"
		end
		
		if x_2 % 1 == 0
			x_2 = x_2.to_i
			print "#{x_2}\n"
		else
			print "#{x_2.round(2)}\n"
		end
		
		else
		if x_2 % 1 == 0
			x_2 = x_2.to_i
			print "#{x_2},"
		else
			print "#{x_2.round(2)},"
		end
		if x_1 % 1 == 0
			x_1 = x_1.to_i
			print "#{x_1}\n"
		else
			print "#{x_1.round(2)}\n"
		end
		end
		
	end
end
