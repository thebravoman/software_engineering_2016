# def NumberChecker(number)
# 	if number.is_a? Integer
# 		chislo = number.to_f.round(0) 
# 	elsif number.is_a? Float
# 		chislo = number.to_f.round(2)
# 	end

# 	return chislo
# end

num1 = ARGV[0].to_f
num2 = ARGV[1].to_f
num3 = ARGV[2].to_f

if num1 == 0

	if num2 == 0 && num3 == 0
		print "#\n"

	else
	result = (-num3/num2)

	if result % 1 == 0
		result = result.to_i
		puts("#{result}")

		else
			puts("#{result.round(2)}")
		end
	end
else
	d = num2**2 - 4*num1*num3

	if d > 0
		otgovor1 = ( (-num2 + Math.sqrt(d)) / (2*num1) )
		otgovor2 = ( (-num2 - Math.sqrt(d)) / (2*num1) )

		if otgovor1 % 1 == 0
			otgovor1 = otgovor1.to_i

		else
			otgovor1 = otgovor1.round(2)
		end
	
		if otgovor2 % 1 == 0
			otgovor2 = otgovor2.to_i

		else
			otgovor2 = otgovor2.round(2)
		end

		numbers = [otgovor1, otgovor2].sort

		puts "#{numbers[0]},#{numbers[1]}"
	end

	if d == 0
		rezultat = (-num2) / (2*num1)

		if rezultat % 1 == 0
			rezultat = rezultat.to_i
			puts "#{rezultat}"
		else
			puts "#{rezultat.round(2)}"
		end
	end

end