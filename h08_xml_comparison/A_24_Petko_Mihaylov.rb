require 'crack'
require 'json'
require 'rubygems'
 
xml = File.read(ARGV[0])
json = File.read(ARGV[1])
 
xml_file = Crack::XML.parse(xml)
json_file = JSON.parse(json)


if xml_file!=json_file
    print 0
end

if xml_file==json_file
    print 1
end
