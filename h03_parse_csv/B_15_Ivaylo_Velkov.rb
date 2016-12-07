require 'csv' 

file = ARGV[0]
task = ARGV[1].to_i
hash = Hash.new(0.0)

CSV.foreach(file) do |row| 
	case task
		when 1 then hash[row[1]]+=row[2].to_f
		when 2 then hash[row[1]]+=row[2] == 0 ? 0 : 1
		when 3 then hash[row[0]]+=row[2].to_f
		when 4 then hash[row[0]]+=row[2] == 0 ? 0 : 1
	end		
end

puts task % 2 == 0 ? "#{hash.key(hash.values.max)},#{hash.values.max.to_i}" : "#{hash.key(hash.values.max)}," + "%.2f"%hash.values.max



	
