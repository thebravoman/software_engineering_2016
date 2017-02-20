require 'csv'
data = ARGV[0]
output = ARGV[1].to_i
percent_watched = Hash.new(0.0)
user_percent_watched = Hash.new(0.0)
times_watched = Hash.new(0.0)
user_times_watched = Hash.new(0.0)
CSV.foreach(data) do |row|
	vid = row [ 0 ].to_i
	id = row [ 1 ].to_i
	percents = row [ 2 ].to_f
	case output
	  when 1 then percent_watched [ id ] += percents
	  when 2 then times_watched [ id ] += 1
	  when 3 then user_percent_watched [ vid ] += percents
	  when 4 then user_times_watched [ vid ] += 1
	end
end
case output
	when 1 then
		result = percent_watched.max_by{|k,v| v}
		print result[0],',',result[1].round(2), "\n"
	when 2 then 
		result = times_watched.max_by{|k,v| v}
		print result[0],',',result[1].to_i,"\n"
	when 3 then
		result = user_percent_watched.max_by{|k,v| v}
		print result[0],',',result[1].round(2),"\n"
	when 4 then 
		result = user_times_watched.max_by{|k,v| v}
		print result[0],',',result[1].to_i,"\n"
end
