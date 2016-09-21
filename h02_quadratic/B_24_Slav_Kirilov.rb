A = gets.to_f
if (A == 0)
   puts 'Not a quadratic equation.'
   return 0
end
B = gets.to_f
C = gets.to_f
D = B*B - 4*A*C
if (D == 0)
    x = (-B/2/A).to_f
    puts x.to_s	
 else
   if (D > 0)
      x1 = ((-B-Math.sqrt(D))/2/A).to_f
      x2 = ((-B+Math.sqrt(D))/2/A).to_f
	if(x1 < x2) 
		puts x1.to_s + ',' + x2.to_s
	 else 
		 puts x2.to_s + ',' + x1.to_s
	 end
  end  
end
