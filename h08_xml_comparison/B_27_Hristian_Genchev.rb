require 'crack' # XML and JSON parsingrequire 'crack/json' # Only JSON parsing
require 'crack/xml' # Only XML parsing
xml_file = Crack::XML.parse(File.read(ARGV[0]))
json_file = Crack::JSON.parse(File.read(ARGV[1]))
puts xml_file == json_file ? 1 : 0   
