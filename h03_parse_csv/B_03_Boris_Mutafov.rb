require 'csv'

data, output, full_data = ARGV[0], ARGV[1].to_i, Hash.new(0.0)

CSV.foreach(data) do |row|
	index = output < 3 ? 1 : 0 
	user_or_video = row[ index ]
	percent_or_times = output % 2 == 1 ? row[2].to_f : 1
	full_data[user_or_video] += percent_or_times
end
printf output % 2 == 1 ? "%i,%.2f\n" : "%i,%i\n", *full_data.max_by{|k,v| v}
