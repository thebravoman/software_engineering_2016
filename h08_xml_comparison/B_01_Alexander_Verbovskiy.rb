require 'json'
require 'crack'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

file1_parse=Crack::XML.parse(file1)
file2_parse=JSON.parse(file2)

if file1_parse == file2_parse
	puts 1
else 
	puts 0
end 
