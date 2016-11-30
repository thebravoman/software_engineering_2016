require 'csv'

csv_file = ARGV[0]

product = 1
data = {}
are_matches = false
CSV.foreach(csv_file) do |row|
	(1..4).each do |i|
		data.merge!("C#{i}" => row[i-1])
	end
	if ( data["C1"].to_i < data["C4"].to_i && data["C3"].to_i == data["C4"].to_i + 3 )
		are_matches = true
		product *= data["C3"].to_i
	end
end

if are_matches
	puts product
end
