require "nokogiri"
require "json"
 
xml = Nokogiri::XML.parse(File.read(ARGV[0]))
json = JSON.parse(File.read(ARGV[1]))
 
nodes = []
 
xml.xpath("//*").each do |node|
  nodes << node.name if node.name.length <= 3 and !json.has_key?(node.name)
end
 
sum = 0
nodes.each do |element| 
	sum += element.to_s.size
end

puts sum
