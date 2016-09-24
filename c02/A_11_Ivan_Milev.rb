path = ARGV #"/home/imilev/ivan/tehnPo/software_engineering_2016/c01_introduction/*"
myFile = File.new("result.csv", "w");
if myFile
	puts Dir.glob(path).length;
	Dir.glob(path) do |file|
		filename = File.basename file, ".txt"
		puts filename
		filename.split("").each do|element|
			if element == '_'
				filename[element] = ','
			end
		end
		myFile.syswrite(filename)
		myFile.syswrite("\n")
	end
else
	puts "The directory wasn't found able to open. Check the path!"
end

# YEY :) IT WORKS
