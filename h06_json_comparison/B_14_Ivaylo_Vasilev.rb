require 'json'

file1 = ARGV[0]
file2 = ARGV[1]
f_file1 = File.read(file1)
f_file2 = File.read(file2)
data_file1 = JSON.parse(f_file1)
data_file2 = JSON.parse(f_file2)
if data_file1 == data_file2 then
	puts "1"
else puts "0"
end
