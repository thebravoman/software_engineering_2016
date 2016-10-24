require 'crack'

file_xml = File.read(ARGV[0])
file_json = File.read(ARGV[1])

if Crack::XML.parse(file_xml) == Crack::JSON.parse(file_json)
	puts 1
else 
	puts 0
end
