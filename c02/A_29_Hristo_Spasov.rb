require "csv" 
files = 0
CSV.open("result.csv", "wb") do |csv|
Dir.foreach(ARGV[0]) do |item|
	puts item
	files += 1
	next if item[0] != 'A' && item[0] !='B'
	info = item.split("_")
	info[3] = info[3].split(".")
	csv << [info[0], info[1], info[2], info[3][0]]
end
end

puts files
