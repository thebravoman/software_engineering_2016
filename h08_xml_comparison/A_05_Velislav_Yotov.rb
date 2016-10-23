require 'rubygems'

require 'json'

require 'crack'

file_name=ARGV[0]

file_name2=ARGV[1]

file=File.read(file_name)

file2=File.read(file_name2)

file_p=Crack::XML.parse(file)

file_p2=JSON.parse(file2)

if(file_p==file_p2)

	puts 1

else 

	puts 0

end
