require 'json'
require 'nokogiri'

json = JSON.parse(File.read(ARGV[0]))
xml = Nokogiri::XML(File.open(ARGV[1]))

counter = 0
keys = json.keys
i = 0

while (i < keys.count)
        #puts keys[i]
        xml.xpath(keys[i]).each do |item|
        #puts item.content
        #xml.xpath(keys[i]).each do |item|
            if (item.content.to_s == keys[i].to_s)
                    counter += 1
                end
        end
        i += 1
end
puts counter ** 2

