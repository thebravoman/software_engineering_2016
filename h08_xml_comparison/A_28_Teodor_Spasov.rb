require "rubygems"
require "json"
require "crack"

xml=File.read(ARGV[0])
json=File.read(ARGV[1])

crack_xml=Crack::XML.parse(xml)
parse_json=JSON.parse(json)

if(crack_xml==parse_json)
	puts 1
else 
  puts 0
end
