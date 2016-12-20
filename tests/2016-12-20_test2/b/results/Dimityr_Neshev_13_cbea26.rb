
require 'csv'

csv=ARGV[0]

result=1

CSV.foreach(csv) do |row|
	if /^[0-9]$/.match(row[1].to_s) && row[0].to_i > 17 

	result*=row[2].to_i
	end
end

if result==1
	puts 0
else
puts result
end
