require 'json'
require 'nokogiri'

json = JSON.parse(File.read(ARGV[1]))

file_xml = ARGV[2]
xml = File.open(file_xml) {|f| Nokogiri::XML(f)}
number = 0
ok = xml.xpath('//*')
ok.each do |node|
		nodename = node.name
		json.each do |key , value|
			if nodename == key 
				number+=1
			end
		end
end

puts number*number
