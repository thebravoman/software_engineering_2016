require 'rubygems'
require 'crack'
require 'json'

json_file = JSON.parse(File.read(ARGV[1]))
xml = Crack::XML.parse(File.read(ARGV[2]))

result = 0

	
    xml.each do |node,val|
        json_file.each do |key, value|
        	if node.to_s == key.to_s
        		result = result.to_i + 1
        	end
        end
        	
    end
 
 puts result * result
