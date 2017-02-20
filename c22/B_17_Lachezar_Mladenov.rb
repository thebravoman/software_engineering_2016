require 'csv'
require 'json'

file_csv = ARGV[0].to_s 
file_json = File.read(ARGV[1].to_s)

parsed_json_file =  JSON.parse(file_json)
result = 1;

CSV.foreach(file_csv) do |row|
	parsed_json_file.delete_if{|key, value| key.to_s == row[1].to_s} 
end	

parsed_json_file.each do |key, value|
 	result *= value.to_i
end	
	
puts result
