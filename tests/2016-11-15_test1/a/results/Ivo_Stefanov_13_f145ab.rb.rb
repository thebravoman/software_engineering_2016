require "nokogiri"
require "json"
 
xml = Nokogiri::XML.parse(File.read(ARGV[0]))
json = JSON.parse(File.read(ARGV[1]))
 sum = 0
 
xml.xpath("//*").each do |node|
  if json.has_key?(node.name)
  	sum+=1
  end
end
 
puts sum*sum
