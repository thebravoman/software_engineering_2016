equire 'json'
require 'crack'
require 'rubygems'


json_file = ARGV[0].to_s
xml_file = ARGV[1].to_s


json_content_store = File.read(json_file)
xml_content_store = File.read(xml_file)

json_file_hash = Hash[ JSON.parse( json_content_store )]
xml_file_hash = Hash[ Crack::XML.parse( xml_content_store )]

key_array = []
value_array = []
result = 0
sum = 0

foreach(data) do |keys|
  if( row.xml_file_hash != json_file_hash.keys && json_file_hash.keys.to_s.lenght > 3 )
    result = result + 1
    sum = sum + json_file_hash.keys.to_i
  end
end

puts sum
