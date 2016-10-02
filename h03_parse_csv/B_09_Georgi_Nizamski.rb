require 'csv'

path = ARGV[0].to_s
task_number = ARGV[1].to_i
parse_array = Array.new() {Array.new()}


videos_hash = {}

#Parse data.csv to 2D array

CSV.foreach(path) do |row|
	parse_array << row
end


if task_number == 1 
	parse_array.each do |video|
		
		if videos_hash.key? video[1] then videos_hash[video[1]] += video[2].to_f 
		else videos_hash[video[1]] = video[2].to_f
		end
	end
	puts "#{videos_hash.key(videos_hash.values.max)}," + "%.2f" % videos_hash.values.max
	
end


if task_number == 2
	parse_array.each do |video|
		
		if videos_hash.key? video[1] then videos_hash[video[1]] += 1;
		else videos_hash[video[1]] = 1;
		end
	end
	puts "#{videos_hash.key(videos_hash.values.max)},#{videos_hash.values.max}"

end


if task_number == 3
	parse_array.each do |video|

		if videos_hash.key? video[0] then videos_hash[video[0]] += video[2].to_f
		else videos_hash[video[0]] = video[2].to_f 
		end
	end
	puts "#{videos_hash.key(videos_hash.values.max)}," + "%.2f" % videos_hash.values.max

end

if task_number == 4
	parse_array.each do |video|

		if videos_hash.key? video[0] then videos_hash[video[0]] += 1;
		else videos_hash[video[0]] = 1;
		end
	end
	puts "#{videos_hash.key(videos_hash.values.max)},#{videos_hash.values.max}"

end