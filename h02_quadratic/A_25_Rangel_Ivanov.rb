require 'mathn' 

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

def check (x)
    if x % 1 == 0 
            x = x.to_i
        else 
            x = x.round(2)
        end
    return x
end

if a == 0 && b == 0 && c == 0
    puts "#"
    exit
end
if a == 0
    if b == 0
        exit
    else
    x = -c/b
    a1 = check(x)
    puts a1.to_s
    exit
end
elseif b == 0
    x1 = Math.sqrt(-c/a)
    x2 = -Math.sqrt(-c/a)
    a2 = check(x1)
    a3 = check(x2)
    if a2 > a3
        puts a3.to_s + "," + a2.to_s
        exit
    else
        puts a2.to_s + "," + a3.to_s
        exit
    end
end

d = Math.sqrt(b**2-4*a*c)
if d.real < 0
    exit
elseif d.real == 0
    x = -b/2*a
    a4 = check(x)
    puts a4.to_s
    exit
end
end
x1 = (-b+d)/2*a
x2 = (-b-d)/2*a
a5 = check(x1)
a6 = check(x2)
if a5.real > a6.real
    puts a6.real.to_s + "," + a5.real.to_s
else
    puts a5.real.to_s + "," + a6.real.to_s
end
end
