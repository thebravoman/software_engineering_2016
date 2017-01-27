require 'json'
require 'nokogiri'

xml_file = Nokogiri::XML(File.read(ARGV[2].to_s))
json_file = JSON.parse(File.read(ARGV[1].to_s))

sum = 0

json_file.each do |key, value|
	is_true = false
	
	xml_file.xpath("//*").each do |node|
		if node.name != key
			if node.name.length <= 3 
				is_true = true		
			end	
		end	
	end
	if is_true then sum += node end
end

puts sum
