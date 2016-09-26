a = gets.to_f
b = gets.to_f	
c = gets.to_f

if(a == 0 && b == 0 && c == 0)
	puts "#"
	
	exit(0)
end

if (a == 0)
	x = (-c)/b
	if x%1 == 0
		puts "#{x.to_i}"
	else
		puts "#{x.round(2)}"
	end
end

d = b*b - 4*a*c
if(d < 0)
	exit(0)
end

if(d==0) 
	x = (-b)/(2*a)
	if (x%1 == 0)
		print "#{x.to_i}"
	else
		print "#{x.round(2)}"
	end


else
	x1 = (-b + Math.sqrt(d))/(2*a)
	x2 = (-b - Math.sqrt(d))/(2*a)

	if(x1 > x2)
		tmp = x1
		x1 = x2
		x2 = tmp
	end

	if x1%1 == 0
		puts "#{x1.to_i}"
	else
		puts "#{x1.round(2)}"
	end

	if x2%1 == 0
		puts "#{x2.to_i}"
	else
		puts "#{x2.round(2)}"
	end


end
 
