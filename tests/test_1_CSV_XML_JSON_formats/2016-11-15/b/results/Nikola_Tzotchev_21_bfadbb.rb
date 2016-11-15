require 'csv'
filepath = ARGV[0];
product = 0
CSV.foreach(filepath) do |row| 
		if row[0].to_i < row[3].to_i && row[2].to_i == row[3].to_i + 3
			 product += row[2].to_i
		end  
end 
puts product
