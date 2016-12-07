require "csv.rb"

directory = ARGV[0]
csv = CSV.open("result.csv", "w")
$count = 0 
Dir.foreach(directory) do |file|
	#puts item
	next if file =="." or file == ".."
	#puts file
	if(file.match(/[AB]_[1-9][0-9]_\w+_\w+.txt/))
		puts file
		csv << file[/[AB]_[1-9][0-9]_\w+_\w+/].split("_")
		$count = $count + 1
	end
end

puts $count
