require 'crack' # XML and JSON parsingrequire 'crack/json' # Only JSON parsing
require 'crack/xml' # Only XML parsing
xml_file = ARGV[0] ;
json_file = ARGV[1];
response = Crack::XML.parse(File.read(xml_file))
response2 = Crack::JSON.parse(File.read(json_file))
puts response == response2 ? 1 : 0  
