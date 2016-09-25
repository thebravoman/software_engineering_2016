a = Float(gets)
b = Float(gets)
c = Float(gets)
check_if_int = 0

if a == 0 then
  if b == 0 then
    if c == 0 then
      result = "#"
    else
      result =  "No solutions."
    end
  else
    result = Float(-c/b).round(2)
    check_if_int = 1
  end
else
  d = b*b - 4*a*c
  if d > 0 then
    check_if_int = 2
    result = Array.new
    x = ( -b + Math.sqrt(d) ) / (2 * a)
    result[0] = x.round(2)
    x = ( -b - Math.sqrt(d) ) / (2 * a)
    result[1] = x.round(2)
    if result[0] > result[1] then
      result[0], result[1] = result[1], result[0]
    end
  elsif d == 0 then
    result = ( ( -b ) / (2 * a) ).round(2)
    check_if_int = 1
  else
    result = "No solutions."
  end
end

if check_if_int == 1 && result % 1 == 0 then
  result = Integer(result)
end

if check_if_int == 2 then
  if result[0] % 1 == 0 then
    print String(Integer(result[0])) << ','
  else
    print String(result[0]) << ','
  end

  if result[1] % 1 == 0 then
    print String(Integer(result[1])) << "\n"
  else
    print String(result[1]) << "\n"
  end
end

if check_if_int != 2 then
  puts result
end
