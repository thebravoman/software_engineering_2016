require 'json'

a = File.read(ARGV[0])
b = File.read(ARGV[1])

c = JSON.parse(a)
d = JSON.parse(b)

if c == d then puts "1"
elsif puts "0"

end
