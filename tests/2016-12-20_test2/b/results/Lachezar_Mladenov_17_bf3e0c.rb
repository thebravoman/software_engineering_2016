require 'csv'
require 'json'

file_csv = ARGV[0]
file_json = File.read(ARGV[1])

parsed_json_file =  JSON.parse(file_json)
result = 1;

CSV.foreach(file_csv) do |row|
	parsed_json_file.delete_if{|key, value| key.to_i == row[1].to_i} 
end	

parsed_json_file.each do |key, value|
 	result *= value.to_i
end	
	
puts result
