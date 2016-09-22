argument = gets.split(" ").map! { |a| a.to_i }
result = Array.new
d = argument[1]**2-4*argument[0]*argument[2]
if d>0 then
	result[0] = (-argument[1] + Math::sqrt(d))/(2*argument[0])
	result[1] = (-argument[1] - Math::sqrt(d))/(2*argument[0])
	result.map! { |x| if x.to_i == x then x.to_i else x.round(2) end}
end
print result.sort.join(",")
