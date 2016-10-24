require 'rubygems'
require 'json'
require 'crack'

input_xml = Crack::XML.parse(File.read ARGV[0]).to_json

input_json = ARGV[1]

JSON.parse(input_xml) == JSON.parse(File.read(input_json)) ? equal = 1 : equal = 0

puts equal 

