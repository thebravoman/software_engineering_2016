File.open('file.txt', 'w') do |file| 	
	('a'*6 ..'z'*6).each do |x| 
		file.write(x)  
 		file.write("\n")
	end
end
