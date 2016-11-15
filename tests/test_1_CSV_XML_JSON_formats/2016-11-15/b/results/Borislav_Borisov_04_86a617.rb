require 'csv'

data, output, full_data = ARGV[0], ARGV[0].to_i, Hash.new(0.0)

CSV.foreach(data.csv) do |row|
	 
	if data[row[1].to_i] < row[4].to_f then
            puts [C3]
 end           
end 
