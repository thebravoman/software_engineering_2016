require "csv"

path = ARGV[0]
Dir.foreach(path) do |filename|
	next if !filename.end_with? ".txt"
	filename.gsub!("_", ",").gsub!(".txt", "")
	CSV.open("./result.csv", "ab") do |csv|
		CSV.parse(filename) do |row|
			csv << row
		end
	end
end
