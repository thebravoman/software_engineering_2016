require 'csv'
CSV.foreach("data.csv") do |csv_arr|
	checked_files = []
end

file = File.open("data.csv", "r")
contents = file.read
puts contents
