
num1 = ARGV[0].to_i; num2 = ARGV[1].to_i; num3 = ARGV[2].to_i
result = Array.new
if num1 == 0
	if num2 != 0
		if -num3/num2 == -num3/num2.to_f
			puts -num3/num2 
		else puts (-num3/num2.to_f).round(2)
		end
	else if num3 == 0 then puts "#" end
	end 
exit(1) 
end
num4 = num2**2 - 4*num1*num3
if num4 >= 0 then
	result[0] = (-num2 + Math::sqrt(num4))/(2*num1)
	result[1] = (-num2 - Math::sqrt(num4))/(2*num1)
	result.map! { |x| if x.to_i == x then x.to_i else x.round(2) end}
end
if num4 == 0 then puts result[0] else puts result.sort.join(",") end
