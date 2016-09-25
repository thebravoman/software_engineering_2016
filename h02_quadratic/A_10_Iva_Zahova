include Math

A = ARGV[0].to_f
B = ARGV[1].to_f
C = ARGV[2].to_f

if A == 0
	if B == 0 && C == 0
		puts "#"
	else
	x = -C/B
	if x % 1 == 0
		x = x.to_i
		print x
	else
		print format('%.2f',x).chomp

	end
	print "\n"
	end

else
	D = B*B - 4*A*C
 
	if D == 0
  		x = (-B/(2*A)).to_s
		if x % 1 == 0
			x = x.to_i
			print x
		else
			print format('%.2f',x).chomp
		end

	else
	if D > 0
      		x1= (-B-sqrt(D))/(2*A)
     		x2= (-B+sqrt(D))/(2*A)
		if x1>x2
			swap = x1
			x1 = x2
			x2 = swap
		end

	if x1 % 1 == 0
		x1 = x1.to_i
		print x1
	else
		print format('%.2f',x1).chomp
	end
	print ","
	if x2 % 1 == 0
		x2 = x2.to_i
		print x2
	else
		print format('%.2f',x2).chomp
	end
	print "\n"
   	end
end
end
