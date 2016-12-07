require 'csv'

dir = ARGV[0].to_s

def parse_csv(dir)
	videos = Hash.new()
	
	CSV.foreach(dir) do |row|
		if videos.assoc(row[1].to_i) == nil
			videos = {row[1].to_i => Hash.new()}
		end
		
		videos[row[1].to_i] = {row[0].to_i => row[2].to_f}		
	end
	
	puts videos.keys
	videos
	
end

def video_total_watch(dir)
	videos = parse_csv(dir)
	video_watches = Hash.new()
	

	
	videos.each() do |k, v|
		puts "#{k} ==> #{v}"
		total_watch_counter = 0
		
		v.each() do |key, value|
			total_watch_counter += value.to_f
		end
		
		if video_watches.assoc(k.to_i) == nil
			video_watches = {k.to_i => total_watch_counter}
		end
				
	end
	
	video_watches.each() do |k, v|
		puts "#{k} ==> #{v}"
	end
	
end

video_total_watch(dir)
