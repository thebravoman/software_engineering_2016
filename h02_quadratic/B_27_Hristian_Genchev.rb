


a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f


if a == 0
	if b == 0 && c == 0
		puts('#')
	else
		x = -c/b
		if x % 1 == 0
			x.to_i
		end
		printf("%g\n",x.round(2))
	end
	
else 
	d = (b * b) - (4 * a * c)
	
	if d == 0
		x = (-b / (2 * a)).round(2)
		if x % 1 == 0
			x.to_i
		end
		if (x == -0)
			x = x.abs
		end
		printf("%g\n",x.round(2))
		
	end
	
	if d > 0
		x1 = (-b + Math.sqrt(d))/ (2 * a).round(2)
		x2 = (-b - Math.sqrt(d))/ (2 * a).round(2)
		
						if x1 % 1 == 0
							x1.to_i
						end
						
						if x2 % 1 == 0
							x2.to_i
						end
		
		
		if x1 < x2
			printf("%g,%g\n",x1.round(2), x2.round(2))
		else
			printf("%g,%g\n",x2.round(2), x1.round(2))	
		end
	end
end
