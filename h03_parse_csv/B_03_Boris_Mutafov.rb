require 'csv'
data, output, percent_watched,  user_percent_watched, times_watched, user_times_watched  = ARGV[0], ARGV[1].to_i, Hash.new(0.0), Hash.new(0.0), Hash.new(0), Hash.new(0)
CSV.foreach(data) do |row|
	  percent_watched[row[1].to_i]+=row[2].to_f if output == 1
	  times_watched[row[1].to_i]+=1 if output == 2
	  user_percent_watched[row[0].to_i]+=row[2].to_f if output == 3
	  user_times_watched[row[0].to_i]+=1 if output ==4 
end
result = (percent_watched.max_by{|k,v| v} if output == 1 ) || (times_watched.max_by{|k,v| v} if output === 2 ) || (user_percent_watched.max_by{|k,v| v} if output == 3) || (user_times_watched.max_by{|k,v| v} if output == 4 ) || "Error"
output == 1 ? printf("%i,%.2f", result[0], result[1]) : output == 3 ? printf("%i,%.1f", result[0], result[1]) : printf("%i,%i", result[0], result[1])
