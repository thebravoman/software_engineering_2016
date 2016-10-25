
require "crack"

file1=Hash[(Crack::XML.parse(File.read(ARGV[0])))]
file2=Hash[JSON.parse(File.read(ARGV[1]))]

if (file1!=file2)
	puts 0
else
	puts 1
end
