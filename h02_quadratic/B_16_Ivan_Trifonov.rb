include Math

a=ARGV[0].to_f
b=ARGV[1].to_f
c=ARGV[2].to_f

if (a==0 && b==0 && c==0)
	print "#\n"
	
elsif a==0  && b!=0 then
    x=-c/b
    if x%1==0 then
        puts"#{x.to_i}"
    else 
        puts "#{x.round(2)}"
    end
        
 elsif b!=0
    D=b**2 -4*a*c
    if D >0 then
        x1= (-b + sqrt(D))/(2*a)
         x2= (-b - sqrt(D))/(2*a)
         if x1>x2 then
             x1,x2=x2,x1
             
        end
        
        if x1%1==0 then
            print x1.to_i
        else 
            print x1.round(2)
        end
        print ","
        if x2%1==0 then
            puts "#{x2.to_i}"
        
        else 
            puts "#{x2.round(2)}"
        end
    end
    if D==0 then
        x=-b/2*a
        if x%1==0 then
            puts "#{x.to_i}"
        else 
            puts"#{x.round(2)}"
        end
    end    
 end
