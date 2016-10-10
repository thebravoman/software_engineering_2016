require 'json'

file1=File.read(ARGV[0])
file2=File.read(ARGV[1])

json1=JSON.parse(file1)
json2=JSON.parse(file2)

if json1==json2 
	puts 1
else 
	puts 0
end
