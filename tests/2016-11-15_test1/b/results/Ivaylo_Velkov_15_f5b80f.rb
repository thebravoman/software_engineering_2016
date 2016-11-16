require 'csv'

file = CSV.parse(ARGV[0])
sum1 = 0

CSV.foreach(file) do |row|
	sum += row[0]
	if(sum > 17 && row[1] >= 0 && row[1] <= 9)
			sum1 += row[3]
	end
end

puts sum1
