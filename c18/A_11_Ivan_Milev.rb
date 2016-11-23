require 'byebug'
password_length = ARGV[0].to_i
result_str = ''

# puts(('b'.ord - 1).chr)

(0..(26 ** password_length - 1)).each do |n|
  result_str = ''
  while(n > 1)
    result_str << ('a'.ord + (n % 26)).chr
    n /= 26
  end
  while result_str.length < password_length
    result_str << 'a'
  end
  if result_str.size ==4
    byebug
  end
  result_str.reverse!
  puts result_str
end
