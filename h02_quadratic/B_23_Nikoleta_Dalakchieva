a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

d = b*b - 4*a*c

if a == 0
	if b==0 && c == 0
	puts "#"
	else 
	x = -c/b
		if x%1 == 0 
		x= x.to_i
		else x = x.round(2)	
		end
	puts x
	end

elsif d == 0
	x = -b/2
	if x%1 == 0 
		x= x.to_i
	else x = x.round(2)	
	end
	
	puts x

elsif d > 0
	sqrtD = Math.sqrt(d)
	x1 = (-b+sqrtD)/(2*a)
	x2 = (-b-sqrtD)/(2*a)
	
	if x1%1 == 0 
		x1= x1.to_i
	else x1 = x1.round(2)	
	end
	
	if x2%1 == 0 
		x2= x2.to_i
	else x2 = x2.round(2)
	end

	if x1 < x2 
		print x1 , "," , x2 , "\n"
	else print x2 , "," , x1 , "\n"
	 end
end	
