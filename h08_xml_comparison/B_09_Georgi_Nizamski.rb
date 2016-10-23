require 'active_support/all'
require 'json'

xml_doc = Hash.from_xml(File.read(ARGV[0].to_s))

json_doc = JSON.parse(File.read(ARGV[1]).to_s)

def is_schematic_equal?(json, xml)
	if json == xml then return 1
	else return 0	
	end
end

puts is_schematic_equal?(json_doc, xml_doc)
