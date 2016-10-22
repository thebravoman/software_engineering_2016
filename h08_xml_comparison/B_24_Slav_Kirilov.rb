require 'crack' 
require 'crack/xml'
myxml = Crack::XML.parse(File.read('myXML.xml'))
myjson = Crack::JSON.parse(File.read('myJSON.json'))
if myxml == myjson then
	puts 1
else
	puts 0
end
