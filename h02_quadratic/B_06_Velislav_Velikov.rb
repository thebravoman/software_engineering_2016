a = ARGV[0].to_f	#3
b = ARGV[1].to_f	#1
c = ARGV[2].to_f	#-4
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
if x1 > x2
		rev = x1
		x1 = x2
		x2 = rev
end
if x1 % 1 != 0
	print sprintf( "%.2f,", x1 )
else
	print "#{x1.to_i},"
end
if x2 % 1 != 0
	print sprintf( "%.2f", x2 )
else
	print x2.to_i;
end
print "\n";

