require 'json'
require 'crack'

json = JSON.parse(File.read(ARGV[1]))
xml = Crack::XML.parse(File.read(ARGV[2]))
json = json.keys
xml = xml.fetch(xml.keys[0]).keys

counter = 0
result = 0

while counter < xml.count do
    m = 0
    help = 0
    if(xml[counter].bytesize <= 3) then
		while m < json.count do
		    if xml[counter] != json[m]
		        help += 1
		    end
		    m += 1
		end
		if help == json.count then
			result += xml[counter].bytesize
		end
    end
    counter += 1
end

puts result
