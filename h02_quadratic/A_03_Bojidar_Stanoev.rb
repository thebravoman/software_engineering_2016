
a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
if b==0 && c==0 && a==0
puts "#"
end
if a == 0 && b!=0 && c!=0
x=-c/b

if x%1!=0
puts x.round(2)
else
x.to_i
puts x
end
end
if a!=0
d=(b*b)-(4*a*c)
if d==0
x=-b/(2*a)
if x%1!=0
puts x.round(2)
else
x.to_i
printf("%d\n",x)
end
end
if d>0
x1=(-b+Math.sqrt(d))/(2*a)
x2=(-b-Math.sqrt(d))/(2*a)
if x1>x2 
x1,x2=x2,x1
end
if x1%1!=0
printf("%.2f,",x1)
else
x1.to_i
printf("%d,",x1)
end
if x2%1!=0
printf("%.2f\n",x2)
else
x2.to_i
printf("%d\n",x2)
end
end  
end
