require 'nokogiri'
require 'json'
sml = ARGV[0]
doc = File.open(sml) { |f| Nokogiri::XML(f) }
leaves = doc.xpath('//*')
leaves.each do |node|
  puts node.name.size 
end
