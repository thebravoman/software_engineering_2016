a = ARGV[0].to_f 
b = ARGV[1].to_f
c = ARGV[2].to_f 

if a == 0 && b == 0 && c == 0
	puts "#"
	exit
end 
if a == 0 
	    x1 = (-c)/b 
	    if x1 % 1 == 0 
	    	puts "#{x1.to_i}"
	    else
	    	puts "#{x1.round(2)}"
		end
    else 
	
	    D = (b*b)-(4*a*c)
			
            if D == 0 
				
                x1 = -b/(2*a)
                if x1 % 1 == 0 
                	puts "#{x1.to_i}"
                else 
                	puts "#{x1.round(2)}"
				end 
			end 
			
                if D > 0 
                    x1 = (-b + Math.sqrt(D)) / (2*a)
                    x2 = (-b - Math.sqrt(D)) / (2*a)
		    		
					if x1 % 1 == 0 && x2 % 1 == 0
						if x1 < x2
							puts "#{x1.to_i},#{x2.to_i}"
						else
							puts "#{x2.to_i},#{x1.to_i}"
						end
					else	
						if x2 < x1
							puts "#{x2.round(2)},#{x1.round(2)}"
					
						else 
						   puts "#{x1.round(2)},#{x2.round(2)}"
						
						end 
					
					end
                
                    
                end      
end 			
			
