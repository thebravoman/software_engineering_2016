#Develop a program named FirstName_LastName_ClassNumber_07a87d.rb

#1. you are given two command line arguments;
#1.1 if there are other arguments they should be discarded;
#1.2 The first argument is the full path of a CSV file with 4 columns
#1.3 The second argument is the full path of a JSON file

#2. Find the product of all the values in the JSON file where the key of this value is not equal to a value in any row on column 2 from the CSV 
 
#3. Print only the result value

require "csv"
require "json"

csv_file=ARGV[0]
json_file=ARGV[1]

parsed_json=JSON.parse(json_file)

result=0

CSV.foreach(csv_file) do |row|
	parsed_json.delete_if{|key, value| key.to_f == row[1].to_f} 
end	

parse_json.each do |key, value|
 	result += value.to_f
end	
	
puts result
