=begin
Develop a program named FirstName_LastName_ClassNumber_6dc734.rb

1. you are given two arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is to an XML file
1.3 The second argument is to a JSON file
2. Find the number of nodes in the xml that have a name of 3 or less symbols and there are no keys in the JSON with such name
3. Calculate the sum of the symbols of all this nodes
4. Print only the result value
=end
require 'json'
require 'crack'
require 'rubygems'

h1=Hash.new
h2=Hash.new
h1=Crack::XML.parse(File.read(ARGV[0]))
h2=JSON.parse(File.read(ARGV[1]))
sum = 0
temp = 1


h1.each do |key_x , value_x|
  if value_x.size <= 3
  h2.each do |key_j , value_j|
    if value_x == key_j
      temp = 0
    end
  end
  if temp != 0
    sum = sum + value_x.size
  end
end
end

puts sum
