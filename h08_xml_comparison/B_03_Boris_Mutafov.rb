require 'crack' 

xml, json = ARGV[0], ARGV[1];

xml_result = Crack::XML.parse(File.read(xml))
json_result = Crack::JSON.parse(File.read(json))
puts xml_result == json_result ? 1 : 0  
