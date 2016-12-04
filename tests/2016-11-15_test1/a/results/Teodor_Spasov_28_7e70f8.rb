require 'crack'
require 'json'

hash_xml=Crack::XML.parse(File.read(ARGV[0]))
hash_json=JSON.parse(File.read(ARGV[1]))
equal_names=0

class Hash

	def get_all_keys
		[].tap do |result|
			result << keys
			values.select { |v|
v.respond_to?(:get_all_keys) }.each do |value|
				result << value.get_all_keys
			end
		end.flatten
	end
end

all_json_keys=hash_json.get_all_keys
all_xml_keys=hash_xml.get_all_keys

for i in 0..all_xml_keys.size-1
	for l in 0..all_json_keys.size-1
		if all_xml_keys[i]==all_json_keys[l]
			equal_names+=1
		end
	end
end

puts equal_names**2

			
