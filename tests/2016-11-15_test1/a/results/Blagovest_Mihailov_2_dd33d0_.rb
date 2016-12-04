require 'json'
require 'csv'


csv = ARGV[0].to_s
file = File.read(ARGV[1])
json = JSON.parse(file)

product = 0
json.each do |k, v|
	equal = 0
	CSV.foreach(csv) do |row|
		if row[1] == k
			equal = 1
		
		end

	end
	if equal == 0
		product += v.to_i;

	end
end

puts product
