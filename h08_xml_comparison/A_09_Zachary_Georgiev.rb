require 'json'
require 'rubygems'
require 'crack'

myXML  = Crack::XML.parse(File.read(ARGV[0]))
myJSON = myXML.to_json

if(JSON.parse(myJSON) == JSON.parse(File.read(ARGV[1])))
	puts 1
else
	puts 0
end