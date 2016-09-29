require 'csv'
data, output, universal = ARGV[0], ARGV[1].to_i, Array.new(5) {Hash.new(0.0)}
CSV.foreach(data) do |row|
	  universal[output][row[ output == 1 || output == 2 ? 1 : 0 ].to_i]+= output == 1 || output == 3 ? row[2].to_f : output == 4 ? 1 : output == 2 ? 1 : 0
end
puts String(universal[output].max_by{|k,v| v}[0].to_i) << ',' << String(output == 1 ? universal[output].max_by{|k,v| v}[1].round(2) : output == 2 || output == 4 ? universal[output].max_by{|k,v| v}[1].to_i : universal[output].max_by{|k,v| v}[1])
