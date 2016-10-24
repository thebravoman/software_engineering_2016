require 'json'
require 'rubygems'
require 'crack'

json_file = File.read(ARGV[1])
json_data_hash = JSON.parse(json_file)

xml_file = File.read(ARGV[0])
xml_data_hash = Crack::XML.parse(xml_file)

if json_data_hash == xml_data_hash
	puts 1
else 
	puts 0
end
