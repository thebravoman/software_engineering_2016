require 'json'
require 'rubygems'
require 'crack'

file_1 = Crack::XML.parse(File.read(ARGV[0]))
file_2 = JSON.parse(File.read(ARGV[1]))

puts file_1 == file_2 ? "1" : "0"
