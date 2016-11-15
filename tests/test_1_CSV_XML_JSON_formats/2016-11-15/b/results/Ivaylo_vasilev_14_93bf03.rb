require 'crack' 

result = 0

xml_result = Crack::XML.parse(File.read(ARGV[1]))
json_result = Crack::JSON.parse(File.read(ARGV[2]))

foreach(data) do |row|
	
		if (row.xml_result == json_result.keys)
			result++
		end
end
	
square = result*result
printf("%d",square)
end



