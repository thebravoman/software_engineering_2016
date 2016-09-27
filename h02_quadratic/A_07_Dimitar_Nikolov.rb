require 'mathn'

a = ARGV[0].to_f
b = ARGV[1].to_f
c = ARGV[2].to_f
results = []

if a == 0
  if b == 0 && c == 0
    puts "#"
  elsif b == 0 && c != 0
  else
    x = -c / b
    if x % 1 == 0
      puts x.to_i
    else
      puts x.round(2)
    end
  end
else
  d = b ** 2 - 4 * a * c
  if d > 0
    x1 = (-b + Math.sqrt(d)) / (2.0 * a)
    x2 = (-b - Math.sqrt(d)) / (2.0 * a)
    results.push(x1).push(x2)
  elsif d == 0
    x = -b / (2.0 * a)
    results.push(x)
  end
  results.map! do |result|
    if result % 1 == 0
      result.to_i
    else
      result.round(2)
    end
  end
  puts results.sort!.join(",") if results.length > 0
end
