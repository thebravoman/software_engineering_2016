require 'csv'
data, output, full_data = ARGV[0], ARGV[1].to_i, Array.new(5) {Hash.new(0.0)}
CSV.foreach(data) do |row|  
	full_data[output][row[ output < 3 ? 1 : 0 ].to_i]+= output % 2 == 1 ? row[2].to_f : 1
end
printf '%i,%g'"\n", *full_data[output].max_by{|k,v| v}
