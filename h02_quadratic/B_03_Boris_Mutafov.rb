#Getting inputs
param_a = gets.to_f
param_b = gets.to_f
param_c = gets.to_f


#Calculations
if param_a == 0 then
	if param_b != 0 then	
		result = (param_c - 2*param_c) / param_b
	end
else 
	discriminant = param_b*param_b - 4*param_a*param_c
	if discriminant >= 0 then 
		square = Math.sqrt(discriminant.to_f)
		x1 = (-param_b + square ) /(2 * param_a)
		x2 = (-param_b - square ) /(2 * param_a)
	end
end

#Printing

unless param_a != 0 then
	if param_b != 0 then
		puts sprintf('%.2f', result)
	else
		if param_c != 0 then
			puts "No solution. Cannot divide by zero."
		else
			puts "All numbers are solutions."
		end
	end
else 
	unless discriminant < 0 then
		if x1 == x2 then
			puts sprintf('%.2f', x1)
		else 
			if x1 < x2 then
				puts sprintf('%.2f', x1)
				puts sprintf('%.2f', x2)
			else 
				puts sprintf('%.2f', x2)
				puts sprintf('%.2f', x1)
			end
		end
	else 
		puts "No Real Solutions."
	end 
end
