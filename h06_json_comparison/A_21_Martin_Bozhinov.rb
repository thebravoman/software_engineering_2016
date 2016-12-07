require 'json'

file1 = ARGV[0]
file2 = ARGV[1]

n1 = File.read(file1)
n2 = File.read(file2)

comp1 = JSON.parse(n1)
comp2 = JSON.parse(n2)

if comp1 == comp2
	puts 1

else 
	puts 0
end


