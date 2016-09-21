puts Dir.glob("/home/nikolay/Desktop/elsys/software_engineering_2016/c01_introduction/*.txt").length;
Dir.glob("/home/nikolay/Desktop/elsys/software_engineering_2016/c01_introduction/*.txt") do |file|
	name = File.basename file, ".txt"
	name.split("").each do |i|
		if i=='_'
			name[i]=',';
		end
	end
	puts name
end