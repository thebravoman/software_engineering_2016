require 'json'

#Parsing files from JSON to Hash

f_hash = JSON.parse(File.read(ARGV[0].to_s))
s_hash = JSON.parse(File.read(ARGV[1].to_s))

def is_shematic_equal (first, second)
	#Check keys
	is_keys_equal = (first.keys).uniq == (second.keys).uniq
	
	#Check values
	is_values_equal = (first.values).uniq == (second.values).uniq
	
	if is_keys_equal && is_values_equal then return 1
	else return 0
	end
end

puts is_shematic_equal(f_hash,s_hash)
