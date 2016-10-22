require 'rubygems'
require 'json'
require 'crack'



file_1 = File.read(ARGV[0])
file_2 = File.read(ARGV[1])


file_xml=Crack::XML.parse(file_1)
file_json=JSON.parse(file_2)

puts file_xml == file_json ? "1" : "0"
