
def format_result(res)			
	if res.to_i == res.to_f 
		number = res.to_f.round(0)
	else 
		number = res.to_f.round(2)
	end
	
	return number
end

arg1 = ARGV[0].to_f
arg2 = ARGV[1].to_f
arg3 = ARGV[2].to_f
num = 0
if arg1 == 0
	result = (-arg3/arg2).to_f
	puts format_result result
else 
	d = arg2**2 - 4*arg1*arg3
	if d > 0
		x_1 = ((-arg2 + Math.sqrt(d))/(2*arg1)).to_f
		x_2 = ((-arg2 - Math.sqrt(d))/(2*arg1)).to_f
		number1 = format_result x_1
		number2 = format_result x_2
		numbers = [number1, number2].sort
		puts "#{numbers[0]},#{numbers[1]}"	
	elsif d == 0
		x_1 = (-arg2/2*arg1).to_f
		puts format_result x_1
	end
end

