require "csv"

dir=ARGV[0]
number=ARGV[1].to_i
stats=Hash.new(0)

CSV.foreach(dir) do |row|
	user=row[0]
	video=row[1]
	percent=row[2]
	  if !stats.has_key?(user)
	  	stats[user]= Array.new(2) { Array.new(0) }
	  	end
	 stats[user].at(0).insert(0, video)
	 stats[user].at(1).insert(0, percent.to_f)
end
puts stats

case number
when 1
	video_percent=Hash.new
	CSV.foreach(dir) do |row|
		video=row[1]
		percent=row[2]
		if !video_percent.has_key?(video)
	  		video_percent[video]=0
	  	end	  	
	  	video_percent[video]+=percent.to_f
	end
	max=0
	video_percent.each{ |k, v|
		if video_percent[k]>max
			max=video_percent[k]
		end
	}
	puts "#{max.round(2)}"
when 2
	print "hello"
end
