include Math

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

	D = b*b - 4*a*c
		

if a==0 then
  
      if b==0 then
      
          if c==0 		
				puts "#"
			
		  else 
				puts ""
		  end
      
      else 
			x = -c / b
				
				if x%1==0 then
					puts"#{x.to_i}"
				else 
					puts "#{"%.2f" % x.round(2)}"
				end
		
  	 end

else
  
     if D==0

		x = -b/(2*a)
		if x%1==0 then
					puts"#{x.to_i}"
				else 
					puts "#{"%.2f" % x.round(2)}"
				end
		 

     else 
    
       if D>0 
			x1 = (-b + sqrt(D))/(2*a)
 			x2 = (-b - sqrt(D))/(2*a)

			if x2 < x1
				if x2%1==0 then
					print x2.to_i
				else 
					print "#{"%.2f" % x2.round(2)}"
				end

					print ","

				if x1%1==0 then
					puts"#{x1.to_i}"
				else 
					puts "#{"%.2f" % x1.round(2)}"
				end
			else
				if x1%1==0 then
					print x1.to_i
				else 
					print "#{"%.2f" % x1.round(2)}"
				end

					print ","

				if x2%1==0 then
					puts"#{x2.to_i}"
				else 
					puts "#{"%.2f" % x2.round(2)}"
				end
			end

		else  puts ""

        end
    end
end
