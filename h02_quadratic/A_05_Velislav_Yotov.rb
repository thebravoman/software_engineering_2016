a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
if (a==0 && b==0 && c==0)
	print "#\n"
elsif (a==0)
	root_a=-c/b.to_f
		if (root_a % 1 ==0)
			root_a=root_a.to_i
		end
	puts format('%.2f', root_a)
	
else 
	discriminant= b**2 - 4*a*c.to_f
	if (discriminant>0)

		first_root=(-b + Math.sqrt(discriminant))/2*a.to_f
		second_root=(-b - Math.sqrt(discriminant))/2*a.to_f
		
		if (first_root < second_root)

			if (first_root % 1 == 0)

				first_root=first_root.to_i
				print first_root.to_s
			else 
				print format('%.2f',first_root)

			end			
			print ","
			if (second_root % 1 ==0)

				second_root=second_root.to_i
				puts second_root.to_s
			else	
				puts format('%.2f',second_root)
			end
		else 

			if (second_root % 1 == 0)

				second_root=second_root.to_i
				print second_root.to_s
			else 
				print format('%.2f',second_root)

			end			
			print ","
			if (first_root % 1 ==0)

				first_root=first_root.to_i
				puts first_root.to_s
			else	
				puts format('%.2f',first_root)
			end
		end
	elsif(discriminant==0)
		root=-b/2*a.to_f
			if (root % 1 ==0)
				root=root.to_i
				puts root.to_s			
			else
				puts format('%.2f',root)
			end	
	end
end
