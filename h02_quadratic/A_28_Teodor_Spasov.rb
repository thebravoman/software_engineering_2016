a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if a==0 && b==0 && c==0
	print "#\n"
elsif a==0
	xa=-c/b.to_f
		if xa%1==0
			xa=xa.to_i
		end
	puts format('%.2f',xa)

else
	d=b**2-4*a*c.to_f
	if d>0
		x1=(-b+Math.sqrt(d))/a/2.to_f
		x2=(-b-Math.sqrt(d))/a/2.to_f
	if x1<x2
		if x1%1==0
			x1=x1.to_i
			print x1
		else
			print format('%.2f',x1)
		end
		print ","
		if x2%1==0
			x2=x2.to_i
			puts x2
		else
			puts format('%.2f',x2)
		end
	else
		if x2%1==0
			x2=x2.to_i
			print x2
		else
			print format('%.2f',x2)
		end
		print ","
		if x1%1==0
			x1=x1.to_i
			puts x1
		else
			puts format('%.2f',x1)
		end
	end
	elsif d==0
	x=-b/2*a.to_f
		if x%1==0
			x=x.to_i
			puts x
		else
			puts format('%.2f',x)
		end
	end
end
