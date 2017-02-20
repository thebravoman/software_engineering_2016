require 'csv'
require 'json'

file_csv = ARGV[0], file_json = File.read(ARGV[1])

parsed_json_file =  JSON.parse(file_json)
result = 0;

	CSV.foreach(file_csv) do |row|
		parsed_json_file.delete_if{|key, value| key.to_f == row[1].to_f} 
	end	

	parsed_json_file.each do |key, value|
	 	result *= value.to_f
	end	
	
puts result
