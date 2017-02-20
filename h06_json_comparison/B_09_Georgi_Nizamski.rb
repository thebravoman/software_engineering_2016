require 'json'

f_hash = JSON.parse(File.read(ARGV[0].to_s))
s_hash = JSON.parse(File.read(ARGV[1].to_s))

def is_shematic_equal?(first_json, second_json)
	if first_json == second_json then return 1
	else return 0
	end
end

puts is_shematic_equal?(f_hash,s_hash)
