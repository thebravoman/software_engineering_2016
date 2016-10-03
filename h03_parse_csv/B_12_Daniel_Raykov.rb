require 'csv'

path = ARGV[0].to_s
task_number = ARGV[1].to_i
parse_array = Array.new() {Array.new()}


videos_hash = {}

CSV.foreach(path) do |row|
	parse_array << row
end


if task_number == 1 
	parse_array.each do |video|
		
		if videos_hash.key? video[1] then videos_hash[video[1]] += video[2].to_f 
		else videos_hash[video[1]] = video[2].to_f
		end
	end
end


if task_number == 2
	parse_array.each do |video|
		
		if videos_hash.key? video[1] then videos_hash[video[1]] += 1;
		else videos_hash[video[1]] = 1;
		end
	end
end


if task_number == 3
	parse_array.each do |video|

		if videos_hash.key? video[0] then videos_hash[video[0]] += video[2].to_f
		else videos_hash[video[0]] = video[2].to_f 
		end
	end
end

if task_number == 4
	parse_array.each do |video|

		if videos_hash.key? video[0] then videos_hash[video[0]] += 1;
		else videos_hash[video[0]] = 1;
		end
	end
end

tmp_hash = Hash[videos_hash.select {|key, value| value == videos_hash.values.max}]

tmp_hash.each do |key, value|
        if task_number == 2 || task_number == 4 then puts "#{key},#{value}"
        
    	elsif task_number == 1 || task_number == 3 
   
    		if value % 1 != 0 then puts "#{key},#{value.round(2)}"
    		else puts "#{key},#{value.to_i}"
   
    		end
        end
end
