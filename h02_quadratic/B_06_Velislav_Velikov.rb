include Math

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
d = b*b - 4*a*c

if(a == 0 && b == 0 && c == 0)
	puts "#"
end
if(a==0)
	x=-c/b
	if(x%1 != 0)
	puts x.to_f.round(2)
	else
	puts x.to_i
	end
end
if(a != 0 )
	if(d>0)
		x1 = (-b+Math.sqrt(d))/(2*a)
		x2 = (-b-Math.sqrt(d))/(2*a)
		if(x1%1 != 0 )
			x1 = x1.to_f.round(2)
		else x1 = x1.to_i
		end
		if(x2%1 != 0 )
			x2 = x2.to_f.round(2)
		else x2 = x2.to_i
		end
		if(x1 > x2)
			print x2,",",x1,"\n";
		else
			print x1,",",x2,"\n";
		end
	end
	if(d==0)
		x_x=-b/(2*a)
		puts x_x
	end
end
