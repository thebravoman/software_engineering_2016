require 'json'
file_name=ARGV[0]
file_name2=ARGV[1]
file=File.read(file_name)
file2=File.read(file_name2)
file_p=JSON.parse file
file2_p=JSON.parse file2
if file_p==file2_p	
	puts 1
else 
	puts 0
end
