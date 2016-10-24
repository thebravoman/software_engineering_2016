
require "crack"

file1=Hash[(Crack::XML.pars(File.read(ARGV[0])))]
file2=Hash[JSON.pars(File.read(ARGV[1]))]

if (file1!=file2)
	puts 0
else
	puts 1
end
