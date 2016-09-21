csv = CSV.new()

puts Dir.glob("/home/imilev/ivan/tehnPo/software_engineering_2016/c01_introduction/*").length;
Dir.glob("/home/imilev/ivan/tehnPo/software_engineering_2016/c01_introduction/*") do |file|
	filename = File.basename file, ".txt"
	filename.split("").each do|element|
		if element == '_'
			filename[element] = ','
		end
	end
	puts filename
end
# puts File.basename("../co1_introduction/*");
