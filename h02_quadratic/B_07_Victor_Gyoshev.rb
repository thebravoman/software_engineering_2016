a = ARGV[0].to_f; b = ARGV[1].to_f; c = ARGV[2].to_f
result = Array.new
if a == 0
	if b != 0
		if -c/b == (-c/b).to_i
			puts (-c/b).to_i 
		else puts -c/b.round(2)
		end
	else if c == 0 then puts "#" end
	end 
exit(1) 
end
d = b**2 - 4*a*c
if d >= 0 then
	result[0] = (-b + Math::sqrt(d))/(2*a)
	result[1] = (-b - Math::sqrt(d))/(2*a)
	result.map! { |x| if x == x.to_i then x.to_i else x.round(2) end}
end
if d == 0 then
	puts result[0] 
	else puts result.sort.join(",")
end
