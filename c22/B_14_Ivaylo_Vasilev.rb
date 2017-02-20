require 'csv'
require 'json'


json_file = File.read(ARGV[1])
parsed_json = JSON.parse(json_file)
csv_file = ARGV[0]
csv_hash = CSV.parse(csv_file)
#hash = Hash.new(0)
h = parsed_json.to_json
product = 1

parsed_json.each do |key, value|
	present = 0
	CSV.foreach(csv_file) do |row|
			if key.to_s == row[1].to_s then 
				present = 1 
				break 
			end
	end
	
		if present == 0 then product *= value end
	
end

puts product
