require 'crack'

xml_hash = Crack::XML.parse(File.read(ARGV[0]))
json_hash = Crack::JSON.parse(File.read(ARGV[1]))

if xml_hash == json_hash then puts 1
else puts 0
end
