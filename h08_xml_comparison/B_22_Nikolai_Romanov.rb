require 'rubygems'
require 'json'
require 'crack'
xml_file = File.read(ARGV[0])
json_file = File.read(ARGV[1])
xml_parse=Crack::XML.parse(xml_file)
json_parse=JSON.parse(json_file)
if xml_parse == json_parse then puts 1
else puts 0 end
