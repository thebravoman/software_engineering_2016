require 'mathn' 

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0 && b == 0 && c == 0
    puts "#"
    exit
end
if a == 0
    if b == 0
        exit
    else
    x = -c/b
    puts x.round(2)
    exit
end
else if b == 0
    x1 = Math.sqrt(-c/a)
    x2 = -Math.sqrt(-c/a)
    if x1 > x2
        puts x2.round(2) + "," + x1.round(2)
        exit
    else
        puts x1.round(2) + "," + x2.round(2)
        exit
    end
end

d = Math.sqrt(b**2-4*a*c)
if d.real < 0
    exit
else if d.real == 0
    x = -b/2*a
    puts x.round(2)
    exit
end
end
x1 = (-b+d)/2*a
x2 = (-b-d)/2*a
if x1.real > x2.real
    puts x2.real.round(2).to_s + "," + x1.real.round(2).to_s
else
    puts x1.real.round(2).to_s + "," + x2.real.round(2).to_s
end
end
