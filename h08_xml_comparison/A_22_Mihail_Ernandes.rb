require 'crack'
require 'json'
require 'rubygems'

XML_file = Crack::XML.parse(File.read(ARGV[0]))
JSON_file = JSON.parse(File.read(ARGV[1])

if XML_file == JSON_file
	puts 1
else
	puts 0
end
