require 'csv'

dir = ARGV[0].to_s

def parse_csv(dir)
	videos = Hash.new()
	
	CSV.foreach(dir) do |row|
		if videos.assoc(row[1].to_i) == nil
			videos.store(row[1].to_i, Hash.new())
		end
		
		videos[row[1].to_i] = {row[0].to_i => row[2].to_f}		
	end
	
	videos
	
end

def video_total_watch(dir)
	videos = parse_csv(dir)
	video_watches = Hash.new()
	

	
	videos.each() do |k, v|
		if video_watches.assoc(k) == nil
			video_watches.store(k, 0)
		end
		
		video_watches[k] += v.values.first.to_f
		
	end
	
	video_watches.each() do |k, v|
		puts "#{k} ==> #{v}"
	end
	
end

video_total_watch(dir)
