require 'csv'
data, output, full_data = ARGV[0], ARGV[1].to_i, Hash.new(0.0)
CSV.foreach(data) do |row|  
	full_data[row[ output < 3 ? 1 : 0 ]]+= output % 2 == 1 ? row[2].to_f : 1
end
printf "%i,%g\n", *full_data.max_by{|k,v| v}
