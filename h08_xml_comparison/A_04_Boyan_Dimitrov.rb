require "json"
require "crack"
require "rubygems"

xml_file = ARGV[0]
json_file = ARGV[1]

xml_content_store = File.read(xml_file)
json_content_store = File.read(json_file)

xml_file_hash = Hash[ Crack::XML.parse( xml_content_store ) ]
json_file_hash = Hash[ JSON.parse( json_content_store ) ]

if xml_file_hash == json_file_hash
  puts 1
else
  puts 0
end
