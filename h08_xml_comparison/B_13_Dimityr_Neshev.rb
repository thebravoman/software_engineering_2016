require 'rubygems'
require 'json'
require 'crack'

file_xml = File.read(ARGV[0])
file_json = File.read(ARGV[1])

puts Crack::XML.parse(file_xml) != JSON.parse(file_json) ? 0 : 1
