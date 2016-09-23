a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
if (a==0)
	print ""
else 
	discriminant= b**2 - 4*a*c.to_f
	if (discriminant>0)
		first_root=(-b + Math.sqrt(discriminant))/2*a.to_f
			if (first_root % 1 ==0)
				first_root=first_root.to_i
			end	                
		second_root=(-b - Math.sqrt(discriminant))/2*a.to_f
			if (second_root % 1 ==0)
				second_root=second_root.to_i
			end					
		if (first_root < second_root)
			print first_root.to_s+","+second_root.to_s
		else 
			print second_root.to_s+","+first_root.to_s
		end
	elsif(discriminant==0)
		root=-b/2*a.to_f
			if (root % 1 ==0)
				root=root.to_i
			end
		print root.to_s
	end
end
