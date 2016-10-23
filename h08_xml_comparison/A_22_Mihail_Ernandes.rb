require "crack"
require "json"
require "rubygems"

XML_file = Crack::XML.parse(File.read(ARGV[0]))
JSON_file = XML_file.to_json

if JSON.parse(File.read(ARGV[1])) == JSON.parse(File.read(JSON_file))
	puts 1
else
	puts 0
end
