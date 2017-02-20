require 'crack'

file1 = Crack::XML.parse(File.read(ARGV[0]))
file2 = Crack::JSON.parse(File.read(ARGV[1]))

if file1 == file2
	puts 1
else puts 0
end
