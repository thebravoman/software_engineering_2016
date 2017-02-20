#/*Develop a program named FirstName_LastName_ClassNumber_929a4f.rb

#1. you are given two arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The second argument is to a JSON file
#1.3 The third argument is to an XML file
#2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name
#3. Calculate the sum of the symbols of all thе nodes
#4. Print only the result value

require('nokogiri')
require('json')

my_json = JSON.parse(File.read(ARGV[1].to_s))
my_xml = Nokogiri::XML.parse(File.read(ARGV[2].to_s))

total_symbols = 0
my_xml.xpath("//*").each do |node|
	found = false
	if node.name.length <= 3
		my_json.each do |json_key, json_value|
			if json_key == node.name
				found = true
			end
		end
		if !found 
			total_symbols += node.name.length
		end
	end
end

puts total_symbols
