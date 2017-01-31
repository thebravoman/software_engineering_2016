=begin
Develop a program named FirstName_LastName_ClassNumber_64c790.rb

1. you are given two command line arguments;
1.1 if there are other arguments they should be discarded;
1.2 The first argument is the full path of a CSV file with 4 columns
1.3 The second argument is the full path of a JSON file

2. Find the product of all the values in the JSON file where :
 the key of this value is not equal to a value in any row on column 2 from the CSV 
 
3. Print only the result value
=end


require 'json'
require 'csv'


csv = ARGV[0]

json = JSON.parse(File.open(ARGV[1]))

result = 1
state = 0

json.each_key do |key|
	help = 0
	CSV.foreach(csv) do |row|
		if key != row[2] then
			help += 1
		end
		if help == json.keys.count then
			if state != 1 then
				state = 1
			end
			result *= json.fetch(key).to_i
		end
	end
end

if state == 1 then 
	puts result
else puts 0
end
