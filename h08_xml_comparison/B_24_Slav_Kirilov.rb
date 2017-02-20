require 'crack' 
require 'crack/xml'
myxml = Crack::XML.parse(File.read(ARGV[0]))
myjson = Crack::JSON.parse(File.read(ARGV[1]))
if myxml == myjson then
	puts 1
else
	puts 0
end
