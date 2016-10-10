require 'json'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

if JSON.parse(file1) == JSON.parse(file2) 
	puts 1
else 
	puts 0
end
