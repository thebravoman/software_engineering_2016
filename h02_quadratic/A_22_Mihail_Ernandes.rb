include Math

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0
	if b != 0 
		x1 = -c/b
		if x1 % 1 == 0
			x1 = x1.to_i
			print x1
			exit
		end
		print format('%.2f', x1)
	end 
else
	if b != 0
		dis = (b**2 - 4*a*c).to_f
		if dis > 0
			x1 = (-b + Math.sqrt(dis)) / (a * 2)
			x2 = (-b - Math.sqrt(dis)) / (a * 2)
			if x1 < x2 
				if x1 % 1 == 0
					x1 = x1.to_i
					print x1
				else 
					print format('%.2f', x1)
				end
				print ','
				if x2 % 1 == 0
					x2 = x2.to_i
					print x2
				else 
					print format('%.2f', x2)
				end
			else 
				if x2 % 1 == 0
					x2 = x2.to_i
					print x2
				else 
					print format('%.2f', x2)
				end
				print ','
				if x1 % 1 == 0
					x1 = x1.to_i
					print x1
				else 
					print format('%.2f', x1)
				end
			end
		elsif dis == 0
			x1 = -b / (a * 2)
			if x1 % 1 == 0
				x1 = x1.to_i
			else 
				print format('%.2f', x1)
			end
		elsif dis < 0
			exit
		end
	else
		if (-c / a).to_f < 0
			exit
		end
		if (-c / a).to_f == 0
			print 0
			exit
		end
		x1 = +Math.sqrt((-c / a).to_f)
		x2 = -Math.sqrt((-c / a).to_f)
		if x1 < x2 
			if x1 % 1 == 0
				x1 = x1.to_i
				print x1
			else 
				print format('%.2f', x1)
			end
			print ','
			if x2 % 1 == 0
				x2 = x2.to_i
				print x2
			else 
				print format('%.2f', x2)
			end
		else 
			if x2 % 1 == 0
				x2 = x2.to_i
				print x2
			else 
				print format('%.2f', x2)
			end
			print ','
			if x1 % 1 == 0
				x1 = x1.to_i
				print x1
			else 
				print format('%.2f', x1)
			end
		end
	end
end
		
		
	
	
	
