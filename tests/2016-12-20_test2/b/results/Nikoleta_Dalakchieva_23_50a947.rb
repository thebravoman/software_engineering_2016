require 'csv'
require 'matrix'
file = ARGV[0]
sum = 0

CSV.foreach(file) do |row|
	if row[0].to_i > 17 then 
		if row[1].include? "digit" 
		else 
			sum += row[2].to_i 
		end
	end
end
puts sum
