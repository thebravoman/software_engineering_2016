a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0 
    unless b == 0
        x = c / b
        unless x == 0 
            x *= -1
        end
    end
    if b == 0
        if c == 0
            puts "#"
        end
        exit(true)
    end
else    
    d = b*b - 4*a*c
    if d > 0
        x1 = (b*-1 + Math.sqrt(d)) / (2*a)
        x2 = (b*-1 - Math.sqrt(d)) / (2*a)
    elsif d == 0
        x = b*-1 / (2*a)
    end
end

if x != nil 
    if x % 1 == 0 
        x = x.to_i
    else x = sprintf("%.2f", x)
    end
    puts x
elsif x == nil && d > 0
    if x1 % 1 == 0
        x1 = x1.to_i
    else x1 = sprintf("%.2f", x1)
    end
    if x2 % 1 == 0
        x2 = x2.to_i
    else x2 = sprintf("%.2f", x2)
    end
    if x1.to_f > x2.to_f
        x1,x2 = x2,x1
    end
    puts "#{x1},#{x2}"
end

