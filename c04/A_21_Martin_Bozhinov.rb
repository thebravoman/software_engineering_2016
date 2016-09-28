require 'csv'

people = []

CSV.foreach(File.path("sample.csv")) do |row|

people << [row[0] + " " + row[1] + " " + row[2]]
	
end

puts people.to_s
