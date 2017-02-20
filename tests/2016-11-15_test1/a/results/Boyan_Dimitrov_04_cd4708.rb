require 'json'
require 'crack'
require 'rubygems'

xml_file = ARGV[0].to_s
json_file = ARGV[1].to_s

xml_content_store = File.read(xml_file)
json_content_store = File.read(json_file)

xml_file_hash = Hash[ Crack::XML.parse( xml_content_store )]
json_file_hash = Hash[ JSON.parse( json_content_store )]

key_array = []
value_array = []
result = 0
sum = 0

foreach(data) do |keys|
  if( row.json_file_hash != xml_file_hash.keys && xml_file_hash.keys.to_s.lenght > 3 )
    result = result + 1
    sum = sum + xml_file_hash.keys.to_i
  end
end

puts sum
