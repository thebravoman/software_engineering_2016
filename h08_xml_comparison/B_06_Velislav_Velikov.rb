require 'rubygems'
require 'crack'
require 'json'

fxml = File.read(ARGV[0])
fjson = File.read(ARGV[1]);
if(JSON.parse(fjson) == Crack::XML.parse(fxml)) 
puts 1
else puts 0
end
