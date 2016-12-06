require 'csv'
require	'json'

my_json = JSON.parse(File.read(ARGV[0].to_s))

product = 1

my_json.each do |key, value|
	present = false
	
	CSV.foreach(ARGV[1]) do |row|
		if key.to_s == row[1].to_s
			present = true
			break
		end
	end
	
	if not present
		product *= value.to_i
	end
end

puts product
