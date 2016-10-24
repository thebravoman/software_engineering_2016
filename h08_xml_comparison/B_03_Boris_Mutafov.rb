require 'crack' 

xml, json = ARGV[0], ARGV[1];

file_1_xml = File.read(xml)
file_2_json = File.read(json)

xml_result = Crack::XML.parse(file_1_xml)
json_result = Crack::JSON.parse(file_2_json)
puts xml_result == json_result ? 1 : 0 
