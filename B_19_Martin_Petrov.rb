var=0
Dir.foreach("/home/elsyser/software_engineering_2016/c01_introduction") do |file|
	if file.start_with?('A','B') then 
		var = var + 1	
		puts file.chomp('.txt').split("_").join(",") 
	end
	var
end
puts var

