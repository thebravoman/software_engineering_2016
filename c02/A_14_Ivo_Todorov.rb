require "csv.rb"
if !ARGV[0].end_with? "/*"
	directory = Dir.glob(ARGV[0] + "/*")
else
	directory = Dir.glob(ARGV[0])
end
file=CSV.open("result.csv", "wb")
print directory
for i in 0..directory.length-1   
	temp = directory[i].slice!()
	#file << directory[i].split("_")
end

file.close
