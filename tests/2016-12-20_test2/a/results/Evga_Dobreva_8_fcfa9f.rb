#Develop a program named FirstName_LastName_ClassNumber_fcfa9f.rb

#1. you are given two arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The second argument is to a JSON file
#1.3 The third argument is to an XML file
#2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name
#3. Calculate the sum of the symbols of all this nodes
#4. Print only the result value

require "nokogiri"
require "json"
 
xml_file=Nokogiri::XML.parse(File.read(ARGV[0]))
json_file=JSON.parse(File.read(ARGV[1]))
 
nodes=[]
 
xml_file.xpath("//*").each do |node|
  nodes << node.name if (node.name.length <= 3 and !json_file.has_key?(node.name))
end
 
sum=0

nodes.each do |element| 
	sum+=element.to_s.size
end

puts sum
