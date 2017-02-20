require 'csv'
require 'json'

csv_file = ARGV[0]
json_file = File.read(ARGV[1])
json_hash = JSON.parse(json_file)
product = 0
how_many_times = 0

json_hash.each do |k, v|

	is_in_CSV = 0

	CSV.foreach(csv_file) do |row|

		if k == row[1] then 
			is_in_CSV += 1
		end

	end

	if is_in_CSV == 0 then 
	
		how_many_times += 1
		
			if(how_many_times == 1) then 
				product = 1 
			end
		
		product *= v.to_i
	end 
	
end

puts product

