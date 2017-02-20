require 'rubygems'
require 'crack'
require 'json'
require 'xml'

counter = 0
c=0
fxml = File.read(ARGV[0])
fjson = File.read(ARGV[1]);
JSON.parse(fjson)
Crack::XML.parse(fxml) 
if(fjson(i) == fxml(i))
i++
c++ 
elseif(fjson(i) != fxml(i))
i++
end
puts c*c
