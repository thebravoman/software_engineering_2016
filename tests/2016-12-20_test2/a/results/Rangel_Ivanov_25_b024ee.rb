#1. you are given two arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The second argument is to a JSON file
#1.3 The third argument is to an XML file
#2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name
#3. Calculate the sum of the symbols of all this nodes
#4. Print only the result value

require 'json'
require 'crack'

json = JSON.parse(File.read(ARGV[1]))
xml = Crack::XML.parse(File.read(ARGV[2]))
result = 0

xml.xpath("//*").each do |node|
	if node.name.length <= 3
		json.each do |key, value|
			if key != node.name
				result += node.name.length
			end
		end
	end
end

puts result
