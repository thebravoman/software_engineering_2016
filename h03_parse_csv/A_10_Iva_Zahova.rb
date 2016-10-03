require "csv"

dir = ARGV[0]
task = ARGV[1].to_i

if task>=1 && task<=4

stats, data = Hash.new, Hash.new(0)

CSV.foreach(dir) do |row|
	user = row[0]
	video = row[1]
	percent = row[2]

	if !stats.has_key?(user)
		stats[user] =  Array.new(2) { Array.new(0) }
  	end
	  	
	 stats[user].at(0).insert(0, video)
	 stats[user].at(1).insert(0, percent.to_f)
end

case task
	when 1
		stats.values.each { |vp| 
			video = vp.at(0) 
			percent = vp.at(1)

			video.each_with_index{ |v, i| data[video.at(i)] += percent.at(i)}
		}
	when 2
		stats.each_value{ |v| v.at(0).each{ |value| data[value] += 1}}
	when 3
		stats.each { |user,value| data[user] += value.at(1).inject(:+)}
	when 4
		stats.each { |user,value| data[user] += value.at(0).length}
end

if task == 1
	print "#{data.key(data.values.max)},"
	if data.values.max % 1 == 0
		print "#{data[data.key(data.values.max)].to_i}\n"
	else
		print "#{"%.2f" %data.values.max.round(2)}\n"
	end

end

if task == 2
	print "#{data.key(data.values.max)},#{data.values.max}\n"
end

if task == 3
	print "#{data.key(data.values.max)},"
	if data.values.max % 1 == 0
		print "#{data[data.key(data.values.max)].to_i}\n"
	else
		print "#{"%.2f" %data.values.max.round(2)}\n"
	end
end

if task == 4
	print "#{data.key(data.values.max)},#{data.values.max}\n"
end

end
