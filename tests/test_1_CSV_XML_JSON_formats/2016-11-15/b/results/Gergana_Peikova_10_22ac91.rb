require 'crack' 

xml, json = ARGV[1], ARGV[2];

file_1_xml = File.read(xml)
file_2_json = File.read(json)
result = 0

xml_result = Crack::XML.parse(file_1_xml)
json_result = Crack::JSON.parse(file_2_json)

foreach(data) do |row|
	
		if row.xml_result == json_result.keys
			result++
		end
end
	
puts result*result
