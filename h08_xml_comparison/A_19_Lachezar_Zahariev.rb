require 'crack'
require 'rubygems'
require 'json'

XML_ = Crack::XML.parse File.read(ARGV[0])
JSON_ = XML_.to_json

if JSON.parse File.read(ARGV[1]) == JSON.parse File.read JSON_
	puts 1
else
	puts 0
end
