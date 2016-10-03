require 'csv'

filename = ARGV[0].to_s
task     = ARGV[1].to_i

arr = CSV.read(filename)

line_counter = 0
element_counter = 0
max_line_counter = arr.length - 1
max_value = 0

video_hash = Hash[]

if task == 1
	until line_counter > max_line_counter do
		if(video_hash.has_key?(arr[line_counter][1]) == TRUE)
			video_hash[arr[line_counter][1]] = video_hash[arr[line_counter][1]].to_f + arr[line_counter][2].to_f
			video_hash[arr[line_counter][1]] = video_hash[arr[line_counter][1]].round(2)
		else
			video_hash[arr[line_counter][1]] = arr[line_counter][2].to_f
			video_hash[arr[line_counter][1]] = video_hash[arr[line_counter][1]].round(2)
		end
		if video_hash[arr[line_counter][1]].to_f > max_value.to_f
			max_value = video_hash[arr[line_counter][1]]
			max_key = video_hash.key(video_hash[arr[line_counter][1]])
		end
		line_counter+=1
	end
	line_counter = 0
	arr2 = video_hash.max(2)
	if arr2[0][1]==arr2[1][1]
		print arr2[0][0]
		print ","
		puts arr2[0][1]
		print arr2[1][0]
		print ","
		puts arr2[1][1]
	else
		print max_key
		print ","
		if max_value % 1 == 0
			puts max_value.to_i
		else
			puts max_value
		end
	end
elsif task == 2
	until line_counter > max_line_counter do
		if(video_hash.has_key?(arr[line_counter][1]) == TRUE)
			video_hash[arr[line_counter][1]] += 1
		else
			video_hash[arr[line_counter][1]] = 1
		end
		if video_hash[arr[line_counter][1]].to_i > max_value.to_i
			max_value = video_hash[arr[line_counter][1]]
			max_key = video_hash.key(video_hash[arr[line_counter][1]])
		end
		line_counter+=1
	end
	line_counter = 0
	arr2 = video_hash.max(2)
	if arr2[0][1]==arr2[1][1]
		print arr2[0][0]
		print ","
		puts arr2[0][1]
		print arr2[1][0]
		print ","
		puts arr2[1][1]
	else
		print max_key
		print ","
		if max_value % 1 == 0
			puts max_value.to_i
		else
			puts max_value
		end
	end
elsif task == 3
	until line_counter > max_line_counter do
		if(video_hash.has_key?(arr[line_counter][0]) == TRUE)
			video_hash[arr[line_counter][0]] = video_hash[arr[line_counter][0]].to_f + arr[line_counter][2].to_f
			video_hash[arr[line_counter][0]] = video_hash[arr[line_counter][0]].round(2)
		else
			video_hash[arr[line_counter][0]] = arr[line_counter][2].to_f
			video_hash[arr[line_counter][0]] = video_hash[arr[line_counter][0]].round(2)
		end
		if video_hash[arr[line_counter][0]].to_f > max_value.to_f
			max_value = video_hash[arr[line_counter][0]]
			max_key = video_hash.key(video_hash[arr[line_counter][0]])
		end
		line_counter+=1
	end
	line_counter = 0
	arr2 = video_hash.max(2)
	if arr2[0][1]==arr2[1][1]
		print arr2[0][0]
		print ","
		puts arr2[0][1]
		print arr2[1][0]
		print ","
		puts arr2[1][1]
	else
		print max_key
		print ","
		if max_value % 1 == 0
			puts max_value.to_i
		else
			puts max_value
		end
	end
elsif task == 4
	until line_counter > max_line_counter do
		if(video_hash.has_key?(arr[line_counter][0]) == TRUE)
			video_hash[arr[line_counter][0]] += 1
		else
			video_hash[arr[line_counter][0]] = 1
		end
		if video_hash[arr[line_counter][0]].to_i > max_value.to_i
			max_value = video_hash[arr[line_counter][0]]
			max_key = video_hash.key(video_hash[arr[line_counter][0]])
		end
		line_counter+=1
	end
	line_counter = 0
	arr2 = video_hash.max(2)
	if arr2[0][1]==arr2[1][1]
		print arr2[0][0]
		print ","
		puts arr2[0][1]
		print arr2[1][0]
		print ","
		puts arr2[1][1]
	else
		print max_key
		print ","
		if max_value % 1 == 0
			puts max_value.to_i
		else
			puts max_value
		end
	end
else

end
