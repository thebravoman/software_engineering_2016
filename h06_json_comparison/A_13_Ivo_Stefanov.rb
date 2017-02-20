require 'json'
a = File.read(ARGV[0])
b = File.read(ARGV[1])

hash_a = Hash.new
hash_b = Hash.new

hash_a = JSON.parse(a)
hash_b = JSON.parse(b)

zero = 0.to_i
one = 1.to_i

if(hash_a == hash_b)
	puts one
else
	puts zero
end