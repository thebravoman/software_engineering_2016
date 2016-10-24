require 'json'
require 'rubygems'
require 'crack'

file1 = File.read ARGV[0]
file2 = File.read ARGV[1]

if (Crack::XML.parse file1) != (Crack::JSON.parse file2)
	puts 0
else
	puts 1
end
