a, b, c = ARGV[0].to_f, ARGV[1].to_f, ARGV[2].to_f

def to_int_if_int(number)
	if number % 1 == 0
		return number.to_i
	else 
		return number
	end
end

def solve_quadratic(a, b, c)
	if a == 0
		if b==0 && c==0 then
			return "#"
		elsif b==0 && (c>0 || c<0) then
			return ""
		else
			return to_int_if_int(-c/b)
		end
	else
		d = b*b - 4*a*c
		if d > 0 
			x1 =  +( (-b + Math.sqrt(d)) / (2 * a) ).round(2)
			x2 =  +( (-b - Math.sqrt(d)) / (2 * a) ).round(2)
			return to_int_if_int(x1) , to_int_if_int(x2)
		else
			return to_int_if_int( (-b) / (2 * a) ).round(2)
		end
	end
end #def

if solve_quadratic(a,b,c).kind_of?(Array) then
	puts solve_quadratic(a,b,c).join(',')
else
	puts solve_quadratic(a,b,c)
end
