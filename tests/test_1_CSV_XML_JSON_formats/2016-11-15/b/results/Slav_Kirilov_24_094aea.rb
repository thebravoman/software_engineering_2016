require 'json'
require 'nokogiri'
  
=begin
Develop a program named FirstName_LastName_ClassNumber_094aea.rb

1. you are given two arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is to an XML file
1.3 The second argument is to a JSON file
2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name;
3. Calculate the sum of the symbols of all this nodes;
4. Print only the result value
=end
xml = File.open( ARGV[1] )
my_xml = Nokogiri::XML( xml )
json_arg = JSON.parse(File.open( ARGV[2]))

my_xml.each do |thing|
	if thing.count <= 3 then 
		if thing != json_arg.keys then count += thing.count
		end
	end
end
puts count
