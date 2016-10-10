require 'json'

json1 = File.read(ARGV[0])
json2 = File.read(ARGV[1])

json1_parse=JSON.parse(json1)
json2_parse=JSON.parse(json2)

if json1_parse == json2_parse	
	puts 1
else 
	puts 0
end
