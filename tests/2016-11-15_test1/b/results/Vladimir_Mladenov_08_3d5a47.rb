require('nokogiri')
require('json')

my_xml = Nokogiri::XML.parse(File.read(ARGV[0].to_s))
my_json = JSON.parse(File.read(ARGV[1].to_s))

total_symbols = 0

my_xml.xpath("//*").each do |node|
	found = false
	if node.name.length <= 3
		my_json.each do |k, v|
			if k == node.name
				found = true
			end
		end
		
		if !found 
			total_symbols += node.name.length
		end
	end
end

puts total_symbols
