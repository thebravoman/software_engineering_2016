a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if a==0
	if b==0
		if c==0
			print "#";
		end
	else	


		x1=(-c)/b
		if x1%1!=0
			print sprintf("%.2f", x1);
		else
			print x1.to_i;

	
		end
	end
	print "\n";
else
	D=(b*b)+(-4*a*c)

	if D>0

		d=Math.sqrt(D)
		x1=(-b+d)/(2*a)
		x2=(-b+(-d))/(2*a)
		if x1>x2
			e=x1
			x1=x2
			x2=e
		end
		if x1%1!=0
			print sprintf("%.2f,", x1);
		else
			print "#{x1.to_i},";
		end

		if x2%1!=0
			print sprintf("%.2f", x2)
		else
			print x2.to_i;
		end
	print "\n";

	end


	if D==0
	
		x1=(-b)/(2*a)
		if x1%1!=0
			print sprintf("%.2f", x1)
		else
			print x1.to_i;
		end
	print "\n";
	end
end
