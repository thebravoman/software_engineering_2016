=begin
Develop a program named FirstName_LastName_ClassNumber_2d8d18.rb

1. you are given two command line arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is the full path of a CSV file with 4 columns
1.3 The second argument is the full path of a JSON file

2. Find the the min of all the values in the JSON file where :
 the key of this value is contained in the value of any row on column 2 from the CSV 
 
3. Print only the result value
=end

require 'json'
require 'csv'

json_hash = JSON.parse(File.read(ARGV[1]))

min = 0
set = false

json_hash.each do |key, value|
	found = false
	CSV.foreach(ARGV[0]) do |row|
		if row[1] != nil && row[1][key]
			found = true
			break
		end
	end
		
	if found
		if value == value.to_i.to_s
			if set == false
				min = value.to_i
				set=true
			elsif min > value.to_i
				min = value.to_i	
			end		
		end
	end
end
puts min
