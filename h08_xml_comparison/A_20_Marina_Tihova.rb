require 'rubygems'
require 'crack'
require 'json'

puts Crack::XML.parse(File.read(ARGV[0])) == JSON.parse(File.read(ARGV[1])) ? 1 : 0