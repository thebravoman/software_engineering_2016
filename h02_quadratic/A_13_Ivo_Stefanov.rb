a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a==0 && b==0 && c==0
	puts "#"

else
	if a==0
		if b==0
			puts ""
		else
			x=(-c)/b

			if x % 1==0
				puts x.to_i
			else
				puts x.round(2)
			end

		end
	
	else 
		D = b**2 - (4*a*c)
	end


	if D==0	

		x=(-b)/(a*2)
		
		if x % 1==0

			puts x.to_i
		
		else 
			print x.round(2)
		end

	elsif D>0


		x1=(-b + Math.sqrt(D))/(2*a)
		x2=(-b - Math.sqrt(D))/(2*a)
		
		if x1>x2
			save=x1
			x1=x2
			x2=save
		end


		if x1%1==0
			x1=x1.to_i
			print "#{x1},"

		else 
			print "#{x1.round(2)},"
		end

			
		if x2%1==0
			x2=x2.to_i
			print "#{x2}\n"

		else 
			print "#{x2.round(2)}\n"
		end


	end	
end
