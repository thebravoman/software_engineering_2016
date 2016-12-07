myFile = File.new("results.csv", "w+")
if myFile
	puts Dir.glob("../c01_introduction/*.txt").length
	Dir.glob("../c01_introduction/*.txt") do |file|
		name = File.basename file, ".txt"
		name.split("").each do |i|
			if i=='_'
				name[i]=','
			end
		end
		myFile.syswrite(name)
		myFile.syswrite("\n")
		puts name
	end
	myFile.close
else
	puts "Unable to open file!"
end