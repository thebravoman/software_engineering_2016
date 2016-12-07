a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def print_(x1,x2)
	if x1 < x2
		if x1 % 1 == 0
			print x1=x1.to_i
			print ","
		else 
			print x1.round(2)
			print ","
		end

		if x2 % 1 == 0
			puts x2=x2.to_i
		else 
			puts x2.round(2)
		end
	else
		if x2 % 1 == 0
			print x2=x2.to_i
			print ","
		else 
			print x2.round(2)
			print ","
		end

		if x1 % 1 == 0
			puts x1=x1.to_i
		else 
			puts x1.round(2)
		end
	end
end

if  a == 0 &&	b == 0 && c == 0
	print "#"
else

	if a == 0
		if b == 0
			puts ""
		else
		x = (-c)/b
			if x % 1 == 0
				puts x=x.to_i
			else
				puts x.round(2)
			end
		end

	else 
		d = b**2 - 4*a*c 
		
	end


	if d == 0
		x = (-b)/(2*a)

		if x % 1 == 0
			puts x=x.to_i
		else
			puts x.round(2)
		end
	elsif (d < 0)

		print ""
	elsif (d > 0)

	      	x1 = ((-b-Math.sqrt(d))/2/a)
	      	x2 = ((-b+Math.sqrt(d))/2/a)

		print_(x1,x2)

	end
end

