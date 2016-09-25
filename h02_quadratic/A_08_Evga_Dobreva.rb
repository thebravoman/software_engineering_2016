include Math
a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f
if (a==0 && b==0 && c==0)
	puts "#\n"
elsif (a==0) 
	root=(-c)/b
	if (root%1==0)
		root=root.to_i
		print "#{root}\n"
	else
		print "#{root.round(2)}\n"
	end
else
	discriminant=(b**2)-(4*a*c)
	if (discriminant>0)
		root_1=((-b)+Math.sqrt(discriminant))/(2*a)
		root_2=((-b)-Math.sqrt(discriminant))/(2*a)
		if root_1>root_2
			temp=root_1
			root_1=root_2
			root_2=temp
		end
		if (root_1%1==0)
			root_1=root_1.to_i
			print "#{root_1},"
		else
			print "#{root_1.round(2)},"
		end
		if (root_2%1==0)
			root_2=root_2.to_i
			print "#{root_2}\n"
		else
			print "#{root_2.round(2)}\n"
		end
	elsif (discriminant==0)
		root=((-b)+Math.sqrt(d))/(2*a)
		if (root%1==0)
			root=root.to_i
			print "#{root}\n"
		else
			print "#{root.round(2)}\n"
		end
	end
end
