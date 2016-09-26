#a*x^2 + b*x + c = 0
a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f

if a == 0
  x1 = -(c) / (b)
  if x1 % 1 == 0
    x1 = x1.to_i
    puts "#{x1}"
    abort
  elsif x1 % 1 != 0
    puts "#{'%.2f' % x1}"
    abort
  end
end # if( a == 0)

d = b*b - 4*a*c

if d == 0
  if x1 % 1 == 0
    x1 = x1.to_i
    puts "#{x1}"
    abort
  elsif x1 % 1 != 0
    puts "#{'%.2f' % x1}"
    abort
  end
end

if d < 0
  puts ""
  abort
end

if d > 0

  x1 = ( -b + Math.sqrt(d) ) / 2*a
  x2 = ( -b - Math.sqrt(d) ) / 2*a

  if x1 > x2

    if x1 % 1 == 0
      x1 = x1.to_i
    elsif x1 % 1 == 0
      x1 = (x1*100).round / 100.0
    end

    if x2 % 1 == 0
      x2 = x2.to_i
    elsif x2 % 1 != 0
      x2 = (x2*100).round / 100.0
    end

    puts "#{x2},#{x1}"
    abort

  end #if x1 > x2

  if x1 < x2

    if x1 % 1 == 0
      x1 = x1.to_i
    elsif x1 % 1 == 0
      x1 = (x1*100).round / 100.0
    end

    if x2 % 1 == 0
      x2 = x2.to_i
    elsif x2 % 1 != 0
      x2 = (x2*100).round / 100.0
    end

    puts "#{x1},#{x2}"
    abort

  end#if x1 < x2
end# if d > 0
