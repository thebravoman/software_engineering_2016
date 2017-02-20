require 'rubygems'
require 'crack'
require 'json'



xml = Crack::XML.parse(File.read(ARGV[0]))
json = JSON.parse(File.read(ARGV[1]))

if xml == json
	puts "1"
else
	puts 0
end