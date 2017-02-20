a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f


def print_x1_x2(x1,x2)

(x1%1==0) ? x1=x1.to_i : x1 = x1.round(2)
(x2%1==0) ? x2=x2.to_i : x2 = x2.round(2)

	if (x1>x2)
		puts"#{x2},#{x1}"
	else 
		puts"#{x1},#{x2}"
	end
end


def print_x(x)

(x%1==0) ? x=x.to_i : x = x.round(2)
	
	puts "#{x}"


end

if a==0&&b==0&&c==0

	puts"#"

elsif a==0

	x=(-c/b)
	print_x x


else
		D = (b*b) - (4*a*c)

	if D>0

			x1=((-b) + Math.sqrt(D)) / (2*a)
			x2=((-b) - Math.sqrt(D)) / (2*a)

				print_x1_x2 x1,x2

	end

	if D==0

		x=((-b)/(2*a))

		print_x x

	end

	if D<0

		puts ""

	end


end













