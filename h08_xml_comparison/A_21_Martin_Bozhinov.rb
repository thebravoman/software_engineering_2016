require 'json'
require 'crack'

file1 = ARGV[0]
file2 = ARGV[1]

n1 = File.read(file1)
n2 = File.read(file2)

#Hash.from_xml('<variable type="product_code">5</variable>').to_json #=> "{\"variable\":\"5\"}"

comp1 = Crack::XML.parse(n1)
comp2 = Crack::JSON.parse(n2)

if comp1 == comp2
	puts 1;

else 
	puts 0
end

