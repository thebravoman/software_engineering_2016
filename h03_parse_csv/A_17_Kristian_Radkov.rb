require 'csv'

data = ARGV[0]
a = ARGV[1].to_i

hesh = Hash.new

 CSV.foreach("data.csv") do |row|
	 
	 case a
		 when 1
		 	hesh[row[1]] = hesh[row[1]].to_f + hesh[row[2]].to_f
		 when 2
		 	hesh[row[1]] = hesh[row[1]].to_i + 1
		 when 3
		 	hesh[row[0]] = hesh[row[0]].to_f + hesh[row[2]].to_f
		 when 4 
			hesh[row[0]] = hesh[row[0]].to_i + 1
	end		
end

 	if a== 1 || a == 3
		puts "#{hesh.key(hesh.values.max)},#{hesh.values.max.round(2)}"
	else
		puts "#{hesh.key(hesh.values.max)},#{hesh.values.max.round(2)}"
end
