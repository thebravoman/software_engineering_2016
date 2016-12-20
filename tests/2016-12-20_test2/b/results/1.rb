require 'csv'
require 'json'
 
csv_file = ARGV[0]
json_file = File.read(ARGV[1])
json_hash = JSON.parse(json_file)
product = 0;
first_time = 0

 
json_hash.each do |k, v|
 
    CSV.foreach(csv_file) do |row|
    
    	if first_time == 0 then 
    		product = v 
    		first_time = 1
		end
 
        if k =~ row[1] then
        	if product > v then
            	product = v
            end
        end
 
    end
end
 
puts product
