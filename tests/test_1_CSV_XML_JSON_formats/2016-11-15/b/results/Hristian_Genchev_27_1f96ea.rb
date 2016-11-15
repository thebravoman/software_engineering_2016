require 'csv'
require 'json'

path_csv = ARGV[0]
path_json = ARGV[1]

line_counter = 0
equal_counter = 0
sum = 0
sum_useless = 0

parsed_json = JSON.parse(path_json)

CSV.foreach(path_csv) do |row|
	line_counter += 1
end



CSV.foreach(path_csv) do |row|
	sum_useless += parsed_json[row[2]]
end

JSON.parse(path_json).each do |item|
	sum += item[item.value]
end

puts sum - sum_useless
