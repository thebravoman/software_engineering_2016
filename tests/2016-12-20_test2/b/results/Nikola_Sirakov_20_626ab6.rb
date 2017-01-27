require 'json'
require 'csv'

json = JSON.parse(File.read(ARGV[1]))

product = 0

json.each {|key, value|
	found = 0
	CSV.foreach(ARGV[0]) do |row| 
		
		if row[1] == key
			found = 1
			break
		end
	end
	
	if found == 0
		product = product == 0 ? value.to_i : product*=value.to_i	
	end
}

puts product
