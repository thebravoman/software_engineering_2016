require 'json'
require 'csv'

passed_k=[]
numbers=[]
hash=JSON.parse(File.read(ARGV[1]))
CSV.foreach(ARGV[0]) do |row|
	key=row[1]
	if hash.has_key?(key) and !passed_keys.include? key
		numbers << hash[key].to_i
		passed_keys << key
	end
end
puts numbers.min
