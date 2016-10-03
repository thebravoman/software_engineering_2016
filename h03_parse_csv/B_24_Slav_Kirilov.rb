require 'csv'
data, output, percent_watched,  user_percent_watched, times_watched, user_times_watched  = ARGV[0], ARGV[1], Hash.new(0.0), Hash.new(0.0), Hash.new(0), Hash.new(0)
CSV.foreach(data) do |row|
	case output.to_i
	  when 1 then percent_watched[row[1].to_i]+=row[2].to_f
	  when 2 then times_watched[row[1].to_i]+=1
	  when 3 then user_percent_watched[row[0].to_i]+=row[2].to_f
	  when 4 then user_times_watched[row[0].to_i]+=1
	end
end
case output.to_i
	when 1 then printf('%i,%.2f' "\n", *percent_watched.max_by{|k,v| v})
	when 2 then printf('%i,%i'   "\n", *times_watched.max_by{|k,v| v})
	when 3 then printf('%i,%.2f' "\n", *user_percent_watched.max_by{|k,v| v})
	when 4 then printf('%i,%i'   "\n", *user_times_watched.max_by{|k,v| v})
end
