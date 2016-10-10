=begin
require 'json'
file1 , file2 = File.read(ARGV[0]) , File.read(ARGV[1])
puts JSON.parse(file1) == JSON.parse(file2) ? "1" : "0"
=end

require 'json'

file1 = File.read(ARGV[0])
file2 = File.read(ARGV[1])

file1_parse=JSON.parse(file1)
file2_parse=JSON.parse(file2)

if file1_parse == file2_parse	
	puts 1
else 
	puts 0
end
