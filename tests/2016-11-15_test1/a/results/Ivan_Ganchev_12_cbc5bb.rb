require 'csv'

	file = ARGV[0]
	sum = 0
	
CSV.foreach(file) do |row|

	if row[0].to_i > 17  &&  row[1].include?("tues")
		 sum += row[2].to_i
	end
	
end

puts sum
