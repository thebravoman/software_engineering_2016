require "csv"
require "json"

dir = ARGV[0]
command = ARGV[1].to_i

stats, data = Hash.new, Hash.new(0)
VIDEO = 0; PERCENT = 1

CSV.foreach(dir) do |row|
	user, video, percent = row[0], row[1], row[2]

    if !stats.has_key?(user)
  		stats[user] =  Array.new(2) { Array.new(0) }
  	end
	  	
	 stats[user].at(VIDEO).insert(0, video)
	 stats[user].at(PERCENT).insert(0, percent.to_f)
end

case command
	when 1
		stats.values.each { |vp| 
			video = vp.at(VIDEO) 
			percent = vp.at(PERCENT)

			video.each_with_index{ |v, i| data[video.at(i)] += percent.at(i)}
		}
	when 2
		stats.each_value{ |v| v.at(VIDEO).each{ |value| data[value] += 1}}
	when 3
		stats.each { |user,value| data[user] += value.at(PERCENT).inject(:+)}
	when 4
		stats.each { |user,value| data[user] += value.at(VIDEO).length}
end

Hash[data.select{ |k, v| v == data.values.max}].each{ |k,v| 

	puts JSON.parse('{"video_id": "goodbye"}')

	if command == 1 || command == 3
		max = data.values.max

		if max % 1 == 0
			puts "#{data.key(data.values.max)},#{max.to_i}"
		elsif 
			puts "#{data.key(data.values.max)},#{max.round(2)}"
		end
	elsif command == 2 || command == 4
		puts "#{data.key(data.values.max)},#{data.values.max}"
	end
}
