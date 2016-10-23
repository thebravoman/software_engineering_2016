require 'active_support/all'

xml_file = ARGV[0]
json_file = ARGV[1]

xml_string = File.read(xml_file)
json_string = File.read(json_file)

if JSON.parse(json_string) == Hash.from_xml(xml_string)
  puts 1
else
  puts 0
end
