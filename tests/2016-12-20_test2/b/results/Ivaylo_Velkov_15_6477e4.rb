require 'json'
require 'nokogiri'

json_file = JSON.parse(File.read(ARGV[0].to_s))
xml_file = Nokogiri::XML(File.read(ARGV[1].to_s))

number_of_equals = 0

json_file.each do |key, value|
	is_true = false
	
	xml_file.xpath("//*").each do |node|
		if node.name == key 
			is_true = true		
		end	
	end
	if is_true then number_of_equals += 1 end
end

puts Math.sqrt(number_of_equals)
