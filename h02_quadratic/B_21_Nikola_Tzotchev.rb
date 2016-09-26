a = Float ARGV[0]
s = Float ARGV[1]
d = Float ARGV[2]

	def numb(value1 , value2 , value3)
		@D = value2 * value2 - 4 * value1 * value3
		if @D == 0 
			one_root = -value2/(2*value1)
				unless  one_root % 1 == 0
					puts  one_root.round(2)
				else puts Integer (one_root)
				end 
		
		elsif @D < 0
				puts ("no solutions....")
				
		else 
				x_1 = (-value2 + Math.sqrt(@D))/(2*value1)	
				x_2 = (-value2 - Math.sqrt(@D))/(2*value1)
				x_2,x_1 = x_1,x_2 if x_2 < x_1	
				unless x_1 % 1 == 0 
					print  x_1.round(2)
				else print Integer (x_1) 
				end 
				
				unless x_2 % 1 ==0
					print(",")
				puts x_2.round(2)
				else    print(",")
					puts Integer (x_2)
				end
		end
	end 
	if a ==0 && s == 0 && d == 0
		puts("#") 
		elsif a == 0 

 		if s == 0  
			puts ("no solutions....")
 		else
			helper = -s/d 
			puts helper.round(2) if helper % 1 == 1
			puts Integer (helper) if helper % 1 == 0
		end
	else 
		numb a, s, d 
	end
