a = ARGV[0].to_f
b = ARGV[0].to_f
c = ARGV[0].to_f

if a==0 
	if b!=0
		x=(-c)/b
		if x % 1==0
			puts x.to_i
		else
			puts x.round(2)
		end

	else
		if c==0
			puts "#"
		end
	end

else	

	D = b**2 - (4*a*c)
	


	if D>0
		desc = Math.sqrt(D)

		x1=(-b + desc)/(a*2)
		x2=(-b - desc)/(a*2)
		
		if x1>x2
			save=x1
			x1=x2
			x2=save
		end


		if x1%1==0
			print "#{x1.to_i},"

		else 
			print "#{x1.round(2)},"
		end

			
		if x2%1==0
			print "#{x2.to_i}\n"

		else 
			print "#{x2.round(2)}\n"
		end

	elseif D==0
		x=(-b)/(a*2)
		
		if x % 1==0
			print "#{x.to_i}\n"
		
		else 
			print "#{x.round(2)}\n"
		end

	end	
end