#solution for test for 12 number


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
