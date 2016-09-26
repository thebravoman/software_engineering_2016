a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

squares = []
if (a == 0)
	if (b == 0 && c == 0)
		puts "#"
	else
		squares[0] = -(c / a)
		if(squares[0] % 1 == 0)
			squares[0] = squares[0].to_i
		else
			squares[0] = squares[0].round(2)
		end
	end
else
	flag = false

	discriminant = (b**2) - (4 * a * c)

	if (discriminant > 0)
		squares[0] = (-b + Math.sqrt(discriminant)) / 2 * a
		squares[1] = (-b - Math.sqrt(discriminant)) / 2 * a
		flag = true
	elsif 
		squares[0] = -b / (2 * a)
	end
	
	if(squares[0] % 1 == 0)
		squares[0] = squares[0].to_i
	else
		squares[0] = squares[0].round(2)
	end
	if(flag)
		if(squares[1] % 1 == 0)
			squares[1] = squares[1].to_i	
		else
			squares[1] = squares[1].round(2)
		end
	end
	if(discriminant >= 0)
		puts squares.sort().join(",")
	end
end
