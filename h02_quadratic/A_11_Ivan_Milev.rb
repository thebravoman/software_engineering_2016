a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if ARGV.empty?
  abort
end
d = (b * b) - (4 * a * c)
if a == 0 && (b != 0 || c != 0)
  x1 = (-c / b).to_f
  if(x1 == x1.to_i)
    x1 = x1.to_i
  end
  puts "#{(x1.is_a? Float) ? x1.round(2) : x1 }"
elsif a == 0 && b == 0 && c == 0
  puts "#"
else
  if d > 0
    #puts "Jello"
    x1 = ((-b) + (Math.sqrt(d))) / (2 * a)
    x2 = ((-b) - (Math.sqrt(d))) / (2 * a)
    #puts "??#{x1},#{x2}??"
    if(x1 == x1.to_i)
      x1 = x1.to_i
    end
    if(x2 == x2.to_i)
      x2 = x2.to_i
    end
    puts "#{(x1.is_a? Float) ? x1.round(2) : x1 },#{(x2.is_a? Float) ? x2.round(2) : x2}" if x1 < x2
    puts "#{(x2.is_a? Float) ? x2.round(2) : x2},#{(x1.is_a? Float) ? x1.round(2) : x1 }" if x1 > x2


  elsif d == 0
    x1 = (-b) / (2 * a)
    if(x1 == x1.to_i)
      x1 = x1.to_i
    end
    puts "#{(x1.is_a? Float) ? x1.round(2) : x1}"
  end
end
