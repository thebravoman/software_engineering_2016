a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if (a == 0 && b == 0 && c == 0) 
	
	print "#\n"
end

if (a == 0 && b != 0) 
  
	 x1 = c/b.round(2)
	printf("%g\n", x1)
 
	elsif a != 0
		
	 	D = b*b - 4*a*c

	 	if (D == 0)

    		 	x = (-b/2/a).round(2)
    		 	printf("%g\n", x)	
 
	 	elsif (D > 0)
      
				 	x1 = ((-b+Math.sqrt(D))/2/a).round(2)
     		 	x2 = ((-b-Math.sqrt(D))/2/a).round(2)
	
	 	if(x2 < x1) 

				printf("%g,%g\n",x2 ,x1)
		
 	 else 
			 	 printf("%g,%g\n" ,x1 ,x2)

					 end
  		end  
 end
