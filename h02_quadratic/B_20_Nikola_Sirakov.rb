a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0 then 
	if b == 0
		if c == 0
		 	puts "#"
		else
			puts ""
		end
	else
		    x1 = ((c - 2*c) / b)
			
			if x1%1==0 then
				puts"#{x1.to_i}"
			else 
				puts "#{x1.round(2)}"
			end

	end
    
else 
    
    d = (b*b) - 4*a*c

    if d > 0 then
    
    x1 = ((b*-1) + Math.sqrt(d)) / (2*a)
    
    x2 = ((b*-1) - Math.sqrt(d)) / (2*a)
    
        if x1 > x2 then 
		
			if x2%1==0 then
				print x2.to_i
			else 
				print x2.round(2)
			end
			
			print ","
			
			if x1%1==0 then
			    puts "#{x1.to_i}"
			else 
				puts "#{x1.round(2)}"
			end
        
        else 
        
            if x1%1==0 then
				print"x1.to_i
			else 
				print x1.round(2)
			end
			
			print ","
			
			if x2%1==0 then
				puts "#{x2.to_i}"
			else 
				puts "#{x2.round(2)}"
			end
        
        end 
    
    end

    if d == 0 then
    
             x1 = (b*-1) / (2*a)
    
            if x1%1==0 then
				puts"#{x1.to_i}"
			else 
				puts "#{x1.round(2)}"
			end
    
    end
    
    if d < 0 then
    
            puts ""
    
    end
end
