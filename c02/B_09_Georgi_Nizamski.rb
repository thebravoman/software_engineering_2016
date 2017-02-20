require 'csv'

#Enter directory
dir = ARGV[0].to_s;

files = Array.new

files = Dir.entries(dir).sort!

CSV.open("result.csv", "w") do |csv|
	csv << ["Class","Number","FirstName","LastName"]
end

for file in files 

	tmp = File.basename(file.to_s,".*").split("_")
	CSV.open("result.csv", "a+") do |csv| 
		if tmp[0] == 'A' || tmp[0] == 'B' then csv << [tmp[0],tmp[1],tmp[2],tmp[3]] end
	 end
end



