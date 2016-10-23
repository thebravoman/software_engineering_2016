require 'rubygems'
require 'json'
require 'crack'

file_1 = File.read(ARGV[0])
file_2 = File.read(ARGV[1])

puts Crack::XML.parse(file_1) != JSON.parse(file_2) ? 0 : 1
