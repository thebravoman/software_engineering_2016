require "csv"

data = []

CSV.foreach(ARGV[0], :headers => true) do |row|
	data.push([row["user"], row["video"], row["watch_time"]])
end

videos = []

data.each do |info|
	video = { :id => info[1], :watch_time => info[2].to_f }
	index = videos.index { |v| v[:id] == video[:id] }
	if  index == nil
		videos.push(video)
	else
		videos[index][:watch_time] += video[:watch_time]
	end
end

videos.sort_by! { |v| -v[:watch_time] }

puts "#{videos[0][:id]},#{sprintf('%.2f', videos[0][:watch_time])}"
