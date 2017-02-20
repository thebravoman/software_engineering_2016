include Math

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def printX(x)
	if x % 1 == 0
		x = x.to_i
		print "#{x}\n"
	else
		print "#{x.round(2)}\n"
	end
end

if a == 0 
	if b == 0 && c ==0
		print "#\n"
	elsif b != 0
		x = -c/b
		printX(x)
	end
else
	d = b**2 - (4 * a * c)

	if d>0
		x1 = (-b + sqrt(d))/(2*a)
		x2 = (-b - sqrt(d))/(2*a)
		
		if x1>x2
			temp = x1
			x1 = x2
			x2 = temp
		end
		
		printX(x1)
		
		printX(x2)
		
	elsif d==0
		x = (-b + Math.sqrt(d))/(2*a)
		printX(x)
	end
end
