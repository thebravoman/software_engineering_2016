require 'csv'
require 'json'

csvpath = ARGV[0]

myJSON = JSON.parse(File.read(ARGV[1]))

min = 999999

CSV.foreach(csvpath, { :headers => false}) do |row|
	c2 = row[1].to_i
	myJSON.each do |key, value|
		if key.to_i == c2
			if key.to_i < min
				min = c2
			end
		end
	end
end

puts min