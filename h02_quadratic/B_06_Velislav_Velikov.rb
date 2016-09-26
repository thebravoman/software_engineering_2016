include Math
a = gets.to_f	#3
b = gets.to_f	#1
c = gets.to_f	#-4
D = b*b - 4*a*c #3*3-4*(-4)*1
if(D<0)
	puts "#"
end
if(D==0)
	puts -b/2*a
end
if(D>0)
	x1 = ((b*-1) + Math.sqrt(D)) / (2*a)
    x2 = ((b*-1) - Math.sqrt(D)) / (2*a)
end
if(x1<x2)
	if(x1%1==0 && x2%1==0) 
		print"#{x1.round(2)},#{x2.round(2)}\n"
	elseif(x1%1==0)
		print"#{x1},#{x2.round(2)}\n"
	elseif(x2%1==0)
		print"#{x1.round(2)},#{x2}\n"
	else 
		print"#{x1},#{x2}\n"
	end
	
else
	print"#{x2.round(2)},#{x1.round(2)}\n"
end
