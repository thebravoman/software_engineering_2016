require 'nokogiri'
require 'json'

json = JSON.parse(File.read(ARGV[0]))
xml = Nokogiri::XML(File.read(ARGV[1]))

result = 0
br = 0

xml.xpath("//*").each do |node|
	json.each do |key, value|
		if key == node
			br = 1
		end
	end
	
	if br == 0 && xml.xpath("//*").size <= 3
		result += xpath("//*").size
	end
	
	br = 0
	
end

puts result
