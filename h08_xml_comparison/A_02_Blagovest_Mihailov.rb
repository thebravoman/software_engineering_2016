require 'json'
require 'rubygems'
require 'crack'

json1 = File.read(ARGV[1])
xml1 = File.read(ARGV[0])

h1=Crack::XML.parse(xml1)
h2=JSON.parse(json1)

if ( h1!=h2 )
	puts 0
else
	puts 1
end

