require 'json'

file1 = ARGV[0] 
file2 = ARGV[1]

a = File.read(file1) 
b = File.read(file2)

hash_a = JSON.parse(a)
hash_b = JSON.parse(b)

if hash_a == hash_b
	puts 1
else 
	puts 0
end