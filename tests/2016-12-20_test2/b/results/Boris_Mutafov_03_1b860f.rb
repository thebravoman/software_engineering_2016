require "json"
require 'csv'

csv = ARGV[0].to_s
json_path = ARGV[1].to_s

json = JSON.parse(File.read(json_path))

first = false
min = 0

CSV.foreach(csv) do |row|
	json.each do |val|
		if first == false then
			if val.first.to_s == row[1].to_s then
				min = val[1]
				first = true
			end
		end
		
		if first == true then
			if val.first.to_s == row[1].to_s && min.to_i > val[1].to_i then
				min = val[1]
			end
		end
	end
end

puts min

