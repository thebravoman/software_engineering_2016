#Develop a program named FirstName_LastName_ClassNumber_be0ae8.rb

#1. you are given two arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The second argument is to a JSON file
#1.3 The third argument is to an XML file
#2. Find the number of nodes in the xml that have a name equal to a key in the JSON file
#3. Calculate the square of this number
#4. Print only the result value



require "crack"
require "json"

json = JSON.parse(File.read(ARGV[1]))
xml = Crack::XML.parse(File.read(ARGV[2]))

sum = 0
 
xml.xpath("//*").each do |node|
  if json.has_key?(node.name)
  	sum+=1
  end
end
 
puts sum*sum
