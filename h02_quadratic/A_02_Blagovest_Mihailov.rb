a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if a==0

x1=(-c)/b
print x1




else
	D=(b*b)+(-4*a*c)

	if D>0

		d=Math.sqrt(D)
		x1=(-b+d)/(2*a)
		x2=(-b+(-d))/(2*a)
		if x2>x1
			e=x1
			x1=x2
			x2=e
		end
		print x1
		print ","
		print x2
	end
	if D==0
	
		x1=(-b)/(2*a)
		print x1
	
	end
end


