require 'nokogiri'
require 'json'

xmlfile  = Nokogiri::XML.parse(File.read(ARGV[0].to_s))
jsonfile = JSON.parse(File.read(ARGV[1].to_s))

sum = 0
nodes = []

xmlfile.xpath("//*").each do |node|
	node.attributes.each_value do |attr|
	attr = attr.to_s
	nodes << attr if attr.length <= 3 && !jsonfile.has_key?(attr)
	end
	nodes << node.name if node.name.length <= 3 && !jsonfile.has_key?(node.name)
	nodes << node.inner_text if node.inner_text.length <= 3 && !jsonfile.has_key?(node.inner_text)
end

puts
puts 'd'.ord
puts 'e'.ord
 
puts nodes
puts
 
nodes.each{|element| sum += element.split("").map{|s| s.ord}.inject(:+)} 
puts sum
