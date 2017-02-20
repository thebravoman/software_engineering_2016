require 'rubygems'
require 'json'
require 'crack'

a = File.read(ARGV[0])
b = File.read(ARGV[1])

myXML  = Crack::XML.parse(a)
myJSON = myXML.to_json

hash_a = Hash.new
hash_b = Hash.new

hash_a = JSON.parse(myJSON)
hash_b = JSON.parse(b)


one = 1.to_i
zero = 0.to_i

if(hash_a == hash_b)
	puts one
else
	puts zero
end