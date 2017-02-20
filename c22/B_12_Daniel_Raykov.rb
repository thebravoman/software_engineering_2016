require 'csv'
require 'json'

csv = ARGV[0]
json = JSON.parse(File.read(ARGV[1]))

i = 0
r = 1
c = 1

json.each do |key, value|
	CSV.foreach(csv) do |row|
		if key == row[1] then c = 0 end
	end
	
	if c == 1 then r *= value.to_i end
	c = 1
end

puts r
