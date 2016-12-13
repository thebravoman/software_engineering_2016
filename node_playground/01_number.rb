require 'json'
require 'nokogiri'

xml_file = ARGV[0]
parsed_xml = Nokogiri::XML(File.open(xml_file))

json_file = ARGV[1]
parsed_json = JSON.parse(File.read(json_file))

counter = 0

parsed_json.each do |key, value|

	parsed_xml.css(key).each do |item|

		counter += 1
	
	end

end

puts counter ** 2	
