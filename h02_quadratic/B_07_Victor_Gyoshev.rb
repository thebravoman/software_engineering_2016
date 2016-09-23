a = ARGV[0].to_i; b = ARGV[1].to_i; c = ARGV[2].to_i
result = Array.new
if a == 0
	if -c/b == -c/b.to_f
		print -c/b 
		else print (-c/b.to_f).round(2)
	end
exit(1) 
end
d = b**2-4*a*c
if d>=0 then
	result[0] = (-b + Math::sqrt(d))/(2*a)
	result[1] = (-b - Math::sqrt(d))/(2*a)
	result.map! { |x| if x.to_i == x then x.to_i else x.round(2) end}
end
if d == 0 then print result[0] else print result.sort.join(",") end
