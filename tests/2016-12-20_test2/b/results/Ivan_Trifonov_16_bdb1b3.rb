=begin Develop a program named FirstName_LastName_ClassNumber_bdb1b3.rb

1. you are given two command line arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is the full path of a CSV file with 4 columns
1.3 The second argument is the full path of a JSON file

2. Find the product of all the values in the JSON file where :
 the key of this value is not equal to a value in any row on column 2 from the CSV 
 
3. Print only the result value
=end
require 'csv'
require 'json'

filepath = ARGV[0]
json_path = ARGV[1]

json_read = File.read(json_path)
json = JSON.parse(json_read)

product = 1
match = 0

json.each do |key, value|
		match = 0
		CSV.foreach(filepath) do |row| 
			if key == row[1] then
				match = 1
				break
			end
		end
				
		if match == 0 then
			product *= value.to_i
		end
end

puts product
