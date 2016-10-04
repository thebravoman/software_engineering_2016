require 'csv'

file_name, output, data = ARGV[0], ARGV[1].to_i, Hash.new(0)
CSV.foreach(file_name) do |row|
	if output <= 2
		data[row[1]] += (output % 2 == 0)? 1 : row[2].to_f
	else 
  	data[row[0]] += (output % 2 == 0)? 1 : row[2].to_f
	end	
end	
if output % 2 == 0
	printf "%i,%i\n", *data.max_by{|k,v| v}	
else
	printf "%i,%.2f\n", *data.max_by{|k,v| v}
end
