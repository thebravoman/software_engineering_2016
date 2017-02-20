include Math

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def sort(x1, x2) 
	if x1 > x2
		temp = x1
		x1 = x2
		x2 = temp
	end
	print_result(x1, x2)
end

def print_result(x1, x2)
	if x1 % 1 != 0 
		print format('%.2f', x1)
	else
		x1 = x1.to_i
		print x1
	end
	if x1 != x2
		print ","
		if x2 % 1 == 0 
			x2 = x2.to_i
			print x2
		else
			print format('%.2f', x2)
		end
	end
	print "\n"
end
def find_discriminant(a, b, c)
	if a == 0 && b == 0 && c == 0
		print "#\n"
		exit
	end
	if a != 0 && b != 0 && c != 0
		dis = ((b ** 2) - (4 * a * c)).to_f
		if dis >= 0
			x1 = (-b + (Math.sqrt(dis))) / (2 * a).to_f
			x2 = (-b - (Math.sqrt(dis))) / (2 * a).to_f
		end
		if dis < 0 
			exit
		end
	end
end

find_discriminant(a, b, c)



		
	
	
	
