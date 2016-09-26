include Math

fl = []

ARGV.each do |fat|
    fl << fat.to_f
end

if fl[0] == 0 && fl[1] == 0 && fl[2] == 0
	print "#"
	abort
end

if fl[0] == 0
    if (x = -fl[2]/fl[1])%1 == 0
        print x.to_i
    else
        print x.round(2)
    end
else
if (D = fl[1] ** 2 - 4 * fl[0] * fl[2]) > 0
    x = [(-fl[1] + Math.sqrt(D))/(2 * fl[0]), (-fl[1] - Math.sqrt(D))/(2 * fl[0])]
    x.sort! { |x1, x2| x1 <=> x2}
    x.each do |fat|
        if fat%1 == 0
            print fat.to_i
        else
            print fat.round(2)
        end
        if x[0] == fat
            print ","
        end
    end
elsif D == 0
    if (x = -fl[1]/(2 * fl[0]))%1 == 0
        print x.to_i
    else
        x.round(2)
    end 
end
end