require 'json'

file_1 = File.read(ARGV[0])
file_2 = File.read(ARGV[1])

data_1 = JSON.parse(file1)
data_2 = JSON.parse(file2)

if data_1 == data_2
	puts 1
else
	puts 0
end
