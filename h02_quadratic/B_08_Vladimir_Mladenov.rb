a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f


def find_roots(a, b, c) 
	if a == 0
		if b != 0
			get_printable_root(-c / b)
		end
 
		if b == 0 && c == 0
			puts "#"
		end
		
		if b == 0 && c != 0
			puts ""
		end
	end

	if a != 0 
		d = b ** 2 - 4 * a * c

		if d > 0
			root1 = (-b + Math.sqrt(d)) / (2 * a)
			root2 = (-b - Math.sqrt(d)) / (2 * a)

			if root1 > root2
				temp = root1
				root1 = root2
				root2 = temp
			end

			puts "#{get_printable_root(root1)},#{get_printable_root(root2)}"
		end

		if d == 0
			root = -b / (2 * a) 

			puts get_printable_root(root)
		end

		if d < 0
			puts ""
		end
	end
end	

def get_printable_root(x)
	if x % 1 == 0
		root = x.to_i
	end	
	if x % 1 != 0
		root = "%.2f" % x.round(2)
	end
	root
end

find_roots(a, b, c)
