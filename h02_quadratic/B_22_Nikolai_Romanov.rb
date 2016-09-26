A = gets.to_f
B = gets.to_f
C = gets.to_f
D = B*B - 4*A*C
if D==0
	X=-B/2*A
	puts X.round(0)
else
	if D>0
		X1=((-B-Math.sqrt(D))/2/A).round(0)
		X2=((-B+Math.sqrt(D))/2/A).round(0)
		if X1>X2
                        puts X2.to_s + "," + X1.to_s
                end
                if X1<X2
                        puts X1.to_s + "," + X2.to_s
                end
	else puts 
   end
end

