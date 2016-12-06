require 'csv'
require 'json'

csv_file = ARGV[0].to_s
json_file = JSON.parse(File.read(ARGV[1].to_s))

result = 1
is_not_equal = true

json_file.each do |key, value| 
	CSV.foreach(csv_file) do |row| 
		if row[1].eql?(key) 
			is_not_equal = false
		end	
	end
	
	if is_not_equal == true
	result *= value.to_i
	end 
	
	is_not_equal = true
end

puts result
