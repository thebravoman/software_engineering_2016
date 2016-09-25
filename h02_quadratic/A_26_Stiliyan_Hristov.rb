#Quadratic equation ax**2 + bx + c

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0 and b == 0 and c == 0
	puts "#"

elsif a == 0 
	
	x = -c/b

	if x % 1 == 0
		puts x.to_i 
	else
		puts x.round(2)	
	end

else 
	D = b ** 2 - 4 * a * c

	if D > 0 
		x_1 = (-b + Math.sqrt(D))/(2*a)
		x_2 = (-b - Math.sqrt(D))/(2*a)
		answer = [x_1 , x_2].sort
		
		if answer[0] % 1 == 0
			print "#{answer[0].to_i},"
		else 
			print "#{answer[0].round(2)},"
		end

		if answer[1] % 1 == 0
			puts "#{answer[1].to_i}"
		else 
			puts "#{answer[1].round(2)}"
		end




	elsif D == 0
		x = -b/(2*a)
		if x % 1 == 0
			puts "#{x.to_i}" 
		
		else 
			puts "#{x.round(2)}"
		end
	end
end




