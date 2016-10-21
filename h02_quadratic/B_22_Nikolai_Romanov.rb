include Math
a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
d = b*b - 4*a*c	
def fix_x(number)
	if number % 1 != 0 then return "%.2f" % number
	else return number.to_i end
end
if a==0
	if b==0 && c==0 then puts "#" end
	if b!=0
		x=-c/b
		puts fix_x(x)
	end
else
	if d ==0
		x = -b / (2 * a)
		puts fix_x(x)
	else if d>0
		x1 = (-b + (Math.sqrt(d))) / (2 * a)
		x2 = (-b - (Math.sqrt(d))) / (2 * a)
		if x1>x2
			temp=x1
			x1=x2
			x2=temp
		end
		puts "#{fix_x(x1)},#{fix_x(x2)}"
		end
	end
end
	
