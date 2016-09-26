a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if a==0 && b==0
	print "#"
end

if a==0 and b!=0
	x1=(-c)/b
	print sprintf("%g", x1.round(2))
end

D=(b*b)+(-4*a*c)

if D<0 and a!=0
end

if D>0 and a!=0
	discr=Math.sqrt(D)
	x1=(-b+discr)/(2*a)
	x2=(-b+(-discr))/(2*a)
	if x2>x1
		print sprintf("%g", x2.round(2))
		print ","
		print sprintf("%g", x1.round(2))
	else
	print sprintf("%g", x1.round(2))
	print ","
	print sprintf("%g", x2.round(2))
	end
end

if D==0 and a!=0
	x1=(-b)/(2*a)
	print sprintf("%g", x1.round(2))
end
