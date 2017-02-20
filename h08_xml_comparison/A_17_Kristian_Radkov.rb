require 'json'
require 'crack'
require 'rubygems'

	file_1 = File.read(ARGV[0])
	file_2 = File.read(ARGV[1])

	data_2 = JSON.parse(file_2)
	data_1 = Crack::XML.parse(file_1)

	if data_1 == data_2
		puts 1
	else 
		puts 0
end
