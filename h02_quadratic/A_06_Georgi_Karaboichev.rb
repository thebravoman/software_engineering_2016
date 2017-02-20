a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def roundNumberIfNeeded(number)
	if(number % 1 == 0)
		number = number.to_i
	else
		number = (number).round(2)
	end

	return number
end

squares = []
if (a == 0)
	if (b == 0 && c == 0)
		puts "#"
	else
		squares[0] = -(c / a)
		squares[0] = roundNumberIfNeeded(squares[0])
	end
else
	flag = false

	discriminant = (b**2) - (4 * a * c)
	
	if (discriminant > 0)
		squares[0] = (-b + Math.sqrt(discriminant)) / (2 * a)
		squares[1] = (-b - Math.sqrt(discriminant)) / (2 * a)
	elsif (discriminant == 0)
		squares[0] = -b / (2 * a)
	else
		abort
	end

	for i in 0..squares.length - 1
		squares[i] = roundNumberIfNeeded(squares[i])
	end

	if(discriminant >= 0)
		puts squares.sort().join(",")
	end
end
