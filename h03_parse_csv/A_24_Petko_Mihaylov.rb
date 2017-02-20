require "csv"

a=ARGV[0].to_s
task=ARGV[1].to_i

def most_common_value(b)
	b.group_by do |e| e
	end.values.max_by(&:size).first
end

user_num = []
CSV.foreach(a) { |row| user_num << row[0] }
video_num = []
CSV.foreach(a) { |row| video_num << row[1] }
percentage_view = []
CSV.foreach(a) { |row| percentage_view << row[2] }

user_most_w=most_common_value(user_num).to_i
video_watched_most=most_common_value(video_num).to_i
size=user_num.length.to_i

u=user_num
v=video_num
p=percentage_view

read_file=CSV.read(ARGV[0])

if task == 1
	pv = Array.new(size,0)
	for i in 0..size
		pv[v[i].to_i] += p[i].to_f;
	end
	most_watched = 0
	how_much_w = pv[0].to_f
	for i in 0..size
		if pv[i].to_f > how_much_w
			most_watched_perc = i
			how_much_w = pv[i].to_f
		end
	end
	print "#{most_watched_perc},#{how_much_w.round(2)}"

end

if task == 2
	v = Array.new(size, 0)
	how_much_seen = 0
	for i in 0..size
		if video_watched_most == video_num[i].to_i
			how_much_seen += 1
		end
	end
	print "#{video_watched_most},#{how_much_seen}"
end

if task == 3

end

if task == 4
	u = Array.new(size, 0)
	videos_watched = 0
	for i in 0..size
		if user_most_w == user_num[i].to_i
			videos_watched += 1
		end
	end
	print "#{user_most_w},#{videos_watched}"
end
