require 'csv'

data_csv = ARGV[0]
a = ARGV[1].to_i

most_watched_sum = Hash.new
most_watched_times = Hash.new
most_watched_user_sum = Hash.new
user_most_watched_times = Hash.new

case a
	when 1
		CSV.foreach(data_csv) do |row|
			most_watched_sum[row[1]] = most_watched_sum[row[1]].to_f + most_watched_sum[row[2]].to_f
		end
	puts "#{most_watched_sum.key(most_watched_sum.values.max)},#{most_watched_sum.values.max.round(2)}"
	when 2
		CSV.foreach(data_csv) do |row|			
			most_watched_times[row[1]] = most_watched_times[row[1]].to_f + 1
		end
	puts "#{most_watched_times.key(most_watched_times.values.max)},#{most_watched_times.values.max.round(2)}"
	when 3
		CSV.foreach(data_csv) do |row|			
			most_watched_user_sum[row[0]] = most_watched_user_sum[row[0]].to_f + most_watched_user_sum[row[2]].to_f			
		end
	puts "#{most_watched_user_sum.key(most_watched_user_sum.values.max)},#{most_watched_user_sum.values.max.round(2)}"
	when 4
		CSV.foreach(data_csv) do |row|		
			user_most_watched_times[row[0]] = user_most_watched_times[row[0]].to_f + 1			
	end
	puts "#{user_most_watched_times.key(user_most_watched_times.values.max)},#{user_most_watched_times.values.max}"
end
 